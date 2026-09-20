# Tiếng Trung Giang Hà — Firebase fix

## Đã sửa lỗi
- `firebase-init.js` cũ dùng biến `firebaseConfig` nhưng `firebase-config.js` lại khai báo `window.FIREBASE_CONFIG`.
- Login/register giờ tải Firebase SDK -> `firebase-config.js` -> `auth.js` theo đúng thứ tự.
- Không còn phụ thuộc `firebase-init.js` cho luồng đăng nhập chính.
- Đăng ký xong sẽ đăng xuất phiên vừa tạo rồi quay về `login.html`.
- Lỗi Firestore profile không làm thất bại việc tạo tài khoản Firebase Auth.
- Tiến trình vẫn lưu theo UID tại `users/{uid}`.

## Firebase Console cần kiểm tra 2 mục
1. Authentication -> Sign-in method -> Email/Password: **Enabled**.
2. Authentication -> Settings -> Authorized domains: thêm domain GitHub Pages của bạn, ví dụ `giangha20.github.io`.

## Firestore Rules
Dùng nội dung trong `firestore.rules`.

## Lưu ý bảo mật
Không đưa `.env`, mật khẩu SMTP, Firebase Admin service-account JSON hoặc API key máy chủ lên GitHub. Nếu một mật khẩu SMTP đã từng được gửi/push công khai, hãy thu hồi và tạo App Password mới.
