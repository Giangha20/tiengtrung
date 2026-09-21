PREMIUM CHINES - KIỂM TRA & LÀM SẠCH

- Đã kiểm tra cú pháp JavaScript và JSON.
- Đã đồng bộ hsk6.json và hsk6.js (2.500 mục, không rỗng/không trùng).
- Đã sửa các nghĩa HSK6 bị cắt dòng hoặc sai rõ ràng được phát hiện khi rà soát.
- Đã bổ sung icon PWA 192x192 và 512x512 trong manifest.json.
- Đã bổ sung firebase-admin và nodemailer vào package.json vì server.js sử dụng trực tiếp.
- Đã bỏ package-lock.json cũ vì lock cũ thiếu dependency bắt buộc; chạy npm install để tạo lock mới theo môi trường triển khai.
- Đã chuyển lớp chặn file bí mật lên trước express.static và chặn dotfile/secrets/service-account.
- Không chứa file Firebase service-account hoặc .env trong gói.

Lưu ý triển khai server:
1. Chạy npm install.
2. Cấu hình biến môi trường SMTP/OPENAI khi cần.
3. Firebase Admin service account phải đặt trong thư mục secrets/ trên server, tuyệt đối không commit hoặc phát hành kèm app.
