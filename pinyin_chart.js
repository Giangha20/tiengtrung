// ==============================================================
// PINYIN & HANZI ALPHABET ENGINE (BẢNG CHỮ CÁI & CHỮ HÁN TIẾNG TRUNG)
// Tích hợp toàn diện 26 Chữ cái A-Z, Chữ Hán tiêu biểu, Âm Hán Việt, 
// 23 Thanh mẫu, 36 Vận mẫu, 4 Thanh điệu, 214 Bộ thủ & Tra cứu Chữ Hán
// Kiến thức nền tảng căn bản - Hoàn toàn độc lập khỏi cấp độ HSK
// ==============================================================

(() => {
  const PY_DATA = {
    // 26 CHỮ CÁI LA-TINH NGỮ ÂM KÈM CHỮ HÁN TIÊU BIỂU (汉语拼音字母与常用汉字)
    alphabet26: [
      {
        char: "Aa",
        name: "a",
        pinyin: "a",
        read: "Đọc như 'a' trong tiếng Việt",
        role: "Vận mẫu đơn",
        tip: "Mở rộng khẩu hình miệng, lưỡi ở vị trí thấp nhất, phát âm to rõ ràng.",
        sound: "ā",
        hero: { zh: "爱", py: "ài", hv: "Ái", vi: "Yêu / Thích" },
        hanzi: [
          { zh: "爱", py: "ài", hv: "Ái", vi: "Yêu, yêu thích" },
          { zh: "啊", py: "ā", hv: "A", vi: "A (thán từ ngạc nhiên)" },
          { zh: "安", py: "ān", hv: "An", vi: "Bình an, yên ổn" },
          { zh: "暗", py: "àn", hv: "Ám", vi: "Tối tăm, bí mật" }
        ]
      },
      {
        char: "Bb",
        name: "bê",
        pinyin: "b",
        read: "Đọc như 'p' trong tiếng Việt (vô thanh, không bật hơi)",
        role: "Thanh mẫu hai môi",
        tip: "Hai môi khép chặt chặn luồng khí, mở nhẹ ra tự nhiên, không bật hơi.",
        sound: "bō",
        hero: { zh: "八", py: "bā", hv: "Bát", vi: "Số 8" },
        hanzi: [
          { zh: "八", py: "bā", hv: "Bát", vi: "Số tám (8)" },
          { zh: "爸", py: "bà", hv: "Ba", vi: "Bố, ba, cha" },
          { zh: "白", py: "bái", hv: "Bạch", vi: "Màu trắng, rõ ràng" },
          { zh: "百", py: "bǎi", hv: "Bách", vi: "Một trăm (100)" },
          { zh: "不", py: "bù", hv: "Bất", vi: "Không, chẳng" }
        ]
      },
      {
        char: "Cc",
        name: "cê",
        pinyin: "c",
        read: "Đọc như 'x' bật hơi hoặc 'th' sắc mạnh",
        role: "Thanh mẫu đầu lưỡi trước",
        tip: "Đầu lưỡi chạm mặt sau răng trên, nén khí rồi bật mạnh thoát ra khe răng.",
        sound: "cī",
        hero: { zh: "茶", py: "chá", hv: "Trà", vi: "Trà / Chè" },
        hanzi: [
          { zh: "茶", py: "chá", hv: "Trà", vi: "Trà, lá chè" },
          { zh: "菜", py: "cài", hv: "Thái", vi: "Món ăn, rau cỏ" },
          { zh: "吃", py: "chī", hv: "Ngật", vi: "Ăn uống" },
          { zh: "车", py: "chē", hv: "Xa", vi: "Xe cộ, phương tiện" },
          { zh: "出", py: "chū", hv: "Xuất", vi: "Ra ngoài, xuất hiện" }
        ]
      },
      {
        char: "Dd",
        name: "dê",
        pinyin: "d",
        read: "Đọc như 't' trong tiếng Việt (không bật hơi)",
        role: "Thanh mẫu đầu lưỡi giữa",
        tip: "Đầu lưỡi chạm nướu trên rồi hạ xuống nhẹ nhàng, phát âm như 't' Việt.",
        sound: "dē",
        hero: { zh: "大", py: "dà", hv: "Đại", vi: "To lớn" },
        hanzi: [
          { zh: "大", py: "dà", hv: "Đại", vi: "To lớn, vĩ đại" },
          { zh: "的", py: "de", hv: "Đích", vi: "Của (trợ từ sở hữu)" },
          { zh: "点", py: "diǎn", hv: "Điểm", vi: "Giờ, một chút, chấm" },
          { zh: "东", py: "dōng", hv: "Đông", vi: "Phía Đông, đồ đạc" },
          { zh: "多", py: "duō", hv: "Đa", vi: "Nhiều, bao nhiêu" }
        ]
      },
      {
        char: "Ee",
        name: "e",
        pinyin: "e",
        read: "Đọc như 'ưa' hoặc 'ơ'",
        role: "Vận mẫu đơn",
        tip: "Miệng hé mở hình dẹt, phát âm lùi sâu trong cổ họng như 'ưa'.",
        sound: "ē",
        hero: { zh: "二", py: "èr", hv: "Nhị", vi: "Số 2" },
        hanzi: [
          { zh: "二", py: "èr", hv: "Nhị", vi: "Số hai (2)" },
          { zh: "饿", py: "è", hv: "Ngạ", vi: "Đói bụng" },
          { zh: "儿", py: "ér", hv: "Nhi", vi: "Con cái, trẻ nhỏ" },
          { zh: "鹅", py: "é", hv: "Nga", vi: "Con ngỗng" }
        ]
      },
      {
        char: "Ff",
        name: "ê-phu",
        pinyin: "f",
        read: "Đọc như 'ph' trong tiếng Việt",
        role: "Thanh mẫu môi răng",
        tip: "Răng trên chạm nhẹ môi dưới, luồng khí ma sát thoát ra ngoài.",
        sound: "fō",
        hero: { zh: "风", py: "fēng", hv: "Phong", vi: "Gió" },
        hanzi: [
          { zh: "风", py: "fēng", hv: "Phong", vi: "Gió, phong cảnh" },
          { zh: "飞", py: "fēi", hv: "Phi", vi: "Bay lượn (máy bay)" },
          { zh: "分", py: "fēn", hv: "Phân", vi: "Phút, phân chia" },
          { zh: "饭", py: "fàn", hv: "Phạn", vi: "Cơm, bữa ăn" },
          { zh: "方", py: "fāng", hv: "Phương", vi: "Hướng, vuông vắn" }
        ]
      },
      {
        char: "Gg",
        name: "gê",
        pinyin: "g",
        read: "Đọc như 'c / k' trong tiếng Việt (không bật hơi)",
        role: "Thanh mẫu gốc lưỡi",
        tip: "Gốc lưỡi nâng lên chạm ngạc mềm, hạ xuống nhẹ không bật hơi.",
        sound: "gē",
        hero: { zh: "国", py: "guó", hv: "Quốc", vi: "Đất nước" },
        hanzi: [
          { zh: "国", py: "guó", hv: "Quốc", vi: "Đất nước, quốc gia" },
          { zh: "哥", py: "gē", hv: "Ca", vi: "Anh trai" },
          { zh: "高", py: "gāo", hv: "Cao", vi: "Cao ráo, vĩ đại" },
          { zh: "个", py: "gè", hv: "Cá", vi: "Cái, chiếc (lượng từ)" },
          { zh: "工", py: "gōng", hv: "Công", vi: "Công việc, thợ" }
        ]
      },
      {
        char: "Hh",
        name: "ha",
        pinyin: "h",
        read: "Đọc nhẹ như 'h' hoặc giữa 'h' và 'kh'",
        role: "Thanh mẫu gốc lưỡi",
        tip: "Gốc lưỡi nâng nhẹ gần ngạc mềm, hơi ma sát êm dịu thoát ra.",
        sound: "hē",
        hero: { zh: "好", py: "hǎo", hv: "Hảo", vi: "Tốt / Đẹp" },
        hanzi: [
          { zh: "好", py: "hǎo", hv: "Hảo", vi: "Tốt, đẹp, khỏe mạnh" },
          { zh: "和", py: "hé", hv: "Hòa", vi: "Và, cùng với, hòa bình" },
          { zh: "喝", py: "hē", hv: "Hát", vi: "Uống nước" },
          { zh: "花", py: "huā", hv: "Hoa", vi: "Bông hoa, tiêu xài" },
          { zh: "话", py: "huà", hv: "Thoại", vi: "Lời nói, đối thoại" }
        ]
      },
      {
        char: "Ii",
        name: "yi",
        pinyin: "i",
        read: "Đọc như 'i' (sau zh, ch, sh, r, z, c, s đọc là 'ư')",
        role: "Vận mẫu đơn",
        tip: "Khóe miệng kéo dẹt sang hai bên như đang cười nhẹ.",
        sound: "yī",
        hero: { zh: "一", py: "yī", hv: "Nhất", vi: "Số 1" },
        hanzi: [
          { zh: "一", py: "yī", hv: "Nhất", vi: "Số một (1)" },
          { zh: "衣", py: "yī", hv: "Y", vi: "Áo, trang phục" },
          { zh: "医", py: "yī", hv: "Y", vi: "Y học, bác sĩ" },
          { zh: "以", py: "yǐ", hv: "Dĩ", vi: "Lấy, để mà" }
        ]
      },
      {
        char: "Jj",
        name: "jie",
        pinyin: "j",
        read: "Đọc như 'ch' trong tiếng Việt (không bật hơi)",
        role: "Thanh mẫu mặt lưỡi",
        tip: "Mặt lưỡi phẳng áp ngạc cứng, hạ nhẹ cho hơi thoát, không bật mạnh.",
        sound: "jī",
        hero: { zh: "家", py: "jiā", hv: "Gia", vi: "Nhà / Gia đình" },
        hanzi: [
          { zh: "家", py: "jiā", hv: "Gia", vi: "Nhà, gia đình" },
          { zh: "见", py: "jiàn", hv: "Kiến", vi: "Gặp gỡ, nhìn thấy" },
          { zh: "叫", py: "jiào", hv: "Khiếu", vi: "Tên là, gọi là" },
          { zh: "九", py: "jiǔ", hv: "Cửu", vi: "Số chín (9)" },
          { zh: "进", py: "jìn", hv: "Tiến", vi: "Vào trong, tiến bước" }
        ]
      },
      {
        char: "Kk",
        name: "kê",
        pinyin: "k",
        read: "Đọc như 'kh' bật hơi rất mạnh",
        role: "Thanh mẫu gốc lưỡi",
        tip: "Gốc lưỡi chặn luồng khí rồi đột ngột bật mạnh dứt khoát ra ngoài.",
        sound: "kē",
        hero: { zh: "看", py: "kàn", hv: "Khán", vi: "Xem / Nhìn" },
        hanzi: [
          { zh: "看", py: "kàn", hv: "Khán", vi: "Xem, nhìn, đọc" },
          { zh: "开", py: "kāi", hv: "Khai", vi: "Mở ra, bắt đầu" },
          { zh: "口", py: "kǒu", hv: "Khẩu", vi: "Miệng, cửa" },
          { zh: "快", py: "kuài", hv: "Khoái", vi: "Nhanh nhẹn, vui vẻ" },
          { zh: "课", py: "kè", hv: "Khóa", vi: "Bài học, tiết học" }
        ]
      },
      {
        char: "Ll",
        name: "ê-lơ",
        pinyin: "l",
        read: "Đọc như 'l' trong tiếng Việt",
        role: "Thanh mẫu đầu lưỡi giữa",
        tip: "Đầu lưỡi chạm nướu trên, luồng khí thoát đều hai bên mép lưỡi.",
        sound: "lē",
        hero: { zh: "来", py: "lái", hv: "Lai", vi: "Đến / Tới" },
        hanzi: [
          { zh: "来", py: "lái", hv: "Lai", vi: "Đến, tới nơi" },
          { zh: "老", py: "lǎo", hv: "Lão", vi: "Già, thầy cô (lão sư)" },
          { zh: "冷", py: "lěng", hv: "Lãnh", vi: "Lạnh lẽo" },
          { zh: "里", py: "lǐ", hv: "Lý", vi: "Bên trong, dặm" },
          { zh: "六", py: "liù", hv: "Lục", vi: "Số sáu (6)" }
        ]
      },
      {
        char: "Mm",
        name: "ê-mơ",
        pinyin: "m",
        read: "Đọc như 'm' trong tiếng Việt",
        role: "Thanh mẫu hai môi",
        tip: "Hai môi khép kín, luồng khí thoát qua khoang mũi tạo âm vang.",
        sound: "mō",
        hero: { zh: "妈", py: "mā", hv: "Mã", vi: "Mẹ / Má" },
        hanzi: [
          { zh: "妈", py: "mā", hv: "Mã", vi: "Mẹ, mẹ hiền" },
          { zh: "马", py: "mǎ", hv: "Mã", vi: "Con ngựa" },
          { zh: "买", py: "mǎi", hv: "Mãi", vi: "Mua hàng" },
          { zh: "忙", py: "máng", hv: "Mang", vi: "Bận rộn" },
          { zh: "门", py: "mén", hv: "Môn", vi: "Cửa, cánh cổng" }
        ]
      },
      {
        char: "Nn",
        name: "nê",
        pinyin: "n",
        read: "Đọc như 'n' trong tiếng Việt",
        role: "Thanh mẫu đầu lưỡi giữa",
        tip: "Đầu lưỡi chạm ngạc trên, âm mũi vang rõ ràng.",
        sound: "nē",
        hero: { zh: "你", py: "nǐ", hv: "Nhĩ", vi: "Bạn / Anh / Chị" },
        hanzi: [
          { zh: "你", py: "nǐ", hv: "Nhĩ", vi: "Bạn, ngôi thứ hai" },
          { zh: "那", py: "nà", hv: "Na", vi: "Kia, đó" },
          { zh: "男", py: "nán", hv: "Nam", vi: "Nam giới, đàn ông" },
          { zh: "年", py: "nián", hv: "Niên", vi: "Năm tháng, tuổi tác" },
          { zh: "牛", py: "niú", hv: "Ngưu", vi: "Con bò" }
        ]
      },
      {
        char: "Oo",
        name: "o",
        pinyin: "o",
        read: "Đọc như 'ua' hoặc 'ô' tròn môi",
        role: "Vận mẫu đơn",
        tip: "Môi tròn lại hơi nhô về trước, âm thanh tròn trịa và vang.",
        sound: "ō",
        hero: { zh: "我", py: "wǒ", hv: "Ngã", vi: "Tôi (chứa vần O)" },
        hanzi: [
          { zh: "我", py: "wǒ", hv: "Ngã", vi: "Tôi, bản thân" },
          { zh: "哦", py: "ó", hv: "Nga", vi: "Ồ (thán từ nhận ra)" },
          { zh: "欧", py: "ōu", hv: "Âu", vi: "Châu Âu" }
        ]
      },
      {
        char: "Pp",
        name: "pê",
        pinyin: "p",
        read: "Đọc như 'p' bật hơi rất mạnh",
        role: "Thanh mẫu hai môi",
        tip: "Hai môi mím chặt, nén khí rồi bật tung ra mạnh làm rung giấy trước mặt.",
        sound: "pō",
        hero: { zh: "朋", py: "péng", hv: "Bằng", vi: "Bạn bè" },
        hanzi: [
          { zh: "朋", py: "péng", hv: "Bằng", vi: "Bạn bè (bằng hữu)" },
          { zh: "跑", py: "pǎo", hv: "Bào", vi: "Chạy bộ" },
          { zh: "漂", py: "piào", hv: "Phiêu", vi: "Xinh đẹp" },
          { zh: "票", py: "piào", hv: "Phiếu", vi: "Vé tàu, vé xe" },
          { zh: "平", py: "píng", hv: "Bình", vi: "Bình an, bằng phẳng" }
        ]
      },
      {
        char: "Qq",
        name: "chiu",
        pinyin: "q",
        read: "Đọc như 'ch' bật hơi sắc mạnh",
        role: "Thanh mẫu mặt lưỡi",
        tip: "Mặt lưỡi nâng ngạc cứng rồi bật mạnh luồng khí thoát ra ngoài.",
        sound: "qī",
        hero: { zh: "去", py: "qù", hv: "Khứ", vi: "Đi" },
        hanzi: [
          { zh: "去", py: "qù", hv: "Khứ", vi: "Đi tới, đi đâu" },
          { zh: "七", py: "qī", hv: "Thất", vi: "Số bảy (7)" },
          { zh: "钱", py: "qián", hv: "Tiền", vi: "Tiền bạc" },
          { zh: "前", py: "qián", hv: "Tiền", vi: "Phía trước" },
          { zh: "请", py: "qǐng", hv: "Thỉnh", vi: "Mời, xin mời" }
        ]
      },
      {
        char: "Rr",
        name: "a-rơ",
        pinyin: "r",
        read: "Đọc như 'r' uốn cong lưỡi (không rung)",
        role: "Thanh mẫu cuộn lưỡi",
        tip: "Đầu lưỡi uốn cong lên ngạc cứng, luồng khí ma sát êm dịu, không rung lưỡi.",
        sound: "rī",
        hero: { zh: "人", py: "rén", hv: "Nhân", vi: "Con người" },
        hanzi: [
          { zh: "人", py: "rén", hv: "Nhân", vi: "Con người" },
          { zh: "日", py: "rì", hv: "Nhật", vi: "Mặt trời, ban ngày" },
          { zh: "热", py: "rè", hv: "Nhiệt", vi: "Nóng bức, nhiệt độ" },
          { zh: "认", py: "rèn", hv: "Nhận", vi: "Nhận biết, quen biết" },
          { zh: "肉", py: "ròu", hv: "Nhục", vi: "Thịt" }
        ]
      },
      {
        char: "Ss",
        name: "ê-si",
        pinyin: "s",
        read: "Đọc như 'x' nhẹ trong tiếng Việt",
        role: "Thanh mẫu đầu lưỡi trước",
        tip: "Đầu lưỡi gần chân răng dưới, luồng hơi ma sát thoát qua khe răng.",
        sound: "sī",
        hero: { zh: "山", py: "shān", hv: "Sơn", vi: "Núi non" },
        hanzi: [
          { zh: "三", py: "sān", hv: "Tam", vi: "Số ba (3)" },
          { zh: "四", py: "sì", hv: "Tứ", vi: "Số bốn (4)" },
          { zh: "是", py: "shì", hv: "Thị", vi: "Là, phải, đúng" },
          { zh: "水", py: "shuǐ", hv: "Thủy", vi: "Nước" },
          { zh: "书", py: "shū", hv: "Thư", vi: "Sách vở" }
        ]
      },
      {
        char: "Tt",
        name: "thê",
        pinyin: "t",
        read: "Đọc như 'th' bật hơi trong tiếng Việt",
        role: "Thanh mẫu đầu lưỡi giữa",
        tip: "Đầu lưỡi chạm nướu trên rồi giật lùi bật mạnh luồng khí ra.",
        sound: "tē",
        hero: { zh: "天", py: "tiān", hv: "Thiên", vi: "Trời / Ngày" },
        hanzi: [
          { zh: "天", py: "tiān", hv: "Thiên", vi: "Trời, ban ngày" },
          { zh: "他", py: "tā", hv: "Tha", vi: "Anh ấy, cậu ấy" },
          { zh: "她", py: "tā", hv: "Tha", vi: "Cô ấy, bà ấy" },
          { zh: "听", py: "tīng", hv: "Thính", vi: "Lắng nghe" },
          { zh: "同", py: "tóng", hv: "Đồng", vi: "Cùng nhau, bạn bè" }
        ]
      },
      {
        char: "Uu",
        name: "wu",
        pinyin: "u",
        read: "Đọc như 'u' trong tiếng Việt",
        role: "Vận mẫu đơn",
        tip: "Môi chu tròn nhỏ, gốc lưỡi nâng cao về phía sau họng.",
        sound: "ū",
        hero: { zh: "五", py: "wǔ", hv: "Ngũ", vi: "Số 5 (vần U)" },
        hanzi: [
          { zh: "五", py: "wǔ", hv: "Ngũ", vi: "Số năm (5)" },
          { zh: "屋", py: "wū", hv: "Ốc", vi: "Căn phòng, nhà" },
          { zh: "舞", py: "wǔ", hv: "Vũ", vi: "Múa hát, khiêu vũ" }
        ]
      },
      {
        char: "Vv",
        name: "vê",
        pinyin: "v",
        read: "Dùng gõ chữ 'ü' trên bàn phím hoặc phiên âm từ mượn",
        role: "Chữ cái phụ trợ",
        tip: "Trong bộ gõ tiếng Trung, gõ 'v' thay cho 'ü' (ví dụ gõ lv ra 绿, nv ra 女).",
        sound: "wēi",
        hero: { zh: "绿", py: "lǜ (lv)", hv: "Lục", vi: "Màu xanh lá" },
        hanzi: [
          { zh: "绿", py: "lǜ", hv: "Lục", vi: "Màu xanh lục (gõ lv)" },
          { zh: "女", py: "nǚ", hv: "Nữ", vi: "Phụ nữ, con gái (gõ nv)" },
          { zh: "旅", py: "lǚ", hv: "Lữ", vi: "Du lịch, lữ khách (gõ lv)" }
        ]
      },
      {
        char: "Ww",
        name: "wa",
        pinyin: "w",
        read: "Đọc như 'oa' / 'u'",
        role: "Bán nguyên âm / Phụ âm khởi đầu",
        tip: "Dùng để viết mở đầu các âm tiết bắt đầu bằng nguyên âm 'u'.",
        sound: "wā",
        hero: { zh: "我", py: "wǒ", hv: "Ngã", vi: "Tôi / Bản thân" },
        hanzi: [
          { zh: "我", py: "wǒ", hv: "Ngã", vi: "Tôi, ta" },
          { zh: "王", py: "wáng", hv: "Vương", vi: "Vua chúa, họ Vương" },
          { zh: "问", py: "wèn", hv: "Vấn", vi: "Hỏi han, vấn đáp" },
          { zh: "玩", py: "wán", hv: "Ngoạn", vi: "Vui chơi" },
          { zh: "文", py: "wén", hv: "Văn", vi: "Văn hóa, chữ nghĩa" }
        ]
      },
      {
        char: "Xx",
        name: "xi",
        pinyin: "x",
        read: "Đọc như 'x' tiếng Việt (mặt lưỡi phẳng)",
        role: "Thanh mẫu mặt lưỡi",
        tip: "Mặt lưỡi phẳng nâng sát ngạc cứng, đẩy hơi nhẹ êm qua khe hẹp.",
        sound: "xī",
        hero: { zh: "小", py: "xiǎo", hv: "Tiểu", vi: "Nhỏ / Bé" },
        hanzi: [
          { zh: "小", py: "xiǎo", hv: "Tiểu", vi: "Nhỏ bé" },
          { zh: "想", py: "xiǎng", hv: "Tưởng", vi: "Muốn, nhớ, suy nghĩ" },
          { zh: "写", py: "xiě", hv: "Tả", vi: "Viết lách, chép" },
          { zh: "下", py: "xià", hv: "Hạ", vi: "Dưới, hạ xuống" },
          { zh: "学", py: "xué", hv: "Học", vi: "Học tập, trường học" }
        ]
      },
      {
        char: "Yy",
        name: "ya",
        pinyin: "y",
        read: "Đọc như 'd' (miền Nam) hoặc 'i'",
        role: "Bán nguyên âm / Phụ âm khởi đầu",
        tip: "Dùng mở đầu các âm tiết bắt đầu bằng 'i' hoặc 'ü'.",
        sound: "yā",
        hero: { zh: "月", py: "yuè", hv: "Nguyệt", vi: "Mặt trăng / Tháng" },
        hanzi: [
          { zh: "月", py: "yuè", hv: "Nguyệt", vi: "Mặt trăng, tháng" },
          { zh: "有", py: "yǒu", hv: "Hữu", vi: "Có, sở hữu" },
          { zh: "要", py: "yào", hv: "Yếu", vi: "Muốn, cần, phải" },
          { zh: "雨", py: "yǔ", hv: "Vũ", vi: "Mưa rơi" },
          { zh: "语", py: "yǔ", hv: "Ngữ", vi: "Ngôn ngữ, lời nói" }
        ]
      },
      {
        char: "Zz",
        name: "zê",
        pinyin: "z",
        read: "Đọc như 'ch / tr' không bật hơi",
        role: "Thanh mẫu đầu lưỡi trước",
        tip: "Đầu lưỡi chạm chân răng trên rồi hé nhẹ, tuyệt đối không bật hơi mạnh.",
        sound: "zī",
        hero: { zh: "中", py: "zhōng", hv: "Trung", vi: "Ở giữa / Trung Quốc" },
        hanzi: [
          { zh: "中", py: "zhōng", hv: "Trung", vi: "Ở giữa, Trung Quốc" },
          { zh: "在", py: "zài", hv: "Tại", vi: "Ở tại, đang làm gì" },
          { zh: "早", py: "zǎo", hv: "Tảo", vi: "Buổi sáng, sớm" },
          { zh: "字", py: "zì", hv: "Tự", vi: "Chữ viết, chữ Hán" },
          { zh: "做", py: "zuò", hv: "Tác", vi: "Làm việc, tạo ra" }
        ]
      }
    ],

    // 23 THANH MẪU (SHENGMU - 声母) KÈM CHỮ HÁN ĐẠI DIỆN
    initials: [
      { letter: "b", name: "b (bô / p nhẹ)", hero: { zh: "八", py: "bā", hv: "Bát", vi: "Số 8" }, group: "Âm hai môi (Song thần âm)", read: "Đọc như 'p' trong tiếng Việt (vô thanh, không bật hơi)", tip: "Hai môi khép chặt chặn luồng khí, sau đó hé mở nhẹ nhàng cho hơi thoát ra tự nhiên. Tuyệt đối không bật hơi mạnh.", sound: "bō", example: { zh: "爸爸", pinyin: "bàba", vi: "Bố / ba" } },
      { letter: "p", name: "p (pô bật hơi)", hero: { zh: "朋", py: "péng", hv: "Bằng", vi: "Bạn bè" }, group: "Âm hai môi (Song thần âm)", read: "Đọc như 'p' bật hơi rất mạnh", tip: "Hai môi ngậm chặt, nén luồng khí lại rồi bật mạnh dứt khoát ra ngoài. Đặt tờ giấy trước miệng sẽ thấy giấy bay mạnh.", sound: "pō", example: { zh: "苹果", pinyin: "píngguǒ", vi: "Quả táo" } },
      { letter: "m", name: "m (mô)", hero: { zh: "妈", py: "mā", hv: "Mã", vi: "Mẹ" }, group: "Âm hai môi (Song thần âm)", read: "Đọc hoàn toàn như 'm' trong tiếng Việt", tip: "Hai môi khép kín, luồng khí thoát đều qua khoang mũi tạo âm vang nhẹ nhàng.", sound: "mō", example: { zh: "妈妈", pinyin: "māma", vi: "Mẹ" } },
      { letter: "f", name: "f (phô)", hero: { zh: "风", py: "fēng", hv: "Phong", vi: "Gió" }, group: "Âm môi răng (Thần xỉ âm)", read: "Đọc hoàn toàn như 'ph' trong tiếng Việt", tip: "Răng cửa hàm trên chạm nhẹ vào môi dưới, đẩy luồng khí ma sát nhẹ nhàng thoát ra.", sound: "fō", example: { zh: "飞机", pinyin: "fēijī", vi: "Máy bay" } },
      { letter: "d", name: "d (tơ)", hero: { zh: "大", py: "dà", hv: "Đại", vi: "To lớn" }, group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc như 't' trong tiếng Việt (không bật hơi)", tip: "Đầu lưỡi dán chặt vào nướu răng trên, sau đó hạ nhanh xuống cho luồng khí bật nhẹ ra.", sound: "dē", example: { zh: "弟弟", pinyin: "dìdi", vi: "Em trai" } },
      { letter: "t", name: "t (thơ bật hơi)", hero: { zh: "天", py: "tiān", hv: "Thiên", vi: "Trời / Ngày" }, group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc như 'th' bật hơi trong tiếng Việt", tip: "Khẩu hình giống âm 'd' nhưng nén luồng khí mạnh hơn và bật dứt khoát ra ngoài.", sound: "tē", example: { zh: "天气", pinyin: "tiānqì", vi: "Thời tiết" } },
      { letter: "n", name: "n (nơ)", hero: { zh: "你", py: "nǐ", hv: "Nhĩ", vi: "Bạn / Anh" }, group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc hoàn toàn như 'n' trong tiếng Việt", tip: "Đầu lưỡi chạm nướu trên chặn khí, ngạc mềm hạ xuống cho luồng khí thoát qua khoang mũi.", sound: "nē", example: { zh: "牛奶", pinyin: "niúnǎi", vi: "Sữa bò" } },
      { letter: "l", name: "l (lơ)", hero: { zh: "来", py: "lái", hv: "Lai", vi: "Đến / Tới" }, group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc hoàn toàn như 'l' trong tiếng Việt", tip: "Đầu lưỡi chạm nướu răng trên, luồng khí êm dịu thoát ra ở hai bên mép lưỡi.", sound: "lē", example: { zh: "老师", pinyin: "lǎoshī", vi: "Giáo viên / Thầy cô" } },
      { letter: "g", name: "g (cơ / kơ)", hero: { zh: "国", py: "guó", hv: "Quốc", vi: "Đất nước" }, group: "Âm cuống lưỡi (Thiệt căn âm)", read: "Đọc như 'c' hoặc 'k' trong tiếng Việt (không bật hơi)", tip: "Cuống lưỡi nâng cao chạm ngạc mềm chặn khí, sau đó hạ xuống để hơi thoát êm.", sound: "gē", example: { zh: "高兴", pinyin: "gāoxìng", vi: "Vui vẻ" } },
      { letter: "k", name: "k (khơ bật hơi)", hero: { zh: "看", py: "kàn", hv: "Khán", vi: "Xem / Nhìn" }, group: "Âm cuống lưỡi (Thiệt căn âm)", read: "Đọc như 'kh' bật hơi rất mạnh", tip: "Cuống lưỡi ép ngạc mềm nén khí, rồi bật tung luồng khí thật mạnh từ sâu trong cổ họng ra ngoài.", sound: "kē", example: { zh: "开水", pinyin: "kāishuǐ", vi: "Nước sôi" } },
      { letter: "h", name: "h (hơ nhẹ)", hero: { zh: "好", py: "hǎo", hv: "Hảo", vi: "Tốt / Đẹp" }, group: "Âm cuống lưỡi (Thiệt căn âm)", read: "Đọc giữa 'h' và 'kh' nhẹ trong tiếng Việt", tip: "Cuống lưỡi nâng gần ngạc mềm tạo khe hẹp, luồng khí ma sát nhẹ nhàng thoát ra.", sound: "hē", example: { zh: "喝水", pinyin: "hēshuǐ", vi: "Uống nước" } },
      { letter: "j", name: "j (chi)", hero: { zh: "家", py: "jiā", hv: "Gia", vi: "Gia đình" }, group: "Âm mặt lưỡi (Thiệt diện âm)", read: "Đọc như 'ch' trong tiếng Việt (mặt lưỡi dẹt, không bật hơi)", tip: "Mặt lưỡi nâng cao ép sát ngạc cứng, đẩy luồng khí nhẹ nhàng thoát ra.", sound: "jī", example: { zh: "北京", pinyin: "běijīng", vi: "Bắc Kinh" } },
      { letter: "q", name: "q (chi bật hơi)", hero: { zh: "去", py: "qù", hv: "Khứ", vi: "Đi" }, group: "Âm mặt lưỡi (Thiệt diện âm)", read: "Đọc như 'ch' bật hơi sắc và mạnh", tip: "Khẩu hình giống hệt âm 'j' nhưng nén luồng hơi rất mạnh và phóng dứt khoát ra ngoài.", sound: "qī", example: { zh: "前面", pinyin: "qiánmiàn", vi: "Phía trước" } },
      { letter: "x", name: "x (xi)", hero: { zh: "小", py: "xiǎo", hv: "Tiểu", vi: "Nhỏ / Bé" }, group: "Âm mặt lưỡi (Thiệt diện âm)", read: "Đọc như 'x' trong tiếng Việt (mặt lưỡi dẹt, hơi thoát êm)", tip: "Mặt lưỡi phẳng nâng sát ngạc cứng tạo khe hẹp dài, luồng khí ma sát êm dịu thoát ra.", sound: "xī", example: { zh: "学校", pinyin: "xuéxiào", vi: "Trường học" } },
      { letter: "z", name: "z (chư / tư)", hero: { zh: "早", py: "zǎo", hv: "Tảo", vi: "Sớm" }, group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm)", read: "Đọc như 'ch' nhẹ hoặc 't' kết hợp 'x', không bật hơi", tip: "Đầu lưỡi chạm mặt sau răng cửa trên, mở hé nhẹ cho hơi thoát tự nhiên. Sau z, chữ 'i' đọc là 'ư'.", sound: "zī", example: { zh: "早上", pinyin: "zǎoshang", vi: "Buổi sáng" } },
      { letter: "c", name: "c (xư bật hơi)", hero: { zh: "菜", py: "cài", hv: "Thái", vi: "Món ăn" }, group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm)", read: "Đọc như 'x' hoặc 'th' bật hơi rất mạnh", tip: "Đầu lưỡi ép mặt sau răng trên chặn khí, rồi bật mạnh tạo tiếng xì dứt khoát.", sound: "cī", example: { zh: "厕所", pinyin: "cèsuǒ", vi: "Nhà vệ sinh" } },
      { letter: "s", name: "s (sư nhẹ)", hero: { zh: "三", py: "sān", hv: "Tam", vi: "Số 3" }, group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm)", read: "Đọc như 'x' nhẹ tiếng Việt", tip: "Đầu lưỡi để sát chân răng dưới, luồng khí ma sát êm dịu qua khe răng.", sound: "sī", example: { zh: "司机", pinyin: "sījī", vi: "Tài xế" } },
      { letter: "zh", name: "zh (trư uốn lưỡi)", hero: { zh: "中", py: "zhōng", hv: "Trung", vi: "Trung Quốc" }, group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 'tr' uốn lưỡi, không bật hơi", tip: "Đầu lưỡi uốn cong lên ngạc cứng chặn khí, mở hé nhẹ để hơi thoát ra. Đi với 'i' đọc thành 'ư'.", sound: "zhī", example: { zh: "中国", pinyin: "zhōngguó", vi: "Trung Quốc" } },
      { letter: "ch", name: "ch (trư bật hơi)", hero: { zh: "吃", py: "chī", hv: "Ngật", vi: "Ăn cơm" }, group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 'tr' uốn lưỡi VÀ bật hơi cực mạnh", tip: "Đầu lưỡi cong lên ngạc cứng như âm 'zh', nén hơi thật mạnh rồi bật tung ra ngoài.", sound: "chī", example: { zh: "吃饭", pinyin: "chīfàn", vi: "Ăn cơm" } },
      { letter: "sh", name: "sh (sơ uốn lưỡi)", hero: { zh: "水", py: "shuǐ", hv: "Thủy", vi: "Nước" }, group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 's' uốn cong lưỡi sâu", tip: "Đầu lưỡi cong lên ngạc cứng tạo khe hở, luồng khí ma sát êm đi qua.", sound: "shī", example: { zh: "什么", pinyin: "shénme", vi: "Cái gì" } },
      { letter: "r", name: "r (rư uốn lưỡi)", hero: { zh: "人", py: "rén", hv: "Nhân", vi: "Con người" }, group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 'r' uốn cong lưỡi, giọng trầm êm (không rung lưỡi)", tip: "Đầu lưỡi cong lên ngạc cứng, dây thanh rung nhẹ, luồng khí ma sát thoát ra không rung.", sound: "rī", example: { zh: "认识", pinyin: "rènshi", vi: "Quen biết" } },
      { letter: "y", name: "y (i / di)", hero: { zh: "月", py: "yuè", hv: "Nguyệt", vi: "Mặt trăng" }, group: "Bán nguyên âm (Khởi đầu vần)", read: "Đọc như 'i' hoặc 'd' (miền Nam)", tip: "Được dùng để mở đầu các âm tiết bắt đầu bằng 'i' hoặc 'ü' khi đứng đầu từ (như yi, ya, ye, yu).", sound: "yī", example: { zh: "衣服", pinyin: "yīfu", vi: "Quần áo" } },
      { letter: "w", name: "w (u / oa)", hero: { zh: "我", py: "wǒ", hv: "Ngã", vi: "Tôi / Ta" }, group: "Bán nguyên âm (Khởi đầu vần)", read: "Đọc như 'u' hoặc 'oa' tròn môi", tip: "Được dùng để mở đầu các âm tiết bắt đầu bằng 'u' khi đứng đầu từ (như wu, wa, wo).", sound: "wū", example: { zh: "我们", pinyin: "wǒmen", vi: "Chúng tôi" } }
    ],

    // 36 VẬN MẪU (YUNMU - 韵母) KÈM CHỮ HÁN ĐẠI DIỆN
    finals: [
      { letter: "a", hero: { zh: "大", py: "dà", hv: "Đại", vi: "To lớn" }, type: "Vận mẫu đơn", read: "Đọc như 'a' trong tiếng Việt", tip: "Miệng mở to, lưỡi ở vị trí thấp tự nhiên.", sound: "ā", example: { zh: "大", pinyin: "dà", vi: "To lớn" } },
      { letter: "o", hero: { zh: "我", py: "wǒ", hv: "Ngã", vi: "Tôi" }, type: "Vận mẫu đơn", read: "Đọc như 'ua' hoặc 'ô' tròn môi", tip: "Môi tròn nhô về phía trước, cuống lưỡi nâng cao.", sound: "ō", example: { zh: "波", pinyin: "bō", vi: "Sóng" } },
      { letter: "e", hero: { zh: "饿", py: "è", hv: "Ngạ", vi: "Đói" }, type: "Vận mẫu đơn", read: "Đọc như 'ưa' hoặc 'ơ'", tip: "Miệng hé dẹt, phát âm lùi sâu vào họng. Rất nhiều người mới học nhầm sang 'e' Việt.", sound: "ē", example: { zh: "喝", pinyin: "hē", vi: "Uống" } },
      { letter: "i", hero: { zh: "你", py: "nǐ", hv: "Nhĩ", vi: "Bạn" }, type: "Vận mẫu đơn", read: "Đọc như 'i' (sau zh,ch,sh,r,z,c,s đọc là 'ư')", tip: "Khóe miệng kéo dẹt sang hai bên như mỉm cười.", sound: "yī", example: { zh: "你", pinyin: "nǐ", vi: "Bạn" } },
      { letter: "u", hero: { zh: "路", py: "lù", hv: "Lộ", vi: "Con đường" }, type: "Vận mẫu đơn", read: "Đọc như 'u' trong tiếng Việt", tip: "Môi chu tròn nhỏ, cuống lưỡi nâng cao về phía sau.", sound: "wū", example: { zh: "路", pinyin: "lù", vi: "Con đường" } },
      { letter: "ü", hero: { zh: "绿", py: "lǜ", hv: "Lục", vi: "Màu xanh" }, type: "Vận mẫu đơn", read: "Đọc tròn môi giữa 'uy' và 'u'", tip: "Khẩu hình tròn như huýt sáo, cố định môi và phát âm 'i'.", sound: "yǖ", example: { zh: "绿", pinyin: "lǜ", vi: "Màu xanh lá" } },
      { letter: "ai", hero: { zh: "爱", py: "ài", hv: "Ái", vi: "Yêu thích" }, type: "Vận mẫu kép", read: "Đọc như 'ai' trong tiếng Việt", tip: "Bắt đầu từ âm 'a' rồi trượt nhanh và êm sang 'i'.", sound: "āi", example: { zh: "白", pinyin: "bái", vi: "Trắng" } },
      { letter: "ei", hero: { zh: "北", py: "běi", hv: "Bắc", vi: "Phía Bắc" }, type: "Vận mẫu kép", read: "Đọc như 'ây' trong tiếng Việt", tip: "Bắt đầu từ âm 'e' rồi trượt êm sang 'i'.", sound: "ēi", example: { zh: "北", pinyin: "běi", vi: "Phía Bắc" } },
      { letter: "ui", hero: { zh: "水", py: "shuǐ", hv: "Thủy", vi: "Nước" }, type: "Vận mẫu kép", read: "Đọc như 'uây' trong tiếng Việt", tip: "Thực chất là 'uei', bắt đầu từ 'u' lướt qua 'e' đến 'i'.", sound: "uī", example: { zh: "水", pinyin: "shuǐ", vi: "Nước" } },
      { letter: "ao", hero: { zh: "高", py: "gāo", hv: "Cao", vi: "Chiều cao" }, type: "Vận mẫu kép", read: "Đọc như 'ao' trong tiếng Việt", tip: "Mở miệng âm 'a' rồi thu tròn môi sang âm 'o'.", sound: "āo", example: { zh: "高", pinyin: "gāo", vi: "Cao" } },
      { letter: "ou", hero: { zh: "头", py: "tóu", hv: "Đầu", vi: "Cái đầu" }, type: "Vận mẫu kép", read: "Đọc như 'âu' trong tiếng Việt", tip: "Bắt đầu từ âm 'o' rồi thu tròn môi chuyển sang 'u'.", sound: "ōu", example: { zh: "狗", pinyin: "gǒu", vi: "Con chó" } },
      { letter: "iu", hero: { zh: "九", py: "jiǔ", hv: "Cửu", vi: "Số 9" }, type: "Vận mẫu kép", read: "Đọc như 'yêu' trong tiếng Việt", tip: "Thực chất là 'iou', bắt đầu từ 'i' lướt sang 'u'.", sound: "iū", example: { zh: "九", pinyin: "jiǔ", vi: "Số 9" } },
      { letter: "ie", hero: { zh: "写", py: "xiě", hv: "Tả", vi: "Viết lách" }, type: "Vận mẫu kép", read: "Đọc như 'dia' hoặc 'i-ê'", tip: "Bắt đầu từ âm 'i' rồi lướt sang âm 'ê'.", sound: "iē", example: { zh: "写", pinyin: "xiě", vi: "Viết" } },
      { letter: "üe", hero: { zh: "月", py: "yuè", hv: "Nguyệt", vi: "Mặt trăng" }, type: "Vận mẫu kép", read: "Đọc như 'uy-ê'", tip: "Bắt đầu từ âm 'ü' tròn môi rồi lướt sang âm 'ê'.", sound: "yuē", example: { zh: "月", pinyin: "yuè", vi: "Mặt trăng / tháng" } },
      { letter: "er", hero: { zh: "二", py: "èr", hv: "Nhị", vi: "Số 2" }, type: "Vận mẫu đặc biệt", read: "Đọc như 'ơ' kết hợp uốn cong đầu lưỡi", tip: "Phát âm 'e' đồng thời cuộn đầu lưỡi lên ngạc cứng.", sound: "ēr", example: { zh: "二", pinyin: "èr", vi: "Số 2" } },
      { letter: "ia", hero: { zh: "家", py: "jiā", hv: "Gia", vi: "Nhà cửa" }, type: "Vận mẫu kép", read: "Đọc như 'ia' trong tiếng Việt", tip: "Bắt đầu từ âm 'i' rồi mở rộng miệng sang 'a'.", sound: "yā", example: { zh: "家", pinyin: "jiā", vi: "Nhà" } },
      { letter: "ua", hero: { zh: "花", py: "huā", hv: "Hoa", vi: "Bông hoa" }, type: "Vận mẫu kép", read: "Đọc như 'oa' trong tiếng Việt", tip: "Bắt đầu từ âm 'u' tròn môi rồi mở rộng miệng sang 'a'.", sound: "wā", example: { zh: "花", pinyin: "huā", vi: "Hoa" } },
      { letter: "uo", hero: { zh: "桌", py: "zhuō", hv: "Trác", vi: "Cái bàn" }, type: "Vận mẫu kép", read: "Đọc như 'ua' hoặc 'u-ô'", tip: "Bắt đầu từ âm 'u' tròn môi rồi lướt sang 'o'.", sound: "wō", example: { zh: "桌", pinyin: "zhuō", vi: "Bàn" } },
      { letter: "uai", hero: { zh: "快", py: "kuài", hv: "Khoái", vi: "Nhanh chóng" }, type: "Vận mẫu kép", read: "Đọc như 'oai' trong tiếng Việt", tip: "Bắt đầu từ 'u' lướt nhanh sang 'a' và kết thúc ở 'i'.", sound: "wāi", example: { zh: "快", pinyin: "kuài", vi: "Nhanh" } },
      { letter: "an", hero: { zh: "安", py: "ān", hv: "An", vi: "Bình an" }, type: "Vận mẫu mũi trước", read: "Đọc như 'an' trong tiếng Việt", tip: "Bắt đầu từ 'a', kết thúc áp đầu lưỡi lên nướu răng trên.", sound: "ān", example: { zh: "看", pinyin: "kàn", vi: "Nhìn" } },
      { letter: "en", hero: { zh: "门", py: "mén", hv: "Môn", vi: "Cánh cửa" }, type: "Vận mẫu mũi trước", read: "Đọc như 'ân' trong tiếng Việt", tip: "Bắt đầu từ 'e' (ưa) rồi đưa đầu lưỡi lên nướu trên.", sound: "ēn", example: { zh: "门", pinyin: "mén", vi: "Cửa" } },
      { letter: "in", hero: { zh: "新", py: "xīn", hv: "Tân", vi: "Mới mẻ" }, type: "Vận mẫu mũi trước", read: "Đọc như 'in' trong tiếng Việt", tip: "Bắt đầu từ 'i' rồi đưa đầu lưỡi lên nướu trên chặn khí.", sound: "yīn", example: { zh: "新", pinyin: "xīn", vi: "Mới" } },
      { letter: "un", hero: { zh: "春", py: "chūn", hv: "Xuân", vi: "Mùa xuân" }, type: "Vận mẫu mũi trước", read: "Đọc như 'uân' trong tiếng Việt", tip: "Thực chất là 'uen', bắt đầu từ 'u' lướt sang 'en'.", sound: "wēn", example: { zh: "春", pinyin: "chūn", vi: "Mùa xuân" } },
      { letter: "ün", hero: { zh: "云", py: "yún", hv: "Vân", vi: "Mây trời" }, type: "Vận mẫu mũi trước", read: "Đọc như 'uyn' tròn môi", tip: "Bắt đầu từ 'ü' tròn môi rồi đưa lưỡi lên tạo âm mũi 'n'.", sound: "yūn", example: { zh: "云", pinyin: "yún", vi: "Mây" } },
      { letter: "ian", hero: { zh: "天", py: "tiān", hv: "Thiên", vi: "Trời / Ngày" }, type: "Vận mẫu mũi trước", read: "Đọc như 'iên' trong tiếng Việt", tip: "Bắt đầu từ 'i' rồi lướt qua 'ê' sang 'n' (không đọc là i-an).", sound: "yān", example: { zh: "见", pinyin: "jiàn", vi: "Gặp" } },
      { letter: "uan", hero: { zh: "关", py: "guān", hv: "Quan", vi: "Đóng lại" }, type: "Vận mẫu mũi trước", read: "Đọc như 'oan' trong tiếng Việt", tip: "Bắt đầu từ 'u' tròn môi rồi mở sang 'an'.", sound: "wān", example: { zh: "关", pinyin: "guān", vi: "Đóng" } },
      { letter: "üan", hero: { zh: "远", py: "yuǎn", hv: "Viễn", vi: "Xa xôi" }, type: "Vận mẫu mũi trước", read: "Đọc như 'uyên' tròn môi", tip: "Bắt đầu từ 'ü' tròn môi rồi lướt sang 'an' (đọc thành uyên).", sound: "yuān", example: { zh: "远", pinyin: "yuǎn", vi: "Xa" } },
      { letter: "ang", hero: { zh: "忙", py: "máng", hv: "Mang", vi: "Bận rộn" }, type: "Vận mẫu mũi sau", read: "Đọc như 'ang' trong tiếng Việt", tip: "Mở rộng miệng phát âm 'a', cuống lưỡi nâng lên ngạc mềm.", sound: "āng", example: { zh: "忙", pinyin: "máng", vi: "Bận rộn" } },
      { letter: "eng", hero: { zh: "冷", py: "lěng", hv: "Lãnh", vi: "Lạnh" }, type: "Vận mẫu mũi sau", read: "Đọc như 'âng' trong tiếng Việt", tip: "Phát âm 'e' rồi nâng cuống lưỡi lên tạo âm mũi sau.", sound: "ēng", example: { zh: "冷", pinyin: "lěng", vi: "Lạnh" } },
      { letter: "ing", hero: { zh: "听", py: "tīng", hv: "Thính", vi: "Nghe" }, type: "Vận mẫu mũi sau", read: "Đọc như 'inh' trong tiếng Việt", tip: "Phát âm 'i' kéo dài kết hợp âm mũi sau 'ng'.", sound: "yīng", example: { zh: "听", pinyin: "tīng", vi: "Nghe" } },
      { letter: "ong", hero: { zh: "红", py: "hóng", hv: "Hồng", vi: "Màu đỏ" }, type: "Vận mẫu mũi sau", read: "Đọc như 'ung' tròn môi", tip: "Môi chu tròn, nâng cuống lưỡi lên ngạc mềm.", sound: "ōng", example: { zh: "红", pinyin: "hóng", vi: "Màu đỏ" } },
      { letter: "iang", hero: { zh: "想", py: "xiǎng", hv: "Tưởng", vi: "Nghĩ / Nhớ" }, type: "Vận mẫu mũi sau", read: "Đọc như 'iang' trong tiếng Việt", tip: "Bắt đầu từ 'i' rồi lướt nhanh sang 'ang'.", sound: "yāng", example: { zh: "想", pinyin: "xiǎng", vi: "Muốn / nhớ" } },
      { letter: "uang", hero: { zh: "黄", py: "huáng", hv: "Hoàng", vi: "Màu vàng" }, type: "Vận mẫu mũi sau", read: "Đọc như 'oang' trong tiếng Việt", tip: "Bắt đầu từ 'u' tròn môi rồi mở sang 'ang'.", sound: "wāng", example: { zh: "黄", pinyin: "huáng", vi: "Màu vàng" } },
      { letter: "iong", hero: { zh: "用", py: "yòng", hv: "Dụng", vi: "Sử dụng" }, type: "Vận mẫu mũi sau", read: "Đọc như 'i-ung' tròn môi", tip: "Bắt đầu từ 'i' rồi lướt nhanh sang 'ong'.", sound: "yōng", example: { zh: "用", pinyin: "yòng", vi: "Dùng" } },
      { letter: "ueng", hero: { zh: "翁", py: "wēng", hv: "Ông", vi: "Ông lão" }, type: "Vận mẫu mũi sau", read: "Đọc như 'uâng' trong tiếng Việt", tip: "Bắt đầu từ 'u' tròn môi rồi lướt sang 'eng'.", sound: "wēng", example: { zh: "翁", pinyin: "wēng", vi: "Ông lão" } }
    ],

    // 4 THANH ĐIỆU + KHINH THANH (TONES - 声调)
    tones: [
      {
        toneNum: 1,
        symbol: "— (ā)",
        name: "Thanh 1 (Âm bình - 55)",
        pitch: "Cao độ 55",
        read: "Cao, bằng phẳng và kéo dài đều",
        desc: "Giữ âm vực ở mức cao nhất (mức 5), ngân vang đều, không lên giọng cũng không hạ giọng.",
        example: { zh: "妈", pinyin: "mā", hv: "Mã", vi: "Mẹ (thanh 1)" },
        compare: [
          { pinyin: "mā", zh: "妈", hv: "Mã", vi: "Mẹ" },
          { pinyin: "bā", zh: "八", hv: "Bát", vi: "Số 8" },
          { pinyin: "tā", zh: "他", hv: "Tha", vi: "Anh ấy" }
        ]
      },
      {
        toneNum: 2,
        symbol: "／ (á)",
        name: "Thanh 2 (Dương bình - 35)",
        pitch: "Cao độ 35",
        read: "Đi từ giữa vút lên cao, giống dấu sắc",
        desc: "Bắt đầu từ tầm trung (mức 3) rồi vút mạnh lên đỉnh (mức 5), tựa như khi hỏi ngạc nhiên: 'Hả?'.",
        example: { zh: "麻", pinyin: "má", hv: "Ma", vi: "Cây gai (thanh 2)" },
        compare: [
          { pinyin: "má", zh: "麻", hv: "Ma", vi: "Cây gai" },
          { pinyin: "bá", zh: "拔", hv: "Bạt", vi: "Nhổ / rút" },
          { pinyin: "tá", zh: "达", hv: "Đạt", vi: "Đạt được" }
        ]
      },
      {
        toneNum: 3,
        symbol: "∨ (ǎ)",
        name: "Thanh 3 (Thượng thanh - 214)",
        pitch: "Cao độ 214",
        read: "Hạ sâu xuống đáy rồi bật nhẹ lên",
        desc: "Xuống sâu nhất cổ họng (mức 1) rồi lượn nhẹ lên mức 4. Giống sự kết hợp giữa dấu hỏi và dấu nặng.",
        example: { zh: "马", pinyin: "mǎ", hv: "Mã", vi: "Con ngựa (thanh 3)" },
        compare: [
          { pinyin: "mǎ", zh: "马", hv: "Mã", vi: "Con ngựa" },
          { pinyin: "bǎ", zh: "把", hv: "Bả", vi: "Cầm / nắm" },
          { pinyin: "tǎ", zh: "塔", hv: "Tháp", vi: "Cây tháp" }
        ]
      },
      {
        toneNum: 4,
        symbol: "＼ (à)",
        name: "Thanh 4 (Khứ thanh - 51)",
        pitch: "Cao độ 51",
        read: "Rơi từ cao nhất xuống thấp nhất, dứt khoát",
        desc: "Phát âm dứt khoát, giọng hạ thật nhanh và mạnh từ đỉnh (mức 5) xuống đáy (mức 1) như ra lệnh.",
        example: { zh: "骂", pinyin: "mà", hv: "Mạ", vi: "Mắng chửi (thanh 4)" },
        compare: [
          { pinyin: "mà", zh: "骂", hv: "Mạ", vi: "Mắng mỏ" },
          { pinyin: "bà", zh: "爸", hv: "Ba", vi: "Bố / ba" },
          { pinyin: "tà", zh: "踏", hv: "Đạp", vi: "Giẫm lên" }
        ]
      },
      {
        toneNum: 5,
        symbol: "· (a)",
        name: "Khinh thanh (Neutral tone)",
        pitch: "Ngắn, nhẹ",
        read: "Đọc thật nhẹ, ngắn và êm",
        desc: "Không mang dấu thanh điệu, đọc lướt qua rất nhanh, phụ thuộc vào cao độ của âm tiết đứng liền trước.",
        example: { zh: "吗", pinyin: "ma", hv: "Ma", vi: "Không? (trợ từ)" },
        compare: [
          { pinyin: "bàba", zh: "爸爸", hv: "Ba ba", vi: "Bố (chữ ba thứ 2 là khinh thanh)" },
          { pinyin: "māma", zh: "妈妈", hv: "Ma ma", vi: "Mẹ (chữ ma thứ 2 là khinh thanh)" },
          { pinyin: "shénme", zh: "什么", hv: "Thập ma", vi: "Cái gì" }
        ]
      }
    ],

    // 6 QUY TẮC BIẾN ĐIỆU CỐT LÕI
    rules: [
      {
        title: "1. Biến điệu hai thanh 3 đi liền nhau (3 + 3 -> 2 + 3)",
        desc: "Khi hai âm tiết cùng mang thanh 3 đứng cạnh nhau, âm tiết thứ nhất sẽ tự động chuyển thành thanh 2 (dấu sắc). Cách viết Pinyin vẫn giữ nguyên dấu thanh 3 ban đầu.",
        examples: [
          { origin: "你好 (nǐ hǎo)", speak: "ní hǎo", vi: "Đọc thành 'ní hǎo' (Xin chào)" },
          { origin: "很好 (hěn hǎo)", speak: "hén hǎo", vi: "Đọc thành 'hén hǎo' (Rất tốt)" },
          { origin: "手表 (shǒu biǎo)", speak: "shóu biǎo", vi: "Đọc thành 'shóu biǎo' (Đồng hồ đeo tay)" }
        ]
      },
      {
        title: "2. Biến điệu của chữ '一' (yī)",
        desc: "Nguyên bản chữ '一' mang thanh 1 (yī) khi đếm số hoặc đứng một mình. Khi đi trước âm thanh 4, nó đổi thành thanh 2 (yí). Khi đi trước âm mang thanh 1, 2, 3, nó đổi thành thanh 4 (yì).",
        examples: [
          { origin: "一个 (yī gè)", speak: "yí gè", vi: "Đứng trước thanh 4 đổi thành 'yí' (Một cái)" },
          { origin: "一天 (yī tiān)", speak: "yì tiān", vi: "Đứng trước thanh 1 đổi thành 'yì' (Một ngày)" },
          { origin: "一年 (yī nián)", speak: "yì nián", vi: "Đứng trước thanh 2 đổi thành 'yì' (Một năm)" },
          { origin: "一起 (yī qǐ)", speak: "yì qǐ", vi: "Đứng trước thanh 3 đổi thành 'yì' (Cùng nhau)" }
        ]
      },
      {
        title: "3. Biến điệu của chữ '不' (bù)",
        desc: "Nguyên bản chữ '不' mang thanh 4 (bù). Tuy nhiên khi đứng ngay trước một âm mang thanh 4 khác, '不' sẽ tự động đổi sang thanh 2 (bú) để tạo sự mượt mà khi phát âm.",
        examples: [
          { origin: "不是 (bù shì)", speak: "bú shì", vi: "Đứng trước thanh 4 đổi thành 'bú' (Không phải)" },
          { origin: "不对 (bù duì)", speak: "bú duì", vi: "Đứng trước thanh 4 đổi thành 'bú' (Không đúng)" },
          { origin: "不好 (bù hǎo)", speak: "bù hǎo", vi: "Đứng trước thanh 3 giữ nguyên 'bù' (Không tốt)" }
        ]
      },
      {
        title: "4. Thứ tự đặt dấu thanh điệu trên Vận mẫu",
        desc: "Dấu thanh điệu luôn được đánh trên nguyên âm chính theo thứ tự ưu tiên: a -> o -> e -> i -> u -> ü. Trường hợp đặc biệt: khi 'i' và 'u' đi liền nhau ('iu' hoặc 'ui'), dấu thanh điệu luôn nằm ở nguyên âm đứng sau cùng.",
        examples: [
          { origin: "xièxie (x-i-e)", speak: "xièxie", vi: "Ưu tiên 'e' trước 'i' -> đặt trên 'e'" },
          { origin: "shuǐ (sh-u-i)", speak: "shuǐ", vi: "Cặp 'ui' -> đặt trên chữ đi sau là 'i'" },
          { origin: "liù (l-i-u)", speak: "liù", vi: "Cặp 'iu' -> đặt trên chữ đi sau là 'u'" }
        ]
      },
      {
        title: "5. Quy tắc bỏ dấu hai chấm của 'ü'",
        desc: "Khi vận mẫu 'ü' kết hợp với các thanh mẫu mặt lưỡi 'j, q, x' và bán nguyên âm 'y', dấu 2 chấm trên đầu chữ 'ü' sẽ được lược bỏ (viết là ju, qu, xu, yu) nhưng VẪN PHẢI PHÁT ÂM LÀ 'ü' tròn môi. Khi ghép với 'n, l' thì vẫn giữ nguyên (nü, lü).",
        examples: [
          { origin: "j + ü -> ju", speak: "jū", vi: "Viết là ju nhưng đọc là 'jü' (居)" },
          { origin: "q + ü -> qu", speak: "qū", vi: "Viết là qu nhưng đọc là 'qü' (去)" },
          { origin: "x + ü -> xu", speak: "xū", vi: "Viết là xu nhưng đọc là 'xü' (需)" }
        ]
      },
      {
        title: "6. Âm uốn lưỡi (Nhi hóa - 儿化音)",
        desc: "Thường gặp trong khẩu ngữ tiếng Trung (đặc biệt là phương ngữ Bắc Kinh). Khi kết hợp chữ '儿', người nói sẽ uốn cong đầu lưỡi lên vòm họng.",
        examples: [
          { origin: "这儿", speak: "zhèr", vi: "Ở đây (zhèr)" },
          { origin: "哪儿", speak: "nǎr", vi: "Ở đâu (nǎr)" },
          { origin: "一点儿", speak: "yìdiǎnr", vi: "Một chút / một ít (yìdiǎnr)" }
        ]
      }
    ]
  };

  const PY = window.GH_PinyinChart = {
    initialized: false,
    currentTab: 'alphabet', // 'alphabet' | 'hanzi' | 'initials' | 'finals' | 'tones' | 'rules' | 'radicals' | 'quiz'
    searchQuery: '',
    selectedHanziLetter: 'A',
    radicalFilterStrokes: 'all',
    quizState: {
      currentQuestion: null,
      score: 0,
      total: 0
    }
  };

  // Sound playback helper
  function playSound(text) {
    if (!text) return;
    if (typeof window.speakWord === 'function') {
      window.speakWord(text);
    } else if (window.GH_Audio && typeof window.GH_Audio.play === 'function') {
      window.GH_Audio.play(text);
    } else if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'zh-CN';
        u.rate = 0.85;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    }
  }

  // Jump to Writing mode for Hanzi
  function openPracticeWriting(word) {
    if (!word) return;
    if (window.GH_Writing && typeof window.GH_Writing.openWord === 'function') {
      window.GH_Writing.openWord(word);
    } else if (typeof window.switchMode === 'function') {
      window.switchMode('writing');
    }
  }

  // Manage HSK Level Badge on header (Hide in Pinyin mode because it is universal foundation)
  function handleHskBadgeVisibility(mode) {
    const badge = document.querySelector('.header-hsk-badge');
    if (!badge) return;
    if (mode === 'pinyin') {
      badge.style.display = 'none';
    } else {
      badge.style.display = '';
    }
  }

  // Initialize UI once
  function init() {
    const container = document.getElementById('pinyin-mode');
    if (!container) return;

    handleHskBadgeVisibility('pinyin');

    if (!PY.initialized) {
      renderBaseLayout(container);
      bindEvents(container);
      PY.initialized = true;
    }

    renderCurrentTab();
  }

  // Render base page skeleton
  function renderBaseLayout(container) {
    container.innerHTML = `
      <div class="py-header">
        <div class="py-title-box">
          <div class="py-title-row">
            <h2><span>🔤</span> Bảng Chữ Cái & Chữ Hán Toàn Diện</h2>
            <span class="py-universal-badge">Nền tảng căn bản • Dành cho mọi cấp độ</span>
          </div>
          <p>Hệ thống ngữ âm & văn tự Trung văn chuẩn mực: 26 Chữ cái Pinyin (A-Z) kèm Chữ Hán tiêu biểu, âm Hán Việt, 23 Thanh mẫu, 36 Vận mẫu, 4 Thanh điệu và 214 Bộ thủ.</p>
        </div>

        <div class="py-hsk-note-banner">
          <span class="py-note-icon">💡</span>
          <div class="py-note-body">
            <b>Lưu ý nền tảng:</b>
            <p>Bảng chữ cái Bính âm (Pinyin), Chữ Hán căn bản và 214 Bộ thủ là hệ thống văn tự gốc của toàn bộ tiếng Trung, được áp dụng chung và <strong>hoàn toàn không phân chia theo cấp độ HSK</strong> (toàn bộ từ vựng HSK 1 đến HSK 6 đều được xây dựng từ các chữ và âm này).</p>
          </div>
        </div>

        <div class="py-stats-row">
          <div class="py-stat-card">
            <b>26</b>
            <span>Chữ cái Pinyin (A-Z)</span>
          </div>
          <div class="py-stat-card">
            <b>100+</b>
            <span>Chữ Hán căn bản</span>
          </div>
          <div class="py-stat-card">
            <b>23</b>
            <span>Thanh mẫu (声母)</span>
          </div>
          <div class="py-stat-card">
            <b>36</b>
            <span>Vận mẫu (韵母)</span>
          </div>
          <div class="py-stat-card">
            <b>214</b>
            <span>Bộ thủ Khang Hy (部首)</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="py-tabs-nav" id="py-tabs-nav" role="tablist" aria-label="Phân loại ngữ âm & văn tự">
        <button class="py-tab-btn active" data-tab="alphabet">🔤 Chữ Cái & Chữ Hán (A-Z)</button>
        <button class="py-tab-btn" data-tab="hanzi">📖 Tra Cứu Chữ Hán (A-Z)</button>
        <button class="py-tab-btn" data-tab="initials">📌 Thanh Mẫu (23)</button>
        <button class="py-tab-btn" data-tab="finals">🎯 Vận Mẫu (36)</button>
        <button class="py-tab-btn" data-tab="tones">🎶 Thanh Điệu (4+1)</button>
        <button class="py-tab-btn" data-tab="rules">💡 Quy Tắc Biến Điệu</button>
        <button class="py-tab-btn" data-tab="radicals">🧩 214 Bộ Thủ Chữ Hán</button>
        <button class="py-tab-btn" data-tab="quiz">🧠 Luyện Phản Xạ Âm</button>
      </nav>

      <!-- Quick Search Bar -->
      <div class="py-search-bar" id="py-search-bar">
        <span class="py-search-icon">🔍</span>
        <input type="text" id="py-search-input" placeholder="Tìm kiếm nhanh chữ cái, chữ Hán, Pinyin, âm Hán Việt hoặc bộ thủ..." autocomplete="off">
      </div>

      <!-- Content Container -->
      <div id="py-tab-content"></div>
    `;
  }

  // Bind UI Events
  function bindEvents(container) {
    // Tab switching
    container.querySelectorAll('.py-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.py-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        PY.currentTab = btn.dataset.tab;
        renderCurrentTab();
      });
    });

    // Search input
    const searchInput = container.querySelector('#py-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        PY.searchQuery = e.target.value.trim().toLowerCase();
        renderCurrentTab();
      });
    }
  }

  // Render content according to active tab
  function renderCurrentTab() {
    const content = document.getElementById('py-tab-content');
    const searchBar = document.getElementById('py-search-bar');
    if (!content) return;

    if (searchBar) {
      searchBar.style.display = (PY.currentTab === 'alphabet' || PY.currentTab === 'hanzi' || PY.currentTab === 'initials' || PY.currentTab === 'finals' || PY.currentTab === 'radicals') ? 'flex' : 'none';
    }

    if (PY.currentTab === 'alphabet') {
      renderAlphabet(content);
    } else if (PY.currentTab === 'hanzi') {
      renderHanziExplorer(content);
    } else if (PY.currentTab === 'initials') {
      renderInitials(content);
    } else if (PY.currentTab === 'finals') {
      renderFinals(content);
    } else if (PY.currentTab === 'tones') {
      renderTones(content);
    } else if (PY.currentTab === 'rules') {
      renderRules(content);
    } else if (PY.currentTab === 'radicals') {
      renderRadicals(content);
    } else if (PY.currentTab === 'quiz') {
      renderQuiz(content);
    }

    attachActionListeners(content);
  }

  // 1. Render 26 Chữ Cái Kèm Chữ Hán Tiêu Biểu & Âm Hán Việt
  function renderAlphabet(container) {
    let items = PY_DATA.alphabet26;
    if (PY.searchQuery) {
      items = items.filter(it => 
        it.char.toLowerCase().includes(PY.searchQuery) ||
        it.name.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
        it.role.toLowerCase().includes(PY.searchQuery) ||
        (it.hero && (it.hero.zh.includes(PY.searchQuery) || it.hero.hv.toLowerCase().includes(PY.searchQuery) || it.hero.vi.toLowerCase().includes(PY.searchQuery))) ||
        (it.hanzi && it.hanzi.some(h => h.zh.includes(PY.searchQuery) || h.hv.toLowerCase().includes(PY.searchQuery) || h.vi.toLowerCase().includes(PY.searchQuery)))
      );
    }

    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">BẢNG CHỮ CÁI & CHỮ HÁN TIÊU BIỂU (A - Z)</div>
        <h3>26 Chữ cái La-tinh Pinyin & Các Chữ Hán Căn Bản</h3>
        <p>Mỗi chữ cái đều có <strong>Chữ Hán đại diện nổi bật</strong>, âm Hán Việt tương ứng, mẹo phát âm và danh sách chữ Hán thông dụng. Bấm vào chữ Hán hoặc nút 🔊 để nghe phát âm, bấm ✍️ để tập viết!</p>
      </div>

      <div class="py-alphabet-grid">
        ${items.map(it => `
          <div class="py-letter-card">
            <!-- Header card: Ký tự chữ cái + Chữ Hán đại diện to -->
            <div class="py-letter-top">
              <div class="py-letter-badges">
                <span class="py-letter-main">${it.char}</span>
                <span class="py-letter-role">${it.role}</span>
              </div>
              <div class="py-hero-hanzi-wrap" data-sound="${it.hero.zh}" title="Nghe phát âm chữ Hán: ${it.hero.zh} (${it.hero.py})">
                <span class="py-hero-hanzi">${it.hero.zh}</span>
                <div class="py-hero-info">
                  <span class="py-hero-py">${it.hero.py}</span>
                  <small class="py-hero-hv">${it.hero.hv} • ${it.hero.vi}</small>
                </div>
                <button class="py-audio-mini-btn" type="button" data-sound="${it.hero.zh}">🔊</button>
              </div>
            </div>

            <!-- Tên gọi chữ cái & Cách phát âm -->
            <div class="py-letter-name">
              <span class="py-name-tag">Tên gọi:</span>
              <b>${it.name}</b>
              <span class="py-pinyin-sub">/${it.pinyin}/</span>
              <button class="py-audio-mini-btn" type="button" data-sound="${it.sound}" title="Nghe âm chữ cái">🔊</button>
            </div>

            <div class="py-letter-read">
              <strong>Cách đọc:</strong> ${it.read}
            </div>

            <div class="py-letter-tip">
              <em>Mẹo:</em> ${it.tip}
            </div>

            <!-- Danh sách chữ Hán tiêu biểu bắt đầu bằng chữ cái này -->
            <div class="py-hanzi-group">
              <div class="py-hanzi-group-title">
                <span>Chữ Hán thông dụng bắt đầu bằng "${it.char[0]}":</span>
              </div>
              <div class="py-hanzi-chips">
                ${(it.hanzi || []).map(hz => `
                  <div class="py-hanzi-chip" data-sound="${hz.zh}" title="Bấm nghe phát âm: ${hz.zh}">
                    <span class="py-hz-char">${hz.zh}</span>
                    <div class="py-hz-detail">
                      <span class="py-hz-py">${hz.py}</span>
                      <span class="py-hz-hv">${hz.hv}</span>
                      <span class="py-hz-vi">${hz.vi}</span>
                    </div>
                    <div class="py-hz-actions">
                      <button class="py-hz-btn" type="button" data-sound="${hz.zh}" title="Nghe đọc">🔊</button>
                      <button class="py-hz-btn py-hz-write-btn" type="button" data-write="${hz.zh}" title="Tập viết chữ này">✍️</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 2. Render Tra Cứu Chữ Hán Theo Vần A-Z (Alphabetical Hanzi Explorer)
  function renderHanziExplorer(container) {
    const letters = PY_DATA.alphabet26.map(a => a.char[0]);

    // Lấy danh sách chữ Hán theo ký tự được chọn
    let targetObj = PY_DATA.alphabet26.find(a => a.char[0] === PY.selectedHanziLetter);
    let hanziList = targetObj ? targetObj.hanzi : [];

    if (PY.searchQuery) {
      // Tìm trên toàn bộ từ điển nếu người dùng gõ tìm kiếm
      hanziList = [];
      PY_DATA.alphabet26.forEach(it => {
        (it.hanzi || []).forEach(hz => {
          if (
            hz.zh.includes(PY.searchQuery) ||
            hz.py.toLowerCase().includes(PY.searchQuery) ||
            hz.hv.toLowerCase().includes(PY.searchQuery) ||
            hz.vi.toLowerCase().includes(PY.searchQuery)
          ) {
            hanziList.push(hz);
          }
        });
      });
    }

    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">TRA CỨU CHỮ HÁN CĂN BẢN (A - Z)</div>
        <h3>Từ Điển Chữ Hán Nhập Môn Theo Vần Bính Âm</h3>
        <p>Chọn chữ cái từ A đến Z để khám phá các chữ Hán căn bản nhất. Bấm 🔊 để nghe phát âm chuẩn, bấm ✍️ để chuyển sang chế độ tập viết nét chữ trên ô mễ tự!</p>
      </div>

      <!-- Alphabet Letter Pills Selector -->
      <div class="py-letter-selector-bar">
        ${letters.map(lt => `
          <button class="py-letter-pill ${lt === PY.selectedHanziLetter && !PY.searchQuery ? 'active' : ''}" type="button" data-letter="${lt}">
            ${lt}
          </button>
        `).join('')}
      </div>

      <div class="py-hanzi-explorer-results">
        <div class="py-explorer-header">
          <h4>${PY.searchQuery ? `Kết quả tìm kiếm cho: "${PY.searchQuery}" (${hanziList.length})` : `Các chữ Hán vần "${PY.selectedHanziLetter}" (${hanziList.length} chữ)`}</h4>
        </div>

        <div class="py-hanzi-full-grid">
          ${hanziList.length === 0 ? `
            <div class="py-no-results">Không tìm thấy chữ Hán nào phù hợp với từ khóa "${PY.searchQuery}".</div>
          ` : hanziList.map(h => `
            <div class="py-hanzi-card" data-sound="${h.zh}">
              <div class="py-hz-card-top">
                <span class="py-hz-big-char">${h.zh}</span>
                <div class="py-hz-card-meta">
                  <span class="py-hz-card-py">${h.py}</span>
                  <span class="py-hz-card-hv">[Hán Việt: ${h.hv}]</span>
                </div>
              </div>
              <div class="py-hz-card-vi">
                <strong>Nghĩa:</strong> ${h.vi}
              </div>
              <div class="py-hz-card-actions">
                <button class="py-btn-card-audio" type="button" data-sound="${h.zh}">
                  🔊 Nghe phát âm
                </button>
                <button class="py-btn-card-write" type="button" data-write="${h.zh}">
                  ✍️ Tập viết nét
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Bind letter selector clicks
    container.querySelectorAll('.py-letter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        PY.selectedHanziLetter = pill.dataset.letter;
        PY.searchQuery = '';
        const searchInput = document.getElementById('py-search-input');
        if (searchInput) searchInput.value = '';
        renderHanziExplorer(container);
        attachActionListeners(container);
      });
    });
  }

  // 3. Render 23 Thanh Mẫu (Initials)
  function renderInitials(container) {
    let items = PY_DATA.initials;
    if (PY.searchQuery) {
      items = items.filter(it => 
        it.letter.toLowerCase().includes(PY.searchQuery) ||
        it.name.toLowerCase().includes(PY.searchQuery) ||
        it.group.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
        (it.hero && (it.hero.zh.includes(PY.searchQuery) || it.hero.hv.toLowerCase().includes(PY.searchQuery) || it.hero.vi.toLowerCase().includes(PY.searchQuery))) ||
        (it.example && (it.example.zh.includes(PY.searchQuery) || it.example.vi.toLowerCase().includes(PY.searchQuery)))
      );
    }

    const groups = {};
    items.forEach(it => {
      if (!groups[it.group]) groups[it.group] = [];
      groups[it.group].push(it);
    });

    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">THANH MẪU (声母 - SHENGMU)</div>
        <h3>23 Phụ âm đầu chuẩn tiếng Hán kèm Chữ Hán mẫu</h3>
        <p>Thanh mẫu là phụ âm bắt đầu của mỗi âm tiết trong tiếng Trung. Mỗi phụ âm đi kèm Chữ Hán đại diện to rõ nét để bạn ghi nhớ dễ dàng.</p>
      </div>

      ${Object.keys(groups).map(grp => `
        <div class="py-group-block">
          <h4 class="py-group-title"><span>📂</span> ${grp}</h4>
          <div class="py-cards-grid">
            ${groups[grp].map(it => `
              <div class="py-card" data-sound="${it.sound}">
                <div class="py-card-head">
                  <div class="py-char-box">
                    <span class="py-char">${it.letter}</span>
                    <span class="py-char-name">${it.name}</span>
                  </div>
                  <div class="py-card-hero-hanzi" data-sound="${it.hero.zh}" title="Nghe chữ Hán: ${it.hero.zh}">
                    <span class="py-card-hz">${it.hero.zh}</span>
                    <small>${it.hero.py} (${it.hero.hv})</small>
                  </div>
                  <button class="py-audio-btn" type="button" data-sound="${it.sound}" title="Nghe phát âm">🔊</button>
                </div>
                <div class="py-card-body">
                  <div class="py-read-row">
                    <strong>Đọc tương đương:</strong> <span>${it.read}</span>
                  </div>
                  <div class="py-tip-row">
                    <strong>Khẩu hình:</strong> <span>${it.tip}</span>
                  </div>
                  <div class="py-example-box" data-sound="${it.example.zh}">
                    <span class="py-ex-label">Ví dụ:</span>
                    <b class="py-ex-word">${it.example.zh}</b>
                    <span class="py-ex-pinyin">[${it.example.pinyin}]</span>
                    <span class="py-ex-meaning">${it.example.vi}</span>
                    <button class="py-hz-inline-write" type="button" data-write="${it.example.zh[0]}" title="Tập viết">✍️</button>
                    <span class="py-ex-sound">🔊</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  // 4. Render 36 Vận Mẫu (Finals)
  function renderFinals(container) {
    let items = PY_DATA.finals;
    if (PY.searchQuery) {
      items = items.filter(it => 
        it.letter.toLowerCase().includes(PY.searchQuery) ||
        it.type.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
        (it.hero && (it.hero.zh.includes(PY.searchQuery) || it.hero.hv.toLowerCase().includes(PY.searchQuery) || it.hero.vi.toLowerCase().includes(PY.searchQuery))) ||
        (it.example && (it.example.zh.includes(PY.searchQuery) || it.example.vi.toLowerCase().includes(PY.searchQuery)))
      );
    }

    const types = {};
    items.forEach(it => {
      if (!types[it.type]) types[it.type] = [];
      types[it.type].push(it);
    });

    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">VẬN MẪU (韵母 - YUNMU)</div>
        <h3>36 Nguyên âm và vần chuẩn tiếng Hán kèm Chữ Hán mẫu</h3>
        <p>Bao gồm 6 nguyên âm đơn cốt lõi, 13 nguyên âm kép và 17 nguyên âm mũi (mũi trước -n và mũi sau -ng).</p>
      </div>

      ${Object.keys(types).map(tp => `
        <div class="py-group-block">
          <h4 class="py-group-title"><span>🎯</span> ${tp} (${types[tp].length})</h4>
          <div class="py-cards-grid">
            ${types[tp].map(it => `
              <div class="py-card py-card-final" data-sound="${it.sound}">
                <div class="py-card-head">
                  <div class="py-char-box">
                    <span class="py-char">${it.letter}</span>
                    <span class="py-type-tag">${it.type}</span>
                  </div>
                  <div class="py-card-hero-hanzi" data-sound="${it.hero.zh}" title="Nghe chữ Hán: ${it.hero.zh}">
                    <span class="py-card-hz">${it.hero.zh}</span>
                    <small>${it.hero.py} (${it.hero.hv})</small>
                  </div>
                  <button class="py-audio-btn" type="button" data-sound="${it.sound}" title="Nghe phát âm">🔊</button>
                </div>
                <div class="py-card-body">
                  <div class="py-read-row">
                    <strong>Cách đọc:</strong> <span>${it.read}</span>
                  </div>
                  <div class="py-tip-row">
                    <strong>Lưu ý:</strong> <span>${it.tip}</span>
                  </div>
                  <div class="py-example-box" data-sound="${it.example.zh}">
                    <span class="py-ex-label">Ví dụ:</span>
                    <b class="py-ex-word">${it.example.zh}</b>
                    <span class="py-ex-pinyin">[${it.example.pinyin}]</span>
                    <span class="py-ex-meaning">${it.example.vi}</span>
                    <button class="py-hz-inline-write" type="button" data-write="${it.example.zh[0]}" title="Tập viết">✍️</button>
                    <span class="py-ex-sound">🔊</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  // 5. Render Thanh Điệu (Tones)
  function renderTones(container) {
    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">THANH ĐIỆU (声调 - SHENGDIAO)</div>
        <h3>4 Thanh điệu cơ bản & Khinh thanh</h3>
        <p>Tiếng Trung là ngôn ngữ có thanh điệu. Cùng một âm tiết nhưng khác thanh điệu sẽ tạo ra các chữ Hán với nghĩa hoàn toàn khác nhau!</p>
      </div>

      <!-- Tone Pitch Visualizer -->
      <div class="py-pitch-container">
        <h4>Trực quan hóa cao độ 5 mức âm (1 đến 5)</h4>
        <div class="py-pitch-chart">
          <div class="py-pitch-scale">
            <span>5 (Cao nhất)</span>
            <span>4 (Cao)</span>
            <span>3 (Trung bình)</span>
            <span>2 (Thấp)</span>
            <span>1 (Trầm nhất)</span>
          </div>
          <div class="py-pitch-lines">
            <div class="py-tone-line py-t1" title="Thanh 1: Ngang cao 55">
              <span class="py-line-label">Thanh 1 (55): mā (妈)</span>
            </div>
            <div class="py-tone-line py-t2" title="Thanh 2: Đi lên 35">
              <span class="py-line-label">Thanh 2 (35): má (麻)</span>
            </div>
            <div class="py-tone-line py-t3" title="Thanh 3: Hạ xuống rồi lên 214">
              <span class="py-line-label">Thanh 3 (214): mǎ (马)</span>
            </div>
            <div class="py-tone-line py-t4" title="Thanh 4: Rơi dứt khoát 51">
              <span class="py-line-label">Thanh 4 (51): mà (骂)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tone Cards List -->
      <div class="py-tones-grid">
        ${PY_DATA.tones.map(t => `
          <div class="py-tone-card">
            <div class="py-tone-head">
              <div class="py-tone-symbol">${t.symbol}</div>
              <div>
                <h5>${t.name}</h5>
                <span class="py-pitch-tag">${t.pitch}</span>
              </div>
            </div>
            <div class="py-tone-desc">
              <p><strong>Đặc điểm:</strong> ${t.read}</p>
              <p>${t.desc}</p>
            </div>
            <div class="py-tone-ex-row">
              <div class="py-tone-main-ex" data-sound="${t.example.zh}">
                <span>Chữ Hán đại diện:</span>
                <b class="py-tone-zh-big">${t.example.zh}</b>
                <em>${t.example.pinyin}</em>
                <small>[${t.example.hv} • ${t.example.vi}]</small>
                <button class="py-hz-inline-write" type="button" data-write="${t.example.zh[0]}" title="Tập viết chữ này">✍️</button>
                <span class="py-ex-sound">🔊</span>
              </div>
            </div>
            <div class="py-compare-box">
              <span>Bấm nghe so sánh chữ Hán cùng âm:</span>
              <div class="py-compare-chips">
                ${t.compare.map(c => `
                  <button class="py-chip" type="button" data-sound="${c.zh}">
                    <b class="py-chip-zh">${c.zh}</b> <span>${c.pinyin}</span> <small>(${c.vi})</small>
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 6. Render Quy Tắc Biến Điệu
  function renderRules(container) {
    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">QUY TẮC BIẾN ĐIỆU & PHÁT ÂM</div>
        <h3>6 Quy tắc biến âm quan trọng nhất</h3>
        <p>Nắm vững các quy tắc này giúp bạn phát âm tự nhiên, trôi chảy và nghe hiểu tiếng Trung như người bản xứ.</p>
      </div>

      <div class="py-rules-list">
        ${PY_DATA.rules.map(r => `
          <div class="py-rule-card">
            <h4>${r.title}</h4>
            <p class="py-rule-desc">${r.desc}</p>
            <div class="py-rule-examples">
              ${r.examples.map(ex => `
                <div class="py-rule-ex-item" data-sound="${ex.speak}">
                  <span class="py-rule-origin">${ex.origin}</span>
                  <span class="py-arrow">→</span>
                  <span class="py-rule-speak">${ex.speak}</span>
                  <span class="py-rule-vi">(${ex.vi})</span>
                  <button class="py-mini-sound" type="button" data-sound="${ex.speak}">🔊</button>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 7. Render 214 Bộ Thủ Chữ Hán & Nét Cơ Bản
  function renderRadicals(container) {
    const radData = window.GH_RADICALS || {};
    const radicalsList = Array.isArray(radData.list) ? radData.list : [];
    const basicStrokes = radData.basicStrokes || {};

    let filteredRadicals = radicalsList;
    if (PY.radicalFilterStrokes && PY.radicalFilterStrokes !== 'all') {
      const targetStrokes = Number(PY.radicalFilterStrokes);
      if (targetStrokes >= 5) {
        filteredRadicals = filteredRadicals.filter(r => r.strokes >= 5);
      } else {
        filteredRadicals = filteredRadicals.filter(r => r.strokes === targetStrokes);
      }
    }

    if (PY.searchQuery) {
      filteredRadicals = filteredRadicals.filter(r => 
        (r.char && r.char.includes(PY.searchQuery)) ||
        (r.name && r.name.toLowerCase().includes(PY.searchQuery)) ||
        (r.pinyin && r.pinyin.toLowerCase().includes(PY.searchQuery)) ||
        (r.meaning && r.meaning.toLowerCase().includes(PY.searchQuery)) ||
        (r.ex && r.ex.includes(PY.searchQuery))
      );
    }

    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">BỘ THỦ VĂN TỰ (部首 - BUSHOU)</div>
        <h3>214 Bộ Thủ Khang Hy & Các Nét Cấu Tạo Chữ Hán</h3>
        <p>Chữ Hán là chữ tượng hình được tạo nên từ 8 nét cơ bản và 214 bộ thủ. Nắm vững bộ thủ giúp bạn nhận diện ý nghĩa và nhớ mặt chữ dễ dàng hơn gấp 10 lần!</p>
      </div>

      <!-- Basic Strokes Section -->
      <div class="py-strokes-box">
        <h4>🖌️ Các Nét Chữ Cơ Bản</h4>
        <div class="py-strokes-grid">
          ${Object.keys(basicStrokes).map(k => {
            const st = basicStrokes[k];
            return `
              <div class="py-stroke-item">
                <span class="py-stroke-char">${st.zh}</span>
                <b class="py-stroke-name">${st.vi}</b>
                <span class="py-stroke-py">${st.py}</span>
                <small class="py-stroke-desc">${st.desc}</small>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Radical Filter Controls -->
      <div class="py-radical-controls">
        <div class="py-radical-filter-label">Lọc theo số nét:</div>
        <div class="py-stroke-filter-chips">
          <button class="py-filter-chip ${PY.radicalFilterStrokes === 'all' ? 'active' : ''}" data-strokes="all">Tất cả (${radicalsList.length})</button>
          <button class="py-filter-chip ${PY.radicalFilterStrokes === '1' ? 'active' : ''}" data-strokes="1">1 Nét (6)</button>
          <button class="py-filter-chip ${PY.radicalFilterStrokes === '2' ? 'active' : ''}" data-strokes="2">2 Nét (23)</button>
          <button class="py-filter-chip ${PY.radicalFilterStrokes === '3' ? 'active' : ''}" data-strokes="3">3 Nét (31)</button>
          <button class="py-filter-chip ${PY.radicalFilterStrokes === '4' ? 'active' : ''}" data-strokes="4">4 Nét (34)</button>
          <button class="py-filter-chip ${PY.radicalFilterStrokes === '5' ? 'active' : ''}" data-strokes="5">5+ Nét (120)</button>
        </div>
      </div>

      <!-- Radicals Grid -->
      <div class="py-radicals-grid">
        ${filteredRadicals.length === 0 ? `
          <div class="py-no-results">Không tìm thấy bộ thủ phù hợp với từ khóa "${PY.searchQuery}".</div>
        ` : filteredRadicals.map(r => `
          <div class="py-radical-card" data-sound="${r.char}">
            <div class="py-radical-top">
              <span class="py-radical-char">${r.char}</span>
              ${r.alt ? `<span class="py-radical-alt">(${r.alt})</span>` : ''}
              <span class="py-radical-strokes">${r.strokes} nét</span>
              <div class="py-radical-actions">
                <button class="py-mini-sound" type="button" data-sound="${r.char}" title="Phát âm">🔊</button>
                <button class="py-mini-write" type="button" data-write="${r.char}" title="Tập viết bộ này">✍️</button>
              </div>
            </div>
            <div class="py-radical-name">
              <b>${r.name}</b>
              <span class="py-radical-py">/${r.pinyin}/</span>
            </div>
            <div class="py-radical-meaning">${r.meaning}</div>
            ${r.ex ? `
              <div class="py-radical-ex">
                <em>Chữ ví dụ:</em> <b>${r.ex}</b>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;

    // Bind stroke filter chips
    container.querySelectorAll('.py-filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        container.querySelectorAll('.py-filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        PY.radicalFilterStrokes = chip.dataset.strokes;
        renderRadicals(container);
        attachActionListeners(container);
      });
    });
  }

  // 8. Render Trắc Nghiệm Nghe Pinyin (Quiz)
  function renderQuiz(container) {
    const allItems = [...PY_DATA.alphabet26, ...PY_DATA.initials, ...PY_DATA.finals];
    
    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">LUYỆN PHẢN XẠ ÂM THANH</div>
        <h3>Trắc nghiệm nghe & nhận diện Pinyin cùng Chữ Hán</h3>
        <p>Bấm nút nghe âm ngẫu nhiên và chọn đúng chữ cái Pinyin / Chữ Hán tương ứng để rèn luyện thính giác tiếng Trung.</p>
      </div>

      <div class="py-quiz-box">
        <div class="py-quiz-score-row">
          <span>Chuỗi đúng: <b id="py-quiz-score">${PY.quizState.score}</b></span>
          <span>Tổng số câu: <b id="py-quiz-total">${PY.quizState.total}</b></span>
        </div>

        <div class="py-quiz-prompt">
          <button id="py-play-quiz-sound" class="py-big-sound-btn" type="button">
            🔊 Bấm để nghe âm thanh
          </button>
          <p>Lắng nghe kỹ và chọn ký tự Pinyin chính xác dưới đây:</p>
        </div>

        <div class="py-quiz-options" id="py-quiz-options"></div>

        <div id="py-quiz-feedback" class="py-quiz-feedback"></div>

        <button id="py-quiz-next" class="py-next-btn" style="display: none;" type="button">
          Câu tiếp theo →
        </button>
      </div>
    `;

    const playBtn = container.querySelector('#py-play-quiz-sound');
    const optionsBox = container.querySelector('#py-quiz-options');
    const feedbackBox = container.querySelector('#py-quiz-feedback');
    const nextBtn = container.querySelector('#py-quiz-next');

    function newQuestion() {
      feedbackBox.className = 'py-quiz-feedback';
      feedbackBox.innerHTML = '';
      nextBtn.style.display = 'none';

      // Pick random item
      const correct = allItems[Math.floor(Math.random() * allItems.length)];
      PY.quizState.currentQuestion = correct;

      // Pick 3 random distractors
      const distractors = allItems
        .filter(it => (it.sound !== correct.sound) && ((it.char || it.letter) !== (correct.char || correct.letter)))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      const choices = [correct, ...distractors].sort(() => Math.random() - 0.5);

      optionsBox.innerHTML = choices.map(ch => {
        const displayLabel = ch.char || ch.letter;
        const zhHero = ch.hero ? ch.hero.zh : (ch.example ? ch.example.zh : '');
        return `
          <button class="py-opt-btn" type="button" data-val="${displayLabel}">
            <b>${displayLabel}</b>
            ${zhHero ? `<span class="py-opt-zh">${zhHero}</span>` : ''}
            <small>${ch.read || ''}</small>
          </button>
        `;
      }).join('');

      // Auto play audio once
      setTimeout(() => {
        playSound(correct.sound || (correct.example ? correct.example.zh : correct.letter));
      }, 200);

      optionsBox.querySelectorAll('.py-opt-btn').forEach(btn => {
        btn.onclick = () => {
          if (nextBtn.style.display === 'inline-block') return; // already answered

          PY.quizState.total++;
          const selected = btn.dataset.val;
          const correctVal = correct.char || correct.letter;
          const isCorrect = (selected === correctVal);

          if (isCorrect) {
            PY.quizState.score++;
            btn.classList.add('correct');
            feedbackBox.className = 'py-quiz-feedback success';
            feedbackBox.innerHTML = `🎉 Chính xác! <strong>${correctVal}</strong> phát âm chuẩn là: /${correct.sound}/.`;
          } else {
            btn.classList.add('wrong');
            feedbackBox.className = 'py-quiz-feedback error';
            feedbackBox.innerHTML = `❌ Chưa chính xác. Đáp án đúng là <strong>${correctVal}</strong> (/${correct.sound}/).`;
            optionsBox.querySelectorAll('.py-opt-btn').forEach(b => {
              if (b.dataset.val === correctVal) b.classList.add('correct');
            });
          }

          document.getElementById('py-quiz-score').textContent = PY.quizState.score;
          document.getElementById('py-quiz-total').textContent = PY.quizState.total;
          nextBtn.style.display = 'inline-block';
        };
      });
    }

    playBtn.onclick = () => {
      const q = PY.quizState.currentQuestion;
      if (q) playSound(q.sound || (q.example ? q.example.zh : q.letter));
    };

    nextBtn.onclick = () => {
      newQuestion();
    };

    newQuestion();
  }

  // Action listeners (Audio & Writing)
  function attachActionListeners(container) {
    // Sound buttons
    container.querySelectorAll('[data-sound]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = el.dataset.sound;
        playSound(text);
      });
    });

    // Write buttons
    container.querySelectorAll('[data-write]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = el.dataset.write;
        openPracticeWriting(word);
      });
    });
  }

  // Export methods
  PY.init = init;
  PY.playSound = playSound;
  PY.openPracticeWriting = openPracticeWriting;
  window.GH_PinyinChart = PY;

  // Listen to mode changed event across app
  document.addEventListener('gh-mode-changed', (e) => {
    const mode = e && e.detail && e.detail.mode;
    handleHskBadgeVisibility(mode);
    if (mode === 'pinyin') {
      init();
    }
  });

  // Auto initialize if DOM already has pinyin-mode active
  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        const pSection = document.getElementById('pinyin-mode');
        if (pSection && pSection.classList.contains('active')) {
          init();
        }
      });
    } else {
      const pSection = document.getElementById('pinyin-mode');
      if (pSection && pSection.classList.contains('active')) {
        init();
      }
    }
  }

})();
