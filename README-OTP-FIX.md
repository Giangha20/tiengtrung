# FIX OTP - Hướng dẫn nhanh

## Vì sao GitHub Pages của bạn báo lỗi?
Trang `forgot-password.html` đang chạy ở `https://giangha20.github.io/...`.
GitHub Pages chỉ chạy HTML/CSS/JS tĩnh, không chạy được `server.js`, nên `/api/request-password-otp` không tồn tại trên GitHub Pages.

OTP cần một backend Node/Express để:
- kiểm tra Firebase Admin;
- tạo OTP;
- gửi OTP bằng Gmail SMTP;
- đổi mật khẩu Firebase.

## Cách triển khai khuyến nghị: Frontend GitHub Pages + Backend Vercel

### 1. Deploy backend
Đưa thư mục project này lên một repo GitHub và import repo đó vào Vercel.
Project sẽ dùng `vercel.json` + `server.js`.

### 2. Đặt Environment Variables trên Vercel

SMTP:
- `SMTP_HOST` = `smtp.gmail.com`
- `SMTP_PORT` = `587`
- `SMTP_SECURE` = `false`
- `SMTP_USER` = Gmail dùng để gửi OTP
- `SMTP_PASS` = Google App Password 16 ký tự
- `SMTP_FROM` = Gmail gửi OTP

CORS:
- `FRONTEND_ORIGIN` = `https://giangha20.github.io`

Firebase Admin:
- Khuyến nghị `FIREBASE_SERVICE_ACCOUNT_JSON` = toàn bộ nội dung JSON service account.
- Hoặc dùng 3 biến `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`.

KHÔNG commit service-account JSON lên GitHub.

### 3. Kiểm tra backend
Mở:
`https://TEN-BACKEND-CUA-BAN.vercel.app/api/health`

Kết quả đúng phải có:
- `success: true`
- `firebaseAdmin: true`
- `smtp: true` sau khi SMTP verify xong.

### 4. Nối GitHub Pages với backend
Mở `api-config.js` và đổi:

`window.XUEXI_API_BASE = "";`

thành:

`window.XUEXI_API_BASE = "https://TEN-BACKEND-CUA-BAN.vercel.app";`

Sau đó commit/push GitHub Pages.

### 5. Test
Mở trang `forgot-password.html` trên GitHub Pages -> nhập email Firebase -> Gửi mã OTP.

Nếu backend chưa cấu hình, trang sẽ báo lỗi cấu hình thay vì báo lỗi API mơ hồ.

## Chạy local
Trong thư mục project:

```bash
npm install
npm start
```

Mở:
`http://localhost:3000/forgot-password.html`

Nếu test local với `.env`, copy `.env.example` thành `.env` và điền giá trị thật.


## Test local bằng VS Code Live Server

Nếu trình duyệt hiện `127.0.0.1:5500/forgot-password.html`, đây là **frontend**, không phải backend OTP.

1. Cài Node.js LTS nếu máy chưa có.
2. Mở terminal tại thư mục project.
3. Chạy `npm install` một lần.
4. Chạy `npm start`.
5. Kiểm tra `http://127.0.0.1:3000/api/health`.
6. Giữ Live Server ở `127.0.0.1:5500` và bấm **Gửi mã OTP**.

Bạn cũng có thể chạy `START-OTP-LOCAL.bat`.

Nếu `/api/health` trả `firebaseAdmin: false` hoặc `smtp: false`, backend đã chạy nhưng chưa có Environment Variables/.env đúng. Khi đó lỗi không còn là `Failed to fetch` nữa mà sẽ báo chính xác phần cấu hình còn thiếu.

---
## KIỂM TRA TỰ ĐỘNG FIREBASE + GMAIL

Bản này có thêm `CHECK-OTP-LOCAL.bat` và endpoint `/api/health`.

### Local
1. Đặt file Firebase Admin thật vào `secrets/firebase-service-account.json`.
2. Tạo `.env` từ `.env.example` và điền Gmail App Password.
3. Chạy `CHECK-OTP-LOCAL.bat` để kiểm tra chính xác phần nào thiếu.
4. Chạy `START-OTP-LOCAL.bat` hoặc `npm start`.
5. Mở `http://127.0.0.1:3000/api/health`.

### Không đưa secrets lên GitHub
`secrets/` và `.env` đã được `.gitignore`.
File `secrets/firebase-service-account.example.json` chỉ là file mẫu, không dùng để chạy.
