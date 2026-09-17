# Tiếng Trung - Firebase

## 1. Tạo Firebase
- Vào Firebase Console.
- Tạo project.
- Add Web App.
- Copy Firebase Web App config vào `firebase-config.js`.

## 2. Bật đăng nhập Email/Mật khẩu
Firebase Console -> Authentication -> Sign-in method -> Email/Password -> Enable.

## 3. Tạo Firestore
Firebase Console -> Firestore Database -> Create database.

## 4. Security Rules
Dán nội dung file `firestore.rules` vào Firestore -> Rules -> Publish.

## 5. Các file dùng trong website
- `index.html`
- `login.html`
- `register.html`
- `script.js`
- `style.css`
- `firebase-config.js`
- `firebase-init.js`
- `firestore.rules`
- `manifest.json`
- `server.js`

## 6. Lưu ý
`firebase-config.js` chứa Web App config, không phải mật khẩu.
Không đưa `OPENAI_API_KEY` vào JavaScript frontend. API key OpenAI vẫn phải nằm ở server `.env` như hệ thống hiện tại.

## 7. Tiến trình
Tiến trình được lưu tại:
users/{uid}/appData/progress

Mỗi tài khoản có một dữ liệu tiến trình riêng. Khi đăng nhập trên thiết bị khác, Firebase tải lại tiến trình từ cloud.
