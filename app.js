/* ============================================================
   MIRCHI 360 – app.js
   Full menu data, cart system, admin panel, animations
   ============================================================ */

// ===== MENU DATA =====
const defaultMenu = [
  // Desi Items
  { id: 1, name: "Royal Sindhi Chicken Biryani", cat: "desi", price: "1050-1800", emoji: "🍛", desc: "Authentic Sindhi style" },
  { id: 2, name: "Chicken Reshmi Paneer Handi", cat: "desi", price: "1300-2300", emoji: "🍲", desc: "" },
  { id: 3, name: "Mutton Biryani", cat: "desi", price: "1250-2300", emoji: "🍛", desc: "" },
  { id: 4, name: "Royal Chicken Handi", cat: "desi", price: "1250-2300", emoji: "🍲", desc: "" },
  { id: 5, name: "Mutton Handi", cat: "desi", price: "2100-3600", emoji: "🍲", desc: "" },
  { id: 6, name: "Chicken Makhni Handi", cat: "desi", price: "1300-2300", emoji: "🍲", desc: "Creamy & rich" },
  { id: 7, name: "Daal Makhni", cat: "desi", price: "800-1400", emoji: "🥣", desc: "" },
  { id: 8, name: "Chicken White Handi", cat: "desi", price: "1300-2200", emoji: "🍲", desc: "" },
  { id: 9, name: "Vegetable Biryani", cat: "desi", price: "800-1400", emoji: "🍛", desc: "" },
  { id: 10, name: "Vegetable Handi", cat: "desi", price: "800-1500", emoji: "🥘", desc: "" },
  { id: 11, name: "Tikka Biryani", cat: "desi", price: "1150-2000", emoji: "🍛", desc: "" },
  { id: 12, name: "Nawabi Biryani", cat: "desi", price: "1300-2300", emoji: "🍛", desc: "Royal recipe" },
  // Karahi
  { id: 13, name: "Chicken Karahi", cat: "karahi", price: "1200-2400", emoji: "🥘", desc: "" },
  { id: 14, name: "Chicken Peshawari Karahi", cat: "karahi", price: "1200-2400", emoji: "🥘", desc: "" },
  { id: 15, name: "Chicken White Karahi", cat: "karahi", price: "1250-2500", emoji: "🥘", desc: "" },
  { id: 16, name: "Chicken Lahori Karahi", cat: "karahi", price: "1250-2500", emoji: "🥘", desc: "" },
  { id: 17, name: "Chicken Brown Karahi", cat: "karahi", price: "1200-2300", emoji: "🥘", desc: "" },
  { id: 18, name: "Mutton Peshawari Karahi", cat: "karahi", price: "2050-3800", emoji: "🥘", desc: "" },
  { id: 19, name: "Mutton White Karahi", cat: "karahi", price: "2150-3900", emoji: "🥘", desc: "" },
  { id: 20, name: "Mutton Karahi", cat: "karahi", price: "2050-3800", emoji: "🥘", desc: "" },
  { id: 21, name: "Mutton Lahori Karahi", cat: "karahi", price: "2150-3900", emoji: "🥘", desc: "" },
  { id: 22, name: "Mutton Brown Karahi", cat: "karahi", price: "2050-3800", emoji: "🥘", desc: "" },
  // BBQ
  { id: 23, name: "Chicken Tikka", cat: "bbq", price: "450", emoji: "🍗", desc: "" },
  { id: 24, name: "Chicken Tikka Boti", cat: "bbq", price: "860", emoji: "🍗", desc: "" },
  { id: 25, name: "Chicken Reshmi Kabab", cat: "bbq", price: "860", emoji: "🍢", desc: "" },
  { id: 26, name: "Afghani Kabab", cat: "bbq", price: "860", emoji: "🍢", desc: "" },
  { id: 27, name: "Chicken Gola Kabab", cat: "bbq", price: "860", emoji: "🍢", desc: "" },
  { id: 28, name: "Chicken Behari Boti", cat: "bbq", price: "860", emoji: "🍗", desc: "" },
  { id: 29, name: "Chicken Green Boti", cat: "bbq", price: "860", emoji: "🍗", desc: "" },
  { id: 30, name: "Chicken Malai Boti", cat: "bbq", price: "860", emoji: "🍗", desc: "" },
  { id: 31, name: "Chicken Namkeen Boti", cat: "bbq", price: "860", emoji: "🍗", desc: "" },
  { id: 32, name: "BBQ Shaslik", cat: "bbq", price: "600", emoji: "🍢", desc: "" },
  { id: 33, name: "Chicken Wings", cat: "bbq", price: "600", emoji: "🍗", desc: "" },
  { id: 34, name: "Dhaka Chicken", cat: "bbq", price: "860", emoji: "🍗", desc: "" },
  { id: 35, name: "BBQ Platter (Half)", cat: "bbq", price: "2800", emoji: "🍽️", desc: "For sharing" },
  { id: 36, name: "BBQ Platter (Full)", cat: "bbq", price: "4300", emoji: "🍽️", desc: "Grand platter" },
  // Fast Food
  { id: 37, name: "Zinger Burger", cat: "fastfood", price: "530", emoji: "🍔", desc: "" },
  { id: 38, name: "Zinger Extreme Burger", cat: "fastfood", price: "700", emoji: "🍔", desc: "" },
  { id: 39, name: "Chicken Burger", cat: "fastfood", price: "430", emoji: "🍔", desc: "" },
  { id: 40, name: "Steak Burger", cat: "fastfood", price: "510", emoji: "🍔", desc: "" },
  { id: 41, name: "Supreme Burger", cat: "fastfood", price: "700", emoji: "🍔", desc: "" },
  { id: 42, name: "Chicken Broast", cat: "fastfood", price: "530", emoji: "🍗", desc: "" },
  { id: 43, name: "Chicken Club Sandwich", cat: "fastfood", price: "480", emoji: "🥪", desc: "" },
  { id: 44, name: "BBQ Club Sandwich", cat: "fastfood", price: "380", emoji: "🥪", desc: "" },
  { id: 45, name: "Vegetable Club Sandwich", cat: "fastfood", price: "380", emoji: "🥪", desc: "" },
  { id: 46, name: "Mexican Sandwich", cat: "fastfood", price: "380", emoji: "🥪", desc: "" },
  { id: 47, name: "Mexican Vegetable Sandwich", cat: "fastfood", price: "380", emoji: "🥪", desc: "" },
  // Chinese
  { id: 48, name: "Chicken Dry Chili with Rice", cat: "chinese", price: "1100", emoji: "🍜", desc: "" },
  { id: 49, name: "Chicken Mirchi 360 Special with Rice", cat: "chinese", price: "1100", emoji: "🍜", desc: "Our signature" },
  { id: 50, name: "Chicken Chili Onion with Rice", cat: "chinese", price: "1100", emoji: "🍜", desc: "" },
  { id: 51, name: "Singaporian Rice", cat: "chinese", price: "1100", emoji: "🍚", desc: "" },
  { id: 52, name: "Chicken Manchurian with Rice", cat: "chinese", price: "1100", emoji: "🍜", desc: "" },
  { id: 53, name: "Chicken Fried Rice", cat: "chinese", price: "500", emoji: "🍚", desc: "" },
  { id: 54, name: "Chicken Shashlik with Rice", cat: "chinese", price: "1100", emoji: "🍢", desc: "" },
  { id: 55, name: "Chicken Spagetti", cat: "chinese", price: "1100", emoji: "🍝", desc: "" },
  { id: 56, name: "Chicken Chowmein", cat: "chinese", price: "600", emoji: "🍜", desc: "" },
  { id: 57, name: "Vegetable Chowmein", cat: "chinese", price: "600", emoji: "🍜", desc: "" },
  { id: 58, name: "Vegetable Rice", cat: "chinese", price: "470", emoji: "🍚", desc: "" },
  { id: 59, name: "Plain Rice", cat: "chinese", price: "350", emoji: "🍚", desc: "" },
  { id: 60, name: "Mac and Cheese Pasta", cat: "chinese", price: "600", emoji: "🍝", desc: "" },
  { id: 61, name: "Alferado Pasta", cat: "chinese", price: "600", emoji: "🍝", desc: "" },
  { id: 62, name: "Chicken Lasagna", cat: "chinese", price: "1000", emoji: "🍝", desc: "" },
  { id: 63, name: "Penne Arabia", cat: "chinese", price: "1000", emoji: "🍝", desc: "" },
  { id: 64, name: "Chinese Thali", cat: "chinese", price: "1100", emoji: "🍽️", desc: "" },
  { id: 65, name: "Asian Thali", cat: "chinese", price: "1100", emoji: "🍽️", desc: "" },
  // Pizza
  { id: 66, name: "Chicken Fajita Pizza", cat: "pizza", price: "530-1500", emoji: "🍕", desc: "Small/Medium/Large" },
  { id: 67, name: "Bonfire Pizza", cat: "pizza", price: "530-1500", emoji: "🍕", desc: "" },
  { id: 68, name: "Afghani Pizza", cat: "pizza", price: "600-1450", emoji: "🍕", desc: "" },
  { id: 69, name: "Special Pizza", cat: "pizza", price: "530-1500", emoji: "🍕", desc: "" },
  { id: 70, name: "Stuffed Crust Pizza", cat: "pizza", price: "530-1600", emoji: "🍕", desc: "" },
  { id: 71, name: "Chicken Tikka Pizza", cat: "pizza", price: "530-1300", emoji: "🍕", desc: "" },
  { id: 72, name: "Chicken Super Supreme Pizza", cat: "pizza", price: "530-1300", emoji: "🍕", desc: "" },
  { id: 73, name: "Stuffed Kebab Pizza", cat: "pizza", price: "600-1500", emoji: "🍕", desc: "" },
  { id: 74, name: "Behari Spring Roll Pizza", cat: "pizza", price: "600", emoji: "🍕", desc: "" },
  { id: 75, name: "Vegetable Pizza", cat: "pizza", price: "530-1300", emoji: "🍕", desc: "" },
  { id: 76, name: "Malai Pizza", cat: "pizza", price: "600-1600", emoji: "🍕", desc: "" },
  { id: 77, name: "Pizza Fries", cat: "pizza", price: "600", emoji: "🍟", desc: "" },
  // Vegetable
  { id: 78, name: "Paner Handi", cat: "vegetable", price: "1100", emoji: "🥘", desc: "" },
  { id: 79, name: "Paneer Palak", cat: "vegetable", price: "1050", emoji: "🥬", desc: "" },
  { id: 80, name: "Paneer Mughlai", cat: "vegetable", price: "1100", emoji: "🥘", desc: "" },
  { id: 81, name: "Paneer Achari", cat: "vegetable", price: "1100", emoji: "🥘", desc: "" },
  { id: 82, name: "Paneer Stuff", cat: "vegetable", price: "750", emoji: "🧀", desc: "" },
  { id: 83, name: "Paneer Nachos", cat: "vegetable", price: "550", emoji: "🌮", desc: "" },
  { id: 84, name: "Vegetable Cutlus", cat: "vegetable", price: "600", emoji: "🫕", desc: "" },
  { id: 85, name: "Malai Kofta", cat: "vegetable", price: "800", emoji: "🥘", desc: "" },
  { id: 86, name: "Vegetable Kofta Handi", cat: "vegetable", price: "1000", emoji: "🥘", desc: "" },
  { id: 87, name: "Vegetable Achari Handi", cat: "vegetable", price: "900", emoji: "🥘", desc: "" },
  { id: 88, name: "Vegetable White Handi", cat: "vegetable", price: "900", emoji: "🥘", desc: "" },
  { id: 89, name: "Vegetable Cheese Cutlus", cat: "vegetable", price: "750", emoji: "🧀", desc: "" },
  { id: 90, name: "Vegetable Peri Bites", cat: "vegetable", price: "750", emoji: "🌶️", desc: "" },
  { id: 91, name: "Mirchi 360 Yakhni Rice", cat: "vegetable", price: "600", emoji: "🍚", desc: "Signature dish" },
  { id: 92, name: "Vegetable Platter", cat: "vegetable", price: "800", emoji: "🍽️", desc: "" },
  { id: 93, name: "Dynamite Chicken", cat: "vegetable", price: "700", emoji: "💥", desc: "" },
  // Rolls
  { id: 94, name: "Chicken Roll", cat: "rolls", price: "280", emoji: "🌯", desc: "" },
  { id: 95, name: "Chicken Behari Boti Roll", cat: "rolls", price: "290", emoji: "🌯", desc: "" },
  { id: 96, name: "Chicken Broast Roll", cat: "rolls", price: "280", emoji: "🌯", desc: "" },
  { id: 97, name: "Chicken Malai Boti Roll", cat: "rolls", price: "290", emoji: "🌯", desc: "" },
  { id: 98, name: "Chicken Reshmi Kabab Roll", cat: "rolls", price: "280", emoji: "🌯", desc: "" },
  { id: 99, name: "Vegetable Roll", cat: "rolls", price: "210", emoji: "🌯", desc: "" },
  { id: 100, name: "Chicken Malai Roll", cat: "rolls", price: "290", emoji: "🌯", desc: "" },
  // Fish
  { id: 101, name: "BBQ Fish Sanghar", cat: "fish", price: "3000", emoji: "🐟", desc: "Whole BBQ fish" },
  // Appetizers
  { id: 102, name: "Spicy Wings", cat: "fastfood", price: "450", emoji: "🍗", desc: "" },
  { id: 103, name: "Honey Wings", cat: "fastfood", price: "480", emoji: "🍗", desc: "" },
  { id: 104, name: "Fish N Chips", cat: "fastfood", price: "1150", emoji: "🐟", desc: "" },
  { id: 105, name: "Finger Fish", cat: "fastfood", price: "1150", emoji: "🐟", desc: "" },
  { id: 106, name: "French Fries", cat: "fastfood", price: "300", emoji: "🍟", desc: "" },
  { id: 107, name: "Chicken Cheese Balls", cat: "fastfood", price: "800", emoji: "🧀", desc: "" },
  { id: 108, name: "Hot N Sour Soup", cat: "fastfood", price: "280", emoji: "🍜", desc: "" },
  { id: 109, name: "Chicken Corn Soup", cat: "fastfood", price: "280", emoji: "🍜", desc: "" },
  { id: 110, name: "Mirchi 360 Special Soup", cat: "fastfood", price: "350", emoji: "🍲", desc: "Signature soup" },
  { id: 111, name: "Family Bowl (Soup)", cat: "fastfood", price: "1200", emoji: "🥣", desc: "" },
  // Salads
  { id: 112, name: "Russian Salad", cat: "salads", price: "599", emoji: "🥗", desc: "" },
  { id: 113, name: "Chicken Pineapple Salad", cat: "salads", price: "599", emoji: "🥗", desc: "" },
  { id: 114, name: "Green Salad", cat: "salads", price: "150", emoji: "🥬", desc: "" },
  { id: 115, name: "Raita", cat: "salads", price: "150", emoji: "🥛", desc: "" },
  { id: 116, name: "Fruit Chaat", cat: "salads", price: "399", emoji: "🍓", desc: "" },
  // Paratha & Naan
  { id: 117, name: "Chicken Paratha", cat: "paratha", price: "410", emoji: "🫓", desc: "" },
  { id: 118, name: "Chicken Cheese Paratha", cat: "paratha", price: "450", emoji: "🫓", desc: "" },
  { id: 119, name: "Aalu Paratha", cat: "paratha", price: "270", emoji: "🫓", desc: "" },
  { id: 120, name: "Plain Paratha", cat: "paratha", price: "70", emoji: "🫓", desc: "" },
  { id: 121, name: "Boghni Naan", cat: "paratha", price: "65", emoji: "🫓", desc: "" },
  { id: 122, name: "Garlic Naan", cat: "paratha", price: "65", emoji: "🫓", desc: "" },
  { id: 123, name: "Kandhari Naan", cat: "paratha", price: "65", emoji: "🫓", desc: "" },
  { id: 124, name: "Chapati", cat: "paratha", price: "30", emoji: "🫓", desc: "" },
  { id: 125, name: "Naan", cat: "paratha", price: "40", emoji: "🫓", desc: "" },
  // Fresh Juices
  { id: 126, name: "Kit Kat Shake", cat: "juices", price: "480", emoji: "🍫", desc: "" },
  { id: 127, name: "Strawberry Shake", cat: "juices", price: "420", emoji: "🍓", desc: "" },
  { id: 128, name: "Mango Juice", cat: "juices", price: "380", emoji: "🥭", desc: "" },
  { id: 129, name: "Faluda", cat: "juices", price: "520", emoji: "🧋", desc: "" },
  { id: 130, name: "Lab E Shireen", cat: "juices", price: "800", emoji: "🧃", desc: "" },
  { id: 131, name: "Fruit Trifle", cat: "juices", price: "800", emoji: "🍮", desc: "" },
  { id: 132, name: "Cadbury Shake", cat: "juices", price: "450", emoji: "🍫", desc: "" },
  { id: 133, name: "Orange Juice", cat: "juices", price: "320", emoji: "🍊", desc: "" },
  { id: 134, name: "Annar Juice", cat: "juices", price: "410", emoji: "🍎", desc: "" },
  { id: 135, name: "Oreo Shake", cat: "juices", price: "450", emoji: "🍪", desc: "" },
  { id: 136, name: "Apple Juice", cat: "juices", price: "380", emoji: "🍎", desc: "" },
  { id: 137, name: "Falsa Juice", cat: "juices", price: "350", emoji: "🫐", desc: "" },
  { id: 138, name: "Pineapple Shake", cat: "juices", price: "340", emoji: "🍍", desc: "" },
  { id: 139, name: "Grape Fruit", cat: "juices", price: "350", emoji: "🍇", desc: "" },
  { id: 140, name: "Pinna Colada", cat: "juices", price: "370", emoji: "🥥", desc: "" },
  { id: 141, name: "Cheeko Shake", cat: "juices", price: "320", emoji: "🥤", desc: "" },
  { id: 142, name: "Banana Shake", cat: "juices", price: "380", emoji: "🍌", desc: "" },
  { id: 143, name: "Mint Lemon", cat: "juices", price: "290", emoji: "🍋", desc: "" },
  { id: 144, name: "Blueberry Shake", cat: "juices", price: "480", emoji: "🫐", desc: "" },
  { id: 145, name: "Fruit Refal", cat: "juices", price: "480", emoji: "🍹", desc: "" },
  { id: 146, name: "Mirchi 360 Special Shake", cat: "juices", price: "420", emoji: "🌶️", desc: "Our signature shake" },
  { id: 147, name: "Lovestory Shake", cat: "juices", price: "450", emoji: "💕", desc: "" },
  { id: 148, name: "Cake Alaska Shake", cat: "juices", price: "500", emoji: "🎂", desc: "" },
  { id: 149, name: "Brownie Shake", cat: "juices", price: "400", emoji: "🍫", desc: "" },
  { id: 150, name: "Fresh Cocktail", cat: "juices", price: "450", emoji: "🍹", desc: "" },
  // Desserts
  { id: 151, name: "Ice Cream", cat: "desserts", price: "300", emoji: "🍦", desc: "" },
  { id: 152, name: "Kheen Mix", cat: "desserts", price: "800", emoji: "🍮", desc: "" },
  { id: 153, name: "Kunapa", cat: "desserts", price: "800", emoji: "🍯", desc: "" },
  // Beverages
  { id: 154, name: "Coffee", cat: "beverages", price: "299", emoji: "☕", desc: "" },
  { id: 155, name: "Tea", cat: "beverages", price: "120", emoji: "🍵", desc: "" },
  { id: 156, name: "Large Water", cat: "beverages", price: "120", emoji: "💧", desc: "" },
  { id: 157, name: "Cold Coffee", cat: "beverages", price: "399", emoji: "🧊", desc: "" },
  { id: 158, name: "Fresh Lime", cat: "beverages", price: "199", emoji: "🍋", desc: "" },
  { id: 159, name: "Small Water", cat: "beverages", price: "60", emoji: "💧", desc: "" },
  { id: 160, name: "Disposable Can", cat: "beverages", price: "120", emoji: "🥤", desc: "" },
  { id: 161, name: "Green Tea", cat: "beverages", price: "80", emoji: "🍵", desc: "" },
  { id: 162, name: "Lemon Kehwa", cat: "beverages", price: "80", emoji: "🍋", desc: "" },
];

// ===== STATE =====
let menuData = JSON.parse(localStorage.getItem('mirchi360_menu') || 'null') || defaultMenu;
let cart = [];
let activeCategory = 'all';
let editingId = null;
let nextId = menuData.length ? Math.max(...menuData.map(i => i.id)) + 1 : 200;

// ===== SAVE MENU =====
function saveMenu() { localStorage.setItem('mirchi360_menu', JSON.stringify(menuData)); }

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
    animateHero();
  }, 2400);
});

// ===== HERO ANIMATIONS =====
function animateHero() {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 150);
  });
  animateStats();
}

function animateStats() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

// ===== NAVBAR =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  highlightNav();
});

function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id);
      });
    }
  });
}

document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMob() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

function scrollToOrder() {
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.menu-card, .about-grid, .contact-card, .testimonial-card').forEach(el => observer.observe(el));

// ===== MENU RENDERING =====
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const filtered = activeCategory === 'all' ? menuData : menuData.filter(i => i.cat === activeCategory);
  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)"><i class="fas fa-utensils" style="font-size:2rem;display:block;margin-bottom:1rem"></i>No items found</div>`;
    return;
  }
  grid.innerHTML = filtered.map((item, idx) => `
    <div class="menu-card" style="animation-delay:${idx * 0.04}s">
      <div class="card-emoji">${item.emoji}</div>
      <div class="card-cat">${catLabel(item.cat)}</div>
      <div class="card-name">${item.name}</div>
      ${item.desc ? `<div class="card-desc">${item.desc}</div>` : ''}
      <div class="card-bottom">
        <div class="card-price">Rs. ${item.price}</div>
        <button class="card-add-btn" onclick="addToCart(${item.id})">+ Add</button>
      </div>
    </div>
  `).join('');
}

function catLabel(cat) {
  const map = { desi:'Desi Items', karahi:'Karahi', bbq:'BBQ', fastfood:'Fast Food', chinese:'Chinese', pizza:'Pizza', vegetable:'Vegetable', rolls:'Rolls', fish:'Fish', salads:'Salads', paratha:'Paratha & Naan', juices:'Fresh Juices', desserts:'Desserts', beverages:'Beverages' };
  return map[cat] || cat;
}

// Tab listeners
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    activeCategory = this.dataset.cat;
    renderMenu();
  });
});

// ===== CART =====
function addToCart(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  const basePrice = parseInt(item.price.toString().split('-')[0]);
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name: item.name, price: basePrice, qty: 1, emoji: item.emoji }); }
  renderCart();
  showToast(`${item.emoji} ${item.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
}

function renderCart() {
  const el = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty"><i class="fas fa-fire" style="font-size:2rem;color:var(--accent)"></i><p>Your cart is empty</p><span>Add items from the menu above</span></div>`;
    summary.style.display = 'none';
    return;
  }
  el.innerHTML = cart.map(c => `
    <div class="cart-item-row">
      <span style="font-size:1.2rem">${c.emoji}</span>
      <div class="ci-name">${c.name}</div>
      <div class="ci-qty">
        <button onclick="changeQty(${c.id}, -1)">−</button>
        <span>${c.qty}</span>
        <button onclick="changeQty(${c.id}, 1)">+</button>
      </div>
      <div class="ci-price">Rs.${c.price * c.qty}</div>
      <button class="ci-del" onclick="removeFromCart(${c.id})"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartSubtotal').textContent = `Rs. ${subtotal}`;
  document.getElementById('cartTotal').textContent = `Rs. ${subtotal + 50}`;
  summary.style.display = 'block';
}

// ===== PAYMENT OPTIONS =====
document.querySelectorAll('.pay-opt').forEach(opt => {
  opt.addEventListener('click', function () {
    document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('active'));
    this.classList.add('active');
    const val = this.querySelector('input').value;
    const detailsEl = document.getElementById('paymentDetails');
    const details = {
      easypaisa: `<strong>EasyPaisa Account:</strong><br>Account: 0332-4187360<br>Name: Mirchi 360 Restaurant<br>After payment, share screenshot on WhatsApp.`,
      jazzcash: `<strong>JazzCash Account:</strong><br>Account: 0332-4187360<br>Name: Mirchi 360 Restaurant<br>After payment, share screenshot on WhatsApp.`,
      bank: `<strong>Bank Transfer:</strong><br>Bank: Meezan Bank<br>Account: XXXX-XXXX-XXXX<br>Title: Mirchi 360<br>Share transfer receipt on WhatsApp.`,
      cash: ''
    };
    detailsEl.style.display = val === 'cash' ? 'none' : 'block';
    detailsEl.innerHTML = details[val] || '';
  });
});

// ===== PLACE ORDER =====
function placeOrder() {
  if (!cart.length) { showToast('🛒 Your cart is empty!'); return; }
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const addr = document.getElementById('custAddr').value.trim();
  if (!name || !phone || !addr) { showToast('⚠️ Please fill all required fields!'); return; }
  const note = document.getElementById('custNote').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked')?.value || 'cash';
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const payMap = { easypaisa: 'EasyPaisa', jazzcash: 'JazzCash', cash: 'Cash on Delivery', bank: 'Bank Transfer' };

  let msg = `🌶️ *MIRCHI 360 - NEW ORDER*\n\n`;
  msg += `👤 *Customer:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address:* ${addr}\n\n`;
  msg += `🛒 *ORDER ITEMS:*\n`;
  cart.forEach(c => { msg += `• ${c.emoji} ${c.name} × ${c.qty} = Rs.${c.price * c.qty}\n`; });
  msg += `\n💰 *Subtotal:* Rs.${subtotal}\n🚴 *Delivery:* Rs.50\n✅ *TOTAL: Rs.${subtotal + 50}*\n`;
  msg += `\n💳 *Payment:* ${payMap[payment]}`;
  if (note) msg += `\n\n📝 *Note:* ${note}`;

  const url = `https://wa.me/923324187360?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  showToast('✅ Order sent via WhatsApp!');
}

// ===== ADMIN =====
const ADMIN_USER = 'admin', ADMIN_PASS = 'mirchi360';
let adminLoggedIn = false;

function adminLogin() {
  const u = document.getElementById('adminUser').value;
  const p = document.getElementById('adminPass').value;
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    adminLoggedIn = true;
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDash').style.display = 'block';
    renderAdminTable();
    showToast('✅ Admin logged in!');
  } else {
    showToast('❌ Invalid credentials!');
  }
}

function adminLogout() {
  adminLoggedIn = false;
  document.getElementById('adminLogin').style.display = 'block';
  document.getElementById('adminDash').style.display = 'none';
  document.getElementById('adminUser').value = '';
  document.getElementById('adminPass').value = '';
}

function renderAdminTable() {
  const q = (document.getElementById('adminSearch')?.value || '').toLowerCase();
  const items = menuData.filter(i => !q || i.name.toLowerCase().includes(q) || i.cat.includes(q));
  document.getElementById('adminTableBody').innerHTML = items.map(item => `
    <tr>
      <td>${item.emoji} ${item.name}</td>
      <td>${catLabel(item.cat)}</td>
      <td>Rs. ${item.price}</td>
      <td style="font-size:1.4rem">${item.emoji}</td>
      <td>
        <div class="tbl-actions">
          <button class="tbl-btn tbl-edit" onclick="openEditModal(${item.id})"><i class="fas fa-edit"></i> Edit</button>
          <button class="tbl-btn tbl-del" onclick="deleteItem(${item.id})"><i class="fas fa-trash"></i> Del</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAddModal() {
  editingId = null;
  document.getElementById('modalTitle').textContent = 'Add Menu Item';
  document.getElementById('modalName').value = '';
  document.getElementById('modalCat').value = 'desi';
  document.getElementById('modalPrice').value = '';
  document.getElementById('modalEmoji').value = '🍽️';
  document.getElementById('modalDesc').value = '';
  document.getElementById('itemModal').style.display = 'flex';
}

function openEditModal(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  editingId = id;
  document.getElementById('modalTitle').textContent = 'Edit Menu Item';
  document.getElementById('modalName').value = item.name;
  document.getElementById('modalCat').value = item.cat;
  document.getElementById('modalPrice').value = item.price;
  document.getElementById('modalEmoji').value = item.emoji;
  document.getElementById('modalDesc').value = item.desc || '';
  document.getElementById('itemModal').style.display = 'flex';
}

function closeModal() { document.getElementById('itemModal').style.display = 'none'; }

function saveItem() {
  const name = document.getElementById('modalName').value.trim();
  const cat = document.getElementById('modalCat').value;
  const price = document.getElementById('modalPrice').value.trim();
  const emoji = document.getElementById('modalEmoji').value.trim() || '🍽️';
  const desc = document.getElementById('modalDesc').value.trim();
  if (!name || !price) { showToast('⚠️ Name and price are required!'); return; }
  if (editingId) {
    const idx = menuData.findIndex(i => i.id === editingId);
    if (idx !== -1) menuData[idx] = { ...menuData[idx], name, cat, price, emoji, desc };
    showToast('✅ Item updated!');
  } else {
    menuData.push({ id: nextId++, name, cat, price, emoji, desc });
    showToast('✅ Item added!');
  }
  saveMenu();
  renderMenu();
  renderAdminTable();
  closeModal();
}

function deleteItem(id) {
  if (!confirm('Delete this item?')) return;
  menuData = menuData.filter(i => i.id !== id);
  saveMenu();
  renderMenu();
  renderAdminTable();
  showToast('🗑️ Item deleted!');
}

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// ===== CAROUSEL DOTS =====
function initCarouselDots() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.getElementById('carouselDots');
  if (!dots || !cards.length) return;
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dots.appendChild(dot);
  });
  // auto rotate active dot
  let idx = 0;
  setInterval(() => {
    dots.querySelectorAll('span').forEach(d => d.classList.remove('active'));
    idx = (idx + 1) % cards.length;
    dots.querySelectorAll('span')[idx].classList.add('active');
  }, 3000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderCart();
  initCarouselDots();
});
