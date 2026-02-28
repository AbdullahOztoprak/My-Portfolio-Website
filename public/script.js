/**
 * Portfolio — Main Frontend Script
 * Modular vanilla ES6+ JavaScript
 * Handles: navigation, scroll effects, form validation, animations
 */

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

  // Close nav when clicking a link
  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', close);
  });

  // Close on Escape key
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
      threshold: 0,
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

  // Respect reduced motion preference
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
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el, index) => {
    el.style.transitionDelay = `${index % 4 * 80}ms`;
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
      error: form.querySelector('#nameError'),
    },
    email: {
      input: form.querySelector('#contactEmail'),
      error: form.querySelector('#emailError'),
    },
    message: {
      input: form.querySelector('#contactMessage'),
      error: form.querySelector('#messageError'),
    },
  };

  const submitBtn = form.querySelector('#submitBtn');
  const result = form.querySelector('#formResult');

  /* ── Validation helpers ───────────────────────────── */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(name) {
    const { input, error } = fields[name];
    const value = input.value.trim();
    let msg = '';

    switch (name) {
      case 'name':
        if (!value) msg = 'Name is required.';
        else if (value.length < 2) msg = 'Name must be at least 2 characters.';
        break;
      case 'email':
        if (!value) msg = 'Email is required.';
        else if (!isValidEmail(value)) msg = 'Please enter a valid email.';
        break;
      case 'message':
        if (!value) msg = 'Message is required.';
        else if (value.length < 10) msg = 'Message must be at least 10 characters.';
        break;
    }

    error.textContent = msg;
    input.classList.toggle('error', !!msg);
    input.classList.toggle('valid', !msg && value.length > 0);
    return !msg;
  }

  /* ── Real-time validation on blur ─────────────────── */
  Object.keys(fields).forEach((name) => {
    fields[name].input.addEventListener('blur', () => validateField(name));
    fields[name].input.addEventListener('input', () => {
      // Clear error on typing
      if (fields[name].input.classList.contains('error')) {
        validateField(name);
      }
    });
  });

  /* ── Form submission ──────────────────────────────── */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    const nameValid = validateField('name');
    const emailValid = validateField('email');
    const messageValid = validateField('message');

    if (!nameValid || !emailValid || !messageValid) {
      showResult('Please fill in all fields correctly.', false);
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    hideResult();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.input.value.trim(),
          email: fields.email.input.value.trim(),
          message: fields.message.input.value.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showResult(data.message, true);
        form.reset();
        Object.keys(fields).forEach((name) => {
          fields[name].input.classList.remove('valid', 'error');
          fields[name].error.textContent = '';
        });
      } else {
        const errorMsg = data.errors ? data.errors.join(' ') : 'Something went wrong.';
        showResult(errorMsg, false);
      }
    } catch {
      showResult('Network error. Please try again later.', false);
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
    }
  });

  /* ── Result display helpers ───────────────────────── */
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
  initScrollProgress();
  initHeaderScroll();
  initNavToggle();
  initActiveNav();
  initRevealAnimations();
  initContactForm();
  initSmoothScroll();
});
