
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

    try {
        // Chờ Firebase xác nhận trạng thái đăng nhập lần đầu, không redirect sớm khi SDK còn đang khởi tạo.
        const user = window.ghAuthReady ? await window.ghAuthReady : null;
        if (!user) {
            if (loader) loader.innerHTML = '<div style="background:#fff;border:1px solid #f0d6d6;border-radius:22px;padding:28px;max-width:380px;text-align:center;box-shadow:0 18px 50px rgba(0,0,0,.10);"><div style="font-size:36px;">🔐</div><strong>Phiên đăng nhập không tồn tại</strong><p style="color:#718096;">Đang chuyển đến trang đăng nhập...</p></div>';
            setTimeout(() => window.location.replace('./login.html'), 700);
            return;
        }

        const profile = await (window.ghAuth?.getProfile ? window.ghAuth.getProfile(user) : null);
        window.ghUserProfile = profile || {};
        const userChip = document.getElementById('online-user-chip');
        if (userChip) userChip.textContent = '☁️ ' + (profile?.username || user.displayName || user.email || 'Tài khoản');

        document.getElementById('hsk-level').addEventListener('change', (e) => {
            currentLevel = e.target.value;
            renderList();
            initTyping();
            renderCommunication();
            saveProgressData({ currentLevel });
            saveHandwritingProgress();
            if (document.getElementById('handwriting-canvas')) {
                initHandwriting();
            }
        });
        
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

        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.addEventListener('click', async () => {
            logoutBtn.disabled = true;
            logoutBtn.textContent = 'Đang đăng xuất...';
            try { await window.ghAuth.logout(); } finally { window.location.replace('./login.html'); }
        });
    } catch (error) {
        console.error(error);
        if (loader) loader.innerHTML = '<div style="background:#fff;border:1px solid #f0d6d6;border-radius:22px;padding:28px;max-width:380px;text-align:center;"><div style="font-size:36px;">⚠️</div><strong>Không thể tải tài khoản</strong><p style="color:#718096;">Kiểm tra Firebase và kết nối Internet rồi tải lại trang.</p></div>' ;
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
    document.querySelectorAll('main > section, section').forEach(section => {
        section.classList.remove('active');
    });

    const section = document.getElementById(`${mode}-mode`);
    if (!section) return;

    section.classList.add('active');

    if (mode === 'typing') initTyping();
    if (mode === 'exam') {
        updateExamStartInfo();
        resetExamUI();
    }
    if (mode === 'communication') renderCommunication();
    if (mode === 'handwriting') initHandwriting();
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
                    onclick="speakChinese(${index})">🔊</button>
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
        document.getElementById('typing-word').textContent = "🎉";
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
        feedback.textContent = "✅ Chính xác!";
        feedback.className = "correct";
        document.getElementById('typing-input').disabled = true;
        nextBtn.classList.remove('hidden');
        nextBtn.focus();
    } else {
        feedback.textContent = "❌ Sai rồi, thử lại nhé!";
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
                    <button class="toggle-answer-btn" onclick="toggleAnswer(${index})">💡 Mẫu trả lời</button>
                </div>
                <div class="question-box">
                    <div class="q-hanzi">❓ ${item.question}</div>
                    <div class="q-pinyin">📌 Pinyin: ${item.pinyin}</div>
                    <div class="q-meaning">💬 Dịch: ${item.meaning}</div>
                </div>
                <div class="answer-box hidden" id="answer-${index}">
                    <div class="a-hanzi">🗣️ ${item.answer}</div>
                    <div class="q-pinyin">📌 Pinyin: ${item.answerPinyin}</div>
                    <div class="q-meaning">💬 Dịch: ${item.answerMeaning}</div>
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
        document.getElementById('quiz-feedback').innerText = '✅ Chính xác!';
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
        document.getElementById('quiz-feedback').innerText = `❌ Sai rồi! Đáp án đúng: ${correct.meaning}`;
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
    if (percentage === 100) msg = '🎉 Xuất sắc! Bạn đã đạt điểm tuyệt đối!';
    else if (percentage >= 80) msg = '👏 Rất tốt! Bạn nắm rất vững từ vựng cấp độ này.';
    else if (percentage >= 50) msg = '👍 Đạt yêu cầu! Hãy tiếp tục luyện tập để đạt điểm cao hơn.';
    else msg = '💪 Cần cố gắng thêm! Hãy xem lại danh sách từ vựng và thử lại nhé.';
    
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
    currentLevel = levelSelect ? levelSelect.value : '1';
    saveProgressData({ currentLevel });

    renderList();
    initTyping();
    updateExamStartInfo();
    resetExamUI();

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
            <div class="hanzi">${item.word}</div>
            <div class="pinyin">${item.pinyin}</div>
            <div class="meaning">${item.meaning}</div>
        </div>
    `).join("");


    if (resultCount) {

        if (filteredWords.length > 0) {

            resultCount.innerText =
                `🔎 Tìm thấy ${filteredWords.length}/${vocabulary.length} từ`;

        } else {

            resultCount.innerText =
                "❌ Không tìm thấy từ phù hợp";

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
            "<p>✅ Không phát hiện lỗi đáng kể.</p>";

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
                        <b>📚 Gợi ý từ vựng:</b>
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

        button.innerText =
            "🤖 AI đang chấm...";

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

            button.innerText =
                "🤖 AI chấm bài";

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
    set('progress-total-label', `${total} từ HSK ${level}`);
    const fill = document.getElementById('progress-bar-fill');
    if (fill) fill.style.width = `${Math.max(typingPercent, hwPercent)}%`;
    set('progress-summary', total ? `Bạn đang học HSK ${level}. Bài gõ đã hoàn thành ${typed}/${total}; luyện viết đang ở ${Math.min(hwIndex + 1, total)}/${total}.` : 'Chưa có dữ liệu học tập.');
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

    // Canvas phụ để giữ nét người dùng vẽ.
    // Nét sẽ được cắt theo hình chữ Hán mẫu để không bị vẽ tràn ra ngoài chữ.
    const inkCanvas = document.createElement('canvas');
    inkCanvas.width = canvas.width;
    inkCanvas.height = canvas.height;
    const inkCtx = inkCanvas.getContext('2d');

    const ctx = canvas.getContext('2d');
    let lastPoint = null;

    inkCtx.lineWidth = 18;
    inkCtx.lineCap = 'round';
    inkCtx.lineJoin = 'round';
    inkCtx.strokeStyle = 'rgba(25, 30, 36, 0.72)';

    // Canvas mask dùng chính chữ đang luyện làm vùng cho phép vẽ.
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = canvas.width;
    maskCanvas.height = canvas.height;
    const maskCtx = maskCanvas.getContext('2d');

    handwritingInkCanvas = inkCanvas;
    handwritingInkCtx = inkCtx;
    handwritingMaskCanvas = maskCanvas;
    handwritingMaskCtx = maskCtx;

    const pos = e => {
        const rect = canvas.getBoundingClientRect();
        const p = e.touches ? e.touches[0] : e;
        return {
            x: (p.clientX - rect.left) * canvas.width / rect.width,
            y: (p.clientY - rect.top) * canvas.height / rect.height
        };
    };

    const renderInk = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(inkCanvas, 0, 0);

        // Chỉ giữ lại phần nét nằm trong thân chữ mẫu.
        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(maskCanvas, 0, 0);
        ctx.globalCompositeOperation = 'source-over';
    };

    const start = e => {
        e.preventDefault();
        handwritingDrawing = true;
        lastPoint = pos(e);
        inkCtx.beginPath();
        inkCtx.moveTo(lastPoint.x, lastPoint.y);
    };

    const draw = e => {
        if (!handwritingDrawing) return;
        e.preventDefault();

        const p = pos(e);

        // Làm mượt nét để khi kéo ngón tay trên điện thoại không bị răng cưa.
        if (lastPoint) {
            const midX = (lastPoint.x + p.x) / 2;
            const midY = (lastPoint.y + p.y) / 2;
            inkCtx.quadraticCurveTo(lastPoint.x, lastPoint.y, midX, midY);
            inkCtx.stroke();
            inkCtx.beginPath();
            inkCtx.moveTo(midX, midY);
        }

        lastPoint = p;
        renderInk();
    };

    const stop = () => {
        if (!handwritingDrawing) return;
        handwritingDrawing = false;
        lastPoint = null;
        inkCtx.closePath();
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stop);
    canvas.addEventListener('mouseleave', stop);
    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stop);
    canvas.addEventListener('touchcancel', stop);

    // Lưu hàm render để đổi chữ / xóa nét mà không phải gắn lại event.
    window.renderHandwritingInk = renderInk;
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
// HOẠT ẢNH THỨ TỰ NÉT HÁN TỰ
// Dùng Hanzi Writer để hiển thị đúng hình dáng và thứ tự từng nét.
// ============================================================
(function initStrokeOrderAnimation(){
    let strokeWriter = null;
    let strokeChars = [];
    let strokeCharIndex = 0;
    let strokeSpeed = 1.25;
    let strokePlaying = false;

    function getCurrentHanzi(){
        const item = handwritingWords[handwritingIndex] || {};
        return String(item.word || item.hanzi || item.chinese || '').trim();
    }

    function getStrokeHost(){
        return document.getElementById('stroke-animation-character');
    }

    function setStrokeText(text){
        const el = document.getElementById('stroke-step-text');
        if (el) el.textContent = text;
    }

    function setStrokeCount(count){
        const el = document.getElementById('stroke-count-badge');
        if (el) el.textContent = `${count || 0} nét`;
    }

    function clearStrokeWriter(){
        strokePlaying = false;
        if (strokeWriter && typeof strokeWriter.cancelQuiz === 'function') {
            try { strokeWriter.cancelQuiz(); } catch(e) {}
        }
        strokeWriter = null;
        const host = getStrokeHost();
        if (host) host.innerHTML = '';
    }

    function renderStrokeCharacter(char, autoPlay){
        const host = getStrokeHost();
        if (!host) return;

        clearStrokeWriter();
        host.innerHTML = '';

        if (!char) {
            setStrokeCount(0);
            setStrokeText('Chưa có chữ để hướng dẫn.');
            return;
        }

        if (typeof window.HanziWriter !== 'function') {
            setStrokeCount(0);
            setStrokeText('Không tải được dữ liệu thứ tự nét. Bạn vẫn có thể luyện viết trong ô bên trên.');
            return;
        }

        try {
            strokeWriter = HanziWriter.create(host, char, {
                width: 200,
                height: 170,
                padding: 5,
                showOutline: true,
                showCharacter: false,
                strokeAnimationSpeed: strokeSpeed,
                strokeFadeDuration: 220,
                strokeHighlightSpeed: strokeSpeed,
                drawingFadeDuration: 200,
                highlightOnComplete: false,
                drawingColor: '#0984e3',
                strokeColor: '#d63031',
                outlineColor: 'rgba(9,132,227,.18)',
                radicalColor: '#0984e3',
                showHintAfterMisses: 0
            });

            // Lấy số nét từ dữ liệu ký tự mà Hanzi Writer tải.
            const count = strokeWriter._charData && Array.isArray(strokeWriter._charData.strokes)
                ? strokeWriter._charData.strokes.length
                : 0;
            setStrokeCount(count);
            setStrokeText(`Chữ “${char}” có ${count || '?'} nét. Quan sát từng nét từ từ.`);

            if (autoPlay) playCurrentStrokeAnimation();
        } catch (err) {
            console.warn('Không thể khởi tạo hoạt ảnh thứ tự nét:', err);
            setStrokeText(`Không thể phát hoạt ảnh chữ “${char}”.`);
        }
    }

    function playCurrentStrokeAnimation(){
        if (!strokeWriter) return;
        strokePlaying = true;
        setStrokeText(`▶ Đang hướng dẫn chữ “${strokeChars[strokeCharIndex] || getCurrentHanzi()}” từng nét...`);

        try {
            strokeWriter.animateCharacter({
                onComplete: function(){
                    strokePlaying = false;
                    const char = strokeChars[strokeCharIndex] || getCurrentHanzi();
                    const count = strokeWriter._charData && strokeWriter._charData.strokes
                        ? strokeWriter._charData.strokes.length : 0;
                    setStrokeText(`✅ Đã xem đủ ${count || ''} nét của chữ “${char}”. Hãy thử tự viết lại ở ô phía trên.`);
                }
            });
        } catch (err) {
            strokePlaying = false;
            console.warn('Lỗi phát hoạt ảnh:', err);
        }
    }

    function replayStrokeAnimation(){
        const text = getCurrentHanzi();
        strokeChars = [...text].filter(Boolean);
        strokeCharIndex = 0;
        if (!strokeChars.length) return;
        renderStrokeCharacter(strokeChars[0], true);
    }

    function skipStrokeAnimation(){
        if (!strokeWriter) return;
        try {
            strokeWriter.showCharacter({
                showOutline: true,
                showCharacter: true
            });
            strokePlaying = false;
            const char = strokeChars[strokeCharIndex] || getCurrentHanzi();
            const count = strokeWriter._charData && strokeWriter._charData.strokes
                ? strokeWriter._charData.strokes.length : 0;
            setStrokeText(`👀 Đây là chữ hoàn chỉnh. Nhấn “▶ Bắt đầu” để xem lại từng nét.`);
            setStrokeCount(count);
        } catch(e) {}
    }

    function updateStrokeAnimationForWord(){
        const text = getCurrentHanzi();
        strokeChars = [...text].filter(Boolean);
        strokeCharIndex = 0;
        if (!strokeChars.length) {
            clearStrokeWriter();
            setStrokeText('Chưa có chữ để hướng dẫn.');
            setStrokeCount(0);
            return;
        }
        renderStrokeCharacter(strokeChars[0], false);
    }

    document.addEventListener('DOMContentLoaded', function(){
        const replay = document.getElementById('stroke-replay');
        const speed = document.getElementById('stroke-speed');
        const skip = document.getElementById('stroke-skip');

        if (replay) replay.addEventListener('click', replayStrokeAnimation);
        if (skip) skip.addEventListener('click', skipStrokeAnimation);
        if (speed) speed.addEventListener('click', function(){
            if (strokeSpeed === 1.25) {
                strokeSpeed = 2.1;
                speed.textContent = '⚡ Tốc độ: Nhanh';
            } else {
                strokeSpeed = 1.25;
                speed.textContent = '⚡ Tốc độ: Chậm';
            }
            if (strokeWriter) renderStrokeCharacter(strokeChars[strokeCharIndex] || getCurrentHanzi(), false);
        });

        updateStrokeAnimationForWord();
    });

    // Được gọi sau mỗi lần đổi chữ Hán.
    window.updateStrokeOrderAnimation = updateStrokeAnimationForWord;
})();
