/* ═══════════════════════════════════════════════════════════
   MIRCHI 360° — APP.JS
   Three.js • GSAP • Particles • All Features
═══════════════════════════════════════════════════════════ */

/* ─── MENU DATA ──────────────────────────────────────────── */
const DEFAULT_MENU = [
  // Karahi
  { name:"Chicken Karahi", cat:"Karahi", price:950, emoji:"🫕", desc:"Signature spicy chicken karahi with fresh tomatoes" },
  { name:"Mutton Karahi", cat:"Karahi", price:1400, emoji:"🫕", desc:"Tender mutton cooked in desi spices" },
  { name:"Beef Karahi", cat:"Karahi", price:1200, emoji:"🫕", desc:"Juicy beef karahi — a classic Tando Adam favourite" },
  // BBQ
  { name:"Seekh Kabab (6 pcs)", cat:"BBQ", price:550, emoji:"🍢", desc:"Juicy minced meat kababs fresh off the grill" },
  { name:"Chicken Tikka", cat:"BBQ", price:700, emoji:"🍗", desc:"Charcoal grilled chicken tikka with mint chutney" },
  { name:"Mutton Chops", cat:"BBQ", price:900, emoji:"🥩", desc:"Marinated mutton chops grilled to perfection" },
  // Desi Items
  { name:"Chicken Handi", cat:"Desi Items", price:850, emoji:"🍲", desc:"Creamy chicken handi cooked in traditional earthen pot" },
  { name:"Dal Makhani", cat:"Desi Items", price:350, emoji:"🫘", desc:"Slow-cooked black lentils in buttery gravy" },
  { name:"Biryani (Chicken)", cat:"Desi Items", price:400, emoji:"🍛", desc:"Aromatic basmati rice with succulent chicken" },
  { name:"Biryani (Mutton)", cat:"Desi Items", price:500, emoji:"🍛", desc:"Royal mutton biryani with saffron" },
  // Fast Food
  { name:"Zinger Burger", cat:"Fast Food", price:350, emoji:"🍔", desc:"Crispy chicken zinger with coleslaw" },
  { name:"Club Sandwich", cat:"Fast Food", price:280, emoji:"🥪", desc:"Triple-decker loaded club sandwich" },
  { name:"Loaded Fries", cat:"Fast Food", price:250, emoji:"🍟", desc:"Crispy fries loaded with cheese & sauce" },
  // Pizza
  { name:"Chicken Pizza (Sm)", cat:"Pizza", price:650, emoji:"🍕", desc:"8-inch chicken tikka pizza with mozzarella" },
  { name:"BBQ Pizza (Med)", cat:"Pizza", price:950, emoji:"🍕", desc:"12-inch BBQ chicken pizza" },
  { name:"Veggie Supreme", cat:"Pizza", price:750, emoji:"🍕", desc:"Garden fresh vegetable pizza" },
  // Chinese
  { name:"Chicken Chowmein", cat:"Chinese", price:350, emoji:"🍜", desc:"Stir-fried noodles with chicken & vegetables" },
  { name:"Fried Rice", cat:"Chinese", price:300, emoji:"🍚", desc:"Wok-tossed fried rice with egg" },
  { name:"Manchurian", cat:"Chinese", price:400, emoji:"🥡", desc:"Crispy chicken balls in tangy manchurian sauce" },
  // Rolls
  { name:"Chicken Roll", cat:"Rolls", price:220, emoji:"🌯", desc:"Grilled chicken roll with fresh salad" },
  { name:"Beef Shami Roll", cat:"Rolls", price:200, emoji:"🌯", desc:"Crispy shami kabab roll" },
  // Fish
  { name:"Fish Tikka", cat:"Fish", price:800, emoji:"🐟", desc:"River fish marinated and grilled" },
  { name:"Fish & Chips", cat:"Fish", price:550, emoji:"🐟", desc:"Crispy battered fish with fries" },
  // Juices
  { name:"Lemon Mint", cat:"Juices", price:150, emoji:"🥤", desc:"Refreshing lemon mint cooler" },
  { name:"Mango Shake", cat:"Juices", price:200, emoji:"🥭", desc:"Fresh mango milkshake" },
  { name:"Mixed Fruit", cat:"Juices", price:180, emoji:"🍹", desc:"Seasonal mixed fruit juice" },
  // Desserts
  { name:"Ice Cream (Scoop)", cat:"Desserts", price:120, emoji:"🍦", desc:"Premium ice cream — your choice of flavour" },
  { name:"Gulab Jamun", cat:"Desserts", price:150, emoji:"🍮", desc:"Soft gulab jamun in sugar syrup" },
  { name:"Kheer", cat:"Desserts", price:130, emoji:"🍚", desc:"Traditional rice pudding with cardamom" },
  // Salads
  { name:"Green Salad", cat:"Salads", price:180, emoji:"🥗", desc:"Fresh seasonal garden salad" },
  { name:"Raita", cat:"Salads", price:100, emoji:"🥛", desc:"Creamy yoghurt raita with spices" },
  // Vegetable
  { name:"Mix Vegetable", cat:"Vegetable", price:300, emoji:"🥦", desc:"Seasonal vegetables in spiced gravy" },
  { name:"Aloo Palak", cat:"Vegetable", price:280, emoji:"🥬", desc:"Potato and spinach curry" },
];

const REVIEWS_DATA = [
  { name:"Ahmed Mirza", city:"Tando Adam", stars:5, text:"Best Chicken Karahi in all of Sanghar! The flavours are absolutely incredible. We visit every weekend." },
  { name:"Sara Fatima", city:"Sanghar", stars:5, text:"Mirchi 360's BBQ Platter is unmatched. The seekh kabab and tikka are perfectly marinated. Highly recommended!" },
  { name:"Zain Khan", city:"Tando Adam", stars:5, text:"The pizza is surprisingly amazing for a desi restaurant! And the lemon mint is so refreshing. Love this place." },
  { name:"Raza Ali", city:"Sanghar", stars:5, text:"Ordered their Mutton Handi for a family gathering — everyone was in love. Will definitely order again!" },
];

const INSTA_ITEMS = ["🫕","🍗","🔥","🍕","🥤","🍢","🍛","🌯","🐟","🍦","🥗","🍔"];

/* ─── CHAT RESPONSES ─────────────────────────────────────── */
const CHAT_RESPONSES = {
  "I want to place an order": "Great! You can order directly on our website or message us on WhatsApp at 0332-4187360. We deliver across Tando Adam & Sanghar 🛵",
  "What are your timings?": "We're open daily from 12:00 PM to 1:00 AM — 7 days a week! 🕐",
  "Do you offer delivery?": "Yes! We deliver across Tando Adam and Sanghar. Delivery charge is Rs. 50. Orders above Rs. 1000 get free delivery! 🛵🎉",
  "I have a complaint": "We're so sorry to hear that! Please call us on 0332-4187360 or message on WhatsApp and we'll resolve it immediately. Your satisfaction is our priority. 🙏",
  default: "Thank you for your message! For immediate assistance, please contact us on WhatsApp: 0332-4187360 📱"
};

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
let cart = [];
let menuItems = [];
let currentFilter = "all";
let selectedStars = 5;
let loyaltyPoints = 0;
let loyaltyMember = null;

/* ═══════════════════════════════════════════════════════════
   LOADER
═══════════════════════════════════════════════════════════ */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    initGSAP();
  }, 2200);
});

/* ═══════════════════════════════════════════════════════════
   THREE.JS — 3D ROTATING LOGO
═══════════════════════════════════════════════════════════ */
(function init3DLogo() {
  const canvas = document.getElementById("logo-3d");
  if (!canvas || !window.THREE) return;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(56, 56);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 3;

  const geo = new THREE.TorusGeometry(0.8, 0.3, 16, 50);
  const mat = new THREE.MeshStandardMaterial({ color: 0xe63946, emissive: 0x7a0000, roughness: 0.3, metalness: 0.8 });
  const torus = new THREE.Mesh(geo, mat);
  scene.add(torus);

  const sGeo = new THREE.SphereGeometry(0.3, 16, 16);
  const sMat = new THREE.MeshStandardMaterial({ color: 0xff6b35, emissive: 0x882200, roughness: 0.2, metalness: 0.9 });
  const sphere = new THREE.Mesh(sGeo, sMat);
  scene.add(sphere);

  const light = new THREE.DirectionalLight(0xffffff, 1.5);
  light.position.set(2, 2, 3);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0xffa0a0, 0.5));

  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.015;
    sphere.rotation.y += 0.02;
    renderer.render(scene, camera);
  }
  animate();
})();

/* ═══════════════════════════════════════════════════════════
   PARTICLE FIRE
═══════════════════════════════════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const PARTICLE_COUNT = 80;

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 20;
      this.size = Math.random() * 4 + 1;
      this.speedY = -(Math.random() * 2 + 0.5);
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.life = 1;
      this.decay = Math.random() * 0.006 + 0.003;
      this.color = `hsl(${Math.random() * 40 + 5}, 100%, ${Math.random() * 30 + 50}%)`;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life -= this.decay;
      this.size *= 0.998;
      if (this.life <= 0) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.life * 0.7;
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = new Particle();
    p.y = Math.random() * canvas.height; // spread initially
    particles.push(p);
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════ */
(function initCursor() {
  const outer = document.getElementById("cursor-outer");
  const inner = document.getElementById("cursor-inner");
  if (!outer || !inner) return;

  let mx = 0, my = 0, ox = 0, oy = 0;

  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    inner.style.left = mx + "px";
    inner.style.top = my + "px";
  });

  function animCursor() {
    ox += (mx - ox) * 0.12;
    oy += (my - oy) * 0.12;
    outer.style.left = ox + "px";
    outer.style.top = oy + "px";
    requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll("a, button, .dish-card, .filter-btn, .quick-reply").forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
})();

/* ═══════════════════════════════════════════════════════════
   MAGNETIC EFFECT
═══════════════════════════════════════════════════════════ */
document.querySelectorAll(".magnetic").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.25;
    const dy = (e.clientY - cy) * 0.25;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
  });
});

/* ═══════════════════════════════════════════════════════════
   NAVBAR SCROLL
═══════════════════════════════════════════════════════════ */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ═══════════════════════════════════════════════════════════
   HAMBURGER / MOBILE MENU
═══════════════════════════════════════════════════════════ */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileClose.addEventListener("click", () => mobileMenu.classList.remove("open"));
document.querySelectorAll(".m-link").forEach(l => l.addEventListener("click", () => mobileMenu.classList.remove("open")));

/* ═══════════════════════════════════════════════════════════
   DARK / LIGHT MODE TOGGLE
═══════════════════════════════════════════════════════════ */
const themeToggle = document.getElementById("themeToggle");
let isDark = true;
themeToggle.addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
});

/* ═══════════════════════════════════════════════════════════
   COUNTDOWN TIMER
═══════════════════════════════════════════════════════════ */
(function initCountdown() {
  // Set offer end to midnight tonight
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 0);

  function update() {
    const diff = end - new Date();
    if (diff <= 0) { end.setDate(end.getDate() + 1); return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById("cd-h").textContent = String(h).padStart(2, "0");
    document.getElementById("cd-m").textContent = String(m).padStart(2, "0");
    document.getElementById("cd-s").textContent = String(s).padStart(2, "0");
  }
  update();
  setInterval(update, 1000);
})();

/* ═══════════════════════════════════════════════════════════
   STATS COUNTER ANIMATION
═══════════════════════════════════════════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const dur = 2000;
  const step = target / (dur / 16);
  let cur = 0;
  const timer = setInterval(() => {
    cur += step;
    if (cur >= target) { cur = target; clearInterval(timer); }
    el.textContent = Math.floor(cur);
  }, 16);
}

/* ═══════════════════════════════════════════════════════════
   GSAP SCROLL ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initGSAP() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from(".hero-badge", { opacity: 0, y: 30, duration: 0.8, delay: 0.2 });
  gsap.from(".hero-line1", { opacity: 0, x: -60, duration: 0.9, delay: 0.4 });
  gsap.from(".hero-line2", { opacity: 0, x: 60, duration: 0.9, delay: 0.5 });
  gsap.from(".hero-line3", { opacity: 0, y: 50, duration: 0.9, delay: 0.6 });
  gsap.from(".hero-sub", { opacity: 0, y: 30, duration: 0.8, delay: 0.8 });
  gsap.from(".hero-btns", { opacity: 0, y: 30, duration: 0.8, delay: 1 });
  gsap.from(".hero-offer-card", { opacity: 0, scale: 0.8, duration: 0.8, delay: 1.1, ease: "back.out(1.7)" });
  gsap.from(".hero-stats", { opacity: 0, y: 30, duration: 0.8, delay: 1.2 });

  // Parallax
  document.querySelectorAll(".parallax-section").forEach(section => {
    gsap.to(section.querySelector(".section-header") || section, {
      scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.5 },
      y: -30,
    });
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Counter animation
        entry.target.querySelectorAll(".stat-num").forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right").forEach(el => observer.observe(el));

  // Loyalty bar
  const loyaltyObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => updateLoyaltyCard(), 300);
        loyaltyObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const loyaltySection = document.getElementById("loyalty");
  if (loyaltySection) loyaltyObserver.observe(loyaltySection);

  // Tracking fill
  const trackObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateTracking(1);
        trackObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const trackSection = document.getElementById("tracking");
  if (trackSection) trackObserver.observe(trackSection);
}

/* ═══════════════════════════════════════════════════════════
   MENU RENDERING
═══════════════════════════════════════════════════════════ */
function loadMenu() {
  try {
    const saved = localStorage.getItem("mirchi360_menu");
    menuItems = saved ? JSON.parse(saved) : [...DEFAULT_MENU];
  } catch { menuItems = [...DEFAULT_MENU]; }
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const filtered = currentFilter === "all" ? menuItems : menuItems.filter(i => i.cat === currentFilter);
  
  grid.innerHTML = "";
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text2)">No items in this category yet.</div>`;
    return;
  }

  filtered.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "dish-card";
    card.style.animationDelay = `${idx * 0.05}s`;
    card.innerHTML = `
      <div class="dish-card-inner">
        <div class="dish-front">
          <div class="dish-emoji">${item.emoji || "🍽️"}</div>
          <div class="dish-price-badge">Rs. ${item.price}</div>
          <div class="dish-neon-line"></div>
          <div class="dish-front-content">
            <div class="dish-name">${item.name}</div>
            <div class="dish-cat">${item.cat}</div>
          </div>
        </div>
        <div class="dish-back">
          <div class="dish-back-emoji">${item.emoji || "🍽️"}</div>
          <div class="dish-name">${item.name}</div>
          <div class="dish-desc">${item.desc || "Deliciously prepared with authentic spices."}</div>
          <div class="dish-price">Rs. ${item.price}</div>
          <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.emoji || "🍽️"}')">
            + Add to Cart
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-attach cursor events
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    btn.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.cat;
    renderMenu();
  });
});

/* ═══════════════════════════════════════════════════════════
   CART
═══════════════════════════════════════════════════════════ */
function addToCart(name, price, emoji) {
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty++;
  else cart.push({ name, price, emoji, qty: 1 });
  updateCart();
  showToast(`${emoji} ${name} added to cart!`, "success");
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartSummary = document.getElementById("cartSummary");

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><small>Add items from the menu above</small></div>`;
    cartSummary.style.display = "none";
    return;
  }

  cartItems.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="ci-emoji">${item.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">Rs. ${item.price} each</div>
      </div>
      <div class="ci-qty">
        <button onclick="changeQty(${idx}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${idx}, 1)">+</button>
      </div>
      <button class="ci-remove" onclick="removeFromCart(${idx})">✕</button>
    </div>
  `).join("");

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("cartSubtotal").textContent = `Rs. ${subtotal}`;
  document.getElementById("cartTotal").textContent = `Rs. ${subtotal + 50}`;
  cartSummary.style.display = "block";
}

function changeQty(idx, delta) {
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
}
function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCart();
}

/* ═══════════════════════════════════════════════════════════
   PLACE ORDER
═══════════════════════════════════════════════════════════ */
document.getElementById("placeOrderBtn").addEventListener("click", () => {
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const addr = document.getElementById("custAddr").value.trim();
  const note = document.getElementById("custNote").value.trim();
  const payment = document.querySelector('input[name="payment"]:checked')?.value || "Cash on Delivery";

  if (!name || !phone || !addr) { showToast("Please fill all required fields!", "error"); return; }
  if (cart.length === 0) { showToast("Your cart is empty!", "error"); return; }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const orderLines = cart.map(i => `${i.emoji} ${i.name} x${i.qty} = Rs.${i.price * i.qty}`).join("\n");
  const msg = `🌶️ *MIRCHI 360° - New Order!*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address:* ${addr}\n\n*Order Details:*\n${orderLines}\n\n💰 Subtotal: Rs.${subtotal}\n🛵 Delivery: Rs.50\n✅ *Total: Rs.${subtotal + 50}*\n\n💳 *Payment:* ${payment}${note ? `\n\n📝 *Note:* ${note}` : ""}\n\n⏰ ${new Date().toLocaleString("en-PK")}`;

  window.open(`https://wa.me/923324187360?text=${encodeURIComponent(msg)}`, "_blank");
  
  // Award loyalty points
  if (loyaltyMember) {
    const earned = Math.floor(subtotal / 10);
    loyaltyPoints += earned;
    updateLoyaltyCard();
    showToast(`⭐ You earned ${earned} loyalty points!`, "info");
  }

  cart = [];
  updateCart();
  showToast("🎉 Order sent! Redirecting to WhatsApp...", "success");
});

/* ═══════════════════════════════════════════════════════════
   ORDER TRACKING
═══════════════════════════════════════════════════════════ */
function animateTracking(step) {
  const steps = document.querySelectorAll(".track-step");
  const fill = document.getElementById("trackFill");
  steps.forEach((s, i) => {
    s.classList.toggle("active", i < step);
  });
  fill.style.height = `${((step - 1) / (steps.length - 1)) * 100}%`;
}

document.getElementById("trackBtn").addEventListener("click", () => {
  const val = document.getElementById("trackingInput").value.trim();
  if (!val) { showToast("Please enter your order ID or phone!", "error"); return; }
  showToast("🔍 Searching for your order...", "info");
  // Simulate tracking progression
  let step = 1;
  animateTracking(step);
  const interval = setInterval(() => {
    step++;
    animateTracking(step);
    if (step === 3) {
      clearInterval(interval);
      showToast("👨‍🍳 Your order is being prepared!", "success");
    }
  }, 1500);
});

/* ═══════════════════════════════════════════════════════════
   LOYALTY SYSTEM
═══════════════════════════════════════════════════════════ */
function updateLoyaltyCard() {
  document.getElementById("loyaltyPoints").textContent = loyaltyPoints;
  const bar = document.getElementById("loyaltyBar");
  
  let tier, nextTier, nextPoints;
  if (loyaltyPoints >= 1000) { tier = "💎 Legend"; nextTier = "Max tier reached!"; nextPoints = 0; bar.style.width = "100%"; }
  else if (loyaltyPoints >= 500) { tier = "🔥 Inferno"; nextPoints = 1000 - loyaltyPoints; nextTier = `${nextPoints} to Legend`; bar.style.width = `${((loyaltyPoints - 500) / 500) * 100}%`; }
  else { tier = "🌶️ Spicy"; nextPoints = 500 - loyaltyPoints; nextTier = `${nextPoints} to Inferno`; bar.style.width = `${(loyaltyPoints / 500) * 100}%`; }

  document.getElementById("loyaltyTier").textContent = tier;
  document.getElementById("loyaltyBarLabel").textContent = nextTier;
}

document.getElementById("loyaltyRegBtn").addEventListener("click", () => {
  const name = document.getElementById("loyaltyNameInput").value.trim();
  const phone = document.getElementById("loyaltyPhone").value.trim();
  if (!name || !phone) { showToast("Please fill name and phone!", "error"); return; }
  loyaltyMember = { name, phone };
  loyaltyPoints = 50; // Welcome bonus
  document.getElementById("loyaltyName").textContent = name;
  updateLoyaltyCard();
  showToast(`🎉 Welcome ${name}! You got 50 bonus points!`, "success");
  try { localStorage.setItem("mirchi360_loyalty", JSON.stringify({ name, phone, points: loyaltyPoints })); } catch {}
});

// Load saved loyalty data
try {
  const saved = localStorage.getItem("mirchi360_loyalty");
  if (saved) {
    const d = JSON.parse(saved);
    loyaltyMember = d;
    loyaltyPoints = d.points || 0;
    document.getElementById("loyaltyName").textContent = d.name;
    document.getElementById("loyaltyNameInput").value = d.name;
    document.getElementById("loyaltyPhone").value = d.phone;
    updateLoyaltyCard();
  }
} catch {}

/* ═══════════════════════════════════════════════════════════
   REVIEWS
═══════════════════════════════════════════════════════════ */
function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  const allReviews = [...REVIEWS_DATA];
  
  try {
    const saved = localStorage.getItem("mirchi360_reviews");
    if (saved) allReviews.push(...JSON.parse(saved));
  } catch {}

  grid.innerHTML = allReviews.map(r => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="reviewer">
        <div class="reviewer-avatar">${r.name.split(" ").map(n => n[0]).join("").slice(0,2)}</div>
        <div><strong>${r.name}</strong><small>${r.city}</small></div>
      </div>
    </div>
  `).join("");
}

// Star Rating
document.querySelectorAll(".star").forEach(star => {
  star.addEventListener("click", () => {
    selectedStars = parseInt(star.dataset.val);
    document.querySelectorAll(".star").forEach((s, i) => {
      s.classList.toggle("active", i < selectedStars);
    });
  });
  star.addEventListener("mouseenter", () => {
    const val = parseInt(star.dataset.val);
    document.querySelectorAll(".star").forEach((s, i) => s.classList.toggle("active", i < val));
  });
  star.addEventListener("mouseleave", () => {
    document.querySelectorAll(".star").forEach((s, i) => s.classList.toggle("active", i < selectedStars));
  });
});

document.getElementById("submitReview").addEventListener("click", () => {
  const name = document.getElementById("revName").value.trim();
  const city = document.getElementById("revCity").value.trim();
  const text = document.getElementById("revText").value.trim();
  if (!name || !text) { showToast("Please fill name and review!", "error"); return; }

  const newReview = { name, city: city || "Pakistan", stars: selectedStars, text };
  try {
    const saved = localStorage.getItem("mirchi360_reviews");
    const reviews = saved ? JSON.parse(saved) : [];
    reviews.unshift(newReview);
    localStorage.setItem("mirchi360_reviews", JSON.stringify(reviews));
  } catch {}

  renderReviews();
  document.getElementById("revName").value = "";
  document.getElementById("revCity").value = "";
  document.getElementById("revText").value = "";
  showToast("⭐ Thank you for your review!", "success");
});

/* ═══════════════════════════════════════════════════════════
   INSTAGRAM FEED
═══════════════════════════════════════════════════════════ */
function renderInsta() {
  const grid = document.getElementById("instaGrid");
  grid.innerHTML = INSTA_ITEMS.map(emoji => `
    <div class="insta-item">
      ${emoji}
      <div class="insta-overlay"><i class="fab fa-instagram"></i></div>
    </div>
  `).join("");
}

/* ═══════════════════════════════════════════════════════════
   CHAT WIDGET
═══════════════════════════════════════════════════════════ */
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const chatClose = document.getElementById("chatClose");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const chatSend = document.getElementById("chatSend");

chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("open");
  document.querySelector(".chat-badge").style.display = "none";
});
chatClose.addEventListener("click", () => chatBox.classList.remove("open"));

function addChatMsg(text, type) {
  const div = document.createElement("div");
  div.className = `chat-msg ${type}`;
  div.innerHTML = `<span>${text}</span>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatSend() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  addChatMsg(msg, "user");
  chatInput.value = "";

  setTimeout(() => {
    const response = CHAT_RESPONSES[msg] || CHAT_RESPONSES.default;
    addChatMsg(response, "bot");
    if (msg === "I want to place an order") {
      setTimeout(() => {
        const link = document.createElement("div");
        link.className = "chat-msg bot";
        link.innerHTML = `<span><a href="https://wa.me/923324187360" target="_blank" style="color:#25D366;font-weight:600;">📱 Open WhatsApp →</a></span>`;
        chatMessages.appendChild(link);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);
    }
  }, 800);
}

chatSend.addEventListener("click", () => {
  handleChatSend();
  window.open(`https://wa.me/923324187360?text=${encodeURIComponent(chatInput.value || "Hello Mirchi 360!")}`, "_blank");
});
chatInput.addEventListener("keypress", e => { if (e.key === "Enter") handleChatSend(); });

document.querySelectorAll(".quick-reply").forEach(btn => {
  btn.addEventListener("click", () => {
    const msg = btn.dataset.msg;
    addChatMsg(msg, "user");
    setTimeout(() => {
      addChatMsg(CHAT_RESPONSES[msg] || CHAT_RESPONSES.default, "bot");
    }, 800);
    document.querySelector(".chat-quick-replies")?.remove();
  });
});

/* ═══════════════════════════════════════════════════════════
   ADMIN PANEL
═══════════════════════════════════════════════════════════ */
document.getElementById("adminLoginBtn").addEventListener("click", () => {
  const u = document.getElementById("adminUser").value;
  const p = document.getElementById("adminPass").value;
  if (u === "admin" && p === "mirchi360") {
    document.getElementById("adminLogin").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    renderAdminTable();
    showToast("✅ Welcome, Admin!", "success");
  } else {
    showToast("❌ Invalid credentials!", "error");
  }
});

document.getElementById("adminLogout").addEventListener("click", () => {
  document.getElementById("adminLogin").style.display = "flex";
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("adminUser").value = "";
  document.getElementById("adminPass").value = "";
});

document.getElementById("showAddForm").addEventListener("click", () => {
  document.getElementById("addItemForm").style.display = "block";
});
document.getElementById("cancelAdd").addEventListener("click", () => {
  document.getElementById("addItemForm").style.display = "none";
});

document.getElementById("saveItem").addEventListener("click", () => {
  const name = document.getElementById("aName").value.trim();
  const cat = document.getElementById("aCat").value;
  const price = parseInt(document.getElementById("aPrice").value);
  const emoji = document.getElementById("aEmoji").value.trim() || "🍽️";
  const desc = document.getElementById("aDesc").value.trim();

  if (!name || !cat || !price) { showToast("Please fill all required fields!", "error"); return; }

  menuItems.push({ name, cat, price, emoji, desc });
  try { localStorage.setItem("mirchi360_menu", JSON.stringify(menuItems)); } catch {}
  renderAdminTable();
  renderMenu();
  document.getElementById("addItemForm").style.display = "none";
  document.getElementById("aName").value = "";
  document.getElementById("aPrice").value = "";
  document.getElementById("aEmoji").value = "";
  document.getElementById("aDesc").value = "";
  document.getElementById("aCat").value = "";
  showToast(`✅ ${name} added!`, "success");
});

function renderAdminTable() {
  const tbody = document.getElementById("adminTableBody");
  tbody.innerHTML = menuItems.map((item, idx) => `
    <tr>
      <td>${item.name}</td>
      <td>${item.cat}</td>
      <td>Rs. ${item.price}</td>
      <td>${item.emoji}</td>
      <td><button class="tbl-del" onclick="deleteItem(${idx})">Delete</button></td>
    </tr>
  `).join("");
}

function deleteItem(idx) {
  menuItems.splice(idx, 1);
  try { localStorage.setItem("mirchi360_menu", JSON.stringify(menuItems)); } catch {}
  renderAdminTable();
  renderMenu();
  showToast("🗑️ Item deleted!", "info");
}

/* ═══════════════════════════════════════════════════════════
   TOAST NOTIFICATIONS
═══════════════════════════════════════════════════════════ */
function showToast(msg, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ═══════════════════════════════════════════════════════════
   SMOOTH SCROLL
═══════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      if (window.gsap && window.ScrollToPlugin) {
        gsap.registerPlugin(ScrollToPlugin);
        gsap.to(window, { scrollTo: { y: target, offsetY: 72 }, duration: 1, ease: "power3.inOut" });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
loadMenu();
renderReviews();
renderInsta();

// Set first 4 stars active by default
document.querySelectorAll(".star").forEach((s, i) => { if (i < 5) s.classList.add("active"); });

// Expose global functions
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.deleteItem = deleteItem;

console.log("🌶️ Mirchi 360° — Premium Website Loaded!");

