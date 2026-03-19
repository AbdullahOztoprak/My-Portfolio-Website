/**
 * Portfolio — Main Frontend Script
 * Handles navigation, animations, contact form, and EN/TR localization.
 */

const I18N = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'header.cta': "Let's Talk",
    'hero.greeting': "Hello, I'm",
    'hero.title': 'AI Systems • Backend Architecture • Automation Platforms',
    'hero.description':
      'Building AI systems, backend architectures, and automation tools with a focus on reliability, security, and real-world engineering.',
    'hero.contactCta': 'Get In Touch',
    'hero.projectsCta': 'View Projects',
    'hero.cvCta': 'Download CV',
    'hero.signal1': 'AI Systems',
    'hero.signal2': '23 Public Repositories',
    'hero.signal3': 'Reliability-Focused Engineering',
    'hero.profileLabel': 'GitHub Snapshot',
    'hero.profileBio':
      'Building AI systems, backend architectures, and automation tools with a focus on reliability, security, and real-world engineering.',
    'hero.stat1': 'Public Repos',
    'hero.stat2': 'Followers',
    'hero.stat3': 'Location',
    'common.github': 'GitHub',
    'common.linkedin': 'LinkedIn',
    'section.about': 'About Me',
    'about.p1':
      'I am an early-career Computer Engineering student building real systems with production-minded engineering practices across AI pipelines, backend architecture, automation tooling, and security-aware reliability.',
    'about.p2':
      'My work emphasizes clean design, observable operations, explicit trust boundaries, and maintainable delivery workflows instead of one-off prototypes.',
    'about.p3':
      'My core interests are AI systems engineering, backend service design, automation platforms, observability, and operationally aware software that scales with clarity.',
    'about.metric1': 'Systems Focus',
    'about.metric2': 'Flagship Projects',
    'about.metric3': 'Reliability Mindset',
    'about.interestsTitle': 'Core Interests',
    'about.interest1': 'AI systems and Retrieval-Augmented Generation',
    'about.interest2': 'Backend architecture and service design',
    'about.interest3': 'Automation platforms and developer tooling',
    'about.interest4': 'Observability, reliability, and operations',
    'about.interest5': 'Security-aware system design',
    'section.projects': 'Selected Projects',
    'about.capabilitiesTitle': 'Selected Capabilities',
    'about.capability1': 'Go, Python, TypeScript',
    'about.capability2': 'FastAPI, Express, Flutter',
    'about.capability3': 'RAG, LLM integration, automation',
    'about.capability4': 'PostgreSQL, Redis, CI/CD',
    'about.capability5': 'Security, observability, RBAC',
    'projects.p1.title': 'industrial-rag-engine',
    'projects.p1.eyebrow': 'AI Systems',
    'projects.p1.desc':
      'A modular Retrieval-Augmented Generation system for AI applications with structured knowledge retrieval, FastAPI serving, and scalable clean architecture. It is designed around retrieval quality, typed contracts, and safer answer grounding.',
    'projects.p2.title': 'Backend-Path',
    'projects.p2.eyebrow': 'Backend Architecture',
    'projects.p2.desc':
      'A production-oriented Go backend architecture demonstrating layered service design, authentication, RBAC, PostgreSQL, Redis, and CI-driven development with maintainable operational boundaries.',
    'projects.p3.title': 'Tool_Flower',
    'projects.p3.eyebrow': 'Automation Platform',
    'projects.p3.desc':
      'A secure automation control plane for executing operational tools locally or via SSH with policy enforcement, auditability, observability, and safer execution workflows.',
    'projects.p4.title': 'first-contribution-playground',
    'projects.p4.eyebrow': 'Open Source',
    'projects.p4.desc':
      'An open-source friendly repository that teaches first pull request workflows through contributor onboarding, templates, automation, and beginner-friendly repository operations.',
    'projects.p5.title': 'Lingog',
    'projects.p5.eyebrow': 'Product Build',
    'projects.p5.desc':
      'A Dart-based word puzzle game inspired by Wordle, designed around timed gameplay, progressive difficulty, and product-oriented application structure.',
    'projects.liveDemo': 'Open Repo',
    'projects.sourceCode': 'GitHub Profile',
    'section.experience': 'Experience',
    'experience.role1': 'Computer Engineering Tutor',
    'experience.company1': 'Turkish-German University · Part-time · On-site',
    'experience.role1.b1':
      'Selected by the faculty to support undergraduate students in core computer science courses.',
    'experience.role1.b2':
      'Provided academic support to 40+ students in Algorithms and Data Structures.',
    'experience.role1.b3':
      'Created structured explanations, practical examples, and targeted study materials.',
    'experience.role1.b4':
      'Helped students improve algorithmic thinking, debugging, and problem-solving confidence.',
    'experience.role2': 'AI & Software Development Intern',
    'experience.company2': 'Insider · Internship · On-site',
    'experience.role2.b1': 'Contributed to AI-driven backend architectures and scalable financial systems.',
    'experience.role2.b2':
      'Collaborated on Large Language Model integration for intelligent product features.',
    'experience.role2.b3':
      'Designed automation workflows that reduced manual effort and improved system reliability.',
    'experience.role3': 'Cyber Security Intern',
    'experience.company3': 'Siemens · Internship · On-site',
    'experience.role3.b1':
      'Strengthened Linux-based environments through security hardening and vulnerability-focused thinking.',
    'experience.role3.b2':
      'Designed Jenkins-supported CI/CD automation to reduce deployment friction and manual error.',
    'experience.role3.b3':
      'Gained hands-on exposure to virtualization, secure networking, and operational security workflows.',
    'experience.role4': "Bachelor's Degree, Computer Engineering",
    'experience.company4': 'Turkish-German University',
    'experience.role4.b1':
      'Focused on software architecture, artificial intelligence, and system automation.',
    'experience.role4.b2':
      'Active in the Computer Engineering Society, AI & Data Science Community, and peer tutoring programs.',
    'experience.role4.b3':
      'Bridged theory and practice through scalable backend systems, AI-driven tools, and agile project collaboration.',
    'section.certifications': 'Licenses & Certifications',
    'certs.c1.issuer': 'T.C. Ministry of Industry and Technology',
    'certs.c1.title': 'Milli Teknoloji Akademisi Artificial Intelligence Fundamentals Certificate',
    'certs.c1.meta': 'Issued Mar 2026 · Credential ID 21531656125201',
    'certs.c1.text':
      'Foundational certification focused on artificial intelligence concepts and applied learning fundamentals.',
    'certs.c2.issuer': 'Cisco Networking Academy',
    'certs.c2.title': 'Network Technician Career Path Certificate',
    'certs.c2.meta': 'Issued Aug 2025',
    'certs.c2.text':
      'Certification covering networking foundations, architecture awareness, and practical infrastructure knowledge.',
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
    'footer.text': '© 2025 Abdullah Öztoprak. Built with care and tested with Playwright.',
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
    'nav.projects': 'Projeler',
    'nav.experience': 'Deneyim',
    'nav.contact': 'İletişim',
    'header.cta': 'Konuşalım',
    'hero.greeting': 'Merhaba, ben',
    'hero.title': 'AI Sistemleri • Backend Mimarisi • Otomasyon Platformları',
    'hero.description':
      'Guvenilirlik, guvenlik ve gercek dunya muhendisligi odagiyla AI sistemleri, backend mimarileri ve otomasyon araclari gelistiriyorum.',
    'hero.contactCta': 'İletişime Geç',
    'hero.projectsCta': 'Projeleri Gör',
    'hero.cvCta': 'CV İndir',
    'hero.signal1': 'AI Sistemleri',
    'hero.signal2': '23 Acik Repo',
    'hero.signal3': 'Guvenilirlik Odakli Muhendislik',
    'hero.profileLabel': 'GitHub Ozeti',
    'hero.profileBio':
      'Guvenilirlik, guvenlik ve gercek dunya muhendisligi odagiyla AI sistemleri, backend mimarileri ve otomasyon araclari gelistiriyorum.',
    'hero.stat1': 'Acik Repo',
    'hero.stat2': 'Takipci',
    'hero.stat3': 'Konum',
    'common.github': 'GitHub',
    'common.linkedin': 'LinkedIn',
    'section.about': 'Hakkımda',
    'about.p1':
      'AI pipeline’lari, backend mimarisi, otomasyon araclari ve guvenlik farkindaligi olan guvenilirlik pratikleri etrafinda gercek sistemler gelistiren kariyerinin basindaki bir Bilgisayar Muhendisligi ogrencisiyim.',
    'about.p2':
      'Calismalarim tek seferlik prototiplerden cok temiz tasarim, gozlemlenebilir operasyonlar, acik guven sinirlari ve bakimi kolay teslimat is akislari uzerine kurulu.',
    'about.p3':
      'Temel ilgi alanlarim AI sistem muhendisligi, backend servis tasarimi, otomasyon platformlari, gozlemlenebilirlik ve operasyonel gercekligi olan yazilimlar.',
    'about.metric1': 'Sistem Odagi',
    'about.metric2': 'Amiral Proje',
    'about.metric3': 'Guvenilirlik Bakisi',
    'about.interestsTitle': 'Temel Ilgi Alanlari',
    'about.interest1': 'AI sistemleri ve Retrieval-Augmented Generation',
    'about.interest2': 'Backend mimarisi ve servis tasarimi',
    'about.interest3': 'Otomasyon platformlari ve gelistirici araclari',
    'about.interest4': 'Gozlemlenebilirlik, guvenilirlik ve operasyonlar',
    'about.interest5': 'Guvenlik farkindaligi olan sistem tasarimi',
    'section.projects': 'Secili Projeler',
    'about.capabilitiesTitle': 'Secili Yetenekler',
    'about.capability1': 'Go, Python, TypeScript',
    'about.capability2': 'FastAPI, Express, Flutter',
    'about.capability3': 'RAG, LLM entegrasyonu, otomasyon',
    'about.capability4': 'PostgreSQL, Redis, CI/CD',
    'about.capability5': 'Guvenlik, gozlemlenebilirlik, RBAC',
    'projects.p1.title': 'industrial-rag-engine',
    'projects.p1.eyebrow': 'AI Sistemleri',
    'projects.p1.desc':
      'AI uygulamalari icin yapilandirilmis bilgi retrieval, FastAPI servisleme ve olceklenebilir temiz mimari sunan moduler bir Retrieval-Augmented Generation sistemi. Retrieval kalitesi, tipli contract’lar ve daha guvenli cevap temellendirmesi etrafinda tasarlanmistir.',
    'projects.p2.title': 'Backend-Path',
    'projects.p2.eyebrow': 'Backend Mimarisi',
    'projects.p2.desc':
      'Katmanli servis tasarimi, authentication, RBAC, PostgreSQL, Redis ve CI odakli gelistirme yaklasimiyla uretim odakli bir Go backend mimarisi calismasi.',
    'projects.p3.title': 'Tool_Flower',
    'projects.p3.eyebrow': 'Otomasyon Platformu',
    'projects.p3.desc':
      'Operasyonel araclari lokal veya SSH uzerinden calistiran guvenli bir otomasyon kontrol duzlemi. Politika uygulama, auditability, observability ve daha guvenli execution akislari uzerine kuruludur.',
    'projects.p4.title': 'first-contribution-playground',
    'projects.p4.eyebrow': 'Open Source',
    'projects.p4.desc':
      'Ilk pull request surecini ogreten; contributor onboarding, sablonlar, otomasyon ve baslangic dostu repo operasyonlari sunan open-source odakli bir repository.',
    'projects.p5.title': 'Lingog',
    'projects.p5.eyebrow': 'Urun Yapimi',
    'projects.p5.desc':
      'Wordle esintili, zaman baskisi ve artan zorluk seviyeleriyle tasarlanmis Dart tabanli bir kelime bulmaca oyunu; urun odakli uygulama yapisini gosterir.',
    'projects.liveDemo': 'Repoyu Ac',
    'projects.sourceCode': 'GitHub Profili',
    'section.experience': 'Deneyim',
    'experience.role1': 'Bilgisayar Muhendisligi Tutor',
    'experience.company1': 'Turk-Alman Universitesi · Part-time · On-site',
    'experience.role1.b1':
      'Fakulte tarafindan temel bilgisayar bilimi derslerinde lisans ogrencilerine destek vermek uzere secildim.',
    'experience.role1.b2':
      'Algoritmalar ve Veri Yapilari derslerinde 40+ ogrenciye akademik destek sagladim.',
    'experience.role1.b3':
      'Yapilandirilmis anlatimlar, pratik ornekler ve hedefli calisma materyalleri gelistirdim.',
    'experience.role1.b4':
      'Ogrencilerin algoritmik dusunme, debugging ve problem cozme guvenini guclendirdim.',
    'experience.role2': 'AI & Yazilim Gelistirme Stajyeri',
    'experience.company2': 'Insider · Internship · On-site',
    'experience.role2.b1': 'AI odakli backend mimarileri ve olceklenebilir finansal sistemlerin gelistirilmesine katkida bulundum.',
    'experience.role2.b2':
      'Akilli urun ozellikleri icin Large Language Model entegrasyonu uzerine calistim.',
    'experience.role2.b3':
      'Manuel eforu azaltan ve sistem guvenilirligini artiran otomasyon akislari tasarladim.',
    'experience.role3': 'Cyber Security Stajyeri',
    'experience.company3': 'Siemens · Internship · On-site',
    'experience.role3.b1':
      'Linux tabanli ortamlari guvenlik sertlestirmesi ve zafiyet odakli dusunceyle guclendirdim.',
    'experience.role3.b2':
      'Deployment surtunmesini ve manuel hatayi azaltmak icin Jenkins destekli CI/CD otomasyonu tasarladim.',
    'experience.role3.b3':
      'Virtualization, guvenli ag mimarisi ve operasyonel guvenlik is akislari konusunda uygulamali deneyim kazandim.',
    'experience.role4': 'Lisans, Bilgisayar Muhendisligi',
    'experience.company4': 'Turk-Alman Universitesi',
    'experience.role4.b1':
      'Yazilim mimarisi, yapay zeka ve sistem otomasyonu uzerine guclu bir akademik odak gelistirdim.',
    'experience.role4.b2':
      'Bilgisayar Muhendisligi Toplulugu, AI & Data Science Community ve peer tutoring programlarinda aktif rol aldim.',
    'experience.role4.b3':
      'Olceklenebilir backend sistemleri, AI araclari ve agile proje is birlikleriyle teori-pratik koprusunu kurdum.',
    'section.certifications': 'Lisanslar ve Sertifikalar',
    'certs.c1.issuer': 'T.C. Sanayi ve Teknoloji Bakanligi',
    'certs.c1.title': 'Milli Teknoloji Akademisi Yapay Zeka Temel Egitim Sertifikasi',
    'certs.c1.meta': 'Verilis: Mart 2026 · Belge ID 21531656125201',
    'certs.c1.text':
      'Yapay zeka kavramlari ve uygulamali ogrenme temellerine odaklanan temel seviye sertifika.',
    'certs.c2.issuer': 'Cisco Networking Academy',
    'certs.c2.title': 'Network Technician Career Path Certificate',
    'certs.c2.meta': 'Verilis: Agustos 2025',
    'certs.c2.text':
      'Ag temelleri, mimari farkindalik ve pratik altyapi bilgisi kapsayan sertifikasyon.',
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
    'footer.text': '© 2025 Abdullah Öztoprak. Ozenle gelistirildi ve kalite odakli dusunuldu.',
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
