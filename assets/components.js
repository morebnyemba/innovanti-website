/* Shared header + footer for all pages */
(function () {

  /* ── Detect active page ── */
  const p = location.pathname.split('/').pop().replace('.html', '') || 'index';
  const active = p === 'services' ? 'services' : p === 'about' ? 'about' : p === 'contact' ? 'contact' : 'home';

  /* ── Nav link helper ── */
  function navHref(id) {
    return id === 'home' ? 'index.html' : id + '.html';
  }
  function pill(id, label) {
    return `<a href="${navHref(id)}" class="pill${active === id ? ' on' : ''}"><span class="pbg"></span><span>${label}</span></a>`;
  }

  /* ── Header ── */
  const header = `
    <div class="ubar">
      <div class="ubar-in">
        <div class="ubar-l">
          <span class="udot"></span>
          <span style="color:#cdd5e6;font-weight:600;letter-spacing:.02em">Harare, Zimbabwe</span>
          <span style="color:#46527a">Multi-sector technology &amp; trade</span>
        </div>
        <div class="ubar-r">
          <span>0712 538 836</span>
          <span class="usep"></span>
          <span>innovantisolutions.co.zw</span>
          <span class="usep"></span>
          <span>Mon&ndash;Fri &middot; 08:00&ndash;17:00</span>
        </div>
      </div>
    </div>
    <nav class="nav">
      <div class="nav-in">
        <a href="index.html" class="nav-logo" aria-label="Innovanti Solutions &mdash; Home">
          <img src="project/assets/innovanti-logo.png" alt="Innovanti Solutions">
        </a>
        <div class="pills">
          ${pill('home', 'Home')}
          ${pill('services', 'Services')}
          ${pill('about', 'About')}
          ${pill('contact', 'Contact')}
        </div>
        <a href="contact.html" class="nav-cta">Request a proposal &rarr;</a>
      </div>
    </nav>`;

  /* ── Footer ── */
  const footer = `
    <footer>
      <div class="ft-in">
        <div class="ft-grid">
          <div>
            <div class="ft-brand">Innovanti<span class="red"> Solutions</span></div>
            <p class="ft-tag">Innovating technology. Connecting markets. Delivering value.</p>
            <div class="ft-loc">Harare, Zimbabwe</div>
          </div>
          <div>
            <div class="ft-clbl">Explore</div>
            <div class="ft-links">
              <a href="index.html" class="ft-btn">Home</a>
              <a href="services.html" class="ft-btn">Services</a>
              <a href="about.html" class="ft-btn">About</a>
              <a href="contact.html" class="ft-btn">Contact</a>
            </div>
          </div>
          <div>
            <div class="ft-clbl">Services</div>
            <div class="ft-list">
              <span>IT &amp; Cybersecurity</span>
              <span>Network Solutions</span>
              <span>Procurement</span>
              <span>Trading &amp; Brokerage</span>
            </div>
          </div>
          <div>
            <div class="ft-clbl">Contact</div>
            <div class="ft-list">
              <span>No. 42 Tigere Mansions, Harare</span>
              <span>0712 538 836</span>
              <span>innovantisolutions.co.zw</span>
              <span>Mon&ndash;Fri &middot; 08:00&ndash;17:00</span>
            </div>
          </div>
        </div>
        <div class="ft-bot">
          <span>&copy; 2026 Innovanti Solutions. All rights reserved.</span>
          <span>Multi-Sector Technology, Trading &amp; Procurement</span>
        </div>
      </div>
    </footer>`;

  /* ── Inject on DOM ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    const hEl = document.getElementById('site-header');
    const fEl = document.getElementById('site-footer');
    if (hEl) hEl.innerHTML = header;
    if (fEl) fEl.innerHTML = footer;

    initReveal();
    startAnimLoop();
  });

  /* ── Scroll reveal (fold-in) ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!window.IntersectionObserver) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── Animation loop (nodes + glow + parallax) ── */
  function startAnimLoop() {
    const heroImg  = document.getElementById('hero-img');
    const heroGlow = document.getElementById('hero-glow');
    const mpx      = document.getElementById('mpx');
    const pnodes   = document.querySelectorAll('.pnode');

    (function tick() {
      const t  = performance.now() / 1000;
      const sy = window.scrollY || 0;

      /* Pulse network nodes */
      pnodes.forEach(function (n) {
        const ph = parseFloat(n.dataset.ph) || 0;
        n.style.opacity = (0.3 + 0.65 * (0.5 + 0.5 * Math.sin(t * 1.5 + ph))).toFixed(3);
      });

      /* Drift glow */
      if (heroGlow) {
        heroGlow.style.transform =
          'translate3d(' + (Math.sin(t * .28) * 26).toFixed(1) + 'px,' +
          (Math.cos(t * .22) * 18).toFixed(1) + 'px,0)';
      }

      /* Hero bg subtle parallax */
      if (heroImg) {
        heroImg.style.transform = 'translateY(' + (sy * 0.22).toFixed(1) + 'px)';
      }

      /* Mission band parallax */
      if (mpx) {
        var rect = mpx.parentElement.getBoundingClientRect();
        var vh = window.innerHeight;
        if (rect.top < vh && rect.bottom > 0) {
          var progress = (vh - rect.top) / (vh + rect.height);
          mpx.style.transform = 'translateY(' + ((progress - 0.5) * 90).toFixed(1) + 'px)';
        }
      }

      requestAnimationFrame(tick);
    })();
  }

})();
