/* =============================================
   MIRCHI 360° — PREMIUM STYLESHEET
   Fonts: Cormorant Garamond + Josefin Sans
   Theme: Dark Luxury with Gold/Fire Accents
============================================= */

/* ===== CSS VARIABLES ===== */
:root {
  --gold: #C9A84C;
  --gold-light: #E8C976;
  --gold-dark: #A07830;
  --fire: #E85D04;
  --fire-light: #F48C06;
  --crimson: #9B0505;
  --bg-dark: #0A0A0A;
  --bg-card: #111111;
  --bg-card2: #161616;
  --bg-surface: #1A1A1A;
  --text-primary: #F5F0E8;
  --text-muted: #8A8070;
  --text-light: #C5BBA8;
  --border: rgba(201,168,76,0.15);
  --border-hover: rgba(201,168,76,0.4);
  --glow: 0 0 40px rgba(201,168,76,0.15);
  --glow-strong: 0 0 60px rgba(201,168,76,0.3);
  --radius: 12px;
  --radius-lg: 20px;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Josefin Sans', sans-serif;
  --font-heading: 'Playfair Display', Georgia, serif;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg-dark);
  color: var(--text-primary);
  overflow-x: hidden;
  line-height: 1.6;
  cursor: none;
}
a { text-decoration: none; color: inherit; }
img { max-width: 100%; }
input, textarea, select {
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  border: 1px solid var(--border);
  background: var(--bg-surface);
  color: var(--text-primary);
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  width: 100%;
  transition: var(--transition);
}
input:focus, textarea:focus, select:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,168,76,0.1); }
input::placeholder, textarea::placeholder { color: var(--text-muted); }
select option { background: var(--bg-card); }

/* ===== PARTICLE CANVAS ===== */
#particleCanvas {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

/* ===== CUSTOM CURSOR ===== */
.cursor-dot {
  width: 6px; height: 6px;
  background: var(--gold);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
}
.cursor-ring {
  width: 36px; height: 36px;
  border: 1.5px solid rgba(201,168,76,0.5);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: all 0.12s ease;
}
.cursor-dot.clicked { width: 12px; height: 12px; background: var(--fire); }
.cursor-ring.clicked { width: 50px; height: 50px; border-color: var(--fire); }

/* ===== LOADER ===== */
.loader {
  position: fixed; inset: 0;
  background: var(--bg-dark);
  z-index: 99999;
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
.loader.hidden { opacity: 0; visibility: hidden; }
.loader-inner { text-align: center; }
.loader-logo {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  background: linear-gradient(135deg, var(--gold), var(--fire));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulseGlow 1.2s ease-in-out infinite alternate;
}
.loader-sub {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--gold);
  letter-spacing: 0.5em;
  margin-top: -0.5rem;
  opacity: 0.7;
}
.loader-bar {
  width: 200px; height: 2px;
  background: rgba(201,168,76,0.2);
  border-radius: 2px;
  margin: 2rem auto 0;
  overflow: hidden;
}
.loader-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--gold), var(--fire));
  border-radius: 2px;
  animation: loadFill 2s ease-in-out forwards;
}
@keyframes loadFill { from { width: 0 } to { width: 100% } }
@keyframes pulseGlow {
  from { filter: drop-shadow(0 0 10px rgba(201,168,76,0.3)); }
  to { filter: drop-shadow(0 0 30px rgba(201,168,76,0.8)); }
}

/* ===== NAVBAR ===== */
.navbar {
  position: fixed; top: 0; left: 0; right: 0;
  padding: 1.2rem 4rem;
  display: flex; align-items: center; justify-content: space-between;
  z-index: 1000;
  transition: var(--transition-slow);
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(20px);
  border-bottom-color: var(--border);
  padding: 0.8rem 4rem;
  box-shadow: 0 4px 30px rgba(0,0,0,0.5);
}
.nav-logo { display: flex; align-items: baseline; gap: 0.2rem; cursor: pointer; }
.nav-logo-text {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  background: linear-gradient(135deg, var(--gold), var(--fire-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.nav-logo-degree {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--fire);
  letter-spacing: 0;
}
.nav-links { list-style: none; display: flex; align-items: center; gap: 0.25rem; }
.nav-link {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  transition: var(--transition);
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute; bottom: 2px; left: 50%; right: 50%;
  height: 1px; background: var(--gold);
  transition: var(--transition);
}
.nav-link:hover, .nav-link.active { color: var(--gold); }
.nav-link:hover::after, .nav-link.active::after { left: 0.9rem; right: 0.9rem; }
.nav-admin-btn {
  background: rgba(201,168,76,0.08);
  border: 1px solid var(--border);
  color: var(--gold) !important;
}
.nav-admin-btn:hover { background: rgba(201,168,76,0.15); }
.wa-btn {
  display: flex; align-items: center; gap: 0.5rem;
  background: linear-gradient(135deg, #128C7E, #25D366);
  color: white !important;
  padding: 0.55rem 1.2rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: var(--transition);
  white-space: nowrap;
}
.wa-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(37,211,102,0.3); }
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span {
  display: block; width: 24px; height: 2px;
  background: var(--gold); border-radius: 2px;
  transition: var(--transition);
}

/* ===== BUTTONS ===== */
.btn-primary {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.85rem 2.2rem;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: #000;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none; border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
  position: relative; overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--gold-light), var(--fire-light));
  opacity: 0; transition: var(--transition);
}
.btn-primary:hover::before { opacity: 1; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(201,168,76,0.4); }
.btn-primary span, .btn-primary > * { position: relative; z-index: 1; }
.btn-ghost {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.85rem 2.2rem;
  background: transparent;
  color: var(--gold);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: 1px solid var(--gold);
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
}
.btn-ghost:hover { background: rgba(201,168,76,0.1); transform: translateY(-2px); }
.btn-full { width: 100%; }
.btn-sm { padding: 0.5rem 1.2rem; font-size: 0.75rem; }

/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 4rem 8rem;
  text-align: center;
}
.hero-bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridDrift 20s linear infinite;
}
@keyframes gridDrift { from { transform: translateY(0) } to { transform: translateY(60px) } }
.hero-orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px); pointer-events: none;
  animation: orbFloat 8s ease-in-out infinite;
}
.hero-orb-1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(201,168,76,0.12), transparent 70%); top: -100px; left: -100px; animation-duration: 10s; }
.hero-orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(232,93,4,0.1), transparent 70%); bottom: -50px; right: -50px; animation-duration: 7s; animation-delay: -3s; }
.hero-orb-3 { width: 300px; height: 300px; background: radial-gradient(circle, rgba(155,5,5,0.08), transparent 70%); top: 50%; left: 50%; transform: translate(-50%,-50%); animation-duration: 12s; animation-delay: -5s; }
@keyframes orbFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}
.hero-content { position: relative; z-index: 2; max-width: 900px; }
.hero-badge {
  display: inline-block;
  font-size: 0.72rem; letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--gold); border: 1px solid var(--border);
  padding: 0.4rem 1.2rem; border-radius: 50px;
  margin-bottom: 2rem;
  background: rgba(201,168,76,0.05);
  animation: fadeInUp 0.8s ease 0.2s both;
}
.hero-title {
  display: flex; flex-direction: column; align-items: center; line-height: 1;
  margin-bottom: 1.5rem;
}
.hero-title-line {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--text-primary);
  display: block;
}
.hero-title-line-1 { animation: fadeInUp 0.8s ease 0.4s both; }
.hero-title-line-2 { animation: fadeInUp 0.8s ease 0.6s both; }
.hero-title-degree {
  font-family: var(--font-display);
  font-size: clamp(4rem, 12vw, 12rem);
  font-weight: 300;
  letter-spacing: 0;
  font-style: italic;
  background: linear-gradient(135deg, var(--gold) 30%, var(--fire) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  line-height: 0.9;
  animation: fadeInUp 0.8s ease 0.5s both, pulseText 3s ease-in-out infinite 1.5s;
}
@keyframes pulseText {
  0%, 100% { filter: drop-shadow(0 0 20px rgba(201,168,76,0.3)); }
  50% { filter: drop-shadow(0 0 50px rgba(232,93,4,0.6)); }
}
.hero-sub {
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--text-light);
  max-width: 600px; margin: 0 auto 2.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  animation: fadeInUp 0.8s ease 0.7s both;
}
.hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3.5rem; animation: fadeInUp 0.8s ease 0.8s both; }
.hero-stats {
  display: flex; align-items: center; gap: 2rem; justify-content: center;
  animation: fadeInUp 0.8s ease 0.9s both;
}
.hero-stat { text-align: center; }
.hero-stat-num {
  font-family: var(--font-display);
  font-size: 2.5rem; font-weight: 700;
  color: var(--gold);
  line-height: 1;
}
.hero-stat-plus { font-size: 1.5rem; color: var(--fire); }
.hero-stat-label { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.25rem; }
.hero-stat-div { width: 1px; height: 40px; background: var(--border); }
.hero-scroll {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--text-muted); animation: fadeInUp 1s ease 1.2s both;
}
.hero-scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, var(--gold), transparent); animation: scrollPulse 2s ease-in-out infinite; }
@keyframes scrollPulse { 0%, 100% { opacity: 0.3; transform: scaleY(0.5); } 50% { opacity: 1; transform: scaleY(1); } }

/* ===== TICKER ===== */
.ticker-wrap {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(90deg, rgba(10,10,10,0.9), rgba(201,168,76,0.08), rgba(10,10,10,0.9));
  border-top: 1px solid var(--border);
  padding: 0.8rem 0;
  overflow: hidden;
}
.ticker {
  display: flex; gap: 3rem; white-space: nowrap;
  animation: ticker 25s linear infinite;
}
.ticker span { font-size: 0.85rem; color: var(--gold); letter-spacing: 0.1em; flex-shrink: 0; }
@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }

/* ===== SECTION BASE ===== */
.section { padding: 7rem 4rem; position: relative; z-index: 1; }
@media (max-width: 768px) {
  .section { padding: 3rem 1rem; }
}
.section-header { text-align: center; margin-bottom: 4rem; }
.section-label {
  font-size: 0.72rem; letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--fire); display: inline-block; margin-bottom: 1rem;
  position: relative;
}
.section-label::before, .section-label::after {
  content: '—';
  margin: 0 0.5rem;
  color: var(--gold);
}
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--text-primary), var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.section-sub { color: var(--text-muted); font-size: 1rem; max-width: 500px; margin: 0 auto; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== MENU SECTION ===== */
.menu-section { background: var(--bg-dark); }
.menu-categories {
  display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;
  margin-bottom: 3rem;
}
@media (max-width: 768px) {
  .menu-categories {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .menu-categories::-webkit-scrollbar { display: none; }
}
.cat-btn {
  padding: 0.5rem 1.2rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
  border-radius: 50px; cursor: pointer;
  transition: var(--transition);
  white-space: nowrap; flex-shrink: 0;
}
.cat-btn:hover, .cat-btn.active {
  background: rgba(201,168,76,0.1);
  border-color: var(--gold);
  color: var(--gold);
}
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1400px; margin: 0 auto;
}
@media (max-width: 768px) {
  .menu-grid {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
}
.menu-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  position: relative;
  cursor: pointer;
}
.menu-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-hover);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5), var(--glow);
}
@media (max-width: 768px) {
  .menu-card {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .menu-card:hover { transform: none; }
}
.menu-card-img {
  height: 180px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, var(--bg-surface), var(--bg-card2));
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .menu-card-img {
    width: 115px;
    height: auto;
    min-height: 115px;
  }
}
.menu-card-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
}
.menu-card:hover .menu-card-img img { transform: scale(1.08); }
.menu-card-emoji {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 4rem;
}
@media (max-width: 768px) {
  .menu-card-emoji { font-size: 2.8rem; }
}
.menu-card-badge {
  position: absolute; top: 0.75rem; right: 0.75rem;
  background: rgba(10,10,10,0.8);
  border: 1px solid var(--border);
  color: var(--gold);
  font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0.25rem 0.6rem; border-radius: 50px;
  backdrop-filter: blur(10px);
}
@media (max-width: 768px) {
  .menu-card-badge {
    top: 0.4rem; right: 0.4rem;
    font-size: 0.58rem;
    padding: 0.2rem 0.4rem;
    letter-spacing: 0.05em;
  }
}
.menu-card-body { padding: 1.25rem; }
@media (max-width: 768px) {
  .menu-card-body {
    padding: 0.7rem 0.8rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }
}
.menu-card-name {
  font-family: var(--font-heading);
  font-size: 1.1rem; font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}
.menu-card-desc { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.4; }
@media (max-width: 768px) {
  .menu-card-name {
    font-size: 0.95rem;
    margin-bottom: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .menu-card-desc {
    font-size: 0.73rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
.menu-card-footer { display: flex; align-items: center; justify-content: space-between; }
.menu-card-price {
  font-family: var(--font-display);
  font-size: 1.3rem; font-weight: 700;
  color: var(--gold);
}
.menu-card-add {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  border: none; color: #000;
  font-size: 1.2rem; cursor: pointer;
  transition: var(--transition);
  display: flex; align-items: center; justify-content: center;
}
.menu-card-add:hover { transform: scale(1.1); box-shadow: 0 0 20px rgba(201,168,76,0.4); }
@media (max-width: 768px) {
  .menu-card-price { font-size: 1rem; }
  .menu-card-add { width: 30px; height: 30px; font-size: 1rem; flex-shrink: 0; }
}

/* ===== BOOKING SECTION ===== */
.booking-section { background: var(--bg-card); }
.booking-bg-orb {
  position: absolute; width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(201,168,76,0.06), transparent 70%);
  border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%,-50%);
  pointer-events: none;
}
.booking-container { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; max-width: 1200px; margin: 0 auto; }
.booking-info-item {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1.2rem; border-radius: var(--radius);
  background: var(--bg-surface); border: 1px solid var(--border);
  margin-bottom: 1rem;
  transition: var(--transition);
}
.booking-info-item:hover { border-color: var(--border-hover); }
.booking-info-icon { font-size: 1.5rem; }
.booking-info-title { font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.25rem; }
.booking-info-text { font-size: 0.9rem; color: var(--text-light); }
.table-types { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1.5rem; }
.table-type-card {
  text-align: center;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg-surface);
  cursor: pointer;
  transition: var(--transition);
}
.table-type-card:hover, .table-type-card.selected {
  border-color: var(--gold);
  background: rgba(201,168,76,0.08);
}
.table-type-icon { font-size: 1.8rem; margin-bottom: 0.5rem; }
.table-type-name { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
.table-type-desc { font-size: 0.75rem; color: var(--text-muted); }
.booking-form-wrap { position: relative; }
.booking-form {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  position: relative; overflow: hidden;
}
.booking-form::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--gold), var(--fire), var(--gold));
}
.booking-form-title {
  font-family: var(--font-heading);
  font-size: 1.5rem; color: var(--text-primary);
  margin-bottom: 2rem;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem; }
.booking-note { text-align: center; font-size: 0.78rem; color: var(--text-muted); margin-top: 1rem; }

/* ===== ORDER SECTION ===== */
.order-section { background: var(--bg-dark); }
.order-container { display: grid; grid-template-columns: 1.5fr 1fr; gap: 2.5rem; max-width: 1400px; margin: 0 auto; align-items: start; }
.order-menu-panel { position: sticky; top: 80px; }
.order-search-wrap { margin-bottom: 1.5rem; }
.order-search {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 0.85rem 1.25rem;
  border-radius: 50px;
}
.order-cats { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem; }
.order-cats .cat-btn { padding: 0.35rem 0.9rem; font-size: 0.72rem; }
.order-items-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem; max-height: 70vh; overflow-y: auto;
  padding-right: 0.5rem;
  scrollbar-width: thin; scrollbar-color: var(--border) transparent;
}
.order-items-grid::-webkit-scrollbar { width: 4px; }
.order-items-grid::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
.order-item-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex; align-items: center; gap: 0.75rem;
  transition: var(--transition);
  cursor: pointer;
}
.order-item-card:hover { border-color: var(--border-hover); }
.order-item-emoji { font-size: 2.2rem; flex-shrink: 0; }
.order-item-img {
  width: 52px; height: 52px;
  border-radius: 8px;
  object-fit: cover; flex-shrink: 0;
}
.order-item-info { flex: 1; min-width: 0; }
.order-item-name { font-size: 0.88rem; font-weight: 600; color: var(--text-primary); line-height: 1.2; margin-bottom: 0.2rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.order-item-price { font-size: 0.85rem; color: var(--gold); font-weight: 700; }
.order-item-add {
  width: 30px; height: 30px;
  border-radius: 50%; background: var(--gold);
  border: none; color: #000; font-size: 1.1rem;
  cursor: pointer; flex-shrink: 0;
  transition: var(--transition);
  display: flex; align-items: center; justify-content: center;
}
.order-item-add:hover { background: var(--fire); transform: scale(1.1); }

/* CART */
.order-cart-panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  position: sticky; top: 80px;
}
.cart-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
.cart-header h3 { font-family: var(--font-heading); font-size: 1.3rem; }
.cart-count {
  background: var(--fire);
  color: #fff; width: 26px; height: 26px;
  border-radius: 50%; font-size: 0.8rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.cart-items { min-height: 80px; margin-bottom: 1rem; }
.cart-empty { text-align: center; padding: 2rem; color: var(--text-muted); }
.cart-empty-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
.cart-item {
  display: flex; align-items: center; gap: 0.75rem;
  padding: 0.75rem 0; border-bottom: 1px solid var(--border);
}
.cart-item-name { flex: 1; font-size: 0.88rem; }
.cart-item-qty { display: flex; align-items: center; gap: 0.4rem; }
.cart-item-qty button {
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--bg-surface); border: 1px solid var(--border);
  color: var(--text-primary); font-size: 0.9rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}
.cart-item-qty button:hover { border-color: var(--gold); color: var(--gold); }
.cart-item-qty span { font-size: 0.88rem; min-width: 20px; text-align: center; }
.cart-item-price { font-size: 0.9rem; color: var(--gold); font-weight: 600; margin-left: 0.5rem; }
.cart-totals { border-top: 1px solid var(--border); padding-top: 1rem; margin-bottom: 1.25rem; }
.cart-total-row { display: flex; justify-content: space-between; padding: 0.3rem 0; font-size: 0.88rem; color: var(--text-muted); }
.cart-total-final { font-size: 1rem; font-weight: 700; color: var(--gold); border-top: 1px solid var(--border); margin-top: 0.5rem; padding-top: 0.5rem; }
.del-input { margin-bottom: 0.75rem; }
.delivery-form h4 { font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.75rem; }
.payment-methods { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem; }
.pay-opt {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer; transition: var(--transition);
  font-size: 0.82rem;
}
.pay-opt:hover { border-color: var(--gold); }
.pay-opt input { display: none; }
.pay-opt:has(input:checked) { border-color: var(--gold); background: rgba(201,168,76,0.08); color: var(--gold); }

/* ===== ABOUT SECTION ===== */
.about-section { background: var(--bg-card); }
.about-decoration {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.05), transparent 60%);
  pointer-events: none;
}
.about-container { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; max-width: 1200px; margin: 0 auto; }
.about-visual { display: flex; flex-direction: column; align-items: center; gap: 2rem; }
.about-badge-ring {
  width: 220px; height: 220px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  animation: ringRotate 20s linear infinite;
}
.about-badge-ring::before {
  content: '';
  position: absolute; inset: -8px;
  border-radius: 50%;
  border: 1px dashed rgba(201,168,76,0.3);
}
@keyframes ringRotate { from { transform: rotate(0) } to { transform: rotate(360deg) } }
.about-badge-inner {
  width: 180px; height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bg-surface), var(--bg-dark));
  border: 1px solid var(--border);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  animation: ringRotate 20s linear infinite reverse;
}
.about-badge-text { font-size: 0.7rem; letter-spacing: 0.3em; color: var(--text-muted); text-transform: uppercase; }
.about-badge-num { font-family: var(--font-display); font-size: 3rem; font-weight: 700; color: var(--gold); line-height: 1; }
.about-badge-sub { font-size: 0.65rem; letter-spacing: 0.2em; color: var(--text-muted); text-transform: uppercase; }
.about-features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; }
.feat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  text-align: center;
  transition: var(--transition);
}
.feat-card:hover { border-color: var(--border-hover); transform: translateY(-4px); }
.feat-icon { font-size: 1.8rem; margin-bottom: 0.5rem; }
.feat-title { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem; }
.feat-desc { font-size: 0.78rem; color: var(--text-muted); }
.about-text { color: var(--text-light); font-size: 1rem; margin-bottom: 1.25rem; line-height: 1.8; }
.about-contacts { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
.about-contact-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--border);
  border-radius: 50px; font-size: 0.82rem;
  color: var(--text-light);
  background: var(--bg-surface);
  transition: var(--transition);
}
.about-contact-btn:hover { border-color: var(--gold); color: var(--gold); }
.about-wa { background: rgba(37,211,102,0.1); border-color: rgba(37,211,102,0.3); color: #25D366; }
.about-wa:hover { border-color: #25D366; color: #25D366; }

/* REVIEWS */
.reviews-section { margin-top: 6rem; }
.reviews-track-wrap { overflow: hidden; margin-top: 3rem; }
.reviews-track { display: flex; gap: 1.5rem; animation: reviewScroll 30s linear infinite; }
.reviews-track:hover { animation-play-state: paused; }
@keyframes reviewScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }
.review-card {
  min-width: 320px; flex-shrink: 0;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: var(--transition);
}
.review-card:hover { border-color: var(--border-hover); transform: translateY(-4px); }
.review-stars { color: var(--gold); font-size: 1rem; margin-bottom: 0.75rem; }
.review-text { font-size: 0.9rem; color: var(--text-light); line-height: 1.7; margin-bottom: 1.25rem; font-style: italic; }
.review-author { display: flex; align-items: center; gap: 0.75rem; }
.review-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--fire));
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700; color: #000; flex-shrink: 0;
}
.review-name { font-size: 0.88rem; font-weight: 600; color: var(--text-primary); }
.review-loc { font-size: 0.78rem; color: var(--text-muted); }

/* ===== CONTACT SECTION ===== */
.contact-section { background: var(--bg-dark); }
.contact-container { max-width: 1200px; margin: 0 auto; }
.contact-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 3rem; }
.contact-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
}
.contact-card:hover { border-color: var(--border-hover); transform: translateY(-4px); box-shadow: var(--glow); }
.contact-card-icon { font-size: 2rem; margin-bottom: 1rem; }
.contact-card-title { font-size: 0.78rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.5rem; }
.contact-card-text { font-size: 0.88rem; color: var(--text-light); line-height: 1.6; }
.contact-map { border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border); height: 350px; }
.contact-map iframe { width: 100%; height: 100%; filter: grayscale(0.8) contrast(1.1); }

/* ===== ADMIN SECTION ===== */
.admin-section { background: var(--bg-card); }
.admin-login { display: flex; justify-content: center; }
.admin-login-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 3rem;
  width: 100%; max-width: 420px;
  text-align: center;
  position: relative; overflow: hidden;
}
.admin-login-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--gold), var(--fire), var(--gold));
}
.admin-login-logo { font-size: 3rem; margin-bottom: 1rem; }
.admin-login-card h3 { font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 0.5rem; }
.admin-login-card p { color: var(--text-muted); font-size: 0.88rem; margin-bottom: 2rem; }
.admin-login-card .form-group { text-align: left; }
.login-error { background: rgba(220,53,69,0.1); border: 1px solid rgba(220,53,69,0.3); color: #ff6b6b; padding: 0.5rem 1rem; border-radius: var(--radius); font-size: 0.85rem; margin-bottom: 1rem; }
.admin-hint { font-size: 0.78rem; color: var(--text-muted); margin-top: 1rem; }
.admin-dashboard { max-width: 1400px; margin: 0 auto; }
.admin-top-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: 2rem;
}
.admin-top-title { font-family: var(--font-heading); font-size: 1.2rem; }
.admin-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem; }
.admin-stat-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem; text-align: center;
}
.admin-stat-num { font-family: var(--font-display); font-size: 2.5rem; font-weight: 700; color: var(--gold); }
.admin-stat-label { font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.25rem; }
.admin-tabs { display: flex; gap: 0.5rem; margin-bottom: 2rem; flex-wrap: wrap; }
.admin-tab {
  padding: 0.6rem 1.5rem;
  background: transparent; border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 0.82rem; letter-spacing: 0.1em; text-transform: uppercase;
  border-radius: 50px; cursor: pointer;
  transition: var(--transition);
}
.admin-tab.active, .admin-tab:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,0.08); }
.admin-panel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
.admin-panel-header h3 { font-family: var(--font-heading); font-size: 1.3rem; }
.admin-table-wrap { overflow-x: auto; }
.admin-table { width: 100%; border-collapse: collapse; }
.admin-table thead tr { background: var(--bg-surface); }
.admin-table th {
  text-align: left; padding: 1rem;
  font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--gold); border-bottom: 1px solid var(--border);
  font-weight: 600;
}
.admin-table td { padding: 0.9rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 0.88rem; color: var(--text-light); vertical-align: middle; }
.admin-table tr:hover td { background: rgba(201,168,76,0.03); }
.admin-table-img { width: 48px; height: 48px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border); }
.admin-table-emoji { font-size: 2rem; }
.admin-action-btns { display: flex; gap: 0.5rem; }
.admin-edit-btn {
  padding: 0.35rem 0.8rem;
  background: rgba(201,168,76,0.1); border: 1px solid var(--border);
  color: var(--gold); border-radius: 6px; cursor: pointer;
  font-size: 0.78rem; transition: var(--transition);
  font-family: var(--font-body);
}
.admin-edit-btn:hover { background: rgba(201,168,76,0.2); }
.admin-del-btn {
  padding: 0.35rem 0.8rem;
  background: rgba(220,53,69,0.1); border: 1px solid rgba(220,53,69,0.2);
  color: #ff6b6b; border-radius: 6px; cursor: pointer;
  font-size: 0.78rem; transition: var(--transition);
  font-family: var(--font-body);
}
.admin-del-btn:hover { background: rgba(220,53,69,0.2); }
.admin-input { background: var(--bg-card); border-color: var(--border); }
.settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.settings-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
}
.settings-card h4 { font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 1.5rem; color: var(--gold); }

/* ===== MODAL ===== */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(10px);
  z-index: 5000;
  display: flex; align-items: center; justify-content: center;
  padding: 1.5rem;
}
.modal {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  width: 100%; max-width: 600px;
  max-height: 90vh; overflow-y: auto;
  position: relative;
  animation: modalIn 0.3s ease;
}
@keyframes modalIn { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
.modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; background: var(--bg-card); z-index: 1;
}
.modal-header h3 { font-family: var(--font-heading); font-size: 1.3rem; }
.modal-close { background: none; border: none; color: var(--text-muted); font-size: 1.2rem; cursor: pointer; transition: var(--transition); }
.modal-close:hover { color: var(--text-primary); }
.modal-body { padding: 2rem; }
.modal-footer { padding: 1.5rem 2rem; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; gap: 1rem; }
.image-upload-wrap { }
.image-preview {
  border: 2px dashed var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  min-height: 150px;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg-surface);
  position: relative;
  transition: var(--transition);
  margin-bottom: 0.5rem;
}
.image-preview:hover { border-color: var(--gold); }
.image-preview-placeholder { text-align: center; padding: 2rem; color: var(--text-muted); cursor: pointer; width: 100%; }
.image-preview img { width: 100%; height: 180px; object-fit: cover; }
.image-preview .preview-change {
  position: absolute; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: var(--transition);
  cursor: pointer; color: white; font-size: 0.85rem;
}
.image-preview:hover .preview-change { opacity: 1; }
.image-or { font-size: 0.78rem; color: var(--text-muted); text-align: center; margin-bottom: 0.5rem; }

/* ===== AI ASSISTANT ===== */
.assistant-bubble {
  position: fixed; bottom: 5.5rem; right: 1.5rem;
  z-index: 4000;
  cursor: pointer;
}
.assistant-bubble-inner {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--fire));
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 8px 25px rgba(201,168,76,0.4);
  transition: var(--transition);
  position: relative;
}
.assistant-bubble-inner:hover { transform: scale(1.1); }
.assistant-bubble-icon { font-size: 1.6rem; }
.assistant-bubble-pulse {
  position: absolute; inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  animation: bubblePulse 2s ease-in-out infinite;
}
@keyframes bubblePulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 0; }
}
.assistant-panel {
  position: fixed; bottom: 8rem; right: 1.5rem;
  width: 360px; max-height: 550px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  z-index: 4000;
  display: flex; flex-direction: column;
  transform: scale(0.9) translateY(20px);
  opacity: 0; visibility: hidden;
  transition: var(--transition);
  overflow: hidden;
}
.assistant-panel.open { transform: scale(1) translateY(0); opacity: 1; visibility: visible; }
.assistant-header {
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, rgba(201,168,76,0.1), rgba(232,93,4,0.08));
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  flex-shrink: 0;
}
.assistant-header-info { display: flex; align-items: center; gap: 0.75rem; }
.assistant-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--fire));
  display: flex; align-items: center; justify-content: center; font-size: 1.3rem;
}
.assistant-name { font-weight: 600; font-size: 0.95rem; }
.assistant-status { font-size: 0.75rem; color: #4CAF50; }
.assistant-close { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1rem; transition: var(--transition); }
.assistant-close:hover { color: var(--text-primary); }
.assistant-messages { flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem; scrollbar-width: thin; scrollbar-color: var(--border) transparent; }
.assistant-msg { display: flex; }
.assistant-msg-bot { justify-content: flex-start; }
.assistant-msg-user { justify-content: flex-end; }
.msg-bubble {
  max-width: 85%;
  padding: 0.75rem 1rem;
  border-radius: 16px;
  font-size: 0.88rem; line-height: 1.5;
}
.assistant-msg-bot .msg-bubble {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-bottom-left-radius: 4px;
}
.assistant-msg-user .msg-bubble {
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: #000; font-weight: 500;
  border-bottom-right-radius: 4px;
}
.assistant-quick-btns {
  display: flex; flex-wrap: wrap; gap: 0.4rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}
.assistant-quick-btns button {
  padding: 0.3rem 0.7rem;
  background: var(--bg-surface); border: 1px solid var(--border);
  color: var(--text-light); border-radius: 50px;
  font-size: 0.78rem; cursor: pointer;
  font-family: var(--font-body);
  transition: var(--transition);
}
.assistant-quick-btns button:hover { border-color: var(--gold); color: var(--gold); }
.assistant-input-wrap {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}
.assistant-input-wrap input { flex: 1; border-radius: 50px; padding: 0.6rem 1rem; background: var(--bg-surface); }
.assistant-input-wrap button {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--fire));
  border: none; color: #000; font-size: 1rem; cursor: pointer;
  flex-shrink: 0; transition: var(--transition);
}
.assistant-input-wrap button:hover { transform: scale(1.1); }
.typing-dots { display: flex; gap: 4px; align-items: center; padding: 4px 0; }
.typing-dots span { width: 6px; height: 6px; border-radius: 50%; background: var(--text-muted); animation: typingDot 1.2s ease-in-out infinite; }
.typing-dots span:nth-child(2) { animation-delay: 0.2s; }
.typing-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typingDot { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-5px); opacity: 1; } }

/* ===== WA FLOAT ===== */
.wa-float {
  position: fixed; bottom: 1.5rem; right: 1.5rem;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #128C7E, #25D366);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 20px rgba(37,211,102,0.4);
  z-index: 3999;
  transition: var(--transition);
}
.wa-float:hover { transform: scale(1.1); }

/* ===== FOOTER ===== */
.footer { background: #050505; border-top: 1px solid var(--border); position: relative; z-index: 1; }
.footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; padding: 5rem 4rem 4rem; }
.footer-logo { font-family: var(--font-display); font-size: 2rem; font-weight: 700; margin-bottom: 1rem; }
.footer-logo span { background: linear-gradient(135deg, var(--gold), var(--fire)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.footer-brand p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; max-width: 280px; margin-bottom: 1.5rem; }
.footer-socials { display: flex; gap: 0.75rem; }
.footer-socials a { width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 1rem; transition: var(--transition); }
.footer-socials a:hover { border-color: var(--gold); background: rgba(201,168,76,0.1); }
.footer-col-title { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; }
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.footer-col ul li, .footer-col ul li a { font-size: 0.88rem; color: var(--text-muted); transition: var(--transition); }
.footer-col ul li a:hover { color: var(--gold); }
.footer-bottom { padding: 1.5rem 4rem; border-top: 1px solid rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.footer-bottom span { font-size: 0.8rem; color: var(--text-muted); }

/* ===== NAV LOGO IMAGE ===== */
.nav-logo { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
.nav-logo-img {
  height: 38px; width: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
}

/* ===== HERO LOGO ===== */
.hero-logo-wrap { margin-bottom: 1.5rem; animation: fadeInUp 0.8s ease 0.1s both; }
.hero-logo {
  height: 100px; width: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border);
  box-shadow: 0 0 30px rgba(201,168,76,0.3);
  animation: heroLogoPulse 3s ease-in-out infinite;
}
@keyframes heroLogoPulse {
  0%,100% { box-shadow: 0 0 20px rgba(201,168,76,0.3); }
  50% { box-shadow: 0 0 50px rgba(201,168,76,0.6); }
}

/* ===== SIZE BUTTONS ON MENU CARDS ===== */
.menu-size-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 0.4rem;
  margin-top: 0.75rem;
}
@media (max-width: 768px) {
  .menu-size-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 0.4rem;
  }
}
.size-btn {
  display: flex; flex-direction: column; align-items: center;
  padding: 0.5rem 0.3rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-family: var(--font-body);
}
.size-btn:hover {
  border-color: var(--gold);
  background: rgba(201,168,76,0.1);
  transform: translateY(-2px);
}
@media (max-width: 768px) {
  .size-btn {
    flex-direction: row;
    align-items: center;
    gap: 0.2rem;
    padding: 0.28rem 0.45rem;
    border-radius: 5px;
    flex: 0 0 auto;
  }
  .size-btn:hover { transform: none; }
}
.size-label {
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.2rem;
}
.size-price {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--gold);
}
@media (max-width: 768px) {
  .size-label {
    font-size: 0.62rem;
    letter-spacing: 0.03em;
    margin-bottom: 0;
    color: var(--text-light);
  }
  .size-label::after { content: ':'; }
  .size-price {
    font-size: 0.68rem;
    font-weight: 700;
  }
}

/* ===== ORDER SECTION SIZE PILLS ===== */
.order-size-pills { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.2rem; }
.order-size-pill {
  font-size: 0.72rem;
  padding: 0.2rem 0.5rem;
  background: rgba(201,168,76,0.08);
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--gold);
  cursor: pointer;
  font-family: var(--font-body);
  text-align: left;
  transition: var(--transition);
}
.order-size-pill:hover { background: rgba(201,168,76,0.18); border-color: var(--gold); }

/* ===== SCROLL REVEAL ===== */
.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ===== TOAST ===== */
.toast {
  position: fixed; bottom: 5rem; left: 50%; transform: translateX(-50%) translateY(20px);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem; border-radius: 50px;
  font-size: 0.88rem; z-index: 9000;
  opacity: 0; transition: all 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1200px) {
  .booking-container, .about-container { grid-template-columns: 1fr; gap: 3rem; }
  .order-container { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .contact-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .navbar { padding: 1rem 2rem; }
  .navbar.scrolled { padding: 0.7rem 2rem; }
  .nav-links, .nav-wa { display: none; }
  .hamburger { display: flex; }
  .hero { padding: 5rem 2rem 7rem; }
  .settings-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 2rem; }
  .footer-bottom { padding: 1rem 2rem; }
  .admin-stats { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .hero-title-line { font-size: 2.5rem; }
  .hero-title-degree { font-size: 5rem; }
  .assistant-panel { width: calc(100vw - 2rem); right: 1rem; bottom: 7rem; }
  .payment-methods { grid-template-columns: 1fr; }
  .table-types { grid-template-columns: 1fr 1fr; }
  .contact-cards { grid-template-columns: 1fr; }
  .hero-stats { gap: 1rem; }
  .hero-stat-num { font-size: 1.8rem; }
}

/* Mobile nav open */
.nav-links.open {
  display: flex; flex-direction: column;
  position: fixed; inset: 0; top: 60px;
  background: rgba(10,10,10,0.98);
  backdrop-filter: blur(20px);
  align-items: center; justify-content: center;
  gap: 1.5rem; z-index: 999;
}
.nav-links.open .nav-link { font-size: 1.2rem; }
