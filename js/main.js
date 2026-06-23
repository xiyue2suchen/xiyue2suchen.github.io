/* ============================================
   喜乐与苏晨 — 交互脚本
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    // ==========================================
    // 导航栏滚动效果
    // ==========================================
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // 导航栏
        navbar.classList.toggle('scrolled', scrollY > 50);

        // 回到顶部按钮
        backToTop.classList.toggle('visible', scrollY > 500);

        // 滚动动画 — 检测元素进入视口
        animateOnScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ==========================================
    // 移动端菜单
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // 点击链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ==========================================
    // 平滑滚动到各区块
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // 回到顶部
    // ==========================================
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // 数字滚动动画
    // ==========================================
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const current = parseInt(counter.textContent);
            if (current < target) {
                const increment = Math.ceil(target / 30);
                const newVal = Math.min(current + increment, target);
                counter.textContent = newVal;
            }
        });
    };

    // ==========================================
    // 滚动入场动画
    // ==========================================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            '.gallery-item, .about-container, .contact-card, .section-header'
        );

        elements.forEach(el => {
            // 跳过已触发的
            if (el.classList.contains('animated')) return;

            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 80;

            if (isVisible) {
                el.classList.add('animated');
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });

        // 数字动画 — 当关于区域进入视口时触发
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && !aboutSection.classList.contains('counted')) {
                aboutSection.classList.add('counted');
                const counterInterval = setInterval(() => {
                    const done = [...document.querySelectorAll('.stat-number')]
                        .every(c => parseInt(c.textContent) >= parseInt(c.getAttribute('data-target')));
                    if (done) {
                        clearInterval(counterInterval);
                    } else {
                        animateCounters();
                    }
                }, 40);
            }
        }
    };

    // ==========================================
    // 灯箱（点击放大图片）
    // ==========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxImage = document.querySelector('.lightbox-image');

    // 当用户添加真实图片后，点击可放大查看
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img && img.src && !img.src.includes('placeholder')) {
                lightbox.classList.add('active');
                lightboxImage.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // ==========================================
    // 初始化
    // ==========================================

    // 设置初始状态— 确保所有元素可见
    document.querySelectorAll('.gallery-item, .about-container, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // 触发一次滚动检查（初始加载）
    setTimeout(handleScroll, 100);

    console.log('✨ 喜乐与苏晨 — 网站已加载');
});
