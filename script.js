/* ============================================================
   FUTURE INSIGHT — PAQUETE 3: AUTORIDAD DIGITAL
   script.js — Vanilla JS, sin dependencias externas
   ============================================================ */

/* ──────────────────────────────────────────
   CONFIGURACIÓN GLOBAL (EDITAR AQUÍ)
   ────────────────────────────────────────── */
const CONFIG = {
  whatsappNumber:  '573115055221',
  whatsappMessage: 'Hola, me interesa conocer más sobre los productos Lumé 🌿',
  phoneDisplay:    '+(57) 311 505 5221',
  mapsEmbedSrc:    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7461537064786!2d-74.05369682414638!3d4.672178095321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b9dd22bf905%3A0xa430e6094e9e70f2!2sChico%20Norte%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1715000000000',
  articlesFile:    'articles.json',
  socialLinks: {
    instagram: '#', // Reemplaza con tu URL de Instagram (ej: https://instagram.com/tuusuario)
    tiktok:    '#', // Reemplaza con tu URL de TikTok
    facebook:  '#', // Reemplaza con tu URL de Facebook
  },
};


/* ──────────────────────────────────────────
   CATÁLOGO DE PRODUCTOS (EDITAR AQUÍ)
   ────────────────────────────────────────── */
const PRODUCTS = [
  { name: 'Sérum Vitamina C',            desc: 'Ilumina y unifica el tono con vitamina C estabilizada al 15%. Resultados visibles desde la primera semana.',        price: '$89.900',  category: 'Tratamientos',  badge: 'Más vendido', image: 'assets/product1.jpg' },
  { name: 'Crema Hidratante FPS 50',     desc: 'Hidratación profunda con protección solar de amplio espectro. Fórmula ligera, ideal para el día a día.',            price: '$79.900',  category: 'Hidratación',   badge: '',            image: 'assets/product2.jpg' },
  { name: 'Limpiador Enzimático Suave',  desc: 'Limpieza profunda sin irritar. Elimina impurezas y maquillaje con enzimas de papaya colombiana.',                   price: '$54.900',  category: 'Limpieza',      badge: '',            image: 'assets/product3.jpg' },
  { name: 'Mascarilla de Arcilla Verde', desc: 'Purifica poros y regula la producción de sebo. Perfecta para piel mixta y grasa. Uso 2–3 veces por semana.',       price: '$48.900',  category: 'Tratamientos',  badge: '',            image: 'assets/product4.jpg' },
  { name: 'Contorno de Ojos Peptídico', desc: 'Reduce ojeras y expresiones de cansancio con complejo de péptidos bioactivos. Textura sedosa de rápida absorción.',  price: '$95.900',  category: 'Tratamientos',  badge: 'Nuevo',       image: 'assets/product5.jpg' },
  { name: 'Tónico con Niacinamida',      desc: 'Equilibra el pH, minimiza poros visibles y prepara la piel para los siguientes pasos de tu rutina.',                price: '$57.900',  category: 'Limpieza',      badge: '',            image: 'assets/product6.jpg' },
  { name: 'Aceite Facial de Rosehip',    desc: 'Regenera y nutre en profundidad. Rico en ácidos grasos esenciales y vitamina E. Ideal para piel seca y madura.',   price: '$69.900',  category: 'Hidratación',   badge: '',            image: 'assets/product7.jpg' },
  { name: 'Kit Rutina Completa',         desc: 'Sérum + Crema FPS + Limpiador + Tónico. La rutina perfecta en un solo set. ¡Ahorra más del 20%!',                  price: '$219.900', category: 'Kits',          badge: 'Oferta',      image: 'assets/product8.jpg' },
];


/* ──────────────────────────────────────────
   TESTIMONIOS (EDITAR AQUÍ)
   ────────────────────────────────────────── */
const TESTIMONIALS = [
  { name: 'Valentina Rojas',   role: 'Clienta frecuente',       text: 'El sérum de vitamina C cambió mi piel por completo en menos de un mes. No exageran en lo que prometen, los resultados son reales. ¡Los adoro!', stars: 5, avatar: '' },
  { name: 'Camila Herrera',    role: 'Piel sensible',            text: 'Por fin encontré una marca que cuida los ingredientes de verdad. Llevo 6 meses usando la crema FPS y mi piel nunca ha estado mejor. Envío súper rápido.', stars: 5, avatar: '' },
  { name: 'Sebastián Mora',    role: 'Compra para regalar',      text: 'Compré el Kit Rutina Completa para mi novia y quedó encantada. La presentación es hermosa y la calidad del producto no decepciona. Muy recomendados.', stars: 5, avatar: '' },
  { name: 'Isabella Castro',   role: 'Influencer de bienestar',  text: 'Probé muchas marcas antes de llegar a Lumé. La diferencia es notable desde la primera semana. Ingredientes honestos, resultados reales. Ya no uso nada más.', stars: 5, avatar: '' },
];


/* ──────────────────────────────────────────
   FAQ CHATBOT — BASE DE CONOCIMIENTO (EDITAR AQUÍ)
   ────────────────────────────────────────── */
const FAQS = [
  { q: '¿Cómo hacer un pedido?',        a: '¡Muy fácil! Explora el catálogo y toca <strong>Consultar</strong> en cualquier producto para ir directo a WhatsApp con tu selección 🛒',                        kw: ['pedido','comprar','orden','pedir','compra'] },
  { q: '¿Cuánto demora el envío?',       a: 'Bogotá: 24–48 h. Nacional: 3–5 días hábiles. ¡Envío <strong>gratis</strong> en compras mayores a $150.000! 📦',                                                kw: ['envío','envio','entrega','demora','tiempo','días','llega','despacho'] },
  { q: '¿Cuáles son sus horarios?',      a: 'Lun–Vie: 9:00–18:00 · Sáb: 10:00–15:00 · Dom: cerrado 🕐',                                                                                                    kw: ['horario','hora','abierto','atienden','atención','atencion'] },
  { q: '¿Cómo agendo un diagnóstico?',  a: 'Tenemos diagnósticos de piel <strong>gratuitos</strong>. Ve a la sección Diagnóstico y elige tu fecha preferida ✨',                                           kw: ['diagnóstico','diagnostico','cita','agendar','reserva','turno','consulta'] },
  { q: '¿Tienen política de cambios?',   a: 'Si el producto llega con defecto, lo reemplazamos sin costo. Escríbenos por WhatsApp con fotos del producto 💙',                                               kw: ['devolucion','devolución','cambio','defecto','dañado','garantía','garantia','roto'] },
  { q: '¿Sus productos son naturales?',  a: '100% cruelty-free, sin parabenos ni sulfatos. Ingredientes con respaldo científico y recursos naturales colombianos 🌿',                                        kw: ['natural','cruelty','animal','vegano','ingrediente','parabeno','sulfato','quimico','químico'] },
  { q: '¿Dónde están ubicados?',         a: 'Calle 85 # 13-47, Chico Norte, Bogotá. También atendemos completamente en línea con envíos a toda Colombia 📍',                                               kw: ['ubicación','ubicacion','dirección','direccion','donde','dónde','local','tienda','bogotá','bogota'] },
  { q: '¿Cuál es el precio del envío?',  a: 'Envío gratis en compras mayores a $150.000. Para compras menores el costo depende de tu ciudad — pregúntanos por WhatsApp 📬',                                kw: ['precio envío','costo envío','valor envío','flete','shipping'] },
];


/* ──────────────────────────────────────────
   CALENDARIO — FECHAS BLOQUEADAS (EDITAR AQUÍ)
   Formato: 'YYYY-MM-DD'
   Agrega fechas en que el negocio no tiene disponibilidad.
   ────────────────────────────────────────── */
const BLOCKED_DATES = [
  '2025-06-02', // Corpus Christi (Colombia)
  '2025-06-23', // Sagrado Corazón (Colombia)
  '2025-07-20', // Día de la Independencia
  '2025-08-07', // Batalla de Boyacá
  '2025-08-18', // Asunción de la Virgen
  '2025-10-13', // Día de la Raza
  '2025-11-03', // Todos los Santos
  '2025-11-17', // Independencia de Cartagena
  '2025-12-08', // Día de la Inmaculada Concepción
  '2025-12-25', // Navidad
  '2026-01-01', // Año Nuevo
  '2026-01-12', // Día de los Reyes Magos
];

/* Días de semana bloqueados (0=Dom, 6=Sáb). Ej: [0, 6] bloquea fin de semana */
const BLOCKED_WEEKDAYS = [0]; // Solo domingos bloqueados


/* ────────────────────────────────────────── */


/* ──────────────────────────────────────────
   WHATSAPP
   ────────────────────────────────────────── */
function initWhatsApp() {
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  document.querySelectorAll(
    '#whatsapp-float,#whatsapp-location-btn,#whatsapp-contact-btn,#whatsapp-services-btn'
  ).forEach(el => { el.href = url; });

  const phone = CONFIG.phoneDisplay || ('+' + CONFIG.whatsappNumber.replace(/\D/g, ''));
  document.querySelectorAll('#phone-display,#footer-phone').forEach(el => {
    el.textContent = phone;
  });
}


/* ──────────────────────────────────────────
   MAPS
   ────────────────────────────────────────── */
function initMaps() {
  const iframe = document.getElementById('google-map');
  if (iframe && CONFIG.mapsEmbedSrc) iframe.src = CONFIG.mapsEmbedSrc;
}


/* ──────────────────────────────────────────
   CATÁLOGO
   ────────────────────────────────────────── */
function initCatalog() {
  const grid    = document.getElementById('catalog-grid');
  const filters = document.getElementById('catalog-filters');
  if (!grid) return;

  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'Todos' ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(cat === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat));
    });
    filters.appendChild(btn);
  });
  renderProducts(PRODUCTS);
}

function renderProducts(products) {
  const grid = document.getElementById('catalog-grid');
  grid.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card fade-in';
    const imgHtml   = p.image ? `<img class="product-card__img" src="${p.image}" alt="${p.name}" loading="lazy" />` : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--color-primary),var(--color-secondary));color:white;font-size:2.5rem;">🏷️</div>`;
    const badgeHtml = p.badge ? `<span class="product-card__badge">${p.badge}</span>` : '';
    const priceHtml = p.price ? `<span class="product-card__price">${p.price}</span>` : '';
    const waUrl     = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola, me interesa: ' + p.name)}`;
    card.innerHTML  = `<div class="product-card__img-wrapper">${imgHtml}${badgeHtml}</div><div class="product-card__body"><h3 class="product-card__name">${p.name}</h3><p class="product-card__desc">${p.desc}</p><div class="product-card__footer">${priceHtml}<a href="${waUrl}" class="product-card__cta" target="_blank" rel="noopener">Consultar</a></div></div>`;
    grid.appendChild(card);
  });
  requestAnimationFrame(observeFadeIn);
}


/* ──────────────────────────────────────────
   BLOG — carga desde articles.json
   ────────────────────────────────────────── */
let allArticles = [];

async function initBlog() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  try {
    const res  = await fetch(CONFIG.articlesFile);
    allArticles = await res.json();
  } catch {
    // Fallback: artículos de ejemplo si no se puede cargar el JSON
    allArticles = [
      { id:1, title:'Cómo hacer crecer tu negocio', excerpt:'Descubre las estrategias más efectivas para escalar tu empresa este año.', content:'<p>Contenido del artículo de ejemplo. Edita <strong>articles.json</strong> con tu contenido real.</p>', category:'Negocios', date:'2025-04-10', image:'', author:'Tu Negocio' },
      { id:2, title:'Marketing digital para pymes', excerpt:'Guía práctica para empezar con poco presupuesto y obtener grandes resultados.', content:'<p>Contenido del artículo de ejemplo. Edita <strong>articles.json</strong> con tu contenido real.</p>', category:'Marketing', date:'2025-03-20', image:'', author:'Tu Negocio' },
    ];
  }

  renderBlog(allArticles);
  renderBlogFilters(allArticles);
}

function renderBlogFilters(articles) {
  const filtersEl = document.getElementById('blog-filters');
  if (!filtersEl) return;
  const cats = ['Todos', ...new Set(articles.map(a => a.category))];
  filtersEl.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'Todos' ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBlog(cat === 'Todos' ? allArticles : allArticles.filter(a => a.category === cat));
    });
    filtersEl.appendChild(btn);
  });
}

function renderBlog(articles) {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = '';

  articles.forEach(article => {
    const card = document.createElement('article');
    card.className = 'blog-card fade-in';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Leer: ${article.title}`);

    const imgHtml = article.image
      ? `<img class="blog-card__img" src="${article.image}" alt="${article.title}" loading="lazy" />`
      : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--color-secondary),var(--color-primary));color:white;font-size:3rem;">📝</div>`;

    const dateFormatted = new Date(article.date + 'T00:00:00').toLocaleDateString('es-MX', { year:'numeric', month:'long', day:'numeric' });

    card.innerHTML = `
      <div class="blog-card__img-wrapper">${imgHtml}</div>
      <div class="blog-card__body">
        <div class="blog-card__meta">
          <span class="blog-card__category">${article.category}</span>
          <span class="blog-card__date">${dateFormatted}</span>
        </div>
        <h3 class="blog-card__title">${article.title}</h3>
        <p class="blog-card__excerpt">${article.excerpt}</p>
        <span class="blog-card__read-more">Leer artículo</span>
      </div>`;

    card.addEventListener('click', () => openArticleModal(article));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openArticleModal(article); });
    grid.appendChild(card);
  });

  requestAnimationFrame(observeFadeIn);
}

function openArticleModal(article) {
  const modal   = document.getElementById('article-modal');
  const content = document.getElementById('modal-content');
  const dateFormatted = new Date(article.date + 'T00:00:00').toLocaleDateString('es-MX', { year:'numeric', month:'long', day:'numeric' });
  const imgHtml = article.image ? `<img src="${article.image}" alt="${article.title}" />` : '';

  content.innerHTML = `
    ${imgHtml}
    <h1>${article.title}</h1>
    <div class="article-modal__meta">
      <span class="blog-card__category">${article.category}</span>
      <span class="blog-card__date">Por ${article.author} · ${dateFormatted}</span>
    </div>
    ${article.content}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-content').scrollTop = 0;
}

function closeArticleModal() {
  document.getElementById('article-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function initArticleModal() {
  document.getElementById('modal-close').addEventListener('click', closeArticleModal);
  document.getElementById('modal-overlay').addEventListener('click', closeArticleModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeArticleModal();
  });
}


/* ──────────────────────────────────────────
   SISTEMA DE RESERVAS
   ────────────────────────────────────────── */
let calendarDate = new Date();
let selectedDate = null;

function initCalendar() {
  document.getElementById('cal-prev').addEventListener('click', () => {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    renderCalendar();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    renderCalendar();
  });
  renderCalendar();
  loadMyReservations();
}

function renderCalendar() {
  const grid  = document.getElementById('calendar-grid');
  const title = document.getElementById('cal-month-title');
  const year  = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  title.textContent = new Date(year, month, 1).toLocaleDateString('es-MX', { month:'long', year:'numeric' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);

  grid.innerHTML = '';

  // Celdas vacías antes del primer día
  for (let i = 0; i < firstDay; i++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day other-month';
    grid.appendChild(cell);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date    = new Date(year, month, d);
    const dateStr = toDateStr(date);
    const cell    = document.createElement('div');
    cell.textContent = d;

    const isPast    = date < today;
    const isBlocked = BLOCKED_DATES.includes(dateStr) || BLOCKED_WEEKDAYS.includes(date.getDay());
    const isToday   = date.toDateString() === today.toDateString();
    const isSelected = selectedDate === dateStr;

    if (isSelected) {
      cell.className = 'cal-day selected';
    } else if (isPast || isBlocked) {
      cell.className = 'cal-day ' + (isBlocked ? 'blocked' : 'past');
    } else {
      cell.className = 'cal-day available' + (isToday ? ' today' : '');
      cell.addEventListener('click', () => selectDate(dateStr, date));
    }

    grid.appendChild(cell);
  }
}

function selectDate(dateStr, date) {
  selectedDate = dateStr;
  renderCalendar();

  const label = date.toLocaleDateString('es-MX', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  document.getElementById('reservation-date-label').textContent = `Fecha seleccionada: ${label}`;
  document.getElementById('reservation-selected').style.display = 'none';
  document.getElementById('reservation-form').style.display     = 'flex';
  document.getElementById('reservation-form').style.flexDirection = 'column';
}

function toDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function initReservationForm() {
  const form   = document.getElementById('reservation-form');
  const status = document.getElementById('res-status');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!selectedDate) return;

    const name    = form.querySelector('#res-name').value.trim();
    const email   = form.querySelector('#res-email').value.trim();
    const phone   = form.querySelector('#res-phone').value.trim();
    const time    = form.querySelector('#res-time').value;
    const service = form.querySelector('#res-service').value;
    const notes   = form.querySelector('#res-notes').value.trim();

    if (!name || !email || !phone || !time) {
      showStatus(status, 'error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    const reservation = { id: Date.now(), date: selectedDate, name, email, phone, time, service, notes };
    saveReservation(reservation);

    showStatus(status, 'success', `¡Reserva confirmada para el ${selectedDate} a las ${time}! Te contactaremos para confirmar.`);
    form.reset();
    document.getElementById('reservation-form').style.display = 'none';
    document.getElementById('reservation-selected').style.display = 'flex';
    selectedDate = null;
    renderCalendar();
    loadMyReservations();

    // Notificación por WhatsApp (opcional)
    const msg = encodeURIComponent(`Hola, acabo de reservar para el ${selectedDate} a las ${time}. Nombre: ${name}. Servicio: ${service || 'Por definir'}.`);
    // window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`, '_blank');
  });
}

function saveReservation(reservation) {
  const reservations = getReservations();
  reservations.push(reservation);
  localStorage.setItem('fi_reservations', JSON.stringify(reservations));
}

function getReservations() {
  try { return JSON.parse(localStorage.getItem('fi_reservations') || '[]'); }
  catch { return []; }
}

function loadMyReservations() {
  const reservations = getReservations();
  const container    = document.getElementById('my-reservations');
  const list         = document.getElementById('my-reservations-list');
  if (!container || !list) return;

  if (reservations.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  list.innerHTML = '';

  reservations.sort((a, b) => a.date.localeCompare(b.date)).forEach(r => {
    const item = document.createElement('div');
    item.className = 'reservation-item';
    item.innerHTML = `
      <div class="reservation-item__info">
        <strong>${r.date} — ${r.time}</strong>
        <span>${r.name} · ${r.service || 'Servicio por definir'}</span>
      </div>
      <button class="reservation-item__delete" data-id="${r.id}">Cancelar</button>`;
    list.appendChild(item);
  });

  list.querySelectorAll('.reservation-item__delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const id      = Number(btn.dataset.id);
      const updated = getReservations().filter(r => r.id !== id);
      localStorage.setItem('fi_reservations', JSON.stringify(updated));
      loadMyReservations();
    });
  });
}


/* ──────────────────────────────────────────
   TESTIMONIOS SLIDER
   ────────────────────────────────────────── */
let currentSlide     = 0;
let testimonialTimer = null;

function initTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dots  = document.getElementById('testimonials-dots');
  if (!track) return;

  TESTIMONIALS.forEach((t, i) => {
    const stars      = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
    const avatarHtml = t.avatar
      ? `<img class="testimonial-card__avatar" src="${t.avatar}" alt="${t.name}" />`
      : `<div class="testimonial-card__avatar-placeholder">${t.name.charAt(0)}</div>`;
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `<div class="testimonial-card__stars">${stars}</div><p class="testimonial-card__text">${t.text}</p><div class="testimonial-card__author">${avatarHtml}<div><div class="testimonial-card__name">${t.name}</div><div class="testimonial-card__role">${t.role}</div></div></div>`;
    track.appendChild(card);
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dots.appendChild(dot);
  });

  document.getElementById('prev-testimonial').addEventListener('click', () => goToSlide(currentSlide - 1));
  document.getElementById('next-testimonial').addEventListener('click', () => goToSlide(currentSlide + 1));
  testimonialTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function goToSlide(n) {
  currentSlide = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
  document.getElementById('testimonials-track').style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}


/* ──────────────────────────────────────────
   NEWSLETTER
   ────────────────────────────────────────── */
function initNewsletter() {
  const form   = document.getElementById('newsletter-form');
  const status = document.getElementById('newsletter-status');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const emailInput = form.querySelector('#newsletter-email');
    const email      = emailInput.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus(status, 'error', 'Por favor escribe un correo válido.');
      return;
    }

    // Guarda en localStorage (simulado — conecta a tu servicio real aquí)
    const subscribers = JSON.parse(localStorage.getItem('fi_subscribers') || '[]');
    if (subscribers.includes(email)) {
      showStatus(status, 'error', 'Este correo ya está suscrito.');
      return;
    }
    subscribers.push(email);
    localStorage.setItem('fi_subscribers', JSON.stringify(subscribers));

    showStatus(status, 'success', '¡Suscrito! Gracias por unirte. Pronto recibirás nuestro contenido.');
    emailInput.value = '';
  });
}


/* ──────────────────────────────────────────
   FORMULARIO CONTACTO
   ────────────────────────────────────────── */
function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateContactForm(form)) return;
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Enviando…';
    try {
      await submitForm(form);
      showStatus(status, 'success', '¡Mensaje enviado! Te contactaremos pronto.');
      form.reset();
    } catch {
      showStatus(status, 'error', 'Hubo un error. Escríbenos por WhatsApp.');
    } finally {
      btn.disabled = false; btn.textContent = 'Enviar mensaje';
    }
  });
  form.querySelectorAll('input, textarea').forEach(f => f.addEventListener('input', () => clearError(f)));
}

function validateContactForm(form) {
  let valid = true;
  const name    = form.querySelector('#name');
  const email   = form.querySelector('#email');
  const message = form.querySelector('#message');
  if (!name.value.trim())                                       { showError(name,    'error-name',    'Por favor escribe tu nombre.'); valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))         { showError(email,   'error-email',   'Escribe un correo válido.'); valid = false; }
  if (!message.value.trim() || message.value.trim().length < 10){ showError(message, 'error-message', 'El mensaje debe tener al menos 10 caracteres.'); valid = false; }
  return valid;
}

function showError(field, id, msg) { field.classList.add('error'); const s = document.getElementById(id); if (s) s.textContent = msg; }
function clearError(field)         { field.classList.remove('error'); const s = document.getElementById('error-' + field.id); if (s) s.textContent = ''; }

function showStatus(el, type, msg) {
  el.textContent = msg;
  el.className   = 'form-status ' + type;
  setTimeout(() => { el.className = 'form-status'; el.textContent = ''; }, 6000);
}

async function submitForm(form) {
  const FORMSPREE_ENDPOINT = ''; // Pega tu endpoint de Formspree aquí
  if (FORMSPREE_ENDPOINT) {
    const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('Error');
    return;
  }
  await new Promise(r => setTimeout(r, 800));
}


/* ──────────────────────────────────────────
   NAVEGACIÓN
   ────────────────────────────────────────── */
function initNav() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  const links  = menu.querySelectorAll('.nav__link');

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  links.forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    document.body.style.overflow = '';
  }));

  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}


/* ──────────────────────────────────────────
   FADE-IN
   ────────────────────────────────────────── */
function observeFadeIn() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => io.observe(el));
}

function initFadeIn() {
  document.querySelectorAll('.section-header, .about__grid, .service-card, .location__grid, .contact__grid').forEach(el => {
    el.classList.add('fade-in');
  });
  observeFadeIn();
}


/* ──────────────────────────────────────────
   REDES SOCIALES
   ────────────────────────────────────────── */
function initSocialLinks() {
  const map = {
    'social-instagram': CONFIG.socialLinks?.instagram,
    'social-tiktok':    CONFIG.socialLinks?.tiktok,
    'social-facebook':  CONFIG.socialLinks?.facebook,
  };
  Object.entries(map).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el && url && url !== '#') el.href = url;
  });
}


/* ──────────────────────────────────────────
   CHATBOT FAQ
   ────────────────────────────────────────── */
let chatbotInitialized = false;

function initChatbot() {
  const toggle = document.getElementById('chatbot-toggle');
  const panel  = document.getElementById('chatbot-panel');
  const close  = document.getElementById('chatbot-close');
  const badge  = document.getElementById('chatbot-badge');
  const input  = document.getElementById('chatbot-input');
  const send   = document.getElementById('chatbot-send');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    if (badge) badge.style.display = 'none';
    if (isOpen && !chatbotInitialized) {
      chatbotInitialized = true;
      setTimeout(() => addChatBotMsg('¡Hola! Soy el asistente Lumé 🌿 ¿En qué puedo ayudarte hoy?'), 300);
      setTimeout(() => {
        addChatBotMsg('Elige una pregunta frecuente o escribe la tuya:');
        renderChatFAQs();
      }, 900);
    }
  });

  close.addEventListener('click', () => {
    panel.classList.remove('open');
    toggle.classList.remove('active');
  });

  send.addEventListener('click', handleChatInput);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') handleChatInput(); });
}

function addChatMsg(text, sender) {
  const msgs = document.getElementById('chatbot-messages');
  const div  = document.createElement('div');
  div.className = `chatbot__msg chatbot__msg--${sender}`;
  div.innerHTML = `<div class="chatbot__bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function addChatBotMsg(text)  { addChatMsg(text, 'bot'); }
function addChatUserMsg(text) { addChatMsg(text, 'user'); }

function renderChatFAQs(subset) {
  const el = document.getElementById('chatbot-faqs');
  if (!el) return;
  el.innerHTML = '';
  (subset || FAQS).forEach(faq => {
    const btn = document.createElement('button');
    btn.className    = 'chatbot__chip';
    btn.textContent  = faq.q;
    btn.addEventListener('click', () => answerChatFAQ(faq));
    el.appendChild(btn);
  });
}

function answerChatFAQ(faq) {
  addChatUserMsg(faq.q);
  document.getElementById('chatbot-faqs').innerHTML = '';
  setTimeout(() => {
    addChatBotMsg(faq.a);
    setTimeout(() => {
      addChatBotMsg('¿Puedo ayudarte con algo más?');
      renderChatFAQs();
    }, 700);
  }, 400);
}

function handleChatInput() {
  const input = document.getElementById('chatbot-input');
  const text  = input.value.trim();
  if (!text) return;
  input.value = '';
  addChatUserMsg(text);
  document.getElementById('chatbot-faqs').innerHTML = '';

  const normalize = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const norm = normalize(text);
  const match = FAQS.find(f => f.kw.some(k => norm.includes(normalize(k))));

  setTimeout(() => {
    if (match) {
      addChatBotMsg(match.a);
      setTimeout(() => {
        addChatBotMsg('¿Puedo ayudarte con algo más?');
        renderChatFAQs();
      }, 700);
    } else {
      addChatBotMsg('No encuentro una respuesta exacta para eso 🤔 Pero nuestro equipo puede ayudarte al instante:');
      setTimeout(() => {
        const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
        addChatBotMsg(`<a href="${url}" target="_blank" rel="noopener" class="chatbot__wa-link">💬 Continuar en WhatsApp</a>`);
        renderChatFAQs();
      }, 400);
    }
  }, 500);
}


/* ──────────────────────────────────────────
   UTILIDADES
   ────────────────────────────────────────── */
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });
}


/* ──────────────────────────────────────────
   INIT
   ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initWhatsApp();
  initMaps();
  initNav();
  initCatalog();
  initBlog();
  initArticleModal();
  initCalendar();
  initReservationForm();
  initTestimonials();
  initNewsletter();
  initContactForm();
  initSocialLinks();
  initChatbot();
  initFadeIn();
  initYear();
  initSmoothScroll();
});
