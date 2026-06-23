/* ============================================
   曦月 & 苏晨 — 光遇友情记
   基于邮件整理的完整信笺集
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // 1. 星空粒子动画
    // ========================================
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initStars(count) {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.8 + 0.3,
                alpha: Math.random() * 0.6 + 0.1,
                speed: Math.random() * 0.3 + 0.05,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinklePhase: Math.random() * Math.PI * 2,
            });
        }
    }

    function drawStars(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const star of stars) {
            const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * twinkle})`;
            ctx.fill();
            star.y -= star.speed;
            if (star.y < -10) {
                star.y = canvas.height + 10;
                star.x = Math.random() * canvas.width;
            }
        }
        requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    initStars(200);
    requestAnimationFrame(drawStars);
    window.addEventListener('resize', () => { resizeCanvas(); initStars(200); });

    // ========================================
    // 2. 信笺数据 — 从邮件整理
    // ========================================
    const lettersData = [
        {
            id: 1, date: '2026-02-17', icon: '💌',
            title: '第一封邮件',
            preview: '"Dear 苏晨，This is 曦月."',
            stamp: '📮',
            content: `
                <p>2026年2月17日，曦月发了第一封邮件给苏晨。</p>
                <p>很简单的一句话："Dear 苏晨，This is 曦月。"</p>
                <p>谁也没想到，这简单的一句话，开启了我们之间整整79封邮件的往来。</p>
                <p>从这一天开始，我们用邮件记录下了属于我们的故事。</p>
                <div class="letter-photo empty">💌 第一封邮件的截图（待上传）</div>
                <div class="letter-sign">—— 整理自邮件记录</div>
            `
        },
        {
            id: 2, date: '2026-02-18', icon: '🐱',
            title: '我家小猫',
            preview: '苏晨第一次发照片——她家的小猫',
            stamp: '🐾',
            content: `
                <p>苏晨发了她家小猫的照片给曦月。</p>
                <p>小猫没有名字，叫"小猫"它就会过来。它看着傻傻的，但其实很聪明，会抓老鼠，还会跑出去和别的猫干架——虽然小身板经常打不过，有次腿上的肉都露出来了。</p>
                <p>曦月看到照片笑得不行，说这猫的表情太可爱了，有一种贴在脸上的感觉。</p>
                <p>这是苏晨第一次给曦月发照片。分享生活里的一只小猫，就这么开始了我们的友谊。</p>
                <div class="letter-photo empty">🐱 苏晨家的小猫（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 3, date: '2026-02-20', icon: '🍎',
            title: '穿了衣服的苹果',
            preview: '分享一个害羞的苹果——上面长了图案',
            stamp: '🍎',
            content: `
                <p>苏晨又分享了一个有趣的东西——一个"穿了衣服"的苹果，上面有好看的图案。</p>
                <p>曦月说这苹果看着相当高级，原来是在苹果成熟前贴上贴纸，等它自然成熟后就会有图案了，甚至可以做成爱心或者福字的形状。</p>
                <p>生活中的小惊喜，就是这样简单又可爱。</p>
                <div class="letter-photo empty">🍎 害羞的苹果（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 4, date: '2026-02-22', icon: '🥟',
            title: '偷偷分早餐给小猫',
            preview: '"我今天又把我的早餐偷偷分给我家小猫了"',
            stamp: '🍜',
            content: `
                <p>"To:曦月"</p>
                <p>"我今天又把我的早餐偷偷分给我家小猫了。"</p>
                <p>苏晨开始用正式的邮件格式给曦月写信了。每次吃不完饭，就会偷偷往猫的饭盒里倒——因为光明正大的话，妈妈就知道她没有好好吃饭了。</p>
                <p>曦月说这只猫跟着苏晨从来不会饿肚子。从这天开始，苏晨的邮件越来越有模有样了。</p>
                <div class="letter-photo empty">🥟 早餐分猫（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 5, date: '2026-02-24', icon: '🎆',
            title: '光遇跨年的默契',
            preview: '两个人都截了跨年的图，发给对方',
            stamp: '🌟',
            content: `
                <p>曦月在邮件里分享了她在光遇跨年时截的几张照片。</p>
                <p>巧的是，苏晨也截了同样的画面。"居然如此默契。"</p>
                <p>曦月说那是她第一次在游戏里跨年——人间烟火，星光沙漠。非常特别的一次经历。</p>
                <p>虽然不在同一个地方，但在同一片天空下一起跨年，也是一件很浪漫的事。</p>
                <div class="letter-photo empty">🎆 光遇跨年截图（待上传）</div>
                <div class="letter-sign">—— 曦月 & 苏晨</div>
            `
        },
        {
            id: 6, date: '2026-02-24', icon: '🐈',
            title: '新疆猫吃辣条',
            preview: '苏晨说她的猫还吃辣条，比她还爱吃垃圾食品',
            stamp: '🌶️',
            content: `
                <p>聊到苏晨家的猫，曦月问为什么不光明正大给猫喂食。</p>
                <p>苏晨说她的猫是"新疆猫，新疆魂"，不仅不挑食，还吃辣条，比她还喜欢吃垃圾食品。</p>
                <p>曦月养过一只英短叫奥利奥（Orio），胖乎乎的但是很挑食，和苏晨的猫完全不一样。</p>
                <p>猫和猫不一样，人和人也不一样，但我们就是能聊到一起去。</p>
                <div class="letter-photo empty">🐈 新疆猫 vs 奥利奥（待上传）</div>
                <div class="letter-sign">—— 苏晨 & 曦月</div>
            `
        },
        {
            id: 7, date: '2026-02-24', icon: '🌙',
            title: '半夜"妖猫"惊魂',
            preview: '大半夜被猫叫吓到，结果是妈妈的手电筒',
            stamp: '🔦',
            content: `
                <p>苏晨讲了一个又恐怖又好笑的经历：</p>
                <p>大半夜她被院子里的猫叫声吓醒，声音很恐怖，加上她一个人睡，联想到了以前听过的黑猫恐怖故事。就在这时，窗户那边突然很亮又恢复正常，过一会儿又一个亮光……</p>
                <p>苏晨当时真的以为有妖猫来了，快吓死了。</p>
                <p>结果那个光是她妈照的手电筒——妈妈想让猫进来，猫进了又想出去，于是有了两次白光。</p>
                <p>"只剩我一个快吓死的人。"</p>
                <p>曦月笑疯了，说这就像看了特别恐怖的鬼电影，最后发现新中国不允许妖怪成精。</p>
                <div class="letter-photo empty">🔦 惊魂一夜（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 8, date: '2026-03-03', icon: '🏮',
            title: '元宵节快乐！',
            preview: '"今天元宵节了，你吃汤圆了吗？"',
            stamp: '🌕',
            content: `
                <p>元宵节，苏晨发来问候："今天元宵节了，你吃汤圆了吗？网上说今天晚上也会有血月。"</p>
                <p>曦月在苏州，那天是阴雨天，看不到月亮。</p>
                <p>但曦月用英文回复了！她说最近在练习英语，投国际学校的生物教师职位，所以不自觉就想用英文发邮件。</p>
                <p>她还推荐苏晨用豆包APP学英语，可以直接和豆包对话。</p>
                <p>从这一封邮件开始，两人开启了中英混杂的邮件模式——苏晨后来也用豆包给她回英文邮件了。</p>
                <div class="letter-photo empty">🏮 元宵节（待上传）</div>
                <div class="letter-sign">—— 苏晨 & 曦月</div>
            `
        },
        {
            id: 9, date: '2026-03-04', icon: '🤣',
            title: '豆包说"太暧昧了"',
            preview: '苏晨让豆包写英文邮件，豆包给了三个版本后问：是不是有点太暧昧了？',
            stamp: '😂',
            content: `
                <p>苏晨用豆包学写英文邮件。</p>
                <p>她跟豆包说：我想写给我一个温柔的朋友。</p>
                <p>豆包给了她三个模板。苏晨看完问豆包：</p>
                <p>"是不是有点太暧昧了？"</p>
                <p>豆包说："哈哈我懂你的意思！我给你重新写一个。"</p>
                <p>苏晨把这件事告诉曦月，说豆包太搞笑了，笑得不行。</p>
                <p>曦月说她也在用豆包，甚至用豆包P图，已经快不用百度和Google了。</p>
                <div class="letter-photo empty">🤣 豆包的聊天记录（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 10, date: '2026-03-04', icon: '🕯️',
            title: '维语祝福',
            preview: '苏晨用维语拼音写了一段祝福，发誓没有骂曦月',
            stamp: '📜',
            content: `
                <p>苏晨发了一串看起来像英文的拼音：</p>
                <p>"siz bak yahxi, qukum siz yahxi kurudugan, umutlaydigan turmuxka erixisiz."</p>
                <p>她说这是她的母语用拼音表达的，是真诚的祝福。怕曦月误会她在骂人，还发了个毒誓——"骂你我一辈子发不了财，一胎生八百个儿子"。</p>
                <p>没想到，曦月居然看懂了！</p>
                <p>曦月回复："愿你一切都好，愿你拥有美好、充满希望的生活。"</p>
                <p>苏晨震惊了："不是吧曦月，你居然看得懂维语？！你到底有什么是不会的！"</p>
                <div class="letter-photo empty">📜 维语祝福（待上传）</div>
                <div class="letter-sign">—— 苏晨 & 曦月</div>
            `
        },
        {
            id: 11, date: '2026-03-08', icon: '🌸',
            title: '女神节快乐',
            preview: '互相祝福——愿你每一天都快乐',
            stamp: '💐',
            content: `
                <p>三八女神节，苏晨发来：Happy Women's Day!</p>
                <p>曦月回复：</p>
                <p>"Maybe I should send you this message yesterday, but I hope you can feel happy every day, not just women's day."</p>
                <p>苏晨说："Thanks for the lovely wish! I hope you have a wonderful day, every day too."</p>
                <p>不是只有节日才快乐，而是希望你每天都快乐——这大概是好朋友之间最真诚的祝福了。</p>
                <div class="letter-photo empty">🌸 女神节祝福（待上传）</div>
                <div class="letter-sign">—— 曦月 & 苏晨</div>
            `
        },
        {
            id: 12, date: '2026-03-08', icon: '📸',
            title: '光遇极光合照',
            preview: '苏晨分享在光遇里拍的极光合照',
            stamp: '✨',
            content: `
                <p>苏晨分享了她拍的光遇极光合照。</p>
                <p>曦月看了直呼："哇，不得不说你拍的真的是很棒诶！每一张我都可以用来做壁纸了。"</p>
                <p>曦月说苏晨有摄影师的天赋。</p>
                <p>苏晨谦虛地说是因为游戏的画质好看，怎么拍都好看。</p>
                <p>但曦月坚持说构图也很讲究——"说真的你其实还蛮有天赋的，就是太谦虚了。"</p>
                <div class="letter-photo empty">📸 光遇极光合照（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 13, date: '2026-03-10', icon: '💤',
            title: '猎奇梦',
            preview: '苏晨梦见被坏人抓了，坏人掏出两个练习册当刀……',
            stamp: '😴',
            content: `
                <p>苏晨做了一个非常猎奇的梦：</p>
                <p>她梦见被坏人抓了，坏人要吃她。她跟坏人说能不能给个痛快，坏人说可以，然后掏出两个练习册，用练习册抹她的脖子。</p>
                <p>可是练习册不够锋利，只开了个口子。坏人说我也没办法，没有别的工具。然后苏晨就躺在那等着血流干，好多坏人排队等着她死了吃她。</p>
                <p>"好搞笑，拿练习册刀人。但是我醒来后脖子也怪怪的。"</p>
                <p>这个梦太好笑了——在梦里都要被练习册折磨，学生党的噩梦（字面意思）。</p>
                <div class="letter-photo empty">💤 猎奇梦配图（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 14, date: '2026-03-10', icon: '🤪',
            title: '"傻蛋"称号的由来',
            preview: '苏晨叫曦月"傻蛋曦月"，然后自己也叫自己"傻蛋晨"',
            stamp: '🥚',
            content: `
                <p>苏晨发现曦月不知道光遇有自带截图功能，一直在用手机拍屏幕。</p>
                <p>苏晨笑她："没带相机，傻蛋曦月你是不是不知道光遇有自带截图的？"</p>
                <p>然后她自己加了一句："我也骂自己傻蛋了噢。"</p>
                <p>从这天起，两人的称呼里多了"傻蛋"——但因为太可爱了，曦月说她很喜欢这个称呼。</p>
                <p>"沙丹曦月"——听起来像是某种甜甜的点心名字。</p>
                <div class="letter-photo empty">🤪 傻蛋称号（待上传）</div>
                <div class="letter-sign">—— 苏晨 & 曦月</div>
            `
        },
        {
            id: 15, date: '2026-03-11', icon: '😴',
            title: '午睡两小时',
            preview: '苏晨吃完午饭睡了两小时，醒来后悔晚上又要听室友打呼噜了',
            stamp: '🛏️',
            content: `
                <p>苏晨说中午吃完饭好困好困，沾着枕头就睡着了，睡了两个多小时。</p>
                <p>醒了之后头晕晕的，眼睛睁不开，想着晚上肯定睡不着了，又要听室友打呼噜了。</p>
                <p>曦月给了好多建议：可能是碳水吃多了导致晕碳、可以问辅导员能不能换宿舍、试试耳塞或者白噪音……</p>
                <p>最后曦月说："睡眠是头等大事，希望你可以尽快找到适合你的解决方案，有个好觉。"</p>
                <p>好朋友就是这样，你说困了，她会认真给你想解决办法。</p>
                <div class="letter-photo empty">😴 午睡日常（待上传）</div>
                <div class="letter-sign">—— 苏晨 & 曦月</div>
            `
        },
        {
            id: 16, date: '2026-03-15', icon: '🎨',
            title: '苏晨画的猫',
            preview: '苏晨画了一幅猫的素描——用了一个下午，送给朋友当生日礼物',
            stamp: '🖼️',
            content: `
                <p>苏晨分享了她画的猫——一幅铅笔素描，毛发都栩栩如生。</p>
                <p>曦月惊呆了："天呐，怎么什么都会啊！上次弹乐器也很好听，没想到美术也这么棒！"</p>
                <p>苏晨说她美术从小就很好，画了一下午，因为是要送人当生日礼物的，画得很认真。</p>
                <p>曦月说这是她目前认识的最多才多艺的人——画画好看、弹乐器厉害、还很会拍照。</p>
                <p>苏晨说曦月是她认识的人里面学历最高、最自律、最优秀的人。</p>
                <p>互相欣赏的朋友，真好。</p>
                <div class="letter-photo empty">🎨 苏晨画的猫素描（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 17, date: '2026-03-18', icon: '👓',
            title: '眼镜给书占座了',
            preview: '苏晨的眼镜不见了，结果发现它被用来给同学占座了',
            stamp: '📚',
            content: `
                <p>苏晨上早课之前翻书包，发现眼镜不见了。</p>
                <p>她正想着会落在哪里，打算去昨天的教室找找。这时候她的上学搭子来了，问她后面位置是不是给她占的。</p>
                <p>苏晨一回头——她的眼镜正躺在后座上，被她用来给搭子占座了。</p>
                <p>还好没丢。</p>
                <p>曦月说跟她之前找钥匙的经历好像——找了半天发现钥匙在包里。</p>
                <p>有时候健忘也可以很可爱。</p>
                <div class="letter-photo empty">👓 眼镜占座记（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 18, date: '2026-03-18', icon: '🙈',
            title: '躲猫猫活动最后一天',
            preview: '躲猫猫活动要结束了，曦月赶在最后一天上线一起拍照',
            stamp: '📷',
            content: `
                <p>光遇的躲猫猫活动最后一天了，苏晨好着急。</p>
                <p>曦月本来在忙面试和准备试讲，但看到消息后立刻回复："等我5分钟，马上上线。"</p>
                <p>她赶在最后一天参加了活动，两人在游戏里一起拍了躲猫猫的照片。</p>
                <p>曦月还拍到了苏晨的脚底是黑色的，笑翻了。</p>
                <p>曦月说苏晨在躲猫猫里拍的视角很好看，很有氛围感。</p>
                <div class="letter-photo empty">🙈 躲猫猫活动（待上传）</div>
                <div class="letter-sign">—— 曦月 & 苏晨</div>
            `
        },
        {
            id: 19, date: '2026-03-18', icon: '🎵',
            title: '遇境合奏',
            preview: '在遇境用乐器合奏，路过的朋友也加入了',
            stamp: '🎶',
            content: `
                <p>在遇境，苏晨拿出了竖琴，曦月拿出了钢琴。</p>
                <p>他们试着合奏——虽然经常弹错，但配合起来的感觉真的很棒。</p>
                <p>后来有两个路人朋友也加入了，四个人围成一圈，各种乐器乱七八糟地响着。</p>
                <p>音乐是光遇里最温暖的交流方式之一。不需要说话，音符就够了。</p>
                <div class="letter-photo empty">🎵 遇境合奏（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 20, date: '2026-03-19', icon: '🔮',
            title: '水晶球和彩虹岛',
            preview: '躲猫猫活动里拍了水晶球和彩虹岛的照片',
            stamp: '🌈',
            content: `
                <p>苏晨说下次上线如果躲猫猫活动还没结束，想拍水晶球里的照片。</p>
                <p>还可以用小不点魔法进水晶里面拍。</p>
                <p>曦月也分享了她那边拍的照片——很多很多张，同一幕从不同视角拍出来感觉完全不一样。</p>
                <p>两个人都拍了好多，虽然是在同一个地方，但各自镜头下的风景各有各的美。</p>
                <div class="letter-photo empty">🔮 水晶球和彩虹岛（待上传）</div>
                <div class="letter-sign">—— 苏晨 & 曦月</div>
            `
        },
        {
            id: 21, date: '2026-04-05', icon: '🐟',
            title: '喂锦鲤',
            preview: '苏晨去喂学校池塘的锦鲤，用早餐面包喂的',
            stamp: '🎏',
            content: `
                <p>苏晨去喂学校池塘的锦鲤了。</p>
                <p>那些锦鲤被学生们喂得胖胖的。她用早餐面包喂的——买了三种面包，鱼都很喜欢吃。</p>
                <p>她说这还是她第一次喂鱼，感觉喂鱼很好玩，不过喂鱼的时候容易想吃鱼，有点心虚。</p>
                <p>曦月说这些锦鲤送得恰到好处——她正好在准备面试，希望锦鲤能给她带来好运。</p>
                <p>苏晨说如果有空还可以再去喂锦鲤，祝曦月面试顺利。</p>
                <div class="letter-photo empty">🐟 学校池塘的锦鲤（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 22, date: '2026-04-09', icon: '🎨',
            title: '手绘二维码的天才',
            preview: '曦月说她以前闲来无事手绘了一个二维码，还能扫出来',
            stamp: '📱',
            content: `
                <p>聊到画画的天赋，曦月分享了一个她的"丰功伟绩"：</p>
                <p>她以前闲来无事，手绘了一个二维码——不是打印，不是贴纸，是一个一个格子画出来的。</p>
                <p>然后，她用手机居然扫出来了！</p>
                <p>"很神奇吧哈哈哈哈哈哈，不过总感觉那会儿精神不太正常，谁闲来无事手绘二维码呀。"</p>
                <p>苏晨说这不是精神不正常，这是天才干的事——天才的思维总是和普通人不一样。</p>
                <p>苏晨还问到了曦月的生日——12月24日。而苏晨的生日是7月25日。</p>
                <div class="letter-photo empty">🎨 手绘二维码（待上传）</div>
                <div class="letter-sign">—— 曦月</div>
            `
        },
        {
            id: 23, date: '2026-04-09', icon: '🏔️',
            title: '曦月去过新疆',
            preview: '曦月分享2024年在新疆喀什拍的照片，很有烟火气',
            stamp: '📷',
            content: `
                <p>聊到新疆水果，曦月说她之前去过新疆，对新疆的西瓜印象深刻——又甜又便宜，在伊犁5块钱买了两个大西瓜。</p>
                <p>她还分享了一张2024年在新疆喀什拍的照片，特别有当地的烟火气。</p>
                <p>苏晨看到后说："这些照片拍得也很绝啊，有种故事感，电影感。"</p>
                <p>苏晨也去过喀什，去年也拍了一些，但她说自己拍得很随便。</p>
                <p>曦月说："你有条件的话可以搞个二手相机试试，说不定以后做个独立摄影师也很酷。而且新疆的景色也美，得天独厚的条件。"</p>
                <div class="letter-photo empty">🏔️ 喀什街景（待上传）</div>
                <div class="letter-sign">—— 曦月</div>
            `
        },
        {
            id: 24, date: '2026-04-10', icon: '🌿',
            title: '雨林里拐到你',
            preview: '"我在雨林拐你是我做过最正确的选择"',
            stamp: '💚',
            content: `
                <p>苏晨说了一句让曦月特别感动的话：</p>
                <p>"我真的，在雨林拐你是我做过最正确的选择。一拐就拐了个如此优秀的人。我就知道我的眼光很好。"</p>
                <p>"群星皆暗，孤月独明，众人之中，我总是能够一眼望见最优者。"</p>
                <p>曦月说苏晨太夸张了，但心里一定很开心。</p>
                <p>在光遇的雨林里相遇，然后成为了好朋友——这大概就是所谓的缘分吧。</p>
                <div class="letter-photo empty">🌿 雨林相遇（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 25, date: '2026-04-10', icon: '🎓',
            title: '想做博士的曦月',
            preview: '曦月在准备当老师的同时，还想试试申请欧洲的博士',
            stamp: '📚',
            content: `
                <p>曦月说她在准备当老师的同时，又冒出一个新想法——试试申请博士，想去欧洲看看有没有好机会。</p>
                <p>苏晨："OMG真是个神明一般的女人，太佩服你了。我看过博士论文好几百页，让我写个五六页我就愁得不行。"</p>
                <p>苏晨还说："多一个像你这种优秀的女性，这世界就多一份美好。"</p>
                <p>不过她也调侃："好多博士头发少，要注意保养头发哦，不要因为读博压力大变成美丽的秃头了。"</p>
                <p>曦月面试了好多次，虽然有失败但一直在进步。苏晨一直鼓励她：失败乃成功之母，多试几次就好。</p>
                <div class="letter-photo empty">🎓 博士之路（待上传）</div>
                <div class="letter-sign">—— 曦月 & 苏晨</div>
            `
        },
        {
            id: 26, date: '2026-04-10', icon: '🍓',
            title: '新疆水果和酸草莓',
            preview: '新疆的水果很甜，但草莓不甜——从内地引进的，全是酸的',
            stamp: '🍉',
            content: `
                <p>聊到新疆的水果——红富士冰糖心苹果就在苏晨所在的城市。曦月说她之前去新疆时就感觉出来了，新疆的水果特别甜。</p>
                <p>但苏晨说新疆的草莓不甜，应该是从内地引进的，她从来没在新疆吃到过甜草莓，全是酸的。</p>
                <p>曦月说她其实还挺喜欢酸草莓的，酸酸甜甜的感觉，而且酸的水果富含维生素C，对皮肤好。</p>
                <p>"相信我，因为我就是学生物的哈哈哈哈哈。不过吃完记得漱口，以免酸的吃多了腐蚀牙齿。"</p>
                <p>一本正经地用生物学知识分析草莓，这就是学生物的曦月。</p>
                <div class="letter-photo empty">🍓 新疆水果（待上传）</div>
                <div class="letter-sign">—— 苏晨 & 曦月</div>
            `
        },
        {
            id: 27, date: '2026-06-19', icon: '🎋',
            title: '端午节快乐',
            preview: '很久没在光遇见到了，送上端午的祝福',
            stamp: '🐉',
            content: `
                <p>苏晨发了端午节的祝福给曦月：</p>
                <p>"很久没有看到你了，上次看见你还是在3月24号十二点在老奶奶干饭，不过你没醒。"</p>
                <p>曦月很忙——忙着找工作、转博、准备考试。苏晨说虽然她一直都很忙，但还是希望她能好好的。</p>
                <p>端午节祝福语特别用心：</p>
                <p>"薪水粽是上涨，干活粽是不忙，前途粽是辉煌，爱情粽是如糖，身体粽是健康！"</p>
                <p>曦月后来回复了："谢谢你一直惦记着我。"</p>
                <p>即使很久没见，好朋友还是会在节日里想起你。</p>
                <div class="letter-photo empty">🎋 端午节祝福（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        }
    ];

    // ========================================
    // 3. 渲染信封列表
    // ========================================
    const timeline = document.getElementById('lettersTimeline');
    lettersData.sort((a, b) => new Date(b.date) - new Date(a.date));

    function formatDate(dateStr) {
        const d = new Date(dateStr);
        const months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
        return {
            month: months[d.getMonth()],
            day: d.getDate(),
            year: d.getFullYear(),
            full: `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`
        };
    }

    function renderEnvelopes() {
        timeline.innerHTML = '';
        lettersData.forEach((letter, index) => {
            const fd = formatDate(letter.date);
            const env = document.createElement('div');
            env.className = 'letter-envelope';
            env.style.animation = `fadeInUp 0.6s ease ${index * 0.06}s both`;
            env.dataset.id = letter.id;

            env.innerHTML = `
                <div class="env-date">
                    <span class="env-month">${fd.month}</span>
                    <span class="env-day">${fd.day}</span>
                    <span class="env-year">${fd.year}</span>
                </div>
                <div class="env-body">
                    <span class="env-icon">${letter.icon}</span>
                    <div class="env-info">
                        <div class="env-title">${letter.title}</div>
                        <div class="env-preview">${letter.preview}</div>
                    </div>
                    <span class="env-arrow">→</span>
                </div>
                <span class="env-stamp">${letter.stamp}</span>
            `;
            env.addEventListener('click', () => openLetter(letter));
            timeline.appendChild(env);
        });
    }

    // ========================================
    // 4. 打开信笺
    // ========================================
    const modal = document.getElementById('letterModal');
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalClose');
    const modalDate = document.getElementById('modalDate');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    function openLetter(letter) {
        const fd = formatDate(letter.date);
        modalDate.textContent = fd.full;
        modalTitle.textContent = letter.title;
        modalBody.innerHTML = letter.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.getElementById('modalPaper').scrollTop = 0;
    }

    function closeLetter() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLetter);
    backdrop.addEventListener('click', closeLetter);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLetter();
    });

    // ========================================
    // 5. 导航 & 滚动
    // ========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        const sections = ['home', 'letters', 'about'];
        let current = 'home';
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 200) current = id;
        }
        navLinks.querySelectorAll('a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    renderEnvelopes();
    console.log('☁️ 曦月 & 苏晨 — 27封信笺已加载');
});
