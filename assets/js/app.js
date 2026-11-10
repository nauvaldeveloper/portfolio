/* =========================================================
   NAUVAL RAFI — portfolio v3 (vanilla JS)
   ========================================================= */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  const P = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const img = (name) => `assets/img/work/${name}.webp`;
  const byId = (id) => P.PROJECTS.find((p) => p.id === id);
  let cat = 'all';

  function badge(p) {
    if (!p.label) return '';
    const cls = p.label === 'Client' ? 'badge badge--accent' : p.label === 'Konsep' ? 'badge badge--line' : 'badge';
    return `<span class="${cls}">${esc(p.label)}</span>`;
  }
  const chips = (list, n = 99) => `<div class="chips">${list.slice(0, n).map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>`;

  /* ---------------- hero & stats ---------------- */
  function renderSocial() {
    const links = P.SOCIALS.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`);
    $('#heroSocial').innerHTML = links.map((l) => `<li>${l}</li>`).join('');
    $('#footSocial').innerHTML = links.join('');
    const c = $('#contactBtn'); c.href = P.CONTACT_URL;
  }
  function renderStats() {
    const live = P.PROJECTS.filter((p) => p.links && p.links.length).length;
    const certs = P.TIMELINE.filter((t) => t.img && t.img.startsWith('cert')).length;
    $('#stats').innerHTML = [
      [P.PROJECTS.length, 'Project'], [live, 'Bisa dicoba live'], [2, 'Bisnis digital aktif'], [certs, 'Sertifikat'],
    ].map(([v, k]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  }

  /* ---------------- work ---------------- */
  function renderFilters() {
    $('#filters').innerHTML = P.CATEGORIES.map((c) => {
      const n = c.id === 'all' ? P.PROJECTS.length : P.PROJECTS.filter((p) => p.cat === c.id).length;
      return `<button type="button" role="tab" data-cat="${c.id}" aria-selected="${cat === c.id}">${esc(c.label)}<small>${n}</small></button>`;
    }).join('');
  }

  function renderFeatured() {
    const f = P.PROJECTS.find((p) => p.featured);
    const show = f && (cat === 'all' || cat === f.cat);
    $('#featured').innerHTML = show ? `
      <button class="feat rv" type="button" data-open="${f.id}">
        <div class="feat__img"><img src="${img(f.images[0])}" alt="Tampilan ${esc(f.title)}" loading="lazy" width="1280" height="720" /></div>
        <div class="feat__body">
          <div class="badges"><span class="badge badge--accent">Featured</span>${badge(f)}${f.year ? `<span class="badge badge--line">${esc(f.year)}</span>` : ''}</div>
          <h3>${esc(f.title)}</h3>
          <p>${esc(f.short)}</p>
          <p class="feat__role">${esc(f.role)}</p>
          ${chips(f.stack, 7)}
          <span class="more">Lihat detail project</span>
        </div>
      </button>` : '';
  }

  function renderGrid() {
    const list = P.PROJECTS.filter((p) => !p.featured && (cat === 'all' || p.cat === cat));
    $('#grid').innerHTML = list.length ? list.map((p) => `
      <button class="card rv" type="button" data-open="${p.id}">
        <div class="card__img">${p.images.length
          ? `<img src="${img(p.images[0])}" alt="Tampilan ${esc(p.title)}" loading="lazy" width="1280" height="800" />`
          : `<div class="card__ph" aria-hidden="true"><span>${esc(p.stack[p.stack.length - 2] || p.title.split(' ')[0])}</span></div>`}${badge(p)}</div>
        <div class="card__body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.short)}</p>
          ${chips(p.stack, 3)}
        </div>
      </button>`).join('') : (renderFeatured(), $('#featured').innerHTML ? '' : '<p class="empty">Belum ada project di kategori ini.</p>');
    observe();
  }

  /* ---------------- dialog ---------------- */
  let lastFocus = null;
  function openProject(id) {
    const p = byId(id); if (!p) return;
    lastFocus = document.activeElement;
    const imgs = p.images;
    $('#dlgBody').innerHTML = `
      <div class="d">
        <div class="gal">
          ${imgs.length ? `<div class="gal__main"><img id="galMain" src="${img(imgs[0])}" alt="Tampilan ${esc(p.title)}" /></div>
            ${imgs.length > 1 ? `<div class="gal__thumbs">${imgs.map((n, i) => `<button type="button" data-img="${n}" aria-pressed="${i === 0}" aria-label="Gambar ${i + 1}"><img src="${img(n)}" alt="" loading="lazy" /></button>`).join('')}</div>` : ''}`
          : `<div class="gal__main"><div class="card__ph"><span>${esc(p.stack[p.stack.length - 2] || p.title)}</span></div></div>`}
        </div>
        <div class="d__info">
          <div class="badges">${badge(p)}${p.year ? `<span class="badge badge--line">${esc(p.year)}</span>` : ''}</div>
          <h2 id="dlgTitle">${esc(p.title)}</h2>
          <p>${esc(p.short)}</p>
          ${p.role ? `<p class="d__role">Peran: ${esc(p.role)}</p>` : ''}
          ${p.highlights.length ? `<ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>` : ''}
          ${chips(p.stack)}
          ${p.note ? `<p class="d__note">${esc(p.note)}</p>` : ''}
          ${p.links && p.links.length ? `<div class="d__links">${p.links.map((l) => `<a class="btn btn--dark btn--sm" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>` : ''}
        </div>
      </div>`;
    $('#layer').hidden = false; document.body.style.overflow = 'hidden';
    $('.dlg__x').focus();
  }
  function closeProject() { $('#layer').hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }

  /* ---------------- journey & stack ---------------- */
  function renderTimeline() {
    $('#timeline').innerHTML = P.TIMELINE.map((t) => `
      <li class="tl rv">
        <span class="tl__when">${esc(t.when)}</span>
        <div class="tl__body"><h3>${esc(t.title)}</h3><p class="tl__org">${esc(t.org)}</p><p>${esc(t.text)}</p></div>
        ${t.img ? `<div class="tl__img"><img src="assets/img/cert/${t.img}.webp" alt="Dokumentasi ${esc(t.title)}" loading="lazy" /></div>` : '<div></div>'}
      </li>`).join('');
  }
  function renderStack() {
    $('#stackList').innerHTML = P.STACK.map((g) => `<div class="rv"><h3>${esc(g.group)}</h3>${chips(g.items)}</div>`).join('');
  }

  /* ---------------- reveal ---------------- */
  let io = null;
  function observe() {
    const els = document.querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    io = io || new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -6% 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* ---------------- events ---------------- */
  function bind() {
    $('#filters').addEventListener('click', (e) => {
      const b = e.target.closest('[data-cat]'); if (!b) return;
      cat = b.dataset.cat; renderFilters(); renderFeatured(); renderGrid();
    });
    document.addEventListener('click', (e) => {
      const o = e.target.closest('[data-open]'); if (o) { openProject(o.dataset.open); return; }
      const t = e.target.closest('[data-img]');
      if (t) { $('#galMain').src = img(t.dataset.img); document.querySelectorAll('[data-img]').forEach((b) => b.setAttribute('aria-pressed', String(b === t))); return; }
      if (e.target.closest('[data-close]')) closeProject();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#layer').hidden) closeProject(); });

    const burger = $('#burger'), menu = $('#mobileMenu');
    const setMenu = (open) => { menu.hidden = !open; burger.setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; };
    burger.addEventListener('click', () => setMenu(menu.hidden));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  }

  $('#year').textContent = new Date().getFullYear();
  renderSocial(); renderStats(); renderFilters(); renderFeatured(); renderGrid(); renderTimeline(); renderStack(); bind(); observe();
})();
