require("dotenv").config();
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");

const root = __dirname;
const green = "\x1b[32m", red = "\x1b[31m", yellow = "\x1b[33m", reset = "\x1b[0m";
const ok = m => console.log(green + "[OK] " + reset + m);
const bad = m => console.log(red + "[THIEU/LOI] " + reset + m);
const warn = m => console.log(yellow + "[CANH BAO] " + reset + m);

console.log("\\n=== KIEM TRA OTP: FIREBASE ADMIN + GMAIL SMTP ===\\n");

function loadCredential() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    try { return {source:"FIREBASE_SERVICE_ACCOUNT_JSON", value:JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)}; }
    catch(e) { return {error:"FIREBASE_SERVICE_ACCOUNT_JSON không phải JSON hợp lệ."}; }
  }
  const parts = [process.env.FIREBASE_PROJECT_ID, process.env.FIREBASE_CLIENT_EMAIL, process.env.FIREBASE_PRIVATE_KEY];
  if (parts.every(Boolean)) return {source:"3 biến Firebase", value:{project_id:parts[0],client_email:parts[1],private_key:String(parts[2]).replace(/\\n/g,"\n")}};
  const file = path.join(root,"secrets","firebase-service-account.json");
  if (fs.existsSync(file)) {
    try { return {source:"secrets/firebase-service-account.json", value:JSON.parse(fs.readFileSync(file,"utf8"))}; }
    catch(e) { return {error:"File secrets/firebase-service-account.json không phải JSON hợp lệ."}; }
  }
  return null;
}

const cred = loadCredential();
if (cred?.error) bad(cred.error);
else if (!cred) bad("Chưa có Firebase Admin. Đặt JSON vào secrets/firebase-service-account.json hoặc cấu hình biến FIREBASE_SERVICE_ACCOUNT_JSON / FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY.");
else {
  try {
    if (!admin.apps.length) admin.initializeApp({credential:admin.credential.cert(cred.value)});
    ok("Firebase Admin đã nạp: " + cred.source);
    console.log("    Project: " + (cred.value.project_id || "không có"));
    console.log("    Client email: " + (cred.value.client_email || "không có"));
  } catch(e) { bad("Firebase Admin lỗi: " + e.message); }
}

const smtpMissing = [];
for (const k of ["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS"]) if (!process.env[k]) smtpMissing.push(k);
if (smtpMissing.length) {
  bad("Gmail SMTP còn thiếu: " + smtpMissing.join(", "));
} else {
  ok("Đã đủ biến Gmail SMTP.");
  const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:Number(process.env.SMTP_PORT || 587),
    secure:String(process.env.SMTP_SECURE).toLowerCase()==="true",
    auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS},
    connectionTimeout:10000,greetingTimeout:10000,socketTimeout:15000
  });
  transporter.verify().then(()=>ok("Gmail SMTP kết nối và xác thực thành công.")).catch(e=>bad("Gmail SMTP không xác thực được: " + e.message));
}

if (!process.env.SMTP_FROM) warn("SMTP_FROM chưa đặt; server sẽ dùng SMTP_USER.");
if (!process.env.FRONTEND_ORIGIN) warn("FRONTEND_ORIGIN chưa đặt; local vẫn dùng được, production nên đặt URL GitHub Pages.");
console.log("\\nNếu mọi mục đều [OK], chạy: npm start");
console.log("Sau đó mở: http://127.0.0.1:3000/api/health\\n");
