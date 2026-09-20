# Tiếng Trung - Giang Hà — Bản đã kiểm tra và làm sạch

## Kiểm tra chính
- 2.037 câu Luyện nghe còn lại sau khi loại các bản dịch lỗi/không chắc chắn.
- Có đủ HSK1–HSK6 trong dữ liệu Luyện nghe.
- Không còn chữ Hán trong trường `meaning`.
- Không còn các mẫu dịch lỗi/ghép từ đã phát hiện.
- Không trùng câu `audio`.
- Mỗi câu có 4 lựa chọn và `correct` trỏ đúng đáp án.
- `script.js`, `auth.js`, `firebase-init.js` đã kiểm tra cú pháp bằng Node.js.
- JavaScript nhúng trong login/register/forgot-password đã kiểm tra cú pháp.
- CSS kiểm tra cặp dấu `{}` cân bằng.
- Bổ sung lại `avatar192.jpg` và `avatar.jpg` để manifest/PWA không trỏ tới file thiếu.
- Sửa tìm kiếm từ vựng để dùng trực tiếp danh sách đã lọc thay vì gọi hàm không tồn tại.

## Nguyên tắc dữ liệu
Các câu có bản dịch không đạt kiểm tra tự động hoặc có dấu hiệu dịch máy lỗi đã được loại khỏi ngân hàng thay vì giữ bản dịch không đáng tin cậy. Vì vậy số câu giảm từ 2.379 xuống 2.037, nhưng vẫn trên 2.000 câu.
