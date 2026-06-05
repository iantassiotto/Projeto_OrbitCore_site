/* ============================================================
   ORBITCORE — MAIN SCRIPT
   ============================================================ */

/* ── Star Field Canvas ─────────────────────────────────────── */
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, stars = [], nebulae = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        r:    Math.random() * 1.5 + 0.2,
        alpha:Math.random(),
        speed:Math.random() * 0.003 + 0.001,
        phase:Math.random() * Math.PI * 2,
      });
    }
  }

  function createNebulae() {
    nebulae = [
      { x: W * 0.75, y: H * 0.25, r: 300, color: 'rgba(0,212,255,' },
      { x: W * 0.2,  y: H * 0.7,  r: 250, color: 'rgba(168,85,247,' },
      { x: W * 0.5,  y: H * 0.5,  r: 200, color: 'rgba(6,182,212,' },
    ];
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);

    /* Nebulae */
    nebulae.forEach(n => {
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      grad.addColorStop(0, n.color + '0.04)');
      grad.addColorStop(1, n.color + '0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    /* Stars */
    stars.forEach(s => {
      const alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed * 1000 + s.phase));
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = '#fff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
  }

  function loop(t) {
    draw(t / 1000);
    requestAnimationFrame(loop);
  }

  resize();
  createStars(220);
  createNebulae();
  requestAnimationFrame(loop);

  window.addEventListener('resize', () => {
    resize();
    createNebulae();
    createStars(220);
  });
})();

/* ── Navbar scroll effect ──────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Hamburger / Mobile menu ───────────────────────────────── */
(function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  /* Close on link click */
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
})();

/* ── Scroll Reveal ─────────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();

/* ── Hero Stats Counter ────────────────────────────────────── */
(function initHeroCounter() {
  const stats = document.querySelectorAll('.hero-stat-value');
  if (!stats.length) return;

  const duration = 1000;

  stats.forEach(el => {
    const raw    = el.textContent.trim();
    const target = parseFloat(raw);
    if (isNaN(target)) return;

    const isDecimal = raw.includes('.');
    const decimals  = isDecimal ? raw.split('.')[1].length : 0;
    const suffix    = raw.replace(/[\d.]/g, '');
    const start     = performance.now();

    el.textContent = isDecimal ? (0).toFixed(decimals) + suffix : '0' + suffix;

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      const value    = target * eased;

      el.textContent = isDecimal
        ? value.toFixed(decimals) + suffix
        : Math.floor(value) + suffix;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
})();

/* ── Planet Comparison (exoplanetas.html) ──────────────────── */
(function initCompare() {
  const card = document.getElementById('compare-card');
  if (!card) return;

  const PLANETS = {
    b: {
      name: 'TRAPPIST‑1b', sub: 'Planeta 01 · Mais próximo', orb: 'compare-orb-wrap--b',
      img: '../assets/TRAPPIST-1b.png', esi: 'ESI 0.30', esiClass: 'compare-esi-tag--hostile', compat: 63,
      metrics: {
        radius: { val: '1.12 R⊕', pct: 89 }, mass: { val: '1.37 M⊕', pct: 73 },
        grav:   { val: '1.10 g',  pct: 91 }, temp: { val: '+125°C', pct:  0 },
        esiBar: { val: '0.30', pct: 30 }
      }
    },
    c: {
      name: 'TRAPPIST‑1c', sub: 'Planeta 02', orb: 'compare-orb-wrap--c',
      img: '../assets/TRAPPIST-1c.png', esi: 'ESI 0.57', esiClass: 'compare-esi-tag--possible', compat: 77,
      metrics: {
        radius: { val: '1.10 R⊕', pct: 91 }, mass: { val: '1.31 M⊕', pct: 76 },
        grav:   { val: '1.10 g',  pct: 91 }, temp: { val: '+65°C', pct: 50 },
        esiBar: { val: '0.57', pct: 57 }
      }
    },
    d: {
      name: 'TRAPPIST‑1d', sub: 'Planeta 03 · Borda da Zona Habitável', orb: 'compare-orb-wrap--d',
      img: '../assets/TRAPPIST-1d.png', esi: 'ESI 0.71', esiClass: 'compare-esi-tag--possible', compat: 69,
      metrics: {
        radius: { val: '0.77 R⊕', pct: 77 }, mass: { val: '0.41 M⊕', pct: 41 },
        grav:   { val: '0.63 g',  pct: 63 }, temp: { val: '+13°C', pct: 98 },
        esiBar: { val: '0.71', pct: 71 }
      }
    },
    e: {
      name: 'TRAPPIST‑1e', sub: 'Alvo da Missão OrbitCore', orb: 'compare-orb-wrap--e',
      img: '../assets/TRAPPIST-1e.png', esi: 'ESI 0.85', esiClass: '', compat: 80,
      metrics: {
        radius: { val: '0.92 R⊕', pct: 92 }, mass: { val: '0.69 M⊕', pct: 69 },
        grav:   { val: '0.95 g',  pct: 95 }, temp: { val: '-22°C', pct: 63 },
        esiBar: { val: '0.85', pct: 85 }
      }
    },
    f: {
      name: 'TRAPPIST‑1f', sub: 'Planeta 05 · Zona Habitável', orb: 'compare-orb-wrap--f',
      img: '../assets/TRAPPIST-1f.png', esi: 'ESI 0.67', esiClass: 'compare-esi-tag--possible', compat: 78,
      metrics: {
        radius: { val: '1.05 R⊕', pct: 95 }, mass: { val: '1.04 M⊕', pct: 96 },
        grav:   { val: '0.95 g',  pct: 95 }, temp: { val: '-58°C', pct: 27 },
        esiBar: { val: '0.67', pct: 67 }
      }
    },
    g: {
      name: 'TRAPPIST‑1g', sub: 'Planeta 06 · Maior do Sistema', orb: 'compare-orb-wrap--g',
      img: '../assets/TRAPPIST-1g.png', esi: 'ESI 0.58', esiClass: 'compare-esi-tag--possible', compat: 67,
      metrics: {
        radius: { val: '1.13 R⊕', pct: 88 }, mass: { val: '1.32 M⊕', pct: 76 },
        grav:   { val: '1.04 g',  pct: 96 }, temp: { val: '-76°C', pct:  9 },
        esiBar: { val: '0.58', pct: 58 }
      }
    },
    h: {
      name: 'TRAPPIST‑1h', sub: 'Planeta 07 · Mais distante', orb: 'compare-orb-wrap--h',
      img: '../assets/TRAPPIST-1h.png', esi: 'ESI 0.34', esiClass: 'compare-esi-tag--frozen', compat: 41,
      metrics: {
        radius: { val: '0.78 R⊕', pct: 78 }, mass: { val: '0.33 M⊕', pct: 33 },
        grav:   { val: '0.54 g',  pct: 54 }, temp: { val: '-101°C', pct:  0 },
        esiBar: { val: '0.34', pct: 34 }
      }
    }
  };

  function level(pct) {
    return pct >= 75 ? 'high' : pct >= 50 ? 'mid' : 'low';
  }

  function renderPlanet(key) {
    const p = PLANETS[key];
    if (!p) return;

    const orb = document.getElementById('cp-orb');
    orb.className = 'compare-orb-wrap ' + p.orb;
    const orbImg = document.getElementById('cp-orb-img');
    orbImg.src = p.img;
    orbImg.alt = p.name;

    document.getElementById('cp-name').textContent = p.name;
    document.getElementById('cp-sub').textContent  = p.sub;

    const esiBadge = document.getElementById('cp-esi-badge');
    esiBadge.textContent = p.esi;
    esiBadge.className   = 'compare-esi-tag ' + p.esiClass;

    const compatEl = document.getElementById('cp-compat');
    compatEl.textContent = p.compat + '%';
    compatEl.className   = 'compare-compat-pct compat-' + level(p.compat);

    const metricMap = [
      ['radius', 'cp-radius'], ['mass', 'cp-mass'],
      ['grav', 'cp-grav'], ['temp', 'cp-temp'], ['esiBar', 'cp-esi']
    ];

    metricMap.forEach(([mKey, idPrefix]) => {
      const m   = p.metrics[mKey];
      const lv  = level(m.pct);
      const fill = document.getElementById(idPrefix + '-fill');
      const pct  = document.getElementById(idPrefix + '-pct');
      const val  = document.getElementById(idPrefix + '-val');

      fill.style.setProperty('--fill', m.pct + '%');
      fill.className = 'compare-bar-fill fill-' + lv;

      pct.textContent = m.pct + '% similar';
      pct.className   = 'compare-metric-pct pct-' + lv;

      val.textContent = m.val;
      val.className   = 'compare-val compare-val--' + lv;
    });
  }

  document.querySelectorAll('.compare-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.compare-tab').forEach(t => t.classList.remove('compare-tab--active'));
      tab.classList.add('compare-tab--active');
      renderPlanet(tab.dataset.planet);
    });
  });

  renderPlanet('e');
})();

/* ── Active nav link ───────────────────────────────────────── */
(function initActiveLink() {
  const links = document.querySelectorAll('.nav-links a');
  const path  = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

/* ── Calculadora Kepler (missao.html) ─────────────────────────────────────── */
(function initKeplerCalc() {
  const slider  = document.getElementById('kepler-slider');
  const presets = document.querySelectorAll('.kepler-preset');
  if (!slider) return;

  const G    = 6.674e-11;
  const M    = 0.0898 * 1.989e30;
  const AU   = 1.496e11;

  function calcDias(aAU) {
    const a  = aAU * AU;
    const Ts = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / (G * M));
    return Ts / 86400;
  }

  function atualizar(aAU) {
    const dias  = calcDias(aAU);
    const razao = (365.25 / dias).toFixed(1);

    document.getElementById('kepler-period').textContent = dias.toFixed(2);
    document.getElementById('kepler-au-val').textContent = parseFloat(aAU).toFixed(4);
    document.getElementById('kepler-note').textContent   =
      '≈ ' + razao + '× mais rápido que a Terra';

    slider.value = aAU;

    presets.forEach(btn => {
      btn.classList.toggle('kepler-preset--active',
        Math.abs(parseFloat(btn.dataset.a) - aAU) < 0.0001);
    });
  }

  slider.addEventListener('input', () => atualizar(parseFloat(slider.value)));

  presets.forEach(btn => {
    btn.addEventListener('click', () => atualizar(parseFloat(btn.dataset.a)));
  });

  atualizar(0.0293);
})();
