/* ═══════════════════════════════════════════════════════
   ENGINEERING IDENTITY PLATFORM — Client Logic
   Modular, accessible, performant vanilla JS
   ═══════════════════════════════════════════════════════ */

'use strict';

(function () {
  /* ── Typing Effect ── */
  const TypingEngine = (() => {
    const roles = [
      'Platform Engineer',
      'Cyber Security Engineer',
      'Backend Developer',
      'Linux Enthusiast',
      'DevOps Engineer',
    ];
    let el = null;
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    const TYPE_SPEED = 80;
    const DELETE_SPEED = 40;
    const PAUSE_END = 2000;
    const PAUSE_START = 500;

    function tick() {
      if (!el) return;
      const current = roles[roleIdx];
      if (!deleting) {
        el.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          setTimeout(() => { deleting = true; tick(); }, PAUSE_END);
          return;
        }
        setTimeout(tick, TYPE_SPEED);
      } else {
        el.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          setTimeout(tick, PAUSE_START);
          return;
        }
        setTimeout(tick, DELETE_SPEED);
      }
    }

    return {
      init() {
        el = document.getElementById('typingText');
        if (el) tick();
      },
    };
  })();

  /* ── Scroll Progress Bar ── */
  const ScrollProgress = (() => {
    let bar = null;
    function update() {
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
      bar.setAttribute('aria-valuenow', Math.round(pct));
    }
    return {
      init() {
        bar = document.getElementById('scrollProgress');
        window.addEventListener('scroll', update, { passive: true });
        update();
      },
    };
  })();

  /* ── Active Nav Highlight ── */
  const ActiveNav = (() => {
    const sections = [];
    const links = [];

    function update() {
      const scrollY = window.scrollY + 120;
      let current = '';
      sections.forEach(({ id, top, bottom }) => {
        if (scrollY >= top && scrollY < bottom) current = id;
      });
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }

    function measure() {
      sections.length = 0;
      document.querySelectorAll('main > section[id]').forEach((sec) => {
        sections.push({ id: sec.id, top: sec.offsetTop - 100, bottom: sec.offsetTop + sec.offsetHeight });
      });
    }

    return {
      init() {
        document.querySelectorAll('.nav__link').forEach((l) => links.push(l));
        measure();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', () => { measure(); update(); }, { passive: true });
        update();
      },
    };
  })();

  /* ── Mobile Nav Toggle ── */
  const NavToggle = (() => {
    return {
      init() {
        const btn = document.getElementById('navToggle');
        const nav = document.getElementById('nav');
        if (!btn || !nav) return;

        btn.addEventListener('click', () => {
          const open = nav.classList.toggle('open');
          btn.setAttribute('aria-expanded', open);
          document.body.style.overflow = open ? 'hidden' : '';
        });

        nav.querySelectorAll('.nav__link').forEach((link) => {
          link.addEventListener('click', () => {
            nav.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
          });
        });
      },
    };
  })();

  /* ── Scroll Reveal (Intersection Observer) ── */
  const ScrollReveal = (() => {
    return {
      init() {
        const els = document.querySelectorAll('.reveal');
        if (!els.length) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        els.forEach((el) => observer.observe(el));
      },
    };
  })();

  /* ── Counter Animation ── */
  const CounterAnimator = (() => {
    function animateCount(el, target) {
      const duration = 1500;
      const start = performance.now();
      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    return {
      init() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'), 10);
                animateCount(entry.target, target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 }
        );
        counters.forEach((c) => observer.observe(c));
      },
    };
  })();

  /* ── Skill Bar Animation ── */
  const SkillBars = (() => {
    return {
      init() {
        const fills = document.querySelectorAll('.skills__bar-fill');
        if (!fills.length) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width') || 0;
                entry.target.style.width = width + '%';
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        fills.forEach((f) => observer.observe(f));
      },
    };
  })();

  /* ── Contribution Chart ── */
  const ContribChart = (() => {
    function render(container) {
      const months = 52;
      const data = Array.from({ length: months }, () => Math.random());
      const fragment = document.createDocumentFragment();
      data.forEach((v) => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = Math.max(6, v * 100) + '%';
        fragment.appendChild(bar);
      });
      container.appendChild(fragment);
    }
    return {
      init() {
        const chart = document.getElementById('contributionChart');
        if (chart) render(chart);
      },
    };
  })();

  /* ── Contact Form ── */
  const ContactForm = (() => {
    const FIELD_CONFIG = {
      name: { min: 2, max: 100, msg: 'Name must be 2–100 characters.' },
      email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Enter a valid email address.' },
      message: { min: 10, max: 2000, msg: 'Message must be 10–2000 characters.' },
    };

    function validateField(name, value) {
      const cfg = FIELD_CONFIG[name];
      if (!cfg) return '';
      if (name === 'email') return cfg.pattern.test(value) ? '' : cfg.msg;
      const len = value.trim().length;
      if (len < cfg.min || len > cfg.max) return cfg.msg;
      return '';
    }

    function setFieldError(name, msg) {
      const input = document.querySelector(`[name="${name}"]`);
      const errEl = document.getElementById(name === 'name' ? 'nameError' : name === 'email' ? 'emailError' : 'messageError');
      if (errEl) errEl.textContent = msg;
      if (input) input.classList.toggle('invalid', !!msg);
    }

    return {
      init() {
        const form = document.getElementById('contactForm');
        const result = document.getElementById('formResult');
        const submitBtn = document.getElementById('submitBtn');
        if (!form) return;

        /* Live validation on blur */
        form.querySelectorAll('.form-input').forEach((input) => {
          input.addEventListener('blur', () => {
            const msg = validateField(input.name, input.value);
            setFieldError(input.name, msg);
          });
          input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
              const msg = validateField(input.name, input.value);
              setFieldError(input.name, msg);
            }
          });
        });

        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          result.className = 'form-result';
          result.textContent = '';

          /* Validate all */
          const data = { name: '', email: '', message: '' };
          let hasError = false;
          ['name', 'email', 'message'].forEach((field) => {
            const input = form.querySelector(`[name="${field}"]`);
            data[field] = input ? input.value : '';
            const msg = validateField(field, data[field]);
            setFieldError(field, msg);
            if (msg) hasError = true;
          });
          if (hasError) return;

          /* Submit */
          submitBtn.classList.add('loading');
          submitBtn.disabled = true;

          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
            const json = await res.json();

            if (json.success) {
              result.className = 'form-result success';
              result.textContent = json.message || 'Message sent successfully!';
              form.reset();
              ['name', 'email', 'message'].forEach((f) => setFieldError(f, ''));
            } else {
              result.className = 'form-result error';
              if (json.errors && json.errors.length) {
                result.textContent = json.errors.join(' ');
              } else {
                result.textContent = json.message || 'Something went wrong.';
              }
            }
          } catch {
            result.className = 'form-result error';
            result.textContent = 'Network error — please try again later.';
          } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
          }
        });
      },
    };
  })();

  /* ── Header Scroll Behaviour ── */
  const HeaderScroll = (() => {
    return {
      init() {
        const header = document.getElementById('header');
        if (!header) return;
        window.addEventListener(
          'scroll',
          () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
          },
          { passive: true }
        );
      },
    };
  })();

  /* ── Init All ── */
  document.addEventListener('DOMContentLoaded', () => {
    TypingEngine.init();
    ScrollProgress.init();
    ActiveNav.init();
    NavToggle.init();
    ScrollReveal.init();
    CounterAnimator.init();
    SkillBars.init();
    ContribChart.init();
    ContactForm.init();
    HeaderScroll.init();
  });
})();
