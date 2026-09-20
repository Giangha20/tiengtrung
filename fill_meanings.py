import re,json
p='/mnt/data/meaning_fix/script.js'
s=open(p,encoding='utf8').read()
m=re.search(r'const\s+LISTENING_BANK\s*=\s*(\[.*?\])\s*;',s,re.S)
b=json.loads(m.group(1))
# Exact Chinese -> Vietnamese translations for every currently blank listening sentence.
raw=r'''你好。|Xin chào.
早上好。|Chào buổi sáng.
晚上好。|Chào buổi tối.
再见。|Tạm biệt.
明天见。|Hẹn gặp lại ngày mai.
谢谢。|Cảm ơn.
不客气。|Không có gì.
对不起。|Xin lỗi.
没关系。|Không sao.
请坐。|Mời ngồi.
请进。|Mời vào.
请问，洗手间在哪里？|Xin hỏi, nhà vệ sinh ở đâu?
我吃过了。|Tôi ăn rồi.
我想吃面条。|Tôi muốn ăn mì.
我喜欢吃米饭。|Tôi thích ăn cơm.
我喜欢喝咖啡。|Tôi thích uống cà phê.
再来一杯，谢谢。|Cho tôi thêm một cốc nữa, cảm ơn.
这个多少钱？|Cái này bao nhiêu tiền?
太贵了。|Đắt quá.
可以便宜一点吗？|Có thể bớt một chút không?
我要买这个。|Tôi muốn mua cái này.
我不要这个。|Tôi không muốn cái này.
可以刷卡吗？|Có thể thanh toán bằng thẻ không?
请给我一个袋子。|Làm ơn cho tôi một cái túi.
地铁站在哪里？|Ga tàu điện ngầm ở đâu?
车站离这里很近。|Nhà ga rất gần đây.
请往前走。|Xin đi thẳng về phía trước.
然后向左转。|Sau đó rẽ trái.
请向右转。|Xin rẽ phải.
我找不到路了。|Tôi không tìm được đường.
你可以带我去吗？|Bạn có thể dẫn tôi đi không?
我坐公交车去学校。|Tôi đi xe buýt đến trường.
今天下雨了。|Hôm nay trời mưa.
明天天气很好。|Ngày mai thời tiết rất đẹp.
你叫什么？|Bạn tên là gì?
请说慢一点。|Xin hãy nói chậm một chút.
我听不清楚。|Tôi nghe không rõ.
这个怎么读？|Cái này đọc như thế nào?
这个字是什么意思？|Chữ này có nghĩa là gì?
你怎么写这个字？|Bạn viết chữ này như thế nào?
谢谢你的帮助。|Cảm ơn bạn đã giúp đỡ.
不用客气。|Không cần khách sáo.
没事。|Không sao đâu.
请等一下。|Xin chờ một chút.
我马上回来。|Tôi sẽ quay lại ngay.
现在八点半。|Bây giờ là tám giờ rưỡi.
今天星期一。|Hôm nay là thứ Hai.
昨天我很忙。|Hôm qua tôi rất bận.
今天我有空。|Hôm nay tôi rảnh.
明天我要上课。|Ngày mai tôi phải đi học.
你吃早饭了吗？|Bạn ăn sáng chưa?
我已经吃过了。|Tôi đã ăn rồi.
我不吃辣。|Tôi không ăn cay.
这个很好吃。|Món này rất ngon.
可以给我菜单吗？|Bạn có thể đưa tôi thực đơn được không?
请给我一碗米饭。|Làm ơn cho tôi một bát cơm.
我买两杯咖啡。|Tôi mua hai cốc cà phê.
可以用手机付款吗？|Có thể thanh toán bằng điện thoại không?
请给我一张发票。|Làm ơn cho tôi một hóa đơn.
我只是看看。|Tôi chỉ xem thôi.
有别的颜色吗？|Có màu khác không?
有大一点的吗？|Có cái nào lớn hơn một chút không?
这个太小了。|Cái này nhỏ quá.
我可以试穿吗？|Tôi có thể thử mặc không?
一共多少钱？|Tổng cộng bao nhiêu tiền?
给你五十块。|Đây là 50 tệ.
找您十块钱。|Thối lại bạn 10 tệ.
公交车站在哪里？|Trạm xe buýt ở đâu?
我要去火车站。|Tôi muốn đi ga tàu hỏa.
这辆车去市中心吗？|Xe này có đi đến trung tâm thành phố không?
我坐错车了。|Tôi đi nhầm xe rồi.
请在这里停车。|Xin dừng xe ở đây.
还有多远？|Còn bao xa nữa?
大概需要多久？|Khoảng bao lâu?
我们快到了。|Chúng ta sắp đến rồi.
我迷路了。|Tôi bị lạc đường rồi.
请帮我看一下地图。|Làm ơn giúp tôi xem bản đồ.
左边有一家银行。|Bên trái có một ngân hàng.
右边就是超市。|Siêu thị ở ngay bên phải.
一直往前走。|Cứ đi thẳng về phía trước.
请把文件发给我。|Làm ơn gửi tài liệu cho tôi.
我马上发给你。|Tôi sẽ gửi cho bạn ngay.
你收到我的消息了吗？|Bạn đã nhận được tin nhắn của tôi chưa?
我刚刚看到了。|Tôi vừa mới thấy.
我们下午再联系。|Chiều chúng ta liên lạc lại nhé.
这个问题很重要。|Vấn đề này rất quan trọng.
你能帮我一下吗？|Bạn có thể giúp tôi một chút không?
当然可以。|Tất nhiên là được.
你需要我做什么？|Bạn cần tôi làm gì?
请等我五分钟。|Xin chờ tôi năm phút.
不用着急。|Không cần vội.
别担心。|Đừng lo.
我忘记带手机了。|Tôi quên mang điện thoại rồi.
我的手机没电了。|Điện thoại của tôi hết pin rồi.
你可以给我充电器吗？|Bạn có thể đưa tôi bộ sạc không?
没问题。|Không vấn đề gì.
你什么时候有空？|Khi nào bạn rảnh?
晚上八点以后我有空。|Sau tám giờ tối tôi rảnh.
我们几点见面？|Mấy giờ chúng ta gặp nhau?
下午三点见。|Gặp nhau lúc ba giờ chiều.
我已经到了。|Tôi đến rồi.
你在哪里？|Bạn đang ở đâu?
我在门口等你。|Tôi đang đợi bạn ở cửa.
路上小心。|Đi đường cẩn thận nhé.
到了给我发消息。|Đến nơi thì nhắn tin cho tôi.
我今天感觉很好。|Hôm nay tôi cảm thấy rất khỏe.
我有一点累。|Tôi hơi mệt.
你需要休息一下。|Bạn cần nghỉ một chút.
我昨天睡得很晚。|Hôm qua tôi ngủ rất muộn.
今天早点睡吧。|Hôm nay hãy ngủ sớm nhé.
在第二个路口右转。|Rẽ phải ở ngã tư thứ hai.
今天很热。|Hôm nay rất nóng.
今天有点冷。|Hôm nay hơi lạnh.
别忘了带雨伞。|Đừng quên mang ô.
天气越来越好了。|Thời tiết ngày càng đẹp hơn.
你喜欢什么运动？|Bạn thích môn thể thao nào?
我喜欢打篮球。|Tôi thích chơi bóng rổ.
我周末喜欢看电影。|Cuối tuần tôi thích xem phim.
你喜欢听什么音乐？|Bạn thích nghe loại nhạc nào?
我喜欢听中文歌。|Tôi thích nghe nhạc Trung Quốc.
你有几个兄弟姐妹？|Bạn có mấy anh chị em?
我有一个妹妹。|Tôi có một em gái.
我和朋友住在一起。|Tôi sống cùng bạn.
我今天要去学校。|Hôm nay tôi phải đi học.
老师正在上课。|Giáo viên đang dạy học.
请打开书。|Xin hãy mở sách.
请看第三页。|Xin hãy xem trang thứ ba.
这个问题很简单。|Vấn đề này rất đơn giản.
这个问题有点难。|Vấn đề này hơi khó.
我需要再练习。|Tôi cần luyện tập thêm.
我每天学习一个小时。|Mỗi ngày tôi học một giờ.
你什么时候开始学中文？|Bạn bắt đầu học tiếng Trung từ khi nào?
我去年开始学中文。|Năm ngoái tôi bắt đầu học tiếng Trung.
我的中文进步了一点。|Tiếng Trung của tôi đã tiến bộ một chút.
我需要多听多说。|Tôi cần nghe và nói nhiều hơn.
你能给我一个例子吗？|Bạn có thể cho tôi một ví dụ không?
请写在黑板上。|Xin hãy viết lên bảng.
我忘记这个词了。|Tôi quên từ này rồi.
这个词怎么用？|Từ này dùng như thế nào?
你能解释一下吗？|Bạn có thể giải thích một chút không?
我觉得这个方法很好。|Tôi thấy phương pháp này rất tốt.
我们一起练习吧。|Chúng ta cùng luyện tập nhé.
你准备好了吗？|Bạn chuẩn bị xong chưa?
我准备好了。|Tôi chuẩn bị xong rồi.
加油，你可以的。|Cố lên, bạn làm được mà.
不要紧张。|Đừng căng thẳng.
慢慢来。|Cứ từ từ.
你做得很好。|Bạn làm rất tốt.
再试一次。|Thử lại một lần nữa.
我今天感觉不错。|Hôm nay tôi cảm thấy khá ổn.
我需要休息一下。|Tôi cần nghỉ một chút.
你今天怎么样？|Hôm nay bạn thế nào?
最近过得怎么样？|Dạo này bạn thế nào?
最近一切都很好。|Dạo này mọi thứ đều rất tốt.
你吃午饭了吗？|Bạn ăn trưa chưa?
我们中午一起吃饭吧。|Trưa nay chúng ta cùng ăn nhé.
晚饭我想吃饺子。|Bữa tối tôi muốn ăn bánh chẻo.
你想喝茶还是咖啡？|Bạn muốn uống trà hay cà phê?
我要一杯热茶。|Tôi muốn một cốc trà nóng.
水太烫了。|Nước nóng quá.
小心，地上很滑。|Cẩn thận, sàn nhà trơn lắm.
请关一下门。|Xin hãy đóng cửa lại.
请把窗户打开。|Xin hãy mở cửa sổ.
手机没电了。|Điện thoại hết pin rồi.
你的电话响了。|Điện thoại của bạn đang reo.
我一会儿给你打电话。|Lát nữa tôi sẽ gọi cho bạn.
请给我发个消息。|Làm ơn nhắn tin cho tôi.
我现在不方便接电话。|Bây giờ tôi không tiện nghe điện thoại.
你最近怎么样？|Dạo này bạn thế nào?
最近一切都不错。|Dạo này mọi thứ đều khá tốt.
你为什么不开心？|Tại sao bạn không vui?
没什么，只是有点累。|Không có gì, chỉ là hơi mệt.
别想太多。|Đừng suy nghĩ quá nhiều.
我想订一个房间。|Tôi muốn đặt một phòng.
请问还有空房吗？|Xin hỏi còn phòng trống không?
我想住两晚。|Tôi muốn ở hai đêm.
早餐几点开始？|Bữa sáng bắt đầu lúc mấy giờ?
我的房间在哪里？|Phòng của tôi ở đâu?
电梯在哪里？|Thang máy ở đâu?
无线网络的密码是什么？|Mật khẩu mạng Wi-Fi là gì?
我想买一张火车票。|Tôi muốn mua một vé tàu.
下一班车几点出发？|Chuyến xe tiếp theo khởi hành lúc mấy giờ?
我要去机场。|Tôi muốn đi sân bay.
请问需要多长时间？|Xin hỏi cần bao lâu?
现在路上堵车吗？|Bây giờ trên đường có tắc xe không?
我们快迟到了。|Chúng ta sắp muộn rồi.
请开快一点。|Xin hãy lái nhanh hơn một chút.
你觉得这个办法怎么样？|Bạn thấy cách này thế nào?
我觉得可以试试。|Tôi thấy có thể thử.
我们先讨论一下。|Chúng ta thảo luận trước một chút.
我同意你的看法。|Tôi đồng ý với quan điểm của bạn.
我不太同意。|Tôi không hoàn toàn đồng ý.
让我想一想。|Để tôi suy nghĩ một chút.
这个问题需要时间。|Vấn đề này cần thời gian.
我们以后再决定。|Sau này chúng ta hãy quyết định.
这个方法比较简单。|Phương pháp này khá đơn giản.
这样做比较方便。|Làm như vậy thuận tiện hơn.
虽然很忙，但是我会完成。|Mặc dù rất bận nhưng tôi sẽ hoàn thành.
如果有问题，请告诉我。|Nếu có vấn đề, hãy nói cho tôi biết.
因为下雨，所以我们没有出去。|Vì trời mưa nên chúng tôi không ra ngoài.
如果明天有时间，我们一起去。|Nếu ngày mai có thời gian, chúng ta cùng đi.
只要努力，就会进步。|Chỉ cần cố gắng thì sẽ tiến bộ.
学习语言需要坚持。|Học ngôn ngữ cần sự kiên trì.
每天练习一点儿很重要。|Mỗi ngày luyện tập một chút là rất quan trọng.
不要害怕说错。|Đừng sợ nói sai.
听不懂的时候可以再听一次。|Khi nghe không hiểu, bạn có thể nghe lại một lần.
先听清楚，再回答。|Trước tiên hãy nghe rõ rồi mới trả lời.
网络有点慢。|Mạng hơi chậm.
密码是什么？|Mật khẩu là gì?
请稍等一下。|Xin chờ một chút.
我马上处理。|Tôi sẽ xử lý ngay.
这个文件在哪里？|Tài liệu này ở đâu?
我已经收到文件了。|Tôi đã nhận được tài liệu rồi.
我们下午开会。|Chiều nay chúng ta họp.
会议几点开始？|Cuộc họp bắt đầu lúc mấy giờ?
请提前十分钟到。|Xin hãy đến sớm mười phút.
今天的工作完成了吗？|Công việc hôm nay đã hoàn thành chưa?
我还差一点。|Tôi còn thiếu một chút nữa.
我已经完成了。|Tôi đã hoàn thành rồi.
我们明天再讨论。|Ngày mai chúng ta thảo luận tiếp.
这个建议很好。|Đề xuất này rất tốt.
我有不同的意见。|Tôi có ý kiến khác.
我们需要找到解决办法。|Chúng ta cần tìm ra cách giải quyết.
你能解释原因吗？|Bạn có thể giải thích nguyên nhân không?
因为今天下雨，所以我没出去。|Vì hôm nay trời mưa nên tôi không ra ngoài.
除了中文，我还学习英语。|Ngoài tiếng Trung, tôi còn học tiếng Anh.
我希望以后可以说得更流利。|Tôi hy vọng sau này có thể nói lưu loát hơn.
我每天都听中文。|Mỗi ngày tôi đều nghe tiếng Trung.
我正在练习听力。|Tôi đang luyện kỹ năng nghe.
听力对学习语言很重要。|Kỹ năng nghe rất quan trọng đối với việc học ngôn ngữ.
先听关键词，再理解整句话。|Trước tiên hãy nghe từ khóa, sau đó hiểu cả câu.
听不懂也不要马上放弃。|Dù nghe không hiểu cũng đừng vội bỏ cuộc.
多听几遍就会越来越熟悉。|Nghe nhiều lần sẽ ngày càng quen hơn.
今天我们练习十句话。|Hôm nay chúng ta luyện mười câu.
明天继续练习。|Ngày mai tiếp tục luyện tập.
祝你学习进步。|Chúc bạn học tập tiến bộ.
祝你今天开心。|Chúc bạn hôm nay vui vẻ.
祝你一路顺风。|Chúc bạn thượng lộ bình an.
欢迎来到我们的中文课程。|Chào mừng bạn đến với khóa học tiếng Trung của chúng tôi.
今天的内容很简单。|Nội dung hôm nay rất đơn giản.
下一题会稍微难一点。|Câu tiếp theo sẽ khó hơn một chút.
答错了也没关系。|Trả lời sai cũng không sao.
把错题再听一遍。|Hãy nghe lại câu sai một lần nữa.
重复练习可以提高反应速度。|Luyện tập lặp lại có thể nâng cao tốc độ phản ứng.
听到熟悉的词就先记下来。|Khi nghe thấy từ quen thuộc thì hãy ghi nhớ trước.
先不要看拼音。|Trước tiên đừng xem pinyin.
听完以后再看答案。|Nghe xong rồi hãy xem đáp án.
你可以再听一次。|Bạn có thể nghe lại một lần.
现在开始下一题。|Bây giờ bắt đầu câu tiếp theo.
准备好就开始吧。|Chuẩn bị xong thì bắt đầu nhé.
请集中注意力。|Xin hãy tập trung chú ý.
认真听，不要着急。|Hãy nghe thật kỹ, đừng vội.
你的反应越来越快了。|Phản ứng của bạn ngày càng nhanh hơn.
今天比昨天进步了。|Hôm nay bạn tiến bộ hơn hôm qua.
坚持下去一定会有进步。|Kiên trì tiếp tục thì nhất định sẽ tiến bộ.
学习语言需要时间。|Học ngôn ngữ cần thời gian.
每天一点点就很好。|Mỗi ngày tiến bộ một chút là rất tốt.
我喜欢用中文聊天。|Tôi thích trò chuyện bằng tiếng Trung.
你平时跟谁练习中文？|Bình thường bạn luyện tiếng Trung với ai?
我跟朋友一起练习。|Tôi luyện tập cùng bạn bè.
我们每天晚上聊天。|Mỗi tối chúng tôi trò chuyện.
你觉得中文难吗？|Bạn thấy tiếng Trung có khó không?
开始的时候有一点难。|Lúc mới bắt đầu thì hơi khó.
现在我觉得容易多了。|Bây giờ tôi thấy dễ hơn nhiều.
我最喜欢学口语。|Tôi thích học khẩu ngữ nhất.
我想提高听力。|Tôi muốn nâng cao kỹ năng nghe.
我也想提高发音。|Tôi cũng muốn cải thiện phát âm.
请纠正我的发音。|Xin hãy sửa phát âm cho tôi.
这个音怎么发？|Âm này phát âm như thế nào?
我说得对吗？|Tôi nói có đúng không?
差不多，再注意声调。|Gần đúng rồi, hãy chú ý thêm về thanh điệu.
第一声要保持平稳。|Thanh thứ nhất cần giữ ổn định.
第三声要注意变化。|Thanh thứ ba cần chú ý sự thay đổi.
请跟我读一遍。|Xin hãy đọc theo tôi một lần.
轮到你了。|Đến lượt bạn rồi.
该你回答了。|Đến lượt bạn trả lời rồi.
你准备好回答了吗？|Bạn đã sẵn sàng trả lời chưa?
我还需要一点时间。|Tôi vẫn cần thêm một chút thời gian.
没问题，我等你。|Không vấn đề gì, tôi chờ bạn.
我们从第一题开始。|Chúng ta bắt đầu từ câu đầu tiên.
这一题你答对了。|Bạn đã trả lời đúng câu này.
这一题你答错了。|Bạn đã trả lời sai câu này.
再听一次，你会听出来的。|Nghe lại một lần nữa, bạn sẽ nhận ra.
不要只记答案，要听懂句子。|Đừng chỉ nhớ đáp án, hãy nghe hiểu câu.
把新单词放进句子里学习。|Hãy đưa từ mới vào câu để học.
这样更容易记住。|Như vậy sẽ dễ nhớ hơn.
今天就练到这里。|Hôm nay luyện đến đây thôi.
下次我们继续。|Lần sau chúng ta tiếp tục.
你已经做得很好了。|Bạn đã làm rất tốt rồi.
继续保持。|Hãy tiếp tục duy trì nhé.
加油！|Cố lên!'''
mp={}
for line in raw.splitlines():
    if '|' in line:
        z,v=line.split('|',1); mp[z]=v
missing=[]
for q in b:
    if not q.get('meaning','').strip():
        if q['audio'] in mp: q['meaning']=mp[q['audio']]
        else: missing.append(q['audio'])
print('translations',len(mp),'still missing',len(missing))
if missing: print('\n'.join(missing))
# ensure no Chinese Han characters in Vietnamese fields
han=re.compile(r'[\u3400-\u9fff]')
bad=[q for q in b if han.search(q.get('meaning',''))]
print('meaning fields containing Hanzi:',len(bad))
newjson=json.dumps(b,ensure_ascii=False,indent=1)
s=s[:m.start(1)]+newjson+s[m.end(1):]
open(p,'w',encoding='utf8').write(s)
