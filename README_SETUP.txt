# HSK OTP Server - bản mới

## 1. Đặt Firebase Admin JSON

Tạo:

D:\tiengtrung\secrets\

Đặt file Firebase Admin JSON vào đó với tên:

firebase-service-account.json

Server cũng tự tìm các file `*-firebase-adminsdk-*.json` nếu bạn để ở thư mục gốc.

## 2. .env

Tạo file `.env` từ `.env.example`.

SMTP Gmail cần Google App Password, KHÔNG phải mật khẩu Gmail thông thường.

## 3. Cài package

PowerShell:

cd D:\tiengtrung
npm install

## 4. Chạy server

node server.js

## 5. Kiểm tra

Mở:

http://localhost:3000/api/health

Kết quả cần có:

"firebaseAdmin": true
"smtp": true

OpenAI có thể false; OTP vẫn hoạt động.

## 6. OTP

POST /api/request-password-otp
POST /api/reset-password-with-otp

OTP 6 số, hiệu lực 10 phút, tối đa 5 lần nhập sai và giới hạn gửi lại 60 giây.

Không đưa .env hoặc Firebase Admin JSON lên GitHub.
