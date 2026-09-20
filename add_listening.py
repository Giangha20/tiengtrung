import re,json,random,os,zipfile,shutil
from collections import Counter
base='/mnt/data/keep2000'
p=os.path.join(base,'script.js')
s=open(p,encoding='utf8').read()
m=re.search(r'const\s+LISTENING_BANK\s*=\s*(\[.*?\])\s*;',s,re.S)
bank=json.loads(m.group(1))
existing={(x['level'],x['audio']) for x in bank}

names=['小王','小李','小张','小陈','小林','小周','小刘','小赵','小明','小芳']
places=['学校','公司','图书馆','车站','机场','超市','医院','公园','餐厅','办公室','商店','银行']
times=['今天','明天','昨天','早上','下午','晚上','周末','下周','下个月','现在']
items=['中文','英语','作业','会议','电影','音乐','天气','考试','工作','旅行','计划','资料']
verbs=['学习','准备','讨论','安排','检查','完成','开始','结束','改变','了解']

T={
1:[
 ('你好吗？','Nǐ hǎo ma?','Bạn khỏe không？'),('我很好，谢谢。','Wǒ hěn hǎo, xièxie.','Tôi khỏe, cảm ơn.'),('你叫什么名字？','Nǐ jiào shénme míngzi?','Bạn tên là gì?'),('我叫小王。','Wǒ jiào Xiǎo Wáng.','Tôi tên là Tiểu Vương.'),('你是哪国人？','Nǐ shì nǎ guó rén?','Bạn là người nước nào?'),('我喜欢喝茶。','Wǒ xǐhuan hē chá.','Tôi thích uống trà.'),('现在几点？','Xiànzài jǐ diǎn?','Bây giờ là mấy giờ?'),('今天很热。','Jīntiān hěn rè.','Hôm nay rất nóng.'),('请坐。','Qǐng zuò.','Mời ngồi.'),('再见，明天见。','Zàijiàn, míngtiān jiàn.','Tạm biệt, hẹn gặp ngày mai.')],
2:[('你周末做什么？','Nǐ zhōumò zuò shénme?','Cuối tuần bạn làm gì?'),('我正在学习中文。','Wǒ zhèngzài xuéxí Zhōngwén.','Tôi đang học tiếng Trung.'),('你吃过饭了吗？','Nǐ chīguò fàn le ma?','Bạn ăn cơm chưa?'),('我昨天去了超市。','Wǒ zuótiān qù le chāoshì.','Hôm qua tôi đã đi siêu thị.'),('请把门关上。','Qǐng bǎ mén guān shàng.','Hãy đóng cửa lại.'),('今天比昨天冷。','Jīntiān bǐ zuótiān lěng.','Hôm nay lạnh hơn hôm qua.'),('我每天坐公交车上班。','Wǒ měitiān zuò gōngjiāo chē shàngbān.','Mỗi ngày tôi đi xe buýt đi làm.'),('你为什么迟到了？','Nǐ wèishénme chídào le?','Tại sao bạn đến muộn?'),('我忘了带手机。','Wǒ wàng le dài shǒujī.','Tôi quên mang điện thoại.'),('我们晚上一起吃饭吧。','Wǒmen wǎnshang yìqǐ chīfàn ba.','Tối nay chúng ta cùng ăn cơm nhé.')],
3:[('如果明天下雨，我们就不去了。','Rúguǒ míngtiān xiàyǔ, wǒmen jiù bú qù le.','Nếu ngày mai mưa thì chúng ta không đi nữa.'),('我已经把作业做完了。','Wǒ yǐjīng bǎ zuòyè zuò wán le.','Tôi đã làm xong bài tập rồi.'),('你觉得这部电影怎么样？','Nǐ juéde zhè bù diànyǐng zěnmeyàng?','Bạn thấy bộ phim này thế nào?'),('虽然很累，但是我很开心。','Suīrán hěn lèi, dànshì wǒ hěn kāixīn.','Mặc dù rất mệt nhưng tôi rất vui.'),('我对中国历史很感兴趣。','Wǒ duì Zhōngguó lìshǐ hěn gǎn xìngqù.','Tôi rất hứng thú với lịch sử Trung Quốc.'),('请你再说一遍好吗？','Qǐng nǐ zài shuō yí biàn hǎo ma?','Bạn có thể nói lại một lần nữa không?'),('他可能已经回家了。','Tā kěnéng yǐjīng huí jiā le.','Có lẽ anh ấy đã về nhà rồi.'),('我希望以后有机会去北京。','Wǒ xīwàng yǐhòu yǒu jīhuì qù Běijīng.','Tôi hy vọng sau này có cơ hội đến Bắc Kinh.'),('这个问题没有想象中那么难。','Zhège wèntí méiyǒu xiǎngxiàng zhōng nàme nán.','Vấn đề này không khó như tưởng tượng.'),('你最好提前准备一下。','Nǐ zuìhǎo tíqián zhǔnbèi yíxià.','Tốt nhất bạn nên chuẩn bị trước một chút.')],
4:[('随着生活水平提高，人们越来越重视健康。','Suízhe shēnghuó shuǐpíng tígāo, rénmen yuèláiyuè zhòngshì jiànkāng.','Cùng với mức sống nâng cao, mọi người ngày càng coi trọng sức khỏe.'),('无论遇到什么困难，我们都应该保持冷静。','Wúlùn yùdào shénme kùnnan, wǒmen dōu yīnggāi bǎochí lěngjìng.','Dù gặp khó khăn gì, chúng ta cũng nên giữ bình tĩnh.'),('经过讨论以后，大家终于达成了一致。','Jīngguò tǎolùn yǐhòu, dàjiā zhōngyú dáchéng le yízhì.','Sau khi thảo luận, mọi người cuối cùng đã đạt được thống nhất.'),('为了避免浪费时间，我们决定提前出发。','Wèile bìmiǎn làngfèi shíjiān, wǒmen juédìng tíqián chūfā.','Để tránh lãng phí thời gian, chúng tôi quyết định xuất phát sớm.'),('他不仅工作认真，而且很愿意帮助别人。','Tā bùjǐn gōngzuò rènzhēn, érqiě hěn yuànyì bāngzhù biérén.','Anh ấy không chỉ làm việc nghiêm túc mà còn rất sẵn lòng giúp người khác.'),('这次活动的主要目的是提高大家的环保意识。','Zhè cì huódòng de zhǔyào mùdì shì tígāo dàjiā de huánbǎo yìshí.','Mục đích chính của hoạt động lần này là nâng cao ý thức bảo vệ môi trường.'),('只要坚持下去，你一定能够取得进步。','Zhǐyào jiānchí xiàqù, nǐ yídìng nénggòu qǔdé jìnbù.','Chỉ cần kiên trì, bạn nhất định có thể tiến bộ.'),('这件事情比我们原来想的复杂得多。','Zhè jiàn shìqing bǐ wǒmen yuánlái xiǎng de fùzá de duō.','Việc này phức tạp hơn nhiều so với chúng tôi nghĩ ban đầu.'),('工作人员正在认真检查所有设备。','Gōngzuò rényuán zhèngzài rènzhēn jiǎnchá suǒyǒu shèbèi.','Nhân viên đang kiểm tra kỹ tất cả thiết bị.'),('如果没有充分准备，计划很容易受到影响。','Rúguǒ méiyǒu chōngfèn zhǔnbèi, jìhuà hěn róngyì shòudào yǐngxiǎng.','Nếu không chuẩn bị đầy đủ, kế hoạch rất dễ bị ảnh hưởng.')],
5:[('在竞争日益激烈的环境中，企业必须不断创新。','Zài jìngzhēng rìyì jīliè de huánjìng zhōng, qǐyè bìxū bùduàn chuàngxīn.','Trong môi trường cạnh tranh ngày càng gay gắt, doanh nghiệp phải không ngừng đổi mới.'),('专家认为，合理安排时间有助于提高工作效率。','Zhuānjiā rènwéi, hélǐ ānpái shíjiān yǒuzhù yú tígāo gōngzuò xiàolǜ.','Chuyên gia cho rằng sắp xếp thời gian hợp lý giúp nâng cao hiệu suất làm việc.'),('这项政策实施以后，相关行业发生了明显变化。','Zhè xiàng zhèngcè shíshī yǐhòu, xiāngguān hángyè fāshēng le míngxiǎn biànhuà.','Sau khi chính sách này được thực hiện, các ngành liên quan đã có thay đổi rõ rệt.'),('面对突发情况，我们需要迅速采取有效措施。','Miànduì tūfā qíngkuàng, wǒmen xūyào xùnsù cǎiqǔ yǒuxiào cuòshī.','Trước tình huống bất ngờ, chúng ta cần nhanh chóng đưa ra biện pháp hiệu quả.'),('研究表明，良好的睡眠对记忆力有重要影响。','Yánjiū biǎomíng, liánghǎo de shuìmián duì jìyìlì yǒu zhòngyào yǐngxiǎng.','Nghiên cứu cho thấy giấc ngủ tốt có ảnh hưởng quan trọng đến trí nhớ.'),('他提出的建议得到了同事们的积极回应。','Tā tíchū de jiànyì dédào le tóngshìmen de jījí huíyìng.','Đề xuất của anh ấy nhận được phản hồi tích cực từ đồng nghiệp.'),('从长远来看，这种做法可能带来更多问题。','Cóng chángyuǎn lái kàn, zhè zhǒng zuòfǎ kěnéng dàilái gèng duō wèntí.','Về lâu dài, cách làm này có thể mang lại nhiều vấn đề hơn.'),('我们应该根据实际情况调整原来的计划。','Wǒmen yīnggāi gēnjù shíjì qíngkuàng tiáozhěng yuánlái de jìhuà.','Chúng ta nên điều chỉnh kế hoạch ban đầu dựa trên tình hình thực tế.'),('这份报告详细分析了市场发展的主要趋势。','Zhè fèn bàogào xiángxì fēnxī le shìchǎng fāzhǎn de zhǔyào qūshì.','Báo cáo này phân tích chi tiết các xu hướng chính của thị trường.'),('即使遇到失败，也不应该轻易放弃自己的目标。','Jíshǐ yùdào shībài, yě bù yīnggāi qīngyì fàngqì zìjǐ de mùbiāo.','Ngay cả khi thất bại cũng không nên dễ dàng từ bỏ mục tiêu của mình.')],
6:[('在复杂多变的社会环境中，准确判断信息的可靠性至关重要。','Zài fùzá duōbiàn de shèhuì huánjìng zhōng, zhǔnquè pànduàn xìnxī de kěkàoxìng zhìguān zhòngyào.','Trong môi trường xã hội phức tạp và biến đổi, việc đánh giá chính xác độ tin cậy của thông tin là vô cùng quan trọng.'),('从整体而言，这一改革对经济结构产生了深远影响。','Cóng zhěngtǐ ér yán, zhè yí gǎigé duì jīngjì jiégòu chǎnshēng le shēnyuǎn yǐngxiǎng.','Xét tổng thể, cải cách này đã tạo ra ảnh hưởng sâu rộng đối với cơ cấu kinh tế.'),('如何在效率与公平之间取得平衡，一直是社会讨论的重点。','Rúhé zài xiàolǜ yǔ gōngpíng zhījiān qǔdé pínghéng, yìzhí shì shèhuì tǎolùn de zhòngdiǎn.','Làm thế nào cân bằng giữa hiệu quả và công bằng luôn là trọng tâm thảo luận của xã hội.'),('面对不断变化的技术趋势，教育体系也需要及时调整。','Miànduì bùduàn biànhuà de jìshù qūshì, jiàoyù tǐxì yě xūyào jíshí tiáozhěng.','Trước xu hướng công nghệ không ngừng thay đổi, hệ thống giáo dục cũng cần điều chỉnh kịp thời.'),('这一现象背后的原因远比表面上看起来复杂。','Zhè yí xiànxiàng bèihòu de yuányīn yuǎn bǐ biǎomiàn shàng kàn qǐlái fùzá.','Nguyên nhân phía sau hiện tượng này phức tạp hơn nhiều so với vẻ bề ngoài.'),('如果缺乏长期规划，再好的想法也很难真正落实。','Rúguǒ quēfá chángqī guīhuà, zài hǎo de xiǎngfǎ yě hěn nán zhēnzhèng luòshí.','Nếu thiếu quy hoạch dài hạn thì ý tưởng tốt đến đâu cũng khó được thực hiện thực sự.'),('研究人员正在进一步验证这一结论是否具有普遍性。','Yánjiū rényuán zhèngzài jìnyíbù yànzhèng zhè yí jiélùn shìfǒu jùyǒu pǔbiànxìng.','Các nhà nghiên cứu đang tiếp tục kiểm chứng liệu kết luận này có tính phổ quát hay không.'),('这项决定不仅关系到企业利益，也涉及消费者的长期权益。','Zhè xiàng juédìng bùjǐn guānxì dào qǐyè lìyì, yě shèjí xiāofèizhě de chángqī quányì.','Quyết định này không chỉ liên quan đến lợi ích doanh nghiệp mà còn liên quan đến quyền lợi lâu dài của người tiêu dùng.'),('在缺少充分证据的情况下，我们不宜过早得出结论。','Zài quēshǎo chōngfèn zhèngjù de qíngkuàng xià, wǒmen bù yí guòzǎo déchū jiélùn.','Khi chưa có đủ bằng chứng, chúng ta không nên vội đưa ra kết luận.'),('只有不断反思并总结经验，才能逐步完善现有的方法。','Zhǐyǒu bùduàn fǎnsī bìng zǒngjié jīngyàn, cáinéng zhúbù wánshàn xiànyǒu de fāngfǎ.','Chỉ bằng cách không ngừng suy ngẫm và tổng kết kinh nghiệm mới có thể từng bước hoàn thiện phương pháp hiện tại.')]
}

def make_opts(correct, level, idx):
    pool=[]
    for x in T[level]:
        if x[0]!=correct: pool.append(x[0])
    # add existing bank audio from same level if needed
    pool += [x['audio'] for x in bank if x.get('level')==level and x['audio']!=correct][:30]
    random.Random(idx*997+level).shuffle(pool)
    return [correct]+pool[:3]

random.seed(42)
targets={1:50,2:50,3:50,4:50,5:50,6:50}
new=[]
for lvl,n in targets.items():
    templates=T[lvl]
    i=0
    # Generate contextual variants by appending simple contextual clauses for lower levels / fixed variants for higher
    while i<n:
        base_item=templates[i%len(templates)]
        audio,pinyin,meaning=base_item
        # keep base first pass, then variant suffixes
        if i>=len(templates):
            if lvl<=2:
                contexts=[('今天','hôm nay'),('明天','ngày mai'),('周末','cuối tuần'),('晚上','buổi tối'),('现在','bây giờ')]
                c,cv=contexts[(i//len(templates))%len(contexts)]
                if audio.endswith('。'):
                    audio2=audio[:-1]+' '+c+'。'
                    pinyin2=pinyin.rstrip('.')+' '+({'今天':'jīntiān','明天':'míngtiān','周末':'zhōumò','晚上':'wǎnshang','现在':'xiànzài'}[c])+'。'
                    meaning2=meaning.rstrip('。')+' '+cv+'。'
                else: audio2=audio; pinyin2=pinyin; meaning2=meaning
            else:
                # use a natural follow-up question/statement variant
                tails=[('你怎么看？','Nǐ zěnme kàn?','Bạn nghĩ sao?'),('这是一个值得考虑的问题。','Zhè shì yí ge zhíde kǎolǜ de wèntí.','Đây là vấn đề đáng cân nhắc.'),('我们需要进一步讨论。','Wǒmen xūyào jìnyíbù tǎolùn.','Chúng ta cần thảo luận thêm.'),('请根据实际情况决定。','Qǐng gēnjù shíjì qíngkuàng juédìng.','Hãy quyết định dựa trên tình hình thực tế.')]
                tail=tails[(i//len(templates))%len(tails)]
                audio2=audio.rstrip('。')+'，'+tail[0]
                pinyin2=pinyin.rstrip('.')+', '+tail[1]
                meaning2=meaning.rstrip('。')+', '+tail[2]
        else:
            audio2,pinyin2,meaning2=audio,pinyin,meaning
        key=(lvl,audio2)
        if key in existing:
            i+=1; continue
        opts=make_opts(audio2,lvl,len(new)+123)
        # randomize with correct index
        rnd=random.Random(len(new)+lvl*1234); rnd.shuffle(opts); correct=opts.index(audio2)
        new.append({'level':lvl,'audio':audio2,'pinyin':pinyin2,'options':opts,'correct':correct,'meaning':meaning2})
        existing.add(key); i+=1

bank.extend(new)
assert len(bank)>2000, len(bank)
# replace block
newjson=json.dumps(bank,ensure_ascii=False,indent=1)
s2=s[:m.start(1)]+newjson+s[m.end(1):]
open(p,'w',encoding='utf8').write(s2)
print('old',len(bank)-len(new),'new',len(new),'total',len(bank),Counter(x['level'] for x in bank))
