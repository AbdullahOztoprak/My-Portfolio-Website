/**
 * Validate an email address format.
 * Simple but effective regex for common email patterns.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Sanitize input — strip HTML tags to prevent XSS.
 */
function sanitize(str) {
  return String(str).replace(/<[^>]*>/g, '').trim();
}

/**
 * POST /api/contact
 * Validates and processes contact form submissions.
 */
function submitContact(req, res) {
  try {
    const { name, email, message } = req.body;

    /* ── Validation ────────────────────────────────────── */
    const errors = [];

    if (!name || !sanitize(name)) {
      errors.push('Name is required.');
    } else if (sanitize(name).length < 2) {
      errors.push('Name must be at least 2 characters.');
    } else if (sanitize(name).length > 100) {
      errors.push('Name must be under 100 characters.');
    }

    if (!email || !sanitize(email)) {
      errors.push('Email is required.');
    } else if (!isValidEmail(sanitize(email))) {
      errors.push('Please provide a valid email address.');
    }

    if (!message || !sanitize(message)) {
      errors.push('Message is required.');
    } else if (sanitize(message).length < 10) {
      errors.push('Message must be at least 10 characters.');
    } else if (sanitize(message).length > 2000) {
      errors.push('Message must be under 2000 characters.');
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    /* ── Process submission ────────────────────────────── */
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      message: sanitize(message),
      timestamp: new Date().toISOString(),
    };

    // In production, this would save to DB or send an email
    console.log('Contact form submission:', sanitizedData);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${sanitizedData.name}! Your message has been received.`,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      errors: ['An unexpected error occurred. Please try again later.'],
    });
  }
}

module.exports = { submitContact, isValidEmail, sanitize };
