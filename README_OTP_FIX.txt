# Bản FIX OTP

Bản này sửa lỗi `Unexpected token '<'` và lỗi OTP không gửi được do server thiếu API.

## 1. Cài thư viện
Trong Terminal tại thư mục dự án:

npm install

## 2. Tạo `.env`
Copy `.env.example` thành `.env`, rồi điền:

- OPENAI_API_KEY
- FIREBASE_PROJECT_ID
- FIREBASE_CLIENT_EMAIL
- FIREBASE_PRIVATE_KEY
- SMTP_USER
- SMTP_PASS

### Firebase Admin
Firebase Client config trong `firebase-config.js` KHÔNG thay cho Firebase Admin.

Vào Firebase Console:
Project settings -> Service accounts -> Generate new private key.

Trong service-account JSON:
- `project_id` -> FIREBASE_PROJECT_ID
- `client_email` -> FIREBASE_CLIENT_EMAIL
- `private_key` -> FIREBASE_PRIVATE_KEY

Không đưa private key lên GitHub.

### Gmail OTP
SMTP_USER là Gmail dùng để gửi thư.
SMTP_PASS phải là Google App Password 16 ký tự, không phải mật khẩu Gmail thông thường.

## 3. Chạy server

node server.js

Mở:
http://localhost:3000/forgot-password.html

Có thể kiểm tra:
http://localhost:3000/api/health

Phải thấy:
- firebaseAdmin: true
- smtp: true
- openai: true

## 4. Quan trọng
Không chạy `node server.js` hai lần cùng lúc. Nếu thấy:
EADDRINUSE: address already in use :::3000

thì chạy:
taskkill /F /IM node.exe

sau đó:
node server.js

## 5. AI
Server đã chuyển phần chấm bài sang GPT-5.6 Sol với reasoning medium.
