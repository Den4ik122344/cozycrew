// Scroll reveal
const elements = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('revealed');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Lightbox carousel
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('lightbox');
  const overlayImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentImages = [];
  let currentIndex = 0;

  document.querySelectorAll('.thumb-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const card = icon.closest('.testimonial-card');
      currentImages = Array.from(card.querySelectorAll('.thumb-icon')).map(i => i.dataset.fullSrc);
      currentIndex = currentImages.indexOf(icon.dataset.fullSrc);
      overlayImg.src = currentImages[currentIndex];
      overlay.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  prevBtn.addEventListener('click', () => {
    if (!currentImages.length) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    overlayImg.src = currentImages[currentIndex];
  });
  nextBtn.addEventListener('click', () => {
    if (!currentImages.length) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    overlayImg.src = currentImages[currentIndex];
  });
});


// Testimonials carousel and keyboard nav + dynamic footer
document.addEventListener('DOMContentLoaded', () => {
  // Existing lightbox carousel init above

  // Carousel scroll buttons
  const container = document.querySelector('.testimonials-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const card = container.querySelector('.testimonial-card');
  const gap = parseInt(getComputedStyle(container).gap) || 16;
  const scrollAmount = card.clientWidth + gap;
  prevBtn.addEventListener('click', () => container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => container.scrollBy({ left:  scrollAmount, behavior: 'smooth' }));

  // Keyboard navigation
  document.querySelectorAll('.testimonial-card').forEach(c => {
    c.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') nextBtn.click();
      if (e.key === 'ArrowLeft') prevBtn.click();
    });
  });

  // Dynamic footer year
  const footerP = document.querySelector('footer p');
  if (footerP) footerP.textContent = `© ${new Date().getFullYear()} CozyCrew. All rights reserved.`;
});


// Dynamic footer year per six-point spec
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Modal handling with show class and animation
document.addEventListener('DOMContentLoaded', () => {
  const openHM = document.getElementById('open-handyman-prices');
  const openCL = document.getElementById('open-cleaning-prices');
  const hmModal = document.getElementById('handyman-modal');
  const clModal = document.getElementById('cleaning-modal');
  const closeBtns = document.querySelectorAll('.modal .close');

  const showModal = modal => modal.classList.add('show');
  const hideModal = modal => modal.classList.remove('show');

  openHM && openHM.addEventListener('click', () => showModal(hmModal));
  openCL && openCL.addEventListener('click', () => showModal(clModal));

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      const modal = document.getElementById(target);
      hideModal(modal);
    });
  });

  [hmModal, clModal].forEach(modal => {
    modal && modal.addEventListener('click', e => {
      if (e.target === modal) hideModal(modal);
    });
  });
});


  const burgerMenu = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');

  burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


  document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const headerRight = document.querySelector('.header-right');
  const overlay = document.createElement('div');
  overlay.classList.add('menu-overlay');

  document.body.appendChild(overlay);

  burgerMenu.addEventListener('click', () => {
    headerRight.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    headerRight.classList.remove('open');
    overlay.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');

  burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('burger-toggle');
  const menuOverlay = document.getElementById('menu-overlay');
  const headerRight = document.querySelector('.header-right');

  if (burgerToggle && menuOverlay) {
    menuOverlay.addEventListener('click', () => {
      burgerToggle.checked = false;
    });
  }

  burgerToggle.addEventListener('change', () => {
    if (burgerToggle.checked) {
      headerRight.style.display = 'flex';
    } else {
      headerRight.style.display = 'none';
    }
  });
});