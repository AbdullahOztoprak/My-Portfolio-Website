/**
 * Portfolio — Main Frontend Script
 * Handles navigation, animations, contact form, and EN/TR localization.
 */

const I18N = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'header.cta': "Let's Talk",
    'hero.greeting': "Hello, I'm",
    'hero.title': 'Software Developer & Test Automation Engineer',
    'hero.description':
      'I help teams ship faster with reliable web applications and practical test automation. My focus is clean architecture, production quality, and measurable delivery impact.',
    'hero.contactCta': 'Get In Touch',
    'hero.projectsCta': 'View Projects',
    'hero.cvCta': 'Download CV',
    'common.github': 'GitHub',
    'common.linkedin': 'LinkedIn',
    'section.about': 'About Me',
    'about.p1':
      'I build maintainable software that balances speed and quality. My core strength is combining product-focused development with test automation so teams can release confidently.',
    'about.p2':
      'In projects, I take ownership from planning to delivery: shaping clean backend and frontend structure, writing clear tests, and improving reliability before issues reach users.',
    'about.p3':
      'I enjoy solving real business problems, collaborating closely with teams, and turning complex requirements into simple, scalable solutions.',
    'about.metric1': 'Years Experience',
    'about.metric2': 'Projects Completed',
    'about.metric3': 'Test Coverage Goal',
    'section.skills': 'Skills & Technologies',
    'skills.cat1': 'Languages',
    'skills.cat2': 'Frameworks & Libraries',
    'skills.cat3': 'Tools & Platforms',
    'skills.cat4': 'Testing & QA',
    'section.projects': 'Featured Projects',
    'projects.p1.title': 'Portfolio Website',
    'projects.p1.desc':
      'Built a full-stack personal portfolio with Node.js and Express, including validated contact workflows and responsive, accessible UI components. Added Playwright end-to-end coverage to reduce regression risk and keep deployment confidence high for every update.',
    'projects.p2.title': 'Test Automation Framework',
    'projects.p2.desc':
      'Designed a scalable Playwright framework with parallel execution, reusable test architecture, and CI-friendly reporting. Improved feedback speed for releases and made cross-browser quality checks easier to maintain as project scope grows.',
    'projects.p3.title': 'REST API Service',
    'projects.p3.desc':
      'Developed a REST API service with authentication, input validation, and rate limiting using Express. Structured the service with clean architecture principles to improve maintainability, safer onboarding, and predictable feature delivery in team environments.',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    'section.experience': 'Experience',
    'experience.role1': 'Software Developer & QA Engineer',
    'experience.company1': 'Professional Experience',
    'experience.role1.b1':
      'Delivered production-ready web features across frontend and backend services in agile sprints.',
    'experience.role1.b2':
      'Built and maintained Playwright E2E suites that increased confidence before release cycles.',
    'experience.role1.b3':
      'Partnered with product and QA stakeholders to reduce defect leakage and improve issue turnaround.',
    'experience.role1.b4':
      'Raised critical user-flow test coverage from 40% to 95% with risk-based automation planning.',
    'experience.role2': "Bachelor's in Computer Science",
    'experience.company2': 'Education',
    'experience.role2.b1': 'Focused on software engineering, algorithms, and data structures.',
    'experience.role2.b2':
      'Completed hands-on coursework in web development, databases, and distributed systems.',
    'experience.role2.b3':
      'Delivered team projects using agile workflows, peer reviews, and incremental releases.',
    'section.contact': 'Get In Touch',
    'contact.intro':
      "I'm always open to new opportunities, collaborations, or just a friendly conversation. Feel free to reach out. I usually respond within 24 hours.",
    'contact.linksLead': 'Prefer direct contact? Connect on',
    'contact.linksMid': 'or view my code on',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.namePlaceholder': 'Your name',
    'form.emailPlaceholder': 'you@example.com',
    'form.messagePlaceholder': 'Your message...',
    'form.submit': 'Send Message',
    'footer.text': '© 2025 Abdullah ÖzToprak. Built with care and tested with Playwright.',
    'form.errors.nameRequired': 'Name is required.',
    'form.errors.nameMin': 'Name must be at least 2 characters.',
    'form.errors.emailRequired': 'Email is required.',
    'form.errors.emailInvalid': 'Please enter a valid email.',
    'form.errors.messageRequired': 'Message is required.',
    'form.errors.messageMin': 'Message must be at least 10 characters.',
    'form.errors.fixFields': 'Please fill in all fields correctly.',
    'form.errors.generic': 'Something went wrong.',
    'form.errors.network': 'Network error. Please try again later.',
    'form.success': 'Thank you, {name}! Your message has been received.'
  },
  tr: {
    'nav.about': 'Hakkımda',
    'nav.skills': 'Yetenekler',
    'nav.projects': 'Projeler',
    'nav.experience': 'Deneyim',
    'nav.contact': 'İletişim',
    'header.cta': 'Konuşalım',
    'hero.greeting': 'Merhaba, ben',
    'hero.title': 'Yazılım Geliştirici ve Test Otomasyon Mühendisi',
    'hero.description':
      'Takımların güvenilir web uygulamaları ve pratik test otomasyonu ile daha hızlı ürün çıkarmasına yardımcı oluyorum. Odağım temiz mimari, üretim kalitesi ve ölçülebilir teslimat etkisi.',
    'hero.contactCta': 'İletişime Geç',
    'hero.projectsCta': 'Projeleri Gör',
    'hero.cvCta': 'CV İndir',
    'common.github': 'GitHub',
    'common.linkedin': 'LinkedIn',
    'section.about': 'Hakkımda',
    'about.p1':
      'Hız ve kalite dengesini koruyan, sürdürülebilir yazılımlar geliştiriyorum. Ürün odaklı geliştirme ile test otomasyonunu birleştirerek ekiplerin güvenle yayın yapmasını sağlıyorum.',
    'about.p2':
      'Projelerde planlamadan teslimata kadar sahiplenirim: temiz backend ve frontend yapısı kurar, net testler yazar ve sorunlar kullanıcıya yansımadan güvenilirliği artırırım.',
    'about.p3':
      'Gerçek iş problemlerini çözmeyi, ekiplerle yakın çalışmayı ve karmaşık gereksinimleri basit, ölçeklenebilir çözümlere dönüştürmeyi seviyorum.',
    'about.metric1': 'Yıl Deneyim',
    'about.metric2': 'Tamamlanan Proje',
    'about.metric3': 'Test Kapsam Hedefi',
    'section.skills': 'Yetenekler ve Teknolojiler',
    'skills.cat1': 'Diller',
    'skills.cat2': 'Framework ve Kütüphaneler',
    'skills.cat3': 'Araçlar ve Platformlar',
    'skills.cat4': 'Test ve Kalite',
    'section.projects': 'Öne Çıkan Projeler',
    'projects.p1.title': 'Portfolyo Web Sitesi',
    'projects.p1.desc':
      'Node.js ve Express ile tam kapsamlı bir portfolyo sitesi geliştirdim; doğrulamalı iletişim akışları ve erişilebilir, responsive bileşenler ekledim. Playwright uçtan uca testleriyle regresyon riskini düşürüp her yayında güveni artırdım.',
    'projects.p2.title': 'Test Otomasyon Frameworkü',
    'projects.p2.desc':
      'Paralel çalışmayı destekleyen, yeniden kullanılabilir mimariye ve CI uyumlu raporlamaya sahip ölçeklenebilir bir Playwright frameworkü tasarladım. Sürüm geri bildirim hızını artırıp çoklu tarayıcı kalite kontrollerini sürdürülebilir hale getirdim.',
    'projects.p3.title': 'REST API Servisi',
    'projects.p3.desc':
      'Express ile kimlik doğrulama, giriş doğrulama ve rate limiting içeren bir REST API servisi geliştirdim. Temiz mimari yaklaşımıyla bakım kolaylığı, ekip onboarding güveni ve öngörülebilir teslimat sağladım.',
    'projects.liveDemo': 'Canlı Demo',
    'projects.sourceCode': 'Kaynak Kod',
    'section.experience': 'Deneyim',
    'experience.role1': 'Yazılım Geliştirici ve QA Mühendisi',
    'experience.company1': 'Profesyonel Deneyim',
    'experience.role1.b1':
      'Agile sprintlerde frontend ve backend servislerinde üretime hazır özellikler teslim ettim.',
    'experience.role1.b2':
      'Yayın öncesi güveni artıran Playwright E2E test setlerini geliştirdim ve sürdürdüm.',
    'experience.role1.b3':
      'Ürün ve QA ekipleriyle birlikte çalışarak canlıya kaçan hata oranını düşürdüm ve çözüm sürelerini iyileştirdim.',
    'experience.role1.b4':
      'Risk odaklı otomasyon planlamasıyla kritik kullanıcı akışlarında test kapsamını %40’tan %95’e çıkardım.',
    'experience.role2': 'Bilgisayar Mühendisliği Lisans',
    'experience.company2': 'Eğitim',
    'experience.role2.b1': 'Yazılım mühendisliği, algoritmalar ve veri yapıları üzerine yoğunlaştım.',
    'experience.role2.b2':
      'Web geliştirme, veritabanları ve dağıtık sistemler alanlarında uygulamalı dersler tamamladım.',
    'experience.role2.b3':
      'Agile iş akışları, kod incelemeleri ve iteratif teslimat yaklaşımıyla takım projeleri yürüttüm.',
    'section.contact': 'İletişim',
    'contact.intro':
      'Yeni fırsatlara, iş birliklerine ve tanışmaya her zaman açığım. Bana ulaşabilirsin, genelde 24 saat içinde dönüş yapıyorum.',
    'contact.linksLead': 'Doğrudan iletişim için',
    'contact.linksMid': 'veya kodlarım için',
    'form.name': 'Ad Soyad',
    'form.email': 'E-posta',
    'form.message': 'Mesaj',
    'form.namePlaceholder': 'Adınızı yazın',
    'form.emailPlaceholder': 'ornek@mail.com',
    'form.messagePlaceholder': 'Mesajınızı yazın...',
    'form.submit': 'Mesaj Gönder',
    'footer.text': '© 2025 Abdullah ÖzToprak. Özenle geliştirildi, Playwright ile test edildi.',
    'form.errors.nameRequired': 'İsim zorunludur.',
    'form.errors.nameMin': 'İsim en az 2 karakter olmalıdır.',
    'form.errors.emailRequired': 'E-posta zorunludur.',
    'form.errors.emailInvalid': 'Geçerli bir e-posta adresi girin.',
    'form.errors.messageRequired': 'Mesaj zorunludur.',
    'form.errors.messageMin': 'Mesaj en az 10 karakter olmalıdır.',
    'form.errors.fixFields': 'Lütfen tüm alanları doğru şekilde doldurun.',
    'form.errors.generic': 'Bir hata oluştu.',
    'form.errors.network': 'Ağ hatası. Lütfen daha sonra tekrar deneyin.',
    'form.success': 'Teşekkürler, {name}! Mesajın başarıyla alındı.'
  }
};

const SERVER_ERROR_MAP = {
  'Name is required.': 'form.errors.nameRequired',
  'Name must be at least 2 characters.': 'form.errors.nameMin',
  'Email is required.': 'form.errors.emailRequired',
  'Please provide a valid email address.': 'form.errors.emailInvalid',
  'Please enter a valid email.': 'form.errors.emailInvalid',
  'Message is required.': 'form.errors.messageRequired',
  'Message must be at least 10 characters.': 'form.errors.messageMin',
  'An unexpected error occurred. Please try again later.': 'form.errors.network'
};

let currentLanguage = 'en';

function t(key) {
  return I18N[currentLanguage][key] || I18N.en[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const text = t(key);
    element.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.setAttribute('placeholder', t(key));
  });

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    const switchingTo = currentLanguage === 'en' ? 'tr' : 'en';
    langToggle.textContent = switchingTo.toUpperCase();
    langToggle.setAttribute(
      'aria-label',
      currentLanguage === 'en' ? 'Switch language to Turkish' : 'Dili İngilizceye çevir'
    );
  }
}

function initLanguageToggle() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;

  try {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'tr') currentLanguage = saved;
  } catch {
    currentLanguage = 'en';
  }

  applyTranslations();

  langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    applyTranslations();
    try {
      localStorage.setItem('portfolio_lang', currentLanguage);
    } catch {
      // Ignore storage errors
    }
  });
}

/* ════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ════════════════════════════════════════════════════════ */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
    bar.setAttribute('aria-valuenow', Math.round(progress));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ════════════════════════════════════════════════════════
   HEADER SCROLL STATE
   ════════════════════════════════════════════════════════ */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function update() {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ════════════════════════════════════════════════════════
   MOBILE NAVIGATION TOGGLE
   ════════════════════════════════════════════════════════ */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  function close() {
    toggle.classList.remove('open');
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    if (isOpen) {
      close();
    } else {
      toggle.classList.add('open');
      nav.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      close();
      toggle.focus();
    }
  });
}

/* ════════════════════════════════════════════════════════
   ACTIVE NAV LINK HIGHLIGHTING
   ════════════════════════════════════════════════════════ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
          });
        }
      });
    },
    {
      rootMargin: '-30% 0px -70% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ════════════════════════════════════════════════════════
   SCROLL REVEAL ANIMATIONS
   ════════════════════════════════════════════════════════ */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 4) * 80}ms`;
    observer.observe(el);
  });
}

/* ════════════════════════════════════════════════════════
   CONTACT FORM VALIDATION & SUBMISSION
   ════════════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: {
      input: form.querySelector('#contactName'),
      error: form.querySelector('#nameError')
    },
    email: {
      input: form.querySelector('#contactEmail'),
      error: form.querySelector('#emailError')
    },
    message: {
      input: form.querySelector('#contactMessage'),
      error: form.querySelector('#messageError')
    }
  };

  const submitBtn = form.querySelector('#submitBtn');
  const result = form.querySelector('#formResult');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(name) {
    const { input, error } = fields[name];
    const value = input.value.trim();
    let msg = '';

    switch (name) {
      case 'name':
        if (!value) msg = t('form.errors.nameRequired');
        else if (value.length < 2) msg = t('form.errors.nameMin');
        break;
      case 'email':
        if (!value) msg = t('form.errors.emailRequired');
        else if (!isValidEmail(value)) msg = t('form.errors.emailInvalid');
        break;
      case 'message':
        if (!value) msg = t('form.errors.messageRequired');
        else if (value.length < 10) msg = t('form.errors.messageMin');
        break;
      default:
        break;
    }

    error.textContent = msg;
    input.classList.toggle('error', !!msg);
    input.classList.toggle('valid', !msg && value.length > 0);
    return !msg;
  }

  Object.keys(fields).forEach((name) => {
    fields[name].input.addEventListener('blur', () => validateField(name));
    fields[name].input.addEventListener('input', () => {
      if (fields[name].input.classList.contains('error')) {
        validateField(name);
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameValid = validateField('name');
    const emailValid = validateField('email');
    const messageValid = validateField('message');

    if (!nameValid || !emailValid || !messageValid) {
      showResult(t('form.errors.fixFields'), false);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    hideResult();

    try {
      const payload = {
        name: fields.name.input.value.trim(),
        email: fields.email.input.value.trim(),
        message: fields.message.input.value.trim()
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showResult(t('form.success').replace('{name}', payload.name), true);
        form.reset();
        Object.keys(fields).forEach((name) => {
          fields[name].input.classList.remove('valid', 'error');
          fields[name].error.textContent = '';
        });
      } else {
        const localizedErrors = Array.isArray(data.errors)
          ? data.errors.map((err) => {
              const key = SERVER_ERROR_MAP[err];
              return key ? t(key) : err;
            })
          : [t('form.errors.generic')];

        showResult(localizedErrors.join(' '), false);
      }
    } catch {
      showResult(t('form.errors.network'), false);
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
    }
  });

  function showResult(message, isSuccess) {
    result.textContent = message;
    result.className = `form-result show ${isSuccess ? 'success' : 'error'}`;
  }

  function hideResult() {
    result.textContent = '';
    result.className = 'form-result';
  }
}

/* ════════════════════════════════════════════════════════
   SMOOTH SCROLL FOR ANCHOR LINKS
   ════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ════════════════════════════════════════════════════════
   INITIALIZATION
   ════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initScrollProgress();
  initHeaderScroll();
  initNavToggle();
  initActiveNav();
  initRevealAnimations();
  initContactForm();
  initSmoothScroll();
});
