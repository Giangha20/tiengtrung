OTP ĐỔI MẬT KHẨU

1. Cài thư viện: npm install
2. Tạo .env từ .env.example.
3. Firebase Console > Project settings > Service accounts > Generate new private key.
   Dùng các giá trị project_id, client_email, private_key cho FIREBASE_* trên server.
4. Cấu hình SMTP để gửi mail. Với Gmail cần App Password (không dùng mật khẩu Gmail thường).
5. Chạy: node server.js
6. Mở: http://localhost:3000/login.html

QUAN TRỌNG: Không đưa .env hoặc file service-account JSON lên GitHub.
OTP được lưu trong RAM server, hết hạn 10 phút và tối đa 5 lần nhập sai.
