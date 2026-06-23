/* ============================================
   曦月 & 苏晨 — 光遇友情记
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

    function initStars(count = 150) {
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

    window.addEventListener('resize', () => {
        resizeCanvas();
        initStars(200);
    });

    // ========================================
    // 2. 信件数据
    // ========================================
    const lettersData = [
        {
            id: 1,
            date: '2026-06-23',
            icon: '\u2728',
            title: '我们的第一篇记录',
            preview: '决定用信笺记录我们的故事...',
            stamp: '\uD83D\uDCEE',
            content: `
                <p>今天和曦月在云野又跑了一次图。不知道什么时候开始，这已经成了我们的日常——一起在天空王国里飞来飞去。</p>
                <p>我说要把这些事都记下来，曦月说好。于是就写了这第一封信。</p>
                <p>以后每次一起玩，我都会来这里写一封信。等以后回头看，一定很有趣吧。</p>
                <div class="letter-photo empty">\uD83D\uDCF8 在云野的合影（待上传）</div>
                <p>虽然我们只是游戏里的朋友，但这份友情很真实。在这片天空之下，有人和你一起看风景，本身就是一件温暖的事。</p>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 2,
            date: '2026-06-15',
            icon: '\u2601\uFE0F',
            title: '在云野看日落',
            preview: '坐在云野的塔顶，看夕阳慢慢沉下去...',
            stamp: '\uD83C\uDF05',
            content: `
                <p>今天跑完图之后，曦月拉着我去了云野那个最高的塔顶。</p>
                <p>游戏里的日落很安静，光线是金色的，整片云海都被染成了暖色。我们坐在那里，谁也没说话——就这样看了十几分钟。</p>
                <p>有时候觉得，光遇里最美的不是那些华丽的景色，而是有人愿意和你一起静静地坐在那里。</p>
                <div class="letter-photo empty">\uD83C\uDF04 云野日落（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 3,
            date: '2026-06-10',
            icon: '\uD83D\uDD4A',
            title: '第一次一起献祭',
            preview: '在暴风眼互相打气，一起走到了最后...',
            stamp: '\uD83C\uDF2A',
            content: `
                <p>说实话，第一次去暴风眼的时候还挺紧张的。</p>
                <p>曦月一直在前面等我，时不时回来看我跟上了没有。那些飞石砸过来的时候，我们一起躲，一起冲。</p>
                <p>最后在伊甸之眼，把光翼一个个献出去的时候，看着曦月就在旁边，突然觉得这也没什么好怕的。</p>
                <p>出来之后我们都变成了小黑人，互相点亮蜡烛的那一刻，忍不住笑了。</p>
                <div class="letter-photo empty">\uD83D\uDD4A 伊甸之眼（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 4,
            date: '2026-06-05',
            icon: '\uD83C\uDFB5',
            title: '合奏了一首曲子',
            preview: '在遇境用乐器合奏，路过的朋友也加入了...',
            stamp: '\uD83C\uDFB6',
            content: `
                <p>今天在遇境，我拿出了我的竖琴，曦月拿出了钢琴。</p>
                <p>我们试着合奏了一首简单的曲子——虽然经常弹错，但配合起来的感觉真的很棒。后来有两个路人朋友也加入了，四个人围成一圈，各种乐器乱七八糟地响着。</p>
                <p>音乐真的是光遇里最温暖的交流方式之一。不需要说话，音符就够了。</p>
                <div class="letter-photo empty">\uD83C\uDFB9 遇境音乐会（待上传）</div>
                <div class="letter-sign">—— 苏晨</div>
            `
        },
        {
            id: 5,
            date: '2026-05-28',
            icon: '\uD83C\uDFD4',
            title: '霞谷赛道的约定',
            preview: '每次一到霞谷就忍不住要去滑赛道...',
            stamp: '\u2744\uFE0F',
            content: `
                <p>曦月很喜欢霞谷，我也是。每次进霞谷，我们都会先去滑一次赛道。</p>
                <p>比赛谁先到终点——虽然基本上都是曦月赢，但我偶尔也能偷个胜利。赢的那次我高兴地在终点跳了好久，曦月在旁边笑我。</p>
                <p>霞谷的雪和光，橙色的夕阳，两个人一起从山顶滑下来的那种自由感——大概就是光遇最吸引我们的地方吧。</p>
                <div class="letter-photo empty">\uD83C\uDFC2 霞谷赛道（待上传）</div>
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
            full: `${d.getFullYear()}\u5E74${d.getMonth()+1}\u6708${d.getDate()}\u65E5`
        };
    }

    function renderEnvelopes() {
        timeline.innerHTML = '';

        lettersData.forEach((letter, index) => {
            const fd = formatDate(letter.date);
            const env = document.createElement('div');
            env.className = 'letter-envelope';
            env.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
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
                    <span class="env-arrow">\u2709 \u2192</span>
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

    // ========================================
    // 6. 初始化！
    // ========================================
    renderEnvelopes();
    console.log('\u2601\uFE0F \u66E6\u6708 & \u82CF\u6668 — \u5149\u9047\u53CB\u60C5\u8BB0');
});
