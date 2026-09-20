# Chat tiếng Trung với AI

Phần `Chat tiếng Trung` đã thay thế giao diện `Luyện viết AI`.

## Hoạt động
- Chat bằng tiếng Trung.
- Gửi bằng nút **Gửi** hoặc Enter.
- Shift + Enter để xuống dòng.
- Lịch sử chat được lưu cục bộ trên thiết bị.
- Tự lấy HSK đang chọn để điều chỉnh mức độ hội thoại.
- Ưu tiên gọi `./api/chat-chinese` để nhận câu trả lời AI thật.
- Nếu backend chưa được triển khai hoặc mất mạng, giao diện tự chuyển sang **chế độ luyện tập offline** thay vì bị lỗi trắng.

## Backend AI
Frontend gửi JSON dạng:

```json
{
  "message": "你好，我叫小明。",
  "level": 3,
  "topic": "daily",
  "language": "zh-CN",
  "instruction": "..."
}
```

Backend cần trả JSON:

```json
{"reply":"你好，小明！很高兴认识你。你今天做了什么？"}
```

Không đặt API key trong `index.html` hoặc `script.js`. API key phải nằm ở biến môi trường phía server.
