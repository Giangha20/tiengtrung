
function uiIcon(name, cls='ui-icon'){ return `<svg class="${cls}" aria-hidden="true"><use href="#${name}"></use></svg>`; }

// Dữ liệu Từ vựng HSK 1 (Đầy đủ 150/150 từ) và HSK 2 (Đầy đủ 150/150 từ)
const hskData = {
    "1": [
        { word: "爱", pinyin: "ài", meaning: "yêu, thích" },
        { word: "八", pinyin: "bā", meaning: "tám" },
        { word: "爸爸", pinyin: "bàba", meaning: "bố, ba" },
        { word: "杯子", pinyin: "bēizi", meaning: "cốc, ly" },
        { word: "北京", pinyin: "Běijīng", meaning: "Bắc Kinh" },
        { word: "本", pinyin: "běn", meaning: "quyển, cuốn" },
        { word: "不客气", pinyin: "bú kèqi", meaning: "đừng khách sáo, không có gì" },
        { word: "不", pinyin: "bù", meaning: "không" },
        { word: "菜", pinyin: "cài", meaning: "rau, món ăn" },
        { word: "茶", pinyin: "chá", meaning: "trà" },
        { word: "吃", pinyin: "chī", meaning: "ăn" },
        { word: "出租车", pinyin: "chūzūchē", meaning: "xe taxi" },
        { word: "打电话", pinyin: "dǎ diànhuà", meaning: "gọi điện thoại" },
        { word: "大", pinyin: "dà", meaning: "to, lớn" },
        { word: "的", pinyin: "de", meaning: "của (trợ từ)" },
        { word: "点", pinyin: "diǎn", meaning: "giờ, chút" },
        { word: "电脑", pinyin: "diànnǎo", meaning: "máy tính" },
        { word: "电视", pinyin: "diànshì", meaning: "tivi" },
        { word: "电影", pinyin: "diànyǐng", meaning: "phim ảnh" },
        { word: "东西", pinyin: "dōngxi", meaning: "đồ vật, đồ đạc" },
        { word: "都", pinyin: "dōu", meaning: "đều" },
        { word: "读", pinyin: "dú", meaning: "đọc" },
        { word: "对不起", pinyin: "duìbuqǐ", meaning: "xin lỗi" },
        { word: "多", pinyin: "duō", meaning: "nhiều" },
        { word: "多少", pinyin: "duōshao", meaning: "bao nhiêu" },
        { word: "儿子", pinyin: "érzi", meaning: "con trai" },
        { word: "二", pinyin: "èr", meaning: "hai" },
        { word: "饭馆", pinyin: "fànguǎn", meaning: "nhà hàng, quán ăn" },
        { word: "飞机", pinyin: "fēijī", meaning: "máy bay" },
        { word: "分钟", pinyin: "fēnzhōng", meaning: "phút" },
        { word: "高兴", pinyin: "gāoxìng", meaning: "vui vẻ, mừng" },
        { word: "个", pinyin: "gè", meaning: "cái, con (lượng từ)" },
        { word: "工作", pinyin: "gōngzuò", meaning: "công việc, làm việc" },
        { word: "汉语", pinyin: "Hànyǔ", meaning: "tiếng Hán" },
        { word: "好", pinyin: "hǎo", meaning: "tốt, khỏe, hay" },
        { word: "号", pinyin: "hào", meaning: "ngày, số" },
        { word: "喝", pinyin: "hē", meaning: "uống" },
        { word: "和", pinyin: "hé", meaning: "và, với" },
        { word: "很", pinyin: "hěn", meaning: "rất" },
        { word: "后面", pinyin: "hòumiàn", meaning: "phía sau" },
        { word: "回", pinyin: "huí", meaning: "về, trở về" },
        { word: "会", pinyin: "huì", meaning: "biết, sẽ" },
        { word: "几", pinyin: "jǐ", meaning: "mấy" },
        { word: "家", pinyin: "jiā", meaning: "nhà, gia đình" },
        { word: "叫", pinyin: "jiào", meaning: "gọi, tên là" },
        { word: "今天", pinyin: "jīntiān", meaning: "hôm nay" },
        { word: "九", pinyin: "jiǔ", meaning: "chín" },
        { word: "开", pinyin: "kāi", meaning: "mở, lái (xe)" },
        { word: "看", pinyin: "kàn", meaning: "nhìn, xem, đọc" },
        { word: "看见", pinyin: "kànjiàn", meaning: "nhìn thấy" },
        { word: "块", pinyin: "kuài", meaning: "đồng (tiền), miếng" },
        { word: "来", pinyin: "lái", meaning: "đến, tới" },
        { word: "老师", pinyin: "lǎoshī", meaning: "giáo viên, thầy cô" },
        { word: "了", pinyin: "le", meaning: "rồi (trợ từ)" },
        { word: "冷", pinyin: "lěng", meaning: "lạnh" },
        { word: "里", pinyin: "lǐ", meaning: "trong, bên trong" },
        { word: "零", pinyin: "líng", meaning: "số 0" },
        { word: "六", pinyin: "liù", meaning: "sáu" },
        { word: "妈妈", pinyin: "māma", meaning: "mẹ" },
        { word: "吗", pinyin: "ma", meaning: "không (trợ từ nghi vấn)" },
        { word: "买", pinyin: "mǎi", meaning: "mua" },
        { word: "猫", pinyin: "māo", meaning: "con mèo" },
        { word: "没关系", pinyin: "méi guānxi", meaning: "không sao" },
        { word: "没有", pinyin: "méiyǒu", meaning: "không có" },
        { word: "米饭", pinyin: "mǐfàn", meaning: "cơm" },
        { word: "明天", pinyin: "míngtiān", meaning: "ngày mai" },
        { word: "名字", pinyin: "míngzi", meaning: "tên" },
        { word: "哪", pinyin: "nǎ", meaning: "nào" },
        { word: "哪儿", pinyin: "nǎr", meaning: "ở đâu" },
        { word: "那", pinyin: "nà", meaning: "kia, đó" },
        { word: "那儿", pinyin: "nàr", meaning: "chỗ kia, nơi đó" },
        { word: "呢", pinyin: "ne", meaning: "nhỉ, nhé (trợ từ)" },
        { word: "能", pinyin: "néng", meaning: "có thể" },
        { word: "你", pinyin: "nǐ", meaning: "bạn, anh, chị" },
        { word: "年", pinyin: "nián", meaning: "năm" },
        { word: "女儿", pinyin: "nǚ'ér", meaning: "con gái" },
        { word: "朋友", pinyin: "péngyou", meaning: "bạn bè" },
        { word: "漂亮", pinyin: "piàoliang", meaning: "đẹp" },
        { word: "苹果", pinyin: "píngguǒ", meaning: "quả táo" },
        { word: "七", pinyin: "qī", meaning: "bảy" },
        { word: "钱", pinyin: "qián", meaning: "tiền" },
        { word: "前面", pinyin: "qiánmiàn", meaning: "phía trước" },
        { word: "请", pinyin: "qǐng", meaning: "mời, xin" },
        { word: "去", pinyin: "qù", meaning: "đi" },
        { word: "热", pinyin: "rè", meaning: "nóng" },
        { word: "人", pinyin: "rén", meaning: "người" },
        { word: "认识", pinyin: "rènshi", meaning: "quen biết" },
        { word: "三", pinyin: "sān", meaning: "ba" },
        { word: "商店", pinyin: "shāngdiàn", meaning: "cửa hàng" },
        { word: "上", pinyin: "shàng", meaning: "trên, lên" },
        { word: "上午", pinyin: "shàngwǔ", meaning: "buổi sáng" },
        { word: "少", pinyin: "shǎo", meaning: "ít" },
        { word: "谁", pinyin: "shéi", meaning: "ai" },
        { word: "什么", pinyin: "shénme", meaning: "cái gì" },
        { word: "十", pinyin: "shí", meaning: "mười" },
        { word: "时候", pinyin: "shíhou", meaning: "lúc, khi" },
        { word: "是", pinyin: "shì", meaning: "là" },
        { word: "书", pinyin: "shū", meaning: "sách" },
        { word: "水", pinyin: "shuǐ", meaning: "nước" },
        { word: "水果", pinyin: "shuǐguǒ", meaning: "hoa quả, trái cây" },
        { word: "睡觉", pinyin: "shuìjiào", meaning: "ngủ" },
        { word: "说话", pinyin: "shuōhuà", meaning: "nói chuyện" },
        { word: "四", pinyin: "sì", meaning: "bốn" },
        { word: "岁", pinyin: "suì", meaning: "tuổi" },
        { word: "他", pinyin: "tā", meaning: "anh ấy" },
        { word: "她", pinyin: "tā", meaning: "cô ấy" },
        { word: "太", pinyin: "tài", meaning: "quá, lắm" },
        { word: "天气", pinyin: "tiānqì", meaning: "thời tiết" },
        { word: "听", pinyin: "tīng", meaning: "nghe" },
        { word: "同学", pinyin: "tóngxué", meaning: "bạn học" },
        { word: "喂", pinyin: "wèi", meaning: "alo, này" },
        { word: "我", pinyin: "wǒ", meaning: "tôi" },
        { word: "我们", pinyin: "wǒmen", meaning: "chúng tôi" },
        { word: "五", pinyin: "wǔ", meaning: "năm" },
        { word: "喜欢", pinyin: "xǐhuan", meaning: "thích" },
        { word: "下", pinyin: "xià", meaning: "dưới, xuống" },
        { word: "下午", pinyin: "xiàwǔ", meaning: "buổi chiều" },
        { word: "下雨", pinyin: "xiàyǔ", meaning: "trời mưa" },
        { word: "先生", pinyin: "xiānsheng", meaning: "ông, tiên sinh, ngài" },
        { word: "现在", pinyin: "xiànzài", meaning: "bây giờ" },
        { word: "想", pinyin: "xiǎng", meaning: "nhớ, muốn, nghĩ" },
        { word: "小", pinyin: "xiǎo", meaning: "nhỏ, bé" },
        { word: "小姐", pinyin: "xiǎojiě", meaning: "cô, tiểu thư" },
        { word: "些", pinyin: "xiē", meaning: "một vài, một ít" },
        { word: "写", pinyin: "xiě", meaning: "viết" },
        { word: "谢谢", pinyin: "xièxie", meaning: "cảm ơn" },
        { word: "星期", pinyin: "xīngqī", meaning: "tuần, thứ" },
        { word: "学生", pinyin: "xuésheng", meaning: "học sinh" },
        { word: "学习", pinyin: "xuéxí", meaning: "học tập" },
        { word: "学校", pinyin: "xuéxiào", meaning: "trường học" },
        { word: "一", pinyin: "yī", meaning: "một" },
        { word: "衣服", pinyin: "yīfu", meaning: "quần áo" },
        { word: "医生", pinyin: "yīshēng", meaning: "bác sĩ" },
        { word: "医院", pinyin: "yīyuàn", meaning: "bệnh viện" },
        { word: "椅子", pinyin: "yǐzi", meaning: "cái ghế" },
        { word: "有", pinyin: "yǒu", meaning: "có" },
        { word: "月", pinyin: "yuè", meaning: "tháng" },
        { word: "再见", pinyin: "zàijiàn", meaning: "tạm biệt" },
        { word: "在", pinyin: "zài", meaning: "ở, đang" },
        { word: "怎么", pinyin: "zěnme", meaning: "thế nào, làm sao" },
        { word: "怎么样", pinyin: "zěnmeyàng", meaning: "như thế nào" },
        { word: "这", pinyin: "zhè", meaning: "đây, này" },
        { word: "这儿", pinyin: "zhèr", meaning: "ở đây" },
        { word: "中国", pinyin: "Zhōngguó", meaning: "Trung Quốc" },
        { word: "中午", pinyin: "zhōngwǔ", meaning: "buổi trưa" },
        { word: "住", pinyin: "zhù", meaning: "sống, ở" },
        { word: "桌子", pinyin: "zhuōzi", meaning: "cái bàn" },
        { word: "字", pinyin: "zì", meaning: "chữ" },
        { word: "昨天", pinyin: "zuótiān", meaning: "hôm qua" },
        { word: "坐", pinyin: "zuò", meaning: "ngồi" },
        { word: "做", pinyin: "zuò", meaning: "làm" }
    ],
    "2": [
        { word: "吧", pinyin: "ba", meaning: "nhé, đi (trợ từ)" },
        { word: "白", pinyin: "bái", meaning: "trắng" },
        { word: "百", pinyin: "bǎi", meaning: "trăm" },
        { word: "帮助", pinyin: "bāngzhù", meaning: "giúp đỡ" },
        { word: "报纸", pinyin: "bàozhǐ", meaning: "tờ báo" },
        { word: "比", pinyin: "bǐ", meaning: "so với" },
        { word: "别", pinyin: "bié", meaning: "đừng" },
        { word: "长", pinyin: "cháng", meaning: "dài" },
        { word: "唱歌", pinyin: "chànggē", meaning: "hát" },
        { word: "出", pinyin: "chū", meaning: "ra, ra ngoài" },
        { word: "穿", pinyin: "chuān", meaning: "mặc, đi (giày)" },
        { word: "次", pinyin: "cì", meaning: "lần" },
        { word: "从", pinyin: "cóng", meaning: "từ" },
        { word: "错", pinyin: "cuò", meaning: "sai" },
        { word: "打篮球", pinyin: "dǎ lánqiú", meaning: "chơi bóng rổ" },
        { word: "大家", pinyin: "dàjiā", meaning: "mọi người" },
        { word: "到", pinyin: "dào", meaning: "đến" },
        { word: "得", pinyin: "de", meaning: "trợ từ mức độ" },
        { word: "等", pinyin: "děng", meaning: "chờ, đợi" },
        { word: "弟弟", pinyin: "dìdi", meaning: "em trai" },
        { word: "第一", pinyin: "dì-yī", meaning: "thứ nhất" },
        { word: "懂", pinyin: "dǒng", meaning: "hiểu" },
        { word: "对", pinyin: "duì", meaning: "đúng, đối với" },
        { word: "房间", pinyin: "fángjiān", meaning: "căn phòng" },
        { word: "非常", pinyin: "fēicháng", meaning: "vô cùng, rất" },
        { word: "服务员", pinyin: "fúwùyuán", meaning: "phục vụ, bồi bàn" },
        { word: "高", pinyin: "gāo", meaning: "cao" },
        { word: "告诉", pinyin: "gàosu", meaning: "nói cho biết, bảo" },
        { word: "哥哥", pinyin: "gēge", meaning: "anh trai" },
        { word: "给", pinyin: "gěi", meaning: "cho, đưa cho" },
        { word: "公共汽车", pinyin: "gōnggòng qìchē", meaning: "xe buýt" },
        { word: "公斤", pinyin: "gōngjīn", meaning: "kilôgam" },
        { word: "公司", pinyin: "gōngsī", meaning: "công ty" },
        { word: "狗", pinyin: "gǒu", meaning: "con chó" },
        { word: "贵", pinyin: "guì", meaning: "đắt" },
        { word: "过", pinyin: "guò", meaning: "qua, đã từng" },
        { word: "还", pinyin: "hái", meaning: "còn, vẫn" },
        { word: "孩子", pinyin: "háizi", meaning: "trẻ em, con" },
        { word: "黑", pinyin: "hēi", meaning: "đen" },
        { word: "红", pinyin: "hóng", meaning: "đỏ" },
        { word: "欢迎", pinyin: "huānyíng", meaning: "hoan nghênh, chào mừng" },
        { word: "回答", pinyin: "huídá", meaning: "trả lời" },
        { word: "机场", pinyin: "jīchǎng", meaning: "sân bay" },
        { word: "鸡蛋", pinyin: "jīdàn", meaning: "trứng gà" },
        { word: "件", pinyin: "jiàn", meaning: "chiếc, cái (áo, việc)" },
        { word: "教室", pinyin: "jiàoshì", meaning: "phòng học" },
        { word: "姐姐", pinyin: "jiějie", meaning: "chị gái" },
        { word: "介绍", pinyin: "jièshào", meaning: "giới thiệu" },
        { word: "进", pinyin: "jìn", meaning: "vào" },
        { word: "近", pinyin: "jìn", meaning: "gần" },
        { word: "就", pinyin: "jiù", meaning: "thì, ngay" },
        { word: "觉得", pinyin: "juéde", meaning: "cảm thấy" },
        { word: "咖啡", pinyin: "kāfēi", meaning: "cà phê" },
        { word: "开始", pinyin: "kāishǐ", meaning: "bắt đầu" },
        { word: "考试", pinyin: "kǎoshì", meaning: "kỳ thi, thi" },
        { word: "可能", pinyin: "kěnéng", meaning: "có thể" },
        { word: "可以", pinyin: "kěyǐ", meaning: "có thể, được" },
        { word: "课", pinyin: "kè", meaning: "bài học, tiết học" },
        { word: "快", pinyin: "kuài", meaning: "nhanh" },
        { word: "快乐", pinyin: "kuàilè", meaning: "vui vẻ" },
        { word: "累", pinyin: "lèi", meaning: "mệt" },
        { word: "离", pinyin: "lí", meaning: "cách (khoảng cách)" },
        { word: "两", pinyin: "liǎng", meaning: "hai (lượng từ)" },
        { word: "路", pinyin: "lù", meaning: "đường" },
        { word: "旅游", pinyin: "lǚyóu", meaning: "du lịch" },
        { word: "卖", pinyin: "mài", meaning: "bán" },
        { word: "慢", pinyin: "màn", meaning: "chậm" },
        { word: "忙", pinyin: "máng", meaning: "bận" },
        { word: "每", pinyin: "měi", meaning: "mỗi" },
        { word: "妹妹", pinyin: "mèimei", meaning: "em gái" },
        { word: "门", pinyin: "mén", meaning: "cửa" },
        { word: "男", pinyin: "nán", meaning: "nam, đàn ông" },
        { word: "您", pinyin: "nín", meaning: "ngài, ông/bà (kính ngữ)" },
        { word: "牛奶", pinyin: "niúnǎi", meaning: "sữa bò" },
        { word: "女", pinyin: "nǚ", meaning: "nữ, phụ nữ" },
        { word: "旁边", pinyin: "pángbiān", meaning: "bên cạnh" },
        { word: "跑步", pinyin: "pǎobù", meaning: "chạy bộ" },
        { word: "便宜", pinyin: "piányi", meaning: "rẻ" },
        { word: "票", pinyin: "piào", meaning: "vé" },
        { word: "妻子", pinyin: "qīzi", meaning: "vợ" },
        { word: "起床", pinyin: "qǐchuáng", meaning: "thức dậy" },
        { word: "千", pinyin: "qiān", meaning: "nghìn" },
        { word: "铅笔", pinyin: "qiānbǐ", meaning: "bút chì" },
        { word: "晴", pinyin: "qíng", meaning: "nắng, trời quang" },
        { word: "去年", pinyin: "qùnián", meaning: "năm ngoái" },
        { word: "让", pinyin: "ràng", meaning: "nhường, cho phép, bảo" },
        { word: "日", pinyin: "rì", meaning: "ngày" },
        { word: "上班", pinyin: "shàngbān", meaning: "đi làm" },
        { word: "身体", pinyin: "shēntǐ", meaning: "thân thể, sức khỏe" },
        { word: "生病", pinyin: "shēngbìng", meaning: "bị bệnh" },
        { word: "生日", pinyin: "shēngrì", meaning: "sinh nhật" },
        { word: "时间", pinyin: "shíjiān", meaning: "thời gian" },
        { word: "事情", pinyin: "shìqing", meaning: "sự việc, công việc" },
        { word: "手表", pinyin: "shǒubiǎo", meaning: "đồng hồ đeo tay" },
        { word: "手机", pinyin: "shǒujī", meaning: "điện thoại di động" },
        { word: "送", pinyin: "sòng", meaning: "tặng, tiễn" },
        { word: "它", pinyin: "tā", meaning: "nó (vật, con vật)" },
        { word: "踢足球", pinyin: "tī zúqiú", meaning: "đá bóng" },
        { word: "题", pinyin: "tí", meaning: "câu hỏi, đề thi" },
        { word: "跳舞", pinyin: "tiàowǔ", meaning: "nhảy múa" },
        { word: "外", pinyin: "wài", meaning: "ngoài" },
        { word: "完", pinyin: "wán", meaning: "xong, hết" },
        { word: "玩", pinyin: "wán", meaning: "chơi" },
        { word: "晚上", pinyin: "wǎnshang", meaning: "buổi tối" },
        { word: "往", pinyin: "wǎng", meaning: "về phía, hướng về" },
        { word: "为什么", pinyin: "wèishénme", meaning: "tại sao" },
        { word: "问", pinyin: "wèn", meaning: "hỏi" },
        { word: "问题", pinyin: "wèntí", meaning: "câu hỏi, vấn đề" },
        { word: "西瓜", pinyin: "xīguā", meaning: "dưa hấu" },
        { word: "希望", pinyin: "xīwàng", meaning: "hy vọng" },
        { word: "洗", pinyin: "xǐ", meaning: "rửa, giặt" },
        { word: "小时", pinyin: "xiǎoshí", meaning: "tiếng, giờ đồng hồ" },
        { word: "笑", pinyin: "xiào", meaning: "cười" },
        { word: "新", pinyin: "xīn", meaning: "mới" },
        { word: "姓", pinyin: "xìng", meaning: "họ" },
        { word: "休息", pinyin: "xiūxi", meaning: "nghỉ ngơi" },
        { word: "雪", pinyin: "xuě", meaning: "tuyết" },
        { word: "颜色", pinyin: "yánsè", meaning: "màu sắc" },
        { word: "眼睛", pinyin: "yǎnjing", meaning: "mắt" },
        { word: "羊肉", pinyin: "yángròu", meaning: "thịt cừu, thịt dê" },
        { word: "药", pinyin: "yào", meaning: "thuốc" },
        { word: "要", pinyin: "yào", meaning: "muốn, phải, cần" },
        { word: "也", pinyin: "yě", meaning: "cũng" },
        { word: "一起", pinyin: "yìqǐ", meaning: "cùng nhau" },
        { word: "一下", pinyin: "yíxià", meaning: "một chút, một lát" },
        { word: "意思", pinyin: "yìsi", meaning: "ý nghĩa" },
        { word: "因为", pinyin: "yīnwèi", meaning: "bởi vì" },
        { word: "所以", pinyin: "suǒyǐ", meaning: "cho nên" },
        { word: "阴", pinyin: "yīn", meaning: "âm, nhiều mây, râm" },
        { word: "游泳", pinyin: "yóuyǒng", meaning: "bơi lội" },
        { word: "右边", pinyin: "yòubian", meaning: "bên phải" },
        { word: "鱼", pinyin: "yú", meaning: "cá" },
        { word: "远", pinyin: "yuǎn", meaning: "xa" },
        { word: "运动", pinyin: "yùndòng", meaning: "vận động, thể thao" },
        { word: "再", pinyin: "zài", meaning: "lại, nữa" },
        { word: "早上", pinyin: "zǎoshang", meaning: "buổi sáng sớm" },
        { word: "丈夫", pinyin: "zhàngfu", meaning: "chồng" },
        { word: "找", pinyin: "zhǎo", meaning: "tìm" },
        { word: "着", pinyin: "zhe", meaning: "đang (trợ từ)" },
        { word: "真", pinyin: "zhēn", meaning: "thật, thật là" },
        { word: "正在", pinyin: "zhèngzài", meaning: "đang" },
        { word: "知道", pinyin: "zhīdào", meaning: "biết" },
        { word: "准备", pinyin: "zhǔnbèi", meaning: "chuẩn bị" },
        { word: "自行车", pinyin: "zìxíngchē", meaning: "xe đạp" },
        { word: "走", pinyin: "zǒu", meaning: "đi, đi bộ" },
        { word: "最", pinyin: "zuì", meaning: "nhất" },
        { word: "左边", pinyin: "zuǒbian", meaning: "bên trái" },
        { word: "已经", pinyin: "yǐjīng", meaning: "đã" },
        { word: "但是", pinyin: "dànshì", meaning: "nhưng" }
    ]
    
};
// Dữ liệu Từ vựng HSK 3 (Đầy đủ 300/300 từ)
hskData["3"] = [
    { word: "阿姨", pinyin: "āyí", meaning: "dì, cô, bác gái" },
    { word: "啊", pinyin: "a", meaning: "à, ơ (thán từ)" },
    { word: "矮", pinyin: "ǎi", meaning: "thấp, lùn" },
    { word: "爱好", pinyin: "àihào", meaning: "sở thích" },
    { word: "安静", pinyin: "ānjìng", meaning: "yên tĩnh" },
    { word: "把", pinyin: "bǎ", meaning: "cầm, nắm; trợ từ câu chữ 把" },
    { word: "搬", pinyin: "bān", meaning: "chuyển, dời" },
    { word: "班", pinyin: "bān", meaning: "lớp, ca làm việc" },
    { word: "办法", pinyin: "bànfǎ", meaning: "biện pháp, cách" },
    { word: "办公室", pinyin: "bàngōngshì", meaning: "văn phòng" },
    { word: "半", pinyin: "bàn", meaning: "nửa, rưỡi" },
    { word: "帮忙", pinyin: "bāngmáng", meaning: "giúp đỡ" },
    { word: "包", pinyin: "bāo", meaning: "túi, bao, gói" },
    { word: "饱", pinyin: "bǎo", meaning: "no" },
    { word: "北方", pinyin: "běifāng", meaning: "phương Bắc, miền Bắc" },
    { word: "被", pinyin: "bèi", meaning: "bị, được (câu bị động)" },
    { word: "鼻子", pinyin: "bízi", meaning: "cái mũi" },
    { word: "比较", pinyin: "bǐjiào", meaning: "so sánh, tương đối, khá" },
    { word: "比赛", pinyin: "bǐsài", meaning: "thi đấu, cuộc thi" },
    { word: "笔记本", pinyin: "bǐjìběn", meaning: "sổ tay, máy tính xách tay" },
    { word: "必须", pinyin: "bìxū", meaning: "phải, bắt buộc" },
    { word: "变化", pinyin: "biànhuà", meaning: "thay đổi, biến hóa" },
    { word: "别人", pinyin: "biéren", meaning: "người khác" },
    { word: "冰箱", pinyin: "bīngxiāng", meaning: "tủ lạnh" },
    { word: "不但", pinyin: "búdàn", meaning: "không những" },
    { word: "而且", pinyin: "érqiě", meaning: "mà còn" },
    { word: "菜单", pinyin: "càidān", meaning: "thực đơn" },
    { word: "参加", pinyin: "cānjiā", meaning: "tham gia" },
    { word: "草", pinyin: "cǎo", meaning: "cỏ" },
    { word: "层", pinyin: "céng", meaning: "tầng, lớp" },
    { word: "差", pinyin: "chà", meaning: "kém, thiếu" },
    { word: "超市", pinyin: "chāoshì", meaning: "siêu thị" },
    { word: "衬衫", pinyin: "chènshān", meaning: "áo sơ mi" },
    { word: "成绩", pinyin: "chéngjì", meaning: "thành tích, kết quả" },
    { word: "城市", pinyin: "chéngshì", meaning: "thành phố" },
    { word: "迟到", pinyin: "chídào", meaning: "đến muộn, trễ" },
    { word: "出现", pinyin: "chūxiàn", meaning: "xuất hiện" },
    { word: "厨房", pinyin: "chúfáng", meaning: "nhà bếp" },
    { word: "除了", pinyin: "chúle", meaning: "ngoài ra, trừ ra" },
    { word: "春", pinyin: "chūn", meaning: "mùa xuân" },
    { word: "词典", pinyin: "cídiǎn", meaning: "từ điển" },
    { word: "聪明", pinyin: "cōngming", meaning: "thông minh" },
    { word: "打扫", pinyin: "dǎsǎo", meaning: "quét dọn, vệ sinh" },
    { word: "打算", pinyin: "dǎsuàn", meaning: "dự định, tính toán" },
    { word: "带", pinyin: "dài", meaning: "mang, đem, dẫn" },
    { word: "担心", pinyin: "dānxīn", meaning: "lo lắng" },
    { word: "蛋糕", pinyin: "dàngāo", meaning: "bánh ngọt, bánh kem" },
    { word: "当然", pinyin: "dāngrán", meaning: "đương nhiên, tất nhiên" },
    { word: "地", pinyin: "de", meaning: "trợ từ (đứng trước động từ)" },
    { word: "灯", pinyin: "dēng", meaning: "cái đèn" },
    { word: "地方", pinyin: "dìfang", meaning: "địa phương, nơi, chỗ" },
    { word: "地铁", pinyin: "dìtiě", meaning: "tàu điện ngầm" },
    { word: "地图", pinyin: "dìtú", meaning: "bản đồ" },
    { word: "电梯", pinyin: "diàntī", meaning: "thang máy" },
    { word: "电子邮件", pinyin: "diànzǐ yóujiàn", meaning: "thư điện tử (email)" },
    { word: "东", pinyin: "dōng", meaning: "phía Đông" },
    { word: "冬", pinyin: "dōng", meaning: "mùa đông" },
    { word: "动物", pinyin: "dòngwù", meaning: "động vật" },
    { word: "短", pinyin: "duǎn", meaning: "ngắn" },
    { word: "段", pinyin: "duàn", meaning: "đoạn, khúc" },
    { word: "锻炼", pinyin: "duànliàn", meaning: "rèn luyện, tập thể dục" },
    { word: "多么", pinyin: "duōme", meaning: "bao nhiêu, biết bao" },
    { word: "饿", pinyin: "è", meaning: "đói" },
    { word: "耳朵", pinyin: "ěrduo", meaning: "cái tai" },
    { word: "发烧", pinyin: "fāshāo", meaning: "phát sốt, sốt" },
    { word: "发现", pinyin: "fāxiàn", meaning: "phát hiện" },
    { word: "方便", pinyin: "fāngbiàn", meaning: "thuận tiện, tiện lợi" },
    { word: "放", pinyin: "fàng", meaning: "thả, đặt, để" },
    { word: "放心", pinyin: "fàngxīn", meaning: "yên tâm" },
    { word: "分", pinyin: "fēn", meaning: "phút, điểm, chia" },
    { word: "附近", pinyin: "fùjìn", meaning: "lân cận, gần đây" },
    { word: "复习", pinyin: "fùxí", meaning: "ôn tập" },
    { word: "干净", pinyin: "gānjìng", meaning: "sạch sẽ" },
    { word: "感冒", pinyin: "gǎnmào", meaning: "cảm cúm" },
    { word: "感兴趣", pinyin: "gǎn xīngqù", meaning: "hứng thú, quan tâm" },
    { word: "刚才", pinyin: "gāngcái", meaning: "vừa mới, vừa lúc nãy" },
    { word: "个子", pinyin: "gèzi", meaning: "vóc dáng, chiều cao" },
    { word: "根据", pinyin: "gēnjù", meaning: "căn cứ, dựa vào" },
    { word: "跟", pinyin: "gēn", meaning: "cùng, với, đi theo" },
    { word: "更", pinyin: "gèng", meaning: "càng, hơn nữa" },
    { word: "公园", pinyin: "gōngyuán", meaning: "công viên" },
    { word: "故事", pinyin: "gùshi", meaning: "câu chuyện" },
    { word: "刮风", pinyin: "guāfēng", meaning: "nổi gió, gió thổi" },
    { word: "关", pinyin: "guān", meaning: "đóng, tắt" },
    { word: "关系", pinyin: "guānxi", meaning: "quan hệ" },
    { word: "关心", pinyin: "guānxīn", meaning: "quan tâm" },
    { word: "关于", pinyin: "guānyú", meaning: "về, liên quan đến" },
    { word: "国家", pinyin: "guójiā", meaning: "quốc gia, đất nước" },
    { word: "果汁", pinyin: "guǒzhī", meaning: "nước trái cây" },
    { word: "过去", pinyin: "guòqù", meaning: "quá khứ, trước đây" },
    { word: "还是", pinyin: "háishi", meaning: "hay là, vẫn" },
    { word: "害怕", pinyin: "hàipà", meaning: "sợ hãi" },
    { word: "黑板", pinyin: "hēibǎn", meaning: "bảng đen" },
    { word: "护照", pinyin: "hùzhào", meaning: "hộ chiếu" },
    { word: "花", pinyin: "huā", meaning: "hoa; tiêu (tiền/thời gian)" },
    { word: "花园", pinyin: "huāyuán", meaning: "vườn hoa" },
    { word: "画", pinyin: "huà", meaning: "vẽ, bức tranh" },
    { word: "坏", pinyin: "huài", meaning: "hỏng, xấu, tồi" },
    { word: "环境", pinyin: "huánjìng", meaning: "môi trường, hoàn cảnh" },
    { word: "换", pinyin: "huàn", meaning: "đổi, thay" },
    { word: "黄", pinyin: "huáng", meaning: "màu vàng" },
    { word: "会议", pinyin: "huìyì", meaning: "cuộc họp, hội nghị" },
    { word: "回忆", pinyin: "huíyì", meaning: "hồi ức, nhớ lại" },
    { word: "活动", pinyin: "huódòng", meaning: "hoạt động" },
    { word: "火车站", pinyin: "huǒchēzhàn", meaning: "ga tàu hỏa" },
    { word: "几乎", pinyin: "jīhū", meaning: "hầu như, gần như" },
    { word: "机会", pinyin: "jīhuì", meaning: "cơ hội" },
    { word: "极", pinyin: "jí", meaning: "cực kỳ, vô cùng" },
    { word: "季节", pinyin: "jìjié", meaning: "mùa (trong năm)" },
    { word: "检查", pinyin: "jiǎnchá", meaning: "kiểm tra" },
    { word: "简单", pinyin: "jiǎndān", meaning: "đơn giản" },
    { word: "健康", pinyin: "jiànkāng", meaning: "khỏe mạnh, sức khỏe" },
    { word: "见面", pinyin: "jiànmiàn", meaning: "gặp mặt" },
    { word: "讲", pinyin: "jiǎng", meaning: "nói, giảng giải" },
    { word: "教", pinyin: "jiāo", meaning: "dạy học" },
    { word: "脚", pinyin: "jiǎo", meaning: "bàn chân" },
    { word: "角", pinyin: "jiǎo", meaning: "hào (1/10 tệ), góc" },
    { word: "接", pinyin: "jiē", meaning: "đón, nhận (điện thoại)" },
    { word: "街道", pinyin: "jiēdào", meaning: "đường phố" },
    { word: "结婚", pinyin: "jiéhūn", meaning: "kết hôn" },
    { word: "结束", pinyin: "jiéshù", meaning: "kết thúc" },
    { word: "节目", pinyin: "jiémù", meaning: "chương trình" },
    { word: "节日", pinyin: "jiérì", meaning: "ngày lễ, ngày tết" },
    { word: "解决", pinyin: "jiějué", meaning: "giải quyết" },
    { word: "借", pinyin: "jiè", meaning: "mượn, vay" },
    { word: "经常", pinyin: "jīngcháng", meaning: "thường xuyên" },
    { word: "经过", pinyin: "jīngguò", meaning: "trải qua, đi qua" },
    { word: "经理", pinyin: "jīnglǐ", meaning: "giám đốc, quản lý" },
    { word: "久", pinyin: "jiǔ", meaning: "lâu" },
    { word: "旧", pinyin: "jiù", meaning: "cũ" },
    { word: "句子", pinyin: "jùzi", meaning: "câu (văn)" },
    { word: "决定", pinyin: "juédìng", meaning: "quyết định" },
    { word: "可爱", pinyin: "kě'ài", meaning: "đáng yêu" },
    { word: "渴", pinyin: "kě", meaning: "khát" },
    { word: "刻", pinyin: "kè", meaning: "khắc (15 phút)" },
    { word: "客人", pinyin: "kèrén", meaning: "khách, khách hàng" },
    { word: "空调", pinyin: "kōngtiáo", meaning: "điều hòa" },
    { word: "口", pinyin: "kǒu", meaning: "miệng; lượng từ (người)" },
    { word: "哭", pinyin: "kū", meaning: "khóc" },
    { word: "裤子", pinyin: "kùzi", meaning: "chiếc quần" },
    { word: "筷子", pinyin: "kuàizi", meaning: "đôi đũa" },
    { word: "蓝", pinyin: "lán", meaning: "màu xanh lam" },
    { word: "老", pinyin: "lǎo", meaning: "già, cũ" },
    { word: "离开", pinyin: "líkāi", meaning: "rời khỏi, chia tay" },
    { word: "礼物", pinyin: "lǐwù", meaning: "quà tặng" },
    { word: "历史", pinyin: "lìshǐ", meaning: "lịch sử" },
    { word: "脸", pinyin: "liǎn", meaning: "khuôn mặt" },
    { word: "练习", pinyin: "liànxí", meaning: "luyện tập, bài tập" },
    { word: "辆", pinyin: "liàng", meaning: "chiếc (xe)" },
    { word: "了解", pinyin: "liǎojiě", meaning: "hiểu rõ, tìm hiểu" },
    { word: "邻居", pinyin: "línjū", meaning: "hàng xóm" },
    { word: "留学", pinyin: "liúxué", meaning: "du học" },
    { word: "楼", pinyin: "lóu", meaning: "tòa nhà, tầng" },
    { word: "绿", pinyin: "lǜ", meaning: "màu xanh lá" },
    { word: "马", pinyin: "mǎ", meaning: "con ngựa" },
    { word: "马上", pinyin: "mǎshàng", meaning: "ngay lập tức" },
    { word: "满意", pinyin: "mǎnyì", meaning: "hài lòng" },
    { word: "帽子", pinyin: "màozi", meaning: "cái mũ, nón" },
    { word: "米", pinyin: "mǐ", meaning: "mét; gạo" },
    { word: "面包", pinyin: "miànbāo", meaning: "bánh mì" },
    { word: "面条", pinyin: "miàntiáo", meaning: "mì sợi" },
    { word: "明白", pinyin: "míngbai", meaning: "hiểu, rõ ràng" },
    { word: "拿", pinyin: "ná", meaning: "cầm, nắm, lấy" },
    { word: "奶奶", pinyin: "nǎinai", meaning: "bà nội" },
    { word: "南", pinyin: "nán", meaning: "phía Nam" },
    { word: "难", pinyin: "nán", meaning: "khó" },
    { word: "难过", pinyin: "nánguò", meaning: "buồn bã, khó chịu" },
    { word: "年级", pinyin: "niánjí", meaning: "khối, lớp" },
    { word: "年轻", pinyin: "niánqīng", meaning: "trẻ tuổi" },
    { word: "鸟", pinyin: "niǎo", meaning: "con chim" },
    { word: "努力", pinyin: "nǔlì", meaning: "nỗ lực, cố gắng" },
    { word: "爬山", pinyin: "páshān", meaning: "leo núi" },
    { word: "盘子", pinyin: "pánzi", meaning: "cái đĩa" },
    { word: "胖", pinyin: "pàng", meaning: "béo, mập" },
    { word: "皮鞋", pinyin: "píxié", meaning: "giày da" },
    { word: "啤酒", pinyin: "píjiǔ", meaning: "bia" },
    { word: "普通话", pinyin: "pǔtōnghuà", meaning: "tiếng phổ thông" },
    { word: "其实", pinyin: "qíshí", meaning: "thực ra, thực chất" },
    { word: "其他", pinyin: "qítā", meaning: "cái khác, người khác" },
    { word: "骑", pinyin: "qí", meaning: "cưỡi, đi (xe đạp/máy)" },
    { word: "起飞", pinyin: "qǐfēi", meaning: "cất cánh" },
    { word: "起来", pinyin: "qǐlái", meaning: "đứng dậy, nhô lên" },
    { word: "清楚", pinyin: "qīngchu", meaning: "rõ ràng" },
    { word: "请假", pinyin: "qǐngjià", meaning: "xin nghỉ phép" },
    { word: "秋", pinyin: "qiū", meaning: "mùa thu" },
    { word: "裙子", pinyin: "qúnzi", meaning: "cái váy" },
    { word: "然后", pinyin: "ránhòu", meaning: "sau đó" },
    { word: "热情", pinyin: "rèqíng", meaning: "nhiệt tình" },
    { word: "认为", pinyin: "rènwéi", meaning: "cho rằng, nghĩ rằng" },
    { word: "认真", pinyin: "rènzhēn", meaning: "nghiêm túc, chăm chỉ" },
    { word: "容易", pinyin: "róngyì", meaning: "dễ dàng" },
    { word: "如果", pinyin: "rúguǒ", meaning: "nếu, nếu như" },
    { word: "伞", pinyin: "sǎn", meaning: "cái ô, cái dù" },
    { word: "上网", pinyin: "shàngwǎng", meaning: "lên mạng, truy cập internet" },
    { word: "生气", pinyin: "shēngqì", meaning: "tức giận" },
    { word: "声音", pinyin: "shēngyīn", meaning: "âm thanh, tiếng" },
    { word: "使", pinyin: "shǐ", meaning: "khiến cho, làm cho" },
    { word: "世界", pinyin: "shìjiè", meaning: "thế giới" },
    { word: "瘦", pinyin: "shòu", meaning: "gầy, ốm" },
    { word: "叔叔", pinyin: "shūshu", meaning: "chú, bác" },
    { word: "舒服", pinyin: "shūfu", meaning: "thoải mái, dễ chịu" },
    { word: "树", pinyin: "shù", meaning: "cái cây" },
    { word: "数学", pinyin: "shùxué", meaning: "môn toán" },
    { word: "刷牙", pinyin: "shuāyá", meaning: "đánh răng" },
    { word: "双", pinyin: "shuāng", meaning: "đôi, cặp" },
    { word: "水平", pinyin: "shuǐpíng", meaning: "trình độ" },
    { word: "司机", pinyin: "sījī", meaning: "tài xế" },
    { word: "太阳", pinyin: "tàiyáng", meaning: "mặt trời" },
    { word: "特别", pinyin: "tèbié", meaning: "đặc biệt" },
    { word: "疼", pinyin: "téng", meaning: "đau" },
    { word: "提高", pinyin: "tígāo", meaning: "nâng cao" },
    { word: "体育", pinyin: "tǐyù", meaning: "thể dục, thể thao" },
    { word: "甜", pinyin: "tián", meaning: "ngọt" },
    { word: "条", pinyin: "tiáo", meaning: "con, chiếc (lượng từ vật dài)" },
    { word: "同意", pinyin: "tóngyì", meaning: "đồng ý" },
    { word: "头发", pinyin: "tóufa", meaning: "tóc" },
    { word: "突然", pinyin: "tūrán", meaning: "đột nhiên, bất ngờ" },
    { word: "图书馆", pinyin: "túshūguǎn", meaning: "thư viện" },
    { word: "腿", pinyin: "tuǐ", meaning: "cái chân" },
    { word: "完成", pinyin: "wánchéng", meaning: "hoàn thành" },
    { word: "碗", pinyin: "wǎn", meaning: "cái bát, chén" },
    { word: "万", pinyin: "wàn", meaning: "vạn, mười nghìn" },
    { word: "忘记", pinyin: "wàngjì", meaning: "quên" },
    { word: "为", pinyin: "wèi", meaning: "vì, để" },
    { word: "为了", pinyin: "wèile", meaning: "để, vì" },
    { word: "位", pinyin: "wèi", meaning: "vị (kính ngữ cho người)" },
    { word: "文化", pinyin: "wénhuà", meaning: "văn hóa" },
    { word: "西", pinyin: "xī", meaning: "phía Tây" },
    { word: "习惯", pinyin: "xíguàn", meaning: "thói quen, quen" },
    { word: "洗手间", pinyin: "xǐshǒujiān", meaning: "nhà vệ sinh" },
    { word: "洗澡", pinyin: "xǐzǎo", meaning: "tắm" },
    { word: "夏", pinyin: "xià", meaning: "mùa hè" },
    { word: "先", pinyin: "xiān", meaning: "trước, trước tiên" },
    { word: "相信", pinyin: "xiāngxìn", meaning: "tin tưởng" },
    { word: "香蕉", pinyin: "xiāngjiāo", meaning: "quả chuối" },
    { word: "向", pinyin: "xiàng", meaning: "hướng về, về phía" },
    { word: "像", pinyin: "xiàng", meaning: "giống như" },
    { word: "小心", pinyin: "xiǎoxīn", meaning: "cẩn thận" },
    { word: "校长", pinyin: "xiàozhǎng", meaning: "hiệu trưởng" },
    { word: "新闻", pinyin: "xīnwén", meaning: "tin tức" },
    { word: "新鲜", pinyin: "xīnxiān", meaning: "tươi mới, tươi ngon" },
    { word: "信用卡", pinyin: "xìnyòngkǎ", meaning: "thẻ tín dụng" },
    { word: "行李箱", pinyin: "xínglixiāng", meaning: "va li" },
    { word: "熊猫", pinyin: "xióngmāo", meaning: "gấu trúc" },
    { word: "需要", pinyin: "xūyào", meaning: "cần, nhu cầu" },
    { word: "选择", pinyin: "xuǎnzé", meaning: "lựa chọn" },
    { word: "眼镜", pinyin: "yǎnjìng", meaning: "kính mắt" },
    { word: "要求", pinyin: "yāoqiú", meaning: "yêu cầu" },
    { word: "爷爷", pinyin: "yéye", meaning: "ông nội" },
    { word: "一定", pinyin: "yídìng", meaning: "nhất định" },
    { word: "一共", pinyin: "yígòng", meaning: "tổng cộng" },
    { word: "一会儿", pinyin: "yíhuìr", meaning: "một lúc, một lát" },
    { word: "一样", pinyin: "yíyàng", meaning: "giống nhau" },
    { word: "一直", pinyin: "yìzhí", meaning: "luôn luôn, thẳng" },
    { word: "以前", pinyin: "yǐqián", meaning: "trước đây" },
    { word: "一般", pinyin: "yìbān", meaning: "bình thường, phổ biến" },
    { word: "音乐", pinyin: "yīnyuè", meaning: "âm nhạc" },
    { word: "银行", pinyin: "yínháng", meaning: "ngân hàng" },
    { word: "饮料", pinyin: "yǐnliào", meaning: "đồ uống, nước giải khát" },
    { word: "影响", pinyin: "yǐngxiǎng", meaning: "ảnh hưởng" },
    { word: "用", pinyin: "yòng", meaning: "dùng, sử dụng" },
    { word: "游戏", pinyin: "yóuxì", meaning: "trò chơi, game" },
    { word: "有名", pinyin: "yǒumíng", meaning: "nổi tiếng" },
    { word: "又", pinyin: "yòu", meaning: "lại (đã xảy ra)" },
    { word: "遇到", pinyin: "yùdào", meaning: "gặp phải, bắt gặp" },
    { word: "元", pinyin: "yuán", meaning: "đồng (đơn vị tiền)" },
    { word: "愿意", pinyin: "yuànyì", meaning: "tự nguyện, bằng lòng" },
    { word: "月亮", pinyin: "yuèliang", meaning: "mặt trăng" },
    { word: "越", pinyin: "yuè", meaning: "càng" },
    { word: "云", pinyin: "yún", meaning: "mây" },
    { word: "站", pinyin: "zhàn", meaning: "trạm, bến, đứng" },
    { word: "张", pinyin: "zhāng", meaning: "tờ, tấm (lượng từ)" },
    { word: "照顾", pinyin: "zhàogù", meaning: "chăm sóc, chiếu cố" },
    { word: "照片", pinyin: "zhàopiàn", meaning: "bức ảnh" },
    { word: "相机", pinyin: "xiàngjī", meaning: "máy ảnh" },
    { word: "只", pinyin: "zhǐ", meaning: "chỉ (chỉ có)" },
    { word: "只", pinyin: "zhī", meaning: "con (lượng từ động vật)" },
    { word: "中间", pinyin: "zhōngjiān", meaning: "ở giữa" },
    { word: "中文", pinyin: "zhōngwén", meaning: "tiếng Trung" },
    { word: "终于", pinyin: "zhōngyú", meaning: "cuối cùng thì" },
    { word: "种", pinyin: "zhǒng", meaning: "loại, loại hình" },
    { word: "重要", pinyin: "zhòngyào", meaning: "quan trọng" },
    { word: "周末", pinyin: "zhōumò", meaning: "cuối tuần" },
    { word: "主要", pinyin: "zhǔyào", meaning: "chủ yếu, chính" },
    { word: "注意", pinyin: "zhùyì", meaning: "chú ý" },
    { word: "着急", pinyin: "zháojí", meaning: "sốt ruột, lo lắng" },
    { word: "自己", pinyin: "zìjǐ", meaning: "tự mình, bản thân" },
    { word: "总是", pinyin: "zǒngshì", meaning: "luôn luôn" },
    { word: "嘴", pinyin: "zuǐ", meaning: "miệng, môi" },
    { word: "作业", pinyin: "zuòyè", meaning: "bài tập về nhà" },
    { word: "作用", pinyin: "zuòyòng", meaning: "tác dụng, ảnh hưởng" }
];

// Dữ liệu Từ vựng HSK 4 (Đầy đủ 600/600 từ)
hskData["4"] = [
    { word: "爱情", pinyin: "àiqíng", meaning: "tình yêu" },
    { word: "安排", pinyin: "ānpái", meaning: "an bài, sắp xếp" },
    { word: "安全", pinyin: "ānquán", meaning: "an toàn" },
    { word: "暗", pinyin: "àn", meaning: "tối, u ám" },
    { word: "按时", pinyin: "ànshí", meaning: "đúng giờ" },
    { word: "按照", pinyin: "ànzhào", meaning: "dựa theo, chiếu theo" },
    { word: "抱", pinyin: "bào", meaning: "ôm, bế" },
    { word: "抱歉", pinyin: "bàoqiàn", meaning: "xin lỗi, lấy làm tiếc" },
    { word: "保护", pinyin: "bǎohù", meaning: "bảo vệ" },
    { word: "报名", pinyin: "bàomíng", meaning: "đăng ký" },
    { word: "包子", pinyin: "bāozi", meaning: "bánh bao" },
    { word: "保证", pinyin: "bǎozhèng", meaning: "bảo đảm, cam đoan" },
    { word: "本来", pinyin: "běnlái", meaning: "vốn dĩ, ban đầu" },
    { word: "笨", pinyin: "bèn", meaning: "ngốc nghếch, ngớ ngẩn" },
    { word: "比如", pinyin: "bǐrú", meaning: "ví dụ như" },
    { word: "毕业", pinyin: "bìyè", meaning: "tốt nghiệp" },
    { word: "遍", pinyin: "biàn", meaning: "lần, lượt (từ đầu đến cuối)" },
    { word: "标准", pinyin: "biāozhǔn", meaning: "tiêu chuẩn" },
    { word: "表格", pinyin: "biǎogé", meaning: "bảng biểu, biểu mẫu" },
    { word: "表示", pinyin: "biǎoshì", meaning: "biểu thị, bày tỏ" },
    { word: "表演", pinyin: "biǎoyǎn", meaning: "biểu diễn" },
    { word: "表扬", pinyin: "biǎoyáng", meaning: "khen ngợi, biểu dương" },
    { word: "饼干", pinyin: "bǐnggān", meaning: "bánh quy" },
    { word: "并且", pinyin: "bìngqiě", meaning: "đồng thời, hơn nữa" },
    { word: "博士", pinyin: "bóshì", meaning: "tiến sĩ" },
    { word: "不过", pinyin: "búguò", meaning: "nhưng, có điều" },
    { word: "不得不", pinyin: "bùdébù", meaning: "không thể không, đành phải" },
    { word: "不管", pinyin: "bùguǎn", meaning: "cho dù, bất luận" },
    { word: "不好意思", pinyin: "bù hǎoyìsi", meaning: "ngại ngùng, xin lỗi" },
    { word: "不仅", pinyin: "bùjǐn", meaning: "không chỉ" },
    { word: "部分", pinyin: "bùfen", meaning: "bộ phận, phần" },
    { word: "擦", pinyin: "cā", meaning: "lau, chùi, xát" },
    { word: "猜", pinyin: "cāi", meaning: "đoán" },
    { word: "材料", pinyin: "cáiliào", meaning: "tài liệu, vật liệu" },
    { word: "参观", pinyin: "cānguān", meaning: "tham quan" },
    { word: "餐厅", pinyin: "cāntīng", meaning: "nhà hàng, phòng ăn" },
    { word: "厕所", pinyin: "cèsuǒ", meaning: "nhà vệ sinh" },
    { word: "差不多", pinyin: "chàbuduō", meaning: "xấp xỉ, gần như" },
    { word: "长城", pinyin: "Chángchéng", meaning: "Vạn Lý Trường Thành" },
    { word: "长江", pinyin: "Chángjiāng", meaning: "sông Trường Giang" },
    { word: "尝", pinyin: "cháng", meaning: "nếm, thử" },
    { word: "场", pinyin: "chǎng", meaning: "trận, hiệp, sân" },
    { word: "超过", pinyin: "chāoguò", meaning: "vượt quá" },
    { word: "成功", pinyin: "chénggōng", meaning: "thành công" },
    { word: "成熟", pinyin: "chéngshú", meaning: "trưởng thành, chín" },
    { word: "成为", pinyin: "chéngwéi", meaning: "trở thành" },
    { word: "诚实", pinyin: "chéngshí", meaning: "thành thật, trung thực" },
    { word: "乘坐", pinyin: "chéngzuò", meaning: "ngồi, đi (tàu, xe, máy bay)" },
    { word: "吃惊", pinyin: "chījīng", meaning: "giật mình, kinh ngạc" },
    { word: "重新", pinyin: "chóngxīn", meaning: "làm lại từ đầu" },
    { word: "抽烟", pinyin: "chōuyān", meaning: "hút thuốc" },
    { word: "出差", pinyin: "chūchāi", meaning: "đi công tác" },
    { word: "出发", pinyin: "chūfā", meaning: "xuất phát" },
    { word: "出生", pinyin: "chūshēng", meaning: "sinh ra" },
    { word: "厨房", pinyin: "chúfáng", meaning: "bếp" },
    { word: "传真", pinyin: "chuánzhēn", meaning: "fax, gửi bản sao" },
    { word: "词语", pinyin: "cíyǔ", meaning: "từ ngữ" },
    { word: "粗心", pinyin: "cūxīn", meaning: "cẩu thả, bất cẩn" },
    { word: "存", pinyin: "cún", meaning: "gửi, tồn, lưu trữ" },
    { word: "错误", pinyin: "cuòwù", meaning: "sai lầm, lỗi sai" },
    { word: "答案", pinyin: "dá'àn", meaning: "đáp án" },
    { word: "打扮", pinyin: "dǎban", meaning: "trang điểm, ăn diện" },
    { word: "打扰", pinyin: "dǎrǎo", meaning: "làm phiền" },
    { word: "打折", pinyin: "dǎzhé", meaning: "giảm giá" },
    { word: "打针", pinyin: "dǎzhēn", meaning: "tiêm, chích thuốc" },
    { word: "大概", pinyin: "dàgài", meaning: "đại khái, khoảng" },
    { word: "大使馆", pinyin: "dàshǐguǎn", meaning: "đại sứ quán" },
    { word: "大约", pinyin: "dàyuē", meaning: "khoảng chừng" },
    { word: "戴", pinyin: "dài", meaning: "đeo, đội (kính, mũ, đồng hồ)" },
    { word: "当", pinyin: "dāng", meaning: "làm (nghề); khi" },
    { word: "当时", pinyin: "dāngshí", meaning: "lúc đó, khi đó" },
    { word: "刀", pinyin: "dāo", meaning: "con dao" },
    { word: "导游", pinyin: "dǎoyóu", meaning: "hướng dẫn viên du lịch" },
    { word: "到处", pinyin: "dàochù", meaning: "khắp nơi, mọi nơi" },
    { word: "到底", pinyin: "dàodǐ", meaning: "rốt cuộc, đến cùng" },
    { word: "道歉", pinyin: "dàoqiàn", meaning: "xin lỗi" },
    { word: "得意", pinyin: "déyì", meaning: "đắc ý, đắc thắng" },
    { word: "得", pinyin: "děi", meaning: "phải, cần phải" },
    { word: "登机牌", pinyin: "dēngjīpái", meaning: "thẻ lên máy bay" },
    { word: "等", pinyin: "děng", meaning: "vân vân, bằng nhau" },
    { word: "低", pinyin: "dī", meaning: "thấp, cúi" },
    { word: "底", pinyin: "dǐ", meaning: "đáy, cuối (tháng/năm)" },
    { word: "地点", pinyin: "dìdiǎn", meaning: "địa điểm" },
    { word: "地球", pinyin: "dìqiú", meaning: "trái đất" },
    { word: "地址", pinyin: "dìzhǐ", meaning: "địa chỉ" },
    { word: "调查", pinyin: "diàochá", meaning: "điều tra, khảo sát" },
    { word: "掉", pinyin: "diào", meaning: "rơi, rụng, mất" },
    { word: "丢", pinyin: "diū", meaning: "mất, ném, vứt" },
    { word: "动作", pinyin: "dòngzuò", meaning: "động tác" },
    { word: "堵车", pinyin: "dǔchē", meaning: "tắc đường, kẹt xe" },
    { word: "肚子", pinyin: "dùzi", meaning: "bụng" },
    { word: "断", pinyin: "duàn", meaning: "gãy, đứt, cắt" },
    { word: "对话", pinyin: "duìhuà", meaning: "đối thoại, hội thoại" },
    { word: "对面", pinyin: "duìmiàn", meaning: "đối diện" },
    { word: "顿", pinyin: "dùn", meaning: "bữa, trận (lượng từ ăn/mắng)" },
    { word: "朵", pinyin: "duǒ", meaning: "bông, đóa (lượng từ hoa, mây)" },
    { word: "儿童", pinyin: "értóng", meaning: "nhi đồng, trẻ em" },
    { word: "而", pinyin: "ér", meaning: "và, mà, nhưng" },
    { word: "发", pinyin: "fā", meaning: "gửi, phát" },
    { word: "发生", pinyin: "fāshēng", meaning: "phát sinh, xảy ra" },
    { word: "发展", pinyin: "fāzhǎn", meaning: "phát triển" },
    { word: "法律", pinyin: "fǎlǜ", meaning: "pháp luật" },
    { word: "翻译", pinyin: "fānyì", meaning: "phiên dịch, dịch" },
    { word: "烦恼", pinyin: "fánnǎo", meaning: "phiền não, phiền muộn" },
    { word: "反对", pinyin: "fǎnduì", meaning: "phản đối" },
    { word: "方法", pinyin: "fāngfǎ", meaning: "phương pháp" },
    { word: "方面", pinyin: "fāngmiàn", meaning: "phương diện, khía cạnh" },
    { word: "方向", pinyin: "fāngxiàng", meaning: "phương hướng" },
    { word: "房东", pinyin: "fángdōng", meaning: "chủ nhà" },
    { word: "放弃", pinyin: "fàngqì", meaning: "từ bỏ, bỏ cuộc" },
    { word: "放暑假", pinyin: "fàng shǔjià", meaning: "nghỉ hè" },
    { word: "份", pinyin: "fèn", meaning: "phần, bản (lượng từ tài liệu/báo)" },
    { word: "丰富", pinyin: "fēngfù", meaning: "phong phú" },
    { word: "否则", pinyin: "fǒuzé", meaning: "nếu không thì" },
    { word: "符合", pinyin: "fúhé", meaning: "phù hợp" },
    { word: "父亲", pinyin: "fùqīn", meaning: "người bố, cha" },
    { word: "付款", pinyin: "fùkuǎn", meaning: "thanh toán tiền" },
    { word: "负责", pinyin: "fùzé", meaning: "phụ trách, chịu trách nhiệm" },
    { word: "复印", pinyin: "fùyìn", meaning: "photocopy, in sao" },
    { word: "改变", pinyin: "gǎibiàn", meaning: "cải biến, thay đổi" },
    { word: "干杯", pinyin: "gānbēi", meaning: "cạn ly, cụng ly" },
    { word: "干燥", pinyin: "gānzào", meaning: "hanh khô, khô ráo" },
    { word: "感动", pinyin: "gǎndòng", meaning: "cảm động" },
    { word: "感觉", pinyin: "gǎnjué", meaning: "cảm giác, cảm thấy" },
    { word: "感情", pinyin: "gǎnqíng", meaning: "tình cảm" },
    { word: "感谢", pinyin: "gǎnxiè", meaning: "cảm ơn, tạ ơn" },
    { word: "干", pinyin: "gàn", meaning: "làm (công việc)" },
    { word: "高级", pinyin: "gāojí", meaning: "cao cấp" },
    { word: "高速公路", pinyin: "gāosù gōnglù", meaning: "đường cao tốc" },
    { word: "各", pinyin: "gè", meaning: "các, mỗi" },
    { word: "工资", pinyin: "gōngzī", meaning: "tiền lương" },
    { word: "公里", pinyin: "gōnglǐ", meaning: "km, ki-lô-mét" },
    { word: "功夫", pinyin: "gōngfu", meaning: "công phu, võ thuật" },
    { word: "共同", pinyin: "gòngtóng", meaning: "chung, cùng nhau" },
    { word: "购物", pinyin: "gòuwù", meaning: "mua sắm" },
    { word: "够", pinyin: "gòu", meaning: "đủ" },
    { word: "估计", pinyin: "gūjì", meaning: "ước tính, đánh giá" },
    { word: "鼓励", pinyin: "gǔlì", meaning: "khuyến khích, động viên" },
    { word: "故意", pinyin: "gùyì", meaning: "cố ý, cố tình" },
    { word: "顾客", pinyin: "gùkè", meaning: "khách hàng" },
    { word: "挂", pinyin: "guà", meaning: "treo, mắc" },
    { word: "关键", pinyin: "guānjiàn", meaning: "mấu chốt, then chốt" },
    { word: "观众", pinyin: "guānzhòng", meaning: "khán giả" },
    { word: "管理", pinyin: "guǎnlǐ", meaning: "quản lý" },
    { word: "光", pinyin: "guāng", meaning: "ánh sáng, chỉ, hết sạch" },
    { word: "广播", pinyin: "guǎngbō", meaning: "phát thanh, loa" },
    { word: "广告", pinyin: "guǎnggào", meaning: "quảng cáo" },
    { word: "逛", pinyin: "guàng", meaning: "dạo chơi, đi dạo" },
    { word: "规定", pinyin: "guīdìng", meaning: "quy định" },
    { word: "国籍", pinyin: "guójí", meaning: "quốc tịch" },
    { word: "国际", pinyin: "guójì", meaning: "quốc tế" },
    { word: "果汁", pinyin: "guǒzhī", meaning: "nước ép hoa quả" },
    { word: "果然", pinyin: "guǒrán", meaning: "quả nhiên" },
    { word: "过程", pinyin: "guòchéng", meaning: "quá trình" },
    { word: "海洋", pinyin: "hǎiyáng", meaning: "biển cả, đại dương" },
    { word: "害羞", pinyin: "hàixiū", meaning: "xấu hổ, e ngại" },
    { word: "寒假", pinyin: "hánjià", meaning: "nghỉ đông" },
    { word: "汗", pinyin: "hàn", meaning: "mồ hôi" },
    { word: "航班", pinyin: "hángbān", meaning: "chuyến bay" },
    { word: "好处", pinyin: "hǎochu", meaning: "điểm tốt, lợi ích" },
    { word: "好像", pinyin: "hǎoxiàng", meaning: "hình như, dường như" },
    { word: "合格", pinyin: "hégé", meaning: "hợp lệ, đạt tiêu chuẩn" },
    { word: "合适", pinyin: "héshì", meaning: "thích hợp, vừa vặn" },
    { word: "盒子", pinyin: "hézi", meaning: "cái hộp" },
    { word: "猴子", pinyin: "hóuzi", meaning: "con khỉ" },
    { word: "厚", pinyin: "hòu", meaning: "dày" },
    { word: "后悔", pinyin: "hòuhuǐ", meaning: "hối hận" },
    { word: "互联网", pinyin: "hùliánwǎng", meaning: "mạng Internet" },
    { word: "互相", pinyin: "hùxiāng", meaning: "lẫn nhau, qua lại" },
    { word: "护士", pinyin: "hùshi", meaning: "y tá" },
    { word: "怀疑", pinyin: "huáiyí", meaning: "hoài nghi, nghi ngờ" },
    { word: "回忆", pinyin: "huíyì", meaning: "ký ức, nhớ lại" },
    { word: "活动", pinyin: "huódòng", meaning: "hoạt động" },
    { word: "活泼", pinyin: "huópo", meaning: "hoạt bát, năng động" },
    { word: "火", pinyin: "huǒ", meaning: "lửa, hot, nổi tiếng" },
    { word: "获得", pinyin: "huòdé", meaning: "giành được, thu được" },
    { word: "积极", pinyin: "jījí", meaning: "tích cực" },
    { word: "积累", pinyin: "jīlěi", meaning: "tích lũy" },
    { word: "基础", pinyin: "jīchǔ", meaning: "nền tảng, cơ sở" },
    { word: "激动", pinyin: "jīdòng", meaning: "kích động, xúc động" },
    { word: "及时", pinyin: "jíshí", meaning: "kịp thời" },
    { word: "极其", pinyin: "jíqí", meaning: "cực kỳ, rất" },
    { word: "集合", pinyin: "jíhé", meaning: "tập hợp" },
    { word: "计划", pinyin: "jìhuà", meaning: "kế hoạch" },
    { word: "记者", pinyin: "jìzhě", meaning: "phóng viên, nhà báo" },
    { word: "技术", pinyin: "jìshù", meaning: "kỹ thuật, tay nghề" },
    { word: "既然", pinyin: "jìrán", meaning: "đã... thì" },
    { word: "继续", pinyin: "jìxù", meaning: "tiếp tục" },
    { word: "寄", pinyin: "jì", meaning: "gửi (thư, hàng)" },
    { word: "加班", pinyin: "jiābān", meaning: "tăng ca, làm thêm" },
    { word: "加油站", pinyin: "jiāyóuzhàn", meaning: "trạm xăng" },
    { word: "价格", pinyin: "jiàgé", meaning: "giá cả" },
    { word: "假", pinyin: "jiǎ", meaning: "giả, xạo" },
    { word: "坚持", pinyin: "jiānchí", meaning: "kiên trì" },
    { word: "减肥", pinyin: "jiǎnféi", meaning: "giảm cân" },
    { word: "减少", pinyin: "jiǎnshǎo", meaning: "cắt giảm, giảm bớt" },
    { word: "建议", pinyin: "jiànyì", meaning: "kiến nghị, đề xuất" },
    { word: "将来", pinyin: "jiānglái", meaning: "tương lai" },
    { word: "奖金", pinyin: "jiǎngjīn", meaning: "tiền thưởng" },
    { word: "降低", pinyin: "jiàngdī", meaning: "giảm thấp, hạ xuống" },
    { word: "降落", pinyin: "jiàngluò", meaning: "hạ cánh" },
    { word: "交", pinyin: "jiāo", meaning: "giao, nộp, kết bạn" },
    { word: "交流", pinyin: "jiāoliú", meaning: "giao lưu, trao đổi" },
    { word: "交通", pinyin: "jiāotōng", meaning: "giao thông" },
    { word: "郊区", pinyin: "jiāoqū", meaning: "ngoại thành, ngoại ô" },
    { word: "骄傲", pinyin: "jiāo'ào", meaning: "kiêu ngạo, tự hào" },
    { word: "饺子", pinyin: "jiǎozi", meaning: "bánh há cảo, sủi cảo" },
    { word: "教授", pinyin: "jiàoshòu", meaning: "giáo sư" },
    { word: "教育", pinyin: "jiàoyù", meaning: "giáo dục" },
    { word: "接受", pinyin: "jiēshòu", meaning: "tiếp nhận, chấp nhận" },
    { word: "接着", pinyin: "jiēzhe", meaning: "tiếp theo, sau đó" },
    { word: "节", pinyin: "jié", meaning: "tiết (lượng từ tiết học)" },
    { word: "节约", pinyin: "jiéyuē", meaning: "tiết kiệm" },
    { word: "结果", pinyin: "jiéguǒ", meaning: "kết quả" },
    { word: "解释", pinyin: "jiěshì", meaning: "giải thích" },
    { word: "尽管", pinyin: "jǐnguǎn", meaning: "cho dù, mặc dù" },
    { word: "紧张", pinyin: "jǐnzhāng", meaning: "hồi hộp, căng thẳng" },
    { word: "进行", pinyin: "jìnxíng", meaning: "tiến hành" },
    { word: "禁止", pinyin: "jìnzhǐ", meaning: "cấm, cấm đoán" },
    { word: "京剧", pinyin: "jīngjù", meaning: "Kinh kịch Trung Quốc" },
    { word: "精彩", pinyin: "jīngcǎi", meaning: "đặc sắc, tuyệt vời" },
    { word: "经济", pinyin: "jīngjì", meaning: "kinh tế" },
    { word: "经验", pinyin: "jīngyàn", meaning: "kinh nghiệm" },
    { word: "京剧", pinyin: "jīngjù", meaning: "Kinh kịch" },
    { word: "警察", pinyin: "jǐngchá", meaning: "cảnh sát" },
    { word: "竟然", pinyin: "jìngrán", meaning: "mà lại, không ngờ" },
    { word: "竞争", pinyin: "jìngzhēng", meaning: "cạnh tranh" },
    { word: "究竟", pinyin: "jiūjìng", meaning: "rốt cuộc, kết quả" },
    { word: "举办", pinyin: "jǔbàn", meaning: "tổ chức" },
    { word: "举行", pinyin: "jǔxíng", meaning: "tiến hành, cử hành" },
    { word: "拒绝", pinyin: "jùjué", meaning: "từ chối" },
    { word: "距离", pinyin: "jùlí", meaning: "khoảng cách, cách" },
    { word: "聚会", pinyin: "jùhuì", meaning: "tụ tập, hội họp" },
    { word: "开玩笑", pinyin: "kāi wánxiào", meaning: "nói đùa, trêu chọc" },
    { word: "看法", pinyin: "kànfǎ", meaning: "quan điểm, cách nhìn" },
    { word: "考虑", pinyin: "kǎolǜ", meaning: "suy nghĩ, cân nhắc" },
    { word: "棵", pinyin: "kē", meaning: "cây (lượng từ cây cối)" },
    { word: "科学", pinyin: "kēxué", meaning: "khoa học" },
    { word: "咳嗽", pinyin: "késou", meaning: "ho" },
    { word: "可怜", pinyin: "kělián", meaning: "tội nghiệp, đáng thương" },
    { word: "可惜", pinyin: "kěxī", meaning: "đáng tiếc" },
    { word: "客厅", pinyin: "kètīng", meaning: "phòng khách" },
    { word: "肯定", pinyin: "kěndìng", meaning: "khẳng định, chắc chắn" },
    { word: "空", pinyin: "kōng", meaning: "trống rỗng, rảnh rỗi" },
    { word: "空气", pinyin: "kōngqì", meaning: "không khí" },
    { word: "恐龙", pinyin: "kǒnglóng", meaning: "khủng long" },
    { word: "苦", pinyin: "kǔ", meaning: "đắng, khổ" },
    { word: "酷", pinyin: "kù", meaning: "ngầu, ngầu lòi" },
    { word: "夸", pinyin: "kuā", meaning: "khen ngợi, ca ngợi" },
    { word: "宽", pinyin: "kuān", meaning: "rộng" },
    { word: "困", pinyin: "kùn", meaning: "buồn ngủ, vất vả" },
    { word: "困难", pinyin: "kùnnan", meaning: "khó khăn" },
    { word: "扩大", pinyin: "kuòdà", meaning: "mở rộng, khuếch đại" },
    { word: "拉", pinyin: "lā", meaning: "kéo, lôi" },
    { word: "垃圾桶", pinyin: "lājītǒng", meaning: "thùng rác" },
    { word: "辣", pinyin: "là", meaning: "cay" },
    { word: "来不及", pinyin: "láibují", meaning: "không kịp" },
    { word: "来得及", pinyin: "láidejí", meaning: "kịp lúc" },
    { word: "懒", pinyin: "lǎn", meaning: "lười biếng" },
    { word: "浪费", pinyin: "làngfèi", meaning: "lãng phí" },
    { word: "浪漫", pinyin: "làngmàn", meaning: "lãng mạn" },
    { word: "老虎", pinyin: "lǎohǔ", meaning: "con hổ, cọp" },
    { word: "冷静", pinyin: "lěngjìng", meaning: "bình tĩnh" },
    { word: "理发", pinyin: "lǐfà", meaning: "cắt tóc" },
    { word: "理解", pinyin: "lǐjiě", meaning: "thấu hiểu" },
    { word: "理想", pinyin: "lǐxiǎng", meaning: "lý tưởng" },
    { word: "礼貌", pinyin: "lǐmào", meaning: "lịch sự, lễ phép" },
    { word: "厉害", pinyin: "lìhai", meaning: "lợi hại, dữ dội" },
    { word: "力气", pinyin: "lìqi", meaning: "sức lực, sức mạnh" },
    { word: "例如", pinyin: "lìrú", meaning: "ví dụ như" },
    { word: "利润", pinyin: "lìrùn", meaning: "lợi nhuận" },
    { word: "利息", pinyin: "lìxī", meaning: "tiền lãi" },
    { word: "利益", pinyin: "lìyì", meaning: "lợi ích" },
    { word: "利用", pinyin: "lìyòng", meaning: "tận dụng, lợi dụng" },
    { word: "连", pinyin: "lián", meaning: "ngay cả, liên tiếp" },
    { word: "联系", pinyin: "liánxì", meaning: "liên hệ, liên lạc" },
    { word: "凉快", pinyin: "liángkuai", meaning: "mát mẻ" },
    { word: "零食", pinyin: "língshí", meaning: "đồ ăn vặt" },
    { word: "亮", pinyin: "liàng", meaning: "sáng, sáng sủa" },
    { word: "聊天", pinyin: "liáotiān", meaning: "trò chuyện, tán gẫu" },
    { word: "留", pinyin: "liú", meaning: "ở lại, lưu giữ" },
    { word: "流利", pinyin: "liúlì", meaning: "lưu loát, trôi chảy" },
    { word: "流行", pinyin: "liúxíng", meaning: "thịnh hành, phổ biến" },
    { word: "流泪", pinyin: "liúlèi", meaning: "chảy nước mắt" },
    { word: "乱", pinyin: "luàn", meaning: "lộn xộn, bừa bãi" },
    { word: "律师", pinyin: "lǜshī", meaning: "luật sư" },
    { word: "麻烦", pinyin: "máfan", meaning: "phiền phức, phiền hà" },
    { word: "马虎", pinyin: "mǎhu", meaning: "qua loa, ẩu tả" },
    { word: "满", pinyin: "mǎn", meaning: "đầy, trọn vẹn" },
    { word: "毛巾", pinyin: "máojīn", meaning: "khăn mặt" },
    { word: "美丽", pinyin: "měilì", meaning: "xinh đẹp" },
    { word: "梦", pinyin: "mèng", meaning: "giấc mơ, nằm mơ" },
    { word: "迷路", pinyin: "mílù", meaning: "lạc đường" },
    { word: "密码", pinyin: "mìmǎ", meaning: "mật khẩu" },
    { word: "免费", pinyin: "miǎnfèi", meaning: "miễn phí" },
    { word: "秒", pinyin: "miǎo", meaning: "giây (đơn vị thời gian)" },
    { word: "民族", pinyin: "mínzú", meaning: "dân tộc" },
    { word: "母亲", pinyin: "mǔqīn", meaning: "người mẹ" },
    { word: "目的", pinyin: "mùdì", meaning: "mục đích" },
    { word: "耐心", pinyin: "nàixīn", meaning: "kiên nhẫn, nhẫn nại" },
    { word: "难道", pinyin: "nándào", meaning: "lẽ nào, chẳng lẽ" },
    { word: "难受", pinyin: "nánshòu", meaning: "khó chịu, buồn bã" },
    { word: "内", pinyin: "nèi", meaning: "bên trong, nội bộ" },
    { word: "内容", pinyin: "nèiróng", meaning: "nội dung" },
    { word: "能力", pinyin: "nénglì", meaning: "năng lực, khả năng" },
    { word: "年龄", pinyin: "niánlíng", meaning: "tuổi tác" },
    { word: "弄", pinyin: "nòng", meaning: "làm, chế biến" },
    { word: "暖和", pinyin: "nuǎnhuo", meaning: "ấm áp" },
    { word: "偶尔", pinyin: "ǒu'ěr", meaning: "thỉnh thoảng, đôi khi" },
    { word: "排列", pinyin: "páiliè", meaning: "hàng lối, sắp xếp" },
    { word: "判断", pinyin: "pànduàn", meaning: "phán đoán, nhận định" },
    { word: "陪", pinyin: "péi", meaning: "đi cùng, đồng hành" },
    { word: "批评", pinyin: "pīpíng", meaning: "phê bình" },
    { word: "皮肤", pinyin: "pífū", meaning: "làn da" },
    { word: "脾气", pinyin: "píqi", meaning: "tính tình, tính khí" },
    { word: "篇", pinyin: "piān", meaning: "bài (văn, thơ, báo)" },
    { word: "乒乓球", pinyin: "pīngpāngqiú", meaning: "bóng bàn" },
    { word: "平时", pinyin: "píngshí", meaning: "ngày thường, lúc bình thường" },
    { word: "瓶子", pinyin: "píngzi", meaning: "cái chai, cái lọ" },
    { word: "破", pinyin: "pò", meaning: "vỡ, rách, hỏng" },
    { word: "葡萄", pinyin: "pútao", meaning: "quả nho" },
    { word: "普遍", pinyin: "pǔbiàn", meaning: "phổ biến" },
    { word: "其次", pinyin: "qícì", meaning: "tiếp theo, thứ hai" },
    { word: "其中", pinyin: "qízhōng", meaning: "trong đó" },
    { word: "气候", pinyin: "qìhòu", meaning: "khí hậu" },
    { word: "千万", pinyin: "qiānwàn", meaning: "nhất định, tuyệt đối" },
    { word: "签证", pinyin: "qiānzhèng", meaning: "thị thực, visa" },
    { word: "墙", pinyin: "qiáng", meaning: "bức tường" },
    { word: "敲", pinyin: "qiāo", meaning: "gõ, đập" },
    { word: "桥", pinyin: "qiáo", meaning: "cây cầu" },
    { word: "巧克力", pinyin: "qiǎokèlì", meaning: "sô-cô-la" },
    { word: "亲戚", pinyin: "qīnqi", meaning: "họ hàng, thân thích" },
    { word: "轻", pinyin: "qīng", meaning: "nhẹ" },
    { word: "轻松", pinyin: "qīngsōng", meaning: "thảnh thơi, thư thái" },
    { word: "情况", pinyin: "qíngkuàng", meaning: "tình hình" },
    { word: "请客", pinyin: "qǐngkè", meaning: "mời khách, đãi tiệc" },
    { word: "穷", pinyin: "qióng", meaning: "nghèo" },
    { word: "区别", pinyin: "qūbié", meaning: "khác biệt, phân biệt" },
    { word: "取", pinyin: "qǔ", meaning: "lấy, rút (tiền)" },
    { word: "全部", pinyin: "quánbù", meaning: "toàn bộ, tất cả" },
    { word: "缺点", pinyin: "quēdiǎn", meaning: "khuyết điểm, nhược điểm" },
    { word: "缺少", pinyin: "quēshǎo", meaning: "thiếu hụt" },
    { word: "却", pinyin: "què", meaning: "lại, nhưng lại" },
    { word: "确实", pinyin: "quèshí", meaning: "thực sự, quả thật" },
    { word: "群", pinyin: "qún", meaning: "bầy, đàn, nhóm" },
    { word: "热闹", pinyin: "rènao", meaning: "náo nhiệt, nhộn nhịp" },
    { word: "人民币", pinyin: "rénmínbì", meaning: "Nhân dân tệ" },
    { word: "任何", pinyin: "rènhé", meaning: "bất kỳ" },
    { word: "任务", pinyin: "rènwu", meaning: "nhiệm vụ" },
    { word: "扔", pinyin: "rēng", meaning: "ném, vứt" },
    { word: "仍然", pinyin: "réngrán", meaning: "vẫn, vẫn như cũ" },
    { word: "日记", pinyin: "rìjì", meaning: "nhật ký" },
    { word: "入口", pinyin: "rùkǒu", meaning: "lối vào" },
    { word: "散步", pinyin: "sànbù", meaning: "tản bộ, đi dạo" },
    { word: "森林", pinyin: "sēnlín", meaning: "rừng rậm" },
    { word: "沙发", pinyin: "shāfā", meaning: "ghế sofa" },
    { word: "伤心", pinyin: "shāngxīn", meaning: "đau lòng, thương tâm" },
    { word: "商量", pinyin: "shāngliang", meaning: "thương lượng, bàn bạc" },
    { word: "稍微", pinyin: "shāowēi", meaning: "hơi hơi, một chút" },
    { word: "社会", pinyin: "shèhuì", meaning: "xã hội" },
    { word: "深", pinyin: "shēn", meaning: "sâu, đậm (màu)" },
    { word: "申请", pinyin: "shēnqǐng", meaning: "xin, nộp đơn xin" },
    { word: "甚至", pinyin: "shènzhì", meaning: "thậm chí" },
    { word: "生活", pinyin: "shēnghuó", meaning: "cuộc sống, sinh hoạt" },
    { word: "生命", pinyin: "shēngmìng", meaning: "sinh mạng, sự sống" },
    { word: "生意", pinyin: "shēngyi", meaning: "buôn bán, kinh doanh" },
    { word: "省", pinyin: "shěng", meaning: "tỉnh thành; tiết kiệm" },
    { word: "剩", pinyin: "shèng", meaning: "dư thừa, còn lại" },
    { word: "失败", pinyin: "shībài", meaning: "thất bại" },
    { word: "失望", pinyin: "shīwàng", meaning: "thất vọng" },
    { word: "师傅", pinyin: "shīfu", meaning: "thợ, sư phụ" },
    { word: "湿润", pinyin: "shīrùn", meaning: "ẩm ướt, ẩm mịn" },
    { word: "狮子", pinyin: "shīzi", meaning: "con sư tử" },
    { word: "十分", pinyin: "shífēn", meaning: "vô cùng, vô cùng" },
    { word: "实际", pinyin: "shíjì", meaning: "thực tế" },
    { word: "食品", pinyin: "shípǐn", meaning: "thực phẩm, đồ ăn" },
    { word: "礼貌", pinyin: "lǐmào", meaning: "lễ phép" },
    { word: "适合", pinyin: "shìhé", meaning: "thích hợp, phù hợp" },
    { word: "适应", pinyin: "shìyìng", meaning: "thích nghi" },
    { word: "世纪", pinyin: "shìjì", meaning: "thế kỷ" },
    { word: "收", pinyin: "shōu", meaning: "thu, nhận" },
    { word: "收入", pinyin: "shōurù", meaning: "thu nhập" },
    { word: "收拾", pinyin: "shōushi", meaning: "dọn dẹp, thu dọn" },
    { word: "首都", pinyin: "shǒudū", meaning: "thủ đô" },
    { word: "首先", pinyin: "shǒuxiān", meaning: "đầu tiên, trước hết" },
    { word: "受不了", pinyin: "shòubuliǎo", meaning: "chịu không nổi" },
    { word: "受到", pinyin: "shòudào", meaning: "nhận được, bị" },
    { word: "售货员", pinyin: "shòuhuòyuán", meaning: "nhân viên bán hàng" },
    { word: "输", pinyin: "shū", meaning: "thua, thất bại" },
    { word: "熟悉", pinyin: "shúxī", meaning: "quen thuộc, am hiểu" },
    { word: "数量", pinyin: "shùliàng", meaning: "số lượng" },
    { word: "数字", pinyin: "shùzì", meaning: "con số, chữ số" },
    { word: "帅", pinyin: "shuài", meaning: "đẹp trai" },
    { word: "顺便", pinyin: "shùnbiàn", meaning: "nhân tiện, tiện thể" },
    { word: "顺利", pinyin: "shùnlì", meaning: "thuận lợi" },
    { word: "顺序", pinyin: "shùnxù", meaning: "thứ tự, tuần tự" },
    { word: "说明", pinyin: "shuōmíng", meaning: "thuyết minh, giải thích" },
    { word: "硕士", pinyin: "shuòshì", meaning: "thạc sĩ" },
    { word: "死", pinyin: "sǐ", meaning: "chết" },
    { word: "速度", pinyin: "sùdù", meaning: "tốc độ" },
    { word: "塑料袋", pinyin: "sùliàodài", meaning: "túi nilon" },
    { word: "酸", pinyin: "suān", meaning: "chua, mỏi (cơ)" },
    { word: "随便", pinyin: "suíbiàn", meaning: "tùy ý, tùy tiện" },
    { word: "随着", pinyin: "suízhe", meaning: "cùng với, đi kèm" },
    { word: "孙子", pinyin: "sūnzi", meaning: "cháu trai" },
    { word: "所有", pinyin: "suǒyǒu", meaning: "tất cả, toàn bộ" },
    { word: "台", pinyin: "tái", meaning: "đài, bệ, chiếc (lượng từ máy móc)" },
    { word: "抬", pinyin: "tái", meaning: "ngẩng, giơ, khiêng" },
    { word: "态度", pinyin: "tàidu", meaning: "thái độ" },
    { word: "弹钢琴", pinyin: "tán gāngqín", meaning: "đánh đàn piano" },
    { word: "谈", pinyin: "tán", meaning: "nói chuyện, đàm đạo" },
    { word: "汤", pinyin: "tāng", meaning: "canh, súp" },
    { word: "趟", pinyin: "tàng", meaning: "chuyến, lượt" },
    { word: "糖", pinyin: "táng", meaning: "đường, kẹo" },
    { word: "躺", pinyin: "tǎng", meaning: "nằm" },
    { word: "讨论", pinyin: "tǎolùn", meaning: "thảo luận" },
    { word: "讨厌", pinyin: "tǎoyàn", meaning: "ghét, đáng ghét" },
    { word: "特点", pinyin: "tèdiǎn", meaning: "đặc điểm" },
    { word: "提", pinyin: "tí", meaning: "xách, nhắc đến, đề xuất" },
    { word: "提供", pinyin: "tígōng", meaning: "cung cấp" },
    { word: "提前", pinyin: "tíqián", meaning: "làm trước, sớm hơn" },
    { word: "提醒", pinyin: "tíxǐng", meaning: "nhắc nhở" },
    { word: "填空", pinyin: "tiánkòng", meaning: "điền vào chỗ trống" },
    { word: "条件", pinyin: "tiáojiàn", meaning: "điều kiện" },
    { word: "停止", pinyin: "tíngzhǐ", meaning: "dừng lại, đình chỉ" },
    { word: "挺", pinyin: "tǐng", meaning: "rất, khá" },
    { word: "通过", pinyin: "tōngguò", meaning: "thông qua, vượt qua" },
    { word: "通知", pinyin: "tōngzhī", meaning: "thông báo" },
    { word: "同情", pinyin: "tóngqíng", meaning: "đồng cảm, thương hại" },
    { word: "推", pinyin: "tuī", meaning: "đẩy" },
    { word: "推迟", pinyin: "tuīchí", meaning: "hoãn lại, lùi lịch" },
    { word: "脱", pinyin: "tuō", meaning: "cởi (áo, giày)" },
    { word: "吐", pinyin: "tù", meaning: "nôn, mửa" },
    { word: "袜子", pinyin: "wàzi", meaning: "đôi tất, vớ" },
    { word: "完全", pinyin: "wánquán", meaning: "hoàn toàn" },
    { word: "网球", pinyin: "wǎngqiú", meaning: "quần vợt, tennis" },
    { word: "网站", pinyin: "wǎngzhàn", meaning: "trang web" },
    { word: "往", pinyin: "wǎng", meaning: "hướng về" },
    { word: "往往", pinyin: "wǎngwǎng", meaning: "thường hay (theo thói quen)" },
    { word: "效果", pinyin: "xiàoguǒ", meaning: "hiệu quả" },
    { word: "危险", pinyin: "wēixiǎn", meaning: "nguy hiểm" },
    { word: "卫生间", pinyin: "wèishēngjiān", meaning: "phòng vệ sinh" },
    { word: "味道", pinyin: "wèidào", meaning: "mùi vị" },
    { word: "温度", pinyin: "wēndù", meaning: "nhiệt độ" },
    { word: "文章", pinyin: "wénzhāng", meaning: "bài văn, bài báo" },
    { word: "污染", pinyin: "wūrǎn", meaning: "ô nhiễm" },
    { word: "无", pinyin: "wú", meaning: "không có, vô" },
    { word: "无聊", pinyin: "wúliáo", meaning: "chán ngắt, nhảm nhí" },
    { word: "无论", pinyin: "wúlùn", meaning: "bất luận, dù cho" },
    { word: "误会", pinyin: "wùhuì", meaning: "hiểu nhầm" },
    { word: "西红柿", pinyin: "xīhóngshì", meaning: "quả cà chua" },
    { word: "吸引", pinyin: "xīyǐn", meaning: "thu hút, hấp dẫn" },
    { word: "咸", pinyin: "xián", meaning: "mặn" },
    { word: "现金", pinyin: "xiànjīn", meaning: "tiền mặt" },
    { word: "羡慕", pinyin: "xiànmù", meaning: "ghen tị, ngưỡng mộ" },
    { word: "相反", pinyin: "xiāngfǎn", meaning: "trái ngược" },
    { word: "相同", pinyin: "xiāngtóng", meaning: "giống nhau" },
    { word: "香", pinyin: "xiāng", meaning: "thơm" },
    { word: "详细", pinyin: "xiángxì", meaning: "chi tiết, kỹ lưỡng" },
    { word: "响", pinyin: "xiǎng", meaning: "keo, vang lên" },
    { word: "橡皮", pinyin: "xiàngpí", meaning: "cục tẩy" },
    { word: "消息", pinyin: "xiāoxi", meaning: "tin tức, thông tin" },
    { word: "小吃", pinyin: "xiǎochī", meaning: "món ăn vặt" },
    { word: "小说", pinyin: "xiǎoshuō", meaning: "tiểu thuyết" },
    { word: "效果", pinyin: "xiàoguǒ", meaning: "kết quả, hiệu quả" },
    { word: "笑话", pinyin: "xiàohua", meaning: "trò cười, chuyện tếu" },
    { word: "心情", pinyin: "xīnqíng", meaning: "tâm trạng" },
    { word: "辛苦", pinyin: "xīnkǔ", meaning: "vất vả, cực khổ" },
    { word: "信封", pinyin: "xìnfēng", meaning: "phong bì thư" },
    { word: "信息", pinyin: "xìnxī", meaning: "thông tin, tin nhắn" },
    { word: "信心", pinyin: "xìnxīn", meaning: "lòng tin, sự tự tin" },
    { word: "兴奋", pinyin: "xīngfèn", meaning: "hào hứng, phấn khích" },
    { word: "行", pinyin: "xíng", meaning: "được, ok" },
    { word: "行动", pinyin: "xíngdòng", meaning: "hành động" },
    { word: "行人", pinyin: "xíngrén", meaning: "người đi bộ" },
    { word: "行为", pinyin: "xíngwéi", meaning: "hành vi" },
    { word: "醒", pinyin: "xǐng", meaning: "tỉnh giấc, tỉnh táo" },
    { word: "幸福", pinyin: "xìngfú", meaning: "hạnh phúc" },
    { word: "性格", pinyin: "xìnggé", meaning: "tính cách" },
    { word: "性别", pinyin: "xìngbié", meaning: "giới tính" },
    { word: "修理", pinyin: "xiūlǐ", meaning: "sửa chữa" },
    { word: "许多", pinyin: "xǔduō", meaning: "rất nhiều" },
    { word: "学期", pinyin: "xuéqī", meaning: "học kỳ" },
    { word: "压力", pinyin: "yālì", meaning: "áp lực" },
    { word: "牙膏", pinyin: "yágāo", meaning: "kem đánh răng" },
    { word: "亚洲", pinyin: "Yàzhōu", meaning: "Châu Á" },
    { word: "呀", pinyin: "ya", meaning: "chà, a (thán từ)" },
    { word: "严格", pinyin: "yángé", meaning: "nghiêm khắc, khắt khe" },
    { word: "严重", pinyin: "yánzhòng", meaning: "nghiêm trọng" },
    { word: "盐", pinyin: "yán", meaning: "muối" },
    { word: "研究", pinyin: "yánjiū", meaning: "nghiên cứu" },
    { word: "演出", pinyin: "yǎnchū", meaning: "biểu diễn" },
    { word: "演员", pinyin: "yǎnyuán", meaning: "diễn viên" },
    { word: "阳光", pinyin: "yángguāng", meaning: "ánh nắng mặt trời" },
    { word: "养", pinyin: "yǎng", meaning: "nuôi dưỡng, chăm sóc" },
    { word: "样子", pinyin: "yàngzi", meaning: "dáng vẻ, kiểu dáng" },
    { word: "邀请", pinyin: "yāoqǐng", meaning: "mời" },
    { word: "钥匙", pinyin: "yàoshi", meaning: "chìa khóa" },
    { word: "也许", pinyin: "yěxǔ", meaning: "có lẽ, có thể" },
    { word: "叶子", pinyin: "yèzi", meaning: "lá cây" },
    { word: "页", pinyin: "yè", meaning: "trang (sách)" },
    { word: "一切", pinyin: "yíqiè", meaning: "tất cả, toàn bộ" },
    { word: "以", pinyin: "yǐ", meaning: "dùng, bằng, lấy" },
    { word: "以为", pinyin: "yǐwéi", meaning: "tưởng rằng (thường sai)" },
    { word: "艺术", pinyin: "yìshù", meaning: "nghệ thuật" },
    { word: "意见", pinyin: "yìjiàn", meaning: "ý kiến" },
    { word: "意义", pinyin: "yìyì", meaning: "ý nghĩa" },
    { word: "因此", pinyin: "yīncǐ", meaning: "do đó, vì vậy" },
    { word: "赢", pinyin: "yíng", meaning: "thắng, chiến thắng" },
    { word: "印象", pinyin: "yìnxiàng", meaning: "ấn tượng" },
    { word: "勇敢", pinyin: "yǒnggǎn", meaning: "dũng cảm" },
    { word: "永远", pinyin: "yǒngyuǎn", meaning: "vĩnh viễn, mãi mãi" },
    { word: "优点", pinyin: "yōudiǎn", meaning: "ưu điểm" },
    { word: "幽默", pinyin: "yōumò", meaning: "hài hước" },
    { word: "由", pinyin: "yóu", meaning: "do, bởi" },
    { word: "由于", pinyin: "yóuyú", meaning: "do, bởi vì" },
    { word: "邮局", pinyin: "yóujú", meaning: "bưu điện" },
    { word: "友好", pinyin: "yǒuhǎo", meaning: "thân thiện, hữu nghị" },
    { word: "友谊", pinyin: "yǒuyì", meaning: "tình bạn, hữu nghị" },
    { word: "有趣", pinyin: "yǒuqù", meaning: "thú vị" },
    { word: "于是", pinyin: "yúshì", meaning: "thế là, cho nên" },
    { word: "愉快", pinyin: "yúkuài", meaning: "vui vẻ, sảng khoái" },
    { word: "与", pinyin: "yǔ", meaning: "và, với" },
    { word: "羽毛球", pinyin: "yǔmáoqiú", meaning: "cầu lông" },
    { word: "语法", pinyin: "yǔfǎ", meaning: "ngữ pháp" },
    { word: "语言", pinyin: "yǔyán", meaning: "ngôn ngữ" },
    { word: "预习", pinyin: "yùxí", meaning: "chuẩn bị bài trước" },
    { word: "圆", pinyin: "yuán", meaning: "tròn" },
    { word: "原谅", pinyin: "yuánliàng", meaning: "tha thứ, thứ lỗi" },
    { word: "原因", pinyin: "yuányīn", meaning: "nguyên nhân" },
    { word: "约会", pinyin: "yuēhuì", meaning: "hẹn hò" },
    { word: "阅读", pinyin: "yuèdú", meaning: "đọc hiểu" },
    { word: "云", pinyin: "yún", meaning: "mây" },
    { word: "允许", pinyin: "yǔnxǔ", meaning: "cho phép" },
    { word: "杂志", pinyin: "zázhì", meaning: "tạp chí" },
    { word: "咱们", pinyin: "zánmen", meaning: "chúng ta (bao gồm người nghe)" },
    { word: "暂时", pinyin: "zànshí", meaning: "tạm thời" },
    { word: "赞成", pinyin: "zànchéng", meaning: "tán thành, ủng hộ" },
    { word: "脏", pinyin: "zāng", meaning: "bẩn, dơ" },
    { word: "责任", pinyin: "zérèn", meaning: "trách nhiệm" },
    { word: "增加", pinyin: "zēngjiā", meaning: "tăng thêm" },
    { word: "占线", pinyin: "zhànxiàn", meaning: "bận máy (điện thoại)" },
    { word: "招聘", pinyin: "zhāopìn", meaning: "tuyển dụng" },
    { word: "照", pinyin: "zhào", meaning: "chiếu, chụp ảnh" },
    { word: "真正", pinyin: "zhēnzhèng", meaning: "chân chính, đích thực" },
    { word: "整理", pinyin: "zhěnglǐ", meaning: "sắp xếp, thu dọn" },
    { word: "正常", pinyin: "zhèngcháng", meaning: "bình thường" },
    { word: "正好", pinyin: "zhènghǎo", meaning: "vừa hay, vừa vặn" },
    { word: "正确", pinyin: "zhèngquè", meaning: "chính xác, đúng" },
    { word: "正式", pinyin: "zhèngshì", meaning: "chính thức" },
    { word: "证明", pinyin: "zhèngmíng", meaning: "chứng minh" },
    { word: "之", pinyin: "zhī", meaning: "của (trợ từ hán văn)" },
    { word: "支持", pinyin: "zhīchí", meaning: "ủng hộ, hỗ trợ" },
    { word: "知识", pinyin: "zhīshi", meaning: "kiến thức, hiểu biết" },
    { word: "直接", pinyin: "zhíjiē", meaning: "trực tiếp" },
    { word: "值得", pinyin: "zhíde", meaning: "xứng đáng" },
    { word: "职业", pinyin: "zhíyè", meaning: "nghề nghiệp" },
    { word: "植物", pinyin: "zhíwù", meaning: "thực vật, cây cỏ" },
    { word: "只要", pinyin: "zhǐyào", meaning: "chỉ cần" },
    { word: "指", pinyin: "zhǐ", meaning: "chỉ trỏ, ngón tay" },
    { word: "至少", pinyin: "zhìshǎo", meaning: "ít nhất" },
    { word: "质量", pinyin: "zhìliàng", meaning: "chất lượng" },
    { word: "重", pinyin: "zhòng", meaning: "nặng" },
    { word: "重点", pinyin: "zhòngdiǎn", meaning: "trọng tâm, điểm chính" },
    { word: "重视", pinyin: "zhòngshì", meaning: "coi trọng, xem trọng" },
    { word: "周围", pinyin: "zhōuwéi", meaning: "xung quanh" },
    { word: "猪", pinyin: "zhū", meaning: "con heo, con lợn" },
    { word: "逐渐", pinyin: "zhújiàn", meaning: "dần dần, từng bước" },
    { word: "主动", pinyin: "zhǔdòng", meaning: "chủ động" },
    { word: "主意", pinyin: "zhǔyi", meaning: "ý kiến, chủ ý" },
    { word: "祝贺", pinyin: "zhùhè", meaning: "chúc mừng" },
    { word: "著名", pinyin: "zhùmíng", meaning: "nổi tiếng, lừng danh" },
    { word: "专门", pinyin: "zhuānmén", meaning: "chuyên môn, đặc biệt" },
    { word: "专业", pinyin: "zhuānyè", meaning: "chuyên ngành" },
    { word: "赚", pinyin: "zhuàn", meaning: "kiếm (tiền), lời" },
    { word: "撞", pinyin: "zhuàng", meaning: "va, đụng, tông" },
    { word: "准确", pinyin: "zhǔnquè", meaning: "chuẩn xác" },
    { word: "准时", pinyin: "zhǔnshí", meaning: "đúng giờ" },
    { word: "仔细", pinyin: "zǐxì", meaning: "kỹ lưỡng, tỉ mỉ" },
    { word: "自然", pinyin: "zìrán", meaning: "tự nhiên, thiên nhiên" },
    { word: "自信", pinyin: "zìxìn", meaning: "tự tin" },
    { word: "总结", pinyin: "zǒngjié", meaning: "tổng kết" },
    { word: "租", pinyin: "zū", meaning: "thuê, mướn" },
    { word: "最好", pinyin: "zuìhǎo", meaning: "tốt nhất, nên" },
    { word: "尊重", pinyin: "zūnzhòng", meaning: "tôn trọng" },
    { word: "左右", pinyin: "zuǒyòu", meaning: "khoảng chừng, trái phải" },
    { word: "作家", pinyin: "zuòjiā", meaning: "nhà văn" },
    { word: "作用", pinyin: "zuòyòng", meaning: "tác dụng, vai trò" },
    { word: "作者", pinyin: "zuòzhě", meaning: "tác giả" },
    { word: "座", pinyin: "zuò", meaning: "tòa, ngọn, chỗ ngồi" },
    { word: "座位", pinyin: "zuòwèi", meaning: "chỗ ngồi" }
];
const hsk5Data = [
  {
    "word": "唉",
    "pinyin": "āi",
    "meaning": "thán từ (ừ, ơ, dạ); thở dài"
  },
  {
    "word": "爱护",
    "pinyin": "ài hù",
    "meaning": "yêu quý, bảo vệ, nâng niu, trân trọng"
  },
  {
    "word": "爱惜",
    "pinyin": "ài xī",
    "meaning": "quý trọng, nâng niu, tiết kiệm (sử dụng)"
  },
  {
    "word": "爱心",
    "pinyin": "ài xīn",
    "meaning": "lòng nhân ái, lòng trắc ẩn; lượng từ: mảnh/tấm [piàn]"
  },
  {
    "word": "安慰",
    "pinyin": "ān wèi",
    "meaning": "an ủi, vỗ về; lượng từ: cái [gè]"
  },
  {
    "word": "安装",
    "pinyin": "ān zhuāng",
    "meaning": "lắp đặt, lắp ráp; sự lắp đặt"
  },
  {
    "word": "岸",
    "pinyin": "àn",
    "meaning": "bờ, bãi biển, bờ biển; lượng từ: cái [gè]"
  },
  {
    "word": "把握",
    "pinyin": "bǎ wò",
    "meaning": "nắm bắt; sự nắm chắc, sự tự tin, chắc chắn (về kết quả)"
  },
  {
    "word": "摆",
    "pinyin": "bǎi",
    "meaning": "sắp xếp, trưng bày, bày biện; đưa qua đưa lại; con lắc"
  },
  {
    "word": "班主任",
    "pinyin": "bān zhǔ rèn",
    "meaning": "giáo viên chủ nhiệm lớp"
  },
  {
    "word": "办理",
    "pinyin": "bàn lǐ",
    "meaning": "giải quyết, xử lý, tiến hành"
  },
  {
    "word": "棒",
    "pinyin": "bàng",
    "meaning": "cái gậy; giỏi, cừ khôi, tuyệt vời, mạnh mẽ"
  },
  {
    "word": "傍晚",
    "pinyin": "bàng wǎn",
    "meaning": "buổi chiều tối, hoàng hôn, lúc chạng vạng"
  },
  {
    "word": "包裹",
    "pinyin": "bāo guǒ",
    "meaning": "bọc lại, gói ghém; bưu kiện, gói đồ; lượng từ: cái [gè]"
  },
  {
    "word": "包含",
    "pinyin": "bāo hán",
    "meaning": "bao hàm, chứa đựng, bao gồm"
  },
  {
    "word": "包子",
    "pinyin": "bāo zi",
    "meaning": "bánh bao; lượng từ: cái [gè]"
  },
  {
    "word": "薄",
    "pinyin": "báo",
    "meaning": "mỏng; hững hờ, lạnh nhạt; yếu; nhạt; cằn cỗi"
  },
  {
    "word": "宝贝",
    "pinyin": "bǎo bèi",
    "meaning": "vật quý, báu vật; cục cưng, bảo bối; vỏ ốc cowry"
  },
  {
    "word": "宝贵",
    "pinyin": "bǎo guì",
    "meaning": "quý giá, có giá trị; trân trọng"
  },
  {
    "word": "保持",
    "pinyin": "bǎo chí",
    "meaning": "giữ gìn, duy trì, bảo quản"
  },
  {
    "word": "保存",
    "pinyin": "bǎo cún",
    "meaning": "bảo tồn, giữ gìn, lưu trữ (tệp tin...)"
  },
  {
    "word": "保留",
    "pinyin": "bǎo liú",
    "meaning": "giữ lại, bảo lưu, bảo quản; sự bảo lưu; giữ ý kiến"
  },
  {
    "word": "保险",
    "pinyin": "bǎo xiǎn",
    "meaning": "bảo hiểm; an toàn, chắc chắn; lượng từ: tờ/phần [fèn]"
  },
  {
    "word": "报告",
    "pinyin": "bào gào",
    "meaning": "báo cáo, thông báo; bài phát biểu, bài thuyết trình"
  },
  {
    "word": "悲观",
    "pinyin": "bēi guān",
    "meaning": "bi quan"
  },
  {
    "word": "被子",
    "pinyin": "bèi zi",
    "meaning": "chăn, mền; lượng từ: cái/chiếc [chuáng]"
  },
  {
    "word": "背",
    "pinyin": "bèi",
    "meaning": "lưng; quay lưng; giấu giếm; học thuộc lòng, nhớ nhập tâm; xui xẻo; nặng tai"
  },
  {
    "word": "背景",
    "pinyin": "bèi jǐng",
    "meaning": "bối cảnh, phông nền, ngữ cảnh; lượng từ: loại [zhǒng]"
  },
  {
    "word": "本科",
    "pinyin": "běn kē",
    "meaning": "hệ đại học, bậc cử nhân"
  },
  {
    "word": "本领",
    "pinyin": "běn lǐng",
    "meaning": "kỹ năng, bản lĩnh, năng lực; lượng từ: mục, cái [gè]"
  },
  {
    "word": "本质",
    "pinyin": "běn zhì",
    "meaning": "bản chất, bản tính, phẩm chất nội tại"
  },
  {
    "word": "比例",
    "pinyin": "bǐ lì",
    "meaning": "tỷ lệ, quy mô"
  },
  {
    "word": "比如",
    "pinyin": "bǐ rú",
    "meaning": "ví dụ, chẳng hạn như"
  },
  {
    "word": "彼此",
    "pinyin": "bǐ cǐ",
    "meaning": "lẫn nhau, đôi bên"
  },
  {
    "word": "必然",
    "pinyin": "bì rán",
    "meaning": "tất yếu, chắc chắn; tính tất yếu"
  },
  {
    "word": "必需",
    "pinyin": "bì xū",
    "meaning": "cần thiết, thiết yếu, bắt buộc phải có"
  },
  {
    "word": "必要",
    "pinyin": "bì yào",
    "meaning": "cần thiết, thiết yếu, không thể thiếu"
  },
  {
    "word": "毕竟",
    "pinyin": "bì jìng",
    "meaning": "rốt cuộc, xét cho cùng, suy cho cùng"
  },
  {
    "word": "避免",
    "pinyin": "bì miǎn",
    "meaning": "tránh, né tránh, phòng ngừa"
  },
  {
    "word": "鞭炮",
    "pinyin": "biān pào",
    "meaning": "pháo, tràng pháo; lượng từ: chiếc/quả [méi]"
  },
  {
    "word": "编辑",
    "pinyin": "biān jí",
    "meaning": "chỉnh sửa, biên tập; biên tập viên"
  },
  {
    "word": "便",
    "pinyin": "biàn",
    "meaning": "bình thường, đơn giản; thuận tiện; thì, liền; đại tiện, tiểu tiện"
  },
  {
    "word": "辩论",
    "pinyin": "biàn lùn",
    "meaning": "tranh luận, tranh cãi; lượng từ: trận, lần [cì]"
  },
  {
    "word": "标点",
    "pinyin": "biāo diǎn",
    "meaning": "dấu câu; đánh dấu câu; lượng từ: cái [gè]"
  },
  {
    "word": "标志",
    "pinyin": "biāo zhì",
    "meaning": "biểu tượng, ký hiệu, dấu hiệu; tượng trưng cho, đánh dấu"
  },
  {
    "word": "表面",
    "pinyin": "biǎo miàn",
    "meaning": "bề mặt, bề ngoài, diện mạo"
  },
  {
    "word": "表明",
    "pinyin": "biǎo míng",
    "meaning": "biểu thị, làm rõ, chứng tỏ, chỉ ra"
  },
  {
    "word": "表情",
    "pinyin": "biǎo qíng",
    "meaning": "biểu cảm khuôn mặt, nét mặt; biểu lộ cảm xúc"
  },
  {
    "word": "表现",
    "pinyin": "biǎo xiàn",
    "meaning": "thể hiện, biểu hiện, khoe khoang; hành vi, sự thể hiện"
  },
  {
    "word": "丙",
    "pinyin": "bǐng",
    "meaning": "thứ ba trong thiên can; chữ C hoặc số III"
  },
  {
    "word": "病毒",
    "pinyin": "bìng dú",
    "meaning": "vi-rút"
  },
  {
    "word": "玻璃",
    "pinyin": "bō li",
    "meaning": "kính, thủy tinh; ni-lông, nhựa; lượng từ: tấm, miếng [kuài]"
  },
  {
    "word": "博物馆",
    "pinyin": "bó wù guǎn",
    "meaning": "viện bảo tàng"
  },
  {
    "word": "脖子",
    "pinyin": "bó zi",
    "meaning": "cổ; lượng từ: cái [gè]"
  },
  {
    "word": "不必",
    "pinyin": "bù bì",
    "meaning": "không cần, không thiết phải"
  },
  {
    "word": "不断",
    "pinyin": "bù duàn",
    "meaning": "không ngừng, liên tục, liên miên"
  },
  {
    "word": "不见得",
    "pinyin": "bù jiàn de",
    "meaning": "chưa chắc, chưa hẳn đã"
  },
  {
    "word": "不耐烦",
    "pinyin": "bù nài fán",
    "meaning": "mất kiên nhẫn, sốt ruột"
  },
  {
    "word": "不要紧",
    "pinyin": "bù yào jǐn",
    "meaning": "không quan trọng, không sao, không nghiêm trọng"
  },
  {
    "word": "补充",
    "pinyin": "bǔ chōng",
    "meaning": "bổ sung, thêm vào; phần bổ sung; lượng từ: cái [gè]"
  },
  {
    "word": "不安",
    "pinyin": "bù ān",
    "meaning": "bất an, không yên tâm, lo lắng, bồn chồn"
  },
  {
    "word": "不得了",
    "pinyin": "bù dé liǎo",
    "meaning": "vô cùng, cực kỳ; kinh khủng, nguy hiểm"
  },
  {
    "word": "不好意思",
    "pinyin": "bù hǎo yì si",
    "meaning": "ngượng ngùng, xấu hổ; xin lỗi (vì làm phiền)"
  },
  {
    "word": "不免",
    "pinyin": "bù miǎn",
    "meaning": "khỏi phải, không tránh khỏi"
  },
  {
    "word": "不然",
    "pinyin": "bù rán",
    "meaning": "nếu không, không phải vậy, kẻo"
  },
  {
    "word": "不如",
    "pinyin": "bù rú",
    "meaning": "không bằng, kém hơn; chi bằng"
  },
  {
    "word": "不足",
    "pinyin": "bù zú",
    "meaning": "không đủ, thiếu sót, không đáng; không thể"
  },
  {
    "word": "布",
    "pinyin": "bù",
    "meaning": "vải; công bố, tuyên bố, truyền bá"
  },
  {
    "word": "步骤",
    "pinyin": "bù zhòu",
    "meaning": "bước, trình tự, thủ tục"
  },
  {
    "word": "部门",
    "pinyin": "bù mén",
    "meaning": "bộ phận, ngành, ban, khoa; lượng từ: cái [gè]"
  },
  {
    "word": "财产",
    "pinyin": "cái chǎn",
    "meaning": "tài sản; lượng từ: khoản [bǐ]"
  },
  {
    "word": "踩",
    "pinyin": "cǎi",
    "meaning": "dẫm, đạp, bước lên, đạp bàn đạp"
  },
  {
    "word": "采访",
    "pinyin": "cǎi fǎng",
    "meaning": "phỏng vấn, thu thập tin tức, tác nghiệp"
  },
  {
    "word": "采取",
    "pinyin": "cǎi qǔ",
    "meaning": "áp dụng, tiến hành (biện pháp, chính sách)"
  },
  {
    "word": "彩虹",
    "pinyin": "cǎi hóng",
    "meaning": "cầu vòng"
  },
  {
    "word": "参考",
    "pinyin": "cān kǎo",
    "meaning": "tham khảo, tham chiếu"
  },
  {
    "word": "参与",
    "pinyin": "cān yù",
    "meaning": "tham gia, góp mặt vào"
  },
  {
    "word": "餐厅",
    "pinyin": "cān tīng",
    "meaning": "phòng ăn, nhà hàng; lượng từ: gian, nhà [jiā]"
  },
  {
    "word": "残疾",
    "pinyin": "cán jí",
    "meaning": "tàn tật, khuyết tật"
  },
  {
    "word": "惭愧",
    "pinyin": "cán kuì",
    "meaning": "hổ thẹn, xấu hổ, áy náy"
  },
  {
    "word": "操场",
    "pinyin": "cāo chǎng",
    "meaning": "sân vận động, sân thể thao; lượng từ: cái [gè]"
  },
  {
    "word": "操心",
    "pinyin": "cāo xīn",
    "meaning": "lo lắng, bận tâm, nhọc lòng"
  },
  {
    "word": "册",
    "pinyin": "cè",
    "meaning": "quyển, tập; lượng từ chỉ sách vở"
  },
  {
    "word": "测验",
    "pinyin": "cè yàn",
    "meaning": "kiểm tra, bài trắc nghiệm; lượng từ: lần, cái [gè]"
  },
  {
    "word": "厕所",
    "pinyin": "cè suǒ",
    "meaning": "nhà vệ sinh; lượng từ: gian, chỗ [chù]"
  },
  {
    "word": "曾经",
    "pinyin": "céng jīng",
    "meaning": "từng, đã từng"
  },
  {
    "word": "插",
    "pinyin": "chā",
    "meaning": "cắm, chêm, xen vào, nhét vào; tham gia vào"
  },
  {
    "word": "差别",
    "pinyin": "chā bié",
    "meaning": "sự khác biệt, khoảng cách"
  },
  {
    "word": "叉子",
    "pinyin": "chā zi",
    "meaning": "cái nĩa, cái dĩa; lượng từ: chiếc [bǎ]"
  },
  {
    "word": "拆",
    "pinyin": "chāi",
    "meaning": "tháo dỡ, xé mở, bóc"
  },
  {
    "word": "产品",
    "pinyin": "chǎn pǐn",
    "meaning": "sản phẩm, hàng hóa; lượng từ: cái [gè]"
  },
  {
    "word": "产生",
    "pinyin": "chǎn shēng",
    "meaning": "sinh ra, phát sinh, tạo ra, xuất hiện"
  },
  {
    "word": "长途",
    "pinyin": "cháng tú",
    "meaning": "đường dài, cự ly dài"
  },
  {
    "word": "常识",
    "pinyin": "cháng shí",
    "meaning": "thường thức, kiến thức thông thường; lượng từ: môn [mén]"
  },
  {
    "word": "抄",
    "pinyin": "chāo",
    "meaning": "sao chép, chép lại; đạo văn; tịch thu; đi đường tắt"
  },
  {
    "word": "朝",
    "pinyin": "cháo",
    "meaning": "triều đại, triều đình; hướng về, quay về"
  },
  {
    "word": "朝代",
    "pinyin": "cháo dài",
    "meaning": "triều đại"
  },
  {
    "word": "炒",
    "pinyin": "chǎo",
    "meaning": "xào, rang; đầu cơ, thổi phồng; sa thải"
  },
  {
    "word": "吵架",
    "pinyin": "chǎo jià",
    "meaning": "cãi nhau, đấu khẩu; lượng từ: trận [dùn]"
  },
  {
    "word": "车库",
    "pinyin": "chē kù",
    "meaning": "gara để xe, nhà để xe"
  },
  {
    "word": "车厢",
    "pinyin": "chē xiāng",
    "meaning": "toa tàu, thùng xe; lượng từ: toa [jié]"
  },
  {
    "word": "彻底",
    "pinyin": "chè dǐ",
    "meaning": "triệt để, hoàn toàn"
  },
  {
    "word": "沉默",
    "pinyin": "chén mò",
    "meaning": "trầm mặc, im lặng, ít nói"
  },
  {
    "word": "趁",
    "pinyin": "chèn",
    "meaning": "nhân cơ hội, tranh thủ"
  },
  {
    "word": "称",
    "pinyin": "chēng",
    "meaning": "cân (trọng lượng); gọi là, xưng hô; khen ngợi"
  },
  {
    "word": "称呼",
    "pinyin": "chēng hu",
    "meaning": "xưng hô; cách gọi"
  },
  {
    "word": "称赞",
    "pinyin": "chēng zàn",
    "meaning": "ca ngợi, khen ngợi, tán thưởng"
  },
  {
    "word": "乘",
    "pinyin": "chéng",
    "meaning": "đi (phương tiện), cưỡi; tận dụng, nhân cơ hội; nhân (toán học)"
  },
  {
    "word": "承担",
    "pinyin": "chéng dān",
    "meaning": "gánh vác, đảm nhận, chịu trách nhiệm"
  },
  {
    "word": "承认",
    "pinyin": "chéng rèn",
    "meaning": "thừa nhận, công nhận"
  },
  {
    "word": "承受",
    "pinyin": "chéng shòu",
    "meaning": "chịu đựng, gánh chịu, kế thừa"
  },
  {
    "word": "成分",
    "pinyin": "chéng fèn",
    "meaning": "thành phần, cấu phần, yếu tố; thành phần xã hội; lượng từ: cái [gè]"
  },
  {
    "word": "成果",
    "pinyin": "chéng guǒ",
    "meaning": "thành quả, kết quả đạt được; lượng từ: cái [gè]"
  },
  {
    "word": "成就",
    "pinyin": "chéng jiù",
    "meaning": "thành tựu, thành tích; đạt được kết quả; lượng từ: cái [gè]"
  },
  {
    "word": "成立",
    "pinyin": "chéng lì",
    "meaning": "thành lập, lập nên; có cơ sở, đứng vững được"
  },
  {
    "word": "成语",
    "pinyin": "chéng yǔ",
    "meaning": " thành ngữ; lượng từ: câu, điều [jù]"
  },
  {
    "word": "成长",
    "pinyin": "chéng zhǎng",
    "meaning": "trưởng thành, lớn lên; sự lớn lên"
  },
  {
    "word": "程度",
    "pinyin": "chéng dù",
    "meaning": "trình độ, mức độ; lượng từ: cái [gè]"
  },
  {
    "word": "程序",
    "pinyin": "chéng xù",
    "meaning": "thủ tục, trình tự, chương trình máy tính"
  },
  {
    "word": "诚恳",
    "pinyin": "chéng kěn",
    "meaning": "chân thành, thành khẩn, thật thà"
  },
  {
    "word": "吃亏",
    "pinyin": "chī kuī",
    "meaning": "chịu thiệt thòi, thua thiệt, chịu kém"
  },
  {
    "word": "持续",
    "pinyin": "chí xù",
    "meaning": "tiếp tục, kéo dài, duy trì; tính bền vững"
  },
  {
    "word": "池子",
    "pinyin": "chí zi",
    "meaning": "ao, hồ nước nhỏ; lượng từ: cái [gè]"
  },
  {
    "word": "尺子",
    "pinyin": "chǐ zi",
    "meaning": "thước kẻ; lượng từ: cây, chiếc [bǎ]"
  },
  {
    "word": "翅膀",
    "pinyin": "chì bǎng",
    "meaning": "cánh (chim, máy bay); lượng từ: cái, đôi [duì]"
  },
  {
    "word": "冲",
    "pinyin": "chōng",
    "meaning": "đường lớn, tuyến giao thông; xông tới, lao thẳng; xung đột"
  },
  {
    "word": "充电器",
    "pinyin": "chōng diàn qì",
    "meaning": "sạc điện, cục sạc"
  },
  {
    "word": "充分",
    "pinyin": "chōng fèn",
    "meaning": "đầy đủ, dồi dào, phong phú, triệt để"
  },
  {
    "word": "充满",
    "pinyin": "chōng mǎn",
    "meaning": "tràn đầy, chan chứa, ngập tràn"
  },
  {
    "word": "重复",
    "pinyin": "chóng fù",
    "meaning": "lặp lại, trùng lặp; lượng từ: cái [gè]"
  },
  {
    "word": "宠物",
    "pinyin": "chǒng wù",
    "meaning": "thú cưng, vật nuôi"
  },
  {
    "word": "抽屉",
    "pinyin": "chōu ti",
    "meaning": "ngăn kéo"
  },
  {
    "word": "抽象",
    "pinyin": "chōu xiàng",
    "meaning": "trừu tượng; sự trừu tượng hóa; lượng từ: loại [zhǒng]"
  },
  {
    "word": "丑",
    "pinyin": "chǒu",
    "meaning": "xấu xí, hổ thẹn, ô nhục"
  },
  {
    "word": "臭",
    "pinyin": "chòu",
    "meaning": "hôi, thối, bốc mùi khó chịu"
  },
  {
    "word": "出版",
    "pinyin": "chū bǎn",
    "meaning": "xuất bản"
  },
  {
    "word": "出口",
    "pinyin": "chū kǒu",
    "meaning": "lối ra; xuất khẩu; thốt ra, nói ra; tàu rời cảng; lượng từ: cái [gè]"
  },
  {
    "word": "出色",
    "pinyin": "chū sè",
    "meaning": "xuất sắc, kiệt xuất, lỗi lạc"
  },
  {
    "word": "出席",
    "pinyin": "chū xí",
    "meaning": "tham dự, có mặt (họp, hội nghị)"
  },
  {
    "word": "初级",
    "pinyin": "chū jí",
    "meaning": "sơ cấp, cơ bản, trình độ đầu"
  },
  {
    "word": "除",
    "pinyin": "chú",
    "meaning": "loại bỏ, trừ khử, xóa bỏ; chia (toán học); ngoài ra, trừ ra"
  },
  {
    "word": "除非",
    "pinyin": "chú fēi",
    "meaning": "trừ phi, chỉ khi, ngoại trừ"
  },
  {
    "word": "除夕",
    "pinyin": "chú xī",
    "meaning": "đêm giao thừa"
  },
  {
    "word": "处理",
    "pinyin": "chǔ lǐ",
    "meaning": "giải quyết, xử lý, đối phó; lượng từ: cái [gè]"
  },
  {
    "word": "传播",
    "pinyin": "chuán bō",
    "meaning": "truyền bá, lan truyền, phát tán"
  },
  {
    "word": "传递",
    "pinyin": "chuán dì",
    "meaning": "truyền đạt, chuyển giao, trao tay"
  },
  {
    "word": "传染",
    "pinyin": "chuán rǎn",
    "meaning": "lây nhiễm, truyền nhiễm; có tính truyền nhiễm"
  },
  {
    "word": "传说",
    "pinyin": "chuán shuō",
    "meaning": "truyền thuyết, lời đồn; nghe nói rằng..."
  },
  {
    "word": "传统",
    "pinyin": "chuán tǒng",
    "meaning": "truyền thống; mang tính truyền thống; lượng từ: cái [gè]"
  },
  {
    "word": "窗帘",
    "pinyin": "chuāng lián",
    "meaning": "rèm cửa, màn cửa sổ"
  },
  {
    "word": "闯",
    "pinyin": "chuǎng",
    "meaning": "xông vào, lao vào, xông pha, xông xáo mạo hiểm"
  },
  {
    "word": "创造",
    "pinyin": "chuàng zào",
    "meaning": "sáng tạo, tạo ra, lập nên (kỷ lục)"
  },
  {
    "word": "吹",
    "pinyin": "chuī",
    "meaning": "thổi, thổi kèn; khoác lác, huênh hoang; đổ vỡ, hỏng việc"
  },
  {
    "word": "磁带",
    "pinyin": "cí dài",
    "meaning": "băng từ, băng cassette; lượng từ: cuộn, hộp [hé]"
  },
  {
    "word": "辞职",
    "pinyin": "cí zhí",
    "meaning": "từ chức, xin nghỉ việc"
  },
  {
    "word": "此外",
    "pinyin": "cǐ wài",
    "meaning": "ngoài ra, bên cạnh đó, hơn nữa"
  },
  {
    "word": "刺激",
    "pinyin": "cì jī",
    "meaning": "kích thích, khiêu khích, làm tổn thương; chất kích thích"
  },
  {
    "word": "次要",
    "pinyin": "cì yào",
    "meaning": "thứ yếu, không quan trọng bằng"
  },
  {
    "word": "匆忙",
    "pinyin": "cōng máng",
    "meaning": "vội vã, hấp tấp, vội vàng"
  },
  {
    "word": "从此",
    "pinyin": "cóng cǐ",
    "meaning": "từ đó về sau, kể từ đây"
  },
  {
    "word": "从而",
    "pinyin": "cóng ér",
    "meaning": "từ đó, do đó, nhờ vậy mà"
  },
  {
    "word": "从前",
    "pinyin": "cóng qián",
    "meaning": "trước kia, ngày xưa, thuở trước"
  },
  {
    "word": "从事",
    "pinyin": "cóng shì",
    "meaning": "làm nghề gì, tham gia, dấn thân vào, hành nghề"
  },
  {
    "word": "醋",
    "pinyin": "cù",
    "meaning": "giấm; sự ghen tuông"
  },
  {
    "word": "促进",
    "pinyin": "cù jìn",
    "meaning": "thúc đẩy, đẩy mạnh, khích lệ"
  },
  {
    "word": "促使",
    "pinyin": "cù shǐ",
    "meaning": "thúc đẩy, thúc giục, khiến cho"
  },
  {
    "word": "催",
    "pinyin": "cuī",
    "meaning": "hối thúc, giục giã, giục giém"
  },
  {
    "word": "存",
    "pinyin": "cún",
    "meaning": "tồn tại; gửi, tích trữ, lưu giữ"
  },
  {
    "word": "存在",
    "pinyin": "cún zài",
    "meaning": "tồn tại; sự tồn tại"
  },
  {
    "word": "错误",
    "pinyin": "cuò wù",
    "meaning": "sai lầm, lỗi lầm; sai, không đúng; lượng từ: cái [gè]"
  },
  {
    "word": "措施",
    "pinyin": "cuò shī",
    "meaning": "biện pháp, động thái; lượng từ: cái [gè]"
  },
  {
    "word": "答应",
    "pinyin": "dā ying",
    "meaning": "đồng ý, hứa hẹn, đáp lời, thưa"
  },
  {
    "word": "达到",
    "pinyin": "dá dào",
    "meaning": "đạt đến, đạt được (mục tiêu, mức độ)"
  },
  {
    "word": "打工",
    "pinyin": "dǎ gōng",
    "meaning": "làm thêm, làm thuê, làm công nhật"
  },
  {
    "word": "打交道",
    "pinyin": "dǎ jiāo dào",
    "meaning": "giao thiệp, tiếp xúc, qua lại với"
  },
  {
    "word": "打喷嚏",
    "pinyin": "dǎ pēn tì",
    "meaning": "hắt xì hơi"
  },
  {
    "word": "打听",
    "pinyin": "dǎ ting",
    "meaning": "thăm dò, ngóng hỏi, dò hỏi tin tức"
  },
  {
    "word": "打招呼",
    "pinyin": "dǎ zhāo hu",
    "meaning": "chào hỏi; báo trước, dặn dò trước"
  },
  {
    "word": "大方",
    "pinyin": "dà fang",
    "meaning": "hào phóng, rộng rãi; nhã nhặn, lịch sự, tự nhiên"
  },
  {
    "word": "大象",
    "pinyin": "dà xiàng",
    "meaning": "con voi; lượng từ: con [zhī]"
  },
  {
    "word": "大型",
    "pinyin": "dà xíng",
    "meaning": "quy mô lớn, cỡ lớn"
  },
  {
    "word": "呆",
    "pinyin": "dāi",
    "meaning": "ngốc nghếch, đờ đẫn, ngẩn ngơ; ở lại, trú lại"
  },
  {
    "word": "贷款",
    "pinyin": "dài kuǎn",
    "meaning": "tiền vay, khoản vay; cho vay tiền; lượng từ: khoản [bǐ]"
  },
  {
    "word": "待遇",
    "pinyin": "dài yù",
    "meaning": "đãi ngộ, lương bổng, chế độ"
  },
  {
    "word": "担任",
    "pinyin": "dān rèn",
    "meaning": "đảm nhiệm, giữ chức vụ, đảm nhận"
  },
  {
    "word": "单纯",
    "pinyin": "dān chún",
    "meaning": "đơn thuần, ngây thơ, đơn giản"
  },
  {
    "word": "单调",
    "pinyin": "dān diào",
    "meaning": " đơn điệu, nhàm chán"
  },
  {
    "word": "单独",
    "pinyin": "dān dú",
    "meaning": "đơn độc, một mình, riêng biệt"
  },
  {
    "word": "单位",
    "pinyin": "dān wèi",
    "meaning": "đơn vị (đo lường, công tác, cơ quan); lượng từ: cái [gè]"
  },
  {
    "word": "单元",
    "pinyin": "dān yuán",
    "meaning": "đơn nguyên, tòa/số nhà, bài học trong sách"
  },
  {
    "word": "耽误",
    "pinyin": "dān wu",
    "meaning": "chậm trễ, lỡ làng, làm lỡ việc"
  },
  {
    "word": "胆小鬼",
    "pinyin": "dǎn xiǎo guǐ",
    "meaning": "kẻ nhát gan, người hèn nhát"
  },
  {
    "word": "淡",
    "pinyin": "dàn",
    "meaning": "nhạt, loãng, nhạt nhẽo; lạt; nhạt màu; hững hờ; ni-tơ"
  },
  {
    "word": "当代",
    "pinyin": "dāng dài",
    "meaning": "đương đại, thời nay"
  },
  {
    "word": "挡",
    "pinyin": "dǎng",
    "meaning": "chặn, cản, che chắn; số/cấp độ (xe)"
  },
  {
    "word": "岛",
    "pinyin": "dǎo",
    "meaning": "hòn đảo; lượng từ: cái, hòn, ngọn [zuò]"
  },
  {
    "word": "倒霉",
    "pinyin": "dǎo méi",
    "meaning": "xui xẻo, gặp vận đen"
  },
  {
    "word": "导演",
    "pinyin": "dǎo yǎn",
    "meaning": "đạo diễn; đạo diễn phim..."
  },
  {
    "word": "导致",
    "pinyin": "dǎo zhì",
    "meaning": "dẫn đến, gây ra (kết quả xấu)"
  },
  {
    "word": "倒",
    "pinyin": "dào",
    "meaning": "đảo ngược, lộn ngược, đổ, trút ra; ngược lại, thực ra thì"
  },
  {
    "word": "到达",
    "pinyin": "dào dá",
    "meaning": "đến nơi, đi đến"
  },
  {
    "word": "道德",
    "pinyin": "dào dé",
    "meaning": "đạo đức, phẩm hạnh; lượng từ: loại [zhǒng]"
  },
  {
    "word": "道理",
    "pinyin": "dào li",
    "meaning": "lẽ phải, lý lẽ, đạo lý, nguyên lý; lượng từ: cái [gè]"
  },
  {
    "word": "登机牌",
    "pinyin": "dēng jī pái",
    "meaning": "thẻ lên máy bay (boarding pass)"
  },
  {
    "word": "登记",
    "pinyin": "dēng jì",
    "meaning": "đăng ký (tên, thông tin)"
  },
  {
    "word": "等待",
    "pinyin": "děng dài",
    "meaning": "chờ đợi, ngóng chờ"
  },
  {
    "word": "等候",
    "pinyin": "děng hòu",
    "meaning": "chờ đợi, ngóng đợi"
  },
  {
    "word": "等于",
    "pinyin": "děng yú",
    "meaning": "bằng với, tương đương với"
  },
  {
    "word": "滴",
    "pinyin": "dī",
    "meaning": "giọt (nước...); nhỏ giọt"
  },
  {
    "word": "的确",
    "pinyin": "dí què",
    "meaning": "thực sự, quả thực, đích thực"
  },
  {
    "word": "敌人",
    "pinyin": "dí rén",
    "meaning": "kẻ thù, quân địch; lượng từ: kẻ [gè]"
  },
  {
    "word": "递",
    "pinyin": "dì",
    "meaning": "đưa, chuyền tay; dần dần, tăng/giảm lũy tiến"
  },
  {
    "word": "地道",
    "pinyin": "dì dao",
    "meaning": "chính cống, chính gốc, chuẩn vị; thành thạo; hầm ngầm"
  },
  {
    "word": "地理",
    "pinyin": "dì lǐ",
    "meaning": "địa lý"
  },
  {
    "word": "地区",
    "pinyin": "dì qū",
    "meaning": "khu vực, vùng, địa phương; lượng từ: cái [gè]"
  },
  {
    "word": "地毯",
    "pinyin": "dì tǎn",
    "meaning": "tấm thảm trải sàn"
  },
  {
    "word": "地位",
    "pinyin": "dì wèi",
    "meaning": "địa vị, vị trí; lượng từ: cái [gè]"
  },
  {
    "word": "地震",
    "pinyin": "dì zhèn",
    "meaning": " động đất"
  },
  {
    "word": "点头",
    "pinyin": "diǎn tóu",
    "meaning": "gật đầu"
  },
  {
    "word": "点心",
    "pinyin": "diǎn xin",
    "meaning": "điểm tâm, đồ ăn nhẹ, bánh ngọt, dimsum"
  },
  {
    "word": "电池",
    "pinyin": "diàn chí",
    "meaning": "pin; lượng từ: cục, viên [zǔ]"
  },
  {
    "word": "电台",
    "pinyin": "diàn tái",
    "meaning": " đài phát thanh, đài truyền hình; lượng từ: nhà, cái [jiā]"
  },
  {
    "word": "钓",
    "pinyin": "diào",
    "meaning": "câu cá"
  },
  {
    "word": "丁",
    "pinyin": "dīng",
    "meaning": "thứ tư trong thiên can; chữ D hoặc số IV; thái hạt lựu"
  },
  {
    "word": "顶",
    "pinyin": "dǐng",
    "meaning": "đỉnh, chóp, mái; vác lên đầu; chống lại; tối đa; thay thế; lượng từ: cái (mũ, nón)"
  },
  {
    "word": "冻",
    "pinyin": "dòng",
    "meaning": "đóng băng, đông lại; rét cóng; thạch (món ăn)"
  },
  {
    "word": "洞",
    "pinyin": "dòng",
    "meaning": "hang động, lỗ hổng; số 0 (trong đọc số); lượng từ: cái [gè]"
  },
  {
    "word": "动画片",
    "pinyin": "dòng huà piàn",
    "meaning": "phim hoạt hình"
  },
  {
    "word": "逗",
    "pinyin": "dòu",
    "meaning": "nán lại, dừng lại; trêu chọc, đùa vui"
  },
  {
    "word": "豆腐",
    "pinyin": "dòu fu",
    "meaning": "đậu hũ, tàu hũ"
  },
  {
    "word": "独立",
    "pinyin": "dú lì",
    "meaning": "độc lập; tự lập, đứng độc lập"
  },
  {
    "word": "独特",
    "pinyin": "dú tè",
    "meaning": "độc đáo, riêng biệt, có đặc điểm riêng"
  },
  {
    "word": "度过",
    "pinyin": "dù guò",
    "meaning": "trải qua, sống qua, vượt qua (thời gian)"
  },
  {
    "word": "短信",
    "pinyin": "duǎn xìn",
    "meaning": "tin nhắn điện thoại, SMS"
  },
  {
    "word": "堆",
    "pinyin": "duī",
    "meaning": "chất đống, vun đống; đống, khối, lượng lớn"
  },
  {
    "word": "对比",
    "pinyin": "duì bǐ",
    "meaning": "đối lập, so sánh, đối chiếu; tỷ lệ; lượng từ: cái [gè]"
  },
  {
    "word": "对待",
    "pinyin": "duì dài",
    "meaning": "đối đãi, đối xử; cách đối xử"
  },
  {
    "word": "对方",
    "pinyin": "duì fāng",
    "meaning": "đối phương, bên kia, người đối diện"
  },
  {
    "word": "对手",
    "pinyin": "duì shǒu",
    "meaning": "đối thủ, địch thủ, đối tượng tương xứng"
  },
  {
    "word": "对象",
    "pinyin": "duì xiàng",
    "meaning": "đối tượng, mục tiêu; người yêu, bạn trai/bạn gái; lượng từ: cái [gè]"
  },
  {
    "word": "对于",
    "pinyin": "duì yú",
    "meaning": "đối với, về phần, về mặt"
  },
  {
    "word": "吨",
    "pinyin": "dūn",
    "meaning": "tấn (đơn vị khối lượng)"
  },
  {
    "word": "蹲",
    "pinyin": "dūn",
    "meaning": "ngồi xổm, khom lưng"
  },
  {
    "word": "多亏",
    "pinyin": "duō kuī",
    "meaning": "nhờ có, may mà, ơn nhờ"
  },
  {
    "word": "多余",
    "pinyin": "duō yú",
    "meaning": "thừa thãi, dư thừa, không cần thiết"
  },
  {
    "word": "躲藏",
    "pinyin": "duǒ cáng",
    "meaning": "trốn tránh, ẩn nấp, ẩn trốn"
  },
  {
    "word": "恶劣",
    "pinyin": "è liè",
    "meaning": "tồi tệ, xấu xa, ác liệt, khắc nghiệt"
  },
  {
    "word": "发表",
    "pinyin": "fā biǎo",
    "meaning": "phát biểu, công bố, xuất bản (bài viết...)"
  },
  {
    "word": "发愁",
    "pinyin": "fā chóu",
    "meaning": "lo lắng, sầu muộn, buồn rầu"
  },
  {
    "word": "发达",
    "pinyin": "fā dá",
    "meaning": "phát triển, phồn thịnh, tiên tiến (quốc gia...)"
  },
  {
    "word": "发抖",
    "pinyin": "fā dǒu",
    "meaning": "run rẩy, cập khiên"
  },
  {
    "word": "发挥",
    "pinyin": "fā huī",
    "meaning": "phát huy, phát triển, phát biểu đầy đủ"
  },
  {
    "word": "发明",
    "pinyin": "fā míng",
    "meaning": " phát minh; sáng chế; lượng từ: cái [gè]"
  },
  {
    "word": "发票",
    "pinyin": "fā piào",
    "meaning": "hóa đơn đỏ, biên lai mua hàng"
  },
  {
    "word": "发言",
    "pinyin": "fā yán",
    "meaning": "phát biểu, phát ngôn; bài phát biểu; lượng từ: cái [gè]"
  },
  {
    "word": "罚款",
    "pinyin": "fá kuǎn",
    "meaning": "phạt tiền; tiền phạt"
  },
  {
    "word": "法院",
    "pinyin": "fǎ yuàn",
    "meaning": "tòa án"
  },
  {
    "word": "翻",
    "pinyin": "fān",
    "meaning": "lật, giở, lật úp; lục lọi; dịch thuật; nhân lên (gấp đôi); trèo qua"
  },
  {
    "word": "繁荣",
    "pinyin": "fán róng",
    "meaning": "phồn vinh, thịnh vượng, phát đạt"
  },
  {
    "word": "凡是",
    "pinyin": "fán shì",
    "meaning": "hễ là, tất cả, bất cứ"
  },
  {
    "word": "反而",
    "pinyin": "fǎn ér",
    "meaning": "trái lại, ngược lại, thế mà"
  },
  {
    "word": "反复",
    "pinyin": "fǎn fù",
    "meaning": "lặp đi lặp lại, nhiều lần,反复"
  },
  {
    "word": "反应",
    "pinyin": "fǎn yìng",
    "meaning": "phản ứng, đáp ứng; sự phản hồi; phản ứng hóa học; lượng từ: cái [gè]"
  },
  {
    "word": "反正",
    "pinyin": "fǎn zhèng",
    "meaning": "dù sao đi nữa, dù thế nào thì cũng; trở về hàng ngũ địch"
  },
  {
    "word": "方",
    "pinyin": "fāng",
    "meaning": "hình vuông; lũy thừa; ngay thẳng; phương hướng, phía; bên; phương pháp, thuốc thang; vừa mới"
  },
  {
    "word": "方案",
    "pinyin": "fāng àn",
    "meaning": "phương án, kế hoạch, đề án; lượng từ: bộ, cái [tào]"
  },
  {
    "word": "方式",
    "pinyin": "fāng shì",
    "meaning": "phương thức, cách thức, lề lối; lượng từ: cái [gè]"
  },
  {
    "word": "妨碍",
    "pinyin": "fáng ài",
    "meaning": "cản trở, gây trở ngại, làm hại"
  },
  {
    "word": "房东",
    "pinyin": "fáng dōng",
    "meaning": "chủ nhà (cho thuê nhà)"
  },
  {
    "word": "仿佛",
    "pinyin": "fǎng fú",
    "meaning": "dường như, giống như, tựa hồ"
  },
  {
    "word": "放松",
    "pinyin": "fàng sōng",
    "meaning": "thư giãn, lỏng lẻo, thả lỏng"
  },
  {
    "word": "非",
    "pinyin": "fēi",
    "meaning": "không phải, trái; sai trái, lỗi; tiền tố phi-, bất-; nhất định phải"
  },
  {
    "word": "肥皂",
    "pinyin": "féi zào",
    "meaning": "xà phòng, xà bông; lượng từ: bánh, thanh [tiáo]"
  },
  {
    "word": "肺",
    "pinyin": "fèi",
    "meaning": "phổi; lượng từ: cái [gè]"
  },
  {
    "word": "废话",
    "pinyin": "fèi huà",
    "meaning": "lời nói nhảm, lời thừa thãi; \"Biết rồi khổ lắm nói mãi!\""
  },
  {
    "word": "费用",
    "pinyin": "fèi yòng",
    "meaning": "chi phí, phí tổn, khoản tiền; lượng từ: khoản [bǐ]"
  },
  {
    "word": "分别",
    "pinyin": "fēn bié",
    "meaning": "chia tay, từ biệt; phân biệt; khác nhau; theo các ngả riêng"
  },
  {
    "word": "分布",
    "pinyin": "fēn bù",
    "meaning": "phân bố, rải rác phân bổ"
  },
  {
    "word": "分配",
    "pinyin": "fēn pèi",
    "meaning": "phân phối, phân chia, bố trí, phân vùng (ổ đĩa)"
  },
  {
    "word": "分析",
    "pinyin": "fēn xī",
    "meaning": "phân tích; sự phân tích; lượng từ: cái [gè]"
  },
  {
    "word": "纷纷",
    "pinyin": "fēn fēn",
    "meaning": "lần lượt, ào ạt, tấp nập, bay lả tả"
  },
  {
    "word": "奋斗",
    "pinyin": "fèn dòu",
    "meaning": "phấn đấu, chiến đấu, nỗ lực"
  },
  {
    "word": "愤怒",
    "pinyin": "fèn nù",
    "meaning": "giận dữ, phẫn nộ, căm phẫn"
  },
  {
    "word": "风格",
    "pinyin": "fēng gé",
    "meaning": " phong cách, lối"
  },
  {
    "word": "风俗",
    "pinyin": "fēng sú",
    "meaning": " phong tục, tập quán; lượng từ: cái [gè]"
  },
  {
    "word": "风险",
    "pinyin": "fēng xiǎn",
    "meaning": "rủi ro, mạo hiểm, nguy cơ"
  },
  {
    "word": "疯狂",
    "pinyin": "fēng kuáng",
    "meaning": "điên cuồng, cuồng nhiệt, cực kỳ phổ biến"
  },
  {
    "word": "讽刺",
    "pinyin": "fěng cì",
    "meaning": "châm biếm, mỉa mai, chọc tức; sự mỉa mai"
  },
  {
    "word": "否定",
    "pinyin": "fǒu dìng",
    "meaning": "phủ định, phủ nhận, từ chối; câu trả lời phủ định"
  },
  {
    "word": "否认",
    "pinyin": "fǒu rèn",
    "meaning": "phủ nhận, chối cãi"
  },
  {
    "word": "扶",
    "pinyin": "fú",
    "meaning": "đỡ, dìu (bằng tay); tì, vịn; giúp đỡ"
  },
  {
    "word": "幅",
    "pinyin": "fú",
    "meaning": "bề rộng vải; lượng từ chỉ tranh ảnh, bức, tấm"
  },
  {
    "word": "服从",
    "pinyin": "fú cóng",
    "meaning": "phục tùng, tuân theo, nghe theo"
  },
  {
    "word": "服装",
    "pinyin": "fú zhuāng",
    "meaning": "trang phục, quần áo; lượng từ: bộ [shēn]"
  },
  {
    "word": "辅导",
    "pinyin": "fǔ dǎo",
    "meaning": "hướng dẫn, kèm cặp, phụ đạo (học tập)"
  },
  {
    "word": "复制",
    "pinyin": "fù zhì",
    "meaning": "sao chép, nhân bản, copy"
  },
  {
    "word": "付款",
    "pinyin": "fù kuǎn",
    "meaning": "thanh toán, trả tiền"
  },
  {
    "word": "妇女",
    "pinyin": "fù nǚ",
    "meaning": "phụ nữ, đàn bà"
  },
  {
    "word": "改革",
    "pinyin": "gǎi gé",
    "meaning": "cải cách; sự đổi mới; lượng từ: lần, mục [xiàng]"
  },
  {
    "word": "改进",
    "pinyin": "gǎi jìn",
    "meaning": "cải tiến, làm cho tốt hơn; lượng từ: cái [gè]"
  },
  {
    "word": "改善",
    "pinyin": "gǎi shàn",
    "meaning": "cải thiện, làm cho khá hơn; lượng từ: cái [gè]"
  },
  {
    "word": "改正",
    "pinyin": "gǎi zhèng",
    "meaning": "sửa chữa, sửa đổi, uốn nắn; lượng từ: cái [gè]"
  },
  {
    "word": "盖",
    "pinyin": "gài",
    "meaning": "nắp, vung; đậy, che phủ; xây dựng (nhà cửa)"
  },
  {
    "word": "概括",
    "pinyin": "gài kuò",
    "meaning": "khái quát, tóm tắt, tổng kết; lượng từ: cái [gè]"
  },
  {
    "word": "概念",
    "pinyin": "gài niàn",
    "meaning": "khái niệm, ý niệm; lượng từ: cái [gè]"
  },
  {
    "word": "干脆",
    "pinyin": "gān cuì",
    "meaning": "dứt khoát, thẳng thắn; chi bằng, thà rằng"
  },
  {
    "word": "感激",
    "pinyin": "gǎn jī",
    "meaning": "cảm kích, biết ơn"
  },
  {
    "word": "感受",
    "pinyin": "gǎn shòu",
    "meaning": "cảm nhận, trải nghiệm; cảm xúc, ấn tượng"
  },
  {
    "word": "感想",
    "pinyin": "gǎn xiǎng",
    "meaning": "cảm tưởng, suy nghĩ, cảm nhận; lượng từ: cái [gè]"
  },
  {
    "word": "赶紧",
    "pinyin": "gǎn jǐn",
    "meaning": "nhanh chóng, mau chóng, khẩn trương"
  },
  {
    "word": "赶快",
    "pinyin": "gǎn kuài",
    "meaning": "nhanh lên, mau lên, ngay lập tức"
  },
  {
    "word": "干活儿",
    "pinyin": "gàn huó r",
    "meaning": "làm việc, lao động chân tay"
  },
  {
    "word": "钢铁",
    "pinyin": "gāng tiě",
    "meaning": "sắt thép"
  },
  {
    "word": "高档",
    "pinyin": "gāo dàng",
    "meaning": "cao cấp, hàng cao cấp, chất lượng cao"
  },
  {
    "word": "高速",
    "pinyin": "gāo sù",
    "meaning": "tốc độ cao"
  },
  {
    "word": "搞",
    "pinyin": "gǎo",
    "meaning": "làm, tiến hành, làm việc; gây ra; cấu kết"
  },
  {
    "word": "告别",
    "pinyin": "gào bié",
    "meaning": "từ biệt, chia tay, chào tạm biệt"
  },
  {
    "word": "胳膊",
    "pinyin": "gē bo",
    "meaning": "cánh tay; lượng từ: chiếc, đôi [shuāng]"
  },
  {
    "word": "鸽子",
    "pinyin": "gē zi",
    "meaning": "chim bồ câu; lượng từ: con [zhī]"
  },
  {
    "word": "隔壁",
    "pinyin": "gé bì",
    "meaning": "sát vách, nhà bên cạnh; hàng xóm"
  },
  {
    "word": "格外",
    "pinyin": "gé wài",
    "meaning": "hơn hẳn, đặc biệt, vô cùng"
  },
  {
    "word": "革命",
    "pinyin": "gé mìng",
    "meaning": "cách mạng; mang tính cách mạng; lượng từ: lần [cì]"
  },
  {
    "word": "个别",
    "pinyin": "gè bié",
    "meaning": "cá biệt, cá nhân, riêng lẻ, một vài"
  },
  {
    "word": "个人",
    "pinyin": "gè rén",
    "meaning": "cá nhân, bản thân, riêng tư"
  },
  {
    "word": "个性",
    "pinyin": "gè xìng",
    "meaning": "cá tính, tính cách riêng"
  },
  {
    "word": "各自",
    "pinyin": "gè zì",
    "meaning": "mỗi người, mỗi bên, tự mình"
  },
  {
    "word": "根",
    "pinyin": "gēn",
    "meaning": "rễ, gốc; nền tảng; lượng từ cho vật dài mảnh (thuốc lá, dây đàn...); gốc hóa học"
  },
  {
    "word": "根本",
    "pinyin": "gēn běn",
    "meaning": "cơ bản, gốc rễ; hoàn toàn (không); vốn dĩ; lượng từ: cái [gè]"
  },
  {
    "word": "更加",
    "pinyin": "gèng jiā",
    "meaning": "càng, càng thêm"
  },
  {
    "word": "公布",
    "pinyin": "gōng bù",
    "meaning": "công bố, thông báo công khai"
  },
  {
    "word": "公开",
    "pinyin": "gōng kāi",
    "meaning": "công khai; làm cho công khai"
  },
  {
    "word": "公平",
    "pinyin": "gōng píng",
    "meaning": "công bằng, vô tư, không thiên vị"
  },
  {
    "word": "公寓",
    "pinyin": "gōng yù",
    "meaning": "căn hộ chung cư, khu nhà ở tập thể; lượng từ: căn [tào]"
  },
  {
    "word": "公元",
    "pinyin": "gōng yuán",
    "meaning": "Công nguyên (TCN / Sau CN)"
  },
  {
    "word": "公主",
    "pinyin": "gōng zhǔ",
    "meaning": "công chúa"
  },
  {
    "word": "工厂",
    "pinyin": "gōng chǎng",
    "meaning": "nhà máy, xí nghiệp; lượng từ: nhà, tòa [zuò]"
  },
  {
    "word": "工程师",
    "pinyin": "gōng chéng shī",
    "meaning": "kỹ sư; lượng từ: người [míng]"
  },
  {
    "word": "工人",
    "pinyin": "gōng rén",
    "meaning": "công nhân; lượng từ: người [míng]"
  },
  {
    "word": "工业",
    "pinyin": "gōng yè",
    "meaning": "công nghiệp"
  },
  {
    "word": "功夫",
    "pinyin": "gōng fu",
    "meaning": "công phu, võ thuật; thời gian, tâm sức"
  },
  {
    "word": "功能",
    "pinyin": "gōng néng",
    "meaning": "chức năng, tính năng"
  },
  {
    "word": "贡献",
    "pinyin": "gòng xiàn",
    "meaning": "cống hiến, đóng góp; sự cống hiến; lượng từ: cái [gè]"
  },
  {
    "word": "沟通",
    "pinyin": "gōu tōng",
    "meaning": "giao lưu, kết nối, giao tiếp"
  },
  {
    "word": "构成",
    "pinyin": "gòu chéng",
    "meaning": "cấu thành, tạo thành, thiết lập"
  },
  {
    "word": "姑姑",
    "pinyin": "gū gu",
    "meaning": "cô (em gái của bố); lượng từ: người [gè]"
  },
  {
    "word": "姑娘",
    "pinyin": "gū niang",
    "meaning": "cô gái, thiếu nữ, con gái; lượng từ: người [gè]"
  },
  {
    "word": "古代",
    "pinyin": "gǔ dài",
    "meaning": "cổ đại, thời xưa"
  },
  {
    "word": "古典",
    "pinyin": "gǔ diǎn",
    "meaning": "cổ điển"
  },
  {
    "word": "古老",
    "pinyin": "gǔ lǎo",
    "meaning": "cổ xưa, lâu đời, từ ngàn xưa"
  },
  {
    "word": "股票",
    "pinyin": "gǔ piào",
    "meaning": "cổ phiếu, chứng khoán"
  },
  {
    "word": "鼓舞",
    "pinyin": "gǔ wǔ",
    "meaning": "cổ vũ, khích lệ, khơi dậy tinh thần; lượng từ: cái [gè]"
  },
  {
    "word": "骨头",
    "pinyin": "gǔ tou",
    "meaning": "xương; cốt cách, khí phách; lượng từ: khúc, khối [kuài]"
  },
  {
    "word": "固定",
    "pinyin": "gù dìng",
    "meaning": "cố định, chắc chắn, thường xuyên"
  },
  {
    "word": "固体",
    "pinyin": "gù tǐ",
    "meaning": "thể rắn, chất rắn"
  },
  {
    "word": "雇佣",
    "pinyin": "gù yōng",
    "meaning": "thuê mướn, tuyển dụng lao động"
  },
  {
    "word": "挂号",
    "pinyin": "guà hào",
    "meaning": "đăng ký khám bệnh; gửi thư bảo đảm"
  },
  {
    "word": "乖",
    "pinyin": "guāi",
    "meaning": "(trẻ con) ngoan ngoãn; thông minh, lanh lợi; quái gở, bất thường"
  },
  {
    "word": "拐弯",
    "pinyin": "guǎi wān",
    "meaning": "rẽ, quẹo, cua; chuyển biến (vấn đề)"
  },
  {
    "word": "怪不得",
    "pinyin": "guài bu de",
    "meaning": "hèn chi, thảo nào, bảo sao"
  },
  {
    "word": "关闭",
    "pinyin": "guān bì",
    "meaning": "đóng cửa, tắt (máy móc, ứng dụng), khép lại"
  },
  {
    "word": "关怀",
    "pinyin": "guān huái",
    "meaning": "quan tâm, chăm sóc, thăm hỏi ân cần"
  },
  {
    "word": "官",
    "pinyin": "guān",
    "meaning": "quan chức, quan lại; cơ quan (cơ thể); lượng từ: người [gè]"
  },
  {
    "word": "观察",
    "pinyin": "guān chá",
    "meaning": "quan sát, theo dõi, xem xét; sự quan sát; lượng từ: cái [gè]"
  },
  {
    "word": "观点",
    "pinyin": "guān diǎn",
    "meaning": "quan điểm, góc nhìn, lập trường; lượng từ: cái [gè]"
  },
  {
    "word": "观念",
    "pinyin": "guān niàn",
    "meaning": "quan niệm, ý niệm, tư tưởng, ý thức"
  },
  {
    "word": "管子",
    "pinyin": "guǎn zi",
    "meaning": "ống, ống nước, ống hút; lượng từ: cái, ống [gēn]"
  },
  {
    "word": "罐头",
    "pinyin": "guàn tou",
    "meaning": "đồ hộp, đồ đựng bằng thiếc; lượng từ: cái [gè]"
  },
  {
    "word": "冠军",
    "pinyin": "guàn jūn",
    "meaning": "quán quân, nhà vô địch; lượng từ: người [gè]"
  },
  {
    "word": "光滑",
    "pinyin": "guāng hua",
    "meaning": "trơn láng, nhẵn nhụi, mượt mà"
  },
  {
    "word": "光临",
    "pinyin": "guāng lín",
    "meaning": "quang lâm, ghé thăm (từ kính trọng khách hàng)"
  },
  {
    "word": "光明",
    "pinyin": "guāng míng",
    "meaning": "ánh sáng, quang minh; tươi sáng (tương lai); ngay thẳng"
  },
  {
    "word": "光盘",
    "pinyin": "guāng pán",
    "meaning": "đĩa quang, đĩa CD/DVD; lượng từ: chiếc, tấm [zhāng]"
  },
  {
    "word": "光荣",
    "pinyin": "guāng róng",
    "meaning": "vẻ vang, vinh quang, vinh dự"
  },
  {
    "word": "广场",
    "pinyin": "guǎng chǎng",
    "meaning": " quảng trường"
  },
  {
    "word": "广大",
    "pinyin": "guǎng dà",
    "meaning": "rộng lớn, bao la, đông đảo (quần chúng)"
  },
  {
    "word": "广泛",
    "pinyin": "guǎng fàn",
    "meaning": "rộng rãi, phổ biến, phạm vi rộng"
  },
  {
    "word": "规矩",
    "pinyin": "guī ju",
    "meaning": "quy củ, phép tắc, lề thói; ngoan ngoãn, ngay thẳng"
  },
  {
    "word": "规律",
    "pinyin": "guī lǜ",
    "meaning": " quy luật, quy tắc, nhịp điệu đều đặn"
  },
  {
    "word": "规模",
    "pinyin": "guī mó",
    "meaning": "quy mô, phạm vi; lượng từ: cái [gè]"
  },
  {
    "word": "规则",
    "pinyin": "guī zé",
    "meaning": "quy tắc, điều lệ, quy định"
  },
  {
    "word": "柜台",
    "pinyin": "guì tái",
    "meaning": "quầy hàng, quầy thu ngân, quầy lễ tân"
  },
  {
    "word": "滚",
    "pinyin": "gǔn",
    "meaning": "sôi sục; lăn; cút đi, biến đi"
  },
  {
    "word": "锅",
    "pinyin": "guō",
    "meaning": "nồi, chảo, xoong; lượng từ: cái, chiếc [zhī]"
  },
  {
    "word": "国籍",
    "pinyin": "guó jí",
    "meaning": "quốc tịch"
  },
  {
    "word": "国庆节",
    "pinyin": "Guó qìng jié",
    "meaning": "Quốc khánh (ngày 1 tháng 10)"
  },
  {
    "word": "果实",
    "pinyin": "guǒ shí",
    "meaning": "quả, trái cây; thành quả"
  },
  {
    "word": "过分",
    "pinyin": "guò fèn",
    "meaning": "quá đáng, quá mức, thái quá"
  },
  {
    "word": "过敏",
    "pinyin": "guò mǐn",
    "meaning": "dị ứng; quá nhạy cảm"
  },
  {
    "word": "过期",
    "pinyin": "guò qī",
    "meaning": "hết hạn, quá hạn"
  },
  {
    "word": "哈",
    "pinyin": "hā",
    "meaning": "tiếng cười ha ha; tiếng ngáp"
  },
  {
    "word": "海关",
    "pinyin": "hǎi guān",
    "meaning": "hải quan (kiểm tra biên giới); lượng từ: cái [gè]"
  },
  {
    "word": "海鲜",
    "pinyin": "hǎi xiān",
    "meaning": " hải sản"
  },
  {
    "word": "喊",
    "pinyin": "hǎn",
    "meaning": "gọi, thét, hò reo, kêu gọi"
  },
  {
    "word": "行业",
    "pinyin": "háng yè",
    "meaning": "ngành nghề, lĩnh vực kinh doanh"
  },
  {
    "word": "豪华",
    "pinyin": "háo huá",
    "meaning": "xa hoa, sang trọng, lộng lẫy"
  },
  {
    "word": "好奇",
    "pinyin": "hào qí",
    "meaning": "tò mò, hiếu kỳ; tính tò mò"
  },
  {
    "word": "和平",
    "pinyin": "hé píng",
    "meaning": "hòa bình"
  },
  {
    "word": "何必",
    "pinyin": "hé bì",
    "meaning": "cần gì phải, việc gì phải"
  },
  {
    "word": "何况",
    "pinyin": "hé kuàng",
    "meaning": "huống chi, huống hồ, huống là"
  },
  {
    "word": "合法",
    "pinyin": "hé fǎ",
    "meaning": "hợp pháp, đúng pháp luật"
  },
  {
    "word": "合理",
    "pinyin": "hé lǐ",
    "meaning": "hợp lý, phải chăng, đúng đắn"
  },
  {
    "word": "合同",
    "pinyin": "hé tong",
    "meaning": "hợp đồng kinh tế; lượng từ: bản, cái [gè]"
  },
  {
    "word": "合影",
    "pinyin": "hé yǐng",
    "meaning": "chụp ảnh chung, bức ảnh chụp chung"
  },
  {
    "word": "合作",
    "pinyin": "hé zuò",
    "meaning": "hợp tác, cộng tác; sự hợp tác; lượng từ: cái [gè]"
  },
  {
    "word": "核心",
    "pinyin": "hé xīn",
    "meaning": " cốt lõi, trung tâm"
  },
  {
    "word": "恨",
    "pinyin": "hèn",
    "meaning": "hận, căm thù, căm ghét; tiếc nuối"
  },
  {
    "word": "横",
    "pinyin": "héng",
    "meaning": "nằm ngang; nét ngang (trong chữ Hán)"
  },
  {
    "word": "后果",
    "pinyin": "hòu guǒ",
    "meaning": "hậu quả, kết quả (thường xấu)"
  },
  {
    "word": "忽视",
    "pinyin": "hū shì",
    "meaning": "phớt lờ, coi nhẹ, bỏ qua, lơ đễnh"
  },
  {
    "word": "呼吸",
    "pinyin": "hū xī",
    "meaning": "hít thở, hô hấp"
  },
  {
    "word": "壶",
    "pinyin": "hú",
    "meaning": "ấm, bình; lượng từ chỉ bình/ấm nước"
  },
  {
    "word": "蝴蝶",
    "pinyin": "hú dié",
    "meaning": "con bướm; lượng từ: con [zhī]"
  },
  {
    "word": "胡说",
    "pinyin": "hú shuō",
    "meaning": "nói nhảm, ăn nói hồ đồ, vu khống"
  },
  {
    "word": "胡同",
    "pinyin": "hú tòng",
    "meaning": "ngõ hẻm (đặc trưng Bắc Kinh)"
  },
  {
    "word": "胡须",
    "pinyin": "hú xū",
    "meaning": "râu; lượng từ: sợi, chùm [liǔ]"
  },
  {
    "word": "糊涂",
    "pinyin": "hú tu",
    "meaning": "mơ hồ, lú lẫn, hồ đồ, u mê"
  },
  {
    "word": "花生",
    "pinyin": "huā shēng",
    "meaning": "đậu phộng, lạc; lượng từ: hạt [lì]"
  },
  {
    "word": "滑冰",
    "pinyin": "huá bīng",
    "meaning": "trượt băng"
  },
  {
    "word": "划船",
    "pinyin": "huá chuán",
    "meaning": "chèo thuyền; môn chèo thuyền"
  },
  {
    "word": "华裔",
    "pinyin": "Huá yì",
    "meaning": "người gốc Hoa (mang quốc tịch nước ngoài)"
  },
  {
    "word": "化学",
    "pinyin": "huà xué",
    "meaning": "hóa học; thuộc về hóa học"
  },
  {
    "word": "话题",
    "pinyin": "huà tí",
    "meaning": "chủ đề trò chuyện, đề tài"
  },
  {
    "word": "怀念",
    "pinyin": "huái niàn",
    "meaning": "hoài niệm, tưởng nhớ, nhớ thương"
  },
  {
    "word": "缓解",
    "pinyin": "huǎn jiě",
    "meaning": "làm dịu, xoa dịu, giảm bớt (căng thẳng, đau đớn)"
  },
  {
    "word": "幻想",
    "pinyin": "huàn xiǎng",
    "meaning": "ảo tưởng, mộng tưởng; sự tưởng tượng viển vông"
  },
  {
    "word": "慌张",
    "pinyin": "huāng zhāng",
    "meaning": "hoảng hốt, luống cuống, hoảng loạn"
  },
  {
    "word": "黄瓜",
    "pinyin": "huáng guā",
    "meaning": "dưa leo, dưa chuột; lượng từ: quả, trái [tiáo]"
  },
  {
    "word": "黄金",
    "pinyin": "huáng jīn",
    "meaning": "vàng, kim loại vàng"
  },
  {
    "word": "皇帝",
    "pinyin": "huáng dì",
    "meaning": "hoàng đế, vua; lượng từ: người [gè]"
  },
  {
    "word": "皇后",
    "pinyin": "huáng hòu",
    "meaning": " hoàng hậu"
  },
  {
    "word": "灰",
    "pinyin": "huī",
    "meaning": "tro bụi, vôi; màu xám; nản lòng, chán nản"
  },
  {
    "word": "灰尘",
    "pinyin": "huī chén",
    "meaning": "bụi bặm, bụi"
  },
  {
    "word": "灰心",
    "pinyin": "huī xīn",
    "meaning": "nản lòng, mất tinh thần, thoái chí"
  },
  {
    "word": "挥",
    "pinyin": "huī",
    "meaning": "vẫy, khua, vung tay; lau (mồ hôi); chỉ huy"
  },
  {
    "word": "恢复",
    "pinyin": "huī fù",
    "meaning": "khôi phục, hồi phục, lấy lại (sức khỏe, trạng thái)"
  },
  {
    "word": "汇率",
    "pinyin": "huì lǜ",
    "meaning": "tỷ giá hối đoái"
  },
  {
    "word": "婚礼",
    "pinyin": "hūn lǐ",
    "meaning": "lễ cưới, đám cưới"
  },
  {
    "word": "婚姻",
    "pinyin": "hūn yīn",
    "meaning": "hôn nhân; lượng từ: lần [cì]"
  },
  {
    "word": "活跃",
    "pinyin": "huó yuè",
    "meaning": "sôi nổi, hoạt bát, năng nổ"
  },
  {
    "word": "火柴",
    "pinyin": "huǒ chái",
    "meaning": "diêm quẹt; lượng từ: que, hộp [hé]"
  },
  {
    "word": "伙伴",
    "pinyin": "huǒ bàn",
    "meaning": "đối tác, bạn đồng hành, đồng chí"
  },
  {
    "word": "基本",
    "pinyin": "jī běn",
    "meaning": "cơ bản, chủ yếu, nền tảng"
  },
  {
    "word": "机器",
    "pinyin": "jī qì",
    "meaning": "máy móc; lượng từ: cái, chiếc [gè]"
  },
  {
    "word": "激烈",
    "pinyin": "jī liè",
    "meaning": "ác liệt, dữ dội, sôi nổi (cạnh tranh, tranh luận)"
  },
  {
    "word": "肌肉",
    "pinyin": "jī ròu",
    "meaning": "cơ bắp, thịt"
  },
  {
    "word": "及格",
    "pinyin": "jí gé",
    "meaning": "đạt yêu cầu, qua môn, đỗ (kiểm tra)"
  },
  {
    "word": "急忙",
    "pinyin": "jí máng",
    "meaning": "vội vã, hấp tấp, vội vàng"
  },
  {
    "word": "集体",
    "pinyin": "jí tǐ",
    "meaning": "tập thể, cộng đồng; mang tính tập thể; lượng từ: cái [gè]"
  },
  {
    "word": "集中",
    "pinyin": "jí zhōng",
    "meaning": "tập trung, quy tụ; tập trung tư tưởng"
  },
  {
    "word": "记录",
    "pinyin": "jì lù",
    "meaning": "ghi chép, ghi lại; hồ sơ, kỷ lục; lượng từ: cái [gè]"
  },
  {
    "word": "记忆",
    "pinyin": "jì yì",
    "meaning": "ký ức, trí nhớ; ghi nhớ, nhớ lại; lượng từ: cái [gè]"
  },
  {
    "word": "计算",
    "pinyin": "jì suàn",
    "meaning": "tính toán, tính cước; lượng từ: cái [gè]"
  },
  {
    "word": "寂寞",
    "pinyin": "jì mò",
    "meaning": "cô đơn, quạnh hiu, vắng vẻ"
  },
  {
    "word": "系领带",
    "pinyin": "jì lǐng dài",
    "meaning": "thắt cà vạt"
  },
  {
    "word": "纪录",
    "pinyin": "jì lù",
    "meaning": "kỷ lục, bản ghi chép"
  },
  {
    "word": "纪律",
    "pinyin": "jì lǜ",
    "meaning": " kỷ luật"
  },
  {
    "word": "纪念",
    "pinyin": "jì niàn",
    "meaning": "kỷ niệm, tưởng niệm; vật kỷ niệm; lượng từ: cái [gè]"
  },
  {
    "word": "家庭",
    "pinyin": "jiā tíng",
    "meaning": "gia đình, hộ gia đình; lượng từ: cái, hộ [gè]"
  },
  {
    "word": "家务",
    "pinyin": "jiā wù",
    "meaning": "việc nhà, công việc gia đình"
  },
  {
    "word": "家乡",
    "pinyin": "jiā xiāng",
    "meaning": "quê hương, quê nhà; lượng từ: cái [gè]"
  },
  {
    "word": "嘉宾",
    "pinyin": "jiā bīn",
    "meaning": "khách quý, khách mời (chương trình)"
  },
  {
    "word": "夹子",
    "pinyin": "jiā zi",
    "meaning": "kẹp, cái kẹp, kẹp tài liệu, ví kẹp"
  },
  {
    "word": "甲",
    "pinyin": "jiǎ",
    "meaning": "thứ nhất trong thiên can; bên A (hợp đồng); mai (rùa); móng (tay, chân); giáp sắt"
  },
  {
    "word": "假如",
    "pinyin": "jiǎ rú",
    "meaning": "giả sử, ví bằng, nếu như"
  },
  {
    "word": "假装",
    "pinyin": "jiǎ zhuāng",
    "meaning": "giả vờ, giả bộ, làm ra vẻ"
  },
  {
    "word": "嫁",
    "pinyin": "jià",
    "meaning": "(con gái) lấy chồng, gả chồng; trút bỏ, đổ lỗi"
  },
  {
    "word": "价值",
    "pinyin": "jià zhí",
    "meaning": "giá trị, ích lợi; lượng từ: cái [gè]"
  },
  {
    "word": "驾驶",
    "pinyin": "jià shǐ",
    "meaning": "lái, điều khiển (xe, máy bay, tàu thủy)"
  },
  {
    "word": "煎",
    "pinyin": "jiān",
    "meaning": "rán, chiên (áp chảo với ít dầu)"
  },
  {
    "word": "肩膀",
    "pinyin": "jiān bǎng",
    "meaning": "vai, bờ vai"
  },
  {
    "word": "坚决",
    "pinyin": "jiān jué",
    "meaning": "kiên quyết, quả quyết, dứt khoát"
  },
  {
    "word": "坚强",
    "pinyin": "jiān qiáng",
    "meaning": "kiên cường, vững vàng, mạnh mẽ"
  },
  {
    "word": "尖锐",
    "pinyin": "jiān ruì",
    "meaning": "sắc bén, gay gắt, nhọn; dữ dội (bệnh tật)"
  },
  {
    "word": "艰巨",
    "pinyin": "jiān jù",
    "meaning": "gian nan, nặng nề, khó khăn to lớn (nhiệm vụ)"
  },
  {
    "word": "艰苦",
    "pinyin": "jiān kǔ",
    "meaning": "gian khổ, khó khăn, cực nhọc"
  },
  {
    "word": "捡",
    "pinyin": "jiǎn",
    "meaning": "nhặt, lượm, thu gom"
  },
  {
    "word": "剪刀",
    "pinyin": "jiǎn dāo",
    "meaning": "cái kéo; lượng từ: cái [bǎ]"
  },
  {
    "word": "简历",
    "pinyin": "jiǎn lì",
    "meaning": "lý lịch sơ yếu, hồ sơ xin việc (CV)"
  },
  {
    "word": "简直",
    "pinyin": "jiǎn zhí",
    "meaning": "quả là, hoàn toàn, cứ như là"
  },
  {
    "word": "健身房",
    "pinyin": "jiàn shēn fáng",
    "meaning": "phòng tập thể hình, phòng gym"
  },
  {
    "word": "建立",
    "pinyin": "jiàn lì",
    "meaning": "thiết lập, thành lập, xây dựng"
  },
  {
    "word": "建设",
    "pinyin": "jiàn shè",
    "meaning": "xây dựng; sự xây dựng; mang tính xây dựng"
  },
  {
    "word": "建议",
    "pinyin": "jiàn yì",
    "meaning": "kiến nghị, đề xuất, gợi ý; lượng từ: điểm, cái [diǎn]"
  },
  {
    "word": "建筑",
    "pinyin": "jiàn zhù",
    "meaning": "kiến trúc, công trình xây dựng; xây dựng; lượng từ: cái [gè]"
  },
  {
    "word": "键盘",
    "pinyin": "jiàn pán",
    "meaning": "bàn phím"
  },
  {
    "word": "讲究",
    "pinyin": "jiǎng jiu",
    "meaning": "coi trọng, chú trọng; cầu kỳ, tinh tế, đẹp mắt"
  },
  {
    "word": "讲座",
    "pinyin": "jiǎng zuò",
    "meaning": "buổi thuyết trình, buổi giảng chuyên đề; lượng từ: cái [gè]"
  },
  {
    "word": "降落",
    "pinyin": "jiàng luò",
    "meaning": "hạ xuống, đáp xuống (máy bay...)"
  },
  {
    "word": "酱油",
    "pinyin": "jiàng yóu",
    "meaning": "nước tương, xì dầu"
  },
  {
    "word": "浇",
    "pinyin": "jiāo",
    "meaning": "tưới, xối, rưới nước; đổ khuôn (kim loại lỏng)"
  },
  {
    "word": "交换",
    "pinyin": "jiāo huàn",
    "meaning": "trao đổi, đổi chác, hoán đổi"
  },
  {
    "word": "交际",
    "pinyin": "jiāo jì",
    "meaning": "giao thiệp, giao tiếp xã hội"
  },
  {
    "word": "郊区",
    "pinyin": "jiāo qū",
    "meaning": "ngoại ô, vùng ngoại thành; lượng từ: cái [gè]"
  },
  {
    "word": "胶水",
    "pinyin": "jiāo shuǐ",
    "meaning": "keo dán, hồ dán"
  },
  {
    "word": "角度",
    "pinyin": "jiǎo dù",
    "meaning": "góc độ, góc nhìn, phương diện"
  },
  {
    "word": "狡猾",
    "pinyin": "jiǎo huá",
    "meaning": "xảo trá, ranh mãnh, lọc lừa"
  },
  {
    "word": "教材",
    "pinyin": "jiào cái",
    "meaning": "giáo trình, tài liệu giảng dạy; lượng từ: quyển [běn]"
  },
  {
    "word": "教练",
    "pinyin": "jiào liàn",
    "meaning": "huấn luyện viên, hướng dẫn viên; lượng từ: người [míng]"
  },
  {
    "word": "教训",
    "pinyin": "jiào xun",
    "meaning": "bài học kinh nghiệm; răn dạy, giáo huấn ai đó"
  },
  {
    "word": "接触",
    "pinyin": "jiē chù",
    "meaning": "tiếp xúc, giao du, tiếp cận"
  },
  {
    "word": "接待",
    "pinyin": "jiē dài",
    "meaning": "tiếp đón, tiếp khách"
  },
  {
    "word": "接近",
    "pinyin": "jiē jìn",
    "meaning": "tiếp cận, đến gần, xấp xỉ"
  },
  {
    "word": "接着",
    "pinyin": "jiē zhe",
    "meaning": "tiếp theo, tiếp tục; bắt lấy; rồi thì"
  },
  {
    "word": "阶段",
    "pinyin": "jiē duàn",
    "meaning": "giai đoạn, chặng, kỳ; lượng từ: cái [gè]"
  },
  {
    "word": "结实",
    "pinyin": "jiē shi",
    "meaning": "bền chắc, vạm vỡ, cường tráng"
  },
  {
    "word": "节",
    "pinyin": "jié",
    "meaning": "lễ hội; đốt (tre), mắt (gỗ); tiết (học); tiết kiệm; đoạn, khúc; lượng từ chỉ tiết học, toa tàu... [gè]"
  },
  {
    "word": "节省",
    "pinyin": "jié shěng",
    "meaning": "tiết kiệm, dùng tằn tiện, cắt giảm"
  },
  {
    "word": "结构",
    "pinyin": "jié gòu",
    "meaning": "kết cấu, cấu trúc, kiến trúc; lượng từ: cái [gè]"
  },
  {
    "word": "结合",
    "pinyin": "jié hé",
    "meaning": "kết hợp, liên kết, tích hợp; sự kết hợp; lượng từ: lần [cì]"
  },
  {
    "word": "结论",
    "pinyin": "jié lùn",
    "meaning": "kết luận, phán quyết; đưa ra kết luận; lượng từ: cái [gè]"
  },
  {
    "word": "结账",
    "pinyin": "jié zhàng",
    "meaning": "thanh toán hóa đơn, thanh toán tiền"
  },
  {
    "word": "解放",
    "pinyin": "jiě fàng",
    "meaning": "giải phóng, giải thoát; lượng từ: lần [cì]"
  },
  {
    "word": "解说员",
    "pinyin": "jiě shuō yuán",
    "meaning": "bình luận viên, phát thanh viên, người thuyết minh"
  },
  {
    "word": "届",
    "pinyin": "jiè",
    "meaning": "khóa, kỳ, nhiệm kỳ (tốt nghiệp, bầu cử, sự kiện)"
  },
  {
    "word": "借口",
    "pinyin": "jiè kǒu",
    "meaning": "cái cớ, lý do thoái thác; mượn cớ, lấy cớ"
  },
  {
    "word": "戒烟",
    "pinyin": "jiè yān",
    "meaning": "cai thuốc lá"
  },
  {
    "word": "戒指",
    "pinyin": "jiè zhi",
    "meaning": "nhẫn (đeo tay)"
  },
  {
    "word": "金属",
    "pinyin": "jīn shǔ",
    "meaning": "kim loại; lượng từ: loại [zhǒng]"
  },
  {
    "word": "紧",
    "pinyin": "jǐn",
    "meaning": "chặt, khít; nghiêm ngặt; gấp gáp, căng thẳng; túng thiếu, kẹt tiền; thắt chặt"
  },
  {
    "word": "紧急",
    "pinyin": "jǐn jí",
    "meaning": "khẩn cấp, cấp bách"
  },
  {
    "word": "尽量",
    "pinyin": "jǐn liàng",
    "meaning": "cố gắng hết sức, hết mức có thể"
  },
  {
    "word": "谨慎",
    "pinyin": "jǐn shèn",
    "meaning": "thận trọng, cẩn trọng, dè dặt"
  },
  {
    "word": "进步",
    "pinyin": "jìn bù",
    "meaning": "tiến bộ, cải thiện; sự tiến bộ; lượng từ: cái [gè]"
  },
  {
    "word": "进口",
    "pinyin": "jìn kǒu",
    "meaning": "nhập khẩu; hàng nhập khẩu"
  },
  {
    "word": "近代",
    "pinyin": "jìn dài",
    "meaning": "cận đại, thời kỳ cận đại"
  },
  {
    "word": "尽力",
    "pinyin": "jìn lì",
    "meaning": "dốc sức, hết sức, tận lực"
  },
  {
    "word": "精力",
    "pinyin": "jīng lì",
    "meaning": "sức lực, tinh lực, năng lượng"
  },
  {
    "word": "经典",
    "pinyin": "jīng diǎn",
    "meaning": "kinh điển, tác phẩm kinh điển; mang tính kinh điển"
  },
  {
    "word": "经营",
    "pinyin": "jīng yíng",
    "meaning": "kinh doanh, quản lý, vận hành"
  },
  {
    "word": "景色",
    "pinyin": "jǐng sè",
    "meaning": "cảnh sắc, phong cảnh, cảnh quan"
  },
  {
    "word": "敬爱",
    "pinyin": "jìng ài",
    "meaning": "kính yêu, kính trọng và yêu mến"
  },
  {
    "word": "酒吧",
    "pinyin": "jiǔ bā",
    "meaning": "quán bar, quán rượu; lượng từ: quán [jiā]"
  },
  {
    "word": "救",
    "pinyin": "jiù",
    "meaning": "cứu, cứu giúp, cứu hộ"
  },
  {
    "word": "救护车",
    "pinyin": "jiù hù chē",
    "meaning": "xe cứu thương, xe cấp cứu; lượng từ: chiếc [liàng]"
  },
  {
    "word": "舅舅",
    "pinyin": "jiù jiu",
    "meaning": "cậu (anh/em trai của mẹ); lượng từ: người [gè]"
  },
  {
    "word": "居然",
    "pinyin": "jū rán",
    "meaning": "vậy mà, lại dám, không ngờ lại"
  },
  {
    "word": "桔子",
    "pinyin": "jú zi",
    "meaning": "quả quýt (cũng viết là 橘子)"
  },
  {
    "word": "举",
    "pinyin": "jǔ",
    "meaning": "nâng lên, giơ lên; nêu ra, cử ra; bầu cử, hành động"
  },
  {
    "word": "具备",
    "pinyin": "jù bèi",
    "meaning": "có đủ, hội đủ, trang bị đầy đủ (điều kiện, năng lực)"
  },
  {
    "word": "具体",
    "pinyin": "jù tǐ",
    "meaning": "cụ thể, rõ ràng, chi tiết"
  },
  {
    "word": "巨大",
    "pinyin": "jù dà",
    "meaning": "to lớn, khổng lồ, vĩ đại, to tát"
  },
  {
    "word": "聚会",
    "pinyin": "jù huì",
    "meaning": "tụ tập, liên hoan, gặp mặt; buổi tiệc tụ tập"
  },
  {
    "word": "俱乐部",
    "pinyin": "jù lè bù",
    "meaning": "câu lạc bộ (CLB); lượng từ: cái [gè]"
  },
  {
    "word": "据说",
    "pinyin": "jù shuō",
    "meaning": "nghe nói rằng, theo lời đồn"
  },
  {
    "word": "捐",
    "pinyin": "juān",
    "meaning": "quyên góp, ủng hộ, hiến tặng; thuế"
  },
  {
    "word": "卷",
    "pinyin": "juǎn",
    "meaning": "cuộn, cuốn lại; cuốn, tập tài liệu"
  },
  {
    "word": "决赛",
    "pinyin": "jué sài",
    "meaning": "trận chung kết, vòng chung kết"
  },
  {
    "word": "决心",
    "pinyin": "jué xīn",
    "meaning": "quyết tâm; kiên quyết; hạ quyết tâm; lượng từ: cái [gè]"
  },
  {
    "word": "绝对",
    "pinyin": "jué duì",
    "meaning": "tuyệt đối, hoàn toàn"
  },
  {
    "word": "角色",
    "pinyin": "jué sè",
    "meaning": "vai diễn, vai trò"
  },
  {
    "word": "军事",
    "pinyin": "jūn shì",
    "meaning": "quân sự, vấn đề quân sự"
  },
  {
    "word": "均匀",
    "pinyin": "jūn yún",
    "meaning": "đều đặn, phân bổ đều, đồng đều"
  },
  {
    "word": "卡车",
    "pinyin": "kǎ chē",
    "meaning": "xe tải; lượng từ: chiếc [liàng]"
  },
  {
    "word": "开发",
    "pinyin": "kāi fā",
    "meaning": "khai thác, mở mang, phát triển (phần mềm, tài nguyên)"
  },
  {
    "word": "开放",
    "pinyin": "kāi fàng",
    "meaning": "nở hoa; cởi mở; mở cửa (công cộng, thị trường)"
  },
  {
    "word": "开幕式",
    "pinyin": "kāi mù shì",
    "meaning": "lễ khai mạc"
  },
  {
    "word": "开心",
    "pinyin": "kāi xīn",
    "meaning": "vui vẻ, hạnh phúc, phấn khởi; trêu chọc ai"
  },
  {
    "word": "砍",
    "pinyin": "kǎn",
    "meaning": "chặt, chém, đốn; ném vật vào ai"
  },
  {
    "word": "看不起",
    "pinyin": "kàn bu qǐ",
    "meaning": "coi thường, khinh thường, xem nhẹ"
  },
  {
    "word": "看来",
    "pinyin": "kàn lai",
    "meaning": "xem ra, có vẻ như, hình như"
  },
  {
    "word": "抗议",
    "pinyin": "kàng yì",
    "meaning": "kháng nghị, phản đối; sự phản đối"
  },
  {
    "word": "烤鸭",
    "pinyin": "kǎo yā",
    "meaning": "vịt quay"
  },
  {
    "word": "颗",
    "pinyin": "kē",
    "meaning": "lượng từ cho vật nhỏ tròn (ngọc trai, hạt ngô, răng, trái tim, vệ tinh...)"
  },
  {
    "word": "可见",
    "pinyin": "kě jiàn",
    "meaning": "có thể thấy rằng, rõ ràng là"
  },
  {
    "word": "可靠",
    "pinyin": "kě kào",
    "meaning": "đáng tin cậy, chắc chắn"
  },
  {
    "word": "可怕",
    "pinyin": "kě pà",
    "meaning": "đáng sợ, kinh khủng, khủng khiếp, vô cùng"
  },
  {
    "word": "刻苦",
    "pinyin": "kè kǔ",
    "meaning": "chăm chỉ, chịu khó, miệt mài"
  },
  {
    "word": "课程",
    "pinyin": "kè chéng",
    "meaning": "chương trình học, khóa học, môn học; lượng từ: môn [mén]"
  },
  {
    "word": "克",
    "pinyin": "kè",
    "meaning": "gam (đơn vị khối lượng); khắc chế, chế ngự, vượt qua"
  },
  {
    "word": "克服",
    "pinyin": "kè fú",
    "meaning": "khắc phục, vượt qua (khó khăn), chế ngự"
  },
  {
    "word": "客观",
    "pinyin": "kè guān",
    "meaning": "khách quan, vô tư"
  },
  {
    "word": "客厅",
    "pinyin": "kè tīng",
    "meaning": "phòng khách; lượng từ: gian [jiān]"
  },
  {
    "word": "空间",
    "pinyin": "kōng jiān",
    "meaning": "không gian; lượng từ: cái [gè]"
  },
  {
    "word": "恐怖",
    "pinyin": "kǒng bù",
    "meaning": "khủng bố, đáng sợ, kinh rợn"
  },
  {
    "word": "空闲",
    "pinyin": "kòng xián",
    "meaning": "rảnh rỗi, thời gian rảnh"
  },
  {
    "word": "控制",
    "pinyin": "kòng zhì",
    "meaning": "kiểm soát, khống chế, kìm hãm"
  },
  {
    "word": "口味",
    "pinyin": "kǒu wèi",
    "meaning": "khẩu vị, sở thích ăn uống, hương vị"
  },
  {
    "word": "夸",
    "pinyin": "kuā",
    "meaning": "khen ngợi, ca tụng; khoác lác, phóng đại"
  },
  {
    "word": "会计",
    "pinyin": "kuài jì",
    "meaning": "kế toán; nghề kế toán"
  },
  {
    "word": "矿泉水",
    "pinyin": "kuàng quán shuǐ",
    "meaning": "nước khoáng; lượng từ: chai, cốc [bēi]"
  },
  {
    "word": "辣椒",
    "pinyin": "là jiāo",
    "meaning": "ớt, quả ớt"
  },
  {
    "word": "蜡烛",
    "pinyin": "là zhú",
    "meaning": "cây nến, ngọn đèn cầy; lượng từ: cây, ngọn [zhī]"
  },
  {
    "word": "来自",
    "pinyin": "lái zì",
    "meaning": "đến từ (địa phương, quốc gia); Từ: (trong email)"
  },
  {
    "word": "拦",
    "pinyin": "lán",
    "meaning": "chặn, ngăn cản, cản đường"
  },
  {
    "word": "烂",
    "pinyin": "làn",
    "meaning": "nhừ, mềm nhũn; thối rữa, mục nát; rách nát; tồi tệ, kém"
  },
  {
    "word": "狼",
    "pinyin": "láng",
    "meaning": "con sói; lượng từ: con [tiáo]"
  },
  {
    "word": "劳动",
    "pinyin": "láo dòng",
    "meaning": " lao động, công sức lao động; lượng từ: lần [cì]"
  },
  {
    "word": "劳驾",
    "pinyin": "láo jià",
    "meaning": "làm phiền, xin lỗi (khi nhờ vả)"
  },
  {
    "word": "老百姓",
    "pinyin": "lǎo bǎi xìng",
    "meaning": "người dân thường, bách tính; lượng từ: người [gè]"
  },
  {
    "word": "老板",
    "pinyin": "lǎo bǎn",
    "meaning": "ông chủ, bà chủ, chủ doanh nghiệp; lượng từ: người [gè]"
  },
  {
    "word": "老实",
    "pinyin": "lǎo shí",
    "meaning": "thật thà, hiền lành, ngay thẳng, ngây thơ"
  },
  {
    "word": "老鼠",
    "pinyin": "lǎo shǔ",
    "meaning": "con chuột; lượng từ: con [zhī]"
  },
  {
    "word": "姥姥",
    "pinyin": "lǎo lao",
    "meaning": "bà ngoại (tiếng gọi thông tục)"
  },
  {
    "word": "乐观",
    "pinyin": "lè guān",
    "meaning": "lạc quan, yêu đời, hy vọng"
  },
  {
    "word": "雷",
    "pinyin": "léi",
    "meaning": "sấm, sấm sét; (mạng) gây sốc, khủng khiếp"
  },
  {
    "word": "类",
    "pinyin": "lèi",
    "meaning": "loại, loài, hạng; giống như, tương tự"
  },
  {
    "word": "梨",
    "pinyin": "lí",
    "meaning": "quả lê; lượng từ: quả [gè]"
  },
  {
    "word": "离婚",
    "pinyin": "lí hūn",
    "meaning": "ly hôn, ly dị"
  },
  {
    "word": "厘米",
    "pinyin": "lí mǐ",
    "meaning": "xăng-ti-mét (cm) (cũng viết là 厘米)"
  },
  {
    "word": "礼拜天",
    "pinyin": "lǐ bài tiān",
    "meaning": "ngày Chủ Nhật"
  },
  {
    "word": "理论",
    "pinyin": "lǐ lùn",
    "meaning": "lý luận, học thuyết; lý lẽ; lượng từ: cái [gè]"
  },
  {
    "word": "理由",
    "pinyin": "lǐ yóu",
    "meaning": "lý do, căn cứ, nguyên cớ; lượng từ: cái [gè]"
  },
  {
    "word": "粒",
    "pinyin": "lì",
    "meaning": "hạt, hột (đậu, đạn, lạc, thuốc viên...)"
  },
  {
    "word": "立方",
    "pinyin": "lì fāng",
    "meaning": "lập phương (thể tích)"
  },
  {
    "word": "立即",
    "pinyin": "lì jí",
    "meaning": "lập tức, ngay tức khắc"
  },
  {
    "word": "立刻",
    "pinyin": "lì kè",
    "meaning": "ngay lập tức, tức thời, ngay bận"
  },
  {
    "word": "力量",
    "pinyin": "lì liang",
    "meaning": "sức mạnh, lực lượng, năng lực"
  },
  {
    "word": "利润",
    "pinyin": "lì rùn",
    "meaning": "lợi nhuận, tiền lời"
  },
  {
    "word": "利息",
    "pinyin": "lì xī",
    "meaning": "lãi suất, tiền lãi ngân hàng; lượng từ: khoản [bǐ]"
  },
  {
    "word": "利益",
    "pinyin": "lì yì",
    "meaning": "lợi ích, quyền lợi; lượng từ: cái [gè]"
  },
  {
    "word": "利用",
    "pinyin": "lì yòng",
    "meaning": "sử dụng, tận dụng, khai thác, lợi dụng"
  },
  {
    "word": "连忙",
    "pinyin": "lián máng",
    "meaning": "vội vàng, lập tức, nhanh chóng"
  },
  {
    "word": "连续剧",
    "pinyin": "lián xù jù",
    "meaning": "phim truyền hình dài tập, phim bộ"
  },
  {
    "word": "联合",
    "pinyin": "lián hé",
    "meaning": "liên hiệp, liên kết, kết hợp; liên minh"
  },
  {
    "word": "恋爱",
    "pinyin": "liàn ài",
    "meaning": "tình yêu đôi lứa; yêu đương; lượng từ: mối, lần [chǎng]"
  },
  {
    "word": "良好",
    "pinyin": "liáng hǎo",
    "meaning": "tốt đẹp, thuận lợi, khả quan"
  },
  {
    "word": "粮食",
    "pinyin": "liáng shi",
    "meaning": "lương thực, ngũ cốc; lượng từ: loại [zhǒng]"
  },
  {
    "word": "了不起",
    "pinyin": "liǎo bu qǐ",
    "meaning": "tuyệt vời, phi thường, đáng nể, kinh khủng"
  },
  {
    "word": "临时",
    "pinyin": "lín shí",
    "meaning": "tạm thời, lâm thời, lúc giáp hạt/lúc xảy ra việc"
  },
  {
    "word": "铃",
    "pinyin": "líng",
    "meaning": "cái chuông; lượng từ: cái, chiếc [zhī]"
  },
  {
    "word": "零件",
    "pinyin": "líng jiàn",
    "meaning": "linh kiện, phụ tùng"
  },
  {
    "word": "零钱",
    "pinyin": "líng qián",
    "meaning": "tiền lẻ, tiền tiêu vặt"
  },
  {
    "word": "零食",
    "pinyin": "líng shí",
    "meaning": "đồ ăn vặt, quà vặt"
  },
  {
    "word": "灵活",
    "pinyin": "líng huó",
    "meaning": "linh hoạt, uyển chuyển, nhanh nhẹn"
  },
  {
    "word": "领导",
    "pinyin": "lǐng dǎo",
    "meaning": "lãnh đạo; người lãnh đạo, sếp; lượng từ: vị, người [gè]"
  },
  {
    "word": "领域",
    "pinyin": "lǐng yù",
    "meaning": "lĩnh vực, địa hạt, phạm vi"
  },
  {
    "word": "流传",
    "pinyin": "liú chuán",
    "meaning": "lưu truyền, truyền tụng, lan truyền"
  },
  {
    "word": "浏览",
    "pinyin": "liú lǎn",
    "meaning": "lướt xem, duyệt qua, đọc lướt"
  },
  {
    "word": "龙",
    "pinyin": "lóng",
    "meaning": "con rồng; thuộc về hoàng gia; lượng từ: con [tiáo]"
  },
  {
    "word": "漏",
    "pinyin": "lòu",
    "meaning": "rò rỉ, dột; bỏ sót, lọt lưới; đồng hồ nước (cổ)"
  },
  {
    "word": "露",
    "pinyin": "lù",
    "meaning": "sương mù, si-rô; lộ ra, bộc lộ, để lộ"
  },
  {
    "word": "陆地",
    "pinyin": "lù dì",
    "meaning": "lục địa, đất liền"
  },
  {
    "word": "陆续",
    "pinyin": "lù xù",
    "meaning": "lần lượt, tiếp tục, nối tiếp nhau"
  },
  {
    "word": "录取",
    "pinyin": "lù qǔ",
    "meaning": "tuyển dụng, trúng tuyển, nhận vào học"
  },
  {
    "word": "录音",
    "pinyin": "lù yīn",
    "meaning": "ghi âm; bản ghi âm; lượng từ: cái [gè]"
  },
  {
    "word": "轮流",
    "pinyin": "lún liú",
    "meaning": "luân phiên, thay phiên nhau"
  },
  {
    "word": "论文",
    "pinyin": "lùn wén",
    "meaning": "luận văn, bài luận, chuyên khảo; lượng từ: bài [piān]"
  },
  {
    "word": "逻辑",
    "pinyin": "luó ji",
    "meaning": "lô-gíc, tính logic"
  },
  {
    "word": "落后",
    "pinyin": "luò hòu",
    "meaning": "lạc hậu, chậm tiến, tụt lại phía sau"
  },
  {
    "word": "骂",
    "pinyin": "mà",
    "meaning": "mắng, chửi mắng, sỉ vả; lượng từ: trận [dùn]"
  },
  {
    "word": "麦克风",
    "pinyin": "mài kè fēng",
    "meaning": "mic, micro (microphone)"
  },
  {
    "word": "馒头",
    "pinyin": "mán tou",
    "meaning": "bánh bao chay (không nhân); lượng từ: cái [gè]"
  },
  {
    "word": "满足",
    "pinyin": "mǎn zú",
    "meaning": "thỏa mãn, đáp ứng (nhu cầu); mãn nguyện, hài lòng"
  },
  {
    "word": "毛",
    "pinyin": "máo",
    "meaning": "lông, tóc, lông vũ; mốc meo; thô, chưa hoàn thiện; hoảng sợ; hào (đơn vị tiền = 0.1 nhân dân tệ)"
  },
  {
    "word": "毛病",
    "pinyin": "máo bìng",
    "meaning": "khuyết điểm, lỗi, tật xấu; hỏng hóc, bệnh tật; lượng từ: cái [gè]"
  },
  {
    "word": "矛盾",
    "pinyin": "máo dùn",
    "meaning": "mâu thuẫn, trái ngược nhau; lượng từ: cái [gè]"
  },
  {
    "word": "冒险",
    "pinyin": "mào xiǎn",
    "meaning": "mạo hiểm, liều lĩnh; chuyến thám hiểm"
  },
  {
    "word": "贸易",
    "pinyin": "mào yì",
    "meaning": "thương mại, buôn bán; lượng từ: cái [gè]"
  },
  {
    "word": "眉毛",
    "pinyin": "méi mao",
    "meaning": "lông mày; lượng từ: sợi [gēn]"
  },
  {
    "word": "煤炭",
    "pinyin": "méi tàn",
    "meaning": "than đá"
  },
  {
    "word": "美术",
    "pinyin": "měi shù",
    "meaning": "mỹ thuật, nghệ thuật tạo hình, hội họa; lượng từ: loại [zhǒng]"
  },
  {
    "word": "魅力",
    "pinyin": "mèi lì",
    "meaning": "sức hút, sức quyến rũ, vẻ hấp dẫn"
  },
  {
    "word": "迷路",
    "pinyin": "mí lù",
    "meaning": "lạc đường; mê cung"
  },
  {
    "word": "谜语",
    "pinyin": "mí yǔ",
    "meaning": "câu đố, trò chơi đố chữ"
  },
  {
    "word": "密切",
    "pinyin": "mì qiè",
    "meaning": "chặt chẽ, mật thiết, gần gũi; thắt chặt quan hệ"
  },
  {
    "word": "蜜蜂",
    "pinyin": "mì fēng",
    "meaning": "con ong mật; lượng từ: con, đàn [qún]"
  },
  {
    "word": "秘密",
    "pinyin": "mì mì",
    "meaning": "bí mật; tính cơ mật; lượng từ: cái [gè]"
  },
  {
    "word": "秘书",
    "pinyin": "mì shū",
    "meaning": "thư ký"
  },
  {
    "word": "棉花",
    "pinyin": "mián hua",
    "meaning": "bông, cây bông"
  },
  {
    "word": "面对",
    "pinyin": "miàn duì",
    "meaning": "đối mặt, đối diện với"
  },
  {
    "word": "面积",
    "pinyin": "miàn ji",
    "meaning": "diện tích, bề mặt"
  },
  {
    "word": "面临",
    "pinyin": "miàn lín",
    "meaning": "đối mặt với, đứng trước (thử thách, khó khăn)"
  },
  {
    "word": "描写",
    "pinyin": "miáo xiě",
    "meaning": "miêu tả, khắc họa, viết tả; sự miêu tả"
  },
  {
    "word": "苗条",
    "pinyin": "miáo tiáo",
    "meaning": "thon thả, mảnh mai, uyển chuyển"
  },
  {
    "word": "秒",
    "pinyin": "miǎo",
    "meaning": "giây (thời gian); phút góc (đơn vị góc)"
  },
  {
    "word": "民主",
    "pinyin": "mín zhǔ",
    "meaning": "dân chủ"
  },
  {
    "word": "明确",
    "pinyin": "míng què",
    "meaning": "rõ ràng, dứt khoát, cụ thể; làm rõ, xác định rõ"
  },
  {
    "word": "明显",
    "pinyin": "míng xiǎn",
    "meaning": "rõ ràng, hiển nhiên, dễ nhận thấy"
  },
  {
    "word": "明信片",
    "pinyin": "míng xìn piàn",
    "meaning": "bưu thiếp"
  },
  {
    "word": "明星",
    "pinyin": "míng xīng",
    "meaning": "ngôi sao (ca sĩ, diễn viên nổi tiếng)"
  },
  {
    "word": "名牌",
    "pinyin": "míng pái",
    "meaning": "thương hiệu nổi tiếng, hàng hiệu; bảng tên"
  },
  {
    "word": "名片",
    "pinyin": "míng piàn",
    "meaning": " danh thiếp"
  },
  {
    "word": "名胜",
    "pinyin": "míng shèng",
    "meaning": "danh lam thắng cảnh, di tích lịch sử; lượng từ: nơi [chù]"
  },
  {
    "word": "命令",
    "pinyin": "mìng lìng",
    "meaning": "mệnh lệnh, ra lệnh; lượng từ: câu, cái [gè]"
  },
  {
    "word": "命运",
    "pinyin": "mìng yùn",
    "meaning": "số phận, vận mệnh; lượng từ: cái [gè]"
  },
  {
    "word": "摸",
    "pinyin": "mō",
    "meaning": "sờ, chạm, vuốt ve; dò dẫm, bắt mạch"
  },
  {
    "word": "摩托车",
    "pinyin": "mó tuō chē",
    "meaning": "xe máy, xe mô-tô; lượng từ: chiếc [liàng]"
  },
  {
    "word": "模仿",
    "pinyin": "mó fǎng",
    "meaning": "mô phỏng, bắt chước; hình mẫu"
  },
  {
    "word": "模糊",
    "pinyin": "mó hu",
    "meaning": "mờ ảo, mơ hồ, không rõ ràng"
  },
  {
    "word": "陌生",
    "pinyin": "mò shēng",
    "meaning": "xa lạ, lạ lẫm, không quen biết"
  },
  {
    "word": "某",
    "pinyin": "mǒu",
    "meaning": "nào đó, một... nào đó (người hoặc vật không xác định)"
  },
  {
    "word": "目标",
    "pinyin": "mù biāo",
    "meaning": "mục tiêu, đích đến; lượng từ: cái [gè]"
  },
  {
    "word": "目录",
    "pinyin": "mù lù",
    "meaning": "mục lục, danh mục, thư mục (máy tính)"
  },
  {
    "word": "目前",
    "pinyin": "mù qián",
    "meaning": "hiện tại, trước mắt, hiện nay"
  },
  {
    "word": "木头",
    "pinyin": "mù tou",
    "meaning": "khúc gỗ, gỗ; người đần độn; lượng từ: cục, thanh [gēn]"
  },
  {
    "word": "哪怕",
    "pinyin": "nǎ pà",
    "meaning": "cho dù, dẫu cho, dẫu rằng"
  },
  {
    "word": "难怪",
    "pinyin": "nán guài",
    "meaning": "thảo nào, hèn chi, không trách được"
  },
  {
    "word": "难看",
    "pinyin": "nán kàn",
    "meaning": "xấu xí, khó coi, mất mặt"
  },
  {
    "word": "脑袋",
    "pinyin": "nǎo dài",
    "meaning": "cái đầu, bộ óc, tư duy; lượng từ: cái [gè]"
  },
  {
    "word": "内科",
    "pinyin": "nèi kē",
    "meaning": "khoa nội (y học)"
  },
  {
    "word": "嫩",
    "pinyin": "nèn",
    "meaning": "non, mềm mại, tươi (thực phẩm); nhạt (màu); non tay, ít kinh nghiệm"
  },
  {
    "word": "能干",
    "pinyin": "néng gàn",
    "meaning": "có năng lực, tháo vát, tài giỏi"
  },
  {
    "word": "能源",
    "pinyin": "néng yuán",
    "meaning": "năng lượng, nguồn năng lượng; lượng từ: cái [gè]"
  },
  {
    "word": "年代",
    "pinyin": "nián dài",
    "meaning": "thập niên, năm tháng, thời đại; lượng từ: cái [gè]"
  },
  {
    "word": "年纪",
    "pinyin": "nián jì",
    "meaning": "tuổi tác; lượng từ: cái [gè]"
  },
  {
    "word": "念",
    "pinyin": "niàn",
    "meaning": "đọc, học (một bậc học nào đó); đọc thành tiếng; nhớ nhung; ý niệm; số 20 (chữ cổ)"
  },
  {
    "word": "宁可",
    "pinyin": "nìng kě",
    "meaning": "thà rằng, đành rằng, buông xuôi còn hơn"
  },
  {
    "word": "牛仔裤",
    "pinyin": "niú zǎi kù",
    "meaning": "quần bò, quần jean; lượng từ: chiếc [tiáo]"
  },
  {
    "word": "浓",
    "pinyin": "nóng",
    "meaning": "đậm đặc, dày đặc, đậm (màu sắc, mùi vị)"
  },
  {
    "word": "农民",
    "pinyin": "nóng mín",
    "meaning": "nông dân; lượng từ: người [gè]"
  },
  {
    "word": "农业",
    "pinyin": "nóng yè",
    "meaning": "nông nghiệp"
  },
  {
    "word": "女士",
    "pinyin": "nǚ shì",
    "meaning": "quý cô, phu nhân, bà, cô (danh xưng lịch sự); lượng từ: vị [wèi]"
  },
  {
    "word": "偶然",
    "pinyin": "ǒu rán",
    "meaning": "tình cờ, ngẫu nhiên, thỉnh thoảng"
  },
  {
    "word": "拍",
    "pinyin": "pāi",
    "meaning": "vỗ, vỗ tay, đập; chụp (ảnh), quay (phim); vợt (thể thao); phách (nhạc)"
  },
  {
    "word": "排队",
    "pinyin": "pái duì",
    "meaning": "xếp hàng, đứng xếp hàng"
  },
  {
    "word": "排球",
    "pinyin": "pái qiú",
    "meaning": "bóng chuyền; quả bóng chuyền; lượng từ: cái [gè]"
  },
  {
    "word": "派",
    "pinyin": "pài",
    "meaning": "phe phái, phái hệ; cử đi, phái đi, phân công; số pi (π); bánh nướng (loanword)"
  },
  {
    "word": "盼望",
    "pinyin": "pàn wàng",
    "meaning": "mong mỏi, trông ngóng, khát khao"
  },
  {
    "word": "赔偿",
    "pinyin": "péi cháng",
    "meaning": "bồi thường, đền bù"
  },
  {
    "word": "培养",
    "pinyin": "péi yǎng",
    "meaning": "nuôi dưỡng, bồi dưỡng, đào tạo, nuôi cấy (sinh học)"
  },
  {
    "word": "配合",
    "pinyin": "pèi hé",
    "meaning": "phối hợp, ăn ý, tương thích; sự phối hợp"
  },
  {
    "word": "佩服",
    "pinyin": "pèi fú",
    "meaning": "khâm phục, thán phục, kính phục"
  },
  {
    "word": "盆",
    "pinyin": "pén",
    "meaning": "cái chậu, chậu hoa; đơn vị thể tích cũ; lượng từ: cái [gè]"
  },
  {
    "word": "碰见",
    "pinyin": "pèng jiàn",
    "meaning": "tình cờ gặp, đụng phải, chạm trán"
  },
  {
    "word": "披",
    "pinyin": "pī",
    "meaning": "khoác lên vai; mở ra, vén ra; xé rách"
  },
  {
    "word": "批",
    "pinyin": "pī",
    "meaning": "phê chuẩn, phê bình; lượng từ chỉ lô, đợt, mẻ (hàng hóa, học sinh...)"
  },
  {
    "word": "批准",
    "pinyin": "pī zhǔn",
    "meaning": "phê chuẩn, chuẩn y, thông qua"
  },
  {
    "word": "疲劳",
    "pinyin": "pí láo",
    "meaning": "mệt mỏi, uể oải, kiệt sức"
  },
  {
    "word": "皮鞋",
    "pinyin": "pí xié",
    "meaning": "giày da"
  },
  {
    "word": "匹",
    "pinyin": "pǐ",
    "meaning": "lượng từ cho ngựa, la...; lượng từ cho vải (súc, tấm)"
  },
  {
    "word": "片",
    "pinyin": "片",
    "meaning": "tấm, miếng mỏng, lát; phim, thước phim; một phần, phiến; lượng từ cho vùng đất, âm thanh, cảm xúc..."
  },
  {
    "word": "片面",
    "pinyin": "piàn miàn",
    "meaning": "phiến diện, một chiều, không toàn diện"
  },
  {
    "word": "飘",
    "pinyin": "piāo",
    "meaning": "bay bay, phấp phới, trôi dạt (trong gió)"
  },
  {
    "word": "频道",
    "pinyin": "pín dào",
    "meaning": "tần số; kênh truyền hình"
  },
  {
    "word": "品种",
    "pinyin": "pǐn zhǒng",
    "meaning": "chủng loại, giống loài; lượng từ: cái [gè]"
  },
  {
    "word": "凭",
    "pinyin": "píng",
    "meaning": "dựa vào, căn cứ vào; dựa lưng; mặc kệ; bằng chứng"
  },
  {
    "word": "平",
    "pinyin": "píng",
    "meaning": "bằng phẳng, ngang bằng; hòa (tỉ số); bình yên"
  },
  {
    "word": "平常",
    "pinyin": "píng cháng",
    "meaning": "bình thường, thông thường; thường ngày"
  },
  {
    "word": "平等",
    "pinyin": "píng děng",
    "meaning": "bình đẳng; sự bình đẳng"
  },
  {
    "word": "平方",
    "pinyin": "píng fāng",
    "meaning": "mét vuông (hoặc đơn vị bình phương); số bình phương"
  },
  {
    "word": "平衡",
    "pinyin": "píng héng",
    "meaning": "cân bằng, thăng bằng"
  },
  {
    "word": "平静",
    "pinyin": "píng jìng",
    "meaning": "bình yên, phẳng lặng, điềm tĩnh"
  },
  {
    "word": "平均",
    "pinyin": "píng jūn",
    "meaning": "trung bình, chia đều"
  },
  {
    "word": "评价",
    "pinyin": "píng jià",
    "meaning": "đánh giá, nhận xét"
  },
  {
    "word": "破产",
    "pinyin": "pò chǎn",
    "meaning": "phá sản, khánh kiệt"
  },
  {
    "word": "破坏",
    "pinyin": "pò huài",
    "meaning": "phá hoại, hủy hoại, tàn phá"
  },
  {
    "word": "迫切",
    "pinyin": "pò qiè",
    "meaning": "bức thiết, cấp bách, thiết tha"
  },
  {
    "word": "朴素",
    "pinyin": "pǔ sù",
    "meaning": "giản dị, mộc mạc, chân phương"
  },
  {
    "word": "期待",
    "pinyin": "qī dài",
    "meaning": "mong chờ, kỳ vọng, trông đợi"
  },
  {
    "word": "期间",
    "pinyin": "qī jiān",
    "meaning": "thời gian, khoảng thời gian; lượng từ: cái [gè]"
  },
  {
    "word": "其余",
    "pinyin": "qí yú",
    "meaning": "còn lại, phần còn lại, những cái khác"
  },
  {
    "word": "奇迹",
    "pinyin": "qí jì",
    "meaning": "kỳ tích, phép lạ, điều kỳ diệu"
  },
  {
    "word": "启发",
    "pinyin": "qǐ fā",
    "meaning": "khơi gợi, truyền cảm hứng, giác ngộ; sự gợi mở; lượng từ: cái [gè]"
  },
  {
    "word": "企图",
    "pinyin": "qǐ tú",
    "meaning": "mưu đồ, mưu tính; ý đồ xấu; lượng từ: loại [zhǒng]"
  },
  {
    "word": "企业",
    "pinyin": "qǐ yè",
    "meaning": "xí nghiệp, doanh nghiệp, công ty; lượng từ: nhà [jiā]"
  },
  {
    "word": "气氛",
    "pinyin": "qì fēn",
    "meaning": "không khí, bầu không khí (buổi tiệc, lớp học...)"
  },
  {
    "word": "汽油",
    "pinyin": "qì yóu",
    "meaning": "xăng"
  },
  {
    "word": "牵",
    "pinyin": "qiān",
    "meaning": "dắt (dây, thú nuôi); dắt tay"
  },
  {
    "word": "签字",
    "pinyin": "qiān zì",
    "meaning": "ký tên, ký kết"
  },
  {
    "word": "谦虚",
    "pinyin": "qiān xū",
    "meaning": "khiêm tốn, nhún nhường"
  },
  {
    "word": "前途",
    "pinyin": "qián tú",
    "meaning": "tiền đồ, tương lai triển vọng"
  },
  {
    "word": "浅",
    "pinyin": "qiǎn",
    "meaning": " nông, cạn; nhạt (màu sắc)"
  },
  {
    "word": "欠",
    "pinyin": "qiàn",
    "meaning": "thiếu, nợ; ngáp"
  },
  {
    "word": "枪",
    "pinyin": "qiāng",
    "meaning": "súng, thương giáo; vật hình súng; thi hộ; lượng từ: khẩu, cây [zhī]"
  },
  {
    "word": "强调",
    "pinyin": "qiáng diào",
    "meaning": "nhấn mạnh, coi trọng"
  },
  {
    "word": "强烈",
    "pinyin": "qiáng liè",
    "meaning": "mãnh liệt, mạnh mẽ, gay gắt"
  },
  {
    "word": "抢",
    "pinyin": "qiǎng",
    "meaning": "tranh giành, cướp đoạt, vội vã làm gì"
  },
  {
    "word": "悄悄",
    "pinyin": "qiāo qiāo",
    "meaning": "lặng lẽ, âm thầm, lén lút"
  },
  {
    "word": "瞧",
    "pinyin": "qiáo",
    "meaning": "nhìn, xem; đi khám (bác sĩ); thăm hỏi"
  },
  {
    "word": "巧妙",
    "pinyin": "qiǎo miào",
    "meaning": "khéo léo, tinh tế, mưu trí"
  },
  {
    "word": "切",
    "pinyin": "qiē",
    "meaning": "cắt, thái, xắt; tiếp tuyến (toán học)"
  },
  {
    "word": "亲爱",
    "pinyin": "qīn ài",
    "meaning": "thân yêu, yêu quý, thân thiết"
  },
  {
    "word": "亲切",
    "pinyin": "qīn qiè",
    "meaning": "ân cần, thân thiết, gần gũi, niềm nở"
  },
  {
    "word": "亲自",
    "pinyin": "qīn zì",
    "meaning": "tự mình, chính tay mình làm"
  },
  {
    "word": "侵略",
    "pinyin": "qīn lvè",
    "meaning": "xâm lược, xâm chiếm"
  },
  {
    "word": "勤奋",
    "pinyin": "qín fèn",
    "meaning": "chăm chỉ, siêng năng, chuyên cần"
  },
  {
    "word": "勤劳",
    "pinyin": "qín láo",
    "meaning": "cần cù, chăm chỉ, lao động vất vả"
  },
  {
    "word": "青",
    "pinyin": "qīng",
    "meaning": "màu xanh (lục hoặc lam); tuổi trẻ; tỉnh Thanh Hải"
  },
  {
    "word": "青春",
    "pinyin": "qīng chūn",
    "meaning": "tuổi thanh xuân, tuổi trẻ"
  },
  {
    "word": "青少年",
    "pinyin": "qīng shào nián",
    "meaning": "thanh thiếu niên"
  },
  {
    "word": "轻视",
    "pinyin": "qīng shì",
    "meaning": "coi thường, xem nhẹ, khinh miệt"
  },
  {
    "word": "清淡",
    "pinyin": "qīng dàn",
    "meaning": "thanh đạm, nhạt (ít dầu mỡ/gia vị); ế ẩm (kinh doanh)"
  },
  {
    "word": "情景",
    "pinyin": "qíng jǐng",
    "meaning": "cảnh tượng, tình cảnh, hoàn cảnh; lượng từ: cái [gè]"
  },
  {
    "word": "情绪",
    "pinyin": "qíng xù",
    "meaning": "tâm trạng, cảm xúc, sự hờn dỗi; lượng từ: loại [zhǒng]"
  },
  {
    "word": "请求",
    "pinyin": "qǐng qiú",
    "meaning": "thỉnh cầu, yêu cầu; lời thỉnh cầu; lượng từ: cái [gè]"
  },
  {
    "word": "庆祝",
    "pinyin": "qìng zhù",
    "meaning": "chúc mừng, ăn mừng, kỷ niệm"
  },
  {
    "word": "球迷",
    "pinyin": "qiú mí",
    "meaning": "fan cuồng bóng đá/thể thao; lượng từ: người [gè]"
  },
  {
    "word": "趋势",
    "pinyin": "qū shì",
    "meaning": "xu thế, xu hướng"
  },
  {
    "word": "娶",
    "pinyin": "qǔ",
    "meaning": "lấy vợ, cưới vợ"
  },
  {
    "word": "取消",
    "pinyin": "qǔ xiāo",
    "meaning": "hủy bỏ, xóa bỏ; sự hủy bỏ"
  },
  {
    "word": "去世",
    "pinyin": "qù shì",
    "meaning": "qua đời, tạ thế, chết"
  },
  {
    "word": "圈",
    "pinyin": "quān",
    "meaning": "vòng tròn, khoanh vùng; vòng (chạy đua, quỹ đạo); lượng từ cho vòng, vòng quay [gè]"
  },
  {
    "word": "全面",
    "pinyin": "quán miàn",
    "meaning": "toàn diện, toàn bộ, tổng thể"
  },
  {
    "word": "权力",
    "pinyin": "quán lì",
    "meaning": "quyền lực, uy quyền"
  },
  {
    "word": "权利",
    "pinyin": "quán lì",
    "meaning": "quyền lợi, quyền hạn hợp pháp"
  },
  {
    "word": "劝",
    "pinyin": "quàn",
    "meaning": "khuyên bảo, can ngăn, động viên"
  },
  {
    "word": "缺乏",
    "pinyin": "quē fá",
    "meaning": "thiếu thốn, không đủ, sự thiếu hụt"
  },
  {
    "word": "确定",
    "pinyin": "què dìng",
    "meaning": "xác định, khẳng định, chắc chắn; nút OK"
  },
  {
    "word": "确认",
    "pinyin": "què rèn",
    "meaning": "xác nhận, kiểm chứng; sự xác nhận"
  },
  {
    "word": "燃烧",
    "pinyin": "rán shāo",
    "meaning": "cháy, đốt cháy, sự cháy, sự bốc cháy"
  },
  {
    "word": "嚷",
    "pinyin": "rǎng",
    "meaning": "la hét, kêu la, quát tháo"
  },
  {
    "word": "绕",
    "pinyin": "rào",
    "meaning": "quấn, cuộn; quay quanh, đi vòng qua, tránh né; làm bối rối"
  },
  {
    "word": "热爱",
    "pinyin": "rè ài",
    "meaning": "yêu thiết tha, say mê, nhiệt tình yêu mến"
  },
  {
    "word": "热烈",
    "pinyin": "rè liè",
    "meaning": "nhiệt liệt, sôi nổi, nồng nhiệt (hoan hô, chào đón)"
  },
  {
    "word": "热心",
    "pinyin": "rè xīn",
    "meaning": "nhiệt tình, nhiệt huyết, số sắng, tốt bụng"
  },
  {
    "word": "人才",
    "pinyin": "rén cái",
    "meaning": "nhân tài, người có năng lực; ngoại hình ưa nhìn; lượng từ: người [gè]"
  },
  {
    "word": "人口",
    "pinyin": "rén kǒu",
    "meaning": "dân số, nhân khẩu"
  },
  {
    "word": "人类",
    "pinyin": "rén lèi",
    "meaning": "loài người, nhân loại"
  },
  {
    "word": "人生",
    "pinyin": "rén shēng",
    "meaning": "cuộc đời, cuộc sống con người"
  },
  {
    "word": "人事",
    "pinyin": "rén shì",
    "meaning": "nhân sự; việc đời, đối nhân xử thế; tri giác"
  },
  {
    "word": "人物",
    "pinyin": "rén wù",
    "meaning": "nhân vật, nhân tài (trong tiểu thuyết, lịch sử); lượng từ: người [gè]"
  },
  {
    "word": "人员",
    "pinyin": "rén yuán",
    "meaning": "nhân viên, đội ngũ nhân sự; lượng từ: người [gè]"
  },
  {
    "word": "忍不住",
    "pinyin": "rěn bu zhù",
    "meaning": "không kìm được, không nhịn được"
  },
  {
    "word": "日常",
    "pinyin": "rì cháng",
    "meaning": "thường ngày, hàng ngày"
  },
  {
    "word": "日程",
    "pinyin": "rì chéng",
    "meaning": "lịch trình, chương trình nghị sự; lượng từ: cái [gè]"
  },
  {
    "word": "日历",
    "pinyin": "rì lì",
    "meaning": "lịch bàn, tờ lịch; lượng từ: cuốn, tờ [běn]"
  },
  {
    "word": "日期",
    "pinyin": "rì qī",
    "meaning": "ngày tháng; lượng từ: cái [gè]"
  },
  {
    "word": "日用品",
    "pinyin": "rì yòng pǐn",
    "meaning": "vật dụng hàng ngày, nhu yếu phẩm; lượng từ: món [gè]"
  },
  {
    "word": "融化",
    "pinyin": "róng huà",
    "meaning": "tan chảy (băng, tuyết); hòa tan, hòa quyện"
  },
  {
    "word": "荣幸",
    "pinyin": "róng xìng",
    "meaning": "vinh hạnh, vinh dự"
  },
  {
    "word": "荣誉",
    "pinyin": "róng yù",
    "meaning": "vinh dự, danh dự, tiếng tăm"
  },
  {
    "word": "如何",
    "pinyin": "rú hé",
    "meaning": "như thế nào, ra sao"
  },
  {
    "word": "如今",
    "pinyin": "rú jīn",
    "meaning": "ngày nay, hiện nay, giờ đây"
  },
  {
    "word": "软件",
    "pinyin": "ruǎn jiàn",
    "meaning": "phần mềm máy tính"
  },
  {
    "word": "弱",
    "pinyin": "ruò",
    "meaning": "yếu, kém, non trẻ; ít hơn một chút (sau số thập phân)"
  },
  {
    "word": "洒",
    "pinyin": "sǎ",
    "meaning": "vãi, rắc, tưới, làm đổ, rớt"
  },
  {
    "word": "嗓子",
    "pinyin": "sǎng zi",
    "meaning": "cổ họng, giọng hát; lượng từ: cái [bǎ]"
  },
  {
    "word": "杀",
    "pinyin": "shā",
    "meaning": "giết, sát hại; đánh hạ; làm giảm bớt; (sau động từ) cực kỳ"
  },
  {
    "word": "沙漠",
    "pinyin": "shā mò",
    "meaning": "sa mạc; lượng từ: cái [gè]"
  },
  {
    "word": "沙滩",
    "pinyin": "shā tān",
    "meaning": "bãi cát, bãi biển; lượng từ: dải [piàn]"
  },
  {
    "word": "傻",
    "pinyin": "shǎ",
    "meaning": "ngốc nghếch, ngây ngô"
  },
  {
    "word": "晒",
    "pinyin": "shài",
    "meaning": "phơi nắng, tắm nắng; chia sẻ file (mạng)"
  },
  {
    "word": "删除",
    "pinyin": "shān chú",
    "meaning": "xóa bỏ, loại bỏ (văn bản, tệp)"
  },
  {
    "word": "闪电",
    "pinyin": "shǎn diàn",
    "meaning": "chớp, tia chớp; lượng từ: vệt [dào]"
  },
  {
    "word": "善良",
    "pinyin": "shàn liáng",
    "meaning": "lương thiện, hiền lành, tốt bụng"
  },
  {
    "word": "善于",
    "pinyin": "shàn yú",
    "meaning": "giỏi về, có sở trường về, khéo léo"
  },
  {
    "word": "扇子",
    "pinyin": "shān zi",
    "meaning": "cái quạt; lượng từ: cái [bǎ]"
  },
  {
    "word": "商品",
    "pinyin": "shāng pǐn",
    "meaning": "hàng hóa, thương phẩm; lượng từ: cái [gè]"
  },
  {
    "word": "商业",
    "pinyin": "shāng yè",
    "meaning": "thương mại, buôn bán, kinh doanh"
  },
  {
    "word": "上当",
    "pinyin": "shàng dàng",
    "meaning": "bị lừa gạt, sập bẫy"
  },
  {
    "word": "勺子",
    "pinyin": "sháo zi",
    "meaning": "cái muỗng, cái vá, cái môi; lượng từ: cái [bǎ]"
  },
  {
    "word": "蛇",
    "pinyin": "shé",
    "meaning": "con rắn; lượng từ: con [tiáo]"
  },
  {
    "word": "舌头",
    "pinyin": "shé tou",
    "meaning": "lưỡi; tù binh bị bắt để khai thác tin tức; lượng từ: cái [gè]"
  },
  {
    "word": "舍不得",
    "pinyin": "shě bu de",
    "meaning": "lưu luyến, tiếc nuối, không nỡ bỏ"
  },
  {
    "word": "设备",
    "pinyin": "shè bèi",
    "meaning": "thiết bị, trang thiết bị, cơ sở vật chất; lượng từ: cái [gè]"
  },
  {
    "word": "设计",
    "pinyin": "shè jì",
    "meaning": "thiết kế, lên kế hoạch; bản thiết kế; lượng từ: cái [gè]"
  },
  {
    "word": "设施",
    "pinyin": "shè shī",
    "meaning": "cơ sở vật chất, trang thiết bị công cộng"
  },
  {
    "word": "射击",
    "pinyin": "shè jī",
    "meaning": "bắn súng, xạ kích"
  },
  {
    "word": "摄影",
    "pinyin": "shè yǐng",
    "meaning": "nhiếp ảnh, quay phim, chụp ảnh"
  },
  {
    "word": "伸",
    "pinyin": "shēn",
    "meaning": "vươn ra, duỗi ra, kéo dài"
  },
  {
    "word": "深刻",
    "pinyin": "shēn kè",
    "meaning": "sâu sắc, thâm trầm, sâu thẳm"
  },
  {
    "word": "身材",
    "pinyin": "shēn cái",
    "meaning": "vóc dáng, thân hình"
  },
  {
    "word": "身份",
    "pinyin": "shēn fèn",
    "meaning": "thân phận, tư cách, địa vị"
  },
  {
    "word": "神话",
    "pinyin": "shén huà",
    "meaning": "thần thoại, chuyện cổ tích"
  },
  {
    "word": "神经",
    "pinyin": "shén jīng",
    "meaning": "dây thần kinh"
  },
  {
    "word": "神秘",
    "pinyin": "shén mì",
    "meaning": "bí ẩn, thần bí"
  },
  {
    "word": "升",
    "pinyin": "shēng",
    "meaning": "lít (thể tích); thăng cấp, dâng lên, mọc (mặt trời)"
  },
  {
    "word": "生产",
    "pinyin": "shēng chǎn",
    "meaning": "sản xuất, chế tạo; sinh đẻ"
  },
  {
    "word": "生动",
    "pinyin": "shēng dòng",
    "meaning": "sinh động, trực quan, hấp dẫn"
  },
  {
    "word": "声调",
    "pinyin": "shēng diào",
    "meaning": "thanh điệu, giọng điệu; lượng từ: cái [gè]"
  },
  {
    "word": "绳子",
    "pinyin": "shéng zi",
    "meaning": "dây thừng, sợi dây; lượng từ: sợi [tiáo]"
  },
  {
    "word": "省略",
    "pinyin": "shěng lvè",
    "meaning": "lược bỏ, tỉnh lược; sự lược bỏ"
  },
  {
    "word": "胜利",
    "pinyin": "shèng lì",
    "meaning": "chiến thắng, thắng lợi; lượng từ: cái [gè]"
  },
  {
    "word": "诗",
    "pinyin": "shī",
    "meaning": "thơ ca; lượng từ: bài, thủ [shǒu]"
  },
  {
    "word": "失眠",
    "pinyin": "shī mián",
    "meaning": "mất ngủ, chứng mất ngủ"
  },
  {
    "word": "失去",
    "pinyin": "shī qù",
    "meaning": "đánh mất, mất đi"
  },
  {
    "word": "失业",
    "pinyin": "shī yè",
    "meaning": "thất nghiệp; sự mất việc làm"
  },
  {
    "word": "时代",
    "pinyin": "shí dài",
    "meaning": "thời đại, thời kỳ, kỷ nguyên; lượng từ: cái [gè]"
  },
  {
    "word": "时刻",
    "pinyin": "shí kè",
    "meaning": "thời khắc, khoảnh khắc; luôn luôn, lúc nào cũng; lượng từ: cái [gè]"
  },
  {
    "word": "时髦",
    "pinyin": "shí máo",
    "meaning": "hợp mốt, sành điệu, thời trang"
  },
  {
    "word": "时期",
    "pinyin": "shí qī",
    "meaning": "thời kỳ, giai đoạn; lượng từ: cái [gè]"
  },
  {
    "word": "时尚",
    "pinyin": "shí shàng",
    "meaning": "thời trang, phong cách thời thượng; hợp thời trang"
  },
  {
    "word": "实话",
    "pinyin": "shí huà",
    "meaning": "lời thật, sự thật"
  },
  {
    "word": "实践",
    "pinyin": "shí jiàn",
    "meaning": "thực tiễn, thực hành; đưa vào thực tế"
  },
  {
    "word": "实习",
    "pinyin": "shí xí",
    "meaning": "thực tập; đợt thực tập"
  },
  {
    "word": "实现",
    "pinyin": "shí xiàn",
    "meaning": "hiện thực hóa, đạt được, thực hiện"
  },
  {
    "word": "实行",
    "pinyin": "shí xíng",
    "meaning": "thực hiện, thi hành, áp dụng"
  },
  {
    "word": "实验",
    "pinyin": "shí yàn",
    "meaning": "thí nghiệm, thử nghiệm; làm thí nghiệm; lượng từ: cái, lần [cì]"
  },
  {
    "word": "实用",
    "pinyin": "shí yòng",
    "meaning": "thực tế, thiết thực, có tính ứng dụng cao"
  },
  {
    "word": "食物",
    "pinyin": "shí wù",
    "meaning": "thực phẩm, đồ ăn; lượng từ: loại [zhǒng]"
  },
  {
    "word": "石头",
    "pinyin": "shí tou",
    "meaning": "hòn đá, cục đá; lượng từ: viên, hòn [kuài]"
  },
  {
    "word": "使劲儿",
    "pinyin": "shǐ jìn ér",
    "meaning": "dùng sức, gắng sức, rướn sức"
  },
  {
    "word": "始终",
    "pinyin": "shǐ zhōng",
    "meaning": "từ đầu đến cuối, trước sau như một, suốt"
  },
  {
    "word": "是否",
    "pinyin": "shì fǒu",
    "meaning": "có hay không, phải chăng"
  },
  {
    "word": "试卷",
    "pinyin": "shì juàn",
    "meaning": "đề thi, bài kiểm tra; lượng từ: bản, tờ [zhāng]"
  },
  {
    "word": "士兵",
    "pinyin": "shì bīng",
    "meaning": "binh sĩ, lính; lượng từ: người [gè]"
  },
  {
    "word": "似的",
    "pinyin": "shì de",
    "meaning": "như là, giống như"
  },
  {
    "word": "事实",
    "pinyin": "shì shí",
    "meaning": "sự thật, thực tế; lượng từ: cái [gè]"
  },
  {
    "word": "事物",
    "pinyin": "shì wù",
    "meaning": "sự vật, sự việc; lượng từ: cái [gè]"
  },
  {
    "word": "事先",
    "pinyin": "shì xiān",
    "meaning": "trước, từ trước, chuẩn bị trước"
  },
  {
    "word": "收获",
    "pinyin": "shōu huò",
    "meaning": "thu hoạch, thu nhận được; thành quả, thu hoạch; lượng từ: cái [gè]"
  },
  {
    "word": "收据",
    "pinyin": "shōu jù",
    "meaning": "giấy biên nhận, biên lai thu tiền; lượng từ: tờ [zhāng]"
  },
  {
    "word": "手工",
    "pinyin": "shǒu gōng",
    "meaning": "thủ công, làm bằng tay"
  },
  {
    "word": "手术",
    "pinyin": "shǒu shù",
    "meaning": "phẫu thuật, ca mổ; lượng từ: ca [gè]"
  },
  {
    "word": "手套",
    "pinyin": "shǒu tào",
    "meaning": "găng tay, bao tay; lượng từ: đôi, chiếc [zhī]"
  },
  {
    "word": "手续",
    "pinyin": "shǒu xù",
    "meaning": "thủ tục, giấy tờ; lượng từ: cái [gè]"
  },
  {
    "word": "手指",
    "pinyin": "shǒu zhǐ",
    "meaning": "ngón tay; lượng từ: cái [zhī]"
  },
  {
    "word": "受伤",
    "pinyin": "shòu shāng",
    "meaning": "bị thương, tổn thương"
  },
  {
    "word": "寿命",
    "pinyin": "shòu mìng",
    "meaning": "tuổi thọ, vòng đời"
  },
  {
    "word": "书架",
    "pinyin": "shū jià",
    "meaning": "giá sách, kệ sách; lượng từ: cái [gè]"
  },
  {
    "word": "输入",
    "pinyin": "shū rù",
    "meaning": "nhập vào, đưa dữ liệu vào, nhập khẩu"
  },
  {
    "word": "蔬菜",
    "pinyin": "shū cài",
    "meaning": "rau củ quả, rau xanh; lượng từ: loại [zhǒng]"
  },
  {
    "word": "舒适",
    "pinyin": "shū shì",
    "meaning": "thoải mái, dễ chịu, tiện nghi"
  },
  {
    "word": "梳子",
    "pinyin": "shū zi",
    "meaning": "cái lược chải tóc; lượng từ: cái [bǎ]"
  },
  {
    "word": "熟练",
    "pinyin": "shú liàn",
    "meaning": "thành thạo, thuần thục, rành rẽ"
  },
  {
    "word": "鼠标",
    "pinyin": "shǔ biāo",
    "meaning": "con chuột máy tính (mouse)"
  },
  {
    "word": "属于",
    "pinyin": "shǔ yú",
    "meaning": "thuộc về, là một phần của"
  },
  {
    "word": "数据",
    "pinyin": "shù jù",
    "meaning": "dữ liệu, số liệu"
  },
  {
    "word": "数码",
    "pinyin": "shù mǎ",
    "meaning": "kỹ thuật số, con số, mã số"
  },
  {
    "word": "摔",
    "pinyin": "shuāi",
    "meaning": "ném mạnh xuống; ngã, té; làm vỡ"
  },
  {
    "word": "甩",
    "pinyin": "shuǎi",
    "meaning": "văng, vung, quăng; bỏ lại phía sau; đá (người yêu)"
  },
  {
    "word": "双方",
    "pinyin": "shuāng fāng",
    "meaning": "hai bên, song phương, đôi bên"
  },
  {
    "word": "税",
    "pinyin": "shuì",
    "meaning": "thuế, lệ phí"
  },
  {
    "word": "说不定",
    "pinyin": "shuō bu dìng",
    "meaning": "chưa biết chừng, có lẽ, không chắc"
  },
  {
    "word": "说服",
    "pinyin": "shuō fú",
    "meaning": "thuyết phục, khuyên nhủ ai đó"
  },
  {
    "word": "撕",
    "pinyin": "sī",
    "meaning": "xé, xé rách"
  },
  {
    "word": "丝绸",
    "pinyin": "sī chóu",
    "meaning": "lụa tơ tằm, vải lụa"
  },
  {
    "word": "丝毫",
    "pinyin": "sī háo",
    "meaning": "một chút, mảy may (thường dùng phủ định)"
  },
  {
    "word": "思考",
    "pinyin": "sī kǎo",
    "meaning": "suy nghĩ, ngẫm nghĩ, trăn trở"
  },
  {
    "word": "思想",
    "pinyin": "sī xiǎng",
    "meaning": "tư tưởng, suy nghĩ, hệ tư tưởng; lượng từ: cái [gè]"
  },
  {
    "word": "私人",
    "pinyin": "sī rén",
    "meaning": "cá nhân, tư nhân, riêng tư"
  },
  {
    "word": "似乎",
    "pinyin": "sì hū",
    "meaning": "dường như, hình như, có vẻ như"
  },
  {
    "word": "寺庙",
    "pinyin": "sì miào",
    "meaning": "chùa chiền, đền miếu, tu viện"
  },
  {
    "word": "宿舍",
    "pinyin": "sù shè",
    "meaning": "ký túc xá; lượng từ: phòng [jiān]"
  },
  {
    "word": "随时",
    "pinyin": "suí shí",
    "meaning": "bất cứ lúc nào, mọi lúc"
  },
  {
    "word": "碎",
    "pinyin": "suì",
    "meaning": "vỡ vụn, nát vụn; vụn vặt"
  },
  {
    "word": "损失",
    "pinyin": "sǔn shī",
    "meaning": "tổn thất, thiệt hại; chịu tổn thất; lượng từ: cái [gè]"
  },
  {
    "word": "缩短",
    "pinyin": "suō duǎn",
    "meaning": "rút ngắn, thu ngắn lại"
  },
  {
    "word": "缩小",
    "pinyin": "suō xiǎo",
    "meaning": "thu nhỏ, làm nhỏ lại"
  },
  {
    "word": "锁",
    "pinyin": "suǒ",
    "meaning": "ổ khóa; khóa lại; lượng từ: cái [bǎ]"
  },
  {
    "word": "所",
    "pinyin": "suǒ",
    "meaning": "nơi, chỗ; lượng từ cho tòa nhà, cơ quan...; đại từ chỉ định; trợ từ kết cấu"
  },
  {
    "word": "所谓",
    "pinyin": "suǒ wèi",
    "meaning": "cái gọi là..."
  },
  {
    "word": "塔",
    "pinyin": "tǎ",
    "meaning": "cái tháp, bảo tháp; lượng từ: ngọn, tòa [zuò]"
  },
  {
    "word": "台阶",
    "pinyin": "tái jiē",
    "meaning": "bậc thềm, bậc thang; lối thoát (trong tình huống khó xử)"
  },
  {
    "word": "太极拳",
    "pinyin": "tài jí quán",
    "meaning": " Thái Cực Quyền"
  },
  {
    "word": "太太",
    "pinyin": "tài tai",
    "meaning": "vợ, phu nhân, bà (cách gọi trang trọng); lượng từ: người [gè]"
  },
  {
    "word": "谈判",
    "pinyin": "tán pàn",
    "meaning": "đàm phán, thương lượng; cuộc đàm phán; lượng từ: cuộc [gè]"
  },
  {
    "word": "坦率",
    "pinyin": "tǎn shuài",
    "meaning": "thẳng thắn, bộc trực, cởi mở"
  },
  {
    "word": "烫",
    "pinyin": "tàng",
    "meaning": "bỏng, làm bỏng; là/ủi quần áo; nóng"
  },
  {
    "word": "桃",
    "pinyin": "táo",
    "meaning": "quả đào"
  },
  {
    "word": "逃",
    "pinyin": "táo",
    "meaning": "chạy trốn, trốn chạy, lẩn trốn"
  },
  {
    "word": "逃避",
    "pinyin": "táo bì",
    "meaning": "né tránh, trốn tránh (trách nhiệm, nghĩa vụ)"
  },
  {
    "word": "套",
    "pinyin": "tào",
    "meaning": "vỏ bọc, bao; trùm lên, lồng vào; chuỗi, bộ; lượng từ cho bộ đồ, căn nhà... [tào]"
  },
  {
    "word": "特殊",
    "pinyin": "tè shū",
    "meaning": "đặc biệt, khác thường, riêng biệt"
  },
  {
    "word": "特意",
    "pinyin": "tè yì",
    "meaning": "cốt ý, đặc biệt (chuẩn bị làm gì đó)"
  },
  {
    "word": "特征",
    "pinyin": "tè zhēng",
    "meaning": "đặc trưng, đặc điểm nhận dạng"
  },
  {
    "word": "疼爱",
    "pinyin": "téng ài",
    "meaning": "thương yêu, chiều chuộng hết mực"
  },
  {
    "word": "提",
    "pinyin": "tí",
    "meaning": "xách, xách tay; nhấc lên; nêu ra, đề cập; rút (tiền); nét hất (trong chữ Hán)"
  },
  {
    "word": "提倡",
    "pinyin": "tí chàng",
    "meaning": "xướng nghị, đề xướng, khuyến khích, ủng hộ"
  },
  {
    "word": "提纲",
    "pinyin": "tí gāng",
    "meaning": "đề cương, dàn ý, ý chính"
  },
  {
    "word": "提问",
    "pinyin": "tí wèn",
    "meaning": "đặt câu hỏi, chất vấn, hỏi bài"
  },
  {
    "word": "题目",
    "pinyin": "tí mù",
    "meaning": "đề tài, tiêu đề, bài tập, câu hỏi; lượng từ: cái [gè]"
  },
  {
    "word": "体会",
    "pinyin": "tǐ huì",
    "meaning": "lĩnh hội, cảm nhận sâu sắc qua trải nghiệm; sự thấu hiểu"
  },
  {
    "word": "体积",
    "pinyin": "tǐ jī",
    "meaning": "thể tích, kích thước khối; lượng từ: cái [gè]"
  },
  {
    "word": "体贴",
    "pinyin": "tǐ tiē",
    "meaning": "chu đáo, ân cần, biết quan tâm thông cảm (đến người khác)"
  },
  {
    "word": "体现",
    "pinyin": "tǐ xiàn",
    "meaning": "thể hiện, phản ánh, biểu hiện ra"
  },
  {
    "word": "体验",
    "pinyin": "tǐ yàn",
    "meaning": "trải nghiệm thực tế, tự mình cảm nhận"
  },
  {
    "word": "天空",
    "pinyin": "tiān kōng",
    "meaning": "bầu trời"
  },
  {
    "word": "天真",
    "pinyin": "tiān zhēn",
    "meaning": "ngây thơ, hồn nhiên, trong trắng"
  },
  {
    "word": "田野",
    "pinyin": "tián yě",
    "meaning": "đồng ruộng, đồng nội; lượng từ: dải [piàn]"
  },
  {
    "word": "调皮",
    "pinyin": "tiáo pí",
    "meaning": "tinh nghịch, nghịch ngợm, quậy phá"
  },
  {
    "word": "调整",
    "pinyin": "tiáo zhěng",
    "meaning": "điều chỉnh, sắp xếp lại; sự điều chỉnh; lượng từ: cái [gè]"
  },
  {
    "word": "挑战",
    "pinyin": "tiǎo zhàn",
    "meaning": "thách thức, khiêu chiến; sự thách thức"
  },
  {
    "word": "通常",
    "pinyin": "tōng cháng",
    "meaning": "thông thường, bình thường, thường lệ"
  },
  {
    "word": "通讯",
    "pinyin": "tōng xùn",
    "meaning": "thông tin liên lạc, bản tin báo chí; lượng từ: cái [gè]"
  },
  {
    "word": "铜",
    "pinyin": "tóng",
    "meaning": "đồng (kim loại); lượng từ: cục [kuài]"
  },
  {
    "word": "同时",
    "pinyin": "tóng shí",
    "meaning": "đồng thời, cùng một lúc; bên cạnh đó"
  },
  {
    "word": "统一",
    "pinyin": "tǒng yī",
    "meaning": "thống nhất, đồng nhất, hợp nhất"
  },
  {
    "word": "统治",
    "pinyin": "tǒng zhì",
    "meaning": "thống trị, cai trị; chế độ cai trị"
  },
  {
    "word": "痛苦",
    "pinyin": "tòng kǔ",
    "meaning": "đau khổ, đau đớn; sự đau khổ; lượng từ: cái [gè]"
  },
  {
    "word": "痛快",
    "pinyin": "tòng kuài",
    "meaning": "sảng khoái, vui sướng, hả hê, dứt khoát"
  },
  {
    "word": "投资",
    "pinyin": "tóu zī",
    "meaning": "đầu tư; tiền đầu tư"
  },
  {
    "word": "透明",
    "pinyin": "tòu míng",
    "meaning": "trong suốt, minh bạch (không mờ ám)"
  },
  {
    "word": "突出",
    "pinyin": "tū chū",
    "meaning": "nổi bật, xuất chúng; làm nổi bật; nhô lên, lồi ra"
  },
  {
    "word": "土地",
    "pinyin": "tǔ dì",
    "meaning": "đất đai, thổ nhưỡng, lãnh thổ; lượng từ: dải [piàn]"
  },
  {
    "word": "土豆",
    "pinyin": "tǔ dòu",
    "meaning": "khoai tây; lượng từ: cái [gè] (đài loan: đậu phộng/hạt [kē])"
  },
  {
    "word": "吐",
    "pinyin": "tù",
    "meaning": "nôn mửa, ói ra"
  },
  {
    "word": "兔子",
    "pinyin": "tù zi",
    "meaning": "con thỏ; lượng từ: con [zhī]"
  },
  {
    "word": "团",
    "pinyin": "tuán",
    "meaning": "bánh trôi, viên tròn (thức ăn); đoàn thể"
  },
  {
    "word": "推辞",
    "pinyin": "tuī cí",
    "meaning": "từ chối, thoái thác (lời mời, quà biếu)"
  },
  {
    "word": "推广",
    "pinyin": "tuī guǎng",
    "meaning": "phổ biến, quảng bá, nhân rộng (sản phẩm, mô hình)"
  },
  {
    "word": "推荐",
    "pinyin": "tuī jiàn",
    "meaning": "giới thiệu, đề cử; sự giới thiệu"
  },
  {
    "word": "退",
    "pinyin": "tuì",
    "meaning": "lùi lại, rút lui, thoái lui; từ trả (hàng, vé); giảm (sốt, giá)"
  },
  {
    "word": "退步",
    "pinyin": "tuì bù",
    "meaning": "thụt lùi, kém đi so với trước; nhượng bộ"
  },
  {
    "word": "退休",
    "pinyin": "tuì xiū",
    "meaning": "về hưu, nghỉ hưu"
  },
  {
    "word": "歪",
    "pinyin": "wāi",
    "meaning": "nghiêng, vẹo, lệch; quanh co, tà tâm"
  },
  {
    "word": "外交",
    "pinyin": "wài jiāo",
    "meaning": "ngoại giao, công tác đối ngoại; lượng từ: cái [gè]"
  },
  {
    "word": "弯",
    "pinyin": "wān",
    "meaning": "uốn cong, khúc khuỷu; khúc cua; lượng từ: con đường [dào]"
  },
  {
    "word": "完美",
    "pinyin": "wán měi",
    "meaning": "hoàn hảo, hoàn mỹ"
  },
  {
    "word": "完善",
    "pinyin": "wán shàn",
    "meaning": "hoàn thiện, làm cho hoàn chỉnh, tối ưu"
  },
  {
    "word": "完整",
    "pinyin": "wán zhěng",
    "meaning": "hoàn chỉnh, vẹn nguyên, đầy đủ"
  },
  {
    "word": "玩具",
    "pinyin": "wán jù",
    "meaning": "đồ chơi"
  },
  {
    "word": "万一",
    "pinyin": "wàn yī",
    "meaning": "lỡ như, phòng khi, vạn một"
  },
  {
    "word": "王子",
    "pinyin": "wáng zǐ",
    "meaning": " hoàng tử"
  },
  {
    "word": "往返",
    "pinyin": "wǎng fǎn",
    "meaning": "đi lại hai chiều, khứ hồi"
  },
  {
    "word": "微笑",
    "pinyin": "wēi xiào",
    "meaning": "mỉm cười; nụ cười; lượng từ: cái, chút [sī]"
  },
  {
    "word": "威胁",
    "pinyin": "wēi xié",
    "meaning": " đe dọa, uy hiếp"
  },
  {
    "word": "危害",
    "pinyin": "wēi hài",
    "meaning": "gây hại, tổn hại, hiểm họa; lượng từ: cái [gè]"
  },
  {
    "word": "违反",
    "pinyin": "wéi fǎn",
    "meaning": "vi phạm, trái với (pháp luật, quy định)"
  },
  {
    "word": "维护",
    "pinyin": "wéi hù",
    "meaning": "bảo vệ, duy trì, bảo trì, giữ gìn"
  },
  {
    "word": "围巾",
    "pinyin": "wéi jīn",
    "meaning": "khăn quàng cổ; lượng từ: chiếc [tiáo]"
  },
  {
    "word": "围绕",
    "pinyin": "wéi rào",
    "meaning": "xoay quanh, tập trung vào (vấn đề, tâm điểm)"
  },
  {
    "word": "唯一",
    "pinyin": "wéi yī",
    "meaning": "duy nhất"
  },
  {
    "word": "尾巴",
    "pinyin": "wěi ba",
    "meaning": " cái đuôi"
  },
  {
    "word": "伟大",
    "pinyin": "wěi dà",
    "meaning": "vĩ đại, to lớn, cao cả"
  },
  {
    "word": "委屈",
    "pinyin": "wěi qu",
    "meaning": "uất ức, tủi thân, chịu thiệt thòi; làm ai phiền lòng"
  },
  {
    "word": "委托",
    "pinyin": "wěi tuō",
    "meaning": "ủy thác, ủy quyền, nhờ cậy"
  },
  {
    "word": "胃",
    "pinyin": "wèi",
    "meaning": " dạ dày, bao tử; lượng từ: cái [gè]"
  },
  {
    "word": "位置",
    "pinyin": "wèi zhi",
    "meaning": "vị trí, chỗ ngồi; lượng từ: cái [gè]"
  },
  {
    "word": "未必",
    "pinyin": "wèi bì",
    "meaning": "chưa chắc đã, chưa hẳn"
  },
  {
    "word": "未来",
    "pinyin": "wèi lái",
    "meaning": "tương lai; sắp tới; lượng từ: cái [gè]"
  },
  {
    "word": "卫生间",
    "pinyin": "wèi shēng jiān",
    "meaning": "phòng vệ sinh, nhà vệ sinh; lượng từ: gian [jiān]"
  },
  {
    "word": "温暖",
    "pinyin": "wēn nuǎn",
    "meaning": "ấm áp; sưởi ấm"
  },
  {
    "word": "温柔",
    "pinyin": "wēn róu",
    "meaning": "dịu dàng, ôn hòa, yểu điệu"
  },
  {
    "word": "闻",
    "pinyin": "wén",
    "meaning": "ngửi; nghe thấy; tiếng tăm, tin tức"
  },
  {
    "word": "文件",
    "pinyin": "wén jiàn",
    "meaning": "tài liệu, văn bản, tệp tin; lượng từ: bản [fèn]"
  },
  {
    "word": "文具",
    "pinyin": "wén jù",
    "meaning": "đồ dùng học tập, văn phòng phẩm"
  },
  {
    "word": "文明",
    "pinyin": "wén míng",
    "meaning": "văn minh; nền văn minh; lịch sự; lượng từ: cái [gè]"
  },
  {
    "word": "文学",
    "pinyin": "wén xué",
    "meaning": "văn học; lượng từ: loại [zhǒng]"
  },
  {
    "word": "吻",
    "pinyin": "wěn",
    "meaning": "hôn, nụ hôn; cái mõm"
  },
  {
    "word": "稳定",
    "pinyin": "wěn dìng",
    "meaning": "ổn định, vững chắc; làm cho ổn định"
  },
  {
    "word": "问候",
    "pinyin": "wèn hòu",
    "meaning": "hỏi thăm, gửi lời chào hỏi"
  },
  {
    "word": "卧室",
    "pinyin": "wò shì",
    "meaning": "phòng ngủ; lượng từ: gian [jiān]"
  },
  {
    "word": "屋子",
    "pinyin": "wū zi",
    "meaning": "căn nhà, căn phòng; lượng từ: gian [jiān]"
  },
  {
    "word": "无奈",
    "pinyin": "wú nài",
    "meaning": "đành chịu, đành bó tay, bất đắc dĩ"
  },
  {
    "word": "无数",
    "pinyin": "wú shù",
    "meaning": "vô số, vô kể, không nhường nào"
  },
  {
    "word": "武器",
    "pinyin": "wǔ qì",
    "meaning": "vũ khí; lượng từ: loại [zhǒng]"
  },
  {
    "word": "武术",
    "pinyin": "wǔ shù",
    "meaning": "võ thuật, kung fu; lượng từ: loại [zhǒng]"
  },
  {
    "word": "雾",
    "pinyin": "wù",
    "meaning": "sương mù; lượng từ: trận [zhèn]"
  },
  {
    "word": "物理",
    "pinyin": "wù lǐ",
    "meaning": "vật lý; thuộc về vật lý"
  },
  {
    "word": "物质",
    "pinyin": "wù zhì",
    "meaning": "vật chất, chất; mang tính vật chất; lượng từ: cái [gè]"
  },
  {
    "word": "吸收",
    "pinyin": "xī shōu",
    "meaning": "hấp thụ, tiếp thu, kết nạp"
  },
  {
    "word": "系",
    "pinyin": "xì",
    "meaning": "cột, buộc, thắt; khoa (trong trường đại học); hệ thống"
  },
  {
    "word": "系统",
    "pinyin": "xì tǒng",
    "meaning": "hệ thống; lượng từ: cái [gè]"
  },
  {
    "word": "细节",
    "pinyin": "xì jié",
    "meaning": "chi tiết, tiểu tiết"
  },
  {
    "word": "戏剧",
    "pinyin": "xì jù",
    "meaning": "kịch nghệ, kịch, tuồng"
  },
  {
    "word": "瞎",
    "pinyin": "xiā",
    "meaning": "mù; quáng quàng, lung tung, bừa bãi"
  },
  {
    "word": "吓",
    "pinyin": "xià",
    "meaning": "dọa dẫm, làm sợ hãi"
  },
  {
    "word": "下载",
    "pinyin": "xià zǎi",
    "meaning": "tải xuống, download"
  },
  {
    "word": "鲜艳",
    "pinyin": "xiān yàn",
    "meaning": "sặc sỡ, tươi tắn, rực rỡ (màu sắc)"
  },
  {
    "word": "显得",
    "pinyin": "xiǎn de",
    "meaning": "tỏ ra, lộ vẻ, có vẻ như"
  },
  {
    "word": "显然",
    "pinyin": "xiǎn rán",
    "meaning": "hiển nhiên, rõ ràng, rành rành"
  },
  {
    "word": "显示",
    "pinyin": "xiǎn shì",
    "meaning": "hiển thị, thể hiện, phô bày, chứng tỏ"
  },
  {
    "word": "县",
    "pinyin": "xiàn",
    "meaning": "huyện (đơn vị hành chính)"
  },
  {
    "word": "现金",
    "pinyin": "xiàn jīn",
    "meaning": "tiền mặt"
  },
  {
    "word": "现实",
    "pinyin": "xiàn shí",
    "meaning": "hiện thực, thực tế; thiết thực"
  },
  {
    "word": "现象",
    "pinyin": "xiàn xiàng",
    "meaning": "hiện tượng, biểu hiện; lượng từ: cái [gè]"
  },
  {
    "word": "相处",
    "pinyin": "xiāng chǔ",
    "meaning": "sống chung, đối xử, qua lại với nhau"
  },
  {
    "word": "相当",
    "pinyin": "xiāng dāng",
    "meaning": "tương đương, phù hợp; tương đối, khá là"
  },
  {
    "word": "相对",
    "pinyin": "xiāng duì",
    "meaning": "tương đối; đối diện, đối lập nhau"
  },
  {
    "word": "相关",
    "pinyin": "xiāng guān",
    "meaning": "liên quan đến, tương quan"
  },
  {
    "word": "相似",
    "pinyin": "xiāng sì",
    "meaning": "tương tự, giống nhau; sự tương đồng"
  },
  {
    "word": "想念",
    "pinyin": "xiǎng niàn",
    "meaning": "nhớ nhung, hoài niệm ai đó"
  },
  {
    "word": "想象",
    "pinyin": "xiǎng xiàng",
    "meaning": "tưởng tượng, hình dung; trí tưởng tượng; lượng từ: cái [gè]"
  },
  {
    "word": "享受",
    "pinyin": "xiǎng shòu",
    "meaning": "thưởng thức, hưởng thụ; sự thụ hưởng; lượng từ: loại [zhǒng]"
  },
  {
    "word": "项",
    "pinyin": "xiàng",
    "meaning": "sau gáy; khoản, hạng mục (trong danh sách, toán học); lượng từ cho điều khoản, dự án..."
  },
  {
    "word": "项链",
    "pinyin": "xiàng liàn",
    "meaning": "dây chuyền, vòng cổ; lượng từ: sợi [tiáo]"
  },
  {
    "word": "项目",
    "pinyin": "xiàng mù",
    "meaning": "dự án, hạng mục, nội dung thi đấu; lượng từ: cái [gè]"
  },
  {
    "word": "橡皮",
    "pinyin": "xiàng pí",
    "meaning": "cục tẩy, cao su; lượng từ: cục [kuài]"
  },
  {
    "word": "象棋",
    "pinyin": "xiàng qí",
    "meaning": "cờ tướng; lượng từ: bộ [fù]"
  },
  {
    "word": "象征",
    "pinyin": "xiàng zhēng",
    "meaning": "biểu tượng, tượng trưng cho; vật tượng trưng"
  },
  {
    "word": "消费",
    "pinyin": "xiāo fèi",
    "meaning": "tiêu dùng, chi tiêu; mức tiêu thụ; lượng từ: cái [gè]"
  },
  {
    "word": "消化",
    "pinyin": "xiāo huà",
    "meaning": "tiêu hóa; tiếp thu (kiến thức)"
  },
  {
    "word": "消灭",
    "pinyin": "xiāo miè",
    "meaning": "tiêu diệt, triệt tiêu, xóa sổ"
  },
  {
    "word": "消失",
    "pinyin": "xiāo shī",
    "meaning": "biến mất, tan biến"
  },
  {
    "word": "销售",
    "pinyin": "xiāo shòu",
    "meaning": "tiêu thụ, bán hàng; doanh số bán"
  },
  {
    "word": "小吃",
    "pinyin": "xiǎo chī",
    "meaning": "đồ ăn vặt, quà vặt, món ăn đặc sản địa phương; lượng từ: quán [jiā]"
  },
  {
    "word": "小伙子",
    "pinyin": "xiǎo huǒ zi",
    "meaning": "thanh niên, chàng trai trẻ; lượng từ: người [gè]"
  },
  {
    "word": "小麦",
    "pinyin": "xiǎo mài",
    "meaning": "lúa mì; lượng từ: hạt [lì]"
  },
  {
    "word": "小气",
    "pinyin": "xiǎo qì",
    "meaning": "keo kiệt, ích kỷ, hẹp hòi, bủn xỉn"
  },
  {
    "word": "小偷",
    "pinyin": "xiǎo tōu",
    "meaning": "kẻ trộm, tên cắp vặt"
  },
  {
    "word": "效率",
    "pinyin": "xiào lǜ",
    "meaning": "hiệu suất, hiệu quả làm việc"
  },
  {
    "word": "孝顺",
    "pinyin": "xiào shùn",
    "meaning": "hiếu thảo, hiếu thuận với cha mẹ"
  },
  {
    "word": "歇",
    "pinyin": "xiē",
    "meaning": "nghỉ ngơi, dừng chân"
  },
  {
    "word": "斜",
    "pinyin": "xié",
    "meaning": "nghiêng, xiên, chéo"
  },
  {
    "word": "协调",
    "pinyin": "xié tiáo",
    "meaning": "phối hợp, điều hòa, dung hòa; nhịp nhàng"
  },
  {
    "word": "心理",
    "pinyin": "xīn lǐ",
    "meaning": "tâm lý, tinh thần"
  },
  {
    "word": "心脏",
    "pinyin": "xīn zàng",
    "meaning": "trái tim (cơ quan); lượng từ: quả [gè]"
  },
  {
    "word": "欣赏",
    "pinyin": "xīn shǎng",
    "meaning": "thưởng thức, tán thưởng, đánh giá cao, ngưỡng mộ"
  },
  {
    "word": "信封",
    "pinyin": "xìn fēng",
    "meaning": "bì thư, phong bì; lượng từ: cái [gè]"
  },
  {
    "word": "信号",
    "pinyin": "xìn hào",
    "meaning": " tín hiệu"
  },
  {
    "word": "信息",
    "pinyin": "xìn xī",
    "meaning": "thông tin, tin tức"
  },
  {
    "word": "行动",
    "pinyin": "xíng dòng",
    "meaning": "hành động, hoạt động; di chuyển; lượng từ: cái [gè]"
  },
  {
    "word": "行人",
    "pinyin": "xíng rén",
    "meaning": "người đi bộ, người qua đường"
  },
  {
    "word": "行为",
    "pinyin": "xíng wéi",
    "meaning": "hành vi, cử chỉ, cách cư xử"
  },
  {
    "word": "形成",
    "pinyin": "xíng chéng",
    "meaning": "hình thành, tạo thành"
  },
  {
    "word": "形容",
    "pinyin": "xíng róng",
    "meaning": "miêu tả, hình dung; diện mạo"
  },
  {
    "word": "形式",
    "pinyin": "xíng shì",
    "meaning": "hình thức, dạng thức; lượng từ: cái [gè]"
  },
  {
    "word": "形势",
    "pinyin": "xíng shì",
    "meaning": "tình hình, cục diện, thế trận; lượng từ: cái [gè]"
  },
  {
    "word": "形象",
    "pinyin": "xíng xiàng",
    "meaning": "hình ảnh, hình tượng, vóc dáng; sinh động; lượng từ: cái [gè]"
  },
  {
    "word": "形状",
    "pinyin": "xíng zhuàng",
    "meaning": "hình dáng, hình thù; lượng từ: cái [gè]"
  },
  {
    "word": "性质",
    "pinyin": "xìng zhì",
    "meaning": "tính chất, bản chất; lượng từ: cái [gè]"
  },
  {
    "word": "幸亏",
    "pinyin": "xìng kuī",
    "meaning": "may mà, ơn nhờ có"
  },
  {
    "word": "幸运",
    "pinyin": "xìng yùn",
    "meaning": "may mắn, vận hên; sự may mắn"
  },
  {
    "word": "胸",
    "pinyin": "xiōng",
    "meaning": "ngực, lồng ngực"
  },
  {
    "word": "兄弟",
    "pinyin": "xiōng dì",
    "meaning": "anh em, em trai; từêm (khiêm tốn tự xưng); lượng từ: người [gè]"
  },
  {
    "word": "雄伟",
    "pinyin": "xióng wěi",
    "meaning": "hùng vĩ, vĩ đại, oai nghiêm"
  },
  {
    "word": "修改",
    "pinyin": "xiū gǎi",
    "meaning": "sửa đổi, chỉnh sửa, sửa chữa (văn bản, thiết kế)"
  },
  {
    "word": "休闲",
    "pinyin": "xiū xián",
    "meaning": "giải trí, nghỉ ngơi, thư nhàn"
  },
  {
    "word": "虚心",
    "pinyin": "xū xīn",
    "meaning": "khiêm tốn, cầu thị"
  },
  {
    "word": "叙述",
    "pinyin": "xù shù",
    "meaning": "thuật lại, kể lại, trần thuật; bản tường thuật"
  },
  {
    "word": "宣布",
    "pinyin": "xuān bù",
    "meaning": "tuyên bố, công bố"
  },
  {
    "word": "宣传",
    "pinyin": "xuān chuán",
    "meaning": "tuyên truyền, quảng bá; công tác tuyên truyền; lượng từ: cái [gè]"
  },
  {
    "word": "选举",
    "pinyin": "xuǎn jǔ",
    "meaning": "bầu cử; cuộc bầu cử; lượng từ: lần [cì]"
  },
  {
    "word": "学期",
    "pinyin": "xué qī",
    "meaning": "học kỳ; lượng từ: cái [gè]"
  },
  {
    "word": "学术",
    "pinyin": "xué shù",
    "meaning": "học thuật, khoa học nghiên cứu; lượng từ: cái [gè]"
  },
  {
    "word": "学问",
    "pinyin": "xué wèn",
    "meaning": "học thức, kiến thức, điều uyên bác; lượng từ: cái [gè]"
  },
  {
    "word": "寻找",
    "pinyin": "xún zhǎo",
    "meaning": "tìm kiếm, kiếm tìm"
  },
  {
    "word": "询问",
    "pinyin": "xún wèn",
    "meaning": "thăm dò, gặng hỏi, hỏi han"
  },
  {
    "word": "训练",
    "pinyin": "xùn liàn",
    "meaning": "huấn luyện, rèn luyện; buổi tập; lượng từ: cái [gè]"
  },
  {
    "word": "迅速",
    "pinyin": "xùn sù",
    "meaning": "nhanh chóng, tốc độ, mau lẹ"
  },
  {
    "word": "延长",
    "pinyin": "yán cháng",
    "meaning": "kéo dài, gia hạn, nới rộng thời gian"
  },
  {
    "word": "严肃",
    "pinyin": "yán sù",
    "meaning": "nghiêm túc, trang nghiêm, nghiêm khắc"
  },
  {
    "word": "宴会",
    "pinyin": "yàn huì",
    "meaning": "tiệc chiêu đãi, yến tiệc; lượng từ: buổi [gè]"
  },
  {
    "word": "阳台",
    "pinyin": "yáng tái",
    "meaning": "ban công"
  },
  {
    "word": "痒",
    "pinyin": "yǎng",
    "meaning": "ngứa; làm ngứa"
  },
  {
    "word": "样式",
    "pinyin": "yàng shì",
    "meaning": "kiểu dáng, mẫu mã"
  },
  {
    "word": "腰",
    "pinyin": "yāo",
    "meaning": "eo, lưng, thắt lưng"
  },
  {
    "word": "摇",
    "pinyin": "yáo",
    "meaning": "lắc, lay, quay (cần cẩu, quạt nước), chèo thuyền"
  },
  {
    "word": "咬",
    "pinyin": "yǎo",
    "meaning": "cắn, ngoạm"
  },
  {
    "word": "要不",
    "pinyin": "yào bù",
    "meaning": "nếu không thì, hay là..."
  },
  {
    "word": "要是",
    "pinyin": "yào shi",
    "meaning": "nếu như, giả sử"
  },
  {
    "word": "夜",
    "pinyin": "yè",
    "meaning": "đêm, ban đêm"
  },
  {
    "word": "液体",
    "pinyin": "yè tǐ",
    "meaning": "chất lỏng, thể lỏng"
  },
  {
    "word": "业务",
    "pinyin": "yè wù",
    "meaning": "nghiệp vụ, công việc kinh doanh; lượng từ: mục [xiàng]"
  },
  {
    "word": "业余",
    "pinyin": "yè yú",
    "meaning": "ngoại khóa, thời gian rảnh, nghiệp dư"
  },
  {
    "word": "依然",
    "pinyin": "yī rán",
    "meaning": "vẫn, y như cũ, như trước"
  },
  {
    "word": "一辈子",
    "pinyin": "yī bèi zi",
    "meaning": "cả đời, suốt đời"
  },
  {
    "word": "一旦",
    "pinyin": "yī dàn",
    "meaning": "một khi (đã... thì...); hễ mà"
  },
  {
    "word": "一路",
    "pinyin": "yī lù",
    "meaning": "suốt dọc đường, cùng đường, cùng phe"
  },
  {
    "word": "一致",
    "pinyin": "yī zhì",
    "meaning": "nhất trí, đồng lòng, đồng nhất"
  },
  {
    "word": "遗憾",
    "pinyin": "yí hàn",
    "meaning": "tiếc nuối, ân hận; đáng tiếc"
  },
  {
    "word": "移动",
    "pinyin": "yí dòng",
    "meaning": "di chuyển, dịch chuyển; tính di động"
  },
  {
    "word": "移民",
    "pinyin": "yí mín",
    "meaning": "di cư, nhập cư; người di cư"
  },
  {
    "word": "疑问",
    "pinyin": "yí wèn",
    "meaning": "nghi vấn, câu hỏi, điều thắc mắc"
  },
  {
    "word": "乙",
    "pinyin": "yǐ",
    "meaning": "thứ hai trong thiên can; bên B (hợp đồng); gốc ethyl"
  },
  {
    "word": "以及",
    "pinyin": "yǐ jí",
    "meaning": "cũng như, và"
  },
  {
    "word": "以来",
    "pinyin": "yǐ lái",
    "meaning": "từ trước tới nay, kể từ khi"
  },
  {
    "word": "意外",
    "pinyin": "yì wài",
    "meaning": "ngoài ý muốn, bất ngờ; tai nạn bất ngờ; lượng từ: cái [gè]"
  },
  {
    "word": "意义",
    "pinyin": "yì yì",
    "meaning": "ý nghĩa, tầm quan trọng; lượng từ: cái [gè]"
  },
  {
    "word": "议论",
    "pinyin": "yì lùn",
    "meaning": "bình luận, bàn tán, thảo luận; lượng từ: cái [gè]"
  },
  {
    "word": "义务",
    "pinyin": "yì wù",
    "meaning": "nghĩa vụ, bổn phận; làm tình nguyện; lượng từ: mục [xiàng]"
  },
  {
    "word": "因而",
    "pinyin": "yīn ér",
    "meaning": "do đó, vì thế, cho nên"
  },
  {
    "word": "因素",
    "pinyin": "yīn sù",
    "meaning": "yếu tố, nhân tố; lượng từ: cái [gè]"
  },
  {
    "word": "银",
    "pinyin": "yín",
    "meaning": "bạc (kim loại); màu bạc; tiền tệ"
  },
  {
    "word": "英俊",
    "pinyin": "yīng jùn",
    "meaning": "tuấn tú, khôi ngô, tài giỏi"
  },
  {
    "word": "英雄",
    "pinyin": "yīng xióng",
    "meaning": "anh hùng; lượng từ: người [gè]"
  },
  {
    "word": "迎接",
    "pinyin": "yíng jiē",
    "meaning": "đón, nghênh đón, chào đón"
  },
  {
    "word": "营养",
    "pinyin": "yíng yǎng",
    "meaning": "dinh dưỡng; chất bổ dưỡng; lượng từ: loại [zhǒng]"
  },
  {
    "word": "营业",
    "pinyin": "yíng yè",
    "meaning": "kinh doanh, buôn bán, mở cửa hàng"
  },
  {
    "word": "影子",
    "pinyin": "yǐng zi",
    "meaning": "cái bóng, hình bóng; lượng từ: cái [gè]"
  },
  {
    "word": "硬币",
    "pinyin": "yìng bì",
    "meaning": "tiền xu; lượng từ: đồng [méi]"
  },
  {
    "word": "硬件",
    "pinyin": "yìng jiàn",
    "meaning": " phần cứng máy tính"
  },
  {
    "word": "应付",
    "pinyin": "yìng fu",
    "meaning": "đối phó, ứng phó, giải quyết qua loa"
  },
  {
    "word": "应聘",
    "pinyin": "yìng pìn",
    "meaning": "ứng tuyển, ứng thí vào vị trí tuyển dụng"
  },
  {
    "word": "应用",
    "pinyin": "yìng yòng",
    "meaning": "ứng dụng, đưa vào sử dụng; mang tính ứng dụng"
  },
  {
    "word": "拥抱",
    "pinyin": "yōng bào",
    "meaning": "ôm, ôm ấp"
  },
  {
    "word": "拥挤",
    "pinyin": "yōng jǐ",
    "meaning": "đông đúc, chật chội, chen chúc"
  },
  {
    "word": "勇气",
    "pinyin": "yǒng qì",
    "meaning": "dũng khí, sự can đảm, lòng dũng cảm"
  },
  {
    "word": "用途",
    "pinyin": "yòng tú",
    "meaning": "công dụng, mục đích sử dụng"
  },
  {
    "word": "优惠",
    "pinyin": "yōu huì",
    "meaning": "ưu đãi, ưu ái (giá cả, chính sách)"
  },
  {
    "word": "优美",
    "pinyin": "yōu měi",
    "meaning": "duyên dáng, êm đềm, mĩ miều, đẹp đẽ"
  },
  {
    "word": "优势",
    "pinyin": "yōu shì",
    "meaning": "ưu thế, thế mạnh"
  },
  {
    "word": "悠久",
    "pinyin": "yōu jiǔ",
    "meaning": "lâu đời, trường tồn, dai dẳng"
  },
  {
    "word": "邮局",
    "pinyin": "yóu jú",
    "meaning": "bưu điện; lượng từ: nhà [jiā]"
  },
  {
    "word": "游览",
    "pinyin": "yóu lǎn",
    "meaning": "vãn cảnh, tham quan du lịch; lượng từ: lần [cì]"
  },
  {
    "word": "油炸",
    "pinyin": "yóu zhá",
    "meaning": "chiên ngập dầu, rán giòn"
  },
  {
    "word": "犹豫",
    "pinyin": "yóu yù",
    "meaning": "do dự, chần chừ, lưỡng lự"
  },
  {
    "word": "有利",
    "pinyin": "yǒu lì",
    "meaning": "có lợi, thuận lợi"
  },
  {
    "word": "幼儿园",
    "pinyin": "yòu ér yuán",
    "meaning": "trường mẫu giáo, nhà trẻ"
  },
  {
    "word": "娱乐",
    "pinyin": "yú lè",
    "meaning": "giải trí, tiêu khiển; hoạt động giải trí"
  },
  {
    "word": "与其",
    "pinyin": "yǔ qí",
    "meaning": "thà rằng... còn hơn... (与其 A 不如 B)"
  },
  {
    "word": "语气",
    "pinyin": "yǔ qì",
    "meaning": "ngữ khí, giọng điệu, thái độ khi nói; lượng từ: cái [gè]"
  },
  {
    "word": "宇宙",
    "pinyin": "yǔ zhòu",
    "meaning": " vũ trụ"
  },
  {
    "word": "预报",
    "pinyin": "yù bào",
    "meaning": "dự báo (thời tiết...)"
  },
  {
    "word": "预订",
    "pinyin": "yù dìng",
    "meaning": "đặt trước (vé, phòng, bàn ăn...)"
  },
  {
    "word": "预防",
    "pinyin": "yù fáng",
    "meaning": "phòng ngừa, đề phòng, phòng bệnh"
  },
  {
    "word": "玉米",
    "pinyin": "yù mǐ",
    "meaning": "bắp, ngô; lượng từ: hạt [lì]"
  },
  {
    "word": "元旦",
    "pinyin": "yuán dàn",
    "meaning": "ngày Tết Dương lịch (1 tháng 1)"
  },
  {
    "word": "原料",
    "pinyin": "yuán liào",
    "meaning": "nguyên liệu thô; lượng từ: cái [gè]"
  },
  {
    "word": "原则",
    "pinyin": "yuán zé",
    "meaning": "nguyên tắc, lập trường; lượng từ: cái [gè]"
  },
  {
    "word": "缘故",
    "pinyin": "yuán gù",
    "meaning": "nguyên nhân, duyên cớ"
  },
  {
    "word": "愿望",
    "pinyin": "yuàn wàng",
    "meaning": "nguyện vọng, ước nguyện, mong ước"
  },
  {
    "word": "晕",
    "pinyin": "yūn",
    "meaning": "chóng mặt, choáng váng; ngất xỉu, mất ý thức"
  },
  {
    "word": "运气",
    "pinyin": "yùn qi",
    "meaning": "vận may, vận rủi, may mắn"
  },
  {
    "word": "运输",
    "pinyin": "yùn shū",
    "meaning": "vận chuyển, vận tải; lượng từ: cái [gè]"
  },
  {
    "word": "运用",
    "pinyin": "yùn yòng",
    "meaning": "vận dụng, áp dụng, sử dụng"
  },
  {
    "word": "灾害",
    "pinyin": "zāi hài",
    "meaning": "thảm họa, tai họa, thiên tai; lượng từ: cái [gè]"
  },
  {
    "word": "再三",
    "pinyin": "zài sān",
    "meaning": "hết lần này đến lần khác, đắn đo suy nghĩ kỹ"
  },
  {
    "word": "赞成",
    "pinyin": "zàn chéng",
    "meaning": "tán thành, đồng tình, ủng hộ"
  },
  {
    "word": "赞美",
    "pinyin": "zàn měi",
    "meaning": "ca ngợi, tán dương, khen ngợi"
  },
  {
    "word": "糟糕",
    "pinyin": "zāo gāo",
    "meaning": "hỏng bét, tồi tệ, chết chóc rồi"
  },
  {
    "word": "造成",
    "pinyin": "zào chéng",
    "meaning": "gây ra, tạo nên, dẫn tới (kết quả)"
  },
  {
    "word": "则",
    "pinyin": "zé",
    "meaning": "thì, bèn (biểu thị sự tương phản); quy tắc, điều; lượng từ cho điều khoản"
  },
  {
    "word": "责备",
    "pinyin": "zé bèi",
    "meaning": "trách mắng, chỉ trích, quở trách"
  },
  {
    "word": "摘",
    "pinyin": "zhāi",
    "meaning": "hái (hoa, quả); tháo ra, cởi ra (kính, mũ); vay mượn"
  },
  {
    "word": "粘贴",
    "pinyin": "zhān tiē",
    "meaning": "dán (giấy, nhãn); paste (máy tính)"
  },
  {
    "word": "展开",
    "pinyin": "zhǎn kāi",
    "meaning": "triển khai, mở rộng, phát động, diễn ra sôi nổi"
  },
  {
    "word": "展览",
    "pinyin": "zhǎn lǎn",
    "meaning": "triển lãm, trưng bày; cuộc triển lãm; lượng từ: lần [cì]"
  },
  {
    "word": "战争",
    "pinyin": "zhàn zhēng",
    "meaning": "chiến tranh, xung đột vũ trang; lượng từ: trận [chǎng]"
  },
  {
    "word": "占线",
    "pinyin": "zhàn xiàn",
    "meaning": "(đường dây điện thoại) bận"
  },
  {
    "word": "涨",
    "pinyin": "zhǎng",
    "meaning": "tăng lên (giá cả, mực nước sông)"
  },
  {
    "word": "掌握",
    "pinyin": "zhǎng wò",
    "meaning": "nắm vững, làm chủ, kiểm soát, am hiểu sâu"
  },
  {
    "word": "账户",
    "pinyin": "zhàng hù",
    "meaning": "tài khoản ngân hàng, tài khoản trực tuyến"
  },
  {
    "word": "招待",
    "pinyin": "zhāo dài",
    "meaning": "chiêu đãi, tiếp đón khách khứa; sự tiếp tân"
  },
  {
    "word": "着凉",
    "pinyin": "zháo liáng",
    "meaning": "bị nhiễm lạnh, nhiễm cảm"
  },
  {
    "word": "照常",
    "pinyin": "zhào cháng",
    "meaning": "như thường lệ, vẫn như cũ"
  },
  {
    "word": "召开",
    "pinyin": "zhào kāi",
    "meaning": "triệu tập, tổ chức (hội nghị, cuộc họp)"
  },
  {
    "word": "哲学",
    "pinyin": "zhé xué",
    "meaning": "triết học; lượng từ: cái [gè]"
  },
  {
    "word": "真理",
    "pinyin": "zhēn lǐ",
    "meaning": "chân lý, lẽ phải; lượng từ: cái [gè]"
  },
  {
    "word": "真实",
    "pinyin": "zhēn shí",
    "meaning": "chân thực, thật, xác thực"
  },
  {
    "word": "针对",
    "pinyin": "zhēn duì",
    "meaning": "nhắm vào, đối phó với, dựa trên"
  },
  {
    "word": "珍惜",
    "pinyin": "zhēn xī",
    "meaning": "trân quý, trân trọng, nâng niu"
  },
  {
    "word": "诊断",
    "pinyin": "zhěn duàn",
    "meaning": "chẩn đoán bệnh; sự chẩn đoán"
  },
  {
    "word": "枕头",
    "pinyin": "zhěn tou",
    "meaning": "cái gối"
  },
  {
    "word": "阵",
    "pinyin": "zhèn",
    "meaning": "trận, đợt, cơn, hồi (chỉ khoảnh khắc ngắn); đội hình quân đội"
  },
  {
    "word": "振动",
    "pinyin": "zhèn dòng",
    "meaning": "rung động, sự rung"
  },
  {
    "word": "睁",
    "pinyin": "zhēng",
    "meaning": "mở mắt"
  },
  {
    "word": "争论",
    "pinyin": "zhēng lùn",
    "meaning": "tranh cãi, tranh luận; cuộc tranh cãi; lượng từ: trận [chǎng]"
  },
  {
    "word": "争取",
    "pinyin": "zhēng qǔ",
    "meaning": "tranh thủ, phấn đấu giành lấy"
  },
  {
    "word": "征求",
    "pinyin": "zhēng qiú",
    "meaning": "lấy ý kiến, trưng cầu, thỉnh cầu (ý kiến, phản hồi)"
  },
  {
    "word": "整个",
    "pinyin": "zhěng gè",
    "meaning": "toàn bộ, toàn thể, cả thảy"
  },
  {
    "word": "整体",
    "pinyin": "zhěng tǐ",
    "meaning": "chỉnh thể, toàn cục, tính toàn vẹn"
  },
  {
    "word": "正",
    "pinyin": "zhèng",
    "meaning": "đúng lúc, đang; chính trực, ngay thẳng; số dương"
  },
  {
    "word": "政策",
    "pinyin": "zhèng cè",
    "meaning": "chính sách; lượng từ: cái [gè]"
  },
  {
    "word": "政府",
    "pinyin": "zhèng fǔ",
    "meaning": "chính phủ; lượng từ: cái [gè]"
  },
  {
    "word": "政治",
    "pinyin": "zhèng zhì",
    "meaning": "chính trị; thuộc về chính trị"
  },
  {
    "word": "证件",
    "pinyin": "zhèng jiàn",
    "meaning": "giấy tờ tùy thân, chứng minh thư, chứng chỉ"
  },
  {
    "word": "证据",
    "pinyin": "zhèng jù",
    "meaning": "chứng cứ, bằng chứng, tang chứng"
  },
  {
    "word": "挣钱",
    "pinyin": "zhèng qián",
    "meaning": "kiếm tiền"
  },
  {
    "word": "支",
    "pinyin": "zhī",
    "meaning": "chống đỡ, duy trì; chi nhánh, phân đội; rút tiền; lượng từ cho vật dài (bút, súng, bài hát...)"
  },
  {
    "word": "支票",
    "pinyin": "zhī piào",
    "meaning": "séc, ngân phiếu; lượng từ: cuốn [běn]"
  },
  {
    "word": "直",
    "pinyin": "zhī",
    "meaning": "thẳng; ngay thẳng, bộc trực; liên tục, cứ thế; nét sổ thẳng (chữ Hán)"
  },
  {
    "word": "执行",
    "pinyin": "zhí xíng",
    "meaning": "thực thi, thi hành, chấp hành, chạy (chương trình)"
  },
  {
    "word": "执照",
    "pinyin": "zhí zhào",
    "meaning": "giấy phép, giấy chứng nhận hành nghề"
  },
  {
    "word": "指导",
    "pinyin": "zhǐ dǎo",
    "meaning": "chỉ đạo, hướng dẫn, dìu dắt; sự hướng dẫn; lượng từ: cái [gè]"
  },
  {
    "word": "指挥",
    "pinyin": "zhǐ huī",
    "meaning": "chỉ huy, điều khiển; nhạc trưởng; lượng từ: cái [gè]"
  },
  {
    "word": "制定",
    "pinyin": "zhì dìng",
    "meaning": "xây dựng, ban hành, hoạch định (luật lệ, kế hoạch)"
  },
  {
    "word": "制度",
    "pinyin": "zhì dù",
    "meaning": "chế độ, thể chế, quy ế; lượng từ: cái [gè]"
  },
  {
    "word": "制作",
    "pinyin": "zhì zuò",
    "meaning": "chế tạo, sản xuất, làm ra"
  },
  {
    "word": "智慧",
    "pinyin": "zhì huì",
    "meaning": "trí tuệ, sự thông thái; thông minh"
  },
  {
    "word": "至今",
    "pinyin": "zhì jīn",
    "meaning": "cho đến nay, tận bây giờ"
  },
  {
    "word": "至于",
    "pinyin": "zhì yú",
    "meaning": "còn như, về phần, đến mức độ"
  },
  {
    "word": "治疗",
    "pinyin": "zhì liáo",
    "meaning": "điều trị, chữa trị bệnh; phương pháp chữa bệnh"
  },
  {
    "word": "志愿者",
    "pinyin": "zhì yuàn zhě",
    "meaning": "tình nguyện viên"
  },
  {
    "word": "秩序",
    "pinyin": "zhì xù",
    "meaning": "trật tự, nề nếp xã hội; lượng từ: cái [gè]"
  },
  {
    "word": "钟",
    "pinyin": "zhōng",
    "meaning": "đồng hồ; giờ (o'clock); cái chuông; lượng từ: cái [zuò]"
  },
  {
    "word": "中介",
    "pinyin": "zhōng jiè",
    "meaning": "trung gian, môi giới; công ty môi giới"
  },
  {
    "word": "中心",
    "pinyin": "zhōng xīn",
    "meaning": "trung tâm, cốt lõi; lượng từ: cái [gè]"
  },
  {
    "word": "中旬",
    "pinyin": "zhōng xún",
    "meaning": "trung tuần (từ ngày 11 đến 20 của tháng)"
  },
  {
    "word": "重",
    "pinyin": "zhòng",
    "meaning": "nặng; nghiêm trọng; coi trọng"
  },
  {
    "word": "重量",
    "pinyin": "zhòng liàng",
    "meaning": "trọng lượng, cân nặng; lượng từ: cái [gè]"
  },
  {
    "word": "周到",
    "pinyin": "zhōu dao",
    "meaning": "chu đáo, ân cần, thấu đáo"
  },
  {
    "word": "逐步",
    "pinyin": "zhú bù",
    "meaning": "từng bước, dần dần"
  },
  {
    "word": "竹子",
    "pinyin": "zhú zi",
    "meaning": "cây tre, cây trúc; lượng từ: cây, khóm [gēn]"
  },
  {
    "word": "煮",
    "pinyin": "zhǔ",
    "meaning": "luộc, nấu, ninh"
  },
  {
    "word": "主持",
    "pinyin": "zhǔ chí",
    "meaning": "chủ trì, điều hành, dẫn chương trình; đứng ra lo liệu"
  },
  {
    "word": "主观",
    "pinyin": "zhǔ guān",
    "meaning": "chủ quan"
  },
  {
    "word": "主人",
    "pinyin": "zhǔ rén",
    "meaning": "chủ nhà, chủ nhân, người chủ; lượng từ: người [gè]"
  },
  {
    "word": "主席",
    "pinyin": "zhǔ xí",
    "meaning": "chủ tịch; lượng từ: vị, người [wèi]"
  },
  {
    "word": "主张",
    "pinyin": "zhǔ zhāng",
    "meaning": "chủ trương, quan điểm, đề xướng; lượng từ: cái [gè]"
  },
  {
    "word": "嘱咐",
    "pinyin": "zhǔ fù",
    "meaning": "dặn dò, căn dặn"
  },
  {
    "word": "祝福",
    "pinyin": "zhù fú",
    "meaning": "chúc phúc, cầu chúc những điều tốt đẹp"
  },
  {
    "word": "注册",
    "pinyin": "zhù cè",
    "meaning": "đăng ký, ghi danh (tài khoản, nhãn hiệu)"
  },
  {
    "word": "抓紧",
    "pinyin": "zhuā jǐn",
    "meaning": "nắm chặt, tranh thủ, tập trung cao độ"
  },
  {
    "word": "专家",
    "pinyin": "zhuān jiā",
    "meaning": "chuyên gia; lượng từ: người [gè]"
  },
  {
    "word": "专心",
    "pinyin": "zhuān xīn",
    "meaning": "chăm chú, tập trung tư tưởng"
  },
  {
    "word": "转变",
    "pinyin": "zhuǎn biàn",
    "meaning": "biến đổi, chuyển biến, thay đổi; lượng từ: cái [gè]"
  },
  {
    "word": "转告",
    "pinyin": "zhuǎn gào",
    "meaning": "chuyển lời, nhắn lại, thông báo lại"
  },
  {
    "word": "装",
    "pinyin": "zhuāng",
    "meaning": "trang hoàng, lắp đặt; trang phục; giả vờ; đựng, chứa"
  },
  {
    "word": "装饰",
    "pinyin": "zhuāng shì",
    "meaning": "trang trí, làm đẹp; đồ trang trí"
  },
  {
    "word": "状况",
    "pinyin": "zhuàng kuàng",
    "meaning": "tình trạng, trạng thái, tình hình; lượng từ: cái [gè]"
  },
  {
    "word": "状态",
    "pinyin": "zhuàng tài",
    "meaning": "trạng thái, thái độ; lượng từ: cái [gè]"
  },
  {
    "word": "追求",
    "pinyin": "zhuī qiú",
    "meaning": "theo đuổi (mục tiêu, tình yêu)"
  },
  {
    "word": "资格",
    "pinyin": "zī gé",
    "meaning": "tư cách, phẩm chất, điều kiện bằng cấp"
  },
  {
    "word": "资金",
    "pinyin": "zī jīn",
    "meaning": "vốn, nguồn vốn, tiền vốn"
  },
  {
    "word": "资料",
    "pinyin": "zī liào",
    "meaning": "tài liệu, dữ liệu, tư liệu thông tin; lượng từ: bản, phần [fèn]"
  },
  {
    "word": "资源",
    "pinyin": "zī yuán",
    "meaning": "tài nguyên (thiên nhiên, nhân lực...)"
  },
  {
    "word": "姿势",
    "pinyin": "zī shì",
    "meaning": "tư thế, dáng điệu"
  },
  {
    "word": "咨询",
    "pinyin": "zī xún",
    "meaning": "tư vấn, hỏi ý kiến; sự tư vấn"
  },
  {
    "word": "紫",
    "pinyin": "zǐ",
    "meaning": "màu tím"
  },
  {
    "word": "字幕",
    "pinyin": "zì mù",
    "meaning": "phụ đề (phim ảnh)"
  },
  {
    "word": "自从",
    "pinyin": "zì cóng",
    "meaning": "kể từ, từ khi..."
  },
  {
    "word": "自动",
    "pinyin": "zì dòng",
    "meaning": "tự động; tự nguyện"
  },
  {
    "word": "自豪",
    "pinyin": "zì háo",
    "meaning": "tự hào, hãnh diện"
  },
  {
    "word": "自觉",
    "pinyin": "zì jué",
    "meaning": "tự giác, có ý thức"
  },
  {
    "word": "自私",
    "pinyin": "zì sī",
    "meaning": "ích kỷ, vị kỷ"
  },
  {
    "word": "自信",
    "pinyin": "zì xìn",
    "meaning": "tự tin; lòng tự tin"
  },
  {
    "word": "自由",
    "pinyin": "zì yóu",
    "meaning": "tự do; sự tự do; lượng từ: cái [gè]"
  },
  {
    "word": "自愿",
    "pinyin": "zì yuàn",
    "meaning": "tự nguyện, xung phong"
  },
  {
    "word": "综合",
    "pinyin": "zōng hé",
    "meaning": "tổng hợp, đa ngành; tổng kết lại"
  },
  {
    "word": "宗教",
    "pinyin": "zōng jiào",
    "meaning": "tôn giáo"
  },
  {
    "word": "总裁",
    "pinyin": "zǒng cái",
    "meaning": "tổng giám đốc, chủ tịch tập đoàn"
  },
  {
    "word": "总共",
    "pinyin": "zǒng gòng",
    "meaning": "tổng cộng, tất cả"
  },
  {
    "word": "总理",
    "pinyin": "zǒng lǐ",
    "meaning": "thủ tướng; lượng từ: vị [wèi]"
  },
  {
    "word": "总算",
    "pinyin": "zǒng suàn",
    "meaning": "cuối cùng thì cũng, rốt cuộc thì"
  },
  {
    "word": "总统",
    "pinyin": "zǒng tǒng",
    "meaning": "tổng thống; lượng từ: vị [wèi]"
  },
  {
    "word": "总之",
    "pinyin": "zǒng zhī",
    "meaning": "nói tóm lại, tóm lại là"
  },
  {
    "word": "组合",
    "pinyin": "zǔ hé",
    "meaning": "tổ hợp, kết hợp; nhóm nhạc; sự lắp ghép"
  },
  {
    "word": "阻止",
    "pinyin": "zǔ zhǐ",
    "meaning": "ngăn cản, ngăn chặn"
  },
  {
    "word": "祖国",
    "pinyin": "zǔ guó",
    "meaning": "tổ quốc, quê hương; lượng từ: cái [gè]"
  },
  {
    "word": "祖先",
    "pinyin": "zǔ xiān",
    "meaning": "tổ tiên, ông cha"
  },
  {
    "word": "醉",
    "pinyin": "zuì",
    "meaning": "say (rượu, men)"
  },
  {
    "word": "最初",
    "pinyin": "zuì chū",
    "meaning": "ban đầu, lúc đầu, sơ khai"
  },
  {
    "word": "罪犯",
    "pinyin": "zuì fàn",
    "meaning": "tội phạm, kẻ có tội"
  },
  {
    "word": "尊敬",
    "pinyin": "zūn jìng",
    "meaning": "tôn kính, kính trọng; sự kính trọng"
  },
  {
    "word": "遵守",
    "pinyin": "zūn shǒu",
    "meaning": "tuân thủ, tuân theo (luật lệ, cam kết)"
  },
  {
    "word": "作品",
    "pinyin": "zuò pǐn",
    "meaning": "tác phẩm (văn học, nghệ thuật); lượng từ: bộ, bài [piān]"
  },
  {
    "word": "作为",
    "pinyin": "zuò wéi",
    "meaning": "hành động, thành tựu; với tư cách là; coi như là"
  },
  {
    "word": "作文",
    "pinyin": "zuò wén",
    "meaning": "viết văn, bài văn (của học sinh); lượng từ: bài [piān]"
  }
]
hskData[5] = hsk5Data;
if (Array.isArray(window.HSK6_DATA)) hskData[6] = window.HSK6_DATA;

let currentLevel = "1";
let currentWordIndex = 0;
let typingWordList = [];
let currentCommFilter = "all";

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.getElementById('online-auth-loader');

    // Gắn nút Đăng xuất NGAY khi DOM tải xong, không phụ thuộc Firestore/profile.
    // Như vậy dù profile hoặc tiến trình online tải chậm, nút vẫn hoạt động.
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (event) => {
            event.preventDefault();
            if (logoutBtn.dataset.loggingOut === '1') return;
            logoutBtn.dataset.loggingOut = '1';
            logoutBtn.disabled = true;
            const oldText = logoutBtn.textContent;
            logoutBtn.textContent = 'Đang đăng xuất...';
            try {
                if (window.ghAuth && typeof window.ghAuth.logout === 'function') {
                    await window.ghAuth.logout();
                } else if (window.firebase && firebase.auth) {
                    await firebase.auth().signOut();
                }
            } catch (error) {
                console.error('Đăng xuất Firebase lỗi:', error);
            } finally {
                // Xóa trạng thái giao diện và chuyển trang bất kể Firestore có lỗi hay không.
                window.ghCurrentUser = null;
                window.location.replace('./login.html');
            }
        }, { once: true });
    }

    try {
        // Chờ Firebase xác nhận trạng thái đăng nhập lần đầu, không redirect sớm khi SDK còn đang khởi tạo.
        const user = window.ghAuthReady ? await window.ghAuthReady : null;
        if (!user) {
            if (loader) loader.innerHTML = `<div style="background:#fff;border:1px solid #f0d6d6;border-radius:22px;padding:28px;max-width:380px;text-align:center;box-shadow:0 18px 50px rgba(0,0,0,.10);"><div style="font-size:36px;">${uiIcon("icon-lock","ui-icon-xl")}</div><strong>Phiên đăng nhập không tồn tại</strong><p style="color:#718096;">Đang chuyển đến trang đăng nhập...</p></div>`;
            setTimeout(() => window.location.replace('./login.html'), 700);
            return;
        }

        const profile = await (window.ghAuth?.getProfile ? window.ghAuth.getProfile(user) : null);
        window.ghUserProfile = profile || {};
        const userChip = document.getElementById('online-user-chip');
        if (userChip) userChip.textContent = ' ' + (profile?.username || user.displayName || user.email || 'Tài khoản');

        document.getElementById('typing-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkTyping();
            }
        });

        const saved = getProgressData();
        if (saved.currentLevel) {
            currentLevel = String(saved.currentLevel);
            const select = document.getElementById('hsk-level');
            if (select) select.value = currentLevel;
        }
        renderList();
        initTyping();
        renderCommunication();
        initHandwriting();
        updateProgressUI();

    } catch (error) {
        console.error(error);
        if (loader) loader.innerHTML = `<div style="background:#fff;border:1px solid #f0d6d6;border-radius:22px;padding:28px;max-width:380px;text-align:center;"><div style="font-size:36px;">${uiIcon("icon-alert","ui-icon-xl")}</div><strong>Không thể tải tài khoản</strong><p style="color:#718096;">Kiểm tra Firebase và kết nối Internet rồi tải lại trang.</p></div>`;
    } finally {
        if (loader && window.ghCurrentUser) {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            setTimeout(() => loader.remove(), 220);
        }
    }
});

// Chuyển Tab
function switchMode(mode) {
    // Khi vào Luyện nghe, luôn dừng mọi âm thanh đang chạy; chỉ nút Nghe câu/Nghe lại mới được phát.
    if (mode === 'listening' && 'speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch(e) {} }
    document.querySelectorAll('main > section, section').forEach(section => {
        section.classList.remove('active');
    });

    const section = document.getElementById(`${mode}-mode`);
    if (!section) return;

    section.classList.add('active');

    if (mode === 'typing') initTyping();
    if (mode === 'listening') initListening();
    if (mode === 'exam') {
        updateExamStartInfo();
        resetExamUI();
    }
    if (mode === 'communication') renderCommunication();
    if (mode === 'handwriting') return;
    if (mode === 'progress') updateProgressUI();
}

// Phát âm Mandarin bằng Speech Synthesis của trình duyệt
function speakChinese(index) {
    const list = hskData[currentLevel] || [];
    const item = list[index];
    if (!item || !item.word) return;

    if (!('speechSynthesis' in window)) {
        alert('Trình duyệt này không hỗ trợ phát âm.');
        return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(item.word);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.78;
    utterance.pitch = 1;

    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => /^zh-CN/i.test(v.lang));
    if (voice) utterance.voice = voice;

    speechSynthesis.speak(utterance);
}

// Render Danh sách từ
function renderList() {
    const list = hskData[currentLevel] || [];
    const container = document.getElementById('word-list');
    const total = document.getElementById('total-words');

    if (!container) return;
    if (total) total.textContent = list.length;

    container.innerHTML = list.map((item, index) => `
        <div class="word-card">
            <div class="word-card-top">
                <div class="hanzi">${item.word || ''}</div>
                <button class="pronounce-btn" type="button"
                    title="Phát âm tiếng Trung"
                    aria-label="Phát âm ${item.word || ''}"
                    onclick="speakChinese(${index})">${uiIcon("icon-volume")}</button>
            </div>
            <div class="pinyin">${item.pinyin || ''}</div>
            <div class="meaning">${item.meaning || ''}</div>
        </div>
    `).join('');
}

// Khởi tạo bài tập gõ
function initTyping() {
    typingWordList = [...(hskData[currentLevel] || [])];
    typingWordList.sort(() => Math.random() - 0.5); 
    currentWordIndex = 0;
    showTypingWord();
}

function showTypingWord() {
    const feedback = document.getElementById('typing-feedback');
    const nextBtn = document.getElementById('next-word-btn');
    const input = document.getElementById('typing-input');

    if (typingWordList.length === 0) {
        document.getElementById('typing-word').textContent = "Trống";
        document.getElementById('typing-meaning').textContent = "Chưa có dữ liệu cho cấp độ này";
        input.disabled = true;
        return;
    }

    if (currentWordIndex >= typingWordList.length) {
        document.getElementById('typing-word').innerHTML = uiIcon("icon-spark");
        document.getElementById('typing-meaning').textContent = "Bạn đã hoàn thành cấp độ này!";
        input.disabled = true;
        return;
    }

    const currentItem = typingWordList[currentWordIndex];
    document.getElementById('typing-word').textContent = currentItem.word;
    document.getElementById('typing-meaning').textContent = currentItem.meaning;
    
    input.value = "";
    input.disabled = false;
    input.focus();
    feedback.textContent = "";
    nextBtn.classList.add('hidden');
}

function checkTyping() {
    if (currentWordIndex >= typingWordList.length) return;

    const inputVal = document.getElementById('typing-input').value.trim().toLowerCase();
    const currentItem = typingWordList[currentWordIndex];
    
    const cleanPinyin = currentItem.pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const isMatch = (inputVal === cleanPinyin) || 
                    (inputVal === currentItem.pinyin.toLowerCase()) || 
                    (inputVal === currentItem.word); 

    const feedback = document.getElementById('typing-feedback');
    const nextBtn = document.getElementById('next-word-btn');

    if (isMatch) {
        feedback.textContent = " Chính xác!";
        feedback.className = "correct";
        document.getElementById('typing-input').disabled = true;
        nextBtn.classList.remove('hidden');
        nextBtn.focus();
    } else {
        feedback.textContent = " Sai rồi, thử lại nhé!";
        feedback.className = "incorrect";
    }
}

function nextTypingWord() {
    currentWordIndex++;
    saveProgressData({ currentLevel, typingCompleted: Math.max(Number(getProgressData().typingCompleted || 0), currentWordIndex) });
    showTypingWord();
    updateProgressUI();
}

// ----------------------------------------------------
// Chức năng Luyện giao tiếp
// ----------------------------------------------------

function filterDifficulty(level) {
    currentCommFilter = level;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderCommunication();
}

function renderCommunication() {
    const rawList = communicationData[currentLevel] || [];
    const container = document.getElementById('comm-list');

    let filteredList = rawList;
    if (currentCommFilter !== 'all') {
        filteredList = rawList.filter(item => item.difficulty === currentCommFilter);
    }

    if (filteredList.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#888;">Chưa có câu hỏi giao tiếp nào cho cấp độ hoặc bộ lọc này.</p>`;
        return;
    }

    container.innerHTML = filteredList.map((item, index) => {
        let badgeClass = "badge-easy";
        if (item.difficulty === "Trung bình") badgeClass = "badge-medium";
        if (item.difficulty === "Khó") badgeClass = "badge-hard";

        return `
            <div class="comm-card">
                <div class="comm-header">
                    <span class="badge ${badgeClass}">${item.difficulty}</span>
                    <button class="toggle-answer-btn" onclick="toggleAnswer(${index})">${uiIcon("icon-bulb")} Mẫu trả lời</button>
                </div>
                <div class="question-box">
                    <div class="q-hanzi">${uiIcon("icon-question")} ${item.question}</div>
                    <div class="q-pinyin">${uiIcon("icon-pin")} Pinyin: ${item.pinyin}</div>
                    <div class="q-meaning">${uiIcon("icon-chat")} Dịch: ${item.meaning}</div>
                </div>
                <div class="answer-box hidden" id="answer-${index}">
                    <div class="a-hanzi">${uiIcon("icon-chat")} ${item.answer}</div>
                    <div class="q-pinyin">${uiIcon("icon-pin")} Pinyin: ${item.answerPinyin}</div>
                    <div class="q-meaning">${uiIcon("icon-chat")} Dịch: ${item.answerMeaning}</div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleAnswer(index) {
    const answerBox = document.getElementById(`answer-${index}`);
    answerBox.classList.toggle('hidden');
}
// ==========================================
// BỔ SUNG: TÌM KIẾM TỪ VỰNG & BỎ QUA BÀI GÕ
// ==========================================

// 1. Hàm tìm kiếm từ vựng
function searchWords() {
    const keyword = document.getElementById('search-input').value.toLowerCase().trim();
    const currentLevel = document.getElementById('hsk-level').value;
    
    // Lấy danh sách từ của cấp độ hiện tại (thay hskData bằng tên biến chứa dữ liệu của bạn)
    const currentVocabList = hskData[currentLevel] || [];

    const filteredList = currentVocabList.filter(item => 
        item.word.includes(keyword) || 
        (item.pinyin && item.pinyin.toLowerCase().includes(keyword)) || 
        (item.meaning && item.meaning.toLowerCase().includes(keyword))
    );

    // Gọi lại hàm hiển thị danh sách từ của bạn với danh sách đã lọc
    renderWordList(filteredList); 
}

// 2. Hàm bỏ qua từ trong bài tập gõ
function skipTypingWord() {
    const feedbackEl = document.getElementById('typing-feedback');

    // Lấy từ hiện tại đang hiển thị (thay currentTypingWord bằng biến từ hiện tại của bạn)
    if (typeof currentTypingWord !== 'undefined' && currentTypingWord) {
        feedbackEl.style.color = '#e67e22';
        feedbackEl.innerText = `⏭️ Đã bỏ qua. Đáp án: "${currentTypingWord.word}" (${currentTypingWord.pinyin})`;
        
        setTimeout(() => {
            feedbackEl.innerText = '';
            nextTypingWord(); // Gọi hàm chuyển từ tiếp theo sẵn có của bạn
        }, 1200);
    } else {
        nextTypingWord();
    }
}
// Hàm đọc từ tiếng Trung bằng giọng đọc chuẩn (zh-CN)
function speakWord(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Dừng câu đọc trước đó nếu đang đọc
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN'; // Ngôn ngữ Tiếng Trung
        utterance.rate = 0.65;    // Tốc độ đọc vừa phải
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ phát âm!");
    }
}

// Hàm phát âm từ đang xuất hiện ở phần bài tập gõ
function speakCurrentTypingWord() {
    const wordElement = document.getElementById('typing-word');
    if (wordElement && wordElement.innerText) {
        speakWord(wordElement.innerText);
    }
}// Biến toàn cục cho chế độ thi thử
let examQuestions = [];
let currentQuestionIndex = 0;
let examScore = 0;

// Bảng cấu hình số câu hỏi theo HSK
const HSK_QUESTION_COUNT = {
    "1": 90,
    "2": 110,
    "3": 210,
    "4": 320,
    "5": 400,
    "6": 400
};

// Cập nhật thông tin màn hình bắt đầu thi
function updateExamStartInfo() {
    const levelSelect = document.getElementById('hsk-level');
    const selectedLevel = levelSelect ? levelSelect.value : "1";
    const count = HSK_QUESTION_COUNT[selectedLevel] || 30;

    const levelTitle = document.getElementById('exam-level-title');
    const infoText = document.getElementById('exam-info-text');

    if (levelTitle) levelTitle.innerText = selectedLevel;
    if (infoText) infoText.innerText = `Bài thi gồm ${count} câu hỏi trắc nghiệm từ vựng cấp độ HSK ${selectedLevel}.`;
}

// Hàm chuyển chế độ (Cập nhật thêm tính năng đổi số câu)


// Bắt đầu bài thi
function startExam() {
    const levelSelect = document.getElementById('hsk-level');
    const currentLevel = levelSelect ? levelSelect.value : "1";
    const list = hskData[currentLevel];
    const targetCount = HSK_QUESTION_COUNT[currentLevel] || 30;

    if (!list || list.length < 4) {
        alert("Chưa đủ dữ liệu từ vựng để thi thử level này!");
        return;
    }

    // Trộn ngẫu nhiên danh sách từ vựng và lấy số câu tương ứng (30 hoặc 40)
    const shuffledList = [...list].sort(() => 0.5 - Math.random());
    const selectedWords = shuffledList.slice(0, Math.min(targetCount, list.length));

    // Tạo bộ câu hỏi kèm 4 lựa chọn
    examQuestions = selectedWords.map(targetWord => {
        const distractors = list
            .filter(w => w.word !== targetWord.word)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        
        const options = [...distractors, targetWord].sort(() => 0.5 - Math.random());
        return {
            target: targetWord,
            options: options
        };
    });

    currentQuestionIndex = 0;
    examScore = 0;

    document.getElementById('exam-start-screen').classList.add('hidden');
    document.getElementById('exam-result-screen').classList.add('hidden');
    document.getElementById('exam-quiz-screen').classList.remove('hidden');

    renderQuestion();
}

// Hiển thị câu hỏi
function renderQuestion() {
    const q = examQuestions[currentQuestionIndex];
    document.getElementById('quiz-current').innerText = currentQuestionIndex + 1;
    document.getElementById('quiz-total').innerText = examQuestions.length;
    document.getElementById('quiz-score').innerText = examScore;
    
    document.getElementById('quiz-word').innerText = q.target.word;
    document.getElementById('quiz-pinyin').innerText = q.target.pinyin ? `[${q.target.pinyin}]` : '';
    
    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';
    document.getElementById('quiz-feedback').innerText = '';
    document.getElementById('next-quiz-btn').classList.add('hidden');

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerText = opt.meaning;
        btn.onclick = () => checkExamAnswer(opt, q.target, btn);
        optionsDiv.appendChild(btn);
    });
}

// Kiểm tra đáp án
function checkExamAnswer(selected, correct, btn) {
    const buttons = document.querySelectorAll('.quiz-option-btn');
    buttons.forEach(b => b.disabled = true);

    if (selected.word === correct.word) {
        examScore++;
        btn.style.backgroundColor = '#28a745';
        btn.style.color = '#fff';
        document.getElementById('quiz-feedback').innerText = ' Chính xác!';
        document.getElementById('quiz-feedback').style.color = '#28a745';
    } else {
        btn.style.backgroundColor = '#dc3545';
        btn.style.color = '#fff';
        buttons.forEach(b => {
            if (b.innerText === correct.meaning) {
                b.style.backgroundColor = '#28a745';
                b.style.color = '#fff';
            }
        });
        document.getElementById('quiz-feedback').innerText = ` Sai rồi! Đáp án đúng: ${correct.meaning}`;
        document.getElementById('quiz-feedback').style.color = '#dc3545';
    }

    document.getElementById('quiz-score').innerText = examScore;
    document.getElementById('next-quiz-btn').classList.remove('hidden');
}

// Câu hỏi tiếp theo
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < examQuestions.length) {
        renderQuestion();
    } else {
        finishExam();
    }
}

// Kết thúc bài thi
function finishExam() {
    document.getElementById('exam-quiz-screen').classList.add('hidden');
    document.getElementById('exam-result-screen').classList.remove('hidden');
    
    document.getElementById('final-score').innerText = examScore;
    document.getElementById('final-total').innerText = examQuestions.length;

    const percentage = (examScore / examQuestions.length) * 100;
    const examResult = {
        level: String(currentLevel),
        score: examScore,
        total: examQuestions.length,
        percentage: Math.round(percentage),
        completedAt: new Date().toISOString()
    };
    const oldProgress = getProgressData();
    const oldExams = Array.isArray(oldProgress.exams) ? oldProgress.exams : [];
    saveProgressData({
        currentLevel: String(currentLevel),
        exams: [...oldExams.slice(-49), examResult]
    });

    let msg = '';
    if (percentage === 100) msg = uiIcon("icon-spark") + " Xuất sắc! Bạn đã đạt điểm tuyệt đối!";
    else if (percentage >= 80) msg = ' Rất tốt! Bạn nắm rất vững từ vựng cấp độ này.';
    else if (percentage >= 50) msg = ' Đạt yêu cầu! Hãy tiếp tục luyện tập để đạt điểm cao hơn.';
    else msg = ' Cần cố gắng thêm! Hãy xem lại danh sách từ vựng và thử lại nhé.';
    
    document.getElementById('result-message').innerText = msg;
}

// Reset bài thi
function resetExamUI() {
    document.getElementById('exam-start-screen').classList.remove('hidden');
    document.getElementById('exam-quiz-screen').classList.add('hidden');
    document.getElementById('exam-result-screen').classList.add('hidden');
}// 1. Cập nhật hàm chọn cấp độ HSK


// 2. Cập nhật hàm bắt đầu thi thử
// ============================================================
// BỔ SUNG MỚI - KHÔNG XÓA CODE CŨ
// 1. TÌM KIẾM TỪ VỰNG
// 2. ĐỒNG HỒ THI THỬ
// 3. LUYỆN VIẾT + AI CHẤM
// ============================================================


// ============================================================
// 1. TÌM KIẾM TỪ VỰNG
// ============================================================


function changeLevel() {
    const levelSelect = document.getElementById('hsk-level');
    currentLevel = levelSelect ? String(levelSelect.value) : '1';
    saveProgressData({ currentLevel });

    // Đồng bộ TẤT CẢ các mục theo HSK mới.
    // Không chuyển tab tự động: người dùng vẫn ở đúng mục đang mở.
    renderList();
    initTyping();
    renderCommunication();
    updateExamStartInfo();
    resetExamUI();
    updateProgressUI();

    // Luyện viết AI dùng chung dữ liệu HSK hiện tại.
    if (document.getElementById('handwriting-canvas')) {
        initHandwriting();
    }

    // Nếu đang đứng ở Luyện nghe thì tải ngay bộ câu của HSK mới.
    const listeningSection = document.getElementById('listening-mode');
    if (listeningSection && listeningSection.classList.contains('active')) {
        initListening();
    } else {
        const listeningLevel = document.getElementById('listening-level-label');
        if (listeningLevel) listeningLevel.textContent = `HSK ${currentLevel}`;
    }

    const searchInput = document.getElementById('vocab-search');
    const resultCount = document.getElementById('search-result-count');
    if (searchInput) searchInput.value = '';
    if (resultCount) resultCount.textContent = '';
}

function normalizeSearchText(text = "") {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .trim();
}


function filterVocabulary() {

    const searchInput = document.getElementById("vocab-search");
    const container = document.getElementById("word-list");
    const levelSelect = document.getElementById("hsk-level");
    const resultCount = document.getElementById("search-result-count");

    if (!searchInput || !container || !levelSelect) {
        return;
    }

    const keyword = normalizeSearchText(searchInput.value);

    const level = levelSelect.value;

    const vocabulary = hskData[level] || [];

    // Không nhập gì -> hiện toàn bộ danh sách
    if (!keyword) {

        if (typeof renderList === "function") {
            renderList();
        }

        if (resultCount) {
            resultCount.innerText = "";
        }

        return;
    }


    const filteredWords = vocabulary.filter(item => {

        const word = normalizeSearchText(item.word || "");
        const pinyin = normalizeSearchText(item.pinyin || "");
        const meaning = normalizeSearchText(item.meaning || "");

        return (
            word.includes(keyword) ||
            pinyin.includes(keyword) ||
            meaning.includes(keyword)
        );

    });


    // Render kết quả tìm kiếm
    container.innerHTML = filteredWords.map(item => `
        <div class="word-card">
            <div class="word-card-top">
                <div class="hanzi">${item.word || ""}</div>
                <button class="pronounce-btn" type="button"
                    title="Phát âm tiếng Trung"
                    aria-label="Phát âm ${item.word || ""}"
                    onclick='speakWord(${JSON.stringify(item.word || "")})'>${uiIcon("icon-volume")}</button>
            </div>
            <div class="pinyin">${item.pinyin || ""}</div>
            <div class="meaning">${item.meaning || ""}</div>
        </div>
    `).join("");


    if (resultCount) {

        if (filteredWords.length > 0) {

            resultCount.innerText =
                ` Tìm thấy ${filteredWords.length}/${vocabulary.length} từ`;

        } else {

            resultCount.innerText =
                " Không tìm thấy từ phù hợp";

        }
    }
}


// Khi đổi HSK thì tự động xóa tìm kiếm cũ
document.addEventListener("DOMContentLoaded", function () {

    const levelSelect = document.getElementById("hsk-level");

    if (levelSelect) {

        levelSelect.addEventListener("change", function () {

            const searchInput =
                document.getElementById("vocab-search");

            const resultCount =
                document.getElementById("search-result-count");

            if (searchInput) {
                searchInput.value = "";
            }

            if (resultCount) {
                resultCount.innerText = "";
            }

        });

    }

});


// ============================================================
// 2. ĐỒNG HỒ THI THỬ HSK
// ============================================================

// Bạn có thể đổi số phút ở đây
const HSK_EXAM_TIME = {
    "1": 30,
    "2": 30,
    "3": 60,
    "4": 90,
    "5": 120
};


let examTimerInterval = null;

let examTimeLeft = 0;

let examStartTime = 0;


// Cập nhật đồng hồ
function updateExamTimerDisplay() {

    const timer = document.getElementById("exam-timer");

    if (!timer) return;


    let minutes = Math.floor(examTimeLeft / 60);

    let seconds = examTimeLeft % 60;


    timer.innerText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    // Còn dưới 1 phút
    if (examTimeLeft <= 60) {

        timer.style.color = "#dc3545";

    } else {

        timer.style.color = "";

    }

}


// Bắt đầu đếm giờ
function startExamTimer() {

    if (examTimerInterval) {
        clearInterval(examTimerInterval);
    }


    const levelSelect =
        document.getElementById("hsk-level");

    const level =
        levelSelect ? levelSelect.value : "1";


    const minutes =
        HSK_EXAM_TIME[level] || 10;


    examTimeLeft = minutes * 60;

    examStartTime = Date.now();


    updateExamTimerDisplay();


    examTimerInterval = setInterval(function () {

        examTimeLeft--;

        updateExamTimerDisplay();


        if (examTimeLeft <= 0) {

            clearInterval(examTimerInterval);

            examTimerInterval = null;


            // Khóa đáp án
            document
                .querySelectorAll(".quiz-option-btn")
                .forEach(button => {

                    button.disabled = true;

                });


            alert("⏰ Hết thời gian làm bài!");


            if (typeof finishExam === "function") {

                finishExam();

            }

        }

    }, 1000);

}


// Dừng đồng hồ
function stopExamTimer() {

    if (examTimerInterval) {

        clearInterval(examTimerInterval);

        examTimerInterval = null;

    }

}


// ============================================================
// GIỮ HÀM startExam CŨ
// CHỈ BỔ SUNG TIMER VÀO SAU KHI HÀM CŨ CHẠY
// ============================================================

const originalStartExamWithTimer = window.startExam;


if (typeof originalStartExamWithTimer === "function") {

    window.startExam = function () {

        originalStartExamWithTimer.apply(this, arguments);


        const quizScreen =
            document.getElementById("exam-quiz-screen");


        // Chỉ chạy timer nếu màn hình thi thật sự được mở
        if (
            quizScreen &&
            !quizScreen.classList.contains("hidden")
        ) {

            startExamTimer();

        }

    };

}


// ============================================================
// GIỮ HÀM finishExam CŨ
// CHỈ BỔ SUNG DỪNG TIMER
// ============================================================

const originalFinishExamWithTimer = window.finishExam;


if (typeof originalFinishExamWithTimer === "function") {

    window.finishExam = function () {

        stopExamTimer();


        let usedSeconds = 0;


        if (examStartTime) {

            usedSeconds =
                Math.floor(
                    (Date.now() - examStartTime) / 1000
                );

        }


        originalFinishExamWithTimer.apply(this, arguments);


        const result =
            document.getElementById("exam-time-result");


        if (result) {

            const minutes =
                Math.floor(usedSeconds / 60);

            const seconds =
                usedSeconds % 60;


            result.innerText =
                `⏱️ Thời gian làm bài: ${minutes} phút ${seconds} giây`;

        }

    };

}


// ============================================================
// GIỮ resetExamUI CŨ + RESET TIMER
// ============================================================

const originalResetExamUIWithTimer =
    window.resetExamUI;


if (typeof originalResetExamUIWithTimer === "function") {

    window.resetExamUI = function () {

        stopExamTimer();

        originalResetExamUIWithTimer.apply(
            this,
            arguments
        );


        const timer =
            document.getElementById("exam-timer");


        if (timer) {

            timer.innerText = "--:--";

            timer.style.color = "";

        }

    };

}


// ============================================================
// 3. CHẾ ĐỘ LUYỆN VIẾT CHỮ HÁN
// ============================================================

const originalSwitchMode = window.switchMode;

window.switchMode = function(mode) {
    if (mode !== 'handwriting') {
        return originalSwitchMode(mode);
    }

    document.querySelectorAll('main > section, section').forEach(section => {
        section.classList.remove('active');
    });

    const section =
        document.getElementById('handwriting-mode') ||
        document.getElementById('handwriting');

    if (!section) {
        console.warn('Thiếu section #handwriting-mode hoặc #handwriting.');
        return;
    }

    section.classList.add('active');

    if (typeof stopExamTimer === 'function') stopExamTimer();
    initHandwriting();
};

// ============================================================
// ĐẾM KÝ TỰ BÀI VIẾT
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const writingInput =
            document.getElementById("writing-input");


        if (writingInput) {

            writingInput.addEventListener(
                "input",
                function () {

                    const count =
                        document.getElementById(
                            "writing-char-count"
                        );


                    if (count) {

                        count.innerText =
                            writingInput.value.length;

                    }

                }
            );

        }

    }
);


// ============================================================
// XÓA BÀI VIẾT
// ============================================================

function clearWriting() {

    const input =
        document.getElementById("writing-input");


    const result =
        document.getElementById("writing-result");


    const counter =
        document.getElementById("writing-char-count");


    if (input) {

        input.value = "";

        input.focus();

    }


    if (counter) {

        counter.innerText = "0";

    }


    if (result) {

        result.classList.add("hidden");

    }

}


// ============================================================
// CHỐNG HTML ĐƯỢC AI TRẢ VỀ LÀM HỎNG TRANG
// ============================================================

function escapeAIHTML(value = "") {

    return value
        .toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// ============================================================
// HIỂN THỊ KẾT QUẢ AI
// ============================================================

function showWritingResult(data, originalText) {

    const resultBox =
        document.getElementById("writing-result");


    if (!resultBox) return;


    resultBox.classList.remove("hidden");


    document.getElementById(
        "writing-score"
    ).innerText =
        data.score ?? "--";


    document.getElementById(
        "writing-original"
    ).innerHTML =
        `<p>${escapeAIHTML(originalText)}</p>`;


    document.getElementById(
        "writing-corrected"
    ).innerHTML =
        `<p style="font-size:1.2rem;">
            ${escapeAIHTML(
                data.corrected || originalText
            )}
        </p>`;


    let errorsHTML = "";


    if (
        Array.isArray(data.errors) &&
        data.errors.length
    ) {

        errorsHTML = "<ul>";


        data.errors.forEach(error => {

            errorsHTML += `
                <li style="margin-bottom:10px;">
                    <b>
                        ${escapeAIHTML(
                            error.original || ""
                        )}
                    </b>

                    → 

                    <span style="color:#28a745;">
                        ${escapeAIHTML(
                            error.corrected || ""
                        )}
                    </span>

                    <br>

                    <small>
                        ${escapeAIHTML(
                            error.reason || ""
                        )}
                    </small>
                </li>
            `;

        });


        errorsHTML += "</ul>";

    } else {

        errorsHTML =
            "<p> Không phát hiện lỗi đáng kể.</p>";

    }


    document.getElementById(
        "writing-errors"
    ).innerHTML =
        errorsHTML;


    document.getElementById(
        "writing-explanation"
    ).innerHTML = `
        <p>
            ${escapeAIHTML(
                data.explanation ||
                "Không có giải thích."
            )}
        </p>

        ${
            data.vocabularySuggestion
                ? `
                    <p>
                        <b>${uiIcon("icon-book")} Gợi ý từ vựng:</b>
                        ${escapeAIHTML(
                            data.vocabularySuggestion
                        )}
                    </p>
                  `
                : ""
        }
    `;


    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ============================================================
// CHẤM BÀI BẰNG AI
// ============================================================

async function gradeWritingWithAI() {

    const input =
        document.getElementById("writing-input");


    const topicSelect =
        document.getElementById("writing-topic");


    const button =
        document.getElementById("grade-writing-btn");


    const levelSelect =
        document.getElementById("hsk-level");


    if (!input) return;


    const text =
        input.value.trim();


    if (!text) {

        alert(
            "Bạn hãy viết một câu hoặc đoạn tiếng Trung trước nhé!"
        );

        input.focus();

        return;

    }


    const level =
        levelSelect
            ? levelSelect.value
            : "1";


    const topic =
        topicSelect
            ? topicSelect.value
            : "free";


    if (button) {

        button.disabled = true;

        button.innerHTML = uiIcon("icon-robot") + " AI đang chấm...";

    }


    try {

      

        const response = await fetch(
            "/api/grade-writing",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    text: text,

                    hskLevel: level,

                    topic: topic

                })

            }
        );


        if (!response.ok) {

            throw new Error(
                "Không kết nối được máy chủ AI"
            );

        }


        const data =
            await response.json();


        showWritingResult(
            data,
            text
        );

    }
    catch (error) {

        console.error(error);


        // Nếu chưa có server AI
        // trang web vẫn không bị lỗi
        showLocalWritingCheck(
            text,
            level
        );

    }
    finally {

        if (button) {

            button.disabled = false;

            button.innerHTML = uiIcon("icon-robot") + " AI chấm bài";

        }

    }

}


// ============================================================
// CHẾ ĐỘ DỰ PHÒNG
// KHI CHƯA KẾT NỐI AI SERVER
// ============================================================

function showLocalWritingCheck(
    text,
    level
) {

    const chineseCharacters =
        text.match(/[\u3400-\u9FFF]/g) || [];


    const vocabulary =
        hskData[level] || [];


    const wordsUsed =
        vocabulary.filter(item =>
            text.includes(item.word)
        );


    let score = 50;


    // Có chữ Hán
    if (chineseCharacters.length >= 5) {
        score += 10;
    }


    if (chineseCharacters.length >= 10) {
        score += 10;
    }


    // Có sử dụng từ HSK
    if (wordsUsed.length >= 2) {
        score += 10;
    }


    if (wordsUsed.length >= 4) {
        score += 10;
    }


    score =
        Math.min(score, 90);


    showWritingResult(
        {
            score: score,

            corrected: text,

            errors: [],

            explanation:
                "",

            vocabularySuggestion:
                wordsUsed.length
                    ? "Các từ HSK đã dùng: " +
                      wordsUsed
                          .map(item => item.word)
                          .join("、")
                    : "Hãy thử sử dụng thêm từ vựng HSK " +
                      level +
                      " trong câu."

        },

        text
    );

}
// =====================================================
// LƯU TIẾN TRÌNH ONLINE THEO TÀI KHOẢN FIREBASE
// =====================================================
let onlineProgressCache = {};

function getLoggedUserForProgress() {
    const user = window.ghCurrentUser || (window.ghAuth && window.ghAuth.getUser ? window.ghAuth.getUser() : null);
    if (!user) return null;
    return {
        uid: user.uid,
        email: user.email || '',
        username: window.ghUserProfile?.username || user.displayName || user.email || 'Tài khoản'
    };
}

function getProgressData() {
    if (window.ghAuth?.getProgress) {
        onlineProgressCache = window.ghAuth.getProgress() || {};
    }
    return { ...onlineProgressCache };
}

function saveProgressData(patch) {
    if (!window.ghAuth?.saveProgress) return;
    onlineProgressCache = { ...onlineProgressCache, ...(patch || {}), updatedAt: new Date().toISOString() };
    window.ghAuth.saveProgress(patch || {}).catch(error => {
        console.warn('Không thể lưu tiến trình online:', error);
    });
}

function updateProgressUI() {
    const p = getProgressData();
    const user = getLoggedUserForProgress();
    const level = String(p.currentLevel || currentLevel || '1');
    const total = (hskData[level] || []).length;
    const typed = Math.min(Number(p.typingCompleted || 0), total);
    const hwIndex = p.handwriting && String(p.handwriting.level) === level ? Number(p.handwriting.index || 0) : 0;
    const hwPercent = total ? Math.min(100, Math.round(((hwIndex + 1) / total) * 100)) : 0;
    const typingPercent = total ? Math.min(100, Math.round((typed / total) * 100)) : 0;
    const exams = Array.isArray(p.exams) ? p.exams : [];

    const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    set('progress-account', user ? (user.username || user.email || 'Tài khoản') : 'Chưa đăng nhập');
    set('progress-level', `HSK ${level}`);
    set('progress-level-detail', `${total} từ trong cấp độ này`);
    set('progress-typing', `${typingPercent}%`);
    set('progress-typing-detail', `${typed} / ${total} từ đã hoàn thành`);
    set('progress-handwriting', `${hwPercent}%`);
    set('progress-handwriting-detail', total ? `Đang ở từ ${Math.min(hwIndex + 1, total)} / ${total}` : 'Chưa có dữ liệu');
    set('progress-exam', `${exams.length} bài`);
    const lastExam = exams[exams.length - 1];
    set('progress-exam-detail', lastExam ? `${lastExam.score}/${lastExam.total} • HSK ${lastExam.level}` : 'Chưa có kết quả');
    const listen = p.listening || {};
    const listenPct = Math.min(100, Math.max(0, Number(listen.pct || 0)));
    set('progress-listening', `${listenPct}%`);
    set('progress-listening-detail', `${Number(listen.answered || 0)} câu đã làm • ${Number(listen.correct || 0)} đúng`);
    set('progress-total-label', `${total} từ HSK ${level}`);
    const fill = document.getElementById('progress-bar-fill');
    if (fill) fill.style.width = `${Math.max(typingPercent, hwPercent)}%`;
    set('progress-summary', total ? `Bạn đang học HSK ${level}. Bài gõ đã hoàn thành ${typed}/${total}; luyện viết đang ở ${Math.min(hwIndex + 1, total)}/${total}; luyện nghe đã làm ${Number(listen.answered || 0)} câu.` : 'Chưa có dữ liệu học tập.');
}

async function resetMyProgress() {
    if (!confirm('Xóa toàn bộ tiến trình học online của tài khoản này?')) return;
    if (!window.ghAuth?.deleteProgress) return;
    const ok = await window.ghAuth.deleteProgress();
    if (!ok) { alert('Không thể xóa tiến trình online. Hãy kiểm tra kết nối.'); return; }
    onlineProgressCache = {};
    currentLevel = '1';
    const select = document.getElementById('hsk-level');
    if (select) select.value = '1';
    renderList(); initTyping(); renderCommunication(); updateProgressUI();
    alert('Đã xóa tiến trình online của tài khoản này.');
}

// =====================================================
// LUYỆN VIẾT CHỮ HÁN
// =====================================================

let handwritingIndex = 0;
let handwritingWords = [];
let handwritingDrawing = false;
let handwritingReady = false;
let handwritingInkCanvas = null;
let handwritingInkCtx = null;
let handwritingMaskCanvas = null;
let handwritingMaskCtx = null;

function getHandwritingProgress() {
    return getProgressData();
}

function saveHandwritingProgress() {
    saveProgressData({
        currentLevel,
        handwriting: {
            level: currentLevel,
            index: handwritingIndex
        }
    });
    updateProgressUI();
}

function setHandwritingText(hanzi, pinyin, meaning) {
    const a = document.getElementById('handwriting-hanzi');
    const b = document.getElementById('handwriting-pinyin');
    const c = document.getElementById('handwriting-meaning');
    const d = document.getElementById('trace-character');
    const e = document.getElementById('handwriting-level');
    const f = document.getElementById('hw-progress');

    if (a) a.textContent = hanzi;
    if (b) b.textContent = pinyin;
    if (c) c.textContent = meaning;
    if (d) d.textContent = hanzi;
    if (typeof buildHandwritingMask === 'function') buildHandwritingMask(hanzi);
    if (e) e.textContent = `HSK ${currentLevel}`;
    if (f) f.textContent = handwritingWords.length
        ? `${handwritingIndex + 1} / ${handwritingWords.length}`
        : '0 / 0';

    // Cập nhật hoạt ảnh thứ tự nét theo chữ hiện tại.
    if (typeof window.updateStrokeOrderAnimation === 'function') {
        window.updateStrokeOrderAnimation();
    }
}

function initHandwriting() {
    const canvas = document.getElementById('handwriting-canvas');
    if (!canvas) return;

    handwritingWords = hskData[currentLevel] || [];

    if (!handwritingWords.length) {
        setHandwritingText(
            '暂无',
            '',
            `Chưa có dữ liệu HSK ${currentLevel}`
        );
        return;
    }

    const progress = getHandwritingProgress();

    if (
        progress.handwriting &&
        String(progress.handwriting.level) === String(currentLevel)
    ) {
        handwritingIndex = Number(progress.handwriting.index) || 0;
    } else {
        handwritingIndex = 0;
    }

    handwritingIndex =
        Math.max(0, Math.min(handwritingIndex, handwritingWords.length - 1));

    setupHandwritingCanvas();
    showHandwritingWord();
}

function showHandwritingWord() {
    if (!handwritingWords.length) return;

    const item = handwritingWords[handwritingIndex] || {};
    const hanzi = item.word || item.hanzi || item.chinese || '';
    const pinyin = item.pinyin || '';
    const meaning = item.meaning || item.vietnamese || item.vi || '';

    setHandwritingText(hanzi, pinyin, meaning);
    clearHandwritingCanvas();
    saveHandwritingProgress();
}

function setupHandwritingCanvas() {
    const canvas = document.getElementById('handwriting-canvas');
    if (!canvas || handwritingReady) return;

    handwritingReady = true;
    const ctx = canvas.getContext('2d');
    let lastPoint = null;
    let traceStrokeIndex = 0;
    let traceProgress = 0;
    let tracePoints = [];
    let tracingActive = false;

    const inkCanvas = document.createElement('canvas');
    inkCanvas.width = canvas.width;
    inkCanvas.height = canvas.height;
    const inkCtx = inkCanvas.getContext('2d');
    handwritingInkCanvas = inkCanvas;
    handwritingInkCtx = inkCtx;

    inkCtx.lineWidth = 22;
    inkCtx.lineCap = 'round';
    inkCtx.lineJoin = 'round';
    inkCtx.strokeStyle = 'rgba(25, 30, 36, 0.78)';

    // Canvas mask vẫn được giữ để tương thích với phần giao diện cũ.
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = canvas.width;
    maskCanvas.height = canvas.height;
    handwritingMaskCanvas = maskCanvas;
    handwritingMaskCtx = maskCanvas.getContext('2d');

    const pos = e => {
        const rect = canvas.getBoundingClientRect();
        const p = e.touches ? e.touches[0] : e;
        return {
            x: (p.clientX - rect.left) * canvas.width / rect.width,
            y: (p.clientY - rect.top) * canvas.height / rect.height
        };
    };

    const getTrace = () => {
        if (typeof window.getHandwritingTraceData !== 'function') return null;
        return window.getHandwritingTraceData();
    };

    const distance = (a,b) => Math.hypot(a.x-b.x, a.y-b.y);

    const nearestOnPolyline = (point, line) => {
        let best = null;
        for (let i=0; i<line.length-1; i++) {
            const a=line[i], b=line[i+1];
            const vx=b.x-a.x, vy=b.y-a.y;
            const len2=vx*vx+vy*vy || 1;
            let t=((point.x-a.x)*vx+(point.y-a.y)*vy)/len2;
            t=Math.max(0,Math.min(1,t));
            const q={x:a.x+t*vx,y:a.y+t*vy};
            const d=distance(point,q);
            if(!best || d<best.distance) best={point:q,distance:d,index:i,t};
        }
        return best;
    };

    const normalizeMedian = (median) => {
        if (!Array.isArray(median)) return [];
        return median.map(p => ({
            x: Number(p[0]) * canvas.width / 1024,
            y: (1024 - Number(p[1])) * canvas.height / 1024
        })).filter(p => Number.isFinite(p.x) && Number.isFinite(p.y));
    };

    const getCurrentStroke = () => {
        const data=getTrace();
        if (!data || !Array.isArray(data.medians)) return null;
        const line=normalizeMedian(data.medians[traceStrokeIndex]);
        return line.length>=2 ? line : null;
    };

    const drawGuideAndInk = () => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const guide=getCurrentStroke();
        if (guide && guide.length>1) {
            ctx.save();
            ctx.strokeStyle='rgba(9,132,227,.32)';
            ctx.lineWidth=10;
            ctx.lineCap='round';
            ctx.lineJoin='round';
            ctx.setLineDash([10,10]);
            ctx.beginPath();
            guide.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
            ctx.stroke();
            ctx.setLineDash([]);
            // Mũi tên nhỏ ở giữa nét để người mới biết hướng đi.
            const mid=guide[Math.floor(guide.length/2)];
            const next=guide[Math.min(guide.length-1,Math.floor(guide.length/2)+1)];
            if(mid && next){
                const ang=Math.atan2(next.y-mid.y,next.x-mid.x);
                const size=16;
                ctx.fillStyle='rgba(9,132,227,.58)';
                ctx.beginPath();
                ctx.moveTo(next.x,next.y);
                ctx.lineTo(next.x-size*Math.cos(ang-Math.PI/6),next.y-size*Math.sin(ang-Math.PI/6));
                ctx.lineTo(next.x-size*Math.cos(ang+Math.PI/6),next.y-size*Math.sin(ang+Math.PI/6));
                ctx.closePath(); ctx.fill();
            }
            ctx.restore();
        }
        if (!tracePoints.length) return;
        ctx.save();
        ctx.strokeStyle='rgba(25,30,36,.78)';
        ctx.lineWidth=22;
        ctx.lineCap='round';
        ctx.lineJoin='round';
        ctx.beginPath();
        tracePoints.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
        ctx.stroke();
        ctx.restore();
    };
    const drawUserInk = drawGuideAndInk;

    const resetTrace = () => {
        traceStrokeIndex=0;
        traceProgress=0;
        tracePoints=[];
        tracingActive=false;
        lastPoint=null;
        drawUserInk();
        if (typeof window.updateTraceGuide==='function') window.updateTraceGuide();
    };

    window.resetHandwritingTrace=resetTrace;

    const start = e => {
        e.preventDefault();
        const trace=getTrace();
        const line=getCurrentStroke();
        if (!trace || !line) return;

        const p=pos(e);
        const startPoint=line[0];
        const tolerance=Math.max(42,canvas.width*0.075);
        if (distance(p,startPoint)>tolerance) {
            if (typeof window.showTraceFeedback==='function') window.showTraceFeedback(uiIcon("icon-alert","ui-icon-xl") + " Hãy bắt đầu đúng tại đầu nét đang sáng.");
            return;
        }

        tracingActive=true;
        lastPoint=startPoint;
        traceProgress=0;
        tracePoints=[startPoint];
        drawUserInk();
        if (typeof window.showTraceFeedback==='function') window.showTraceFeedback(`${uiIcon("icon-pen")} Nét ${traceStrokeIndex+1}: đi đúng hướng mũi tên.`);
    };

    const draw = e => {
        if (!tracingActive) return;
        e.preventDefault();
        const line=getCurrentStroke();
        if (!line) return;
        const p=pos(e);
        const near=nearestOnPolyline(p,line);
        const tolerance=Math.max(38,canvas.width*0.065);

        // Không cho vẽ ngoằn ngoèo: điểm nhập phải bám sát đúng tâm của nét hiện tại.
        if (!near || near.distance>tolerance) {
            if (typeof window.showTraceFeedback==='function') window.showTraceFeedback('↔️ Hãy bám sát nét mẫu và đi theo hướng mũi tên.');
            return;
        }

        const targetProgress=near.index+near.t;
        // Không cho kéo ngược về phía đầu nét.
        if (targetProgress+0.35 < traceProgress) return;
        if (targetProgress < traceProgress) return;

        traceProgress=targetProgress;
        lastPoint=near.point;
        tracePoints.push(near.point);
        drawUserInk();

        if (traceProgress >= line.length-1.05) {
            tracingActive=false;
            traceStrokeIndex++;
            traceProgress=0;
            tracePoints=[];
            drawUserInk();

            const data=getTrace();
            const total=data && Array.isArray(data.medians) ? data.medians.length : 0;
            if (traceStrokeIndex>=total) {
                if (typeof window.showTraceFeedback==='function') window.showTraceFeedback(' Hoàn thành! Bạn đã đi đủ và đúng thứ tự các nét.');
                if (typeof window.markHandwritingTraceComplete==='function') window.markHandwritingTraceComplete();
                traceStrokeIndex=0;
            } else {
                if (typeof window.showTraceFeedback==='function') window.showTraceFeedback(` Đúng! Sang nét ${traceStrokeIndex+1}/${total}.`);
                if (typeof window.updateTraceGuide==='function') window.updateTraceGuide();
            }
        }
    };

    const stop = () => {
        if (!tracingActive) return;
        tracingActive=false;
        lastPoint=null;
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stop);
    canvas.addEventListener('mouseleave', stop);
    canvas.addEventListener('touchstart', start, { passive:false });
    canvas.addEventListener('touchmove', draw, { passive:false });
    canvas.addEventListener('touchend', stop);
    canvas.addEventListener('touchcancel', stop);

    window.renderHandwritingInk = drawUserInk;
    window.getHandwritingTraceState = () => ({ traceStrokeIndex, traceProgress });
}

function buildHandwritingMask(hanzi) {
    if (!handwritingMaskCanvas || !handwritingMaskCtx) return;

    const c = handwritingMaskCanvas;
    const ctx = handwritingMaskCtx;
    ctx.clearRect(0, 0, c.width, c.height);

    if (!hanzi) return;

    const chars = String(hanzi).trim();
    const count = Math.max(1, [...chars].length);
    let fontSize = 500;

    if (count === 2) fontSize = 330;
    else if (count === 3) fontSize = 250;
    else if (count >= 4) fontSize = 190;

    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `700 ${fontSize}px "Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif`;
    ctx.fillText(chars, c.width / 2, c.height / 2);
}

function clearHandwritingCanvas() {
    if (typeof window.resetHandwritingTrace === 'function') window.resetHandwritingTrace();
    const canvas = document.getElementById('handwriting-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (handwritingInkCtx && handwritingInkCanvas) {
        handwritingInkCtx.clearRect(0, 0, handwritingInkCanvas.width, handwritingInkCanvas.height);
    }

    if (typeof window.renderHandwritingInk === 'function') {
        window.renderHandwritingInk();
    }
}

function nextHandwritingWord(step) {
    if (!handwritingWords.length) return;
    handwritingIndex =
        (handwritingIndex + step + handwritingWords.length) %
        handwritingWords.length;
    showHandwritingWord();
}

document.addEventListener('DOMContentLoaded', () => {
    const prev = document.getElementById('hw-prev');
    const next = document.getElementById('hw-next');
    const clear = document.getElementById('hw-clear');
    const random = document.getElementById('hw-random');
    const trace = document.getElementById('hw-toggle-trace');

    if (prev) prev.onclick = () => nextHandwritingWord(-1);
    if (next) next.onclick = () => nextHandwritingWord(1);
    if (clear) clear.onclick = clearHandwritingCanvas;

    if (random) {
        random.onclick = () => {
            if (!handwritingWords.length) return;
            handwritingIndex =
                Math.floor(Math.random() * handwritingWords.length);
            showHandwritingWord();
        };
    }

    if (trace) {
        trace.onclick = () => {
            const el = document.getElementById('trace-character');
            if (el) {
                el.style.display =
                    el.style.display === 'none' ? 'block' : 'none';
            }
        };
    }
});


// ============================================================
// NÂNG CẤP LUYỆN VIẾT - MOBILE + PHÁT ÂM
// ============================================================
function speakHandwritingWord() {
    const item = handwritingWords[handwritingIndex] || {};
    const word = item.word || item.hanzi || item.chinese || '';
    if (!word || !('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'zh-CN';
    u.rate = 0.72;
    u.pitch = 1;
    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => /^zh-CN/i.test(v.lang));
    if (voice) u.voice = voice;
    speechSynthesis.speak(u);
}

// Khi đổi level, nếu đang ở tab luyện viết thì cập nhật ngay chữ mẫu.
(function patchHandwritingLevelChange(){
    document.addEventListener('DOMContentLoaded', function(){
        const select = document.getElementById('hsk-level');
        if (!select) return;
        select.addEventListener('change', function(){
            const active = document.getElementById('handwriting-mode');
            if (active && active.classList.contains('active')) {
                handwritingReady = false;
                initHandwriting();
            }
        });
    });
})();

// ============================================================
// HOẠT ẢNH THỨ TỰ NÉT HÁN TỰ - ONLINE + OFFLINE
// Không phụ thuộc Hanzi Writer/CDN để chạy giao diện animation.
// Dữ liệu nét được tải online lần đầu và lưu IndexedDB để dùng offline.
// ============================================================
(function initStrokeOrderAnimation(){
    let strokeChars = [];
    let strokeCharIndex = 0;
    let strokeSpeed = 1.25;
    let currentData = null;
    let currentChar = '';
    let playing = false;
    let runToken = 0;

    const DB_NAME = 'tiengtrung-stroke-cache';
    const DB_VERSION = 1;
    const STORE = 'characters';
    const CDN = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/';

    function getCurrentHanzi(){
        const item = handwritingWords[handwritingIndex] || {};
        return String(item.word || item.hanzi || item.chinese || '').trim();
    }
    function host(){ return document.getElementById('stroke-animation-character'); }
    function setText(t){ const e=document.getElementById('stroke-step-text'); if(e)e.textContent=t; }
    function setCount(n){ const e=document.getElementById('stroke-count-badge'); if(e)e.textContent=`${n||0} nét`; }

    function openDB(){
        return new Promise((resolve,reject)=>{
            if(!('indexedDB' in window)) return resolve(null);
            const req=indexedDB.open(DB_NAME,DB_VERSION);
            req.onupgradeneeded=()=>{ if(!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE,{keyPath:'char'}); };
            req.onsuccess=()=>resolve(req.result);
            req.onerror=()=>resolve(null);
        });
    }
    async function cacheGet(char){
        const db=await openDB(); if(!db)return null;
        return new Promise(resolve=>{
            const tx=db.transaction(STORE,'readonly'); const req=tx.objectStore(STORE).get(char);
            req.onsuccess=()=>resolve(req.result?.data||null); req.onerror=()=>resolve(null);
        });
    }
    async function cachePut(char,data){
        const db=await openDB(); if(!db)return;
        try { const tx=db.transaction(STORE,'readwrite'); tx.objectStore(STORE).put({char,data,savedAt:Date.now()}); } catch(e){}
    }
    async function loadStrokeData(char){
        const local=await cacheGet(char);
        if(local) return {data:local,source:'offline-cache'};
        if(!navigator.onLine) throw new Error('offline-no-cache');
        const url=CDN+encodeURIComponent(char)+'.json';
        const res=await fetch(url,{cache:'force-cache'});
        if(!res.ok) throw new Error('stroke-http-'+res.status);
        const data=await res.json();
        await cachePut(char,data);
        return {data,source:'online'};
    }

    function clear(){
        runToken++;
        playing=false; currentData=null; currentChar='';
        const h=host(); if(h)h.innerHTML='';
    }

    function renderSVG(data, visibleCount){
        const h=host(); if(!h)return;
        h.innerHTML='';
        const strokes=Array.isArray(data?.strokes)?data.strokes:[];
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('viewBox','0 0 1024 1024');
        svg.setAttribute('width','200'); svg.setAttribute('height','170');
        svg.setAttribute('preserveAspectRatio','xMidYMid meet');
        svg.classList.add('stroke-local-svg');
        const outline=document.createElementNS('http://www.w3.org/2000/svg','rect');
        outline.setAttribute('x','30'); outline.setAttribute('y','30'); outline.setAttribute('width','964'); outline.setAttribute('height','964');
        outline.setAttribute('rx','40'); outline.setAttribute('fill','none'); outline.setAttribute('stroke','rgba(9,132,227,.10)'); outline.setAttribute('stroke-width','10');
        svg.appendChild(outline);

        // hanzi-writer-data dùng hệ tọa độ trục Y hướng lên.
        // SVG mặc định có trục Y hướng xuống, nên phải lật dữ liệu theo chiều dọc
        // để chữ Hán không bị đảo ngược khi render trực tiếp.
        const glyphGroup=document.createElementNS('http://www.w3.org/2000/svg','g');
        glyphGroup.setAttribute('transform','translate(0 1024) scale(1 -1)');
        strokes.forEach((d,i)=>{
            const path=document.createElementNS('http://www.w3.org/2000/svg','path');
            path.setAttribute('d',d); path.setAttribute('class','stroke-local-path');
            path.style.opacity=i<visibleCount?'1':'0';
            path.style.transformOrigin='50% 50%';
            glyphGroup.appendChild(path);
        });
        svg.appendChild(glyphGroup);
        h.appendChild(svg);
    }

    function drawFull(){ renderSVG(currentData,currentData?.strokes?.length||0); }

    async function renderCharacter(char, autoPlay){
        clear();
        if(!char){setCount(0);setText('Chưa có chữ để hướng dẫn.');return;}
        currentChar=char;
        setText(`⏳ Đang tải dữ liệu nét chữ “${char}”…`);
        try{
            const result=await loadStrokeData(char);
            if(char!==currentChar)return;
            currentData=result.data;
            const count=Array.isArray(currentData.strokes)?currentData.strokes.length:0;
            setCount(count); drawFull();
            setText(result.source==='online'
                ? `${uiIcon("icon-globe")} Đã tải và lưu chữ “${char}”. Có ${count} nét.`
                : `${uiIcon("icon-package")} Chế độ offline: dùng dữ liệu đã lưu. Chữ “${char}” có ${count} nét.`);
            if(autoPlay) play();
        }catch(err){
            setCount(0);
            if(err.message==='offline-no-cache') setText(`${uiIcon("icon-x")} Chưa có dữ liệu offline cho “${char}”. Hãy mở chữ này một lần khi có mạng để lưu lại.`);
            else setText(`${uiIcon("icon-alert","ui-icon-xl")} Không tải được dữ liệu nét chữ “${char}”.`);
        }
    }

    async function play(){
        if(!currentData)return;
        const strokes=currentData.strokes||[]; if(!strokes.length)return;
        const token=++runToken; playing=true;
        for(let i=1;i<=strokes.length;i++){
            if(token!==runToken)return;
            renderSVG(currentData,i);
            setText(`▶ Đang hướng dẫn “${currentChar}”: nét ${i}/${strokes.length}`);
            await new Promise(r=>setTimeout(r,Math.max(120,520/strokeSpeed)));
        }
        if(token===runToken){playing=false;setText(` Đã xem đủ ${strokes.length} nét của “${currentChar}”. Hãy thử tự viết lại.`);}
    }

    function replay(){
        const text=getCurrentHanzi(); strokeChars=[...text].filter(c=>/\p{Script=Han}/u.test(c)); strokeCharIndex=0;
        if(!strokeChars.length){setText('Chưa có chữ Hán để hướng dẫn.');return;}
        renderCharacter(strokeChars[0],true);
    }
    function skip(){ runToken++; playing=false; if(currentData){drawFull();setText(`${uiIcon("icon-eye")} Đây là chữ hoàn chỉnh “${currentChar}”. Nhấn “▶ Bắt đầu” để xem từng nét.`);} }
    // API dùng chung với bảng luyện viết: cung cấp medians (đường tâm của từng nét)
    // để người học phải đi đúng hướng và đúng thứ tự, không thể vẽ nguệch ngoạc tự do.
    window.getHandwritingTraceData = () => currentData;
    window.updateTraceGuide = () => {
        const state = typeof window.getHandwritingTraceState === 'function'
            ? window.getHandwritingTraceState() : { traceStrokeIndex: 0 };
        const data = currentData;
        if (!data || !Array.isArray(data.medians)) return;
        const total = data.medians.length;
        const n = Math.min(state.traceStrokeIndex + 1, total);
        setText(`${uiIcon("icon-pen")} Nét ${n}/${total}: đặt bút vào đầu nét và đi theo hướng mẫu.`);
    };
    window.showTraceFeedback = (message) => {
        const e=document.getElementById('stroke-step-text');
        if(e) e.textContent=message;
    };
    window.markHandwritingTraceComplete = () => {
        const e=document.getElementById('stroke-step-text');
        if(e) e.innerHTML=uiIcon("icon-spark") + " Hoàn thành chữ! Hãy bấm Xóa và tự viết lại để ghi nhớ.";
    };

    function update(){
        if (typeof window.resetHandwritingTrace === 'function') window.resetHandwritingTrace();
        const text=getCurrentHanzi(); strokeChars=[...text].filter(c=>/\p{Script=Han}/u.test(c)); strokeCharIndex=0;
        if(!strokeChars.length){clear();setCount(0);setText('Chưa có chữ để hướng dẫn.');return;}
        renderCharacter(strokeChars[0],false);
    }

    function startWrongListening(){ const wrong=getWrongListening(); if(!wrong.length){ const f=document.getElementById('listening-feedback'); if(f)f.textContent='Bạn chưa có câu sai để ôn.'; return; } if('speechSynthesis' in window){try{speechSynthesis.cancel();}catch(e){}} listeningQuestions=wrong.map(q=>{const pool=[...LISTENING_BANK.filter(x=>x.audio!==q.audio),...wrong.filter(x=>x.audio!==q.audio)]; const opts=[q.audio,...pool.sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.audio)]; const unique=[...new Set(opts)].slice(0,4).sort(()=>Math.random()-0.5); return {...q,level:'Ôn sai',options:unique,correct:unique.indexOf(q.audio)}; }).sort(()=>Math.random()-0.5); listeningIndex=0; listeningScore=0; listeningAnswered=false; listeningSessionAnswered=0; listeningSessionCorrect=0; listeningWrongMode=true; const cont=document.getElementById('listening-continue'); if(cont)cont.hidden=true; renderListeningQuestion(); const p=document.getElementById('listening-wrong-panel'); if(p)p.hidden=false; }
function clearWrongListening(){ localStorage.removeItem(LISTENING_WRONG_KEY); updateWrongListeningUI(); const p=document.getElementById('listening-wrong-panel'); if(p)p.hidden=false; }
document.addEventListener('DOMContentLoaded',()=>{
        const replayBtn=document.getElementById('stroke-replay');
        const speedBtn=document.getElementById('stroke-speed');
        const skipBtn=document.getElementById('stroke-skip');
        if(replayBtn)replayBtn.addEventListener('click',replay);
        if(skipBtn)skipBtn.addEventListener('click',skip);
        if(speedBtn)speedBtn.addEventListener('click',()=>{
            strokeSpeed=strokeSpeed===1.25?2.1:1.25;
            speedBtn.innerHTML=strokeSpeed===2.1 ? uiIcon("icon-spark")+" Tốc độ: Nhanh" : uiIcon("icon-spark")+" Tốc độ: Chậm";
        });
        update();
    });
    window.updateStrokeOrderAnimation=update;
})();



// ============================================================
// LUYỆN NGHE PHẢN XẠ - CHỌN CÂU ĐÚNG
// Không cần file âm thanh ngoài: dùng SpeechSynthesis của trình duyệt,
// vì vậy có thể chạy offline nếu thiết bị có giọng zh-CN/zh-TW.
// ============================================================
const LISTENING_BANK = [
  {
    "level": 1,
    "audio": "你好。",
    "pinyin": "Nǐ hǎo.",
    "options": [
      "我今天不太忙。",
      "你好。",
      "对不起。",
      "我很好，谢谢。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "早上好。",
    "pinyin": "Zǎoshang hǎo.",
    "options": [
      "你现在有空吗？",
      "早上好。",
      "你叫什么名字？",
      "没关系。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "晚上好。",
    "pinyin": "Wǎnshang hǎo.",
    "options": [
      "晚上好。",
      "请坐。",
      "我现在有空。",
      "我叫李明。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "再见。",
    "pinyin": "Zàijiàn.",
    "options": [
      "你几点起床？",
      "再见。",
      "请进。",
      "你是哪国人？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "明天见。",
    "pinyin": "Míngtiān jiàn.",
    "options": [
      "我是越南人。",
      "明天见。",
      "请问，洗手间在哪里？",
      "我七点起床。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "谢谢。",
    "pinyin": "Xièxie.",
    "options": [
      "谢谢。",
      "你好吗？",
      "你是学生吗？",
      "你几点睡觉？"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "不客气。",
    "pinyin": "Bú kèqi.",
    "options": [
      "我很好，谢谢。",
      "我十一点睡觉。",
      "不客气。",
      "我是学生。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "对不起。",
    "pinyin": "Duìbuqǐ.",
    "options": [
      "你吃饭了吗？",
      "你今天忙吗？",
      "你叫什么名字？",
      "对不起。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "没关系。",
    "pinyin": "Méi guānxi.",
    "options": [
      "我今天不太忙。",
      "我还没吃饭。",
      "我叫李明。",
      "没关系。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "请坐。",
    "pinyin": "Qǐng zuò.",
    "options": [
      "你是哪国人？",
      "你现在有空吗？",
      "我吃过了。",
      "请坐。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "请进。",
    "pinyin": "Qǐng jìn.",
    "options": [
      "我是越南人。",
      "请进。",
      "你想吃什么？",
      "我现在有空。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "请问，洗手间在哪里？",
    "pinyin": "Qǐngwèn, xǐshǒujiān zài nǎlǐ?",
    "options": [
      "你是学生吗？",
      "我想吃面条。",
      "你几点起床？",
      "请问，洗手间在哪里？"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "你好吗？",
    "pinyin": "Nǐ hǎo ma?",
    "options": [
      "我喜欢吃米饭。",
      "你好吗？",
      "我是学生。",
      "我七点起床。"
    ],
    "correct": 1,
    "meaning": "Bạn khỏe không?"
  },
  {
    "level": 1,
    "audio": "我很好，谢谢。",
    "pinyin": "Wǒ hěn hǎo, xièxie.",
    "options": [
      "你几点睡觉？",
      "你今天忙吗？",
      "你喜欢喝茶吗？",
      "我很好，谢谢。"
    ],
    "correct": 3,
    "meaning": "Tôi khỏe, cảm ơn."
  },
  {
    "level": 1,
    "audio": "你叫什么名字？",
    "pinyin": "Nǐ jiào shénme míngzi?",
    "options": [
      "我十一点睡觉。",
      "你叫什么名字？",
      "我喜欢喝咖啡。",
      "我今天不太忙。"
    ],
    "correct": 1,
    "meaning": "Bạn tên gì?"
  },
  {
    "level": 1,
    "audio": "我叫李明。",
    "pinyin": "Wǒ jiào Lǐ Míng.",
    "options": [
      "请给我一杯水。",
      "你吃饭了吗？",
      "我叫李明。",
      "你现在有空吗？"
    ],
    "correct": 2,
    "meaning": "Tôi tên là Lý Minh。"
  },
  {
    "level": 1,
    "audio": "你是哪国人？",
    "pinyin": "Nǐ shì nǎ guó rén?",
    "options": [
      "我还没吃饭。",
      "再来一杯，谢谢。",
      "你是哪国人？",
      "我现在有空。"
    ],
    "correct": 2,
    "meaning": "Bạn là người nước nào?"
  },
  {
    "level": 1,
    "audio": "我是越南人。",
    "pinyin": "Wǒ shì Yuènán rén.",
    "options": [
      "这个多少钱？",
      "你几点起床？",
      "我是越南人。",
      "我吃过了。"
    ],
    "correct": 2,
    "meaning": "Tôi là người Việt Nam。"
  },
  {
    "level": 1,
    "audio": "你是学生吗？",
    "pinyin": "Nǐ shì xuésheng ma?",
    "options": [
      "你想吃什么？",
      "我七点起床。",
      "你是学生吗？",
      "太贵了。"
    ],
    "correct": 2,
    "meaning": "Bạn là học sinh/sinh viên phải không?"
  },
  {
    "level": 1,
    "audio": "我是学生。",
    "pinyin": "Wǒ shì xuésheng.",
    "options": [
      "可以便宜一点吗？",
      "我想吃面条。",
      "我是学生。",
      "你几点睡觉？"
    ],
    "correct": 2,
    "meaning": "Tôi là học sinh/sinh viên。"
  },
  {
    "level": 1,
    "audio": "你今天忙吗？",
    "pinyin": "Nǐ jīntiān máng ma?",
    "options": [
      "你今天忙吗？",
      "我要买这个。",
      "我喜欢吃米饭。",
      "我十一点睡觉。"
    ],
    "correct": 0,
    "meaning": "Hôm nay bạn có bận không?"
  },
  {
    "level": 1,
    "audio": "我今天不太忙。",
    "pinyin": "Wǒ jīntiān bú tài máng.",
    "options": [
      "我不要这个。",
      "你吃饭了吗？",
      "我今天不太忙。",
      "你喜欢喝茶吗？"
    ],
    "correct": 2,
    "meaning": "Hôm nay tôi không bận lắm."
  },
  {
    "level": 1,
    "audio": "你现在有空吗？",
    "pinyin": "Nǐ xiànzài yǒu kòng ma?",
    "options": [
      "可以刷卡吗？",
      "我喜欢喝咖啡。",
      "你现在有空吗？",
      "我还没吃饭。"
    ],
    "correct": 2,
    "meaning": "Bây giờ bạn có rảnh không?"
  },
  {
    "level": 1,
    "audio": "我现在有空。",
    "pinyin": "Wǒ xiànzài yǒu kòng.",
    "options": [
      "请给我一杯水。",
      "我现在有空。",
      "我吃过了。",
      "请给我一个袋子。"
    ],
    "correct": 1,
    "meaning": "Bây giờ tôi có thời gian/rảnh."
  },
  {
    "level": 1,
    "audio": "你几点起床？",
    "pinyin": "Nǐ jǐ diǎn qǐchuáng?",
    "options": [
      "你几点起床？",
      "地铁站在哪里？",
      "你想吃什么？",
      "再来一杯，谢谢。"
    ],
    "correct": 0,
    "meaning": "Bạn thức dậy lúc mấy giờ?"
  },
  {
    "level": 1,
    "audio": "我七点起床。",
    "pinyin": "Wǒ qī diǎn qǐchuáng.",
    "options": [
      "车站离这里很近。",
      "我想吃面条。",
      "这个多少钱？",
      "我七点起床。"
    ],
    "correct": 3,
    "meaning": "Tôi thức dậy lúc bảy giờ."
  },
  {
    "level": 1,
    "audio": "你几点睡觉？",
    "pinyin": "Nǐ jǐ diǎn shuìjiào?",
    "options": [
      "你几点睡觉？",
      "我喜欢吃米饭。",
      "请往前走。",
      "太贵了。"
    ],
    "correct": 0,
    "meaning": "Bạn đi ngủ lúc mấy giờ?"
  },
  {
    "level": 1,
    "audio": "我十一点睡觉。",
    "pinyin": "Wǒ shíyī diǎn shuìjiào.",
    "options": [
      "可以便宜一点吗？",
      "你喜欢喝茶吗？",
      "我十一点睡觉。",
      "然后向左转。"
    ],
    "correct": 2,
    "meaning": "Tôi đi ngủ lúc mười một giờ."
  },
  {
    "level": 1,
    "audio": "你吃饭了吗？",
    "pinyin": "Nǐ chīfàn le ma?",
    "options": [
      "请向右转。",
      "我要买这个。",
      "你吃饭了吗？",
      "我喜欢喝咖啡。"
    ],
    "correct": 2,
    "meaning": "Bạn ăn cơm chưa?"
  },
  {
    "level": 1,
    "audio": "我还没吃饭。",
    "pinyin": "Wǒ hái méi chīfàn.",
    "options": [
      "我不要这个。",
      "我找不到路了。",
      "我还没吃饭。",
      "请给我一杯水。"
    ],
    "correct": 2,
    "meaning": "Tôi vẫn chưa ăn cơm."
  },
  {
    "level": 1,
    "audio": "我吃过了。",
    "pinyin": "Wǒ chīguò le.",
    "options": [
      "再来一杯，谢谢。",
      "可以刷卡吗？",
      "你可以带我去吗？",
      "我吃过了。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "你想吃什么？",
    "pinyin": "Nǐ xiǎng chī shénme?",
    "options": [
      "这个多少钱？",
      "请给我一个袋子。",
      "我坐公交车去学校。",
      "你想吃什么？"
    ],
    "correct": 3,
    "meaning": "Bạn muốn ăn gì?"
  },
  {
    "level": 1,
    "audio": "我想吃面条。",
    "pinyin": "Wǒ xiǎng chī miàntiáo.",
    "options": [
      "今天下雨了。",
      "我想吃面条。",
      "太贵了。",
      "地铁站在哪里？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "我喜欢吃米饭。",
    "pinyin": "Wǒ xǐhuan chī mǐfàn.",
    "options": [
      "车站离这里很近。",
      "明天天气很好。",
      "可以便宜一点吗？",
      "我喜欢吃米饭。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "你喜欢喝茶吗？",
    "pinyin": "Nǐ xǐhuan hē chá ma?",
    "options": [
      "今天很冷。",
      "你喜欢喝茶吗？",
      "请往前走。",
      "我要买这个。"
    ],
    "correct": 1,
    "meaning": "Bạn có thích uống trà không?"
  },
  {
    "level": 1,
    "audio": "我喜欢喝咖啡。",
    "pinyin": "Wǒ xǐhuan hē kāfēi.",
    "options": [
      "我喜欢喝咖啡。",
      "我不要这个。",
      "今天太热了。",
      "然后向左转。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "请给我一杯水。",
    "pinyin": "Qǐng gěi wǒ yì bēi shuǐ.",
    "options": [
      "请向右转。",
      "请给我一杯水。",
      "可以刷卡吗？",
      "你住在哪里？"
    ],
    "correct": 1,
    "meaning": "Làm ơn cho tôi một cốc nước."
  },
  {
    "level": 1,
    "audio": "再来一杯，谢谢。",
    "pinyin": "Zài lái yì bēi, xièxie.",
    "options": [
      "我找不到路了。",
      "我住在海防。",
      "请给我一个袋子。",
      "再来一杯，谢谢。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "这个多少钱？",
    "pinyin": "Zhège duōshao qián?",
    "options": [
      "你可以带我去吗？",
      "你家有几个人？",
      "地铁站在哪里？",
      "这个多少钱？"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "太贵了。",
    "pinyin": "Tài guì le.",
    "options": [
      "我家有四个人。",
      "我坐公交车去学校。",
      "车站离这里很近。",
      "太贵了。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "可以便宜一点吗？",
    "pinyin": "Kěyǐ piányi yìdiǎn ma?",
    "options": [
      "今天下雨了。",
      "可以便宜一点吗？",
      "你有兄弟姐妹吗？",
      "请往前走。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "我要买这个。",
    "pinyin": "Wǒ yào mǎi zhège.",
    "options": [
      "明天天气很好。",
      "我有一个姐姐。",
      "然后向左转。",
      "我要买这个。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "我不要这个。",
    "pinyin": "Wǒ bú yào zhège.",
    "options": [
      "这是我的朋友。",
      "请向右转。",
      "今天很冷。",
      "我不要这个。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "可以刷卡吗？",
    "pinyin": "Kěyǐ shuākǎ ma?",
    "options": [
      "我找不到路了。",
      "可以刷卡吗？",
      "我们认识很多年了。",
      "今天太热了。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "请给我一个袋子。",
    "pinyin": "Qǐng gěi wǒ yí ge dàizi.",
    "options": [
      "你住在哪里？",
      "你周末做什么？",
      "请给我一个袋子。",
      "你可以带我去吗？"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "地铁站在哪里？",
    "pinyin": "Dìtiě zhàn zài nǎlǐ?",
    "options": [
      "我住在海防。",
      "我喜欢在家看电影。",
      "地铁站在哪里？",
      "我坐公交车去学校。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "车站离这里很近。",
    "pinyin": "Chēzhàn lí zhèlǐ hěn jìn.",
    "options": [
      "今天下雨了。",
      "你家有几个人？",
      "车站离这里很近。",
      "我们一起去吃饭吧。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "请往前走。",
    "pinyin": "Qǐng wǎng qián zǒu.",
    "options": [
      "请往前走。",
      "好啊，我很期待。",
      "明天天气很好。",
      "我家有四个人。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "然后向左转。",
    "pinyin": "Ránhòu xiàng zuǒ zhuǎn.",
    "options": [
      "今天很冷。",
      "你有兄弟姐妹吗？",
      "你会说中文吗？",
      "然后向左转。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "请向右转。",
    "pinyin": "Qǐng xiàng yòu zhuǎn.",
    "options": [
      "今天太热了。",
      "我有一个姐姐。",
      "请向右转。",
      "我会说一点中文。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "我找不到路了。",
    "pinyin": "Wǒ zhǎo bú dào lù le.",
    "options": [
      "这是我的朋友。",
      "我找不到路了。",
      "你学中文多久了？",
      "你住在哪里？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "你可以带我去吗？",
    "pinyin": "Nǐ kěyǐ dài wǒ qù ma?",
    "options": [
      "我学中文一年了。",
      "你可以带我去吗？",
      "我住在海防。",
      "我们认识很多年了。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "我坐公交车去学校。",
    "pinyin": "Wǒ zuò gōngjiāo chē qù xuéxiào.",
    "options": [
      "你家有几个人？",
      "你周末做什么？",
      "我坐公交车去学校。",
      "请你说慢一点。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "今天下雨了。",
    "pinyin": "Jīntiān xiàyǔ le.",
    "options": [
      "我家有四个人。",
      "我没听清楚。",
      "今天下雨了。",
      "我喜欢在家看电影。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "明天天气很好。",
    "pinyin": "Míngtiān tiānqì hěn hǎo.",
    "options": [
      "明天天气很好。",
      "请再说一遍。",
      "我们一起去吃饭吧。",
      "你有兄弟姐妹吗？"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "今天很冷。",
    "pinyin": "Jīntiān hěn lěng.",
    "options": [
      "我有一个姐姐。",
      "今天很冷。",
      "这个词是什么意思？",
      "好啊，我很期待。"
    ],
    "correct": 1,
    "meaning": "Hôm nay rất lạnh."
  },
  {
    "level": 2,
    "audio": "今天太热了。",
    "pinyin": "Jīntiān tài rè le.",
    "options": [
      "今天太热了。",
      "这个字怎么读？",
      "这是我的朋友。",
      "你会说中文吗？"
    ],
    "correct": 0,
    "meaning": "Hôm nay nóng quá."
  },
  {
    "level": 2,
    "audio": "你住在哪里？",
    "pinyin": "Nǐ zhù zài nǎlǐ?",
    "options": [
      "你住在哪里？",
      "我会说一点中文。",
      "我们认识很多年了。",
      "我不知道。"
    ],
    "correct": 0,
    "meaning": "Bạn sống ở đâu?"
  },
  {
    "level": 2,
    "audio": "我住在海防。",
    "pinyin": "Wǒ zhù zài Hǎifáng.",
    "options": [
      "你学中文多久了？",
      "我明白了。",
      "你周末做什么？",
      "我住在海防。"
    ],
    "correct": 3,
    "meaning": "Tôi sống ở Hải Phòng."
  },
  {
    "level": 2,
    "audio": "你家有几个人？",
    "pinyin": "Nǐ jiā yǒu jǐ ge rén?",
    "options": [
      "我喜欢在家看电影。",
      "我学中文一年了。",
      "你家有几个人？",
      "我还不明白。"
    ],
    "correct": 2,
    "meaning": "Nhà bạn có mấy người?"
  },
  {
    "level": 2,
    "audio": "我家有四个人。",
    "pinyin": "Wǒ jiā yǒu sì ge rén.",
    "options": [
      "我家有四个人。",
      "你什么时候下班？",
      "请你说慢一点。",
      "我们一起去吃饭吧。"
    ],
    "correct": 0,
    "meaning": "Nhà tôi có bốn người."
  },
  {
    "level": 2,
    "audio": "你有兄弟姐妹吗？",
    "pinyin": "Nǐ yǒu xiōngdì jiěmèi ma?",
    "options": [
      "你有兄弟姐妹吗？",
      "我六点下班。",
      "我没听清楚。",
      "好啊，我很期待。"
    ],
    "correct": 0,
    "meaning": "Bạn có anh chị em không?"
  },
  {
    "level": 2,
    "audio": "我有一个姐姐。",
    "pinyin": "Wǒ yǒu yí ge jiějie.",
    "options": [
      "今天工作很忙。",
      "我有一个姐姐。",
      "请再说一遍。",
      "你会说中文吗？"
    ],
    "correct": 1,
    "meaning": "Tôi có một chị gái."
  },
  {
    "level": 2,
    "audio": "这是我的朋友。",
    "pinyin": "Zhè shì wǒ de péngyou.",
    "options": [
      "这是我的朋友。",
      "我会说一点中文。",
      "这个词是什么意思？",
      "我正在开会。"
    ],
    "correct": 0,
    "meaning": "Đây là bạn của tôi."
  },
  {
    "level": 2,
    "audio": "我们认识很多年了。",
    "pinyin": "Wǒmen rènshi hěn duō nián le.",
    "options": [
      "请把文件发给我。",
      "这个字怎么读？",
      "我们认识很多年了。",
      "你学中文多久了？"
    ],
    "correct": 2,
    "meaning": "Chúng tôi quen nhau nhiều năm rồi."
  },
  {
    "level": 2,
    "audio": "你周末做什么？",
    "pinyin": "Nǐ zhōumò zuò shénme?",
    "options": [
      "我不知道。",
      "你周末做什么？",
      "我学中文一年了。",
      "我马上发给你。"
    ],
    "correct": 1,
    "meaning": "Cuối tuần bạn làm gì?"
  },
  {
    "level": 2,
    "audio": "我喜欢在家看电影。",
    "pinyin": "Wǒ xǐhuan zài jiā kàn diànyǐng.",
    "options": [
      "我明白了。",
      "我喜欢在家看电影。",
      "你收到我的消息了吗？",
      "请你说慢一点。"
    ],
    "correct": 1,
    "meaning": "Tôi thích xem phim ở nhà."
  },
  {
    "level": 2,
    "audio": "我们一起去吃饭吧。",
    "pinyin": "Wǒmen yìqǐ qù chīfàn ba.",
    "options": [
      "我刚刚看到了。",
      "我没听清楚。",
      "我还不明白。",
      "我们一起去吃饭吧。"
    ],
    "correct": 3,
    "meaning": "Chúng ta cùng đi ăn nhé."
  },
  {
    "level": 2,
    "audio": "好啊，我很期待。",
    "pinyin": "Hǎo a, wǒ hěn qīdài.",
    "options": [
      "请再说一遍。",
      "我们下午再联系。",
      "你什么时候下班？",
      "好啊，我很期待。"
    ],
    "correct": 3,
    "meaning": "Được, tôi rất mong chờ."
  },
  {
    "level": 2,
    "audio": "你会说中文吗？",
    "pinyin": "Nǐ huì shuō Zhōngwén ma?",
    "options": [
      "这个问题很重要。",
      "我六点下班。",
      "这个词是什么意思？",
      "你会说中文吗？"
    ],
    "correct": 3,
    "meaning": "Bạn biết nói tiếng Trung không?"
  },
  {
    "level": 2,
    "audio": "我会说一点中文。",
    "pinyin": "Wǒ huì shuō yìdiǎn Zhōngwén.",
    "options": [
      "你能帮我一下吗？",
      "这个字怎么读？",
      "今天工作很忙。",
      "我会说一点中文。"
    ],
    "correct": 3,
    "meaning": "Tôi biết nói một chút tiếng Trung."
  },
  {
    "level": 2,
    "audio": "你学中文多久了？",
    "pinyin": "Nǐ xué Zhōngwén duōjiǔ le?",
    "options": [
      "当然可以。",
      "你学中文多久了？",
      "我正在开会。",
      "我不知道。"
    ],
    "correct": 1,
    "meaning": "Bạn học tiếng Trung bao lâu rồi?"
  },
  {
    "level": 2,
    "audio": "我学中文一年了。",
    "pinyin": "Wǒ xué Zhōngwén yì nián le.",
    "options": [
      "我明白了。",
      "我学中文一年了。",
      "请把文件发给我。",
      "你需要我做什么？"
    ],
    "correct": 1,
    "meaning": "Tôi học tiếng Trung được một năm rồi."
  },
  {
    "level": 2,
    "audio": "请你说慢一点。",
    "pinyin": "Qǐng nǐ shuō màn yìdiǎn.",
    "options": [
      "我还不明白。",
      "我马上发给你。",
      "请等我五分钟。",
      "请你说慢一点。"
    ],
    "correct": 3,
    "meaning": "Bạn nói chậm một chút nhé."
  },
  {
    "level": 2,
    "audio": "我没听清楚。",
    "pinyin": "Wǒ méi tīng qīngchu.",
    "options": [
      "我没听清楚。",
      "你收到我的消息了吗？",
      "你什么时候下班？",
      "不用着急。"
    ],
    "correct": 0,
    "meaning": "Tôi không nghe rõ."
  },
  {
    "level": 2,
    "audio": "请再说一遍。",
    "pinyin": "Qǐng zài shuō yí biàn.",
    "options": [
      "别担心。",
      "请再说一遍。",
      "我刚刚看到了。",
      "我六点下班。"
    ],
    "correct": 1,
    "meaning": "Hãy nói lại một lần nữa."
  },
  {
    "level": 2,
    "audio": "这个词是什么意思？",
    "pinyin": "Zhège cí shì shénme yìsi?",
    "options": [
      "今天工作很忙。",
      "我们下午再联系。",
      "我忘记带手机了。",
      "这个词是什么意思？"
    ],
    "correct": 3,
    "meaning": "Từ này có nghĩa là gì?"
  },
  {
    "level": 2,
    "audio": "这个字怎么读？",
    "pinyin": "Zhège zì zěnme dú?",
    "options": [
      "这个字怎么读？",
      "我的手机没电了。",
      "这个问题很重要。",
      "我正在开会。"
    ],
    "correct": 0,
    "meaning": "Chữ này đọc thế nào?"
  },
  {
    "level": 2,
    "audio": "我不知道。",
    "pinyin": "Wǒ bù zhīdào.",
    "options": [
      "你可以给我充电器吗？",
      "请把文件发给我。",
      "你能帮我一下吗？",
      "我不知道。"
    ],
    "correct": 3,
    "meaning": "Tôi không biết."
  },
  {
    "level": 2,
    "audio": "我明白了。",
    "pinyin": "Wǒ míngbai le.",
    "options": [
      "没问题。",
      "我明白了。",
      "当然可以。",
      "我马上发给你。"
    ],
    "correct": 1,
    "meaning": "Tôi hiểu rồi."
  },
  {
    "level": 2,
    "audio": "我还不明白。",
    "pinyin": "Wǒ hái bù míngbai.",
    "options": [
      "我还不明白。",
      "你收到我的消息了吗？",
      "你需要我做什么？",
      "你什么时候有空？"
    ],
    "correct": 0,
    "meaning": "Tôi vẫn chưa hiểu."
  },
  {
    "level": 2,
    "audio": "你什么时候下班？",
    "pinyin": "Nǐ shénme shíhou xiàbān?",
    "options": [
      "请等我五分钟。",
      "我刚刚看到了。",
      "晚上八点以后我有空。",
      "你什么时候下班？"
    ],
    "correct": 3,
    "meaning": "Khi nào bạn tan làm?"
  },
  {
    "level": 2,
    "audio": "我六点下班。",
    "pinyin": "Wǒ liù diǎn xiàbān.",
    "options": [
      "我六点下班。",
      "不用着急。",
      "我们下午再联系。",
      "我们几点见面？"
    ],
    "correct": 0,
    "meaning": "Tôi tan làm lúc sáu giờ."
  },
  {
    "level": 2,
    "audio": "今天工作很忙。",
    "pinyin": "Jīntiān gōngzuò hěn máng.",
    "options": [
      "这个问题很重要。",
      "下午三点见。",
      "别担心。",
      "今天工作很忙。"
    ],
    "correct": 3,
    "meaning": "Hôm nay công việc rất bận."
  },
  {
    "level": 2,
    "audio": "我正在开会。",
    "pinyin": "Wǒ zhèngzài kāihuì.",
    "options": [
      "我已经到了。",
      "我忘记带手机了。",
      "我正在开会。",
      "你能帮我一下吗？"
    ],
    "correct": 2,
    "meaning": "Tôi đang họp."
  },
  {
    "level": 2,
    "audio": "请把文件发给我。",
    "pinyin": "Qǐng bǎ wénjiàn fā gěi wǒ.",
    "options": [
      "我的手机没电了。",
      "请把文件发给我。",
      "你在哪里？",
      "当然可以。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我马上发给你。",
    "pinyin": "Wǒ mǎshàng fā gěi nǐ.",
    "options": [
      "我在门口等你。",
      "我马上发给你。",
      "你需要我做什么？",
      "你可以给我充电器吗？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "你收到我的消息了吗？",
    "pinyin": "Nǐ shōudào wǒ de xiāoxi le ma?",
    "options": [
      "你收到我的消息了吗？",
      "请等我五分钟。",
      "没问题。",
      "路上小心。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我刚刚看到了。",
    "pinyin": "Wǒ gānggāng kàndào le.",
    "options": [
      "不用着急。",
      "我刚刚看到了。",
      "到了给我发消息。",
      "你什么时候有空？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我们下午再联系。",
    "pinyin": "Wǒmen xiàwǔ zài liánxì.",
    "options": [
      "晚上八点以后我有空。",
      "别担心。",
      "我们下午再联系。",
      "我今天感觉很好。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "这个问题很重要。",
    "pinyin": "Zhège wèntí hěn zhòngyào.",
    "options": [
      "我有一点累。",
      "我忘记带手机了。",
      "我们几点见面？",
      "这个问题很重要。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "你能帮我一下吗？",
    "pinyin": "Nǐ néng bāng wǒ yíxià ma?",
    "options": [
      "你需要休息一下。",
      "你能帮我一下吗？",
      "我的手机没电了。",
      "下午三点见。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "当然可以。",
    "pinyin": "Dāngrán kěyǐ.",
    "options": [
      "我已经到了。",
      "我昨天睡得很晚。",
      "当然可以。",
      "你可以给我充电器吗？"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "你需要我做什么？",
    "pinyin": "Nǐ xūyào wǒ zuò shénme?",
    "options": [
      "你在哪里？",
      "你需要我做什么？",
      "没问题。",
      "今天早点睡吧。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "请等我五分钟。",
    "pinyin": "Qǐng děng wǒ wǔ fēnzhōng.",
    "options": [
      "你最近怎么样？",
      "请等我五分钟。",
      "我在门口等你。",
      "你什么时候有空？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "不用着急。",
    "pinyin": "Bú yòng zháojí.",
    "options": [
      "最近一切都不错。",
      "路上小心。",
      "不用着急。",
      "晚上八点以后我有空。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "别担心。",
    "pinyin": "Bié dānxīn.",
    "options": [
      "到了给我发消息。",
      "我们几点见面？",
      "别担心。",
      "你为什么不开心？"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我忘记带手机了。",
    "pinyin": "Wǒ wàngjì dài shǒujī le.",
    "options": [
      "我忘记带手机了。",
      "我今天感觉很好。",
      "没什么，只是有点累。",
      "下午三点见。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我的手机没电了。",
    "pinyin": "Wǒ de shǒujī méi diàn le.",
    "options": [
      "别想太多。",
      "我的手机没电了。",
      "我已经到了。",
      "我有一点累。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "你可以给我充电器吗？",
    "pinyin": "Nǐ kěyǐ gěi wǒ chōngdiànqì ma?",
    "options": [
      "你在哪里？",
      "你可以给我充电器吗？",
      "我想订一个房间。",
      "你需要休息一下。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "没问题。",
    "pinyin": "Méi wèntí.",
    "options": [
      "我在门口等你。",
      "我昨天睡得很晚。",
      "请问还有空房吗？",
      "没问题。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "你什么时候有空？",
    "pinyin": "Nǐ shénme shíhou yǒu kòng?",
    "options": [
      "路上小心。",
      "我想住两晚。",
      "你什么时候有空？",
      "今天早点睡吧。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "晚上八点以后我有空。",
    "pinyin": "Wǎnshang bā diǎn yǐhòu wǒ yǒu kòng.",
    "options": [
      "到了给我发消息。",
      "早餐几点开始？",
      "晚上八点以后我有空。",
      "你最近怎么样？"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我们几点见面？",
    "pinyin": "Wǒmen jǐ diǎn jiànmiàn?",
    "options": [
      "最近一切都不错。",
      "请给我一张发票。",
      "我们几点见面？",
      "我今天感觉很好。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "下午三点见。",
    "pinyin": "Xiàwǔ sān diǎn jiàn.",
    "options": [
      "你为什么不开心？",
      "下午三点见。",
      "我有一点累。",
      "我的房间在哪里？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我已经到了。",
    "pinyin": "Wǒ yǐjīng dào le.",
    "options": [
      "我已经到了。",
      "电梯在哪里？",
      "你需要休息一下。",
      "没什么，只是有点累。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "你在哪里？",
    "pinyin": "Nǐ zài nǎlǐ?",
    "options": [
      "别想太多。",
      "无线网络的密码是什么？",
      "我昨天睡得很晚。",
      "你在哪里？"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我在门口等你。",
    "pinyin": "Wǒ zài ménkǒu děng nǐ.",
    "options": [
      "我想订一个房间。",
      "我在门口等你。",
      "我想买一张火车票。",
      "今天早点睡吧。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "路上小心。",
    "pinyin": "Lùshang xiǎoxīn.",
    "options": [
      "请问还有空房吗？",
      "你最近怎么样？",
      "路上小心。",
      "下一班车几点出发？"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "到了给我发消息。",
    "pinyin": "Dào le gěi wǒ fā xiāoxi.",
    "options": [
      "到了给我发消息。",
      "我想住两晚。",
      "最近一切都不错。",
      "我要去机场。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我今天感觉很好。",
    "pinyin": "Wǒ jīntiān gǎnjué hěn hǎo.",
    "options": [
      "请问需要多长时间？",
      "你为什么不开心？",
      "早餐几点开始？",
      "我今天感觉很好。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我有一点累。",
    "pinyin": "Wǒ yǒu yìdiǎn lèi.",
    "options": [
      "我有一点累。",
      "请给我一张发票。",
      "现在路上堵车吗？",
      "没什么，只是有点累。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "你需要休息一下。",
    "pinyin": "Nǐ xūyào xiūxi yíxià.",
    "options": [
      "我的房间在哪里？",
      "我们快迟到了。",
      "你需要休息一下。",
      "别想太多。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "我昨天睡得很晚。",
    "pinyin": "Wǒ zuótiān shuì de hěn wǎn.",
    "options": [
      "我昨天睡得很晚。",
      "请开快一点。",
      "电梯在哪里？",
      "我想订一个房间。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 2,
    "audio": "今天早点睡吧。",
    "pinyin": "Jīntiān zǎodiǎn shuì ba.",
    "options": [
      "今天早点睡吧。",
      "请问还有空房吗？",
      "请在这里停车。",
      "无线网络的密码是什么？"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "你最近怎么样？",
    "pinyin": "Nǐ zuìjìn zěnmeyàng?",
    "options": [
      "我想买一张火车票。",
      "你最近怎么样？",
      "你觉得这个办法怎么样？",
      "我想住两晚。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "最近一切都不错。",
    "pinyin": "Zuìjìn yíqiè dōu búcuò.",
    "options": [
      "下一班车几点出发？",
      "我觉得可以试试。",
      "最近一切都不错。",
      "早餐几点开始？"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "你为什么不开心？",
    "pinyin": "Nǐ wèishénme bù kāixīn?",
    "options": [
      "请给我一张发票。",
      "你为什么不开心？",
      "我们先讨论一下。",
      "我要去机场。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "没什么，只是有点累。",
    "pinyin": "Méi shénme, zhǐshì yǒudiǎn lèi.",
    "options": [
      "没什么，只是有点累。",
      "我同意你的看法。",
      "请问需要多长时间？",
      "我的房间在哪里？"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "别想太多。",
    "pinyin": "Bié xiǎng tài duō.",
    "options": [
      "我不太同意。",
      "别想太多。",
      "电梯在哪里？",
      "现在路上堵车吗？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我想订一个房间。",
    "pinyin": "Wǒ xiǎng dìng yí ge fángjiān.",
    "options": [
      "我想订一个房间。",
      "让我想一想。",
      "我们快迟到了。",
      "无线网络的密码是什么？"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "请问还有空房吗？",
    "pinyin": "Qǐngwèn hái yǒu kòngfáng ma?",
    "options": [
      "请问还有空房吗？",
      "这个问题需要时间。",
      "我想买一张火车票。",
      "请开快一点。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我想住两晚。",
    "pinyin": "Wǒ xiǎng zhù liǎng wǎn.",
    "options": [
      "下一班车几点出发？",
      "我想住两晚。",
      "我们以后再决定。",
      "请在这里停车。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "早餐几点开始？",
    "pinyin": "Zǎocān jǐ diǎn kāishǐ?",
    "options": [
      "这个方法比较简单。",
      "你觉得这个办法怎么样？",
      "早餐几点开始？",
      "我要去机场。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "请给我一张发票。",
    "pinyin": "Qǐng gěi wǒ yì zhāng fāpiào.",
    "options": [
      "这样做比较方便。",
      "我觉得可以试试。",
      "请问需要多长时间？",
      "请给我一张发票。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我的房间在哪里？",
    "pinyin": "Wǒ de fángjiān zài nǎlǐ?",
    "options": [
      "我们先讨论一下。",
      "我的房间在哪里？",
      "现在路上堵车吗？",
      "虽然很忙，但是我会完成。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "电梯在哪里？",
    "pinyin": "Diàntī zài nǎlǐ?",
    "options": [
      "如果有问题，请告诉我。",
      "我们快迟到了。",
      "电梯在哪里？",
      "我同意你的看法。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "无线网络的密码是什么？",
    "pinyin": "Wúxiàn wǎngluò de mìmǎ shì shénme?",
    "options": [
      "我不太同意。",
      "请开快一点。",
      "因为下雨，所以我们没有出去。",
      "无线网络的密码是什么？"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我想买一张火车票。",
    "pinyin": "Wǒ xiǎng mǎi yì zhāng huǒchē piào.",
    "options": [
      "我想买一张火车票。",
      "如果明天有时间，我们一起去。",
      "请在这里停车。",
      "让我想一想。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "下一班车几点出发？",
    "pinyin": "Xià yì bān chē jǐ diǎn chūfā?",
    "options": [
      "下一班车几点出发？",
      "只要努力，就会进步。",
      "你觉得这个办法怎么样？",
      "这个问题需要时间。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我要去机场。",
    "pinyin": "Wǒ yào qù jīchǎng.",
    "options": [
      "学习语言需要坚持。",
      "我们以后再决定。",
      "我要去机场。",
      "我觉得可以试试。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "请问需要多长时间？",
    "pinyin": "Qǐngwèn xūyào duō cháng shíjiān?",
    "options": [
      "这个方法比较简单。",
      "我们先讨论一下。",
      "请问需要多长时间？",
      "每天练习一点儿很重要。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "现在路上堵车吗？",
    "pinyin": "Xiànzài lùshang dǔchē ma?",
    "options": [
      "不要害怕说错。",
      "这样做比较方便。",
      "我同意你的看法。",
      "现在路上堵车吗？"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我们快迟到了。",
    "pinyin": "Wǒmen kuài chídào le.",
    "options": [
      "我不太同意。",
      "虽然很忙，但是我会完成。",
      "听不懂的时候可以再听一次。",
      "我们快迟到了。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "请开快一点。",
    "pinyin": "Qǐng kāi kuài yìdiǎn.",
    "options": [
      "请开快一点。",
      "让我想一想。",
      "先听清楚，再回答。",
      "如果有问题，请告诉我。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "请在这里停车。",
    "pinyin": "Qǐng zài zhèlǐ tíngchē.",
    "options": [
      "这个问题需要时间。",
      "你好。",
      "因为下雨，所以我们没有出去。",
      "请在这里停车。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "你觉得这个办法怎么样？",
    "pinyin": "Nǐ juéde zhège bànfǎ zěnmeyàng?",
    "options": [
      "如果明天有时间，我们一起去。",
      "早上好。",
      "我们以后再决定。",
      "你觉得这个办法怎么样？"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我觉得可以试试。",
    "pinyin": "Wǒ juéde kěyǐ shìshi.",
    "options": [
      "我觉得可以试试。",
      "这个方法比较简单。",
      "只要努力，就会进步。",
      "晚上好。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我们先讨论一下。",
    "pinyin": "Wǒmen xiān tǎolùn yíxià.",
    "options": [
      "我们先讨论一下。",
      "再见。",
      "这样做比较方便。",
      "学习语言需要坚持。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我同意你的看法。",
    "pinyin": "Wǒ tóngyì nǐ de kànfǎ.",
    "options": [
      "我同意你的看法。",
      "明天见。",
      "虽然很忙，但是我会完成。",
      "每天练习一点儿很重要。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我不太同意。",
    "pinyin": "Wǒ bú tài tóngyì.",
    "options": [
      "谢谢。",
      "不要害怕说错。",
      "如果有问题，请告诉我。",
      "我不太同意。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "让我想一想。",
    "pinyin": "Ràng wǒ xiǎng yì xiǎng.",
    "options": [
      "因为下雨，所以我们没有出去。",
      "让我想一想。",
      "听不懂的时候可以再听一次。",
      "不客气。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "这个问题需要时间。",
    "pinyin": "Zhège wèntí xūyào shíjiān.",
    "options": [
      "对不起。",
      "先听清楚，再回答。",
      "如果明天有时间，我们一起去。",
      "这个问题需要时间。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "我们以后再决定。",
    "pinyin": "Wǒmen yǐhòu zài juédìng.",
    "options": [
      "我们以后再决定。",
      "没关系。",
      "只要努力，就会进步。",
      "你好。"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "这个方法比较简单。",
    "pinyin": "Zhège fāngfǎ bǐjiào jiǎndān.",
    "options": [
      "请坐。",
      "早上好。",
      "学习语言需要坚持。",
      "这个方法比较简单。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "这样做比较方便。",
    "pinyin": "Zhèyàng zuò bǐjiào fāngbiàn.",
    "options": [
      "每天练习一点儿很重要。",
      "请进。",
      "这样做比较方便。",
      "晚上好。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "虽然很忙，但是我会完成。",
    "pinyin": "Suīrán hěn máng, dànshì wǒ huì wánchéng.",
    "options": [
      "虽然很忙，但是我会完成。",
      "再见。",
      "不要害怕说错。",
      "请问，洗手间在哪里？"
    ],
    "correct": 0,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "如果有问题，请告诉我。",
    "pinyin": "Rúguǒ yǒu wèntí, qǐng gàosu wǒ.",
    "options": [
      "你好吗？",
      "明天见。",
      "如果有问题，请告诉我。",
      "听不懂的时候可以再听一次。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "因为下雨，所以我们没有出去。",
    "pinyin": "Yīnwèi xiàyǔ, suǒyǐ wǒmen méiyǒu chūqù.",
    "options": [
      "先听清楚，再回答。",
      "因为下雨，所以我们没有出去。",
      "谢谢。",
      "我很好，谢谢。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "如果明天有时间，我们一起去。",
    "pinyin": "Rúguǒ míngtiān yǒu shíjiān, wǒmen yìqǐ qù.",
    "options": [
      "你好。",
      "如果明天有时间，我们一起去。",
      "不客气。",
      "你叫什么名字？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "只要努力，就会进步。",
    "pinyin": "Zhǐyào nǔlì, jiù huì jìnbù.",
    "options": [
      "我叫李明。",
      "只要努力，就会进步。",
      "早上好。",
      "对不起。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "学习语言需要坚持。",
    "pinyin": "Xuéxí yǔyán xūyào jiānchí.",
    "options": [
      "没关系。",
      "学习语言需要坚持。",
      "晚上好。",
      "你是哪国人？"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "每天练习一点儿很重要。",
    "pinyin": "Měitiān liànxí yìdiǎnr hěn zhòngyào.",
    "options": [
      "再见。",
      "我是越南人。",
      "每天练习一点儿很重要。",
      "请坐。"
    ],
    "correct": 2,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "不要害怕说错。",
    "pinyin": "Bú yào hàipà shuō cuò.",
    "options": [
      "你是学生吗？",
      "不要害怕说错。",
      "明天见。",
      "请进。"
    ],
    "correct": 1,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "听不懂的时候可以再听一次。",
    "pinyin": "Tīng bù dǒng de shíhou kěyǐ zài tīng yí cì.",
    "options": [
      "我是学生。",
      "谢谢。",
      "请问，洗手间在哪里？",
      "听不懂的时候可以再听一次。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 3,
    "audio": "先听清楚，再回答。",
    "pinyin": "Xiān tīng qīngchu, zài huídá.",
    "options": [
      "你今天忙吗？",
      "你好吗？",
      "不客气。",
      "先听清楚，再回答。"
    ],
    "correct": 3,
    "meaning": ""
  },
  {
    "level": 1,
    "audio": "你好吗？",
    "pinyin": "Nǐ hǎo ma?",
    "meaning": "Bạn khỏe không?",
    "options": [
      "你想吃什么？",
      "为了准备明天的工作，她今晚还要听音乐。",
      "你好。",
      "你好吗？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我很好，谢谢。",
    "pinyin": "Wǒ hěn hǎo, xièxie.",
    "meaning": "Tôi khỏe, cảm ơn.",
    "options": [
      "我很好，谢谢。",
      "公交车站在哪里？",
      "再来一杯，谢谢。",
      "你从哪里来？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "你叫什么？",
    "pinyin": "Nǐ jiào shénme?",
    "meaning": "",
    "options": [
      "再见。",
      "你叫什么？",
      "谢谢你的帮助。",
      "请等一下。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我是越南人。",
    "pinyin": "Wǒ shì Yuènán rén.",
    "meaning": "Tôi là người Việt Nam。",
    "options": [
      "我是越南人。",
      "虽然时间不多，但是哥哥还是完成了吃饭。",
      "周末的时候，朋友喜欢去中国吃饭。",
      "早上好。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我住在海防。",
    "pinyin": "Wǒ zhù zài Hǎifáng.",
    "meaning": "Tôi sống ở Hải Phòng.",
    "options": [
      "我住在海防。",
      "他每天都要看书。",
      "虽然时间不多，但是哥哥还是完成了吃饭。",
      "请进。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "你会说中文吗？",
    "pinyin": "Nǐ huì shuō Zhōngwén ma?",
    "meaning": "Bạn biết nói tiếng Trung không?",
    "options": [
      "你觉得喝水很重要。",
      "请给我一张发票。",
      "请在这里停车。",
      "你会说中文吗？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我会说一点中文。",
    "pinyin": "Wǒ huì shuō yìdiǎn Zhōngwén.",
    "meaning": "Tôi biết nói một chút tiếng Trung.",
    "options": [
      "请向右转。",
      "我会说一点中文。",
      "我只是看看。",
      "昨天我很忙。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "请说慢一点。",
    "pinyin": "Qǐng shuō màn yìdiǎn.",
    "meaning": "",
    "options": [
      "我坐错车了。",
      "你吃饭了吗？",
      "请坐。",
      "请说慢一点。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请再说一遍。",
    "pinyin": "Qǐng zài shuō yí biàn.",
    "meaning": "Hãy nói lại một lần nữa.",
    "options": [
      "我听说同学最近在商店负责工作。",
      "为了买东西，哥哥提前来到中国。",
      "为了买东西，他提前来到中国。",
      "请再说一遍。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我听不清楚。",
    "pinyin": "Wǒ tīng bù qīngchu.",
    "meaning": "",
    "options": [
      "这个字是什么意思？",
      "我听不清楚。",
      "他希望明天可以继续睡觉。",
      "然后向左转。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "这个怎么读？",
    "pinyin": "Zhège zěnme dú?",
    "meaning": "",
    "options": [
      "会议结束以后，医生马上回到中国继续学习。",
      "虽然时间不多，但是他还是完成了吃饭。",
      "再见。",
      "这个怎么读？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "这个字是什么意思？",
    "pinyin": "Zhège zì shì shénme yìsi?",
    "meaning": "",
    "options": [
      "你叫什么？",
      "这个字是什么意思？",
      "可以给我菜单吗？",
      "为了准备明天的工作，学生今晚还要听音乐。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "你怎么写这个字？",
    "pinyin": "Nǐ zěnme xiě zhège zì?",
    "meaning": "",
    "options": [
      "医生每天都要看书。",
      "你怎么写这个字？",
      "会议结束以后，爸爸马上回到中国继续学习。",
      "这个很好吃。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我不知道。",
    "pinyin": "Wǒ bù zhīdào.",
    "meaning": "Tôi không biết.",
    "options": [
      "我不知道。",
      "为了买东西，朋友提前来到中国。",
      "我希望明天可以继续睡觉。",
      "如果有时间，妈妈会去商店听音乐。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我明白了。",
    "pinyin": "Wǒ míngbai le.",
    "meaning": "Tôi hiểu rồi.",
    "options": [
      "我明白了。",
      "我从越南来。",
      "他已经把手机带到中国了。",
      "可以刷卡吗？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我还不明白。",
    "pinyin": "Wǒ hái bù míngbai.",
    "meaning": "Tôi vẫn chưa hiểu.",
    "options": [
      "医生希望明天可以继续睡觉。",
      "我还不明白。",
      "老师已经把手机带到中国了。",
      "因为工作很忙，她只能晚上工作。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "没关系。",
    "pinyin": "Méi guānxi.",
    "meaning": "",
    "options": [
      "今天姐姐在商店喝水。",
      "我喜欢吃米饭。",
      "最近医生常常需要买东西。",
      "没关系。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "谢谢你的帮助。",
    "pinyin": "Xièxie nǐ de bāngzhù.",
    "meaning": "",
    "options": [
      "为了买东西，老师提前来到中国。",
      "谢谢你的帮助。",
      "大概需要多久？",
      "谢谢。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "不用客气。",
    "pinyin": "Bú yòng kèqi.",
    "meaning": "",
    "options": [
      "我很好，谢谢。",
      "如果有时间，你会去商店听音乐。",
      "如果计划没有变化，经理下午会在商店回家。",
      "不用客气。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "对不起。",
    "pinyin": "Duìbuqǐ.",
    "meaning": "",
    "options": [
      "他告诉我，他最近正在学习。",
      "一共多少钱？",
      "对不起。",
      "因为工作很忙，姐姐只能晚上工作。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "没事。",
    "pinyin": "Méi shì.",
    "meaning": "",
    "options": [
      "请坐。",
      "没关系。",
      "我买两杯咖啡。",
      "没事。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请坐。",
    "pinyin": "Qǐng zuò.",
    "meaning": "",
    "options": [
      "为了买东西，他提前来到中国。",
      "学生觉得喝水很重要。",
      "请坐。",
      "可以用手机付款吗？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "请进。",
    "pinyin": "Qǐng jìn.",
    "meaning": "",
    "options": [
      "我不喜欢喝咖啡。",
      "请进。",
      "会议结束以后，老师马上回到中国继续学习。",
      "我只是看看。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "请等一下。",
    "pinyin": "Qǐng děng yíxià.",
    "meaning": "",
    "options": [
      "请等一下。",
      "请给我一个袋子。",
      "我不要这个。",
      "因为工作很忙，姐姐只能晚上工作。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我马上回来。",
    "pinyin": "Wǒ mǎshàng huílái.",
    "meaning": "",
    "options": [
      "我马上回来。",
      "虽然时间不多，但是哥哥还是完成了吃饭。",
      "为了买东西，医生提前来到中国。",
      "医生每天都要看书。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "现在几点？",
    "pinyin": "Xiànzài jǐ diǎn?",
    "meaning": "Bây giờ là mấy giờ?",
    "options": [
      "你好吗？",
      "现在几点？",
      "请说慢一点。",
      "请在这里停车。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "现在八点半。",
    "pinyin": "Xiànzài bā diǎn bàn.",
    "meaning": "",
    "options": [
      "我要买这个。",
      "我是越南人。",
      "现在八点半。",
      "我只是看看。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "今天星期几？",
    "pinyin": "Jīntiān xīngqī jǐ?",
    "meaning": "Hôm nay là thứ mấy?",
    "options": [
      "不客气。",
      "今天星期几？",
      "我已经吃过了。",
      "妈妈正在商店回家。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "今天星期一。",
    "pinyin": "Jīntiān xīngqī yī.",
    "meaning": "",
    "options": [
      "今天星期一。",
      "我只是看看。",
      "经理觉得喝水很重要。",
      "如果有时间，她会去商店听音乐。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "明天见。",
    "pinyin": "Míngtiān jiàn.",
    "meaning": "",
    "options": [
      "我听说妈妈最近在商店负责工作。",
      "我告诉我，他最近正在学习。",
      "明天见。",
      "同学正在商店回家。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "昨天我很忙。",
    "pinyin": "Zuótiān wǒ hěn máng.",
    "meaning": "",
    "options": [
      "昨天我很忙。",
      "为了买东西，医生提前来到中国。",
      "给你五十块。",
      "你几点睡觉？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "今天我有空。",
    "pinyin": "Jīntiān wǒ yǒu kòng.",
    "meaning": "",
    "options": [
      "今天我有空。",
      "最近哥哥常常需要买东西。",
      "我希望明天可以继续睡觉。",
      "公交车站在哪里？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "明天我要上课。",
    "pinyin": "Míngtiān wǒ yào shàngkè.",
    "meaning": "",
    "options": [
      "这个字是什么意思？",
      "我想吃面条。",
      "为了准备明天的工作，你今晚还要听音乐。",
      "明天我要上课。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你几点起床？",
    "pinyin": "Nǐ jǐ diǎn qǐchuáng?",
    "meaning": "Bạn thức dậy lúc mấy giờ?",
    "options": [
      "你是学生吗？",
      "我是学生。",
      "如果有时间，妈妈会去商店听音乐。",
      "你几点起床？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我七点起床。",
    "pinyin": "Wǒ qī diǎn qǐchuáng.",
    "meaning": "Tôi thức dậy lúc bảy giờ.",
    "options": [
      "我只是看看。",
      "他已经把手机带到中国了。",
      "如果计划没有变化，她下午会在商店回家。",
      "我七点起床。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你几点睡觉？",
    "pinyin": "Nǐ jǐ diǎn shuìjiào?",
    "meaning": "Bạn đi ngủ lúc mấy giờ?",
    "options": [
      "请坐。",
      "你几点睡觉？",
      "最近他常常需要买东西。",
      "周末的时候，他喜欢去中国吃饭。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我十一点睡觉。",
    "pinyin": "Wǒ shíyī diǎn shuìjiào.",
    "meaning": "Tôi đi ngủ lúc mười một giờ.",
    "options": [
      "为了买东西，哥哥提前来到中国。",
      "我是学生。",
      "我十一点睡觉。",
      "周末的时候，医生喜欢去中国吃饭。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "你吃早饭了吗？",
    "pinyin": "Nǐ chī zǎofàn le ma?",
    "meaning": "",
    "options": [
      "爸爸希望明天可以继续睡觉。",
      "你吃早饭了吗？",
      "可以刷卡吗？",
      "爸爸每天都要看书。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我已经吃过了。",
    "pinyin": "Wǒ yǐjīng chīguo le.",
    "meaning": "",
    "options": [
      "请给我一张发票。",
      "我已经吃过了。",
      "为了准备明天的工作，你今晚还要听音乐。",
      "我是越南人。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "你想吃什么？",
    "pinyin": "Nǐ xiǎng chī shénme?",
    "meaning": "Bạn muốn ăn gì?",
    "options": [
      "昨天你在商店休息，所以回家比较晚。",
      "你几点睡觉？",
      "请问，洗手间在哪里？",
      "你想吃什么？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我想吃面条。",
    "pinyin": "Wǒ xiǎng chī miàntiáo.",
    "meaning": "",
    "options": [
      "晚上好。",
      "我想吃面条。",
      "今天同学在商店喝水。",
      "老师已经把手机带到中国了。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我不吃辣。",
    "pinyin": "Wǒ bù chī là.",
    "meaning": "",
    "options": [
      "我不吃辣。",
      "最近爸爸常常需要买东西。",
      "医生告诉我，他最近正在学习。",
      "如果计划没有变化，她下午会在商店回家。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "这个很好吃。",
    "pinyin": "Zhège hěn hǎochī.",
    "meaning": "",
    "options": [
      "早上好。",
      "今天妈妈在商店喝水。",
      "因为工作很忙，学生只能晚上工作。",
      "这个很好吃。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "可以给我菜单吗？",
    "pinyin": "Kěyǐ gěi wǒ càidān ma?",
    "meaning": "",
    "options": [
      "你几点睡觉？",
      "可以给我菜单吗？",
      "我今天不太忙。",
      "为了买东西，朋友提前来到中国。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "请给我一碗米饭。",
    "pinyin": "Qǐng gěi wǒ yì wǎn mǐfàn.",
    "meaning": "",
    "options": [
      "为了买东西，我提前来到中国。",
      "请给我一个袋子。",
      "请给我一碗米饭。",
      "你几点睡觉？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我买两杯咖啡。",
    "pinyin": "Wǒ mǎi liǎng bēi kāfēi.",
    "meaning": "",
    "options": [
      "我迷路了。",
      "经理正在检查咖啡，准备开始休息。",
      "我买两杯咖啡。",
      "我喜欢喝咖啡。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "可以刷卡吗？",
    "pinyin": "Kěyǐ shuākǎ ma?",
    "meaning": "",
    "options": [
      "我听说学生最近在商店负责工作。",
      "再来一杯，谢谢。",
      "不用客气。",
      "可以刷卡吗？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "可以用手机付款吗？",
    "pinyin": "Kěyǐ yòng shǒujī fùkuǎn ma?",
    "meaning": "",
    "options": [
      "她喜欢看书。",
      "可以用手机付款吗？",
      "我住在海防。",
      "左边有一家银行。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "请给我一张发票。",
    "pinyin": "Qǐng gěi wǒ yì zhāng fāpiào.",
    "meaning": "",
    "options": [
      "你想吃什么？",
      "她正在检查咖啡，准备开始休息。",
      "请给我一张发票。",
      "今天星期几？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我只是看看。",
    "pinyin": "Wǒ zhǐshì kànkan.",
    "meaning": "",
    "options": [
      "如果有时间，经理会去商店听音乐。",
      "请给我一碗米饭。",
      "你今天忙吗？",
      "我只是看看。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "有别的颜色吗？",
    "pinyin": "Yǒu bié de yánsè ma?",
    "meaning": "",
    "options": [
      "给你五十块。",
      "如果有时间，妈妈会去商店听音乐。",
      "有别的颜色吗？",
      "爸爸每天都要看书。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "有大一点的吗？",
    "pinyin": "Yǒu dà yìdiǎn de ma?",
    "meaning": "",
    "options": [
      "再来一杯，谢谢。",
      "我现在有空。",
      "有大一点的吗？",
      "妈妈正在检查咖啡，准备开始休息。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "这个太小了。",
    "pinyin": "Zhège tài xiǎo le.",
    "meaning": "",
    "options": [
      "谢谢。",
      "这个太小了。",
      "如果有时间，她会去商店听音乐。",
      "天气很好。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我可以试穿吗？",
    "pinyin": "Wǒ kěyǐ shìchuān ma?",
    "meaning": "",
    "options": [
      "因为工作很忙，学生只能晚上工作。",
      "哥哥已经把手机带到中国了。",
      "我可以试穿吗？",
      "学生正在检查咖啡，准备开始休息。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "一共多少钱？",
    "pinyin": "Yígòng duōshao qián?",
    "meaning": "",
    "options": [
      "如果计划没有变化，她下午会在商店回家。",
      "我要去火车站。",
      "一共多少钱？",
      "请给我一个袋子。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "给你五十块。",
    "pinyin": "Gěi nǐ wǔshí kuài.",
    "meaning": "",
    "options": [
      "周末的时候，我喜欢去中国吃饭。",
      "给你五十块。",
      "你几点起床？",
      "我喜欢吃米饭。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "找您十块钱。",
    "pinyin": "Zhǎo nín shí kuài qián.",
    "meaning": "",
    "options": [
      "我是越南人。",
      "周末的时候，朋友喜欢去中国吃饭。",
      "找您十块钱。",
      "你几点睡觉？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "公交车站在哪里？",
    "pinyin": "Gōngjiāo chē zhàn zài nǎlǐ?",
    "meaning": "",
    "options": [
      "会议结束以后，我马上回到中国继续学习。",
      "我很好，谢谢。",
      "公交车站在哪里？",
      "晚上好。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我要去火车站。",
    "pinyin": "Wǒ yào qù huǒchēzhàn.",
    "meaning": "",
    "options": [
      "我要去火车站。",
      "你今年几岁？",
      "姐姐觉得喝水很重要。",
      "经过讨论，我决定在中国看书。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "这辆车去市中心吗？",
    "pinyin": "Zhè liàng chē qù shì zhōngxīn ma?",
    "meaning": "",
    "options": [
      "这辆车去市中心吗？",
      "这个怎么读？",
      "经理正在检查咖啡，准备开始休息。",
      "医生告诉我，他最近正在学习。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我坐错车了。",
    "pinyin": "Wǒ zuò cuò chē le.",
    "meaning": "",
    "options": [
      "为了准备明天的工作，学生今晚还要听音乐。",
      "为了买东西，老师提前来到中国。",
      "我坐错车了。",
      "最近我常常需要买东西。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "请在这里停车。",
    "pinyin": "Qǐng zài zhèlǐ tíngchē.",
    "meaning": "",
    "options": [
      "有大一点的吗？",
      "这辆车去市中心吗？",
      "我七点起床。",
      "请在这里停车。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "还有多远？",
    "pinyin": "Hái yǒu duō yuǎn?",
    "meaning": "",
    "options": [
      "经过讨论，他决定在中国看书。",
      "明天我要上课。",
      "今天同学在商店喝水。",
      "还有多远？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "大概需要多久？",
    "pinyin": "Dàgài xūyào duōjiǔ?",
    "meaning": "",
    "options": [
      "同学正在商店回家。",
      "大概需要多久？",
      "这辆车去市中心吗？",
      "经理觉得喝水很重要。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我们快到了。",
    "pinyin": "Wǒmen kuài dào le.",
    "meaning": "",
    "options": [
      "会议结束以后，老师马上回到中国继续学习。",
      "请给我一碗米饭。",
      "我们快到了。",
      "我喜欢喝咖啡。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我迷路了。",
    "pinyin": "Wǒ mílù le.",
    "meaning": "",
    "options": [
      "我不要这个。",
      "昨天姐姐在商店休息，所以回家比较晚。",
      "最近哥哥常常需要买东西。",
      "我迷路了。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请帮我看一下地图。",
    "pinyin": "Qǐng bāng wǒ kàn yíxià dìtú.",
    "meaning": "",
    "options": [
      "这个太小了。",
      "今天姐姐在商店喝水。",
      "请帮我看一下地图。",
      "大概需要多久？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "左边有一家银行。",
    "pinyin": "Zuǒbian yǒu yì jiā yínháng.",
    "meaning": "",
    "options": [
      "不用客气。",
      "为了准备明天的工作，妈妈今晚还要听音乐。",
      "昨天经理在商店休息，所以回家比较晚。",
      "左边有一家银行。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "右边就是超市。",
    "pinyin": "Yòubian jiù shì chāoshì.",
    "meaning": "",
    "options": [
      "我想吃米饭。",
      "请往前走。",
      "我马上回来。",
      "右边就是超市。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "一直往前走。",
    "pinyin": "Yìzhí wǎng qián zǒu.",
    "meaning": "",
    "options": [
      "可以便宜一点吗？",
      "他每天都要看书。",
      "一直往前走。",
      "请坐。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "在第二个路口右转。",
    "pinyin": "Zài dì èr ge lùkǒu yòu zhuǎn.",
    "meaning": "",
    "options": [
      "虽然时间不多，但是姐姐还是完成了打电话。",
      "在第二个路口右转。",
      "好啊，我很期待。",
      "经过讨论，你决定在上海做作业。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "今天很热。",
    "pinyin": "Jīntiān hěn rè.",
    "meaning": "",
    "options": [
      "会议结束以后，你马上回到机场继续听音乐。",
      "今天很热。",
      "明天我们一起去公园吧。",
      "我有一个姐姐。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "今天有点冷。",
    "pinyin": "Jīntiān yǒudiǎn lěng.",
    "meaning": "",
    "options": [
      "我已经到了。",
      "爸爸正在商店旅行。",
      "今天有点冷。",
      "这个词是什么意思？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "外面下雨了。",
    "pinyin": "Wàimiàn xiàyǔ le.",
    "meaning": "Bên ngoài đang mưa.",
    "options": [
      "今天很冷。",
      "我有点累。",
      "我有一个妹妹。",
      "外面下雨了。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "别忘了带雨伞。",
    "pinyin": "Bié wàngle dài yǔsǎn.",
    "meaning": "",
    "options": [
      "晚饭我想吃饺子。",
      "我觉得做饭很重要。",
      "别忘了带雨伞。",
      "这件衣服多少钱？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "天气越来越好了。",
    "pinyin": "Tiānqì yuèláiyuè hǎo le.",
    "meaning": "",
    "options": [
      "姐姐希望明天可以继续运动。",
      "天气越来越好了。",
      "路上小心。",
      "你有几个兄弟姐妹？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你喜欢什么运动？",
    "pinyin": "Nǐ xǐhuan shénme yùndòng?",
    "meaning": "",
    "options": [
      "我忘记带手机了。",
      "你喜欢什么运动？",
      "他正在检查照片，准备开始旅行。",
      "妈妈希望明天可以继续运动。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我喜欢打篮球。",
    "pinyin": "Wǒ xǐhuan dǎ lánqiú.",
    "meaning": "",
    "options": [
      "我正在开会。",
      "你住在哪里？",
      "会议结束以后，医生马上回到餐厅继续听音乐。",
      "我喜欢打篮球。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我周末喜欢看电影。",
    "pinyin": "Wǒ zhōumò xǐhuan kàn diànyǐng.",
    "meaning": "",
    "options": [
      "你在哪里？",
      "我周末喜欢看电影。",
      "如果计划没有变化，我下午会在图书馆看电影。",
      "请给我发个消息。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你喜欢听什么音乐？",
    "pinyin": "Nǐ xǐhuan tīng shénme yīnyuè?",
    "meaning": "",
    "options": [
      "你喜欢听什么音乐？",
      "我喜欢打篮球。",
      "这件衣服多少钱？",
      "经过讨论，我的同学决定在餐厅打电话。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我喜欢听中文歌。",
    "pinyin": "Wǒ xǐhuan tīng Zhōngwén gē.",
    "meaning": "",
    "options": [
      "我的朋友正在检查咖啡，准备开始买东西。",
      "我每天早上跑步。",
      "我喜欢听中文歌。",
      "这本书很有意思。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你有几个兄弟姐妹？",
    "pinyin": "Nǐ yǒu jǐ ge xiōngdì jiěmèi?",
    "meaning": "",
    "options": [
      "路上小心。",
      "你有几个兄弟姐妹？",
      "他比我高一点。",
      "今天他在超市坐地铁。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我有一个妹妹。",
    "pinyin": "Wǒ yǒu yí ge mèimei.",
    "meaning": "",
    "options": [
      "我有一个妹妹。",
      "请打开书。",
      "请把窗户打开。",
      "这个问题很重要。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我和朋友住在一起。",
    "pinyin": "Wǒ hé péngyou zhù zài yìqǐ.",
    "meaning": "",
    "options": [
      "水太烫了。",
      "我需要多听多说。",
      "我和朋友住在一起。",
      "我喜欢打篮球。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我今天要去学校。",
    "pinyin": "Wǒ jīntiān yào qù xuéxiào.",
    "meaning": "",
    "options": [
      "我今天要去学校。",
      "昨天爸爸在医院看电影，所以回家比较晚。",
      "我有一个姐姐。",
      "我的中文进步了一点。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "老师正在上课。",
    "pinyin": "Lǎoshī zhèngzài shàngkè.",
    "meaning": "",
    "options": [
      "老师正在上课。",
      "为了准备明天的工作，哥哥今晚还要坐地铁。",
      "同事希望明天可以继续听音乐。",
      "今天很热。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "请打开书。",
    "pinyin": "Qǐng dǎkāi shū.",
    "meaning": "",
    "options": [
      "请打开书。",
      "请你说慢一点。",
      "为了准备明天的工作，孩子今晚还要旅行。",
      "请再说一遍。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "请看第三页。",
    "pinyin": "Qǐng kàn dì sān yè.",
    "meaning": "",
    "options": [
      "昨天老师在餐厅学习汉语，所以回家比较晚。",
      "请看第三页。",
      "我今天感觉很好。",
      "我听说哥哥最近在医院负责学习汉语。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个问题很简单。",
    "pinyin": "Zhège wèntí hěn jiǎndān.",
    "meaning": "",
    "options": [
      "如果计划没有变化，爸爸下午会在家里学习汉语。",
      "再试一次。",
      "手机没电了。",
      "这个问题很简单。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个问题有点难。",
    "pinyin": "Zhège wèntí yǒudiǎn nán.",
    "meaning": "",
    "options": [
      "晚上八点以后我有空。",
      "虽然时间不多，但是她还是完成了工作。",
      "我听说他最近在学校负责看电影。",
      "这个问题有点难。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我需要再练习。",
    "pinyin": "Wǒ xūyào zài liànxí.",
    "meaning": "",
    "options": [
      "我需要再练习。",
      "今天很冷。",
      "为了准备明天的工作，孩子今晚还要旅行。",
      "我听说我的朋友最近在上海负责看电影。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我每天学习一个小时。",
    "pinyin": "Wǒ měitiān xuéxí yí ge xiǎoshí.",
    "meaning": "",
    "options": [
      "为了准备明天的工作，我的朋友今晚还要买东西。",
      "不要紧张。",
      "如果有时间，我会去机场学习汉语。",
      "我每天学习一个小时。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你什么时候开始学中文？",
    "pinyin": "Nǐ shénme shíhou kāishǐ xué Zhōngwén?",
    "meaning": "",
    "options": [
      "我听说我最近在商店负责学习汉语。",
      "我听说哥哥最近在医院负责学习汉语。",
      "这个字怎么读？",
      "你什么时候开始学中文？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我去年开始学中文。",
    "pinyin": "Wǒ qùnián kāishǐ xué Zhōngwén.",
    "meaning": "",
    "options": [
      "我今天感觉不错。",
      "我去年开始学中文。",
      "今天很热。",
      "同事每天都要运动。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我的中文进步了一点。",
    "pinyin": "Wǒ de Zhōngwén jìnbù le yìdiǎn.",
    "meaning": "",
    "options": [
      "这本书很有意思。",
      "因为工作很忙，哥哥只能晚上旅行。",
      "如果计划没有变化，老师下午会在医院做饭。",
      "我的中文进步了一点。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我需要多听多说。",
    "pinyin": "Wǒ xūyào duō tīng duō shuō.",
    "meaning": "",
    "options": [
      "我需要多听多说。",
      "最近我的同学常常需要准备考试。",
      "如果有时间，哥哥会去北京做饭。",
      "小心，地上很滑。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你能给我一个例子吗？",
    "pinyin": "Nǐ néng gěi wǒ yí ge lìzi ma?",
    "meaning": "",
    "options": [
      "你能给我一个例子吗？",
      "我听说孩子最近在超市负责学习汉语。",
      "你学中文多久了？",
      "今天我的朋友在公司旅行。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "请写在黑板上。",
    "pinyin": "Qǐng xiě zài hēibǎn shàng.",
    "meaning": "",
    "options": [
      "今天孩子在车站坐地铁。",
      "请写在黑板上。",
      "手机没电了。",
      "我们下午再联系。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我忘记这个词了。",
    "pinyin": "Wǒ wàngjì zhège cí le.",
    "meaning": "",
    "options": [
      "你需要我做什么？",
      "我忘记这个词了。",
      "我六点下班。",
      "你住在哪里？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个词怎么用？",
    "pinyin": "Zhège cí zěnme yòng?",
    "meaning": "",
    "options": [
      "因为工作很忙，老师只能晚上坐地铁。",
      "他觉得做饭很重要。",
      "同事已经把汉语书带到北京了。",
      "这个词怎么用？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你能解释一下吗？",
    "pinyin": "Nǐ néng jiěshì yíxià ma?",
    "meaning": "",
    "options": [
      "你能解释一下吗？",
      "他正在餐厅坐地铁。",
      "这个词是什么意思？",
      "周末的时候，医生喜欢去北京运动。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我觉得这个方法很好。",
    "pinyin": "Wǒ juéde zhège fāngfǎ hěn hǎo.",
    "meaning": "",
    "options": [
      "昨天哥哥在超市看电影，所以回家比较晚。",
      "我觉得这个方法很好。",
      "我需要休息一下。",
      "如果计划没有变化，我下午会在图书馆看电影。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我们一起练习吧。",
    "pinyin": "Wǒmen yìqǐ liànxí ba.",
    "meaning": "",
    "options": [
      "周末的时候，她喜欢去机场准备考试。",
      "我们一起练习吧。",
      "为了准备明天的工作，爸爸今晚还要坐地铁。",
      "今天很热。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你准备好了吗？",
    "pinyin": "Nǐ zhǔnbèi hǎo le ma?",
    "meaning": "",
    "options": [
      "如果有时间，我会去机场学习汉语。",
      "你准备好了吗？",
      "你有兄弟姐妹吗？",
      "我去年开始学中文。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我准备好了。",
    "pinyin": "Wǒ zhǔnbèi hǎo le.",
    "meaning": "",
    "options": [
      "我明白了。",
      "最近你常常需要运动。",
      "我准备好了。",
      "今天很热。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "加油，你可以的。",
    "pinyin": "Jiāyóu, nǐ kěyǐ de.",
    "meaning": "",
    "options": [
      "这个词是什么意思？",
      "孩子正在上海买东西。",
      "加油，你可以的。",
      "这是我的朋友。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "不要紧张。",
    "pinyin": "Bú yào jǐnzhāng.",
    "meaning": "",
    "options": [
      "你需要我做什么？",
      "我已经吃过午饭了。",
      "我正在检查照片，准备开始旅行。",
      "不要紧张。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "慢慢来。",
    "pinyin": "Mànman lái.",
    "meaning": "",
    "options": [
      "因为工作很忙，孩子只能晚上旅行。",
      "慢慢来。",
      "我一会儿给你打电话。",
      "你会说中文吗？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你做得很好。",
    "pinyin": "Nǐ zuò de hěn hǎo.",
    "meaning": "",
    "options": [
      "我学中文一年了。",
      "你做得很好。",
      "请再说一遍。",
      "因为工作很忙，哥哥只能晚上旅行。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "再试一次。",
    "pinyin": "Zài shì yí cì.",
    "meaning": "",
    "options": [
      "再试一次。",
      "他比我高一点。",
      "我家有四个人。",
      "哥哥正在检查自行车，准备开始坐地铁。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我今天感觉不错。",
    "pinyin": "Wǒ jīntiān gǎnjué búcuò.",
    "meaning": "",
    "options": [
      "我听说他最近在学校负责看电影。",
      "为了准备明天的工作，孩子今晚还要旅行。",
      "我今天感觉不错。",
      "你需要我做什么？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我有点累。",
    "pinyin": "Wǒ yǒudiǎn lèi.",
    "meaning": "",
    "options": [
      "爸爸正在商店旅行。",
      "姐姐希望明天可以继续运动。",
      "我有点累。",
      "外面下雨了。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我需要休息一下。",
    "pinyin": "Wǒ xūyào xiūxi yíxià.",
    "meaning": "",
    "options": [
      "我需要休息一下。",
      "我准备好了。",
      "为了准备明天的工作，哥哥今晚还要坐地铁。",
      "今天很冷。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你今天怎么样？",
    "pinyin": "Nǐ jīntiān zěnmeyàng?",
    "meaning": "",
    "options": [
      "如果有时间，哥哥会去北京做饭。",
      "如果有时间，孩子会去图书馆做饭。",
      "你有几个兄弟姐妹？",
      "你今天怎么样？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "最近过得怎么样？",
    "pinyin": "Zuìjìn guò de zěnmeyàng?",
    "meaning": "",
    "options": [
      "最近过得怎么样？",
      "为了准备明天的工作，我的朋友今晚还要买东西。",
      "这个词怎么用？",
      "会议结束以后，她马上回到超市继续运动。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "最近一切都很好。",
    "pinyin": "Zuìjìn yíqiè dōu hěn hǎo.",
    "meaning": "",
    "options": [
      "最近一切都很好。",
      "爸爸正在检查咖啡，准备开始买东西。",
      "因为工作很忙，我的朋友只能晚上坐地铁。",
      "我忘记这个词了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你吃午饭了吗？",
    "pinyin": "Nǐ chī wǔfàn le ma?",
    "meaning": "",
    "options": [
      "你能帮我一下吗？",
      "你什么时候开始学中文？",
      "你每天都要听音乐。",
      "你吃午饭了吗？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我们中午一起吃饭吧。",
    "pinyin": "Wǒmen zhōngwǔ yìqǐ chīfàn ba.",
    "meaning": "",
    "options": [
      "我周末喜欢看电影。",
      "我们中午一起吃饭吧。",
      "她已经把报纸带到家里了。",
      "如果有时间，爸爸会去公司看电影。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "晚饭我想吃饺子。",
    "pinyin": "Wǎnfàn wǒ xiǎng chī jiǎozi.",
    "meaning": "",
    "options": [
      "今天哥哥在公园买东西。",
      "虽然时间不多，但是妈妈还是完成了打电话。",
      "我今天感觉很好。",
      "晚饭我想吃饺子。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你想喝茶还是咖啡？",
    "pinyin": "Nǐ xiǎng hē chá háishi kāfēi?",
    "meaning": "",
    "options": [
      "你想喝茶还是咖啡？",
      "孩子正在检查自行车，准备开始坐地铁。",
      "孩子觉得看电影很重要。",
      "我的同学希望明天可以继续听音乐。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我要一杯热茶。",
    "pinyin": "Wǒ yào yì bēi rè chá.",
    "meaning": "",
    "options": [
      "今天我的朋友在公司旅行。",
      "我要一杯热茶。",
      "明天我们一起去公园吧。",
      "我家有四个人。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "水太烫了。",
    "pinyin": "Shuǐ tài tàng le.",
    "meaning": "",
    "options": [
      "水太烫了。",
      "今天老师在学校旅行。",
      "因为工作很忙，孩子只能晚上旅行。",
      "周末的时候，你喜欢去图书馆运动。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "小心，地上很滑。",
    "pinyin": "Xiǎoxīn, dìshang hěn huá.",
    "meaning": "",
    "options": [
      "小心，地上很滑。",
      "今天早点睡吧。",
      "我已经吃过午饭了。",
      "昨天孩子在公司做饭，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "请关一下门。",
    "pinyin": "Qǐng guān yíxià mén.",
    "meaning": "",
    "options": [
      "如果计划没有变化，老师下午会在医院做饭。",
      "请关一下门。",
      "今天他在超市坐地铁。",
      "我们坐出租车去车站。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "请把窗户打开。",
    "pinyin": "Qǐng bǎ chuānghu dǎkāi.",
    "meaning": "",
    "options": [
      "我的同学希望明天可以继续听音乐。",
      "因为工作很忙，哥哥只能晚上旅行。",
      "请把窗户打开。",
      "请打开书。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "手机没电了。",
    "pinyin": "Shǒujī méi diàn le.",
    "meaning": "",
    "options": [
      "这件衣服多少钱？",
      "你告诉我，他最近正在打电话。",
      "手机没电了。",
      "当然可以。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你的电话响了。",
    "pinyin": "Nǐ de diànhuà xiǎng le.",
    "meaning": "",
    "options": [
      "你需要我做什么？",
      "这家饭店的菜很好吃。",
      "我需要多听多说。",
      "你的电话响了。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我一会儿给你打电话。",
    "pinyin": "Wǒ yíhuìr gěi nǐ dǎ diànhuà.",
    "meaning": "",
    "options": [
      "这家饭店的菜很好吃。",
      "我有一个妹妹。",
      "我一会儿给你打电话。",
      "你喜欢什么运动？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "请给我发个消息。",
    "pinyin": "Qǐng gěi wǒ fā ge xiāoxi.",
    "meaning": "",
    "options": [
      "会议结束以后，她马上回到超市继续运动。",
      "我的同学已经把报纸带到公司了。",
      "因为工作很忙，孩子只能晚上旅行。",
      "请给我发个消息。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我现在不方便接电话。",
    "pinyin": "Wǒ xiànzài bù fāngbiàn jiē diànhuà.",
    "meaning": "",
    "options": [
      "姐姐希望明天可以继续运动。",
      "我现在不方便接电话。",
      "我的朋友觉得做饭很重要。",
      "我们下午再联系。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "网络有点慢。",
    "pinyin": "Wǎngluò yǒudiǎn màn.",
    "meaning": "",
    "options": [
      "请提前十分钟到。",
      "哥哥已经把护照带到上海了。",
      "如果有时间，经理会去餐厅安排时间。",
      "网络有点慢。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "密码是什么？",
    "pinyin": "Mìmǎ shì shénme?",
    "meaning": "",
    "options": [
      "我正在检查电脑，准备开始练习发音。",
      "每天一点点就很好。",
      "密码是什么？",
      "周末的时候，老师喜欢去公司介绍自己。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "请稍等一下。",
    "pinyin": "Qǐng shāo děng yíxià.",
    "meaning": "",
    "options": [
      "为了准备明天的工作，老师今晚还要买东西。",
      "我们下午三点开会。",
      "请稍等一下。",
      "昨天经理在图书馆安排时间，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我马上处理。",
    "pinyin": "Wǒ mǎshàng chǔlǐ.",
    "meaning": "",
    "options": [
      "我马上处理。",
      "老师希望明天可以继续介绍自己。",
      "网络有点慢。",
      "这样做比较方便。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "这个文件在哪里？",
    "pinyin": "Zhège wénjiàn zài nǎlǐ?",
    "meaning": "",
    "options": [
      "这个文件在哪里？",
      "先不要看拼音。",
      "会议结束以后，我马上回到公园继续练习发音。",
      "今天经理在北京安排时间。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "请把文件发给我。",
    "pinyin": "Qǐng bǎ wénjiàn fā gěi wǒ.",
    "meaning": "",
    "options": [
      "因为工作很忙，老师只能晚上买东西。",
      "我们每天晚上聊天。",
      "请把文件发给我。",
      "让我想一想。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我已经收到文件了。",
    "pinyin": "Wǒ yǐjīng shōudào wénjiàn le.",
    "meaning": "",
    "options": [
      "今天老师在图书馆准备考试。",
      "我已经收到文件了。",
      "继续保持。",
      "重复练习可以提高反应速度。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我们下午开会。",
    "pinyin": "Wǒmen xiàwǔ kāihuì.",
    "meaning": "",
    "options": [
      "为了准备明天的工作，我今晚还要练习发音。",
      "我们下午开会。",
      "学习语言需要坚持。",
      "如果计划没有变化，哥哥下午会在医院完成作业。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "会议几点开始？",
    "pinyin": "Huìyì jǐ diǎn kāishǐ?",
    "meaning": "",
    "options": [
      "会议几点开始？",
      "经理正在检查手机，准备开始安排时间。",
      "为了安排时间，经理提前来到广州。",
      "哥哥每天都要参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "请提前十分钟到。",
    "pinyin": "Qǐng tíqián shí fēnzhōng dào.",
    "meaning": "",
    "options": [
      "重复练习可以提高反应速度。",
      "我正在检查电脑，准备开始练习发音。",
      "最近哥哥常常需要参加会议。",
      "请提前十分钟到。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "今天的工作完成了吗？",
    "pinyin": "Jīntiān de gōngzuò wánchéng le ma?",
    "meaning": "",
    "options": [
      "我的房间在哪里？",
      "如果明天有时间，我们一起去。",
      "为了计划旅行，经理提前来到北京。",
      "今天的工作完成了吗？"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我还差一点。",
    "pinyin": "Wǒ hái chà yìdiǎn.",
    "meaning": "",
    "options": [
      "老师希望明天可以继续准备考试。",
      "因为工作很忙，老师只能晚上准备考试。",
      "周末的时候，哥哥喜欢去上海解决问题。",
      "我还差一点。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我已经完成了。",
    "pinyin": "Wǒ yǐjīng wánchéng le.",
    "meaning": "",
    "options": [
      "这一题你答对了。",
      "我已经完成了。",
      "最近哥哥常常需要参加会议。",
      "我们需要提前准备材料。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我们明天再讨论。",
    "pinyin": "Wǒmen míngtiān zài tǎolùn.",
    "meaning": "",
    "options": [
      "我告诉我，他最近正在打扫房间。",
      "虽然时间不多，但是经理还是完成了安排时间。",
      "我们明天再讨论。",
      "这样做比较方便。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "这个建议很好。",
    "pinyin": "Zhège jiànyì hěn hǎo.",
    "meaning": "",
    "options": [
      "你为什么不开心？",
      "因为工作很忙，我只能晚上练习发音。",
      "这个建议很好。",
      "经理觉得安排时间很重要。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我同意你的看法。",
    "pinyin": "Wǒ tóngyì nǐ de kànfǎ.",
    "meaning": "",
    "options": [
      "我同意你的看法。",
      "轮到你了。",
      "老师希望明天可以继续买东西。",
      "这个文件在哪里？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我有不同的意见。",
    "pinyin": "Wǒ yǒu bùtóng de yìjiàn.",
    "meaning": "",
    "options": [
      "这样更容易记住。",
      "经过讨论，经理决定在图书馆安排时间。",
      "听不懂也不要马上放弃。",
      "我有不同的意见。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们需要找到解决办法。",
    "pinyin": "Wǒmen xūyào zhǎodào jiějué bànfǎ.",
    "meaning": "",
    "options": [
      "网络有点慢。",
      "我们需要找到解决办法。",
      "最近哥哥常常需要解决问题。",
      "如果明天有时间，我们一起去。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你能解释原因吗？",
    "pinyin": "Nǐ néng jiěshì yuányīn ma?",
    "meaning": "",
    "options": [
      "你能解释原因吗？",
      "老师正在公司介绍自己。",
      "哥哥希望明天可以继续完成作业。",
      "如果有问题，请告诉我。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "因为今天下雨，所以我没出去。",
    "pinyin": "Yīnwèi jīntiān xiàyǔ, suǒyǐ wǒ méi chūqù.",
    "meaning": "",
    "options": [
      "因为今天下雨，所以我没出去。",
      "我告诉我，他最近正在练习发音。",
      "不要害怕说错。",
      "会议结束以后，哥哥马上回到医院继续解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "如果有问题，请告诉我。",
    "pinyin": "Rúguǒ yǒu wèntí, qǐng gàosu wǒ.",
    "meaning": "",
    "options": [
      "为了准备明天的工作，经理今晚还要计划旅行。",
      "如果有问题，请告诉我。",
      "虽然很忙，但是我会完成。",
      "最近老师常常需要准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "虽然很忙，但是我会完成。",
    "pinyin": "Suīrán hěn máng, dànshì wǒ huì wánchéng.",
    "meaning": "",
    "options": [
      "虽然很忙，但是我会完成。",
      "该你回答了。",
      "只要努力，就会进步。",
      "这个决定对大家都很重要。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "除了中文，我还学习英语。",
    "pinyin": "Chúle Zhōngwén, wǒ hái xuéxí Yīngyǔ.",
    "meaning": "",
    "options": [
      "我们快迟到了。",
      "我最喜欢学口语。",
      "准备好就开始吧。",
      "除了中文，我还学习英语。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我希望以后可以说得更流利。",
    "pinyin": "Wǒ xīwàng yǐhòu kěyǐ shuō de gèng liúlì.",
    "meaning": "",
    "options": [
      "我希望以后可以说得更流利。",
      "为了联系朋友，经理提前来到图书馆。",
      "我最喜欢学口语。",
      "经过讨论，经理决定在餐厅计划旅行。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我每天都听中文。",
    "pinyin": "Wǒ měitiān dōu tīng Zhōngwén.",
    "meaning": "",
    "options": [
      "我每天都听中文。",
      "继续保持。",
      "周末的时候，哥哥喜欢去家里完成作业。",
      "哥哥觉得完成作业很重要。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我正在练习听力。",
    "pinyin": "Wǒ zhèngzài liànxí tīnglì.",
    "meaning": "",
    "options": [
      "我正在练习听力。",
      "你对这个计划有什么建议？",
      "因为工作很忙，我只能晚上练习发音。",
      "先听关键词，再理解整句话。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "听力对学习语言很重要。",
    "pinyin": "Tīnglì duì xuéxí yǔyán hěn zhòngyào.",
    "meaning": "",
    "options": [
      "听力对学习语言很重要。",
      "为了准备明天的工作，我今晚还要学习汉语。",
      "经理觉得计划旅行很重要。",
      "今天的内容很简单。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "先听关键词，再理解整句话。",
    "pinyin": "Xiān tīng guānjiàncí, zài lǐjiě zhěng jù huà.",
    "meaning": "",
    "options": [
      "先听关键词，再理解整句话。",
      "我每天都要打扫房间。",
      "你觉得中文难吗？",
      "如果计划没有变化，经理下午会在图书馆计划旅行。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "听不懂也不要马上放弃。",
    "pinyin": "Tīng bù dǒng yě bú yào mǎshàng fàngqì.",
    "meaning": "",
    "options": [
      "明天继续练习。",
      "听不懂也不要马上放弃。",
      "这个问题需要时间。",
      "会议结束以后，哥哥马上回到医院继续解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "多听几遍就会越来越熟悉。",
    "pinyin": "Duō tīng jǐ biàn jiù huì yuèláiyuè shúxī.",
    "meaning": "",
    "options": [
      "多听几遍就会越来越熟悉。",
      "哥哥每天都要解决问题。",
      "再听一次，你会听出来的。",
      "会议结束以后，哥哥马上回到上海继续参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "今天我们练习十句话。",
    "pinyin": "Jīntiān wǒmen liànxí shí jù huà.",
    "meaning": "",
    "options": [
      "今天我们练习十句话。",
      "你已经做得很好了。",
      "重复练习可以提高反应速度。",
      "我正在检查电脑，准备开始练习发音。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "明天继续练习。",
    "pinyin": "Míngtiān jìxù liànxí.",
    "meaning": "",
    "options": [
      "我也想提高发音。",
      "轮到你了。",
      "明天继续练习。",
      "老师正在检查雨伞，准备开始准备考试。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "祝你学习进步。",
    "pinyin": "Zhù nǐ xuéxí jìnbù.",
    "meaning": "",
    "options": [
      "为了准备明天的工作，我今晚还要打扫房间。",
      "为了计划旅行，经理提前来到北京。",
      "祝你学习进步。",
      "如果计划没有变化，经理下午会在图书馆计划旅行。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "祝你今天开心。",
    "pinyin": "Zhù nǐ jīntiān kāixīn.",
    "meaning": "",
    "options": [
      "祝你今天开心。",
      "你平时跟谁练习中文？",
      "周末的时候，哥哥喜欢去家里完成作业。",
      "现在我觉得容易多了。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "祝你一路顺风。",
    "pinyin": "Zhù nǐ yílù shùnfēng.",
    "meaning": "",
    "options": [
      "哥哥希望明天可以继续参加会议。",
      "经理已经把地图带到广州了。",
      "哥哥已经把护照带到上海了。",
      "祝你一路顺风。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "欢迎来到我们的中文课程。",
    "pinyin": "Huānyíng láidào wǒmen de Zhōngwén kèchéng.",
    "meaning": "",
    "options": [
      "经理告诉我，他最近正在联系朋友。",
      "经过讨论，我决定在医院学习汉语。",
      "除了中文，我还学习英语。",
      "欢迎来到我们的中文课程。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "今天的内容很简单。",
    "pinyin": "Jīntiān de nèiróng hěn jiǎndān.",
    "meaning": "",
    "options": [
      "因为今天下雨，所以我没出去。",
      "这样做比较方便。",
      "今天的内容很简单。",
      "这件事情没有你想象的那么复杂。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "下一题会稍微难一点。",
    "pinyin": "Xià yì tí huì shāowéi nán yìdiǎn.",
    "meaning": "",
    "options": [
      "虽然时间不多，但是哥哥还是完成了解决问题。",
      "下一题会稍微难一点。",
      "我们先讨论一下。",
      "哥哥希望明天可以继续参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "答错了也没关系。",
    "pinyin": "Dá cuò le yě méi guānxi.",
    "meaning": "",
    "options": [
      "会议结束以后，哥哥马上回到医院继续解决问题。",
      "今天我在上海练习发音。",
      "答错了也没关系。",
      "哥哥希望明天可以继续完成作业。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "把错题再听一遍。",
    "pinyin": "Bǎ cuòtí zài tīng yí biàn.",
    "meaning": "",
    "options": [
      "这一题你答错了。",
      "你的反应越来越快了。",
      "把错题再听一遍。",
      "昨天经理在广州计划旅行，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "重复练习可以提高反应速度。",
    "pinyin": "Chóngfù liànxí kěyǐ tígāo fǎnyìng sùdù.",
    "meaning": "",
    "options": [
      "重复练习可以提高反应速度。",
      "今天经理在图书馆计划旅行。",
      "我们下午开会。",
      "这件事情没有你想象的那么复杂。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "听到熟悉的词就先记下来。",
    "pinyin": "Tīngdào shúxī de cí jiù xiān jì xiàlái.",
    "meaning": "",
    "options": [
      "如果计划没有变化，哥哥下午会在公园参加会议。",
      "因为工作很忙，经理只能晚上安排时间。",
      "你觉得这个办法怎么样？",
      "听到熟悉的词就先记下来。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "先不要看拼音。",
    "pinyin": "Xiān bú yào kàn pīnyīn.",
    "meaning": "",
    "options": [
      "没问题，我等你。",
      "学习语言需要时间。",
      "先不要看拼音。",
      "这个方法比较简单。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "听完以后再看答案。",
    "pinyin": "Tīng wán yǐhòu zài kàn dáàn.",
    "meaning": "",
    "options": [
      "最近哥哥常常需要完成作业。",
      "学习语言需要时间。",
      "听完以后再看答案。",
      "我正在练习听力。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "你可以再听一次。",
    "pinyin": "Nǐ kěyǐ zài tīng yí cì.",
    "meaning": "",
    "options": [
      "现在路上堵车吗？",
      "今天我在公园学习汉语。",
      "这个方法比较简单。",
      "你可以再听一次。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "现在开始下一题。",
    "pinyin": "Xiànzài kāishǐ xià yì tí.",
    "meaning": "",
    "options": [
      "听不懂的时候可以再听一次。",
      "现在开始下一题。",
      "你平时跟谁练习中文？",
      "为了安排时间，经理提前来到广州。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "准备好就开始吧。",
    "pinyin": "Zhǔnbèi hǎo jiù kāishǐ ba.",
    "meaning": "",
    "options": [
      "哥哥觉得参加会议很重要。",
      "下一班车几点出发？",
      "我觉得可以试试。",
      "准备好就开始吧。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请集中注意力。",
    "pinyin": "Qǐng jízhōng zhùyìlì.",
    "meaning": "",
    "options": [
      "请集中注意力。",
      "我听说经理最近在公司负责联系朋友。",
      "我们明天再讨论。",
      "经理正在公司联系朋友。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "认真听，不要着急。",
    "pinyin": "Rènzhēn tīng, bú yào zháojí.",
    "meaning": "",
    "options": [
      "会议结束以后，哥哥马上回到公园继续完成作业。",
      "会议结束以后，哥哥马上回到医院继续解决问题。",
      "认真听，不要着急。",
      "我同意你的看法。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "你的反应越来越快了。",
    "pinyin": "Nǐ de fǎnyìng yuèláiyuè kuài le.",
    "meaning": "",
    "options": [
      "你的反应越来越快了。",
      "这个问题需要时间。",
      "欢迎来到我们的中文课程。",
      "昨天经理在北京联系朋友，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "今天比昨天进步了。",
    "pinyin": "Jīntiān bǐ zuótiān jìnbù le.",
    "meaning": "",
    "options": [
      "无线网络的密码是什么？",
      "准备好就开始吧。",
      "经理正在检查手机，准备开始安排时间。",
      "今天比昨天进步了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "坚持下去一定会有进步。",
    "pinyin": "Jiānchí xiàqù yídìng huì yǒu jìnbù.",
    "meaning": "",
    "options": [
      "如果计划没有变化，老师下午会在图书馆介绍自己。",
      "我已经把照片带到学校了。",
      "今天老师在图书馆准备考试。",
      "坚持下去一定会有进步。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "学习语言需要时间。",
    "pinyin": "Xuéxí yǔyán xūyào shíjiān.",
    "meaning": "",
    "options": [
      "为了安排时间，经理提前来到广州。",
      "学习语言需要时间。",
      "我们下午三点开会。",
      "我喜欢用中文聊天。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "每天一点点就很好。",
    "pinyin": "Měitiān yìdiǎndiǎn jiù hěn hǎo.",
    "meaning": "",
    "options": [
      "准备好就开始吧。",
      "听完以后再看答案。",
      "每天一点点就很好。",
      "我说得对吗？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我喜欢用中文聊天。",
    "pinyin": "Wǒ xǐhuan yòng Zhōngwén liáotiān.",
    "meaning": "",
    "options": [
      "周末的时候，我喜欢去上海学习汉语。",
      "我喜欢用中文聊天。",
      "我正在检查机票，准备开始打扫房间。",
      "如果计划没有变化，经理下午会在北京安排时间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你平时跟谁练习中文？",
    "pinyin": "Nǐ píngshí gēn shéi liànxí Zhōngwén?",
    "meaning": "",
    "options": [
      "经过讨论，经理决定在图书馆安排时间。",
      "祝你一路顺风。",
      "你平时跟谁练习中文？",
      "我们下午三点开会。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我跟朋友一起练习。",
    "pinyin": "Wǒ gēn péngyou yìqǐ liànxí.",
    "meaning": "",
    "options": [
      "我跟朋友一起练习。",
      "早餐几点开始？",
      "听力对学习语言很重要。",
      "哥哥每天都要解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我们每天晚上聊天。",
    "pinyin": "Wǒmen měitiān wǎnshang liáotiān.",
    "meaning": "",
    "options": [
      "我们以后再决定。",
      "虽然时间不多，但是经理还是完成了安排时间。",
      "我们每天晚上聊天。",
      "会议结束以后，哥哥马上回到上海继续参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "你觉得中文难吗？",
    "pinyin": "Nǐ juéde Zhōngwén nán ma?",
    "meaning": "",
    "options": [
      "如果计划没有变化，哥哥下午会在公园参加会议。",
      "虽然时间不多，但是我还是完成了学习汉语。",
      "你觉得中文难吗？",
      "我觉得可以试试。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "开始的时候有一点难。",
    "pinyin": "Kāishǐ de shíhou yǒu yìdiǎn nán.",
    "meaning": "",
    "options": [
      "我每天都要打扫房间。",
      "开始的时候有一点难。",
      "我马上处理。",
      "多听几遍就会越来越熟悉。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "现在我觉得容易多了。",
    "pinyin": "Xiànzài wǒ juéde róngyì duō le.",
    "meaning": "",
    "options": [
      "现在我觉得容易多了。",
      "我们从第一题开始。",
      "虽然时间不多，但是我还是完成了打扫房间。",
      "我们应该先解决最重要的问题。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我最喜欢学口语。",
    "pinyin": "Wǒ zuì xǐhuan xué kǒuyǔ.",
    "meaning": "",
    "options": [
      "我最喜欢学口语。",
      "我告诉我，他最近正在练习发音。",
      "我要去机场。",
      "开始的时候有一点难。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我想提高听力。",
    "pinyin": "Wǒ xiǎng tígāo tīnglì.",
    "meaning": "",
    "options": [
      "密码是什么？",
      "听完以后再看答案。",
      "先不要看拼音。",
      "我想提高听力。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我也想提高发音。",
    "pinyin": "Wǒ yě xiǎng tígāo fāyīn.",
    "meaning": "",
    "options": [
      "我要去机场。",
      "我也想提高发音。",
      "祝你一路顺风。",
      "这个建议很好。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "请纠正我的发音。",
    "pinyin": "Qǐng jiūzhèng wǒ de fāyīn.",
    "meaning": "",
    "options": [
      "祝你学习进步。",
      "没什么，只是有点累。",
      "请纠正我的发音。",
      "你最近怎么样？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "这个音怎么发？",
    "pinyin": "Zhège yīn zěnme fā?",
    "meaning": "",
    "options": [
      "加油！",
      "这个音怎么发？",
      "虽然很忙，但是我会完成。",
      "我想住两晚。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我说得对吗？",
    "pinyin": "Wǒ shuō de duì ma?",
    "meaning": "",
    "options": [
      "周末的时候，哥哥喜欢去家里完成作业。",
      "昨天哥哥在公园解决问题，所以回家比较晚。",
      "我告诉我，他最近正在打扫房间。",
      "我说得对吗？"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "差不多，再注意声调。",
    "pinyin": "Chàbuduō, zài zhùyì shēngdiào.",
    "meaning": "",
    "options": [
      "差不多，再注意声调。",
      "会议结束以后，老师马上回到北京继续介绍自己。",
      "经理已经把地图带到广州了。",
      "这个问题需要时间。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "第一声要保持平稳。",
    "pinyin": "Dì yī shēng yào bǎochí píngwěn.",
    "meaning": "",
    "options": [
      "第一声要保持平稳。",
      "我已经完成了。",
      "这个音怎么发？",
      "哥哥已经把护照带到上海了。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "第三声要注意变化。",
    "pinyin": "Dì sān shēng yào zhùyì biànhuà.",
    "meaning": "",
    "options": [
      "第三声要注意变化。",
      "我听说经理最近在机场负责计划旅行。",
      "我的房间在哪里？",
      "为了安排时间，经理提前来到广州。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "请跟我读一遍。",
    "pinyin": "Qǐng gēn wǒ dú yí biàn.",
    "meaning": "",
    "options": [
      "请跟我读一遍。",
      "我已经把照片带到学校了。",
      "我同意你的看法。",
      "听不懂也不要马上放弃。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "轮到你了。",
    "pinyin": "Lún dào nǐ le.",
    "meaning": "",
    "options": [
      "会议结束以后，老师马上回到图书馆继续买东西。",
      "老师每天都要买东西。",
      "老师希望明天可以继续介绍自己。",
      "轮到你了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "该你回答了。",
    "pinyin": "Gāi nǐ huídá le.",
    "meaning": "",
    "options": [
      "如果有时间，哥哥会去超市参加会议。",
      "该你回答了。",
      "你的反应越来越快了。",
      "会议几点开始？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你准备好回答了吗？",
    "pinyin": "Nǐ zhǔnbèi hǎo huídá le ma?",
    "meaning": "",
    "options": [
      "你准备好回答了吗？",
      "老师正在机场准备考试。",
      "如果有时间，哥哥会去车站完成作业。",
      "我已经把资料发给你了。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我还需要一点时间。",
    "pinyin": "Wǒ hái xūyào yìdiǎn shíjiān.",
    "meaning": "",
    "options": [
      "密码是什么？",
      "我还需要一点时间。",
      "经过讨论，我决定在医院学习汉语。",
      "为了安排时间，经理提前来到广州。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "没问题，我等你。",
    "pinyin": "Méi wèntí, wǒ děng nǐ.",
    "meaning": "",
    "options": [
      "为了准备明天的工作，老师今晚还要介绍自己。",
      "没问题，我等你。",
      "我们从第一题开始。",
      "不要害怕说错。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我们从第一题开始。",
    "pinyin": "Wǒmen cóng dì yī tí kāishǐ.",
    "meaning": "",
    "options": [
      "虽然很忙，但是我会完成。",
      "我们从第一题开始。",
      "我喜欢用中文聊天。",
      "我同意你的看法。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "这一题你答对了。",
    "pinyin": "Zhè yì tí nǐ dá duì le.",
    "meaning": "",
    "options": [
      "这一题你答对了。",
      "经过讨论，经理决定在图书馆安排时间。",
      "听不懂的时候可以再听一次。",
      "会议结束以后，老师马上回到北京继续介绍自己。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "这一题你答错了。",
    "pinyin": "Zhè yì tí nǐ dá cuò le.",
    "meaning": "",
    "options": [
      "这一题你答错了。",
      "加油！",
      "我正在家里练习发音。",
      "你对这个计划有什么建议？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "再听一次，你会听出来的。",
    "pinyin": "Zài tīng yí cì, nǐ huì tīng chūlái de.",
    "meaning": "",
    "options": [
      "我喜欢用中文聊天。",
      "如果有时间，哥哥会去超市参加会议。",
      "他正在准备考试，所以很忙。",
      "再听一次，你会听出来的。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "不要只记答案，要听懂句子。",
    "pinyin": "Bú yào zhǐ jì dáàn, yào tīng dǒng jùzi.",
    "meaning": "",
    "options": [
      "不要只记答案，要听懂句子。",
      "虽然很忙，但是我会完成。",
      "这个音怎么发？",
      "昨天经理在广州计划旅行，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "把新单词放进句子里学习。",
    "pinyin": "Bǎ xīn dāncí fàng jìn jùzi lǐ xuéxí.",
    "meaning": "",
    "options": [
      "哥哥已经把护照带到上海了。",
      "老师希望明天可以继续准备考试。",
      "最近哥哥常常需要参加会议。",
      "把新单词放进句子里学习。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "这样更容易记住。",
    "pinyin": "Zhèyàng gèng róngyì jìzhù.",
    "meaning": "",
    "options": [
      "听力对学习语言很重要。",
      "我正在检查机票，准备开始打扫房间。",
      "这样更容易记住。",
      "我们下午开会。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "今天就练到这里。",
    "pinyin": "Jīntiān jiù liàn dào zhèlǐ.",
    "meaning": "",
    "options": [
      "我喜欢用中文聊天。",
      "这个建议很好。",
      "今天就练到这里。",
      "请跟我读一遍。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "下次我们继续。",
    "pinyin": "Xià cì wǒmen jìxù.",
    "meaning": "",
    "options": [
      "下次我们继续。",
      "如果有时间，哥哥会去车站完成作业。",
      "哥哥觉得完成作业很重要。",
      "虽然很忙，但是我会完成。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "你已经做得很好了。",
    "pinyin": "Nǐ yǐjīng zuò de hěn hǎo le.",
    "meaning": "",
    "options": [
      "你已经做得很好了。",
      "这个决定对大家都很重要。",
      "因为下雨，所以我们没有出去。",
      "我正在车站学习汉语。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "继续保持。",
    "pinyin": "Jìxù bǎochí.",
    "meaning": "",
    "options": [
      "请问需要多长时间？",
      "昨天哥哥在家里参加会议，所以回家比较晚。",
      "不要害怕说错。",
      "继续保持。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "加油！",
    "pinyin": "Jiāyóu!",
    "meaning": "",
    "options": [
      "我想订一个房间。",
      "周末的时候，老师喜欢去公司介绍自己。",
      "加油！",
      "如果计划没有变化，哥哥下午会在公园参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "今天你在商店喝水。",
    "meaning": "今天，你在商店喝水。",
    "options": [
      "他在学校学习。",
      "为了准备明天的工作，经理今晚还要听音乐。",
      "今天你在商店喝水。",
      "学生觉得喝水很重要。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "老师每天都要看书。",
    "meaning": "老师每天都要看书。",
    "options": [
      "我今年二十岁。",
      "我从越南来。",
      "周末的时候，爸爸喜欢去中国吃饭。",
      "老师每天都要看书。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "如果有时间，妈妈会去商店听音乐。",
    "meaning": "如果有时间，妈妈会去商店听音乐。",
    "options": [
      "如果有时间，妈妈会去商店听音乐。",
      "我听说妈妈最近在商店负责工作。",
      "今天星期一。",
      "早上好。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "为了买东西，哥哥提前来到中国。",
    "meaning": "为了买东西，哥哥提前来到中国。",
    "options": [
      "我喜欢喝茶。",
      "明天我要上课。",
      "你现在有空吗？",
      "为了买东西，哥哥提前来到中国。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "经理正在商店回家。",
    "meaning": "经理正在商店回家。",
    "options": [
      "你觉得喝水很重要。",
      "我叫李明。",
      "你怎么写这个字？",
      "经理正在商店回家。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "他希望明天可以继续睡觉。",
    "meaning": "他希望明天可以继续睡觉。",
    "options": [
      "虽然时间不多，但是老师还是完成了吃饭。",
      "爸爸希望明天可以继续睡觉。",
      "老师告诉我，他最近正在学习。",
      "他希望明天可以继续睡觉。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "昨天学生在商店休息，所以回家比较晚。",
    "meaning": "昨天，学生在商店休息，所以回家比较晚。",
    "options": [
      "昨天经理在商店休息，所以回家比较晚。",
      "昨天学生在商店休息，所以回家比较晚。",
      "请向右转。",
      "最近哥哥常常需要买东西。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "爸爸告诉我，他最近正在学习。",
    "meaning": "爸爸告诉我，他最近正在学习。",
    "options": [
      "找您十块钱。",
      "老师已经把手机带到中国了。",
      "如果有时间，你会去商店听音乐。",
      "爸爸告诉我，他最近正在学习。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "因为工作很忙，同学只能晚上工作。",
    "meaning": "因为工作很忙，同学只能晚上工作。",
    "options": [
      "会议结束以后，我马上回到中国继续学习。",
      "早上好。",
      "朋友希望明天可以继续睡觉。",
      "因为工作很忙，同学只能晚上工作。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "周末的时候，我喜欢去中国吃饭。",
    "meaning": "周末的时候，我喜欢去中国吃饭。",
    "options": [
      "周末的时候，我喜欢去中国吃饭。",
      "如果计划没有变化，姐姐下午会在商店回家。",
      "你从哪里来？",
      "我七点起床。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "她觉得喝水很重要。",
    "meaning": "她觉得喝水很重要。",
    "options": [
      "请给我一杯水。",
      "她觉得喝水很重要。",
      "他每天都要看书。",
      "妈妈正在商店回家。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "经过讨论，朋友决定在中国看书。",
    "meaning": "经过讨论，朋友决定在中国看书。",
    "options": [
      "经过讨论，朋友决定在中国看书。",
      "最近哥哥常常需要买东西。",
      "我不吃辣。",
      "请给我一张发票。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "为了准备明天的工作，姐姐今晚还要听音乐。",
    "meaning": "为了准备明天的工作，姐姐今晚还要听音乐。",
    "options": [
      "医生每天都要看书。",
      "为了准备明天的工作，姐姐今晚还要听音乐。",
      "你好吗？",
      "经理觉得喝水很重要。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "最近医生常常需要买东西。",
    "meaning": "最近，医生常常需要买东西。",
    "options": [
      "请进。",
      "他每天都要看书。",
      "最近他常常需要买东西。",
      "最近医生常常需要买东西。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "如果计划没有变化，你下午会在商店回家。",
    "meaning": "如果计划没有变化，你下午会在商店回家。",
    "options": [
      "会议结束以后，医生马上回到中国继续学习。",
      "谢谢。",
      "老师已经把手机带到中国了。",
      "如果计划没有变化，你下午会在商店回家。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "老师已经把手机带到中国了。",
    "meaning": "老师已经把手机带到中国了。",
    "options": [
      "朋友希望明天可以继续睡觉。",
      "你想吃什么？",
      "你可以带我去吗？",
      "老师已经把手机带到中国了。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "妈妈正在检查咖啡，准备开始休息。",
    "meaning": "妈妈正在检查咖啡，准备开始休息。",
    "options": [
      "经过讨论，老师决定在中国看书。",
      "请再说一遍。",
      "妈妈正在检查咖啡，准备开始休息。",
      "今天星期一。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "会议结束以后，哥哥马上回到中国继续学习。",
    "meaning": "会议结束以后，哥哥马上回到中国继续学习。",
    "options": [
      "如果计划没有变化，经理下午会在商店回家。",
      "找您十块钱。",
      "会议结束以后，哥哥马上回到中国继续学习。",
      "如果计划没有变化，同学下午会在商店回家。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我听说经理最近在商店负责工作。",
    "meaning": "我听说，经理最近在商店负责工作。",
    "options": [
      "左边有一家银行。",
      "你几点起床？",
      "我听说经理最近在商店负责工作。",
      "朋友每天都要看书。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "虽然时间不多，但是他还是完成了吃饭。",
    "meaning": "虽然时间不多，但是他还是完成了吃饭。",
    "options": [
      "虽然时间不多，但是他还是完成了吃饭。",
      "他已经把手机带到中国了。",
      "今天星期五。",
      "经理正在商店回家。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "今天学生在商店喝水。",
    "meaning": "今天，学生在商店喝水。",
    "options": [
      "虽然时间不多，但是爸爸还是完成了吃饭。",
      "会议结束以后，我马上回到中国继续学习。",
      "我每天坐公交车上班。",
      "今天学生在商店喝水。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "爸爸每天都要看书。",
    "meaning": "爸爸每天都要看书。",
    "options": [
      "为了买东西，我提前来到中国。",
      "我听说妈妈最近在商店负责工作。",
      "爸爸每天都要看书。",
      "没关系。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "如果有时间，同学会去商店听音乐。",
    "meaning": "如果有时间，同学会去商店听音乐。",
    "options": [
      "如果有时间，同学会去商店听音乐。",
      "没关系。",
      "我从越南来。",
      "她觉得喝水很重要。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "为了买东西，我提前来到中国。",
    "meaning": "为了买东西，我提前来到中国。",
    "options": [
      "我已经把手机带到中国了。",
      "你会说中文吗？",
      "昨天妈妈在商店休息，所以回家比较晚。",
      "为了买东西，我提前来到中国。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "她正在商店回家。",
    "meaning": "她正在商店回家。",
    "options": [
      "爸爸告诉我，他最近正在学习。",
      "今天经理在商店喝水。",
      "如果计划没有变化，你下午会在商店回家。",
      "她正在商店回家。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "朋友希望明天可以继续睡觉。",
    "meaning": "朋友希望明天可以继续睡觉。",
    "options": [
      "你喜欢喝茶吗？",
      "她正在检查咖啡，准备开始休息。",
      "我可以试穿吗？",
      "朋友希望明天可以继续睡觉。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "昨天姐姐在商店休息，所以回家比较晚。",
    "meaning": "昨天，姐姐在商店休息，所以回家比较晚。",
    "options": [
      "周末的时候，医生喜欢去中国吃饭。",
      "昨天姐姐在商店休息，所以回家比较晚。",
      "今天经理在商店喝水。",
      "会议结束以后，老师马上回到中国继续学习。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "医生告诉我，他最近正在学习。",
    "meaning": "医生告诉我，他最近正在学习。",
    "options": [
      "医生告诉我，他最近正在学习。",
      "请给我一张发票。",
      "我喜欢吃米饭。",
      "如果计划没有变化，妈妈下午会在商店回家。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "因为工作很忙，你只能晚上工作。",
    "meaning": "因为工作很忙，你只能晚上工作。",
    "options": [
      "因为工作很忙，你只能晚上工作。",
      "会议结束以后，哥哥马上回到中国继续学习。",
      "医生希望明天可以继续睡觉。",
      "我想吃面条。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "周末的时候，老师喜欢去中国吃饭。",
    "meaning": "周末的时候，老师喜欢去中国吃饭。",
    "options": [
      "我找不到路了。",
      "我很好，谢谢。",
      "我十一点睡觉。",
      "周末的时候，老师喜欢去中国吃饭。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "妈妈觉得喝水很重要。",
    "meaning": "妈妈觉得喝水很重要。",
    "options": [
      "周末的时候，爸爸喜欢去中国吃饭。",
      "今天星期五。",
      "我听说姐姐最近在商店负责工作。",
      "妈妈觉得喝水很重要。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "经过讨论，哥哥决定在中国看书。",
    "meaning": "经过讨论，哥哥决定在中国看书。",
    "options": [
      "我听说她最近在商店负责工作。",
      "我吃过了。",
      "我现在有空。",
      "经过讨论，哥哥决定在中国看书。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "为了准备明天的工作，经理今晚还要听音乐。",
    "meaning": "为了准备明天的工作，经理今晚还要听音乐。",
    "options": [
      "你想吃什么？",
      "老师告诉我，他最近正在学习。",
      "我十一点睡觉。",
      "为了准备明天的工作，经理今晚还要听音乐。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "最近他常常需要买东西。",
    "meaning": "最近，他常常需要买东西。",
    "options": [
      "会议结束以后，我马上回到中国继续学习。",
      "老师已经把手机带到中国了。",
      "最近他常常需要买东西。",
      "经过讨论，他决定在中国看书。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "如果计划没有变化，学生下午会在商店回家。",
    "meaning": "如果计划没有变化，学生下午会在商店回家。",
    "options": [
      "会议结束以后，他马上回到中国继续学习。",
      "我希望明天可以继续睡觉。",
      "如果计划没有变化，学生下午会在商店回家。",
      "如果有时间，同学会去商店听音乐。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "爸爸已经把手机带到中国了。",
    "meaning": "爸爸已经把手机带到中国了。",
    "options": [
      "有大一点的吗？",
      "请往前走。",
      "会议结束以后，医生马上回到中国继续学习。",
      "爸爸已经把手机带到中国了。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "同学正在检查咖啡，准备开始休息。",
    "meaning": "同学正在检查咖啡，准备开始休息。",
    "options": [
      "我不喜欢喝咖啡。",
      "我可以试穿吗？",
      "同学正在检查咖啡，准备开始休息。",
      "如果计划没有变化，妈妈下午会在商店回家。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "会议结束以后，我马上回到中国继续学习。",
    "meaning": "会议结束以后，我马上回到中国继续学习。",
    "options": [
      "经理觉得喝水很重要。",
      "会议结束以后，我马上回到中国继续学习。",
      "给你五十块。",
      "医生已经把手机带到中国了。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我听说她最近在商店负责工作。",
    "meaning": "我听说，她最近在商店负责工作。",
    "options": [
      "车站离这里很近。",
      "我听说同学最近在商店负责工作。",
      "现在几点？",
      "我听说她最近在商店负责工作。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "虽然时间不多，但是朋友还是完成了吃饭。",
    "meaning": "虽然时间不多，但是朋友还是完成了吃饭。",
    "options": [
      "昨天经理在商店休息，所以回家比较晚。",
      "虽然时间不多，但是朋友还是完成了吃饭。",
      "你想吃什么？",
      "请说慢一点。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "今天姐姐在商店喝水。",
    "meaning": "今天，姐姐在商店喝水。",
    "options": [
      "虽然时间不多，但是医生还是完成了吃饭。",
      "今天姐姐在商店喝水。",
      "请说慢一点。",
      "会议结束以后，哥哥马上回到中国继续学习。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "医生每天都要看书。",
    "meaning": "医生每天都要看书。",
    "options": [
      "因为工作很忙，你只能晚上工作。",
      "医生每天都要看书。",
      "我七点起床。",
      "学生正在商店回家。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "如果有时间，你会去商店听音乐。",
    "meaning": "如果有时间，你会去商店听音乐。",
    "options": [
      "如果有时间，你会去商店听音乐。",
      "右边就是超市。",
      "你现在有空吗？",
      "为了买东西，哥哥提前来到中国。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "为了买东西，老师提前来到中国。",
    "meaning": "为了买东西，老师提前来到中国。",
    "options": [
      "为了买东西，老师提前来到中国。",
      "我不喜欢喝咖啡。",
      "我听说学生最近在商店负责工作。",
      "姐姐正在商店回家。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "妈妈正在商店回家。",
    "meaning": "妈妈正在商店回家。",
    "options": [
      "如果有时间，你会去商店听音乐。",
      "可以给我菜单吗？",
      "她觉得喝水很重要。",
      "妈妈正在商店回家。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "哥哥希望明天可以继续睡觉。",
    "meaning": "哥哥希望明天可以继续睡觉。",
    "options": [
      "他在学校学习。",
      "哥哥希望明天可以继续睡觉。",
      "今天姐姐在商店喝水。",
      "我找不到路了。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "昨天经理在商店休息，所以回家比较晚。",
    "meaning": "昨天，经理在商店休息，所以回家比较晚。",
    "options": [
      "你几点睡觉？",
      "今天妈妈在商店喝水。",
      "经过讨论，爸爸决定在中国看书。",
      "昨天经理在商店休息，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "他告诉我，他最近正在学习。",
    "meaning": "他告诉我，他最近正在学习。",
    "options": [
      "他告诉我，他最近正在学习。",
      "她喜欢看书。",
      "昨天她在商店休息，所以回家比较晚。",
      "为了买东西，老师提前来到中国。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "因为工作很忙，学生只能晚上工作。",
    "meaning": "因为工作很忙，学生只能晚上工作。",
    "options": [
      "一共多少钱？",
      "因为工作很忙，学生只能晚上工作。",
      "我要买这个。",
      "现在几点？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "周末的时候，爸爸喜欢去中国吃饭。",
    "meaning": "周末的时候，爸爸喜欢去中国吃饭。",
    "options": [
      "我找不到路了。",
      "我是越南人。",
      "请进。",
      "周末的时候，爸爸喜欢去中国吃饭。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "同学觉得喝水很重要。",
    "meaning": "同学觉得喝水很重要。",
    "options": [
      "同学觉得喝水很重要。",
      "哥哥每天都要看书。",
      "妈妈觉得喝水很重要。",
      "你怎么写这个字？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "经过讨论，我决定在中国看书。",
    "meaning": "经过讨论，我决定在中国看书。",
    "options": [
      "经过讨论，我决定在中国看书。",
      "为了准备明天的工作，妈妈今晚还要听音乐。",
      "请坐。",
      "会议结束以后，朋友马上回到中国继续学习。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "为了准备明天的工作，她今晚还要听音乐。",
    "meaning": "为了准备明天的工作，她今晚还要听音乐。",
    "options": [
      "会议结束以后，爸爸马上回到中国继续学习。",
      "同学正在检查咖啡，准备开始休息。",
      "为了准备明天的工作，她今晚还要听音乐。",
      "虽然时间不多，但是爸爸还是完成了吃饭。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "最近朋友常常需要买东西。",
    "meaning": "最近，朋友常常需要买东西。",
    "options": [
      "哥哥已经把手机带到中国了。",
      "最近朋友常常需要买东西。",
      "请给我一杯水。",
      "如果有时间，她会去商店听音乐。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "如果计划没有变化，姐姐下午会在商店回家。",
    "meaning": "如果计划没有变化，姐姐下午会在商店回家。",
    "options": [
      "医生已经把手机带到中国了。",
      "你几点睡觉？",
      "如果计划没有变化，姐姐下午会在商店回家。",
      "经过讨论，朋友决定在中国看书。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "医生已经把手机带到中国了。",
    "meaning": "医生已经把手机带到中国了。",
    "options": [
      "姐姐觉得喝水很重要。",
      "医生已经把手机带到中国了。",
      "我可以试穿吗？",
      "你想吃什么？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "你正在检查咖啡，准备开始休息。",
    "meaning": "你正在检查咖啡，准备开始休息。",
    "options": [
      "请坐。",
      "爸爸告诉我，他最近正在学习。",
      "你正在检查咖啡，准备开始休息。",
      "请进。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "会议结束以后，老师马上回到中国继续学习。",
    "meaning": "会议结束以后，老师马上回到中国继续学习。",
    "options": [
      "她喜欢看书。",
      "哥哥告诉我，他最近正在学习。",
      "请问，洗手间在哪里？",
      "会议结束以后，老师马上回到中国继续学习。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我听说妈妈最近在商店负责工作。",
    "meaning": "我听说，妈妈最近在商店负责工作。",
    "options": [
      "周末的时候，他喜欢去中国吃饭。",
      "我听说妈妈最近在商店负责工作。",
      "这个怎么读？",
      "因为工作很忙，同学只能晚上工作。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "虽然时间不多，但是哥哥还是完成了吃饭。",
    "meaning": "虽然时间不多，但是哥哥还是完成了吃饭。",
    "options": [
      "朋友告诉我，他最近正在学习。",
      "虽然时间不多，但是哥哥还是完成了吃饭。",
      "最近老师常常需要买东西。",
      "我迷路了。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "今天经理在商店喝水。",
    "meaning": "今天，经理在商店喝水。",
    "options": [
      "今天经理在商店喝水。",
      "因为工作很忙，她只能晚上工作。",
      "我叫李明。",
      "请向右转。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他每天都要看书。",
    "meaning": "他每天都要看书。",
    "options": [
      "我不吃辣。",
      "再来一杯，谢谢。",
      "明天见。",
      "他每天都要看书。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "如果有时间，学生会去商店听音乐。",
    "meaning": "如果有时间，学生会去商店听音乐。",
    "options": [
      "为了买东西，我提前来到中国。",
      "姐姐正在商店回家。",
      "如果有时间，学生会去商店听音乐。",
      "因为工作很忙，你只能晚上工作。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "为了买东西，爸爸提前来到中国。",
    "meaning": "为了买东西，爸爸提前来到中国。",
    "options": [
      "为了买东西，爸爸提前来到中国。",
      "最近我常常需要买东西。",
      "请给我一张发票。",
      "周末的时候，哥哥喜欢去中国吃饭。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "同学正在商店回家。",
    "meaning": "同学正在商店回家。",
    "options": [
      "再来一杯，谢谢。",
      "有大一点的吗？",
      "同学正在商店回家。",
      "爸爸告诉我，他最近正在学习。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我希望明天可以继续睡觉。",
    "meaning": "我希望明天可以继续睡觉。",
    "options": [
      "我希望明天可以继续睡觉。",
      "你正在检查咖啡，准备开始休息。",
      "我找不到路了。",
      "经过讨论，哥哥决定在中国看书。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "昨天她在商店休息，所以回家比较晚。",
    "meaning": "昨天，她在商店休息，所以回家比较晚。",
    "options": [
      "昨天她在商店休息，所以回家比较晚。",
      "会议结束以后，医生马上回到中国继续学习。",
      "朋友已经把手机带到中国了。",
      "我已经把手机带到中国了。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "朋友告诉我，他最近正在学习。",
    "meaning": "朋友告诉我，他最近正在学习。",
    "options": [
      "老师希望明天可以继续睡觉。",
      "你几点睡觉？",
      "你是学生吗？",
      "朋友告诉我，他最近正在学习。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "因为工作很忙，姐姐只能晚上工作。",
    "meaning": "因为工作很忙，姐姐只能晚上工作。",
    "options": [
      "会议结束以后，他马上回到中国继续学习。",
      "因为工作很忙，姐姐只能晚上工作。",
      "为了买东西，爸爸提前来到中国。",
      "右边就是超市。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "周末的时候，医生喜欢去中国吃饭。",
    "meaning": "周末的时候，医生喜欢去中国吃饭。",
    "options": [
      "周末的时候，朋友喜欢去中国吃饭。",
      "我现在有空。",
      "周末的时候，医生喜欢去中国吃饭。",
      "我住在海防。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "你觉得喝水很重要。",
    "meaning": "你觉得喝水很重要。",
    "options": [
      "我想吃面条。",
      "谢谢。",
      "今天星期五。",
      "你觉得喝水很重要。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "经过讨论，老师决定在中国看书。",
    "meaning": "经过讨论，老师决定在中国看书。",
    "options": [
      "经过讨论，老师决定在中国看书。",
      "你好。",
      "周末的时候，医生喜欢去中国吃饭。",
      "没关系。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "为了准备明天的工作，妈妈今晚还要听音乐。",
    "meaning": "为了准备明天的工作，妈妈今晚还要听音乐。",
    "options": [
      "为了准备明天的工作，学生今晚还要听音乐。",
      "经理正在商店回家。",
      "对不起。",
      "为了准备明天的工作，妈妈今晚还要听音乐。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "最近哥哥常常需要买东西。",
    "meaning": "最近，哥哥常常需要买东西。",
    "options": [
      "请在这里停车。",
      "最近爸爸常常需要买东西。",
      "最近哥哥常常需要买东西。",
      "最近医生常常需要买东西。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "如果计划没有变化，经理下午会在商店回家。",
    "meaning": "如果计划没有变化，经理下午会在商店回家。",
    "options": [
      "如果计划没有变化，经理下午会在商店回家。",
      "经过讨论，朋友决定在中国看书。",
      "我叫李明。",
      "虽然时间不多，但是爸爸还是完成了吃饭。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他已经把手机带到中国了。",
    "meaning": "他已经把手机带到中国了。",
    "options": [
      "虽然时间不多，但是我还是完成了吃饭。",
      "没关系。",
      "他已经把手机带到中国了。",
      "同学正在商店回家。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "学生正在检查咖啡，准备开始休息。",
    "meaning": "学生正在检查咖啡，准备开始休息。",
    "options": [
      "哥哥每天都要看书。",
      "学生正在检查咖啡，准备开始休息。",
      "你好吗？",
      "再来一杯，谢谢。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "会议结束以后，爸爸马上回到中国继续学习。",
    "meaning": "会议结束以后，爸爸马上回到中国继续学习。",
    "options": [
      "爸爸希望明天可以继续睡觉。",
      "昨天学生在商店休息，所以回家比较晚。",
      "会议结束以后，爸爸马上回到中国继续学习。",
      "这个太小了。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我听说同学最近在商店负责工作。",
    "meaning": "我听说，同学最近在商店负责工作。",
    "options": [
      "现在三点。",
      "请再说一遍。",
      "我听说同学最近在商店负责工作。",
      "我买两杯咖啡。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "虽然时间不多，但是我还是完成了吃饭。",
    "meaning": "虽然时间不多，但是我还是完成了吃饭。",
    "options": [
      "老师每天都要看书。",
      "可以便宜一点吗？",
      "晚上好。",
      "虽然时间不多，但是我还是完成了吃饭。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "今天她在商店喝水。",
    "meaning": "今天，她在商店喝水。",
    "options": [
      "今天她在商店喝水。",
      "左边有一家银行。",
      "请帮我看一下地图。",
      "爸爸希望明天可以继续睡觉。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "朋友每天都要看书。",
    "meaning": "朋友每天都要看书。",
    "options": [
      "朋友每天都要看书。",
      "学生正在商店回家。",
      "因为工作很忙，学生只能晚上工作。",
      "这辆车去市中心吗？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "如果有时间，姐姐会去商店听音乐。",
    "meaning": "如果有时间，姐姐会去商店听音乐。",
    "options": [
      "我喜欢听音乐。",
      "为了买东西，他提前来到中国。",
      "如果有时间，姐姐会去商店听音乐。",
      "请向右转。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "为了买东西，医生提前来到中国。",
    "meaning": "为了买东西，医生提前来到中国。",
    "options": [
      "会议结束以后，朋友马上回到中国继续学习。",
      "为了买东西，医生提前来到中国。",
      "对不起。",
      "我明白了。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "你正在商店回家。",
    "meaning": "你正在商店回家。",
    "options": [
      "我想吃面条。",
      "你正在商店回家。",
      "今天同学在商店喝水。",
      "同学正在检查咖啡，准备开始休息。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "老师希望明天可以继续睡觉。",
    "meaning": "老师希望明天可以继续睡觉。",
    "options": [
      "你可以带我去吗？",
      "你好。",
      "为了买东西，老师提前来到中国。",
      "老师希望明天可以继续睡觉。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "昨天妈妈在商店休息，所以回家比较晚。",
    "meaning": "昨天，妈妈在商店休息，所以回家比较晚。",
    "options": [
      "你吃早饭了吗？",
      "最近医生常常需要买东西。",
      "昨天妈妈在商店休息，所以回家比较晚。",
      "请等一下。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "哥哥告诉我，他最近正在学习。",
    "meaning": "哥哥告诉我，他最近正在学习。",
    "options": [
      "哥哥告诉我，他最近正在学习。",
      "周末的时候，老师喜欢去中国吃饭。",
      "这个很好吃。",
      "最近爸爸常常需要买东西。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "因为工作很忙，经理只能晚上工作。",
    "meaning": "因为工作很忙，经理只能晚上工作。",
    "options": [
      "明天天气很好。",
      "老师每天都要看书。",
      "因为工作很忙，经理只能晚上工作。",
      "今天星期五。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "周末的时候，他喜欢去中国吃饭。",
    "meaning": "周末的时候，他喜欢去中国吃饭。",
    "options": [
      "我只是看看。",
      "请给我一碗米饭。",
      "周末的时候，他喜欢去中国吃饭。",
      "请等一下。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "学生觉得喝水很重要。",
    "meaning": "学生觉得喝水很重要。",
    "options": [
      "最近医生常常需要买东西。",
      "学生觉得喝水很重要。",
      "我们快到了。",
      "今天同学在商店喝水。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "经过讨论，爸爸决定在中国看书。",
    "meaning": "经过讨论，爸爸决定在中国看书。",
    "options": [
      "可以用手机付款吗？",
      "经过讨论，爸爸决定在中国看书。",
      "没关系。",
      "虽然时间不多，但是老师还是完成了吃饭。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "为了准备明天的工作，同学今晚还要听音乐。",
    "meaning": "为了准备明天的工作，同学今晚还要听音乐。",
    "options": [
      "为了准备明天的工作，同学今晚还要听音乐。",
      "我七点起床。",
      "周末的时候，老师喜欢去中国吃饭。",
      "经过讨论，老师决定在中国看书。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "最近我常常需要买东西。",
    "meaning": "最近，我常常需要买东西。",
    "options": [
      "请给我一张发票。",
      "为了准备明天的工作，同学今晚还要听音乐。",
      "最近我常常需要买东西。",
      "妈妈正在检查咖啡，准备开始休息。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "如果计划没有变化，她下午会在商店回家。",
    "meaning": "如果计划没有变化，她下午会在商店回家。",
    "options": [
      "昨天她在商店休息，所以回家比较晚。",
      "为了准备明天的工作，你今晚还要听音乐。",
      "如果计划没有变化，她下午会在商店回家。",
      "我喜欢喝茶。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "朋友已经把手机带到中国了。",
    "meaning": "朋友已经把手机带到中国了。",
    "options": [
      "昨天我很忙。",
      "请给我一杯水。",
      "朋友已经把手机带到中国了。",
      "因为工作很忙，姐姐只能晚上工作。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "姐姐正在检查咖啡，准备开始休息。",
    "meaning": "姐姐正在检查咖啡，准备开始休息。",
    "options": [
      "姐姐正在检查咖啡，准备开始休息。",
      "我想吃面条。",
      "妈妈觉得喝水很重要。",
      "我听说妈妈最近在商店负责工作。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "会议结束以后，医生马上回到中国继续学习。",
    "meaning": "会议结束以后，医生马上回到中国继续学习。",
    "options": [
      "哥哥每天都要看书。",
      "如果计划没有变化，学生下午会在商店回家。",
      "我只是看看。",
      "会议结束以后，医生马上回到中国继续学习。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我听说你最近在商店负责工作。",
    "meaning": "我听说，你最近在商店负责工作。",
    "options": [
      "我找不到路了。",
      "我七点起床。",
      "我听说你最近在商店负责工作。",
      "你想吃什么？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "虽然时间不多，但是老师还是完成了吃饭。",
    "meaning": "虽然时间不多，但是老师还是完成了吃饭。",
    "options": [
      "请坐。",
      "虽然时间不多，但是老师还是完成了吃饭。",
      "这个太小了。",
      "今天同学在商店喝水。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "今天妈妈在商店喝水。",
    "meaning": "今天，妈妈在商店喝水。",
    "options": [
      "我今天不太忙。",
      "如果计划没有变化，她下午会在商店回家。",
      "今天妈妈在商店喝水。",
      "早上好。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "哥哥每天都要看书。",
    "meaning": "哥哥每天都要看书。",
    "options": [
      "哥哥每天都要看书。",
      "我坐错车了。",
      "现在三点。",
      "我听不清楚。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "如果有时间，经理会去商店听音乐。",
    "meaning": "如果有时间，经理会去商店听音乐。",
    "options": [
      "学生正在检查咖啡，准备开始休息。",
      "如果有时间，经理会去商店听音乐。",
      "因为工作很忙，学生只能晚上工作。",
      "她喜欢看书。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "为了买东西，他提前来到中国。",
    "meaning": "为了买东西，他提前来到中国。",
    "options": [
      "为了买东西，他提前来到中国。",
      "哥哥告诉我，他最近正在学习。",
      "因为工作很忙，姐姐只能晚上工作。",
      "经过讨论，医生决定在中国看书。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "学生正在商店回家。",
    "meaning": "学生正在商店回家。",
    "options": [
      "你好吗？",
      "学生正在商店回家。",
      "请在这里停车。",
      "我可以试穿吗？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "爸爸希望明天可以继续睡觉。",
    "meaning": "爸爸希望明天可以继续睡觉。",
    "options": [
      "我坐错车了。",
      "因为工作很忙，妈妈只能晚上工作。",
      "爸爸希望明天可以继续睡觉。",
      "这个太小了。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "昨天同学在商店休息，所以回家比较晚。",
    "meaning": "昨天，同学在商店休息，所以回家比较晚。",
    "options": [
      "我听说同学最近在商店负责工作。",
      "昨天同学在商店休息，所以回家比较晚。",
      "为了准备明天的工作，学生今晚还要听音乐。",
      "我还没吃饭。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我告诉我，他最近正在学习。",
    "meaning": "我告诉我，他最近正在学习。",
    "options": [
      "公交车站在哪里？",
      "他告诉我，他最近正在学习。",
      "我告诉我，他最近正在学习。",
      "今天学生在商店喝水。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "因为工作很忙，她只能晚上工作。",
    "meaning": "因为工作很忙，她只能晚上工作。",
    "options": [
      "因为工作很忙，她只能晚上工作。",
      "我还不明白。",
      "昨天姐姐在商店休息，所以回家比较晚。",
      "有大一点的吗？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "周末的时候，朋友喜欢去中国吃饭。",
    "meaning": "周末的时候，朋友喜欢去中国吃饭。",
    "options": [
      "你今年几岁？",
      "有别的颜色吗？",
      "周末的时候，朋友喜欢去中国吃饭。",
      "你吃早饭了吗？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "姐姐觉得喝水很重要。",
    "meaning": "姐姐觉得喝水很重要。",
    "options": [
      "请说慢一点。",
      "姐姐觉得喝水很重要。",
      "你今年几岁？",
      "我是学生。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "经过讨论，医生决定在中国看书。",
    "meaning": "经过讨论，医生决定在中国看书。",
    "options": [
      "你现在有空吗？",
      "为了准备明天的工作，同学今晚还要听音乐。",
      "可以用手机付款吗？",
      "经过讨论，医生决定在中国看书。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "为了准备明天的工作，你今晚还要听音乐。",
    "meaning": "为了准备明天的工作，你今晚还要听音乐。",
    "options": [
      "她觉得喝水很重要。",
      "为了准备明天的工作，你今晚还要听音乐。",
      "我坐公交车去学校。",
      "虽然时间不多，但是我还是完成了吃饭。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "最近老师常常需要买东西。",
    "meaning": "最近，老师常常需要买东西。",
    "options": [
      "这辆车去市中心吗？",
      "老师已经把手机带到中国了。",
      "最近老师常常需要买东西。",
      "经过讨论，哥哥决定在中国看书。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "如果计划没有变化，妈妈下午会在商店回家。",
    "meaning": "如果计划没有变化，妈妈下午会在商店回家。",
    "options": [
      "如果有时间，姐姐会去商店听音乐。",
      "经过讨论，哥哥决定在中国看书。",
      "如果计划没有变化，妈妈下午会在商店回家。",
      "为了买东西，朋友提前来到中国。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "哥哥已经把手机带到中国了。",
    "meaning": "哥哥已经把手机带到中国了。",
    "options": [
      "他告诉我，他最近正在学习。",
      "有大一点的吗？",
      "哥哥已经把手机带到中国了。",
      "我坐错车了。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "经理正在检查咖啡，准备开始休息。",
    "meaning": "经理正在检查咖啡，准备开始休息。",
    "options": [
      "经理正在检查咖啡，准备开始休息。",
      "爸爸每天都要看书。",
      "我不要这个。",
      "今天妈妈在商店喝水。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "会议结束以后，他马上回到中国继续学习。",
    "meaning": "会议结束以后，他马上回到中国继续学习。",
    "options": [
      "周末的时候，医生喜欢去中国吃饭。",
      "会议结束以后，他马上回到中国继续学习。",
      "这个字是什么意思？",
      "我马上回来。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我听说学生最近在商店负责工作。",
    "meaning": "我听说，学生最近在商店负责工作。",
    "options": [
      "她正在商店回家。",
      "如果有时间，姐姐会去商店听音乐。",
      "我听说学生最近在商店负责工作。",
      "可以用手机付款吗？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "虽然时间不多，但是爸爸还是完成了吃饭。",
    "meaning": "虽然时间不多，但是爸爸还是完成了吃饭。",
    "options": [
      "会议结束以后，医生马上回到中国继续学习。",
      "你今年几岁？",
      "我是学生。",
      "虽然时间不多，但是爸爸还是完成了吃饭。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "今天同学在商店喝水。",
    "meaning": "今天，同学在商店喝水。",
    "options": [
      "朋友告诉我，他最近正在学习。",
      "我听说她最近在商店负责工作。",
      "今天同学在商店喝水。",
      "请等一下。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我每天都要看书。",
    "meaning": "我每天都要看书。",
    "options": [
      "我买两杯咖啡。",
      "请进。",
      "我们快到了。",
      "我每天都要看书。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "如果有时间，她会去商店听音乐。",
    "meaning": "如果有时间，她会去商店听音乐。",
    "options": [
      "如果有时间，她会去商店听音乐。",
      "再来一杯，谢谢。",
      "她觉得喝水很重要。",
      "我听说同学最近在商店负责工作。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "为了买东西，朋友提前来到中国。",
    "meaning": "为了买东西，朋友提前来到中国。",
    "options": [
      "为了买东西，朋友提前来到中国。",
      "如果计划没有变化，学生下午会在商店回家。",
      "请再说一遍。",
      "这个太小了。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "姐姐正在商店回家。",
    "meaning": "姐姐正在商店回家。",
    "options": [
      "我坐错车了。",
      "姐姐正在商店回家。",
      "因为工作很忙，经理只能晚上工作。",
      "你现在有空吗？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "医生希望明天可以继续睡觉。",
    "meaning": "医生希望明天可以继续睡觉。",
    "options": [
      "请坐。",
      "医生希望明天可以继续睡觉。",
      "为了买东西，医生提前来到中国。",
      "你今年几岁？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "昨天你在商店休息，所以回家比较晚。",
    "meaning": "昨天，你在商店休息，所以回家比较晚。",
    "options": [
      "请帮我看一下地图。",
      "昨天你在商店休息，所以回家比较晚。",
      "太贵了。",
      "朋友已经把手机带到中国了。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "老师告诉我，他最近正在学习。",
    "meaning": "老师告诉我，他最近正在学习。",
    "options": [
      "因为工作很忙，同学只能晚上工作。",
      "学生觉得喝水很重要。",
      "你几点起床？",
      "老师告诉我，他最近正在学习。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "因为工作很忙，妈妈只能晚上工作。",
    "meaning": "因为工作很忙，妈妈只能晚上工作。",
    "options": [
      "太贵了。",
      "谢谢你的帮助。",
      "我迷路了。",
      "因为工作很忙，妈妈只能晚上工作。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "周末的时候，哥哥喜欢去中国吃饭。",
    "meaning": "周末的时候，哥哥喜欢去中国吃饭。",
    "options": [
      "周末的时候，哥哥喜欢去中国吃饭。",
      "可以用手机付款吗？",
      "大概需要多久？",
      "我想吃米饭。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "经理觉得喝水很重要。",
    "meaning": "经理觉得喝水很重要。",
    "options": [
      "经理觉得喝水很重要。",
      "如果有时间，学生会去商店听音乐。",
      "一直往前走。",
      "最近他常常需要买东西。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "经过讨论，他决定在中国看书。",
    "meaning": "经过讨论，他决定在中国看书。",
    "options": [
      "你今天忙吗？",
      "有大一点的吗？",
      "经过讨论，他决定在中国看书。",
      "没事。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "为了准备明天的工作，学生今晚还要听音乐。",
    "meaning": "为了准备明天的工作，学生今晚还要听音乐。",
    "options": [
      "如果有时间，她会去商店听音乐。",
      "为了准备明天的工作，学生今晚还要听音乐。",
      "我会说一点中文。",
      "如果计划没有变化，经理下午会在商店回家。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "最近爸爸常常需要买东西。",
    "meaning": "最近，爸爸常常需要买东西。",
    "options": [
      "最近爸爸常常需要买东西。",
      "我听不清楚。",
      "你现在有空吗？",
      "我喜欢吃米饭。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "如果计划没有变化，同学下午会在商店回家。",
    "meaning": "如果计划没有变化，同学下午会在商店回家。",
    "options": [
      "今天妈妈在商店喝水。",
      "我今天不太忙。",
      "如果计划没有变化，同学下午会在商店回家。",
      "请帮我看一下地图。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我已经把手机带到中国了。",
    "meaning": "我已经把手机带到中国了。",
    "options": [
      "可以用手机付款吗？",
      "我已经把手机带到中国了。",
      "昨天学生在商店休息，所以回家比较晚。",
      "我告诉我，他最近正在学习。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "她正在检查咖啡，准备开始休息。",
    "meaning": "她正在检查咖啡，准备开始休息。",
    "options": [
      "还有多远？",
      "会议结束以后，他马上回到中国继续学习。",
      "她正在检查咖啡，准备开始休息。",
      "我找不到路了。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "会议结束以后，朋友马上回到中国继续学习。",
    "meaning": "会议结束以后，朋友马上回到中国继续学习。",
    "options": [
      "同学觉得喝水很重要。",
      "会议结束以后，朋友马上回到中国继续学习。",
      "你是学生吗？",
      "大概需要多久？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我听说姐姐最近在商店负责工作。",
    "meaning": "我听说，姐姐最近在商店负责工作。",
    "options": [
      "最近爸爸常常需要买东西。",
      "为了准备明天的工作，同学今晚还要听音乐。",
      "朋友希望明天可以继续睡觉。",
      "我听说姐姐最近在商店负责工作。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "虽然时间不多，但是医生还是完成了吃饭。",
    "meaning": "虽然时间不多，但是医生还是完成了吃饭。",
    "options": [
      "虽然时间不多，但是医生还是完成了吃饭。",
      "我今年二十岁。",
      "妈妈正在检查咖啡，准备开始休息。",
      "你吃早饭了吗？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "今天他在超市坐地铁。",
    "meaning": "今天，他在超市坐地铁。",
    "options": [
      "最近医生常常需要听音乐。",
      "水太烫了。",
      "今天他在超市坐地铁。",
      "你做得很好。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我的同学每天都要听音乐。",
    "meaning": "我的同学每天都要听音乐。",
    "options": [
      "我的同学每天都要听音乐。",
      "会议结束以后，你马上回到机场继续听音乐。",
      "会议结束以后，同事马上回到学校继续准备考试。",
      "你周末做什么？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "如果有时间，爸爸会去公司看电影。",
    "meaning": "如果有时间，爸爸会去公司看电影。",
    "options": [
      "你收到我的消息了吗？",
      "如果计划没有变化，我的朋友下午会在车站做饭。",
      "如果有时间，爸爸会去公司看电影。",
      "我的同学每天都要听音乐。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "为了做作业，姐姐提前来到车站。",
    "meaning": "为了做作业，姐姐提前来到车站。",
    "options": [
      "手机没电了。",
      "如果计划没有变化，哥哥下午会在公司学习汉语。",
      "我的同学告诉我，他最近正在工作。",
      "为了做作业，姐姐提前来到车站。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我正在北京买东西。",
    "meaning": "我正在北京买东西。",
    "options": [
      "我正在北京买东西。",
      "妈妈希望明天可以继续运动。",
      "最近她常常需要运动。",
      "不用着急。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "她希望明天可以继续准备考试。",
    "meaning": "她希望明天可以继续准备考试。",
    "options": [
      "她希望明天可以继续准备考试。",
      "他觉得做饭很重要。",
      "你有几个兄弟姐妹？",
      "如果计划没有变化，老师下午会在医院做饭。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "昨天老师在餐厅学习汉语，所以回家比较晚。",
    "meaning": "昨天，老师在餐厅学习汉语，所以回家比较晚。",
    "options": [
      "如果有时间，他会去车站学习汉语。",
      "我有一个妹妹。",
      "我周末通常在家休息。",
      "昨天老师在餐厅学习汉语，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "妈妈告诉我，他最近正在工作。",
    "meaning": "妈妈告诉我，他最近正在工作。",
    "options": [
      "为了做作业，妈妈提前来到机场。",
      "如果计划没有变化，爸爸下午会在家里学习汉语。",
      "妈妈告诉我，他最近正在工作。",
      "请把窗户打开。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "因为工作很忙，孩子只能晚上旅行。",
    "meaning": "因为工作很忙，孩子只能晚上旅行。",
    "options": [
      "她告诉我，他最近正在打电话。",
      "因为工作很忙，孩子只能晚上旅行。",
      "如果计划没有变化，爸爸下午会在家里学习汉语。",
      "我马上发给你。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "周末的时候，你喜欢去图书馆运动。",
    "meaning": "周末的时候，你喜欢去图书馆运动。",
    "options": [
      "请打开书。",
      "我不知道。",
      "周末的时候，你喜欢去图书馆运动。",
      "慢慢来。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我的朋友觉得做饭很重要。",
    "meaning": "我的朋友觉得做饭很重要。",
    "options": [
      "我的朋友觉得做饭很重要。",
      "如果计划没有变化，孩子下午会在北京看电影。",
      "请你说慢一点。",
      "我们认识很多年了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "经过讨论，同事决定在机场打电话。",
    "meaning": "经过讨论，同事决定在机场打电话。",
    "options": [
      "我已经到了。",
      "我每天学习一个小时。",
      "你可以帮我一下吗？",
      "经过讨论，同事决定在机场打电话。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "为了准备明天的工作，哥哥今晚还要坐地铁。",
    "meaning": "为了准备明天的工作，哥哥今晚还要坐地铁。",
    "options": [
      "哥哥正在检查自行车，准备开始坐地铁。",
      "你收到我的消息了吗？",
      "你周末做什么？",
      "为了准备明天的工作，哥哥今晚还要坐地铁。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "最近医生常常需要听音乐。",
    "meaning": "最近，医生常常需要听音乐。",
    "options": [
      "我有点累。",
      "如果有时间，我的朋友会去商店看电影。",
      "最近医生常常需要听音乐。",
      "我住在海防。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "如果计划没有变化，他下午会在公园看电影。",
    "meaning": "如果计划没有变化，他下午会在公园看电影。",
    "options": [
      "水太烫了。",
      "最近同事常常需要准备考试。",
      "如果计划没有变化，他下午会在公园看电影。",
      "我正在做作业。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我的同学已经把报纸带到公司了。",
    "meaning": "我的同学已经把报纸带到公司了。",
    "options": [
      "我觉得做饭很重要。",
      "这个词怎么用？",
      "我马上发给你。",
      "我的同学已经把报纸带到公司了。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "爸爸正在检查咖啡，准备开始买东西。",
    "meaning": "爸爸正在检查咖啡，准备开始买东西。",
    "options": [
      "老师觉得学习汉语很重要。",
      "老师正在检查咖啡，准备开始买东西。",
      "爸爸正在检查咖啡，准备开始买东西。",
      "你需要休息一下。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "会议结束以后，姐姐马上回到北京继续准备考试。",
    "meaning": "会议结束以后，姐姐马上回到北京继续准备考试。",
    "options": [
      "你昨天几点回家？",
      "同事告诉我，他最近正在工作。",
      "请打开书。",
      "会议结束以后，姐姐马上回到北京继续准备考试。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我听说我最近在商店负责学习汉语。",
    "meaning": "我听说，我最近在商店负责学习汉语。",
    "options": [
      "我听说我最近在商店负责学习汉语。",
      "你希望明天可以继续准备考试。",
      "我有点累。",
      "周末的时候，妈妈喜欢去家里听音乐。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "虽然时间不多，但是她还是完成了工作。",
    "meaning": "虽然时间不多，但是她还是完成了工作。",
    "options": [
      "我听说爸爸最近在餐厅负责做饭。",
      "虽然时间不多，但是她还是完成了工作。",
      "请等我五分钟。",
      "会议结束以后，姐姐马上回到北京继续准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "今天老师在学校旅行。",
    "meaning": "今天，老师在学校旅行。",
    "options": [
      "今天老师在学校旅行。",
      "我听说哥哥最近在医院负责学习汉语。",
      "我喜欢在家看电影。",
      "我不知道。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "妈妈每天都要运动。",
    "meaning": "妈妈每天都要运动。",
    "options": [
      "最近妈妈常常需要听音乐。",
      "为了准备明天的工作，老师今晚还要坐地铁。",
      "这是我的朋友。",
      "妈妈每天都要运动。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "如果有时间，孩子会去图书馆做饭。",
    "meaning": "如果有时间，孩子会去图书馆做饭。",
    "options": [
      "经过讨论，医生决定在学校做作业。",
      "如果有时间，孩子会去图书馆做饭。",
      "我们下午再联系。",
      "我在门口等你。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "为了打电话，你提前来到家里。",
    "meaning": "为了打电话，你提前来到家里。",
    "options": [
      "我没听清楚。",
      "周末的时候，医生喜欢去北京运动。",
      "为了打电话，你提前来到家里。",
      "我正在做作业。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我的朋友正在机场坐地铁。",
    "meaning": "我的朋友正在机场坐地铁。",
    "options": [
      "我的朋友正在机场坐地铁。",
      "你什么时候有空？",
      "她每天都要听音乐。",
      "哥哥正在学校买东西。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "同事希望明天可以继续听音乐。",
    "meaning": "同事希望明天可以继续听音乐。",
    "options": [
      "请等我五分钟。",
      "我六点下班。",
      "经过讨论，同事决定在机场打电话。",
      "同事希望明天可以继续听音乐。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "昨天哥哥在超市看电影，所以回家比较晚。",
    "meaning": "昨天，哥哥在超市看电影，所以回家比较晚。",
    "options": [
      "你吃午饭了吗？",
      "为了工作，她提前来到上海。",
      "因为工作很忙，孩子只能晚上旅行。",
      "昨天哥哥在超市看电影，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "医生告诉我，他最近正在做作业。",
    "meaning": "医生告诉我，他最近正在做作业。",
    "options": [
      "医生告诉我，他最近正在做作业。",
      "晚饭我想吃饺子。",
      "请给我发个消息。",
      "她已经把报纸带到家里了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "因为工作很忙，他只能晚上买东西。",
    "meaning": "因为工作很忙，他只能晚上买东西。",
    "options": [
      "因为工作很忙，他只能晚上买东西。",
      "我的同学告诉我，他最近正在工作。",
      "会议结束以后，姐姐马上回到北京继续准备考试。",
      "虽然时间不多，但是她还是完成了工作。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "周末的时候，我的同学喜欢去车站准备考试。",
    "meaning": "周末的时候，我的同学喜欢去车站准备考试。",
    "options": [
      "如果计划没有变化，老师下午会在医院做饭。",
      "会议结束以后，姐姐马上回到北京继续准备考试。",
      "周末的时候，我的同学喜欢去车站准备考试。",
      "因为工作很忙，爸爸只能晚上旅行。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "爸爸觉得学习汉语很重要。",
    "meaning": "爸爸觉得学习汉语很重要。",
    "options": [
      "老师正在检查咖啡，准备开始买东西。",
      "爸爸觉得学习汉语很重要。",
      "这个问题很重要。",
      "虽然时间不多，但是同事还是完成了做作业。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "经过讨论，姐姐决定在商店工作。",
    "meaning": "经过讨论，姐姐决定在商店工作。",
    "options": [
      "我今天要去学校。",
      "经过讨论，姐姐决定在商店工作。",
      "为了准备明天的工作，老师今晚还要坐地铁。",
      "姐姐已经把衣服带到机场了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "为了准备明天的工作，我今晚还要旅行。",
    "meaning": "为了准备明天的工作，我今晚还要旅行。",
    "options": [
      "我们坐出租车去车站。",
      "你希望明天可以继续准备考试。",
      "为了准备明天的工作，我今晚还要旅行。",
      "爸爸觉得学习汉语很重要。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "最近她常常需要运动。",
    "meaning": "最近，她常常需要运动。",
    "options": [
      "我有一个姐姐。",
      "最近她常常需要运动。",
      "我觉得做饭很重要。",
      "你需要休息一下。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "如果计划没有变化，老师下午会在医院做饭。",
    "meaning": "如果计划没有变化，老师下午会在医院做饭。",
    "options": [
      "我的同学告诉我，他最近正在工作。",
      "如果计划没有变化，老师下午会在医院做饭。",
      "我的朋友正在机场坐地铁。",
      "会议结束以后，姐姐马上回到北京继续准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "妈妈已经把汉语书带到图书馆了。",
    "meaning": "妈妈已经把汉语书带到图书馆了。",
    "options": [
      "我每天学习一个小时。",
      "因为工作很忙，我的朋友只能晚上坐地铁。",
      "妈妈已经把汉语书带到图书馆了。",
      "老师正在检查咖啡，准备开始买东西。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "孩子正在检查自行车，准备开始坐地铁。",
    "meaning": "孩子正在检查自行车，准备开始坐地铁。",
    "options": [
      "孩子正在检查自行车，准备开始坐地铁。",
      "最近我的同学常常需要准备考试。",
      "周末的时候，姐姐喜欢去上海运动。",
      "如果有时间，爸爸会去公司看电影。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "会议结束以后，你马上回到机场继续听音乐。",
    "meaning": "会议结束以后，你马上回到机场继续听音乐。",
    "options": [
      "请再说一遍。",
      "我想换一个房间。",
      "会议结束以后，你马上回到机场继续听音乐。",
      "如果有时间，老师会去家里看电影。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我听说我的朋友最近在上海负责看电影。",
    "meaning": "我听说，我的朋友最近在上海负责看电影。",
    "options": [
      "我听说我的朋友最近在上海负责看电影。",
      "我喜欢打篮球。",
      "我准备好了。",
      "昨天我的朋友在公园学习汉语，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "虽然时间不多，但是同事还是完成了做作业。",
    "meaning": "虽然时间不多，但是同事还是完成了做作业。",
    "options": [
      "我周末通常在家休息。",
      "虽然时间不多，但是同事还是完成了做作业。",
      "你能解释一下吗？",
      "我需要多听多说。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "今天哥哥在公园买东西。",
    "meaning": "今天，哥哥在公园买东西。",
    "options": [
      "在第二个路口右转。",
      "爸爸正在检查咖啡，准备开始买东西。",
      "你家有几个人？",
      "今天哥哥在公园买东西。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "医生每天都要准备考试。",
    "meaning": "医生每天都要准备考试。",
    "options": [
      "我晚上九点回家。",
      "我今天感觉不错。",
      "医生每天都要准备考试。",
      "会议结束以后，同事马上回到学校继续准备考试。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "如果有时间，他会去车站学习汉语。",
    "meaning": "如果有时间，他会去车站学习汉语。",
    "options": [
      "如果有时间，他会去车站学习汉语。",
      "同事希望明天可以继续听音乐。",
      "我的同学希望明天可以继续听音乐。",
      "虽然时间不多，但是你还是完成了工作。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "为了工作，我的同学提前来到北京。",
    "meaning": "为了工作，我的同学提前来到北京。",
    "options": [
      "我觉得这个方法很好。",
      "为了工作，我的同学提前来到北京。",
      "虽然时间不多，但是她还是完成了工作。",
      "如果计划没有变化，我的朋友下午会在车站做饭。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "爸爸正在商店旅行。",
    "meaning": "爸爸正在商店旅行。",
    "options": [
      "周末的时候，她喜欢去机场准备考试。",
      "爸爸正在商店旅行。",
      "我们下午再联系。",
      "如果计划没有变化，老师下午会在医院做饭。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "姐姐希望明天可以继续运动。",
    "meaning": "姐姐希望明天可以继续运动。",
    "options": [
      "外面下雨了。",
      "哥哥正在检查自行车，准备开始坐地铁。",
      "医生已经把衣服带到车站了。",
      "姐姐希望明天可以继续运动。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "昨天我在学校做饭，所以回家比较晚。",
    "meaning": "昨天，我在学校做饭，所以回家比较晚。",
    "options": [
      "昨天我在学校做饭，所以回家比较晚。",
      "你有兄弟姐妹吗？",
      "再试一次。",
      "我去年开始学中文。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "她告诉我，他最近正在打电话。",
    "meaning": "她告诉我，他最近正在打电话。",
    "options": [
      "为了打电话，医生提前来到商店。",
      "你昨天几点回家？",
      "她告诉我，他最近正在打电话。",
      "我今天感觉不错。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "因为工作很忙，老师只能晚上坐地铁。",
    "meaning": "因为工作很忙，老师只能晚上坐地铁。",
    "options": [
      "经过讨论，我的同学决定在餐厅打电话。",
      "我忘记这个词了。",
      "因为工作很忙，老师只能晚上坐地铁。",
      "经过讨论，妈妈决定在超市工作。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "周末的时候，妈妈喜欢去家里听音乐。",
    "meaning": "周末的时候，妈妈喜欢去家里听音乐。",
    "options": [
      "周末的时候，妈妈喜欢去家里听音乐。",
      "我正在开会。",
      "这个问题有点难。",
      "如果有时间，孩子会去图书馆做饭。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "孩子觉得看电影很重要。",
    "meaning": "孩子觉得看电影很重要。",
    "options": [
      "你在哪里？",
      "再试一次。",
      "为了准备明天的工作，我的朋友今晚还要买东西。",
      "孩子觉得看电影很重要。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "经过讨论，你决定在上海做作业。",
    "meaning": "经过讨论，你决定在上海做作业。",
    "options": [
      "你在哪里？",
      "爸爸正在检查咖啡，准备开始买东西。",
      "我听说我最近在商店负责学习汉语。",
      "经过讨论，你决定在上海做作业。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "为了准备明天的工作，我的朋友今晚还要买东西。",
    "meaning": "为了准备明天的工作，我的朋友今晚还要买东西。",
    "options": [
      "为了准备明天的工作，我的朋友今晚还要买东西。",
      "妈妈希望明天可以继续运动。",
      "最近她常常需要运动。",
      "我已经到了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "最近同事常常需要准备考试。",
    "meaning": "最近，同事常常需要准备考试。",
    "options": [
      "最近同事常常需要准备考试。",
      "他比我高一点。",
      "医生告诉我，他最近正在做作业。",
      "别忘了带雨伞。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "如果计划没有变化，哥哥下午会在公司学习汉语。",
    "meaning": "如果计划没有变化，哥哥下午会在公司学习汉语。",
    "options": [
      "同事告诉我，他最近正在工作。",
      "他正在检查照片，准备开始旅行。",
      "如果计划没有变化，哥哥下午会在公司学习汉语。",
      "最近一切都很好。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "医生已经把衣服带到车站了。",
    "meaning": "医生已经把衣服带到车站了。",
    "options": [
      "不要紧张。",
      "因为工作很忙，哥哥只能晚上旅行。",
      "我有一个妹妹。",
      "医生已经把衣服带到车站了。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "他正在检查照片，准备开始旅行。",
    "meaning": "他正在检查照片，准备开始旅行。",
    "options": [
      "我需要再练习。",
      "如果计划没有变化，我的朋友下午会在车站做饭。",
      "你什么时候下班？",
      "他正在检查照片，准备开始旅行。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "会议结束以后，我的同学马上回到商店继续运动。",
    "meaning": "会议结束以后，我的同学马上回到商店继续运动。",
    "options": [
      "爸爸觉得学习汉语很重要。",
      "会议结束以后，我的同学马上回到商店继续运动。",
      "我喜欢打篮球。",
      "最近医生常常需要听音乐。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我听说爸爸最近在餐厅负责做饭。",
    "meaning": "我听说，爸爸最近在餐厅负责做饭。",
    "options": [
      "天气越来越好了。",
      "我听说爸爸最近在餐厅负责做饭。",
      "我已经到了。",
      "我觉得这个方法很好。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "虽然时间不多，但是姐姐还是完成了打电话。",
    "meaning": "虽然时间不多，但是姐姐还是完成了打电话。",
    "options": [
      "我喜欢听中文歌。",
      "你收到我的消息了吗？",
      "虽然时间不多，但是姐姐还是完成了打电话。",
      "我每天早上跑步。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "今天我在医院坐地铁。",
    "meaning": "今天，我在医院坐地铁。",
    "options": [
      "医生希望明天可以继续准备考试。",
      "虽然时间不多，但是姐姐还是完成了打电话。",
      "今天我在医院坐地铁。",
      "今天工作很忙。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "她每天都要听音乐。",
    "meaning": "她每天都要听音乐。",
    "options": [
      "为了打电话，医生提前来到商店。",
      "别担心。",
      "她每天都要听音乐。",
      "你什么时候开始学中文？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "如果有时间，老师会去家里看电影。",
    "meaning": "如果有时间，老师会去家里看电影。",
    "options": [
      "你会说中文吗？",
      "会议结束以后，姐姐马上回到北京继续准备考试。",
      "如果有时间，老师会去家里看电影。",
      "为了准备明天的工作，孩子今晚还要旅行。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "为了做作业，妈妈提前来到机场。",
    "meaning": "为了做作业，妈妈提前来到机场。",
    "options": [
      "姐姐希望明天可以继续运动。",
      "我刚刚看到了。",
      "为了做作业，妈妈提前来到机场。",
      "这本书很有意思。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "孩子正在上海买东西。",
    "meaning": "孩子正在上海买东西。",
    "options": [
      "我今天要去学校。",
      "孩子正在上海买东西。",
      "我的同学告诉我，他最近正在工作。",
      "我今天感觉不错。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你希望明天可以继续准备考试。",
    "meaning": "你希望明天可以继续准备考试。",
    "options": [
      "我的中文进步了一点。",
      "最近你常常需要运动。",
      "你告诉我，他最近正在打电话。",
      "你希望明天可以继续准备考试。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "昨天我的朋友在公园学习汉语，所以回家比较晚。",
    "meaning": "昨天，我的朋友在公园学习汉语，所以回家比较晚。",
    "options": [
      "昨天我的朋友在公园学习汉语，所以回家比较晚。",
      "我有一个妹妹。",
      "我已经到了。",
      "你需要我做什么？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "同事告诉我，他最近正在工作。",
    "meaning": "同事告诉我，他最近正在工作。",
    "options": [
      "同事告诉我，他最近正在工作。",
      "虽然时间不多，但是医生还是完成了工作。",
      "如果计划没有变化，我的朋友下午会在车站做饭。",
      "你学中文多久了？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "因为工作很忙，哥哥只能晚上旅行。",
    "meaning": "因为工作很忙，哥哥只能晚上旅行。",
    "options": [
      "我听说老师最近在公园负责做饭。",
      "因为工作很忙，哥哥只能晚上旅行。",
      "今天很冷。",
      "我每天学习一个小时。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "周末的时候，医生喜欢去北京运动。",
    "meaning": "周末的时候，医生喜欢去北京运动。",
    "options": [
      "妈妈希望明天可以继续运动。",
      "最近同事常常需要准备考试。",
      "周末的时候，医生喜欢去北京运动。",
      "我的同学每天都要听音乐。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "他觉得做饭很重要。",
    "meaning": "他觉得做饭很重要。",
    "options": [
      "你学中文多久了？",
      "你能给我一个例子吗？",
      "在第二个路口右转。",
      "他觉得做饭很重要。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "经过讨论，我的同学决定在餐厅打电话。",
    "meaning": "经过讨论，我的同学决定在餐厅打电话。",
    "options": [
      "我要一杯热茶。",
      "慢慢来。",
      "经过讨论，我的同学决定在餐厅打电话。",
      "为了做作业，同事提前来到餐厅。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "为了准备明天的工作，爸爸今晚还要坐地铁。",
    "meaning": "为了准备明天的工作，爸爸今晚还要坐地铁。",
    "options": [
      "会议结束以后，我的同学马上回到商店继续运动。",
      "这个词怎么用？",
      "为了准备明天的工作，爸爸今晚还要坐地铁。",
      "请打开书。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "最近姐姐常常需要听音乐。",
    "meaning": "最近，姐姐常常需要听音乐。",
    "options": [
      "我周末喜欢看电影。",
      "我有一个妹妹。",
      "最近姐姐常常需要听音乐。",
      "这个问题有点难。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "如果计划没有变化，我下午会在图书馆看电影。",
    "meaning": "如果计划没有变化，我下午会在图书馆看电影。",
    "options": [
      "你什么时候有空？",
      "我的朋友觉得做饭很重要。",
      "如果计划没有变化，我下午会在图书馆看电影。",
      "你需要休息一下。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "她已经把报纸带到家里了。",
    "meaning": "她已经把报纸带到家里了。",
    "options": [
      "我周末喜欢看电影。",
      "我听说我的朋友最近在上海负责看电影。",
      "你家有几个人？",
      "她已经把报纸带到家里了。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "老师正在检查咖啡，准备开始买东西。",
    "meaning": "老师正在检查咖啡，准备开始买东西。",
    "options": [
      "虽然时间不多，但是妈妈还是完成了打电话。",
      "老师正在检查咖啡，准备开始买东西。",
      "因为工作很忙，老师只能晚上坐地铁。",
      "你什么时候开始学中文？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "会议结束以后，妈妈马上回到上海继续准备考试。",
    "meaning": "会议结束以后，妈妈马上回到上海继续准备考试。",
    "options": [
      "今天很热。",
      "我已经到了。",
      "我不知道。",
      "会议结束以后，妈妈马上回到上海继续准备考试。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我听说孩子最近在超市负责学习汉语。",
    "meaning": "我听说，孩子最近在超市负责学习汉语。",
    "options": [
      "我听说孩子最近在超市负责学习汉语。",
      "我昨天睡得很晚。",
      "会议结束以后，姐姐马上回到北京继续准备考试。",
      "这个词是什么意思？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "虽然时间不多，但是你还是完成了工作。",
    "meaning": "虽然时间不多，但是你还是完成了工作。",
    "options": [
      "今天工作很忙。",
      "我的中文进步了一点。",
      "妈妈告诉我，他最近正在工作。",
      "虽然时间不多，但是你还是完成了工作。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "今天我的朋友在公司旅行。",
    "meaning": "今天，我的朋友在公司旅行。",
    "options": [
      "哥哥正在检查自行车，准备开始坐地铁。",
      "今天我的朋友在公司旅行。",
      "因为工作很忙，老师只能晚上坐地铁。",
      "如果有时间，爸爸会去公司看电影。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "同事每天都要运动。",
    "meaning": "同事每天都要运动。",
    "options": [
      "经过讨论，妈妈决定在超市工作。",
      "同事每天都要运动。",
      "这个字怎么读？",
      "因为工作很忙，孩子只能晚上旅行。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "如果有时间，哥哥会去北京做饭。",
    "meaning": "如果有时间，哥哥会去北京做饭。",
    "options": [
      "我们中午一起吃饭吧。",
      "因为工作很忙，爸爸只能晚上旅行。",
      "你住在哪里？",
      "如果有时间，哥哥会去北京做饭。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "为了打电话，医生提前来到商店。",
    "meaning": "为了打电话，医生提前来到商店。",
    "options": [
      "你收到我的消息了吗？",
      "我有一点累。",
      "为了打电话，医生提前来到商店。",
      "如果有时间，哥哥会去北京做饭。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "他正在餐厅坐地铁。",
    "meaning": "他正在餐厅坐地铁。",
    "options": [
      "他正在餐厅坐地铁。",
      "我还不明白。",
      "下午三点见。",
      "昨天爸爸在医院看电影，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我的同学希望明天可以继续听音乐。",
    "meaning": "我的同学希望明天可以继续听音乐。",
    "options": [
      "姐姐希望明天可以继续运动。",
      "我的同学希望明天可以继续听音乐。",
      "我需要休息一下。",
      "我要一杯热茶。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "昨天爸爸在医院看电影，所以回家比较晚。",
    "meaning": "昨天，爸爸在医院看电影，所以回家比较晚。",
    "options": [
      "虽然时间不多，但是医生还是完成了工作。",
      "我的中文进步了一点。",
      "因为工作很忙，他只能晚上买东西。",
      "昨天爸爸在医院看电影，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "姐姐告诉我，他最近正在做作业。",
    "meaning": "姐姐告诉我，他最近正在做作业。",
    "options": [
      "姐姐告诉我，他最近正在做作业。",
      "你喜欢听什么音乐？",
      "我觉得这个方法很好。",
      "你想喝茶还是咖啡？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "因为工作很忙，我只能晚上买东西。",
    "meaning": "因为工作很忙，我只能晚上买东西。",
    "options": [
      "因为工作很忙，我只能晚上买东西。",
      "再试一次。",
      "我有点累。",
      "请把窗户打开。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "周末的时候，她喜欢去机场准备考试。",
    "meaning": "周末的时候，她喜欢去机场准备考试。",
    "options": [
      "我住在海防。",
      "这是我的朋友。",
      "周末的时候，她喜欢去机场准备考试。",
      "老师正在检查咖啡，准备开始买东西。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "老师觉得学习汉语很重要。",
    "meaning": "老师觉得学习汉语很重要。",
    "options": [
      "老师觉得学习汉语很重要。",
      "我听说孩子最近在超市负责学习汉语。",
      "我已经吃过午饭了。",
      "姐姐每天都要准备考试。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "经过讨论，妈妈决定在超市工作。",
    "meaning": "经过讨论，妈妈决定在超市工作。",
    "options": [
      "经过讨论，妈妈决定在超市工作。",
      "我没听清楚。",
      "我有一个姐姐。",
      "在第二个路口右转。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "为了准备明天的工作，孩子今晚还要旅行。",
    "meaning": "为了准备明天的工作，孩子今晚还要旅行。",
    "options": [
      "经过讨论，我的同学决定在餐厅打电话。",
      "经过讨论，你决定在上海做作业。",
      "如果计划没有变化，哥哥下午会在公司学习汉语。",
      "为了准备明天的工作，孩子今晚还要旅行。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "最近你常常需要运动。",
    "meaning": "最近，你常常需要运动。",
    "options": [
      "老师觉得学习汉语很重要。",
      "我们中午一起吃饭吧。",
      "我的同学希望明天可以继续听音乐。",
      "最近你常常需要运动。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "如果计划没有变化，我的朋友下午会在车站做饭。",
    "meaning": "如果计划没有变化，我的朋友下午会在车站做饭。",
    "options": [
      "我住在海防。",
      "今天老师在学校旅行。",
      "如果计划没有变化，我的朋友下午会在车站做饭。",
      "虽然时间不多，但是同事还是完成了做作业。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "同事已经把汉语书带到北京了。",
    "meaning": "同事已经把汉语书带到北京了。",
    "options": [
      "同事已经把汉语书带到北京了。",
      "请把窗户打开。",
      "我的朋友正在检查咖啡，准备开始买东西。",
      "你可以帮我一下吗？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "哥哥正在检查自行车，准备开始坐地铁。",
    "meaning": "哥哥正在检查自行车，准备开始坐地铁。",
    "options": [
      "你已经把报纸带到商店了。",
      "哥哥正在检查自行车，准备开始坐地铁。",
      "会议结束以后，你马上回到机场继续听音乐。",
      "会议结束以后，她马上回到超市继续运动。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "会议结束以后，医生马上回到餐厅继续听音乐。",
    "meaning": "会议结束以后，医生马上回到餐厅继续听音乐。",
    "options": [
      "因为工作很忙，他只能晚上买东西。",
      "慢慢来。",
      "医生告诉我，他最近正在做作业。",
      "会议结束以后，医生马上回到餐厅继续听音乐。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我听说他最近在学校负责看电影。",
    "meaning": "我听说，他最近在学校负责看电影。",
    "options": [
      "会议结束以后，你马上回到机场继续听音乐。",
      "如果计划没有变化，孩子下午会在北京看电影。",
      "这个词是什么意思？",
      "我听说他最近在学校负责看电影。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "虽然时间不多，但是我的同学还是完成了做作业。",
    "meaning": "虽然时间不多，但是我的同学还是完成了做作业。",
    "options": [
      "虽然时间不多，但是我的同学还是完成了做作业。",
      "今天早点睡吧。",
      "你在哪里？",
      "如果有时间，我会去机场学习汉语。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "今天爸爸在图书馆买东西。",
    "meaning": "今天，爸爸在图书馆买东西。",
    "options": [
      "你能解释一下吗？",
      "今天爸爸在图书馆买东西。",
      "为了做作业，同事提前来到餐厅。",
      "我今天感觉很好。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "姐姐每天都要准备考试。",
    "meaning": "姐姐每天都要准备考试。",
    "options": [
      "姐姐每天都要准备考试。",
      "在第二个路口右转。",
      "他比我高一点。",
      "你已经把报纸带到商店了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "如果有时间，我会去机场学习汉语。",
    "meaning": "如果有时间，我会去机场学习汉语。",
    "options": [
      "哥哥觉得看电影很重要。",
      "如果有时间，我会去机场学习汉语。",
      "我们一起练习吧。",
      "你告诉我，他最近正在打电话。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "为了工作，她提前来到上海。",
    "meaning": "为了工作，她提前来到上海。",
    "options": [
      "如果计划没有变化，他下午会在公园看电影。",
      "为了工作，她提前来到上海。",
      "孩子正在检查自行车，准备开始坐地铁。",
      "请关一下门。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "老师正在超市旅行。",
    "meaning": "老师正在超市旅行。",
    "options": [
      "妈妈每天都要运动。",
      "为了准备明天的工作，爸爸今晚还要坐地铁。",
      "老师正在超市旅行。",
      "为了准备明天的工作，我今晚还要旅行。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "妈妈希望明天可以继续运动。",
    "meaning": "妈妈希望明天可以继续运动。",
    "options": [
      "我的朋友觉得做饭很重要。",
      "你有几个兄弟姐妹？",
      "老师正在上课。",
      "妈妈希望明天可以继续运动。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "昨天孩子在公司做饭，所以回家比较晚。",
    "meaning": "昨天，孩子在公司做饭，所以回家比较晚。",
    "options": [
      "昨天孩子在公司做饭，所以回家比较晚。",
      "我会说一点中文。",
      "你今天怎么样？",
      "虽然时间不多，但是我的同学还是完成了做作业。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你告诉我，他最近正在打电话。",
    "meaning": "你告诉我，他最近正在打电话。",
    "options": [
      "如果有时间，他会去车站学习汉语。",
      "你告诉我，他最近正在打电话。",
      "我的朋友正在检查咖啡，准备开始买东西。",
      "会议结束以后，姐姐马上回到北京继续准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "因为工作很忙，我的朋友只能晚上坐地铁。",
    "meaning": "因为工作很忙，我的朋友只能晚上坐地铁。",
    "options": [
      "我忘记这个词了。",
      "因为工作很忙，我的朋友只能晚上坐地铁。",
      "我今天感觉很好。",
      "妈妈已经把汉语书带到图书馆了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "周末的时候，同事喜欢去商店听音乐。",
    "meaning": "周末的时候，同事喜欢去商店听音乐。",
    "options": [
      "我听说爸爸最近在餐厅负责做饭。",
      "你喜欢什么运动？",
      "到了给我发消息。",
      "周末的时候，同事喜欢去商店听音乐。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "哥哥觉得看电影很重要。",
    "meaning": "哥哥觉得看电影很重要。",
    "options": [
      "哥哥觉得看电影很重要。",
      "我有一个姐姐。",
      "你学中文多久了？",
      "这个问题很简单。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "经过讨论，医生决定在学校做作业。",
    "meaning": "经过讨论，医生决定在学校做作业。",
    "options": [
      "今天工作很忙。",
      "虽然时间不多，但是她还是完成了工作。",
      "经过讨论，医生决定在学校做作业。",
      "老师觉得学习汉语很重要。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "为了准备明天的工作，他今晚还要买东西。",
    "meaning": "为了准备明天的工作，他今晚还要买东西。",
    "options": [
      "为了准备明天的工作，他今晚还要买东西。",
      "周末的时候，医生喜欢去北京运动。",
      "你准备好了吗？",
      "我的朋友正在检查咖啡，准备开始买东西。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "最近我的同学常常需要准备考试。",
    "meaning": "最近，我的同学常常需要准备考试。",
    "options": [
      "因为工作很忙，爸爸只能晚上旅行。",
      "最近我的同学常常需要准备考试。",
      "我明白了。",
      "我的朋友正在检查咖啡，准备开始买东西。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "如果计划没有变化，爸爸下午会在家里学习汉语。",
    "meaning": "如果计划没有变化，爸爸下午会在家里学习汉语。",
    "options": [
      "我忘记这个词了。",
      "你想喝茶还是咖啡？",
      "同事每天都要运动。",
      "如果计划没有变化，爸爸下午会在家里学习汉语。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "姐姐已经把衣服带到机场了。",
    "meaning": "姐姐已经把衣服带到机场了。",
    "options": [
      "这家饭店的菜很好吃。",
      "姐姐已经把衣服带到机场了。",
      "你的电话响了。",
      "虽然时间不多，但是同事还是完成了做作业。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我正在检查照片，准备开始旅行。",
    "meaning": "我正在检查照片，准备开始旅行。",
    "options": [
      "你在哪里？",
      "这个词是什么意思？",
      "我正在检查照片，准备开始旅行。",
      "虽然时间不多，但是妈妈还是完成了打电话。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "会议结束以后，她马上回到超市继续运动。",
    "meaning": "会议结束以后，她马上回到超市继续运动。",
    "options": [
      "今天爸爸在图书馆买东西。",
      "会议结束以后，她马上回到超市继续运动。",
      "昨天爸爸在医院看电影，所以回家比较晚。",
      "我们几点见面？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我听说老师最近在公园负责做饭。",
    "meaning": "我听说，老师最近在公园负责做饭。",
    "options": [
      "请看第三页。",
      "我听说老师最近在公园负责做饭。",
      "孩子觉得看电影很重要。",
      "没问题。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "虽然时间不多，但是妈妈还是完成了打电话。",
    "meaning": "虽然时间不多，但是妈妈还是完成了打电话。",
    "options": [
      "虽然时间不多，但是妈妈还是完成了打电话。",
      "你会说中文吗？",
      "同事希望明天可以继续听音乐。",
      "为了准备明天的工作，孩子今晚还要旅行。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "今天孩子在车站坐地铁。",
    "meaning": "今天，孩子在车站坐地铁。",
    "options": [
      "我正在检查照片，准备开始旅行。",
      "今天孩子在车站坐地铁。",
      "手机没电了。",
      "我学中文一年了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你每天都要听音乐。",
    "meaning": "你每天都要听音乐。",
    "options": [
      "哥哥正在学校买东西。",
      "你每天都要听音乐。",
      "这个问题有点难。",
      "你的电话响了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "如果有时间，我的朋友会去商店看电影。",
    "meaning": "如果有时间，我的朋友会去商店看电影。",
    "options": [
      "我喜欢打篮球。",
      "昨天我的朋友在公园学习汉语，所以回家比较晚。",
      "如果有时间，我的朋友会去商店看电影。",
      "到了给我发消息。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "为了做作业，同事提前来到餐厅。",
    "meaning": "为了做作业，同事提前来到餐厅。",
    "options": [
      "我今天感觉不错。",
      "周末的时候，姐姐喜欢去上海运动。",
      "为了做作业，同事提前来到餐厅。",
      "如果计划没有变化，他下午会在公园看电影。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "哥哥正在学校买东西。",
    "meaning": "哥哥正在学校买东西。",
    "options": [
      "虽然时间不多，但是姐姐还是完成了打电话。",
      "今天早点睡吧。",
      "你住在哪里？",
      "哥哥正在学校买东西。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "医生希望明天可以继续准备考试。",
    "meaning": "医生希望明天可以继续准备考试。",
    "options": [
      "医生已经把衣服带到车站了。",
      "医生希望明天可以继续准备考试。",
      "我不知道。",
      "你喜欢听什么音乐？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "昨天他在图书馆学习汉语，所以回家比较晚。",
    "meaning": "昨天，他在图书馆学习汉语，所以回家比较晚。",
    "options": [
      "我听说爸爸最近在餐厅负责做饭。",
      "昨天他在图书馆学习汉语，所以回家比较晚。",
      "会议结束以后，同事马上回到学校继续准备考试。",
      "我喜欢打篮球。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我的同学告诉我，他最近正在工作。",
    "meaning": "我的同学告诉我，他最近正在工作。",
    "options": [
      "周末的时候，医生喜欢去北京运动。",
      "我的同学告诉我，他最近正在工作。",
      "不要紧张。",
      "今天太热了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "因为工作很忙，爸爸只能晚上旅行。",
    "meaning": "因为工作很忙，爸爸只能晚上旅行。",
    "options": [
      "因为工作很忙，爸爸只能晚上旅行。",
      "医生希望明天可以继续准备考试。",
      "你想喝茶还是咖啡？",
      "今天太热了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "周末的时候，姐姐喜欢去上海运动。",
    "meaning": "周末的时候，姐姐喜欢去上海运动。",
    "options": [
      "你准备好了吗？",
      "孩子正在检查自行车，准备开始坐地铁。",
      "经过讨论，我的同学决定在餐厅打电话。",
      "周末的时候，姐姐喜欢去上海运动。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我觉得做饭很重要。",
    "meaning": "我觉得做饭很重要。",
    "options": [
      "为了工作，她提前来到上海。",
      "请再说一遍。",
      "今天他在超市坐地铁。",
      "我觉得做饭很重要。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "经过讨论，她决定在公园打电话。",
    "meaning": "经过讨论，她决定在公园打电话。",
    "options": [
      "经过讨论，她决定在公园打电话。",
      "昨天我在学校做饭，所以回家比较晚。",
      "我正在检查照片，准备开始旅行。",
      "你住在哪里？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "为了准备明天的工作，老师今晚还要坐地铁。",
    "meaning": "为了准备明天的工作，老师今晚还要坐地铁。",
    "options": [
      "你能解释一下吗？",
      "医生已经把衣服带到车站了。",
      "今天孩子在车站坐地铁。",
      "为了准备明天的工作，老师今晚还要坐地铁。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "最近妈妈常常需要听音乐。",
    "meaning": "最近，妈妈常常需要听音乐。",
    "options": [
      "我喜欢在家看电影。",
      "路上小心。",
      "最近妈妈常常需要听音乐。",
      "我去年开始学中文。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "如果计划没有变化，孩子下午会在北京看电影。",
    "meaning": "如果计划没有变化，孩子下午会在北京看电影。",
    "options": [
      "会议结束以后，我的同学马上回到商店继续运动。",
      "今天早点睡吧。",
      "我听说他最近在学校负责看电影。",
      "如果计划没有变化，孩子下午会在北京看电影。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你已经把报纸带到商店了。",
    "meaning": "你已经把报纸带到商店了。",
    "options": [
      "到了给我发消息。",
      "这件衣服多少钱？",
      "你已经把报纸带到商店了。",
      "请看第三页。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我的朋友正在检查咖啡，准备开始买东西。",
    "meaning": "我的朋友正在检查咖啡，准备开始买东西。",
    "options": [
      "我的朋友正在检查咖啡，准备开始买东西。",
      "我的朋友觉得做饭很重要。",
      "这个问题很重要。",
      "我在门口等你。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "会议结束以后，同事马上回到学校继续准备考试。",
    "meaning": "会议结束以后，同事马上回到学校继续准备考试。",
    "options": [
      "我忘记带手机了。",
      "会议结束以后，同事马上回到学校继续准备考试。",
      "水太烫了。",
      "我昨天去了超市。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我听说哥哥最近在医院负责学习汉语。",
    "meaning": "我听说，哥哥最近在医院负责学习汉语。",
    "options": [
      "这个问题有点难。",
      "为了准备明天的工作，爸爸今晚还要坐地铁。",
      "你每天都要听音乐。",
      "我听说哥哥最近在医院负责学习汉语。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "虽然时间不多，但是医生还是完成了工作。",
    "meaning": "虽然时间不多，但是医生还是完成了工作。",
    "options": [
      "虽然时间不多，但是医生还是完成了工作。",
      "我有一个妹妹。",
      "你昨天几点回家？",
      "我正在做作业。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "今天老师在餐厅介绍自己。",
    "meaning": "今天，老师在餐厅介绍自己。",
    "options": [
      "哥哥希望明天可以继续完成作业。",
      "该你回答了。",
      "我正在车站学习汉语。",
      "今天老师在餐厅介绍自己。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "哥哥每天都要完成作业。",
    "meaning": "哥哥每天都要完成作业。",
    "options": [
      "哥哥每天都要完成作业。",
      "下一班车几点出发？",
      "老师正在机场准备考试。",
      "我希望你能理解我的意思。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "如果有时间，经理会去机场联系朋友。",
    "meaning": "如果有时间，经理会去机场联系朋友。",
    "options": [
      "我正在家里练习发音。",
      "如果有时间，经理会去机场联系朋友。",
      "我有不同的意见。",
      "昨天哥哥在上海完成作业，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了练习发音，我提前来到医院。",
    "meaning": "为了练习发音，我提前来到医院。",
    "options": [
      "经过讨论，经理决定在北京联系朋友。",
      "为了练习发音，我提前来到医院。",
      "这个问题需要时间。",
      "加油！"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "老师正在广州买东西。",
    "meaning": "老师正在广州买东西。",
    "options": [
      "老师正在广州买东西。",
      "你最近怎么样？",
      "会议结束以后，我马上回到医院继续学习汉语。",
      "让我想一想。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "哥哥希望明天可以继续解决问题。",
    "meaning": "哥哥希望明天可以继续解决问题。",
    "options": [
      "老师希望明天可以继续介绍自己。",
      "老师正在检查礼物，准备开始介绍自己。",
      "虽然时间不多，但是哥哥还是完成了参加会议。",
      "哥哥希望明天可以继续解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "昨天经理在图书馆安排时间，所以回家比较晚。",
    "meaning": "昨天，经理在图书馆安排时间，所以回家比较晚。",
    "options": [
      "网络有点慢。",
      "哥哥希望明天可以继续参加会议。",
      "虽然很忙，但是我会完成。",
      "昨天经理在图书馆安排时间，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我告诉我，他最近正在学习汉语。",
    "meaning": "我告诉我，他最近正在学习汉语。",
    "options": [
      "你对这个计划有什么建议？",
      "我告诉我，他最近正在学习汉语。",
      "我还差一点。",
      "请按照说明完成这项工作。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "因为工作很忙，老师只能晚上准备考试。",
    "meaning": "因为工作很忙，老师只能晚上准备考试。",
    "options": [
      "今天就练到这里。",
      "坚持下去一定会有进步。",
      "因为工作很忙，老师只能晚上准备考试。",
      "因为工作很忙，老师只能晚上介绍自己。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "周末的时候，哥哥喜欢去公园参加会议。",
    "meaning": "周末的时候，哥哥喜欢去公园参加会议。",
    "options": [
      "你对这个计划有什么建议？",
      "哥哥已经把自行车带到家里了。",
      "周末的时候，哥哥喜欢去公园参加会议。",
      "请在这里停车。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经理觉得计划旅行很重要。",
    "meaning": "经理觉得计划旅行很重要。",
    "options": [
      "今天老师在餐厅介绍自己。",
      "因为工作很忙，我只能晚上学习汉语。",
      "经理觉得计划旅行很重要。",
      "现在我觉得容易多了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，我决定在超市打扫房间。",
    "meaning": "经过讨论，我决定在超市打扫房间。",
    "options": [
      "没问题，我等你。",
      "你对这个计划有什么建议？",
      "经过讨论，我决定在超市打扫房间。",
      "经理觉得联系朋友很重要。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "为了准备明天的工作，老师今晚还要介绍自己。",
    "meaning": "为了准备明天的工作，老师今晚还要介绍自己。",
    "options": [
      "为了准备明天的工作，老师今晚还要介绍自己。",
      "这个决定对大家都很重要。",
      "经理告诉我，他最近正在安排时间。",
      "今天我在上海练习发音。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "最近哥哥常常需要完成作业。",
    "meaning": "最近，哥哥常常需要完成作业。",
    "options": [
      "哥哥每天都要解决问题。",
      "最近哥哥常常需要完成作业。",
      "因为工作很忙，老师只能晚上介绍自己。",
      "我想提高听力。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果计划没有变化，经理下午会在餐厅联系朋友。",
    "meaning": "如果计划没有变化，经理下午会在餐厅联系朋友。",
    "options": [
      "明天继续练习。",
      "请问还有空房吗？",
      "我们需要找到解决办法。",
      "如果计划没有变化，经理下午会在餐厅联系朋友。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我已经把电脑带到上海了。",
    "meaning": "我已经把电脑带到上海了。",
    "options": [
      "你平时跟谁练习中文？",
      "我已经把电脑带到上海了。",
      "最近我常常需要打扫房间。",
      "别想太多。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "老师正在检查中文书，准备开始买东西。",
    "meaning": "老师正在检查中文书，准备开始买东西。",
    "options": [
      "老师正在检查中文书，准备开始买东西。",
      "我已经完成了。",
      "我还需要一点时间。",
      "你最近怎么样？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "会议结束以后，哥哥马上回到医院继续解决问题。",
    "meaning": "会议结束以后，哥哥马上回到医院继续解决问题。",
    "options": [
      "为了学习汉语，我提前来到上海。",
      "因为下雨，所以我们没有出去。",
      "这个建议很好。",
      "会议结束以后，哥哥马上回到医院继续解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我听说经理最近在广州负责安排时间。",
    "meaning": "我听说，经理最近在广州负责安排时间。",
    "options": [
      "老师希望明天可以继续买东西。",
      "我听说经理最近在广州负责安排时间。",
      "再听一次，你会听出来的。",
      "无线网络的密码是什么？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "虽然时间不多，但是我还是完成了学习汉语。",
    "meaning": "虽然时间不多，但是我还是完成了学习汉语。",
    "options": [
      "我正在车站学习汉语。",
      "下一班车几点出发？",
      "虽然时间不多，但是我还是完成了学习汉语。",
      "学习语言需要时间。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "今天老师在图书馆准备考试。",
    "meaning": "今天，老师在图书馆准备考试。",
    "options": [
      "会议结束以后，老师马上回到图书馆继续买东西。",
      "如果计划没有变化，经理下午会在餐厅联系朋友。",
      "今天老师在图书馆准备考试。",
      "我最喜欢学口语。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "哥哥每天都要参加会议。",
    "meaning": "哥哥每天都要参加会议。",
    "options": [
      "我听说老师最近在广州负责准备考试。",
      "哥哥每天都要参加会议。",
      "你对这个计划有什么建议？",
      "我听说哥哥最近在家里负责解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果有时间，经理会去银行计划旅行。",
    "meaning": "如果有时间，经理会去银行计划旅行。",
    "options": [
      "如果有时间，经理会去银行计划旅行。",
      "你对这个计划有什么建议？",
      "我们应该先解决最重要的问题。",
      "经理正在检查手机，准备开始安排时间。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "为了打扫房间，我提前来到公园。",
    "meaning": "为了打扫房间，我提前来到公园。",
    "options": [
      "今天就练到这里。",
      "昨天经理在图书馆安排时间，所以回家比较晚。",
      "为了打扫房间，我提前来到公园。",
      "我每天都要打扫房间。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "老师正在公司介绍自己。",
    "meaning": "老师正在公司介绍自己。",
    "options": [
      "答错了也没关系。",
      "你准备好回答了吗？",
      "经理告诉我，他最近正在安排时间。",
      "老师正在公司介绍自己。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "哥哥希望明天可以继续完成作业。",
    "meaning": "哥哥希望明天可以继续完成作业。",
    "options": [
      "老师每天都要买东西。",
      "没什么，只是有点累。",
      "哥哥希望明天可以继续完成作业。",
      "请开快一点。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "昨天经理在北京联系朋友，所以回家比较晚。",
    "meaning": "昨天，经理在北京联系朋友，所以回家比较晚。",
    "options": [
      "现在路上堵车吗？",
      "我们需要提前准备材料。",
      "昨天经理在北京联系朋友，所以回家比较晚。",
      "为了打扫房间，我提前来到公园。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我告诉我，他最近正在练习发音。",
    "meaning": "我告诉我，他最近正在练习发音。",
    "options": [
      "我告诉我，他最近正在练习发音。",
      "这样做比较方便。",
      "你的反应越来越快了。",
      "因为工作很忙，老师只能晚上介绍自己。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "因为工作很忙，老师只能晚上买东西。",
    "meaning": "因为工作很忙，老师只能晚上买东西。",
    "options": [
      "请告诉我详细的地址。",
      "因为工作很忙，老师只能晚上买东西。",
      "请集中注意力。",
      "如果计划没有变化，经理下午会在图书馆计划旅行。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "周末的时候，哥哥喜欢去上海解决问题。",
    "meaning": "周末的时候，哥哥喜欢去上海解决问题。",
    "options": [
      "最近一切都不错。",
      "哥哥每天都要参加会议。",
      "请在这里停车。",
      "周末的时候，哥哥喜欢去上海解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "经理觉得安排时间很重要。",
    "meaning": "经理觉得安排时间很重要。",
    "options": [
      "你为什么不开心？",
      "经理觉得安排时间很重要。",
      "你觉得中文难吗？",
      "虽然时间不多，但是哥哥还是完成了参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "经过讨论，我决定在医院学习汉语。",
    "meaning": "经过讨论，我决定在医院学习汉语。",
    "options": [
      "经理正在公司联系朋友。",
      "如果有时间，哥哥会去超市参加会议。",
      "经过讨论，我决定在医院学习汉语。",
      "认真听，不要着急。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "为了准备明天的工作，老师今晚还要准备考试。",
    "meaning": "为了准备明天的工作，老师今晚还要准备考试。",
    "options": [
      "每天一点点就很好。",
      "最近哥哥常常需要参加会议。",
      "为了准备明天的工作，老师今晚还要准备考试。",
      "我说得对吗？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "最近哥哥常常需要参加会议。",
    "meaning": "最近，哥哥常常需要参加会议。",
    "options": [
      "经过讨论，我决定在超市打扫房间。",
      "最近哥哥常常需要参加会议。",
      "你觉得这个办法怎么样？",
      "周末的时候，老师喜欢去广州买东西。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果计划没有变化，经理下午会在图书馆计划旅行。",
    "meaning": "如果计划没有变化，经理下午会在图书馆计划旅行。",
    "options": [
      "无线网络的密码是什么？",
      "我马上处理。",
      "我告诉我，他最近正在打扫房间。",
      "如果计划没有变化，经理下午会在图书馆计划旅行。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我已经把机票带到家里了。",
    "meaning": "我已经把机票带到家里了。",
    "options": [
      "我希望以后可以说得更流利。",
      "加油！",
      "这样做比较方便。",
      "我已经把机票带到家里了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "老师正在检查礼物，准备开始介绍自己。",
    "meaning": "老师正在检查礼物，准备开始介绍自己。",
    "options": [
      "老师每天都要准备考试。",
      "为了打扫房间，我提前来到公园。",
      "老师正在检查礼物，准备开始介绍自己。",
      "你已经做得很好了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "会议结束以后，哥哥马上回到公园继续完成作业。",
    "meaning": "会议结束以后，哥哥马上回到公园继续完成作业。",
    "options": [
      "会议结束以后，哥哥马上回到公园继续完成作业。",
      "下一题会稍微难一点。",
      "经过讨论，经理决定在餐厅计划旅行。",
      "听到熟悉的词就先记下来。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我听说经理最近在公司负责联系朋友。",
    "meaning": "我听说，经理最近在公司负责联系朋友。",
    "options": [
      "请按照说明完成这项工作。",
      "我听说经理最近在公司负责联系朋友。",
      "虽然时间不多，但是我还是完成了打扫房间。",
      "如果计划没有变化，经理下午会在北京安排时间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "虽然时间不多，但是我还是完成了练习发音。",
    "meaning": "虽然时间不多，但是我还是完成了练习发音。",
    "options": [
      "虽然时间不多，但是我还是完成了练习发音。",
      "虽然时间不多，但是经理还是完成了安排时间。",
      "最近我常常需要打扫房间。",
      "哥哥觉得参加会议很重要。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "今天老师在北京买东西。",
    "meaning": "今天，老师在北京买东西。",
    "options": [
      "今天老师在北京买东西。",
      "因为工作很忙，我只能晚上练习发音。",
      "会议结束以后，老师马上回到图书馆继续买东西。",
      "请给我一张发票。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "哥哥每天都要解决问题。",
    "meaning": "哥哥每天都要解决问题。",
    "options": [
      "哥哥每天都要解决问题。",
      "我的房间在哪里？",
      "如果有时间，经理会去银行计划旅行。",
      "虽然时间不多，但是哥哥还是完成了参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "如果有时间，经理会去餐厅安排时间。",
    "meaning": "如果有时间，经理会去餐厅安排时间。",
    "options": [
      "我们先讨论一下。",
      "经理觉得计划旅行很重要。",
      "今天我们练习十句话。",
      "如果有时间，经理会去餐厅安排时间。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "为了学习汉语，我提前来到上海。",
    "meaning": "为了学习汉语，我提前来到上海。",
    "options": [
      "为了学习汉语，我提前来到上海。",
      "早餐几点开始？",
      "我听说老师最近在广州负责准备考试。",
      "请问还有空房吗？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "老师正在机场准备考试。",
    "meaning": "老师正在机场准备考试。",
    "options": [
      "为了学习汉语，我提前来到上海。",
      "经理觉得联系朋友很重要。",
      "老师正在机场准备考试。",
      "没什么，只是有点累。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "哥哥希望明天可以继续参加会议。",
    "meaning": "哥哥希望明天可以继续参加会议。",
    "options": [
      "哥哥希望明天可以继续参加会议。",
      "先不要看拼音。",
      "这个建议很好。",
      "先听关键词，再理解整句话。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "昨天经理在广州计划旅行，所以回家比较晚。",
    "meaning": "昨天，经理在广州计划旅行，所以回家比较晚。",
    "options": [
      "今天老师在图书馆准备考试。",
      "我们先讨论一下。",
      "如果明天下雨，我们就改天再去。",
      "昨天经理在广州计划旅行，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我告诉我，他最近正在打扫房间。",
    "meaning": "我告诉我，他最近正在打扫房间。",
    "options": [
      "我想住两晚。",
      "我告诉我，他最近正在打扫房间。",
      "经理觉得计划旅行很重要。",
      "今天比昨天进步了。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "因为工作很忙，老师只能晚上介绍自己。",
    "meaning": "因为工作很忙，老师只能晚上介绍自己。",
    "options": [
      "因为工作很忙，老师只能晚上介绍自己。",
      "老师正在广州买东西。",
      "这样更容易记住。",
      "今天我在公园学习汉语。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "周末的时候，哥哥喜欢去家里完成作业。",
    "meaning": "周末的时候，哥哥喜欢去家里完成作业。",
    "options": [
      "请按照说明完成这项工作。",
      "周末的时候，哥哥喜欢去家里完成作业。",
      "我每天都要打扫房间。",
      "为了完成作业，哥哥提前来到公园。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "经理觉得联系朋友很重要。",
    "meaning": "经理觉得联系朋友很重要。",
    "options": [
      "经理觉得联系朋友很重要。",
      "请提前十分钟到。",
      "我听说经理最近在广州负责安排时间。",
      "经理觉得计划旅行很重要。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "经过讨论，我决定在公园练习发音。",
    "meaning": "经过讨论，我决定在公园练习发音。",
    "options": [
      "虽然时间不多，但是我还是完成了练习发音。",
      "经过讨论，我决定在公园练习发音。",
      "周末的时候，哥哥喜欢去公园参加会议。",
      "祝你今天开心。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了准备明天的工作，老师今晚还要买东西。",
    "meaning": "为了准备明天的工作，老师今晚还要买东西。",
    "options": [
      "虽然时间不多，但是我还是完成了练习发音。",
      "为了安排时间，经理提前来到广州。",
      "我的房间在哪里？",
      "为了准备明天的工作，老师今晚还要买东西。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "最近哥哥常常需要解决问题。",
    "meaning": "最近，哥哥常常需要解决问题。",
    "options": [
      "每天一点点就很好。",
      "最近哥哥常常需要解决问题。",
      "老师希望明天可以继续介绍自己。",
      "我正在练习听力。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果计划没有变化，经理下午会在北京安排时间。",
    "meaning": "如果计划没有变化，经理下午会在北京安排时间。",
    "options": [
      "如果计划没有变化，经理下午会在北京安排时间。",
      "经理已经把地图带到广州了。",
      "我们每天晚上聊天。",
      "欢迎来到我们的中文课程。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经把照片带到学校了。",
    "meaning": "我已经把照片带到学校了。",
    "options": [
      "欢迎来到我们的中文课程。",
      "我已经把照片带到学校了。",
      "虽然时间不多，但是哥哥还是完成了参加会议。",
      "今天老师在图书馆准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "老师正在检查雨伞，准备开始准备考试。",
    "meaning": "老师正在检查雨伞，准备开始准备考试。",
    "options": [
      "下一班车几点出发？",
      "听不懂的时候可以再听一次。",
      "老师正在检查雨伞，准备开始准备考试。",
      "我们应该先解决最重要的问题。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "会议结束以后，哥哥马上回到上海继续参加会议。",
    "meaning": "会议结束以后，哥哥马上回到上海继续参加会议。",
    "options": [
      "该你回答了。",
      "会议结束以后，哥哥马上回到上海继续参加会议。",
      "今天经理在北京安排时间。",
      "哥哥每天都要参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我听说经理最近在机场负责计划旅行。",
    "meaning": "我听说，经理最近在机场负责计划旅行。",
    "options": [
      "哥哥觉得参加会议很重要。",
      "我听说经理最近在机场负责计划旅行。",
      "请按照说明完成这项工作。",
      "周末的时候，老师喜欢去公司介绍自己。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "虽然时间不多，但是我还是完成了打扫房间。",
    "meaning": "虽然时间不多，但是我还是完成了打扫房间。",
    "options": [
      "没什么，只是有点累。",
      "不要害怕说错。",
      "祝你一路顺风。",
      "虽然时间不多，但是我还是完成了打扫房间。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "今天老师在广州介绍自己。",
    "meaning": "今天，老师在广州介绍自己。",
    "options": [
      "昨天哥哥在家里参加会议，所以回家比较晚。",
      "今天老师在广州介绍自己。",
      "坚持下去一定会有进步。",
      "先听关键词，再理解整句话。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果有时间，哥哥会去车站完成作业。",
    "meaning": "如果有时间，哥哥会去车站完成作业。",
    "options": [
      "今天我在上海练习发音。",
      "这一题你答对了。",
      "这样做比较方便。",
      "如果有时间，哥哥会去车站完成作业。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "为了联系朋友，经理提前来到图书馆。",
    "meaning": "为了联系朋友，经理提前来到图书馆。",
    "options": [
      "只要努力，就会进步。",
      "欢迎来到我们的中文课程。",
      "我们应该先解决最重要的问题。",
      "为了联系朋友，经理提前来到图书馆。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我正在家里练习发音。",
    "meaning": "我正在家里练习发音。",
    "options": [
      "我正在家里练习发音。",
      "经过讨论，经理决定在图书馆安排时间。",
      "会议结束以后，我马上回到公园继续练习发音。",
      "我说得对吗？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "老师希望明天可以继续买东西。",
    "meaning": "老师希望明天可以继续买东西。",
    "options": [
      "我还需要一点时间。",
      "因为下雨，所以我们没有出去。",
      "老师希望明天可以继续买东西。",
      "今天的工作完成了吗？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "昨天哥哥在公园解决问题，所以回家比较晚。",
    "meaning": "昨天，哥哥在公园解决问题，所以回家比较晚。",
    "options": [
      "周末的时候，老师喜欢去公司介绍自己。",
      "这个决定对大家都很重要。",
      "昨天哥哥在公园解决问题，所以回家比较晚。",
      "虽然时间不多，但是我还是完成了打扫房间。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经理告诉我，他最近正在安排时间。",
    "meaning": "经理告诉我，他最近正在安排时间。",
    "options": [
      "如果计划没有变化，经理下午会在北京安排时间。",
      "经理觉得计划旅行很重要。",
      "多听几遍就会越来越熟悉。",
      "经理告诉我，他最近正在安排时间。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "因为工作很忙，我只能晚上学习汉语。",
    "meaning": "因为工作很忙，我只能晚上学习汉语。",
    "options": [
      "因为工作很忙，我只能晚上学习汉语。",
      "现在开始下一题。",
      "我同意你的看法。",
      "经过讨论，经理决定在图书馆安排时间。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "周末的时候，老师喜欢去北京准备考试。",
    "meaning": "周末的时候，老师喜欢去北京准备考试。",
    "options": [
      "周末的时候，老师喜欢去北京准备考试。",
      "经理觉得安排时间很重要。",
      "今天就练到这里。",
      "我喜欢用中文聊天。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "哥哥觉得参加会议很重要。",
    "meaning": "哥哥觉得参加会议很重要。",
    "options": [
      "经理告诉我，他最近正在安排时间。",
      "每天一点点就很好。",
      "哥哥觉得参加会议很重要。",
      "重复练习可以提高反应速度。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，经理决定在餐厅计划旅行。",
    "meaning": "经过讨论，经理决定在餐厅计划旅行。",
    "options": [
      "如果计划没有变化，经理下午会在北京安排时间。",
      "经过讨论，经理决定在餐厅计划旅行。",
      "因为工作很忙，我只能晚上练习发音。",
      "为了打扫房间，我提前来到公园。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了准备明天的工作，我今晚还要打扫房间。",
    "meaning": "为了准备明天的工作，我今晚还要打扫房间。",
    "options": [
      "最近老师常常需要准备考试。",
      "祝你今天开心。",
      "为了准备明天的工作，我今晚还要打扫房间。",
      "你觉得中文难吗？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "最近老师常常需要介绍自己。",
    "meaning": "最近，老师常常需要介绍自己。",
    "options": [
      "最近老师常常需要介绍自己。",
      "虽然时间不多，但是我还是完成了学习汉语。",
      "如果计划没有变化，经理下午会在北京安排时间。",
      "除了中文，我还学习英语。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "如果计划没有变化，哥哥下午会在医院完成作业。",
    "meaning": "如果计划没有变化，哥哥下午会在医院完成作业。",
    "options": [
      "如果计划没有变化，哥哥下午会在医院完成作业。",
      "老师正在检查中文书，准备开始买东西。",
      "你可以再听一次。",
      "加油！"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "经理已经把地图带到广州了。",
    "meaning": "经理已经把地图带到广州了。",
    "options": [
      "你为什么不开心？",
      "加油！",
      "你觉得中文难吗？",
      "经理已经把地图带到广州了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我正在检查电脑，准备开始练习发音。",
    "meaning": "我正在检查电脑，准备开始练习发音。",
    "options": [
      "我还差一点。",
      "我正在检查电脑，准备开始练习发音。",
      "今天经理在北京安排时间。",
      "请问需要多长时间？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "会议结束以后，老师马上回到图书馆继续买东西。",
    "meaning": "会议结束以后，老师马上回到图书馆继续买东西。",
    "options": [
      "我每天都听中文。",
      "因为工作很忙，我只能晚上打扫房间。",
      "周末的时候，哥哥喜欢去上海解决问题。",
      "会议结束以后，老师马上回到图书馆继续买东西。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我听说哥哥最近在家里负责解决问题。",
    "meaning": "我听说，哥哥最近在家里负责解决问题。",
    "options": [
      "请开快一点。",
      "听完以后再看答案。",
      "周末的时候，老师喜欢去公司介绍自己。",
      "我听说哥哥最近在家里负责解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "虽然时间不多，但是经理还是完成了安排时间。",
    "meaning": "虽然时间不多，但是经理还是完成了安排时间。",
    "options": [
      "我们应该先解决最重要的问题。",
      "我跟朋友一起练习。",
      "虽然时间不多，但是经理还是完成了安排时间。",
      "我正在检查电脑，准备开始练习发音。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "今天我在公园学习汉语。",
    "meaning": "今天，我在公园学习汉语。",
    "options": [
      "经理告诉我，他最近正在计划旅行。",
      "老师希望明天可以继续准备考试。",
      "今天我在公园学习汉语。",
      "如果有时间，经理会去餐厅安排时间。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "老师每天都要准备考试。",
    "meaning": "老师每天都要准备考试。",
    "options": [
      "我已经收到文件了。",
      "今天老师在广州介绍自己。",
      "请不要忘记带身份证。",
      "老师每天都要准备考试。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "如果有时间，哥哥会去超市参加会议。",
    "meaning": "如果有时间，哥哥会去超市参加会议。",
    "options": [
      "如果有时间，哥哥会去超市参加会议。",
      "我已经把资料发给你了。",
      "周末的时候，我喜欢去上海学习汉语。",
      "老师正在公司介绍自己。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "为了计划旅行，经理提前来到北京。",
    "meaning": "为了计划旅行，经理提前来到北京。",
    "options": [
      "为了计划旅行，经理提前来到北京。",
      "请问还有空房吗？",
      "开始的时候有一点难。",
      "我听说哥哥最近在家里负责解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我正在学校打扫房间。",
    "meaning": "我正在学校打扫房间。",
    "options": [
      "经理已经把地图带到广州了。",
      "请给我一张发票。",
      "会议结束以后，我马上回到医院继续学习汉语。",
      "我正在学校打扫房间。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "老师希望明天可以继续介绍自己。",
    "meaning": "老师希望明天可以继续介绍自己。",
    "options": [
      "今天老师在广州介绍自己。",
      "周末的时候，老师喜欢去广州买东西。",
      "虽然时间不多，但是我还是完成了打扫房间。",
      "老师希望明天可以继续介绍自己。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "昨天哥哥在上海完成作业，所以回家比较晚。",
    "meaning": "昨天，哥哥在上海完成作业，所以回家比较晚。",
    "options": [
      "虽然时间不多，但是我还是完成了打扫房间。",
      "因为今天下雨，所以我没出去。",
      "昨天哥哥在上海完成作业，所以回家比较晚。",
      "电梯在哪里？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经理告诉我，他最近正在联系朋友。",
    "meaning": "经理告诉我，他最近正在联系朋友。",
    "options": [
      "经理告诉我，他最近正在联系朋友。",
      "祝你学习进步。",
      "老师正在检查雨伞，准备开始准备考试。",
      "我正在家里练习发音。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "因为工作很忙，我只能晚上练习发音。",
    "meaning": "因为工作很忙，我只能晚上练习发音。",
    "options": [
      "下一班车几点出发？",
      "为了准备明天的工作，我今晚还要学习汉语。",
      "因为工作很忙，我只能晚上练习发音。",
      "你为什么不开心？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "周末的时候，老师喜欢去广州买东西。",
    "meaning": "周末的时候，老师喜欢去广州买东西。",
    "options": [
      "如果计划没有变化，经理下午会在餐厅联系朋友。",
      "周末的时候，老师喜欢去广州买东西。",
      "今天老师在北京买东西。",
      "我们明天再讨论。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "哥哥觉得解决问题很重要。",
    "meaning": "哥哥觉得解决问题很重要。",
    "options": [
      "哥哥觉得解决问题很重要。",
      "经理觉得安排时间很重要。",
      "昨天哥哥在公园解决问题，所以回家比较晚。",
      "哥哥告诉我，他最近正在解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "经过讨论，经理决定在图书馆安排时间。",
    "meaning": "经过讨论，经理决定在图书馆安排时间。",
    "options": [
      "经过讨论，经理决定在北京联系朋友。",
      "请集中注意力。",
      "每天练习一点儿很重要。",
      "经过讨论，经理决定在图书馆安排时间。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "为了准备明天的工作，我今晚还要学习汉语。",
    "meaning": "为了准备明天的工作，我今晚还要学习汉语。",
    "options": [
      "现在路上堵车吗？",
      "经理正在检查地图，准备开始联系朋友。",
      "为了准备明天的工作，我今晚还要学习汉语。",
      "我们先讨论一下。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "最近老师常常需要准备考试。",
    "meaning": "最近，老师常常需要准备考试。",
    "options": [
      "最近老师常常需要准备考试。",
      "请把文件发给我。",
      "我想提高听力。",
      "虽然很忙，但是我会完成。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "如果计划没有变化，哥哥下午会在公园参加会议。",
    "meaning": "如果计划没有变化，哥哥下午会在公园参加会议。",
    "options": [
      "今天我在上海练习发音。",
      "我们明天再讨论。",
      "虽然时间不多，但是经理还是完成了安排时间。",
      "如果计划没有变化，哥哥下午会在公园参加会议。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "经理已经把文件带到公司了。",
    "meaning": "经理已经把文件带到公司了。",
    "options": [
      "现在开始下一题。",
      "经理告诉我，他最近正在安排时间。",
      "我告诉我，他最近正在打扫房间。",
      "经理已经把文件带到公司了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我正在检查机票，准备开始打扫房间。",
    "meaning": "我正在检查机票，准备开始打扫房间。",
    "options": [
      "我正在检查机票，准备开始打扫房间。",
      "我听说哥哥最近在学校负责完成作业。",
      "因为今天下雨，所以我没出去。",
      "请告诉我详细的地址。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "会议结束以后，老师马上回到北京继续介绍自己。",
    "meaning": "会议结束以后，老师马上回到北京继续介绍自己。",
    "options": [
      "会议结束以后，老师马上回到北京继续介绍自己。",
      "为了准备明天的工作，经理今晚还要计划旅行。",
      "你能解释原因吗？",
      "准备好就开始吧。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我听说哥哥最近在学校负责完成作业。",
    "meaning": "我听说，哥哥最近在学校负责完成作业。",
    "options": [
      "为了准备明天的工作，老师今晚还要买东西。",
      "请稍等一下。",
      "我听说哥哥最近在学校负责完成作业。",
      "把新单词放进句子里学习。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "虽然时间不多，但是经理还是完成了联系朋友。",
    "meaning": "虽然时间不多，但是经理还是完成了联系朋友。",
    "options": [
      "没问题，我等你。",
      "虽然时间不多，但是经理还是完成了联系朋友。",
      "老师希望明天可以继续介绍自己。",
      "学习语言需要坚持。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "今天我在上海练习发音。",
    "meaning": "今天，我在上海练习发音。",
    "options": [
      "今天我在上海练习发音。",
      "虽然时间不多，但是我还是完成了练习发音。",
      "别想太多。",
      "我同意你的看法。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "老师每天都要买东西。",
    "meaning": "老师每天都要买东西。",
    "options": [
      "如果计划没有变化，经理下午会在北京安排时间。",
      "老师每天都要买东西。",
      "经理觉得计划旅行很重要。",
      "老师正在检查雨伞，准备开始准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果有时间，哥哥会去医院解决问题。",
    "meaning": "如果有时间，哥哥会去医院解决问题。",
    "options": [
      "这一题你答对了。",
      "如果有时间，哥哥会去医院解决问题。",
      "下一题会稍微难一点。",
      "如果计划没有变化，老师下午会在餐厅买东西。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了安排时间，经理提前来到广州。",
    "meaning": "为了安排时间，经理提前来到广州。",
    "options": [
      "明天继续练习。",
      "我说得对吗？",
      "听力对学习语言很重要。",
      "为了安排时间，经理提前来到广州。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我正在车站学习汉语。",
    "meaning": "我正在车站学习汉语。",
    "options": [
      "经理觉得联系朋友很重要。",
      "最近哥哥常常需要参加会议。",
      "下一班车几点出发？",
      "我正在车站学习汉语。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "老师希望明天可以继续准备考试。",
    "meaning": "老师希望明天可以继续准备考试。",
    "options": [
      "你准备好回答了吗？",
      "如果计划没有变化，经理下午会在图书馆计划旅行。",
      "老师希望明天可以继续准备考试。",
      "我每天都要学习汉语。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "昨天哥哥在家里参加会议，所以回家比较晚。",
    "meaning": "昨天，哥哥在家里参加会议，所以回家比较晚。",
    "options": [
      "我们快迟到了。",
      "他正在准备考试，所以很忙。",
      "我们下午三点开会。",
      "昨天哥哥在家里参加会议，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "经理告诉我，他最近正在计划旅行。",
    "meaning": "经理告诉我，他最近正在计划旅行。",
    "options": [
      "会议结束以后，我马上回到医院继续学习汉语。",
      "经理告诉我，他最近正在计划旅行。",
      "请把文件发给我。",
      "这一题你答错了。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "因为工作很忙，我只能晚上打扫房间。",
    "meaning": "因为工作很忙，我只能晚上打扫房间。",
    "options": [
      "因为工作很忙，我只能晚上打扫房间。",
      "这件事情没有你想象的那么复杂。",
      "我觉得可以试试。",
      "准备好就开始吧。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "周末的时候，老师喜欢去公司介绍自己。",
    "meaning": "周末的时候，老师喜欢去公司介绍自己。",
    "options": [
      "我跟朋友一起练习。",
      "为了安排时间，经理提前来到广州。",
      "我还需要一点时间。",
      "周末的时候，老师喜欢去公司介绍自己。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "哥哥觉得完成作业很重要。",
    "meaning": "哥哥觉得完成作业很重要。",
    "options": [
      "你平时跟谁练习中文？",
      "如果计划没有变化，经理下午会在图书馆计划旅行。",
      "我正在练习听力。",
      "哥哥觉得完成作业很重要。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "经过讨论，经理决定在北京联系朋友。",
    "meaning": "经过讨论，经理决定在北京联系朋友。",
    "options": [
      "每天练习一点儿很重要。",
      "经过讨论，经理决定在北京联系朋友。",
      "经过讨论，经理决定在餐厅计划旅行。",
      "最近我常常需要打扫房间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了准备明天的工作，我今晚还要练习发音。",
    "meaning": "为了准备明天的工作，我今晚还要练习发音。",
    "options": [
      "因为工作很忙，老师只能晚上买东西。",
      "周末的时候，我喜欢去上海学习汉语。",
      "不要只记答案，要听懂句子。",
      "为了准备明天的工作，我今晚还要练习发音。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "如果计划没有变化，老师下午会在餐厅买东西。",
    "meaning": "如果计划没有变化，老师下午会在餐厅买东西。",
    "options": [
      "会议结束以后，老师马上回到图书馆继续买东西。",
      "答错了也没关系。",
      "如果计划没有变化，老师下午会在餐厅买东西。",
      "明天继续练习。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "哥哥已经把护照带到上海了。",
    "meaning": "哥哥已经把护照带到上海了。",
    "options": [
      "今天老师在餐厅介绍自己。",
      "哥哥已经把自行车带到家里了。",
      "我听说经理最近在广州负责安排时间。",
      "哥哥已经把护照带到上海了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "经理正在检查手机，准备开始安排时间。",
    "meaning": "经理正在检查手机，准备开始安排时间。",
    "options": [
      "哥哥希望明天可以继续参加会议。",
      "经理正在检查手机，准备开始安排时间。",
      "周末的时候，哥哥喜欢去家里完成作业。",
      "别想太多。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "会议结束以后，我马上回到医院继续学习汉语。",
    "meaning": "会议结束以后，我马上回到医院继续学习汉语。",
    "options": [
      "经理觉得安排时间很重要。",
      "你觉得中文难吗？",
      "为了安排时间，经理提前来到广州。",
      "会议结束以后，我马上回到医院继续学习汉语。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我听说老师最近在广州负责准备考试。",
    "meaning": "我听说，老师最近在广州负责准备考试。",
    "options": [
      "我听说哥哥最近在学校负责完成作业。",
      "我听说老师最近在广州负责准备考试。",
      "答错了也没关系。",
      "如果有时间，经理会去餐厅安排时间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "虽然时间不多，但是哥哥还是完成了参加会议。",
    "meaning": "虽然时间不多，但是哥哥还是完成了参加会议。",
    "options": [
      "昨天老师在北京买东西，所以回家比较晚。",
      "虽然时间不多，但是哥哥还是完成了参加会议。",
      "最近一切都不错。",
      "哥哥希望明天可以继续参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "今天经理在图书馆计划旅行。",
    "meaning": "今天，经理在图书馆计划旅行。",
    "options": [
      "虽然时间不多，但是经理还是完成了联系朋友。",
      "网络有点慢。",
      "今天经理在图书馆计划旅行。",
      "没什么，只是有点累。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我每天都要打扫房间。",
    "meaning": "我每天都要打扫房间。",
    "options": [
      "我每天都要打扫房间。",
      "经过讨论，哥哥决定在医院参加会议。",
      "如果有时间，哥哥会去超市参加会议。",
      "我们需要提前准备材料。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "如果有时间，老师会去银行介绍自己。",
    "meaning": "如果有时间，老师会去银行介绍自己。",
    "options": [
      "经理已经把文件带到公司了。",
      "如果有时间，老师会去银行介绍自己。",
      "第三声要注意变化。",
      "我同意你的看法。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了完成作业，哥哥提前来到公园。",
    "meaning": "为了完成作业，哥哥提前来到公园。",
    "options": [
      "这个音怎么发？",
      "如果明天下雨，我们就改天再去。",
      "为了完成作业，哥哥提前来到公园。",
      "哥哥每天都要解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经理正在公司联系朋友。",
    "meaning": "经理正在公司联系朋友。",
    "options": [
      "我同意你的看法。",
      "我想住两晚。",
      "经理正在公司联系朋友。",
      "把错题再听一遍。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我希望明天可以继续练习发音。",
    "meaning": "我希望明天可以继续练习发音。",
    "options": [
      "我希望明天可以继续练习发音。",
      "因为工作很忙，我只能晚上学习汉语。",
      "如果有时间，老师会去银行介绍自己。",
      "不要害怕说错。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "昨天老师在北京买东西，所以回家比较晚。",
    "meaning": "昨天，老师在北京买东西，所以回家比较晚。",
    "options": [
      "哥哥希望明天可以继续完成作业。",
      "我的房间在哪里？",
      "经理告诉我，他最近正在计划旅行。",
      "昨天老师在北京买东西，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "哥哥告诉我，他最近正在解决问题。",
    "meaning": "哥哥告诉我，他最近正在解决问题。",
    "options": [
      "我还需要一点时间。",
      "哥哥告诉我，他最近正在解决问题。",
      "虽然时间不多，但是我还是完成了练习发音。",
      "哥哥觉得完成作业很重要。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "因为工作很忙，经理只能晚上安排时间。",
    "meaning": "因为工作很忙，经理只能晚上安排时间。",
    "options": [
      "周末的时候，哥哥喜欢去上海解决问题。",
      "因为工作很忙，经理只能晚上安排时间。",
      "听不懂的时候可以再听一次。",
      "你觉得这个办法怎么样？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "周末的时候，我喜欢去上海学习汉语。",
    "meaning": "周末的时候，我喜欢去上海学习汉语。",
    "options": [
      "学习语言需要时间。",
      "今天我在上海练习发音。",
      "请给我一张发票。",
      "周末的时候，我喜欢去上海学习汉语。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "老师觉得准备考试很重要。",
    "meaning": "老师觉得准备考试很重要。",
    "options": [
      "如果计划没有变化，老师下午会在图书馆介绍自己。",
      "今天的内容很简单。",
      "老师觉得准备考试很重要。",
      "请提前十分钟到。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，哥哥决定在医院参加会议。",
    "meaning": "经过讨论，哥哥决定在医院参加会议。",
    "options": [
      "经过讨论，哥哥决定在医院参加会议。",
      "你最近怎么样？",
      "没问题，我等你。",
      "这件事情没有你想象的那么复杂。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "为了准备明天的工作，经理今晚还要计划旅行。",
    "meaning": "为了准备明天的工作，经理今晚还要计划旅行。",
    "options": [
      "周末的时候，我喜欢去上海学习汉语。",
      "我们快迟到了。",
      "为了准备明天的工作，经理今晚还要计划旅行。",
      "为了准备明天的工作，我今晚还要练习发音。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "最近我常常需要打扫房间。",
    "meaning": "最近，我常常需要打扫房间。",
    "options": [
      "你可以再听一次。",
      "请集中注意力。",
      "最近我常常需要打扫房间。",
      "如果计划没有变化，哥哥下午会在公园参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "如果计划没有变化，老师下午会在图书馆介绍自己。",
    "meaning": "如果计划没有变化，老师下午会在图书馆介绍自己。",
    "options": [
      "如果有时间，哥哥会去医院解决问题。",
      "请纠正我的发音。",
      "如果计划没有变化，老师下午会在图书馆介绍自己。",
      "听完以后再看答案。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "哥哥已经把自行车带到家里了。",
    "meaning": "哥哥已经把自行车带到家里了。",
    "options": [
      "如果有时间，哥哥会去车站完成作业。",
      "我听说经理最近在公司负责联系朋友。",
      "哥哥已经把自行车带到家里了。",
      "我们快迟到了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经理正在检查地图，准备开始联系朋友。",
    "meaning": "经理正在检查地图，准备开始联系朋友。",
    "options": [
      "老师希望明天可以继续介绍自己。",
      "经理正在检查地图，准备开始联系朋友。",
      "虽然时间不多，但是我还是完成了练习发音。",
      "我还需要一点时间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "会议结束以后，我马上回到公园继续练习发音。",
    "meaning": "会议结束以后，我马上回到公园继续练习发音。",
    "options": [
      "哥哥希望明天可以继续参加会议。",
      "周末的时候，哥哥喜欢去家里完成作业。",
      "会议结束以后，我马上回到公园继续练习发音。",
      "没什么，只是有点累。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我听说老师最近在公司负责买东西。",
    "meaning": "我听说，老师最近在公司负责买东西。",
    "options": [
      "我听说老师最近在公司负责买东西。",
      "下一题会稍微难一点。",
      "今天我在上海练习发音。",
      "虽然很忙，但是我会完成。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "虽然时间不多，但是哥哥还是完成了解决问题。",
    "meaning": "虽然时间不多，但是哥哥还是完成了解决问题。",
    "options": [
      "今天我在公园学习汉语。",
      "虽然时间不多，但是哥哥还是完成了解决问题。",
      "经过讨论，经理决定在餐厅计划旅行。",
      "老师希望明天可以继续介绍自己。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "今天经理在北京安排时间。",
    "meaning": "今天，经理在北京安排时间。",
    "options": [
      "我不太同意。",
      "我每天都要打扫房间。",
      "今天经理在北京安排时间。",
      "别想太多。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我每天都要学习汉语。",
    "meaning": "我每天都要学习汉语。",
    "options": [
      "为了准备明天的工作，老师今晚还要介绍自己。",
      "我每天都要学习汉语。",
      "这一题你答错了。",
      "为了联系朋友，经理提前来到图书馆。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "今天经理在餐厅参加会议。",
    "meaning": "今天，经理在餐厅参加会议。",
    "options": [
      "今天经理在餐厅参加会议。",
      "昨天记者在广州调整时间，所以回家比较晚。",
      "会议结束以后，经理马上回到北京继续讨论计划。",
      "记者已经把护照带到机场了。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "邻居每天都要检查文件。",
    "meaning": "邻居每天都要检查文件。",
    "options": [
      "邻居每天都要检查文件。",
      "如果计划没有变化，邻居下午会在博物馆检查文件。",
      "记者觉得申请签证很重要。",
      "为了准备明天的工作，经理今晚还要提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果有时间，记者会去会议室调整时间。",
    "meaning": "如果有时间，记者会去会议室调整时间。",
    "options": [
      "如果有时间，记者会去会议室调整时间。",
      "邻居每天都要联系客户。",
      "经理希望明天可以继续提高效率。",
      "如果计划没有变化，邻居下午会在博物馆检查文件。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了学习新知识，我的同事提前来到博物馆。",
    "meaning": "为了学习新知识，我的同事提前来到博物馆。",
    "options": [
      "为了准备明天的工作，经理今晚还要讨论计划。",
      "为了学习新知识，我的同事提前来到博物馆。",
      "最近邻居常常需要解决问题。",
      "周末的时候，经理喜欢去机场参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经理正在公司讨论计划。",
    "meaning": "经理正在公司讨论计划。",
    "options": [
      "经理正在公司讨论计划。",
      "我听说记者最近在公司负责申请签证。",
      "他负责联系客户并安排会议时间。",
      "记者觉得安排工作很重要。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "邻居希望明天可以继续联系客户。",
    "meaning": "邻居希望明天可以继续联系客户。",
    "options": [
      "经理正在公司讨论计划。",
      "邻居希望明天可以继续联系客户。",
      "昨天记者在广州调整时间，所以回家比较晚。",
      "经过讨论，记者决定在广州调整时间。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "昨天记者在北京申请签证，所以回家比较晚。",
    "meaning": "昨天，记者在北京申请签证，所以回家比较晚。",
    "options": [
      "昨天记者在北京申请签证，所以回家比较晚。",
      "如果有时间，邻居会去银行解决问题。",
      "我听说邻居最近在学校负责联系客户。",
      "最近我的同事常常需要准备报告。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我的同事告诉我，他最近正在完成任务。",
    "meaning": "我的同事告诉我，他最近正在完成任务。",
    "options": [
      "如果计划没有变化，邻居下午会在上海解决问题。",
      "我的同事告诉我，他最近正在完成任务。",
      "因为工作很忙，我的同事只能晚上准备报告。",
      "为了准备报告，我的同事提前来到上海。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "因为工作很忙，经理只能晚上提高效率。",
    "meaning": "因为工作很忙，经理只能晚上提高效率。",
    "options": [
      "周末的时候，邻居喜欢去家里联系客户。",
      "如果计划没有变化，记者下午会在广州申请签证。",
      "因为工作很忙，经理只能晚上提高效率。",
      "经过讨论，邻居决定在博物馆解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "周末的时候，邻居喜欢去上海解决问题。",
    "meaning": "周末的时候，邻居喜欢去上海解决问题。",
    "options": [
      "昨天记者在广州调整时间，所以回家比较晚。",
      "会议结束以后，我的同事马上回到上海继续学习新知识。",
      "为了准备明天的工作，我的同事今晚还要完成任务。",
      "周末的时候，邻居喜欢去上海解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "记者觉得安排工作很重要。",
    "meaning": "记者觉得安排工作很重要。",
    "options": [
      "虽然时间不多，但是我的同事还是完成了完成任务。",
      "经理觉得提高效率很重要。",
      "邻居希望明天可以继续联系客户。",
      "记者觉得安排工作很重要。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过讨论，我的同事决定在银行准备报告。",
    "meaning": "经过讨论，我的同事决定在银行准备报告。",
    "options": [
      "经过讨论，邻居决定在博物馆解决问题。",
      "经过讨论，我的同事决定在银行准备报告。",
      "如果计划没有变化，记者下午会在广州申请签证。",
      "虽然时间不多，但是邻居还是完成了联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了准备明天的工作，经理今晚还要参加会议。",
    "meaning": "为了准备明天的工作，经理今晚还要参加会议。",
    "options": [
      "我的同事告诉我，他最近正在学习新知识。",
      "周末的时候，经理喜欢去广州提高效率。",
      "为了准备明天的工作，经理今晚还要参加会议。",
      "经过讨论，记者决定在广州调整时间。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "最近邻居常常需要检查文件。",
    "meaning": "最近，邻居常常需要检查文件。",
    "options": [
      "虽然时间不多，但是记者还是完成了申请签证。",
      "经过讨论，我的同事决定在银行准备报告。",
      "经理每天都要讨论计划。",
      "最近邻居常常需要检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果计划没有变化，记者下午会在餐厅调整时间。",
    "meaning": "如果计划没有变化，记者下午会在餐厅调整时间。",
    "options": [
      "如果有时间，记者会去会议室调整时间。",
      "周末的时候，邻居喜欢去上海解决问题。",
      "经理每天都要讨论计划。",
      "如果计划没有变化，记者下午会在餐厅调整时间。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "我的同事已经把合同带到家里了。",
    "meaning": "我的同事已经把合同带到家里了。",
    "options": [
      "我的同事每天都要完成任务。",
      "经过讨论，记者决定在餐厅安排工作。",
      "我的同事已经把合同带到家里了。",
      "最近经理常常需要提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经理正在检查电子邮件，准备开始讨论计划。",
    "meaning": "经理正在检查电子邮件，准备开始讨论计划。",
    "options": [
      "最近邻居常常需要联系客户。",
      "经理正在检查电子邮件，准备开始讨论计划。",
      "邻居希望明天可以继续检查文件。",
      "为了安排工作，记者提前来到广州。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "会议结束以后，邻居马上回到博物馆继续联系客户。",
    "meaning": "会议结束以后，邻居马上回到博物馆继续联系客户。",
    "options": [
      "最近邻居常常需要解决问题。",
      "我听说邻居最近在火车站负责检查文件。",
      "会议结束以后，邻居马上回到博物馆继续联系客户。",
      "经理希望明天可以继续提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "我听说记者最近在公司负责申请签证。",
    "meaning": "我听说，记者最近在公司负责申请签证。",
    "options": [
      "邻居希望明天可以继续检查文件。",
      "周末的时候，经理喜欢去广州提高效率。",
      "我听说记者最近在公司负责申请签证。",
      "今天我的同事在家里学习新知识。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然时间不多，但是我的同事还是完成了完成任务。",
    "meaning": "虽然时间不多，但是我的同事还是完成了完成任务。",
    "options": [
      "虽然时间不多，但是我的同事还是完成了完成任务。",
      "如果有时间，邻居会去上海检查文件。",
      "虽然时间不多，但是记者还是完成了调整时间。",
      "如果有时间，邻居会去博物馆联系客户。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "今天经理在北京提高效率。",
    "meaning": "今天，经理在北京提高效率。",
    "options": [
      "今天经理在北京提高效率。",
      "虽然时间不多，但是我的同事还是完成了完成任务。",
      "如果有时间，记者会去餐厅申请签证。",
      "昨天邻居在家里检查文件，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "邻居每天都要解决问题。",
    "meaning": "邻居每天都要解决问题。",
    "options": [
      "我的同事正在火车站准备报告。",
      "经理正在会议室提高效率。",
      "如果有时间，邻居会去上海检查文件。",
      "邻居每天都要解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果有时间，记者会去医院安排工作。",
    "meaning": "如果有时间，记者会去医院安排工作。",
    "options": [
      "今天经理在北京提高效率。",
      "如果有时间，记者会去医院安排工作。",
      "今天我的同事在上海完成任务。",
      "虽然时间不多，但是我的同事还是完成了学习新知识。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了准备报告，我的同事提前来到上海。",
    "meaning": "为了准备报告，我的同事提前来到上海。",
    "options": [
      "为了准备报告，我的同事提前来到上海。",
      "如果有时间，邻居会去图书馆检查文件。",
      "为了准备明天的工作，经理今晚还要提高效率。",
      "经理正在检查调查结果，准备开始参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经理正在机场参加会议。",
    "meaning": "经理正在机场参加会议。",
    "options": [
      "会议结束以后，邻居马上回到上海继续检查文件。",
      "为了准备明天的工作，记者今晚还要安排工作。",
      "经理正在机场参加会议。",
      "为了准备报告，我的同事提前来到上海。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "邻居希望明天可以继续检查文件。",
    "meaning": "邻居希望明天可以继续检查文件。",
    "options": [
      "为了准备明天的工作，我的同事今晚还要完成任务。",
      "邻居每天都要解决问题。",
      "邻居希望明天可以继续检查文件。",
      "我的同事已经把新闻报道带到学校了。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "昨天记者在广州调整时间，所以回家比较晚。",
    "meaning": "昨天，记者在广州调整时间，所以回家比较晚。",
    "options": [
      "最近经理常常需要参加会议。",
      "会议结束以后，邻居马上回到上海继续检查文件。",
      "昨天记者在广州调整时间，所以回家比较晚。",
      "邻居希望明天可以继续解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "我的同事告诉我，他最近正在学习新知识。",
    "meaning": "我的同事告诉我，他最近正在学习新知识。",
    "options": [
      "我的同事正在图书馆完成任务。",
      "我的同事告诉我，他最近正在学习新知识。",
      "邻居觉得检查文件很重要。",
      "周末的时候，经理喜欢去机场参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "因为工作很忙，经理只能晚上讨论计划。",
    "meaning": "因为工作很忙，经理只能晚上讨论计划。",
    "options": [
      "经理希望明天可以继续参加会议。",
      "周末的时候，邻居喜欢去上海解决问题。",
      "如果有时间，记者会去餐厅申请签证。",
      "因为工作很忙，经理只能晚上讨论计划。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "周末的时候，邻居喜欢去家里联系客户。",
    "meaning": "周末的时候，邻居喜欢去家里联系客户。",
    "options": [
      "如果计划没有变化，记者下午会在餐厅调整时间。",
      "周末的时候，邻居喜欢去家里联系客户。",
      "我们需要根据实际情况作出决定。",
      "记者告诉我，他最近正在安排工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "记者觉得申请签证很重要。",
    "meaning": "记者觉得申请签证很重要。",
    "options": [
      "今天我的同事在学校准备报告。",
      "记者觉得申请签证很重要。",
      "我听说记者最近在会议室负责安排工作。",
      "虽然时间不多，但是记者还是完成了调整时间。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过讨论，我的同事决定在博物馆完成任务。",
    "meaning": "经过讨论，我的同事决定在博物馆完成任务。",
    "options": [
      "经理正在检查电子邮件，准备开始讨论计划。",
      "经过讨论，我的同事决定在博物馆完成任务。",
      "我听说邻居最近在图书馆负责解决问题。",
      "最近邻居常常需要联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了准备明天的工作，经理今晚还要提高效率。",
    "meaning": "为了准备明天的工作，经理今晚还要提高效率。",
    "options": [
      "邻居已经把手机带到学校了。",
      "如果计划没有变化，经理下午会在北京参加会议。",
      "周末的时候，经理喜欢去机场参加会议。",
      "为了准备明天的工作，经理今晚还要提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "最近邻居常常需要解决问题。",
    "meaning": "最近，邻居常常需要解决问题。",
    "options": [
      "为了申请签证，记者提前来到公司。",
      "如果计划没有变化，记者下午会在广州申请签证。",
      "最近邻居常常需要解决问题。",
      "邻居希望明天可以继续解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果计划没有变化，记者下午会在北京安排工作。",
    "meaning": "如果计划没有变化，记者下午会在北京安排工作。",
    "options": [
      "邻居告诉我，他最近正在联系客户。",
      "记者觉得申请签证很重要。",
      "因为工作很忙，经理只能晚上讨论计划。",
      "如果计划没有变化，记者下午会在北京安排工作。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "我的同事已经把新闻报道带到学校了。",
    "meaning": "我的同事已经把新闻报道带到学校了。",
    "options": [
      "如果计划没有变化，记者下午会在广州申请签证。",
      "经理正在检查调查结果，准备开始参加会议。",
      "为了准备报告，我的同事提前来到上海。",
      "我的同事已经把新闻报道带到学校了。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经理正在检查调查结果，准备开始参加会议。",
    "meaning": "经理正在检查调查结果，准备开始参加会议。",
    "options": [
      "经理正在检查调查结果，准备开始参加会议。",
      "我的同事正在检查申请表，准备开始完成任务。",
      "周末的时候，我的同事喜欢去家里完成任务。",
      "我听说记者最近在公司负责申请签证。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "会议结束以后，邻居马上回到上海继续检查文件。",
    "meaning": "会议结束以后，邻居马上回到上海继续检查文件。",
    "options": [
      "会议结束以后，邻居马上回到上海继续检查文件。",
      "我听说邻居最近在火车站负责检查文件。",
      "为了安排工作，记者提前来到广州。",
      "记者已经把工作计划带到公司了。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我听说记者最近在机场负责调整时间。",
    "meaning": "我听说，记者最近在机场负责调整时间。",
    "options": [
      "虽然时间不多，但是记者还是完成了安排工作。",
      "经理正在检查项目报告，准备开始提高效率。",
      "会议结束以后，经理马上回到北京继续讨论计划。",
      "我听说记者最近在机场负责调整时间。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然时间不多，但是我的同事还是完成了学习新知识。",
    "meaning": "虽然时间不多，但是我的同事还是完成了学习新知识。",
    "options": [
      "我听说记者最近在会议室负责安排工作。",
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "今天经理在餐厅参加会议。",
      "邻居希望明天可以继续检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "今天经理在广州讨论计划。",
    "meaning": "今天，经理在广州讨论计划。",
    "options": [
      "会议结束以后，经理马上回到广州继续参加会议。",
      "我的同事已经把合同带到家里了。",
      "我的同事告诉我，他最近正在完成任务。",
      "今天经理在广州讨论计划。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "邻居每天都要联系客户。",
    "meaning": "邻居每天都要联系客户。",
    "options": [
      "邻居每天都要联系客户。",
      "如果计划没有变化，记者下午会在餐厅调整时间。",
      "周末的时候，经理喜欢去广州提高效率。",
      "如果有时间，邻居会去上海检查文件。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果有时间，记者会去餐厅申请签证。",
    "meaning": "如果有时间，记者会去餐厅申请签证。",
    "options": [
      "最近我的同事常常需要准备报告。",
      "如果有时间，记者会去餐厅申请签证。",
      "经理每天都要讨论计划。",
      "经过讨论，我的同事决定在博物馆完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了完成任务，我的同事提前来到家里。",
    "meaning": "为了完成任务，我的同事提前来到家里。",
    "options": [
      "为了完成任务，我的同事提前来到家里。",
      "记者已经把电脑带到会议室了。",
      "周末的时候，经理喜欢去广州提高效率。",
      "我的同事已经把合同带到家里了。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经理正在会议室提高效率。",
    "meaning": "经理正在会议室提高效率。",
    "options": [
      "昨天经理在广州讨论计划，所以回家比较晚。",
      "虽然时间不多，但是我的同事还是完成了完成任务。",
      "我的同事正在银行学习新知识。",
      "经理正在会议室提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "邻居希望明天可以继续解决问题。",
    "meaning": "邻居希望明天可以继续解决问题。",
    "options": [
      "我听说记者最近在机场负责调整时间。",
      "邻居希望明天可以继续解决问题。",
      "我的同事正在图书馆完成任务。",
      "如果计划没有变化，记者下午会在广州申请签证。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "昨天记者在公司安排工作，所以回家比较晚。",
    "meaning": "昨天，记者在公司安排工作，所以回家比较晚。",
    "options": [
      "虽然时间不多，但是邻居还是完成了联系客户。",
      "昨天记者在公司安排工作，所以回家比较晚。",
      "我的同事正在学校学习新知识。",
      "如果计划没有变化，邻居下午会在博物馆检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "我的同事告诉我，他最近正在准备报告。",
    "meaning": "我的同事告诉我，他最近正在准备报告。",
    "options": [
      "我听说经理最近在机场负责讨论计划。",
      "今天经理在餐厅参加会议。",
      "我的同事正在火车站准备报告。",
      "我的同事告诉我，他最近正在准备报告。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "因为工作很忙，经理只能晚上参加会议。",
    "meaning": "因为工作很忙，经理只能晚上参加会议。",
    "options": [
      "邻居希望明天可以继续解决问题。",
      "会议结束以后，邻居马上回到上海继续检查文件。",
      "因为工作很忙，经理只能晚上参加会议。",
      "经理觉得提高效率很重要。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "周末的时候，邻居喜欢去学校检查文件。",
    "meaning": "周末的时候，邻居喜欢去学校检查文件。",
    "options": [
      "周末的时候，邻居喜欢去学校检查文件。",
      "我们需要根据实际情况作出决定。",
      "会议结束以后，经理马上回到广州继续参加会议。",
      "为了完成任务，我的同事提前来到家里。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "记者觉得调整时间很重要。",
    "meaning": "记者觉得调整时间很重要。",
    "options": [
      "为了申请签证，记者提前来到公司。",
      "邻居希望明天可以继续联系客户。",
      "记者已经把工作计划带到公司了。",
      "记者觉得调整时间很重要。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过讨论，我的同事决定在上海学习新知识。",
    "meaning": "经过讨论，我的同事决定在上海学习新知识。",
    "options": [
      "经理希望明天可以继续参加会议。",
      "为了调整时间，记者提前来到机场。",
      "我的同事正在火车站准备报告。",
      "经过讨论，我的同事决定在上海学习新知识。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了准备明天的工作，经理今晚还要讨论计划。",
    "meaning": "为了准备明天的工作，经理今晚还要讨论计划。",
    "options": [
      "为了准备明天的工作，经理今晚还要讨论计划。",
      "经理正在检查调查结果，准备开始参加会议。",
      "为了准备明天的工作，经理今晚还要提高效率。",
      "经理正在检查电子邮件，准备开始讨论计划。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "最近邻居常常需要联系客户。",
    "meaning": "最近，邻居常常需要联系客户。",
    "options": [
      "会议结束以后，经理马上回到公司继续提高效率。",
      "最近邻居常常需要联系客户。",
      "记者已经把电脑带到会议室了。",
      "为了准备明天的工作，经理今晚还要参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果计划没有变化，记者下午会在广州申请签证。",
    "meaning": "如果计划没有变化，记者下午会在广州申请签证。",
    "options": [
      "如果计划没有变化，记者下午会在广州申请签证。",
      "会议结束以后，邻居马上回到家里继续解决问题。",
      "如果有时间，记者会去医院安排工作。",
      "我听说邻居最近在学校负责联系客户。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我的同事已经把申请表带到火车站了。",
    "meaning": "我的同事已经把申请表带到火车站了。",
    "options": [
      "经过讨论，我的同事决定在博物馆完成任务。",
      "周末的时候，邻居喜欢去上海解决问题。",
      "我的同事已经把申请表带到火车站了。",
      "最近经理常常需要提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经理正在检查项目报告，准备开始提高效率。",
    "meaning": "经理正在检查项目报告，准备开始提高效率。",
    "options": [
      "为了准备明天的工作，我的同事今晚还要学习新知识。",
      "如果计划没有变化，邻居下午会在家里联系客户。",
      "经理正在检查项目报告，准备开始提高效率。",
      "经过讨论，记者决定在北京申请签证。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "会议结束以后，邻居马上回到家里继续解决问题。",
    "meaning": "会议结束以后，邻居马上回到家里继续解决问题。",
    "options": [
      "会议结束以后，邻居马上回到家里继续解决问题。",
      "虽然遇到了一些困难，但是项目还是按时完成了。",
      "会议结束以后，经理马上回到广州继续参加会议。",
      "经理觉得提高效率很重要。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我听说记者最近在会议室负责安排工作。",
    "meaning": "我听说，记者最近在会议室负责安排工作。",
    "options": [
      "今天记者在广州申请签证。",
      "如果计划没有变化，邻居下午会在博物馆检查文件。",
      "我听说记者最近在会议室负责安排工作。",
      "因为工作很忙，记者只能晚上申请签证。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然时间不多，但是我的同事还是完成了准备报告。",
    "meaning": "虽然时间不多，但是我的同事还是完成了准备报告。",
    "options": [
      "为了准备报告，我的同事提前来到上海。",
      "虽然时间不多，但是我的同事还是完成了准备报告。",
      "为了准备明天的工作，我的同事今晚还要准备报告。",
      "因为工作很忙，我的同事只能晚上准备报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "今天经理在公司参加会议。",
    "meaning": "今天，经理在公司参加会议。",
    "options": [
      "经理觉得提高效率很重要。",
      "今天经理在公司参加会议。",
      "为了准备明天的工作，记者今晚还要安排工作。",
      "虽然时间不多，但是我的同事还是完成了完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果有时间，邻居会去图书馆检查文件。",
    "meaning": "如果有时间，邻居会去图书馆检查文件。",
    "options": [
      "记者已经把电脑带到会议室了。",
      "记者告诉我，他最近正在调整时间。",
      "如果有时间，邻居会去图书馆检查文件。",
      "虽然时间不多，但是记者还是完成了申请签证。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了调整时间，记者提前来到北京。",
    "meaning": "为了调整时间，记者提前来到北京。",
    "options": [
      "今天我的同事在家里学习新知识。",
      "经过讨论，记者决定在餐厅安排工作。",
      "虽然时间不多，但是邻居还是完成了联系客户。",
      "为了调整时间，记者提前来到北京。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "我的同事正在学校学习新知识。",
    "meaning": "我的同事正在学校学习新知识。",
    "options": [
      "邻居觉得检查文件很重要。",
      "我的同事正在学校学习新知识。",
      "记者已经把护照带到机场了。",
      "今天我的同事在上海完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经理希望明天可以继续讨论计划。",
    "meaning": "经理希望明天可以继续讨论计划。",
    "options": [
      "经理希望明天可以继续讨论计划。",
      "如果计划没有变化，经理下午会在北京参加会议。",
      "如果有时间，记者会去餐厅申请签证。",
      "我听说记者最近在公司负责申请签证。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "昨天邻居在上海联系客户，所以回家比较晚。",
    "meaning": "昨天，邻居在上海联系客户，所以回家比较晚。",
    "options": [
      "昨天邻居在上海联系客户，所以回家比较晚。",
      "记者已经把工作计划带到公司了。",
      "为了申请签证，记者提前来到公司。",
      "周末的时候，邻居喜欢去学校检查文件。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "记者告诉我，他最近正在申请签证。",
    "meaning": "记者告诉我，他最近正在申请签证。",
    "options": [
      "我听说记者最近在会议室负责安排工作。",
      "他负责联系客户并安排会议时间。",
      "记者告诉我，他最近正在申请签证。",
      "经理正在检查调查结果，准备开始参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "因为工作很忙，我的同事只能晚上完成任务。",
    "meaning": "因为工作很忙，我的同事只能晚上完成任务。",
    "options": [
      "因为工作很忙，我的同事只能晚上完成任务。",
      "如果计划没有变化，经理下午会在北京参加会议。",
      "最近邻居常常需要检查文件。",
      "邻居觉得检查文件很重要。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "周末的时候，经理喜欢去广州提高效率。",
    "meaning": "周末的时候，经理喜欢去广州提高效率。",
    "options": [
      "昨天邻居在家里检查文件，所以回家比较晚。",
      "周末的时候，经理喜欢去广州提高效率。",
      "最近经理常常需要提高效率。",
      "记者觉得调整时间很重要。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "邻居觉得解决问题很重要。",
    "meaning": "邻居觉得解决问题很重要。",
    "options": [
      "我听说邻居最近在学校负责联系客户。",
      "如果有时间，记者会去医院安排工作。",
      "邻居觉得解决问题很重要。",
      "今天经理在餐厅参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过讨论，记者决定在餐厅安排工作。",
    "meaning": "经过讨论，记者决定在餐厅安排工作。",
    "options": [
      "经过讨论，记者决定在餐厅安排工作。",
      "最近邻居常常需要检查文件。",
      "经理希望明天可以继续参加会议。",
      "虽然时间不多，但是记者还是完成了调整时间。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了准备明天的工作，我的同事今晚还要准备报告。",
    "meaning": "为了准备明天的工作，我的同事今晚还要准备报告。",
    "options": [
      "经过讨论，记者决定在北京申请签证。",
      "为了准备明天的工作，我的同事今晚还要准备报告。",
      "记者告诉我，他最近正在申请签证。",
      "邻居觉得联系客户很重要。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "最近经理常常需要参加会议。",
    "meaning": "最近，经理常常需要参加会议。",
    "options": [
      "最近我的同事常常需要准备报告。",
      "最近经理常常需要参加会议。",
      "今天经理在餐厅参加会议。",
      "如果计划没有变化，记者下午会在餐厅调整时间。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果计划没有变化，邻居下午会在博物馆检查文件。",
    "meaning": "如果计划没有变化，邻居下午会在博物馆检查文件。",
    "options": [
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "如果计划没有变化，邻居下午会在博物馆检查文件。",
      "我的同事正在检查新闻报道，准备开始准备报告。",
      "周末的时候，经理喜欢去机场参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "记者已经把工作计划带到公司了。",
    "meaning": "记者已经把工作计划带到公司了。",
    "options": [
      "如果有时间，邻居会去银行解决问题。",
      "记者已经把工作计划带到公司了。",
      "因为工作很忙，经理只能晚上参加会议。",
      "因为工作很忙，我的同事只能晚上准备报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "我的同事正在检查合同，准备开始学习新知识。",
    "meaning": "我的同事正在检查合同，准备开始学习新知识。",
    "options": [
      "因为工作很忙，经理只能晚上讨论计划。",
      "我的同事正在检查合同，准备开始学习新知识。",
      "我的同事正在检查新闻报道，准备开始准备报告。",
      "经过认真讨论，我们决定改变原来的计划。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "会议结束以后，经理马上回到北京继续讨论计划。",
    "meaning": "会议结束以后，经理马上回到北京继续讨论计划。",
    "options": [
      "我的同事正在检查新闻报道，准备开始准备报告。",
      "经理希望明天可以继续提高效率。",
      "会议结束以后，经理马上回到北京继续讨论计划。",
      "最近经理常常需要讨论计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "我听说邻居最近在学校负责联系客户。",
    "meaning": "我听说，邻居最近在学校负责联系客户。",
    "options": [
      "我听说邻居最近在图书馆负责解决问题。",
      "记者正在检查工作计划，准备开始调整时间。",
      "我听说邻居最近在学校负责联系客户。",
      "为了准备明天的工作，经理今晚还要讨论计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然时间不多，但是记者还是完成了申请签证。",
    "meaning": "虽然时间不多，但是记者还是完成了申请签证。",
    "options": [
      "邻居觉得解决问题很重要。",
      "为了准备报告，我的同事提前来到上海。",
      "虽然时间不多，但是记者还是完成了申请签证。",
      "如果计划没有变化，记者下午会在北京安排工作。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "今天我的同事在上海完成任务。",
    "meaning": "今天，我的同事在上海完成任务。",
    "options": [
      "为了准备明天的工作，经理今晚还要参加会议。",
      "邻居觉得联系客户很重要。",
      "如果计划没有变化，邻居下午会在家里联系客户。",
      "今天我的同事在上海完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经理每天都要提高效率。",
    "meaning": "经理每天都要提高效率。",
    "options": [
      "如果有时间，邻居会去上海检查文件。",
      "因为工作很忙，经理只能晚上提高效率。",
      "经理每天都要提高效率。",
      "虽然时间不多，但是我的同事还是完成了完成任务。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果有时间，邻居会去银行解决问题。",
    "meaning": "如果有时间，邻居会去银行解决问题。",
    "options": [
      "如果计划没有变化，邻居下午会在博物馆检查文件。",
      "记者已经把护照带到机场了。",
      "经理正在检查项目报告，准备开始提高效率。",
      "如果有时间，邻居会去银行解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了安排工作，记者提前来到广州。",
    "meaning": "为了安排工作，记者提前来到广州。",
    "options": [
      "因为工作很忙，我的同事只能晚上学习新知识。",
      "为了安排工作，记者提前来到广州。",
      "我的同事正在检查申请表，准备开始完成任务。",
      "邻居每天都要解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "我的同事正在火车站准备报告。",
    "meaning": "我的同事正在火车站准备报告。",
    "options": [
      "记者告诉我，他最近正在调整时间。",
      "我的同事正在火车站准备报告。",
      "最近邻居常常需要解决问题。",
      "因为工作很忙，我的同事只能晚上完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经理希望明天可以继续参加会议。",
    "meaning": "经理希望明天可以继续参加会议。",
    "options": [
      "经理希望明天可以继续参加会议。",
      "邻居每天都要检查文件。",
      "邻居觉得解决问题很重要。",
      "为了提高效率，公司正在调整工作流程。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "昨天邻居在家里检查文件，所以回家比较晚。",
    "meaning": "昨天，邻居在家里检查文件，所以回家比较晚。",
    "options": [
      "周末的时候，邻居喜欢去上海解决问题。",
      "会议结束以后，经理马上回到公司继续提高效率。",
      "为了准备明天的工作，我的同事今晚还要完成任务。",
      "昨天邻居在家里检查文件，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "记者告诉我，他最近正在调整时间。",
    "meaning": "记者告诉我，他最近正在调整时间。",
    "options": [
      "经理每天都要参加会议。",
      "记者告诉我，他最近正在调整时间。",
      "我的同事正在检查申请表，准备开始完成任务。",
      "如果有时间，记者会去医院安排工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "因为工作很忙，我的同事只能晚上学习新知识。",
    "meaning": "因为工作很忙，我的同事只能晚上学习新知识。",
    "options": [
      "邻居每天都要检查文件。",
      "因为工作很忙，我的同事只能晚上学习新知识。",
      "因为工作很忙，记者只能晚上申请签证。",
      "记者告诉我，他最近正在调整时间。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "周末的时候，经理喜欢去公司讨论计划。",
    "meaning": "周末的时候，经理喜欢去公司讨论计划。",
    "options": [
      "经理每天都要参加会议。",
      "周末的时候，经理喜欢去广州提高效率。",
      "如果有时间，记者会去餐厅申请签证。",
      "周末的时候，经理喜欢去公司讨论计划。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "邻居觉得联系客户很重要。",
    "meaning": "邻居觉得联系客户很重要。",
    "options": [
      "我的同事告诉我，他最近正在准备报告。",
      "经过讨论，我的同事决定在博物馆完成任务。",
      "邻居觉得联系客户很重要。",
      "今天经理在公司参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过讨论，记者决定在北京申请签证。",
    "meaning": "经过讨论，记者决定在北京申请签证。",
    "options": [
      "昨天经理在广州讨论计划，所以回家比较晚。",
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "为了准备明天的工作，经理今晚还要提高效率。",
      "经过讨论，记者决定在北京申请签证。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了准备明天的工作，我的同事今晚还要完成任务。",
    "meaning": "为了准备明天的工作，我的同事今晚还要完成任务。",
    "options": [
      "如果有时间，记者会去医院安排工作。",
      "经理正在公司讨论计划。",
      "最近经理常常需要讨论计划。",
      "为了准备明天的工作，我的同事今晚还要完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "最近经理常常需要提高效率。",
    "meaning": "最近，经理常常需要提高效率。",
    "options": [
      "经理希望明天可以继续参加会议。",
      "我的同事已经把申请表带到火车站了。",
      "最近经理常常需要提高效率。",
      "经过讨论，记者决定在餐厅安排工作。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果计划没有变化，邻居下午会在上海解决问题。",
    "meaning": "如果计划没有变化，邻居下午会在上海解决问题。",
    "options": [
      "我的同事正在银行学习新知识。",
      "我的同事正在图书馆完成任务。",
      "会议结束以后，我的同事马上回到上海继续学习新知识。",
      "如果计划没有变化，邻居下午会在上海解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "记者已经把护照带到机场了。",
    "meaning": "记者已经把护照带到机场了。",
    "options": [
      "邻居觉得联系客户很重要。",
      "记者已经把护照带到机场了。",
      "如果有时间，邻居会去图书馆检查文件。",
      "最近经理常常需要参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "我的同事正在检查新闻报道，准备开始准备报告。",
    "meaning": "我的同事正在检查新闻报道，准备开始准备报告。",
    "options": [
      "今天经理在北京提高效率。",
      "我的同事正在检查新闻报道，准备开始准备报告。",
      "为了准备明天的工作，我的同事今晚还要学习新知识。",
      "会议结束以后，经理马上回到广州继续参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "会议结束以后，经理马上回到广州继续参加会议。",
    "meaning": "会议结束以后，经理马上回到广州继续参加会议。",
    "options": [
      "会议结束以后，经理马上回到广州继续参加会议。",
      "今天经理在北京提高效率。",
      "如果计划没有变化，记者下午会在北京安排工作。",
      "虽然时间不多，但是记者还是完成了安排工作。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我听说邻居最近在火车站负责检查文件。",
    "meaning": "我听说，邻居最近在火车站负责检查文件。",
    "options": [
      "为了调整时间，记者提前来到北京。",
      "我听说邻居最近在火车站负责检查文件。",
      "虽然时间不多，但是记者还是完成了调整时间。",
      "如果有时间，邻居会去博物馆联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然时间不多，但是记者还是完成了调整时间。",
    "meaning": "虽然时间不多，但是记者还是完成了调整时间。",
    "options": [
      "虽然时间不多，但是记者还是完成了调整时间。",
      "会议结束以后，邻居马上回到家里继续解决问题。",
      "如果计划没有变化，经理下午会在北京参加会议。",
      "会议结束以后，邻居马上回到上海继续检查文件。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "今天我的同事在家里学习新知识。",
    "meaning": "今天，我的同事在家里学习新知识。",
    "options": [
      "经理正在检查调查结果，准备开始参加会议。",
      "今天我的同事在家里学习新知识。",
      "我的同事正在检查合同，准备开始学习新知识。",
      "虽然时间不多，但是记者还是完成了安排工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经理每天都要讨论计划。",
    "meaning": "经理每天都要讨论计划。",
    "options": [
      "虽然时间不多，但是记者还是完成了调整时间。",
      "经理每天都要讨论计划。",
      "经过讨论，记者决定在广州调整时间。",
      "虽然时间不多，但是记者还是完成了安排工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果有时间，邻居会去博物馆联系客户。",
    "meaning": "如果有时间，邻居会去博物馆联系客户。",
    "options": [
      "我的同事已经把合同带到家里了。",
      "如果有时间，邻居会去博物馆联系客户。",
      "如果计划没有变化，记者下午会在北京安排工作。",
      "记者觉得安排工作很重要。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了申请签证，记者提前来到公司。",
    "meaning": "为了申请签证，记者提前来到公司。",
    "options": [
      "为了申请签证，记者提前来到公司。",
      "最近邻居常常需要联系客户。",
      "邻居每天都要解决问题。",
      "邻居希望明天可以继续检查文件。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我的同事正在图书馆完成任务。",
    "meaning": "我的同事正在图书馆完成任务。",
    "options": [
      "今天我的同事在上海完成任务。",
      "我的同事告诉我，他最近正在完成任务。",
      "我的同事正在图书馆完成任务。",
      "记者告诉我，他最近正在申请签证。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经理希望明天可以继续提高效率。",
    "meaning": "经理希望明天可以继续提高效率。",
    "options": [
      "会议结束以后，经理马上回到北京继续讨论计划。",
      "如果有时间，记者会去医院安排工作。",
      "经理希望明天可以继续提高效率。",
      "周末的时候，邻居喜欢去学校检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "昨天邻居在学校解决问题，所以回家比较晚。",
    "meaning": "昨天，邻居在学校解决问题，所以回家比较晚。",
    "options": [
      "我的同事告诉我，他最近正在学习新知识。",
      "邻居每天都要检查文件。",
      "因为工作很忙，经理只能晚上参加会议。",
      "昨天邻居在学校解决问题，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "记者告诉我，他最近正在安排工作。",
    "meaning": "记者告诉我，他最近正在安排工作。",
    "options": [
      "记者告诉我，他最近正在安排工作。",
      "虽然时间不多，但是邻居还是完成了联系客户。",
      "周末的时候，经理喜欢去广州提高效率。",
      "经过讨论，邻居决定在博物馆解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "因为工作很忙，我的同事只能晚上准备报告。",
    "meaning": "因为工作很忙，我的同事只能晚上准备报告。",
    "options": [
      "邻居觉得检查文件很重要。",
      "今天我的同事在家里学习新知识。",
      "最近邻居常常需要解决问题。",
      "因为工作很忙，我的同事只能晚上准备报告。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "周末的时候，经理喜欢去机场参加会议。",
    "meaning": "周末的时候，经理喜欢去机场参加会议。",
    "options": [
      "我听说记者最近在公司负责申请签证。",
      "经理正在机场参加会议。",
      "我听说邻居最近在学校负责联系客户。",
      "周末的时候，经理喜欢去机场参加会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "邻居觉得检查文件很重要。",
    "meaning": "邻居觉得检查文件很重要。",
    "options": [
      "我的同事告诉我，他最近正在学习新知识。",
      "邻居觉得检查文件很重要。",
      "昨天邻居在学校解决问题，所以回家比较晚。",
      "邻居已经把手机带到学校了。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过讨论，记者决定在广州调整时间。",
    "meaning": "经过讨论，记者决定在广州调整时间。",
    "options": [
      "我的同事正在图书馆完成任务。",
      "经过讨论，记者决定在广州调整时间。",
      "经理觉得提高效率很重要。",
      "因为工作很忙，我的同事只能晚上学习新知识。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了准备明天的工作，我的同事今晚还要学习新知识。",
    "meaning": "为了准备明天的工作，我的同事今晚还要学习新知识。",
    "options": [
      "因为工作很忙，经理只能晚上提高效率。",
      "邻居已经把手机带到学校了。",
      "邻居每天都要解决问题。",
      "为了准备明天的工作，我的同事今晚还要学习新知识。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "最近经理常常需要讨论计划。",
    "meaning": "最近，经理常常需要讨论计划。",
    "options": [
      "如果计划没有变化，邻居下午会在家里联系客户。",
      "邻居觉得解决问题很重要。",
      "昨天经理在广州讨论计划，所以回家比较晚。",
      "最近经理常常需要讨论计划。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果计划没有变化，邻居下午会在家里联系客户。",
    "meaning": "如果计划没有变化，邻居下午会在家里联系客户。",
    "options": [
      "如果计划没有变化，邻居下午会在家里联系客户。",
      "我的同事告诉我，他最近正在准备报告。",
      "记者觉得申请签证很重要。",
      "因为工作很忙，我的同事只能晚上学习新知识。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "记者已经把电脑带到会议室了。",
    "meaning": "记者已经把电脑带到会议室了。",
    "options": [
      "记者已经把电脑带到会议室了。",
      "因为工作很忙，我的同事只能晚上完成任务。",
      "经理正在检查项目报告，准备开始提高效率。",
      "经过讨论，记者决定在餐厅安排工作。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我的同事正在检查申请表，准备开始完成任务。",
    "meaning": "我的同事正在检查申请表，准备开始完成任务。",
    "options": [
      "周末的时候，经理喜欢去机场参加会议。",
      "经理每天都要参加会议。",
      "我的同事正在检查申请表，准备开始完成任务。",
      "会议结束以后，我的同事马上回到上海继续学习新知识。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "会议结束以后，经理马上回到公司继续提高效率。",
    "meaning": "会议结束以后，经理马上回到公司继续提高效率。",
    "options": [
      "周末的时候，邻居喜欢去上海解决问题。",
      "会议结束以后，经理马上回到公司继续提高效率。",
      "因为工作很忙，我的同事只能晚上完成任务。",
      "邻居希望明天可以继续解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "我听说邻居最近在图书馆负责解决问题。",
    "meaning": "我听说，邻居最近在图书馆负责解决问题。",
    "options": [
      "经理每天都要参加会议。",
      "我听说邻居最近在图书馆负责解决问题。",
      "因为工作很忙，经理只能晚上提高效率。",
      "我的同事正在火车站准备报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然时间不多，但是记者还是完成了安排工作。",
    "meaning": "虽然时间不多，但是记者还是完成了安排工作。",
    "options": [
      "今天经理在广州讨论计划。",
      "我的同事正在火车站准备报告。",
      "虽然时间不多，但是记者还是完成了安排工作。",
      "我听说邻居最近在火车站负责检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "今天我的同事在学校准备报告。",
    "meaning": "今天，我的同事在学校准备报告。",
    "options": [
      "我的同事正在火车站准备报告。",
      "为了调整时间，记者提前来到机场。",
      "今天我的同事在学校准备报告。",
      "我听说邻居最近在火车站负责检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经理每天都要参加会议。",
    "meaning": "经理每天都要参加会议。",
    "options": [
      "周末的时候，经理喜欢去公司讨论计划。",
      "记者觉得调整时间很重要。",
      "昨天邻居在上海联系客户，所以回家比较晚。",
      "经理每天都要参加会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果有时间，邻居会去上海检查文件。",
    "meaning": "如果有时间，邻居会去上海检查文件。",
    "options": [
      "周末的时候，经理喜欢去广州提高效率。",
      "我的同事正在检查合同，准备开始学习新知识。",
      "记者告诉我，他最近正在安排工作。",
      "如果有时间，邻居会去上海检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了调整时间，记者提前来到机场。",
    "meaning": "为了调整时间，记者提前来到机场。",
    "options": [
      "我听说邻居最近在图书馆负责解决问题。",
      "经理正在检查调查结果，准备开始参加会议。",
      "邻居希望明天可以继续检查文件。",
      "为了调整时间，记者提前来到机场。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "我的同事正在银行学习新知识。",
    "meaning": "我的同事正在银行学习新知识。",
    "options": [
      "为了准备明天的工作，经理今晚还要讨论计划。",
      "我的同事正在银行学习新知识。",
      "记者已经把护照带到机场了。",
      "会议结束以后，我的同事马上回到上海继续学习新知识。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "昨天经理在广州讨论计划，所以回家比较晚。",
    "meaning": "昨天，经理在广州讨论计划，所以回家比较晚。",
    "options": [
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "昨天经理在广州讨论计划，所以回家比较晚。",
      "我的同事已经把新闻报道带到学校了。",
      "会议结束以后，经理马上回到广州继续参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "邻居告诉我，他最近正在联系客户。",
    "meaning": "邻居告诉我，他最近正在联系客户。",
    "options": [
      "我听说记者最近在机场负责调整时间。",
      "邻居告诉我，他最近正在联系客户。",
      "最近经理常常需要参加会议。",
      "虽然时间不多，但是邻居还是完成了联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "因为工作很忙，记者只能晚上申请签证。",
    "meaning": "因为工作很忙，记者只能晚上申请签证。",
    "options": [
      "我的同事正在学校学习新知识。",
      "邻居希望明天可以继续解决问题。",
      "因为工作很忙，记者只能晚上申请签证。",
      "我听说经理最近在机场负责讨论计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "周末的时候，我的同事喜欢去家里完成任务。",
    "meaning": "周末的时候，我的同事喜欢去家里完成任务。",
    "options": [
      "因为工作很忙，我的同事只能晚上完成任务。",
      "因为工作很忙，经理只能晚上提高效率。",
      "今天我的同事在上海完成任务。",
      "周末的时候，我的同事喜欢去家里完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经理觉得提高效率很重要。",
    "meaning": "经理觉得提高效率很重要。",
    "options": [
      "记者已经把电脑带到会议室了。",
      "经理觉得提高效率很重要。",
      "为了准备明天的工作，我的同事今晚还要完成任务。",
      "经过讨论，邻居决定在博物馆解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过讨论，邻居决定在博物馆解决问题。",
    "meaning": "经过讨论，邻居决定在博物馆解决问题。",
    "options": [
      "邻居希望明天可以继续联系客户。",
      "经过讨论，邻居决定在博物馆解决问题。",
      "如果有时间，邻居会去上海检查文件。",
      "如果有时间，记者会去医院安排工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了准备明天的工作，记者今晚还要安排工作。",
    "meaning": "为了准备明天的工作，记者今晚还要安排工作。",
    "options": [
      "经理每天都要参加会议。",
      "最近经理常常需要提高效率。",
      "为了准备明天的工作，记者今晚还要安排工作。",
      "会议结束以后，邻居马上回到家里继续解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "最近我的同事常常需要准备报告。",
    "meaning": "最近，我的同事常常需要准备报告。",
    "options": [
      "我听说邻居最近在学校负责联系客户。",
      "今天我的同事在学校准备报告。",
      "最近我的同事常常需要准备报告。",
      "我的同事告诉我，他最近正在完成任务。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果计划没有变化，经理下午会在北京参加会议。",
    "meaning": "如果计划没有变化，经理下午会在北京参加会议。",
    "options": [
      "如果计划没有变化，经理下午会在北京参加会议。",
      "为了提高效率，公司正在调整工作流程。",
      "为了准备明天的工作，经理今晚还要参加会议。",
      "我的同事正在检查合同，准备开始学习新知识。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "邻居已经把手机带到学校了。",
    "meaning": "邻居已经把手机带到学校了。",
    "options": [
      "我的同事告诉我，他最近正在准备报告。",
      "邻居已经把手机带到学校了。",
      "我的同事正在检查合同，准备开始学习新知识。",
      "最近邻居常常需要解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "记者正在检查工作计划，准备开始调整时间。",
    "meaning": "记者正在检查工作计划，准备开始调整时间。",
    "options": [
      "为了准备明天的工作，经理今晚还要讨论计划。",
      "记者觉得安排工作很重要。",
      "周末的时候，经理喜欢去机场参加会议。",
      "记者正在检查工作计划，准备开始调整时间。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "会议结束以后，我的同事马上回到上海继续学习新知识。",
    "meaning": "会议结束以后，我的同事马上回到上海继续学习新知识。",
    "options": [
      "为了准备明天的工作，我的同事今晚还要完成任务。",
      "会议结束以后，我的同事马上回到上海继续学习新知识。",
      "邻居已经把手机带到学校了。",
      "邻居觉得检查文件很重要。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "我听说经理最近在机场负责讨论计划。",
    "meaning": "我听说，经理最近在机场负责讨论计划。",
    "options": [
      "记者已经把工作计划带到公司了。",
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "我听说经理最近在机场负责讨论计划。",
      "邻居觉得解决问题很重要。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然时间不多，但是邻居还是完成了联系客户。",
    "meaning": "虽然时间不多，但是邻居还是完成了联系客户。",
    "options": [
      "会议结束以后，经理马上回到公司继续提高效率。",
      "记者觉得调整时间很重要。",
      "今天经理在北京提高效率。",
      "虽然时间不多，但是邻居还是完成了联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "今天记者在广州申请签证。",
    "meaning": "今天，记者在广州申请签证。",
    "options": [
      "今天记者在广州申请签证。",
      "经过讨论，记者决定在北京申请签证。",
      "我听说邻居最近在图书馆负责解决问题。",
      "如果有时间，记者会去医院安排工作。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "我的同事每天都要完成任务。",
    "meaning": "我的同事每天都要完成任务。",
    "options": [
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "为了学习新知识，我的同事提前来到博物馆。",
      "我的同事告诉我，他最近正在完成任务。",
      "我的同事每天都要完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "今天记者在北京解决问题。",
    "meaning": "今天，记者在北京解决问题。",
    "options": [
      "因为工作很忙，记者只能晚上申请项目。",
      "周末的时候，记者喜欢去广州申请项目。",
      "经过讨论，同事决定在城市中心调查情况。",
      "今天记者在北京解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "企业家每天都要提高效率。",
    "meaning": "企业家每天都要提高效率。",
    "options": [
      "记者每天都要申请项目。",
      "同事每天都要调查情况。",
      "因为工作很忙，志愿者只能晚上交换意见。",
      "企业家每天都要提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "如果有时间，志愿者会去图书馆讨论方案。",
    "meaning": "如果有时间，志愿者会去图书馆讨论方案。",
    "options": [
      "同事每天都要调查情况。",
      "周末的时候，记者喜欢去广州申请项目。",
      "如果有时间，志愿者会去图书馆讨论方案。",
      "如果计划没有变化，志愿者下午会在图书馆交换意见。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "为了分析数据，同事提前来到广州。",
    "meaning": "为了分析数据，同事提前来到广州。",
    "options": [
      "志愿者告诉我，他最近正在讨论方案。",
      "记者正在会议中心改进方法。",
      "为了分析数据，同事提前来到广州。",
      "同事告诉我，他最近正在调查情况。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "记者正在会议中心改进方法。",
    "meaning": "记者正在会议中心改进方法。",
    "options": [
      "会议结束以后，同事马上回到城市中心继续分析数据。",
      "记者正在会议中心改进方法。",
      "经过讨论，志愿者决定在大学讨论方案。",
      "周末的时候，记者喜欢去会议中心解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "企业家希望明天可以继续承担责任。",
    "meaning": "企业家希望明天可以继续承担责任。",
    "options": [
      "昨天志愿者在博物馆完成研究，所以回家比较晚。",
      "虽然时间不多，但是同事还是完成了分析数据。",
      "企业家希望明天可以继续承担责任。",
      "周末的时候，企业家喜欢去广州承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "昨天志愿者在大学交换意见，所以回家比较晚。",
    "meaning": "昨天，志愿者在大学交换意见，所以回家比较晚。",
    "options": [
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "企业家希望明天可以继续提高效率。",
      "同事已经把技术文件带到机场了。",
      "最近记者常常需要解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "同事告诉我，他最近正在调查情况。",
    "meaning": "同事告诉我，他最近正在调查情况。",
    "options": [
      "会议结束以后，记者马上回到公司继续改进方法。",
      "会议结束以后，同事马上回到城市中心继续分析数据。",
      "同事告诉我，他最近正在调查情况。",
      "我听说企业家最近在北京负责调整计划。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "因为工作很忙，记者只能晚上申请项目。",
    "meaning": "因为工作很忙，记者只能晚上申请项目。",
    "options": [
      "因为工作很忙，同事只能晚上分析数据。",
      "虽然时间不多，但是志愿者还是完成了完成研究。",
      "因为工作很忙，记者只能晚上申请项目。",
      "企业家希望明天可以继续承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "周末的时候，企业家喜欢去机场调整计划。",
    "meaning": "周末的时候，企业家喜欢去机场调整计划。",
    "options": [
      "周末的时候，企业家喜欢去机场调整计划。",
      "周末的时候，企业家喜欢去广州承担责任。",
      "同事告诉我，他最近正在调查情况。",
      "我听说企业家最近在大学负责提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "志愿者觉得完成研究很重要。",
    "meaning": "志愿者觉得完成研究很重要。",
    "options": [
      "为了准备明天的工作，同事今晚还要积累经验。",
      "志愿者觉得完成研究很重要。",
      "经过讨论，同事决定在公司积累经验。",
      "如果有时间，企业家会去机场提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "经过讨论，同事决定在公司积累经验。",
    "meaning": "经过讨论，同事决定在公司积累经验。",
    "options": [
      "同事告诉我，他最近正在分析数据。",
      "经过讨论，同事决定在公司积累经验。",
      "志愿者已经把市场信息带到机场了。",
      "企业必须不断提高自身的竞争力。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "为了准备明天的工作，记者今晚还要解决问题。",
    "meaning": "为了准备明天的工作，记者今晚还要解决问题。",
    "options": [
      "为了准备明天的工作，记者今晚还要解决问题。",
      "昨天记者在博物馆改进方法，所以回家比较晚。",
      "同事正在检查技术文件，准备开始积累经验。",
      "如果有时间，志愿者会去机场完成研究。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "最近企业家常常需要提高效率。",
    "meaning": "最近，企业家常常需要提高效率。",
    "options": [
      "企业必须不断提高自身的竞争力。",
      "今天记者在上海解决问题。",
      "企业家每天都要承担责任。",
      "最近企业家常常需要提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "如果计划没有变化，志愿者下午会在研究中心讨论方案。",
    "meaning": "如果计划没有变化，志愿者下午会在研究中心讨论方案。",
    "options": [
      "如果计划没有变化，志愿者下午会在研究中心讨论方案。",
      "企业家每天都要承担责任。",
      "虽然时间不多，但是企业家还是完成了承担责任。",
      "这项研究的结果为我们提供了新的思路。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "同事已经把合同条款带到图书馆了。",
    "meaning": "同事已经把合同条款带到图书馆了。",
    "options": [
      "同事已经把合同条款带到图书馆了。",
      "今天同事在图书馆积累经验。",
      "我听说企业家最近在大学负责提高效率。",
      "我听说志愿者最近在医院负责讨论方案。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "记者正在检查学习资料，准备开始改进方法。",
    "meaning": "记者正在检查学习资料，准备开始改进方法。",
    "options": [
      "记者正在检查学习资料，准备开始改进方法。",
      "同事已经把技术文件带到机场了。",
      "周末的时候，记者喜欢去实验室改进方法。",
      "企业家希望明天可以继续提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "会议结束以后，企业家马上回到会议中心继续承担责任。",
    "meaning": "会议结束以后，企业家马上回到会议中心继续承担责任。",
    "options": [
      "虽然时间不多，但是同事还是完成了积累经验。",
      "如果计划没有变化，记者下午会在图书馆解决问题。",
      "会议结束以后，企业家马上回到会议中心继续承担责任。",
      "今天同事在研究中心调查情况。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "我听说志愿者最近在城市中心负责交换意见。",
    "meaning": "我听说，志愿者最近在城市中心负责交换意见。",
    "options": [
      "记者每天都要改进方法。",
      "我听说志愿者最近在城市中心负责交换意见。",
      "同事告诉我，他最近正在积累经验。",
      "会议结束以后，企业家马上回到公司继续提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然时间不多，但是同事还是完成了调查情况。",
    "meaning": "虽然时间不多，但是同事还是完成了调查情况。",
    "options": [
      "如果有时间，企业家会去会议中心提高效率。",
      "虽然时间不多，但是同事还是完成了调查情况。",
      "同事已经把合同条款带到图书馆了。",
      "周末的时候，同事喜欢去实验室调查情况。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "今天记者在博物馆申请项目。",
    "meaning": "今天，记者在博物馆申请项目。",
    "options": [
      "同事告诉我，他最近正在调查情况。",
      "同事正在城市中心积累经验。",
      "因为工作很忙，记者只能晚上改进方法。",
      "今天记者在博物馆申请项目。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "企业家每天都要调整计划。",
    "meaning": "企业家每天都要调整计划。",
    "options": [
      "企业家希望明天可以继续承担责任。",
      "为了积累经验，同事提前来到实验室。",
      "企业家每天都要调整计划。",
      "因为工作很忙，记者只能晚上解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "如果有时间，志愿者会去机场完成研究。",
    "meaning": "如果有时间，志愿者会去机场完成研究。",
    "options": [
      "如果计划没有变化，企业家下午会在机场承担责任。",
      "如果有时间，志愿者会去机场完成研究。",
      "为了准备明天的工作，记者今晚还要解决问题。",
      "周末的时候，记者喜欢去广州申请项目。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "为了积累经验，同事提前来到实验室。",
    "meaning": "为了积累经验，同事提前来到实验室。",
    "options": [
      "会议结束以后，同事马上回到城市中心继续分析数据。",
      "志愿者正在检查市场信息，准备开始讨论方案。",
      "会议结束以后，记者马上回到公司继续改进方法。",
      "为了积累经验，同事提前来到实验室。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "记者正在公司解决问题。",
    "meaning": "记者正在公司解决问题。",
    "options": [
      "同事正在检查会议记录，准备开始调查情况。",
      "志愿者告诉我，他最近正在完成研究。",
      "同事告诉我，他最近正在积累经验。",
      "记者正在公司解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "企业家希望明天可以继续提高效率。",
    "meaning": "企业家希望明天可以继续提高效率。",
    "options": [
      "今天记者在博物馆申请项目。",
      "经过分析，我们发现问题比想象中更加复杂。",
      "企业家希望明天可以继续提高效率。",
      "周末的时候，记者喜欢去会议中心解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "昨天志愿者在北京讨论方案，所以回家比较晚。",
    "meaning": "昨天，志愿者在北京讨论方案，所以回家比较晚。",
    "options": [
      "昨天志愿者在博物馆完成研究，所以回家比较晚。",
      "昨天志愿者在北京讨论方案，所以回家比较晚。",
      "虽然时间不多，但是企业家还是完成了承担责任。",
      "今天记者在研究中心改进方法。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "同事告诉我，他最近正在分析数据。",
    "meaning": "同事告诉我，他最近正在分析数据。",
    "options": [
      "因为工作很忙，记者只能晚上改进方法。",
      "同事告诉我，他最近正在分析数据。",
      "最近企业家常常需要调整计划。",
      "会议结束以后，企业家马上回到城市中心继续调整计划。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "因为工作很忙，记者只能晚上改进方法。",
    "meaning": "因为工作很忙，记者只能晚上改进方法。",
    "options": [
      "因为工作很忙，记者只能晚上改进方法。",
      "经过讨论，同事决定在医院分析数据。",
      "记者正在公司解决问题。",
      "周末的时候，企业家喜欢去实验室提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "周末的时候，企业家喜欢去广州承担责任。",
    "meaning": "周末的时候，企业家喜欢去广州承担责任。",
    "options": [
      "如果计划没有变化，记者下午会在图书馆解决问题。",
      "周末的时候，企业家喜欢去广州承担责任。",
      "同事正在检查合同条款，准备开始分析数据。",
      "志愿者告诉我，他最近正在讨论方案。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "志愿者觉得交换意见很重要。",
    "meaning": "志愿者觉得交换意见很重要。",
    "options": [
      "我听说企业家最近在北京负责调整计划。",
      "因为工作很忙，同事只能晚上调查情况。",
      "志愿者觉得交换意见很重要。",
      "我听说企业家最近在医院负责承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "经过讨论，同事决定在城市中心调查情况。",
    "meaning": "经过讨论，同事决定在城市中心调查情况。",
    "options": [
      "同事正在检查技术文件，准备开始积累经验。",
      "志愿者觉得讨论方案很重要。",
      "为了准备明天的工作，同事今晚还要积累经验。",
      "经过讨论，同事决定在城市中心调查情况。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了准备明天的工作，记者今晚还要申请项目。",
    "meaning": "为了准备明天的工作，记者今晚还要申请项目。",
    "options": [
      "为了准备明天的工作，记者今晚还要申请项目。",
      "同事正在大学分析数据。",
      "会议结束以后，企业家马上回到会议中心继续承担责任。",
      "志愿者已经把项目计划带到广州了。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "最近企业家常常需要调整计划。",
    "meaning": "最近，企业家常常需要调整计划。",
    "options": [
      "我听说企业家最近在大学负责提高效率。",
      "最近企业家常常需要调整计划。",
      "同事告诉我，他最近正在调查情况。",
      "因为工作很忙，同事只能晚上调查情况。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "如果计划没有变化，志愿者下午会在上海完成研究。",
    "meaning": "如果计划没有变化，志愿者下午会在上海完成研究。",
    "options": [
      "今天记者在研究中心改进方法。",
      "如果计划没有变化，志愿者下午会在上海完成研究。",
      "企业家觉得提高效率很重要。",
      "经过分析，我们发现问题比想象中更加复杂。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "同事已经把技术文件带到机场了。",
    "meaning": "同事已经把技术文件带到机场了。",
    "options": [
      "会议结束以后，企业家马上回到公司继续提高效率。",
      "志愿者觉得完成研究很重要。",
      "虽然时间不多，但是志愿者还是完成了讨论方案。",
      "同事已经把技术文件带到机场了。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "记者正在检查申请材料，准备开始解决问题。",
    "meaning": "记者正在检查申请材料，准备开始解决问题。",
    "options": [
      "如果有时间，志愿者会去广州交换意见。",
      "为了准备明天的工作，记者今晚还要申请项目。",
      "企业必须不断提高自身的竞争力。",
      "记者正在检查申请材料，准备开始解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "会议结束以后，企业家马上回到公司继续提高效率。",
    "meaning": "会议结束以后，企业家马上回到公司继续提高效率。",
    "options": [
      "记者觉得申请项目很重要。",
      "记者希望明天可以继续解决问题。",
      "会议结束以后，企业家马上回到公司继续提高效率。",
      "为了准备明天的工作，同事今晚还要调查情况。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "我听说志愿者最近在医院负责讨论方案。",
    "meaning": "我听说，志愿者最近在医院负责讨论方案。",
    "options": [
      "周末的时候，记者喜欢去会议中心解决问题。",
      "如果有时间，企业家会去广州调整计划。",
      "记者正在检查申请材料，准备开始解决问题。",
      "我听说志愿者最近在医院负责讨论方案。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然时间不多，但是同事还是完成了分析数据。",
    "meaning": "虽然时间不多，但是同事还是完成了分析数据。",
    "options": [
      "为了分析数据，同事提前来到广州。",
      "虽然时间不多，但是同事还是完成了分析数据。",
      "如果有时间，企业家会去会议中心提高效率。",
      "志愿者告诉我，他最近正在讨论方案。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "今天记者在研究中心改进方法。",
    "meaning": "今天，记者在研究中心改进方法。",
    "options": [
      "因为工作很忙，记者只能晚上申请项目。",
      "如果计划没有变化，企业家下午会在上海提高效率。",
      "昨天记者在博物馆改进方法，所以回家比较晚。",
      "今天记者在研究中心改进方法。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "企业家每天都要承担责任。",
    "meaning": "企业家每天都要承担责任。",
    "options": [
      "记者希望明天可以继续解决问题。",
      "今天记者在北京解决问题。",
      "经过讨论，同事决定在城市中心调查情况。",
      "企业家每天都要承担责任。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "如果有时间，志愿者会去广州交换意见。",
    "meaning": "如果有时间，志愿者会去广州交换意见。",
    "options": [
      "志愿者已经把统计结果带到实验室了。",
      "周末的时候，同事喜欢去实验室调查情况。",
      "昨天记者在博物馆改进方法，所以回家比较晚。",
      "如果有时间，志愿者会去广州交换意见。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了调查情况，同事提前来到会议中心。",
    "meaning": "为了调查情况，同事提前来到会议中心。",
    "options": [
      "为了准备明天的工作，同事今晚还要分析数据。",
      "今天同事在研究中心调查情况。",
      "企业家觉得提高效率很重要。",
      "为了调查情况，同事提前来到会议中心。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "记者正在城市中心申请项目。",
    "meaning": "记者正在城市中心申请项目。",
    "options": [
      "记者正在城市中心申请项目。",
      "同事告诉我，他最近正在调查情况。",
      "我听说企业家最近在医院负责承担责任。",
      "企业家每天都要提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "企业家希望明天可以继续调整计划。",
    "meaning": "企业家希望明天可以继续调整计划。",
    "options": [
      "经过分析，我们发现问题比想象中更加复杂。",
      "志愿者告诉我，他最近正在完成研究。",
      "如果计划没有变化，企业家下午会在上海提高效率。",
      "企业家希望明天可以继续调整计划。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "昨天志愿者在博物馆完成研究，所以回家比较晚。",
    "meaning": "昨天，志愿者在博物馆完成研究，所以回家比较晚。",
    "options": [
      "同事告诉我，他最近正在分析数据。",
      "昨天志愿者在博物馆完成研究，所以回家比较晚。",
      "记者正在检查申请材料，准备开始解决问题。",
      "因为工作很忙，同事只能晚上积累经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "同事告诉我，他最近正在积累经验。",
    "meaning": "同事告诉我，他最近正在积累经验。",
    "options": [
      "经过讨论，志愿者决定在城市中心完成研究。",
      "同事正在检查会议记录，准备开始调查情况。",
      "会议结束以后，企业家马上回到城市中心继续调整计划。",
      "同事告诉我，他最近正在积累经验。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "因为工作很忙，记者只能晚上解决问题。",
    "meaning": "因为工作很忙，记者只能晚上解决问题。",
    "options": [
      "因为工作很忙，记者只能晚上解决问题。",
      "企业家觉得调整计划很重要。",
      "昨天企业家在研究中心调整计划，所以回家比较晚。",
      "今天同事在上海分析数据。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "周末的时候，企业家喜欢去实验室提高效率。",
    "meaning": "周末的时候，企业家喜欢去实验室提高效率。",
    "options": [
      "周末的时候，企业家喜欢去实验室提高效率。",
      "经过分析，我们发现问题比想象中更加复杂。",
      "如果有时间，企业家会去广州调整计划。",
      "记者觉得申请项目很重要。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "志愿者觉得讨论方案很重要。",
    "meaning": "志愿者觉得讨论方案很重要。",
    "options": [
      "志愿者觉得讨论方案很重要。",
      "因为工作很忙，同事只能晚上调查情况。",
      "最近企业家常常需要提高效率。",
      "如果有时间，志愿者会去机场完成研究。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "经过讨论，同事决定在医院分析数据。",
    "meaning": "经过讨论，同事决定在医院分析数据。",
    "options": [
      "为了准备明天的工作，记者今晚还要改进方法。",
      "志愿者已经把统计结果带到实验室了。",
      "昨天记者在博物馆改进方法，所以回家比较晚。",
      "经过讨论，同事决定在医院分析数据。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了准备明天的工作，记者今晚还要改进方法。",
    "meaning": "为了准备明天的工作，记者今晚还要改进方法。",
    "options": [
      "为了准备明天的工作，记者今晚还要改进方法。",
      "我听说志愿者最近在大学负责完成研究。",
      "会议结束以后，记者马上回到公司继续改进方法。",
      "会议结束以后，企业家马上回到城市中心继续调整计划。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "最近企业家常常需要承担责任。",
    "meaning": "最近，企业家常常需要承担责任。",
    "options": [
      "周末的时候，企业家喜欢去机场调整计划。",
      "如果有时间，志愿者会去广州交换意见。",
      "经过分析，我们发现问题比想象中更加复杂。",
      "最近企业家常常需要承担责任。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "如果计划没有变化，志愿者下午会在图书馆交换意见。",
    "meaning": "如果计划没有变化，志愿者下午会在图书馆交换意见。",
    "options": [
      "会议结束以后，同事马上回到城市中心继续分析数据。",
      "如果计划没有变化，志愿者下午会在图书馆交换意见。",
      "最近记者常常需要解决问题。",
      "企业家希望明天可以继续提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "同事已经把会议记录带到广州了。",
    "meaning": "同事已经把会议记录带到广州了。",
    "options": [
      "同事已经把会议记录带到广州了。",
      "为了分析数据，同事提前来到广州。",
      "最近企业家常常需要提高效率。",
      "昨天企业家在博物馆提高效率，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "记者正在检查调查数据，准备开始申请项目。",
    "meaning": "记者正在检查调查数据，准备开始申请项目。",
    "options": [
      "虽然时间不多，但是志愿者还是完成了讨论方案。",
      "志愿者觉得讨论方案很重要。",
      "记者正在检查调查数据，准备开始申请项目。",
      "最近企业家常常需要提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "会议结束以后，企业家马上回到城市中心继续调整计划。",
    "meaning": "会议结束以后，企业家马上回到城市中心继续调整计划。",
    "options": [
      "经过讨论，志愿者决定在医院交换意见。",
      "记者正在检查申请材料，准备开始解决问题。",
      "会议结束以后，企业家马上回到城市中心继续调整计划。",
      "企业家希望明天可以继续调整计划。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "我听说志愿者最近在大学负责完成研究。",
    "meaning": "我听说，志愿者最近在大学负责完成研究。",
    "options": [
      "志愿者告诉我，他最近正在交换意见。",
      "同事正在大学分析数据。",
      "企业家觉得承担责任很重要。",
      "我听说志愿者最近在大学负责完成研究。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然时间不多，但是同事还是完成了积累经验。",
    "meaning": "虽然时间不多，但是同事还是完成了积累经验。",
    "options": [
      "经过讨论，志愿者决定在大学讨论方案。",
      "虽然时间不多，但是同事还是完成了积累经验。",
      "如果计划没有变化，企业家下午会在图书馆调整计划。",
      "记者希望明天可以继续申请项目。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "今天记者在上海解决问题。",
    "meaning": "今天，记者在上海解决问题。",
    "options": [
      "记者每天都要解决问题。",
      "周末的时候，记者喜欢去广州申请项目。",
      "今天记者在上海解决问题。",
      "如果计划没有变化，记者下午会在图书馆解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "如果有时间，企业家会去机场提高效率。",
    "meaning": "如果有时间，企业家会去机场提高效率。",
    "options": [
      "如果有时间，企业家会去机场提高效率。",
      "同事正在检查技术文件，准备开始积累经验。",
      "我听说志愿者最近在大学负责完成研究。",
      "最近企业家常常需要承担责任。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "为了讨论方案，志愿者提前来到实验室。",
    "meaning": "为了讨论方案，志愿者提前来到实验室。",
    "options": [
      "周末的时候，企业家喜欢去广州承担责任。",
      "为了讨论方案，志愿者提前来到实验室。",
      "我听说志愿者最近在医院负责讨论方案。",
      "记者每天都要申请项目。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "同事正在公司分析数据。",
    "meaning": "同事正在公司分析数据。",
    "options": [
      "同事正在公司分析数据。",
      "因为工作很忙，同事只能晚上积累经验。",
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "经过讨论，同事决定在公司积累经验。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "记者希望明天可以继续改进方法。",
    "meaning": "记者希望明天可以继续改进方法。",
    "options": [
      "虽然时间不多，但是志愿者还是完成了完成研究。",
      "记者希望明天可以继续改进方法。",
      "经过讨论，志愿者决定在医院交换意见。",
      "为了准备明天的工作，志愿者今晚还要完成研究。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "昨天企业家在北京承担责任，所以回家比较晚。",
    "meaning": "昨天，企业家在北京承担责任，所以回家比较晚。",
    "options": [
      "昨天企业家在北京承担责任，所以回家比较晚。",
      "经过讨论，同事决定在城市中心调查情况。",
      "如果有时间，企业家会去机场提高效率。",
      "同事正在医院调查情况。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "志愿者告诉我，他最近正在交换意见。",
    "meaning": "志愿者告诉我，他最近正在交换意见。",
    "options": [
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "志愿者告诉我，他最近正在交换意见。",
      "会议结束以后，企业家马上回到公司继续提高效率。",
      "虽然时间不多，但是同事还是完成了积累经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "因为工作很忙，同事只能晚上调查情况。",
    "meaning": "因为工作很忙，同事只能晚上调查情况。",
    "options": [
      "为了完成研究，志愿者提前来到会议中心。",
      "因为工作很忙，同事只能晚上调查情况。",
      "虽然时间不多，但是同事还是完成了调查情况。",
      "经过讨论，志愿者决定在城市中心完成研究。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "周末的时候，记者喜欢去广州申请项目。",
    "meaning": "周末的时候，记者喜欢去广州申请项目。",
    "options": [
      "因为工作很忙，志愿者只能晚上交换意见。",
      "记者正在检查学习资料，准备开始改进方法。",
      "周末的时候，记者喜欢去广州申请项目。",
      "企业必须不断提高自身的竞争力。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "企业家觉得调整计划很重要。",
    "meaning": "企业家觉得调整计划很重要。",
    "options": [
      "经过讨论，志愿者决定在城市中心完成研究。",
      "企业家觉得调整计划很重要。",
      "最近企业家常常需要承担责任。",
      "最近记者常常需要解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "经过讨论，志愿者决定在城市中心完成研究。",
    "meaning": "经过讨论，志愿者决定在城市中心完成研究。",
    "options": [
      "如果有时间，企业家会去会议中心提高效率。",
      "同事正在城市中心积累经验。",
      "如果有时间，志愿者会去广州交换意见。",
      "经过讨论，志愿者决定在城市中心完成研究。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了准备明天的工作，同事今晚还要积累经验。",
    "meaning": "为了准备明天的工作，同事今晚还要积累经验。",
    "options": [
      "为了准备明天的工作，同事今晚还要分析数据。",
      "为了准备明天的工作，同事今晚还要积累经验。",
      "记者正在检查学习资料，准备开始改进方法。",
      "记者每天都要解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "最近记者常常需要解决问题。",
    "meaning": "最近，记者常常需要解决问题。",
    "options": [
      "昨天志愿者在博物馆完成研究，所以回家比较晚。",
      "为了积累经验，同事提前来到实验室。",
      "最近记者常常需要解决问题。",
      "如果有时间，志愿者会去广州交换意见。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "如果计划没有变化，企业家下午会在上海提高效率。",
    "meaning": "如果计划没有变化，企业家下午会在上海提高效率。",
    "options": [
      "面对变化，我们应该保持理性和耐心。",
      "如果计划没有变化，企业家下午会在上海提高效率。",
      "志愿者已经把统计结果带到实验室了。",
      "为了准备明天的工作，志愿者今晚还要完成研究。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "志愿者已经把市场信息带到机场了。",
    "meaning": "志愿者已经把市场信息带到机场了。",
    "options": [
      "志愿者已经把市场信息带到机场了。",
      "记者希望明天可以继续申请项目。",
      "会议结束以后，企业家马上回到会议中心继续承担责任。",
      "如果有时间，企业家会去机场提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "同事正在检查合同条款，准备开始分析数据。",
    "meaning": "同事正在检查合同条款，准备开始分析数据。",
    "options": [
      "同事正在检查合同条款，准备开始分析数据。",
      "志愿者觉得讨论方案很重要。",
      "为了准备明天的工作，志愿者今晚还要完成研究。",
      "我听说企业家最近在医院负责承担责任。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "会议结束以后，记者马上回到公司继续改进方法。",
    "meaning": "会议结束以后，记者马上回到公司继续改进方法。",
    "options": [
      "如果计划没有变化，记者下午会在图书馆解决问题。",
      "会议结束以后，记者马上回到公司继续改进方法。",
      "为了交换意见，志愿者提前来到公司。",
      "记者希望明天可以继续申请项目。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "我听说企业家最近在医院负责承担责任。",
    "meaning": "我听说，企业家最近在医院负责承担责任。",
    "options": [
      "因为工作很忙，同事只能晚上调查情况。",
      "如果有时间，志愿者会去机场完成研究。",
      "同事已经把合同条款带到图书馆了。",
      "我听说企业家最近在医院负责承担责任。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然时间不多，但是志愿者还是完成了交换意见。",
    "meaning": "虽然时间不多，但是志愿者还是完成了交换意见。",
    "options": [
      "这项研究的结果为我们提供了新的思路。",
      "虽然时间不多，但是志愿者还是完成了交换意见。",
      "经过讨论，企业家决定在医院调整计划。",
      "虽然时间不多，但是志愿者还是完成了讨论方案。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "今天同事在研究中心调查情况。",
    "meaning": "今天，同事在研究中心调查情况。",
    "options": [
      "同事已经把技术文件带到机场了。",
      "为了完成研究，志愿者提前来到会议中心。",
      "今天同事在研究中心调查情况。",
      "如果计划没有变化，企业家下午会在机场承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "记者每天都要申请项目。",
    "meaning": "记者每天都要申请项目。",
    "options": [
      "同事告诉我，他最近正在调查情况。",
      "记者每天都要申请项目。",
      "记者希望明天可以继续解决问题。",
      "虽然时间不多，但是同事还是完成了积累经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "如果有时间，企业家会去广州调整计划。",
    "meaning": "如果有时间，企业家会去广州调整计划。",
    "options": [
      "双方就合作方案交换了意见。",
      "如果有时间，企业家会去广州调整计划。",
      "经过讨论，志愿者决定在医院交换意见。",
      "因为工作很忙，志愿者只能晚上交换意见。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "为了完成研究，志愿者提前来到会议中心。",
    "meaning": "为了完成研究，志愿者提前来到会议中心。",
    "options": [
      "周末的时候，记者喜欢去广州申请项目。",
      "今天记者在北京解决问题。",
      "虽然时间不多，但是同事还是完成了分析数据。",
      "为了完成研究，志愿者提前来到会议中心。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "同事正在城市中心积累经验。",
    "meaning": "同事正在城市中心积累经验。",
    "options": [
      "同事正在城市中心积累经验。",
      "虽然时间不多，但是企业家还是完成了承担责任。",
      "为了准备明天的工作，同事今晚还要积累经验。",
      "为了准备明天的工作，记者今晚还要解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "记者希望明天可以继续解决问题。",
    "meaning": "记者希望明天可以继续解决问题。",
    "options": [
      "记者希望明天可以继续解决问题。",
      "志愿者已经把市场信息带到机场了。",
      "周末的时候，同事喜欢去实验室调查情况。",
      "志愿者觉得交换意见很重要。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "昨天企业家在博物馆提高效率，所以回家比较晚。",
    "meaning": "昨天，企业家在博物馆提高效率，所以回家比较晚。",
    "options": [
      "昨天企业家在博物馆提高效率，所以回家比较晚。",
      "今天同事在图书馆积累经验。",
      "因为工作很忙，记者只能晚上解决问题。",
      "记者正在会议中心改进方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "志愿者告诉我，他最近正在讨论方案。",
    "meaning": "志愿者告诉我，他最近正在讨论方案。",
    "options": [
      "同事每天都要调查情况。",
      "为了交换意见，志愿者提前来到公司。",
      "志愿者告诉我，他最近正在讨论方案。",
      "昨天志愿者在大学交换意见，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "因为工作很忙，同事只能晚上分析数据。",
    "meaning": "因为工作很忙，同事只能晚上分析数据。",
    "options": [
      "为了准备明天的工作，同事今晚还要分析数据。",
      "我听说志愿者最近在大学负责完成研究。",
      "昨天企业家在博物馆提高效率，所以回家比较晚。",
      "因为工作很忙，同事只能晚上分析数据。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "周末的时候，记者喜欢去实验室改进方法。",
    "meaning": "周末的时候，记者喜欢去实验室改进方法。",
    "options": [
      "周末的时候，记者喜欢去实验室改进方法。",
      "企业家希望明天可以继续调整计划。",
      "面对变化，我们应该保持理性和耐心。",
      "我听说记者最近在大学负责改进方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "企业家觉得承担责任很重要。",
    "meaning": "企业家觉得承担责任很重要。",
    "options": [
      "企业家觉得承担责任很重要。",
      "经过讨论，企业家决定在医院调整计划。",
      "同事已经把技术文件带到机场了。",
      "我听说记者最近在大学负责改进方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "经过讨论，志愿者决定在医院交换意见。",
    "meaning": "经过讨论，志愿者决定在医院交换意见。",
    "options": [
      "志愿者已经把市场信息带到机场了。",
      "记者希望明天可以继续解决问题。",
      "记者正在会议中心改进方法。",
      "经过讨论，志愿者决定在医院交换意见。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了准备明天的工作，同事今晚还要调查情况。",
    "meaning": "为了准备明天的工作，同事今晚还要调查情况。",
    "options": [
      "如果有时间，志愿者会去图书馆讨论方案。",
      "记者正在会议中心改进方法。",
      "为了准备明天的工作，同事今晚还要调查情况。",
      "同事正在检查技术文件，准备开始积累经验。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "最近记者常常需要申请项目。",
    "meaning": "最近，记者常常需要申请项目。",
    "options": [
      "经过讨论，志愿者决定在医院交换意见。",
      "最近记者常常需要申请项目。",
      "记者正在检查调查数据，准备开始申请项目。",
      "同事告诉我，他最近正在分析数据。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "如果计划没有变化，企业家下午会在图书馆调整计划。",
    "meaning": "如果计划没有变化，企业家下午会在图书馆调整计划。",
    "options": [
      "会议结束以后，记者马上回到医院继续申请项目。",
      "经过讨论，志愿者决定在大学讨论方案。",
      "如果有时间，企业家会去会议中心提高效率。",
      "如果计划没有变化，企业家下午会在图书馆调整计划。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "志愿者已经把项目计划带到广州了。",
    "meaning": "志愿者已经把项目计划带到广州了。",
    "options": [
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "同事告诉我，他最近正在调查情况。",
      "记者正在检查学习资料，准备开始改进方法。",
      "志愿者已经把项目计划带到广州了。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "同事正在检查技术文件，准备开始积累经验。",
    "meaning": "同事正在检查技术文件，准备开始积累经验。",
    "options": [
      "同事正在检查技术文件，准备开始积累经验。",
      "最近企业家常常需要承担责任。",
      "如果有时间，企业家会去实验室承担责任。",
      "这项研究的结果为我们提供了新的思路。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "会议结束以后，记者马上回到城市中心继续解决问题。",
    "meaning": "会议结束以后，记者马上回到城市中心继续解决问题。",
    "options": [
      "记者每天都要申请项目。",
      "最近企业家常常需要调整计划。",
      "会议结束以后，记者马上回到城市中心继续解决问题。",
      "志愿者告诉我，他最近正在讨论方案。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "我听说企业家最近在大学负责提高效率。",
    "meaning": "我听说，企业家最近在大学负责提高效率。",
    "options": [
      "我听说企业家最近在大学负责提高效率。",
      "记者每天都要改进方法。",
      "记者正在会议中心改进方法。",
      "周末的时候，记者喜欢去实验室改进方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "虽然时间不多，但是志愿者还是完成了讨论方案。",
    "meaning": "虽然时间不多，但是志愿者还是完成了讨论方案。",
    "options": [
      "虽然时间不多，但是志愿者还是完成了讨论方案。",
      "最近企业家常常需要提高效率。",
      "如果有时间，企业家会去实验室承担责任。",
      "如果计划没有变化，记者下午会在图书馆解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "今天同事在上海分析数据。",
    "meaning": "今天，同事在上海分析数据。",
    "options": [
      "记者希望明天可以继续解决问题。",
      "同事正在检查会议记录，准备开始调查情况。",
      "如果计划没有变化，企业家下午会在上海提高效率。",
      "今天同事在上海分析数据。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "记者每天都要改进方法。",
    "meaning": "记者每天都要改进方法。",
    "options": [
      "记者每天都要改进方法。",
      "如果有时间，志愿者会去广州交换意见。",
      "昨天企业家在博物馆提高效率，所以回家比较晚。",
      "虽然时间不多，但是同事还是完成了积累经验。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "如果有时间，企业家会去实验室承担责任。",
    "meaning": "如果有时间，企业家会去实验室承担责任。",
    "options": [
      "如果有时间，企业家会去实验室承担责任。",
      "同事告诉我，他最近正在调查情况。",
      "周末的时候，记者喜欢去广州申请项目。",
      "会议结束以后，记者马上回到公司继续改进方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "为了交换意见，志愿者提前来到公司。",
    "meaning": "为了交换意见，志愿者提前来到公司。",
    "options": [
      "双方就合作方案交换了意见。",
      "同事已经把技术文件带到机场了。",
      "为了讨论方案，志愿者提前来到实验室。",
      "为了交换意见，志愿者提前来到公司。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "同事正在医院调查情况。",
    "meaning": "同事正在医院调查情况。",
    "options": [
      "同事正在公司分析数据。",
      "企业家每天都要调整计划。",
      "同事正在医院调查情况。",
      "企业必须不断提高自身的竞争力。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "记者希望明天可以继续申请项目。",
    "meaning": "记者希望明天可以继续申请项目。",
    "options": [
      "记者希望明天可以继续申请项目。",
      "因为工作很忙，同事只能晚上调查情况。",
      "如果计划没有变化，志愿者下午会在上海完成研究。",
      "为了准备明天的工作，记者今晚还要申请项目。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "昨天企业家在研究中心调整计划，所以回家比较晚。",
    "meaning": "昨天，企业家在研究中心调整计划，所以回家比较晚。",
    "options": [
      "昨天企业家在研究中心调整计划，所以回家比较晚。",
      "因为工作很忙，志愿者只能晚上交换意见。",
      "如果有时间，企业家会去实验室承担责任。",
      "最近企业家常常需要提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "志愿者告诉我，他最近正在完成研究。",
    "meaning": "志愿者告诉我，他最近正在完成研究。",
    "options": [
      "志愿者告诉我，他最近正在完成研究。",
      "记者正在城市中心申请项目。",
      "我听说企业家最近在医院负责承担责任。",
      "记者希望明天可以继续解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "因为工作很忙，同事只能晚上积累经验。",
    "meaning": "因为工作很忙，同事只能晚上积累经验。",
    "options": [
      "如果有时间，志愿者会去图书馆讨论方案。",
      "因为工作很忙，志愿者只能晚上交换意见。",
      "因为工作很忙，同事只能晚上积累经验。",
      "如果计划没有变化，志愿者下午会在图书馆交换意见。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "周末的时候，记者喜欢去会议中心解决问题。",
    "meaning": "周末的时候，记者喜欢去会议中心解决问题。",
    "options": [
      "周末的时候，记者喜欢去会议中心解决问题。",
      "经过讨论，同事决定在城市中心调查情况。",
      "同事告诉我，他最近正在调查情况。",
      "为了准备明天的工作，同事今晚还要积累经验。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "企业家觉得提高效率很重要。",
    "meaning": "企业家觉得提高效率很重要。",
    "options": [
      "企业家觉得提高效率很重要。",
      "企业家每天都要调整计划。",
      "如果计划没有变化，志愿者下午会在上海完成研究。",
      "今天记者在研究中心改进方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "经过讨论，志愿者决定在大学讨论方案。",
    "meaning": "经过讨论，志愿者决定在大学讨论方案。",
    "options": [
      "双方就合作方案交换了意见。",
      "如果有时间，企业家会去广州调整计划。",
      "为了积累经验，同事提前来到实验室。",
      "经过讨论，志愿者决定在大学讨论方案。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了准备明天的工作，同事今晚还要分析数据。",
    "meaning": "为了准备明天的工作，同事今晚还要分析数据。",
    "options": [
      "为了准备明天的工作，同事今晚还要分析数据。",
      "同事正在检查会议记录，准备开始调查情况。",
      "经过讨论，同事决定在城市中心调查情况。",
      "这项研究的结果为我们提供了新的思路。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "最近记者常常需要改进方法。",
    "meaning": "最近，记者常常需要改进方法。",
    "options": [
      "如果计划没有变化，志愿者下午会在研究中心讨论方案。",
      "会议结束以后，记者马上回到公司继续改进方法。",
      "昨天记者在博物馆改进方法，所以回家比较晚。",
      "最近记者常常需要改进方法。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "如果计划没有变化，企业家下午会在机场承担责任。",
    "meaning": "如果计划没有变化，企业家下午会在机场承担责任。",
    "options": [
      "会议结束以后，记者马上回到公司继续改进方法。",
      "企业家每天都要调整计划。",
      "如果计划没有变化，企业家下午会在机场承担责任。",
      "记者正在检查申请材料，准备开始解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "志愿者已经把统计结果带到实验室了。",
    "meaning": "志愿者已经把统计结果带到实验室了。",
    "options": [
      "志愿者已经把统计结果带到实验室了。",
      "同事正在检查合同条款，准备开始分析数据。",
      "我听说企业家最近在医院负责承担责任。",
      "会议结束以后，记者马上回到医院继续申请项目。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "同事正在检查会议记录，准备开始调查情况。",
    "meaning": "同事正在检查会议记录，准备开始调查情况。",
    "options": [
      "记者正在检查调查数据，准备开始申请项目。",
      "同事正在检查会议记录，准备开始调查情况。",
      "经过讨论，同事决定在公司积累经验。",
      "为了讨论方案，志愿者提前来到城市中心。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "会议结束以后，记者马上回到医院继续申请项目。",
    "meaning": "会议结束以后，记者马上回到医院继续申请项目。",
    "options": [
      "会议结束以后，记者马上回到医院继续申请项目。",
      "周末的时候，企业家喜欢去广州承担责任。",
      "企业家告诉我，他最近正在承担责任。",
      "同事正在检查会议记录，准备开始调查情况。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "我听说企业家最近在北京负责调整计划。",
    "meaning": "我听说，企业家最近在北京负责调整计划。",
    "options": [
      "今天同事在上海分析数据。",
      "我听说企业家最近在北京负责调整计划。",
      "志愿者觉得讨论方案很重要。",
      "为了准备明天的工作，志愿者今晚还要完成研究。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然时间不多，但是志愿者还是完成了完成研究。",
    "meaning": "虽然时间不多，但是志愿者还是完成了完成研究。",
    "options": [
      "经过讨论，志愿者决定在大学讨论方案。",
      "最近企业家常常需要调整计划。",
      "虽然时间不多，但是志愿者还是完成了完成研究。",
      "如果有时间，企业家会去会议中心提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "今天同事在图书馆积累经验。",
    "meaning": "今天，同事在图书馆积累经验。",
    "options": [
      "企业家希望明天可以继续提高效率。",
      "同事正在医院调查情况。",
      "今天同事在图书馆积累经验。",
      "虽然时间不多，但是志愿者还是完成了完成研究。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "记者每天都要解决问题。",
    "meaning": "记者每天都要解决问题。",
    "options": [
      "同事已经把会议记录带到广州了。",
      "记者每天都要解决问题。",
      "为了准备明天的工作，同事今晚还要调查情况。",
      "企业家每天都要提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "如果有时间，企业家会去会议中心提高效率。",
    "meaning": "如果有时间，企业家会去会议中心提高效率。",
    "options": [
      "如果有时间，志愿者会去机场完成研究。",
      "如果有时间，企业家会去广州调整计划。",
      "如果有时间，企业家会去会议中心提高效率。",
      "虽然时间不多，但是同事还是完成了积累经验。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "为了讨论方案，志愿者提前来到城市中心。",
    "meaning": "为了讨论方案，志愿者提前来到城市中心。",
    "options": [
      "为了讨论方案，志愿者提前来到城市中心。",
      "同事正在城市中心积累经验。",
      "志愿者已经把项目计划带到广州了。",
      "昨天企业家在研究中心调整计划，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "同事正在大学分析数据。",
    "meaning": "同事正在大学分析数据。",
    "options": [
      "同事正在大学分析数据。",
      "最近同事常常需要积累经验。",
      "同事正在城市中心积累经验。",
      "企业家希望明天可以继续调整计划。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "昨天记者在博物馆改进方法，所以回家比较晚。",
    "meaning": "昨天，记者在博物馆改进方法，所以回家比较晚。",
    "options": [
      "为了准备明天的工作，同事今晚还要积累经验。",
      "昨天记者在博物馆改进方法，所以回家比较晚。",
      "最近企业家常常需要承担责任。",
      "为了完成研究，志愿者提前来到会议中心。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "企业家告诉我，他最近正在承担责任。",
    "meaning": "企业家告诉我，他最近正在承担责任。",
    "options": [
      "周末的时候，记者喜欢去实验室改进方法。",
      "最近企业家常常需要调整计划。",
      "志愿者觉得完成研究很重要。",
      "企业家告诉我，他最近正在承担责任。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "因为工作很忙，志愿者只能晚上交换意见。",
    "meaning": "因为工作很忙，志愿者只能晚上交换意见。",
    "options": [
      "因为工作很忙，志愿者只能晚上交换意见。",
      "志愿者告诉我，他最近正在讨论方案。",
      "为了准备明天的工作，同事今晚还要调查情况。",
      "我听说记者最近在大学负责改进方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "周末的时候，同事喜欢去实验室调查情况。",
    "meaning": "周末的时候，同事喜欢去实验室调查情况。",
    "options": [
      "记者正在检查学习资料，准备开始改进方法。",
      "如果有时间，企业家会去广州调整计划。",
      "周末的时候，同事喜欢去实验室调查情况。",
      "昨天记者在博物馆改进方法，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "记者觉得申请项目很重要。",
    "meaning": "记者觉得申请项目很重要。",
    "options": [
      "同事已经把会议记录带到广州了。",
      "记者觉得申请项目很重要。",
      "记者正在检查学习资料，准备开始改进方法。",
      "如果计划没有变化，志愿者下午会在研究中心讨论方案。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "经过讨论，企业家决定在医院调整计划。",
    "meaning": "经过讨论，企业家决定在医院调整计划。",
    "options": [
      "最近记者常常需要申请项目。",
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "经过讨论，志愿者决定在大学讨论方案。",
      "经过讨论，企业家决定在医院调整计划。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了准备明天的工作，志愿者今晚还要完成研究。",
    "meaning": "为了准备明天的工作，志愿者今晚还要完成研究。",
    "options": [
      "同事告诉我，他最近正在积累经验。",
      "记者正在检查申请材料，准备开始解决问题。",
      "为了准备明天的工作，志愿者今晚还要完成研究。",
      "志愿者正在检查市场信息，准备开始讨论方案。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "最近同事常常需要积累经验。",
    "meaning": "最近，同事常常需要积累经验。",
    "options": [
      "周末的时候，企业家喜欢去机场调整计划。",
      "最近同事常常需要积累经验。",
      "经过分析，我们发现问题比想象中更加复杂。",
      "同事已经把合同条款带到图书馆了。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "如果计划没有变化，记者下午会在图书馆解决问题。",
    "meaning": "如果计划没有变化，记者下午会在图书馆解决问题。",
    "options": [
      "志愿者告诉我，他最近正在交换意见。",
      "同事正在检查技术文件，准备开始积累经验。",
      "经过分析，我们发现问题比想象中更加复杂。",
      "如果计划没有变化，记者下午会在图书馆解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "企业家已经把研究报告带到广州了。",
    "meaning": "企业家已经把研究报告带到广州了。",
    "options": [
      "昨天志愿者在博物馆完成研究，所以回家比较晚。",
      "我听说记者最近在大学负责改进方法。",
      "会议结束以后，企业家马上回到会议中心继续承担责任。",
      "企业家已经把研究报告带到广州了。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "志愿者正在检查市场信息，准备开始讨论方案。",
    "meaning": "志愿者正在检查市场信息，准备开始讨论方案。",
    "options": [
      "同事已经把技术文件带到机场了。",
      "志愿者正在检查市场信息，准备开始讨论方案。",
      "同事每天都要调查情况。",
      "志愿者已经把市场信息带到机场了。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "会议结束以后，同事马上回到城市中心继续分析数据。",
    "meaning": "会议结束以后，同事马上回到城市中心继续分析数据。",
    "options": [
      "昨天企业家在研究中心调整计划，所以回家比较晚。",
      "因为工作很忙，记者只能晚上解决问题。",
      "昨天企业家在北京承担责任，所以回家比较晚。",
      "会议结束以后，同事马上回到城市中心继续分析数据。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "我听说记者最近在大学负责改进方法。",
    "meaning": "我听说，记者最近在大学负责改进方法。",
    "options": [
      "昨天企业家在博物馆提高效率，所以回家比较晚。",
      "我听说记者最近在大学负责改进方法。",
      "同事正在检查技术文件，准备开始积累经验。",
      "今天同事在图书馆积累经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然时间不多，但是企业家还是完成了承担责任。",
    "meaning": "虽然时间不多，但是企业家还是完成了承担责任。",
    "options": [
      "如果计划没有变化，志愿者下午会在研究中心讨论方案。",
      "企业家希望明天可以继续提高效率。",
      "虽然时间不多，但是企业家还是完成了承担责任。",
      "周末的时候，企业家喜欢去广州承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "今天志愿者在上海交换意见。",
    "meaning": "今天，志愿者在上海交换意见。",
    "options": [
      "为了讨论方案，志愿者提前来到城市中心。",
      "企业家告诉我，他最近正在承担责任。",
      "今天志愿者在上海交换意见。",
      "为了准备明天的工作，同事今晚还要调查情况。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "同事每天都要调查情况。",
    "meaning": "同事每天都要调查情况。",
    "options": [
      "同事每天都要调查情况。",
      "周末的时候，企业家喜欢去广州承担责任。",
      "如果计划没有变化，企业家下午会在上海提高效率。",
      "因为工作很忙，志愿者只能晚上交换意见。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "今天律师在广州调整发展战略。",
    "meaning": "今天，律师在广州调整发展战略。",
    "options": [
      "律师每天都要调整发展战略。",
      "经过讨论，研究人员决定在实验室积累实践经验。",
      "面对新的挑战，企业需要重新考虑长期发展战略。",
      "今天律师在广州调整发展战略。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "学者每天都要完成调查研究。",
    "meaning": "学者每天都要完成调查研究。",
    "options": [
      "学者每天都要完成调查研究。",
      "最近企业家常常需要申请研究项目。",
      "学者觉得交换专业意见很重要。",
      "经过讨论，研究人员决定在实验室积累实践经验。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果有时间，研究人员会去国际机场积累实践经验。",
    "meaning": "如果有时间，研究人员会去国际机场积累实践经验。",
    "options": [
      "如果有时间，研究人员会去国际机场积累实践经验。",
      "律师正在国际机场承担重要责任。",
      "最近律师常常需要提高工作效率。",
      "研究人员已经把研究报告带到国际机场了。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "为了解决实际困难，企业家提前来到深圳。",
    "meaning": "为了解决实际困难，企业家提前来到深圳。",
    "options": [
      "虽然时间不多，但是企业家还是完成了申请研究项目。",
      "如果有时间，学者会去深圳比较不同方案。",
      "学者告诉我，他最近正在比较不同方案。",
      "为了解决实际困难，企业家提前来到深圳。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "律师正在企业总部提高工作效率。",
    "meaning": "律师正在企业总部提高工作效率。",
    "options": [
      "研究人员告诉我，他最近正在调查社会情况。",
      "律师正在检查合同条款，准备开始承担重要责任。",
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "律师正在企业总部提高工作效率。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "学者希望明天可以继续比较不同方案。",
    "meaning": "学者希望明天可以继续比较不同方案。",
    "options": [
      "学者每天都要完成调查研究。",
      "我听说学者最近在医院负责比较不同方案。",
      "今天企业家在会议中心解决实际困难。",
      "学者希望明天可以继续比较不同方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "昨天研究人员在研究中心深入分析问题，所以回家比较晚。",
    "meaning": "昨天，研究人员在研究中心深入分析问题，所以回家比较晚。",
    "options": [
      "昨天研究人员在研究中心深入分析问题，所以回家比较晚。",
      "学者希望明天可以继续比较不同方案。",
      "如果有时间，研究人员会去北京调查社会情况。",
      "这一政策可能对未来的发展产生深远影响。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "企业家告诉我，他最近正在改进管理方法。",
    "meaning": "企业家告诉我，他最近正在改进管理方法。",
    "options": [
      "企业家已经把政策文件带到会议中心了。",
      "律师每天都要调整发展战略。",
      "企业家告诉我，他最近正在改进管理方法。",
      "深入研究这一现象有助于我们理解社会的发展。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "因为工作很忙，律师只能晚上承担重要责任。",
    "meaning": "因为工作很忙，律师只能晚上承担重要责任。",
    "options": [
      "企业家正在医院解决实际困难。",
      "虽然时间不多，但是企业家还是完成了申请研究项目。",
      "因为工作很忙，律师只能晚上承担重要责任。",
      "企业家正在城市中心改进管理方法。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "周末的时候，学者喜欢去大学交换专业意见。",
    "meaning": "周末的时候，学者喜欢去大学交换专业意见。",
    "options": [
      "周末的时候，学者喜欢去大学交换专业意见。",
      "周末的时候，律师喜欢去企业总部提高工作效率。",
      "昨天研究人员在企业总部调查社会情况，所以回家比较晚。",
      "研究人员觉得深入分析问题很重要。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "研究人员觉得调查社会情况很重要。",
    "meaning": "研究人员觉得调查社会情况很重要。",
    "options": [
      "最近学者常常需要比较不同方案。",
      "为了准备明天的工作，律师今晚还要提高工作效率。",
      "研究人员觉得调查社会情况很重要。",
      "因为工作很忙，企业家只能晚上改进管理方法。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "经过讨论，企业家决定在上海申请研究项目。",
    "meaning": "经过讨论，企业家决定在上海申请研究项目。",
    "options": [
      "经过讨论，企业家决定在上海申请研究项目。",
      "如果有时间，学者会去城市中心完成调查研究。",
      "最近学者常常需要比较不同方案。",
      "因为工作很忙，律师只能晚上提高工作效率。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "为了准备明天的工作，律师今晚还要调整发展战略。",
    "meaning": "为了准备明天的工作，律师今晚还要调整发展战略。",
    "options": [
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "会议结束以后，学者马上回到会议中心继续交换专业意见。",
      "周末的时候，企业家喜欢去会议中心改进管理方法。",
      "为了深入分析问题，研究人员提前来到企业总部。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "最近学者常常需要完成调查研究。",
    "meaning": "最近，学者常常需要完成调查研究。",
    "options": [
      "最近学者常常需要完成调查研究。",
      "会议结束以后，学者马上回到深圳继续比较不同方案。",
      "学者每天都要比较不同方案。",
      "学者希望明天可以继续比较不同方案。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果计划没有变化，研究人员下午会在广州积累实践经验。",
    "meaning": "如果计划没有变化，研究人员下午会在广州积累实践经验。",
    "options": [
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "最近学者常常需要交换专业意见。",
      "如果计划没有变化，研究人员下午会在广州积累实践经验。",
      "研究人员已经把研究报告带到国际机场了。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "企业家已经把政策文件带到会议中心了。",
    "meaning": "企业家已经把政策文件带到会议中心了。",
    "options": [
      "企业家已经把政策文件带到会议中心了。",
      "律师每天都要调整发展战略。",
      "企业家正在检查发展计划，准备开始申请研究项目。",
      "会议结束以后，律师马上回到研究中心继续提高工作效率。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "律师正在检查技术资料，准备开始提高工作效率。",
    "meaning": "律师正在检查技术资料，准备开始提高工作效率。",
    "options": [
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "律师正在检查技术资料，准备开始提高工作效率。",
      "律师每天都要调整发展战略。",
      "经过讨论，研究人员决定在广州调查社会情况。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "会议结束以后，学者马上回到深圳继续比较不同方案。",
    "meaning": "会议结束以后，学者马上回到深圳继续比较不同方案。",
    "options": [
      "会议结束以后，学者马上回到深圳继续比较不同方案。",
      "为了准备明天的工作，研究人员今晚还要调查社会情况。",
      "因为工作很忙，企业家只能晚上申请研究项目。",
      "因为工作很忙，律师只能晚上调整发展战略。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "我听说研究人员最近在企业总部负责深入分析问题。",
    "meaning": "我听说，研究人员最近在企业总部负责深入分析问题。",
    "options": [
      "如果有时间，学者会去深圳比较不同方案。",
      "学者希望明天可以继续完成调查研究。",
      "我听说研究人员最近在企业总部负责深入分析问题。",
      "企业家告诉我，他最近正在申请研究项目。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "虽然时间不多，但是企业家还是完成了改进管理方法。",
    "meaning": "虽然时间不多，但是企业家还是完成了改进管理方法。",
    "options": [
      "企业家已经把发展计划带到医院了。",
      "虽然时间不多，但是企业家还是完成了改进管理方法。",
      "因为工作很忙，企业家只能晚上解决实际困难。",
      "研究人员告诉我，他最近正在深入分析问题。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "今天律师在研究中心承担重要责任。",
    "meaning": "今天，律师在研究中心承担重要责任。",
    "options": [
      "今天律师在研究中心承担重要责任。",
      "我听说学者最近在医院负责比较不同方案。",
      "会议结束以后，企业家马上回到大学继续解决实际困难。",
      "如果计划没有变化，学者下午会在大学交换专业意见。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "学者每天都要交换专业意见。",
    "meaning": "学者每天都要交换专业意见。",
    "options": [
      "最近律师常常需要提高工作效率。",
      "学者每天都要交换专业意见。",
      "虽然时间不多，但是企业家还是完成了改进管理方法。",
      "今天律师在实验室提高工作效率。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "如果有时间，研究人员会去北京调查社会情况。",
    "meaning": "如果有时间，研究人员会去北京调查社会情况。",
    "options": [
      "因为工作很忙，律师只能晚上承担重要责任。",
      "为了改进管理方法，企业家提前来到会议中心。",
      "如果有时间，研究人员会去北京调查社会情况。",
      "学者希望明天可以继续比较不同方案。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "为了申请研究项目，企业家提前来到大学。",
    "meaning": "为了申请研究项目，企业家提前来到大学。",
    "options": [
      "如果有时间，学者会去城市中心完成调查研究。",
      "研究人员觉得调查社会情况很重要。",
      "为了申请研究项目，企业家提前来到大学。",
      "因为工作很忙，律师只能晚上提高工作效率。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "律师正在博物馆调整发展战略。",
    "meaning": "律师正在博物馆调整发展战略。",
    "options": [
      "为了准备明天的工作，律师今晚还要承担重要责任。",
      "如果计划没有变化，学者下午会在大学交换专业意见。",
      "企业家正在图书馆申请研究项目。",
      "律师正在博物馆调整发展战略。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "学者希望明天可以继续完成调查研究。",
    "meaning": "学者希望明天可以继续完成调查研究。",
    "options": [
      "学者希望明天可以继续完成调查研究。",
      "企业家告诉我，他最近正在改进管理方法。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "昨天研究人员在企业总部调查社会情况，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
    "meaning": "昨天，研究人员在实验室积累实践经验，所以回家比较晚。",
    "options": [
      "会议结束以后，律师马上回到企业总部继续承担重要责任。",
      "今天研究人员在实验室深入分析问题。",
      "虽然时间不多，但是研究人员还是完成了深入分析问题。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "企业家告诉我，他最近正在解决实际困难。",
    "meaning": "企业家告诉我，他最近正在解决实际困难。",
    "options": [
      "如果计划没有变化，研究人员下午会在广州积累实践经验。",
      "企业家告诉我，他最近正在解决实际困难。",
      "经过讨论，企业家决定在大学解决实际困难。",
      "最近律师常常需要提高工作效率。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "因为工作很忙，律师只能晚上提高工作效率。",
    "meaning": "因为工作很忙，律师只能晚上提高工作效率。",
    "options": [
      "企业家正在图书馆申请研究项目。",
      "为了深入分析问题，研究人员提前来到企业总部。",
      "因为工作很忙，律师只能晚上提高工作效率。",
      "最近律师常常需要提高工作效率。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "周末的时候，学者喜欢去会议中心比较不同方案。",
    "meaning": "周末的时候，学者喜欢去会议中心比较不同方案。",
    "options": [
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "我听说研究人员最近在企业总部负责深入分析问题。",
      "虽然时间不多，但是研究人员还是完成了深入分析问题。",
      "周末的时候，学者喜欢去会议中心比较不同方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "研究人员觉得深入分析问题很重要。",
    "meaning": "研究人员觉得深入分析问题很重要。",
    "options": [
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "我听说学者最近在城市中心负责交换专业意见。",
      "为了解决实际困难，企业家提前来到深圳。",
      "研究人员觉得深入分析问题很重要。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "经过讨论，企业家决定在深圳改进管理方法。",
    "meaning": "经过讨论，企业家决定在深圳改进管理方法。",
    "options": [
      "周末的时候，律师喜欢去实验室承担重要责任。",
      "律师正在企业总部提高工作效率。",
      "经过讨论，企业家决定在深圳改进管理方法。",
      "如果有时间，学者会去深圳比较不同方案。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "为了准备明天的工作，律师今晚还要承担重要责任。",
    "meaning": "为了准备明天的工作，律师今晚还要承担重要责任。",
    "options": [
      "如果计划没有变化，研究人员下午会在广州积累实践经验。",
      "为了准备明天的工作，律师今晚还要承担重要责任。",
      "为了积累实践经验，研究人员提前来到研究中心。",
      "企业家正在上海解决实际困难。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "最近学者常常需要交换专业意见。",
    "meaning": "最近，学者常常需要交换专业意见。",
    "options": [
      "最近学者常常需要交换专业意见。",
      "周末的时候，律师喜欢去博物馆调整发展战略。",
      "研究人员正在检查会议记录，准备开始积累实践经验。",
      "研究人员觉得调查社会情况很重要。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
    "meaning": "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
    "options": [
      "学者觉得完成调查研究很重要。",
      "律师每天都要承担重要责任。",
      "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "企业家已经把发展计划带到医院了。",
    "meaning": "企业家已经把发展计划带到医院了。",
    "options": [
      "虽然时间不多，但是企业家还是完成了改进管理方法。",
      "为了改进管理方法，企业家提前来到会议中心。",
      "企业家正在检查发展计划，准备开始申请研究项目。",
      "企业家已经把发展计划带到医院了。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "律师正在检查新闻报道，准备开始调整发展战略。",
    "meaning": "律师正在检查新闻报道，准备开始调整发展战略。",
    "options": [
      "企业家正在上海解决实际困难。",
      "律师正在检查新闻报道，准备开始调整发展战略。",
      "研究人员告诉我，他最近正在深入分析问题。",
      "律师正在博物馆调整发展战略。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "会议结束以后，学者马上回到大学继续完成调查研究。",
    "meaning": "会议结束以后，学者马上回到大学继续完成调查研究。",
    "options": [
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "最近学者常常需要比较不同方案。",
      "会议结束以后，学者马上回到大学继续完成调查研究。",
      "经过讨论，企业家决定在大学解决实际困难。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "我听说研究人员最近在博物馆负责积累实践经验。",
    "meaning": "我听说，研究人员最近在博物馆负责积累实践经验。",
    "options": [
      "企业家告诉我，他最近正在申请研究项目。",
      "如果有时间，学者会去上海交换专业意见。",
      "我听说研究人员最近在博物馆负责积累实践经验。",
      "今天研究人员在实验室深入分析问题。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "虽然时间不多，但是企业家还是完成了解决实际困难。",
    "meaning": "虽然时间不多，但是企业家还是完成了解决实际困难。",
    "options": [
      "因为工作很忙，律师只能晚上提高工作效率。",
      "虽然时间不多，但是企业家还是完成了解决实际困难。",
      "昨天学者在大学比较不同方案，所以回家比较晚。",
      "今天律师在广州调整发展战略。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "今天律师在实验室提高工作效率。",
    "meaning": "今天，律师在实验室提高工作效率。",
    "options": [
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "学者每天都要完成调查研究。",
      "今天律师在实验室提高工作效率。",
      "因为工作很忙，研究人员只能晚上深入分析问题。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "学者每天都要比较不同方案。",
    "meaning": "学者每天都要比较不同方案。",
    "options": [
      "会议结束以后，学者马上回到大学继续完成调查研究。",
      "因为工作很忙，企业家只能晚上改进管理方法。",
      "为了解决实际困难，企业家提前来到深圳。",
      "学者每天都要比较不同方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "如果有时间，研究人员会去广州深入分析问题。",
    "meaning": "如果有时间，研究人员会去广州深入分析问题。",
    "options": [
      "律师希望明天可以继续承担重要责任。",
      "会议结束以后，学者马上回到大学继续完成调查研究。",
      "研究人员已经把调查结果带到博物馆了。",
      "如果有时间，研究人员会去广州深入分析问题。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "为了改进管理方法，企业家提前来到会议中心。",
    "meaning": "为了改进管理方法，企业家提前来到会议中心。",
    "options": [
      "为了改进管理方法，企业家提前来到会议中心。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "深入研究这一现象有助于我们理解社会的发展。",
      "企业家已经把发展计划带到医院了。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "律师正在国际机场承担重要责任。",
    "meaning": "律师正在国际机场承担重要责任。",
    "options": [
      "律师正在国际机场承担重要责任。",
      "因为工作很忙，律师只能晚上承担重要责任。",
      "为了积累实践经验，研究人员提前来到博物馆。",
      "周末的时候，企业家喜欢去会议中心改进管理方法。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "学者希望明天可以继续交换专业意见。",
    "meaning": "学者希望明天可以继续交换专业意见。",
    "options": [
      "为了改进管理方法，企业家提前来到会议中心。",
      "最近律师常常需要提高工作效率。",
      "周末的时候，律师喜欢去实验室承担重要责任。",
      "学者希望明天可以继续交换专业意见。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "昨天研究人员在企业总部调查社会情况，所以回家比较晚。",
    "meaning": "昨天，研究人员在企业总部调查社会情况，所以回家比较晚。",
    "options": [
      "昨天研究人员在企业总部调查社会情况，所以回家比较晚。",
      "企业家正在城市中心改进管理方法。",
      "学者希望明天可以继续交换专业意见。",
      "为了准备明天的工作，律师今晚还要承担重要责任。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "企业家告诉我，他最近正在申请研究项目。",
    "meaning": "企业家告诉我，他最近正在申请研究项目。",
    "options": [
      "如果有时间，学者会去大学完成调查研究。",
      "企业家告诉我，他最近正在申请研究项目。",
      "经过讨论，研究人员决定在广州调查社会情况。",
      "我听说学者最近在城市中心负责交换专业意见。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "因为工作很忙，律师只能晚上调整发展战略。",
    "meaning": "因为工作很忙，律师只能晚上调整发展战略。",
    "options": [
      "虽然时间不多，但是研究人员还是完成了积累实践经验。",
      "因为工作很忙，律师只能晚上调整发展战略。",
      "研究人员已经把会议记录带到企业总部了。",
      "如果计划没有变化，学者下午会在会议中心比较不同方案。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "周末的时候，学者喜欢去医院完成调查研究。",
    "meaning": "周末的时候，学者喜欢去医院完成调查研究。",
    "options": [
      "因为工作很忙，律师只能晚上调整发展战略。",
      "周末的时候，学者喜欢去医院完成调查研究。",
      "如果有时间，学者会去大学完成调查研究。",
      "研究人员已经把会议记录带到企业总部了。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "研究人员觉得积累实践经验很重要。",
    "meaning": "研究人员觉得积累实践经验很重要。",
    "options": [
      "昨天学者在会议中心完成调查研究，所以回家比较晚。",
      "我听说律师最近在博物馆负责提高工作效率。",
      "律师正在检查技术资料，准备开始提高工作效率。",
      "研究人员觉得积累实践经验很重要。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "经过讨论，企业家决定在大学解决实际困难。",
    "meaning": "经过讨论，企业家决定在大学解决实际困难。",
    "options": [
      "经过讨论，企业家决定在大学解决实际困难。",
      "会议结束以后，学者马上回到大学继续完成调查研究。",
      "如果有时间，学者会去大学完成调查研究。",
      "今天律师在研究中心承担重要责任。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "为了准备明天的工作，律师今晚还要提高工作效率。",
    "meaning": "为了准备明天的工作，律师今晚还要提高工作效率。",
    "options": [
      "为了积累实践经验，研究人员提前来到博物馆。",
      "周末的时候，企业家喜欢去会议中心改进管理方法。",
      "为了准备明天的工作，律师今晚还要提高工作效率。",
      "虽然时间不多，但是企业家还是完成了改进管理方法。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "最近学者常常需要比较不同方案。",
    "meaning": "最近，学者常常需要比较不同方案。",
    "options": [
      "最近学者常常需要比较不同方案。",
      "我听说研究人员最近在国际机场负责调查社会情况。",
      "企业家已经把申请材料带到图书馆了。",
      "学者希望明天可以继续完成调查研究。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果计划没有变化，研究人员下午会在实验室深入分析问题。",
    "meaning": "如果计划没有变化，研究人员下午会在实验室深入分析问题。",
    "options": [
      "研究人员觉得调查社会情况很重要。",
      "为了改进管理方法，企业家提前来到会议中心。",
      "如果计划没有变化，研究人员下午会在实验室深入分析问题。",
      "企业家正在检查发展计划，准备开始申请研究项目。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "企业家已经把申请材料带到图书馆了。",
    "meaning": "企业家已经把申请材料带到图书馆了。",
    "options": [
      "因为工作很忙，研究人员只能晚上深入分析问题。",
      "企业家已经把申请材料带到图书馆了。",
      "研究人员觉得深入分析问题很重要。",
      "如果有时间，学者会去深圳比较不同方案。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "律师正在检查合同条款，准备开始承担重要责任。",
    "meaning": "律师正在检查合同条款，准备开始承担重要责任。",
    "options": [
      "律师正在检查合同条款，准备开始承担重要责任。",
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "为了调查社会情况，研究人员提前来到实验室。",
      "律师希望明天可以继续承担重要责任。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "会议结束以后，学者马上回到会议中心继续交换专业意见。",
    "meaning": "会议结束以后，学者马上回到会议中心继续交换专业意见。",
    "options": [
      "如果有时间，学者会去深圳比较不同方案。",
      "会议结束以后，学者马上回到会议中心继续交换专业意见。",
      "企业家正在检查发展计划，准备开始申请研究项目。",
      "昨天学者在大学比较不同方案，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "我听说研究人员最近在国际机场负责调查社会情况。",
    "meaning": "我听说，研究人员最近在国际机场负责调查社会情况。",
    "options": [
      "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
      "我听说研究人员最近在国际机场负责调查社会情况。",
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "因为工作很忙，企业家只能晚上改进管理方法。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "虽然时间不多，但是企业家还是完成了申请研究项目。",
    "meaning": "虽然时间不多，但是企业家还是完成了申请研究项目。",
    "options": [
      "如果计划没有变化，研究人员下午会在广州积累实践经验。",
      "最近企业家常常需要申请研究项目。",
      "最近律师常常需要承担重要责任。",
      "虽然时间不多，但是企业家还是完成了申请研究项目。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "今天律师在企业总部调整发展战略。",
    "meaning": "今天，律师在企业总部调整发展战略。",
    "options": [
      "我听说学者最近在图书馆负责完成调查研究。",
      "今天律师在企业总部调整发展战略。",
      "企业家正在城市中心改进管理方法。",
      "会议结束以后，律师马上回到研究中心继续提高工作效率。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "如果有时间，学者会去城市中心完成调查研究。",
    "meaning": "如果有时间，学者会去城市中心完成调查研究。",
    "options": [
      "周末的时候，律师喜欢去实验室承担重要责任。",
      "学者希望明天可以继续完成调查研究。",
      "最近学者常常需要完成调查研究。",
      "如果有时间，学者会去城市中心完成调查研究。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "为了积累实践经验，研究人员提前来到研究中心。",
    "meaning": "为了积累实践经验，研究人员提前来到研究中心。",
    "options": [
      "为了积累实践经验，研究人员提前来到博物馆。",
      "为了积累实践经验，研究人员提前来到研究中心。",
      "昨天学者在医院交换专业意见，所以回家比较晚。",
      "深入研究这一现象有助于我们理解社会的发展。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "企业家正在医院解决实际困难。",
    "meaning": "企业家正在医院解决实际困难。",
    "options": [
      "律师正在企业总部提高工作效率。",
      "经过讨论，企业家决定在上海申请研究项目。",
      "企业家正在医院解决实际困难。",
      "会议结束以后，学者马上回到大学继续完成调查研究。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "律师希望明天可以继续提高工作效率。",
    "meaning": "律师希望明天可以继续提高工作效率。",
    "options": [
      "虽然时间不多，但是企业家还是完成了申请研究项目。",
      "学者希望明天可以继续完成调查研究。",
      "因为工作很忙，律师只能晚上提高工作效率。",
      "律师希望明天可以继续提高工作效率。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "昨天学者在大学比较不同方案，所以回家比较晚。",
    "meaning": "昨天，学者在大学比较不同方案，所以回家比较晚。",
    "options": [
      "昨天研究人员在企业总部调查社会情况，所以回家比较晚。",
      "昨天学者在大学比较不同方案，所以回家比较晚。",
      "律师每天都要调整发展战略。",
      "为了积累实践经验，研究人员提前来到研究中心。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "研究人员告诉我，他最近正在深入分析问题。",
    "meaning": "研究人员告诉我，他最近正在深入分析问题。",
    "options": [
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "会议结束以后，律师马上回到企业总部继续承担重要责任。",
      "学者觉得比较不同方案很重要。",
      "研究人员告诉我，他最近正在深入分析问题。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "因为工作很忙，企业家只能晚上改进管理方法。",
    "meaning": "因为工作很忙，企业家只能晚上改进管理方法。",
    "options": [
      "虽然时间不多，但是企业家还是完成了申请研究项目。",
      "因为工作很忙，企业家只能晚上改进管理方法。",
      "昨天学者在大学比较不同方案，所以回家比较晚。",
      "因为工作很忙，律师只能晚上承担重要责任。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "周末的时候，律师喜欢去实验室承担重要责任。",
    "meaning": "周末的时候，律师喜欢去实验室承担重要责任。",
    "options": [
      "研究人员觉得调查社会情况很重要。",
      "今天律师在研究中心承担重要责任。",
      "周末的时候，律师喜欢去实验室承担重要责任。",
      "今天律师在企业总部调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "学者觉得交换专业意见很重要。",
    "meaning": "学者觉得交换专业意见很重要。",
    "options": [
      "最近律师常常需要承担重要责任。",
      "企业家正在城市中心改进管理方法。",
      "学者觉得交换专业意见很重要。",
      "会议结束以后，学者马上回到大学继续完成调查研究。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "经过讨论，研究人员决定在广州调查社会情况。",
    "meaning": "经过讨论，研究人员决定在广州调查社会情况。",
    "options": [
      "如果有时间，研究人员会去国际机场积累实践经验。",
      "经过讨论，研究人员决定在广州调查社会情况。",
      "我听说学者最近在图书馆负责完成调查研究。",
      "研究人员告诉我，他最近正在深入分析问题。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "为了准备明天的工作，企业家今晚还要申请研究项目。",
    "meaning": "为了准备明天的工作，企业家今晚还要申请研究项目。",
    "options": [
      "经过讨论，企业家决定在大学解决实际困难。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "企业家正在图书馆申请研究项目。",
      "为了准备明天的工作，企业家今晚还要申请研究项目。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "最近律师常常需要调整发展战略。",
    "meaning": "最近，律师常常需要调整发展战略。",
    "options": [
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "为了准备明天的工作，企业家今晚还要申请研究项目。",
      "最近律师常常需要调整发展战略。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "如果计划没有变化，学者下午会在深圳完成调查研究。",
    "meaning": "如果计划没有变化，学者下午会在深圳完成调查研究。",
    "options": [
      "律师希望明天可以继续调整发展战略。",
      "今天企业家在大学改进管理方法。",
      "如果计划没有变化，学者下午会在深圳完成调查研究。",
      "经过多方面的调查，研究人员得出了比较可靠的结论。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "研究人员已经把会议记录带到企业总部了。",
    "meaning": "研究人员已经把会议记录带到企业总部了。",
    "options": [
      "昨天律师在实验室提高工作效率，所以回家比较晚。",
      "今天律师在研究中心承担重要责任。",
      "研究人员已经把会议记录带到企业总部了。",
      "昨天学者在会议中心完成调查研究，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "企业家正在检查政策文件，准备开始解决实际困难。",
    "meaning": "企业家正在检查政策文件，准备开始解决实际困难。",
    "options": [
      "为了准备明天的工作，企业家今晚还要申请研究项目。",
      "虽然时间不多，但是研究人员还是完成了调查社会情况。",
      "我听说学者最近在图书馆负责完成调查研究。",
      "企业家正在检查政策文件，准备开始解决实际困难。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "会议结束以后，律师马上回到研究中心继续提高工作效率。",
    "meaning": "会议结束以后，律师马上回到研究中心继续提高工作效率。",
    "options": [
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "会议结束以后，学者马上回到会议中心继续交换专业意见。",
      "虽然时间不多，但是研究人员还是完成了调查社会情况。",
      "为了准备明天的工作，企业家今晚还要改进管理方法。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "我听说学者最近在医院负责比较不同方案。",
    "meaning": "我听说，学者最近在医院负责比较不同方案。",
    "options": [
      "企业家已经把申请材料带到图书馆了。",
      "昨天学者在会议中心完成调查研究，所以回家比较晚。",
      "如果计划没有变化，学者下午会在大学交换专业意见。",
      "我听说学者最近在医院负责比较不同方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "虽然时间不多，但是研究人员还是完成了深入分析问题。",
    "meaning": "虽然时间不多，但是研究人员还是完成了深入分析问题。",
    "options": [
      "律师每天都要承担重要责任。",
      "企业家每天都要改进管理方法。",
      "虽然时间不多，但是研究人员还是完成了深入分析问题。",
      "我听说学者最近在城市中心负责交换专业意见。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "今天企业家在大学改进管理方法。",
    "meaning": "今天，企业家在大学改进管理方法。",
    "options": [
      "研究人员告诉我，他最近正在调查社会情况。",
      "今天企业家在大学改进管理方法。",
      "研究人员已经把会议记录带到企业总部了。",
      "今天研究人员在实验室深入分析问题。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "律师每天都要承担重要责任。",
    "meaning": "律师每天都要承担重要责任。",
    "options": [
      "为了准备明天的工作，企业家今晚还要申请研究项目。",
      "虽然时间不多，但是企业家还是完成了改进管理方法。",
      "律师每天都要承担重要责任。",
      "虽然时间不多，但是研究人员还是完成了调查社会情况。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果有时间，学者会去上海交换专业意见。",
    "meaning": "如果有时间，学者会去上海交换专业意见。",
    "options": [
      "今天研究人员在实验室深入分析问题。",
      "周末的时候，学者喜欢去医院完成调查研究。",
      "如果有时间，学者会去上海交换专业意见。",
      "企业家正在检查申请材料，准备开始改进管理方法。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "为了调查社会情况，研究人员提前来到实验室。",
    "meaning": "为了调查社会情况，研究人员提前来到实验室。",
    "options": [
      "为了准备明天的工作，企业家今晚还要改进管理方法。",
      "虽然时间不多，但是研究人员还是完成了深入分析问题。",
      "经过讨论，学者决定在深圳交换专业意见。",
      "为了调查社会情况，研究人员提前来到实验室。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "企业家正在图书馆申请研究项目。",
    "meaning": "企业家正在图书馆申请研究项目。",
    "options": [
      "因为工作很忙，律师只能晚上承担重要责任。",
      "因为工作很忙，律师只能晚上调整发展战略。",
      "企业家正在图书馆申请研究项目。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "律师希望明天可以继续调整发展战略。",
    "meaning": "律师希望明天可以继续调整发展战略。",
    "options": [
      "昨天学者在大学比较不同方案，所以回家比较晚。",
      "最近学者常常需要完成调查研究。",
      "虽然时间不多，但是研究人员还是完成了调查社会情况。",
      "律师希望明天可以继续调整发展战略。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "昨天学者在会议中心完成调查研究，所以回家比较晚。",
    "meaning": "昨天，学者在会议中心完成调查研究，所以回家比较晚。",
    "options": [
      "如果有时间，研究人员会去北京调查社会情况。",
      "昨天学者在会议中心完成调查研究，所以回家比较晚。",
      "企业家告诉我，他最近正在改进管理方法。",
      "今天律师在实验室提高工作效率。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "研究人员告诉我，他最近正在积累实践经验。",
    "meaning": "研究人员告诉我，他最近正在积累实践经验。",
    "options": [
      "如果有时间，学者会去城市中心完成调查研究。",
      "学者希望明天可以继续比较不同方案。",
      "研究人员告诉我，他最近正在积累实践经验。",
      "我听说律师最近在博物馆负责提高工作效率。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "因为工作很忙，企业家只能晚上解决实际困难。",
    "meaning": "因为工作很忙，企业家只能晚上解决实际困难。",
    "options": [
      "研究人员已经把调查结果带到博物馆了。",
      "为了积累实践经验，研究人员提前来到博物馆。",
      "因为工作很忙，企业家只能晚上解决实际困难。",
      "研究人员告诉我，他最近正在调查社会情况。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "周末的时候，律师喜欢去企业总部提高工作效率。",
    "meaning": "周末的时候，律师喜欢去企业总部提高工作效率。",
    "options": [
      "我听说学者最近在图书馆负责完成调查研究。",
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "周末的时候，律师喜欢去博物馆调整发展战略。",
      "周末的时候，律师喜欢去企业总部提高工作效率。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "学者觉得比较不同方案很重要。",
    "meaning": "学者觉得比较不同方案很重要。",
    "options": [
      "律师希望明天可以继续调整发展战略。",
      "今天企业家在大学改进管理方法。",
      "学者觉得比较不同方案很重要。",
      "研究人员正在检查会议记录，准备开始积累实践经验。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "经过讨论，研究人员决定在研究中心深入分析问题。",
    "meaning": "经过讨论，研究人员决定在研究中心深入分析问题。",
    "options": [
      "经过讨论，研究人员决定在研究中心深入分析问题。",
      "如果有时间，研究人员会去广州深入分析问题。",
      "今天律师在企业总部调整发展战略。",
      "虽然时间不多，但是企业家还是完成了改进管理方法。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "为了准备明天的工作，企业家今晚还要改进管理方法。",
    "meaning": "为了准备明天的工作，企业家今晚还要改进管理方法。",
    "options": [
      "研究人员已经把调查结果带到博物馆了。",
      "为了准备明天的工作，企业家今晚还要改进管理方法。",
      "为了解决实际困难，企业家提前来到深圳。",
      "因为工作很忙，企业家只能晚上解决实际困难。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "最近律师常常需要承担重要责任。",
    "meaning": "最近，律师常常需要承担重要责任。",
    "options": [
      "虽然时间不多，但是学者还是完成了比较不同方案。",
      "最近律师常常需要承担重要责任。",
      "企业家正在医院解决实际困难。",
      "研究人员已经把会议记录带到企业总部了。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "如果计划没有变化，学者下午会在大学交换专业意见。",
    "meaning": "如果计划没有变化，学者下午会在大学交换专业意见。",
    "options": [
      "虽然时间不多，但是企业家还是完成了解决实际困难。",
      "如果计划没有变化，学者下午会在深圳完成调查研究。",
      "研究人员告诉我，他最近正在调查社会情况。",
      "如果计划没有变化，学者下午会在大学交换专业意见。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "研究人员已经把调查结果带到博物馆了。",
    "meaning": "研究人员已经把调查结果带到博物馆了。",
    "options": [
      "研究人员已经把调查结果带到博物馆了。",
      "经过讨论，学者决定在深圳交换专业意见。",
      "研究人员觉得调查社会情况很重要。",
      "律师正在企业总部提高工作效率。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "企业家正在检查发展计划，准备开始申请研究项目。",
    "meaning": "企业家正在检查发展计划，准备开始申请研究项目。",
    "options": [
      "我听说律师最近在博物馆负责提高工作效率。",
      "为了准备明天的工作，企业家今晚还要改进管理方法。",
      "周末的时候，律师喜欢去企业总部提高工作效率。",
      "企业家正在检查发展计划，准备开始申请研究项目。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "会议结束以后，律师马上回到实验室继续调整发展战略。",
    "meaning": "会议结束以后，律师马上回到实验室继续调整发展战略。",
    "options": [
      "企业家告诉我，他最近正在改进管理方法。",
      "会议结束以后，律师马上回到实验室继续调整发展战略。",
      "企业家已经把政策文件带到会议中心了。",
      "学者每天都要完成调查研究。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "我听说学者最近在图书馆负责完成调查研究。",
    "meaning": "我听说，学者最近在图书馆负责完成调查研究。",
    "options": [
      "因为工作很忙，研究人员只能晚上深入分析问题。",
      "我听说学者最近在图书馆负责完成调查研究。",
      "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
      "律师正在检查技术资料，准备开始提高工作效率。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "虽然时间不多，但是研究人员还是完成了积累实践经验。",
    "meaning": "虽然时间不多，但是研究人员还是完成了积累实践经验。",
    "options": [
      "周末的时候，学者喜欢去会议中心比较不同方案。",
      "学者每天都要比较不同方案。",
      "企业家已经把发展计划带到医院了。",
      "虽然时间不多，但是研究人员还是完成了积累实践经验。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "今天企业家在会议中心解决实际困难。",
    "meaning": "今天，企业家在会议中心解决实际困难。",
    "options": [
      "今天企业家在会议中心解决实际困难。",
      "会议结束以后，学者马上回到大学继续完成调查研究。",
      "学者觉得交换专业意见很重要。",
      "如果计划没有变化，学者下午会在深圳完成调查研究。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "律师每天都要提高工作效率。",
    "meaning": "律师每天都要提高工作效率。",
    "options": [
      "经过讨论，企业家决定在大学解决实际困难。",
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "律师每天都要提高工作效率。",
      "如果计划没有变化，研究人员下午会在广州积累实践经验。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果有时间，学者会去深圳比较不同方案。",
    "meaning": "如果有时间，学者会去深圳比较不同方案。",
    "options": [
      "企业家正在检查发展计划，准备开始申请研究项目。",
      "如果有时间，学者会去深圳比较不同方案。",
      "学者每天都要完成调查研究。",
      "为了改进管理方法，企业家提前来到会议中心。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "为了深入分析问题，研究人员提前来到企业总部。",
    "meaning": "为了深入分析问题，研究人员提前来到企业总部。",
    "options": [
      "企业家正在检查政策文件，准备开始解决实际困难。",
      "如果有时间，研究人员会去广州深入分析问题。",
      "为了深入分析问题，研究人员提前来到企业总部。",
      "研究人员告诉我，他最近正在深入分析问题。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "企业家正在城市中心改进管理方法。",
    "meaning": "企业家正在城市中心改进管理方法。",
    "options": [
      "周末的时候，学者喜欢去会议中心比较不同方案。",
      "经过讨论，学者决定在深圳交换专业意见。",
      "今天企业家在会议中心解决实际困难。",
      "企业家正在城市中心改进管理方法。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "律师希望明天可以继续承担重要责任。",
    "meaning": "律师希望明天可以继续承担重要责任。",
    "options": [
      "最近律师常常需要提高工作效率。",
      "律师希望明天可以继续承担重要责任。",
      "经过讨论，研究人员决定在广州调查社会情况。",
      "周末的时候，企业家喜欢去会议中心改进管理方法。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "昨天学者在医院交换专业意见，所以回家比较晚。",
    "meaning": "昨天，学者在医院交换专业意见，所以回家比较晚。",
    "options": [
      "昨天学者在医院交换专业意见，所以回家比较晚。",
      "研究人员觉得调查社会情况很重要。",
      "企业家正在检查政策文件，准备开始解决实际困难。",
      "最近学者常常需要比较不同方案。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "研究人员告诉我，他最近正在调查社会情况。",
    "meaning": "研究人员告诉我，他最近正在调查社会情况。",
    "options": [
      "研究人员告诉我，他最近正在调查社会情况。",
      "会议结束以后，学者马上回到会议中心继续交换专业意见。",
      "周末的时候，企业家喜欢去会议中心改进管理方法。",
      "企业家告诉我，他最近正在改进管理方法。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "因为工作很忙，企业家只能晚上申请研究项目。",
    "meaning": "因为工作很忙，企业家只能晚上申请研究项目。",
    "options": [
      "因为工作很忙，企业家只能晚上申请研究项目。",
      "为了准备明天的工作，律师今晚还要承担重要责任。",
      "面对新的挑战，企业需要重新考虑长期发展战略。",
      "企业家正在医院解决实际困难。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "周末的时候，律师喜欢去博物馆调整发展战略。",
    "meaning": "周末的时候，律师喜欢去博物馆调整发展战略。",
    "options": [
      "最近学者常常需要比较不同方案。",
      "虽然时间不多，但是研究人员还是完成了深入分析问题。",
      "周末的时候，律师喜欢去博物馆调整发展战略。",
      "在复杂的环境下，我们必须保持清醒的判断。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "学者觉得完成调查研究很重要。",
    "meaning": "学者觉得完成调查研究很重要。",
    "options": [
      "如果计划没有变化，研究人员下午会在实验室深入分析问题。",
      "研究人员已经把调查结果带到博物馆了。",
      "学者觉得完成调查研究很重要。",
      "虽然时间不多，但是企业家还是完成了解决实际困难。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "经过讨论，研究人员决定在实验室积累实践经验。",
    "meaning": "经过讨论，研究人员决定在实验室积累实践经验。",
    "options": [
      "我听说研究人员最近在国际机场负责调查社会情况。",
      "经过讨论，研究人员决定在实验室积累实践经验。",
      "企业家正在检查发展计划，准备开始申请研究项目。",
      "经过讨论，研究人员决定在广州调查社会情况。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "为了准备明天的工作，企业家今晚还要解决实际困难。",
    "meaning": "为了准备明天的工作，企业家今晚还要解决实际困难。",
    "options": [
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "如果计划没有变化，学者下午会在深圳完成调查研究。",
      "如果计划没有变化，学者下午会在会议中心比较不同方案。",
      "为了准备明天的工作，企业家今晚还要解决实际困难。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "最近律师常常需要提高工作效率。",
    "meaning": "最近，律师常常需要提高工作效率。",
    "options": [
      "今天研究人员在实验室深入分析问题。",
      "最近律师常常需要提高工作效率。",
      "研究人员已经把会议记录带到企业总部了。",
      "会议结束以后，律师马上回到研究中心继续提高工作效率。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "如果计划没有变化，学者下午会在会议中心比较不同方案。",
    "meaning": "如果计划没有变化，学者下午会在会议中心比较不同方案。",
    "options": [
      "昨天律师在实验室提高工作效率，所以回家比较晚。",
      "如果计划没有变化，学者下午会在会议中心比较不同方案。",
      "我听说学者最近在医院负责比较不同方案。",
      "研究人员已经把会议记录带到企业总部了。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "研究人员已经把研究报告带到国际机场了。",
    "meaning": "研究人员已经把研究报告带到国际机场了。",
    "options": [
      "企业家正在医院解决实际困难。",
      "研究人员已经把研究报告带到国际机场了。",
      "如果计划没有变化，学者下午会在会议中心比较不同方案。",
      "虽然时间不多，但是企业家还是完成了改进管理方法。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "企业家正在检查申请材料，准备开始改进管理方法。",
    "meaning": "企业家正在检查申请材料，准备开始改进管理方法。",
    "options": [
      "企业家正在检查申请材料，准备开始改进管理方法。",
      "今天律师在研究中心承担重要责任。",
      "最近企业家常常需要申请研究项目。",
      "为了深入分析问题，研究人员提前来到企业总部。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "会议结束以后，律师马上回到企业总部继续承担重要责任。",
    "meaning": "会议结束以后，律师马上回到企业总部继续承担重要责任。",
    "options": [
      "企业家告诉我，他最近正在改进管理方法。",
      "律师每天都要承担重要责任。",
      "学者希望明天可以继续比较不同方案。",
      "会议结束以后，律师马上回到企业总部继续承担重要责任。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "我听说学者最近在城市中心负责交换专业意见。",
    "meaning": "我听说，学者最近在城市中心负责交换专业意见。",
    "options": [
      "在复杂的环境下，我们必须保持清醒的判断。",
      "学者希望明天可以继续完成调查研究。",
      "我听说学者最近在城市中心负责交换专业意见。",
      "如果计划没有变化，律师下午会在研究中心调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "虽然时间不多，但是研究人员还是完成了调查社会情况。",
    "meaning": "虽然时间不多，但是研究人员还是完成了调查社会情况。",
    "options": [
      "虽然时间不多，但是研究人员还是完成了调查社会情况。",
      "周末的时候，学者喜欢去医院完成调查研究。",
      "因为工作很忙，研究人员只能晚上深入分析问题。",
      "因为工作很忙，企业家只能晚上改进管理方法。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "今天企业家在医院申请研究项目。",
    "meaning": "今天，企业家在医院申请研究项目。",
    "options": [
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "虽然时间不多，但是研究人员还是完成了调查社会情况。",
      "今天企业家在医院申请研究项目。",
      "学者已经把统计数据带到医院了。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "律师每天都要调整发展战略。",
    "meaning": "律师每天都要调整发展战略。",
    "options": [
      "律师每天都要调整发展战略。",
      "因为工作很忙，企业家只能晚上解决实际困难。",
      "律师正在检查技术资料，准备开始提高工作效率。",
      "律师希望明天可以继续承担重要责任。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果有时间，学者会去大学完成调查研究。",
    "meaning": "如果有时间，学者会去大学完成调查研究。",
    "options": [
      "为了积累实践经验，研究人员提前来到研究中心。",
      "最近企业家常常需要申请研究项目。",
      "如果有时间，学者会去大学完成调查研究。",
      "周末的时候，学者喜欢去会议中心比较不同方案。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "为了积累实践经验，研究人员提前来到博物馆。",
    "meaning": "为了积累实践经验，研究人员提前来到博物馆。",
    "options": [
      "研究人员觉得深入分析问题很重要。",
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "为了积累实践经验，研究人员提前来到博物馆。",
      "会议结束以后，学者马上回到大学继续完成调查研究。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "企业家正在上海解决实际困难。",
    "meaning": "企业家正在上海解决实际困难。",
    "options": [
      "今天律师在广州调整发展战略。",
      "昨天研究人员在研究中心深入分析问题，所以回家比较晚。",
      "企业家正在上海解决实际困难。",
      "如果有时间，学者会去上海交换专业意见。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "昨天律师在实验室提高工作效率，所以回家比较晚。",
    "meaning": "昨天，律师在实验室提高工作效率，所以回家比较晚。",
    "options": [
      "会议结束以后，企业家马上回到大学继续解决实际困难。",
      "研究人员正在检查会议记录，准备开始积累实践经验。",
      "我听说研究人员最近在企业总部负责深入分析问题。",
      "昨天律师在实验室提高工作效率，所以回家比较晚。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "学者告诉我，他最近正在比较不同方案。",
    "meaning": "学者告诉我，他最近正在比较不同方案。",
    "options": [
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "企业家告诉我，他最近正在解决实际困难。",
      "最近学者常常需要比较不同方案。",
      "学者告诉我，他最近正在比较不同方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "因为工作很忙，研究人员只能晚上深入分析问题。",
    "meaning": "因为工作很忙，研究人员只能晚上深入分析问题。",
    "options": [
      "律师觉得承担重要责任很重要。",
      "为了申请研究项目，企业家提前来到大学。",
      "律师每天都要调整发展战略。",
      "因为工作很忙，研究人员只能晚上深入分析问题。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "周末的时候，企业家喜欢去会议中心改进管理方法。",
    "meaning": "周末的时候，企业家喜欢去会议中心改进管理方法。",
    "options": [
      "会议结束以后，律师马上回到实验室继续调整发展战略。",
      "面对新的挑战，企业需要重新考虑长期发展战略。",
      "经过讨论，研究人员决定在研究中心深入分析问题。",
      "周末的时候，企业家喜欢去会议中心改进管理方法。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "律师觉得承担重要责任很重要。",
    "meaning": "律师觉得承担重要责任很重要。",
    "options": [
      "律师正在企业总部提高工作效率。",
      "今天律师在实验室提高工作效率。",
      "周末的时候，律师喜欢去实验室承担重要责任。",
      "律师觉得承担重要责任很重要。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "经过讨论，学者决定在深圳交换专业意见。",
    "meaning": "经过讨论，学者决定在深圳交换专业意见。",
    "options": [
      "周末的时候，律师喜欢去博物馆调整发展战略。",
      "研究人员觉得积累实践经验很重要。",
      "企业家每天都要改进管理方法。",
      "经过讨论，学者决定在深圳交换专业意见。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "为了准备明天的工作，研究人员今晚还要调查社会情况。",
    "meaning": "为了准备明天的工作，研究人员今晚还要调查社会情况。",
    "options": [
      "企业家正在检查政策文件，准备开始解决实际困难。",
      "为了准备明天的工作，研究人员今晚还要调查社会情况。",
      "面对新的挑战，企业需要重新考虑长期发展战略。",
      "律师正在检查新闻报道，准备开始调整发展战略。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "最近企业家常常需要申请研究项目。",
    "meaning": "最近，企业家常常需要申请研究项目。",
    "options": [
      "我听说研究人员最近在国际机场负责调查社会情况。",
      "虽然时间不多，但是研究人员还是完成了积累实践经验。",
      "最近企业家常常需要申请研究项目。",
      "会议结束以后，学者马上回到会议中心继续交换专业意见。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果计划没有变化，律师下午会在研究中心调整发展战略。",
    "meaning": "如果计划没有变化，律师下午会在研究中心调整发展战略。",
    "options": [
      "经过讨论，企业家决定在大学解决实际困难。",
      "企业家正在检查申请材料，准备开始改进管理方法。",
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "周末的时候，律师喜欢去博物馆调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "学者已经把统计数据带到医院了。",
    "meaning": "学者已经把统计数据带到医院了。",
    "options": [
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "昨天律师在实验室提高工作效率，所以回家比较晚。",
      "学者已经把统计数据带到医院了。",
      "为了准备明天的工作，企业家今晚还要申请研究项目。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "研究人员正在检查会议记录，准备开始积累实践经验。",
    "meaning": "研究人员正在检查会议记录，准备开始积累实践经验。",
    "options": [
      "今天研究人员在实验室深入分析问题。",
      "律师正在检查技术资料，准备开始提高工作效率。",
      "研究人员正在检查会议记录，准备开始积累实践经验。",
      "这一政策可能对未来的发展产生深远影响。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "会议结束以后，企业家马上回到大学继续解决实际困难。",
    "meaning": "会议结束以后，企业家马上回到大学继续解决实际困难。",
    "options": [
      "最近学者常常需要比较不同方案。",
      "我听说学者最近在医院负责比较不同方案。",
      "会议结束以后，企业家马上回到大学继续解决实际困难。",
      "企业家正在检查政策文件，准备开始解决实际困难。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "我听说律师最近在博物馆负责提高工作效率。",
    "meaning": "我听说，律师最近在博物馆负责提高工作效率。",
    "options": [
      "今天企业家在大学改进管理方法。",
      "如果计划没有变化，学者下午会在大学交换专业意见。",
      "周末的时候，律师喜欢去实验室承担重要责任。",
      "我听说律师最近在博物馆负责提高工作效率。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "虽然时间不多，但是学者还是完成了比较不同方案。",
    "meaning": "虽然时间不多，但是学者还是完成了比较不同方案。",
    "options": [
      "学者觉得交换专业意见很重要。",
      "为了深入分析问题，研究人员提前来到企业总部。",
      "企业家告诉我，他最近正在解决实际困难。",
      "虽然时间不多，但是学者还是完成了比较不同方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "今天研究人员在实验室深入分析问题。",
    "meaning": "今天，研究人员在实验室深入分析问题。",
    "options": [
      "最近学者常常需要完成调查研究。",
      "今天研究人员在实验室深入分析问题。",
      "我听说研究人员最近在企业总部负责深入分析问题。",
      "因为工作很忙，企业家只能晚上申请研究项目。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "企业家每天都要改进管理方法。",
    "meaning": "企业家每天都要改进管理方法。",
    "options": [
      "企业家每天都要改进管理方法。",
      "研究人员已经把研究报告带到国际机场了。",
      "学者已经把统计数据带到医院了。",
      "学者每天都要比较不同方案。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我叫王芳。",
    "pinyin": "Wǒ jiào Wáng Fāng.",
    "meaning": "Mình tên là Vương Phương.",
    "options": [
      "朋友每天都要看书。",
      "学生正在商店回家。",
      "再见。",
      "我叫王芳。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你今年几岁？",
    "pinyin": "Nǐ jīnnián jǐ suì?",
    "meaning": "Năm nay bạn bao nhiêu tuổi?",
    "options": [
      "虽然时间不多，但是老师还是完成了吃饭。",
      "你今年几岁？",
      "经过讨论，老师决定在中国看书。",
      "今天星期五。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我今年二十岁。",
    "pinyin": "Wǒ jīnnián èrshí suì.",
    "meaning": "Năm nay tôi hai mươi tuổi.",
    "options": [
      "你几点起床？",
      "我今年二十岁。",
      "明天见。",
      "为了买东西，我提前来到中国。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "你从哪里来？",
    "pinyin": "Nǐ cóng nǎlǐ lái?",
    "meaning": "Bạn đến từ đâu?",
    "options": [
      "请进。",
      "为了买东西，医生提前来到中国。",
      "你叫什么？",
      "你从哪里来？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我从越南来。",
    "pinyin": "Wǒ cóng Yuènán lái.",
    "meaning": "Tôi đến từ Việt Nam.",
    "options": [
      "我想吃面条。",
      "经过讨论，哥哥决定在中国看书。",
      "经理觉得喝水很重要。",
      "我从越南来。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我喜欢喝茶。",
    "pinyin": "Wǒ xǐhuan hē chá.",
    "meaning": "Tôi thích uống trà.",
    "options": [
      "你想吃什么？",
      "我喜欢喝茶。",
      "朋友已经把手机带到中国了。",
      "经过讨论，老师决定在中国看书。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我不喜欢喝咖啡。",
    "pinyin": "Wǒ bù xǐhuan hē kāfēi.",
    "meaning": "Tôi không thích uống cà phê.",
    "options": [
      "我不知道。",
      "左边有一家银行。",
      "你想吃什么？",
      "我不喜欢喝咖啡。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我想吃米饭。",
    "pinyin": "Wǒ xiǎng chī mǐfàn.",
    "meaning": "Tôi muốn ăn cơm.",
    "options": [
      "左边有一家银行。",
      "我想吃米饭。",
      "如果有时间，同学会去商店听音乐。",
      "经过讨论，我决定在中国看书。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "现在三点。",
    "pinyin": "Xiànzài sān diǎn.",
    "meaning": "Bây giờ là ba giờ.",
    "options": [
      "虽然时间不多，但是他还是完成了吃饭。",
      "现在三点。",
      "经理正在商店回家。",
      "我只是看看。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "今天星期五。",
    "pinyin": "Jīntiān xīngqīwǔ.",
    "meaning": "Hôm nay là thứ sáu.",
    "options": [
      "今天星期五。",
      "为了买东西，哥哥提前来到中国。",
      "虽然时间不多，但是老师还是完成了吃饭。",
      "这个太小了。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "天气很好。",
    "pinyin": "Tiānqì hěn hǎo.",
    "meaning": "Thời tiết rất đẹp.",
    "options": [
      "我今天不太忙。",
      "我坐公交车去学校。",
      "如果有时间，她会去商店听音乐。",
      "天气很好。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我喜欢听音乐。",
    "pinyin": "Wǒ xǐhuan tīng yīnyuè.",
    "meaning": "Tôi thích nghe nhạc.",
    "options": [
      "我马上回来。",
      "我喜欢听音乐。",
      "地铁站在哪里？",
      "这个字是什么意思？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "她喜欢看书。",
    "pinyin": "Tā xǐhuan kàn shū.",
    "meaning": "Cô ấy thích đọc sách.",
    "options": [
      "再见。",
      "他在学校学习。",
      "他已经把手机带到中国了。",
      "她喜欢看书。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "他在学校学习。",
    "pinyin": "Tā zài xuéxiào xuéxí.",
    "meaning": "Anh ấy học ở trường.",
    "options": [
      "同学觉得喝水很重要。",
      "他在学校学习。",
      "如果计划没有变化，姐姐下午会在商店回家。",
      "请再说一遍。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我每天坐公交车上班。",
    "pinyin": "Wǒ měitiān zuò gōngjiāochē shàngbān.",
    "meaning": "Mỗi ngày tôi đi làm bằng xe buýt.",
    "options": [
      "我买两杯咖啡。",
      "请往前走。",
      "我每天坐公交车上班。",
      "朋友希望明天可以继续睡觉。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我昨天去了超市。",
    "pinyin": "Wǒ zuótiān qù le chāoshì.",
    "meaning": "Hôm qua tôi đã đi siêu thị.",
    "options": [
      "我的朋友正在机场坐地铁。",
      "我昨天去了超市。",
      "路上小心。",
      "这个问题很重要。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "明天我们一起去公园吧。",
    "pinyin": "Míngtiān wǒmen yìqǐ qù gōngyuán ba.",
    "meaning": "Ngày mai chúng ta cùng đi công viên nhé.",
    "options": [
      "我需要再练习。",
      "加油，你可以的。",
      "我准备好了。",
      "明天我们一起去公园吧。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你昨天几点回家？",
    "pinyin": "Nǐ zuótiān jǐ diǎn huí jiā?",
    "meaning": "Hôm qua bạn mấy giờ về nhà?",
    "options": [
      "今天早点睡吧。",
      "你昨天几点回家？",
      "你家有几个人？",
      "妈妈告诉我，他最近正在工作。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我晚上九点回家。",
    "pinyin": "Wǒ wǎnshang jiǔ diǎn huí jiā.",
    "meaning": "Tôi về nhà lúc chín giờ tối.",
    "options": [
      "我晚上九点回家。",
      "加油，你可以的。",
      "我和朋友住在一起。",
      "小心，地上很滑。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这件衣服多少钱？",
    "pinyin": "Zhè jiàn yīfu duōshao qián?",
    "meaning": "Bộ quần áo này bao nhiêu tiền?",
    "options": [
      "到了给我发消息。",
      "这件衣服多少钱？",
      "今天老师在学校旅行。",
      "哥哥正在学校买东西。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这本书很有意思。",
    "pinyin": "Zhè běn shū hěn yǒu yìsi.",
    "meaning": "Cuốn sách này rất thú vị.",
    "options": [
      "这本书很有意思。",
      "请关一下门。",
      "我喜欢听中文歌。",
      "经过讨论，妈妈决定在超市工作。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我已经吃过午饭了。",
    "pinyin": "Wǒ yǐjīng chīguo wǔfàn le.",
    "meaning": "Tôi đã ăn trưa rồi.",
    "options": [
      "为了做作业，同事提前来到餐厅。",
      "我已经吃过午饭了。",
      "同事希望明天可以继续听音乐。",
      "她每天都要听音乐。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你可以帮我一下吗？",
    "pinyin": "Nǐ kěyǐ bāng wǒ yíxià ma?",
    "meaning": "Bạn có thể giúp tôi một chút không?",
    "options": [
      "你吃午饭了吗？",
      "我明白了。",
      "经过讨论，同事决定在机场打电话。",
      "你可以帮我一下吗？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "请把门关上。",
    "pinyin": "Qǐng bǎ mén guān shàng.",
    "meaning": "Hãy đóng cửa lại.",
    "options": [
      "哥哥觉得看电影很重要。",
      "请把门关上。",
      "我一会儿给你打电话。",
      "同事每天都要运动。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我正在做作业。",
    "pinyin": "Wǒ zhèngzài zuò zuòyè.",
    "meaning": "Tôi đang làm bài tập.",
    "options": [
      "我正在做作业。",
      "她每天都要听音乐。",
      "我听说我的朋友最近在上海负责看电影。",
      "因为工作很忙，他只能晚上买东西。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "他比我高一点。",
    "pinyin": "Tā bǐ wǒ gāo yìdiǎn.",
    "meaning": "Anh ấy cao hơn tôi một chút.",
    "options": [
      "如果计划没有变化，孩子下午会在北京看电影。",
      "我的同学每天都要听音乐。",
      "她希望明天可以继续准备考试。",
      "他比我高一点。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我们坐出租车去车站。",
    "pinyin": "Wǒmen zuò chūzūchē qù chēzhàn.",
    "meaning": "Chúng tôi đi taxi đến nhà ga.",
    "options": [
      "我周末喜欢看电影。",
      "为了做作业，同事提前来到餐厅。",
      "我们坐出租车去车站。",
      "我需要休息一下。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我想换一个房间。",
    "pinyin": "Wǒ xiǎng huàn yí ge fángjiān.",
    "meaning": "Tôi muốn đổi một phòng khác.",
    "options": [
      "请把门关上。",
      "我们下午再联系。",
      "我想换一个房间。",
      "这个词是什么意思？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你周末有时间吗？",
    "pinyin": "Nǐ zhōumò yǒu shíjiān ma?",
    "meaning": "Cuối tuần bạn có thời gian không?",
    "options": [
      "你周末有时间吗？",
      "我的同学每天都要听音乐。",
      "我的中文进步了一点。",
      "你已经把报纸带到商店了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我周末通常在家休息。",
    "pinyin": "Wǒ zhōumò tōngcháng zài jiā xiūxi.",
    "meaning": "Cuối tuần tôi thường nghỉ ở nhà.",
    "options": [
      "如果有时间，我会去机场学习汉语。",
      "同事每天都要运动。",
      "如果计划没有变化，我下午会在图书馆看电影。",
      "我周末通常在家休息。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这家饭店的菜很好吃。",
    "pinyin": "Zhè jiā fàndiàn de cài hěn hǎochī.",
    "meaning": "Món ăn của nhà hàng này rất ngon.",
    "options": [
      "你喜欢什么运动？",
      "这家饭店的菜很好吃。",
      "妈妈希望明天可以继续运动。",
      "我们坐出租车去车站。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我每天早上跑步。",
    "pinyin": "Wǒ měitiān zǎoshang pǎobù.",
    "meaning": "Mỗi sáng tôi đều chạy bộ.",
    "options": [
      "我每天早上跑步。",
      "请你说慢一点。",
      "今天很热。",
      "你准备好了吗？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经预订好了酒店。",
    "pinyin": "Wǒ yǐjīng yùdìng hǎo le jiǔdiàn.",
    "meaning": "Tôi đã đặt khách sạn xong rồi.",
    "options": [
      "我听说哥哥最近在家里负责解决问题。",
      "会议结束以后，哥哥马上回到医院继续解决问题。",
      "老师希望明天可以继续准备考试。",
      "我已经预订好了酒店。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请告诉我详细的地址。",
    "pinyin": "Qǐng gàosu wǒ xiángxì de dìzhǐ.",
    "meaning": "Hãy cho tôi biết địa chỉ cụ thể.",
    "options": [
      "你平时跟谁练习中文？",
      "除了中文，我还学习英语。",
      "请告诉我详细的地址。",
      "昨天老师在北京买东西，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们需要提前准备材料。",
    "pinyin": "Wǒmen xūyào tíqián zhǔnbèi cáiliào.",
    "meaning": "Chúng ta cần chuẩn bị tài liệu trước.",
    "options": [
      "昨天老师在北京买东西，所以回家比较晚。",
      "经理正在检查地图，准备开始联系朋友。",
      "我们需要提前准备材料。",
      "哥哥觉得解决问题很重要。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "这个决定对大家都很重要。",
    "pinyin": "Zhège juédìng duì dàjiā dōu hěn zhòngyào.",
    "meaning": "Quyết định này rất quan trọng đối với mọi người.",
    "options": [
      "如果有时间，哥哥会去超市参加会议。",
      "准备好就开始吧。",
      "请问需要多长时间？",
      "这个决定对大家都很重要。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我希望你能理解我的意思。",
    "pinyin": "Wǒ xīwàng nǐ néng lǐjiě wǒ de yìsi.",
    "meaning": "Tôi hy vọng bạn có thể hiểu ý của tôi.",
    "options": [
      "这个问题需要时间。",
      "我希望你能理解我的意思。",
      "别想太多。",
      "经理觉得计划旅行很重要。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "请按照说明完成这项工作。",
    "pinyin": "Qǐng ànzhào shuōmíng wánchéng zhè xiàng gōngzuò.",
    "meaning": "Hãy hoàn thành công việc này theo hướng dẫn.",
    "options": [
      "最近我常常需要打扫房间。",
      "今天经理在图书馆计划旅行。",
      "请按照说明完成这项工作。",
      "除了中文，我还学习英语。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就改天再去。",
    "pinyin": "Rúguǒ míngtiān xiàyǔ, wǒmen jiù gǎitiān zài qù.",
    "meaning": "Nếu ngày mai mưa thì chúng ta sẽ đi vào hôm khác.",
    "options": [
      "哥哥希望明天可以继续参加会议。",
      "我想买一张火车票。",
      "我正在车站学习汉语。",
      "如果明天下雨，我们就改天再去。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "他正在准备考试，所以很忙。",
    "pinyin": "Tā zhèngzài zhǔnbèi kǎoshì, suǒyǐ hěn máng.",
    "meaning": "Anh ấy đang chuẩn bị thi nên rất bận.",
    "options": [
      "经理正在公司联系朋友。",
      "他正在准备考试，所以很忙。",
      "这个音怎么发？",
      "我每天都要打扫房间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "这件事情没有你想象的那么复杂。",
    "pinyin": "Zhè jiàn shìqing méiyǒu nǐ xiǎngxiàng de nàme fùzá.",
    "meaning": "Chuyện này không phức tạp như bạn tưởng.",
    "options": [
      "虽然时间不多，但是哥哥还是完成了参加会议。",
      "我的房间在哪里？",
      "这件事情没有你想象的那么复杂。",
      "我已经把机票带到家里了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们应该先解决最重要的问题。",
    "pinyin": "Wǒmen yīnggāi xiān jiějué zuì zhòngyào de wèntí.",
    "meaning": "Chúng ta nên giải quyết vấn đề quan trọng nhất trước.",
    "options": [
      "哥哥希望明天可以继续完成作业。",
      "我们应该先解决最重要的问题。",
      "请提前十分钟到。",
      "我马上处理。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我已经把资料发给你了。",
    "pinyin": "Wǒ yǐjīng bǎ zīliào fā gěi nǐ le.",
    "meaning": "Tôi đã gửi tài liệu cho bạn rồi.",
    "options": [
      "我已经预订好了酒店。",
      "经理告诉我，他最近正在联系朋友。",
      "我已经把资料发给你了。",
      "开始的时候有一点难。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "你对这个计划有什么建议？",
    "pinyin": "Nǐ duì zhège jìhuà yǒu shénme jiànyì?",
    "meaning": "Bạn có đề xuất gì về kế hoạch này?",
    "options": [
      "他正在准备考试，所以很忙。",
      "你觉得中文难吗？",
      "今天经理在图书馆计划旅行。",
      "你对这个计划有什么建议？"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们下午三点开会。",
    "pinyin": "Wǒmen xiàwǔ sān diǎn kāihuì.",
    "meaning": "Chiều nay chúng ta họp lúc ba giờ.",
    "options": [
      "学习语言需要时间。",
      "今天我在上海练习发音。",
      "让我想一想。",
      "我们下午三点开会。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请不要忘记带身份证。",
    "pinyin": "Qǐng bú yào wàngjì dài shēnfènzhèng.",
    "meaning": "Đừng quên mang theo căn cước.",
    "options": [
      "这件事情没有你想象的那么复杂。",
      "虽然时间不多，但是哥哥还是完成了参加会议。",
      "请不要忘记带身份证。",
      "除了中文，我还学习英语。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定改变原来的计划。",
    "pinyin": "Jīngguò rènzhēn tǎolùn, wǒmen juédìng gǎibiàn yuánlái de jìhuà.",
    "meaning": "Sau khi thảo luận kỹ, chúng tôi quyết định thay đổi kế hoạch ban đầu.",
    "options": [
      "经理正在会议室提高效率。",
      "经过认真讨论，我们决定改变原来的计划。",
      "邻居每天都要联系客户。",
      "因为工作很忙，经理只能晚上讨论计划。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了提高效率，公司正在调整工作流程。",
    "pinyin": "Wèile tígāo xiàolǜ, gōngsī zhèngzài tiáozhěng gōngzuò liúchéng.",
    "meaning": "Để nâng cao hiệu quả, công ty đang điều chỉnh quy trình làm việc.",
    "options": [
      "周末的时候，我的同事喜欢去家里完成任务。",
      "经理每天都要提高效率。",
      "为了提高效率，公司正在调整工作流程。",
      "记者正在检查工作计划，准备开始调整时间。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然遇到了一些困难，但是项目还是按时完成了。",
    "pinyin": "Suīrán yùdào le yìxiē kùnnan, dànshì xiàngmù háishi ànshí wánchéng le.",
    "meaning": "Mặc dù gặp một số khó khăn nhưng dự án vẫn hoàn thành đúng hạn.",
    "options": [
      "记者告诉我，他最近正在调整时间。",
      "如果有时间，记者会去餐厅申请签证。",
      "虽然遇到了一些困难，但是项目还是按时完成了。",
      "经过讨论，记者决定在餐厅安排工作。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责联系客户并安排会议时间。",
    "pinyin": "Tā fùzé liánxì kèhù bìng ānpái huìyì shíjiān.",
    "meaning": "Anh ấy phụ trách liên hệ khách hàng và sắp xếp thời gian họp.",
    "options": [
      "昨天记者在北京申请签证，所以回家比较晚。",
      "他负责联系客户并安排会议时间。",
      "记者告诉我，他最近正在安排工作。",
      "虽然时间不多，但是记者还是完成了安排工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "我们需要根据实际情况作出决定。",
    "pinyin": "Wǒmen xūyào gēnjù shíjì qíngkuàng zuòchū juédìng.",
    "meaning": "Chúng ta cần đưa ra quyết định dựa trên tình hình thực tế.",
    "options": [
      "今天经理在餐厅参加会议。",
      "经理觉得提高效率很重要。",
      "我的同事正在检查合同，准备开始学习新知识。",
      "我们需要根据实际情况作出决定。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "这项研究的结果为我们提供了新的思路。",
    "pinyin": "Zhè xiàng yánjiū de jiéguǒ wèi wǒmen tígōng le xīn de sīlù.",
    "meaning": "Kết quả nghiên cứu này cung cấp cho chúng tôi những hướng suy nghĩ mới.",
    "options": [
      "企业家希望明天可以继续调整计划。",
      "虽然时间不多，但是志愿者还是完成了完成研究。",
      "这项研究的结果为我们提供了新的思路。",
      "最近企业家常常需要提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "企业必须不断提高自身的竞争力。",
    "pinyin": "Qǐyè bìxū búduàn tígāo zìshēn de jìngzhēnglì.",
    "meaning": "Doanh nghiệp phải không ngừng nâng cao năng lực cạnh tranh của mình.",
    "options": [
      "最近企业家常常需要提高效率。",
      "企业必须不断提高自身的竞争力。",
      "同事告诉我，他最近正在分析数据。",
      "今天记者在北京解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "经过分析，我们发现问题比想象中更加复杂。",
    "pinyin": "Jīngguò fēnxī, wǒmen fāxiàn wèntí bǐ xiǎngxiàng zhōng gèngjiā fùzá.",
    "meaning": "Sau khi phân tích, chúng tôi phát hiện vấn đề phức tạp hơn tưởng tượng.",
    "options": [
      "经过分析，我们发现问题比想象中更加复杂。",
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "同事正在医院调查情况。",
      "昨天志愿者在博物馆完成研究，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "双方就合作方案交换了意见。",
    "pinyin": "Shuāngfāng jiù hézuò fāngàn jiāohuàn le yìjiàn.",
    "meaning": "Hai bên đã trao đổi ý kiến về phương án hợp tác.",
    "options": [
      "双方就合作方案交换了意见。",
      "如果计划没有变化，企业家下午会在上海提高效率。",
      "志愿者觉得完成研究很重要。",
      "昨天志愿者在北京讨论方案，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对变化，我们应该保持理性和耐心。",
    "pinyin": "Miànduì biànhuà, wǒmen yīnggāi bǎochí lǐxìng hé nàixīn.",
    "meaning": "Trước những thay đổi, chúng ta nên giữ sự lý trí và kiên nhẫn.",
    "options": [
      "同事已经把会议记录带到广州了。",
      "面对变化，我们应该保持理性和耐心。",
      "如果有时间，企业家会去实验室承担责任。",
      "会议结束以后，企业家马上回到会议中心继续承担责任。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "深入研究这一现象有助于我们理解社会的发展。",
    "pinyin": "Shēnrù yánjiū zhè yī xiànxiàng yǒuzhùyú wǒmen lǐjiě shèhuì de fāzhǎn.",
    "meaning": "Nghiên cứu sâu hiện tượng này giúp chúng ta hiểu sự phát triển của xã hội.",
    "options": [
      "为了解决实际困难，企业家提前来到深圳。",
      "深入研究这一现象有助于我们理解社会的发展。",
      "最近学者常常需要完成调查研究。",
      "因为工作很忙，企业家只能晚上改进管理方法。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "在复杂的环境下，我们必须保持清醒的判断。",
    "pinyin": "Zài fùzá de huánjìng xià, wǒmen bìxū bǎochí qīngxǐng de pànduàn.",
    "meaning": "Trong môi trường phức tạp, chúng ta phải giữ khả năng phán đoán tỉnh táo.",
    "options": [
      "在复杂的环境下，我们必须保持清醒的判断。",
      "学者觉得完成调查研究很重要。",
      "会议结束以后，企业家马上回到大学继续解决实际困难。",
      "如果计划没有变化，学者下午会在深圳完成调查研究。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "这一政策可能对未来的发展产生深远影响。",
    "pinyin": "Zhè yī zhèngcè kěnéng duì wèilái de fāzhǎn chǎnshēng shēnyuǎn yǐngxiǎng.",
    "meaning": "Chính sách này có thể tạo ra ảnh hưởng sâu rộng đến sự phát triển trong tương lai.",
    "options": [
      "经过讨论，企业家决定在上海申请研究项目。",
      "如果计划没有变化，研究人员下午会在广州积累实践经验。",
      "这一政策可能对未来的发展产生深远影响。",
      "我听说律师最近在博物馆负责提高工作效率。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "经过多方面的调查，研究人员得出了比较可靠的结论。",
    "pinyin": "Jīngguò duō fāngmiàn de diàochá, yánjiū rényuán déchū le bǐjiào kěkào de jiélùn.",
    "meaning": "Sau khi điều tra trên nhiều phương diện, các nhà nghiên cứu đưa ra kết luận tương đối đáng tin cậy.",
    "options": [
      "如果计划没有变化，研究人员下午会在实验室深入分析问题。",
      "虽然时间不多，但是企业家还是完成了改进管理方法。",
      "经过多方面的调查，研究人员得出了比较可靠的结论。",
      "今天律师在广州调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑长期发展战略。",
    "pinyin": "Miànduì xīn de tiǎozhàn, qǐyè xūyào chóngxīn kǎolǜ chángqī fāzhǎn zhànlüè.",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại chiến lược phát triển dài hạn.",
    "options": [
      "律师希望明天可以继续提高工作效率。",
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "面对新的挑战，企业需要重新考虑长期发展战略。",
      "律师正在国际机场承担重要责任。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "他在家。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 家。",
    "options": [
      "他在家。",
      "他在教室。",
      "如果有时间，你会去商店听音乐。",
      "我喜欢音乐。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我在医院。",
    "pinyin": "",
    "meaning": "Tôi đang ở 医院。",
    "options": [
      "我十一点睡觉。",
      "我在医院。",
      "我不喜欢茶。",
      "请向右转。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我们明天见。",
    "pinyin": "",
    "meaning": "Ngày mai gặp nhé.",
    "options": [
      "天气很好。",
      "最近他常常需要买东西。",
      "我们明天见。",
      "今天我很热。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "请给我咖啡。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 咖啡。",
    "options": [
      "我们去北京。",
      "我喜欢水果。",
      "会议结束以后，老师马上回到中国继续学习。",
      "请给我咖啡。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "她在北京。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 北京。",
    "options": [
      "我不喜欢电影。",
      "她在北京。",
      "请说慢一点。",
      "如果计划没有变化，妈妈下午会在商店回家。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我现在不忙。",
    "pinyin": "",
    "meaning": "Bây giờ tôi không bận.",
    "options": [
      "你几点睡觉？",
      "对不起。",
      "会议结束以后，哥哥马上回到中国继续学习。",
      "我现在不忙。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "他每天学习。",
    "pinyin": "",
    "meaning": "Mỗi ngày anh ấy 学习。",
    "options": [
      "我告诉我，他最近正在学习。",
      "晚上好。",
      "我是学生。",
      "他每天学习。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你现在忙吗？",
    "pinyin": "",
    "meaning": "Bây giờ bạn có bận không?",
    "options": [
      "晚上好。",
      "我们去公司。",
      "有大一点的吗？",
      "你现在忙吗？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我想吃鱼。",
    "pinyin": "",
    "meaning": "Tôi muốn ăn 鱼。",
    "options": [
      "我想吃鱼。",
      "请再说一遍。",
      "朋友希望明天可以继续睡觉。",
      "如果有时间，同学会去商店听音乐。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他在海防。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 海防。",
    "options": [
      "他在海防。",
      "不客气。",
      "明天我要上课。",
      "她在学校。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "请给我音乐。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 音乐。",
    "options": [
      "我只是看看。",
      "我喜欢电影。",
      "请给我音乐。",
      "她在商店。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "她在家。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 家。",
    "options": [
      "为了买东西，朋友提前来到中国。",
      "因为工作很忙，你只能晚上工作。",
      "她在家。",
      "如果计划没有变化，学生下午会在商店回家。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "她在饭店。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 饭店。",
    "options": [
      "她在饭店。",
      "请帮我看一下地图。",
      "如果有时间，你会去商店听音乐。",
      "我不喜欢电影。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我们去机场。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 机场。",
    "options": [
      "我们去机场。",
      "请往前走。",
      "我想喝水。",
      "他在海防。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我想喝水。",
    "pinyin": "",
    "meaning": "Tôi muốn uống 水。",
    "options": [
      "会议结束以后，他马上回到中国继续学习。",
      "请进。",
      "我想喝水。",
      "我们去饭店。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "今天我很开心。",
    "pinyin": "",
    "meaning": "Hôm nay tôi rất 开心。",
    "options": [
      "虽然时间不多，但是朋友还是完成了吃饭。",
      "我想喝水。",
      "她觉得喝水很重要。",
      "今天我很开心。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请给我水果。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 水果。",
    "options": [
      "他每天都要看书。",
      "我在医院。",
      "请给我水果。",
      "同学觉得喝水很重要。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "她在商店。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 商店。",
    "options": [
      "晚上好。",
      "经过讨论，老师决定在中国看书。",
      "她在商店。",
      "今天我有空。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我想喝茶。",
    "pinyin": "",
    "meaning": "Tôi muốn uống 茶。",
    "options": [
      "我想喝茶。",
      "他在北京。",
      "他在教室。",
      "我不喜欢书。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他每天做饭。",
    "pinyin": "",
    "meaning": "Mỗi ngày anh ấy 做饭。",
    "options": [
      "我不喜欢猫。",
      "会议结束以后，他马上回到中国继续学习。",
      "没关系。",
      "他每天做饭。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请给我茶。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 茶。",
    "options": [
      "这个字是什么意思？",
      "周末的时候，我喜欢去中国吃饭。",
      "请给我茶。",
      "她觉得喝水很重要。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我不喜欢猫。",
    "pinyin": "",
    "meaning": "Tôi không thích 猫。",
    "options": [
      "虽然时间不多，但是朋友还是完成了吃饭。",
      "她在北京。",
      "我告诉我，他最近正在学习。",
      "我不喜欢猫。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "她在海防。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 海防。",
    "options": [
      "可以用手机付款吗？",
      "虽然时间不多，但是医生还是完成了吃饭。",
      "她在海防。",
      "她喜欢看书。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我想吃鸡蛋。",
    "pinyin": "",
    "meaning": "Tôi muốn ăn 鸡蛋。",
    "options": [
      "我想吃鸡蛋。",
      "我们去商店。",
      "可以给我菜单吗？",
      "虽然时间不多，但是老师还是完成了吃饭。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他在学校。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 学校。",
    "options": [
      "他在学校。",
      "可以给我菜单吗？",
      "对不起。",
      "今天我很忙。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "今天我很累。",
    "pinyin": "",
    "meaning": "Hôm nay tôi rất 累。",
    "options": [
      "今天我很累。",
      "同学觉得喝水很重要。",
      "我喜欢音乐。",
      "虽然时间不多，但是哥哥还是完成了吃饭。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他在医院。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 医院。",
    "options": [
      "你几点睡觉？",
      "我想吃面条。",
      "他在医院。",
      "哥哥每天都要看书。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "今天我很饿。",
    "pinyin": "",
    "meaning": "Hôm nay tôi rất 饿。",
    "options": [
      "今天我很饿。",
      "哥哥告诉我，他最近正在学习。",
      "你会说中文吗？",
      "我迷路了。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我在机场。",
    "pinyin": "",
    "meaning": "Tôi đang ở 机场。",
    "options": [
      "我在机场。",
      "这个字是什么意思？",
      "我喜欢吃米饭。",
      "我住在海防。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "她在车站。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 车站。",
    "options": [
      "他每天工作。",
      "她在车站。",
      "我还没吃饭。",
      "你从哪里来？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我不喜欢电影。",
    "pinyin": "",
    "meaning": "Tôi không thích 电影。",
    "options": [
      "你喜欢咖啡吗？",
      "我不喜欢电影。",
      "你喜欢电影吗？",
      "你可以带我去吗？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我想吃面包。",
    "pinyin": "",
    "meaning": "Tôi muốn ăn 面包。",
    "options": [
      "医生已经把手机带到中国了。",
      "我想吃面包。",
      "我在北京。",
      "你叫什么名字？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我们去医院。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 医院。",
    "options": [
      "我们去医院。",
      "我想喝茶。",
      "经理正在商店回家。",
      "对不起。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我们去北京。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 北京。",
    "options": [
      "因为工作很忙，你只能晚上工作。",
      "我们去北京。",
      "我在车站。",
      "你今天忙吗？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "她在医院。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 医院。",
    "options": [
      "我每天都要看书。",
      "她在医院。",
      "请坐。",
      "我喜欢茶。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我喜欢狗。",
    "pinyin": "",
    "meaning": "Tôi thích 狗。",
    "options": [
      "我喜欢狗。",
      "我不喜欢茶。",
      "我不喜欢猫。",
      "你喜欢汉语吗？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他每天工作。",
    "pinyin": "",
    "meaning": "Mỗi ngày anh ấy 工作。",
    "options": [
      "他每天工作。",
      "为了买东西，朋友提前来到中国。",
      "因为工作很忙，她只能晚上工作。",
      "同学正在商店回家。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我在公园。",
    "pinyin": "",
    "meaning": "Tôi đang ở 公园。",
    "options": [
      "太贵了。",
      "我在公园。",
      "今天妈妈在商店喝水。",
      "你从哪里来？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "今天我很热。",
    "pinyin": "",
    "meaning": "Hôm nay tôi rất 热。",
    "options": [
      "她在学校。",
      "今天我很热。",
      "姐姐正在检查咖啡，准备开始休息。",
      "我坐公交车去学校。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "他每天跑步。",
    "pinyin": "",
    "meaning": "Mỗi ngày anh ấy 跑步。",
    "options": [
      "他每天跑步。",
      "经理觉得喝水很重要。",
      "如果计划没有变化，学生下午会在商店回家。",
      "谢谢。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我们去商店。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 商店。",
    "options": [
      "这个字是什么意思？",
      "我们去商店。",
      "今天同学在商店喝水。",
      "我不知道。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我喜欢汉语。",
    "pinyin": "",
    "meaning": "Tôi thích 汉语。",
    "options": [
      "我喜欢汉语。",
      "他每天听音乐。",
      "为了准备明天的工作，你今晚还要听音乐。",
      "这个多少钱？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我在北京。",
    "pinyin": "",
    "meaning": "Tôi đang ở 北京。",
    "options": [
      "我在机场。",
      "我在北京。",
      "他在上海。",
      "你喜欢茶吗？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我们去饭店。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 饭店。",
    "options": [
      "为了买东西，他提前来到中国。",
      "他告诉我，他最近正在学习。",
      "请坐。",
      "我们去饭店。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我喜欢音乐。",
    "pinyin": "",
    "meaning": "Tôi thích 音乐。",
    "options": [
      "我听说同学最近在商店负责工作。",
      "周末的时候，我喜欢去中国吃饭。",
      "你几点睡觉？",
      "我喜欢音乐。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请给我电影。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 电影。",
    "options": [
      "请给我电影。",
      "医生告诉我，他最近正在学习。",
      "他在车站。",
      "姐姐觉得喝水很重要。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我在上海。",
    "pinyin": "",
    "meaning": "Tôi đang ở 上海。",
    "options": [
      "我想吃米饭。",
      "我在上海。",
      "请给我一碗米饭。",
      "她觉得喝水很重要。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "你喜欢电影吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 电影 không?",
    "options": [
      "我在饭店。",
      "我喜欢狗。",
      "你喜欢电影吗？",
      "为了准备明天的工作，她今晚还要听音乐。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我不喜欢咖啡。",
    "pinyin": "",
    "meaning": "Tôi không thích 咖啡。",
    "options": [
      "我不喜欢咖啡。",
      "一共多少钱？",
      "他已经把手机带到中国了。",
      "周末的时候，他喜欢去中国吃饭。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "今天我很高兴。",
    "pinyin": "",
    "meaning": "Hôm nay tôi rất 高兴。",
    "options": [
      "我们去上海。",
      "虽然时间不多，但是医生还是完成了吃饭。",
      "今天我很高兴。",
      "可以用手机付款吗？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "他在机场。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 机场。",
    "options": [
      "他在海防。",
      "请在这里停车。",
      "他在机场。",
      "虽然时间不多，但是老师还是完成了吃饭。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我不喜欢汉语。",
    "pinyin": "",
    "meaning": "Tôi không thích 汉语。",
    "options": [
      "我不喜欢汉语。",
      "哥哥每天都要看书。",
      "我们去教室。",
      "他已经把手机带到中国了。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "你喜欢足球吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 足球 không?",
    "options": [
      "这辆车去市中心吗？",
      "你喜欢足球吗？",
      "为了买东西，医生提前来到中国。",
      "我想吃饺子。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "今天我很冷。",
    "pinyin": "",
    "meaning": "Hôm nay tôi rất 冷。",
    "options": [
      "我不要这个。",
      "今天我很冷。",
      "会议结束以后，哥哥马上回到中国继续学习。",
      "我十一点睡觉。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "他在车站。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 车站。",
    "options": [
      "他在车站。",
      "今天我很冷。",
      "可以刷卡吗？",
      "我叫李明。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "请给我书。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 书。",
    "options": [
      "请给我书。",
      "经过讨论，朋友决定在中国看书。",
      "我想吃牛肉。",
      "请给我水果。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我在教室。",
    "pinyin": "",
    "meaning": "Tôi đang ở 教室。",
    "options": [
      "我马上回来。",
      "我在教室。",
      "我喜欢吃米饭。",
      "我们去饭店。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我在商店。",
    "pinyin": "",
    "meaning": "Tôi đang ở 商店。",
    "options": [
      "如果有时间，姐姐会去商店听音乐。",
      "我在商店。",
      "他在海防。",
      "她在教室。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我想吃水果。",
    "pinyin": "",
    "meaning": "Tôi muốn ăn 水果。",
    "options": [
      "你吃饭了吗？",
      "我要去火车站。",
      "我想吃水果。",
      "如果计划没有变化，妈妈下午会在商店回家。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "你喜欢水果吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 水果 không?",
    "options": [
      "你喜欢水果吗？",
      "哥哥每天都要看书。",
      "他在商店。",
      "我不喜欢水果。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我在饭店。",
    "pinyin": "",
    "meaning": "Tôi đang ở 饭店。",
    "options": [
      "我在饭店。",
      "我们去教室。",
      "虽然时间不多，但是老师还是完成了吃饭。",
      "因为工作很忙，你只能晚上工作。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "你喜欢汉语吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 汉语 không?",
    "options": [
      "因为工作很忙，学生只能晚上工作。",
      "你喜欢汉语吗？",
      "虽然时间不多，但是朋友还是完成了吃饭。",
      "我不喜欢猫。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我在海防。",
    "pinyin": "",
    "meaning": "Tôi đang ở 海防。",
    "options": [
      "我听说妈妈最近在商店负责工作。",
      "今天星期五。",
      "我在海防。",
      "我七点起床。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我想喝果汁。",
    "pinyin": "",
    "meaning": "Tôi muốn uống 果汁。",
    "options": [
      "我想喝果汁。",
      "你几点睡觉？",
      "明天我要上课。",
      "你好吗？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他在教室。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 教室。",
    "options": [
      "我不喜欢音乐。",
      "他在教室。",
      "今天星期几？",
      "我买两杯咖啡。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "他在上海。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 上海。",
    "options": [
      "他在家。",
      "我想吃水果。",
      "周末的时候，朋友喜欢去中国吃饭。",
      "他在上海。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "他每天听音乐。",
    "pinyin": "",
    "meaning": "Mỗi ngày anh ấy 听音乐。",
    "options": [
      "我不知道。",
      "他每天听音乐。",
      "她在北京。",
      "你怎么写这个字？"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我不喜欢书。",
    "pinyin": "",
    "meaning": "Tôi không thích 书。",
    "options": [
      "我是越南人。",
      "我喜欢汉语。",
      "我听说妈妈最近在商店负责工作。",
      "我不喜欢书。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请给我狗。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 狗。",
    "options": [
      "会议结束以后，他马上回到中国继续学习。",
      "请给我狗。",
      "经理觉得喝水很重要。",
      "经过讨论，老师决定在中国看书。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我喜欢猫。",
    "pinyin": "",
    "meaning": "Tôi thích 猫。",
    "options": [
      "姐姐觉得喝水很重要。",
      "我们去商店。",
      "今天同学在商店喝水。",
      "我喜欢猫。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我想喝咖啡。",
    "pinyin": "",
    "meaning": "Tôi muốn uống 咖啡。",
    "options": [
      "我想喝咖啡。",
      "经过讨论，老师决定在中国看书。",
      "请问，洗手间在哪里？",
      "我想吃面包。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "请给我汉语。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 汉语。",
    "options": [
      "你现在有空吗？",
      "请说慢一点。",
      "我很好，谢谢。",
      "请给我汉语。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我喜欢书。",
    "pinyin": "",
    "meaning": "Tôi thích 书。",
    "options": [
      "医生每天都要看书。",
      "我想吃面包。",
      "我喜欢书。",
      "你喜欢猫吗？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我想吃苹果。",
    "pinyin": "",
    "meaning": "Tôi muốn ăn 苹果。",
    "options": [
      "周末的时候，爸爸喜欢去中国吃饭。",
      "我想吃苹果。",
      "我在海防。",
      "她在图书馆。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我在公司。",
    "pinyin": "",
    "meaning": "Tôi đang ở 公司。",
    "options": [
      "妈妈正在检查咖啡，准备开始休息。",
      "我在公司。",
      "你喜欢水果吗？",
      "右边就是超市。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我喜欢茶。",
    "pinyin": "",
    "meaning": "Tôi thích 茶。",
    "options": [
      "我会说一点中文。",
      "我喜欢茶。",
      "昨天姐姐在商店休息，所以回家比较晚。",
      "他在商店。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我们去上海。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 上海。",
    "options": [
      "我们去上海。",
      "我想喝咖啡。",
      "我要买这个。",
      "请给我狗。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "你喜欢书吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 书 không?",
    "options": [
      "为了准备明天的工作，姐姐今晚还要听音乐。",
      "妈妈正在商店回家。",
      "你喜欢书吗？",
      "今天星期一。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我不喜欢狗。",
    "pinyin": "",
    "meaning": "Tôi không thích 狗。",
    "options": [
      "可以便宜一点吗？",
      "我不喜欢狗。",
      "对不起。",
      "今天学生在商店喝水。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我们去学校。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 学校。",
    "options": [
      "我很好，谢谢。",
      "我们去学校。",
      "你可以带我去吗？",
      "我喜欢喝咖啡。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我喜欢足球。",
    "pinyin": "",
    "meaning": "Tôi thích 足球。",
    "options": [
      "我喜欢足球。",
      "你可以带我去吗？",
      "会议结束以后，爸爸马上回到中国继续学习。",
      "医生每天都要看书。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我喜欢电影。",
    "pinyin": "",
    "meaning": "Tôi thích 电影。",
    "options": [
      "你叫什么？",
      "我喜欢电影。",
      "我马上回来。",
      "为了准备明天的工作，同学今晚还要听音乐。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "她在图书馆。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 图书馆。",
    "options": [
      "请给我一张发票。",
      "她在图书馆。",
      "我会说一点中文。",
      "你正在商店回家。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我在家。",
    "pinyin": "",
    "meaning": "Tôi đang ở 家。",
    "options": [
      "他在北京。",
      "你好吗？",
      "我在家。",
      "为了买东西，他提前来到中国。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "她在教室。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 教室。",
    "options": [
      "请坐。",
      "我在车站。",
      "他已经把手机带到中国了。",
      "她在教室。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "请给我猫。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 猫。",
    "options": [
      "如果有时间，姐姐会去商店听音乐。",
      "他已经把手机带到中国了。",
      "请给我猫。",
      "我买两杯咖啡。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "他每天看书。",
    "pinyin": "",
    "meaning": "Mỗi ngày anh ấy 看书。",
    "options": [
      "我在公园。",
      "他每天看书。",
      "不用客气。",
      "请坐。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "你喜欢音乐吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 音乐 không?",
    "options": [
      "你喜欢音乐吗？",
      "可以刷卡吗？",
      "地铁站在哪里？",
      "再来一杯，谢谢。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "她在上海。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 上海。",
    "options": [
      "没事。",
      "姐姐正在商店回家。",
      "同学正在检查咖啡，准备开始休息。",
      "她在上海。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你喜欢咖啡吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 咖啡 không?",
    "options": [
      "可以刷卡吗？",
      "你喜欢咖啡吗？",
      "不用客气。",
      "她在上海。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "她在公园。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 公园。",
    "options": [
      "周末的时候，爸爸喜欢去中国吃饭。",
      "为了准备明天的工作，姐姐今晚还要听音乐。",
      "她在公园。",
      "为了准备明天的工作，你今晚还要听音乐。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "她在学校。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 学校。",
    "options": [
      "你叫什么？",
      "她在学校。",
      "周末的时候，老师喜欢去中国吃饭。",
      "虽然时间不多，但是老师还是完成了吃饭。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我喜欢水果。",
    "pinyin": "",
    "meaning": "Tôi thích 水果。",
    "options": [
      "如果计划没有变化，她下午会在商店回家。",
      "你会说中文吗？",
      "我吃过了。",
      "我喜欢水果。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我想吃牛肉。",
    "pinyin": "",
    "meaning": "Tôi muốn ăn 牛肉。",
    "options": [
      "我想吃牛肉。",
      "她在机场。",
      "会议结束以后，我马上回到中国继续学习。",
      "她在车站。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "她在机场。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 机场。",
    "options": [
      "她在机场。",
      "她正在检查咖啡，准备开始休息。",
      "我迷路了。",
      "我不要这个。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我想吃饺子。",
    "pinyin": "",
    "meaning": "Tôi muốn ăn 饺子。",
    "options": [
      "我喜欢汉语。",
      "我在教室。",
      "我想吃饺子。",
      "你怎么写这个字？"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我在学校。",
    "pinyin": "",
    "meaning": "Tôi đang ở 学校。",
    "options": [
      "我要买这个。",
      "可以刷卡吗？",
      "我在学校。",
      "我不知道。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "他在图书馆。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 图书馆。",
    "options": [
      "他在图书馆。",
      "你喜欢汉语吗？",
      "我喜欢足球。",
      "你想吃什么？"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "请给我足球。",
    "pinyin": "",
    "meaning": "Làm ơn đưa cho tôi 足球。",
    "options": [
      "今天你在商店喝水。",
      "你几点起床？",
      "我每天坐公交车上班。",
      "请给我足球。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你喜欢猫吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 猫 không?",
    "options": [
      "没关系。",
      "右边就是超市。",
      "你喜欢猫吗？",
      "明天天气很好。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我们去图书馆。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 图书馆。",
    "options": [
      "我在学校。",
      "请说慢一点。",
      "我很好，谢谢。",
      "我们去图书馆。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "今天我很忙。",
    "pinyin": "",
    "meaning": "Hôm nay tôi rất 忙。",
    "options": [
      "她在饭店。",
      "今天我很忙。",
      "周末的时候，爸爸喜欢去中国吃饭。",
      "请进。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "他在公园。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 公园。",
    "options": [
      "他在公园。",
      "你好吗？",
      "我不喜欢猫。",
      "我希望明天可以继续睡觉。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我不喜欢茶。",
    "pinyin": "",
    "meaning": "Tôi không thích 茶。",
    "options": [
      "我不喜欢茶。",
      "我很好，谢谢。",
      "昨天她在商店休息，所以回家比较晚。",
      "然后向左转。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我们去公司。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 公司。",
    "options": [
      "请进。",
      "我们去公司。",
      "我喜欢吃米饭。",
      "我们去医院。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我想喝牛奶。",
    "pinyin": "",
    "meaning": "Tôi muốn uống 牛奶。",
    "options": [
      "我坐公交车去学校。",
      "因为工作很忙，同学只能晚上工作。",
      "我在家。",
      "我想喝牛奶。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我在车站。",
    "pinyin": "",
    "meaning": "Tôi đang ở 车站。",
    "options": [
      "因为工作很忙，妈妈只能晚上工作。",
      "你吃饭了吗？",
      "明天我要上课。",
      "我在车站。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你喜欢茶吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 茶 không?",
    "options": [
      "我听不清楚。",
      "你喜欢茶吗？",
      "我们去学校。",
      "为了买东西，爸爸提前来到中国。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "我们去车站。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 车站。",
    "options": [
      "我们去车站。",
      "我想喝咖啡。",
      "晚上好。",
      "谢谢。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "我不喜欢水果。",
    "pinyin": "",
    "meaning": "Tôi không thích 水果。",
    "options": [
      "今天星期五。",
      "我不喜欢水果。",
      "他在北京。",
      "我是学生。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "他每天看电视。",
    "pinyin": "",
    "meaning": "Mỗi ngày anh ấy 看电视。",
    "options": [
      "我已经把手机带到中国了。",
      "他每天看电视。",
      "今天我很忙。",
      "经过讨论，医生决定在中国看书。"
    ],
    "correct": 1
  },
  {
    "level": 1,
    "audio": "他在饭店。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 饭店。",
    "options": [
      "你喜欢喝茶吗？",
      "他在北京。",
      "他已经把手机带到中国了。",
      "他在饭店。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我们去教室。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 教室。",
    "options": [
      "她在车站。",
      "对不起。",
      "妈妈觉得喝水很重要。",
      "我们去教室。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "他在北京。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 北京。",
    "options": [
      "她在上海。",
      "他在教室。",
      "同学正在商店回家。",
      "他在北京。"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "你喜欢狗吗？",
    "pinyin": "",
    "meaning": "Bạn có thích 狗 không?",
    "options": [
      "你喜欢茶吗？",
      "你正在检查咖啡，准备开始休息。",
      "今天星期几？",
      "你喜欢狗吗？"
    ],
    "correct": 3
  },
  {
    "level": 1,
    "audio": "我在图书馆。",
    "pinyin": "",
    "meaning": "Tôi đang ở 图书馆。",
    "options": [
      "我在图书馆。",
      "他每天听音乐。",
      "我在北京。",
      "我们去学校。"
    ],
    "correct": 0
  },
  {
    "level": 1,
    "audio": "他在商店。",
    "pinyin": "",
    "meaning": "Anh ấy đang ở 商店。",
    "options": [
      "请给我一碗米饭。",
      "今天我很冷。",
      "他在商店。",
      "然后向左转。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "她在公司。",
    "pinyin": "",
    "meaning": "Cô ấy đang ở 公司。",
    "options": [
      "姐姐正在检查咖啡，准备开始休息。",
      "你今天忙吗？",
      "她在公司。",
      "因为工作很忙，经理只能晚上工作。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我们去公园。",
    "pinyin": "",
    "meaning": "Chúng tôi đi 公园。",
    "options": [
      "学生正在检查咖啡，准备开始休息。",
      "老师每天都要看书。",
      "我们去公园。",
      "我七点起床。"
    ],
    "correct": 2
  },
  {
    "level": 1,
    "audio": "我不喜欢音乐。",
    "pinyin": "",
    "meaning": "Tôi không thích 音乐。",
    "options": [
      "我不喜欢音乐。",
      "我不喜欢书。",
      "我在家。",
      "会议结束以后，朋友马上回到中国继续学习。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我昨天去了银行。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 银行。",
    "options": [
      "我昨天去了银行。",
      "爸爸正在商店旅行。",
      "手机没电了。",
      "我不知道。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这件礼物多少钱？",
    "pinyin": "",
    "meaning": "礼物 này bao nhiêu tiền?",
    "options": [
      "这件礼物多少钱？",
      "我每天学习一个小时。",
      "你收到我的消息了吗？",
      "请写在黑板上。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我需要买一些书。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 书。",
    "options": [
      "我觉得做饭很重要。",
      "没问题。",
      "今天爸爸在图书馆买东西。",
      "我需要买一些书。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你周末通常做什么？",
    "pinyin": "",
    "meaning": "Cuối tuần bạn thường làm gì?",
    "options": [
      "这个手机很有意思。",
      "请等我五分钟。",
      "你想喝茶还是咖啡？",
      "你周末通常做什么？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我昨天去了公园。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 公园。",
    "options": [
      "我昨天去了公园。",
      "手机没电了。",
      "这件电脑多少钱？",
      "水太烫了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我们晚上一起吃饭吧。",
    "pinyin": "",
    "meaning": "Buổi tối chúng ta cùng ăn cơm nhé.",
    "options": [
      "我已经打扫房间了。",
      "我正在开会。",
      "我们晚上一起吃饭吧。",
      "你能给我一个例子吗？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "明天我们一起去学校吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 学校 nhé.",
    "options": [
      "这个书很漂亮。",
      "下午三点见。",
      "这个问题很简单。",
      "明天我们一起去学校吧。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这件电脑多少钱？",
    "pinyin": "",
    "meaning": "电脑 này bao nhiêu tiền?",
    "options": [
      "今天老师在学校旅行。",
      "我今天感觉很好。",
      "这件电脑多少钱？",
      "你什么时候去车站？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这件书多少钱？",
    "pinyin": "",
    "meaning": "书 này bao nhiêu tiền?",
    "options": [
      "明天我们一起去电影院吧。",
      "这个咖啡很漂亮。",
      "你可以给我充电器吗？",
      "这件书多少钱？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我昨天去了医院。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 医院。",
    "options": [
      "天气越来越好了。",
      "姐姐每天都要准备考试。",
      "你准备好了吗？",
      "我昨天去了医院。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我需要买一些手机。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 手机。",
    "options": [
      "我需要买一些手机。",
      "我们认识很多年了。",
      "同事每天都要运动。",
      "你喜欢听什么音乐？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我正在写邮件。",
    "pinyin": "",
    "meaning": "Tôi đang 写邮件。",
    "options": [
      "因为工作很忙，老师只能晚上坐地铁。",
      "我正在写邮件。",
      "请再说一遍。",
      "我准备好了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你什么时候去饭店？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 饭店?",
    "options": [
      "如果计划没有变化，老师下午会在医院做饭。",
      "这个手机很重要。",
      "你什么时候去饭店？",
      "我需要买一些电脑。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个咖啡很贵。",
    "pinyin": "",
    "meaning": "咖啡 này rất 贵。",
    "options": [
      "姐姐告诉我，他最近正在做作业。",
      "如果计划没有变化，他下午会在公园看电影。",
      "这个咖啡很贵。",
      "这件书多少钱？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我昨天去了图书馆。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 图书馆。",
    "options": [
      "为了准备明天的工作，我的朋友今晚还要买东西。",
      "你需要我做什么？",
      "我昨天去了图书馆。",
      "你喜欢什么运动？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我需要买一些衣服。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 衣服。",
    "options": [
      "你喜欢听什么音乐？",
      "我需要买一些衣服。",
      "手机没电了。",
      "请打开书。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我觉得这个办法不错。",
    "pinyin": "",
    "meaning": "Tôi thấy cách này khá ổn.",
    "options": [
      "我需要休息一下。",
      "你喜欢什么运动？",
      "我觉得这个办法不错。",
      "你会说中文吗？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你什么时候去学校？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 学校?",
    "options": [
      "我昨天去了图书馆。",
      "我明白了。",
      "同事告诉我，他最近正在工作。",
      "你什么时候去学校？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我昨天去了车站。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 车站。",
    "options": [
      "我昨天去了车站。",
      "为了准备明天的工作，我的朋友今晚还要买东西。",
      "你在哪里？",
      "这个水果很贵。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我已经买东西了。",
    "pinyin": "",
    "meaning": "Tôi đã 买东西 rồi.",
    "options": [
      "这个礼物很贵。",
      "我已经买东西了。",
      "我们一起练习吧。",
      "为了做作业，姐姐提前来到车站。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "明天我们一起去图书馆吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 图书馆 nhé.",
    "options": [
      "明天我们一起去图书馆吧。",
      "这个词是什么意思？",
      "你昨天几点回家？",
      "我觉得这个方法很好。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你可以帮我买东西吗？",
    "pinyin": "",
    "meaning": "Bạn có thể giúp tôi 买东西 không?",
    "options": [
      "不用着急。",
      "这个书很漂亮。",
      "你可以帮我买东西吗？",
      "我喜欢听中文歌。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "明天我们一起去商店吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 商店 nhé.",
    "options": [
      "医生每天都要准备考试。",
      "最近姐姐常常需要听音乐。",
      "明天我们一起去商店吧。",
      "我正在检查照片，准备开始旅行。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你什么时候去电影院？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 电影院?",
    "options": [
      "孩子正在上海买东西。",
      "他觉得做饭很重要。",
      "别担心。",
      "你什么时候去电影院？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你可以帮我学习中文吗？",
    "pinyin": "",
    "meaning": "Bạn có thể giúp tôi 学习中文 không?",
    "options": [
      "我听说老师最近在公园负责做饭。",
      "最近过得怎么样？",
      "我喜欢在家看电影。",
      "你可以帮我学习中文吗？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "明天我们一起去医院吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 医院 nhé.",
    "options": [
      "医生已经把衣服带到车站了。",
      "明天我们一起去医院吧。",
      "这个衣服很漂亮。",
      "你可以帮我一下吗？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我已经做作业了。",
    "pinyin": "",
    "meaning": "Tôi đã 做作业 rồi.",
    "options": [
      "我已经做作业了。",
      "我要一杯热茶。",
      "这个问题很简单。",
      "在第二个路口右转。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个衣服很贵。",
    "pinyin": "",
    "meaning": "衣服 này rất 贵。",
    "options": [
      "我有一点累。",
      "这个衣服很贵。",
      "明天我们一起去学校吧。",
      "我需要买一些衣服。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我需要买一些水果。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 水果。",
    "options": [
      "哥哥正在检查自行车，准备开始坐地铁。",
      "我需要买一些水果。",
      "这家饭店的菜很好吃。",
      "别担心。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我已经写邮件了。",
    "pinyin": "",
    "meaning": "Tôi đã 写邮件 rồi.",
    "options": [
      "孩子觉得看电影很重要。",
      "我已经写邮件了。",
      "我周末通常在家休息。",
      "我正在看电视。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个书很简单。",
    "pinyin": "",
    "meaning": "书 này rất 简单。",
    "options": [
      "虽然时间不多，但是妈妈还是完成了打电话。",
      "爸爸觉得学习汉语很重要。",
      "这个电脑很便宜。",
      "这个书很简单。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "明天我们一起去电影院吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 电影院 nhé.",
    "options": [
      "如果计划没有变化，老师下午会在医院做饭。",
      "我正在开会。",
      "周末的时候，妈妈喜欢去家里听音乐。",
      "明天我们一起去电影院吧。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我已经看电视了。",
    "pinyin": "",
    "meaning": "Tôi đã 看电视 rồi.",
    "options": [
      "为了打电话，医生提前来到商店。",
      "我需要买一些衣服。",
      "慢慢来。",
      "我已经看电视了。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我需要买一些咖啡。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 咖啡。",
    "options": [
      "水太烫了。",
      "我需要买一些咖啡。",
      "妈妈告诉我，他最近正在工作。",
      "这个电影很简单。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个水果很重要。",
    "pinyin": "",
    "meaning": "水果 này rất 重要。",
    "options": [
      "你什么时候去车站？",
      "这个水果很重要。",
      "经过讨论，姐姐决定在商店工作。",
      "妈妈已经把汉语书带到图书馆了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你可以帮我打扫房间吗？",
    "pinyin": "",
    "meaning": "Bạn có thể giúp tôi 打扫房间 không?",
    "options": [
      "因为工作很忙，爸爸只能晚上旅行。",
      "你可以帮我打扫房间吗？",
      "你什么时候去图书馆？",
      "我晚上九点回家。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个礼物很有意思。",
    "pinyin": "",
    "meaning": "礼物 này rất 有意思。",
    "options": [
      "我听说老师最近在公园负责做饭。",
      "这个礼物很有意思。",
      "你准备好了吗？",
      "你什么时候下班？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我昨天去了饭店。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 饭店。",
    "options": [
      "你什么时候去学校？",
      "我觉得这个方法很好。",
      "我昨天去了饭店。",
      "妈妈已经把汉语书带到图书馆了。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个水果很简单。",
    "pinyin": "",
    "meaning": "水果 này rất 简单。",
    "options": [
      "这个水果很简单。",
      "我每天学习一个小时。",
      "晚上八点以后我有空。",
      "最近过得怎么样？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个礼物很重要。",
    "pinyin": "",
    "meaning": "礼物 này rất 重要。",
    "options": [
      "这个礼物很重要。",
      "我昨天去了银行。",
      "请再说一遍。",
      "你吃午饭了吗？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我正在准备考试。",
    "pinyin": "",
    "meaning": "Tôi đang 准备考试。",
    "options": [
      "我正在准备考试。",
      "这个水果很方便。",
      "下午三点见。",
      "妈妈告诉我，他最近正在工作。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你可以帮我准备考试吗？",
    "pinyin": "",
    "meaning": "Bạn có thể giúp tôi 准备考试 không?",
    "options": [
      "我们几点见面？",
      "这个书很简单。",
      "下午三点见。",
      "你可以帮我准备考试吗？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "明天我们一起去车站吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 车站 nhé.",
    "options": [
      "慢慢来。",
      "妈妈告诉我，他最近正在工作。",
      "明天我们一起去车站吧。",
      "虽然时间不多，但是同事还是完成了做作业。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我正在看电视。",
    "pinyin": "",
    "meaning": "Tôi đang 看电视。",
    "options": [
      "这个书很漂亮。",
      "我正在看电视。",
      "你什么时候去饭店？",
      "下午三点见。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个衣服很简单。",
    "pinyin": "",
    "meaning": "衣服 này rất 简单。",
    "options": [
      "虽然时间不多，但是你还是完成了工作。",
      "好啊，我很期待。",
      "这个词是什么意思？",
      "这个衣服很简单。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个咖啡很便宜。",
    "pinyin": "",
    "meaning": "咖啡 này rất 便宜。",
    "options": [
      "这个电脑很贵。",
      "如果有时间，哥哥会去北京做饭。",
      "同事已经把汉语书带到北京了。",
      "这个咖啡很便宜。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "明天我们一起去饭店吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 饭店 nhé.",
    "options": [
      "明天我们一起去饭店吧。",
      "我昨天睡得很晚。",
      "会议结束以后，她马上回到超市继续运动。",
      "这件礼物多少钱？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这件手机多少钱？",
    "pinyin": "",
    "meaning": "手机 này bao nhiêu tiền?",
    "options": [
      "这个书很漂亮。",
      "他比我高一点。",
      "这件手机多少钱？",
      "哥哥觉得看电影很重要。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个手机很重要。",
    "pinyin": "",
    "meaning": "手机 này rất 重要。",
    "options": [
      "这个手机很重要。",
      "我已经吃过午饭了。",
      "我需要买一些咖啡。",
      "我的手机没电了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个电脑很简单。",
    "pinyin": "",
    "meaning": "电脑 này rất 简单。",
    "options": [
      "我的朋友觉得做饭很重要。",
      "明天我们一起去公园吧。",
      "我需要买一些手机。",
      "这个电脑很简单。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我正在打扫房间。",
    "pinyin": "",
    "meaning": "Tôi đang 打扫房间。",
    "options": [
      "我觉得这个方法很好。",
      "到了给我发消息。",
      "我正在打扫房间。",
      "如果有时间，哥哥会去北京做饭。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你什么时候去商店？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 商店?",
    "options": [
      "这个电影很方便。",
      "这个书很漂亮。",
      "哥哥正在检查自行车，准备开始坐地铁。",
      "你什么时候去商店？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这件咖啡多少钱？",
    "pinyin": "",
    "meaning": "咖啡 này bao nhiêu tiền?",
    "options": [
      "这个书很重要。",
      "这件咖啡多少钱？",
      "昨天爸爸在医院看电影，所以回家比较晚。",
      "因为工作很忙，我只能晚上买东西。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你什么时候去图书馆？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 图书馆?",
    "options": [
      "这个电影很方便。",
      "你什么时候去图书馆？",
      "这个电脑很方便。",
      "经过讨论，医生决定在学校做作业。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个咖啡很有意思。",
    "pinyin": "",
    "meaning": "咖啡 này rất 有意思。",
    "options": [
      "医生已经把衣服带到车站了。",
      "请你说慢一点。",
      "这个咖啡很有意思。",
      "会议结束以后，妈妈马上回到上海继续准备考试。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我已经打扫房间了。",
    "pinyin": "",
    "meaning": "Tôi đã 打扫房间 rồi.",
    "options": [
      "这个电脑很有意思。",
      "我已经打扫房间了。",
      "你什么时候下班？",
      "我昨天去了电影院。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个衣服很漂亮。",
    "pinyin": "",
    "meaning": "衣服 này rất 漂亮。",
    "options": [
      "姐姐希望明天可以继续运动。",
      "我听说哥哥最近在医院负责学习汉语。",
      "周末的时候，妈妈喜欢去家里听音乐。",
      "这个衣服很漂亮。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个电脑很贵。",
    "pinyin": "",
    "meaning": "电脑 này rất 贵。",
    "options": [
      "这件电影多少钱？",
      "这个电脑很贵。",
      "我需要买一些电脑。",
      "这个衣服很便宜。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我需要买一些电脑。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 电脑。",
    "options": [
      "这个电影很贵。",
      "我需要买一些电脑。",
      "同事告诉我，他最近正在工作。",
      "你能帮我一下吗？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你什么时候去超市？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 超市?",
    "options": [
      "你什么时候去超市？",
      "我已经到了。",
      "在第二个路口右转。",
      "我每天早上跑步。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你可以帮我做作业吗？",
    "pinyin": "",
    "meaning": "Bạn có thể giúp tôi 做作业 không?",
    "options": [
      "最近她常常需要运动。",
      "妈妈告诉我，他最近正在工作。",
      "你可以帮我做作业吗？",
      "这个衣服很便宜。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你什么时候去车站？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 车站?",
    "options": [
      "这个电影很漂亮。",
      "明天我们一起去图书馆吧。",
      "因为工作很忙，他只能晚上买东西。",
      "你什么时候去车站？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我正在买东西。",
    "pinyin": "",
    "meaning": "Tôi đang 买东西。",
    "options": [
      "我正在买东西。",
      "为了准备明天的工作，我今晚还要旅行。",
      "今天早点睡吧。",
      "我昨天去了公园。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我已经学习中文了。",
    "pinyin": "",
    "meaning": "Tôi đã 学习中文 rồi.",
    "options": [
      "明天我们一起去超市吧。",
      "我已经学习中文了。",
      "这个书很漂亮。",
      "这个书很方便。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你什么时候去医院？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 医院?",
    "options": [
      "你什么时候去医院？",
      "你准备好了吗？",
      "如果计划没有变化，我下午会在图书馆看电影。",
      "妈妈希望明天可以继续运动。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我昨天去了电影院。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 电影院。",
    "options": [
      "我的同学已经把报纸带到公司了。",
      "这个词是什么意思？",
      "我昨天去了电影院。",
      "她希望明天可以继续准备考试。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个书很贵。",
    "pinyin": "",
    "meaning": "书 này rất 贵。",
    "options": [
      "这个书很贵。",
      "经过讨论，她决定在公园打电话。",
      "你可以帮我打扫房间吗？",
      "为了准备明天的工作，我的朋友今晚还要买东西。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个书很重要。",
    "pinyin": "",
    "meaning": "书 này rất 重要。",
    "options": [
      "这个书很重要。",
      "你什么时候去公园？",
      "昨天爸爸在医院看电影，所以回家比较晚。",
      "虽然时间不多，但是她还是完成了工作。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "我需要买一些礼物。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 礼物。",
    "options": [
      "我喜欢听中文歌。",
      "我正在检查照片，准备开始旅行。",
      "我需要买一些礼物。",
      "这件书多少钱？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "你可以帮我写邮件吗？",
    "pinyin": "",
    "meaning": "Bạn có thể giúp tôi 写邮件 không?",
    "options": [
      "你可以帮我写邮件吗？",
      "我去年开始学中文。",
      "这个问题很简单。",
      "这个礼物很漂亮。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个电影很重要。",
    "pinyin": "",
    "meaning": "电影 này rất 重要。",
    "options": [
      "这个电影很便宜。",
      "这个水果很贵。",
      "虽然时间不多，但是你还是完成了工作。",
      "这个电影很重要。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "你什么时候去银行？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 银行?",
    "options": [
      "最近过得怎么样？",
      "你什么时候去银行？",
      "我们几点见面？",
      "我忘记这个词了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "你可以帮我看电视吗？",
    "pinyin": "",
    "meaning": "Bạn có thể giúp tôi 看电视 không?",
    "options": [
      "虽然时间不多，但是你还是完成了工作。",
      "老师正在上课。",
      "这个衣服很便宜。",
      "你可以帮我看电视吗？"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我昨天去了学校。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 学校。",
    "options": [
      "我昨天去了学校。",
      "我已经买东西了。",
      "最近姐姐常常需要听音乐。",
      "我没听清楚。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个电脑很重要。",
    "pinyin": "",
    "meaning": "电脑 này rất 重要。",
    "options": [
      "这个电脑很重要。",
      "我觉得做饭很重要。",
      "明天我们一起去公园吧。",
      "我需要买一些电影。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这件水果多少钱？",
    "pinyin": "",
    "meaning": "水果 này bao nhiêu tiền?",
    "options": [
      "他觉得做饭很重要。",
      "我的中文进步了一点。",
      "这件水果多少钱？",
      "这件电影多少钱？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个礼物很便宜。",
    "pinyin": "",
    "meaning": "礼物 này rất 便宜。",
    "options": [
      "我的朋友觉得做饭很重要。",
      "今天工作很忙。",
      "这个礼物很便宜。",
      "如果计划没有变化，我的朋友下午会在车站做饭。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我已经准备考试了。",
    "pinyin": "",
    "meaning": "Tôi đã 准备考试 rồi.",
    "options": [
      "为了准备明天的工作，哥哥今晚还要坐地铁。",
      "我已经准备考试了。",
      "因为工作很忙，哥哥只能晚上旅行。",
      "我需要买一些电影。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个手机很有意思。",
    "pinyin": "",
    "meaning": "手机 này rất 有意思。",
    "options": [
      "这个衣服很重要。",
      "周末的时候，姐姐喜欢去上海运动。",
      "这个手机很有意思。",
      "在第二个路口右转。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "我昨天去了商店。",
    "pinyin": "",
    "meaning": "Hôm qua tôi đã đi 商店。",
    "options": [
      "昨天哥哥在超市看电影，所以回家比较晚。",
      "昨天老师在餐厅学习汉语，所以回家比较晚。",
      "这个咖啡很便宜。",
      "我昨天去了商店。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "我需要买一些电影。",
    "pinyin": "",
    "meaning": "Tôi cần mua một ít 电影。",
    "options": [
      "你吃午饭了吗？",
      "我需要买一些电影。",
      "这个电脑很便宜。",
      "会议结束以后，妈妈马上回到上海继续准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个水果很贵。",
    "pinyin": "",
    "meaning": "水果 này rất 贵。",
    "options": [
      "这个词怎么用？",
      "会议结束以后，妈妈马上回到上海继续准备考试。",
      "这个水果很贵。",
      "今天孩子在车站坐地铁。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这件电影多少钱？",
    "pinyin": "",
    "meaning": "电影 này bao nhiêu tiền?",
    "options": [
      "这件电影多少钱？",
      "我忘记带手机了。",
      "妈妈希望明天可以继续运动。",
      "我需要买一些书。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个电脑很便宜。",
    "pinyin": "",
    "meaning": "电脑 này rất 便宜。",
    "options": [
      "你什么时候去公园？",
      "这个电脑很便宜。",
      "你可以帮我打扫房间吗？",
      "他觉得做饭很重要。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "我正在学习中文。",
    "pinyin": "",
    "meaning": "Tôi đang 学习中文。",
    "options": [
      "如果计划没有变化，我的朋友下午会在车站做饭。",
      "会议结束以后，同事马上回到学校继续准备考试。",
      "你会说中文吗？",
      "我正在学习中文。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "明天我们一起去银行吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 银行 nhé.",
    "options": [
      "你能给我一个例子吗？",
      "我听说老师最近在公园负责做饭。",
      "明天我们一起去银行吧。",
      "我有一个姐姐。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个水果很便宜。",
    "pinyin": "",
    "meaning": "水果 này rất 便宜。",
    "options": [
      "这个词怎么用？",
      "我昨天去了学校。",
      "如果计划没有变化，孩子下午会在北京看电影。",
      "这个水果很便宜。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个电影很贵。",
    "pinyin": "",
    "meaning": "电影 này rất 贵。",
    "options": [
      "这个电影很贵。",
      "老师正在检查咖啡，准备开始买东西。",
      "你可以帮我打扫房间吗？",
      "小心，地上很滑。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个咖啡很漂亮。",
    "pinyin": "",
    "meaning": "咖啡 này rất 漂亮。",
    "options": [
      "这个咖啡很漂亮。",
      "如果计划没有变化，我的朋友下午会在车站做饭。",
      "我喜欢打篮球。",
      "我会说一点中文。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "你什么时候去公园？",
    "pinyin": "",
    "meaning": "Khi nào bạn đi 公园?",
    "options": [
      "明天我们一起去超市吧。",
      "我听说爸爸最近在餐厅负责做饭。",
      "你什么时候去公园？",
      "你周末通常做什么？"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个电影很简单。",
    "pinyin": "",
    "meaning": "电影 này rất 简单。",
    "options": [
      "为了做作业，妈妈提前来到机场。",
      "今天工作很忙。",
      "这个电影很简单。",
      "这个电影很有意思。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个书很漂亮。",
    "pinyin": "",
    "meaning": "书 này rất 漂亮。",
    "options": [
      "这个书很漂亮。",
      "你家有几个人？",
      "姐姐告诉我，他最近正在做作业。",
      "我有一个妹妹。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个水果很有意思。",
    "pinyin": "",
    "meaning": "水果 này rất 有意思。",
    "options": [
      "你可以给我充电器吗？",
      "姐姐告诉我，他最近正在做作业。",
      "今天他在超市坐地铁。",
      "这个水果很有意思。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个衣服很重要。",
    "pinyin": "",
    "meaning": "衣服 này rất 重要。",
    "options": [
      "我的朋友正在检查咖啡，准备开始买东西。",
      "这个衣服很便宜。",
      "我觉得做饭很重要。",
      "这个衣服很重要。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个电影很便宜。",
    "pinyin": "",
    "meaning": "电影 này rất 便宜。",
    "options": [
      "这个电影很便宜。",
      "今天有点冷。",
      "慢慢来。",
      "你什么时候去车站？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个衣服很方便。",
    "pinyin": "",
    "meaning": "衣服 này rất 方便。",
    "options": [
      "我和朋友住在一起。",
      "这个礼物很方便。",
      "爸爸正在检查咖啡，准备开始买东西。",
      "这个衣服很方便。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个礼物很漂亮。",
    "pinyin": "",
    "meaning": "礼物 này rất 漂亮。",
    "options": [
      "姐姐每天都要准备考试。",
      "我们下午再联系。",
      "为了准备明天的工作，我的朋友今晚还要买东西。",
      "这个礼物很漂亮。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "明天我们一起去超市吧。",
    "pinyin": "",
    "meaning": "Ngày mai chúng ta cùng đi 超市 nhé.",
    "options": [
      "这个书很简单。",
      "她每天都要听音乐。",
      "老师正在检查咖啡，准备开始买东西。",
      "明天我们一起去超市吧。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个咖啡很方便。",
    "pinyin": "",
    "meaning": "咖啡 này rất 方便。",
    "options": [
      "我的同学每天都要听音乐。",
      "你收到我的消息了吗？",
      "这个咖啡很方便。",
      "今天我在医院坐地铁。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个电脑很方便。",
    "pinyin": "",
    "meaning": "电脑 này rất 方便。",
    "options": [
      "外面下雨了。",
      "你可以帮我打扫房间吗？",
      "这个电脑很方便。",
      "最近你常常需要运动。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个水果很漂亮。",
    "pinyin": "",
    "meaning": "水果 này rất 漂亮。",
    "options": [
      "今天他在超市坐地铁。",
      "水太烫了。",
      "请把窗户打开。",
      "这个水果很漂亮。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个手机很便宜。",
    "pinyin": "",
    "meaning": "手机 này rất 便宜。",
    "options": [
      "这个手机很便宜。",
      "我昨天去了车站。",
      "姐姐已经把衣服带到机场了。",
      "这件衣服多少钱？"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个礼物很贵。",
    "pinyin": "",
    "meaning": "礼物 này rất 贵。",
    "options": [
      "我六点下班。",
      "这个礼物很贵。",
      "我正在写邮件。",
      "会议结束以后，你马上回到机场继续听音乐。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个电影很有意思。",
    "pinyin": "",
    "meaning": "电影 này rất 有意思。",
    "options": [
      "这个衣服很有意思。",
      "这个电影很有意思。",
      "你什么时候去电影院？",
      "老师觉得学习汉语很重要。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个书很方便。",
    "pinyin": "",
    "meaning": "书 này rất 方便。",
    "options": [
      "外面下雨了。",
      "我已经看电视了。",
      "这个书很方便。",
      "我昨天去了商店。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个手机很简单。",
    "pinyin": "",
    "meaning": "手机 này rất 简单。",
    "options": [
      "今天孩子在车站坐地铁。",
      "你做得很好。",
      "外面下雨了。",
      "这个手机很简单。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个咖啡很重要。",
    "pinyin": "",
    "meaning": "咖啡 này rất 重要。",
    "options": [
      "这个咖啡很重要。",
      "最近同事常常需要准备考试。",
      "会议结束以后，同事马上回到学校继续准备考试。",
      "最近姐姐常常需要听音乐。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个手机很贵。",
    "pinyin": "",
    "meaning": "手机 này rất 贵。",
    "options": [
      "我正在开会。",
      "这个手机很贵。",
      "别担心。",
      "老师觉得学习汉语很重要。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个水果很方便。",
    "pinyin": "",
    "meaning": "水果 này rất 方便。",
    "options": [
      "当然可以。",
      "你什么时候去学校？",
      "这个书很方便。",
      "这个水果很方便。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个电影很方便。",
    "pinyin": "",
    "meaning": "电影 này rất 方便。",
    "options": [
      "这个电脑很漂亮。",
      "这个电影很方便。",
      "你可以帮我打扫房间吗？",
      "哥哥觉得看电影很重要。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个书很有意思。",
    "pinyin": "",
    "meaning": "书 này rất 有意思。",
    "options": [
      "这个书很有意思。",
      "我明白了。",
      "昨天爸爸在医院看电影，所以回家比较晚。",
      "请把窗户打开。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个礼物很方便。",
    "pinyin": "",
    "meaning": "礼物 này rất 方便。",
    "options": [
      "到了给我发消息。",
      "这个礼物很方便。",
      "你希望明天可以继续准备考试。",
      "这件书多少钱？"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个咖啡很简单。",
    "pinyin": "",
    "meaning": "咖啡 này rất 简单。",
    "options": [
      "我需要买一些书。",
      "这个衣服很重要。",
      "我的同学告诉我，他最近正在工作。",
      "这个咖啡很简单。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个电影很漂亮。",
    "pinyin": "",
    "meaning": "电影 này rất 漂亮。",
    "options": [
      "我今天感觉很好。",
      "我正在买东西。",
      "这个电影很漂亮。",
      "我的同学告诉我，他最近正在工作。"
    ],
    "correct": 2
  },
  {
    "level": 2,
    "audio": "这个电脑很漂亮。",
    "pinyin": "",
    "meaning": "电脑 này rất 漂亮。",
    "options": [
      "这个电脑很漂亮。",
      "我需要买一些衣服。",
      "我昨天去了商店。",
      "我已经买东西了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个电脑很有意思。",
    "pinyin": "",
    "meaning": "电脑 này rất 有意思。",
    "options": [
      "周末的时候，她喜欢去机场准备考试。",
      "这个电脑很有意思。",
      "我正在做作业。",
      "昨天孩子在公司做饭，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个礼物很简单。",
    "pinyin": "",
    "meaning": "礼物 này rất 简单。",
    "options": [
      "这个礼物很简单。",
      "我要一杯热茶。",
      "我不知道。",
      "我已经打扫房间了。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个衣服很有意思。",
    "pinyin": "",
    "meaning": "衣服 này rất 有意思。",
    "options": [
      "我昨天去了商店。",
      "这个衣服很有意思。",
      "我正在写邮件。",
      "她已经把报纸带到家里了。"
    ],
    "correct": 1
  },
  {
    "level": 2,
    "audio": "这个书很便宜。",
    "pinyin": "",
    "meaning": "书 này rất 便宜。",
    "options": [
      "没问题。",
      "你希望明天可以继续准备考试。",
      "这件手机多少钱？",
      "这个书很便宜。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个手机很方便。",
    "pinyin": "",
    "meaning": "手机 này rất 方便。",
    "options": [
      "你在哪里？",
      "你周末通常做什么？",
      "我周末喜欢看电影。",
      "这个手机很方便。"
    ],
    "correct": 3
  },
  {
    "level": 2,
    "audio": "这个手机很漂亮。",
    "pinyin": "",
    "meaning": "手机 này rất 漂亮。",
    "options": [
      "这个手机很漂亮。",
      "今天他在超市坐地铁。",
      "为了准备明天的工作，哥哥今晚还要坐地铁。",
      "昨天孩子在公司做饭，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 2,
    "audio": "这个衣服很便宜。",
    "pinyin": "",
    "meaning": "衣服 này rất 便宜。",
    "options": [
      "这个衣服很便宜。",
      "如果有时间，我会去机场学习汉语。",
      "明天我们一起去医院吧。",
      "我正在做作业。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我希望你能讨论计划。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 讨论计划。",
    "options": [
      "我希望你能讨论计划。",
      "我听说哥哥最近在家里负责解决问题。",
      "继续保持。",
      "早餐几点开始？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我们下午三点开始准备材料。",
    "pinyin": "",
    "meaning": "Chiều nay lúc ba giờ chúng ta bắt đầu 准备材料。",
    "options": [
      "虽然时间不多，但是经理还是完成了联系朋友。",
      "这个方法比较简单。",
      "我们下午三点开始准备材料。",
      "我已经预订好了酒店。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们需要提前完成任务。",
    "pinyin": "",
    "meaning": "Chúng ta cần 完成任务 trước.",
    "options": [
      "这件事情没有你想象的那么复杂。",
      "为了安排时间，经理提前来到广州。",
      "我们需要提前完成任务。",
      "第三声要注意变化。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "请不要忘记重新安排工作。",
    "pinyin": "",
    "meaning": "Đừng quên 重新安排工作。",
    "options": [
      "请集中注意力。",
      "为了准备明天的工作，经理今晚还要计划旅行。",
      "我希望你能联系客户。",
      "请不要忘记重新安排工作。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就讨论计划。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 讨论计划。",
    "options": [
      "我希望你能联系客户。",
      "我已经准备好计划了。",
      "我们应该先安排时间。",
      "如果明天下雨，我们就讨论计划。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请告诉我问题的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 问题。",
    "options": [
      "不要害怕说错。",
      "如果明天下雨，我们就准备材料。",
      "因为最近工作很忙，所以我没有时间检查文件。",
      "请告诉我问题的详细情况。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们下午三点开始检查文件。",
    "pinyin": "",
    "meaning": "Chiều nay lúc ba giờ chúng ta bắt đầu 检查文件。",
    "options": [
      "如果计划没有变化，老师下午会在餐厅买东西。",
      "如果明天下雨，我们就重新安排工作。",
      "我们下午三点开始检查文件。",
      "你已经做得很好了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就解决问题。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 解决问题。",
    "options": [
      "虽然时间不多，但是我还是完成了练习发音。",
      "请告诉我问题的详细情况。",
      "为了准备明天的工作，我今晚还要学习汉语。",
      "如果明天下雨，我们就解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就联系客户。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 联系客户。",
    "options": [
      "如果明天下雨，我们就联系客户。",
      "如果有时间，哥哥会去医院解决问题。",
      "祝你今天开心。",
      "会议结束以后，哥哥马上回到上海继续参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要提前出发。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 提前出发。",
    "options": [
      "这个问题比我想象的更清楚。",
      "为了提高效率，我们需要提前出发。",
      "会议结束以后，老师马上回到图书馆继续买东西。",
      "现在路上堵车吗？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间重新安排工作。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 重新安排工作。",
    "options": [
      "周末的时候，老师喜欢去北京准备考试。",
      "因为最近工作很忙，所以我没有时间重新安排工作。",
      "我们应该先联系客户。",
      "我想提高听力。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "这个问题比我想象的更复杂。",
    "pinyin": "",
    "meaning": "Vấn đề này 复杂 hơn tôi tưởng.",
    "options": [
      "继续保持。",
      "我告诉我，他最近正在学习汉语。",
      "这个问题比我想象的更复杂。",
      "请告诉我计划的详细情况。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "你对这个问题有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 问题 này?",
    "options": [
      "我们下午三点开始联系客户。",
      "因为工作很忙，经理只能晚上安排时间。",
      "你对这个问题有什么建议？",
      "没什么，只是有点累。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们应该先重新安排工作。",
    "pinyin": "",
    "meaning": "Chúng ta nên 重新安排工作 trước.",
    "options": [
      "为了安排时间，经理提前来到广州。",
      "我要去机场。",
      "我们明天再讨论。",
      "我们应该先重新安排工作。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "这个问题比我想象的更清楚。",
    "pinyin": "",
    "meaning": "Vấn đề này 清楚 hơn tôi tưởng.",
    "options": [
      "请不要忘记检查文件。",
      "今天的工作完成了吗？",
      "这个问题比我想象的更清楚。",
      "我们下午三点开始提前出发。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我已经准备好问题了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 问题 rồi.",
    "options": [
      "今天经理在图书馆计划旅行。",
      "因为工作很忙，我只能晚上学习汉语。",
      "让我想一想。",
      "我已经准备好问题了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们应该先完成任务。",
    "pinyin": "",
    "meaning": "Chúng ta nên 完成任务 trước.",
    "options": [
      "我已经把机票带到家里了。",
      "这样更容易记住。",
      "我们应该先完成任务。",
      "听力对学习语言很重要。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们需要提前重新安排工作。",
    "pinyin": "",
    "meaning": "Chúng ta cần 重新安排工作 trước.",
    "options": [
      "会议结束以后，哥哥马上回到公园继续完成作业。",
      "我希望你能联系客户。",
      "我们需要提前重新安排工作。",
      "我马上处理。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我希望你能准备材料。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 准备材料。",
    "options": [
      "第三声要注意变化。",
      "我希望你能准备材料。",
      "我已经完成了。",
      "今天老师在图书馆准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我们应该先准备材料。",
    "pinyin": "",
    "meaning": "Chúng ta nên 准备材料 trước.",
    "options": [
      "我要去机场。",
      "老师正在检查中文书，准备开始买东西。",
      "我们应该先准备材料。",
      "这个问题比我想象的更复杂。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们应该先检查文件。",
    "pinyin": "",
    "meaning": "Chúng ta nên 检查文件 trước.",
    "options": [
      "我听说经理最近在广州负责安排时间。",
      "今天就练到这里。",
      "我们应该先检查文件。",
      "为了提高效率，我们需要认真考虑。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "请告诉我计划的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 计划。",
    "options": [
      "为了提高效率，我们需要讨论计划。",
      "我已经准备好资料了。",
      "老师正在检查礼物，准备开始介绍自己。",
      "请告诉我计划的详细情况。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间安排时间。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 安排时间。",
    "options": [
      "我想住两晚。",
      "因为最近工作很忙，所以我没有时间安排时间。",
      "我告诉我，他最近正在打扫房间。",
      "经过讨论，我们决定认真考虑。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要联系客户。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 联系客户。",
    "options": [
      "我已经把地址发给你了。",
      "因为下雨，所以我们没有出去。",
      "为了提高效率，我们需要联系客户。",
      "我已经准备好申请了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们下午三点开始安排时间。",
    "pinyin": "",
    "meaning": "Chiều nay lúc ba giờ chúng ta bắt đầu 安排时间。",
    "options": [
      "因为最近工作很忙，所以我没有时间联系客户。",
      "老师正在检查礼物，准备开始介绍自己。",
      "我们下午三点开始安排时间。",
      "坚持下去一定会有进步。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要解决问题。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 解决问题。",
    "options": [
      "如果有时间，经理会去机场联系朋友。",
      "周末的时候，哥哥喜欢去家里完成作业。",
      "为了提高效率，我们需要解决问题。",
      "因为最近工作很忙，所以我没有时间安排时间。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定讨论计划。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 讨论计划。",
    "options": [
      "我听说经理最近在公司负责联系朋友。",
      "经过讨论，我们决定讨论计划。",
      "听到熟悉的词就先记下来。",
      "会议结束以后，老师马上回到北京继续介绍自己。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你对这个报告有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 报告 này?",
    "options": [
      "如果明天下雨，我们就认真考虑。",
      "哥哥觉得完成作业很重要。",
      "你对这个报告有什么建议？",
      "如果明天下雨，我们就准备材料。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定安排时间。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 安排时间。",
    "options": [
      "轮到你了。",
      "你对这个报告有什么建议？",
      "请稍等一下。",
      "经过讨论，我们决定安排时间。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "这个问题比我想象的更方便。",
    "pinyin": "",
    "meaning": "Vấn đề này 方便 hơn tôi tưởng.",
    "options": [
      "这个问题比我想象的更方便。",
      "我听说哥哥最近在家里负责解决问题。",
      "哥哥每天都要参加会议。",
      "最近老师常常需要准备考试。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经把行程发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 行程 cho bạn rồi.",
    "options": [
      "我已经把行程发给你了。",
      "这个决定对大家都很重要。",
      "请在这里停车。",
      "我每天都要打扫房间。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "请不要忘记完成任务。",
    "pinyin": "",
    "meaning": "Đừng quên 完成任务。",
    "options": [
      "请不要忘记完成任务。",
      "我正在车站学习汉语。",
      "会议结束以后，哥哥马上回到公园继续完成作业。",
      "会议结束以后，哥哥马上回到医院继续解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经准备好文件了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 文件 rồi.",
    "options": [
      "我已经准备好文件了。",
      "现在开始下一题。",
      "学习语言需要坚持。",
      "只要努力，就会进步。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我们下午三点开始提前出发。",
    "pinyin": "",
    "meaning": "Chiều nay lúc ba giờ chúng ta bắt đầu 提前出发。",
    "options": [
      "因为最近工作很忙，所以我没有时间讨论计划。",
      "我们以后再决定。",
      "周末的时候，老师喜欢去广州买东西。",
      "我们下午三点开始提前出发。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们应该先讨论计划。",
    "pinyin": "",
    "meaning": "Chúng ta nên 讨论计划 trước.",
    "options": [
      "我们应该先讨论计划。",
      "我希望你能理解我的意思。",
      "没什么，只是有点累。",
      "如果计划没有变化，经理下午会在餐厅联系朋友。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经把报告发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 报告 cho bạn rồi.",
    "options": [
      "我已经把报告发给你了。",
      "我已经把电脑带到上海了。",
      "昨天经理在广州计划旅行，所以回家比较晚。",
      "如果计划没有变化，经理下午会在图书馆计划旅行。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "请告诉我文件的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 文件。",
    "options": [
      "经过讨论，我们决定解决问题。",
      "先听关键词，再理解整句话。",
      "请告诉我文件的详细情况。",
      "你的反应越来越快了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间联系客户。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 联系客户。",
    "options": [
      "最近老师常常需要介绍自己。",
      "我们快迟到了。",
      "虽然时间不多，但是哥哥还是完成了解决问题。",
      "因为最近工作很忙，所以我没有时间联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请不要忘记安排时间。",
    "pinyin": "",
    "meaning": "Đừng quên 安排时间。",
    "options": [
      "你对这个文件有什么建议？",
      "你对这个计划有什么建议？",
      "请不要忘记安排时间。",
      "电梯在哪里？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就重新安排工作。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 重新安排工作。",
    "options": [
      "经理觉得计划旅行很重要。",
      "如果明天下雨，我们就重新安排工作。",
      "今天老师在广州介绍自己。",
      "我希望你能认真考虑。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "这个问题比我想象的更困难。",
    "pinyin": "",
    "meaning": "Vấn đề này 困难 hơn tôi tưởng.",
    "options": [
      "周末的时候，老师喜欢去公司介绍自己。",
      "为了联系朋友，经理提前来到图书馆。",
      "不要只记答案，要听懂句子。",
      "这个问题比我想象的更困难。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我希望你能重新安排工作。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 重新安排工作。",
    "options": [
      "下次我们继续。",
      "我听说经理最近在机场负责计划旅行。",
      "我希望你能重新安排工作。",
      "因为下雨，所以我们没有出去。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我已经把地址发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 地址 cho bạn rồi.",
    "options": [
      "我已经把地址发给你了。",
      "我已经把资料发给你了。",
      "请告诉我消息的详细情况。",
      "请按照说明完成这项工作。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定认真考虑。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 认真考虑。",
    "options": [
      "早餐几点开始？",
      "我说得对吗？",
      "我同意你的看法。",
      "经过讨论，我们决定认真考虑。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请不要忘记提前出发。",
    "pinyin": "",
    "meaning": "Đừng quên 提前出发。",
    "options": [
      "这一题你答对了。",
      "经过讨论，经理决定在图书馆安排时间。",
      "我觉得可以试试。",
      "请不要忘记提前出发。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我希望你能联系客户。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 联系客户。",
    "options": [
      "我希望你能联系客户。",
      "我已经准备好申请了。",
      "这件事情没有你想象的那么复杂。",
      "你觉得这个办法怎么样？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经把消息发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 消息 cho bạn rồi.",
    "options": [
      "我已经完成了。",
      "如果计划没有变化，经理下午会在北京安排时间。",
      "我已经把消息发给你了。",
      "老师正在公司介绍自己。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要认真考虑。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 认真考虑。",
    "options": [
      "我们下午三点开始提前出发。",
      "为了完成作业，哥哥提前来到公园。",
      "虽然时间不多，但是哥哥还是完成了参加会议。",
      "为了提高效率，我们需要认真考虑。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "你对这个合同有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 合同 này?",
    "options": [
      "如果有时间，哥哥会去超市参加会议。",
      "我想提高听力。",
      "你对这个合同有什么建议？",
      "请按照说明完成这项工作。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定重新安排工作。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 重新安排工作。",
    "options": [
      "经过讨论，我们决定重新安排工作。",
      "我希望以后可以说得更流利。",
      "我还需要一点时间。",
      "我们下午三点开始重新安排工作。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经准备好合同了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 合同 rồi.",
    "options": [
      "无线网络的密码是什么？",
      "多听几遍就会越来越熟悉。",
      "轮到你了。",
      "我已经准备好合同了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们需要提前提前出发。",
    "pinyin": "",
    "meaning": "Chúng ta cần 提前出发 trước.",
    "options": [
      "如果明天下雨，我们就重新安排工作。",
      "为了联系朋友，经理提前来到图书馆。",
      "我们需要提前提前出发。",
      "这个问题需要时间。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我已经准备好申请了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 申请 rồi.",
    "options": [
      "我希望你能安排时间。",
      "为了准备明天的工作，老师今晚还要准备考试。",
      "我已经准备好申请了。",
      "没什么，只是有点累。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就完成任务。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 完成任务。",
    "options": [
      "经理觉得计划旅行很重要。",
      "如果明天下雨，我们就完成任务。",
      "这个决定对大家都很重要。",
      "请提前十分钟到。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我已经把申请发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 申请 cho bạn rồi.",
    "options": [
      "请稍等一下。",
      "如果明天下雨，我们就完成任务。",
      "今天我们练习十句话。",
      "我已经把申请发给你了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请告诉我消息的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 消息。",
    "options": [
      "昨天老师在北京买东西，所以回家比较晚。",
      "请告诉我消息的详细情况。",
      "我已经把行程发给你了。",
      "明天继续练习。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你对这个行程有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 行程 này?",
    "options": [
      "他正在准备考试，所以很忙。",
      "如果明天下雨，我们就完成任务。",
      "我们需要提前解决问题。",
      "你对这个行程有什么建议？"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我希望你能安排时间。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 安排时间。",
    "options": [
      "我已经准备好计划了。",
      "我希望你能安排时间。",
      "每天一点点就很好。",
      "你为什么不开心？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你对这个文件有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 文件 này?",
    "options": [
      "你对这个文件有什么建议？",
      "经理正在检查手机，准备开始安排时间。",
      "祝你今天开心。",
      "我同意你的看法。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "这个问题比我想象的更重要。",
    "pinyin": "",
    "meaning": "Vấn đề này 重要 hơn tôi tưởng.",
    "options": [
      "经理告诉我，他最近正在计划旅行。",
      "我听说老师最近在公司负责买东西。",
      "今天我在上海练习发音。",
      "这个问题比我想象的更重要。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我已经把合同发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 合同 cho bạn rồi.",
    "options": [
      "我已经准备好地址了。",
      "会议几点开始？",
      "我已经把合同发给你了。",
      "学习语言需要时间。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定完成任务。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 完成任务。",
    "options": [
      "下一班车几点出发？",
      "经过讨论，我们决定完成任务。",
      "下一题会稍微难一点。",
      "我们应该先完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我们下午三点开始完成任务。",
    "pinyin": "",
    "meaning": "Chiều nay lúc ba giờ chúng ta bắt đầu 完成任务。",
    "options": [
      "请问还有空房吗？",
      "如果有时间，哥哥会去车站完成作业。",
      "为了打扫房间，我提前来到公园。",
      "我们下午三点开始完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "你对这个消息有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 消息 này?",
    "options": [
      "因为今天下雨，所以我没出去。",
      "周末的时候，老师喜欢去北京准备考试。",
      "你对这个消息有什么建议？",
      "昨天经理在北京联系朋友，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定提前出发。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 提前出发。",
    "options": [
      "让我想一想。",
      "经过讨论，我们决定提前出发。",
      "哥哥每天都要完成作业。",
      "今天老师在餐厅介绍自己。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你对这个地址有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 地址 này?",
    "options": [
      "网络有点慢。",
      "你对这个地址有什么建议？",
      "我听说经理最近在公司负责联系朋友。",
      "这个问题需要时间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我希望你能解决问题。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 解决问题。",
    "options": [
      "请告诉我详细的地址。",
      "我告诉我，他最近正在打扫房间。",
      "我希望你能解决问题。",
      "因为下雨，所以我们没有出去。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们应该先认真考虑。",
    "pinyin": "",
    "meaning": "Chúng ta nên 认真考虑 trước.",
    "options": [
      "我们每天晚上聊天。",
      "哥哥每天都要解决问题。",
      "我们应该先认真考虑。",
      "经过讨论，经理决定在北京联系朋友。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "这个问题比我想象的更合理。",
    "pinyin": "",
    "meaning": "Vấn đề này 合理 hơn tôi tưởng.",
    "options": [
      "这个问题比我想象的更合理。",
      "经过讨论，我决定在超市打扫房间。",
      "不要害怕说错。",
      "昨天经理在北京联系朋友，所以回家比较晚。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我们下午三点开始重新安排工作。",
    "pinyin": "",
    "meaning": "Chiều nay lúc ba giờ chúng ta bắt đầu 重新安排工作。",
    "options": [
      "这个方法比较简单。",
      "我们下午三点开始重新安排工作。",
      "我告诉我，他最近正在学习汉语。",
      "网络有点慢。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要讨论计划。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 讨论计划。",
    "options": [
      "我们下午三点开始重新安排工作。",
      "为了提高效率，我们需要讨论计划。",
      "老师正在机场准备考试。",
      "你的反应越来越快了。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间提前出发。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 提前出发。",
    "options": [
      "我们应该先安排时间。",
      "最近哥哥常常需要参加会议。",
      "今天老师在广州介绍自己。",
      "因为最近工作很忙，所以我没有时间提前出发。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就安排时间。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 安排时间。",
    "options": [
      "轮到你了。",
      "如果明天下雨，我们就安排时间。",
      "经理正在检查手机，准备开始安排时间。",
      "昨天哥哥在公园解决问题，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定解决问题。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 解决问题。",
    "options": [
      "经过讨论，我们决定检查文件。",
      "因为最近工作很忙，所以我没有时间讨论计划。",
      "我想提高听力。",
      "经过讨论，我们决定解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就认真考虑。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 认真考虑。",
    "options": [
      "今天的内容很简单。",
      "最近老师常常需要准备考试。",
      "明天继续练习。",
      "如果明天下雨，我们就认真考虑。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间检查文件。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 检查文件。",
    "options": [
      "如果有时间，经理会去餐厅安排时间。",
      "周末的时候，老师喜欢去北京准备考试。",
      "你对这个行程有什么建议？",
      "因为最近工作很忙，所以我没有时间检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要准备材料。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 准备材料。",
    "options": [
      "虽然时间不多，但是经理还是完成了安排时间。",
      "为了提高效率，我们需要准备材料。",
      "哥哥觉得解决问题很重要。",
      "会议结束以后，哥哥马上回到上海继续参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "请告诉我资料的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 资料。",
    "options": [
      "请不要忘记检查文件。",
      "如果明天下雨，我们就重新安排工作。",
      "经理告诉我，他最近正在计划旅行。",
      "请告诉我资料的详细情况。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要检查文件。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 检查文件。",
    "options": [
      "我不太同意。",
      "为了提高效率，我们需要检查文件。",
      "我听说老师最近在广州负责准备考试。",
      "虽然时间不多，但是经理还是完成了安排时间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我已经把文件发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 文件 cho bạn rồi.",
    "options": [
      "因为最近工作很忙，所以我没有时间重新安排工作。",
      "我已经把文件发给你了。",
      "为了准备明天的工作，我今晚还要打扫房间。",
      "请把文件发给我。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "请告诉我合同的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 合同。",
    "options": [
      "请纠正我的发音。",
      "这个文件在哪里？",
      "我们需要提前安排时间。",
      "请告诉我合同的详细情况。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们需要提前讨论计划。",
    "pinyin": "",
    "meaning": "Chúng ta cần 讨论计划 trước.",
    "options": [
      "为了提高效率，我们需要提前出发。",
      "我们先讨论一下。",
      "我们需要提前讨论计划。",
      "我喜欢用中文聊天。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们应该先联系客户。",
    "pinyin": "",
    "meaning": "Chúng ta nên 联系客户 trước.",
    "options": [
      "今天的内容很简单。",
      "如果明天有时间，我们一起去。",
      "如果有问题，请告诉我。",
      "我们应该先联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请告诉我申请的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 申请。",
    "options": [
      "我们从第一题开始。",
      "请告诉我申请的详细情况。",
      "每天一点点就很好。",
      "老师正在检查雨伞，准备开始准备考试。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我已经准备好消息了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 消息 rồi.",
    "options": [
      "周末的时候，我喜欢去上海学习汉语。",
      "最近老师常常需要介绍自己。",
      "我已经准备好消息了。",
      "周末的时候，老师喜欢去广州买东西。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就检查文件。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 检查文件。",
    "options": [
      "如果明天下雨，我们就检查文件。",
      "如果明天下雨，我们就准备材料。",
      "为了提高效率，我们需要讨论计划。",
      "今天老师在餐厅介绍自己。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定检查文件。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 检查文件。",
    "options": [
      "经过讨论，我们决定检查文件。",
      "把新单词放进句子里学习。",
      "我听说经理最近在机场负责计划旅行。",
      "请跟我读一遍。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我希望你能完成任务。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 完成任务。",
    "options": [
      "下一题会稍微难一点。",
      "我希望你能完成任务。",
      "经过讨论，经理决定在北京联系朋友。",
      "为了准备明天的工作，我今晚还要打扫房间。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "请告诉我行程的详细情况。",
    "pinyin": "",
    "meaning": "Hãy cho tôi biết tình hình chi tiết của 行程。",
    "options": [
      "因为最近工作很忙，所以我没有时间提前出发。",
      "请告诉我行程的详细情况。",
      "这个问题比我想象的更复杂。",
      "如果有时间，经理会去银行计划旅行。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "你对这个资料有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 资料 này?",
    "options": [
      "你为什么不开心？",
      "你对这个资料有什么建议？",
      "我已经准备好合同了。",
      "我们需要提前准备材料。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就准备材料。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 准备材料。",
    "options": [
      "下次我们继续。",
      "我已经把文件发给你了。",
      "我们下午三点开始联系客户。",
      "如果明天下雨，我们就准备材料。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我已经准备好地址了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 地址 rồi.",
    "options": [
      "会议结束以后，老师马上回到北京继续介绍自己。",
      "我每天都要学习汉语。",
      "我们应该先安排时间。",
      "我已经准备好地址了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "这个问题比我想象的更严重。",
    "pinyin": "",
    "meaning": "Vấn đề này 严重 hơn tôi tưởng.",
    "options": [
      "为了提高效率，我们需要检查文件。",
      "重复练习可以提高反应速度。",
      "请稍等一下。",
      "这个问题比我想象的更严重。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们需要提前安排时间。",
    "pinyin": "",
    "meaning": "Chúng ta cần 安排时间 trước.",
    "options": [
      "我们需要提前安排时间。",
      "哥哥已经把自行车带到家里了。",
      "为了准备明天的工作，经理今晚还要计划旅行。",
      "经过讨论，我们决定提前出发。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间完成任务。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 完成任务。",
    "options": [
      "因为工作很忙，我只能晚上打扫房间。",
      "因为最近工作很忙，所以我没有时间完成任务。",
      "老师正在公司介绍自己。",
      "你对这个申请有什么建议？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我们需要提前检查文件。",
    "pinyin": "",
    "meaning": "Chúng ta cần 检查文件 trước.",
    "options": [
      "昨天老师在北京买东西，所以回家比较晚。",
      "我们需要提前检查文件。",
      "因为下雨，所以我们没有出去。",
      "为了联系朋友，经理提前来到图书馆。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "请不要忘记联系客户。",
    "pinyin": "",
    "meaning": "Đừng quên 联系客户。",
    "options": [
      "如果明天有时间，我们一起去。",
      "我们需要提前准备材料。",
      "请不要忘记联系客户。",
      "我正在家里练习发音。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我们应该先安排时间。",
    "pinyin": "",
    "meaning": "Chúng ta nên 安排时间 trước.",
    "options": [
      "请纠正我的发音。",
      "为了准备明天的工作，我今晚还要学习汉语。",
      "我们应该先安排时间。",
      "因为最近工作很忙，所以我没有时间解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我已经把问题发给你了。",
    "pinyin": "",
    "meaning": "Tôi đã gửi 问题 cho bạn rồi.",
    "options": [
      "今天比昨天进步了。",
      "经过讨论，哥哥决定在医院参加会议。",
      "我觉得可以试试。",
      "我已经把问题发给你了。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "请不要忘记检查文件。",
    "pinyin": "",
    "meaning": "Đừng quên 检查文件。",
    "options": [
      "哥哥觉得解决问题很重要。",
      "请不要忘记检查文件。",
      "先听关键词，再理解整句话。",
      "昨天经理在图书馆安排时间，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "如果明天下雨，我们就提前出发。",
    "pinyin": "",
    "meaning": "Nếu ngày mai mưa, chúng ta sẽ 提前出发。",
    "options": [
      "如果明天下雨，我们就提前出发。",
      "最近老师常常需要准备考试。",
      "我每天都要打扫房间。",
      "我们需要提前准备材料。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我们下午三点开始联系客户。",
    "pinyin": "",
    "meaning": "Chiều nay lúc ba giờ chúng ta bắt đầu 联系客户。",
    "options": [
      "今天比昨天进步了。",
      "因为最近工作很忙，所以我没有时间解决问题。",
      "我们下午三点开始联系客户。",
      "会议结束以后，哥哥马上回到上海继续参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "经过讨论，我们决定准备材料。",
    "pinyin": "",
    "meaning": "Sau khi thảo luận, chúng tôi quyết định 准备材料。",
    "options": [
      "因为最近工作很忙，所以我没有时间提前出发。",
      "这件事情没有你想象的那么复杂。",
      "我们需要提前解决问题。",
      "经过讨论，我们决定准备材料。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我们应该先提前出发。",
    "pinyin": "",
    "meaning": "Chúng ta nên 提前出发 trước.",
    "options": [
      "我已经准备好计划了。",
      "加油！",
      "我们应该先提前出发。",
      "如果明天下雨，我们就准备材料。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间解决问题。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 解决问题。",
    "options": [
      "坚持下去一定会有进步。",
      "因为最近工作很忙，所以我没有时间解决问题。",
      "请提前十分钟到。",
      "你的反应越来越快了。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我们需要提前解决问题。",
    "pinyin": "",
    "meaning": "Chúng ta cần 解决问题 trước.",
    "options": [
      "我们需要提前解决问题。",
      "经过讨论，我们决定提前出发。",
      "我们应该先重新安排工作。",
      "你觉得中文难吗？"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我希望你能认真考虑。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 认真考虑。",
    "options": [
      "会议结束以后，老师马上回到北京继续介绍自己。",
      "我希望你能认真考虑。",
      "为了提高效率，我们需要联系客户。",
      "把新单词放进句子里学习。"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "我已经准备好资料了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 资料 rồi.",
    "options": [
      "为了计划旅行，经理提前来到北京。",
      "老师希望明天可以继续准备考试。",
      "我已经准备好资料了。",
      "经理已经把文件带到公司了。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "我希望你能提前出发。",
    "pinyin": "",
    "meaning": "Tôi hy vọng bạn có thể 提前出发。",
    "options": [
      "今天经理在北京安排时间。",
      "经过讨论，我们决定检查文件。",
      "我希望你能提前出发。",
      "你平时跟谁练习中文？"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间准备材料。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 准备材料。",
    "options": [
      "经过讨论，我们决定检查文件。",
      "这样做比较方便。",
      "别想太多。",
      "因为最近工作很忙，所以我没有时间准备材料。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "我已经准备好计划了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 计划 rồi.",
    "options": [
      "我已经准备好计划了。",
      "我听说经理最近在公司负责联系朋友。",
      "这个决定对大家都很重要。",
      "我已经把问题发给你了。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "你对这个申请有什么建议？",
    "pinyin": "",
    "meaning": "Bạn có đề xuất gì về 申请 này?",
    "options": [
      "你对这个申请有什么建议？",
      "我们以后再决定。",
      "我已经把行程发给你了。",
      "每天一点点就很好。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "我已经准备好行程了。",
    "pinyin": "",
    "meaning": "Tôi đã chuẩn bị xong 行程 rồi.",
    "options": [
      "你已经做得很好了。",
      "我已经准备好行程了。",
      "这个方法比较简单。",
      "你对这个报告有什么建议？"
    ],
    "correct": 1
  },
  {
    "level": 3,
    "audio": "为了提高效率，我们需要重新安排工作。",
    "pinyin": "",
    "meaning": "Để nâng cao hiệu quả, chúng ta cần 重新安排工作。",
    "options": [
      "你已经做得很好了。",
      "你的反应越来越快了。",
      "为了提高效率，我们需要重新安排工作。",
      "请不要忘记重新安排工作。"
    ],
    "correct": 2
  },
  {
    "level": 3,
    "audio": "请不要忘记准备材料。",
    "pinyin": "",
    "meaning": "Đừng quên 准备材料。",
    "options": [
      "请不要忘记准备材料。",
      "我希望你能提前出发。",
      "不要只记答案，要听懂句子。",
      "经过讨论，我们决定提前出发。"
    ],
    "correct": 0
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间讨论计划。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 讨论计划。",
    "options": [
      "我马上处理。",
      "经过讨论，我们决定讨论计划。",
      "最近老师常常需要准备考试。",
      "因为最近工作很忙，所以我没有时间讨论计划。"
    ],
    "correct": 3
  },
  {
    "level": 3,
    "audio": "因为最近工作很忙，所以我没有时间认真考虑。",
    "pinyin": "",
    "meaning": "Vì gần đây công việc rất bận nên tôi không có thời gian 认真考虑。",
    "options": [
      "这个问题比我想象的更方便。",
      "因为最近工作很忙，所以我没有时间认真考虑。",
      "虽然时间不多，但是我还是完成了学习汉语。",
      "请把文件发给我。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在完成任务。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 完成任务。",
    "options": [
      "为了提高工作效率，公司正在完成任务。",
      "为了完成新的任务，公司正在提交报告。",
      "虽然资金还不充足，但是项目还是安排会议。",
      "为了解决当前问题，公司正在修改计划。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "目前最重要的是提交报告。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 提交报告。",
    "options": [
      "为了解决当前问题，公司正在提高效率。",
      "为了改善服务质量，公司正在调整工作安排。",
      "目前最重要的是提交报告。",
      "邻居告诉我，他最近正在联系客户。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过调查，记者发现情况比预想的严重。",
    "pinyin": "",
    "meaning": "Sau khi điều tra, phóng viên phát hiện 情况比预想的严重。",
    "options": [
      "会议结束以后，经理马上回到公司继续提高效率。",
      "为了准备报告，我的同事提前来到上海。",
      "经过调查，记者发现情况比预想的严重。",
      "经过调查，记者发现客户有新的要求。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在修改计划。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 修改计划。",
    "options": [
      "为了改善服务质量，公司正在修改计划。",
      "我听说经理最近在机场负责讨论计划。",
      "今天经理在餐厅参加会议。",
      "我听说邻居最近在火车站负责检查文件。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是提交报告。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 提交报告。",
    "options": [
      "虽然天气发生变化，但是项目还是提交报告。",
      "虽然资金还不充足，但是项目还是提交报告。",
      "虽然资金还不充足，但是项目还是安排会议。",
      "经过多次沟通，我们决定解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过调查，记者发现客户有新的要求。",
    "pinyin": "",
    "meaning": "Sau khi điều tra, phóng viên phát hiện 客户有新的要求。",
    "options": [
      "这个问题不仅重要，而且影响比较大。",
      "经过调查，记者发现客户有新的要求。",
      "为了完成新的任务，公司正在提交报告。",
      "今天记者在广州申请签证。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了保证项目顺利进行，公司正在完成任务。",
    "pinyin": "",
    "meaning": "Để 保证项目顺利进行, công ty đang 完成任务。",
    "options": [
      "为了避免时间上的浪费，我们必须提交报告。",
      "我听说邻居最近在火车站负责检查文件。",
      "邻居希望明天可以继续解决问题。",
      "为了保证项目顺利进行，公司正在完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "这个问题不仅复杂，而且值得认真考虑。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 复杂 mà còn 值得认真考虑。",
    "options": [
      "这个问题不仅有效，而且值得认真考虑。",
      "如果时间比较紧，我们就可以安排会议。",
      "这个问题不仅复杂，而且值得认真考虑。",
      "为了避免时间上的浪费，我们必须提交报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责安排会议，并且需要处理突发情况。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 安排会议, đồng thời cần 处理突发情况。",
    "options": [
      "他负责安排会议，并且需要处理突发情况。",
      "为了避免不必要的麻烦，我们必须完成任务。",
      "为了改善服务质量，公司正在联系客户。",
      "如果天气发生变化，我们就可以提交报告。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了解决当前问题，公司正在解决问题。",
    "pinyin": "",
    "meaning": "Để 解决当前问题, công ty đang 解决问题。",
    "options": [
      "为了准备明天的工作，经理今晚还要参加会议。",
      "这个问题不仅重要，而且需要长期解决。",
      "为了解决当前问题，公司正在解决问题。",
      "经过进一步调查，我们决定检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在安排会议。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 安排会议。",
    "options": [
      "根据客户意见，我们需要重新检查文件。",
      "我的同事告诉我，他最近正在准备报告。",
      "为了解决当前问题，公司正在解决问题。",
      "为了提高工作效率，公司正在安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了避免不必要的麻烦，我们必须联系客户。",
    "pinyin": "",
    "meaning": "Để tránh 不必要的麻烦, chúng ta phải 联系客户。",
    "options": [
      "如果时间比较紧，我们就可以解决问题。",
      "根据市场变化，我们需要重新检查文件。",
      "经过调查，记者发现原来的计划需要调整。",
      "为了避免不必要的麻烦，我们必须联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了完成新的任务，公司正在完成任务。",
    "pinyin": "",
    "meaning": "Để 完成新的任务, công ty đang 完成任务。",
    "options": [
      "经过调查，记者发现这个问题非常复杂。",
      "为了完成新的任务，公司正在完成任务。",
      "这个问题不仅复杂，而且影响比较大。",
      "根据最新资料，我们需要重新解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过调查，记者发现原来的计划需要调整。",
    "pinyin": "",
    "meaning": "Sau khi điều tra, phóng viên phát hiện 原来的计划需要调整。",
    "options": [
      "他负责提高效率，并且需要处理突发情况。",
      "经过调查，记者发现原来的计划需要调整。",
      "他负责安排会议，并且需要完成相关报告。",
      "经过认真讨论，我们决定调整工作安排。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免时间上的浪费，我们必须修改计划。",
    "pinyin": "",
    "meaning": "Để tránh 时间上的浪费, chúng ta phải 修改计划。",
    "options": [
      "经过充分准备，我们决定检查文件。",
      "为了避免时间上的浪费，我们必须修改计划。",
      "为了提高工作效率，公司正在安排会议。",
      "我听说邻居最近在火车站负责检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "目前最重要的是安排会议。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 安排会议。",
    "options": [
      "经过调查，记者发现原来的计划需要调整。",
      "目前最重要的是安排会议。",
      "为了提高工作效率，公司正在提交报告。",
      "他负责解决问题，并且需要及时联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责提交报告，并且需要完成相关报告。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提交报告, đồng thời cần 完成相关报告。",
    "options": [
      "为了解决当前问题，公司正在解决问题。",
      "虽然天气发生变化，但是项目还是安排会议。",
      "记者觉得申请签证很重要。",
      "他负责提交报告，并且需要完成相关报告。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然资金还不充足，但是项目还是提高效率。",
    "pinyin": "",
    "meaning": "Mặc dù 资金还不充足, nhưng dự án vẫn 提高效率。",
    "options": [
      "为了避免信息泄露，我们必须解决问题。",
      "根据市场变化，我们需要重新检查文件。",
      "虽然资金还不充足，但是项目还是提高效率。",
      "他负责联系客户，并且需要完成相关报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据最新资料，我们需要重新安排会议。",
    "pinyin": "",
    "meaning": "Dựa trên 最新资料, chúng ta cần 安排会议 lại.",
    "options": [
      "目前最重要的是完成任务。",
      "根据客户意见，我们需要重新调整工作安排。",
      "根据最新资料，我们需要重新安排会议。",
      "为了避免时间上的浪费，我们必须提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须完成任务。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 完成任务。",
    "options": [
      "为了解决当前问题，公司正在提交报告。",
      "为了改善服务质量，公司正在提交报告。",
      "根据调查结果，我们需要重新安排会议。",
      "为了避免信息泄露，我们必须完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新检查文件。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 检查文件 lại.",
    "options": [
      "经过讨论，记者决定在餐厅安排工作。",
      "为了准备明天的工作，我的同事今晚还要学习新知识。",
      "根据市场变化，我们需要重新检查文件。",
      "根据市场变化，我们需要重新联系客户。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以完成任务。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 完成任务。",
    "options": [
      "为了提高工作效率，公司正在提交报告。",
      "经过讨论，记者决定在餐厅安排工作。",
      "如果遇到一些困难，我们就可以完成任务。",
      "邻居每天都要解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "这个问题不仅合理，而且需要长期解决。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 合理 mà còn 需要长期解决。",
    "options": [
      "虽然天气发生变化，但是项目还是修改计划。",
      "这个问题不仅合理，而且需要长期解决。",
      "他负责安排会议，并且需要完成相关报告。",
      "会议结束以后，经理马上回到公司继续提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然计划没有改变，但是项目还是解决问题。",
    "pinyin": "",
    "meaning": "Mặc dù 计划没有改变, nhưng dự án vẫn 解决问题。",
    "options": [
      "这个问题不仅合理，而且有一定的难度。",
      "虽然计划没有改变，但是项目还是解决问题。",
      "为了避免严重的错误，我们必须安排会议。",
      "邻居觉得联系客户很重要。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "这个问题不仅重要，而且影响比较大。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 重要 mà còn 影响比较大。",
    "options": [
      "因为工作很忙，经理只能晚上参加会议。",
      "为了完成新的任务，公司正在安排会议。",
      "这个问题不仅重要，而且影响比较大。",
      "虽然天气发生变化，但是项目还是提交报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果天气发生变化，我们就可以提交报告。",
    "pinyin": "",
    "meaning": "Nếu 天气发生变化, chúng ta có thể 提交报告。",
    "options": [
      "如果天气发生变化，我们就可以提交报告。",
      "记者已经把电脑带到会议室了。",
      "为了改善服务质量，公司正在联系客户。",
      "邻居觉得解决问题很重要。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "这个问题不仅合理，而且有一定的难度。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 合理 mà còn 有一定的难度。",
    "options": [
      "如果遇到一些困难，我们就可以调整工作安排。",
      "如果资金还不充足，我们就可以提高效率。",
      "这个问题不仅合理，而且有一定的难度。",
      "为了保证项目顺利进行，公司正在调整工作安排。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新完成任务。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 完成任务 lại.",
    "options": [
      "虽然遇到了一些困难，但是项目还是按时完成了。",
      "为了提高工作效率，公司正在安排会议。",
      "根据客户意见，我们需要重新完成任务。",
      "如果天气发生变化，我们就可以完成任务。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然时间比较紧，但是项目还是提交报告。",
    "pinyin": "",
    "meaning": "Mặc dù 时间比较紧, nhưng dự án vẫn 提交报告。",
    "options": [
      "经过进一步调查，我们决定解决问题。",
      "为了避免严重的错误，我们必须调整工作安排。",
      "如果计划没有变化，记者下午会在广州申请签证。",
      "虽然时间比较紧，但是项目还是提交报告。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果资金还不充足，我们就可以安排会议。",
    "pinyin": "",
    "meaning": "Nếu 资金还不充足, chúng ta có thể 安排会议。",
    "options": [
      "如果资金还不充足，我们就可以安排会议。",
      "目前最重要的是调整工作安排。",
      "经理正在检查调查结果，准备开始参加会议。",
      "最近邻居常常需要联系客户。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "这个问题不仅困难，而且需要长期解决。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 困难 mà còn 需要长期解决。",
    "options": [
      "周末的时候，经理喜欢去广州提高效率。",
      "如果资金还不充足，我们就可以安排会议。",
      "为了准备明天的工作，经理今晚还要提高效率。",
      "这个问题不仅困难，而且需要长期解决。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了避免时间上的浪费，我们必须检查文件。",
    "pinyin": "",
    "meaning": "Để tránh 时间上的浪费, chúng ta phải 检查文件。",
    "options": [
      "虽然遇到一些困难，但是项目还是检查文件。",
      "为了避免不必要的麻烦，我们必须调整工作安排。",
      "邻居觉得解决问题很重要。",
      "为了避免时间上的浪费，我们必须检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定安排会议。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 安排会议。",
    "options": [
      "今天经理在北京提高效率。",
      "经过多次沟通，我们决定安排会议。",
      "如果有时间，邻居会去上海检查文件。",
      "周末的时候，邻居喜欢去上海解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果计划没有改变，我们就可以安排会议。",
    "pinyin": "",
    "meaning": "Nếu 计划没有改变, chúng ta có thể 安排会议。",
    "options": [
      "我的同事已经把合同带到家里了。",
      "如果计划没有改变，我们就可以安排会议。",
      "虽然时间不多，但是我的同事还是完成了准备报告。",
      "如果有时间，邻居会去博物馆联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "这个问题不仅明显，而且影响比较大。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 明显 mà còn 影响比较大。",
    "options": [
      "这个问题不仅明显，而且影响比较大。",
      "经过多次沟通，我们决定调整工作安排。",
      "为了准备明天的工作，记者今晚还要安排工作。",
      "我的同事告诉我，他最近正在完成任务。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据调查结果，我们需要重新安排会议。",
    "pinyin": "",
    "meaning": "Dựa trên 调查结果, chúng ta cần 安排会议 lại.",
    "options": [
      "为了保证项目顺利进行，公司正在调整工作安排。",
      "为了改善服务质量，公司正在调整工作安排。",
      "为了避免严重的错误，我们必须调整工作安排。",
      "根据调查结果，我们需要重新安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果计划没有改变，我们就可以联系客户。",
    "pinyin": "",
    "meaning": "Nếu 计划没有改变, chúng ta có thể 联系客户。",
    "options": [
      "如果计划没有改变，我们就可以联系客户。",
      "虽然资金还不充足，但是项目还是联系客户。",
      "为了提高工作效率，公司正在联系客户。",
      "他负责完成任务，并且需要协调各部门的工作。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果天气发生变化，我们就可以调整工作安排。",
    "pinyin": "",
    "meaning": "Nếu 天气发生变化, chúng ta có thể 调整工作安排。",
    "options": [
      "今天我的同事在学校准备报告。",
      "经理每天都要参加会议。",
      "经理正在机场参加会议。",
      "如果天气发生变化，我们就可以调整工作安排。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然遇到一些困难，但是项目还是联系客户。",
    "pinyin": "",
    "meaning": "Mặc dù 遇到一些困难, nhưng dự án vẫn 联系客户。",
    "options": [
      "根据实际情况，我们需要重新调整工作安排。",
      "经过充分准备，我们决定调整工作安排。",
      "虽然遇到一些困难，但是项目还是联系客户。",
      "如果资金还不充足，我们就可以提交报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "目前最重要的是调整工作安排。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 调整工作安排。",
    "options": [
      "根据客户意见，我们需要重新安排会议。",
      "目前最重要的是调整工作安排。",
      "如果资金还不充足，我们就可以调整工作安排。",
      "如果计划没有改变，我们就可以提交报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在安排会议。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 安排会议。",
    "options": [
      "虽然计划没有改变，但是项目还是解决问题。",
      "为了改善服务质量，公司正在安排会议。",
      "为了避免不必要的麻烦，我们必须解决问题。",
      "经过认真讨论，我们决定安排会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过进一步调查，我们决定联系客户。",
    "pinyin": "",
    "meaning": "Sau khi 进一步调查, chúng tôi quyết định 联系客户。",
    "options": [
      "目前最重要的是联系客户。",
      "经过进一步调查，我们决定联系客户。",
      "他负责调整工作安排，并且需要处理突发情况。",
      "如果时间比较紧，我们就可以提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定检查文件。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 检查文件。",
    "options": [
      "为了完成新的任务，公司正在修改计划。",
      "如果天气发生变化，我们就可以联系客户。",
      "经过详细分析，我们决定检查文件。",
      "经过进一步调查，我们决定提交报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责联系客户，并且需要协调各部门的工作。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 联系客户, đồng thời cần 协调各部门的工作。",
    "options": [
      "如果时间比较紧，我们就可以完成任务。",
      "他负责联系客户，并且需要协调各部门的工作。",
      "经过认真讨论，我们决定调整工作安排。",
      "他负责安排会议，并且需要完成相关报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责解决问题，并且需要处理突发情况。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 解决问题, đồng thời cần 处理突发情况。",
    "options": [
      "他负责解决问题，并且需要处理突发情况。",
      "因为工作很忙，经理只能晚上讨论计划。",
      "经过讨论，记者决定在北京申请签证。",
      "根据调查结果，我们需要重新提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "他负责检查文件，并且需要及时联系客户。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 检查文件, đồng thời cần 及时联系客户。",
    "options": [
      "虽然天气发生变化，但是项目还是安排会议。",
      "因为工作很忙，我的同事只能晚上完成任务。",
      "他负责检查文件，并且需要及时联系客户。",
      "虽然天气发生变化，但是项目还是提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以解决问题。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 解决问题。",
    "options": [
      "为了避免时间上的浪费，我们必须提交报告。",
      "虽然计划没有改变，但是项目还是检查文件。",
      "如果遇到一些困难，我们就可以解决问题。",
      "因为工作很忙，记者只能晚上申请签证。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "目前最重要的是提高效率。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 提高效率。",
    "options": [
      "目前最重要的是提高效率。",
      "虽然资金还不充足，但是项目还是安排会议。",
      "如果时间比较紧，我们就可以解决问题。",
      "经过多次沟通，我们决定解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了避免不必要的麻烦，我们必须检查文件。",
    "pinyin": "",
    "meaning": "Để tránh 不必要的麻烦, chúng ta phải 检查文件。",
    "options": [
      "这个问题不仅困难，而且需要长期解决。",
      "我的同事已经把新闻报道带到学校了。",
      "为了准备明天的工作，经理今晚还要提高效率。",
      "为了避免不必要的麻烦，我们必须检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以调整工作安排。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 调整工作安排。",
    "options": [
      "如果遇到一些困难，我们就可以调整工作安排。",
      "周末的时候，我的同事喜欢去家里完成任务。",
      "根据客户意见，我们需要重新联系客户。",
      "会议结束以后，经理马上回到北京继续讨论计划。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据实际情况，我们需要重新检查文件。",
    "pinyin": "",
    "meaning": "Dựa trên 实际情况, chúng ta cần 检查文件 lại.",
    "options": [
      "这个问题不仅有效，而且有一定的难度。",
      "为了避免信息泄露，我们必须修改计划。",
      "经过讨论，记者决定在广州调整时间。",
      "根据实际情况，我们需要重新检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "他负责调整工作安排，并且需要协调各部门的工作。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 调整工作安排, đồng thời cần 协调各部门的工作。",
    "options": [
      "他负责调整工作安排，并且需要协调各部门的工作。",
      "经过调查，记者发现原来的计划需要调整。",
      "为了解决当前问题，公司正在完成任务。",
      "根据实际情况，我们需要重新解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "他负责调整工作安排，并且需要完成相关报告。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 调整工作安排, đồng thời cần 完成相关报告。",
    "options": [
      "我的同事正在火车站准备报告。",
      "经过进一步调查，我们决定联系客户。",
      "虽然计划没有改变，但是项目还是安排会议。",
      "他负责调整工作安排，并且需要完成相关报告。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定提交报告。",
    "pinyin": "",
    "meaning": "Sau khi 认真讨论, chúng tôi quyết định 提交报告。",
    "options": [
      "虽然计划没有改变，但是项目还是联系客户。",
      "这个问题不仅困难，而且影响比较大。",
      "经过认真讨论，我们决定提交报告。",
      "经过详细分析，我们决定修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据调查结果，我们需要重新检查文件。",
    "pinyin": "",
    "meaning": "Dựa trên 调查结果, chúng ta cần 检查文件 lại.",
    "options": [
      "经过详细分析，我们决定检查文件。",
      "这个问题不仅复杂，而且值得认真考虑。",
      "根据调查结果，我们需要重新检查文件。",
      "根据市场变化，我们需要重新修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新调整工作安排。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 调整工作安排 lại.",
    "options": [
      "根据市场变化，我们需要重新调整工作安排。",
      "虽然时间比较紧，但是项目还是解决问题。",
      "根据客户意见，我们需要重新完成任务。",
      "今天我的同事在家里学习新知识。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了解决当前问题，公司正在提高效率。",
    "pinyin": "",
    "meaning": "Để 解决当前问题, công ty đang 提高效率。",
    "options": [
      "为了避免信息泄露，我们必须调整工作安排。",
      "记者已经把护照带到机场了。",
      "因为工作很忙，记者只能晚上申请签证。",
      "为了解决当前问题，公司正在提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "目前最重要的是完成任务。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 完成任务。",
    "options": [
      "目前最重要的是完成任务。",
      "这个问题不仅复杂，而且值得认真考虑。",
      "我的同事告诉我，他最近正在完成任务。",
      "虽然计划没有改变，但是项目还是联系客户。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据最新资料，我们需要重新解决问题。",
    "pinyin": "",
    "meaning": "Dựa trên 最新资料, chúng ta cần 解决问题 lại.",
    "options": [
      "虽然天气发生变化，但是项目还是修改计划。",
      "这个问题不仅困难，而且影响比较大。",
      "根据最新资料，我们需要重新解决问题。",
      "昨天邻居在家里检查文件，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "目前最重要的是检查文件。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 检查文件。",
    "options": [
      "目前最重要的是检查文件。",
      "昨天邻居在学校解决问题，所以回家比较晚。",
      "今天记者在广州申请签证。",
      "为了改善服务质量，公司正在提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "这个问题不仅合理，而且值得认真考虑。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 合理 mà còn 值得认真考虑。",
    "options": [
      "这个问题不仅合理，而且值得认真考虑。",
      "如果有时间，邻居会去图书馆检查文件。",
      "今天我的同事在上海完成任务。",
      "如果时间比较紧，我们就可以检查文件。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了避免严重的错误，我们必须安排会议。",
    "pinyin": "",
    "meaning": "Để tránh 严重的错误, chúng ta phải 安排会议。",
    "options": [
      "周末的时候，邻居喜欢去家里联系客户。",
      "虽然时间不多，但是记者还是完成了申请签证。",
      "他负责检查文件，并且需要处理突发情况。",
      "为了避免严重的错误，我们必须安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据实际情况，我们需要重新完成任务。",
    "pinyin": "",
    "meaning": "Dựa trên 实际情况, chúng ta cần 完成任务 lại.",
    "options": [
      "经过多次沟通，我们决定完成任务。",
      "根据实际情况，我们需要重新完成任务。",
      "经过详细分析，我们决定联系客户。",
      "为了避免不必要的麻烦，我们必须调整工作安排。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然计划没有改变，但是项目还是安排会议。",
    "pinyin": "",
    "meaning": "Mặc dù 计划没有改变, nhưng dự án vẫn 安排会议。",
    "options": [
      "虽然资金还不充足，但是项目还是完成任务。",
      "如果有时间，记者会去餐厅申请签证。",
      "虽然计划没有改变，但是项目还是安排会议。",
      "虽然时间不多，但是记者还是完成了申请签证。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须安排会议。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 安排会议。",
    "options": [
      "为了避免时间上的浪费，我们必须安排会议。",
      "为了避免信息泄露，我们必须安排会议。",
      "我的同事正在学校学习新知识。",
      "如果遇到一些困难，我们就可以提交报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定提高效率。",
    "pinyin": "",
    "meaning": "Sau khi 认真讨论, chúng tôi quyết định 提高效率。",
    "options": [
      "这个问题不仅有效，而且有一定的难度。",
      "为了保证项目顺利进行，公司正在修改计划。",
      "这个问题不仅复杂，而且影响比较大。",
      "经过认真讨论，我们决定提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了完成新的任务，公司正在解决问题。",
    "pinyin": "",
    "meaning": "Để 完成新的任务, công ty đang 解决问题。",
    "options": [
      "会议结束以后，我的同事马上回到上海继续学习新知识。",
      "为了完成新的任务，公司正在解决问题。",
      "他负责联系客户，并且需要协调各部门的工作。",
      "周末的时候，经理喜欢去公司讨论计划。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定联系客户。",
    "pinyin": "",
    "meaning": "Sau khi 认真讨论, chúng tôi quyết định 联系客户。",
    "options": [
      "经过详细分析，我们决定修改计划。",
      "根据最新资料，我们需要重新解决问题。",
      "经过认真讨论，我们决定联系客户。",
      "我听说记者最近在会议室负责安排工作。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过充分准备，我们决定完成任务。",
    "pinyin": "",
    "meaning": "Sau khi 充分准备, chúng tôi quyết định 完成任务。",
    "options": [
      "为了避免信息泄露，我们必须调整工作安排。",
      "经过充分准备，我们决定完成任务。",
      "经过进一步调查，我们决定调整工作安排。",
      "虽然时间不多，但是我的同事还是完成了准备报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定联系客户。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 联系客户。",
    "options": [
      "经理每天都要提高效率。",
      "记者已经把护照带到机场了。",
      "如果有时间，邻居会去上海检查文件。",
      "经过详细分析，我们决定联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是修改计划。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 修改计划。",
    "options": [
      "根据市场变化，我们需要重新检查文件。",
      "他负责联系客户，并且需要协调各部门的工作。",
      "虽然天气发生变化，但是项目还是修改计划。",
      "为了解决当前问题，公司正在解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "目前最重要的是解决问题。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 解决问题。",
    "options": [
      "经理正在机场参加会议。",
      "目前最重要的是解决问题。",
      "为了解决当前问题，公司正在安排会议。",
      "如果遇到一些困难，我们就可以检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过进一步调查，我们决定提交报告。",
    "pinyin": "",
    "meaning": "Sau khi 进一步调查, chúng tôi quyết định 提交报告。",
    "options": [
      "虽然计划没有改变，但是项目还是检查文件。",
      "这个问题不仅有效，而且值得认真考虑。",
      "经过进一步调查，我们决定提交报告。",
      "最近我的同事常常需要准备报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然时间比较紧，但是项目还是调整工作安排。",
    "pinyin": "",
    "meaning": "Mặc dù 时间比较紧, nhưng dự án vẫn 调整工作安排。",
    "options": [
      "如果计划没有改变，我们就可以解决问题。",
      "他负责调整工作安排，并且需要协调各部门的工作。",
      "他负责联系客户并安排会议时间。",
      "虽然时间比较紧，但是项目还是调整工作安排。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果资金还不充足，我们就可以提高效率。",
    "pinyin": "",
    "meaning": "Nếu 资金还不充足, chúng ta có thể 提高效率。",
    "options": [
      "记者觉得调整时间很重要。",
      "他负责检查文件，并且需要及时联系客户。",
      "我的同事正在检查新闻报道，准备开始准备报告。",
      "如果资金还不充足，我们就可以提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "目前最重要的是修改计划。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 修改计划。",
    "options": [
      "目前最重要的是完成任务。",
      "为了解决当前问题，公司正在解决问题。",
      "目前最重要的是联系客户。",
      "目前最重要的是修改计划。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据调查结果，我们需要重新提交报告。",
    "pinyin": "",
    "meaning": "Dựa trên 调查结果, chúng ta cần 提交报告 lại.",
    "options": [
      "经过讨论，我的同事决定在银行准备报告。",
      "根据调查结果，我们需要重新提交报告。",
      "经过充分准备，我们决定解决问题。",
      "经过认真讨论，我们决定改变原来的计划。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过充分准备，我们决定安排会议。",
    "pinyin": "",
    "meaning": "Sau khi 充分准备, chúng tôi quyết định 安排会议。",
    "options": [
      "虽然遇到一些困难，但是项目还是调整工作安排。",
      "为了解决当前问题，公司正在修改计划。",
      "经过充分准备，我们决定安排会议。",
      "为了准备明天的工作，经理今晚还要参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果计划没有改变，我们就可以检查文件。",
    "pinyin": "",
    "meaning": "Nếu 计划没有改变, chúng ta có thể 检查文件。",
    "options": [
      "经过认真讨论，我们决定提交报告。",
      "如果计划没有变化，记者下午会在北京安排工作。",
      "如果计划没有改变，我们就可以检查文件。",
      "为了保证项目顺利进行，公司正在调整工作安排。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以检查文件。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 检查文件。",
    "options": [
      "经过充分准备，我们决定联系客户。",
      "经过详细分析，我们决定提高效率。",
      "根据实际情况，我们需要重新解决问题。",
      "如果遇到一些困难，我们就可以检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "这个问题不仅有效，而且影响比较大。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 有效 mà còn 影响比较大。",
    "options": [
      "虽然天气发生变化，但是项目还是完成任务。",
      "这个问题不仅有效，而且影响比较大。",
      "目前最重要的是调整工作安排。",
      "虽然天气发生变化，但是项目还是检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责解决问题，并且需要及时联系客户。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 解决问题, đồng thời cần 及时联系客户。",
    "options": [
      "他负责解决问题，并且需要及时联系客户。",
      "周末的时候，我的同事喜欢去家里完成任务。",
      "邻居希望明天可以继续联系客户。",
      "因为工作很忙，我的同事只能晚上完成任务。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须联系客户。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 联系客户。",
    "options": [
      "为了避免信息泄露，我们必须联系客户。",
      "根据实际情况，我们需要重新安排会议。",
      "这个问题不仅重要，而且值得认真考虑。",
      "他负责调整工作安排，并且需要完成相关报告。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过进一步调查，我们决定检查文件。",
    "pinyin": "",
    "meaning": "Sau khi 进一步调查, chúng tôi quyết định 检查文件。",
    "options": [
      "他负责安排会议，并且需要完成相关报告。",
      "为了避免信息泄露，我们必须调整工作安排。",
      "为了申请签证，记者提前来到公司。",
      "经过进一步调查，我们决定检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了避免时间上的浪费，我们必须调整工作安排。",
    "pinyin": "",
    "meaning": "Để tránh 时间上的浪费, chúng ta phải 调整工作安排。",
    "options": [
      "经理正在检查项目报告，准备开始提高效率。",
      "最近经理常常需要提高效率。",
      "为了避免时间上的浪费，我们必须调整工作安排。",
      "根据市场变化，我们需要重新检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果计划没有改变，我们就可以修改计划。",
    "pinyin": "",
    "meaning": "Nếu 计划没有改变, chúng ta có thể 修改计划。",
    "options": [
      "如果计划没有变化，记者下午会在广州申请签证。",
      "如果有时间，邻居会去博物馆联系客户。",
      "经理正在会议室提高效率。",
      "如果计划没有改变，我们就可以修改计划。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然资金还不充足，但是项目还是联系客户。",
    "pinyin": "",
    "meaning": "Mặc dù 资金还不充足, nhưng dự án vẫn 联系客户。",
    "options": [
      "如果有时间，邻居会去图书馆检查文件。",
      "虽然资金还不充足，但是项目还是联系客户。",
      "为了完成新的任务，公司正在提交报告。",
      "根据实际情况，我们需要重新联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免时间上的浪费，我们必须完成任务。",
    "pinyin": "",
    "meaning": "Để tránh 时间上的浪费, chúng ta phải 完成任务。",
    "options": [
      "为了避免时间上的浪费，我们必须完成任务。",
      "会议结束以后，经理马上回到公司继续提高效率。",
      "如果计划没有变化，邻居下午会在博物馆检查文件。",
      "根据实际情况，我们需要重新完成任务。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过进一步调查，我们决定修改计划。",
    "pinyin": "",
    "meaning": "Sau khi 进一步调查, chúng tôi quyết định 修改计划。",
    "options": [
      "经过进一步调查，我们决定修改计划。",
      "经过充分准备，我们决定完成任务。",
      "为了避免时间上的浪费，我们必须提交报告。",
      "经过讨论，记者决定在北京申请签证。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是检查文件。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 检查文件。",
    "options": [
      "如果遇到一些困难，我们就可以解决问题。",
      "如果资金还不充足，我们就可以提高效率。",
      "虽然天气发生变化，但是项目还是检查文件。",
      "为了准备明天的工作，记者今晚还要安排工作。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过充分准备，我们决定修改计划。",
    "pinyin": "",
    "meaning": "Sau khi 充分准备, chúng tôi quyết định 修改计划。",
    "options": [
      "今天记者在广州申请签证。",
      "为了改善服务质量，公司正在提高效率。",
      "经过充分准备，我们决定修改计划。",
      "我的同事告诉我，他最近正在准备报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "目前最重要的是联系客户。",
    "pinyin": "",
    "meaning": "Điều quan trọng nhất hiện nay là 联系客户。",
    "options": [
      "我的同事已经把合同带到家里了。",
      "我的同事告诉我，他最近正在完成任务。",
      "目前最重要的是联系客户。",
      "如果遇到一些困难，我们就可以安排会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果时间比较紧，我们就可以安排会议。",
    "pinyin": "",
    "meaning": "Nếu 时间比较紧, chúng ta có thể 安排会议。",
    "options": [
      "根据调查结果，我们需要重新检查文件。",
      "经过多次沟通，我们决定完成任务。",
      "如果时间比较紧，我们就可以安排会议。",
      "最近经理常常需要讨论计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过充分准备，我们决定调整工作安排。",
    "pinyin": "",
    "meaning": "Sau khi 充分准备, chúng tôi quyết định 调整工作安排。",
    "options": [
      "为了保证项目顺利进行，公司正在修改计划。",
      "如果遇到一些困难，我们就可以调整工作安排。",
      "经过充分准备，我们决定调整工作安排。",
      "经理觉得提高效率很重要。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "这个问题不仅明显，而且有一定的难度。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 明显 mà còn 有一定的难度。",
    "options": [
      "这个问题不仅明显，而且有一定的难度。",
      "经过讨论，邻居决定在博物馆解决问题。",
      "如果遇到一些困难，我们就可以调整工作安排。",
      "会议结束以后，经理马上回到公司继续提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新完成任务。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 完成任务 lại.",
    "options": [
      "经过多次沟通，我们决定联系客户。",
      "根据市场变化，我们需要重新完成任务。",
      "如果遇到一些困难，我们就可以提交报告。",
      "这个问题不仅合理，而且需要长期解决。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然资金还不充足，但是项目还是安排会议。",
    "pinyin": "",
    "meaning": "Mặc dù 资金还不充足, nhưng dự án vẫn 安排会议。",
    "options": [
      "为了提高工作效率，公司正在调整工作安排。",
      "虽然资金还不充足，但是项目还是安排会议。",
      "经过多次沟通，我们决定解决问题。",
      "为了申请签证，记者提前来到公司。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定检查文件。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 检查文件。",
    "options": [
      "经过多次沟通，我们决定检查文件。",
      "经过充分准备，我们决定检查文件。",
      "记者正在检查工作计划，准备开始调整时间。",
      "根据调查结果，我们需要重新提交报告。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "他负责提交报告，并且需要及时联系客户。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提交报告, đồng thời cần 及时联系客户。",
    "options": [
      "根据市场变化，我们需要重新完成任务。",
      "他负责提交报告，并且需要及时联系客户。",
      "这个问题不仅明显，而且影响比较大。",
      "他负责提交报告，并且需要完成相关报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然遇到一些困难，但是项目还是提高效率。",
    "pinyin": "",
    "meaning": "Mặc dù 遇到一些困难, nhưng dự án vẫn 提高效率。",
    "options": [
      "经理正在检查项目报告，准备开始提高效率。",
      "邻居每天都要联系客户。",
      "如果计划没有改变，我们就可以联系客户。",
      "虽然遇到一些困难，但是项目还是提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定解决问题。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 解决问题。",
    "options": [
      "如果计划没有改变，我们就可以解决问题。",
      "最近邻居常常需要解决问题。",
      "经过多次沟通，我们决定解决问题。",
      "为了避免严重的错误，我们必须安排会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新修改计划。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 修改计划 lại.",
    "options": [
      "为了改善服务质量，公司正在修改计划。",
      "根据市场变化，我们需要重新修改计划。",
      "根据客户意见，我们需要重新修改计划。",
      "虽然时间不多，但是我的同事还是完成了学习新知识。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是解决问题。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 解决问题。",
    "options": [
      "根据最新资料，我们需要重新提高效率。",
      "为了避免严重的错误，我们必须调整工作安排。",
      "经过进一步调查，我们决定提交报告。",
      "虽然天气发生变化，但是项目还是解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须检查文件。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 检查文件。",
    "options": [
      "虽然时间不多，但是我的同事还是完成了完成任务。",
      "为了避免信息泄露，我们必须检查文件。",
      "经理每天都要参加会议。",
      "为了提高工作效率，公司正在解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "这个问题不仅困难，而且值得认真考虑。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 困难 mà còn 值得认真考虑。",
    "options": [
      "虽然遇到一些困难，但是项目还是调整工作安排。",
      "这个问题不仅困难，而且值得认真考虑。",
      "会议结束以后，经理马上回到北京继续讨论计划。",
      "邻居每天都要解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责调整工作安排，并且需要处理突发情况。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 调整工作安排, đồng thời cần 处理突发情况。",
    "options": [
      "经过进一步调查，我们决定调整工作安排。",
      "他负责提交报告，并且需要处理突发情况。",
      "经过充分准备，我们决定解决问题。",
      "他负责调整工作安排，并且需要处理突发情况。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "他负责检查文件，并且需要完成相关报告。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 检查文件, đồng thời cần 完成相关报告。",
    "options": [
      "为了解决当前问题，公司正在联系客户。",
      "昨天记者在公司安排工作，所以回家比较晚。",
      "他负责检查文件，并且需要完成相关报告。",
      "经过详细分析，我们决定检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在调整工作安排。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 调整工作安排。",
    "options": [
      "这个问题不仅复杂，而且值得认真考虑。",
      "为了提高工作效率，公司正在调整工作安排。",
      "为了避免时间上的浪费，我们必须提高效率。",
      "邻居希望明天可以继续联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定安排会议。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 安排会议。",
    "options": [
      "根据市场变化，我们需要重新提高效率。",
      "经过详细分析，我们决定安排会议。",
      "如果计划没有变化，记者下午会在餐厅调整时间。",
      "为了完成新的任务，公司正在安排会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然遇到一些困难，但是项目还是调整工作安排。",
    "pinyin": "",
    "meaning": "Mặc dù 遇到一些困难, nhưng dự án vẫn 调整工作安排。",
    "options": [
      "因为工作很忙，经理只能晚上讨论计划。",
      "虽然遇到一些困难，但是项目还是调整工作安排。",
      "记者正在检查工作计划，准备开始调整时间。",
      "经过调查，记者发现这个问题非常复杂。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责联系客户，并且需要完成相关报告。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 联系客户, đồng thời cần 完成相关报告。",
    "options": [
      "他负责联系客户，并且需要完成相关报告。",
      "如果计划没有改变，我们就可以提交报告。",
      "如果天气发生变化，我们就可以完成任务。",
      "为了解决当前问题，公司正在完成任务。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "他负责提交报告，并且需要协调各部门的工作。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提交报告, đồng thời cần 协调各部门的工作。",
    "options": [
      "他负责提交报告，并且需要协调各部门的工作。",
      "虽然资金还不充足，但是项目还是安排会议。",
      "根据客户意见，我们需要重新安排会议。",
      "邻居已经把手机带到学校了。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "虽然计划没有改变，但是项目还是联系客户。",
    "pinyin": "",
    "meaning": "Mặc dù 计划没有改变, nhưng dự án vẫn 联系客户。",
    "options": [
      "虽然计划没有改变，但是项目还是联系客户。",
      "如果资金还不充足，我们就可以提高效率。",
      "为了保证项目顺利进行，公司正在完成任务。",
      "经过充分准备，我们决定调整工作安排。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了完成新的任务，公司正在修改计划。",
    "pinyin": "",
    "meaning": "Để 完成新的任务, công ty đang 修改计划。",
    "options": [
      "虽然计划没有改变，但是项目还是联系客户。",
      "为了完成新的任务，公司正在修改计划。",
      "经过认真讨论，我们决定提高效率。",
      "为了提高工作效率，公司正在提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定修改计划。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 修改计划。",
    "options": [
      "经过多次沟通，我们决定修改计划。",
      "我们需要根据实际情况作出决定。",
      "记者正在检查工作计划，准备开始调整时间。",
      "为了避免信息泄露，我们必须调整工作安排。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过充分准备，我们决定解决问题。",
    "pinyin": "",
    "meaning": "Sau khi 充分准备, chúng tôi quyết định 解决问题。",
    "options": [
      "这个问题不仅困难，而且值得认真考虑。",
      "经过充分准备，我们决定解决问题。",
      "为了改善服务质量，公司正在提高效率。",
      "他负责安排会议，并且需要协调各部门的工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定调整工作安排。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 调整工作安排。",
    "options": [
      "经过详细分析，我们决定调整工作安排。",
      "如果天气发生变化，我们就可以联系客户。",
      "如果有时间，邻居会去图书馆检查文件。",
      "经过调查，记者发现情况比预想的严重。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "这个问题不仅有效，而且需要长期解决。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 有效 mà còn 需要长期解决。",
    "options": [
      "这个问题不仅有效，而且需要长期解决。",
      "经过认真讨论，我们决定完成任务。",
      "如果有时间，邻居会去上海检查文件。",
      "我的同事正在学校学习新知识。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据最新资料，我们需要重新提高效率。",
    "pinyin": "",
    "meaning": "Dựa trên 最新资料, chúng ta cần 提高效率 lại.",
    "options": [
      "根据最新资料，我们需要重新提高效率。",
      "这个问题不仅重要，而且影响比较大。",
      "为了避免严重的错误，我们必须完成任务。",
      "虽然遇到了一些困难，但是项目还是按时完成了。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以修改计划。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 修改计划。",
    "options": [
      "为了避免不必要的麻烦，我们必须修改计划。",
      "为了改善服务质量，公司正在解决问题。",
      "如果遇到一些困难，我们就可以修改计划。",
      "根据客户意见，我们需要重新修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过调查，记者发现这个问题非常复杂。",
    "pinyin": "",
    "meaning": "Sau khi điều tra, phóng viên phát hiện 这个问题非常复杂。",
    "options": [
      "经过调查，记者发现这个问题非常复杂。",
      "为了解决当前问题，公司正在解决问题。",
      "虽然天气发生变化，但是项目还是安排会议。",
      "为了避免信息泄露，我们必须联系客户。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果时间比较紧，我们就可以检查文件。",
    "pinyin": "",
    "meaning": "Nếu 时间比较紧, chúng ta có thể 检查文件。",
    "options": [
      "如果时间比较紧，我们就可以检查文件。",
      "目前最重要的是解决问题。",
      "会议结束以后，经理马上回到广州继续参加会议。",
      "为了避免严重的错误，我们必须安排会议。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据调查结果，我们需要重新解决问题。",
    "pinyin": "",
    "meaning": "Dựa trên 调查结果, chúng ta cần 解决问题 lại.",
    "options": [
      "如果计划没有改变，我们就可以修改计划。",
      "虽然遇到一些困难，但是项目还是调整工作安排。",
      "根据调查结果，我们需要重新解决问题。",
      "我的同事已经把申请表带到火车站了。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新修改计划。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 修改计划 lại.",
    "options": [
      "虽然天气发生变化，但是项目还是完成任务。",
      "虽然计划没有改变，但是项目还是检查文件。",
      "根据市场变化，我们需要重新修改计划。",
      "他负责提高效率，并且需要处理突发情况。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责提交报告，并且需要处理突发情况。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提交报告, đồng thời cần 处理突发情况。",
    "options": [
      "根据客户意见，我们需要重新联系客户。",
      "邻居告诉我，他最近正在联系客户。",
      "我的同事正在检查新闻报道，准备开始准备报告。",
      "他负责提交报告，并且需要处理突发情况。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了解决当前问题，公司正在安排会议。",
    "pinyin": "",
    "meaning": "Để 解决当前问题, công ty đang 安排会议。",
    "options": [
      "经过详细分析，我们决定完成任务。",
      "如果资金还不充足，我们就可以提高效率。",
      "经过充分准备，我们决定解决问题。",
      "为了解决当前问题，公司正在安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了避免时间上的浪费，我们必须提交报告。",
    "pinyin": "",
    "meaning": "Để tránh 时间上的浪费, chúng ta phải 提交报告。",
    "options": [
      "虽然遇到一些困难，但是项目还是检查文件。",
      "为了避免不必要的麻烦，我们必须联系客户。",
      "为了避免时间上的浪费，我们必须提交报告。",
      "如果计划没有变化，经理下午会在北京参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责解决问题，并且需要完成相关报告。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 解决问题, đồng thời cần 完成相关报告。",
    "options": [
      "为了提高工作效率，公司正在调整工作安排。",
      "为了避免信息泄露，我们必须提交报告。",
      "他负责解决问题，并且需要完成相关报告。",
      "最近邻居常常需要联系客户。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定调整工作安排。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 调整工作安排。",
    "options": [
      "为了避免严重的错误，我们必须提交报告。",
      "经过讨论，我的同事决定在银行准备报告。",
      "虽然遇到了一些困难，但是项目还是按时完成了。",
      "经过多次沟通，我们决定调整工作安排。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然时间比较紧，但是项目还是解决问题。",
    "pinyin": "",
    "meaning": "Mặc dù 时间比较紧, nhưng dự án vẫn 解决问题。",
    "options": [
      "经过充分准备，我们决定检查文件。",
      "如果计划没有变化，记者下午会在广州申请签证。",
      "经过调查，记者发现这个问题非常复杂。",
      "虽然时间比较紧，但是项目还是解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "他负责提高效率，并且需要协调各部门的工作。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提高效率, đồng thời cần 协调各部门的工作。",
    "options": [
      "他负责提高效率，并且需要协调各部门的工作。",
      "为了避免不必要的麻烦，我们必须联系客户。",
      "为了保证项目顺利进行，公司正在提交报告。",
      "根据市场变化，我们需要重新调整工作安排。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了避免不必要的麻烦，我们必须提交报告。",
    "pinyin": "",
    "meaning": "Để tránh 不必要的麻烦, chúng ta phải 提交报告。",
    "options": [
      "根据客户意见，我们需要重新提交报告。",
      "根据客户意见，我们需要重新完成任务。",
      "为了避免不必要的麻烦，我们必须提交报告。",
      "经理希望明天可以继续讨论计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了避免严重的错误，我们必须完成任务。",
    "pinyin": "",
    "meaning": "Để tránh 严重的错误, chúng ta phải 完成任务。",
    "options": [
      "为了安排工作，记者提前来到广州。",
      "为了避免严重的错误，我们必须完成任务。",
      "根据市场变化，我们需要重新提交报告。",
      "经过认真讨论，我们决定完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "根据调查结果，我们需要重新联系客户。",
    "pinyin": "",
    "meaning": "Dựa trên 调查结果, chúng ta cần 联系客户 lại.",
    "options": [
      "经过进一步调查，我们决定调整工作安排。",
      "根据调查结果，我们需要重新联系客户。",
      "为了保证项目顺利进行，公司正在修改计划。",
      "经过多次沟通，我们决定完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果资金还不充足，我们就可以提交报告。",
    "pinyin": "",
    "meaning": "Nếu 资金还不充足, chúng ta có thể 提交报告。",
    "options": [
      "为了避免严重的错误，我们必须完成任务。",
      "为了准备明天的工作，记者今晚还要安排工作。",
      "周末的时候，经理喜欢去公司讨论计划。",
      "如果资金还不充足，我们就可以提交报告。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然资金还不充足，但是项目还是检查文件。",
    "pinyin": "",
    "meaning": "Mặc dù 资金还不充足, nhưng dự án vẫn 检查文件。",
    "options": [
      "昨天记者在广州调整时间，所以回家比较晚。",
      "会议结束以后，经理马上回到公司继续提高效率。",
      "虽然资金还不充足，但是项目还是检查文件。",
      "为了准备报告，我的同事提前来到上海。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新调整工作安排。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 调整工作安排 lại.",
    "options": [
      "根据客户意见，我们需要重新调整工作安排。",
      "记者正在检查工作计划，准备开始调整时间。",
      "他负责提高效率，并且需要处理突发情况。",
      "为了学习新知识，我的同事提前来到博物馆。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "虽然资金还不充足，但是项目还是完成任务。",
    "pinyin": "",
    "meaning": "Mặc dù 资金还不充足, nhưng dự án vẫn 完成任务。",
    "options": [
      "虽然资金还不充足，但是项目还是完成任务。",
      "经过充分准备，我们决定安排会议。",
      "为了提高工作效率，公司正在提交报告。",
      "经过讨论，记者决定在北京申请签证。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据实际情况，我们需要重新安排会议。",
    "pinyin": "",
    "meaning": "Dựa trên 实际情况, chúng ta cần 安排会议 lại.",
    "options": [
      "根据客户意见，我们需要重新完成任务。",
      "他负责提交报告，并且需要完成相关报告。",
      "根据实际情况，我们需要重新安排会议。",
      "记者觉得安排工作很重要。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新安排会议。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 安排会议 lại.",
    "options": [
      "如果天气发生变化，我们就可以提交报告。",
      "如果计划没有改变，我们就可以联系客户。",
      "为了避免不必要的麻烦，我们必须联系客户。",
      "根据客户意见，我们需要重新安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新联系客户。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 联系客户 lại.",
    "options": [
      "会议结束以后，邻居马上回到博物馆继续联系客户。",
      "这个问题不仅重要，而且值得认真考虑。",
      "虽然时间比较紧，但是项目还是调整工作安排。",
      "根据市场变化，我们需要重新联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了完成新的任务，公司正在安排会议。",
    "pinyin": "",
    "meaning": "Để 完成新的任务, công ty đang 安排会议。",
    "options": [
      "经过认真讨论，我们决定提高效率。",
      "经过进一步调查，我们决定修改计划。",
      "为了完成新的任务，公司正在安排会议。",
      "如果有时间，记者会去餐厅申请签证。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然遇到一些困难，但是项目还是完成任务。",
    "pinyin": "",
    "meaning": "Mặc dù 遇到一些困难, nhưng dự án vẫn 完成任务。",
    "options": [
      "为了避免信息泄露，我们必须调整工作安排。",
      "我听说记者最近在公司负责申请签证。",
      "为了解决当前问题，公司正在修改计划。",
      "虽然遇到一些困难，但是项目还是完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "这个问题不仅复杂，而且影响比较大。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 复杂 mà còn 影响比较大。",
    "options": [
      "他负责提高效率，并且需要及时联系客户。",
      "经过多次沟通，我们决定安排会议。",
      "这个问题不仅复杂，而且影响比较大。",
      "根据客户意见，我们需要重新检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在检查文件。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 检查文件。",
    "options": [
      "如果天气发生变化，我们就可以修改计划。",
      "经过认真讨论，我们决定提交报告。",
      "我听说邻居最近在学校负责联系客户。",
      "为了提高工作效率，公司正在检查文件。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是提高效率。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 提高效率。",
    "options": [
      "根据客户意见，我们需要重新修改计划。",
      "虽然天气发生变化，但是项目还是提高效率。",
      "为了提高工作效率，公司正在完成任务。",
      "目前最重要的是解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新检查文件。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 检查文件 lại.",
    "options": [
      "这个问题不仅困难，而且有一定的难度。",
      "根据客户意见，我们需要重新检查文件。",
      "根据实际情况，我们需要重新调整工作安排。",
      "经理正在检查调查结果，准备开始参加会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免不必要的麻烦，我们必须解决问题。",
    "pinyin": "",
    "meaning": "Để tránh 不必要的麻烦, chúng ta phải 解决问题。",
    "options": [
      "为了避免不必要的麻烦，我们必须解决问题。",
      "虽然时间不多，但是记者还是完成了申请签证。",
      "为了准备明天的工作，我的同事今晚还要准备报告。",
      "为了避免严重的错误，我们必须调整工作安排。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了解决当前问题，公司正在完成任务。",
    "pinyin": "",
    "meaning": "Để 解决当前问题, công ty đang 完成任务。",
    "options": [
      "为了解决当前问题，公司正在完成任务。",
      "经过讨论，记者决定在北京申请签证。",
      "经过认真讨论，我们决定安排会议。",
      "会议结束以后，我的同事马上回到上海继续学习新知识。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在调整工作安排。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 调整工作安排。",
    "options": [
      "虽然计划没有改变，但是项目还是检查文件。",
      "经过充分准备，我们决定修改计划。",
      "为了改善服务质量，公司正在调整工作安排。",
      "如果计划没有改变，我们就可以联系客户。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定提交报告。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 提交报告。",
    "options": [
      "记者觉得安排工作很重要。",
      "这个问题不仅明显，而且需要长期解决。",
      "经过多次沟通，我们决定提交报告。",
      "根据市场变化，我们需要重新联系客户。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责调整工作安排，并且需要及时联系客户。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 调整工作安排, đồng thời cần 及时联系客户。",
    "options": [
      "周末的时候，邻居喜欢去家里联系客户。",
      "经过认真讨论，我们决定联系客户。",
      "经过充分准备，我们决定联系客户。",
      "他负责调整工作安排，并且需要及时联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据实际情况，我们需要重新提高效率。",
    "pinyin": "",
    "meaning": "Dựa trên 实际情况, chúng ta cần 提高效率 lại.",
    "options": [
      "他负责提交报告，并且需要处理突发情况。",
      "如果有时间，邻居会去博物馆联系客户。",
      "根据实际情况，我们需要重新提高效率。",
      "周末的时候，经理喜欢去广州提高效率。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是完成任务。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 完成任务。",
    "options": [
      "根据调查结果，我们需要重新调整工作安排。",
      "他负责完成任务，并且需要协调各部门的工作。",
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "虽然天气发生变化，但是项目还是完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了避免时间上的浪费，我们必须安排会议。",
    "pinyin": "",
    "meaning": "Để tránh 时间上的浪费, chúng ta phải 安排会议。",
    "options": [
      "这个问题不仅困难，而且需要长期解决。",
      "为了避免时间上的浪费，我们必须安排会议。",
      "虽然天气发生变化，但是项目还是联系客户。",
      "为了提高工作效率，公司正在检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "根据实际情况，我们需要重新联系客户。",
    "pinyin": "",
    "meaning": "Dựa trên 实际情况, chúng ta cần 联系客户 lại.",
    "options": [
      "根据实际情况，我们需要重新检查文件。",
      "为了改善服务质量，公司正在修改计划。",
      "根据实际情况，我们需要重新联系客户。",
      "邻居已经把手机带到学校了。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是联系客户。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 联系客户。",
    "options": [
      "虽然天气发生变化，但是项目还是联系客户。",
      "经过认真讨论，我们决定安排会议。",
      "经理正在检查调查结果，准备开始参加会议。",
      "根据市场变化，我们需要重新提交报告。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了避免不必要的麻烦，我们必须完成任务。",
    "pinyin": "",
    "meaning": "Để tránh 不必要的麻烦, chúng ta phải 完成任务。",
    "options": [
      "今天我的同事在学校准备报告。",
      "我的同事正在火车站准备报告。",
      "为了避免不必要的麻烦，我们必须完成任务。",
      "虽然天气发生变化，但是项目还是联系客户。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "这个问题不仅有效，而且有一定的难度。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 有效 mà còn 有一定的难度。",
    "options": [
      "他负责联系客户并安排会议时间。",
      "这个问题不仅有效，而且影响比较大。",
      "虽然时间不多，但是我的同事还是完成了完成任务。",
      "这个问题不仅有效，而且有一定的难度。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新安排会议。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 安排会议 lại.",
    "options": [
      "根据最新资料，我们需要重新修改计划。",
      "根据市场变化，我们需要重新安排会议。",
      "为了改善服务质量，公司正在修改计划。",
      "虽然天气发生变化，但是项目还是检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在检查文件。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 检查文件。",
    "options": [
      "为了改善服务质量，公司正在安排会议。",
      "他负责联系客户，并且需要完成相关报告。",
      "为了改善服务质量，公司正在检查文件。",
      "如果计划没有变化，记者下午会在餐厅调整时间。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责提高效率，并且需要完成相关报告。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提高效率, đồng thời cần 完成相关报告。",
    "options": [
      "他负责提高效率，并且需要完成相关报告。",
      "邻居每天都要联系客户。",
      "因为工作很忙，我的同事只能晚上学习新知识。",
      "为了避免不必要的麻烦，我们必须修改计划。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "这个问题不仅明显，而且需要长期解决。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 明显 mà còn 需要长期解决。",
    "options": [
      "根据实际情况，我们需要重新解决问题。",
      "经过详细分析，我们决定检查文件。",
      "这个问题不仅明显，而且需要长期解决。",
      "为了准备明天的工作，经理今晚还要讨论计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了避免严重的错误，我们必须修改计划。",
    "pinyin": "",
    "meaning": "Để tránh 严重的错误, chúng ta phải 修改计划。",
    "options": [
      "虽然遇到了一些困难，但是项目还是按时完成了。",
      "根据客户意见，我们需要重新联系客户。",
      "他负责调整工作安排，并且需要完成相关报告。",
      "为了避免严重的错误，我们必须修改计划。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在提交报告。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 提交报告。",
    "options": [
      "为了准备明天的工作，我的同事今晚还要学习新知识。",
      "为了改善服务质量，公司正在提交报告。",
      "根据实际情况，我们需要重新解决问题。",
      "他负责提交报告，并且需要及时联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定解决问题。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 解决问题。",
    "options": [
      "如果计划没有变化，记者下午会在广州申请签证。",
      "虽然资金还不充足，但是项目还是联系客户。",
      "这个问题不仅困难，而且影响比较大。",
      "经过详细分析，我们决定解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定完成任务。",
    "pinyin": "",
    "meaning": "Sau khi 认真讨论, chúng tôi quyết định 完成任务。",
    "options": [
      "周末的时候，邻居喜欢去上海解决问题。",
      "经过认真讨论，我们决定完成任务。",
      "这个问题不仅复杂，而且有一定的难度。",
      "根据客户意见，我们需要重新解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果时间比较紧，我们就可以完成任务。",
    "pinyin": "",
    "meaning": "Nếu 时间比较紧, chúng ta có thể 完成任务。",
    "options": [
      "经过多次沟通，我们决定修改计划。",
      "虽然资金还不充足，但是项目还是提高效率。",
      "如果时间比较紧，我们就可以完成任务。",
      "如果资金还不充足，我们就可以安排会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果时间比较紧，我们就可以提高效率。",
    "pinyin": "",
    "meaning": "Nếu 时间比较紧, chúng ta có thể 提高效率。",
    "options": [
      "如果时间比较紧，我们就可以提高效率。",
      "为了避免时间上的浪费，我们必须提交报告。",
      "经理每天都要讨论计划。",
      "经理每天都要参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果计划没有改变，我们就可以解决问题。",
    "pinyin": "",
    "meaning": "Nếu 计划没有改变, chúng ta có thể 解决问题。",
    "options": [
      "如果计划没有改变，我们就可以解决问题。",
      "经过认真讨论，我们决定检查文件。",
      "根据市场变化，我们需要重新安排会议。",
      "为了解决当前问题，公司正在提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定完成任务。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 完成任务。",
    "options": [
      "如果计划没有变化，经理下午会在北京参加会议。",
      "如果计划没有变化，邻居下午会在家里联系客户。",
      "这个问题不仅有效，而且值得认真考虑。",
      "经过多次沟通，我们决定完成任务。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了保证项目顺利进行，公司正在提交报告。",
    "pinyin": "",
    "meaning": "Để 保证项目顺利进行, công ty đang 提交报告。",
    "options": [
      "为了保证项目顺利进行，公司正在提交报告。",
      "我的同事已经把新闻报道带到学校了。",
      "因为工作很忙，我的同事只能晚上完成任务。",
      "为了解决当前问题，公司正在联系客户。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新提高效率。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 提高效率 lại.",
    "options": [
      "经过调查，记者发现原来的计划需要调整。",
      "为了提高工作效率，公司正在检查文件。",
      "经过详细分析，我们决定解决问题。",
      "根据市场变化，我们需要重新提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过充分准备，我们决定联系客户。",
    "pinyin": "",
    "meaning": "Sau khi 充分准备, chúng tôi quyết định 联系客户。",
    "options": [
      "如果时间比较紧，我们就可以解决问题。",
      "经过充分准备，我们决定联系客户。",
      "为了保证项目顺利进行，公司正在修改计划。",
      "经理正在检查电子邮件，准备开始讨论计划。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责提高效率，并且需要及时联系客户。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提高效率, đồng thời cần 及时联系客户。",
    "options": [
      "根据调查结果，我们需要重新解决问题。",
      "如果时间比较紧，我们就可以检查文件。",
      "为了改善服务质量，公司正在提高效率。",
      "他负责提高效率，并且需要及时联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了避免严重的错误，我们必须调整工作安排。",
    "pinyin": "",
    "meaning": "Để tránh 严重的错误, chúng ta phải 调整工作安排。",
    "options": [
      "根据市场变化，我们需要重新提交报告。",
      "为了避免严重的错误，我们必须调整工作安排。",
      "虽然时间不多，但是记者还是完成了调整时间。",
      "为了避免不必要的麻烦，我们必须完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新解决问题。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 解决问题 lại.",
    "options": [
      "他负责提交报告，并且需要协调各部门的工作。",
      "根据客户意见，我们需要重新解决问题。",
      "如果资金还不充足，我们就可以提高效率。",
      "昨天记者在公司安排工作，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以安排会议。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 安排会议。",
    "options": [
      "邻居告诉我，他最近正在联系客户。",
      "如果资金还不充足，我们就可以调整工作安排。",
      "周末的时候，经理喜欢去公司讨论计划。",
      "如果遇到一些困难，我们就可以安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在联系客户。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 联系客户。",
    "options": [
      "根据客户意见，我们需要重新提交报告。",
      "根据客户意见，我们需要重新调整工作安排。",
      "经过认真讨论，我们决定调整工作安排。",
      "为了提高工作效率，公司正在联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在解决问题。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 解决问题。",
    "options": [
      "因为工作很忙，我的同事只能晚上准备报告。",
      "经过充分准备，我们决定解决问题。",
      "为了提高工作效率，公司正在解决问题。",
      "这个问题不仅明显，而且影响比较大。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "这个问题不仅重要，而且值得认真考虑。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 重要 mà còn 值得认真考虑。",
    "options": [
      "这个问题不仅重要，而且值得认真考虑。",
      "我的同事正在检查申请表，准备开始完成任务。",
      "如果时间比较紧，我们就可以安排会议。",
      "如果计划没有改变，我们就可以安排会议。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果天气发生变化，我们就可以完成任务。",
    "pinyin": "",
    "meaning": "Nếu 天气发生变化, chúng ta có thể 完成任务。",
    "options": [
      "虽然遇到一些困难，但是项目还是提高效率。",
      "如果时间比较紧，我们就可以解决问题。",
      "如果天气发生变化，我们就可以完成任务。",
      "为了避免信息泄露，我们必须修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了避免时间上的浪费，我们必须提高效率。",
    "pinyin": "",
    "meaning": "Để tránh 时间上的浪费, chúng ta phải 提高效率。",
    "options": [
      "如果计划没有改变，我们就可以安排会议。",
      "为了避免时间上的浪费，我们必须提高效率。",
      "邻居每天都要联系客户。",
      "他负责提高效率，并且需要协调各部门的工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责安排会议，并且需要协调各部门的工作。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 安排会议, đồng thời cần 协调各部门的工作。",
    "options": [
      "为了避免信息泄露，我们必须解决问题。",
      "他负责安排会议，并且需要协调各部门的工作。",
      "这个问题不仅合理，而且影响比较大。",
      "为了改善服务质量，公司正在提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "根据实际情况，我们需要重新调整工作安排。",
    "pinyin": "",
    "meaning": "Dựa trên 实际情况, chúng ta cần 调整工作安排 lại.",
    "options": [
      "根据实际情况，我们需要重新检查文件。",
      "周末的时候，我的同事喜欢去家里完成任务。",
      "经理每天都要讨论计划。",
      "根据实际情况，我们需要重新调整工作安排。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新联系客户。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 联系客户 lại.",
    "options": [
      "根据市场变化，我们需要重新提交报告。",
      "为了准备明天的工作，我的同事今晚还要准备报告。",
      "为了避免不必要的麻烦，我们必须联系客户。",
      "根据客户意见，我们需要重新联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了保证项目顺利进行，公司正在安排会议。",
    "pinyin": "",
    "meaning": "Để 保证项目顺利进行, công ty đang 安排会议。",
    "options": [
      "为了避免严重的错误，我们必须提交报告。",
      "邻居希望明天可以继续联系客户。",
      "这个问题不仅合理，而且有一定的难度。",
      "为了保证项目顺利进行，公司正在安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "根据实际情况，我们需要重新解决问题。",
    "pinyin": "",
    "meaning": "Dựa trên 实际情况, chúng ta cần 解决问题 lại.",
    "options": [
      "根据实际情况，我们需要重新解决问题。",
      "为了避免严重的错误，我们必须提交报告。",
      "他负责联系客户，并且需要完成相关报告。",
      "为了避免信息泄露，我们必须完成任务。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "这个问题不仅有效，而且值得认真考虑。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 有效 mà còn 值得认真考虑。",
    "options": [
      "记者觉得申请签证很重要。",
      "这个问题不仅有效，而且值得认真考虑。",
      "如果遇到一些困难，我们就可以联系客户。",
      "目前最重要的是解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "根据调查结果，我们需要重新提高效率。",
    "pinyin": "",
    "meaning": "Dựa trên 调查结果, chúng ta cần 提高效率 lại.",
    "options": [
      "我听说记者最近在公司负责申请签证。",
      "如果计划没有改变，我们就可以提交报告。",
      "根据调查结果，我们需要重新提高效率。",
      "为了保证项目顺利进行，公司正在修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果天气发生变化，我们就可以修改计划。",
    "pinyin": "",
    "meaning": "Nếu 天气发生变化, chúng ta có thể 修改计划。",
    "options": [
      "我的同事正在银行学习新知识。",
      "如果天气发生变化，我们就可以修改计划。",
      "最近经理常常需要参加会议。",
      "经过认真讨论，我们决定调整工作安排。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定完成任务。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 完成任务。",
    "options": [
      "会议结束以后，邻居马上回到家里继续解决问题。",
      "经过详细分析，我们决定完成任务。",
      "经过详细分析，我们决定修改计划。",
      "经过详细分析，我们决定安排会议。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是安排会议。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 安排会议。",
    "options": [
      "经过认真讨论，我们决定完成任务。",
      "虽然天气发生变化，但是项目还是安排会议。",
      "经过详细分析，我们决定检查文件。",
      "经过进一步调查，我们决定检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然资金还不充足，但是项目还是调整工作安排。",
    "pinyin": "",
    "meaning": "Mặc dù 资金还不充足, nhưng dự án vẫn 调整工作安排。",
    "options": [
      "为了避免严重的错误，我们必须修改计划。",
      "虽然资金还不充足，但是项目还是调整工作安排。",
      "周末的时候，邻居喜欢去学校检查文件。",
      "根据实际情况，我们需要重新联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免不必要的麻烦，我们必须修改计划。",
    "pinyin": "",
    "meaning": "Để tránh 不必要的麻烦, chúng ta phải 修改计划。",
    "options": [
      "为了避免不必要的麻烦，我们必须修改计划。",
      "虽然天气发生变化，但是项目还是修改计划。",
      "虽然天气发生变化，但是项目还是联系客户。",
      "目前最重要的是提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了避免严重的错误，我们必须解决问题。",
    "pinyin": "",
    "meaning": "Để tránh 严重的错误, chúng ta phải 解决问题。",
    "options": [
      "为了避免严重的错误，我们必须解决问题。",
      "经过进一步调查，我们决定提交报告。",
      "为了避免严重的错误，我们必须修改计划。",
      "经理正在检查电子邮件，准备开始讨论计划。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过充分准备，我们决定检查文件。",
    "pinyin": "",
    "meaning": "Sau khi 充分准备, chúng tôi quyết định 检查文件。",
    "options": [
      "为了避免信息泄露，我们必须提交报告。",
      "邻居希望明天可以继续联系客户。",
      "经过充分准备，我们决定检查文件。",
      "根据市场变化，我们需要重新修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果资金还不充足，我们就可以调整工作安排。",
    "pinyin": "",
    "meaning": "Nếu 资金还不充足, chúng ta có thể 调整工作安排。",
    "options": [
      "为了准备明天的工作，经理今晚还要提高效率。",
      "我的同事告诉我，他最近正在准备报告。",
      "如果资金还不充足，我们就可以调整工作安排。",
      "最近邻居常常需要检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据市场变化，我们需要重新提交报告。",
    "pinyin": "",
    "meaning": "Dựa trên 市场变化, chúng ta cần 提交报告 lại.",
    "options": [
      "根据调查结果，我们需要重新安排会议。",
      "如果有时间，邻居会去上海检查文件。",
      "根据市场变化，我们需要重新提交报告。",
      "如果有时间，邻居会去银行解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在解决问题。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 解决问题。",
    "options": [
      "经过多次沟通，我们决定提高效率。",
      "经理希望明天可以继续参加会议。",
      "根据客户意见，我们需要重新安排会议。",
      "为了改善服务质量，公司正在解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了解决当前问题，公司正在修改计划。",
    "pinyin": "",
    "meaning": "Để 解决当前问题, công ty đang 修改计划。",
    "options": [
      "为了提高工作效率，公司正在提高效率。",
      "为了解决当前问题，公司正在修改计划。",
      "经过认真讨论，我们决定检查文件。",
      "最近邻居常常需要检查文件。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "这个问题不仅合理，而且影响比较大。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 合理 mà còn 影响比较大。",
    "options": [
      "他负责解决问题，并且需要处理突发情况。",
      "我的同事正在图书馆完成任务。",
      "这个问题不仅合理，而且影响比较大。",
      "经过详细分析，我们决定调整工作安排。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以提交报告。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 提交报告。",
    "options": [
      "如果计划没有改变，我们就可以解决问题。",
      "如果遇到一些困难，我们就可以提交报告。",
      "如果有时间，记者会去餐厅申请签证。",
      "经过讨论，我的同事决定在银行准备报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须提交报告。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 提交报告。",
    "options": [
      "为了避免信息泄露，我们必须提交报告。",
      "虽然时间不多，但是我的同事还是完成了完成任务。",
      "最近邻居常常需要联系客户。",
      "这个问题不仅困难，而且影响比较大。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在联系客户。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 联系客户。",
    "options": [
      "为了改善服务质量，公司正在联系客户。",
      "如果计划没有改变，我们就可以安排会议。",
      "根据最新资料，我们需要重新提高效率。",
      "经过多次沟通，我们决定解决问题。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "虽然资金还不充足，但是项目还是提交报告。",
    "pinyin": "",
    "meaning": "Mặc dù 资金还不充足, nhưng dự án vẫn 提交报告。",
    "options": [
      "这个问题不仅复杂，而且有一定的难度。",
      "虽然资金还不充足，但是项目还是提交报告。",
      "经过讨论，记者决定在北京申请签证。",
      "为了准备明天的工作，我的同事今晚还要准备报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责提高效率，并且需要处理突发情况。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 提高效率, đồng thời cần 处理突发情况。",
    "options": [
      "为了准备报告，我的同事提前来到上海。",
      "他负责解决问题，并且需要及时联系客户。",
      "他负责提高效率，并且需要处理突发情况。",
      "如果遇到一些困难，我们就可以提交报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了保证项目顺利进行，公司正在调整工作安排。",
    "pinyin": "",
    "meaning": "Để 保证项目顺利进行, công ty đang 调整工作安排。",
    "options": [
      "为了保证项目顺利进行，公司正在调整工作安排。",
      "经过多次沟通，我们决定联系客户。",
      "如果资金还不充足，我们就可以调整工作安排。",
      "根据最新资料，我们需要重新提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了解决当前问题，公司正在提交报告。",
    "pinyin": "",
    "meaning": "Để 解决当前问题, công ty đang 提交报告。",
    "options": [
      "如果计划没有变化，邻居下午会在家里联系客户。",
      "这个问题不仅复杂，而且需要长期解决。",
      "为了解决当前问题，公司正在提交报告。",
      "经过充分准备，我们决定修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据调查结果，我们需要重新调整工作安排。",
    "pinyin": "",
    "meaning": "Dựa trên 调查结果, chúng ta cần 调整工作安排 lại.",
    "options": [
      "根据市场变化，我们需要重新提高效率。",
      "根据调查结果，我们需要重新调整工作安排。",
      "虽然天气发生变化，但是项目还是检查文件。",
      "周末的时候，我的同事喜欢去家里完成任务。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免不必要的麻烦，我们必须调整工作安排。",
    "pinyin": "",
    "meaning": "Để tránh 不必要的麻烦, chúng ta phải 调整工作安排。",
    "options": [
      "会议结束以后，我的同事马上回到上海继续学习新知识。",
      "经过充分准备，我们决定联系客户。",
      "为了避免不必要的麻烦，我们必须调整工作安排。",
      "根据客户意见，我们需要重新检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据最新资料，我们需要重新联系客户。",
    "pinyin": "",
    "meaning": "Dựa trên 最新资料, chúng ta cần 联系客户 lại.",
    "options": [
      "经过认真讨论，我们决定联系客户。",
      "目前最重要的是修改计划。",
      "根据最新资料，我们需要重新解决问题。",
      "根据最新资料，我们需要重新联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了完成新的任务，公司正在提交报告。",
    "pinyin": "",
    "meaning": "Để 完成新的任务, công ty đang 提交报告。",
    "options": [
      "为了完成新的任务，公司正在提交报告。",
      "如果时间比较紧，我们就可以安排会议。",
      "周末的时候，经理喜欢去公司讨论计划。",
      "经理每天都要提高效率。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在提高效率。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 提高效率。",
    "options": [
      "为了学习新知识，我的同事提前来到博物馆。",
      "经过认真讨论，我们决定提高效率。",
      "为了改善服务质量，公司正在调整工作安排。",
      "为了提高工作效率，公司正在提高效率。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定提高效率。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 提高效率。",
    "options": [
      "经过多次沟通，我们决定提高效率。",
      "邻居觉得联系客户很重要。",
      "他负责提高效率，并且需要处理突发情况。",
      "根据实际情况，我们需要重新调整工作安排。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "虽然遇到一些困难，但是项目还是检查文件。",
    "pinyin": "",
    "meaning": "Mặc dù 遇到一些困难, nhưng dự án vẫn 检查文件。",
    "options": [
      "目前最重要的是检查文件。",
      "虽然遇到一些困难，但是项目还是检查文件。",
      "记者告诉我，他最近正在调整时间。",
      "为了申请签证，记者提前来到公司。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "他负责检查文件，并且需要处理突发情况。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 检查文件, đồng thời cần 处理突发情况。",
    "options": [
      "虽然时间比较紧，但是项目还是解决问题。",
      "他负责检查文件，并且需要处理突发情况。",
      "经过认真讨论，我们决定联系客户。",
      "虽然资金还不充足，但是项目还是提交报告。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果天气发生变化，我们就可以联系客户。",
    "pinyin": "",
    "meaning": "Nếu 天气发生变化, chúng ta có thể 联系客户。",
    "options": [
      "如果天气发生变化，我们就可以联系客户。",
      "我的同事正在检查合同，准备开始学习新知识。",
      "这个问题不仅复杂，而且需要长期解决。",
      "经过讨论，记者决定在北京申请签证。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "如果天气发生变化，我们就可以安排会议。",
    "pinyin": "",
    "meaning": "Nếu 天气发生变化, chúng ta có thể 安排会议。",
    "options": [
      "经过充分准备，我们决定解决问题。",
      "他负责提交报告，并且需要协调各部门的工作。",
      "因为工作很忙，记者只能晚上申请签证。",
      "如果天气发生变化，我们就可以安排会议。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了解决当前问题，公司正在联系客户。",
    "pinyin": "",
    "meaning": "Để 解决当前问题, công ty đang 联系客户。",
    "options": [
      "目前最重要的是修改计划。",
      "为了解决当前问题，公司正在联系客户。",
      "为了避免时间上的浪费，我们必须检查文件。",
      "经过进一步调查，我们决定修改计划。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过多次沟通，我们决定联系客户。",
    "pinyin": "",
    "meaning": "Sau khi 多次沟通, chúng tôi quyết định 联系客户。",
    "options": [
      "最近经理常常需要提高效率。",
      "为了改善服务质量，公司正在解决问题。",
      "经过讨论，我的同事决定在上海学习新知识。",
      "经过多次沟通，我们决定联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "这个问题不仅重要，而且有一定的难度。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 重要 mà còn 有一定的难度。",
    "options": [
      "记者告诉我，他最近正在申请签证。",
      "如果时间比较紧，我们就可以安排会议。",
      "根据调查结果，我们需要重新提高效率。",
      "这个问题不仅重要，而且有一定的难度。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了保证项目顺利进行，公司正在提高效率。",
    "pinyin": "",
    "meaning": "Để 保证项目顺利进行, công ty đang 提高效率。",
    "options": [
      "为了保证项目顺利进行，公司正在提高效率。",
      "这个问题不仅合理，而且影响比较大。",
      "经过充分准备，我们决定修改计划。",
      "邻居觉得联系客户很重要。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "虽然计划没有改变，但是项目还是检查文件。",
    "pinyin": "",
    "meaning": "Mặc dù 计划没有改变, nhưng dự án vẫn 检查文件。",
    "options": [
      "根据实际情况，我们需要重新解决问题。",
      "虽然计划没有改变，但是项目还是联系客户。",
      "虽然计划没有改变，但是项目还是检查文件。",
      "为了准备明天的工作，我的同事今晚还要准备报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责完成任务，并且需要协调各部门的工作。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 完成任务, đồng thời cần 协调各部门的工作。",
    "options": [
      "最近经理常常需要提高效率。",
      "为了改善服务质量，公司正在提高效率。",
      "他负责完成任务，并且需要协调各部门的工作。",
      "虽然遇到一些困难，但是项目还是调整工作安排。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责完成任务，并且需要及时联系客户。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 完成任务, đồng thời cần 及时联系客户。",
    "options": [
      "经过多次沟通，我们决定检查文件。",
      "如果计划没有改变，我们就可以联系客户。",
      "根据客户意见，我们需要重新完成任务。",
      "他负责完成任务，并且需要及时联系客户。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了改善服务质量，公司正在提高效率。",
    "pinyin": "",
    "meaning": "Để 改善服务质量, công ty đang 提高效率。",
    "options": [
      "虽然天气发生变化，但是项目还是修改计划。",
      "为了改善服务质量，公司正在提高效率。",
      "昨天记者在北京申请签证，所以回家比较晚。",
      "他负责提交报告，并且需要及时联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免严重的错误，我们必须提交报告。",
    "pinyin": "",
    "meaning": "Để tránh 严重的错误, chúng ta phải 提交报告。",
    "options": [
      "为了改善服务质量，公司正在修改计划。",
      "为了改善服务质量，公司正在联系客户。",
      "为了避免严重的错误，我们必须提交报告。",
      "我的同事正在银行学习新知识。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "根据最新资料，我们需要重新修改计划。",
    "pinyin": "",
    "meaning": "Dựa trên 最新资料, chúng ta cần 修改计划 lại.",
    "options": [
      "根据最新资料，我们需要重新修改计划。",
      "经过进一步调查，我们决定修改计划。",
      "邻居每天都要检查文件。",
      "最近经理常常需要参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定提高效率。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 提高效率。",
    "options": [
      "经过详细分析，我们决定解决问题。",
      "经过多次沟通，我们决定安排会议。",
      "经过详细分析，我们决定提高效率。",
      "如果计划没有变化，邻居下午会在上海解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果计划没有改变，我们就可以提交报告。",
    "pinyin": "",
    "meaning": "Nếu 计划没有改变, chúng ta có thể 提交报告。",
    "options": [
      "如果计划没有改变，我们就可以提交报告。",
      "为了安排工作，记者提前来到广州。",
      "这个问题不仅重要，而且影响比较大。",
      "最近经理常常需要参加会议。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "这个问题不仅复杂，而且需要长期解决。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 复杂 mà còn 需要长期解决。",
    "options": [
      "今天记者在广州申请签证。",
      "周末的时候，经理喜欢去机场参加会议。",
      "这个问题不仅复杂，而且需要长期解决。",
      "最近我的同事常常需要准备报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "为了提高工作效率，公司正在提交报告。",
    "pinyin": "",
    "meaning": "Để 提高工作效率, công ty đang 提交报告。",
    "options": [
      "记者觉得调整时间很重要。",
      "为了提高工作效率，公司正在提交报告。",
      "周末的时候，经理喜欢去机场参加会议。",
      "为了解决当前问题，公司正在解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "这个问题不仅重要，而且需要长期解决。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 重要 mà còn 需要长期解决。",
    "options": [
      "经过多次沟通，我们决定完成任务。",
      "这个问题不仅困难，而且值得认真考虑。",
      "这个问题不仅重要，而且需要长期解决。",
      "经过充分准备，我们决定修改计划。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "如果遇到一些困难，我们就可以联系客户。",
    "pinyin": "",
    "meaning": "Nếu 遇到一些困难, chúng ta có thể 联系客户。",
    "options": [
      "根据实际情况，我们需要重新安排会议。",
      "根据市场变化，我们需要重新修改计划。",
      "如果遇到一些困难，我们就可以联系客户。",
      "目前最重要的是提交报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "他负责安排会议，并且需要完成相关报告。",
    "pinyin": "",
    "meaning": "Anh ấy phụ trách 安排会议, đồng thời cần 完成相关报告。",
    "options": [
      "因为工作很忙，记者只能晚上申请签证。",
      "虽然资金还不充足，但是项目还是调整工作安排。",
      "他负责安排会议，并且需要完成相关报告。",
      "这个问题不仅明显，而且有一定的难度。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "这个问题不仅复杂，而且有一定的难度。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 复杂 mà còn 有一定的难度。",
    "options": [
      "我听说邻居最近在学校负责联系客户。",
      "这个问题不仅复杂，而且有一定的难度。",
      "邻居觉得检查文件很重要。",
      "经过充分准备，我们决定修改计划。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "经过进一步调查，我们决定安排会议。",
    "pinyin": "",
    "meaning": "Sau khi 进一步调查, chúng tôi quyết định 安排会议。",
    "options": [
      "根据最新资料，我们需要重新修改计划。",
      "今天经理在北京提高效率。",
      "经过进一步调查，我们决定安排会议。",
      "经过详细分析，我们决定检查文件。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "这个问题不仅困难，而且影响比较大。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 困难 mà còn 影响比较大。",
    "options": [
      "为了改善服务质量，公司正在联系客户。",
      "虽然时间不多，但是我的同事还是完成了学习新知识。",
      "这个问题不仅困难，而且影响比较大。",
      "为了提高工作效率，公司正在提交报告。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过进一步调查，我们决定解决问题。",
    "pinyin": "",
    "meaning": "Sau khi 进一步调查, chúng tôi quyết định 解决问题。",
    "options": [
      "经过详细分析，我们决定检查文件。",
      "经过进一步调查，我们决定解决问题。",
      "根据客户意见，我们需要重新安排会议。",
      "如果有时间，记者会去会议室调整时间。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "虽然天气发生变化，但是项目还是调整工作安排。",
    "pinyin": "",
    "meaning": "Mặc dù 天气发生变化, nhưng dự án vẫn 调整工作安排。",
    "options": [
      "我的同事告诉我，他最近正在完成任务。",
      "虽然天气发生变化，但是项目还是调整工作安排。",
      "虽然天气发生变化，但是项目还是联系客户。",
      "为了准备明天的工作，我的同事今晚还要学习新知识。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须修改计划。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 修改计划。",
    "options": [
      "因为工作很忙，我的同事只能晚上学习新知识。",
      "为了避免信息泄露，我们必须修改计划。",
      "为了改善服务质量，公司正在修改计划。",
      "记者觉得调整时间很重要。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须调整工作安排。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 调整工作安排。",
    "options": [
      "经过认真讨论，我们决定检查文件。",
      "为了调整时间，记者提前来到机场。",
      "为了避免信息泄露，我们必须调整工作安排。",
      "经理正在检查调查结果，准备开始参加会议。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过进一步调查，我们决定调整工作安排。",
    "pinyin": "",
    "meaning": "Sau khi 进一步调查, chúng tôi quyết định 调整工作安排。",
    "options": [
      "他负责安排会议，并且需要处理突发情况。",
      "经过进一步调查，我们决定调整工作安排。",
      "为了避免信息泄露，我们必须完成任务。",
      "虽然时间不多，但是记者还是完成了安排工作。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果资金还不充足，我们就可以解决问题。",
    "pinyin": "",
    "meaning": "Nếu 资金还不充足, chúng ta có thể 解决问题。",
    "options": [
      "今天经理在广州讨论计划。",
      "经过多次沟通，我们决定提高效率。",
      "虽然天气发生变化，但是项目还是调整工作安排。",
      "如果资金还不充足，我们就可以解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "为了保证项目顺利进行，公司正在修改计划。",
    "pinyin": "",
    "meaning": "Để 保证项目顺利进行, công ty đang 修改计划。",
    "options": [
      "记者觉得调整时间很重要。",
      "为了保证项目顺利进行，公司正在修改计划。",
      "虽然时间比较紧，但是项目还是提交报告。",
      "这个问题不仅合理，而且需要长期解决。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "这个问题不仅困难，而且有一定的难度。",
    "pinyin": "",
    "meaning": "Vấn đề này không chỉ 困难 mà còn 有一定的难度。",
    "options": [
      "经过多次沟通，我们决定提高效率。",
      "经过调查，记者发现情况比预想的严重。",
      "根据客户意见，我们需要重新安排会议。",
      "这个问题不仅困难，而且有一定的难度。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定检查文件。",
    "pinyin": "",
    "meaning": "Sau khi 认真讨论, chúng tôi quyết định 检查文件。",
    "options": [
      "为了准备明天的工作，经理今晚还要讨论计划。",
      "经过认真讨论，我们决定检查文件。",
      "今天我的同事在上海完成任务。",
      "邻居每天都要联系客户。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "根据客户意见，我们需要重新提交报告。",
    "pinyin": "",
    "meaning": "Dựa trên 客户意见, chúng ta cần 提交报告 lại.",
    "options": [
      "最近邻居常常需要解决问题。",
      "我听说记者最近在会议室负责安排工作。",
      "如果有时间，记者会去医院安排工作。",
      "根据客户意见，我们需要重新提交报告。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定安排会议。",
    "pinyin": "",
    "meaning": "Sau khi 认真讨论, chúng tôi quyết định 安排会议。",
    "options": [
      "经过认真讨论，我们决定安排会议。",
      "经过充分准备，我们决定修改计划。",
      "经理希望明天可以继续讨论计划。",
      "他负责联系客户并安排会议时间。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "经过认真讨论，我们决定调整工作安排。",
    "pinyin": "",
    "meaning": "Sau khi 认真讨论, chúng tôi quyết định 调整工作安排。",
    "options": [
      "为了改善服务质量，公司正在提交报告。",
      "经过认真讨论，我们决定调整工作安排。",
      "他负责完成任务，并且需要协调各部门的工作。",
      "经过详细分析，我们决定提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 4,
    "audio": "如果时间比较紧，我们就可以解决问题。",
    "pinyin": "",
    "meaning": "Nếu 时间比较紧, chúng ta có thể 解决问题。",
    "options": [
      "如果时间比较紧，我们就可以解决问题。",
      "为了保证项目顺利进行，公司正在安排会议。",
      "虽然资金还不充足，但是项目还是联系客户。",
      "为了准备明天的工作，我的同事今晚还要准备报告。"
    ],
    "correct": 0
  },
  {
    "level": 4,
    "audio": "为了避免信息泄露，我们必须解决问题。",
    "pinyin": "",
    "meaning": "Để tránh 信息泄露, chúng ta phải 解决问题。",
    "options": [
      "根据实际情况，我们需要重新安排会议。",
      "虽然天气发生变化，但是项目还是调整工作安排。",
      "为了完成新的任务，公司正在安排会议。",
      "为了避免信息泄露，我们必须解决问题。"
    ],
    "correct": 3
  },
  {
    "level": 4,
    "audio": "如果资金还不充足，我们就可以检查文件。",
    "pinyin": "",
    "meaning": "Nếu 资金还不充足, chúng ta có thể 检查文件。",
    "options": [
      "这个问题不仅合理，而且需要长期解决。",
      "他负责解决问题，并且需要处理突发情况。",
      "如果资金还不充足，我们就可以检查文件。",
      "经过多次沟通，我们决定解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 4,
    "audio": "经过详细分析，我们决定修改计划。",
    "pinyin": "",
    "meaning": "Sau khi 详细分析, chúng tôi quyết định 修改计划。",
    "options": [
      "虽然时间不多，但是邻居还是完成了联系客户。",
      "经过详细分析，我们决定修改计划。",
      "为了调整时间，记者提前来到机场。",
      "为了提高工作效率，公司正在提高效率。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况加强沟通，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 加强沟通 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "如果有时间，志愿者会去广州交换意见。",
      "我们应该根据实际情况加强沟通，而不能简单地照搬过去的方法。",
      "昨天企业家在研究中心调整计划，所以回家比较晚。",
      "面对项目进展，我们需要采取更加科学的措施。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "为了进一步改善工作效率，研究人员进行了调查。",
    "pinyin": "",
    "meaning": "Để tiếp tục 改善工作效率, các nhà nghiên cứu đã tiến hành điều tra.",
    "options": [
      "记者每天都要改进方法。",
      "同事正在城市中心积累经验。",
      "为了进一步改善工作效率，研究人员进行了调查。",
      "周末的时候，记者喜欢去实验室改进方法。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对发展战略，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 发展战略, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "面对资源配置，我们需要采取更加灵活的措施。",
      "周末的时候，记者喜欢去实验室改进方法。",
      "面对发展战略，我们需要采取更加全面的措施。",
      "志愿者已经把统计结果带到实验室了。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况完善相关制度，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 完善相关制度 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "会议结束以后，记者马上回到城市中心继续解决问题。",
      "我们应该根据实际情况完善相关制度，而不能简单地照搬过去的方法。",
      "为了交换意见，志愿者提前来到公司。",
      "面对资源配置，我们需要采取更加科学的措施。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况调整发展战略，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 调整发展战略 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "面对研究结果，我们需要采取更加全面的措施。",
      "虽然情况发生变化，但是我们仍然需要深入分析问题。",
      "如果有时间，志愿者会去机场完成研究。",
      "我们应该根据实际情况调整发展战略，而不能简单地照搬过去的方法。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "这一变化可能会对研究结果产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 研究结果。",
    "options": [
      "我们应该根据实际情况提高服务质量，而不能简单地照搬过去的方法。",
      "虽然时间非常紧张，但是我们仍然需要完善相关制度。",
      "这一变化可能会对研究结果产生影响。",
      "志愿者觉得讨论方案很重要。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "双方就合作方案进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 合作方案。",
    "options": [
      "虽然时间非常紧张，但是我们仍然需要加强沟通。",
      "双方就合作方案进行了深入讨论。",
      "会议结束以后，企业家马上回到公司继续提高效率。",
      "同事正在检查技术文件，准备开始积累经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "这项研究表明，市场需求正在发生变化。",
    "pinyin": "",
    "meaning": "Nghiên cứu này cho thấy 市场需求正在发生变化。",
    "options": [
      "这项研究表明，市场需求正在发生变化。",
      "这一变化可能会对项目进展产生影响。",
      "面对社会需求，我们需要采取更加有效的措施。",
      "我听说企业家最近在北京负责调整计划。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "双方就研究结果进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 研究结果。",
    "options": [
      "同事正在大学分析数据。",
      "虽然资源比较有限，但是我们仍然需要优化资源配置。",
      "双方就研究结果进行了深入讨论。",
      "虽然时间不多，但是企业家还是完成了承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "为了进一步解决实际问题，研究人员进行了调查。",
    "pinyin": "",
    "meaning": "Để tiếp tục 解决实际问题, các nhà nghiên cứu đã tiến hành điều tra.",
    "options": [
      "虽然时间不多，但是同事还是完成了积累经验。",
      "最近记者常常需要申请项目。",
      "面对市场变化，我们需要采取更加灵活的措施。",
      "为了进一步解决实际问题，研究人员进行了调查。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "双方就资源配置进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 资源配置。",
    "options": [
      "面对社会需求，我们需要采取更加全面的措施。",
      "今天记者在研究中心改进方法。",
      "经过分析，我们认为应该改进管理方法。",
      "双方就资源配置进行了深入讨论。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "从长远来看，问题的原因并不简单。",
    "pinyin": "",
    "meaning": "Xét về lâu dài, 问题的原因并不简单。",
    "options": [
      "从长远来看，问题的原因并不简单。",
      "今天同事在研究中心调查情况。",
      "我们应该根据实际情况提高服务质量，而不能简单地照搬过去的方法。",
      "这一变化可能会对项目进展产生影响。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对合作方案，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 合作方案, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "这一变化可能会对项目进展产生影响。",
      "面对合作方案，我们需要采取更加合理的措施。",
      "今天记者在北京解决问题。",
      "经过讨论，志愿者决定在医院交换意见。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "这一变化可能会对管理制度产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 管理制度。",
    "options": [
      "同事已经把会议记录带到广州了。",
      "这一变化可能会对管理制度产生影响。",
      "如果计划没有变化，企业家下午会在机场承担责任。",
      "为了准备明天的工作，记者今晚还要解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要加强沟通。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 加强沟通。",
    "options": [
      "面对社会需求，我们需要采取更加严格的措施。",
      "志愿者已经把市场信息带到机场了。",
      "虽然情况发生变化，但是我们仍然需要加强沟通。",
      "这项研究表明，市场需求正在发生变化。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "这项研究表明，相关政策需要进一步完善。",
    "pinyin": "",
    "meaning": "Nghiên cứu này cho thấy 相关政策需要进一步完善。",
    "options": [
      "这项研究表明，相关政策需要进一步完善。",
      "双方就合作方案进行了深入讨论。",
      "我们应该根据实际情况深入分析问题，而不能简单地照搬过去的方法。",
      "企业必须不断优化资源配置，才能保持竞争力。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对资源配置，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "因为工作很忙，同事只能晚上积累经验。",
      "面对资源配置，我们需要采取更加科学的措施。",
      "志愿者告诉我，他最近正在讨论方案。",
      "面对项目进展，我们需要采取更加严格的措施。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要积累实践经验。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 积累实践经验。",
    "options": [
      "同事正在公司分析数据。",
      "会议结束以后，记者马上回到公司继续改进方法。",
      "虽然情况发生变化，但是我们仍然需要积累实践经验。",
      "如果有时间，企业家会去实验室承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对合作方案，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 合作方案, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "从长远来看，新的方案能够提高效率。",
      "面对合作方案，我们需要采取更加科学的措施。",
      "同事正在检查合同条款，准备开始分析数据。",
      "为了积累经验，同事提前来到实验室。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "企业必须不断积累实践经验，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 积累实践经验 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "面对合作方案，我们需要采取更加科学的措施。",
      "企业必须不断积累实践经验，才能保持竞争力。",
      "虽然时间非常紧张，但是我们仍然需要完善相关制度。",
      "这一变化可能会对社会需求产生影响。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况深入分析问题，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 深入分析问题 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "企业必须不断改进管理方法，才能保持竞争力。",
      "企业必须不断优化资源配置，才能保持竞争力。",
      "我们应该根据实际情况深入分析问题，而不能简单地照搬过去的方法。",
      "为了准备明天的工作，记者今晚还要改进方法。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "双方就社会需求进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 社会需求。",
    "options": [
      "最近企业家常常需要提高效率。",
      "经过讨论，志愿者决定在城市中心完成研究。",
      "同事告诉我，他最近正在积累经验。",
      "双方就社会需求进行了深入讨论。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该深入分析问题。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 深入分析问题。",
    "options": [
      "经过分析，我们认为应该深入分析问题。",
      "面对合作方案，我们需要采取更加全面的措施。",
      "面对合作方案，我们需要采取更加合理的措施。",
      "志愿者觉得讨论方案很重要。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "企业必须不断优化资源配置，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 优化资源配置 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "企业必须不断优化资源配置，才能保持竞争力。",
      "这项研究表明，市场需求正在发生变化。",
      "如果计划没有变化，企业家下午会在机场承担责任。",
      "经过讨论，同事决定在医院分析数据。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该积累实践经验。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 积累实践经验。",
    "options": [
      "同事已经把合同条款带到图书馆了。",
      "这一变化可能会对市场变化产生影响。",
      "经过讨论，志愿者决定在医院交换意见。",
      "经过分析，我们认为应该积累实践经验。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "为了进一步提高研究质量，研究人员进行了调查。",
    "pinyin": "",
    "meaning": "Để tiếp tục 提高研究质量, các nhà nghiên cứu đã tiến hành điều tra.",
    "options": [
      "如果有时间，企业家会去机场提高效率。",
      "为了进一步提高研究质量，研究人员进行了调查。",
      "面对变化，我们应该保持理性和耐心。",
      "为了讨论方案，志愿者提前来到实验室。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该加强沟通。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 加强沟通。",
    "options": [
      "经过分析，我们认为应该加强沟通。",
      "面对市场变化，我们需要采取更加严格的措施。",
      "我们应该根据实际情况加强沟通，而不能简单地照搬过去的方法。",
      "我们应该根据实际情况调整发展战略，而不能简单地照搬过去的方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "这一变化可能会对项目进展产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 项目进展。",
    "options": [
      "经过分析，我们认为应该优化资源配置。",
      "我听说企业家最近在医院负责承担责任。",
      "这一变化可能会对项目进展产生影响。",
      "面对发展战略，我们需要采取更加科学的措施。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该完善相关制度。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 完善相关制度。",
    "options": [
      "经过分析，我们认为应该优化资源配置。",
      "同事告诉我，他最近正在分析数据。",
      "经过分析，我们认为应该完善相关制度。",
      "虽然市场环境复杂，但是我们仍然需要完善相关制度。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要深入分析问题。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 深入分析问题。",
    "options": [
      "面对社会需求，我们需要采取更加有效的措施。",
      "经过分析，我们认为应该提高服务质量。",
      "虽然情况发生变化，但是我们仍然需要深入分析问题。",
      "昨天企业家在博物馆提高效率，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "这一变化可能会对社会需求产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 社会需求。",
    "options": [
      "这一变化可能会对社会需求产生影响。",
      "今天同事在研究中心调查情况。",
      "经过讨论，同事决定在公司积累经验。",
      "志愿者已经把项目计划带到广州了。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该优化资源配置。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 优化资源配置。",
    "options": [
      "经过分析，我们认为应该优化资源配置。",
      "面对项目进展，我们需要采取更加严格的措施。",
      "经过分析，我们认为应该深入分析问题。",
      "面对发展战略，我们需要采取更加有效的措施。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "这一变化可能会对市场变化产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 市场变化。",
    "options": [
      "为了准备明天的工作，记者今晚还要申请项目。",
      "因为工作很忙，同事只能晚上积累经验。",
      "这一变化可能会对市场变化产生影响。",
      "记者正在检查调查数据，准备开始申请项目。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "这一变化可能会对合作方案产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 合作方案。",
    "options": [
      "这一变化可能会对合作方案产生影响。",
      "因为工作很忙，同事只能晚上积累经验。",
      "周末的时候，记者喜欢去会议中心解决问题。",
      "志愿者已经把市场信息带到机场了。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "企业必须不断深入分析问题，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 深入分析问题 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "虽然情况发生变化，但是我们仍然需要调整发展战略。",
      "企业必须不断深入分析问题，才能保持竞争力。",
      "会议结束以后，记者马上回到城市中心继续解决问题。",
      "我听说志愿者最近在城市中心负责交换意见。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况提高服务质量，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 提高服务质量 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "我们应该根据实际情况提高服务质量，而不能简单地照搬过去的方法。",
      "昨天企业家在北京承担责任，所以回家比较晚。",
      "这一变化可能会对市场变化产生影响。",
      "面对管理制度，我们需要采取更加有效的措施。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "为了进一步推动项目发展，研究人员进行了调查。",
    "pinyin": "",
    "meaning": "Để tiếp tục 推动项目发展, các nhà nghiên cứu đã tiến hành điều tra.",
    "options": [
      "会议结束以后，企业家马上回到城市中心继续调整计划。",
      "如果计划没有变化，企业家下午会在上海提高效率。",
      "为了进一步推动项目发展，研究人员进行了调查。",
      "如果有时间，志愿者会去机场完成研究。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该提高服务质量。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 提高服务质量。",
    "options": [
      "为了进一步解决实际问题，研究人员进行了调查。",
      "经过分析，我们认为应该提高服务质量。",
      "企业家每天都要调整计划。",
      "双方就市场变化进行了深入讨论。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该调整发展战略。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 调整发展战略。",
    "options": [
      "昨天志愿者在博物馆完成研究，所以回家比较晚。",
      "面对市场变化，我们需要采取更加灵活的措施。",
      "经过分析，我们认为应该调整发展战略。",
      "经过讨论，同事决定在公司积累经验。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "这一变化可能会对资源配置产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 资源配置。",
    "options": [
      "记者每天都要解决问题。",
      "这一变化可能会对资源配置产生影响。",
      "面对合作方案，我们需要采取更加科学的措施。",
      "志愿者觉得交换意见很重要。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要优化资源配置。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 优化资源配置。",
    "options": [
      "周末的时候，记者喜欢去会议中心解决问题。",
      "这一变化可能会对项目进展产生影响。",
      "为了准备明天的工作，记者今晚还要改进方法。",
      "虽然市场环境复杂，但是我们仍然需要优化资源配置。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "经过分析，我们认为应该改进管理方法。",
    "pinyin": "",
    "meaning": "Sau khi phân tích, chúng tôi cho rằng nên 改进管理方法。",
    "options": [
      "企业家希望明天可以继续调整计划。",
      "经过分析，我们认为应该改进管理方法。",
      "这一变化可能会对管理制度产生影响。",
      "昨天志愿者在北京讨论方案，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要提高服务质量。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 提高服务质量。",
    "options": [
      "虽然情况发生变化，但是我们仍然需要提高服务质量。",
      "为了讨论方案，志愿者提前来到实验室。",
      "如果有时间，企业家会去广州调整计划。",
      "如果计划没有变化，企业家下午会在图书馆调整计划。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对发展战略，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 发展战略, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "记者每天都要改进方法。",
      "记者正在检查调查数据，准备开始申请项目。",
      "面对发展战略，我们需要采取更加合理的措施。",
      "今天记者在博物馆申请项目。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要调整发展战略。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 调整发展战略。",
    "options": [
      "虽然时间非常紧张，但是我们仍然需要调整发展战略。",
      "经过分析，我们认为应该改进管理方法。",
      "虽然时间非常紧张，但是我们仍然需要改进管理方法。",
      "虽然时间不多，但是志愿者还是完成了讨论方案。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "从长远来看，新的方案能够提高效率。",
    "pinyin": "",
    "meaning": "Xét về lâu dài, 新的方案能够提高效率。",
    "options": [
      "今天记者在研究中心改进方法。",
      "面对研究结果，我们需要采取更加灵活的措施。",
      "从长远来看，新的方案能够提高效率。",
      "这一变化可能会对管理制度产生影响。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要优化资源配置。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 优化资源配置。",
    "options": [
      "虽然时间非常紧张，但是我们仍然需要优化资源配置。",
      "这一变化可能会对研究结果产生影响。",
      "今天记者在博物馆申请项目。",
      "虽然市场环境复杂，但是我们仍然需要积累实践经验。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对社会需求，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "面对社会需求，我们需要采取更加灵活的措施。",
      "虽然资源比较有限，但是我们仍然需要调整发展战略。",
      "会议结束以后，同事马上回到城市中心继续分析数据。",
      "面对市场变化，我们需要采取更加灵活的措施。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况优化资源配置，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 优化资源配置 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "志愿者告诉我，他最近正在完成研究。",
      "从长远来看，新的方案能够提高效率。",
      "如果有时间，志愿者会去机场完成研究。",
      "我们应该根据实际情况优化资源配置，而不能简单地照搬过去的方法。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "面对资源配置，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "经过讨论，同事决定在公司积累经验。",
      "这项研究表明，问题的原因并不简单。",
      "面对资源配置，我们需要采取更加灵活的措施。",
      "为了调查情况，同事提前来到会议中心。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "这项研究表明，新的方案能够提高效率。",
    "pinyin": "",
    "meaning": "Nghiên cứu này cho thấy 新的方案能够提高效率。",
    "options": [
      "企业家每天都要提高效率。",
      "今天同事在上海分析数据。",
      "这项研究表明，新的方案能够提高效率。",
      "面对研究结果，我们需要采取更加灵活的措施。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要改进管理方法。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 改进管理方法。",
    "options": [
      "虽然资源比较有限，但是我们仍然需要完善相关制度。",
      "面对市场变化，我们需要采取更加全面的措施。",
      "会议结束以后，记者马上回到医院继续申请项目。",
      "虽然资源比较有限，但是我们仍然需要改进管理方法。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "这项研究表明，问题的原因并不简单。",
    "pinyin": "",
    "meaning": "Nghiên cứu này cho thấy 问题的原因并不简单。",
    "options": [
      "为了进一步解决实际问题，研究人员进行了调查。",
      "如果计划没有变化，志愿者下午会在研究中心讨论方案。",
      "面对合作方案，我们需要采取更加合理的措施。",
      "这项研究表明，问题的原因并不简单。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要调整发展战略。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 调整发展战略。",
    "options": [
      "虽然市场环境复杂，但是我们仍然需要调整发展战略。",
      "我听说记者最近在大学负责改进方法。",
      "如果计划没有变化，志愿者下午会在图书馆交换意见。",
      "同事告诉我，他最近正在调查情况。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对研究结果，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 研究结果, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "我们应该根据实际情况提高服务质量，而不能简单地照搬过去的方法。",
      "会议结束以后，企业家马上回到会议中心继续承担责任。",
      "面对研究结果，我们需要采取更加全面的措施。",
      "虽然市场环境复杂，但是我们仍然需要改进管理方法。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "从长远来看，这种方法具有一定的可行性。",
    "pinyin": "",
    "meaning": "Xét về lâu dài, 这种方法具有一定的可行性。",
    "options": [
      "经过讨论，同事决定在城市中心调查情况。",
      "会议结束以后，记者马上回到医院继续申请项目。",
      "虽然市场环境复杂，但是我们仍然需要积累实践经验。",
      "从长远来看，这种方法具有一定的可行性。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "双方就管理制度进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 管理制度。",
    "options": [
      "从长远来看，市场需求正在发生变化。",
      "面对发展战略，我们需要采取更加全面的措施。",
      "最近企业家常常需要调整计划。",
      "双方就管理制度进行了深入讨论。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要改进管理方法。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 改进管理方法。",
    "options": [
      "经过讨论，志愿者决定在医院交换意见。",
      "虽然资源比较有限，但是我们仍然需要积累实践经验。",
      "虽然情况发生变化，但是我们仍然需要改进管理方法。",
      "面对发展战略，我们需要采取更加灵活的措施。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "双方就市场变化进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 市场变化。",
    "options": [
      "记者希望明天可以继续改进方法。",
      "双方就市场变化进行了深入讨论。",
      "志愿者已经把项目计划带到广州了。",
      "同事正在检查技术文件，准备开始积累经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况改进管理方法，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 改进管理方法 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "我们应该根据实际情况改进管理方法，而不能简单地照搬过去的方法。",
      "企业家每天都要调整计划。",
      "为了讨论方案，志愿者提前来到城市中心。",
      "企业必须不断调整发展战略，才能保持竞争力。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对研究结果，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 研究结果, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "虽然时间不多，但是志愿者还是完成了讨论方案。",
      "面对研究结果，我们需要采取更加灵活的措施。",
      "面对市场变化，我们需要采取更加严格的措施。",
      "我听说企业家最近在医院负责承担责任。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "从长远来看，市场需求正在发生变化。",
    "pinyin": "",
    "meaning": "Xét về lâu dài, 市场需求正在发生变化。",
    "options": [
      "从长远来看，市场需求正在发生变化。",
      "虽然时间不多，但是企业家还是完成了承担责任。",
      "同事正在公司分析数据。",
      "为了进一步提高研究质量，研究人员进行了调查。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "企业必须不断提高服务质量，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 提高服务质量 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "双方就社会需求进行了深入讨论。",
      "面对合作方案，我们需要采取更加科学的措施。",
      "从长远来看，这种方法具有一定的可行性。",
      "企业必须不断提高服务质量，才能保持竞争力。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要完善相关制度。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 完善相关制度。",
    "options": [
      "面对发展战略，我们需要采取更加有效的措施。",
      "周末的时候，记者喜欢去广州申请项目。",
      "虽然情况发生变化，但是我们仍然需要完善相关制度。",
      "面对合作方案，我们需要采取更加全面的措施。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要提高服务质量。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 提高服务质量。",
    "options": [
      "虽然时间非常紧张，但是我们仍然需要提高服务质量。",
      "虽然时间不多，但是志愿者还是完成了讨论方案。",
      "面对研究结果，我们需要采取更加有效的措施。",
      "志愿者正在检查市场信息，准备开始讨论方案。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对合作方案，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 合作方案, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "面对合作方案，我们需要采取更加严格的措施。",
      "面对合作方案，我们需要采取更加合理的措施。",
      "同事已经把合同条款带到图书馆了。",
      "企业必须不断加强沟通，才能保持竞争力。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "从长远来看，相关政策需要进一步完善。",
    "pinyin": "",
    "meaning": "Xét về lâu dài, 相关政策需要进一步完善。",
    "options": [
      "从长远来看，市场需求正在发生变化。",
      "面对社会需求，我们需要采取更加全面的措施。",
      "我们应该根据实际情况调整发展战略，而不能简单地照搬过去的方法。",
      "从长远来看，相关政策需要进一步完善。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "双方就项目进展进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 项目进展。",
    "options": [
      "企业必须不断优化资源配置，才能保持竞争力。",
      "双方就项目进展进行了深入讨论。",
      "因为工作很忙，志愿者只能晚上交换意见。",
      "志愿者正在检查市场信息，准备开始讨论方案。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "这一变化可能会对发展战略产生影响。",
    "pinyin": "",
    "meaning": "Thay đổi này có thể ảnh hưởng đến 发展战略。",
    "options": [
      "企业必须不断加强沟通，才能保持竞争力。",
      "这一变化可能会对发展战略产生影响。",
      "经过分析，我们发现问题比想象中更加复杂。",
      "面对发展战略，我们需要采取更加有效的措施。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "为了进一步加强双方合作，研究人员进行了调查。",
    "pinyin": "",
    "meaning": "Để tiếp tục 加强双方合作, các nhà nghiên cứu đã tiến hành điều tra.",
    "options": [
      "周末的时候，记者喜欢去会议中心解决问题。",
      "会议结束以后，同事马上回到城市中心继续分析数据。",
      "经过分析，我们发现问题比想象中更加复杂。",
      "为了进一步加强双方合作，研究人员进行了调查。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "双方就发展战略进行了深入讨论。",
    "pinyin": "",
    "meaning": "Hai bên đã thảo luận sâu về 发展战略。",
    "options": [
      "昨天企业家在研究中心调整计划，所以回家比较晚。",
      "企业必须不断积累实践经验，才能保持竞争力。",
      "为了积累经验，同事提前来到实验室。",
      "双方就发展战略进行了深入讨论。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要积累实践经验。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 积累实践经验。",
    "options": [
      "面对合作方案，我们需要采取更加科学的措施。",
      "为了准备明天的工作，志愿者今晚还要完成研究。",
      "虽然时间非常紧张，但是我们仍然需要积累实践经验。",
      "我们应该根据实际情况调整发展战略，而不能简单地照搬过去的方法。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "这项研究表明，这种方法具有一定的可行性。",
    "pinyin": "",
    "meaning": "Nghiên cứu này cho thấy 这种方法具有一定的可行性。",
    "options": [
      "企业必须不断优化资源配置，才能保持竞争力。",
      "这项研究表明，这种方法具有一定的可行性。",
      "虽然时间非常紧张，但是我们仍然需要深入分析问题。",
      "同事正在公司分析数据。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "面对研究结果，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 研究结果, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "面对研究结果，我们需要采取更加合理的措施。",
      "记者正在会议中心改进方法。",
      "记者正在检查学习资料，准备开始改进方法。",
      "我们应该根据实际情况优化资源配置，而不能简单地照搬过去的方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "企业必须不断完善相关制度，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 完善相关制度 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "这一变化可能会对资源配置产生影响。",
      "面对研究结果，我们需要采取更加灵活的措施。",
      "企业必须不断完善相关制度，才能保持竞争力。",
      "如果有时间，企业家会去实验室承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对项目进展，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 项目进展, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "最近企业家常常需要承担责任。",
      "志愿者告诉我，他最近正在交换意见。",
      "面对项目进展，我们需要采取更加科学的措施。",
      "我们应该根据实际情况提高服务质量，而不能简单地照搬过去的方法。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "我们应该根据实际情况积累实践经验，而不能简单地照搬过去的方法。",
    "pinyin": "",
    "meaning": "Chúng ta nên 积累实践经验 dựa trên tình hình thực tế, không thể đơn giản sao chép phương pháp trước đây.",
    "options": [
      "面对合作方案，我们需要采取更加全面的措施。",
      "我们应该根据实际情况积累实践经验，而不能简单地照搬过去的方法。",
      "我听说志愿者最近在医院负责讨论方案。",
      "这一变化可能会对研究结果产生影响。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "面对发展战略，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 发展战略, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "面对发展战略，我们需要采取更加科学的措施。",
      "为了进一步加强双方合作，研究人员进行了调查。",
      "虽然市场环境复杂，但是我们仍然需要调整发展战略。",
      "我们应该根据实际情况加强沟通，而不能简单地照搬过去的方法。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对发展战略，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 发展战略, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "企业家每天都要调整计划。",
      "面对发展战略，我们需要采取更加有效的措施。",
      "面对社会需求，我们需要采取更加严格的措施。",
      "志愿者正在检查市场信息，准备开始讨论方案。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要完善相关制度。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 完善相关制度。",
    "options": [
      "虽然时间非常紧张，但是我们仍然需要改进管理方法。",
      "虽然资源比较有限，但是我们仍然需要完善相关制度。",
      "我听说企业家最近在大学负责提高效率。",
      "从长远来看，问题的原因并不简单。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要加强沟通。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 加强沟通。",
    "options": [
      "经过分析，我们认为应该深入分析问题。",
      "如果有时间，志愿者会去机场完成研究。",
      "记者每天都要申请项目。",
      "虽然时间非常紧张，但是我们仍然需要加强沟通。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要加强沟通。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 加强沟通。",
    "options": [
      "面对合作方案，我们需要采取更加灵活的措施。",
      "虽然市场环境复杂，但是我们仍然需要加强沟通。",
      "为了准备明天的工作，同事今晚还要积累经验。",
      "今天记者在上海解决问题。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要优化资源配置。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 优化资源配置。",
    "options": [
      "虽然市场环境复杂，但是我们仍然需要完善相关制度。",
      "同事告诉我，他最近正在调查情况。",
      "虽然情况发生变化，但是我们仍然需要优化资源配置。",
      "如果有时间，企业家会去实验室承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要加强沟通。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 加强沟通。",
    "options": [
      "虽然资源比较有限，但是我们仍然需要加强沟通。",
      "为了准备明天的工作，同事今晚还要分析数据。",
      "最近记者常常需要改进方法。",
      "志愿者觉得讨论方案很重要。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对管理制度，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理制度, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "经过分析，我们认为应该改进管理方法。",
      "经过分析，我们认为应该加强沟通。",
      "我听说记者最近在大学负责改进方法。",
      "面对管理制度，我们需要采取更加全面的措施。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要提高服务质量。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 提高服务质量。",
    "options": [
      "最近企业家常常需要承担责任。",
      "虽然时间不多，但是企业家还是完成了承担责任。",
      "虽然市场环境复杂，但是我们仍然需要提高服务质量。",
      "这项研究表明，问题的原因并不简单。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对研究结果，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 研究结果, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "面对社会需求，我们需要采取更加灵活的措施。",
      "面对社会需求，我们需要采取更加合理的措施。",
      "面对研究结果，我们需要采取更加全面的措施。",
      "面对研究结果，我们需要采取更加有效的措施。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "面对市场变化，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 市场变化, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "我听说记者最近在大学负责改进方法。",
      "如果有时间，企业家会去实验室承担责任。",
      "周末的时候，企业家喜欢去实验室提高效率。",
      "面对市场变化，我们需要采取更加合理的措施。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "企业必须不断调整发展战略，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 调整发展战略 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "企业必须不断调整发展战略，才能保持竞争力。",
      "面对研究结果，我们需要采取更加有效的措施。",
      "因为工作很忙，记者只能晚上申请项目。",
      "双方就合作方案交换了意见。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对资源配置，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "虽然时间非常紧张，但是我们仍然需要优化资源配置。",
      "面对资源配置，我们需要采取更加全面的措施。",
      "虽然市场环境复杂，但是我们仍然需要优化资源配置。",
      "周末的时候，企业家喜欢去广州承担责任。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要提高服务质量。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 提高服务质量。",
    "options": [
      "这项研究的结果为我们提供了新的思路。",
      "这一变化可能会对合作方案产生影响。",
      "虽然资源比较有限，但是我们仍然需要提高服务质量。",
      "如果有时间，企业家会去实验室承担责任。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要深入分析问题。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 深入分析问题。",
    "options": [
      "面对发展战略，我们需要采取更加严格的措施。",
      "虽然时间非常紧张，但是我们仍然需要深入分析问题。",
      "面对项目进展，我们需要采取更加合理的措施。",
      "最近同事常常需要积累经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "企业必须不断加强沟通，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 加强沟通 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "志愿者已经把市场信息带到机场了。",
      "如果有时间，企业家会去广州调整计划。",
      "企业必须不断加强沟通，才能保持竞争力。",
      "双方就项目进展进行了深入讨论。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对项目进展，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 项目进展, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "会议结束以后，企业家马上回到城市中心继续调整计划。",
      "企业家每天都要提高效率。",
      "同事正在城市中心积累经验。",
      "面对项目进展，我们需要采取更加有效的措施。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "企业必须不断改进管理方法，才能保持竞争力。",
    "pinyin": "",
    "meaning": "Doanh nghiệp phải không ngừng 改进管理方法 thì mới duy trì được năng lực cạnh tranh.",
    "options": [
      "企业必须不断改进管理方法，才能保持竞争力。",
      "面对项目进展，我们需要采取更加严格的措施。",
      "面对资源配置，我们需要采取更加全面的措施。",
      "面对研究结果，我们需要采取更加全面的措施。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对社会需求，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "面对项目进展，我们需要采取更加全面的措施。",
      "为了完成研究，志愿者提前来到会议中心。",
      "面对社会需求，我们需要采取更加全面的措施。",
      "如果计划没有变化，企业家下午会在图书馆调整计划。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对资源配置，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "面对资源配置，我们需要采取更加严格的措施。",
      "面对发展战略，我们需要采取更加有效的措施。",
      "企业家希望明天可以继续承担责任。",
      "企业必须不断加强沟通，才能保持竞争力。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要改进管理方法。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 改进管理方法。",
    "options": [
      "因为工作很忙，记者只能晚上申请项目。",
      "从长远来看，市场需求正在发生变化。",
      "虽然市场环境复杂，但是我们仍然需要改进管理方法。",
      "经过分析，我们认为应该调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对社会需求，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "面对社会需求，我们需要采取更加合理的措施。",
      "我听说企业家最近在北京负责调整计划。",
      "经过分析，我们认为应该完善相关制度。",
      "志愿者已经把市场信息带到机场了。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要完善相关制度。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 完善相关制度。",
    "options": [
      "虽然市场环境复杂，但是我们仍然需要完善相关制度。",
      "虽然情况发生变化，但是我们仍然需要积累实践经验。",
      "面对项目进展，我们需要采取更加严格的措施。",
      "面对市场变化，我们需要采取更加全面的措施。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要积累实践经验。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 积累实践经验。",
    "options": [
      "虽然时间不多，但是同事还是完成了积累经验。",
      "最近同事常常需要积累经验。",
      "虽然资源比较有限，但是我们仍然需要积累实践经验。",
      "虽然资源比较有限，但是我们仍然需要改进管理方法。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对管理制度，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理制度, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "昨天企业家在博物馆提高效率，所以回家比较晚。",
      "面对管理制度，我们需要采取更加严格的措施。",
      "为了讨论方案，志愿者提前来到城市中心。",
      "为了准备明天的工作，同事今晚还要分析数据。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "面对资源配置，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "面对资源配置，我们需要采取更加合理的措施。",
      "这一变化可能会对管理制度产生影响。",
      "如果计划没有变化，企业家下午会在机场承担责任。",
      "双方就合作方案交换了意见。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对项目进展，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 项目进展, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "面对社会需求，我们需要采取更加灵活的措施。",
      "虽然时间不多，但是志愿者还是完成了讨论方案。",
      "面对项目进展，我们需要采取更加严格的措施。",
      "我听说企业家最近在北京负责调整计划。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要深入分析问题。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 深入分析问题。",
    "options": [
      "如果有时间，企业家会去广州调整计划。",
      "面对管理制度，我们需要采取更加灵活的措施。",
      "双方就项目进展进行了深入讨论。",
      "虽然市场环境复杂，但是我们仍然需要深入分析问题。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "面对市场变化，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 市场变化, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "为了积累经验，同事提前来到实验室。",
      "面对市场变化，我们需要采取更加灵活的措施。",
      "如果计划没有变化，志愿者下午会在研究中心讨论方案。",
      "今天志愿者在上海交换意见。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要改进管理方法。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 改进管理方法。",
    "options": [
      "面对社会需求，我们需要采取更加合理的措施。",
      "虽然时间不多，但是志愿者还是完成了完成研究。",
      "虽然时间非常紧张，但是我们仍然需要改进管理方法。",
      "昨天记者在博物馆改进方法，所以回家比较晚。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对市场变化，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 市场变化, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "面对合作方案，我们需要采取更加有效的措施。",
      "企业家希望明天可以继续提高效率。",
      "面对市场变化，我们需要采取更加严格的措施。",
      "面对管理制度，我们需要采取更加科学的措施。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对研究结果，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 研究结果, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "如果有时间，企业家会去会议中心提高效率。",
      "同事告诉我，他最近正在分析数据。",
      "面对研究结果，我们需要采取更加科学的措施。",
      "虽然市场环境复杂，但是我们仍然需要调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对项目进展，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 项目进展, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "面对项目进展，我们需要采取更加合理的措施。",
      "我们应该根据实际情况积累实践经验，而不能简单地照搬过去的方法。",
      "我们应该根据实际情况加强沟通，而不能简单地照搬过去的方法。",
      "会议结束以后，记者马上回到医院继续申请项目。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对项目进展，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 项目进展, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "今天记者在博物馆申请项目。",
      "虽然时间非常紧张，但是我们仍然需要完善相关制度。",
      "面对项目进展，我们需要采取更加灵活的措施。",
      "虽然资源比较有限，但是我们仍然需要完善相关制度。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对社会需求，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "企业家觉得调整计划很重要。",
      "因为工作很忙，同事只能晚上分析数据。",
      "面对社会需求，我们需要采取更加严格的措施。",
      "记者正在检查申请材料，准备开始解决问题。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对市场变化，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 市场变化, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "经过讨论，志愿者决定在城市中心完成研究。",
      "面对市场变化，我们需要采取更加有效的措施。",
      "记者正在会议中心改进方法。",
      "虽然情况发生变化，但是我们仍然需要积累实践经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然时间非常紧张，但是我们仍然需要完善相关制度。",
    "pinyin": "",
    "meaning": "Mặc dù 时间非常紧张, chúng ta vẫn cần 完善相关制度。",
    "options": [
      "最近企业家常常需要调整计划。",
      "昨天企业家在博物馆提高效率，所以回家比较晚。",
      "我听说志愿者最近在城市中心负责交换意见。",
      "虽然时间非常紧张，但是我们仍然需要完善相关制度。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然市场环境复杂，但是我们仍然需要积累实践经验。",
    "pinyin": "",
    "meaning": "Mặc dù 市场环境复杂, chúng ta vẫn cần 积累实践经验。",
    "options": [
      "企业必须不断积累实践经验，才能保持竞争力。",
      "虽然市场环境复杂，但是我们仍然需要积累实践经验。",
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "虽然市场环境复杂，但是我们仍然需要完善相关制度。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要深入分析问题。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 深入分析问题。",
    "options": [
      "面对市场变化，我们需要采取更加科学的措施。",
      "为了进一步提高研究质量，研究人员进行了调查。",
      "周末的时候，记者喜欢去实验室改进方法。",
      "虽然资源比较有限，但是我们仍然需要深入分析问题。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "面对合作方案，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 合作方案, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "双方就项目进展进行了深入讨论。",
      "面对合作方案，我们需要采取更加全面的措施。",
      "志愿者已经把市场信息带到机场了。",
      "双方就社会需求进行了深入讨论。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "面对研究结果，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 研究结果, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "企业必须不断优化资源配置，才能保持竞争力。",
      "面对研究结果，我们需要采取更加严格的措施。",
      "面对合作方案，我们需要采取更加有效的措施。",
      "为了准备明天的工作，同事今晚还要调查情况。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然情况发生变化，但是我们仍然需要调整发展战略。",
    "pinyin": "",
    "meaning": "Mặc dù 情况发生变化, chúng ta vẫn cần 调整发展战略。",
    "options": [
      "面对社会需求，我们需要采取更加灵活的措施。",
      "面对合作方案，我们需要采取更加全面的措施。",
      "面对资源配置，我们需要采取更加灵活的措施。",
      "虽然情况发生变化，但是我们仍然需要调整发展战略。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要调整发展战略。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 调整发展战略。",
    "options": [
      "虽然资源比较有限，但是我们仍然需要调整发展战略。",
      "虽然市场环境复杂，但是我们仍然需要完善相关制度。",
      "虽然资源比较有限，但是我们仍然需要提高服务质量。",
      "企业必须不断提高自身的竞争力。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对管理制度，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理制度, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "面对社会需求，我们需要采取更加有效的措施。",
      "昨天记者在博物馆改进方法，所以回家比较晚。",
      "面对管理制度，我们需要采取更加灵活的措施。",
      "虽然时间不多，但是志愿者还是完成了完成研究。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对资源配置，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "今天记者在北京解决问题。",
      "如果计划没有变化，志愿者下午会在图书馆交换意见。",
      "为了交换意见，志愿者提前来到公司。",
      "面对资源配置，我们需要采取更加有效的措施。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "面对市场变化，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 市场变化, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "记者正在会议中心改进方法。",
      "面对社会需求，我们需要采取更加合理的措施。",
      "面对资源配置，我们需要采取更加合理的措施。",
      "面对市场变化，我们需要采取更加全面的措施。"
    ],
    "correct": 3
  },
  {
    "level": 5,
    "audio": "面对社会需求，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "面对项目进展，我们需要采取更加严格的措施。",
      "面对社会需求，我们需要采取更加科学的措施。",
      "为了进一步改善工作效率，研究人员进行了调查。",
      "面对合作方案，我们需要采取更加合理的措施。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "面对社会需求，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "同事正在大学分析数据。",
      "企业必须不断完善相关制度，才能保持竞争力。",
      "面对社会需求，我们需要采取更加有效的措施。",
      "虽然情况发生变化，但是我们仍然需要调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对管理制度，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理制度, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "面对管理制度，我们需要采取更加科学的措施。",
      "为了调查情况，同事提前来到会议中心。",
      "企业家希望明天可以继续提高效率。",
      "面对项目进展，我们需要采取更加科学的措施。"
    ],
    "correct": 0
  },
  {
    "level": 5,
    "audio": "面对管理制度，我们需要采取更加合理的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理制度, chúng ta cần áp dụng biện pháp 合理 hơn.",
    "options": [
      "面对资源配置，我们需要采取更加全面的措施。",
      "最近记者常常需要改进方法。",
      "面对管理制度，我们需要采取更加合理的措施。",
      "企业必须不断提高自身的竞争力。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对项目进展，我们需要采取更加全面的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 项目进展, chúng ta cần áp dụng biện pháp 全面 hơn.",
    "options": [
      "经过分析，我们认为应该深入分析问题。",
      "面对项目进展，我们需要采取更加全面的措施。",
      "双方就资源配置进行了深入讨论。",
      "虽然市场环境复杂，但是我们仍然需要积累实践经验。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "面对合作方案，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 合作方案, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "如果计划没有变化，志愿者下午会在上海完成研究。",
      "面对研究结果，我们需要采取更加严格的措施。",
      "面对合作方案，我们需要采取更加灵活的措施。",
      "企业必须不断积累实践经验，才能保持竞争力。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对发展战略，我们需要采取更加严格的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 发展战略, chúng ta cần áp dụng biện pháp 严格 hơn.",
    "options": [
      "同事每天都要调查情况。",
      "面对发展战略，我们需要采取更加严格的措施。",
      "志愿者已经把项目计划带到广州了。",
      "虽然市场环境复杂，但是我们仍然需要调整发展战略。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "虽然资源比较有限，但是我们仍然需要优化资源配置。",
    "pinyin": "",
    "meaning": "Mặc dù 资源比较有限, chúng ta vẫn cần 优化资源配置。",
    "options": [
      "周末的时候，企业家喜欢去机场调整计划。",
      "昨天志愿者在大学交换意见，所以回家比较晚。",
      "虽然资源比较有限，但是我们仍然需要优化资源配置。",
      "今天同事在研究中心调查情况。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对管理制度，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理制度, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "这一变化可能会对研究结果产生影响。",
      "为了进一步推动项目发展，研究人员进行了调查。",
      "面对管理制度，我们需要采取更加有效的措施。",
      "这一变化可能会对项目进展产生影响。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对合作方案，我们需要采取更加有效的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 合作方案, chúng ta cần áp dụng biện pháp 有效 hơn.",
    "options": [
      "我们应该根据实际情况深入分析问题，而不能简单地照搬过去的方法。",
      "面对合作方案，我们需要采取更加有效的措施。",
      "如果有时间，志愿者会去机场完成研究。",
      "双方就发展战略进行了深入讨论。"
    ],
    "correct": 1
  },
  {
    "level": 5,
    "audio": "面对发展战略，我们需要采取更加灵活的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 发展战略, chúng ta cần áp dụng biện pháp 灵活 hơn.",
    "options": [
      "志愿者觉得完成研究很重要。",
      "虽然时间非常紧张，但是我们仍然需要提高服务质量。",
      "面对发展战略，我们需要采取更加灵活的措施。",
      "面对管理制度，我们需要采取更加灵活的措施。"
    ],
    "correct": 2
  },
  {
    "level": 5,
    "audio": "面对市场变化，我们需要采取更加科学的措施。",
    "pinyin": "",
    "meaning": "Đối mặt với 市场变化, chúng ta cần áp dụng biện pháp 科学 hơn.",
    "options": [
      "同事已经把技术文件带到机场了。",
      "会议结束以后，企业家马上回到会议中心继续承担责任。",
      "企业必须不断积累实践经验，才能保持竞争力。",
      "面对市场变化，我们需要采取更加科学的措施。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对资源配置问题。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 资源配置问题。",
    "options": [
      "为了调查社会情况，研究人员提前来到实验室。",
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "如果缺乏充分准备，就很难有效应对资源配置问题。",
      "律师每天都要承担重要责任。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对社会的发展。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 社会的发展。",
    "options": [
      "只有充分理解国际竞争，才能制定更加合理的方案。",
      "如果缺乏充分准备，就很难有效应对社会的发展。",
      "研究人员告诉我，他最近正在积累实践经验。",
      "如果缺乏充分准备，就很难有效应对管理体制。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个技术进步。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 技术进步。",
    "options": [
      "这一政策可能对社会的发展产生深远影响。",
      "从整体来看，这一问题涉及多个技术进步。",
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "如果计划没有变化，律师下午会在研究中心调整发展战略。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解复杂的经济环境。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 复杂的经济环境。",
    "options": [
      "虽然时间不多，但是企业家还是完成了解决实际困难。",
      "面对社会的发展，我们必须保持客观的判断。",
      "只有充分理解未来的变化，才能制定更加合理的方案。",
      "深入分析这一现象，有助于我们理解复杂的经济环境。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "这一政策可能对社会的发展产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 社会的发展。",
    "options": [
      "这一政策可能对社会的发展产生深远影响。",
      "面对技术进步，我们必须保持清醒的判断。",
      "企业家每天都要改进管理方法。",
      "只有充分理解管理体制，才能制定更加合理的方案。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "只有充分理解长期发展战略，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 长期发展战略 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "从整体来看，这一问题涉及多个长期发展战略。",
      "只有充分理解长期发展战略，才能制定更加合理的方案。",
      "在当前背景下，我们有必要进一步完善相关制度。",
      "这一政策可能对长期发展战略产生深远影响。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "研究结果进一步证明，比较客观。",
    "pinyin": "",
    "meaning": "Kết quả nghiên cứu tiếp tục chứng minh rằng 比较客观。",
    "options": [
      "面对国际竞争，我们必须保持独立的判断。",
      "企业家正在城市中心改进管理方法。",
      "面对社会的发展，我们必须保持独立的判断。",
      "研究结果进一步证明，比较客观。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "经过多方面调查，研究人员得出了具有重要参考价值的结论。",
    "pinyin": "",
    "meaning": "Sau khi điều tra trên nhiều phương diện, các nhà nghiên cứu đưa ra kết luận 具有重要参考价值。",
    "options": [
      "最近学者常常需要完成调查研究。",
      "经过多方面调查，研究人员得出了具有重要参考价值的结论。",
      "深入分析这一现象，有助于我们理解技术进步。",
      "虽然时间不多，但是研究人员还是完成了积累实践经验。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个资源配置问题。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 资源配置问题。",
    "options": [
      "面对国际竞争，我们必须保持独立的判断。",
      "为了准备明天的工作，企业家今晚还要改进管理方法。",
      "从整体来看，这一问题涉及多个资源配置问题。",
      "如果缺乏充分准备，就很难有效应对公共政策。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "研究结果进一步证明，具有重要参考价值。",
    "pinyin": "",
    "meaning": "Kết quả nghiên cứu tiếp tục chứng minh rằng 具有重要参考价值。",
    "options": [
      "研究结果进一步证明，具有重要参考价值。",
      "企业家正在上海解决实际困难。",
      "面对社会的发展，我们必须保持客观的判断。",
      "因为工作很忙，律师只能晚上提高工作效率。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对长期发展战略，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 长期发展战略, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "面对长期发展战略，我们必须保持理性的判断。",
      "如果缺乏充分准备，就很难有效应对社会的发展。",
      "今天律师在企业总部调整发展战略。",
      "如果计划没有变化，研究人员下午会在广州积累实践经验。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "经过多方面调查，研究人员得出了比较可靠的结论。",
    "pinyin": "",
    "meaning": "Sau khi điều tra trên nhiều phương diện, các nhà nghiên cứu đưa ra kết luận 比较可靠。",
    "options": [
      "律师正在国际机场承担重要责任。",
      "面对复杂的经济环境，我们必须保持准确的判断。",
      "经过多方面调查，研究人员得出了比较可靠的结论。",
      "面对国际竞争，我们必须保持清醒的判断。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个国际竞争。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 国际竞争。",
    "options": [
      "从整体来看，这一问题涉及多个国际竞争。",
      "从整体来看，这一问题涉及多个长期发展战略。",
      "会议结束以后，律师马上回到企业总部继续承担重要责任。",
      "只有充分理解技术进步，才能制定更加合理的方案。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "这一政策可能对公共政策产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 公共政策。",
    "options": [
      "面对社会需求，我们必须保持清醒的判断。",
      "因为工作很忙，企业家只能晚上改进管理方法。",
      "这一政策可能对公共政策产生深远影响。",
      "面对技术进步，我们必须保持理性的判断。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个管理体制。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 管理体制。",
    "options": [
      "面对资源配置问题，我们必须保持客观的判断。",
      "从整体来看，这一问题涉及多个管理体制。",
      "面对国际竞争，我们必须保持独立的判断。",
      "研究结果进一步证明，比较可靠。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "经过多方面调查，研究人员得出了符合实际情况的结论。",
    "pinyin": "",
    "meaning": "Sau khi điều tra trên nhiều phương diện, các nhà nghiên cứu đưa ra kết luận 符合实际情况。",
    "options": [
      "从整体来看，这一问题涉及多个长期发展战略。",
      "经过多方面调查，研究人员得出了符合实际情况的结论。",
      "为了积累实践经验，研究人员提前来到研究中心。",
      "在当前背景下，我们有必要进一步加强风险管理。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对公共政策。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 公共政策。",
    "options": [
      "面对公共政策，我们必须保持独立的判断。",
      "面对社会的发展，我们必须保持清醒的判断。",
      "如果缺乏充分准备，就很难有效应对公共政策。",
      "周末的时候，学者喜欢去大学交换专业意见。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个长期发展战略。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 长期发展战略。",
    "options": [
      "研究结果进一步证明，值得进一步研究。",
      "为了准备明天的工作，律师今晚还要调整发展战略。",
      "这一政策可能对社会需求产生深远影响。",
      "从整体来看，这一问题涉及多个长期发展战略。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对国际竞争，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 国际竞争, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "周末的时候，学者喜欢去会议中心比较不同方案。",
      "面对公共政策，我们必须保持准确的判断。",
      "今天律师在广州调整发展战略。",
      "面对国际竞争，我们必须保持理性的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解资源配置问题。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 资源配置问题。",
    "options": [
      "深入分析这一现象，有助于我们理解资源配置问题。",
      "经过讨论，研究人员决定在广州调查社会情况。",
      "学者希望明天可以继续比较不同方案。",
      "最近企业家常常需要申请研究项目。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "只有充分理解复杂的经济环境，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 复杂的经济环境 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "如果有时间，研究人员会去广州深入分析问题。",
      "只有充分理解复杂的经济环境，才能制定更加合理的方案。",
      "会议结束以后，律师马上回到企业总部继续承担重要责任。",
      "因为工作很忙，律师只能晚上调整发展战略。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "经过多方面调查，研究人员得出了比较客观的结论。",
    "pinyin": "",
    "meaning": "Sau khi điều tra trên nhiều phương diện, các nhà nghiên cứu đưa ra kết luận 比较客观。",
    "options": [
      "面对公共政策，我们必须保持客观的判断。",
      "这一政策可能对技术进步产生深远影响。",
      "经过多方面调查，研究人员得出了比较客观的结论。",
      "企业家已经把政策文件带到会议中心了。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解国际竞争。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 国际竞争。",
    "options": [
      "周末的时候，学者喜欢去大学交换专业意见。",
      "研究人员告诉我，他最近正在调查社会情况。",
      "律师正在企业总部提高工作效率。",
      "深入分析这一现象，有助于我们理解国际竞争。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "这一政策可能对社会需求产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 社会需求。",
    "options": [
      "从整体来看，这一问题涉及多个公共政策。",
      "面对复杂的经济环境，我们必须保持客观的判断。",
      "这一政策可能对社会需求产生深远影响。",
      "经过多方面调查，研究人员得出了值得进一步研究的结论。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "这一政策可能对未来的变化产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 未来的变化。",
    "options": [
      "这一政策可能对技术进步产生深远影响。",
      "这一政策可能对未来的变化产生深远影响。",
      "在当前背景下，我们有必要进一步优化资源配置。",
      "虽然时间不多，但是学者还是完成了比较不同方案。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个复杂的经济环境。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 复杂的经济环境。",
    "options": [
      "因为工作很忙，研究人员只能晚上深入分析问题。",
      "企业家已经把政策文件带到会议中心了。",
      "如果缺乏充分准备，就很难有效应对公共政策。",
      "从整体来看，这一问题涉及多个复杂的经济环境。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "只有充分理解公共政策，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 公共政策 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "面对社会的发展，我们必须保持独立的判断。",
      "企业家已经把发展计划带到医院了。",
      "最近学者常常需要完成调查研究。",
      "只有充分理解公共政策，才能制定更加合理的方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑未来的变化。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 未来的变化。",
    "options": [
      "从整体来看，这一问题涉及多个公共政策。",
      "如果有时间，研究人员会去广州深入分析问题。",
      "面对新的挑战，企业需要重新考虑未来的变化。",
      "经过多方面调查，研究人员得出了值得进一步研究的结论。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "研究结果进一步证明，值得进一步研究。",
    "pinyin": "",
    "meaning": "Kết quả nghiên cứu tiếp tục chứng minh rằng 值得进一步研究。",
    "options": [
      "经过多方面调查，研究人员得出了比较客观的结论。",
      "研究结果进一步证明，值得进一步研究。",
      "研究结果进一步证明，比较可靠。",
      "这一政策可能对公共政策产生深远影响。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "只有充分理解技术进步，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 技术进步 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "只有充分理解技术进步，才能制定更加合理的方案。",
      "这一政策可能对社会需求产生深远影响。",
      "经过多方面的调查，研究人员得出了比较可靠的结论。",
      "虽然时间不多，但是研究人员还是完成了积累实践经验。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对长期发展战略。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 长期发展战略。",
    "options": [
      "如果缺乏充分准备，就很难有效应对长期发展战略。",
      "面对复杂的经济环境，我们必须保持清醒的判断。",
      "如果计划没有变化，研究人员下午会在实验室深入分析问题。",
      "面对公共政策，我们必须保持客观的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "这一政策可能对国际竞争产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 国际竞争。",
    "options": [
      "面对新的挑战，企业需要重新考虑技术进步。",
      "今天研究人员在实验室深入分析问题。",
      "这一政策可能对国际竞争产生深远影响。",
      "如果计划没有变化，学者下午会在会议中心比较不同方案。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "面对公共政策，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 公共政策, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "因为工作很忙，企业家只能晚上改进管理方法。",
      "面对公共政策，我们必须保持客观的判断。",
      "研究结果进一步证明，值得进一步研究。",
      "如果计划没有变化，学者下午会在深圳完成调查研究。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个未来的变化。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 未来的变化。",
    "options": [
      "深入分析这一现象，有助于我们理解社会的发展。",
      "律师希望明天可以继续提高工作效率。",
      "虽然时间不多，但是企业家还是完成了解决实际困难。",
      "从整体来看，这一问题涉及多个未来的变化。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "在当前背景下，我们有必要进一步优化资源配置。",
    "pinyin": "",
    "meaning": "Trong bối cảnh hiện nay, chúng ta cần tiếp tục 优化资源配置。",
    "options": [
      "因为工作很忙，律师只能晚上提高工作效率。",
      "因为工作很忙，研究人员只能晚上深入分析问题。",
      "因为工作很忙，企业家只能晚上改进管理方法。",
      "在当前背景下，我们有必要进一步优化资源配置。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解公共政策。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 公共政策。",
    "options": [
      "为了准备明天的工作，企业家今晚还要改进管理方法。",
      "深入分析这一现象，有助于我们理解技术进步。",
      "面对长期发展战略，我们必须保持准确的判断。",
      "深入分析这一现象，有助于我们理解公共政策。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "只有充分理解国际竞争，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 国际竞争 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "昨天学者在大学比较不同方案，所以回家比较晚。",
      "研究人员正在检查会议记录，准备开始积累实践经验。",
      "只有充分理解国际竞争，才能制定更加合理的方案。",
      "最近学者常常需要比较不同方案。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "经过多方面调查，研究人员得出了值得进一步研究的结论。",
    "pinyin": "",
    "meaning": "Sau khi điều tra trên nhiều phương diện, các nhà nghiên cứu đưa ra kết luận 值得进一步研究。",
    "options": [
      "企业家正在图书馆申请研究项目。",
      "今天律师在广州调整发展战略。",
      "经过多方面调查，研究人员得出了值得进一步研究的结论。",
      "这一政策可能对长期发展战略产生深远影响。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对技术进步。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 技术进步。",
    "options": [
      "面对社会需求，我们必须保持准确的判断。",
      "如果缺乏充分准备，就很难有效应对技术进步。",
      "会议结束以后，学者马上回到深圳继续比较不同方案。",
      "学者希望明天可以继续完成调查研究。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对管理体制，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理体制, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "如果缺乏充分准备，就很难有效应对技术进步。",
      "面对管理体制，我们必须保持准确的判断。",
      "面对公共政策，我们必须保持客观的判断。",
      "面对技术进步，我们必须保持独立的判断。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解长期发展战略。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 长期发展战略。",
    "options": [
      "面对国际竞争，我们必须保持理性的判断。",
      "经过多方面调查，研究人员得出了比较客观的结论。",
      "深入分析这一现象，有助于我们理解长期发展战略。",
      "为了解决实际困难，企业家提前来到深圳。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "面对管理体制，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理体制, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "这一政策可能对管理体制产生深远影响。",
      "研究人员觉得深入分析问题很重要。",
      "律师希望明天可以继续承担重要责任。",
      "面对管理体制，我们必须保持独立的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "这一政策可能对复杂的经济环境产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 复杂的经济环境。",
    "options": [
      "研究人员告诉我，他最近正在调查社会情况。",
      "为了解决实际困难，企业家提前来到深圳。",
      "面对未来的变化，我们必须保持客观的判断。",
      "这一政策可能对复杂的经济环境产生深远影响。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "研究结果进一步证明，比较可靠。",
    "pinyin": "",
    "meaning": "Kết quả nghiên cứu tiếp tục chứng minh rằng 比较可靠。",
    "options": [
      "面对资源配置问题，我们必须保持客观的判断。",
      "研究结果进一步证明，比较可靠。",
      "为了积累实践经验，研究人员提前来到博物馆。",
      "面对技术进步，我们必须保持清醒的判断。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "在当前背景下，我们有必要进一步提高工作效率。",
    "pinyin": "",
    "meaning": "Trong bối cảnh hiện nay, chúng ta cần tiếp tục 提高工作效率。",
    "options": [
      "在当前背景下，我们有必要进一步提高工作效率。",
      "面对未来的变化，我们必须保持理性的判断。",
      "会议结束以后，律师马上回到企业总部继续承担重要责任。",
      "如果缺乏充分准备，就很难有效应对技术进步。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑管理体制。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 管理体制。",
    "options": [
      "学者已经把统计数据带到医院了。",
      "虽然时间不多，但是企业家还是完成了申请研究项目。",
      "面对新的挑战，企业需要重新考虑管理体制。",
      "研究人员告诉我，他最近正在深入分析问题。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对社会需求。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 社会需求。",
    "options": [
      "如果缺乏充分准备，就很难有效应对社会需求。",
      "面对国际竞争，我们必须保持客观的判断。",
      "深入分析这一现象，有助于我们理解未来的变化。",
      "为了准备明天的工作，律师今晚还要提高工作效率。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "研究结果进一步证明，符合实际情况。",
    "pinyin": "",
    "meaning": "Kết quả nghiên cứu tiếp tục chứng minh rằng 符合实际情况。",
    "options": [
      "研究结果进一步证明，符合实际情况。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "研究人员已经把调查结果带到博物馆了。",
      "学者希望明天可以继续交换专业意见。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "在当前背景下，我们有必要进一步调整发展战略。",
    "pinyin": "",
    "meaning": "Trong bối cảnh hiện nay, chúng ta cần tiếp tục 调整发展战略。",
    "options": [
      "在当前背景下，我们有必要进一步调整发展战略。",
      "面对未来的变化，我们必须保持客观的判断。",
      "面对国际竞争，我们必须保持理性的判断。",
      "经过讨论，企业家决定在大学解决实际困难。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "只有充分理解资源配置问题，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 资源配置问题 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "从整体来看，这一问题涉及多个社会的发展。",
      "经过讨论，企业家决定在大学解决实际困难。",
      "面对技术进步，我们必须保持准确的判断。",
      "只有充分理解资源配置问题，才能制定更加合理的方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对长期发展战略，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 长期发展战略, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "从整体来看，这一问题涉及多个管理体制。",
      "我听说学者最近在图书馆负责完成调查研究。",
      "这一政策可能对复杂的经济环境产生深远影响。",
      "面对长期发展战略，我们必须保持独立的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对复杂的经济环境，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 复杂的经济环境, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "面对复杂的经济环境，我们必须保持清醒的判断。",
      "面对国际竞争，我们必须保持准确的判断。",
      "研究人员觉得深入分析问题很重要。",
      "如果缺乏充分准备，就很难有效应对社会需求。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解技术进步。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 技术进步。",
    "options": [
      "昨天研究人员在研究中心深入分析问题，所以回家比较晚。",
      "企业家已经把申请材料带到图书馆了。",
      "面对新的挑战，企业需要重新考虑社会需求。",
      "深入分析这一现象，有助于我们理解技术进步。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "在当前背景下，我们有必要进一步深入调查研究。",
    "pinyin": "",
    "meaning": "Trong bối cảnh hiện nay, chúng ta cần tiếp tục 深入调查研究。",
    "options": [
      "面对长期发展战略，我们必须保持清醒的判断。",
      "在当前背景下，我们有必要进一步深入调查研究。",
      "面对新的挑战，企业需要重新考虑未来的变化。",
      "周末的时候，律师喜欢去博物馆调整发展战略。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对社会的发展，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会的发展, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "今天律师在广州调整发展战略。",
      "面对未来的变化，我们必须保持客观的判断。",
      "面对未来的变化，我们必须保持准确的判断。",
      "面对社会的发展，我们必须保持准确的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对公共政策，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 公共政策, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "面对公共政策，我们必须保持理性的判断。",
      "如果计划没有变化，学者下午会在会议中心比较不同方案。",
      "面对新的挑战，企业需要重新考虑社会需求。",
      "从整体来看，这一问题涉及多个技术进步。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "只有充分理解社会需求，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 社会需求 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "研究人员已经把研究报告带到国际机场了。",
      "律师正在企业总部提高工作效率。",
      "为了解决实际困难，企业家提前来到深圳。",
      "只有充分理解社会需求，才能制定更加合理的方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对技术进步，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 技术进步, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "经过多方面调查，研究人员得出了符合实际情况的结论。",
      "虽然时间不多，但是企业家还是完成了申请研究项目。",
      "经过讨论，企业家决定在上海申请研究项目。",
      "面对技术进步，我们必须保持客观的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对未来的变化，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 未来的变化, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "面对社会的发展，我们必须保持理性的判断。",
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "因为工作很忙，律师只能晚上调整发展战略。",
      "面对未来的变化，我们必须保持准确的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "在当前背景下，我们有必要进一步加强风险管理。",
    "pinyin": "",
    "meaning": "Trong bối cảnh hiện nay, chúng ta cần tiếp tục 加强风险管理。",
    "options": [
      "在当前背景下，我们有必要进一步加强风险管理。",
      "经过多方面调查，研究人员得出了具有重要参考价值的结论。",
      "面对新的挑战，企业需要重新考虑社会需求。",
      "面对复杂的经济环境，我们必须保持理性的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对管理体制，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理体制, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "面对管理体制，我们必须保持理性的判断。",
      "会议结束以后，律师马上回到研究中心继续提高工作效率。",
      "为了准备明天的工作，研究人员今晚还要调查社会情况。",
      "经过多方面调查，研究人员得出了比较可靠的结论。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "这一政策可能对技术进步产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 技术进步。",
    "options": [
      "律师每天都要提高工作效率。",
      "面对资源配置问题，我们必须保持独立的判断。",
      "虽然时间不多，但是研究人员还是完成了积累实践经验。",
      "这一政策可能对技术进步产生深远影响。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑社会的发展。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 社会的发展。",
    "options": [
      "深入分析这一现象，有助于我们理解国际竞争。",
      "面对新的挑战，企业需要重新考虑社会的发展。",
      "只有充分理解长期发展战略，才能制定更加合理的方案。",
      "如果缺乏充分准备，就很难有效应对技术进步。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解社会的发展。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 社会的发展。",
    "options": [
      "学者每天都要交换专业意见。",
      "这一政策可能对资源配置问题产生深远影响。",
      "深入分析这一现象，有助于我们理解社会的发展。",
      "为了准备明天的工作，研究人员今晚还要调查社会情况。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解社会需求。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 社会需求。",
    "options": [
      "面对社会需求，我们必须保持准确的判断。",
      "从整体来看，这一问题涉及多个社会的发展。",
      "企业家正在检查发展计划，准备开始申请研究项目。",
      "深入分析这一现象，有助于我们理解社会需求。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑社会需求。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 社会需求。",
    "options": [
      "从整体来看，这一问题涉及多个技术进步。",
      "面对新的挑战，企业需要重新考虑社会需求。",
      "研究人员已经把调查结果带到博物馆了。",
      "因为工作很忙，律师只能晚上承担重要责任。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个社会需求。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 社会需求。",
    "options": [
      "企业家每天都要改进管理方法。",
      "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
      "从整体来看，这一问题涉及多个社会需求。",
      "今天律师在企业总部调整发展战略。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "只有充分理解管理体制，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 管理体制 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "只有充分理解管理体制，才能制定更加合理的方案。",
      "深入分析这一现象，有助于我们理解复杂的经济环境。",
      "这一政策可能对未来的变化产生深远影响。",
      "面对复杂的经济环境，我们必须保持客观的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对社会需求，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "企业家告诉我，他最近正在改进管理方法。",
      "面对技术进步，我们必须保持理性的判断。",
      "为了解决实际困难，企业家提前来到深圳。",
      "面对社会需求，我们必须保持理性的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解管理体制。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 管理体制。",
    "options": [
      "面对管理体制，我们必须保持准确的判断。",
      "深入分析这一现象，有助于我们理解管理体制。",
      "面对未来的变化，我们必须保持独立的判断。",
      "今天律师在研究中心承担重要责任。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对长期发展战略，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 长期发展战略, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "为了准备明天的工作，企业家今晚还要解决实际困难。",
      "从整体来看，这一问题涉及多个公共政策。",
      "今天企业家在大学改进管理方法。",
      "面对长期发展战略，我们必须保持清醒的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑资源配置问题。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 资源配置问题。",
    "options": [
      "经过多方面调查，研究人员得出了比较可靠的结论。",
      "面对新的挑战，企业需要重新考虑资源配置问题。",
      "面对技术进步，我们必须保持客观的判断。",
      "如果计划没有变化，学者下午会在深圳完成调查研究。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "深入分析这一现象，有助于我们理解未来的变化。",
    "pinyin": "",
    "meaning": "Phân tích sâu hiện tượng này giúp chúng ta hiểu 未来的变化。",
    "options": [
      "深入分析这一现象，有助于我们理解未来的变化。",
      "律师觉得承担重要责任很重要。",
      "我听说学者最近在医院负责比较不同方案。",
      "面对未来的变化，我们必须保持理性的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑公共政策。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 公共政策。",
    "options": [
      "面对新的挑战，企业需要重新考虑公共政策。",
      "我听说研究人员最近在国际机场负责调查社会情况。",
      "周末的时候，学者喜欢去医院完成调查研究。",
      "面对管理体制，我们必须保持理性的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对复杂的经济环境。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 复杂的经济环境。",
    "options": [
      "如果缺乏充分准备，就很难有效应对复杂的经济环境。",
      "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
      "今天研究人员在实验室深入分析问题。",
      "为了准备明天的工作，研究人员今晚还要调查社会情况。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个公共政策。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 公共政策。",
    "options": [
      "从整体来看，这一问题涉及多个公共政策。",
      "今天律师在研究中心承担重要责任。",
      "周末的时候，学者喜欢去会议中心比较不同方案。",
      "面对长期发展战略，我们必须保持理性的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑技术进步。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 技术进步。",
    "options": [
      "面对新的挑战，企业需要重新考虑技术进步。",
      "深入分析这一现象，有助于我们理解长期发展战略。",
      "今天企业家在大学改进管理方法。",
      "深入分析这一现象，有助于我们理解技术进步。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "在当前背景下，我们有必要进一步完善相关制度。",
    "pinyin": "",
    "meaning": "Trong bối cảnh hiện nay, chúng ta cần tiếp tục 完善相关制度。",
    "options": [
      "在当前背景下，我们有必要进一步完善相关制度。",
      "研究人员觉得深入分析问题很重要。",
      "这一政策可能对公共政策产生深远影响。",
      "为了准备明天的工作，研究人员今晚还要调查社会情况。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对国际竞争，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 国际竞争, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "学者已经把统计数据带到医院了。",
      "深入分析这一现象，有助于我们理解未来的变化。",
      "我听说律师最近在博物馆负责提高工作效率。",
      "面对国际竞争，我们必须保持客观的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑国际竞争。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 国际竞争。",
    "options": [
      "深入分析这一现象，有助于我们理解长期发展战略。",
      "面对新的挑战，企业需要重新考虑国际竞争。",
      "在当前背景下，我们有必要进一步调整发展战略。",
      "面对管理体制，我们必须保持客观的判断。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "只有充分理解社会的发展，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 社会的发展 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "只有充分理解技术进步，才能制定更加合理的方案。",
      "面对未来的变化，我们必须保持理性的判断。",
      "这一政策可能对技术进步产生深远影响。",
      "只有充分理解社会的发展，才能制定更加合理的方案。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对资源配置问题，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置问题, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "只有充分理解社会的发展，才能制定更加合理的方案。",
      "面对资源配置问题，我们必须保持独立的判断。",
      "深入分析这一现象，有助于我们理解社会的发展。",
      "为了调查社会情况，研究人员提前来到实验室。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "这一政策可能对管理体制产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 管理体制。",
    "options": [
      "这一政策可能对管理体制产生深远影响。",
      "从整体来看，这一问题涉及多个未来的变化。",
      "在复杂的环境下，我们必须保持清醒的判断。",
      "今天企业家在大学改进管理方法。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对资源配置问题，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置问题, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "面对未来的变化，我们必须保持理性的判断。",
      "深入分析这一现象，有助于我们理解长期发展战略。",
      "如果有时间，研究人员会去北京调查社会情况。",
      "面对资源配置问题，我们必须保持准确的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对社会需求，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "面对社会需求，我们必须保持清醒的判断。",
      "学者觉得完成调查研究很重要。",
      "如果缺乏充分准备，就很难有效应对管理体制。",
      "如果计划没有变化，研究人员下午会在研究中心调查社会情况。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对国际竞争，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 国际竞争, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "面对社会需求，我们必须保持理性的判断。",
      "律师希望明天可以继续承担重要责任。",
      "研究结果进一步证明，符合实际情况。",
      "面对国际竞争，我们必须保持准确的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对未来的变化，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 未来的变化, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "因为工作很忙，企业家只能晚上改进管理方法。",
      "面对未来的变化，我们必须保持独立的判断。",
      "面对复杂的经济环境，我们必须保持准确的判断。",
      "面对未来的变化，我们必须保持理性的判断。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对技术进步，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 技术进步, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "面对社会需求，我们必须保持理性的判断。",
      "企业家告诉我，他最近正在解决实际困难。",
      "面对技术进步，我们必须保持理性的判断。",
      "面对新的挑战，企业需要重新考虑资源配置问题。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对管理体制。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 管理体制。",
    "options": [
      "如果缺乏充分准备，就很难有效应对管理体制。",
      "如果缺乏充分准备，就很难有效应对国际竞争。",
      "因为工作很忙，企业家只能晚上解决实际困难。",
      "企业家正在医院解决实际困难。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "这一政策可能对资源配置问题产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 资源配置问题。",
    "options": [
      "昨天研究人员在研究中心深入分析问题，所以回家比较晚。",
      "在当前背景下，我们有必要进一步加强风险管理。",
      "面对管理体制，我们必须保持理性的判断。",
      "这一政策可能对资源配置问题产生深远影响。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对国际竞争，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 国际竞争, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "面对新的挑战，企业需要重新考虑管理体制。",
      "面对未来的变化，我们必须保持理性的判断。",
      "面对国际竞争，我们必须保持清醒的判断。",
      "这一政策可能对社会需求产生深远影响。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "面对社会的发展，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会的发展, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "面对社会的发展，我们必须保持清醒的判断。",
      "面对社会需求，我们必须保持清醒的判断。",
      "如果计划没有变化，研究人员下午会在广州积累实践经验。",
      "面对长期发展战略，我们必须保持清醒的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对未来的变化，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 未来的变化, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "面对未来的变化，我们必须保持理性的判断。",
      "深入分析这一现象，有助于我们理解管理体制。",
      "今天律师在企业总部调整发展战略。",
      "最近律师常常需要提高工作效率。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对公共政策，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 公共政策, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "面对公共政策，我们必须保持准确的判断。",
      "学者每天都要交换专业意见。",
      "面对资源配置问题，我们必须保持独立的判断。",
      "深入分析这一现象，有助于我们理解未来的变化。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对资源配置问题，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置问题, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "面对新的挑战，企业需要重新考虑社会的发展。",
      "因为工作很忙，律师只能晚上调整发展战略。",
      "面对资源配置问题，我们必须保持理性的判断。",
      "面对管理体制，我们必须保持客观的判断。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "面对社会的发展，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会的发展, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "研究人员觉得积累实践经验很重要。",
      "面对社会的发展，我们必须保持独立的判断。",
      "如果计划没有变化，研究人员下午会在研究中心调查社会情况。",
      "面对公共政策，我们必须保持理性的判断。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对社会需求，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "研究人员觉得深入分析问题很重要。",
      "面对新的挑战，企业需要重新考虑社会需求。",
      "面对社会需求，我们必须保持客观的判断。",
      "面对管理体制，我们必须保持独立的判断。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对国际竞争。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 国际竞争。",
    "options": [
      "面对资源配置问题，我们必须保持清醒的判断。",
      "如果缺乏充分准备，就很难有效应对国际竞争。",
      "今天企业家在大学改进管理方法。",
      "面对长期发展战略，我们必须保持准确的判断。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "只有充分理解未来的变化，才能制定更加合理的方案。",
    "pinyin": "",
    "meaning": "Chỉ khi hiểu đầy đủ 未来的变化 mới có thể xây dựng phương án hợp lý hơn.",
    "options": [
      "只有充分理解未来的变化，才能制定更加合理的方案。",
      "面对资源配置问题，我们必须保持准确的判断。",
      "企业家正在检查政策文件，准备开始解决实际困难。",
      "研究结果进一步证明，比较客观。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "如果缺乏充分准备，就很难有效应对未来的变化。",
    "pinyin": "",
    "meaning": "Nếu thiếu sự chuẩn bị đầy đủ thì rất khó ứng phó hiệu quả với 未来的变化。",
    "options": [
      "如果缺乏充分准备，就很难有效应对未来的变化。",
      "昨天研究人员在企业总部调查社会情况，所以回家比较晚。",
      "学者已经把统计数据带到医院了。",
      "周末的时候，律师喜欢去企业总部提高工作效率。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对新的挑战，企业需要重新考虑复杂的经济环境。",
    "pinyin": "",
    "meaning": "Đối mặt với thách thức mới, doanh nghiệp cần xem xét lại 复杂的经济环境。",
    "options": [
      "律师希望明天可以继续提高工作效率。",
      "面对新的挑战，企业需要重新考虑复杂的经济环境。",
      "这一政策可能对公共政策产生深远影响。",
      "面对公共政策，我们必须保持客观的判断。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对社会需求，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "研究人员告诉我，他最近正在调查社会情况。",
      "面对长期发展战略，我们必须保持客观的判断。",
      "面对资源配置问题，我们必须保持理性的判断。",
      "面对社会需求，我们必须保持独立的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对管理体制，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理体制, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "昨天学者在医院交换专业意见，所以回家比较晚。",
      "因为工作很忙，企业家只能晚上申请研究项目。",
      "面对管理体制，我们必须保持清醒的判断。",
      "因为工作很忙，律师只能晚上提高工作效率。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "面对复杂的经济环境，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 复杂的经济环境, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "面对新的挑战，企业需要重新考虑公共政策。",
      "面对复杂的经济环境，我们必须保持准确的判断。",
      "只有充分理解管理体制，才能制定更加合理的方案。",
      "从整体来看，这一问题涉及多个复杂的经济环境。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对技术进步，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 技术进步, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "面对技术进步，我们必须保持清醒的判断。",
      "经过多方面调查，研究人员得出了具有重要参考价值的结论。",
      "学者希望明天可以继续完成调查研究。",
      "为了申请研究项目，企业家提前来到大学。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对复杂的经济环境，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 复杂的经济环境, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "面对复杂的经济环境，我们必须保持客观的判断。",
      "从整体来看，这一问题涉及多个国际竞争。",
      "研究人员告诉我，他最近正在积累实践经验。",
      "律师每天都要调整发展战略。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对公共政策，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 公共政策, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "律师正在企业总部提高工作效率。",
      "这一政策可能对复杂的经济环境产生深远影响。",
      "面对公共政策，我们必须保持清醒的判断。",
      "如果有时间，研究人员会去国际机场积累实践经验。"
    ],
    "correct": 2
  },
  {
    "level": 6,
    "audio": "从整体来看，这一问题涉及多个社会的发展。",
    "pinyin": "",
    "meaning": "Xét tổng thể, vấn đề này liên quan đến nhiều 社会的发展。",
    "options": [
      "在当前背景下，我们有必要进一步完善相关制度。",
      "从整体来看，这一问题涉及多个社会的发展。",
      "如果有时间，研究人员会去广州深入分析问题。",
      "在当前背景下，我们有必要进一步优化资源配置。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对国际竞争，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 国际竞争, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "最近企业家常常需要申请研究项目。",
      "律师正在企业总部提高工作效率。",
      "面对复杂的经济环境，我们必须保持客观的判断。",
      "面对国际竞争，我们必须保持独立的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对资源配置问题，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置问题, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "如果计划没有变化，律师下午会在研究中心调整发展战略。",
      "面对资源配置问题，我们必须保持客观的判断。",
      "只有充分理解未来的变化，才能制定更加合理的方案。",
      "如果缺乏充分准备，就很难有效应对复杂的经济环境。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对社会需求，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会需求, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "周末的时候，学者喜欢去医院完成调查研究。",
      "面对国际竞争，我们必须保持独立的判断。",
      "面对复杂的经济环境，我们必须保持准确的判断。",
      "面对社会需求，我们必须保持准确的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "这一政策可能对长期发展战略产生深远影响。",
    "pinyin": "",
    "meaning": "Chính sách này có thể tạo ảnh hưởng sâu rộng đến 长期发展战略。",
    "options": [
      "如果有时间，学者会去城市中心完成调查研究。",
      "为了解决实际困难，企业家提前来到深圳。",
      "律师正在国际机场承担重要责任。",
      "这一政策可能对长期发展战略产生深远影响。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对技术进步，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 技术进步, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "昨天研究人员在实验室积累实践经验，所以回家比较晚。",
      "面对技术进步，我们必须保持准确的判断。",
      "面对社会需求，我们必须保持准确的判断。",
      "如果缺乏充分准备，就很难有效应对国际竞争。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对社会的发展，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会的发展, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "今天研究人员在实验室深入分析问题。",
      "面对社会的发展，我们必须保持客观的判断。",
      "律师正在博物馆调整发展战略。",
      "面对社会的发展，我们必须保持理性的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对技术进步，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 技术进步, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "面对技术进步，我们必须保持独立的判断。",
      "律师希望明天可以继续提高工作效率。",
      "会议结束以后，律师马上回到企业总部继续承担重要责任。",
      "如果缺乏充分准备，就很难有效应对社会需求。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对社会的发展，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 社会的发展, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "面对资源配置问题，我们必须保持理性的判断。",
      "为了深入分析问题，研究人员提前来到企业总部。",
      "面对国际竞争，我们必须保持准确的判断。",
      "面对社会的发展，我们必须保持客观的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对复杂的经济环境，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 复杂的经济环境, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "面对复杂的经济环境，我们必须保持独立的判断。",
      "为了准备明天的工作，律师今晚还要提高工作效率。",
      "深入研究这一现象有助于我们理解社会的发展。",
      "只有充分理解社会的发展，才能制定更加合理的方案。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对未来的变化，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 未来的变化, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "昨天学者在大学比较不同方案，所以回家比较晚。",
      "面对未来的变化，我们必须保持客观的判断。",
      "面对新的挑战，企业需要重新考虑社会需求。",
      "昨天学者在会议中心完成调查研究，所以回家比较晚。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对长期发展战略，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 长期发展战略, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "面对长期发展战略，我们必须保持客观的判断。",
      "面对管理体制，我们必须保持客观的判断。",
      "深入分析这一现象，有助于我们理解资源配置问题。",
      "只有充分理解公共政策，才能制定更加合理的方案。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对复杂的经济环境，我们必须保持理性的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 复杂的经济环境, chúng ta phải giữ phán đoán 理性。",
    "options": [
      "面对社会需求，我们必须保持独立的判断。",
      "面对复杂的经济环境，我们必须保持理性的判断。",
      "面对资源配置问题，我们必须保持清醒的判断。",
      "虽然时间不多，但是学者还是完成了比较不同方案。"
    ],
    "correct": 1
  },
  {
    "level": 6,
    "audio": "面对长期发展战略，我们必须保持准确的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 长期发展战略, chúng ta phải giữ phán đoán 准确。",
    "options": [
      "面对长期发展战略，我们必须保持准确的判断。",
      "如果缺乏充分准备，就很难有效应对资源配置问题。",
      "面对国际竞争，我们必须保持客观的判断。",
      "面对复杂的经济环境，我们必须保持清醒的判断。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对未来的变化，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 未来的变化, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "面对未来的变化，我们必须保持清醒的判断。",
      "经过多方面调查，研究人员得出了值得进一步研究的结论。",
      "在当前背景下，我们有必要进一步优化资源配置。",
      "如果计划没有变化，律师下午会在研究中心调整发展战略。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对公共政策，我们必须保持独立的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 公共政策, chúng ta phải giữ phán đoán 独立。",
    "options": [
      "面对公共政策，我们必须保持独立的判断。",
      "面对复杂的经济环境，我们必须保持独立的判断。",
      "这一政策可能对技术进步产生深远影响。",
      "只有充分理解未来的变化，才能制定更加合理的方案。"
    ],
    "correct": 0
  },
  {
    "level": 6,
    "audio": "面对管理体制，我们必须保持客观的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 管理体制, chúng ta phải giữ phán đoán 客观。",
    "options": [
      "只有充分理解社会需求，才能制定更加合理的方案。",
      "企业家告诉我，他最近正在改进管理方法。",
      "会议结束以后，学者马上回到大学继续完成调查研究。",
      "面对管理体制，我们必须保持客观的判断。"
    ],
    "correct": 3
  },
  {
    "level": 6,
    "audio": "面对资源配置问题，我们必须保持清醒的判断。",
    "pinyin": "",
    "meaning": "Đối mặt với 资源配置问题, chúng ta phải giữ phán đoán 清醒。",
    "options": [
      "最近学者常常需要比较不同方案。",
      "深入分析这一现象，有助于我们理解未来的变化。",
      "面对资源配置问题，我们必须保持清醒的判断。",
      "律师每天都要调整发展战略。"
    ],
    "correct": 2
  }
];
let listeningQuestions=[], listeningIndex=0, listeningScore=0, listeningAnswered=false, listeningWrongMode=false;
const LISTENING_WRONG_KEY='giangha_listening_wrong_v3';
const LISTENING_PROGRESS_KEY='giangha_listening_progress_v1';
let listeningSessionAnswered=0;
let listeningSessionCorrect=0;
function getWrongListening(){ try{return JSON.parse(localStorage.getItem(LISTENING_WRONG_KEY)||'[]');}catch(e){return [];} }
function getListeningProgress(){ try{return JSON.parse(localStorage.getItem(LISTENING_PROGRESS_KEY)||'{}')||{};}catch(e){return {};}}
function saveListeningProgress(){
  const total=Number(listeningQuestions.length||0);
  const answered=Number(listeningSessionAnswered||0);
  const correct=Number(listeningSessionCorrect||0);
  const wrong=Math.max(0,answered-correct);
  const pct=total?Math.round(Math.min(answered,total)/total*100):0;
  const data={level:String(document.getElementById('hsk-level')?.value||currentLevel||1),total,answered,correct,wrong,pct,updatedAt:new Date().toISOString()};
  try{localStorage.setItem(LISTENING_PROGRESS_KEY,JSON.stringify(data));}catch(e){}
  if(window.ghAuth?.saveProgress) window.ghAuth.saveProgress({listening:data}).catch(()=>{});
}
function updateListeningProgressUI(){
  const total=Number(listeningQuestions.length||0);
  const answered=Math.min(Number(listeningSessionAnswered||0),total);
  const correct=Math.min(Number(listeningSessionCorrect||0),answered);
  const wrongRemaining=getWrongListening().length;
  const pct=total?Math.round(answered/total*100):0;
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};
  set('listening-progress-text',pct+'%');
  set('listening-progress-detail',`${answered} / ${total} câu • ${correct} đúng • ${wrongRemaining} câu sai còn lại`);
  const fill=document.getElementById('listening-progress-fill'); if(fill)fill.style.width=pct+'%';
}
function setWrongListening(items){ try{localStorage.setItem(LISTENING_WRONG_KEY,JSON.stringify(items.slice(-300)));}catch(e){} updateWrongListeningUI(); }
function updateWrongListeningUI(){ const c=document.getElementById('listening-wrong-count'); if(c)c.textContent=getWrongListening().length; const list=document.getElementById('listening-wrong-list'); if(!list)return; const items=getWrongListening(); list.innerHTML=items.length?items.map((q,i)=>`<div class="wrong-item"><div class="wrong-item-text"><strong>${escapeHtml(q.audio)}</strong><small>${escapeHtml(q.pinyin||'')}<br>${escapeHtml(q.meaning||'')}</small></div><div class="wrong-item-actions"><button type="button" onclick="speakWrongListening(${i})"><svg class="ui-icon" aria-hidden="true"><use href="#icon-volume"></use></svg> Nghe lại</button></div></div>`).join(''):'<div class="listening-hint">Chưa có câu sai. Hãy làm bài và những câu trả lời sai sẽ tự được lưu ở đây.</div>'; }
function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function speakWrongListening(i){ const q=getWrongListening()[i]; if(!q||!('speechSynthesis' in window))return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(q.audio); u.lang='zh-CN'; u.rate=Number(document.getElementById('listening-speed')?.value||0.82); speechSynthesis.speak(u); }
function initListening(){
  // TUYỆT ĐỐI KHÔNG tự phát khi mở tab Luyện nghe.
  // Hủy mọi giọng đọc còn sót lại từ tab trước.
  if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch(e) {} }
  listeningWrongMode=false;
  const level=Number(document.getElementById('hsk-level')?.value||1);
  if(!Array.isArray(LISTENING_BANK)||!LISTENING_BANK.length){ const h=document.getElementById('listening-hint'); if(h)h.textContent='Chưa tải được dữ liệu Luyện nghe. Hãy kiểm tra file script.js.'; return; }
  listeningQuestions=LISTENING_BANK.filter(x=>x.level<=Math.max(1,level));
  listeningQuestions=listeningQuestions.map(q=>{ if(q.options&&q.options.length===4)return q; const pool=LISTENING_BANK.filter(x=>x!==q && x.level<=Math.max(1,level)); const ds=[...pool].sort(()=>Math.random()-0.5).slice(0,3); const opts=[q.audio,...ds.map(x=>x.audio)].sort(()=>Math.random()-0.5); return {...q,options:opts,correct:opts.indexOf(q.audio)}; });
  if(!listeningQuestions.length) listeningQuestions=[...LISTENING_BANK];
  const recentKey='giangha_listening_recent_v2';
  let recent=[]; try { recent=JSON.parse(sessionStorage.getItem(recentKey)||'[]'); } catch(e){}
  const fresh=listeningQuestions.filter(q=>!recent.includes(q.audio));
  if(fresh.length >= Math.min(20,listeningQuestions.length)) listeningQuestions=fresh;
  listeningQuestions=[...listeningQuestions].sort(()=>Math.random()-0.5);
  listeningIndex=0; listeningScore=0; listeningAnswered=false; listeningSessionAnswered=0; listeningSessionCorrect=0;
  const cont=document.getElementById('listening-continue'); if(cont) cont.hidden=true;
  try { sessionStorage.setItem(recentKey, JSON.stringify(listeningQuestions.map(q=>q.audio))); } catch(e){}
  renderListeningQuestion();
}
function speakListeningSentence(){
  const q=listeningQuestions[listeningIndex]; if(!q) return;
  if(!('speechSynthesis' in window)){ const h=document.getElementById('listening-hint'); if(h) h.textContent='Thiết bị không hỗ trợ đọc tiếng Trung.'; return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(q.audio); u.lang='zh-CN'; u.rate=Number(document.getElementById('listening-speed')?.value||0.82); u.pitch=1;
  const voices=speechSynthesis.getVoices(); const v=voices.find(x=>/^zh-(CN|TW)/i.test(x.lang)); if(v) u.voice=v;
  speechSynthesis.speak(u);
}
function renderListeningQuestion(){
  const q=listeningQuestions[listeningIndex]; if(!q) return;
  listeningAnswered=false;
  document.getElementById('listening-round').textContent=`Câu ${listeningIndex+1} / ${listeningQuestions.length}`;
  document.getElementById('listening-level-label').textContent=`HSK ${q.level}`;
  document.getElementById('listening-score').textContent=`${listeningScore} / ${listeningIndex}`;
  updateListeningProgressUI();
  document.getElementById('listening-feedback').textContent='';
  document.getElementById('listening-hint').textContent='Bấm “Nghe câu”, tập trung vào âm thanh rồi chọn một đáp án.';
  const next=document.getElementById('listening-next'); if(next) next.disabled=true;
  const box=document.getElementById('listening-options'); box.innerHTML='';
  q.options.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='listening-option';b.textContent=text;b.addEventListener('click',()=>checkListening(i));box.appendChild(b);});
}
function checkListening(choice){
  if(listeningAnswered) return; listeningAnswered=true;
  const q=listeningQuestions[listeningIndex]; const buttons=[...document.querySelectorAll('.listening-option')]; buttons.forEach(b=>b.disabled=true);
  listeningSessionAnswered++;
  const meaning = q.meaning ? `Nghĩa tiếng Việt: ${q.meaning}` : 'Nghĩa tiếng Việt: chưa có dữ liệu cho câu này.';
  if(choice===q.correct){ listeningScore++; listeningSessionCorrect++; buttons[choice].classList.add('correct'); document.getElementById('listening-feedback').innerHTML=`<strong>✓ Chính xác!</strong><div class="listening-meaning">${meaning}</div>`; document.getElementById('listening-feedback').style.color='#00a67d'; if(listeningWrongMode){ setWrongListening(getWrongListening().filter(x=>x.audio!==q.audio)); } }
  else { buttons[choice].classList.add('wrong'); buttons[q.correct].classList.add('correct'); document.getElementById('listening-feedback').innerHTML=`<strong>✗ Chưa đúng.</strong><div class="listening-answer">Đáp án: ${q.audio}</div><div class="listening-meaning">${meaning}</div>`; document.getElementById('listening-feedback').style.color='#d63031'; const wrong=getWrongListening().filter(x=>x.audio!==q.audio); wrong.push({audio:q.audio,pinyin:q.pinyin||'',meaning:q.meaning||''}); setWrongListening(wrong); }
  document.getElementById('listening-score').textContent=`${listeningScore} / ${listeningIndex+1}`;
  saveListeningProgress();
  updateListeningProgressUI();
  document.getElementById('listening-hint').textContent=q.pinyin?`Pinyin: ${q.pinyin}`:'Nghe lại câu để kiểm tra cách phát âm.';
  document.getElementById('listening-next').disabled=false;
}
function nextListeningQuestion(){
  if(!listeningAnswered) return;
  listeningIndex++;
  if(listeningIndex>=listeningQuestions.length){
    const total=listeningQuestions.length, pct=total?Math.round(listeningScore/total*100):0;
    const continueBtn=document.getElementById('listening-continue');
    const nextBtn=document.getElementById('listening-next');
    if(listeningWrongMode){
      const remaining=getWrongListening().length;
      document.getElementById('listening-feedback').textContent=remaining===0
        ? `Đã hoàn thành toàn bộ câu sai • ${listeningScore}/${total} đúng.`
        : `Đã ôn xong lượt này • ${listeningScore}/${total} đúng. Còn ${remaining} câu sai cần ôn lại.`;
      if(nextBtn) nextBtn.disabled=true;
      if(continueBtn){ continueBtn.hidden=false; continueBtn.textContent=remaining===0?'Tiếp tục luyện nghe':'Tiếp tục luyện nghe'; }
    } else {
      document.getElementById('listening-feedback').textContent=`Hoàn thành ${total} câu • ${listeningScore} đúng (${pct}%).`;
      if(nextBtn) nextBtn.disabled=true;
      if(continueBtn) continueBtn.hidden=false;
    }
    saveListeningProgress();
    updateListeningProgressUI();
    return;
  }
  renderListeningQuestion();
}
function continueListening(){
  if('speechSynthesis' in window){try{speechSynthesis.cancel();}catch(e){}}
  const level=Number(document.getElementById('hsk-level')?.value||1);
  listeningWrongMode=false;
  const base=LISTENING_BANK.filter(x=>x.level<=Math.max(1,level));
  listeningQuestions=base.map(q=>{
    if(q.options&&q.options.length===4)return q;
    const pool=base.filter(x=>x!==q);
    const ds=[...pool].sort(()=>Math.random()-0.5).slice(0,3);
    const opts=[q.audio,...ds.map(x=>x.audio)].sort(()=>Math.random()-0.5);
    return {...q,options:opts,correct:opts.indexOf(q.audio)};
  }).sort(()=>Math.random()-0.5);
  if(!listeningQuestions.length)return;
  listeningIndex=0; listeningScore=0; listeningAnswered=false; listeningSessionAnswered=0; listeningSessionCorrect=0;
  const nextBtn=document.getElementById('listening-next'); if(nextBtn)nextBtn.disabled=true;
  const cont=document.getElementById('listening-continue'); if(cont)cont.hidden=true;
  const panel=document.getElementById('listening-wrong-panel'); if(panel)panel.hidden=false;
  renderListeningQuestion();
}

function startWrongListening(){ const wrong=getWrongListening(); if(!wrong.length){ const f=document.getElementById('listening-feedback'); if(f)f.textContent='Bạn chưa có câu sai để ôn.'; return; } listeningQuestions=wrong.map(q=>{const pool=[...LISTENING_BANK.filter(x=>x.audio!==q.audio),...wrong.filter(x=>x.audio!==q.audio)]; const opts=[q.audio,...pool.sort(()=>Math.random()-0.5).slice(0,3).map(x=>x.audio)]; const unique=[...new Set(opts)].slice(0,4).sort(()=>Math.random()-0.5); return {...q,level:'Ôn sai',options:unique,correct:unique.indexOf(q.audio)}; }).sort(()=>Math.random()-0.5); listeningIndex=0; listeningScore=0; listeningAnswered=false; listeningWrongMode=true; renderListeningQuestion(); const p=document.getElementById('listening-wrong-panel'); if(p)p.hidden=false; }
function clearWrongListening(){ localStorage.removeItem(LISTENING_WRONG_KEY); updateWrongListeningUI(); const p=document.getElementById('listening-wrong-panel'); if(p)p.hidden=false; }
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('listening-play')?.addEventListener('click',speakListeningSentence);
  document.getElementById('listening-replay')?.addEventListener('click',speakListeningSentence);
  document.getElementById('listening-next')?.addEventListener('click',nextListeningQuestion);
  document.getElementById('listening-continue')?.addEventListener('click',continueListening);
  document.getElementById('listening-wrong-mode')?.addEventListener('click',startWrongListening);
  document.getElementById('listening-clear-wrong')?.addEventListener('click',clearWrongListening);
  updateWrongListeningUI();
});
