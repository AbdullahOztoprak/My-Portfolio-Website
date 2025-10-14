// Certificates gallery JS: toggle section and scroll right
const certToggle = document.getElementById('cert-toggle');
const certSection = document.querySelector('.certificates-section');
const certGallery = document.getElementById('cert-gallery');
const certScrollRight = document.getElementById('cert-scroll-right');

let certVisible = true;
certToggle.addEventListener('click', () => {
  certVisible = !certVisible;
  if (certVisible) {
    certSection.classList.remove('hide');
    certToggle.innerHTML = '&#x25BC;';
  } else {
    certSection.classList.add('hide');
    certToggle.innerHTML = '&#x25B2;';
  }
});

certScrollRight.addEventListener('click', () => {
  certGallery.scrollBy({ left: 320, behavior: 'smooth' });
});

// Add left scroll functionality
certToggle.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  certGallery.scrollBy({ left: -320, behavior: 'smooth' });
});
