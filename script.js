const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('section, .card, .apresentacao').forEach(el => observer.observe(el));

const btnTopo = document.getElementById('btnTopo');
window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btnTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('btnWhatsapp').addEventListener('click', () => {
  window.open('https://wa.me/5531994344496?text=Ol%C3%A1%2C%20Carolina!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20queria%20conversar%20com%20voc%C3%AA.%20%F0%9F%91%8B', '_blank');
});

const links = Array.from(document.querySelectorAll('#menu a'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function setActiveLink() {
  const fromTop = window.scrollY + 100;
  let current = sections[0];
  for (const sec of sections) {
    if (sec.offsetTop <= fromTop) current = sec;
  }
  links.forEach(l => l.classList.toggle('ativo', l.getAttribute('href') === '#' + current.id));
}
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
