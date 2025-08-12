
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
if (toggle) {
  toggle.addEventListener('click', () => menu.classList.toggle('show'));
}
// Lightbox
const backdrop = document.createElement('div');
backdrop.className = 'lightbox-backdrop';
backdrop.innerHTML = `
  <button class="lightbox-close" aria-label="Close">Close ✕</button>
  <div class="lightbox"><img alt=""/></div>
`;
document.body.appendChild(backdrop);
const lbImg = backdrop.querySelector('img');
backdrop.addEventListener('click', (e) => {
  if (e.target.classList.contains('lightbox-backdrop') || e.target.classList.contains('lightbox-close')) {
    backdrop.classList.remove('show');
  }
});
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-lightbox]');
  if (!t) return;
  e.preventDefault();
  lbImg.src = t.getAttribute('href') || t.getAttribute('src');
  backdrop.classList.add('show');
});
