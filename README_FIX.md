# Bản sửa Firebase Auth

- Auth được khởi tạo độc lập với Firestore.
- Firestore chưa bật/lỗi không còn làm đăng nhập thất bại.
- Firebase Auth dùng persistence LOCAL.
- GitHub Pages cần bật Email/Password trong Firebase Authentication.
- Firebase Console > Authentication > Settings > Authorized domains: thêm domain GitHub Pages, ví dụ `giangha20.github.io`.
- Nếu API key có HTTP referrer restrictions, thêm domain GitHub Pages vào API key restrictions hoặc để API key không bị chặn bởi referrer khi test.
