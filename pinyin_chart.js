// ==============================================================
// PINYIN CHART & CHINESE ALPHABET ENGINE
// Bảng chữ cái tiếng Trung toàn diện (26 Chữ cái A-Z, 23 Thanh mẫu, 
// 36 Vận mẫu, 4 Thanh điệu, Quy tắc biến điệu, 214 Bộ thủ & Luyện âm)
// Hệ thống độc lập nền tảng - Không phân chia theo cấp độ HSK
// ==============================================================

(() => {
  const PY_DATA = {
    // 26 CHỮ CÁI LA-TINH NGỮ ÂM PINYIN (HÁN NGỮ BÍNH ÂM CHỮ MẪU BIỂU - 汉语拼音字母表)
    alphabet26: [
      { char: "Aa", name: "a", pinyin: "a", read: "Đọc như 'a' trong tiếng Việt", role: "Vận mẫu đơn", tip: "Mở rộng khẩu hình miệng, lưỡi ở vị trí thấp nhất, phát âm to rõ ràng.", sound: "ā", ex: { zh: "啊", pinyin: "ā", vi: "A (thán từ ngạc nhiên)" } },
      { char: "Bb", name: "bê", pinyin: "b", read: "Đọc như 'p' trong tiếng Việt (vô thanh, không bật hơi)", role: "Thanh mẫu hai môi", tip: "Hai môi khép chặt chặn luồng khí, mở nhẹ ra tự nhiên, không bật hơi.", sound: "bō", ex: { zh: "八", pinyin: "bā", vi: "Số 8" } },
      { char: "Cc", name: "cê", pinyin: "c", read: "Đọc như 'x' bật hơi hoặc 'th' sắc mạnh", role: "Thanh mẫu đầu lưỡi trước", tip: "Đầu lưỡi chạm mặt sau răng trên, nén khí rồi bật mạnh thoát ra khe răng.", sound: "cī", ex: { zh: "菜", pinyin: "cài", vi: "Món ăn / rau" } },
      { char: "Dd", name: "dê", pinyin: "d", read: "Đọc như 't' trong tiếng Việt (không bật hơi)", role: "Thanh mẫu đầu lưỡi giữa", tip: "Đầu lưỡi chạm nướu trên rồi hạ xuống nhẹ nhàng, phát âm như 't' Việt.", sound: "dē", ex: { zh: "大", pinyin: "dà", vi: "To lớn" } },
      { char: "Ee", name: "e", pinyin: "e", read: "Đọc như 'ưa' hoặc 'ơ'", role: "Vận mẫu đơn", tip: "Miệng hé mở hình dẹt, phát âm lùi sâu trong cổ họng như 'ưa'.", sound: "ē", ex: { zh: "饿", pinyin: "è", vi: "Đói" } },
      { char: "Ff", name: "ê-phu", pinyin: "f", read: "Đọc như 'ph' trong tiếng Việt", role: "Thanh mẫu môi răng", tip: "Răng trên chạm nhẹ môi dưới, luồng khí ma sát thoát ra ngoài.", sound: "fō", ex: { zh: "风", pinyin: "fēng", vi: "Gió" } },
      { char: "Gg", name: "gê", pinyin: "g", read: "Đọc như 'c / k' trong tiếng Việt (không bật hơi)", role: "Thanh mẫu gốc lưỡi", tip: "Gốc lưỡi nâng lên chạm ngạc mềm, hạ xuống nhẹ không bật hơi.", sound: "gē", ex: { zh: "哥", pinyin: "gē", vi: "Anh trai" } },
      { char: "Hh", name: "ha", pinyin: "h", read: "Đọc nhẹ như 'h' hoặc giữa 'h' và 'kh'", role: "Thanh mẫu gốc lưỡi", tip: "Gốc lưỡi nâng nhẹ gần ngạc mềm, hơi ma sát êm dịu thoát ra.", sound: "hē", ex: { zh: "好", pinyin: "hǎo", vi: "Tốt / đẹp" } },
      { char: "Ii", name: "yi", pinyin: "i", read: "Đọc như 'i' (sau zh, ch, sh, r, z, c, s đọc là 'ư')", role: "Vận mẫu đơn", tip: "Khóe miệng kéo dẹt sang hai bên như đang cười nhẹ.", sound: "yī", ex: { zh: "一", pinyin: "yī", vi: "Số 1" } },
      { char: "Jj", name: "jie", pinyin: "j", read: "Đọc như 'ch' trong tiếng Việt (không bật hơi)", role: "Thanh mẫu mặt lưỡi", tip: "Mặt lưỡi phẳng áp ngạc cứng, hạ nhẹ cho hơi thoát, không bật mạnh.", sound: "jī", ex: { zh: "家", pinyin: "jiā", vi: "Nhà / gia đình" } },
      { char: "Kk", name: "kê", pinyin: "k", read: "Đọc như 'kh' bật hơi rất mạnh", role: "Thanh mẫu gốc lưỡi", tip: "Gốc lưỡi chặn luồng khí rồi đột ngột bật mạnh dứt khoát ra ngoài.", sound: "kē", ex: { zh: "看", pinyin: "kàn", vi: "Xem / nhìn" } },
      { char: "Ll", name: "ê-lơ", pinyin: "l", read: "Đọc như 'l' trong tiếng Việt", role: "Thanh mẫu đầu lưỡi giữa", tip: "Đầu lưỡi chạm nướu trên, luồng khí thoát đều hai bên mép lưỡi.", sound: "lē", ex: { zh: "来", pinyin: "lái", vi: "Đến / lại" } },
      { char: "Mm", name: "ê-mơ", pinyin: "m", read: "Đọc như 'm' trong tiếng Việt", role: "Thanh mẫu hai môi", tip: "Hai môi khép kín, luồng khí thoát qua khoang mũi tạo âm vang.", sound: "mō", ex: { zh: "妈妈", pinyin: "māma", vi: "Mẹ" } },
      { char: "Nn", name: "nê", pinyin: "n", read: "Đọc như 'n' trong tiếng Việt", role: "Thanh mẫu đầu lưỡi giữa", tip: "Đầu lưỡi chạm ngạc trên, âm mũi vang rõ ràng.", sound: "nē", ex: { zh: "你", pinyin: "nǐ", vi: "Bạn / anh / chị" } },
      { char: "Oo", name: "o", pinyin: "o", read: "Đọc như 'ua' hoặc 'ô' tròn môi", role: "Vận mẫu đơn", tip: "Môi tròn lại hơi nhô về trước, âm thanh tròn trịa và vang.", sound: "ō", ex: { zh: "我", pinyin: "wǒ", vi: "Tôi" } },
      { char: "Pp", name: "pê", pinyin: "p", read: "Đọc như 'p' bật hơi rất mạnh", role: "Thanh mẫu hai môi", tip: "Hai môi mím chặt, nén khí rồi bật tung ra mạnh làm rung giấy trước mặt.", sound: "pō", ex: { zh: "朋友", pinyin: "péngyou", vi: "Bạn bè" } },
      { char: "Qq", name: "chiu", pinyin: "q", read: "Đọc như 'ch' bật hơi sắc mạnh", role: "Thanh mẫu mặt lưỡi", tip: "Mặt lưỡi nâng ngạc cứng rồi bật mạnh luồng khí thoát ra ngoài.", sound: "qī", ex: { zh: "去", pinyin: "qù", vi: "Đi" } },
      { char: "Rr", name: "a-rơ", pinyin: "r", read: "Đọc như 'r' uốn cong lưỡi (không rung)", role: "Thanh mẫu cuộn lưỡi", tip: "Đầu lưỡi uốn cong lên ngạc cứng, luồng khí ma sát êm dịu, không rung lưỡi.", sound: "rī", ex: { zh: "人", pinyin: "rén", vi: "Người" } },
      { char: "Ss", name: "ê-si", pinyin: "s", read: "Đọc như 'x' nhẹ trong tiếng Việt", role: "Thanh mẫu đầu lưỡi trước", tip: "Đầu lưỡi gần chân răng dưới, luồng hơi ma sát thoát qua khe răng.", sound: "sī", ex: { zh: "三", pinyin: "sān", vi: "Số 3" } },
      { char: "Tt", name: "thê", pinyin: "t", read: "Đọc như 'th' bật hơi trong tiếng Việt", role: "Thanh mẫu đầu lưỡi giữa", tip: "Đầu lưỡi chạm nướu trên rồi giật lùi bật mạnh luồng khí ra.", sound: "tē", ex: { zh: "天", pinyin: "tiān", vi: "Trời / ngày" } },
      { char: "Uu", name: "wu", pinyin: "u", read: "Đọc như 'u' trong tiếng Việt", role: "Vận mẫu đơn", tip: "Môi chu tròn nhỏ, gốc lưỡi nâng cao về phía sau họng.", sound: "ū", ex: { zh: "五", pinyin: "wǔ", vi: "Số 5" } },
      { char: "Vv", name: "vê", pinyin: "v", read: "Đọc như 'v' (chỉ dùng phiên âm từ mượn / gõ chữ ü)", role: "Chữ cái phụ trợ", tip: "Trong bộ gõ bàn phím Trung văn, dùng phím 'v' để gõ chữ 'ü' (như lǚ gõ là lv).", sound: "wēi", ex: { zh: "绿", pinyin: "lǜ (gõ lv)", vi: "Màu xanh lá" } },
      { char: "Ww", name: "wa", pinyin: "w", read: "Đọc như 'oa' / 'u'", role: "Bán nguyên âm / Phụ âm khởi đầu", tip: "Dùng để viết mở đầu các âm tiết bắt đầu bằng nguyên âm 'u'.", sound: "wā", ex: { zh: "王", pinyin: "wáng", vi: "Vua / Họ Vương" } },
      { char: "Xx", name: "xi", pinyin: "x", read: "Đọc như 'x' tiếng Việt (mặt lưỡi phẳng)", role: "Thanh mẫu mặt lưỡi", tip: "Mặt lưỡi phẳng nâng sát ngạc cứng, đẩy hơi nhẹ êm qua khe hẹp.", sound: "xī", ex: { zh: "小", pinyin: "xiǎo", vi: "Nhỏ / bé" } },
      { char: "Yy", name: "ya", pinyin: "y", read: "Đọc như 'd' (miền Nam) hoặc 'i'", role: "Bán nguyên âm / Phụ âm khởi đầu", tip: "Dùng mở đầu các âm tiết bắt đầu bằng 'i' hoặc 'ü'.", sound: "yā", ex: { zh: "月", pinyin: "yuè", vi: "Mặt trăng / tháng" } },
      { char: "Zz", name: "zê", pinyin: "z", read: "Đọc như 'ch / tr' không bật hơi", role: "Thanh mẫu đầu lưỡi trước", tip: "Đầu lưỡi chạm chân răng trên rồi hé nhẹ, tuyệt đối không bật hơi mạnh.", sound: "zī", ex: { zh: "在", pinyin: "zài", vi: "Ở / tại" } }
    ],

    // 23 THANH MẪU (SHENGMU - 声母)
    initials: [
      { letter: "b", name: "b (bô / p nhẹ)", group: "Âm hai môi (Song thần âm)", read: "Đọc như 'p' trong tiếng Việt (vô thanh, không bật hơi)", tip: "Hai môi khép chặt chặn luồng khí, sau đó hé mở nhẹ nhàng cho hơi thoát ra tự nhiên. Tuyệt đối không bật hơi mạnh.", sound: "bō", example: { zh: "爸爸", pinyin: "bàba", vi: "Bố / ba" } },
      { letter: "p", name: "p (pô bật hơi)", group: "Âm hai môi (Song thần âm)", read: "Đọc như 'p' bật hơi rất mạnh", tip: "Hai môi ngậm chặt, nén luồng khí lại rồi bật mạnh dứt khoát ra ngoài. Đặt tờ giấy trước miệng sẽ thấy giấy bay mạnh.", sound: "pō", example: { zh: "苹果", pinyin: "píngguǒ", vi: "Quả táo" } },
      { letter: "m", name: "m (mô)", group: "Âm hai môi (Song thần âm)", read: "Đọc hoàn toàn như 'm' trong tiếng Việt", tip: "Hai môi khép kín, luồng khí thoát đều qua khoang mũi tạo âm vang nhẹ nhàng.", sound: "mō", example: { zh: "妈妈", pinyin: "māma", vi: "Mẹ" } },
      { letter: "f", name: "f (phô)", group: "Âm môi răng (Thần xỉ âm)", read: "Đọc hoàn toàn như 'ph' trong tiếng Việt", tip: "Răng cửa hàm trên chạm nhẹ vào môi dưới, đẩy luồng khí ma sát nhẹ nhàng thoát ra.", sound: "fō", example: { zh: "飞机", pinyin: "fēijī", vi: "Máy bay" } },
      { letter: "d", name: "d (tơ)", group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc như 't' trong tiếng Việt (không bật hơi)", tip: "Đầu lưỡi dán chặt vào nướu răng trên, sau đó hạ nhanh xuống cho luồng khí bật nhẹ ra.", sound: "dē", example: { zh: "弟弟", pinyin: "dìdi", vi: "Em trai" } },
      { letter: "t", name: "t (thơ bật hơi)", group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc như 'th' bật hơi trong tiếng Việt", tip: "Khẩu hình giống âm 'd' nhưng nén luồng khí mạnh hơn và bật dứt khoát ra ngoài.", sound: "tē", example: { zh: "天气", pinyin: "tiānqì", vi: "Thời tiết" } },
      { letter: "n", name: "n (nơ)", group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc hoàn toàn như 'n' trong tiếng Việt", tip: "Đầu lưỡi chạm nướu trên chặn khí, ngạc mềm hạ xuống cho luồng khí thoát qua khoang mũi.", sound: "nē", example: { zh: "牛奶", pinyin: "niúnǎi", vi: "Sữa bò" } },
      { letter: "l", name: "l (lơ)", group: "Âm đầu lưỡi (Thiệt tiêm trung âm)", read: "Đọc hoàn toàn như 'l' trong tiếng Việt", tip: "Đầu lưỡi chạm nướu răng trên, luồng khí êm dịu thoát ra ở hai bên mép lưỡi.", sound: "lē", example: { zh: "老师", pinyin: "lǎoshī", vi: "Giáo viên / Thầy cô" } },
      { letter: "g", name: "g (cơ / kơ)", group: "Âm cuống lưỡi (Thiệt căn âm)", read: "Đọc như 'c' hoặc 'k' trong tiếng Việt (không bật hơi)", tip: "Cuống lưỡi nâng cao chạm ngạc mềm chặn khí, sau đó hạ xuống để hơi thoát êm.", sound: "gē", example: { zh: "高兴", pinyin: "gāoxìng", vi: "Vui vẻ" } },
      { letter: "k", name: "k (khơ bật hơi)", group: "Âm cuống lưỡi (Thiệt căn âm)", read: "Đọc như 'kh' bật hơi rất mạnh", tip: "Cuống lưỡi ép ngạc mềm nén khí, rồi bật tung luồng khí thật mạnh từ sâu trong cổ họng ra ngoài.", sound: "kē", example: { zh: "开水", pinyin: "kāishuǐ", vi: "Nước sôi" } },
      { letter: "h", name: "h (hơ nhẹ)", group: "Âm cuống lưỡi (Thiệt căn âm)", read: "Đọc giữa 'h' và 'kh' nhẹ trong tiếng Việt", tip: "Cuống lưỡi nâng gần ngạc mềm tạo khe hẹp, luồng khí ma sát nhẹ nhàng thoát ra.", sound: "hē", example: { zh: "喝水", pinyin: "hēshuǐ", vi: "Uống nước" } },
      { letter: "j", name: "j (chi)", group: "Âm mặt lưỡi (Thiệt diện âm)", read: "Đọc như 'ch' trong tiếng Việt (mặt lưỡi dẹt, không bật hơi)", tip: "Mặt lưỡi nâng cao ép sát ngạc cứng, đẩy luồng khí nhẹ nhàng thoát ra.", sound: "jī", example: { zh: "北京", pinyin: "běijīng", vi: "Bắc Kinh" } },
      { letter: "q", name: "q (chi bật hơi)", group: "Âm mặt lưỡi (Thiệt diện âm)", read: "Đọc như 'ch' bật hơi sắc và mạnh", tip: "Khẩu hình giống hệt âm 'j' nhưng nén luồng hơi rất mạnh và phóng dứt khoát ra ngoài.", sound: "qī", example: { zh: "前面", pinyin: "qiánmiàn", vi: "Phía trước" } },
      { letter: "x", name: "x (xi)", group: "Âm mặt lưỡi (Thiệt diện âm)", read: "Đọc như 'x' trong tiếng Việt (mặt lưỡi dẹt, hơi thoát êm)", tip: "Mặt lưỡi phẳng nâng sát ngạc cứng tạo khe hẹp dài, luồng khí ma sát êm dịu thoát ra.", sound: "xī", example: { zh: "学校", pinyin: "xuéxiào", vi: "Trường học" } },
      { letter: "z", name: "z (chư / tư)", group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm)", read: "Đọc như 'ch' nhẹ hoặc 't' kết hợp 'x', không bật hơi", tip: "Đầu lưỡi chạm mặt sau răng cửa trên, mở hé nhẹ cho hơi thoát tự nhiên. Sau z, chữ 'i' đọc là 'ư'.", sound: "zī", example: { zh: "早上", pinyin: "zǎoshang", vi: "Buổi sáng" } },
      { letter: "c", name: "c (xư bật hơi)", group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm)", read: "Đọc như 'x' hoặc 'th' bật hơi rất mạnh", tip: "Đầu lưỡi ép mặt sau răng trên chặn khí, rồi bật mạnh tạo tiếng xì dứt khoát.", sound: "cī", example: { zh: "厕所", pinyin: "cèsuǒ", vi: "Nhà vệ sinh" } },
      { letter: "s", name: "s (sư nhẹ)", group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm)", read: "Đọc như 'x' nhẹ tiếng Việt", tip: "Đầu lưỡi để sát chân răng dưới, luồng khí ma sát êm dịu qua khe răng.", sound: "sī", example: { zh: "司机", pinyin: "sījī", vi: "Tài xế" } },
      { letter: "zh", name: "zh (trư uốn lưỡi)", group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 'tr' uốn lưỡi, không bật hơi", tip: "Đầu lưỡi uốn cong lên ngạc cứng chặn khí, mở hé nhẹ để hơi thoát ra. Đi với 'i' đọc thành 'ư'.", sound: "zhī", example: { zh: "中国", pinyin: "zhōngguó", vi: "Trung Quốc" } },
      { letter: "ch", name: "ch (trư bật hơi)", group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 'tr' uốn lưỡi VÀ bật hơi cực mạnh", tip: "Đầu lưỡi cong lên ngạc cứng như âm 'zh', nén hơi thật mạnh rồi bật tung ra ngoài.", sound: "chī", example: { zh: "吃饭", pinyin: "chīfàn", vi: "Ăn cơm" } },
      { letter: "sh", name: "sh (sơ uốn lưỡi)", group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 's' uốn cong lưỡi sâu", tip: "Đầu lưỡi cong lên ngạc cứng tạo khe hở, luồng khí ma sát êm đi qua.", sound: "shī", example: { zh: "什么", pinyin: "shénme", vi: "Cái gì" } },
      { letter: "r", name: "r (rư uốn lưỡi)", group: "Âm cuộn lưỡi (Thiệt tiêm hậu âm)", read: "Đọc như 'r' uốn cong lưỡi, giọng trầm êm (không rung lưỡi)", tip: "Đầu lưỡi cong lên ngạc cứng, dây thanh rung nhẹ, luồng khí ma sát thoát ra không rung.", sound: "rī", example: { zh: "认识", pinyin: "rènshi", vi: "Quen biết" } },
      { letter: "y", name: "y (i / di)", group: "Bán nguyên âm (Khởi đầu vần)", read: "Đọc như 'i' hoặc 'd' (miền Nam)", tip: "Được dùng để mở đầu các âm tiết bắt đầu bằng 'i' hoặc 'ü' khi đứng đầu từ (như yi, ya, ye, yu).", sound: "yī", example: { zh: "衣服", pinyin: "yīfu", vi: "Quần áo" } },
      { letter: "w", name: "w (u / oa)", group: "Bán nguyên âm (Khởi đầu vần)", read: "Đọc như 'u' hoặc 'oa' tròn môi", tip: "Được dùng để mở đầu các âm tiết bắt đầu bằng 'u' khi đứng đầu từ (như wu, wa, wo).", sound: "wū", example: { zh: "我们", pinyin: "wǒmen", vi: "Chúng tôi" } }
    ],

    // 36 VẬN MẪU (YUNMU - 韵母)
    finals: [
      { letter: "a", type: "Vận mẫu đơn", read: "Đọc như 'a' trong tiếng Việt", tip: "Miệng mở to, lưỡi ở vị trí thấp tự nhiên.", sound: "ā", example: { zh: "大", pinyin: "dà", vi: "To lớn" } },
      { letter: "o", type: "Vận mẫu đơn", read: "Đọc như 'ua' hoặc 'ô' tròn môi", tip: "Môi tròn nhô về phía trước, cuống lưỡi nâng cao.", sound: "ō", example: { zh: "波", pinyin: "bō", vi: "Sóng" } },
      { letter: "e", type: "Vận mẫu đơn", read: "Đọc như 'ưa' hoặc 'ơ'", tip: "Miệng hé dẹt, phát âm lùi sâu vào họng. Rất nhiều người mới học nhầm sang 'e' Việt.", sound: "ē", example: { zh: "喝", pinyin: "hē", vi: "Uống" } },
      { letter: "i", type: "Vận mẫu đơn", read: "Đọc như 'i' (sau zh,ch,sh,r,z,c,s đọc là 'ư')", tip: "Khóe miệng kéo dẹt sang hai bên như mỉm cười.", sound: "yī", example: { zh: "你", pinyin: "nǐ", vi: "Bạn" } },
      { letter: "u", type: "Vận mẫu đơn", read: "Đọc như 'u' trong tiếng Việt", tip: "Môi chu tròn nhỏ, cuống lưỡi nâng cao về phía sau.", sound: "wū", example: { zh: "路", pinyin: "lù", vi: "Con đường" } },
      { letter: "ü", type: "Vận mẫu đơn", read: "Đọc tròn môi giữa 'uy' và 'u'", tip: "Khẩu hình tròn như huýt sáo, cố định môi và phát âm 'i'.", sound: "yǖ", example: { zh: "绿", pinyin: "lǜ", vi: "Màu xanh lá" } },
      { letter: "ai", type: "Vận mẫu kép", read: "Đọc như 'ai' trong tiếng Việt", tip: "Bắt đầu từ âm 'a' rồi trượt nhanh và êm sang 'i'.", sound: "āi", example: { zh: "白", pinyin: "bái", vi: "Trắng" } },
      { letter: "ei", type: "Vận mẫu kép", read: "Đọc như 'ây' trong tiếng Việt", tip: "Bắt đầu từ âm 'e' rồi trượt êm sang 'i'.", sound: "ēi", example: { zh: "北", pinyin: "běi", vi: "Phía Bắc" } },
      { letter: "ui", type: "Vận mẫu kép", read: "Đọc như 'uây' trong tiếng Việt", tip: "Thực chất là 'uei', bắt đầu từ 'u' lướt qua 'e' đến 'i'.", sound: "uī", example: { zh: "水", pinyin: "shuǐ", vi: "Nước" } },
      { letter: "ao", type: "Vận mẫu kép", read: "Đọc như 'ao' trong tiếng Việt", tip: "Mở miệng âm 'a' rồi thu tròn môi sang âm 'o'.", sound: "āo", example: { zh: "高", pinyin: "gāo", vi: "Cao" } },
      { letter: "ou", type: "Vận mẫu kép", read: "Đọc như 'âu' trong tiếng Việt", tip: "Bắt đầu từ âm 'o' rồi thu tròn môi chuyển sang 'u'.", sound: "ōu", example: { zh: "狗", pinyin: "gǒu", vi: "Con chó" } },
      { letter: "iu", type: "Vận mẫu kép", read: "Đọc như 'yêu' trong tiếng Việt", tip: "Thực chất là 'iou', bắt đầu từ 'i' lướt sang 'u'.", sound: "iū", example: { zh: "九", pinyin: "jiǔ", vi: "Số 9" } },
      { letter: "ie", type: "Vận mẫu kép", read: "Đọc như 'dia' hoặc 'i-ê'", tip: "Bắt đầu từ âm 'i' rồi lướt sang âm 'ê'.", sound: "iē", example: { zh: "写", pinyin: "xiě", vi: "Viết" } },
      { letter: "üe", type: "Vận mẫu kép", read: "Đọc như 'uy-ê'", tip: "Bắt đầu từ âm 'ü' tròn môi rồi lướt sang âm 'ê'.", sound: "yuē", example: { zh: "月", pinyin: "yuè", vi: "Mặt trăng / tháng" } },
      { letter: "er", type: "Vận mẫu đặc biệt", read: "Đọc như 'ơ' kết hợp uốn cong đầu lưỡi", tip: "Phát âm 'e' đồng thời cuộn đầu lưỡi lên ngạc cứng.", sound: "ēr", example: { zh: "二", pinyin: "èr", vi: "Số 2" } },
      { letter: "ia", type: "Vận mẫu kép", read: "Đọc như 'ia' trong tiếng Việt", tip: "Bắt đầu từ âm 'i' rồi mở rộng miệng sang 'a'.", sound: "yā", example: { zh: "家", pinyin: "jiā", vi: "Nhà" } },
      { letter: "ua", type: "Vận mẫu kép", read: "Đọc như 'oa' trong tiếng Việt", tip: "Bắt đầu từ âm 'u' tròn môi rồi mở rộng miệng sang 'a'.", sound: "wā", example: { zh: "花", pinyin: "huā", vi: "Hoa" } },
      { letter: "uo", type: "Vận mẫu kép", read: "Đọc như 'ua' hoặc 'u-ô'", tip: "Bắt đầu từ âm 'u' tròn môi rồi lướt sang 'o'.", sound: "wō", example: { zh: "桌", pinyin: "zhuō", vi: "Bàn" } },
      { letter: "uai", type: "Vận mẫu kép", read: "Đọc như 'oai' trong tiếng Việt", tip: "Bắt đầu từ 'u' lướt nhanh sang 'a' và kết thúc ở 'i'.", sound: "wāi", example: { zh: "快", pinyin: "kuài", vi: "Nhanh" } },
      { letter: "an", type: "Vận mẫu mũi trước", read: "Đọc như 'an' trong tiếng Việt", tip: "Bắt đầu từ 'a', kết thúc áp đầu lưỡi lên nướu răng trên.", sound: "ān", example: { zh: "看", pinyin: "kàn", vi: "Nhìn" } },
      { letter: "en", type: "Vận mẫu mũi trước", read: "Đọc như 'ân' trong tiếng Việt", tip: "Bắt đầu từ 'e' (ưa) rồi đưa đầu lưỡi lên nướu trên.", sound: "ēn", example: { zh: "门", pinyin: "mén", vi: "Cửa" } },
      { letter: "in", type: "Vận mẫu mũi trước", read: "Đọc như 'in' trong tiếng Việt", tip: "Bắt đầu từ 'i' rồi đưa đầu lưỡi lên nướu trên chặn khí.", sound: "yīn", example: { zh: "新", pinyin: "xīn", vi: "Mới" } },
      { letter: "un", type: "Vận mẫu mũi trước", read: "Đọc như 'uân' trong tiếng Việt", tip: "Thực chất là 'uen', bắt đầu từ 'u' lướt sang 'en'.", sound: "wēn", example: { zh: "春", pinyin: "chūn", vi: "Mùa xuân" } },
      { letter: "ün", type: "Vận mẫu mũi trước", read: "Đọc như 'uyn' tròn môi", tip: "Bắt đầu từ 'ü' tròn môi rồi đưa lưỡi lên tạo âm mũi 'n'.", sound: "yūn", example: { zh: "云", pinyin: "yún", vi: "Mây" } },
      { letter: "ian", type: "Vận mẫu mũi trước", read: "Đọc như 'iên' trong tiếng Việt", tip: "Bắt đầu từ 'i' rồi lướt qua 'ê' sang 'n' (không đọc là i-an).", sound: "yān", example: { zh: "见", pinyin: "jiàn", vi: "Gặp" } },
      { letter: "uan", type: "Vận mẫu mũi trước", read: "Đọc như 'oan' trong tiếng Việt", tip: "Bắt đầu từ 'u' tròn môi rồi mở sang 'an'.", sound: "wān", example: { zh: "关", pinyin: "guān", vi: "Đóng" } },
      { letter: "üan", type: "Vận mẫu mũi trước", read: "Đọc như 'uyên' tròn môi", tip: "Bắt đầu từ 'ü' tròn môi rồi lướt sang 'an' (đọc thành uyên).", sound: "yuān", example: { zh: "远", pinyin: "yuǎn", vi: "Xa" } },
      { letter: "ang", type: "Vận mẫu mũi sau", read: "Đọc như 'ang' trong tiếng Việt", tip: "Mở rộng miệng phát âm 'a', cuống lưỡi nâng lên ngạc mềm.", sound: "āng", example: { zh: "忙", pinyin: "máng", vi: "Bận rộn" } },
      { letter: "eng", type: "Vận mẫu mũi sau", read: "Đọc như 'âng' trong tiếng Việt", tip: "Phát âm 'e' rồi nâng cuống lưỡi lên tạo âm mũi sau.", sound: "ēng", example: { zh: "冷", pinyin: "lěng", vi: "Lạnh" } },
      { letter: "ing", type: "Vận mẫu mũi sau", read: "Đọc như 'inh' trong tiếng Việt", tip: "Phát âm 'i' kéo dài kết hợp âm mũi sau 'ng'.", sound: "yīng", example: { zh: "听", pinyin: "tīng", vi: "Nghe" } },
      { letter: "ong", type: "Vận mẫu mũi sau", read: "Đọc như 'ung' tròn môi", tip: "Môi chu tròn, nâng cuống lưỡi lên ngạc mềm.", sound: "ōng", example: { zh: "红", pinyin: "hóng", vi: "Màu đỏ" } },
      { letter: "iang", type: "Vận mẫu mũi sau", read: "Đọc như 'iang' trong tiếng Việt", tip: "Bắt đầu từ 'i' rồi lướt nhanh sang 'ang'.", sound: "yāng", example: { zh: "想", pinyin: "xiǎng", vi: "Muốn / nhớ" } },
      { letter: "uang", type: "Vận mẫu mũi sau", read: "Đọc như 'oang' trong tiếng Việt", tip: "Bắt đầu từ 'u' tròn môi rồi mở sang 'ang'.", sound: "wāng", example: { zh: "黄", pinyin: "huáng", vi: "Màu vàng" } },
      { letter: "iong", type: "Vận mẫu mũi sau", read: "Đọc như 'i-ung' tròn môi", tip: "Bắt đầu từ 'i' rồi lướt nhanh sang 'ong'.", sound: "yōng", example: { zh: "用", pinyin: "yòng", vi: "Dùng" } },
      { letter: "ueng", type: "Vận mẫu mũi sau", read: "Đọc như 'uâng' trong tiếng Việt", tip: "Bắt đầu từ 'u' tròn môi rồi lướt sang 'eng'.", sound: "wēng", example: { zh: "翁", pinyin: "wēng", vi: "Ông lão" } }
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
        example: { zh: "妈", pinyin: "mā", vi: "Mẹ (thanh 1)" },
        compare: [
          { pinyin: "mā", zh: "妈", vi: "Mẹ" },
          { pinyin: "bā", zh: "八", vi: "Số 8" },
          { pinyin: "tā", zh: "他", vi: "Anh ấy" }
        ]
      },
      {
        toneNum: 2,
        symbol: "／ (á)",
        name: "Thanh 2 (Dương bình - 35)",
        pitch: "Cao độ 35",
        read: "Đi từ giữa vút lên cao, giống dấu sắc",
        desc: "Bắt đầu từ tầm trung (mức 3) rồi vút mạnh lên đỉnh (mức 5), tựa như khi hỏi ngạc nhiên: 'Hả?'.",
        example: { zh: "麻", pinyin: "má", vi: "Cây gai (thanh 2)" },
        compare: [
          { pinyin: "má", zh: "麻", vi: "Cây gai" },
          { pinyin: "bá", zh: "拔", vi: "Nhổ / rút" },
          { pinyin: "tá", zh: "达", vi: "Đạt được" }
        ]
      },
      {
        toneNum: 3,
        symbol: "∨ (ǎ)",
        name: "Thanh 3 (Thượng thanh - 214)",
        pitch: "Cao độ 214",
        read: "Hạ sâu xuống đáy rồi bật nhẹ lên",
        desc: "Xuống sâu nhất cổ họng (mức 1) rồi lượn nhẹ lên mức 4. Giống sự kết hợp giữa dấu hỏi và dấu nặng.",
        example: { zh: "马", pinyin: "mǎ", vi: "Con ngựa (thanh 3)" },
        compare: [
          { pinyin: "mǎ", zh: "马", vi: "Con ngựa" },
          { pinyin: "bǎ", zh: "把", vi: "Cầm / nắm" },
          { pinyin: "tǎ", zh: "塔", vi: "Cây tháp" }
        ]
      },
      {
        toneNum: 4,
        symbol: "＼ (à)",
        name: "Thanh 4 (Khứ thanh - 51)",
        pitch: "Cao độ 51",
        read: "Rơi từ cao nhất xuống thấp nhất, dứt khoát",
        desc: "Phát âm dứt khoát, giọng hạ thật nhanh và mạnh từ đỉnh (mức 5) xuống đáy (mức 1) như ra lệnh.",
        example: { zh: "骂", pinyin: "mà", vi: "Mắng chửi (thanh 4)" },
        compare: [
          { pinyin: "mà", zh: "骂", vi: "Mắng mỏ" },
          { pinyin: "bà", zh: "爸", vi: "Bố / ba" },
          { pinyin: "tà", zh: "踏", vi: "Giẫm lên" }
        ]
      },
      {
        toneNum: 5,
        symbol: "· (a)",
        name: "Khinh thanh (Neutral tone)",
        pitch: "Ngắn, nhẹ",
        read: "Đọc thật nhẹ, ngắn và êm",
        desc: "Không mang dấu thanh điệu, đọc lướt qua rất nhanh, phụ thuộc vào cao độ của âm tiết đứng liền trước.",
        example: { zh: "吗", pinyin: "ma", vi: "Không? (trợ từ)" },
        compare: [
          { pinyin: "bàba", zh: "爸爸", vi: "Bố (chữ ba thứ 2 là khinh thanh)" },
          { pinyin: "māma", zh: "妈妈", vi: "Mẹ (chữ ma thứ 2 là khinh thanh)" },
          { pinyin: "shénme", zh: "什么", vi: "Cái gì" }
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
    currentTab: 'alphabet', // 'alphabet' | 'initials' | 'finals' | 'tones' | 'rules' | 'radicals' | 'quiz'
    searchQuery: '',
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
            <h2><span>🔤</span> Bảng Chữ Cái Tiếng Trung & Ngữ Âm Toàn Diện</h2>
            <span class="py-universal-badge">Nền tảng căn bản • Dành cho mọi cấp độ</span>
          </div>
          <p>Hệ thống văn tự & ngữ âm nhập môn chuẩn Bắc Kinh: 26 chữ cái La-tinh Pinyin, 23 Thanh mẫu, 36 Vận mẫu, 4 Thanh điệu và 214 Bộ thủ cấu tạo chữ Hán.</p>
        </div>

        <div class="py-hsk-note-banner">
          <span class="py-note-icon">💡</span>
          <div class="py-note-body">
            <b>Lưu ý quan trọng cho người học:</b>
            <p>Bảng chữ cái Bính âm (Pinyin) và 214 Bộ thủ chữ Hán là kiến thức nền tảng chung của toàn bộ tiếng Trung, được áp dụng đồng nhất và <strong>hoàn toàn không phân chia theo cấp độ HSK</strong> (từ vựng HSK 1 đến HSK 6 đều được cấu tạo từ các âm và bộ thủ này).</p>
          </div>
        </div>

        <div class="py-stats-row">
          <div class="py-stat-card">
            <b>26</b>
            <span>Chữ cái A-Z (字母)</span>
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
            <span>Bộ thủ chữ Hán (部首)</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="py-tabs-nav" id="py-tabs-nav" role="tablist" aria-label="Phân loại ngữ âm & văn tự">
        <button class="py-tab-btn active" data-tab="alphabet">🔤 26 Chữ Cái (A-Z)</button>
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
        <input type="text" id="py-search-input" placeholder="Tìm kiếm nhanh chữ cái, âm đọc, bộ thủ hoặc ví dụ..." autocomplete="off">
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
      searchBar.style.display = (PY.currentTab === 'alphabet' || PY.currentTab === 'initials' || PY.currentTab === 'finals' || PY.currentTab === 'radicals') ? 'flex' : 'none';
    }

    if (PY.currentTab === 'alphabet') {
      renderAlphabet(content);
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

    attachAudioListeners(content);
  }

  // 1. Render 26 Chữ Cái La-tinh Pinyin (A-Z)
  function renderAlphabet(container) {
    let items = PY_DATA.alphabet26;
    if (PY.searchQuery) {
      items = items.filter(it => 
        it.char.toLowerCase().includes(PY.searchQuery) ||
        it.name.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
        it.role.toLowerCase().includes(PY.searchQuery) ||
        (it.ex && (it.ex.zh.includes(PY.searchQuery) || it.ex.vi.toLowerCase().includes(PY.searchQuery)))
      );
    }

    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">BẢNG CHỮ CÁI BÍNH ÂM (汉语拼音字母表)</div>
        <h3>26 Chữ cái La-tinh trong hệ thống Hán ngữ Bính âm</h3>
        <p>Hệ thống 26 chữ cái chính thức dùng để phiên âm âm đọc của tất cả chữ Hán. Bấm vào biểu tượng loa để nghe âm đọc chuẩn!</p>
      </div>

      <div class="py-alphabet-grid">
        ${items.map(it => `
          <div class="py-letter-card" data-sound="${it.sound}">
            <div class="py-letter-top">
              <span class="py-letter-main">${it.char}</span>
              <span class="py-letter-role">${it.role}</span>
              <button class="py-audio-mini-btn" type="button" data-sound="${it.sound}" title="Nghe phát âm">🔊</button>
            </div>
            <div class="py-letter-name">
              <span class="py-name-tag">Tên gọi:</span>
              <b>${it.name}</b>
              <span class="py-pinyin-sub">/${it.pinyin}/</span>
            </div>
            <div class="py-letter-read">
              <strong>Cách đọc:</strong> ${it.read}
            </div>
            <div class="py-letter-tip">
              <em>Mẹo:</em> ${it.tip}
            </div>
            <div class="py-letter-example" data-sound="${it.ex.zh}">
              <span class="py-ex-tag">Ví dụ:</span>
              <b class="py-ex-zh">${it.ex.zh}</b>
              <span class="py-ex-py">${it.ex.pinyin}</span>
              <span class="py-ex-vi">(${it.ex.vi})</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 2. Render 23 Thanh Mẫu (Initials)
  function renderInitials(container) {
    let items = PY_DATA.initials;
    if (PY.searchQuery) {
      items = items.filter(it => 
        it.letter.toLowerCase().includes(PY.searchQuery) ||
        it.name.toLowerCase().includes(PY.searchQuery) ||
        it.group.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
        (it.example && (it.example.zh.includes(PY.searchQuery) || it.example.vi.toLowerCase().includes(PY.searchQuery)))
      );
    }

    // Nhóm theo vị trí phát âm
    const groups = {};
    items.forEach(it => {
      if (!groups[it.group]) groups[it.group] = [];
      groups[it.group].push(it);
    });

    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">THANH MẪU (声母 - SHENGMU)</div>
        <h3>23 Phụ âm đầu chuẩn tiếng Hán</h3>
        <p>Thanh mẫu là phụ âm bắt đầu của mỗi âm tiết trong tiếng Trung. Phân loại theo cấu tạo vòm miệng và cơ chế bật hơi.</p>
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

  // 3. Render 36 Vận Mẫu (Finals)
  function renderFinals(container) {
    let items = PY_DATA.finals;
    if (PY.searchQuery) {
      items = items.filter(it => 
        it.letter.toLowerCase().includes(PY.searchQuery) ||
        it.type.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
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
        <h3>36 Nguyên âm và vần chuẩn tiếng Hán</h3>
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

  // 4. Render Thanh Điệu (Tones)
  function renderTones(container) {
    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">THANH ĐIỆU (声调 - SHENGDIAO)</div>
        <h3>4 Thanh điệu cơ bản & Khinh thanh</h3>
        <p>Tiếng Trung là ngôn ngữ có thanh điệu. Cùng một âm tiết nhưng khác thanh điệu sẽ mang nghĩa hoàn toàn khác nhau!</p>
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
              <span class="py-line-label">Thanh 1 (55): mā</span>
            </div>
            <div class="py-tone-line py-t2" title="Thanh 2: Đi lên 35">
              <span class="py-line-label">Thanh 2 (35): má</span>
            </div>
            <div class="py-tone-line py-t3" title="Thanh 3: Hạ xuống rồi lên 214">
              <span class="py-line-label">Thanh 3 (214): mǎ</span>
            </div>
            <div class="py-tone-line py-t4" title="Thanh 4: Rơi dứt khoát 51">
              <span class="py-line-label">Thanh 4 (51): mà</span>
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
                <span>Mẫu đại diện:</span>
                <b>${t.example.zh}</b>
                <em>${t.example.pinyin}</em>
                <small>${t.example.vi}</small>
                <span class="py-ex-sound">🔊</span>
              </div>
            </div>
            <div class="py-compare-box">
              <span>Bấm nghe so sánh:</span>
              <div class="py-compare-chips">
                ${t.compare.map(c => `
                  <button class="py-chip" type="button" data-sound="${c.zh}">
                    <b>${c.pinyin}</b> (${c.zh})
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 5. Render Quy Tắc Biến Điệu
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

  // 6. Render 214 Bộ Thủ Chữ Hán & Nét Cơ Bản
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
              <button class="py-mini-sound" type="button" data-sound="${r.char}" title="Phát âm">🔊</button>
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
        attachAudioListeners(container);
      });
    });
  }

  // 7. Render Trắc Nghiệm Nghe Pinyin (Quiz)
  function renderQuiz(container) {
    const allItems = [...PY_DATA.alphabet26, ...PY_DATA.initials, ...PY_DATA.finals];
    
    container.innerHTML = `
      <div class="py-section-intro">
        <div class="py-section-badge">LUYỆN PHẢN XẠ ÂM THANH</div>
        <h3>Trắc nghiệm nghe & nhận diện Pinyin</h3>
        <p>Bấm nút nghe âm ngẫu nhiên và chọn đúng chữ cái Pinyin tương ứng để rèn luyện thính giác tiếng Trung.</p>
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
        return `
          <button class="py-opt-btn" type="button" data-val="${displayLabel}">
            <b>${displayLabel}</b>
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

  // Audio trigger utility
  function attachAudioListeners(container) {
    container.querySelectorAll('[data-sound]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = el.dataset.sound;
        playSound(text);
      });
    });
  }

  // Export methods
  PY.init = init;
  PY.playSound = playSound;
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
