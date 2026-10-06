require("dotenv").config();

const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");


const app = express();
const PORT = Number(process.env.PORT || 3000);

// Lightweight abuse protection for public OTP endpoints. For multi-instance production,
// replace this map with a shared rate limiter (Redis/Upstash/etc.).
const requestBuckets = new Map();
function otpRateLimit(req,res,next){
    const key = String(req.ip || req.headers["x-forwarded-for"] || "unknown").split(",")[0].trim();
    const now = Date.now(); const windowMs = 10 * 60 * 1000; const max = 8;
    const item = requestBuckets.get(key);
    if (!item || now - item.start >= windowMs) { requestBuckets.set(key,{start:now,count:1}); return next(); }
    item.count += 1;
    if (item.count > max) return res.status(429).json({error:"Bạn gửi quá nhiều yêu cầu. Vui lòng thử lại sau."});
    next();
}
setInterval(()=>{const now=Date.now();for(const [k,v] of requestBuckets)if(now-v.start>10*60*1000)requestBuckets.delete(k)},10*60*1000).unref();

/* =========================
   PROTECT PRIVATE FILES BEFORE STATIC SERVING
   ========================= */
app.use((req, res, next) => {
    const requestPath = String(req.path || "").toLowerCase();
    const forbiddenExact = new Set([
        "/.env",
        "/serviceaccountkey.json",
        "/firebase-service-account.json"
    ]);

    if (
        forbiddenExact.has(requestPath) ||
        requestPath.startsWith("/secrets/") ||
        requestPath.includes("firebase-adminsdk") ||
        requestPath.split("/").some(part => part.startsWith("."))
    ) {
        return res.status(404).send("Not found");
    }

    next();
});

app.disable("x-powered-by");
app.use((req,res,next)=>{
    if (!req.path.startsWith("/api/")) return next();

    const requestOrigin = String(req.headers.origin || "").trim();
    const allowedOrigins = String(process.env.FRONTEND_ORIGIN || "")
        .split(",")
        .map(v => v.trim().replace(/\/$/, ""))
        .filter(Boolean);

    // Cho phép Live Server/VsCode chạy local frontend (:5500) gọi backend (:3000).
    // Production vẫn nên cấu hình FRONTEND_ORIGIN rõ ràng trên Vercel.
    if (process.env.NODE_ENV !== "production") {
        allowedOrigins.push(
            "http://localhost:5500",
            "http://127.0.0.1:5500",
            "http://localhost:3000",
            "http://127.0.0.1:3000"
        );
    }

    // Same-origin requests do not need CORS.
    // For GitHub Pages -> Vercel, set FRONTEND_ORIGIN to the exact GitHub Pages origin.
    if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
        res.setHeader("Access-Control-Allow-Origin", requestOrigin);
        res.setHeader("Vary", "Origin");
        res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    }

    if (req.method === "OPTIONS") {
        if (!requestOrigin || allowedOrigins.includes(requestOrigin)) return res.sendStatus(204);
        return res.status(403).json({ error: "Origin không được phép." });
    }

    next();
});

app.use((req,res,next)=>{
    res.setHeader("X-Content-Type-Options","nosniff");
    res.setHeader("Referrer-Policy","strict-origin-when-cross-origin");
    res.setHeader("X-Frame-Options","SAMEORIGIN");
    res.setHeader("Permissions-Policy","camera=(), microphone=(), geolocation=(), payment=()");
    res.setHeader("Cross-Origin-Opener-Policy","same-origin-allow-popups");
    if (req.secure || req.headers["x-forwarded-proto"] === "https") res.setHeader("Strict-Transport-Security","max-age=31536000; includeSubDomains");
    next();
});

app.use(express.static(__dirname, {
    dotfiles: "deny",
    index: "index.html",
    fallthrough: true
}));

/* =========================
   FIREBASE ADMIN
   ========================= */

function findServiceAccount() {
    const candidates = [
        path.join(__dirname, "secrets", "firebase-service-account.json"),
        path.join(__dirname, "firebase-service-account.json"),
        ...fs.readdirSync(__dirname)
            .filter(name =>
                name.toLowerCase().includes("firebase-adminsdk") &&
                name.toLowerCase().endsWith(".json")
            )
            .map(name => path.join(__dirname, name))
    ];

    for (const file of candidates) {
        if (fs.existsSync(file)) return file;
    }
    return null;
}

function loadFirebaseAdminCredential() {
    // Production/Vercel: use an environment variable instead of uploading
    // a Firebase service-account JSON file to GitHub.
    if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
        try {
            return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
        } catch (error) {
            throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON không phải JSON hợp lệ.");
        }
    }

    // Alternative: three Vercel environment variables.
    if (
        process.env.FIREBASE_PROJECT_ID &&
        process.env.FIREBASE_CLIENT_EMAIL &&
        process.env.FIREBASE_PRIVATE_KEY
    ) {
        return {
            project_id: process.env.FIREBASE_PROJECT_ID,
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            private_key: String(process.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, "\n")
        };
    }

    const serviceAccountFile = findServiceAccount();
    if (serviceAccountFile) {
        return JSON.parse(fs.readFileSync(serviceAccountFile, "utf8"));
    }

    return null;
}

let firebaseReady = false;
let firebaseAuth = null;
let firebaseConfigSource = null;
let firebaseConfigError = null;

try {
    const serviceAccount = loadFirebaseAdminCredential();

    if (serviceAccount) {
        firebaseConfigSource = process.env.FIREBASE_SERVICE_ACCOUNT_JSON ? "FIREBASE_SERVICE_ACCOUNT_JSON" :
            (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY ? "3 biến Firebase" : "secrets/firebase-service-account.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });

        firebaseAuth = admin.auth();
        firebaseReady = true;

        console.log("✅ Firebase Admin: OK");
    } else {
        console.log("⚠️ Firebase Admin: CHƯA CẤU HÌNH");
        console.log("   Vercel: đặt FIREBASE_SERVICE_ACCOUNT_JSON hoặc");
        console.log("   FIREBASE_PROJECT_ID/FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY.");
    }
} catch (error) {
    firebaseConfigError = error.message;
    console.error("❌ Firebase Admin lỗi:", error.message);
}

app.use(express.json({ limit: "100kb" }));

/* =========================
   SMTP
   ========================= */

let transporter = null;
let smtpReady = false;
let smtpVerifyError = null;
const smtpMissing = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"].filter(k => !process.env[k]);

if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        connectionTimeout: 15000,
        greetingTimeout: 15000,
        socketTimeout: 20000
    });

    transporter.verify()
        .then(() => {
            smtpReady = true;
            console.log("✅ SMTP: OK");
        })
        .catch(error => {
            smtpVerifyError = error.message;
            console.error("❌ SMTP verify thất bại:", error.message);
        });
} else {
    console.log("⚠️ SMTP: CHƯA CẤU HÌNH");
}


/* =========================
   OTP STORAGE
   ========================= */

const otpStore = new Map();
const OTP_TTL_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const RESEND_COOLDOWN_MS = 60 * 1000;

function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
}

function hashOtp(otp) {
    return crypto
        .createHash("sha256")
        .update(String(otp))
        .digest("hex");
}

function makeOtp() {
    return String(crypto.randomInt(0, 1000000)).padStart(6, "0");
}

function cleanupOtpStore() {
    const now = Date.now();
    for (const [email, item] of otpStore.entries()) {
        if (item.expiresAt <= now) otpStore.delete(email);
    }
}

setInterval(cleanupOtpStore, 60 * 1000).unref();

/* =========================
   HEALTH
   ========================= */

app.get("/api/health", (req, res) => {
    const firebaseMissing = [];
    if (!process.env.FIREBASE_SERVICE_ACCOUNT_JSON && !(process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) && !findServiceAccount()) {
        firebaseMissing.push("Firebase Admin credentials");
    }

    const checks = {
        firebaseAdmin: {
            ok: firebaseReady,
            source: firebaseConfigSource,
            missing: firebaseMissing,
            error: firebaseConfigError
        },
        gmailSmtp: {
            configured: Boolean(transporter),
            verified: smtpReady,
            missing: smtpMissing,
            error: smtpVerifyError
        }
    };

    const ready = firebaseReady && smtpReady;
    res.status(ready ? 200 : 503).json({
        success: ready,
        ready,
        message: ready
            ? "Firebase Admin và Gmail SMTP đã sẵn sàng để gửi OTP."
            : "OTP chưa sẵn sàng. Xem checks.firebaseAdmin và checks.gmailSmtp để biết chính xác phần còn thiếu.",
        checks,
        port: PORT
    });
});

/* =========================
   REQUEST OTP
   ========================= */

app.post("/api/request-password-otp", otpRateLimit, async (req, res) => {
    const email = normalizeEmail(req.body.email);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            error: "Email không hợp lệ."
        });
    }

    if (!firebaseReady) {
        return res.status(503).json({
            error: firebaseConfigError
                ? `Firebase Admin lỗi: ${firebaseConfigError}`
                : "Server chưa cấu hình Firebase Admin. Đặt file secrets/firebase-service-account.json hoặc cấu hình biến môi trường Firebase."
        });
    }

    if (!transporter) {
        return res.status(503).json({
            error: `Gmail SMTP chưa cấu hình. Còn thiếu: ${smtpMissing.join(", ") || "không xác định"}.`
        });
    }

    if (!smtpReady) {
        return res.status(503).json({
            error: smtpVerifyError
                ? `Gmail SMTP chưa xác thực được: ${smtpVerifyError}`
                : "Gmail SMTP đang kiểm tra kết nối. Hãy thử lại sau vài giây."
        });
    }

    const previous = otpStore.get(email);
    if (previous && Date.now() - previous.createdAt < RESEND_COOLDOWN_MS) {
        const wait = Math.ceil(
            (RESEND_COOLDOWN_MS - (Date.now() - previous.createdAt)) / 1000
        );
        return res.status(429).json({
            error: `Vui lòng chờ ${wait} giây rồi gửi lại mã OTP.`
        });
    }

    // Do not reveal whether an account exists.
    try {
        await firebaseAuth.getUserByEmail(email);
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            return res.json({
                success: true,
                message: "Nếu email đã đăng ký, mã OTP sẽ được gửi đến email đó."
            });
        }

        console.error("❌ Firebase getUserByEmail:", error.message);
        return res.status(500).json({
            error: "Không thể kiểm tra tài khoản Firebase."
        });
    }

    const otp = makeOtp();

    otpStore.set(email, {
        otpHash: hashOtp(otp),
        createdAt: Date.now(),
        expiresAt: Date.now() + OTP_TTL_MS,
        attempts: 0
    });

    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    try {
        await transporter.sendMail({
            from,
            to: email,
            subject: "Mã OTP đổi mật khẩu - Tiếng Trung Giang Hà",
            text:
`Xin chào,

Mã OTP để đổi mật khẩu tài khoản Tiếng Trung Giang Hà của bạn là: ${otp}

Mã có hiệu lực trong 10 phút.
Không chia sẻ mã này cho người khác.

Nếu bạn không yêu cầu đổi mật khẩu, hãy bỏ qua email này.`,
            html: `
                <div style="font-family:Arial,sans-serif;line-height:1.6">
                    <h2>Đổi mật khẩu - Tiếng Trung Giang Hà</h2>
                    <p>Mã OTP của bạn là:</p>
                    <div style="font-size:32px;font-weight:bold;letter-spacing:8px">${otp}</div>
                    <p>Mã có hiệu lực trong <b>10 phút</b>.</p>
                    <p>Không chia sẻ mã OTP cho người khác.</p>
                </div>
            `
        });

        console.log(`📧 OTP đã gửi tới ${email}`);

        return res.json({
            success: true,
            message: "Mã OTP đã được gửi. Hãy kiểm tra email."
        });
    } catch (error) {
        otpStore.delete(email);
        console.error("❌ Gửi OTP thất bại:", error.message);

        return res.status(500).json({
            error: "Không thể gửi OTP. Hãy kiểm tra cấu hình Gmail SMTP."
        });
    }
});

/* =========================
   RESET PASSWORD WITH OTP
   ========================= */

app.post("/api/reset-password-with-otp", otpRateLimit, async (req, res) => {
    const email = normalizeEmail(req.body.email);
    const otp = String(req.body.otp || "").trim();
    const newPassword = String(req.body.newPassword || "");

    if (!email || !otp || !newPassword) {
        return res.status(400).json({
            error: "Vui lòng nhập đầy đủ email, OTP và mật khẩu mới."
        });
    }

    if (!/^\d{6}$/.test(otp)) {
        return res.status(400).json({
            error: "OTP phải gồm đúng 6 chữ số."
        });
    }

    if (newPassword.length < 6) {
        return res.status(400).json({
            error: "Mật khẩu mới phải có ít nhất 6 ký tự."
        });
    }

    if (!firebaseReady) {
        return res.status(503).json({
            error: "Firebase Admin chưa được cấu hình."
        });
    }

    const item = otpStore.get(email);

    if (!item) {
        return res.status(400).json({
            error: "OTP không tồn tại hoặc đã hết hạn. Hãy yêu cầu mã mới."
        });
    }

    if (Date.now() > item.expiresAt) {
        otpStore.delete(email);
        return res.status(400).json({
            error: "OTP đã hết hạn. Hãy yêu cầu mã mới."
        });
    }

    if (item.attempts >= MAX_ATTEMPTS) {
        otpStore.delete(email);
        return res.status(429).json({
            error: "Bạn đã nhập sai OTP quá nhiều lần. Hãy yêu cầu mã mới."
        });
    }

    if (hashOtp(otp) !== item.otpHash) {
        item.attempts += 1;
        return res.status(400).json({
            error: `OTP không đúng. Còn ${Math.max(0, MAX_ATTEMPTS - item.attempts)} lần thử.`
        });
    }

    try {
        const user = await firebaseAuth.getUserByEmail(email);

        await firebaseAuth.updateUser(user.uid, {
            password: newPassword
        });

        otpStore.delete(email);

        console.log(`🔐 Đổi mật khẩu thành công: ${email}`);

        return res.json({
            success: true,
            message: "Đổi mật khẩu thành công. Bạn có thể đăng nhập bằng mật khẩu mới."
        });
    } catch (error) {
        console.error("❌ Đổi mật khẩu thất bại:", error.message);

        return res.status(500).json({
            error: "Không thể đổi mật khẩu Firebase."
        });
    }
});

// Vercel uses the exported Express app as a serverless function.
// Local development still uses: npm start
if (require.main === module) {
    app.listen(PORT, () => {
        console.log("");
        console.log("==============================================");
        console.log("      HSK + FIREBASE + OTP SERVER");
        console.log("==============================================");
        console.log(`✅ Server: http://localhost:${PORT}`);
        console.log(`✅ Health: http://localhost:${PORT}/api/health`);
        console.log("==============================================");
    });
}

module.exports = app;
