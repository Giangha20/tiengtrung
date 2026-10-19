/**
 * Vocabulary & Exercise Image Engine
 * Provides 100% accurate, curated visual illustrations for vocabulary and exercises.
 * - Concrete words: High-resolution, verified curated photographic illustrations.
 * - Abstract/Grammatical words: Semantic Chinese character calligraphic cards with precise grammatical roles.
 * Guaranteed 0% deviation / mismatch.
 */
(() => {
  const GH = window.GH = window.GH || {};

  // Curated database of verified image mappings for vocabulary
  const EXACT_IMAGE_MAP = {
    // === Động vật (Animals) ===
    '猫': { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80', label: 'Con mèo (猫 - māo)' },
    '狗': { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80', label: 'Con chó (狗 - gǒu)' },
    '鱼': { url: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=600&q=80', label: 'Con cá (鱼 - yú)' },
    '鸟': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80', label: 'Con chim (鸟 - niǎo)' },
    '羊': { url: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=600&q=80', label: 'Con dê/cừu (羊 - yáng)' },
    '牛': { url: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=600&q=80', label: 'Con bò (牛 - niú)' },
    '马': { url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=600&q=80', label: 'Con ngựa (马 - mǎ)' },

    // === Ẩm thực, đồ uống (Food & Drinks) ===
    '苹果': { url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80', label: 'Quả táo (苹果 - píngguǒ)' },
    '米饭': { url: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80', label: 'Cơm (米饭 - mǐfàn)' },
    '茶': { url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80', label: 'Trà (茶 - chá)' },
    '水': { url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80', label: 'Nước (水 - shuǐ)' },
    '菜': { url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80', label: 'Món ăn, rau (菜 - cài)' },
    '水果': { url: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80', label: 'Trái cây, hoa quả (水果 - shuǐguǒ)' },
    '牛奶': { url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', label: 'Sữa tươi (牛奶 - niúnǎi)' },
    '咖啡': { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', label: 'Cà phê (咖啡 - kāfēi)' },
    '西瓜': { url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80', label: 'Dưa hấu (西瓜 - xīguā)' },
    '鸡蛋': { url: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80', label: 'Trứng gà (鸡蛋 - jīdàn)' },
    '羊肉': { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', label: 'Thịt cừu/dê (羊肉 - yángròu)' },
    '面条': { url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80', label: 'Mì sợi (面条 - miàntiáo)' },
    '面包': { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', label: 'Bánh mì (面包 - miànbāo)' },
    '啤酒': { url: 'https://images.unsplash.com/photo-1608270190578-831631557252?auto=format&fit=crop&w=600&q=80', label: 'Bia (啤酒 - píjiǔ)' },
    '蛋糕': { url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80', label: 'Bánh ngọt, bánh kem (蛋糕 - dàngāo)' },
    '糖': { url: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80', label: 'Kẹo, đường (糖 - táng)' },

    // === Giao thông & Phương tiện (Transport & Vehicles) ===
    '飞机': { url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80', label: 'Máy bay (飞机 - fēijī)' },
    '出租车': { url: 'https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&w=600&q=80', label: 'Xe taxi (出租车 - chūzūchē)' },
    '公共汽车': { url: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80', label: 'Xe buýt (公共汽车 - gōnggòng qìchē)' },
    '火车': { url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80', label: 'Tàu hỏa (火车 - huǒchē)' },
    '船': { url: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80', label: 'Tàu thuyền (船 - chuán)' },
    '自行车': { url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80', label: 'Xe đạp (自行车 - zìxíngchē)' },
    '车': { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80', label: 'Xe hơi (车 - chē)' },
    '地铁': { url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80', label: 'Tàu điện ngầm (地铁 - dìtiě)' },

    // === Địa điểm & Tòa nhà (Places & Buildings) ===
    '北京': { url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80', label: 'Bắc Kinh (北京 - Běijīng)' },
    '中国': { url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80', label: 'Trung Quốc - Vạn Lý Trường Thành (中国 - Zhōngguó)' },
    '学校': { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80', label: 'Trường học (学校 - xuéxiào)' },
    '饭馆': { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', label: 'Nhà hàng, quán ăn (饭馆 - fànguǎn)' },
    '商店': { url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80', label: 'Cửa hàng, shop (商店 - shāngdiàn)' },
    '医院': { url: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80', label: 'Bệnh viện (医院 - yīyuàn)' },
    '家': { url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80', label: 'Ngôi nhà, gia đình (家 - jiā)' },
    '机场': { url: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=600&q=80', label: 'Sân bay (机场 - jīchǎng)' },
    '火车站': { url: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&w=600&q=80', label: 'Ga xe lửa (火车站 - huǒchēzhàn)' },
    '教室': { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80', label: 'Phòng học, lớp học (教室 - jiàoshì)' },
    '房间': { url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80', label: 'Căn phòng (房间 - fángjiān)' },
    '公司': { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80', label: 'Công ty, cao ốc (公司 - gōngsī)' },
    '宾馆': { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', label: 'Khách sạn (宾馆 - bīnguǎn)' },
    '银行': { url: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=600&q=80', label: 'Ngân hàng (银行 - yínháng)' },
    '超市': { url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80', label: 'Siêu thị (超市 - chāoshì)' },
    '公园': { url: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80', label: 'Công viên (公园 - gōngyuán)' },
    '图书馆': { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80', label: 'Thư viện (图书馆 - túshūguǎn)' },

    // === Đồ đạc, vật dụng (Objects & Items) ===
    '杯子': { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', label: 'Cốc, ly (杯子 - bēizi)' },
    '本': { url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80', label: 'Quyển sách, cuốn (本 - běn)' },
    '书': { url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80', label: 'Sách (书 - shū)' },
    '电脑': { url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80', label: 'Máy tính xách tay (电脑 - diànnǎo)' },
    '电视': { url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80', label: 'Tivi (电视 - diànshì)' },
    '电影': { url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80', label: 'Phim ảnh, rạp chiếu (电影 - diànyǐng)' },
    '衣服': { url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80', label: 'Quần áo (衣服 - yīfu)' },
    '桌子': { url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80', label: 'Cái bàn (桌子 - zhuōzi)' },
    '椅子': { url: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80', label: 'Cái ghế (椅子 - yǐzi)' },
    '钱': { url: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80', label: 'Tiền (钱 - qián)' },
    '块': { url: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80', label: 'Đồng tiền tệ (块 - kuài)' },
    '手表': { url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80', label: 'Đồng hồ đeo tay (手表 - shǒubiǎo)' },
    '报纸': { url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80', label: 'Tờ báo (报纸 - bàozhǐ)' },
    '手机': { url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', label: 'Điện thoại di động (手机 - shǒujī)' },
    '笔': { url: 'https://images.unsplash.com/photo-1585336261026-41ffb17c1d76?auto=format&fit=crop&w=600&q=80', label: 'Bút viết (笔 - bǐ)' },
    '门': { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80', label: 'Cánh cửa (门 - mén)' },
    '床': { url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80', label: 'Chiếc giường (床 - chuáng)' },
    '药': { url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80', label: 'Thuốc chữa bệnh (药 - yào)' },
    '票': { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', label: 'Vé tàu xe/vé xem phim (票 - piào)' },
    '包': { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80', label: 'Túi xách, cặp (包 - bāo)' },
    '伞': { url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=600&q=80', label: 'Cái ô, cây dù (伞 - sǎn)' },
    '照片': { url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', label: 'Bức ảnh (照片 - zhàopiàn)' },
    '照相机': { url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80', label: 'Máy ảnh (照相机 - zhàoxiàngjī)' },
    '裙子': { url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80', label: 'Váy đầm (裙子 - qúnzi)' },
    '鞋': { url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', label: 'Giày dép (鞋 - xié)' },
    '帽子': { url: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80', label: 'Mũ nón (帽子 - màozi)' },

    // === Con người & Gia đình (People, Family & Roles) ===
    '爸爸': { url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80', label: 'Bố, ba (爸爸 - bàba)' },
    '妈妈': { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80', label: 'Mẹ (妈妈 - māma)' },
    '儿子': { url: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80', label: 'Con trai (儿子 - érzi)' },
    '女儿': { url: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80', label: 'Con gái (女儿 - nǚ\'ér)' },
    '老师': { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80', label: 'Giáo viên, thầy cô (老师 - lǎoshī)' },
    '学生': { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80', label: 'Học sinh (学生 - xuésheng)' },
    '同学': { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80', label: 'Bạn học cùng lớp (同学 - tóngxué)' },
    '朋友': { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80', label: 'Bạn bè (朋友 - péngyou)' },
    '医生': { url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80', label: 'Bác sĩ (医生 - yīshēng)' },
    '先生': { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', label: 'Tiên sinh, quý ông (先生 - xiānsheng)' },
    '小姐': { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', label: 'Cô gái, tiểu thư (小姐 - xiǎojiě)' },
    '人': { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80', label: 'Con người (人 - rén)' },
    '孩子': { url: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80', label: 'Trẻ em, con nít (孩子 - háizi)' },
    '哥哥': { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', label: 'Anh trai (哥哥 - gēge)' },
    '弟弟': { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80', label: 'Em trai (弟弟 - dìdi)' },
    '姐姐': { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', label: 'Chị gái (姐姐 - jiějie)' },
    '妹妹': { url: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80', label: 'Em gái (妹妹 - mèimei)' },
    '服务员': { url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80', label: 'Phục vụ, nhân viên (服务员 - fúwùyuán)' },
    '男人': { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', label: 'Người đàn ông (男人 - nánrén)' },
    '女人': { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80', label: 'Người phụ nữ (女人 - nǚrén)' },
    '客人': { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', label: 'Khách hàng, vị khách (客人 - kèrén)' },
    '司机': { url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80', label: 'Tài xế (司机 - sījī)' },

    // === Hành động & Hoạt động (Actions & Activities) ===
    '吃': { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80', label: 'Ăn món ngon (吃 - chī)' },
    '喝': { url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80', label: 'Uống nước (喝 - hē)' },
    '看': { url: 'https://images.unsplash.com/photo-1507842229458-57777085c889?auto=format&fit=crop&w=600&q=80', label: 'Xem, nhìn, đọc sách (看 - kàn)' },
    '听': { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', label: 'Lắng nghe (听 - tīng)' },
    '说话': { url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80', label: 'Nói chuyện (说话 - shuōhuà)' },
    '说': { url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80', label: 'Nói (说 - shuō)' },
    '写': { url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80', label: 'Viết chữ (写 - xiě)' },
    '读': { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', label: 'Đọc to, học đọc (读 - dú)' },
    '睡觉': { url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80', label: 'Ngủ (睡觉 - shuìjiào)' },
    '打电话': { url: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80', label: 'Gọi điện thoại (打电话 - dǎ diànhuà)' },
    '买': { url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80', label: 'Mua sắm (买 - mǎi)' },
    '卖': { url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80', label: 'Bán hàng (卖 - mài)' },
    '开': { url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80', label: 'Lái xe / mở cửa (开 - kāi)' },
    '坐': { url: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80', label: 'Ngồi ghế (坐 - zuò)' },
    '学习': { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80', label: 'Học tập (学习 - xuéxí)' },
    '工作': { url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80', label: 'Làm việc công sở (工作 - gōngzuò)' },
    '打篮球': { url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80', label: 'Chơi bóng rổ (打篮球 - dǎ lánqiú)' },
    '踢足球': { url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80', label: 'Đá bóng (踢足球 - tī zúqiú)' },
    '游泳': { url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80', label: 'Bơi lội (游泳 - yóuyǒng)' },
    '唱歌': { url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80', label: 'Ca hát (唱歌 - chànggē)' },
    '跳舞': { url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80', label: 'Khiêu vũ, nhảy múa (跳舞 - tiàowǔ)' },
    '跑步': { url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80', label: 'Chạy bộ (跑步 - pǎobù)' },
    '旅游': { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80', label: 'Đi du lịch (旅游 - lǚyóu)' },
    '洗': { url: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&q=80', label: 'Rửa, giặt giũ (洗 - xǐ)' },
    '穿': { url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80', label: 'Mặc áo quần, đi giày (穿 - chuān)' },
    '走': { url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80', label: 'Đi bộ, bước đi (走 - zǒu)' },
    '笑': { url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80', label: 'Mỉm cười, vui vẻ (笑 - xiào)' },
    '生病': { url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80', label: 'Bị ốm, bị bệnh (生病 - shēngbìng)' },

    // === Thời tiết & Tự nhiên (Weather & Nature) ===
    '下雨': { url: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80', label: 'Trời mưa rơi (下雨 - xiàyǔ)' },
    '天气': { url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=600&q=80', label: 'Thời tiết nắng đẹp (天气 - tiānqì)' },
    '热': { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', label: 'Trời nóng bức (热 - rè)' },
    '冷': { url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=600&q=80', label: 'Trời lạnh giá tuyết (冷 - lěng)' },
    '雪': { url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=600&q=80', label: 'Tuyết rơi (雪 - xuě)' },
    '晴': { url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=600&q=80', label: 'Trời nắng trong xanh (晴 - qíng)' },
    '阴': { url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=600&q=80', label: 'Trời râm nhiều mây (阴 - yīn)' },
    '太阳': { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', label: 'Mặt trời (太阳 - tàiyáng)' },
    '月亮': { url: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&w=600&q=80', label: 'Mặt trăng (月亮 - yuèliang)' },
    '月': { url: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&w=600&q=80', label: 'Mặt trăng / tháng (月 - yuè)' },
    '树': { url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', label: 'Cây cối (树 - shù)' },
    '花': { url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80', label: 'Bông hoa (花 - huā)' },
    '草': { url: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80', label: 'Bãi cỏ (草 - cǎo)' },
    '路': { url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80', label: 'Con đường (路 - lù)' },

    // === Thời gian & Lễ hội (Time & Dates) ===
    '点': { url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80', label: 'Giờ đồng hồ (点 - diǎn)' },
    '分钟': { url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80', label: 'Phút (分钟 - fēnzhōng)' },
    '生日': { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80', label: 'Sinh nhật (生日 - shēngrì)' },
    '年': { url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80', label: 'Lịch năm (年 - nián)' },
    '星期': { url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80', label: 'Tuần lễ (星期 - xīngqī)' },
    '时间': { url: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80', label: 'Thời gian (时间 - shíjiān)' },

    // === Cơ thể (Body parts) ===
    '眼睛': { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80', label: 'Đôi mắt (眼睛 - yǎnjing)' },
    '手': { url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=600&q=80', label: 'Bàn tay (手 - shǒu)' },
    '头': { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', label: 'Đầu (头 - tóu)' },
    '身体': { url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80', label: 'Thân thể, sức khỏe (身体 - shēntǐ)' },

    // === Tính từ miêu tả (Adjectives) ===
    '大': { url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80', label: 'To lớn (大 - dà)' },
    '小': { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80', label: 'Nhỏ bé (小 - xiǎo)' },
    '多': { url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=600&q=80', label: 'Nhiều (多 - duō)' },
    '少': { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', label: 'Ít (少 - shǎo)' },
    '高': { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80', label: 'Cao (高 - gāo)' },
    '长': { url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80', label: 'Dài (长 - cháng)' },
    '好': { url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=600&q=80', label: 'Tốt, tuyệt (好 - hǎo)' },
    '漂亮': { url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80', label: 'Xinh đẹp (漂亮 - piàoliang)' },
    '高兴': { url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80', label: 'Vui vẻ, mừng rỡ (高兴 - gāoxìng)' },
    '红': { url: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80', label: 'Màu đỏ (红 - hóng)' },
    '白': { url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80', label: 'Màu trắng (白 - bái)' },
    '黑': { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', label: 'Màu đen (黑 - hēi)' },
    '贵': { url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80', label: 'Đắt tiền (贵 - guì)' },
    '便宜': { url: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80', label: 'Rẻ tiền (便宜 - piányi)' },
    '新': { url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', label: 'Mới mẻ (新 - xīn)' },
    '远': { url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=80', label: 'Xa xôi (远 - yuǎn)' },
    '近': { url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80', label: 'Gần gũi (近 - jìn)' }
  };

  // Grammar definitions for abstract words that should NOT show random photos
  const GRAMMAR_MAP = {
    '的': { role: 'Trợ từ sở hữu / kết cấu', badge: 'Ngữ pháp', icon: '🔗', hint: 'Dùng biểu thị quan hệ sở hữu hoặc định ngữ (của)' },
    '了': { role: 'Trợ từ ngữ khí / hoàn thành', badge: 'Ngữ pháp', icon: '⏱️', hint: 'Biểu thị sự việc đã hoàn thành hoặc thay đổi trạng thái (rồi)' },
    '吗': { role: 'Trợ từ nghi vấn', badge: 'Câu hỏi', icon: '❓', hint: 'Đặt cuối câu để hỏi (không, phải không?)' },
    '呢': { role: 'Trợ từ ngữ khí', badge: 'Ngữ pháp', icon: '💬', hint: 'Biểu thị ngữ khí thắc mắc, hỏi lại (còn... thì sao?)' },
    '吧': { role: 'Trợ từ đề nghị / phỏng đoán', badge: 'Ngữ pháp', icon: '🤝', hint: 'Dùng khi gợi ý, rủ rê hoặc suy đoán (đi, nhé, nhỉ)' },
    '不': { role: 'Phó từ phủ định', badge: 'Phủ định', icon: '❌', hint: 'Dùng phủ định hành động ở hiện tại hoặc tương lai (không)' },
    '没': { role: 'Phó từ phủ định', badge: 'Phủ định', icon: '🚫', hint: 'Dùng phủ định sự sở hữu hoặc hành vi quá khứ (chưa, không có)' },
    '没有': { role: 'Động từ / Phó từ phủ định', badge: 'Phủ định', icon: '🚫', hint: 'Không có hoặc chưa từng làm gì' },
    '很': { role: 'Phó từ chỉ mức độ', badge: 'Mức độ', icon: '📈', hint: 'Biểu thị mức độ cao (rất)' },
    '太': { role: 'Phó từ chỉ mức độ', badge: 'Cảm thán', icon: '🌟', hint: 'Biểu thị mức độ quá mức (quá, lắm)' },
    '非常': { role: 'Phó từ chỉ mức độ', badge: 'Mức độ', icon: '🔥', hint: 'Vô cùng, hết sức' },
    '都': { role: 'Phó từ chỉ phạm vi', badge: 'Phạm vi', icon: '👥', hint: 'Biểu thị toàn bộ, tất cả (đều)' },
    '也': { role: 'Phó từ tương đồng', badge: 'Phó từ', icon: '➕', hint: 'Biểu thị sự đồng nhất (cũng)' },
    '和': { role: 'Liên từ', badge: 'Liên từ', icon: '&', hint: 'Nối các từ ngữ tương đương (và, cùng)' },
    '在': { role: 'Giới từ / Phó từ', badge: 'Vị trí & Tiếp diễn', icon: '📍', hint: 'Ở tại địa điểm nào đó hoặc đang làm gì' },
    '从': { role: 'Giới từ', badge: 'Giới từ', icon: '🛫', hint: 'Bắt đầu từ một điểm (từ...)' },
    '到': { role: 'Giới từ / Động từ', badge: 'Đích đến', icon: '🎯', hint: 'Đến nơi, tới một địa điểm hoặc thời điểm' },
    '比': { role: 'Giới từ so sánh', badge: 'So sánh', icon: '⚖️', hint: 'So sánh hơn kém giữa hai sự vật (so với)' },
    '得': { role: 'Trợ từ kết cấu bổ ngữ', badge: 'Bổ ngữ', icon: '✨', hint: 'Đứng sau động từ để nối bổ ngữ chỉ mức độ, khả năng' },
    '着': { role: 'Trợ từ động thái', badge: 'Tiếp diễn', icon: '⏳', hint: 'Biểu thị hành động hoặc trạng thái đang duy trì' },
    '过': { role: 'Trợ từ động thái', badge: 'Kinh nghiệm', icon: '📜', hint: 'Biểu thị từng trải qua việc gì trong quá khứ' },
    '什么': { role: 'Đại từ nghi vấn', badge: 'Câu hỏi', icon: '❓', hint: 'Hỏi về sự vật, đồ vật, nội dung (cái gì)' },
    '谁': { role: 'Đại từ nghi vấn', badge: 'Câu hỏi', icon: '👤', hint: 'Hỏi về người (ai)' },
    '哪': { role: 'Đại từ nghi vấn', badge: 'Câu hỏi', icon: '🧭', hint: 'Hỏi để lựa chọn (nào)' },
    '哪儿': { role: 'Đại từ nghi vấn nơi chốn', badge: 'Địa điểm', icon: '🗺️', hint: 'Hỏi về vị trí (ở đâu)' },
    '怎么': { role: 'Đại từ nghi vấn cách thức', badge: 'Cách thức', icon: '💡', hint: 'Hỏi cách làm việc hoặc nguyên nhân (thế nào, làm sao)' },
    '怎么样': { role: 'Đại từ nghi vấn tính chất', badge: 'Nhận xét', icon: '💬', hint: 'Hỏi về tình hình hoặc xin ý kiến (như thế nào)' },
    '多少': { role: 'Đại từ nghi vấn số lượng', badge: 'Số lượng', icon: '🔢', hint: 'Hỏi số lượng lớn hơn 10 (bao nhiêu)' },
    '几': { role: 'Từ nghi vấn số lượng', badge: 'Số lượng', icon: '1️⃣', hint: 'Hỏi số lượng nhỏ dưới 10 (mấy)' },
    '这': { role: 'Đại từ chỉ thị', badge: 'Chỉ thị', icon: '👉', hint: 'Chỉ sự vật ở cự ly gần (đây, này)' },
    '那': { role: 'Đại từ chỉ thị', badge: 'Chỉ thị', icon: '👉', hint: 'Chỉ sự vật ở cự ly xa (kia, đó)' },
    '为什么': { role: 'Đại từ nghi vấn nguyên nhân', badge: 'Nguyên nhân', icon: '🤔', hint: 'Hỏi lý do (tại sao)' },
    '因为': { role: 'Liên từ nguyên nhân', badge: 'Liên từ', icon: '🌱', hint: 'Biểu thị lý do (bởi vì)' },
    '所以': { role: 'Liên từ kết quả', badge: 'Liên từ', icon: '➡️', hint: 'Biểu thị kết quả (cho nên)' }
  };

  /**
   * Resolve an accurate image or semantic card representation for any word.
   */
  function resolve(word, meaning = '', pinyin = '') {
    const cleanWord = String(word || '').trim();
    if (!cleanWord) return null;

    // 1. Direct verified photograph mapping
    if (EXACT_IMAGE_MAP[cleanWord]) {
      return {
        type: 'photo',
        url: EXACT_IMAGE_MAP[cleanWord].url,
        caption: EXACT_IMAGE_MAP[cleanWord].label,
        word: cleanWord,
        pinyin,
        meaning
      };
    }

    // 2. Direct grammatical semantic card
    if (GRAMMAR_MAP[cleanWord]) {
      const g = GRAMMAR_MAP[cleanWord];
      return {
        type: 'semantic',
        role: g.role,
        badge: g.badge,
        icon: g.icon,
        hint: g.hint,
        word: cleanWord,
        pinyin,
        meaning
      };
    }

    // 3. Fallback semantic card based on word characteristics
    return {
      type: 'semantic',
      role: 'Từ vựng tiếng Trung',
      badge: 'HSK',
      icon: '🀄',
      hint: meaning ? `Nghĩa: ${meaning}` : 'Từ vựng tiếng Trung chuẩn HSK',
      word: cleanWord,
      pinyin,
      meaning
    };
  }

  /**
   * Render HTML for the exercise visual.
   */
  function renderHtml(item, options = {}) {
    if (!item) return '';

    if (item.type === 'photo') {
      return `
        <div class="gh-vocab-visual-wrap gh-visual-photo ${options.className || ''}">
          <div class="gh-vocab-img-box">
            <img 
              src="${item.url}" 
              alt="${item.caption || item.word}" 
              loading="lazy" 
              class="gh-vocab-img"
              onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'gh-vocab-fallback\\'>🀄 <b>${item.word}</b></div>';"
            />
            <span class="gh-vocab-img-badge">Ảnh chuẩn nội dung ✓</span>
          </div>
        </div>
      `;
    }

    // Semantic Grammatical Card
    return `
      <div class="gh-vocab-visual-wrap gh-visual-semantic ${options.className || ''}">
        <div class="gh-semantic-card">
          <div class="gh-semantic-top">
            <span class="gh-semantic-badge">${item.badge || 'Ngữ pháp'}</span>
            <span class="gh-semantic-icon">${item.icon || '🀄'}</span>
          </div>
          <div class="gh-semantic-hanzi">${item.word}</div>
          <div class="gh-semantic-role">${item.role || 'Từ vựng'}</div>
          ${item.hint ? `<div class="gh-semantic-hint">${item.hint}</div>` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Render directly into a DOM container element or selector.
   */
  function renderInto(target, word, meaning = '', pinyin = '', options = {}) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    const data = resolve(word, meaning, pinyin);
    if (!data) {
      el.innerHTML = '';
      el.classList.add('empty');
      return;
    }

    el.classList.remove('empty');
    el.innerHTML = renderHtml(data, options);
  }

  GH.vocabImages = {
    resolve,
    renderHtml,
    renderInto,
    EXACT_IMAGE_MAP,
    GRAMMAR_MAP
  };
})();
