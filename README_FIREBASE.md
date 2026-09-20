# Cấu hình lưu tiến trình online cho HSK

Bộ web này đã đổi phần tiến trình từ `localStorage` sang Firebase Authentication + Cloud Firestore.

## 1. Tạo Firebase project

- Vào Firebase Console.
- Tạo một project.
- Vào **Authentication → Sign-in method** và bật **Email/Password**.
- Vào **Firestore Database → Create database**.
- Vào **Project settings → Your apps → Web app** và tạo Web App.
- Copy đối tượng `firebaseConfig` vào `firebase-config.js`.

## 2. Điền cấu hình

Mở `firebase-config.js` và thay toàn bộ các giá trị `YOUR_...` bằng cấu hình Web App của Firebase.

Không đưa service-account JSON hoặc private server key lên GitHub.

## 3. Firestore Rules

Trong Firestore → Rules, dùng nội dung trong `firestore.rules`.

Các rule này chỉ cho phép tài khoản đã đăng nhập đọc/ghi document `users/{uid}` của chính mình.

## 4. Chạy trên GitHub Pages

Upload toàn bộ thư mục lên repository, giữ nguyên các file:

- `index.html`
- `login.html`
- `register.html`
- `auth.js`
- `firebase-config.js`
- `script.js`
- `style.css`
- `hsk6.js`
- `hsk6.json`

Sau khi cấu hình Firebase, đăng ký tài khoản trên website. Tiến trình sẽ nằm trên Firestore và đăng nhập cùng tài khoản ở máy khác sẽ tải lại tiến trình.

## 5. Chuyển tiến trình cũ

Nếu trình duyệt đang có dữ liệu `gh_hsk_progress_v1` từ bản localStorage cũ và email/tên đăng nhập tương ứng với tài khoản Firebase mới, lần đăng nhập đầu tiên sẽ cố gắng chuyển dữ liệu cũ lên Firestore.

Nếu tài khoản online đã có tiến trình, dữ liệu online được giữ nguyên và không bị dữ liệu cũ ghi đè.
