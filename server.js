// ============================================================
// HSK APP - BACKEND AI CHẤM BÀI VIẾT
// File: server.js
// ============================================================

require("dotenv").config();

const express = require("express");
const OpenAI = require("openai");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// KIỂM TRA API KEY
// ============================================================

if (!process.env.OPENAI_API_KEY) {
    console.error("");
    console.error("❌ CHƯA CÓ OPENAI_API_KEY");
    console.error("Hãy tạo file .env trong thư mục D:\\tiengtrung");
    console.error("");
    process.exit(1);
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// ============================================================
// MIDDLEWARE
// ============================================================

app.use(express.json({ limit: "100kb" }));

// Cho phép server chạy luôn HTML/CSS/JS của bạn
app.use(express.static(path.join(__dirname)));

// ============================================================
// HÀM LÀM SẠCH DỮ LIỆU
// ============================================================

function cleanText(value, maxLength = 3000) {
    if (typeof value !== "string") {
        return "";
    }

    return value
        .trim()
        .replace(/\0/g, "")
        .slice(0, maxLength);
}

// ============================================================
// API: AI CHẤM BÀI VIẾT
// ============================================================

app.post("/api/grade-writing", async (req, res) => {

    try {

        const text = cleanText(req.body.text);
        const hskLevel = cleanText(req.body.hskLevel, 10) || "1";
        const topic = cleanText(req.body.topic, 100) || "free";

        // ----------------------------------------------------
        // KIỂM TRA BÀI VIẾT
        // ----------------------------------------------------

        if (!text) {
            return res.status(400).json({
                error: "Bạn chưa nhập bài viết."
            });
        }

        if (text.length < 2) {
            return res.status(400).json({
                error: "Bài viết quá ngắn."
            });
        }

        // ----------------------------------------------------
        // YÊU CẦU AI
        // ----------------------------------------------------

        const prompt = `
Bạn là giáo viên tiếng Trung chuyên chấm bài cho học sinh HSK.

Hãy chấm bài viết tiếng Trung của học sinh.

Thông tin:
- Trình độ: HSK ${hskLevel}
- Chủ đề: ${topic}

Bài viết:
${text}

Hãy đánh giá:

1. Ngữ pháp
2. Từ vựng
3. Trật tự từ
4. Cách diễn đạt
5. Mức độ phù hợp với HSK
6. Những lỗi cần sửa
7. Câu viết lại tự nhiên hơn
8. Từ vựng nên học thêm
9. Ngữ pháp nên ôn thêm

Chấm điểm từ 0 đến 100.

Nếu bài viết đúng thì không được cố tạo ra lỗi.

Trả về JSON theo đúng cấu trúc:

{
    "score": 85,
    "corrected": "câu đã sửa",
    "errors": [
        {
            "original": "phần sai",
            "correction": "phần đúng",
            "reason": "giải thích bằng tiếng Việt"
        }
    ],
    "explanation": "nhận xét tổng thể bằng tiếng Việt",
    "vocabularySuggestion": "từ vựng nên học thêm",
    "grammarSuggestion": "ngữ pháp nên ôn thêm"
}

Chỉ trả về JSON.
`;

        // ----------------------------------------------------
        // GỌI OPENAI
        // ----------------------------------------------------

        const response = await openai.responses.create({
            model: "gpt-5.6-luna",
            input: prompt
        });

        // ----------------------------------------------------
        // LẤY KẾT QUẢ
        // ----------------------------------------------------

        let resultText = response.output_text;

        if (!resultText) {
            throw new Error("AI không trả về kết quả.");
        }

        // Nếu AI lỡ trả Markdown thì loại bỏ
        resultText = resultText
            .replace(/^```json\s*/i, "")
            .replace(/^```\s*/i, "")
            .replace(/\s*```$/i, "")
            .trim();

        let result;

        try {
            result = JSON.parse(resultText);
        } catch (error) {

            console.error("❌ AI trả về JSON không hợp lệ:");
            console.error(resultText);

            return res.status(500).json({
                error: "AI trả về dữ liệu không đúng định dạng."
            });
        }

        // ----------------------------------------------------
        // CHUẨN HÓA ĐIỂM
        // ----------------------------------------------------

        let score = Number(result.score);

        if (!Number.isFinite(score)) {
            score = 0;
        }

        score = Math.round(Math.max(0, Math.min(100, score)));

        // ----------------------------------------------------
        // CHUẨN HÓA KẾT QUẢ
        // ----------------------------------------------------

        const corrected =
            typeof result.corrected === "string"
                ? result.corrected
                : text;

        const explanation =
            typeof result.explanation === "string"
                ? result.explanation
                : "Không có nhận xét.";

        const vocabularySuggestion =
            typeof result.vocabularySuggestion === "string"
                ? result.vocabularySuggestion
                : "";

        const grammarSuggestion =
            typeof result.grammarSuggestion === "string"
                ? result.grammarSuggestion
                : "";

        const errors =
            Array.isArray(result.errors)
                ? result.errors
                : [];

        // ----------------------------------------------------
        // GỬI VỀ FRONTEND
        // ----------------------------------------------------

        return res.json({
            score,
            corrected,
            errors,
            explanation,
            vocabularySuggestion,
            grammarSuggestion
        });

    } catch (error) {

        console.error("");
        console.error("❌ LỖI API /api/grade-writing");
        console.error(error);
        console.error("");

        return res.status(500).json({
            error: "Không thể kết nối với AI. Hãy kiểm tra API key và thử lại."
        });
    }
});

// ============================================================
// API KIỂM TRA SERVER
// ============================================================

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        message: "HSK AI Writing Server đang hoạt động."
    });

});

// ============================================================
// CHẠY SERVER
// ============================================================

app.listen(PORT, () => {

    console.log("");
    console.log("============================================");
    console.log("       HSK AI WRITING SERVER");
    console.log("============================================");
    console.log(`✅ Server: http://localhost:${PORT}`);
    console.log(`✅ API:    http://localhost:${PORT}/api/grade-writing`);
    console.log(`✅ Health: http://localhost:${PORT}/api/health`);
    console.log("============================================");
    console.log("");

});