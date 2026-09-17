BẢN AI TỰ SỬA BÀI HSK

1. AI chấm bài bằng gpt-5.6-sol.
2. Khi AI trả về câu corrected khác câu gốc, trang sẽ tự thay câu trong ô bài viết.
3. Kết quả vẫn giữ câu gốc, câu đã sửa, lỗi và giải thích.
4. Frontend hỗ trợ cả trường correction/corrected cho phần lỗi.

LƯU Ý:
- server.js cần chạy bằng Node.js để API /api/grade-writing hoạt động.
- Mở website từ http://localhost:3000, không dùng Live Server 127.0.0.1:5500 cho bản này.
- Giữ OPENAI_API_KEY trong file .env ở máy chủ, không đưa lên frontend.
- Nếu firebase-config.js của bạn đã có cấu hình Firebase thật, giữ nguyên file đó khi chép bản này.
