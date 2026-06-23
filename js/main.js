/* ============================================
   曦月 & 苏晨 — 光遇友情记
   全部使用邮件原文
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

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
    // 信件数据 — 全部使用邮件原文
    // ========================================
    const lettersData = [
        {
            id: 1, date: '2026-02-17', icon: '💌',
            title: '曦月',
            preview: 'Dear 苏晨，This is 曦月.',
            stamp: '📮',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>Dear 苏晨，</p>
<p>This is 曦月.</p>
<p>Best wishes,</p>
<p>xiyue</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 2, date: '2026-02-18', icon: '🐱',
            title: '我家小猫',
            preview: '我家小猫🤓',
            stamp: '🐾',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>我家小猫🤓</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 3, date: '2026-02-20', icon: '🍎',
            title: '苹果穿了衣服',
            preview: '前几天吃的苹果，还蛮害羞的，都穿上衣服了🤣',
            stamp: '🍎',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>哈哈哈哈哈其实是我刚放寒假那会儿一进门我就把他拽过来贴在手机拍的，他没有名字，一般我们说小猫过来，他就会过来<br>其实这个发照片也研究了一会儿才会的哈哈哈哈</p>
<p>前几天吃的苹果，还蛮害羞的，都穿上衣服了🤣</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 4, date: '2026-02-22', icon: '🥟',
            title: '偷偷分早餐',
            preview: '我今天又把我的早餐偷偷分给我家小猫了🤣',
            stamp: '🍜',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>To:曦月</p>
<p>我今天又把我的早餐偷偷分给我家小猫了🤣</p>
<p>苏晨</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 5, date: '2026-02-24', icon: '🌶️',
            title: '新疆猫吃辣条',
            preview: '新疆猫，新疆魂，它还吃辣条',
            stamp: '🐈',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>新疆猫，新疆魂，它还吃辣条，比我还喜欢吃垃圾食品😺</p>
<p>因为我光明正大的话我妈不就知道我没好好吃饭了吗<br>我给它的是我碗里的饭，我每次觉得饭多就会往猫的饭盒里放🤫</p>
<p>我记得我也截图了哈哈哈哈哈<br>居然如此默契🤪</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 6, date: '2026-02-24', icon: '🔦',
            title: '半夜妖猫惊魂',
            preview: '大半夜猫叫，我以为是妖猫来了，结果是妈妈的手电筒',
            stamp: '🔦',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>它真的看着很傻的样子，但是很聪明，还会抓老鼠，那小身板还跑去和别的猫干架，虽然我没亲眼看过，但是有次它腿的肉都漏出来了🙀</p>
<p>平时也很安静，但是偶尔很吵，至于是怎么吵的那就不得不说前几天了，不知道抽的什么风，大半夜在院子里和别的猫一起叫，很恐怖，刚好那时候我醒了，听到那叫声我都快吓死了大半夜的，房间又是我一个人睡的，然后我想到了以前听过的恐怖故事黑猫，然后这时候我房间窗户那边突然很亮后又恢复正常，过一会儿它们又叫，然后有一个亮光，当时我真的以为有妖猫来了，真的吓死我了，结果那个光是我妈照的手电筒，原因是我妈想让猫进来，但是猫进了又想出去，于是有了两次白光，只剩我一个快吓四的人😇</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 7, date: '2026-02-24', icon: '🎆',
            title: '跨年的截图',
            preview: '在跨年的时候我截屏的一些照片，感觉还蛮有纪念意义的',
            stamp: '🌟',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>那你家猫感觉不挑食，挺好的</p>
<p>不过为啥不能正大光明给呢哈哈哈哈哈哈🤣</p>
<p>对咯，之前在跨年的时候我截屏的一些照片哈哈哈感觉还蛮有纪念意义的~</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 8, date: '2026-03-03', icon: '🏮',
            title: '元宵节快乐',
            preview: '今天元宵节了，你吃汤圆了吗？网上说今天晚上也会有血月🌕',
            stamp: '🌕',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>今天元宵节了，你吃汤圆了吗</p>
<p>网上说今天晚上也会有血月🌕</p>
<p>Finally,<br>晨</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 9, date: '2026-03-03', icon: '🤪',
            title: '傻蛋曦月和傻蛋晨',
            preview: '没带相机，傻蛋曦月你是不是不知道光遇有自带截图',
            stamp: '🥚',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>没带相机，傻蛋曦月你是不是不知道光遇有自带截图的，像相机一样清晰，在右下角可以截图，还可以录视频，但不会把聊天的拍到🤣</p>
<p>下次截图可以试试，我以为那是你想把聊天记录做个念想截的图哈哈哈哈</p>
<p>Best,<br>傻蛋晨<br>(我也骂自己傻蛋了噢😁)</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 10, date: '2026-03-04', icon: '🤣',
            title: 'The funny Doubao',
            preview: '豆包给的英文模板太暧昧了哈哈哈哈哈',
            stamp: '😂',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>Dear Xi Yue,<br>You know what? I just told Doubao to teach me how to write an English email.<br>She gave me a few templates and asked who I was writing to.</p>
<p>I said I wanted to write to a gentle friend.</p>
<p>Then she gave me three versions.</p>
<p>After I read them, I asked her: Isn&#x27;t this a little too flirty?</p>
<p>And she said: Hahaha I get what you mean! I&#x27;ll make a new one for you.</p>
<p>Doubao is so funny, I&#x27;m laughing so hard 🤣</p>
<p>Best,<br>Chen</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 11, date: '2026-03-04', icon: '🕯️',
            title: '维语祝福',
            preview: '这是我母语用拼音表达的，没有偷偷骂你哦',
            stamp: '📜',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>元宵节快乐！</p>
<p>那你以后可以经常发英文邮件，我看不懂，但豆包看得懂🤓</p>
<p>国际学校的生物老师听起来就很厉害，我觉得你这英语水平肯定没问题</p>
<p>siz bak yahxi ,qukum siz yahxi kurudugan ,umutlaydigan turmuxka erixisiz.</p>
<p>注意，👆这一串拼音不是英文，不用试图翻译它，但你放心这是一个真诚的祝福，是我母语用拼音表达的，不是英文，没有偷偷骂你哦，骂你我一辈子发不了财，一胎生八百个儿子，好恶毒的诅咒🙀</p>
<p>豆包是我最好的学习搭子呢😁</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 12, date: '2026-03-08', icon: '🌸',
            title: '女神节快乐！',
            preview: "Happy Women's Day!🥳",
            stamp: '💐',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>Happy Women&#x27;s Day!🥳</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 13, date: '2026-03-08', icon: '📸',
            title: '极光合照',
            preview: '👻（分享照片）',
            stamp: '✨',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>👻</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 14, date: '2026-03-09', icon: '🌸',
            title: '愿你每天都快乐',
            preview: "I hope you can feel happy every day, not just women's day",
            stamp: '💐',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>Happy women&#x27;s day~</p>
<p>Maybe i should send you this message yesterday, hhh, But i think i hope you can feel happy every day, not just women&#x27;s day.🤪</p>
<p>All the best,<br>xiyue</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 15, date: '2026-03-10', icon: '💤',
            title: '猎奇梦',
            preview: '梦见被坏人抓了，她掏出两个练习册mo我脖子',
            stamp: '😴',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>昨晚睡觉梦见被坏人抓了，要吃我，我说能不能给个痛快，她说可以，然后她掏出两个练习册用练习册mo了我脖子，然后练习册不够锋利，只开了个口子，她说我也没办法，没有别的工具，然后我就躺在那儿等着血流干，好多坏人在排队等我死了吃我</p>
<p>好搞笑，拿练习册dao人</p>
<p>但是我醒来后脖子也怪怪的🤔</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 16, date: '2026-03-11', icon: '😴',
            title: '午睡',
            preview: '中午吃完饭后好困，睡了两个多小时，晚上又要睡不着了',
            stamp: '🛏️',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>Dear 月，</p>
<p>我今天中午吃完饭后好困好困，沾着枕头就睡觉了，睡了两个多小时，我说现在睡多了晚上睡不着想起还起不来，眼睛睁不开，脑子晕晕的，晚上睡的这样沉也就好了，看来晚上又要睡不着了，又要听室友打呼噜了😱</p>
<p>Best,<br>晨</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 17, date: '2026-03-14', icon: '🔮',
            title: '躲猫猫拍这个吧',
            preview: '下次上线躲猫猫活动没有结束的话我们拍这个吧',
            stamp: '🌈',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>Dear 月，</p>
<p>下次上线躲猫猫活动没有结束的话我们拍这个吧👇<br>还可以用小不点魔法进水晶里面拍😁</p>
<p>Best,<br>晨</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 18, date: '2026-03-15', icon: '🎨',
            title: '我画的猫',
            preview: '我画的猫😁',
            stamp: '🖼️',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>我画的猫😁👻👻👻👻👻(≧∇≦)/(ૢ˃ꌂ˂⁎)🤩🤩🤩🤩🤫🤫🤫🤫🤭🤭🤭🤭</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 19, date: '2026-03-18', icon: '👓',
            title: '眼镜',
            preview: '眼镜不见了，原来被我用来给同学占座了',
            stamp: '📚',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>今天上早课上课之前翻书包突然发现眼镜不见了，然后我想会落在哪里呢？然后我就打算去昨天上课的教室看看，心里祈祷眼镜不要丢，过了一会儿我的上学搭子来了，她问我我后面位置是不是给她占的，我一回头看，我眼镜给她们占座了，还好没丢😃</p>
<p>躲猫猫活动今天要结束了😭</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 20, date: '2026-03-18', icon: '🙈',
            title: '我上线啦',
            preview: '我已经上线啦，咱们一起去躲猫猫拍照',
            stamp: '📷',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>我已经上线啦，我猜你这会儿是不是还在上课，我先自己探索一下哈哈哈</p>
<p>best，<br>曦月</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 21, date: '2026-04-09', icon: '💡',
            title: '关于睡觉的建议',
            preview: '睡眠是头等大事，希望你可以尽快找到适合你的解决方案',
            stamp: '🎧',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>吃完饭很多人都会困的，是不是碳水吃多了，比如面粉米饭啥的，会有晕碳的现象，我也会的。另外中午困的话就可以稍微睡一下，当你困的时候说明你的身体现在就非常需要睡眠了。</p>
<p>另外室友打呼噜确实蛮痛苦的，非常能够理解，我之前也是有个室友打呼噜搞得我经常失眠，不知道你可不可以问一下辅导员看看能不能换宿舍？</p>
<p>如果学校那边实在换不了宿舍的话，你要不要试一下买耳塞呀，好像有那种软软的记忆棉啥的。实在不行，好像也有那种耳机，然后你播放下雨的声音，还有那种主动降噪的耳机也可以试试~</p>
<p>总之，睡眠是头等大事，多尝试一些办法，不能忽视，希望你可以尽快找到适合你的解决方案，有个好觉~🫂晚安~</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 22, date: '2026-04-09', icon: '📱',
            title: '手绘二维码',
            preview: '我以前手绘了一个二维码，还能用手机扫出来',
            stamp: '📱',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>羡慕了，感觉你真的应该当个画家哈哈哈哈</p>
<p>这个生日礼物很用心了，对了，我记得你在去年12月22日的时候和我说过，你的生日是在7月份，具体的日期是多少号呀，客服告知在下😉</p>
<p>等我有时候真的仔细找找，我以前画的两幅画，都是很久的时候画的了，我艺术天赋一般般其实，我之前甚至有一次闲来没有事手绘二维码哈哈哈哈哈哈，然后还能用手机扫出来~很神奇吧哈哈哈哈哈哈，不过总感觉那会儿精神不太正常，谁闲来无事手绘二维码呀哈哈哈哈哈哈哈</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 23, date: '2026-04-09', icon: '🎓',
            title: '想去欧洲读博士',
            preview: '我在准备当老师的同时，再去试试申请博士',
            stamp: '📚',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>哈哈哈谢谢你苏晨，虽然上次的面试没过，但是我感觉我也一直在进步，每一次都会比上一次讲的更好哈哈哈哈哈，就比如我昨天其实就讲的不错，不过结果可能会过段时间出来，期间继续准备其他的面试或者考试哈哈哈🤣这玩意就和打游戏一样，多试验几次就有经验了hh</p>
<p>我最近又冒出来一个新的想法，可能我在准备当老师的同时，再去试试申请博士，想去欧洲看看有没有好的机会哈哈哈，目前也在同步进行中</p>
<p>best,<br>yue</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 24, date: '2026-04-10', icon: '🐟',
            title: '喂锦鲤',
            preview: '这些锦鲤是学校池塘的鱼，用早餐面包喂的',
            stamp: '🎏',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>没关系啊，不用道歉的，你边读研边找工作，还有各种考试本来就很忙很累了，还有这个邮箱要登外网回复也够麻烦的，你能够回复我就已经很开心啦~</p>
<p>这些锦鲤是学校池塘的鱼，可能学生们都比较喜欢喂小动物所以也喂鱼被喂胖了哈哈哈哈哈<br>对的，是用早餐面包喂的，买了三种面包，它们都很喜欢吃<br>那真的很巧诶，这周末没课，如果我有空的话还可以去喂锦鲤祝你面试顺利，给你带来好运哈哈哈哈<br>我们这边养鱼的池塘不常见，池塘很少，只有一些公园有，但公园里的都不算池塘，算湖，因为太大了哈哈哈哈哈<br>这还是我第一次喂鱼呢，我感觉喂鱼很好玩，不过喂鱼的时候容易想吃鱼，有点心虚🤫</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 25, date: '2026-04-10', icon: '🌿',
            title: '最正确的选择',
            preview: '在雨林拐你是我做过最正确的选择',
            stamp: '💚',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>嘿嘿，不好看的部分裁掉了，都是裁掉调整了构图的了~<br>给我夸成翘嘴了哈哈哈哈哈哈哈<br>我艺术方面比较好是因为我从小就对艺术挺感兴趣的，我这专业也和艺术息息相关，我还蛮喜欢我这个专业的课程的，但也仅喜欢和艺术相关的课程而已哈哈哈哈哈哈，只对可以玩的感兴趣，要是能对学习感兴趣也好了，让我学习感觉要我命了似的哈哈哈哈哈<br>你也是我认识的人里面学历最高，最自律，最优秀的人</p>
<p>我真的，在雨林拐你是我做过最正确的选择哈哈哈哈哈，一拐就拐了个如此优秀的人，我就知道我的眼光很好，群星皆暗，孤月独明，众人之中，我总是能够一眼望见最优者嘿嘿🤓</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 26, date: '2026-06-19', icon: '🎋',
            title: '端午节快乐！',
            preview: '很久没有看到你了，上次看见你还是在3.24号',
            stamp: '🐉',
            content: `
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>Dear 月，<br>最近还好吗？很久没有看到你了，上次看见你还是在3.24号十二点在老奶奶干饭，不过你没醒哈哈哈哈哈<br>感觉你最近真的很忙呢，虽然你一直都忙就是了哈哈哈哈<br>最近是不是在忙着转博呀，还有忙工作，我想你应该已经找到了一份不错的工作，先恭喜你了🥳<br>最后，端午节快乐！<br>愿你：薪水&quot;粽&quot;是上涨，干活&quot;粽&quot;是不忙，前途&quot;粽&quot;是辉煌，爱情&quot;粽&quot;是如糖，身体&quot;粽&quot;是健康！<br>Best regards,<br>晨</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        },
        {
            id: 27, date: '2026-06-23', icon: '🎋',
            title: '端午安康',
            preview: '谢谢你还惦记着我，同样祝你端午安康',
            stamp: '🐉',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>Hey 苏晨，</p>
<p>哇，谢谢你还惦记着我！！很感谢你的端午祝福，同样也祝你端午安康呀，&quot;粽&quot;是快快乐乐，平平安安~<br>很抱歉这段时间一直没来得及回复你的邮件。</p>
                <div class="letter-photo empty">📸 照片（待上传）</div>
            `
        }
    ];

    // ========================================
    // 渲染信封
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
    // 打开信笺
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
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLetter(); });

    // ========================================
    // 导航
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
    console.log('☁️ 曦月 & 苏晨 — ' + lettersData.length + '封信笺已加载');
});
