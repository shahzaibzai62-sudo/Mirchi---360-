/* =============================================
   MIRCHI 360° — app.js
   All functionality: Menu, Booking, Cart, Admin, AI Assistant
============================================= */

'use strict';

// ===== STATE =====
let menuItems = JSON.parse(localStorage.getItem('mirchi_menu')) || getDefaultMenu();
let bookings = JSON.parse(localStorage.getItem('mirchi_bookings')) || [];
let cart = [];
let currentMenuFilter = 'all';
let currentOrderFilter = 'all';
let adminLoggedIn = false;
let settings = JSON.parse(localStorage.getItem('mirchi_settings')) || { waNumber: '923324187360', deliveryCharge: 50 };
let adminCreds = JSON.parse(localStorage.getItem('mirchi_creds')) || { user: 'admin', pass: 'mirchi360' };
let selectedTableType = '';
let conversationHistory = [];

// ===== DEFAULT MENU =====
function getDefaultMenu() {
  return [
    { name: 'Chicken Karahi', category: 'Karahi', price: 650, emoji: '🌶️', desc: 'Spicy and aromatic chicken karahi cooked in traditional style', image: '' },
    { name: 'Mutton Karahi', category: 'Karahi', price: 950, emoji: '🍖', desc: 'Rich mutton karahi with handpicked spices', image: '' },
    { name: 'Chicken BBQ Platter', category: 'BBQ', price: 750, emoji: '🔥', desc: 'Grilled chicken with charcoal smoke flavor', image: '' },
    { name: 'Seekh Kabab', category: 'BBQ', price: 350, emoji: '🍢', desc: 'Juicy minced meat skewers with green chutney', image: '' },
    { name: 'Chicken Tikka', category: 'BBQ', price: 550, emoji: '🔴', desc: 'Marinated chicken tikka cooked in tandoor', image: '' },
    { name: 'Desi Biryani', category: 'Desi Items', price: 350, emoji: '🍗', desc: 'Authentic dum biryani with aromatic basmati rice', image: '' },
    { name: 'Mutton Handi', category: 'Desi Items', price: 900, emoji: '🫕', desc: 'Slow-cooked mutton in a traditional handi', image: '' },
    { name: 'Chicken Handi', category: 'Desi Items', price: 600, emoji: '🫕', desc: 'Creamy chicken handi with desi spices', image: '' },
    { name: 'Gourmet Pizza', category: 'Pizza', price: 700, emoji: '🍕', desc: 'Loaded with premium toppings and mozzarella', image: '' },
    { name: 'Chicken Burger', category: 'Fast Food', price: 280, emoji: '🍔', desc: 'Crispy chicken patty with fresh vegetables', image: '' },
    { name: 'Zinger Burger', category: 'Fast Food', price: 320, emoji: '🍔', desc: 'Spicy zinger with signature sauce', image: '' },
    { name: 'Chicken Roll', category: 'Rolls', price: 180, emoji: '🌯', desc: 'Grilled chicken wrapped in fresh paratha', image: '' },
    { name: 'Chinese Noodles', category: 'Chinese', price: 300, emoji: '🍜', desc: 'Wok-tossed noodles with vegetables and chicken', image: '' },
    { name: 'Fried Rice', category: 'Chinese', price: 280, emoji: '🍚', desc: 'Egg fried rice with Chinese vegetables', image: '' },
    { name: 'Lemon Mint', category: 'Juices', price: 120, emoji: '🥤', desc: 'Refreshing lemon mint with chaat masala', image: '' },
    { name: 'Mango Shake', category: 'Juices', price: 150, emoji: '🥭', desc: 'Fresh mango blended with milk', image: '' },
    { name: 'Gulab Jamun', category: 'Desserts', price: 100, emoji: '🍡', desc: 'Soft gulab jamun soaked in rose syrup', image: '' },
    { name: 'Ice Cream', category: 'Desserts', price: 80, emoji: '🍦', desc: 'Premium creamy ice cream scoops', image: '' },
    { name: 'Rohu Fish Fry', category: 'Fish', price: 700, emoji: '🐟', desc: 'Crispy spiced rohu fish fry', image: '' },
    { name: 'Vegetable Curry', category: 'Vegetable', price: 250, emoji: '🥘', desc: 'Mixed vegetable curry in desi style', image: '' },
    { name: 'Naan', category: 'Paratha & Naan', price: 25, emoji: '🫓', desc: 'Freshly baked naan from the tandoor', image: '' },
    { name: 'Aloo Paratha', category: 'Paratha & Naan', price: 80, emoji: '🫓', desc: 'Stuffed potato paratha with butter', image: '' },
    { name: 'Garden Salad', category: 'Salads', price: 150, emoji: '🥗', desc: 'Fresh garden salad with lemon dressing', image: '' },
    { name: 'Pepsi', category: 'Beverages', price: 60, emoji: '🥤', desc: 'Chilled soft drink', image: '' },
  ];
}

// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initAll();
  }, 2200);
});

function initAll() {
  initParticles();
  initCursor();
  initNavbar();
  initCounters();
  initMenu();
  initOrderSection();
  initBookingTableTypes();
  initReveal();
  initBookingDateMin();
  renderAdminMenuTable();
  renderAdminBookingsTable();
  updateAdminStats();
}

// ===== PARTICLE CANVAS =====
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = Math.random() > 0.5 ? '#C9A84C' : '#E85D04';
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 120; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.save();
          ctx.globalAlpha = (1 - dist/100) * 0.08;
          ctx.strokeStyle = '#C9A84C';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ===== CURSOR =====
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ringX += (e.clientX - ringX) * 0.12;
    ringY += (e.clientY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
  });

  setInterval(() => {
    const e = { clientX: parseFloat(ring.style.left||0), clientY: parseFloat(ring.style.top||0) };
    // smooth follow
  }, 16);

  document.addEventListener('mousedown', () => { dot.classList.add('clicked'); ring.classList.add('clicked'); });
  document.addEventListener('mouseup', () => { dot.classList.remove('clicked'); ring.classList.remove('clicked'); });

  // Hide on mobile
  if ('ontouchstart' in window) {
    dot.style.display = 'none'; ring.style.display = 'none';
  }
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Active link
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const bot = top + sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bot) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===== COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll('.hero-stat-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { el.textContent = target; clearInterval(timer); }
          else el.textContent = Math.floor(current);
        }, 25);
        observer.unobserve(el);
      }
    });
  });
  counters.forEach(c => observer.observe(c));
}

// ===== MENU =====
function initMenu() {
  renderMenuGrid();
  document.querySelectorAll('#menuCategories .cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#menuCategories .cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMenuFilter = btn.dataset.cat;
      renderMenuGrid();
    });
  });
}

function renderMenuGrid() {
  const grid = document.getElementById('menuGrid');
  const filtered = currentMenuFilter === 'all' ? menuItems : menuItems.filter(i => i.category === currentMenuFilter);
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-muted)">No items in this category yet.</div>';
    return;
  }
  grid.innerHTML = filtered.map((item, idx) => {
    const realIdx = menuItems.indexOf(item);
    return `
      <div class="menu-card reveal" onclick="addToCartFromMenu(${realIdx})">
        <div class="menu-card-img">
          ${item.image ? `<img src="${item.image}" alt="${item.name}"/>` : `<div class="menu-card-emoji">${item.emoji || '🍽️'}</div>`}
          <div class="menu-card-badge">${item.category}</div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-desc">${item.desc || 'Freshly prepared with finest ingredients'}</div>
          <div class="menu-card-footer">
            <div class="menu-card-price">Rs. ${item.price}</div>
            <button class="menu-card-add" onclick="event.stopPropagation();addToCartFromMenu(${realIdx})">+</button>
          </div>
        </div>
      </div>`;
  }).join('');
  initRevealElements();
}

// ===== ORDER SECTION =====
function initOrderSection() {
  renderOrderCategories();
  renderOrderItems();
  document.getElementById('orderSearch').addEventListener('input', e => {
    renderOrderItems(e.target.value.toLowerCase());
  });
}

function renderOrderCategories() {
  const cats = ['all', ...new Set(menuItems.map(i => i.category))];
  const container = document.getElementById('orderCats');
  container.innerHTML = cats.map(cat => `
    <button class="cat-btn ${cat === currentOrderFilter ? 'active' : ''}" onclick="filterOrderItems('${cat}')">${cat === 'all' ? 'All' : cat}</button>
  `).join('');
}

function filterOrderItems(cat) {
  currentOrderFilter = cat;
  document.querySelectorAll('#orderCats .cat-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderOrderItems();
}

function renderOrderItems(search = '') {
  const grid = document.getElementById('orderItemsGrid');
  let filtered = currentOrderFilter === 'all' ? menuItems : menuItems.filter(i => i.category === currentOrderFilter);
  if (search) filtered = filtered.filter(i => i.name.toLowerCase().includes(search));
  grid.innerHTML = filtered.map((item, _) => {
    const realIdx = menuItems.indexOf(item);
    return `
      <div class="order-item-card">
        ${item.image ? `<img class="order-item-img" src="${item.image}" alt="${item.name}"/>` : `<div class="order-item-emoji">${item.emoji || '🍽️'}</div>`}
        <div class="order-item-info">
          <div class="order-item-name" title="${item.name}">${item.name}</div>
          <div class="order-item-price">Rs. ${item.price}</div>
        </div>
        <button class="order-item-add" onclick="addToCartFromMenu(${realIdx})">+</button>
      </div>`;
  }).join('');
}

// ===== CART =====
function addToCartFromMenu(idx) {
  const item = menuItems[idx];
  const existing = cart.find(c => c.name === item.name);
  if (existing) existing.qty++;
  else cart.push({ name: item.name, price: item.price, qty: 1 });
  renderCart();
  showToast(`${item.emoji || '🍽️'} ${item.name} added to order`);
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotals = document.getElementById('cartTotals');
  const cartCount = document.getElementById('cartCount');
  const placeBtn = document.getElementById('placeOrderBtn');

  cartCount.textContent = cart.reduce((a, c) => a + c.qty, 0);

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div>Add items from the menu</div></div>';
    cartTotals.style.display = 'none';
    if (placeBtn) placeBtn.disabled = true;
    return;
  }

  cartItems.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-qty">
        <button onclick="changeCartQty(${idx}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeCartQty(${idx}, 1)">+</button>
      </div>
      <div class="cart-item-price">Rs. ${item.price * item.qty}</div>
    </div>
  `).join('');

  const subtotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const delivery = +settings.deliveryCharge || 50;
  const total = subtotal + delivery;

  document.getElementById('cartSubtotal').textContent = `Rs. ${subtotal}`;
  document.getElementById('cartTotal').textContent = `Rs. ${total}`;
  cartTotals.style.display = 'block';
  if (placeBtn) placeBtn.disabled = false;
}

function changeCartQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  renderCart();
}

function placeOrder() {
  const name = document.getElementById('delName').value.trim();
  const phone = document.getElementById('delPhone').value.trim();
  const address = document.getElementById('delAddress').value.trim();
  const notes = document.getElementById('delNotes').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked')?.value || 'Cash on Delivery';

  if (!name || !phone || !address) { showToast('⚠️ Please fill in all required fields'); return; }
  if (cart.length === 0) { showToast('⚠️ Your cart is empty'); return; }

  const subtotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const delivery = +settings.deliveryCharge || 50;
  const total = subtotal + delivery;

  let orderText = `🌶️ *MIRCHI 360° - NEW ORDER*\n\n`;
  orderText += `*Customer:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n`;
  orderText += `*Order Details:*\n`;
  cart.forEach(item => { orderText += `• ${item.name} x${item.qty} = Rs. ${item.price * item.qty}\n`; });
  orderText += `\n*Subtotal:* Rs. ${subtotal}\n*Delivery:* Rs. ${delivery}\n*Total: Rs. ${total}*\n`;
  orderText += `*Payment:* ${payment}\n`;
  if (notes) orderText += `*Notes:* ${notes}`;

  const wa = settings.waNumber || '923324187360';
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(orderText)}`, '_blank');
}

// ===== BOOKING =====
function initBookingTableTypes() {
  document.querySelectorAll('.table-type-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.table-type-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedTableType = card.dataset.type;
      document.getElementById('bookTableType').value = selectedTableType;
    });
  });
}

function initBookingDateMin() {
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('bookDate');
  if (dateInput) dateInput.min = today;
}

function submitBooking() {
  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const date = document.getElementById('bookDate').value;
  const time = document.getElementById('bookTime').value;
  const guests = document.getElementById('bookGuests').value;
  const tableType = document.getElementById('bookTableType').value || 'Standard';
  const notes = document.getElementById('bookNotes').value.trim();

  if (!name || !phone || !date || !time || !guests) { showToast('⚠️ Please fill all required fields'); return; }

  // Save to local storage
  const booking = { id: Date.now(), name, phone, date, time, guests, tableType, notes };
  bookings.push(booking);
  localStorage.setItem('mirchi_bookings', JSON.stringify(bookings));

  // WhatsApp message
  let msg = `🌶️ *MIRCHI 360° - TABLE RESERVATION*\n\n`;
  msg += `*Name:* ${name}\n*Phone:* ${phone}\n`;
  msg += `*Date:* ${date}\n*Time:* ${time}\n`;
  msg += `*Guests:* ${guests}\n*Table Type:* ${tableType}\n`;
  if (notes) msg += `*Requests:* ${notes}`;

  const wa = settings.waNumber || '923324187360';
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, '_blank');

  // Reset form
  document.getElementById('bookName').value = '';
  document.getElementById('bookPhone').value = '';
  document.getElementById('bookDate').value = '';
  document.getElementById('bookTime').value = '';
  document.getElementById('bookGuests').value = '';
  document.getElementById('bookTableType').value = '';
  document.getElementById('bookNotes').value = '';
  document.querySelectorAll('.table-type-card').forEach(c => c.classList.remove('selected'));
  selectedTableType = '';

  updateAdminStats();
  showToast('✅ Reservation sent! We\'ll confirm soon.');
}

// ===== ADMIN =====
function adminLogin() {
  const user = document.getElementById('adminUser').value.trim();
  const pass = document.getElementById('adminPass').value.trim();
  const err = document.getElementById('loginError');

  if (user === adminCreds.user && pass === adminCreds.pass) {
    adminLoggedIn = true;
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    renderAdminMenuTable();
    renderAdminBookingsTable();
    updateAdminStats();
    err.style.display = 'none';
  } else {
    err.style.display = 'block';
    document.getElementById('adminUser').value = '';
    document.getElementById('adminPass').value = '';
  }
}

function adminLogout() {
  adminLoggedIn = false;
  document.getElementById('adminLogin').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';
  document.getElementById('adminUser').value = '';
  document.getElementById('adminPass').value = '';
}

// Admin tabs
document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.admin-tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(tab.dataset.tab).style.display = 'block';
  });
});

function renderAdminMenuTable() {
  const tbody = document.getElementById('adminMenuBody');
  if (!tbody) return;
  if (menuItems.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--text-muted)">No menu items yet. Add your first item!</td></tr>';
    return;
  }
  tbody.innerHTML = menuItems.map((item, idx) => `
    <tr>
      <td>${item.image ? `<img class="admin-table-img" src="${item.image}" alt="${item.name}"/>` : `<span class="admin-table-emoji">${item.emoji || '🍽️'}</span>`}</td>
      <td><strong>${item.name}</strong><br><small style="color:var(--text-muted)">${item.desc || ''}</small></td>
      <td>${item.category}</td>
      <td style="color:var(--gold);font-weight:700">Rs. ${item.price}</td>
      <td>
        <div class="admin-action-btns">
          <button class="admin-edit-btn" onclick="editItem(${idx})">✏️ Edit</button>
          <button class="admin-del-btn" onclick="deleteItem(${idx})">🗑️ Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderAdminBookingsTable() {
  const tbody = document.getElementById('adminBookingsBody');
  if (!tbody) return;
  if (bookings.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--text-muted)">No reservations yet.</td></tr>';
    return;
  }
  tbody.innerHTML = bookings.map((b, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${b.name}</strong></td>
      <td>${b.phone}</td>
      <td>${b.date}</td>
      <td>${b.time}</td>
      <td>${b.guests}</td>
      <td><span style="color:var(--gold)">${b.tableType || 'Standard'}</span></td>
      <td style="max-width:150px;overflow:hidden;text-overflow:ellipsis">${b.notes || '—'}</td>
    </tr>
  `).join('');
}

function updateAdminStats() {
  const statItems = document.getElementById('statItems');
  const statCats = document.getElementById('statCats');
  const statBookings = document.getElementById('statBookings');
  if (statItems) statItems.textContent = menuItems.length;
  if (statCats) statCats.textContent = new Set(menuItems.map(i => i.category)).size;
  if (statBookings) statBookings.textContent = bookings.length;
}

function clearBookings() {
  if (confirm('Clear all reservations? This cannot be undone.')) {
    bookings = [];
    localStorage.setItem('mirchi_bookings', JSON.stringify(bookings));
    renderAdminBookingsTable();
    updateAdminStats();
    showToast('🗑️ All reservations cleared');
  }
}

// ===== ITEM MODAL =====
function showAddItemModal() {
  document.getElementById('modalTitle').textContent = 'Add Menu Item';
  document.getElementById('itemName').value = '';
  document.getElementById('itemCategory').value = '';
  document.getElementById('itemPrice').value = '';
  document.getElementById('itemEmoji').value = '';
  document.getElementById('itemDesc').value = '';
  document.getElementById('editItemIndex').value = '-1';
  document.getElementById('itemImageData').value = '';
  resetImagePreview();
  document.getElementById('itemModal').style.display = 'flex';
}

function editItem(idx) {
  const item = menuItems[idx];
  document.getElementById('modalTitle').textContent = 'Edit Menu Item';
  document.getElementById('itemName').value = item.name;
  document.getElementById('itemCategory').value = item.category;
  document.getElementById('itemPrice').value = item.price;
  document.getElementById('itemEmoji').value = item.emoji || '';
  document.getElementById('itemDesc').value = item.desc || '';
  document.getElementById('editItemIndex').value = idx;
  document.getElementById('itemImageData').value = item.image || '';
  if (item.image) {
    document.getElementById('imagePreview').innerHTML = `
      <img src="${item.image}" alt="preview" style="width:100%;height:180px;object-fit:cover"/>
      <div class="preview-change" onclick="document.getElementById('itemImageFile').click()">Click to change</div>
    `;
  } else {
    resetImagePreview();
  }
  document.getElementById('itemModal').style.display = 'flex';
}

function closeItemModal() {
  document.getElementById('itemModal').style.display = 'none';
}

function saveItem() {
  const name = document.getElementById('itemName').value.trim();
  const category = document.getElementById('itemCategory').value;
  const price = parseFloat(document.getElementById('itemPrice').value);
  const emoji = document.getElementById('itemEmoji').value.trim() || '🍽️';
  const desc = document.getElementById('itemDesc').value.trim();
  const image = document.getElementById('itemImageData').value;
  const editIdx = parseInt(document.getElementById('editItemIndex').value);

  if (!name || !category || !price) { showToast('⚠️ Name, category and price are required'); return; }

  const item = { name, category, price, emoji, desc, image };

  if (editIdx === -1) menuItems.push(item);
  else menuItems[editIdx] = item;

  localStorage.setItem('mirchi_menu', JSON.stringify(menuItems));
  closeItemModal();
  renderAdminMenuTable();
  renderMenuGrid();
  renderOrderItems();
  renderOrderCategories();
  updateAdminStats();
  showToast(`✅ "${name}" ${editIdx === -1 ? 'added' : 'updated'} successfully`);
}

function deleteItem(idx) {
  const name = menuItems[idx].name;
  if (confirm(`Delete "${name}"?`)) {
    menuItems.splice(idx, 1);
    localStorage.setItem('mirchi_menu', JSON.stringify(menuItems));
    renderAdminMenuTable();
    renderMenuGrid();
    renderOrderItems();
    renderOrderCategories();
    updateAdminStats();
    showToast(`🗑️ "${name}" deleted`);
  }
}

function previewImage(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = e => {
    const data = e.target.result;
    document.getElementById('itemImageData').value = data;
    document.getElementById('imagePreview').innerHTML = `
      <img src="${data}" alt="preview" style="width:100%;height:180px;object-fit:cover"/>
      <div class="preview-change" onclick="document.getElementById('itemImageFile').click()">Click to change</div>
    `;
  };
  reader.readAsDataURL(file);
}

function resetImagePreview() {
  document.getElementById('imagePreview').innerHTML = `
    <div class="image-preview-placeholder" onclick="document.getElementById('itemImageFile').click()">
      <div style="font-size:2rem">📸</div>
      <div>Click to Upload Image</div>
      <div style="font-size:0.75rem;opacity:0.6">JPG, PNG, WebP supported</div>
    </div>
  `;
  document.getElementById('itemImageFile').value = '';
}

// ===== SETTINGS =====
function changePassword() {
  const oldP = document.getElementById('oldPass').value;
  const newP = document.getElementById('newPass').value;
  const confP = document.getElementById('confirmPass').value;
  const msg = document.getElementById('passMsg');

  if (oldP !== adminCreds.pass) { msg.style.color = '#ff6b6b'; msg.textContent = '❌ Current password incorrect'; return; }
  if (!newP) { msg.style.color = '#ff6b6b'; msg.textContent = '❌ New password cannot be empty'; return; }
  if (newP !== confP) { msg.style.color = '#ff6b6b'; msg.textContent = '❌ Passwords do not match'; return; }

  adminCreds.pass = newP;
  localStorage.setItem('mirchi_creds', JSON.stringify(adminCreds));
  msg.style.color = '#4CAF50';
  msg.textContent = '✅ Password updated successfully';
  document.getElementById('oldPass').value = '';
  document.getElementById('newPass').value = '';
  document.getElementById('confirmPass').value = '';
}

function saveSettings() {
  settings.waNumber = document.getElementById('settingWa').value.trim();
  settings.deliveryCharge = +document.getElementById('settingDelivery').value || 50;
  localStorage.setItem('mirchi_settings', JSON.stringify(settings));
  showToast('✅ Settings saved');
}

// ===== AI ASSISTANT =====
function toggleAssistant() {
  const panel = document.getElementById('assistantPanel');
  panel.classList.toggle('open');
}

function quickMsg(text) {
  document.getElementById('assistantInput').value = text;
  sendAssistantMsg();
}

async function sendAssistantMsg() {
  const input = document.getElementById('assistantInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';

  appendAssistantMsg(msg, 'user');
  conversationHistory.push({ role: 'user', content: msg });

  // Show typing
  const typingId = appendTyping();

  try {
    const systemPrompt = `You are the friendly AI assistant for MIRCHI 360°, a premium Pakistani restaurant in Tando Adam, Sanghar, Pakistan. 

Restaurant Info:
- Name: Mirchi 360°
- Tagline: Three Sixty Degrees of Flavour
- Location: Tando Adam-Sanghar Road, Tando Adam, Sindh, Pakistan
- Hours: Daily 12:00 PM – 1:00 AM
- Phone: 0332-4187360, 0319-7833360, 0305-8368360
- PTCL: 0235-541060, 0235-542361
- WhatsApp: 03324187360
- Delivery: Available across Tando Adam & Sanghar (Rs. 50 delivery charge)
- Payment: EasyPaisa, JazzCash, Cash on Delivery, Bank Transfer

Menu Categories: Karahi, BBQ, Desi Items, Fast Food, Chinese, Pizza, Vegetable, Rolls, Fish, Salads, Paratha & Naan, Juices, Desserts, Beverages

Popular Items:
- Chicken Karahi Rs. 650, Mutton Karahi Rs. 950
- Chicken BBQ Platter Rs. 750, Seekh Kabab Rs. 350
- Desi Biryani Rs. 350, Mutton Handi Rs. 900
- Gourmet Pizza Rs. 700, Chicken Burger Rs. 280

Table Types: Standard (2-4 guests), Family (4-8 guests), VIP Suite (private), Event Hall (20+ guests)

For table reservations, ask for: name, phone, date, time, number of guests, table type, and special requests. Then tell them to use the Reserve section on the website or call the phone numbers.

Respond in the same language the user uses (Urdu or English). Be warm, helpful and professional. Keep responses concise.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: conversationHistory
      })
    });

    removeTyping(typingId);

    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    const replyText = data.content?.[0]?.text || 'I apologize, I could not process your request. Please call us at 0332-4187360.';

    appendAssistantMsg(replyText, 'bot');
    conversationHistory.push({ role: 'assistant', content: replyText });

  } catch (err) {
    removeTyping(typingId);
    const fallback = getFallbackResponse(msg.toLowerCase());
    appendAssistantMsg(fallback, 'bot');
    conversationHistory.push({ role: 'assistant', content: fallback });
  }
}

function getFallbackResponse(msg) {
  if (msg.includes('book') || msg.includes('table') || msg.includes('reserve') || msg.includes('booking')) {
    return `🪑 <strong>Table Reservation</strong><br><br>For booking, please:<br>1. Use our <a href="#booking" style="color:var(--gold)">Reserve section</a> on this page<br>2. Or call us: <strong>0332-4187360</strong><br>3. Or WhatsApp: <a href="https://wa.me/923324187360" style="color:var(--gold)">03324187360</a><br><br>We have Standard, Family, VIP Suite & Event Hall options! 🎉`;
  }
  if (msg.includes('time') || msg.includes('hour') || msg.includes('open') || msg.includes('timing')) {
    return `🕐 <strong>Opening Hours</strong><br><br>We are open <strong>Daily: 12:00 PM – 1:00 AM</strong><br><br>Lunch: 12 PM – 4 PM<br>Dinner: 7 PM – 1 AM<br><br>Welcome anytime! 🌶️`;
  }
  if (msg.includes('menu') || msg.includes('food') || msg.includes('item')) {
    return `🍽️ <strong>Our Menu</strong><br><br>We offer: Karahi, BBQ, Biryani, Pizza, Chinese, Fast Food, Fish, Rolls, Desserts & more!<br><br><a href="#menu" style="color:var(--gold)">Browse our full menu</a> or call <strong>0332-4187360</strong> 🌶️`;
  }
  if (msg.includes('order') || msg.includes('deliver')) {
    return `📦 <strong>Online Ordering</strong><br><br>Use our <a href="#order" style="color:var(--gold)">Order section</a> to place your order!<br><br>Delivery charge: Rs. 50<br>Payment: EasyPaisa, JazzCash, COD, Bank Transfer<br><br>Or WhatsApp us: <a href="https://wa.me/923324187360" style="color:var(--gold)">03324187360</a> 🚴`;
  }
  if (msg.includes('location') || msg.includes('address') || msg.includes('where')) {
    return `📍 <strong>Our Location</strong><br><br>Tando Adam-Sanghar Road,<br>Tando Adam, Sindh, Pakistan<br><br><a href="https://maps.app.goo.gl/iECvdpyygA3gvBbB6" target="_blank" style="color:var(--gold)">Open in Google Maps</a> 🗺️`;
  }
  if (msg.includes('price') || msg.includes('cost') || msg.includes('rate')) {
    return `💰 <strong>Our Prices</strong><br><br>• Chicken Karahi: Rs. 650<br>• Mutton Karahi: Rs. 950<br>• BBQ Platter: Rs. 750<br>• Biryani: Rs. 350<br>• Pizza: Rs. 700<br>• Burger: Rs. 280<br><br><a href="#menu" style="color:var(--gold)">See full menu</a> 🌶️`;
  }
  return `👋 Assalamu Alaikum! I'm here to help with:<br><br>🪑 Table Reservations<br>🍽️ Menu Information<br>📦 Order Placement<br>📍 Location & Hours<br><br>Call us: <strong>0332-4187360</strong><br>WhatsApp: <a href="https://wa.me/923324187360" style="color:var(--gold)">03324187360</a>`;
}

function appendAssistantMsg(text, type) {
  const messages = document.getElementById('assistantMessages');
  const div = document.createElement('div');
  div.className = `assistant-msg assistant-msg-${type}`;
  div.innerHTML = `<div class="msg-bubble">${text}</div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function appendTyping() {
  const messages = document.getElementById('assistantMessages');
  const id = 'typing-' + Date.now();
  const div = document.createElement('div');
  div.className = 'assistant-msg assistant-msg-bot';
  div.id = id;
  div.innerHTML = `<div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// ===== SCROLL REVEAL =====
function initReveal() {
  initRevealElements();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initRevealElements() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = '';
  toast.innerHTML = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== CLOSE MODAL ON OUTSIDE CLICK =====
document.getElementById('itemModal').addEventListener('click', e => {
  if (e.target === document.getElementById('itemModal')) closeItemModal();
});

// ===== ENTER KEY for admin login =====
document.getElementById('adminPass').addEventListener('keydown', e => {
  if (e.key === 'Enter') adminLogin();
});
document.getElementById('adminUser').addEventListener('keydown', e => {
  if (e.key === 'Enter') adminLogin();
});

// ===== SMOOTH CURSOR RING UPDATE =====
(function cursorRingLoop() {
  const ring = document.getElementById('cursorRing');
  let tx = 0, ty = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
  function update() {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    ring.style.left = cx + 'px';
    ring.style.top = cy + 'px';
    requestAnimationFrame(update);
  }
  update();
})();

// ===== KEYBOARD SHORTCUT: ENTER for assistant =====
document.getElementById('assistantInput')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendAssistantMsg();
});
