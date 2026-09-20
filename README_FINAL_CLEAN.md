# Tiếng Trung - Giang Hà — FINAL CLEAN

Bản này giữ giao diện/chức năng hiện có và tập trung dọn lỗi, không thêm nút Lặp lại.

## Đã làm sạch
- Đồng bộ HSK1–HSK6 cho các mục hiện có; không tự chuyển tab.
- Bấm lại đúng mục đang mở không khởi tạo lại dữ liệu.
- Luyện nghe không fallback sang HSK khác khi cấp đang chọn không có dữ liệu.
- Loại các câu nghe trùng; dữ liệu còn 2.379 câu, vẫn >2.000 câu.
- Gộp các hàm Luyện nghe bị khai báo trùng.
- Loại hàm tìm kiếm cũ gọi `renderWordList()` không tồn tại.
- Sửa JavaScript inline của login/register/forgot-password.
- Nghĩa tiếng Việt được ưu tiên từ bảng nghĩa chuẩn có sẵn; không hiển thị chữ Hán trong phần nghĩa theo dữ liệu hiện tại.
- Bổ sung fallback Pinyin bằng pinyin-pro cho các câu chưa có trường `pinyin` trong dữ liệu. Thư viện được tải trước `script.js`.
- Firebase/PWA và các chức năng cũ được giữ nguyên.

## Lưu ý Pinyin
Dữ liệu gốc vẫn giữ các trường Pinyin đã có. Với câu thiếu Pinyin, giao diện tự sinh Pinyin khi thư viện pinyin-pro tải được; sau đó lưu vào đối tượng câu trong phiên hiện tại. Nếu thiết bị hoàn toàn offline và chưa từng tải thư viện, các câu đó có thể chưa hiện Pinyin.
