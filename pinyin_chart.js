// ==============================================================
// PINYIN CHART & PRONUNCIATION ENGINE (BẢNG NGỮ ÂM PINYIN & CÁCH ĐỌC)
// Đầy đủ 23 Thanh mẫu, 36 Vận mẫu, 4 Thanh điệu, Quy tắc biến điệu & Luyện nghe
// ==============================================================

(() => {
  const PY_DATA = {
    // 23 THANH MẪU (SHENGMU - 声母)
    initials: [
      {
        letter: "b",
        name: "b (bô / p nhẹ)",
        group: "Âm hai môi (Song thần âm)",
        read: "Đọc như 'p' trong tiếng Việt (vô thanh, không bật hơi)",
        tip: "Hai môi khép chặt chặn luồng khí, sau đó hé mở nhẹ nhàng cho hơi thoát ra tự nhiên. Tuyệt đối không bật hơi mạnh.",
        sound: "bō",
        example: { zh: "爸爸", pinyin: "bàba", vi: "Bố / ba" }
      },
      {
        letter: "p",
        name: "p (pô bật hơi)",
        group: "Âm hai môi (Song thần âm)",
        read: "Đọc như 'p' bật hơi rất mạnh",
        tip: "Hai môi ngậm chặt, nén luồng khí lại rồi bật mạnh dứt khoát ra ngoài. Đặt tờ giấy trước miệng sẽ thấy giấy bay mạnh.",
        sound: "pō",
        example: { zh: "苹果", pinyin: "píngguǒ", vi: "Quả táo" }
      },
      {
        letter: "m",
        name: "m (mô)",
        group: "Âm hai môi (Song thần âm)",
        read: "Đọc giống âm 'm' trong tiếng Việt",
        tip: "Hai môi khép lại, luồng khí thoát ra qua đường mũi, dây thanh quản rung đều.",
        sound: "mō",
        example: { zh: "妈妈", pinyin: "māma", vi: "Mẹ" }
      },
      {
        letter: "f",
        name: "f (phô)",
        group: "Âm răng môi (Thần xỉ âm)",
        read: "Đọc giống âm 'ph / f' trong tiếng Việt",
        tip: "Răng cửa hàm trên chạm nhẹ vào viền môi dưới, luồng khí ma sát thoát ra ngoài.",
        sound: "fō",
        example: { zh: "飞机", pinyin: "fēijī", vi: "Máy bay" }
      },
      {
        letter: "d",
        name: "d (tơ)",
        group: "Âm đầu lưỡi giữa (Thiệt tiêm trung âm)",
        read: "Đọc giống âm 't' trong tiếng Việt (không bật hơi)",
        tip: "Đầu lưỡi dán chặt vào lợi trên chặn luồng khí, sau đó hạ nhanh xuống cho khí thoát ra. Không bật hơi.",
        sound: "dē",
        example: { zh: "弟弟", pinyin: "dìdi", vi: "Em trai" }
      },
      {
        letter: "t",
        name: "t (thơ)",
        group: "Âm đầu lưỡi giữa (Thiệt tiêm trung âm)",
        read: "Đọc giống âm 'th' trong tiếng Việt (bật hơi mạnh)",
        tip: "Vị trí lưỡi giống âm 'd' nhưng bật luồng hơi từ cuống họng ra ngoài rất mạnh.",
        sound: "tē",
        example: { zh: "天气", pinyin: "tiānqì", vi: "Thời tiết" }
      },
      {
        letter: "n",
        name: "n (nơ)",
        group: "Âm đầu lưỡi giữa (Thiệt tiêm trung âm)",
        read: "Đọc giống âm 'n' trong tiếng Việt (âm mũi)",
        tip: "Đầu lưỡi dán vào lợi trên, ngạc mềm hạ xuống để luồng hơi thoát ra qua khoang mũi.",
        sound: "nē",
        example: { zh: "你好", pinyin: "nǐ hǎo", vi: "Xin chào" }
      },
      {
        letter: "l",
        name: "l (lơ)",
        group: "Âm đầu lưỡi giữa (Thiệt tiêm trung âm)",
        read: "Đọc giống âm 'l' trong tiếng Việt (âm bên)",
        tip: "Đầu lưỡi chạm lợi trên, luồng hơi luồn qua hai bên mép lưỡi thoát ra ngoài.",
        sound: "lē",
        example: { zh: "老师", pinyin: "lǎoshī", vi: "Thầy cô giáo" }
      },
      {
        letter: "g",
        name: "g (cơ / kơ)",
        group: "Âm cuống lưỡi (Thiệt căn âm)",
        read: "Đọc giống âm 'c / k' trong tiếng Việt (không bật hơi)",
        tip: "Cuống lưỡi nâng lên chạm ngạc mềm chặn khí, sau đó hạ xuống để khí bật nhẹ thoát ra. Không bật hơi.",
        sound: "gē",
        example: { zh: "哥哥", pinyin: "gēge", vi: "Anh trai" }
      },
      {
        letter: "k",
        name: "k (khơ bật hơi)",
        group: "Âm cuống lưỡi (Thiệt căn âm)",
        read: "Đọc giống 'kh' nhưng bật hơi mạnh từ cuống họng",
        tip: "Vị trí giống 'g' nhưng nén luồng hơi sâu trong cuống họng rồi bật mạnh ra ngoài.",
        sound: "kē",
        example: { zh: "看书", pinyin: "kànshū", vi: "Đọc sách" }
      },
      {
        letter: "h",
        name: "h (hơ nhẹ)",
        group: "Âm cuống lưỡi (Thiệt căn âm)",
        read: "Đọc giữa âm 'h' và 'kh' nhẹ",
        tip: "Cuống lưỡi hơi nâng gần ngạc mềm, luồng khí ma sát nhẹ nhàng thoát ra, phát âm êm hơn 'kh' tiếng Việt.",
        sound: "hē",
        example: { zh: "喝水", pinyin: "hē shuǐ", vi: "Uống nước" }
      },
      {
        letter: "j",
        name: "j (chi)",
        group: "Âm mặt lưỡi (Thiệt diện âm - đi với i, ü)",
        read: "Đọc giống âm 'ch' nhẹ (không bật hơi, kéo mép môi)",
        tip: "Mặt lưỡi trước áp sát vòm ngạc cứng, hai khóe miệng hơi kéo sang hai bên rồi mở nhẹ. Không bật hơi.",
        sound: "jī",
        example: { zh: "家", pinyin: "jiā", vi: "Nhà / gia đình" }
      },
      {
        letter: "q",
        name: "q (chi bật hơi)",
        group: "Âm mặt lưỡi (Thiệt diện âm - đi với i, ü)",
        read: "Đọc giống âm 'ch' bật luồng hơi rất mạnh",
        tip: "Vị trí miệng giống 'j' nhưng nén khí và bật luồng hơi sắc bén, dứt khoát qua kẽ răng.",
        sound: "qī",
        example: { zh: "去", pinyin: "qù", vi: "Đi" }
      },
      {
        letter: "x",
        name: "x (xi)",
        group: "Âm mặt lưỡi (Thiệt diện âm - đi với i, ü)",
        read: "Đọc giống âm 'x' nhẹ trong tiếng Việt",
        tip: "Mặt lưỡi trước nâng sát ngạc cứng tạo khe hẹp, luồng khí ma sát êm ái thoát ra.",
        sound: "xī",
        example: { zh: "谢谢", pinyin: "xièxie", vi: "Cảm ơn" }
      },
      {
        letter: "z",
        name: "z (ch/ts thẳng lưỡi)",
        group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm: z, c, s)",
        read: "Đọc giống 'ch / ts' thẳng lưỡi (không bật hơi)",
        tip: "Đầu lưỡi đặt sát sau răng cửa trên rồi mở nhẹ ra. Giữ lưỡi thẳng phẳng, không uốn cong.",
        sound: "zī",
        example: { zh: "再见", pinyin: "zàijiàn", vi: "Tạm biệt" }
      },
      {
        letter: "c",
        name: "c (ts bật hơi)",
        group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm: z, c, s)",
        read: "Đọc giống 'ts' bật hơi mạnh qua kẽ răng",
        tip: "Răng khép hờ, đầu lưỡi chạm mặt sau răng cửa trên rồi bật luồng hơi ma sát mạnh xì ra ngoài.",
        sound: "cī",
        example: { zh: "菜", pinyin: "cài", vi: "Món ăn / rau" }
      },
      {
        letter: "s",
        name: "s (xì hơi thẳng lưỡi)",
        group: "Âm đầu lưỡi trước (Thiệt tiêm tiền âm: z, c, s)",
        read: "Đọc giống âm 'x' thẳng lưỡi xì nhẹ",
        tip: "Đầu lưỡi để gần mặt sau răng cửa dưới, luồng khí xì nhẹ nhàng qua kẽ răng.",
        sound: "sī",
        example: { zh: "三", pinyin: "sān", vi: "Số ba" }
      },
      {
        letter: "zh",
        name: "zh (tr uốn lưỡi)",
        group: "Âm uốn lưỡi (Thiệt tiêm hậu âm: zh, ch, sh, r)",
        read: "Uốn lưỡi đọc giống 'tr' trong tiếng Việt (không bật hơi)",
        tip: "Đầu lưỡi uốn cong lên chạm ngạc cứng (vòm họng trên), sau đó hạ nhẹ xuống cho khí thoát. Không bật hơi.",
        sound: "zhī",
        example: { zh: "中国", pinyin: "Zhōngguó", vi: "Trung Quốc" }
      },
      {
        letter: "ch",
        name: "ch (tr uốn lưỡi bật hơi)",
        group: "Âm uốn lưỡi (Thiệt tiêm hậu âm: zh, ch, sh, r)",
        read: "Uốn lưỡi đọc giống 'tr' và bật hơi cực mạnh",
        tip: "Đầu lưỡi cong lên ngạc cứng, nén luồng hơi lại rồi bật luồng gió mạnh dũng mãnh ra ngoài.",
        sound: "chī",
        example: { zh: "吃饭", pinyin: "chīfàn", vi: "Ăn cơm" }
      },
      {
        letter: "sh",
        name: "sh (s uốn lưỡi nặng)",
        group: "Âm uốn lưỡi (Thiệt tiêm hậu âm: zh, ch, sh, r)",
        read: "Uốn lưỡi đọc giống 's' nặng trong tiếng Việt",
        tip: "Đầu lưỡi uốn sát ngạc cứng tạo khe hẹp, luồng khí ma sát mạnh thoát ra ngoài.",
        sound: "shī",
        example: { zh: "书", pinyin: "shū", vi: "Sách" }
      },
      {
        letter: "r",
        name: "r (r uốn lưỡi rung)",
        group: "Âm uốn lưỡi (Thiệt tiêm hậu âm: zh, ch, sh, r)",
        read: "Uốn lưỡi đọc giống 'r' (hoặc giữa 'r' và 'd')",
        tip: "Khẩu hình giống 'sh' nhưng thanh quản rung (hữu thanh), phát ra âm 'r' trầm ấm.",
        sound: "rī",
        example: { zh: "人", pinyin: "rén", vi: "Người" }
      },
      {
        letter: "y",
        name: "y (d/i bán nguyên âm)",
        group: "Bán nguyên âm / Phụ âm đặc biệt",
        read: "Đọc tương tự 'i / d' (biến thể của i khi đứng đầu)",
        tip: "Được dùng khi âm tiết bắt đầu bằng nguyên âm 'i' mà không có thanh mẫu đi trước.",
        sound: "yī",
        example: { zh: "一", pinyin: "yī", vi: "Số một" }
      },
      {
        letter: "w",
        name: "w (u/qu bán nguyên âm)",
        group: "Bán nguyên âm / Phụ âm đặc biệt",
        read: "Đọc tương tự 'u / qu' (biến thể của u khi đứng đầu)",
        tip: "Được dùng khi âm tiết bắt đầu bằng nguyên âm 'u' mà không có thanh mẫu đi trước.",
        sound: "wū",
        example: { zh: "我", pinyin: "wǒ", vi: "Tôi" }
      }
    ],

    // 36 VẬN MẪU (YUNMU - 韵母)
    finals: [
      // Đơn nguyên âm (6)
      {
        letter: "a",
        name: "a",
        group: "Vận mẫu đơn (Đơn nguyên âm)",
        read: "Đọc giống âm 'a' trong tiếng Việt",
        tip: "Miệng mở rộng tự nhiên, lưỡi nằm ở vị trí thấp nhất, dây thanh rung.",
        sound: "ā",
        example: { zh: "他", pinyin: "tā", vi: "Anh ấy" }
      },
      {
        letter: "o",
        name: "o",
        group: "Vận mẫu đơn (Đơn nguyên âm)",
        read: "Đọc giống âm 'ô' tròn môi",
        tip: "Môi tròn lại, phần sau lưỡi nâng lên cao về phía ngạc mềm.",
        sound: "ō",
        example: { zh: "破", pinyin: "pò", vi: "Rách / vỡ" }
      },
      {
        letter: "e",
        name: "e",
        group: "Vận mẫu đơn (Đơn nguyên âm)",
        read: "Đọc giống âm 'ưa / ơ' trong tiếng Việt",
        tip: "Miệng hé mở vừa phải, khóe môi kéo nhẹ sang hai bên, lưỡi lùi về sau.",
        sound: "ē",
        example: { zh: "喝", pinyin: "hē", vi: "Uống" }
      },
      {
        letter: "i",
        name: "i",
        group: "Vận mẫu đơn (Đơn nguyên âm)",
        read: "Đọc là 'i' (sau z,c,s,zh,ch,sh,r thì đọc là 'ư')",
        tip: "Miệng dẹt sang hai bên. ĐẶC BIỆT: khi đi sau 7 âm uốn lưỡi và chân răng (z, c, s, zh, ch, sh, r) thì phải đọc thành 'ư' (ví dụ shì, zì).",
        sound: "yī",
        example: { zh: "七", pinyin: "qī", vi: "Số bảy" }
      },
      {
        letter: "u",
        name: "u",
        group: "Vận mẫu đơn (Đơn nguyên âm)",
        read: "Đọc giống âm 'u' trong tiếng Việt",
        tip: "Môi chúm tròn và nhô ra phía trước, phần sau lưỡi nâng cao.",
        sound: "wū",
        example: { zh: "不", pinyin: "bù", vi: "Không" }
      },
      {
        letter: "ü",
        name: "ü",
        group: "Vận mẫu đơn (Đơn nguyên âm)",
        read: "Đọc giống âm 'uy' nhưng giữ tròn môi cố định",
        tip: "Khẩu hình giống như huýt sáo, chúm môi tròn lại và giữ nguyên hình tròn từ đầu đến cuối không đổi.",
        sound: "yǖ",
        example: { zh: "绿", pinyin: "lǜ", vi: "Màu xanh lá" }
      },

      // Nguyên âm kép (13)
      {
        letter: "ai",
        name: "ai",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'ai' trong tiếng Việt",
        tip: "Bắt đầu từ âm 'a' rồi trượt nhanh và mượt mà sang âm 'i'.",
        sound: "āi",
        example: { zh: "爱", pinyin: "ài", vi: "Yêu" }
      },
      {
        letter: "ei",
        name: "ei",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'ây' trong tiếng Việt",
        tip: "Bắt đầu từ âm 'e' hé mở rồi lướt sang âm 'i'.",
        sound: "ēi",
        example: { zh: "给", pinyin: "gěi", vi: "Cho" }
      },
      {
        letter: "ui",
        name: "ui (uei)",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'uây' trong tiếng Việt",
        tip: "Là dạng viết tắt của 'uei', bắt đầu bằng 'u' rồi lướt qua 'e' đến 'i'.",
        sound: "wēi",
        example: { zh: "对", pinyin: "duì", vi: "Đúng" }
      },
      {
        letter: "ao",
        name: "ao",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'ao' trong tiếng Việt",
        tip: "Bắt đầu từ âm 'a' mở to rồi lướt sang âm 'o' tròn môi.",
        sound: "āo",
        example: { zh: "高", pinyin: "gāo", vi: "Cao" }
      },
      {
        letter: "ou",
        name: "ou",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'âu / ôu' trong tiếng Việt",
        tip: "Bắt đầu từ âm 'o' rồi thu môi dần sang 'u'.",
        sound: "ōu",
        example: { zh: "头", pinyin: "tóu", vi: "Đầu" }
      },
      {
        letter: "iu",
        name: "iu (iou)",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'yêu' trong tiếng Việt",
        tip: "Là dạng viết tắt của 'iou', bắt đầu bằng 'i' rồi lướt sang 'u'.",
        sound: "yōu",
        example: { zh: "六", pinyin: "liù", vi: "Số sáu" }
      },
      {
        letter: "ie",
        name: "ie",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'iê' trong tiếng Việt",
        tip: "Bắt đầu từ âm 'i' dẹt môi rồi lướt nhanh sang âm 'e' hé mở.",
        sound: "yē",
        example: { zh: "姐", pinyin: "jiě", vi: "Chị gái" }
      },
      {
        letter: "üe",
        name: "üe",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'uyê' tròn môi",
        tip: "Khởi đầu bằng âm 'ü' chúm môi tròn rồi mở sang 'e'.",
        sound: "yuē",
        example: { zh: "月", pinyin: "yuè", vi: "Mặt trăng / tháng" }
      },
      {
        letter: "er",
        name: "er (uốn lưỡi)",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Vận mẫu uốn lưỡi đặc biệt, đọc là 'ơ' cong lưỡi",
        tip: "Phát âm 'e' đồng thời uốn cong đầu lưỡi lên vòm họng.",
        sound: "ēr",
        example: { zh: "二", pinyin: "èr", vi: "Số hai" }
      },
      {
        letter: "ia",
        name: "ia",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'ia' trong tiếng Việt",
        tip: "Bắt đầu từ 'i' rồi lướt nhanh sang 'a'.",
        sound: "yā",
        example: { zh: "家", pinyin: "jiā", vi: "Gia đình" }
      },
      {
        letter: "ua",
        name: "ua",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'oa' trong tiếng Việt",
        tip: "Bắt đầu từ 'u' tròn môi rồi mở to miệng sang 'a'.",
        sound: "wā",
        example: { zh: "花", pinyin: "huā", vi: "Hoa" }
      },
      {
        letter: "uo",
        name: "uo",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'ua / uô' trong tiếng Việt",
        tip: "Bắt đầu từ 'u' tròn môi rồi lướt sang 'o'.",
        sound: "wō",
        example: { zh: "国", pinyin: "guó", vi: "Quốc gia" }
      },
      {
        letter: "uai",
        name: "uai",
        group: "Vận mẫu kép (Nguyên âm kép)",
        read: "Đọc giống âm 'oai' trong tiếng Việt",
        tip: "Bắt đầu từ 'u' rồi lướt sang 'ai'.",
        sound: "wāi",
        example: { zh: "快", pinyin: "kuài", vi: "Nhanh" }
      },

      // Nguyên âm mũi trước (-n) (8)
      {
        letter: "an",
        name: "an",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'an' trong tiếng Việt",
        tip: "Bắt đầu từ 'a' rồi đầu lưỡi chạm lợi trên chặn khí sang 'n'.",
        sound: "ān",
        example: { zh: "看", pinyin: "kàn", vi: "Xem / nhìn" }
      },
      {
        letter: "en",
        name: "en",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'ơn / ân' trong tiếng Việt",
        tip: "Bắt đầu từ 'e' rồi dán đầu lưỡi lên lợi trên tạo âm mũi 'n'.",
        sound: "ēn",
        example: { zh: "门", pinyin: "mén", vi: "Cửa" }
      },
      {
        letter: "in",
        name: "in",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'in' trong tiếng Việt",
        tip: "Bắt đầu từ 'i' rồi đưa đầu lưỡi lên kết thúc bằng 'n'.",
        sound: "yīn",
        example: { zh: "新", pinyin: "xīn", vi: "Mới" }
      },
      {
        letter: "un",
        name: "un (uen)",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'uân' trong tiếng Việt",
        tip: "Bắt đầu từ 'u' rồi lướt qua 'e' và kết thúc bằng 'n'.",
        sound: "wēn",
        example: { zh: "问", pinyin: "wèn", vi: "Hỏi" }
      },
      {
        letter: "ün",
        name: "ün",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'uyên' tròn môi",
        tip: "Bắt đầu bằng 'ü' tròn môi rồi kết thúc ở âm mũi 'n'.",
        sound: "yūn",
        example: { zh: "云", pinyin: "yún", vi: "Mây" }
      },
      {
        letter: "ian",
        name: "ian",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'iên' trong tiếng Việt",
        tip: "Lưu ý ĐẶC BIỆT: 'ian' đọc là 'iên' chứ không phải 'i-an' (ví dụ tiān, qián).",
        sound: "yān",
        example: { zh: "天", pinyin: "tiān", vi: "Trời / ngày" }
      },
      {
        letter: "uan",
        name: "uan",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'oan' trong tiếng Việt",
        tip: "Bắt đầu từ 'u' rồi chuyển mượt mà sang 'an'.",
        sound: "wān",
        example: { zh: "关", pinyin: "guān", vi: "Đóng" }
      },
      {
        letter: "üan",
        name: "üan",
        group: "Vận mẫu mũi trước (-n)",
        read: "Đọc giống âm 'uyên' tròn môi",
        tip: "Bắt đầu từ 'ü' giữ tròn môi rồi kết thúc ở 'an' (nghe như uyên).",
        sound: "yuān",
        example: { zh: "远", pinyin: "yuǎn", vi: "Xa" }
      },

      // Nguyên âm mũi sau (-ng) (9)
      {
        letter: "ang",
        name: "ang",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'ang' mở to miệng",
        tip: "Bắt đầu từ 'a' mở to, sau đó gốc lưỡi nâng chạm ngạc mềm kết thúc bằng 'ng'.",
        sound: "āng",
        example: { zh: "忙", pinyin: "máng", vi: "Bận" }
      },
      {
        letter: "eng",
        name: "eng",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'âng' trong tiếng Việt",
        tip: "Bắt đầu từ 'e' rồi cuống lưỡi nâng lên chạm vòm sau kết thúc bằng 'ng'.",
        sound: "ēng",
        example: { zh: "冷", pinyin: "lěng", vi: "Lạnh" }
      },
      {
        letter: "ing",
        name: "ing",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'inh' trong tiếng Việt",
        tip: "Bắt đầu từ 'i' rồi cuống lưỡi khép lại kết thúc bằng 'ng'.",
        sound: "yīng",
        example: { zh: "明", pinyin: "míng", vi: "Sáng / rõ" }
      },
      {
        letter: "ong",
        name: "ong",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'ung' trong tiếng Việt",
        tip: "Bắt đầu từ 'o' tròn môi rồi kết thúc ở cuống họng bằng 'ng'.",
        sound: "ōng",
        example: { zh: "红", pinyin: "hóng", vi: "Màu đỏ" }
      },
      {
        letter: "iang",
        name: "iang",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'iang' trong tiếng Việt",
        tip: "Bắt đầu từ 'i' rồi lướt nhanh sang 'ang'.",
        sound: "yāng",
        example: { zh: "想", pinyin: "xiǎng", vi: "Nghĩ / muốn" }
      },
      {
        letter: "uang",
        name: "uang",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'oang' trong tiếng Việt",
        tip: "Bắt đầu từ 'u' rồi lướt nhanh sang 'ang'.",
        sound: "wāng",
        example: { zh: "黄", pinyin: "huáng", vi: "Màu vàng" }
      },
      {
        letter: "iong",
        name: "iong",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'iung' trong tiếng Việt",
        tip: "Bắt đầu từ 'i' rồi lướt nhanh sang 'ong' (ung).",
        sound: "yōng",
        example: { zh: "穷", pinyin: "qióng", vi: "Nghèo" }
      },
      {
        letter: "ueng",
        name: "ueng",
        group: "Vận mẫu mũi sau (-ng)",
        read: "Đọc giống âm 'uâng' trong tiếng Việt",
        tip: "Bắt đầu từ 'u' rồi lướt sang 'eng'.",
        sound: "wēng",
        example: { zh: "老翁", pinyin: "lǎowēng", vi: "Ông lão" }
      }
    ],

    // THANH ĐIỆU (4 THANH CHÍNH + KHINH THANH)
    tones: [
      {
        toneNum: 1,
        name: "Thanh 1 (Thanh ngang - 阴平)",
        mark: "— (ā)",
        pitch: "Cao độ: 55 (Cao & Phẳng)",
        desc: "Phát âm đều, cao và bằng phẳng từ đầu đến cuối. Ngân dài tự nhiên, giọng cao như nốt Sol.",
        exampleSyllable: "mā",
        exampleWord: { zh: "妈", pinyin: "mā", vi: "Mẹ" }
      },
      {
        toneNum: 2,
        name: "Thanh 2 (Thanh sắc / lên - 阳平)",
        mark: "ˊ (á)",
        pitch: "Cao độ: 35 (Từ trung bình lên cao)",
        desc: "Bắt đầu từ mức trung bình rồi vút lên cao, tương tự dấu sắc tiếng Việt nhưng kéo dài hơn.",
        exampleSyllable: "má",
        exampleWord: { zh: "麻", pinyin: "má", vi: "Cây gai" }
      },
      {
        toneNum: 3,
        name: "Thanh 3 (Thanh hỏi / võng - 上声)",
        mark: "ˇ (ǎ)",
        pitch: "Cao độ: 214 (Xuống thấp rồi lượn lên)",
        desc: "Bắt đầu ở mức thấp (2), hạ sâu xuống đáy (1) rồi hơi lượn nhẹ lên mức (4). Tương tự dấu hỏi lượn.",
        exampleSyllable: "mǎ",
        exampleWord: { zh: "马", pinyin: "mǎ", vi: "Con ngựa" }
      },
      {
        toneNum: 4,
        name: "Thanh 4 (Thanh rơi mạnh - 去声)",
        mark: "ˋ (à)",
        pitch: "Cao độ: 51 (Từ đỉnh cao rơi dứt khoát xuống đáy)",
        desc: "Phát âm dứt khoát, âm từ mức cao nhất (5) rơi thẳng tụt xuống đáy (1). Giống như vừa nói vừa dậm chân.",
        exampleSyllable: "mà",
        exampleWord: { zh: "骂", pinyin: "mà", vi: "Mắng" }
      },
      {
        toneNum: 0,
        name: "Khinh thanh (Thanh nhẹ - 轻声)",
        mark: "Không dấu (a)",
        pitch: "Ngắn, nhẹ, buông lơi",
        desc: "Không mang dấu, đọc ngắn và lướt nhẹ, rơi tự nhiên dựa vào thanh điệu đứng trước nó.",
        exampleSyllable: "ma",
        exampleWord: { zh: "妈妈", pinyin: "māma", vi: "Mẹ" }
      }
    ],

    // BỘ SO SÁNH 4 THANH ĐIỆU MẪU
    toneComparisons: [
      { base: "ma", list: ["mā", "má", "mǎ", "mà"] },
      { base: "ba", list: ["bā", "bá", "bǎ", "bà"] },
      { base: "yi", list: ["yī", "yí", "yǐ", "yì"] },
      { base: "wu", list: ["wū", "wú", "wǔ", "wù"] },
      { base: "hao", list: ["hāo", "háo", "hǎo", "hào"] }
    ],

    // QUY TẮC PHÁT ÂM & BIẾN ĐIỆU CỐT LÕI
    rules: [
      {
        title: "1. Biến điệu của hai Thanh 3 đi liền nhau (3 + 3 ➔ 2 + 3)",
        desc: "Khi hai âm tiết mang thanh 3 đứng cạnh nhau, âm tiết thứ nhất bắt buộc phải đọc biến điệu thành Thanh 2.",
        examples: [
          { origin: "你 nǐ + 好 hǎo", speak: "ní hǎo", vi: "Xin chào (đọc là ní hǎo)" },
          { origin: "可 kě + 以 yǐ", speak: "ké yǐ", vi: "Có thể (đọc là kéyǐ)" },
          { origin: "手 shǒu + 表 biǎo", speak: "shóu biǎo", vi: "Đồng hồ đeo tay (đọc là shóubiǎo)" },
          { origin: "很 hěn + 好 hǎo", speak: "hén hǎo", vi: "Rất tốt (đọc là hénhǎo)" }
        ]
      },
      {
        title: "2. Biến điệu của chữ '一' (yī)",
        desc: "Chữ 一 vốn mang thanh 1 (yī), nhưng sẽ đổi thành thanh 4 (yì) hoặc thanh 2 (yí) tùy thuộc vào âm đứng sau:",
        examples: [
          { origin: "Đứng độc lập hoặc số đếm", speak: "yī, èr, sān", vi: "Đọc thanh 1: 一 yī (số 1), 第一 dì-yī" },
          { origin: "Đứng trước thanh 1, 2, 3", speak: "yì tiān, yì qǐ", vi: "Biến thành thanh 4 (yì): 一天 yì tiān, 一起 yì qǐ" },
          { origin: "Đứng trước thanh 4", speak: "yí gè, yí yàng", vi: "Biến thành thanh 2 (yí): 一个 yí gè, 一样 yí yàng" }
        ]
      },
      {
        title: "3. Biến điệu của chữ '不' (bù)",
        desc: "Chữ 不 vốn mang thanh 4 (bù), nhưng khi đứng trước một âm tiết cũng mang thanh 4 thì phải biến thành thanh 2 (bú):",
        examples: [
          { origin: "Đứng trước thanh 1, 2, 3", speak: "bù chī, bù lái, bù hǎo", vi: "Giữ thanh 4 (bù): 不吃 bù chī, 不好 bù hǎo" },
          { origin: "Đứng trước thanh 4", speak: "bú shì, bú duì, bú kèqi", vi: "Biến thành thanh 2 (bú): 不是 bú shì, 不对 bú duì" }
        ]
      },
      {
        title: "4. Quy tắc đánh dấu thanh điệu (Thứ tự ưu tiên nguyên âm)",
        desc: "Thanh điệu luôn đánh trên nguyên âm theo thứ tự ưu tiên: a ➔ o ➔ e ➔ i ➔ u ➔ ü. Nguyên âm nào xuất hiện trước thì đánh dấu trên nguyên âm đó.",
        examples: [
          { origin: "a, o, e đứng trước", speak: "mǎo, huài, lèi", vi: "mǎo (đánh trên a), huài (trên a), lèi (trên e)" },
          { origin: "Riêng cặp i và u đi cùng nhau (-iu, -ui)", speak: "liù, duì", vi: "Dấu luôn đánh trên âm đứng sau: liù (trên u), duì (trên i)" }
        ]
      },
      {
        title: "5. Quy tắc viết với nguyên âm 'ü'",
        desc: "Khi ü ghép với các phụ âm j, q, x, y: BỎ hai dấu chấm trên đầu (viết là ju, qu, xu, yu nhưng vẫn đọc là ü). Khi ghép với n, l: GIỮ NGUYÊN hai chấm (nǚ, lǜ) để phân biệt với nu, lu.",
        examples: [
          { origin: "j, q, x, y + ü ➔ ju, qu, xu, yu", speak: "jù, qù, xū, yuè", vi: "句 jù, 去 qù, 需 xū, 月 yuè (vẫn đọc tròn môi ü)" },
          { origin: "n, l + ü ➔ nǚ, lǜ", speak: "nǚ, lǜ", vi: "女 nǚ (con gái), 绿 lǜ (xanh lá) - giữ nguyên 2 dấu chấm" }
        ]
      },
      {
        title: "6. Âm uốn lưỡi (儿化音 - Erhua)",
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
    currentTab: 'initials', // 'initials' | 'finals' | 'tones' | 'rules' | 'quiz'
    searchQuery: '',
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

  // Initialize UI once
  function init() {
    const container = document.getElementById('pinyin-mode');
    if (!container) return;

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
          <h2><span>🔤</span> Bảng Chữ Cái Pinyin & Cách Đọc Chuẩn</h2>
          <p>Hệ thống ngữ âm toàn diện dành cho người học tiếng Trung: 23 Thanh mẫu (phụ âm), 36 Vận mẫu (nguyên âm), 4 Thanh điệu và các quy tắc biến điệu thực tế.</p>
        </div>

        <div class="py-stats-row">
          <div class="py-stat-card">
            <b>23</b>
            <span>Thanh mẫu (声母)</span>
          </div>
          <div class="py-stat-card">
            <b>36</b>
            <span>Vận mẫu (韵母)</span>
          </div>
          <div class="py-stat-card">
            <b>4 + 1</b>
            <span>Thanh điệu chuẩn</span>
          </div>
          <div class="py-stat-card">
            <b>100%</b>
            <span>Âm thanh chuẩn bản xứ</span>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="py-tabs-nav" id="py-tabs-nav" role="tablist" aria-label="Phân loại ngữ âm Pinyin">
        <button class="py-tab-btn active" data-tab="initials">📌 Thanh Mẫu (23)</button>
        <button class="py-tab-btn" data-tab="finals">🎯 Vận Mẫu (36)</button>
        <button class="py-tab-btn" data-tab="tones">🎶 Thanh Điệu (4+1)</button>
        <button class="py-tab-btn" data-tab="rules">💡 Quy Tắc Biến Điệu</button>
        <button class="py-tab-btn" data-tab="quiz">🧠 Luyện Phản Xạ Âm</button>
      </nav>

      <!-- Quick Search Bar (visible in initials & finals tabs) -->
      <div class="py-search-bar" id="py-search-bar">
        <span class="py-search-icon">🔍</span>
        <input type="text" id="py-search-input" placeholder="Tìm nhanh âm Pinyin, cách đọc tiếng Việt hoặc mẹo..." autocomplete="off">
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

    // Search filter input
    const searchInput = container.querySelector('#py-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        PY.searchQuery = e.target.value.toLowerCase().trim();
        renderCurrentTab();
      });
    }
  }

  // Render content based on current tab
  function renderCurrentTab() {
    const content = document.getElementById('py-tab-content');
    const searchBar = document.getElementById('py-search-bar');
    if (!content) return;

    // Show search bar only on initials / finals
    if (searchBar) {
      searchBar.style.display = (PY.currentTab === 'initials' || PY.currentTab === 'finals') ? 'flex' : 'none';
    }

    if (PY.currentTab === 'initials') {
      renderInitials(content);
    } else if (PY.currentTab === 'finals') {
      renderFinals(content);
    } else if (PY.currentTab === 'tones') {
      renderTones(content);
    } else if (PY.currentTab === 'rules') {
      renderRules(content);
    } else if (PY.currentTab === 'quiz') {
      renderQuiz(content);
    }
  }

  // Render 23 Thanh Mẫu (Initials)
  function renderInitials(container) {
    let items = PY_DATA.initials;
    if (PY.searchQuery) {
      items = items.filter(it =>
        it.letter.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
        it.group.toLowerCase().includes(PY.searchQuery) ||
        it.tip.toLowerCase().includes(PY.searchQuery) ||
        (it.example && (it.example.zh.includes(PY.searchQuery) || it.example.pinyin.includes(PY.searchQuery)))
      );
    }

    // Group by phonetic category
    const groups = {};
    items.forEach(it => {
      if (!groups[it.group]) groups[it.group] = [];
      groups[it.group].push(it);
    });

    if (Object.keys(groups).length === 0) {
      container.innerHTML = `<div style="text-align:center;padding:40px;color:#94a3b8;">Không tìm thấy thanh mẫu phù hợp với từ khóa "${PY.searchQuery}".</div>`;
      return;
    }

    let html = '';
    for (const [groupName, groupItems] of Object.entries(groups)) {
      html += `
        <div class="py-group-block">
          <div class="py-group-header">
            <h3>🔹 ${groupName}</h3>
            <small>${groupItems.length} âm</small>
          </div>
          <div class="py-grid">
            ${groupItems.map(item => `
              <div class="py-card">
                <div class="py-card-top">
                  <span class="py-letter">${item.letter}</span>
                  <button type="button" class="py-sound-btn" data-sound="${item.sound}" title="Nghe phát âm ${item.letter}" aria-label="Nghe phát âm ${item.letter}">🔊</button>
                </div>
                <div class="py-read-as">Cách đọc: <span>${item.read}</span></div>
                <div class="py-tip">${item.tip}</div>
                <div class="py-example" data-sound="${item.example.zh}" title="Nghe ví dụ">
                  <div class="py-example-text">
                    <b>${item.example.zh}</b> (${item.example.pinyin})
                    <span style="display:block;font-size:0.78rem;">${item.example.vi}</span>
                  </div>
                  <span style="color:#0284c7;">▶</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
    attachAudioListeners(container);
  }

  // Render 36 Vận Mẫu (Finals)
  function renderFinals(container) {
    let items = PY_DATA.finals;
    if (PY.searchQuery) {
      items = items.filter(it =>
        it.letter.toLowerCase().includes(PY.searchQuery) ||
        it.read.toLowerCase().includes(PY.searchQuery) ||
        it.group.toLowerCase().includes(PY.searchQuery) ||
        it.tip.toLowerCase().includes(PY.searchQuery) ||
        (it.example && (it.example.zh.includes(PY.searchQuery) || it.example.pinyin.includes(PY.searchQuery)))
      );
    }

    const groups = {};
    items.forEach(it => {
      if (!groups[it.group]) groups[it.group] = [];
      groups[it.group].push(it);
    });

    if (Object.keys(groups).length === 0) {
      container.innerHTML = `<div style="text-align:center;padding:40px;color:#94a3b8;">Không tìm thấy vận mẫu phù hợp với từ khóa "${PY.searchQuery}".</div>`;
      return;
    }

    let html = '';
    for (const [groupName, groupItems] of Object.entries(groups)) {
      html += `
        <div class="py-group-block">
          <div class="py-group-header">
            <h3>🔸 ${groupName}</h3>
            <small>${groupItems.length} âm</small>
          </div>
          <div class="py-grid">
            ${groupItems.map(item => `
              <div class="py-card">
                <div class="py-card-top">
                  <span class="py-letter" style="color:#059669;">${item.letter}</span>
                  <button type="button" class="py-sound-btn" data-sound="${item.sound}" title="Nghe phát âm ${item.letter}" aria-label="Nghe phát âm ${item.letter}">🔊</button>
                </div>
                <div class="py-read-as">Cách đọc: <span>${item.read}</span></div>
                <div class="py-tip">${item.tip}</div>
                <div class="py-example" data-sound="${item.example.zh}" title="Nghe ví dụ">
                  <div class="py-example-text">
                    <b>${item.example.zh}</b> (${item.example.pinyin})
                    <span style="display:block;font-size:0.78rem;">${item.example.vi}</span>
                  </div>
                  <span style="color:#059669;">▶</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
    attachAudioListeners(container);
  }

  // Render 4 Thanh Điệu & So Sánh
  function renderTones(container) {
    let html = `
      <div class="py-tones-section">
        <div class="py-tones-grid">
          ${PY_DATA.tones.map(t => `
            <div class="py-tone-card tone-${t.toneNum}">
              <div class="py-tone-head">
                <h4 style="margin:0;font-size:1.05rem;font-weight:800;">${t.name}</h4>
                <span class="py-tone-badge">${t.mark}</span>
              </div>
              <div style="font-size:0.88rem;font-weight:700;color:#0284c7;margin-bottom:6px;">${t.pitch}</div>
              <p style="font-size:0.86rem;color:#475569;line-height:1.5;margin:0 0 12px 0;">${t.desc}</p>
              
              <div class="py-example" data-sound="${t.exampleWord.zh}" style="margin-top:auto;" title="Nghe mẫu">
                <div class="py-example-text">
                  Ví dụ: <b>${t.exampleWord.zh}</b> (${t.exampleWord.pinyin}) - <span>${t.exampleWord.vi}</span>
                </div>
                <button type="button" class="py-sound-btn" style="width:30px;height:30px;font-size:0.9rem;" data-sound="${t.exampleSyllable}">🔊</button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- So sánh trực quan 4 thanh điệu -->
        <div class="py-group-block" style="margin-top:16px;">
          <div class="py-group-header">
            <h3>🎵 Luyện Nghe So Sánh 4 Thanh Điệu (Bấm để nghe)</h3>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${PY_DATA.toneComparisons.map(comp => `
              <div style="background:var(--card-bg,#fff);border:1px solid rgba(148,163,184,0.2);border-radius:14px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
                <b style="font-size:1.1rem;color:#1e293b;min-width:60px;">Âm "${comp.base}":</b>
                <div class="py-tone-demo-list" style="margin-top:0;">
                  ${comp.list.map((s, idx) => `
                    <button type="button" class="py-tone-chip" data-sound="${s}">
                      <span>Thanh ${idx + 1}:</span>
                      <b style="font-size:1.1rem;color:#2563eb;">${s}</b>
                      <span>🔊</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    attachAudioListeners(container);
  }

  // Render Quy Tắc & Mẹo Biến Điệu
  function renderRules(container) {
    let html = `
      <div class="py-rules-container">
        ${PY_DATA.rules.map(rule => `
          <div class="py-rule-card">
            <h4>💡 ${rule.title}</h4>
            <p>${rule.desc}</p>
            <div class="py-rule-examples">
              ${rule.examples.map(ex => `
                <div class="py-rule-item" data-sound="${ex.speak}" title="Bấm để nghe phát âm">
                  <div>
                    <b style="color:#0f172a;font-size:0.95rem;">${ex.origin}</b>
                    <span style="color:#64748b;margin-left:8px;">${ex.vi}</span>
                  </div>
                  <span style="color:#2563eb;font-weight:700;">🔊 Nghe</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
    attachAudioListeners(container);
  }

  // Render Luyện Phản Xạ Âm (Interactive Sound Quiz)
  function renderQuiz(container) {
    container.innerHTML = `
      <div class="py-quiz-box">
        <h3 style="margin:0 0 8px 0;font-size:1.4rem;font-weight:800;color:#1e293b;">🧠 Trắc Nghiệm Phản Xạ Nghe Pinyin</h3>
        <p style="margin:0 0 20px 0;color:#64748b;font-size:0.92rem;">Bấm nút phát âm để nghe một âm Pinyin bất kỳ, sau đó chọn đáp án bạn nghe thấy!</p>

        <button type="button" class="py-quiz-btn-play" id="py-quiz-play">
          <span>🔊 Phát Âm Lại</span>
        </button>

        <div class="py-quiz-options" id="py-quiz-options"></div>
        <div class="py-quiz-feedback" id="py-quiz-feedback"></div>

        <div style="margin-top:20px;font-size:0.9rem;color:#64748b;">
          Điểm số: <b id="py-quiz-score" style="color:#2563eb;font-size:1.1rem;">0</b> / <span id="py-quiz-total">0</span> câu
          <button type="button" id="py-quiz-next" style="margin-left:14px;padding:6px 16px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;font-weight:700;cursor:pointer;">Câu tiếp theo ➔</button>
        </div>
      </div>
    `;

    setupQuizGame(container);
  }

  // Setup sound quiz logic
  function setupQuizGame(container) {
    const playBtn = container.querySelector('#py-quiz-play');
    const optionsBox = container.querySelector('#py-quiz-options');
    const feedbackBox = container.querySelector('#py-quiz-feedback');
    const nextBtn = container.querySelector('#py-quiz-next');
    const scoreVal = container.querySelector('#py-quiz-score');
    const totalVal = container.querySelector('#py-quiz-total');

    // Pool of distinct pinyin syllables for testing
    const quizPool = [
      { sound: "bā", display: "bā", wrong: ["pā", "dā", "mā"] },
      { sound: "pō", display: "pō", wrong: ["bō", "fō", "mō"] },
      { sound: "mǎ", display: "mǎ", wrong: ["nǎ", "lǎ", "dǎ"] },
      { sound: "fēi", display: "fēi", wrong: ["hēi", "gēi", "bēi"] },
      { sound: "tiān", display: "tiān", wrong: ["diān", "piān", "liān"] },
      { sound: "nǐ", display: "nǐ", wrong: ["lǐ", "mǐ", "dǐ"] },
      { sound: "kāi", display: "kāi", wrong: ["gāi", "hāi", "pāi"] },
      { sound: "hǎo", display: "hǎo", wrong: ["bǎo", "kǎo", "dǎo"] },
      { sound: "qù", display: "qù", wrong: ["jù", "xù", "cù"] },
      { sound: "xiè", display: "xiè", wrong: ["jiè", "qiè", "liè"] },
      { sound: "zhōng", display: "zhōng", wrong: ["chōng", "zōng", "shōng"] },
      { sound: "chī", display: "chī", wrong: ["shī", "zhī", "cī"] },
      { sound: "rén", display: "rén", wrong: ["lén", "mén", "hén"] },
      { sound: "shū", display: "shū", wrong: ["chū", "zhū", "sū"] },
      { sound: "zài", display: "zài", wrong: ["cài", "sài", "zhài"] },
      { sound: "cài", display: "cài", wrong: ["zài", "sài", "chài"] }
    ];

    let currentQ = null;
    let answered = false;

    function newQuestion() {
      answered = false;
      feedbackBox.textContent = '';
      feedbackBox.className = 'py-quiz-feedback';

      // Pick random question
      currentQ = quizPool[Math.floor(Math.random() * quizPool.length)];

      // Prepare options (correct + 3 wrong, shuffled)
      const opts = [currentQ.display, ...currentQ.wrong].sort(() => 0.5 - Math.random());

      optionsBox.innerHTML = opts.map(opt => `
        <button type="button" class="py-quiz-opt" data-opt="${opt}">${opt}</button>
      `).join('');

      // Play audio automatically
      setTimeout(() => playSound(currentQ.sound), 300);

      optionsBox.querySelectorAll('.py-quiz-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          PY.quizState.total++;

          if (btn.dataset.opt === currentQ.display) {
            btn.classList.add('correct');
            feedbackBox.innerHTML = '🎉 <span style="color:#16a34a;">Chính xác! Bạn nghe rất chuẩn!</span>';
            PY.quizState.score++;
          } else {
            btn.classList.add('wrong');
            feedbackBox.innerHTML = `❌ <span style="color:#dc2626;">Chưa đúng! Đáp án chính xác là: <b>${currentQ.display}</b></span>`;
            // Highlight the correct one
            optionsBox.querySelectorAll('.py-quiz-opt').forEach(b => {
              if (b.dataset.opt === currentQ.display) b.classList.add('correct');
            });
          }

          scoreVal.textContent = PY.quizState.score;
          totalVal.textContent = PY.quizState.total;
        });
      });
    }

    playBtn.onclick = () => {
      if (currentQ) playSound(currentQ.sound);
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

})();
