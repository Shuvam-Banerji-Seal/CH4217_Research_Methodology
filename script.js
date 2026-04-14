const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
const panels = Array.from(document.querySelectorAll('.tab-panel'));

function activateTab(tabId) {
  tabButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
    btn.setAttribute('aria-selected', btn.dataset.tab === tabId ? 'true' : 'false');
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === tabId);
  });

  const hash = `#${tabId}`;
  if (window.location.hash !== hash) {
    history.replaceState(null, '', hash);
  }
}

function initTabs() {
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  const hashTab = window.location.hash.replace('#', '');
  const defaultTab = tabButtons.some((btn) => btn.dataset.tab === hashTab) ? hashTab : 'overview';
  activateTab(defaultTab);
}

function initHeroTilt() {
  const card = document.querySelector('.hero-card');
  if (!card) {
    return;
  }

  const reset = () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const yRotation = ((x / rect.width) - 0.5) * 14;
    const xRotation = (0.5 - (y / rect.height)) * 12;
    card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  });

  card.addEventListener('mouseleave', reset);
  card.addEventListener('blur', reset);
}

initTabs();
initHeroTilt();
