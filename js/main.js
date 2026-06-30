/* ============================================
   曦月 & 苏晨 — 光遇友情记
   全部使用邮件原文 / Bilingual (中文 / English)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // i18n Translations
    // ========================================
    const i18n = {
        zh: {
            navLogo: '✦ 曦月 & 苏晨',
            navHome: '首页',
            navLetters: '信笺',
            navAlbum: '相册',
            navAbout: '关于',
            heroSub: '在光遇的天空下，相遇的故事',
            heroDesc: '每一件事都值得被记住<br>每一封信都是一段回忆',
            heroBtn: '阅读信笺',
            scrollHint: '展开信笺',
            lettersTag: '✉ Letters',
            lettersTitle: '信笺集',
            lettersDesc: '按日期整理的点滴回忆',
            albumTag: '📷 Album',
            albumTitle: '相册',
            albumDesc: '我们的照片记忆',
            aboutTitle: '关于我们',
            aboutP1: '曦月 & 苏晨，因<strong>光遇</strong>而相识的好朋友。',
            aboutP2: '我们在这片天空之下一起跑图、一起玩耍、一起看风景。这些信记录了我们之间的点点滴滴——每一次相遇、每一次冒险、每一次欢笑。',
            aboutSign: '致我们永远的好友 ✦',
            footer: '✦ 曦月 & 苏晨 · 光遇友情记 ✦',
            footerSub: '在天空王国相遇的故事',
            fromXiyue: '—— 来自 曦月 ——',
            fromChen: '—— 来自 苏晨 ——',
            months: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            letterTitles: {},
            letterPreviews: {},
            albumLabels: [
                '🐱 苏晨家的小猫',
                '🍎 穿了衣服的苹果',
                '🙈 躲猫猫',
                '🏔️ 曦月拍的新疆烟火',
                '🔮 水晶球 (1)',
                '🔮 水晶球 (2)',
                '🔮 水晶球 (3)',
                '🔮 水晶球 (4)',
                '🔮 水晶球 (5)',
                '🔮 水晶球 (6)',
                '🔮 水晶球 (7)',
                '🔮 水晶球 (8)',
                '🍜 美食',
                '🎨 曦月临摹的千寻',
                '📜 曦月的教资证',
                '🍖 苏晨分享的羊肉抓饭',
                '🏔️ 苏晨拍的喀什 (1)',
                '🏔️ 苏晨拍的喀什 (2)',
                '🏔️ 苏晨拍的喀什 (3)',
                '🎆 星光沙漠跨年',
                '🎆 星光沙漠跨年',
                '🎆 星光沙漠跨年',
                '🎆 星光沙漠跨年',
                '✏️ 苏晨的简笔画 (1)',
                '✏️ 苏晨的简笔画 (2)',
                '✏️ 苏晨的简笔画 (3)',
            ],
        },
        en: {
            navLogo: '✦ Xiyue & Chen',
            navHome: 'Home',
            navLetters: 'Letters',
            navAlbum: 'Album',
            navAbout: 'About',
            heroSub: 'A friendship born under the Sky: Children of the Light',
            heroDesc: 'Every moment is worth remembering<br>Every letter holds a memory',
            heroBtn: 'Read Letters',
            scrollHint: 'Open Letters',
            lettersTag: '✉ Letters',
            lettersTitle: 'Letters',
            lettersDesc: 'Memories arranged by date',
            albumTag: '📷 Album',
            albumTitle: 'Album',
            albumDesc: 'Our photo memories',
            aboutTitle: 'About Us',
            aboutP1: 'Xiyue & Chen — friends who met in <strong>Sky: Children of the Light</strong>.',
            aboutP2: 'We run realms together, play together, and enjoy the views under this sky. These letters record every little moment between us — every meeting, every adventure, every laugh.',
            aboutSign: 'To our everlasting friendship ✦',
            footer: '✦ Xiyue & Chen · A Sky Friendship ✦',
            footerSub: 'Our story in the Kingdom of Sky',
            fromXiyue: '—— From Xiyue ——',
            fromChen: '—— From Chen ——',
            months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            letterTitles: {
                1: 'Xiyue',
                2: 'My Little Cat',
                3: 'The Apple Wore Clothes',
                4: 'Sharing Breakfast in Secret',
                5: 'Xinjiang Cat Eating Spicy Strips',
                6: 'Midnight Cat Scare',
                7: 'New Year Screenshots',
                8: 'Happy Lantern Festival',
                9: 'Silly Xiyue and Silly Chen',
                10: 'The Funny Doubao',
                11: 'Uyghur Blessing',
                12: "Happy Women's Day!",
                13: 'Sky Photo Together',
                14: 'Wish You Happiness Every Day',
                15: 'A Weird Dream',
                16: 'Afternoon Nap',
                17: "Let's Take This in Hide & Seek",
                18: 'My Cat Drawing',
                19: 'Glasses',
                20: "I'm Online!",
                21: 'Sleep Advice',
                22: 'Hand-drawn QR Code',
                23: 'Thinking About PhD in Europe',
                24: 'Feeding the Koi',
                25: 'The Best Decision',
                26: 'Happy Dragon Boat Festival!',
                27: 'Dragon Boat Wishes',
                28: 'Chihiro Drawing & Birthday Gift',
                29: 'Hua Chenyu Songs & Lullaby',
                30: 'Holiday & Summer Plans',
                31: 'Teaching Certificate & PhD',
                32: 'Internship & Dorm',
                33: 'New Kitten & Zhengsheng Chicken',
                34: 'AI & Nezha Novel',
                35: 'Pilaf & Dragon Boat Reply',
                36: "Haha I Can't Even",
                37: "Let's Just Call Him Kitty",
                38: 'Emails Getting More Formal',
                39: 'Wow You Had Your Camera!',
                40: 'Spicy Strips & the Cat',
                41: 'Long Time No See~',
                42: 'Happy Lantern Festival',
                43: 'Wow the Sky Photos!',
                44: 'Just Keep Trying',
                45: 'Doubao English is Great',
                46: 'International Email & VPN',
                47: 'Really? I Never Knew',
                48: 'The Key-Finding Story',
                49: "You're in Early Childhood Education!",
                50: 'Too Many Messages',
                51: 'Koi & Interviews',
                52: 'Look at My View!',
                53: 'Your Photos are Beautiful',
                54: 'Xinjiang Fruit & Vibes',
                55: "I Can Actually Read Uyghur!",
                56: 'I Had a British Shorthair Too',
                57: 'Good Composition Matters',
            },
            letterPreviews: {
                1: 'Dear 苏晨，This is 曦月.',
                2: 'My little cat 🤓',
                3: 'An apple I ate the other day, it was shy and put on clothes 🤣',
                4: "I secretly shared my breakfast with my cat again today 🤣",
                5: 'Xinjiang cat, Xinjiang soul, it even eats spicy strips',
                6: 'Cat crying in the middle of the night, I thought it was a demon cat...',
                7: 'Some screenshots I took during New Year, they feel so meaningful',
                8: "It's Lantern Festival, did you eat tangyuan?",
                9: "You didn't bring your camera, silly Xiyue!",
                10: 'Doubao gave me such flirty English templates hahaha',
                11: 'This is my native language written in pinyin, I am not secretly cursing you',
                12: "Happy Women's Day!🥳",
                13: '👻 (sharing photos)',
                14: "I hope you can feel happy every day, not just women's day",
                15: 'Dreamed I was caught by bad guys who tried to kill me with two exercise books',
                16: 'So sleepy after lunch, slept over two hours, can\'t sleep tonight again',
                17: "Let's take this photo next time if Hide & Seek event is still on",
                18: 'My cat drawing 😁',
                19: 'Glasses missing, turns out I used them to save seats for classmates',
                20: "I'm online already, let's go take photos in Hide & Seek!",
                21: 'Sleep is the top priority, hope you find a solution soon',
                22: 'I once hand-drew a QR code that could actually be scanned',
                23: "While preparing to be a teacher, I'm also going to apply for PhD",
                24: 'These koi are in the school pond, fed with breakfast bread',
                25: 'Picking you up in the Rain Forest was the best decision I ever made',
                26: 'Long time no see! Happy Dragon Boat Festival!',
                27: 'Thank you for remembering me, wish you a peaceful Dragon Boat too',
                28: 'This Chihiro drawing is great, I look forward to your birthday gift 🤩',
                29: 'I received your song, it sounds really nice! Perfect as a lullaby',
                30: 'I came back for holiday on June 25, going to the mountains this summer',
                31: 'Got my teaching certificate! Non-education major, half a year 😱',
                32: 'Internship starts next semester, dorm will be just me, sound sleep 😍',
                33: 'We got a new tabby kitten, very mischievous!',
                34: 'I wrote a novel: Nezha has to pass biology to be reborn',
                35: 'If you ever come to Xinjiang, you must try the food 🥰',
                36: 'The cat\'s expression is so cute! Like it\'s pressing against your face',
                37: 'Let\'s just call him Kitty then, he seems pretty smart',
                38: 'I notice your emails are getting more formal hahaha~',
                39: 'Wow you had your camera! The photos are so clear hahahaha',
                40: 'I always thought people in Henan/Sichuan eat lots of spicy strips...',
                41: 'Your cat is tough, small body but loves to fight',
                42: 'Happy Chinese Lantern Festival!!!!!🥳',
                43: 'Every single one could be my wallpaper haha',
                44: 'I can actually read this, "Wish you all the best"',
                45: 'This English is really authentic, even with Doubao\'s help',
                46: "I'm using an international email, need VPN every time",
                47: 'Really? I never knew, thought I had to bring a camera',
                48: 'Your story reminds me of when I lost my keys haha',
                49: "You're in early childhood education! How are you good at everything?",
                50: 'Too many messages, let me go online first, wait 5 minutes',
                51: "Sorry for the late reply, been having so many interviews lately",
                52: 'Look at this from my angle! I took a bunch too',
                53: 'Your photos are really beautiful, so professional!',
                54: 'Xinjiang fruits are so sweet, here\'s a photo from my 2024 trip',
                55: "I can actually read Uyghur! Well, I used AI too haha",
                56: 'I used to have a grey British Shorthair named Oreo',
                57: 'Composition matters more than you think, you have real talent',
            },
            albumLabels: [
                '🐱 Chen\'s Little Cat',
                '🍎 The Apple Wore Clothes',
                '🙈 Hide & Seek',
                '🏔️ Xiyue\'s Xinjiang Vibes',
                '🔮 Crystal (1)',
                '🔮 Crystal (2)',
                '🔮 Crystal (3)',
                '🔮 Crystal (4)',
                '🔮 Crystal (5)',
                '🔮 Crystal (6)',
                '🔮 Crystal (7)',
                '🔮 Crystal (8)',
                '🍜 Food',
                '🎨 Xiyue\'s Chihiro Drawing',
                '📜 Xiyue\'s Teaching Cert',
                '🍖 Lamb Pilaf by Chen',
                '🏔️ Kashgar by Chen (1)',
                '🏔️ Kashgar by Chen (2)',
                '🏔️ Kashgar by Chen (3)',
                '🎆 Star Desert New Year',
                '🎆 Star Desert New Year',
                '🎆 Star Desert New Year',
                '🎆 Star Desert New Year',
                '✏️ Chen\'s Doodles (1)',
                '✏️ Chen\'s Doodles (2)',
                '✏️ Chen\'s Doodles (3)',
            ],
        }
    };

    // ========================================
    // State
    // ========================================
    let currentLang = localStorage.getItem('lang') || 'zh';
    let currentAlbumPage = 0;

    // ========================================
    // 星空 Canvas
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
    // 信件数据 — 全部使用邮件原文
    // ========================================
    const lettersData = [
        {
            id: 1, date: '2026-02-17', icon: '💌',
            title: '曦月',
            preview: 'Dear 苏晨，This is 曦月.',
            stamp: '📮',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Dear 苏晨，</p>
<p>This is 曦月.</p>
<p>Best wishes,</p>
<p>xiyue</p>
`
        },
        {
            id: 2, date: '2026-02-18', icon: '🐱',
            title: '我家小猫',
            preview: '我家小猫🤓',
            stamp: '🐾',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>我家小猫🤓</p>
                <div class="letter-photo"><img src="images/cat.jpg" alt="苏晨家的小猫"></div>
            `
        },
        {
            id: 3, date: '2026-02-20', icon: '🍎',
            title: '苹果穿了衣服',
            preview: '前几天吃的苹果，还蛮害羞的，都穿上衣服了🤣',
            stamp: '🍎',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>哈哈哈哈哈其实是我刚放寒假那会儿一进门我就把他拽过来贴在手机拍的，他没有名字，一般我们说小猫过来，他就会过来<br>其实这个发照片也研究了一会儿才会的哈哈哈哈</p>
                <p>前几天吃的苹果，还蛮害羞的，都穿上衣服了🤣</p>
                <div class="letter-photo"><img src="images/apple.jpg" alt="穿了衣服的苹果"></div>
            `
        },
        {
            id: 4, date: '2026-02-22', icon: '🥟',
            title: '偷偷分早餐',
            preview: '我今天又把我的早餐偷偷分给我家小猫了🤣',
            stamp: '🍜',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>To:曦月</p>
<p>我今天又把我的早餐偷偷分给我家小猫了🤣</p>
<p>苏晨</p>
`
        },
        {
            id: 5, date: '2026-02-24', icon: '🌶️',
            title: '新疆猫吃辣条',
            preview: '新疆猫，新疆魂，它还吃辣条',
            stamp: '🐈',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>新疆猫，新疆魂，它还吃辣条，比我还喜欢吃垃圾食品😺</p>
<p>因为我光明正大的话我妈不就知道我没好好吃饭了吗<br>我给它的是我碗里的饭，我每次觉得饭多就会往猫的饭盒里放🤫</p>
<p>我记得我也截图了哈哈哈哈哈<br>居然如此默契🤪</p>
`
        },
        {
            id: 6, date: '2026-02-24', icon: '🔦',
            title: '半夜妖猫惊魂',
            preview: '大半夜猫叫，我以为是妖猫来了，结果是妈妈的手电筒',
            stamp: '🔦',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>它真的看着很傻的样子，但是很聪明，还会抓老鼠，那小身板还跑去和别的猫干架，虽然我没亲眼看过，但是有次它腿的肉都漏出来了🙀</p>
<p>平时也很安静，但是偶尔很吵，至于是怎么吵的那就不得不说前几天了，不知道抽的什么风，大半夜在院子里和别的猫一起叫，很恐怖，刚好那时候我醒了，听到那叫声我都快吓死了大半夜的，房间又是我一个人睡的，然后我想到了以前听过的恐怖故事黑猫，然后这时候我房间窗户那边突然很亮后又恢复正常，过一会儿它们又叫，然后有一个亮光，当时我真的以为有妖猫来了，真的吓死我了，结果那个光是我妈照的手电筒，原因是我妈想让猫进来，但是猫进了又想出去，于是有了两次白光，只剩我一个快吓四的人😇</p>
`
        },
        {
            id: 7, date: '2026-02-24', icon: '🎆',
            title: '跨年的截图',
            preview: '在跨年的时候我截屏的一些照片，感觉还蛮有纪念意义的',
            stamp: '🌟',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>那你家猫感觉不挑食，挺好的</p>
<p>不过为啥不能正大光明给呢哈哈哈哈哈哈🤣</p>
<p>对咯，之前在跨年的时候我截屏的一些照片哈哈哈感觉还蛮有纪念意义的~</p>
                <div class="letter-photo"><img src="images/newyear_starfield_01.jpg" alt="星光沙漠跨年"></div>
                <div class="letter-photo"><img src="images/newyear_starfield_02.jpg" alt="星光沙漠跨年"></div>
                <div class="letter-photo"><img src="images/newyear_starfield_03.jpg" alt="星光沙漠跨年"></div>
                <div class="letter-photo"><img src="images/newyear_starfield_04.jpg" alt="星光沙漠跨年"></div>
            `
        },
        {
            id: 8, date: '2026-03-03', icon: '🏮',
            title: '元宵节快乐',
            preview: '今天元宵节了，你吃汤圆了吗？网上说今天晚上也会有血月🌕',
            stamp: '🌕',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>今天元宵节了，你吃汤圆了吗</p>
<p>网上说今天晚上也会有血月🌕</p>
<p>Finally,<br>晨</p>
`
        },
        {
            id: 9, date: '2026-03-03', icon: '🤪',
            title: '傻蛋曦月和傻蛋晨',
            preview: '没带相机，傻蛋曦月你是不是不知道光遇有自带截图',
            stamp: '🥚',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>没带相机，傻蛋曦月你是不是不知道光遇有自带截图的，像相机一样清晰，在右下角可以截图，还可以录视频，但不会把聊天的拍到🤣</p>
<p>下次截图可以试试，我以为那是你想把聊天记录做个念想截的图哈哈哈哈</p>
<p>Best,<br>傻蛋晨<br>(我也骂自己傻蛋了噢😁)</p>
`
        },
        {
            id: 10, date: '2026-03-04', icon: '🤣',
            title: 'The funny Doubao',
            preview: '豆包给的英文模板太暧昧了哈哈哈哈哈',
            stamp: '😂',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>Dear Xi Yue,<br>You know what? I just told Doubao to teach me how to write an English email.<br>She gave me a few templates and asked who I was writing to.</p>
<p>I said I wanted to write to a gentle friend.</p>
<p>Then she gave me three versions.</p>
<p>After I read them, I asked her: Isn&#x27;t this a little too flirty?</p>
<p>And she said: Hahaha I get what you mean! I&#x27;ll make a new one for you.</p>
<p>Doubao is so funny, I&#x27;m laughing so hard 🤣</p>
<p>Best,<br>Chen</p>
`
        },
        {
            id: 11, date: '2026-03-04', icon: '🕯️',
            title: '维语祝福',
            preview: '这是我母语用拼音表达的，没有偷偷骂你哦',
            stamp: '📜',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>元宵节快乐！</p>
<p>那你以后可以经常发英文邮件，我看不懂，但豆包看得懂🤓</p>
<p>国际学校的生物老师听起来就很厉害，我觉得你这英语水平肯定没问题</p>
<p>siz bak yahxi ,qukum siz yahxi kurudugan ,umutlaydigan turmuxka erixisiz.</p>
<p>注意，👆这一串拼音不是英文，不用试图翻译它，但你放心这是一个真诚的祝福，是我母语用拼音表达的，不是英文，没有偷偷骂你哦，骂你我一辈子发不了财，一胎生八百个儿子，好恶毒的诅咒🙀</p>
<p>豆包是我最好的学习搭子呢😁</p>
`
        },
        {
            id: 12, date: '2026-03-08', icon: '🌸',
            title: '女神节快乐！',
            preview: "Happy Women's Day!🥳",
            stamp: '💐',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>Happy Women&#x27;s Day!🥳</p>
`
        },
        {
            id: 13, date: '2026-03-08', icon: '📸',
            title: '极光合照',
            preview: '👻（分享照片）',
            stamp: '✨',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>👻</p>
                <div class="letter-photo"><img src="images/newyear_starfield_01.jpg" alt="星光沙漠跨年"></div>
                <div class="letter-photo"><img src="images/newyear_starfield_02.jpg" alt="星光沙漠跨年"></div>
                <div class="letter-photo"><img src="images/newyear_starfield_03.jpg" alt="星光沙漠跨年"></div>
                <div class="letter-photo"><img src="images/newyear_starfield_04.jpg" alt="星光沙漠跨年"></div>
                <div class="letter-photo"><img src="images/crystal_01.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_02.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_03.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_04.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_05.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_06.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_07.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_08.jpg" alt="水晶球"></div>
`
        },
        {
            id: 14, date: '2026-03-09', icon: '🌸',
            title: '愿你每天都快乐',
            preview: "I hope you can feel happy every day, not just women's day",
            stamp: '💐',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Happy women&#x27;s day~</p>
<p>Maybe i should send you this message yesterday, hhh, But i think i hope you can feel happy every day, not just women&#x27;s day.🤪</p>
<p>All the best,<br>xiyue</p>
`
        },
        {
            id: 15, date: '2026-03-10', icon: '💤',
            title: '猎奇梦',
            preview: '梦见被坏人抓了，她掏出两个练习册mo我脖子',
            stamp: '😴',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>昨晚睡觉梦见被坏人抓了，要吃我，我说能不能给个痛快，她说可以，然后她掏出两个练习册用练习册mo了我脖子，然后练习册不够锋利，只开了个口子，她说我也没办法，没有别的工具，然后我就躺在那儿等着血流干，好多坏人在排队等我死了吃我</p>
<p>好搞笑，拿练习册dao人</p>
<p>但是我醒来后脖子也怪怪的🤔</p>
`
        },
        {
            id: 16, date: '2026-03-11', icon: '😴',
            title: '午睡',
            preview: '中午吃完饭后好困，睡了两个多小时，晚上又要睡不着了',
            stamp: '🛏️',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>Dear 月，</p>
<p>我今天中午吃完饭后好困好困，沾着枕头就睡觉了，睡了两个多小时，我说现在睡多了晚上睡不着想起还起不来，眼睛睁不开，脑子晕晕的，晚上睡的这样沉也就好了，看来晚上又要睡不着了，又要听室友打呼噜了😱</p>
<p>Best,<br>晨</p>
`
        },
        {
            id: 17, date: '2026-03-14', icon: '🔮',
            title: '躲猫猫拍这个吧',
            preview: '下次上线躲猫猫活动没有结束的话我们拍这个吧',
            stamp: '🌈',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>Dear 月，</p>
                <p>下次上线躲猫猫活动没有结束的话我们拍这个吧👇<br>还可以用小不点魔法进水晶里面拍😁</p>
                <p>Best,<br>晨</p>
                <div class="letter-photo"><img src="images/hideandseek.jpg" alt="躲猫猫"></div>
                <div class="letter-photo"><img src="images/crystal_01.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_02.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_03.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_04.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_05.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_06.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_07.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_08.jpg" alt="水晶球"></div>
            `
        },
        {
            id: 18, date: '2026-03-15', icon: '🎨',
            title: '我画的猫',
            preview: '我画的猫😁',
            stamp: '🖼️',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>我画的猫😁👻👻👻👻👻(≧∇≦)/(ૢ˃ꌂ˂⁎)🤩🤩🤩🤩🤫🤫🤫🤫🤭🤭🤭🤭</p>
                <div class="letter-photo"><img src="images/catdrawing_01.jpg" alt="苏晨画的猫 - 素描1"></div>
                <div class="letter-photo"><img src="images/catdrawing_02.jpg" alt="苏晨画的猫 - 素描2"></div>
                <div class="letter-photo"><img src="images/catdrawing_03.jpg" alt="苏晨画的猫 - 素描3"></div>
            `
        },
        {
            id: 19, date: '2026-03-18', icon: '👓',
            title: '眼镜',
            preview: '眼镜不见了，原来被我用来给同学占座了',
            stamp: '📚',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>今天上早课上课之前翻书包突然发现眼镜不见了，然后我想会落在哪里呢？然后我就打算去昨天上课的教室看看，心里祈祷眼镜不要丢，过了一会儿我的上学搭子来了，她问我我后面位置是不是给她占的，我一回头看，我眼镜给她们占座了，还好没丢😃</p>
<p>躲猫猫活动今天要结束了😭</p>
`
        },
        {
            id: 20, date: '2026-03-18', icon: '🙈',
            title: '我上线啦',
            preview: '我已经上线啦，咱们一起去躲猫猫拍照',
            stamp: '📷',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>我已经上线啦，我猜你这会儿是不是还在上课，我先自己探索一下哈哈哈</p>
<p>best，<br>曦月</p>
`
        },
        {
            id: 21, date: '2026-04-09', icon: '💡',
            title: '关于睡觉的建议',
            preview: '睡眠是头等大事，希望你可以尽快找到适合你的解决方案',
            stamp: '🎧',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>吃完饭很多人都会困的，是不是碳水吃多了，比如面粉米饭啥的，会有晕碳的现象，我也会的。另外中午困的话就可以稍微睡一下，当你困的时候说明你的身体现在就非常需要睡眠了。</p>
<p>另外室友打呼噜确实蛮痛苦的，非常能够理解，我之前也是有个室友打呼噜搞得我经常失眠，不知道你可不可以问一下辅导员看看能不能换宿舍？</p>
<p>如果学校那边实在换不了宿舍的话，你要不要试一下买耳塞呀，好像有那种软软的记忆棉啥的。实在不行，好像也有那种耳机，然后你播放下雨的声音，还有那种主动降噪的耳机也可以试试~</p>
<p>总之，睡眠是头等大事，多尝试一些办法，不能忽视，希望你可以尽快找到适合你的解决方案，有个好觉~🫂晚安~</p>
`
        },
        {
            id: 22, date: '2026-04-09', icon: '📱',
            title: '手绘二维码',
            preview: '我以前手绘了一个二维码，还能用手机扫出来',
            stamp: '📱',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>羡慕了，感觉你真的应该当个画家哈哈哈哈</p>
<p>这个生日礼物很用心了，对了，我记得你在去年12月22日的时候和我说过，你的生日是在7月份，具体的日期是多少号呀，客服告知在下😉</p>
                <p>等我有时候真的仔细找找，我以前画的两幅画，都是很久的时候画的了，我艺术天赋一般般其实，我之前甚至有一次闲来没有事手绘二维码哈哈哈哈哈哈，然后还能用手机扫出来~很神奇吧哈哈哈哈哈哈，不过总感觉那会儿精神不太正常，谁闲来无事手绘二维码呀哈哈哈哈哈哈哈</p>
                <div class="letter-photo"><img src="images/xinjiang_01.jpg" alt="曦月拍的新疆喀什"></div>
                <div class="letter-photo"><img src="images/xinjiang_02.jpg" alt="曦月拍的新疆喀什"></div>
                <div class="letter-photo"><img src="images/xinjiang_03.jpg" alt="曦月拍的新疆喀什"></div>
            `
        },
        {
            id: 23, date: '2026-04-09', icon: '🎓',
            title: '想去欧洲读博士',
            preview: '我在准备当老师的同时，再去试试申请博士',
            stamp: '📚',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>哈哈哈谢谢你苏晨，虽然上次的面试没过，但是我感觉我也一直在进步，每一次都会比上一次讲的更好哈哈哈哈哈，就比如我昨天其实就讲的不错，不过结果可能会过段时间出来，期间继续准备其他的面试或者考试哈哈哈🤣这玩意就和打游戏一样，多试验几次就有经验了hh</p>
<p>我最近又冒出来一个新的想法，可能我在准备当老师的同时，再去试试申请博士，想去欧洲看看有没有好的机会哈哈哈，目前也在同步进行中</p>
<p>best,<br>yue</p>
`
        },
        {
            id: 24, date: '2026-04-10', icon: '🐟',
            title: '喂锦鲤',
            preview: '这些锦鲤是学校池塘的鱼，用早餐面包喂的',
            stamp: '🎏',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>没关系啊，不用道歉的，你边读研边找工作，还有各种考试本来就很忙很累了，还有这个邮箱要登外网回复也够麻烦的，你能够回复我就已经很开心啦~</p>
<p>这些锦鲤是学校池塘的鱼，可能学生们都比较喜欢喂小动物所以也喂鱼被喂胖了哈哈哈哈哈<br>对的，是用早餐面包喂的，买了三种面包，它们都很喜欢吃<br>那真的很巧诶，这周末没课，如果我有空的话还可以去喂锦鲤祝你面试顺利，给你带来好运哈哈哈哈<br>我们这边养鱼的池塘不常见，池塘很少，只有一些公园有，但公园里的都不算池塘，算湖，因为太大了哈哈哈哈哈<br>这还是我第一次喂鱼呢，我感觉喂鱼很好玩，不过喂鱼的时候容易想吃鱼，有点心虚🤫</p>
`
        },
        {
            id: 25, date: '2026-04-10', icon: '🌿',
            title: '最正确的选择',
            preview: '在雨林拐你是我做过最正确的选择',
            stamp: '💚',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>嘿嘿，不好看的部分裁掉了，都是裁掉调整了构图的了~<br>给我夸成翘嘴了哈哈哈哈哈哈哈<br>我艺术方面比较好是因为我从小就对艺术挺感兴趣的，我这专业也和艺术息息相关，我还蛮喜欢我这个专业的课程的，但也仅喜欢和艺术相关的课程而已哈哈哈哈哈哈，只对可以玩的感兴趣，要是能对学习感兴趣也好了，让我学习感觉要我命了似的哈哈哈哈哈<br>你也是我认识的人里面学历最高，最自律，最优秀的人</p>
<p>我真的，在雨林拐你是我做过最正确的选择哈哈哈哈哈，一拐就拐了个如此优秀的人，我就知道我的眼光很好，群星皆暗，孤月独明，众人之中，我总是能够一眼望见最优者嘿嘿🤓</p>
`
        },
        {
            id: 26, date: '2026-06-19', icon: '🎋',
            title: '端午节快乐！',
            preview: '很久没有看到你了，上次看见你还是在3.24号',
            stamp: '🐉',
            content: `
                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>Dear 月，<br>最近还好吗？很久没有看到你了，上次看见你还是在3.24号十二点在老奶奶干饭，不过你没醒哈哈哈哈哈<br>感觉你最近真的很忙呢，虽然你一直都忙就是了哈哈哈哈<br>最近是不是在忙着转博呀，还有忙工作，我想你应该已经找到了一份不错的工作，先恭喜你了🥳<br>最后，端午节快乐！<br>愿你：薪水&quot;粽&quot;是上涨，干活&quot;粽&quot;是不忙，前途&quot;粽&quot;是辉煌，爱情&quot;粽&quot;是如糖，身体&quot;粽&quot;是健康！<br>Best regards,<br>晨</p>
`
        },
        {
            id: 27, date: '2026-06-23', icon: '🎋',
            title: '端午安康',
            preview: '谢谢你还惦记着我，同样祝你端午安康',
            stamp: '🐉',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Hey 苏晨，</p>
<p>哇，谢谢你还惦记着我！！很感谢你的端午祝福，同样也祝你端午安康呀，&quot;粽&quot;是快快乐乐，平平安安~<br>很抱歉这段时间一直没来得及回复你的邮件。</p>
`
        },
        {
            id: 28, date: '2026-06-28', icon: '🎨',
            title: '千寻画 & 生日礼物',
            preview: '这千寻画的不错呀，我期待生日那天收到你的礼物🤩',
            stamp: '🎁',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>该说不说，你的绘画应该是我身边面前见过的画的最好的<br>各种细节没有个几年的绘画功底是画不了的😁</p>
<p>原来是这样，这幅画作为生日礼物绝对是最特别最用心的~你朋友绝对应该也非常喜欢哈哈哈哈</p>
<p>另外，我的生日严格意义上是用的农历，冬月初三，就和春节一样，每年的公历日期都会在变哈哈哈哈<br>已经记住啦！！</p>
<p>哦对了，其实我正在给你准备一个生日礼物，具体是啥先不告诉你嘿嘿<br>！！！你在生日当天，也就是7.25号打开邮箱，请务必打开邮箱，然后你就会知道我的礼物是啥了哈哈哈哈哈哈哈，先卖个关子先~</p>
<p>对了，我以前画过一张素描，好多年前画的了，当时比较喜欢看宫崎骏的千与千寻，所以临摹了一张 小千 的海报画像，只有照片了，原件找不到了哈哈哈哈哈<br>发给你看看~</p>
                <div class="letter-photo"><img src="images/chihiro_drawing.png" alt="曦月临摹的千与千寻素描"></div>
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>这千寻画的不错呀，我画人物不太行画起来很抽象哈哈哈哈哈</p>
<p>可能是遗传了我们家的艺术天赋吧哈哈哈哈哈，因为我姐和妹妹画画都不错，还有我妈唱歌很好听</p>
<p>原来是农历生日呀，我一直搞不懂农历，一直用的是阳历，因为我们这边没有用农历的习惯，这样我就不知道你是什么时候生日了😇</p>
<p>我还有礼物！！！好呀！我期待着生日那天收到你的礼物🤩🤩🤩🤩🤩🤩🤩🤩🤩</p>
            `
        },
        {
            id: 29, date: '2026-06-28', icon: '🎵',
            title: '华晨宇的歌 & 摇篮曲',
            preview: '你的歌我收到啦，真的非常好听！特别适合当催眠曲',
            stamp: '🎶',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>Dear 苏晨，</p>
<p>你的歌我收到啦哈哈哈，真的非常好听！！！而且很温柔的风格哦<br>特别适合晚上睡不着的时候，当催眠曲用~谢谢你还记得我之前经常失眠的事情hhh😁</p>
<p>哎对了，我最近其实喜欢上了华晨宇的歌，我觉得他那个歌还挺好听的。一个是《烟火里尘埃》，还有一个是《向阳而生》；主要是我比较喜欢他的歌词哈哈哈哈<br>不知道你有没有听过哈哈哈哈哈</p>
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>《烟火里的尘埃》我听过，而且也很喜欢，前年的单曲顺环，但我现在不怎么听了，因为我找到一首好听的歌就会反复听到腻哈哈哈哈哈<br>《向阳而生》没听过，但我刚去听了一下，歌词确实很不错</p>
            `
        },
        {
            id: 30, date: '2026-06-28', icon: '🏔️',
            title: '放假 & 暑假计划',
            preview: '我6.25号放假回来了，暑假去山里看风景',
            stamp: '🌄',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>还是手机最方便，可以先用手机练练~</p>
<p>哎，你是不是放假了呀？暑假可以出去玩儿了😆<br>反正我觉得最重要的是记录，以后回看的时候都是一些很有意义的瞬间哦</p>
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>我6.25号放假回来了，其实还能再早几天的，可是我校园跑前面没跑非要拖到期末，为了校园跑晚回家两天😬</p>
<p>暑假的话可能会去家里附近的山里看看风景，上次去山里为了拍照记录晒成红纽了😱</p>
            `
        },
        {
            id: 31, date: '2026-06-28', icon: '🥇',
            title: '教资 & 博士申请',
            preview: '非师范生半年拿下教资也太厉害了吧😱',
            stamp: '🎓',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>最近其实一言难尽，两周前我申请上了一个比利时的博士岗位，但我有点不太想去，感觉那个实验室的氛围可能不是我想要的，原因是因为博士不好毕业，所以我觉得还是去一个实验室氛围好一点的实验室，如果确实要读博的话🤔当然不读博直接工作也是 OK 的哈哈哈哈😆没有那么强的执念，对于赚钱的执念还是蛮深的🫪</p>
<p>另外也还是在一边准备去当老师吧，因为这段时间我也面试了好几个，发现国际学校不太好进，就业形势目前太卷了，都需要有经验😅但离家远的学校我不太想去。</p>
<p>这段时间我拿了一个大教培机构的 offer，我也还决定要不要去，同时我可能还会再去申请申请其他学校的博士岗位博士~</p>
<p>给你看一下我的教师资格证，其实我不是师范专业的，从去年准备这个教师证到现在拿到手，差不多快大半年了，终于拿到了红红火火恍恍惚惚hhhhhhh</p>
                <div class="letter-photo"><img src="images/jiaozi_cert.png" alt="曦月的教师资格证"></div>
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>选择多的烦恼吗哈哈哈哈哈哈<br>能同时拿下这么多机会已经超牛啦<br>非师范生半年拿下教资也太厉害了吧😱</p>
<p>你真的超厉害，钢铁般的女人，搞学业的同时搞事业，还要照顾自己，还要生活，天啊，真的是太优秀了，我觉得吧不应该用钢铁来形容你，应该用你来形容钢铁<br>你一定会拥有属于你的幸福生活的，事业学业有成，其实我觉得你学业已经很好了哈哈哈哈哈哈，事业也是早晚的事！！！</p>
<p>最后，恭喜你成功拿下教资，给你放礼炮庆祝<br>呃…没找到礼炮表情，给你吹个哨子吧🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳<br>嘿嘿</p>
            `
        },
        {
            id: 32, date: '2026-06-29', icon: '😴',
            title: '实习 & 宿舍',
            preview: '下学期开始实习了，宿舍就剩我一个，爽睡😍',
            stamp: '🛏️',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>完全能够理解这种哈哈哈哈<br>等以后毕业了，就可以自己租一个单独的小房间了😉</p>
<p>最近我也买了一个手表，可以定时震动哎，我不知道你对于这种震动敏不敏感，如果手环可以把你震醒的话，我觉得倒是一个可以解决戴耳塞听不到声音的一个办法😬<br>但是戴耳塞时间长了，耳朵又不太舒服😷</p>
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>我现在放假了，下学期开始实习了，我三个室友都去自主实习，在家里那边实习，然后我留校实习了，宿舍就剩我一个了，不知道学校会不会把留校实习的学生统一安排住宿，要是统一安排的话，我希望新室友的呼吸顺畅，不打呼，要是不统一安排就太好了，寝室就我一个人，安安静静的，爽睡😍</p>
<p>震动的还没试过呢，我一般就订个有声音的，把声音调到最小，然后早上一响不到两秒我就关了，我还挺佩服自己的，对闹钟声音很敏感</p>
            `
        },
        {
            id: 33, date: '2026-06-29', icon: '🐱',
            title: '新小猫 & 正新鸡排',
            preview: '我们家又来了一个小的狸花猫，非常调皮！',
            stamp: '🐈',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>狸花😺很好养，因为什么都吃。</p>
<p>最近有时候我也看到路边有时会有一些流浪猫，于是我就自己买了一些猫条。<br>因为目前我没有养猫，主要是合租不太好养，但我发现我可以共享猫猫🤣 我就会在背包里放一些猫条，就是看到外面有流浪猫的时候，然后喂一喂，顺便撸撸猫哈哈哈哈哈哈哈</p>
<p>你画的这个作品怎么说呢，还挺抽象的，画风也很可爱~😝<br>正新鸡排，通通只要九块九😂😂😂不行了，笑得喘不过气来了哈哈哈哈哈哈</p>
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>我们家又来了一个小的狸花猫，好像是狸花猫，非常调皮，会玩大猫咪的尾巴，它们两个还会偷吃我们买的烧烤，不止一次！！！总是抢我们的零食吃，一点没有猫样，像人一样吃零食吃烧烤</p>
<p>关于这个正新鸡排的画，老师给我们定的主题好像是生活中的一些瞬间，要求必须有鸡鸭子什么的，然后我正在思考该画些什么，有个人突然来一句正新鸡排，之后正新鸡排在我脑子里挥之不去，我没招了，就画了个正新鸡排，老师看我画的说是现杀现吃，食材新鲜吗哈哈哈哈哈哈哈</p>
            `
        },
        {
            id: 34, date: '2026-06-29', icon: '🤖',
            title: 'AI & 哪吒小说',
            preview: '我写了一个小说：哪吒要补生物课才能重生',
            stamp: '📖',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>你知道嘛，我最近在研究人工智能，发现最近的人工智能发展真的太牛了🤪</p>
<p>最近一个很火的概念叫做 Vibe Coding, 氛围编程（大概的解释）：你只需要用嘴巴说，人工智能就会理解你的需求，然后自动编写代码，帮你实现一些功能。你可以写一些小程序，也可以写网站啥的。其实我最近也在慢慢研究这个东西，因为我在尝试着做一些内容，说不定可以搞搞副业，因为现在很多东西可以交给 AI 去帮忙做，但你需要去找到什么东西值得做，所以我也在尝试这东西~😝</p>
<p>我最近用的 AI 模型比较杂，比如我最近在试着用 ChatGPT 5.5，它可以直接生成漫画，我还用 AI 帮我写小说哈哈哈哈哈<br>另外我最近结合我的专业构思了一部小说。大概的情节是：哪吒不是当时借莲藕而重生嘛，但我觉得莲花也是有生命的，所以让天道给了他一个生物考试，哪吒需要补生物课，理解生命是什么才能够获得重生的机会，于是需要进入山河社稷图的幻象中通过各种场景去了解学科知识是如何诞生的，以及科学家是如何发现这些知识点的？因为我就是学生物，所以我想通过这样的场景结合，去写一部这样的小说哈哈哈哈哈哈哈哈🤣</p>
`
        },
        {
            id: 35, date: '2026-06-29', icon: '🍚',
            title: '抓饭 & 端午回复',
            preview: '以后有机会来新疆的话一定要多尝尝美食🥰',
            stamp: '🥟',
            content: `
                <div class="letter-from">—— 来自 曦月 ——</div>
                <p>Hey 苏晨，</p>
<p>哇，谢谢你还惦记着我！！很感谢你的端午祝福，同样也祝你端安康呀，&quot;粽&quot;是快快乐乐，平平安安~（PS: 虽然有点晚了。。。sorry😷）<br>很抱歉这段时间一直没来得及回复你的邮件, 这段时间有点手慢脚乱，各种事情都堆在一起了，我都想把自己分裂出来同时干哈哈哈🫠</p>
                <p>近期我找个时间我上线去找你~</p>
<p>我这个好像吃过，之前在新疆的时候，手抓饭好像是羊排手抓，也不贵，羊肉也挺新鲜🤤<br>真的，我好想再吃一口，哈喇子留下来了🥹</p>
                <div class="letter-from">—— 来自 苏晨 ——</div>
                <p>没事啊，我就猜到你会很忙，也不会怪你不回复邮件的啦</p>
                <p>我希望我不要错过你上线的时间🥺</p>
                <p>以后有机会来新疆的话在吃，一定要多尝尝新疆美食🥰<br>这个抓饭做的挺一般，但是这个肉真的好甜好香，实在美味（流口水～）</p>
            `
        },
        {
            id: 36, date: '2026-02-20', icon: '😹',
            title: '哈哈哈哈哈我不行了',
            preview: '这猫的表情太可爱了！！！有一种贴在你脸上的感觉',
            stamp: '🐱',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>哈哈哈哈哈哈哈，我不行了(/∇＼*)</p>
<p>这猫的表情太可爱了！！！有一种贴在你脸上的感觉，他叫什么名字呀哈哈哈</p>
<p>哇，这是你第一次发照片给我诶。</p>
<p>谢谢你跟我分享你的生活～</p>
<p>曦月</p>
`
        },
        {
            id: 37, date: '2026-02-24', icon: '🐱',
            title: '那就叫小猫吧嘿嘿',
            preview: '那就叫小猫吧嘿嘿，他还蛮聪明的感觉',
            stamp: '🍎',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>那就叫小猫吧嘿嘿，他还蛮聪明的感觉，虽然之前那个照片看起来是不太聪明的亚子~</p>
<p>这个苹果看着相当高级呀哈哈哈哈，好像是外面贴了什么然后变成的这样子。</p>
<p>我以前见过那个圣诞节苹果，好像还可以搞成爱心图案或者福字什么的.😁</p>
<p>Best regards,<br>月</p>
`
        },
        {
            id: 38, date: '2026-02-24', icon: '📧',
            title: '邮件越来越正式化了',
            preview: '我发现你的邮件越来越正式化了哈哈哈哈~',
            stamp: '✉️',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Dear 苏晨，</p>
<p>我发现你的邮件越来越正式化了哈哈哈哈~</p>
<p>那看来这几天确实研究了很多邮件的用法呀哈哈哈哈哈哈哈很棒哎</p>
<p>Best，</p>
<p>曦月</p>
`
        },
        {
            id: 39, date: '2026-03-03', icon: '📸',
            title: '哇塞，你带相机了呀',
            preview: '哇塞，你当时带相机了呀，拍的好清晰呀哈哈哈哈哈哈哈',
            stamp: '🤩',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>哇塞，你当时带相机了呀，拍的好清晰呀哈哈哈哈哈哈哈，不像我，都是随手的截图，还带着聊天记录🤣</p>
<p>你的拍照技术真不错哎，构图啥的也都很专业哈哈哈， 保存保存~~</p>
<p>谢谢你也同时记录着哈哈哈，真的很很有默契😁 Many thanks once again~</p>
<p>Best wishes,<br>月</p>
`
        },
        {
            id: 40, date: '2026-03-03', icon: '🌶️',
            title: '辣条与猫',
            preview: '我一直以为河南四川那边辣条吃得多，原来新疆也这么喜欢吃辣条呀',
            stamp: '🐈',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>我一直以为河南四川那边辣条吃得多，原来新疆也这么喜欢吃辣条呀哈哈哈哈哈，看来小猫真的什么都吃呀hh😆还是说你家的小猫比较特殊，我之前也养过一直猫，英短，我给他起名字叫 Orio (奥利奥)，胖是蛮胖的，但是比较挑食哈哈哈🫠</p>
<p>原来是这样子，所以感觉你家猫也跟着你从来不会饿肚子了，而且可以经常吃香喝辣哈哈哈哈哈哈哈哈哈哈😺</p>
<p>很有纪念意义的我一般都会截图的，毕竟是我第一次和你在光遇里面跨年，也是我这么多年来第一次在游戏里面跨年，非常特别的一次经历~人间烟火，星光沙漠🤪</p>
<p>我当时还在纳闷，怎么苏晨一下子这么正式起来了哈哈哈哈哈哈哈🤔原来如此~不过你真的感觉学啥都很快，现在邮件发的都很有模有样的哈哈哈哈哈哈哈哈哈哈😝</p>
<p>Sincerely,<br>月</p>
`
        },
        {
            id: 41, date: '2026-03-03', icon: '👻',
            title: 'Long time no see~',
            preview: '你家猫还蛮厉害的，小身板还去经常干架，主打一个人菜瘾大',
            stamp: '🫠',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Dear 晨,</p>
<p>Long time no see~</p>
<p>这段时间事情稍微有点多hh，没来及回复emm...看了你的描述，感觉你家猫还蛮厉害的哈哈哈哈哈哈，小身板还去经常干架，主打一个人菜瘾大🤣</p>
<p>猫晚上一直叫的话估计是在求偶期，一般绝育了就好了哈哈哈哈，大晚上猫叫确实蛮恐怖，光想想就毛骨悚然，颇有点恐怖片的赶脚了hhh, 而且猫叫声特别像婴儿的哭声......不能再往下想了哈哈，不然得要做噩梦了都。。看到手电筒这一段原谅我实在忍不住笑了哈哈哈哈哈哈哈，太有意思了，有一种看了特别恐怖的鬼电影，最后发现新中国不允许妖怪成精哈哈哈，鬼都是装出来的🫠</p>
<p>关于苹果那个，原来是这样子搞出来的呀哈哈哈哈，不过这个得要是在苹果成熟前贴才有用吧~</p>
<p>Warm regards,<br>月</p>
`
        },
        {
            id: 42, date: '2026-03-03', icon: '🏮',
            title: 'Happy Lantern Festival',
            preview: 'Happy Chinese Lantern Festival !!!!!🥳',
            stamp: '🌕',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Dear 晨,</p>
<p>Happy Chinese Lantern Festival !!!!!🥳 元宵节快乐！！</p>
<p>Not yet, but I will cook some later, since I am still at the library, haha~</p>
<p>Really??!  Sounds so amazing！！！The blood moon?   Waoooo!! 😲</p>
<p>But actually, I am in Suzhou right now, today it is cloudy and rainy. I hope you can see that amazing moment in XinJiang~</p>
<p>Best regards,<br>月</p>
<p>P.S. 你也许会很好奇怎么突然都是英文了哈哈哈哈，不是在装杯哈哈哈哈哈哈哈哈，其实主要因为最近也在练习英语，顺便投投国际学校的生物教师职位，所以不自觉的就想用英文发一封Email哈哈哈哈哈🤣</p>
<p>另外, 豆包APP我经常喜欢用，你要是想练习英语的话，是一个很不错的软件，可以直接和豆包英文对话哈哈哈哈哈，或者让她帮你修改检查英文中的语法错误啥的~</p>
`
        },
        {
            id: 43, date: '2026-03-09', icon: '📸',
            title: '哇极光合照',
            preview: '这每一张我都可以用来做壁纸了哈哈哈',
            stamp: '✨',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>哇，不得不说你这拍的真的是很棒诶~</p>
<p>这每一张我都可以用来做壁纸了哈哈哈。 Thank you so much！！</p>
<p>我觉得你很有摄影师的天赋😝</p>
<p>All the best，<br>xiyue</p>
`
        },
        {
            id: 44, date: '2026-03-09', icon: '📜',
            title: '反正就多试一下吧',
            preview: '其实这段内容我看得懂哦，"愿你一切都好"',
            stamp: '🀄',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>反正就多试一下吧，好像国际学校的待遇会相对高一点哈哈哈，不过也得看看运气。</p>
<p>其实这段内容我看得懂哦，&quot;愿你一切都好，愿你拥有美好、充满希望的生活。&quot;</p>
<p>哈哈哈哈哈哈哈是不是这个意思(●&#x27;◡&#x27;●)</p>
<p>不过你对自己发的誓有点太狠了吧哈哈哈哈哈哈哈哈哈，是个狠人，不过你即便不说这句话，我也不会吵着想着你可能会骂我这个方向想hhh，我猜可能也是一个什么祝福o( ❛ᴗ❛ )o</p>
<p>Anyway, thank you for your lovely blessing～</p>
<p>سىز بەق ياخشى بولسۇن، سىز ياخشى قۇرۇدىغان، ئۈمۈتلىدىغان تۈرمۇشقا ئېرىشىسىز ）</p>
<p>Best,<br>xiyue</p>
`
        },
        {
            id: 45, date: '2026-03-10', icon: '😂',
            title: '豆包英语相当地道',
            preview: '这个英语写的相当的地道，虽然是在豆包的帮助下',
            stamp: '🤣',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>哈哈哈哈哈哈哈哈，这个英语写的相当的地道‎ദ്ദിᵔ.˛.ᵔ₎✧虽然是在豆包的帮助下，但也很棒了哦!~</p>
<p>一般形容阴天我都想不起来overcast🤣,感觉今天又学习到了一个高级词汇😜</p>
<p>I feel that Doubao can greatly improve our English level.hhh</p>
<p>Best,<br>xiyue</p>
`
        },
        {
            id: 46, date: '2026-03-10', icon: '🔒',
            title: '国际邮箱与VPN',
            preview: '因为我现在使用的是国际邮箱，每次需要登录VPN',
            stamp: '🌍',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>因为我现在使用的是国际邮箱，每次看消息的话，我需要登录VPN，就是那个翻梯子访问外网那个，所以相对会麻烦一点点，不过anyway，我尽量应该都会在一周内回复的哈哈哈哈～</p>
<p>对，好像就是这个原因，所以有些人会把猫给绝育，然后之后就特别温顺，乱撒尿的习惯也改了，然后也不怎么爱叫了哈哈哈哈哈哈哈变成太监了，无欲无求🤣🤣🤣</p>
<p>新疆的苹果应该很甜吧，反正我印象中西瓜是很甜的，之前吃过，而且超级便宜，当时在伊犁还乌鲁木齐来着5块钱买了两个大的西瓜哈哈哈太离谱了</p>
<p>best，<br>xiyue</p>
`
        },
        {
            id: 47, date: '2026-03-10', icon: '🤪',
            title: '是嘛，我没研究过',
            preview: '是嘛，我还真没研究过，我还一直以为要带相机呢',
            stamp: '🥚',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>是嘛，我还真没研究过，我还一直以为要带相机呢，原来可以这么简单呀，哈哈哈，下次我得试一下😜</p>
<p>All the best，</p>
<p>Silly xiyue<br>(哈哈哈哈嗯，我觉得还挺可爱的这个，沙丹曦月ƪ(˘⌣˘)ʃ）</p>
`
        },
        {
            id: 48, date: '2026-03-18', icon: '👓',
            title: '找钥匙的经历',
            preview: '我感觉你的那个经历跟我的之前找钥匙的经历好像',
            stamp: '🔑',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>我感觉你的那个经历跟我的之前找钥匙的经历好像哈哈哈，找了半天，然后发现原来钥匙在我包里，有时候就突然莫名其妙健忘了🤣🤣不过你这还好，虚惊一场，没有丢掉眼镜什么的。( •́ω•̀ )</p>
<p>刚看到消息，不过也不算晚哈哈哈，等会我来上线，咱们一起去躲猫猫拍照。昨天刚面试了一个学校，，下周还有个试讲，然后后面这个月还有一个教师编的考试，上线的时间会少一点，不过还好，今天看到了消息，总算这个活动能参加上哈哈哈哈哈哈哈，等会儿，马上上线。=ᗜωᗜ=</p>
<p>best，<br>月</p>
`
        },
        {
            id: 49, date: '2026-03-18', icon: '🎨',
            title: '天呐，你是学前教育专业的呀',
            preview: '怎么什么都会啊，上次弹乐器也很好听，美术也这么棒',
            stamp: '🖼️',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>天呐，我记得你是学前教育专业的呀，怎么什么都会啊哈哈哈哈哈哈哈，上次你那个弹乐器啥的也很好听，然后没想到美术也这么棒*⁂((✪⥎✪))⁂*</p>
<p>这也太绝了！！360度托马斯回旋赞‎ദ്ദിᵔ.˛.ᵔ₎✧</p>
<p>太专业了，而且仔细看的话，很多猫的毛发也都画的栩栩如生😲这一幅画看样子得花好久才能画好，还得很有耐心才行哈哈哈，有机会我也试试，不过我最多只能画一些数字油画哈哈哈。</p>
<p>best，<br>xiyue</p>
`
        },
        {
            id: 50, date: '2026-03-18', icon: '🙈',
            title: '后面消息有点多',
            preview: '后面消息有点多，我先上线吧，等我5分钟',
            stamp: '⏰',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>后面消息有点多，我先上线吧，后面那个消息我等两天我再慢慢一一回复。这个活动好像我看了一下，是不是今天截止。</p>
<p>等我5分钟，马上上线哈哈哈</p>
<p>kind regards，<br>xiyue</p>
`
        },
        {
            id: 51, date: '2026-04-09', icon: '🐟',
            title: '锦鲤与面试',
            preview: '很抱歉现在才来回复你的消息，最近面试好多',
            stamp: '🎏',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Dear 苏晨,</p>
<p>很抱歉现在才来回复你的消息，主要是前段时间因为需要准备国际高中的面试所以一直没能来得及回复你的消息，之后面试结束了之后，因为感觉自己好像没有表现好，后来果不其然没面试上哈哈哈哈，所以能量值有点低，同时有点拖延症忘记回复你的Email了😷其实这周又有三场面试哈哈哈哈哈，昨天刚刚面试完了一场，全程用英文面试，感觉好像比上次表现的好很多哈哈哈哈，然后明天又有一场面试，周日也有一场面试，感觉自己像个陀螺一样转个不停哈哈哈哈哈哈哈哈哈，人送外号，小陀螺曦月，位列梁上第一百零九将🤣</p>
<p>哇塞，感觉这些锦鲤都好大呀哈哈哈哈哈，你是用你的早餐面包喂的嘛？ 感觉你这锦鲤送的恰到其时候，希望这些锦鲤可以给我带来好运叭~我记得我以前也特别喜欢去喂养金鱼，尤其是江南地区各种园林，好多池塘都在养鱼，有时候能发呆一整天感觉哈哈哈哈哈哈</p>
`
        },
        {
            id: 52, date: '2026-04-09', icon: '🔮',
            title: '看看我这边的视角',
            preview: '看看我这边的视角哈哈哈哈哈，当时我也拍了很多嘿嘿',
            stamp: '🌈',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>看看我这边的视角哈哈哈哈哈，当时我也拍了很多嘿嘿，然后有一张看到你的脚底是黑色的哈哈哈哈哈哈哈</p>
                <div class="letter-photo"><img src="images/crystal_01.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_02.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_03.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_04.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_05.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_06.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_07.jpg" alt="水晶球"></div>
                <div class="letter-photo"><img src="images/crystal_08.jpg" alt="水晶球"></div>
            `
        },
        {
            id: 53, date: '2026-04-09', icon: '🌸',
            title: '不得不说你拍的正好看',
            preview: '你是我目前认识的最多才多艺术的人',
            stamp: '💐',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>不得不说，你拍的正好看哈哈哈哈哈，很专业，也很有氛围感~</p>
<p>而且我发现你真的是我目前认识的最多才多艺术的人，画画也好好看，弹奏乐器也很厉害，也很会拍照和摄影，感觉像个全能艺术家haha</p>
`
        },
        {
            id: 54, date: '2026-04-09', icon: '🍉',
            title: '新疆的水果与烟火',
            preview: '我之前去新疆的时候从吃西瓜的时候就感觉出来了，新疆的水果很甜',
            stamp: '🏔️',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>哈哈哈哈，我之前去新疆的时候从吃西瓜的时候就感觉出来了，新疆的水果很甜hhh, 不过说实话，我还蛮喜欢酸的草莓，那种酸酸甜甜的感觉，而且你知道嘛，酸的水果富含维生素C，其实吃点算水果对皮肤超级有帮助，好像可以帮助胶原蛋白再生哈哈哈哈，相信我，因为我就是学生物的哈哈哈哈哈，不过吃完之后记得漱口，以免酸的吃太多了腐蚀牙齿😆😬</p>
                <p>另外分享一张我之前2024年去新疆的时候拍的照片，感觉很有本地的烟火味嘿嘿嘿</p>
                <div class="letter-photo"><img src="images/xiyue_xinjiang.jpg" alt="曦月2024年拍的新疆烟火气息"></div>
                <p>best,<br>曦月</p>

                <div class="letter-from" data-i18n-raw="fromChen">—— 来自 苏晨 ——</div>
                <p>酸甜的草莓我也蛮喜欢的，但我大多吃到的是纯酸的，而且有些口感像嚼塑料，可能我运气不太好总是买到不好吃的哈哈哈哈哈</p>
<p>其实我还是挺能吃酸的，新疆的青杏子我从小吃到大，可爱吃了，但我分享给我的室友，她们都是内地来的，她们说很酸，一口下去痛苦面具，都吐掉了，而我就能面不改色的吃掉哈哈哈哈哈</p>
<p>肯定相信你哈哈哈哈哈<br>放心吧，我每天都会刷牙的哈哈哈哈哈哈</p>
<p>诶，去的是喀什吗？你这些照片拍的也很绝啊，有种故事感，电影感<br>我去年去喀什的时候也拍了些照片，不过我拍的很随便哈哈哈哈</p>
                <div class="letter-photo"><img src="images/kashgar_chen_01.jpg" alt="苏晨拍的喀什街景"></div>
                <div class="letter-photo"><img src="images/kashgar_chen_02.jpg" alt="苏晨拍的喀什街景"></div>
                <div class="letter-photo"><img src="images/kashgar_chen_03.jpg" alt="苏晨拍的喀什街景"></div>
`
        },
        {
            id: 55, date: '2026-04-09', icon: '💡',
            title: '没想到我可以看懂维族语言',
            preview: '让我叉会儿腰骄傲一下，其实我也是用的AI啦',
            stamp: '🤖',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>Dear Chen,</p>
<p>没想到我可以看懂维族语言把哈哈哈哈，让我叉会儿腰骄傲一下哈哈哈哈哈，其实我也是用的AI啦，不然你还以为我真的有超能力呀🤪我倒也想，要是能像豆包一样全知全能就好了哈哈哈哈吗，其实你也可以试一下让豆包翻译维语~😉</p>
<p>I am very glad to see you can improve your English level with the assistance of Doubao.<br>I have a lot of AI tools, not just doubao hhhh. If you are interested, I can tell you how to use them, such as Claude, ChatGPT, Gemini, Deepseek, Qwen, Kimi, Grok, and so on. Hahahah</p>
<p>Best wishes,<br>xiyue</p>
`
        },
        {
            id: 56, date: '2026-04-09', icon: '🐱',
            title: '我以前养过英短猫',
            preview: '我以前养过一只灰色的英国短毛猫，叫奥利奥',
            stamp: '🐾',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>我以前养过一只灰色的英国短毛猫，我给他起名字叫orio，中文名字叫奥利奥, 他主人是叫他原本叫他饼干。</p>
<p>说实在的，奥利奥有时候还蛮挑食的，喜欢猫条，但猫粮得饿他一会他才想吃哈哈哈哈🤔可能你家猫比较会过日子，是只好猫~</p>
<p>其实说真的，你学东西真的蛮快的，从画画和弹吉他我就看出来，你的那只猫画的真的特别像，等我有时间找一下相册，我以前画的画，对比一下那就知道了哈哈哈哈哈哈</p>
<p>Best,<br>xiyue</p>
`
        },
        {
            id: 57, date: '2026-04-09', icon: '📸',
            title: '虽然画质好是一方面',
            preview: '构图也很讲究的，你其实还蛮有天赋的',
            stamp: '🎯',
            content: `
                <div class="letter-from" data-i18n-raw="fromXiyue">—— 来自 曦月 ——</div>
                <p>虽然画质好是一方面，但其实构图也很讲究的，而且比画质啥更加重要的多，说真的你其实还蛮有天赋的，就是感觉太谦虚了🫪</p>
<p>有条件的话可以搞个二手相机试试，说不定以后做个独立摄影师也很酷酷的，而且新疆的景色也美，得天独厚的条件哈哈哈哈哈哈</p>
<p>best，<br>yue</p>
`
        }
    ];

    // ========================================
    // 相册数据
    // ========================================
    const albumPhotos = [
        { src: 'images/cat.jpg' },
        { src: 'images/apple.jpg' },
        { src: 'images/hideandseek.jpg' },
        { src: 'images/xiyue_xinjiang.jpg' },
        { src: 'images/crystal_01.jpg' },
        { src: 'images/crystal_02.jpg' },
        { src: 'images/crystal_03.jpg' },
        { src: 'images/crystal_04.jpg' },
        { src: 'images/crystal_05.jpg' },
        { src: 'images/crystal_06.jpg' },
        { src: 'images/crystal_07.jpg' },
        { src: 'images/crystal_08.jpg' },
        { src: 'images/food.jpg' },
        { src: 'images/chihiro_drawing.png' },
        { src: 'images/jiaozi_cert.png' },
        { src: 'images/food_lamb_rice.jpg' },
        { src: 'images/kashgar_chen_01.jpg' },
        { src: 'images/kashgar_chen_02.jpg' },
        { src: 'images/kashgar_chen_03.jpg' },
        { src: 'images/newyear_starfield_01.jpg' },
        { src: 'images/newyear_starfield_02.jpg' },
        { src: 'images/newyear_starfield_03.jpg' },
        { src: 'images/newyear_starfield_04.jpg' },
        { src: 'images/doodle_chen_01.jpg' },
        { src: 'images/doodle_chen_02.jpg' },
        { src: 'images/doodle_chen_03.jpg' },
    ];

    // ========================================
    // i18n engine
    // ========================================
    function t(key) {
        const lang = i18n[currentLang];
        return lang[key] !== undefined ? lang[key] : key;
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update lang buttons
        document.getElementById('langZh').classList.toggle('lang-active', lang === 'zh');
        document.getElementById('langEn').classList.toggle('lang-active', lang === 'en');
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = t(key);
        });

        // Update document title
        document.title = currentLang === 'zh'
            ? '曦月 & 苏晨 — 光遇里的友情'
            : 'Xiyue & Chen — A Sky Friendship';

        // Re-render letters and album with new language
        renderEnvelopes();
        renderAlbumPage(currentAlbumPage);
    }

    // ========================================
    // Language toggle
    // ========================================
    document.getElementById('langZh').addEventListener('click', () => setLanguage('zh'));
    document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));

    // ========================================
    // 渲染信封
    // ========================================
    const timeline = document.getElementById('lettersTimeline');
    lettersData.sort((a, b) => new Date(b.date) - new Date(a.date));

    function formatDate(dateStr) {
        const d = new Date(dateStr);
        const months = i18n[currentLang].months;
        return {
            month: months[d.getMonth()],
            day: d.getDate(),
            year: d.getFullYear(),
            full: currentLang === 'zh'
                ? `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`
                : `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
        };
    }

    function getLetterTitle(letter) {
        const enTitles = i18n.en.letterTitles;
        if (currentLang === 'en' && enTitles[letter.id]) {
            return enTitles[letter.id];
        }
        return letter.title;
    }

    function getLetterPreview(letter) {
        const enPreviews = i18n.en.letterPreviews;
        if (currentLang === 'en' && enPreviews[letter.id]) {
            return enPreviews[letter.id];
        }
        return letter.preview;
    }

    function renderEnvelopes() {
        timeline.innerHTML = '';
        lettersData.forEach((letter, index) => {
            const fd = formatDate(letter.date);
            // Extract sender from content
            const fromMatch = letter.content.match(/——\s*来自\s*(曦月|苏晨)\s*——/);
            const sender = fromMatch ? fromMatch[1] : '曦月';
            const isXiyue = sender === '曦月';

            const title = getLetterTitle(letter);
            const preview = getLetterPreview(letter);

            const env = document.createElement('div');
            env.className = 'letter-envelope';
            env.dataset.sender = sender;
            env.style.animation = `fadeInUp 0.6s ease ${index * 0.06}s both`;
            env.innerHTML = `
                <div class="env-flap">
                    <div class="env-flap-inner"></div>
                </div>
                <div class="env-front">
                    <span class="env-stamp">${letter.stamp}</span>
                    <div class="env-sender ${isXiyue ? 'from-xiyue' : 'from-chen'}">
                        <span class="env-sender-dot"></span>
                        ${currentLang === 'en' ? (isXiyue ? 'Xiyue' : 'Chen') : sender}
                    </div>
                    <div class="env-date">
                        <span class="env-month">${fd.month}</span>
                        <span class="env-day">${fd.day}</span>
                        <span class="env-year">${fd.year}</span>
                    </div>
                    <div class="env-body">
                        <span class="env-icon">${letter.icon}</span>
                        <div class="env-info">
                            <div class="env-title">${title}</div>
                            <div class="env-preview">${preview}</div>
                        </div>
                    </div>
                    <div class="env-seal">
                        <span class="env-seal-inner">✓</span>
                    </div>
                </div>
            `;
            env.addEventListener('click', () => {
                env.classList.add('opened');
                setTimeout(() => openLetter(letter), 400);
            });
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
        modalTitle.textContent = getLetterTitle(letter);
        // Render body content in active language
        let bodyContent;
        if (currentLang === 'en' && typeof lettersContentEn !== 'undefined' && lettersContentEn[letter.id]) {
            bodyContent = lettersContentEn[letter.id];
            // Translate sender labels in English content too
            bodyContent = bodyContent
                .replace(/—— 来自 曦月 ——/g, '—— From Xiyue ——')
                .replace(/—— 来自 苏晨 ——/g, '—— From Chen ——');
        } else {
            bodyContent = letter.content;
            if (currentLang === 'en') {
                bodyContent = bodyContent
                    .replace(/—— 来自 曦月 ——/g, '—— From Xiyue ——')
                    .replace(/—— 来自 苏晨 ——/g, '—— From Chen ——');
            }
        }
        modalBody.innerHTML = bodyContent;

        // Annotate each section with the author's font class
        let currentAuthor = '';
        Array.from(modalBody.children).forEach(child => {
            if (child.classList.contains('letter-from')) {
                currentAuthor = child.textContent.includes('曦月') || child.textContent.includes('Xiyue')
                    ? 'from-xiyue-text' : 'from-chen-text';
            }
            if (child.tagName === 'P' || child.classList.contains('letter-photo')) {
                child.classList.add(currentAuthor);
            }
        });

        // Set postmark
        const paper = document.getElementById('modalPaper');
        const fdForPostmark = formatDate(letter.date);
        paper.setAttribute('data-postmark',
            currentLang === 'zh'
                ? `${fdForPostmark.month}.${fdForPostmark.day}`
                : `${fdForPostmark.month} ${fdForPostmark.day}`
        );
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        paper.scrollTop = 0;
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
    const navLinksEl = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        const sections = ['home', 'letters', 'album', 'about'];
        let current = 'home';
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 200) current = id;
        }
        navLinksEl.querySelectorAll('a').forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinksEl.classList.toggle('open');
    });

    navLinksEl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinksEl.classList.remove('open');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ========================================
    // 6. 相册 — 真实剪贴簿 + 随机倾斜 + 贴纸
    // ========================================
    const PAGE_SIZE = 9;
    const totalPages = Math.ceil(albumPhotos.length / PAGE_SIZE);
    currentAlbumPage = 0;

    const bookPages = document.getElementById('bookPages');
    const counter = document.getElementById('bookCounter');
    const prevBtn = document.getElementById('bookPrev');
    const nextBtn = document.getElementById('bookNext');
    const lightbox = document.getElementById('albumLightbox');
    const lbClose = document.getElementById('albumLbClose');
    const lbImg = document.getElementById('albumLbImg');
    const lbLabel = document.getElementById('albumLbLabel');

    function getAlbumLabel(index) {
        if (currentLang === 'en') {
            return i18n.en.albumLabels[index] || '';
        }
        return i18n.zh.albumLabels[index] || '';
    }

    function renderAlbumPage(pageIndex) {
        bookPages.innerHTML = '';
        const start = pageIndex * PAGE_SIZE;
        const end = Math.min(start + PAGE_SIZE, albumPhotos.length);
        const pagePhotos = albumPhotos.slice(start, end);

        const pageDiv = document.createElement('div');
        pageDiv.className = 'album-page active';

        const grid = document.createElement('div');
        grid.className = 'album-page-grid';

        // Decide which photos on this page are "featured" (larger)
        const featuredIndex = Math.floor(Math.random() * pagePhotos.length);

        // Sticker emoji options
        const stickers = ['⭐', '❤️', '🌟', '✨', '💫', '🌸', '🎀', '🍀', '💖', '🦋', '🌈', '📌'];

        pagePhotos.forEach((photo, i) => {
            const item = document.createElement('div');
            const label = getAlbumLabel(start + i);

            // Random tilt: -6deg to 6deg (wider range)
            const rotation = (Math.random() * 12 - 6).toFixed(1);
            // Random vertical offset for staggered feel
            const offsetY = (Math.random() * 12 - 6).toFixed(1);
            // Random bottom padding variation
            const bottomPad = 14 + Math.floor(Math.random() * 14);

            let className = 'album-photo';
            if (i === featuredIndex && pagePhotos.length > 1) {
                className += ' featured';
            }

            // 30% chance add a sticker
            const hasSticker = Math.random() < 0.3;
            const sticker = hasSticker ? stickers[Math.floor(Math.random() * stickers.length)] : '';

            item.className = className;
            item.style.transform = `rotate(${rotation}deg)`;
            item.style.marginTop = `${offsetY}px`;
            item.style.setProperty('--bottom-pad', `${bottomPad}px`);

            let html = `<img src="${photo.src}" alt="${label}" loading="lazy">`;
            if (sticker) {
                const stickerPositions = ['top: -8px; right: -6px;', 'top: -6px; left: -4px;', 'bottom: 10px; right: -4px;', 'top: 4px; right: -8px;'];
                const pos = stickerPositions[Math.floor(Math.random() * stickerPositions.length)];
                html += `<span class="photo-sticker" style="${pos}">${sticker}</span>`;
            }
            html += `<div class="album-photo-label">${label}</div>`;

            item.innerHTML = html;
            item.addEventListener('click', () => openLightbox(start + i));
            grid.appendChild(item);
        });

        // Fill empty slots with transparent placeholders
        for (let i = pagePhotos.length; i < PAGE_SIZE; i++) {
            const empty = document.createElement('div');
            empty.className = 'album-photo';
            empty.style.opacity = '0';
            empty.style.cursor = 'default';
            empty.style.pointerEvents = 'none';
            empty.style.boxShadow = 'none';
            empty.style.background = 'transparent';
            empty.style.padding = '0';
            grid.appendChild(empty);
        }

        pageDiv.appendChild(grid);
        bookPages.appendChild(pageDiv);

        counter.textContent = `${pageIndex + 1} / ${totalPages}`;
        prevBtn.style.opacity = pageIndex === 0 ? '0.3' : '1';
        nextBtn.style.opacity = pageIndex === totalPages - 1 ? '0.3' : '1';
    }

    function goToAlbumPage(index) {
        if (index < 0 || index >= totalPages) return;
        currentAlbumPage = index;
        renderAlbumPage(index);
    }

    // Lightbox
    function openLightbox(photoIndex) {
        const photo = albumPhotos[photoIndex];
        lbImg.src = photo.src;
        lbImg.alt = getAlbumLabel(photoIndex);
        lbLabel.textContent = getAlbumLabel(photoIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox.classList.contains('active')) {
                closeLightbox();
                return;
            }
        }
        if (e.key === 'ArrowLeft') goToAlbumPage(currentAlbumPage - 1);
        if (e.key === 'ArrowRight') goToAlbumPage(currentAlbumPage + 1);
    });

    prevBtn.addEventListener('click', () => goToAlbumPage(currentAlbumPage - 1));
    nextBtn.addEventListener('click', () => goToAlbumPage(currentAlbumPage + 1));

    // ========================================
    // Init
    // ========================================
    // Apply saved language
    setLanguage(currentLang);
    renderAlbumPage(0);

    console.log('☁️ 曦月 & 苏晨 — ' + lettersData.length + '封信笺 + ' + albumPhotos.length + '张照片');
});
