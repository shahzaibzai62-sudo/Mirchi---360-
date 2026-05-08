/* =============================================
   MIRCHI 360° — app.js  (Firebase Edition)
============================================= */
'use strict';

// ===== FIREBASE =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, setDoc, deleteDoc, doc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const _fbApp = initializeApp({
  apiKey: "AIzaSyC7I-qQ7vFWOfsaAGYh9Q35RkV60j_hkQA",
  authDomain: "mirchi-360-new.firebaseapp.com",
  projectId: "mirchi-360-new",
  storageBucket: "mirchi-360-new.firebasestorage.app",
  messagingSenderId: "521251453403",
  appId: "1:521251453403:web:0d697e7c1a14528f8a8ffe"
});
const db = getFirestore(_fbApp);

// ===== STATE =====
let menuItems = [];
let bookings = [];
let cart = [];
let currentMenuFilter = 'all';
let currentOrderFilter = 'all';
let adminLoggedIn = false;
let settings = JSON.parse(localStorage.getItem('mirchi_settings')) || { waNumber: '923324187360', deliveryCharge: 100 };
let adminCreds = JSON.parse(localStorage.getItem('mirchi_creds')) || { user: 'admin', pass: 'mirchi360' };
let selectedTableType = '';
let conversationHistory = [];

// ===== DEFAULT MENU — Full menu from images with sizes & photos =====
function getDefaultMenu() {
  return [
    // ───── DESI ITEMS ─────
    { name: 'Royal Sindhi Chicken Biryani', category: 'Desi Items', emoji: '🍗', desc: 'Authentic Sindhi dum biryani with saffron & whole spices', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80', sizes: [{label:'Half',price:1050},{label:'Full',price:1800}] },
    { name: 'Chicken Reshmi Paneer Handi', category: 'Desi Items', emoji: '🫕', desc: 'Creamy reshmi chicken with soft paneer in rich gravy', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80', sizes: [{label:'Half',price:1300},{label:'Full',price:2300}] },
    { name: 'Mutton Biryani', category: 'Desi Items', emoji: '🍖', desc: 'Slow-cooked mutton biryani with aromatic basmati rice', image: 'https://images.unsplash.com/photo-1631515242808-497c3fbd5b49?w=400&q=80', sizes: [{label:'Half',price:1250},{label:'Full',price:2800}] },
    { name: 'Royal Chicken Handi', category: 'Desi Items', emoji: '🫕', desc: 'Premium chicken handi with butter & cream', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Half',price:1250},{label:'Full',price:2300}] },
    { name: 'Mutton Handi', category: 'Desi Items', emoji: '🍖', desc: 'Tender mutton slow-cooked in clay pot with desi spices', image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=400&q=80', sizes: [{label:'Half',price:2100},{label:'Full',price:3600}] },
    { name: 'Chicken Makhni Handi', category: 'Desi Items', emoji: '🫕', desc: 'Velvety butter chicken makhni in a rich tomato gravy', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80', sizes: [{label:'Half',price:1300},{label:'Full',price:2800}] },
    { name: 'Daal Makhni', category: 'Desi Items', emoji: '🥘', desc: 'Overnight slow-cooked black lentil with butter', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80', sizes: [{label:'Half',price:800},{label:'Full',price:1400}] },
    { name: 'Chicken White Handi', category: 'Desi Items', emoji: '🫕', desc: 'Creamy white chicken handi with aromatic spices', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Half',price:1300},{label:'Full',price:2200}] },
    { name: 'Vegetable Biryani', category: 'Desi Items', emoji: '🥗', desc: 'Garden fresh vegetable dum biryani', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80', sizes: [{label:'Half',price:800},{label:'Full',price:1400}] },
    { name: 'Tikka Biryani', category: 'Desi Items', emoji: '🍗', desc: 'Chargrilled tikka pieces layered in fragrant biryani', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80', sizes: [{label:'Half',price:1150},{label:'Full',price:2000}] },
    { name: 'Nawabi Biryani', category: 'Desi Items', emoji: '👑', desc: 'Royal Nawabi style dum biryani with whole spices', image: 'https://images.unsplash.com/photo-1631515242808-497c3fbd5b49?w=400&q=80', sizes: [{label:'Half',price:1300},{label:'Full',price:2300}] },

    // ───── KARAHI ─────
    { name: 'Chicken Karahi', category: 'Karahi', emoji: '🌶️', desc: 'Classic spicy chicken karahi with fresh tomatoes & green chillies', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80', sizes: [{label:'Small',price:1200},{label:'Medium',price:2050},{label:'Full',price:3800}] },
    { name: 'Chicken Peshawari Karahi', category: 'Karahi', emoji: '🌶️', desc: 'Authentic Peshawari style karahi with thick gravy', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80', sizes: [{label:'Small',price:1200},{label:'Medium',price:2050},{label:'Full',price:3800}] },
    { name: 'Chicken White Karahi', category: 'Karahi', emoji: '🤍', desc: 'Creamy white karahi with yogurt & mild spices', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Small',price:1250},{label:'Medium',price:2150},{label:'Full',price:2500}] },
    { name: 'Chicken Lahori Karahi', category: 'Karahi', emoji: '🔴', desc: 'Bold Lahori style karahi with tangy tomato base', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80', sizes: [{label:'Small',price:1250},{label:'Medium',price:2150},{label:'Full',price:2500}] },
    { name: 'Chicken Brown Karahi', category: 'Karahi', emoji: '🍖', desc: 'Deep brown karahi with caramelised onion masala', image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=400&q=80', sizes: [{label:'Small',price:1200},{label:'Medium',price:2050},{label:'Full',price:2300}] },
    { name: 'Mutton Peshawari Karahi', category: 'Karahi', emoji: '🐑', desc: 'Slow-cooked mutton in authentic Peshawari style', image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=400&q=80', sizes: [{label:'Small',price:2050},{label:'Medium',price:3800},{label:'Full',price:3800}] },
    { name: 'Mutton White Karahi', category: 'Karahi', emoji: '🤍', desc: 'Creamy mutton karahi in white yogurt base', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Small',price:2050},{label:'Medium',price:3800},{label:'Full',price:3800}] },
    { name: 'Mutton Lahori Karahi', category: 'Karahi', emoji: '🔴', desc: 'Lahori mutton karahi with signature spice blend', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80', sizes: [{label:'Small',price:2150},{label:'Medium',price:3900},{label:'Full',price:3900}] },
    { name: 'Mutton Brown Karahi', category: 'Karahi', emoji: '🍖', desc: 'Rich brown mutton karahi with whole spices', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80', sizes: [{label:'Small',price:2050},{label:'Medium',price:3800},{label:'Full',price:3800}] },

    // ───── BBQ ─────
    { name: 'Chicken Tikka', category: 'BBQ', emoji: '🔴', desc: 'Tandoor-grilled marinated chicken tikka with raita', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Tikka Boti', category: 'BBQ', emoji: '🍢', desc: 'Tender boneless tikka boti pieces from the tandoor', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Reshmi Kabab', category: 'BBQ', emoji: '🍢', desc: 'Silky smooth reshmi kabab with cream & cheese', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Afghani Kabab', category: 'BBQ', emoji: '🏔️', desc: 'Authentic Afghani style kabab with yogurt marinade', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Gola Kabab', category: 'BBQ', emoji: '⚫', desc: 'Round gola kabab with minced meat & spices', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Behari Boti', category: 'BBQ', emoji: '🔥', desc: 'Juicy Behari style boti with black pepper marinade', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Green Boti', category: 'BBQ', emoji: '💚', desc: 'Herb-marinated green boti with coriander & mint', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Malai Boti', category: 'BBQ', emoji: '🤍', desc: 'Cream-marinated malai boti — soft & melt-in-mouth', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Namkeen Boti', category: 'BBQ', emoji: '🧂', desc: 'Simply seasoned namkeen boti with lemon & salt', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'BBQ Shashlick', category: 'BBQ', emoji: '🔥', desc: 'Classic shashlick skewers with peppers & onions', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', sizes: [{label:'Per Piece',price:600}] },
    { name: 'Dhaka Chicken', category: 'BBQ', emoji: '🍗', desc: 'Special Dhaka style chicken with unique spice mix', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80', sizes: [{label:'Per Piece',price:860}] },
    { name: 'Chicken Wings', category: 'BBQ', emoji: '🍗', desc: 'Crispy BBQ chicken wings with hot sauce', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80', sizes: [{label:'Per Piece',price:600}] },
    { name: 'BBQ Platter (Half)', category: 'BBQ', emoji: '🔥', desc: 'Mixed BBQ platter — tikka, boti, kabab & wings', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', sizes: [{label:'Half',price:2800}] },
    { name: 'BBQ Platter (Full)', category: 'BBQ', emoji: '🔥', desc: 'Full mixed BBQ platter for the whole family', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', sizes: [{label:'Full',price:4300}] },

    // ───── ROLLS ─────
    { name: 'Chicken Roll', category: 'Rolls', emoji: '🌯', desc: 'Grilled chicken rolled in fresh paratha with chutney', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80', sizes: [{label:'Single',price:280}] },
    { name: 'Chicken Behari Boti Roll', category: 'Rolls', emoji: '🌯', desc: 'Behari boti wrapped in crispy paratha', image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80', sizes: [{label:'Single',price:290}] },
    { name: 'Fish N Chips Roll', category: 'Rolls', emoji: '🐟', desc: 'Crispy fish with chips in a paratha roll', image: 'https://images.unsplash.com/photo-1536510233921-8e18a7b32e14?w=400&q=80', sizes: [{label:'Single',price:280}] },
    { name: 'Chicken Malai Boti Roll', category: 'Rolls', emoji: '🌯', desc: 'Creamy malai boti rolled in soft paratha', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80', sizes: [{label:'Single',price:290}] },
    { name: 'Afghani Reshmi Kabab Roll', category: 'Rolls', emoji: '🌯', desc: 'Afghani reshmi kabab in a paratha roll', image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80', sizes: [{label:'Single',price:280}] },
    { name: 'Vegetable Roll', category: 'Rolls', emoji: '🥗', desc: 'Fresh vegetable wrap with mint chutney', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80', sizes: [{label:'Single',price:210}] },

    // ───── FAST FOOD ─────
    { name: 'Zinger Burger', category: 'Fast Food', emoji: '🍔', desc: 'Crispy zinger fillet with signature spicy sauce', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', sizes: [{label:'Single',price:530}] },
    { name: 'Zinger Extreme Burger', category: 'Fast Food', emoji: '🍔', desc: 'Double-stacked extreme zinger with extra sauce', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80', sizes: [{label:'Single',price:700}] },
    { name: 'Chicken Burger', category: 'Fast Food', emoji: '🍔', desc: 'Classic grilled chicken burger with fresh veggies', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', sizes: [{label:'Single',price:430}] },
    { name: 'Steak Burger', category: 'Fast Food', emoji: '🥩', desc: 'Juicy beef steak burger with mustard & cheese', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80', sizes: [{label:'Single',price:510}] },
    { name: 'Supreme Burger', category: 'Fast Food', emoji: '👑', desc: 'The ultimate supreme burger — fully loaded', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', sizes: [{label:'Single',price:700}] },
    { name: 'Chicken Broast', category: 'Fast Food', emoji: '🍗', desc: 'Golden crispy pressure-fried broast chicken', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80', sizes: [{label:'Single',price:530}] },
    { name: 'Zinger Club Sandwich', category: 'Fast Food', emoji: '🥪', desc: 'Triple-layer zinger club with fries', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', sizes: [{label:'Single',price:480}] },
    { name: 'BBQ Club Sandwich', category: 'Fast Food', emoji: '🥪', desc: 'BBQ chicken triple club sandwich', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', sizes: [{label:'Single',price:500}] },
    { name: 'Vegetable Club Sandwich', category: 'Fast Food', emoji: '🥗', desc: 'Fresh vegetable club sandwich', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', sizes: [{label:'Single',price:380}] },
    { name: 'Mexican Sandwich', category: 'Fast Food', emoji: '🌮', desc: 'Spicy Mexican-style chicken sandwich', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', sizes: [{label:'Single',price:380}] },
    { name: 'Mexican Vegetable Sandwich', category: 'Fast Food', emoji: '🥗', desc: 'Veggie Mexican sandwich with jalapeños', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', sizes: [{label:'Single',price:380}] },

    // ───── APPETIZERS ─────
    { name: 'Spicy Wings', category: 'Appetizers', emoji: '🌶️', desc: 'Fiery hot chicken wings with dipping sauce', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80', sizes: [{label:'Per Pcs',price:450}] },
    { name: 'Honey Wings', category: 'Appetizers', emoji: '🍯', desc: 'Sweet honey glazed crispy chicken wings', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80', sizes: [{label:'Per Pcs',price:480}] },
    { name: 'Fish N Chips', category: 'Appetizers', emoji: '🐟', desc: 'Golden battered fish with crispy chips', image: 'https://images.unsplash.com/photo-1536510233921-8e18a7b32e14?w=400&q=80', sizes: [{label:'Portion',price:1150}] },
    { name: 'Finger Fish', category: 'Appetizers', emoji: '🐟', desc: 'Crispy fish fingers with tartar sauce', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80', sizes: [{label:'Portion',price:1150}] },
    { name: 'French Fries', category: 'Appetizers', emoji: '🍟', desc: 'Golden crispy French fries with ketchup', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80', sizes: [{label:'Portion',price:300}] },
    { name: 'Chicken Cheese Balls', category: 'Appetizers', emoji: '🧀', desc: 'Molten cheese-filled chicken balls', image: 'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=400&q=80', sizes: [{label:'Portion',price:800}] },
    { name: 'Hot N Sour Soup', category: 'Appetizers', emoji: '🍲', desc: 'Chinese style hot & sour soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', sizes: [{label:'Bowl',price:280}] },
    { name: 'Chicken Corn Soup', category: 'Appetizers', emoji: '🌽', desc: 'Creamy chicken & sweet corn soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', sizes: [{label:'Bowl',price:280}] },
    { name: 'Mirchi 360° Special Soup', category: 'Appetizers', emoji: '🌶️', desc: 'Our signature spicy special soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', sizes: [{label:'Bowl',price:280}] },
    { name: 'Family Bowl Soup', category: 'Appetizers', emoji: '🫕', desc: 'Large family-sized soup bowl', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', sizes: [{label:'Large',price:1200}] },

    // ───── CHINESE ─────
    { name: 'Chicken Dry Chili with Rice', category: 'Chinese', emoji: '🌶️', desc: 'Wok-fried dry chili chicken served with steamed rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Chicken Mirchi 360° Special with Rice', category: 'Chinese', emoji: '🌶️', desc: 'Signature Mirchi 360° Chinese special', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Chicken Chili Onion with Rice', category: 'Chinese', emoji: '🧅', desc: 'Stir-fried chicken with chili and onion', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Singaporian Rice', category: 'Chinese', emoji: '🍚', desc: 'Signature Singaporean style fried rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Chicken Manchurian with Rice', category: 'Chinese', emoji: '🍜', desc: 'Classic Manchurian gravy chicken with rice', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Chicken Fried Rice', category: 'Chinese', emoji: '🍚', desc: 'Wok-tossed egg fried rice with chicken', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:500}] },
    { name: 'Chicken Shashlick with Rice', category: 'Chinese', emoji: '🍢', desc: 'Shashlick skewers served with special rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Chicken Spagetti', category: 'Chinese', emoji: '🍝', desc: 'Desi-Chinese style chicken spaghetti', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Chicken Chowhein', category: 'Chinese', emoji: '🍜', desc: 'Classic chow mein noodles with chicken', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80', sizes: [{label:'Portion',price:1000}] },
    { name: 'Vegetable Chowhein', category: 'Chinese', emoji: '🥦', desc: 'Wok-tossed vegetable chow mein', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80', sizes: [{label:'Portion',price:600}] },
    { name: 'Vegetable Rice', category: 'Chinese', emoji: '🍚', desc: 'Mixed vegetable fried rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:470}] },
    { name: 'Plain Rice', category: 'Chinese', emoji: '🍚', desc: 'Fluffy steamed basmati rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:350}] },
    { name: 'Mac & Cheese Pasta', category: 'Chinese', emoji: '🧀', desc: 'Creamy mac and cheese pasta', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80', sizes: [{label:'Portion',price:800}] },
    { name: 'Alferado Pasta', category: 'Chinese', emoji: '🍝', desc: 'Rich white Alfredo cream pasta', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80', sizes: [{label:'Portion',price:800}] },
    { name: 'Penne Arabia', category: 'Chinese', emoji: '🍝', desc: 'Spicy Arabian style penne pasta', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80', sizes: [{label:'Portion',price:1000}] },
    { name: 'Chicken Lasagna', category: 'Chinese', emoji: '🍝', desc: 'Layered chicken lasagna with béchamel', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80', sizes: [{label:'Portion',price:1000}] },
    { name: 'Chinese Thali', category: 'Chinese', emoji: '🍱', desc: 'Full Chinese thali with rice, noodles & curry', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Asian Thali', category: 'Chinese', emoji: '🍱', desc: 'Complete Asian thali with multiple dishes', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:1100}] },

    // ───── PIZZA ─────
    { name: 'Chicken Tikka Pizza', category: 'Pizza', emoji: '🍕', desc: 'Tandoori chicken tikka on pizza with mozzarella', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', sizes: [{label:'Small',price:530},{label:'Medium',price:830},{label:'Large',price:1300}] },
    { name: 'Chicken Fajita Pizza', category: 'Pizza', emoji: '🍕', desc: 'Spicy fajita chicken with bell peppers', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', sizes: [{label:'Small',price:530},{label:'Medium',price:830},{label:'Large',price:1300}] },
    { name: 'Chicken Super Supreme Pizza', category: 'Pizza', emoji: '🍕', desc: 'Loaded super supreme with premium toppings', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', sizes: [{label:'Small',price:530},{label:'Medium',price:850},{label:'Large',price:1300}] },
    { name: 'Bonfire Pizza', category: 'Pizza', emoji: '🔥', desc: 'Smoky bonfire chicken pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', sizes: [{label:'Small',price:330},{label:'Medium',price:1000},{label:'Large',price:1500}] },
    { name: 'Special Pizza', category: 'Pizza', emoji: '⭐', desc: 'Our house special pizza with unique toppings', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', sizes: [{label:'Small',price:600},{label:'Medium',price:1000},{label:'Large',price:1500}] },
    { name: 'Stuffed Kebab Pizza', category: 'Pizza', emoji: '🍕', desc: 'Pizza stuffed with juicy seekh kebab', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', sizes: [{label:'Small',price:600},{label:'Medium',price:1000},{label:'Large',price:1600}] },
    { name: 'Afghani Pizza', category: 'Pizza', emoji: '🏔️', desc: 'Afghani style pizza with reshmi chicken', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', sizes: [{label:'Small',price:560},{label:'Medium',price:900},{label:'Large',price:1450}] },
    { name: 'Stuffed Crust Pizza', category: 'Pizza', emoji: '🧀', desc: 'Cheese-stuffed crust pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', sizes: [{label:'Small',price:530},{label:'Medium',price:850},{label:'Large',price:1300}] },
    { name: 'Vegetable Pizza', category: 'Pizza', emoji: '🥗', desc: 'Garden fresh vegetable pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', sizes: [{label:'Small',price:530},{label:'Medium',price:850},{label:'Large',price:1300}] },
    { name: 'Malai Pizza', category: 'Pizza', emoji: '🤍', desc: 'Creamy malai chicken pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80', sizes: [{label:'Small',price:600},{label:'Medium',price:1100},{label:'Large',price:1600}] },
    { name: 'Behari Spring Roll Pizza', category: 'Pizza', emoji: '🌯', desc: 'Unique Behari spring roll crust pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', sizes: [{label:'Medium',price:600}] },
    { name: 'Pizza Fries', category: 'Pizza', emoji: '🍟', desc: 'Loaded pizza-style cheese fries', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80', sizes: [{label:'Portion',price:600}] },

    // ───── FISH ─────
    { name: 'BBQ Fish Sanghar', category: 'Fish', emoji: '🐟', desc: 'Whole BBQ fish Sanghar-style — caught fresh daily', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80', sizes: [{label:'Whole',price:3000}] },

    // ───── VEGETABLE ─────
    { name: 'Paner Handi', category: 'Vegetable', emoji: '🧀', desc: 'Creamy paneer handi with rich gravy', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Paneer Palak', category: 'Vegetable', emoji: '🥬', desc: 'Fresh spinach with soft paneer cubes', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80', sizes: [{label:'Portion',price:1050}] },
    { name: 'Paneer Mughlai', category: 'Vegetable', emoji: '👑', desc: 'Royal Mughlai style creamy paneer', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Paneer Achari', category: 'Vegetable', emoji: '🫙', desc: 'Tangy pickle-spiced paneer curry', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80', sizes: [{label:'Portion',price:1100}] },
    { name: 'Paneer Stuff', category: 'Vegetable', emoji: '🧀', desc: 'Stuffed paneer in creamy tomato gravy', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Portion',price:750}] },
    { name: 'Paneer Nachos', category: 'Vegetable', emoji: '🫙', desc: 'Crispy nachos topped with paneer', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80', sizes: [{label:'Portion',price:550}] },
    { name: 'Vegetable Cutuls', category: 'Vegetable', emoji: '🥗', desc: 'Crispy mixed vegetable cutlets', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80', sizes: [{label:'Portion',price:600}] },
    { name: 'Malai Kofta', category: 'Vegetable', emoji: '🥘', desc: 'Soft vegetable kofta in malai gravy', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Portion',price:800}] },
    { name: 'Vegetable Kofta Handi', category: 'Vegetable', emoji: '🫕', desc: 'Vegetable kofta in traditional handi', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80', sizes: [{label:'Portion',price:1000}] },
    { name: 'Vegetable Achari Handi', category: 'Vegetable', emoji: '🫙', desc: 'Tangy achari spiced vegetable handi', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80', sizes: [{label:'Portion',price:900}] },
    { name: 'Vegetable White Handi', category: 'Vegetable', emoji: '🤍', desc: 'Creamy white gravy vegetable handi', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80', sizes: [{label:'Portion',price:900}] },
    { name: 'Vegetable Cheese Cutuls', category: 'Vegetable', emoji: '🧀', desc: 'Cheese-stuffed vegetable cutlets', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80', sizes: [{label:'Portion',price:900}] },
    { name: 'Vegetable Peri Bites', category: 'Vegetable', emoji: '🌶️', desc: 'Spicy peri peri vegetable bites', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80', sizes: [{label:'Portion',price:750}] },
    { name: 'Mirchi 360° Yakhni Rice', category: 'Vegetable', emoji: '🍚', desc: 'Signature yakhni rice with aromatic spices', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80', sizes: [{label:'Portion',price:600}] },
    { name: 'Vegetable Platter', category: 'Vegetable', emoji: '🥗', desc: 'Mixed vegetable platter for the table', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80', sizes: [{label:'Platter',price:800}] },
    { name: 'Dynamite Chicken', category: 'Vegetable', emoji: '💥', desc: 'Explosive spicy dynamite chicken bites', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80', sizes: [{label:'Portion',price:700}] },

    // ───── SALADS ─────
    { name: 'Russian Salad', category: 'Salads', emoji: '🥗', desc: 'Creamy Russian salad with mixed vegetables', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', sizes: [{label:'Portion',price:599}] },
    { name: 'Chicken Pineapple Salad', category: 'Salads', emoji: '🍍', desc: 'Grilled chicken with fresh pineapple salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', sizes: [{label:'Portion',price:599}] },
    { name: 'Green Salad', category: 'Salads', emoji: '🥬', desc: 'Fresh garden green salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', sizes: [{label:'Portion',price:150}] },
    { name: 'Raita', category: 'Salads', emoji: '🥣', desc: 'Chilled yogurt raita with boondi', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&q=80', sizes: [{label:'Portion',price:150}] },
    { name: 'Fruit Chaat', category: 'Salads', emoji: '🍎', desc: 'Fresh seasonal fruit chaat with chaat masala', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400&q=80', sizes: [{label:'Portion',price:399}] },

    // ───── PARATHA & NAAN ─────
    { name: 'Chicken Paratha', category: 'Paratha & Naan', emoji: '🫓', desc: 'Stuffed chicken paratha — crispy and flavorful', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:410}] },
    { name: 'Chicken Cheese Paratha', category: 'Paratha & Naan', emoji: '🧀', desc: 'Cheese and chicken stuffed paratha', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:450}] },
    { name: 'Aalu Paratha', category: 'Paratha & Naan', emoji: '🥔', desc: 'Classic potato stuffed paratha with butter', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:270}] },
    { name: 'Plain Paratha', category: 'Paratha & Naan', emoji: '🫓', desc: 'Simple butter paratha', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:70}] },
    { name: 'Roshni Naan', category: 'Paratha & Naan', emoji: '🫓', desc: 'Soft Roshni style naan from the tandoor', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:65}] },
    { name: 'Garlic Naan', category: 'Paratha & Naan', emoji: '🧄', desc: 'Buttery garlic naan with herb butter', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:65}] },
    { name: 'Kandhari Naan', category: 'Paratha & Naan', emoji: '🫓', desc: 'Sweet Kandhari naan with sesame seeds', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:65}] },
    { name: 'Chapati', category: 'Paratha & Naan', emoji: '🫓', desc: 'Thin whole wheat chapati', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:30}] },
    { name: 'Naan', category: 'Paratha & Naan', emoji: '🫓', desc: 'Classic tandoor-baked naan', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80', sizes: [{label:'Single',price:40}] },

    // ───── DESSERTS ─────
    { name: 'Ice Cream', category: 'Desserts', emoji: '🍦', desc: 'Premium creamy ice cream scoops', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80', sizes: [{label:'Scoop',price:320}] },
    { name: 'Kheer Mix', category: 'Desserts', emoji: '🍮', desc: 'Rich and creamy rice kheer', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80', sizes: [{label:'Small',price:800},{label:'Large',price:800}] },
    { name: 'Kunafa', category: 'Desserts', emoji: '🍯', desc: 'Crispy Middle Eastern kunafa with cheese', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80', sizes: [{label:'Portion',price:800}] },
    { name: 'Faluda', category: 'Desserts', emoji: '🍡', desc: 'Rose-flavored faluda with basil seeds', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80', sizes: [{label:'Glass',price:320}] },
    { name: 'Las e Shireen', category: 'Desserts', emoji: '🍮', desc: 'Traditional sweet las-e-shireen dessert', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80', sizes: [{label:'Portion',price:800}] },
    { name: 'Fruit Trifle', category: 'Desserts', emoji: '🍓', desc: 'Layered fruit trifle with cream and jelly', image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400&q=80', sizes: [{label:'Portion',price:800}] },

    // ───── JUICES & SHAKES ─────
    { name: 'Kit Kat Shake', category: 'Juices', emoji: '🍫', desc: 'Creamy Kit Kat chocolate milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:480}] },
    { name: 'Strawberry Shake', category: 'Juices', emoji: '🍓', desc: 'Fresh strawberry blended milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:420}] },
    { name: 'Mango Shake', category: 'Juices', emoji: '🥭', desc: 'Fresh mango blended with chilled milk', image: 'https://images.unsplash.com/photo-1542444459-80fd7b751f1c?w=400&q=80', sizes: [{label:'Glass',price:380}] },
    { name: 'Cashbury Shake', category: 'Juices', emoji: '🍫', desc: 'Cadbury chocolate milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:450}] },
    { name: 'Orange Juice', category: 'Juices', emoji: '🍊', desc: 'Freshly squeezed orange juice', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:320}] },
    { name: 'Annar Juice', category: 'Juices', emoji: '🌹', desc: 'Fresh pomegranate juice', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:410}] },
    { name: 'Oreo Shake', category: 'Juices', emoji: '🍪', desc: 'Crushed Oreo cookies blended into a shake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:450}] },
    { name: 'Apple Juice', category: 'Juices', emoji: '🍎', desc: 'Chilled fresh apple juice', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:350}] },
    { name: 'Falsa Juice', category: 'Juices', emoji: '🍇', desc: 'Tangy Falsa berry juice with salt', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:410}] },
    { name: 'Pineapple Shake', category: 'Juices', emoji: '🍍', desc: 'Fresh pineapple milkshake', image: 'https://images.unsplash.com/photo-1542444459-80fd7b751f1c?w=400&q=80', sizes: [{label:'Glass',price:400}] },
    { name: 'Grape Fruit', category: 'Juices', emoji: '🍇', desc: 'Fresh grape fruit juice', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:350}] },
    { name: 'Pinna Colada', category: 'Juices', emoji: '🥥', desc: 'Tropical pina colada blend', image: 'https://images.unsplash.com/photo-1542444459-80fd7b751f1c?w=400&q=80', sizes: [{label:'Glass',price:370}] },
    { name: 'Cheeku Shake', category: 'Juices', emoji: '🟤', desc: 'Sweet chikoo (sapodilla) milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:320}] },
    { name: 'Banana Shake', category: 'Juices', emoji: '🍌', desc: 'Thick creamy banana milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:350}] },
    { name: 'Banana Brazer', category: 'Juices', emoji: '🍌', desc: 'Banana blended with special spices', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:380}] },
    { name: 'Mint Lemon', category: 'Juices', emoji: '🍋', desc: 'Refreshing mint lemon with chaat masala', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:290}] },
    { name: 'Blueberry Shake', category: 'Juices', emoji: '🫐', desc: 'Fresh blueberry milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:480}] },
    { name: 'Fruit Refail', category: 'Juices', emoji: '🍹', desc: 'Seasonal mixed fruit drink refill', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:480}] },
    { name: 'Mirchi 360° Special Shake', category: 'Juices', emoji: '🌶️', desc: 'Signature house special shake', image: 'https://images.unsplash.com/photo-1542444459-80fd7b751f1c?w=400&q=80', sizes: [{label:'Glass',price:400}] },
    { name: 'Lovestory Shake', category: 'Juices', emoji: '❤️', desc: 'Sweet rose-flavored love story shake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:450}] },
    { name: 'Browne Shake', category: 'Juices', emoji: '🍫', desc: 'Rich chocolate brownie milkshake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:420}] },
    { name: 'Fresh Cocktail', category: 'Juices', emoji: '🍹', desc: 'Fresh seasonal fruit cocktail', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:450}] },
    { name: 'Cake Alaska Shake', category: 'Juices', emoji: '🎂', desc: 'Cake-flavored Alaska special shake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80', sizes: [{label:'Glass',price:500}] },

    // ───── BEVERAGES ─────
    { name: 'Coffee', category: 'Beverages', emoji: '☕', desc: 'Hot brewed premium coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', sizes: [{label:'Cup',price:299}] },
    { name: 'Tea', category: 'Beverages', emoji: '🍵', desc: 'Desi chai or green tea', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', sizes: [{label:'Cup',price:120}] },
    { name: 'Large Water', category: 'Beverages', emoji: '💧', desc: 'Chilled 1.5L mineral water', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80', sizes: [{label:'Bottle',price:120}] },
    { name: 'Cold Coffee', category: 'Beverages', emoji: '☕', desc: 'Iced cold coffee with whipped cream', image: 'https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=400&q=80', sizes: [{label:'Glass',price:299}] },
    { name: 'Fresh Lime', category: 'Beverages', emoji: '🍋', desc: 'Chilled fresh lime soda', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80', sizes: [{label:'Glass',price:120}] },
    { name: 'Small Water', category: 'Beverages', emoji: '💧', desc: 'Small 500ml mineral water bottle', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80', sizes: [{label:'Bottle',price:50}] },
    { name: 'Disposable Can', category: 'Beverages', emoji: '🥤', desc: 'Assorted soft drink cans', image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80', sizes: [{label:'Can',price:120}] },
    { name: 'Green Tea', category: 'Beverages', emoji: '🍵', desc: 'Premium green tea', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', sizes: [{label:'Cup',price:80}] },
    { name: 'Lemon Kehwa', category: 'Beverages', emoji: '🍋', desc: 'Aromatic lemon kehwa with cardamom', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', sizes: [{label:'Cup',price:80}] },
  ];
}

// ===== LOADER + FIREBASE =====
let _appReady = false;

function _hideLoader() {
  if (_appReady) return;
  _appReady = true;
  const l = document.getElementById('loader');
  if (l) { l.style.opacity='0'; l.style.visibility='hidden'; l.style.pointerEvents='none'; setTimeout(()=>{ try{l.remove();}catch(e){} }, 800); }
}

async function _loadAndInit() {
  try {
    // Load menu
    const menuSnap = await getDocs(collection(db, 'menu'));
    if (!menuSnap.empty) {
      menuItems = menuSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    } else {
      // First run — seed Firestore with default menu
      const defaults = getDefaultMenu();
      for (const item of defaults) {
        const ref = await addDoc(collection(db, 'menu'), item);
        menuItems.push({ id: ref.id, ...item });
      }
    }

    // Load bookings + real-time listener
    const bSnap = await getDocs(query(collection(db, 'bookings'), orderBy('timestamp', 'desc')));
    bookings = bSnap.docs.map(d => ({ id: d.id, ...d.data() }));

    onSnapshot(collection(db, 'bookings'), snap => {
      bookings = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        .sort((a,b) => (b.timestamp||0) - (a.timestamp||0));
      renderAdminBookingsTable();
      updateAdminStats();
    });

    // Real-time menu listener — updates ALL devices instantly
    onSnapshot(collection(db, 'menu'), snap => {
      menuItems = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      renderMenuGrid();
      renderOrderItems();
      renderOrderCategories();
      renderAdminMenuTable();
      updateAdminStats();
    });

  } catch(e) {
    console.error('Firebase error:', e);
    if (menuItems.length === 0) menuItems = getDefaultMenu();
  }
  _hideLoader();
  initAll();
}

window.addEventListener('load', () => _loadAndInit());
setTimeout(() => { if (!_appReady) { _hideLoader(); try { initAll(); } catch(e){} } }, 5000);

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

function getItemMinPrice(item) {
  if (item.sizes && item.sizes.length > 0) return item.sizes[0].price;
  return item.price || 0;
}

function addToCartWithSize(itemIdx, sizeIdx) {
  const item = menuItems[itemIdx];
  if (!item) return;
  const size = item.sizes ? item.sizes[sizeIdx] : { label: 'Regular', price: item.price };
  const key = item.name + '_' + size.label;
  const existing = cart.find(c => c.key === key);
  if (existing) existing.qty++;
  else cart.push({ key, name: item.name, sizeLabel: size.label, price: size.price, qty: 1 });
  renderCart();
  showToast(`${item.emoji || '🍽️'} ${item.name} (${size.label}) added!`);
}

function renderMenuGrid() {
  const grid = document.getElementById('menuGrid');
  const filtered = currentMenuFilter === 'all' ? menuItems : menuItems.filter(i => i.category === currentMenuFilter);
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-muted)">No items in this category yet.</div>';
    return;
  }
  grid.innerHTML = filtered.map((item) => {
    const realIdx = menuItems.indexOf(item);
    const minPrice = getItemMinPrice(item);
    const hasMultiSizes = item.sizes && item.sizes.length > 1;
    return `
      <div class="menu-card reveal">
        <div class="menu-card-img">
          ${item.image
            ? `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><div class="menu-card-emoji" style="display:none">${item.emoji||'🍽️'}</div>`
            : `<div class="menu-card-emoji">${item.emoji||'🍽️'}</div>`}
          <div class="menu-card-badge">${item.category}</div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-desc">${item.desc||'Freshly prepared with finest ingredients'}</div>
          ${hasMultiSizes ? `
          <div class="menu-size-grid">
            ${item.sizes.map((s,si)=>`
              <button class="size-btn" onclick="addToCartWithSize(${realIdx},${si})">
                <span class="size-label">${s.label}</span>
                <span class="size-price">Rs. ${s.price}</span>
              </button>`).join('')}
          </div>` : `
          <div class="menu-card-footer">
            <div class="menu-card-price">Rs. ${minPrice}</div>
            <button class="menu-card-add" onclick="addToCartWithSize(${realIdx},0)">+</button>
          </div>`}
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
    <button class="cat-btn ${cat === currentOrderFilter ? 'active' : ''}" onclick="filterOrderItems('${cat}', this)">${cat === 'all' ? 'All' : cat}</button>
  `).join('');
}

function filterOrderItems(cat, el) {
  currentOrderFilter = cat;
  document.querySelectorAll('#orderCats .cat-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  renderOrderItems();
}

function renderOrderItems(search = '') {
  const grid = document.getElementById('orderItemsGrid');
  let filtered = currentOrderFilter === 'all' ? menuItems : menuItems.filter(i => i.category === currentOrderFilter);
  if (search) filtered = filtered.filter(i => i.name.toLowerCase().includes(search));
  grid.innerHTML = filtered.map((item) => {
    const realIdx = menuItems.indexOf(item);
    const minPrice = getItemMinPrice(item);
    const hasMulti = item.sizes && item.sizes.length > 1;
    return `
      <div class="order-item-card">
        ${item.image ? `<img class="order-item-img" src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>` : ''}
        <div class="order-item-emoji" style="${item.image?'display:none':''}"> ${item.emoji||'🍽️'}</div>
        <div class="order-item-info">
          <div class="order-item-name" title="${item.name}">${item.name}</div>
          ${hasMulti ? `<div class="order-size-pills">${item.sizes.map((s,si)=>`<button class="order-size-pill" onclick="addToCartWithSize(${realIdx},${si})">${s.label} Rs.${s.price}</button>`).join('')}</div>`
          : `<div class="order-item-price">Rs. ${minPrice}</div>`}
        </div>
        ${!hasMulti ? `<button class="order-item-add" onclick="addToCartWithSize(${realIdx},0)">+</button>` : ''}
      </div>`;
  }).join('');
}

// ===== CART =====
function addToCartFromMenu(idx) {
  addToCartWithSize(idx, 0);
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
      <div class="cart-item-name">${item.name}${item.sizeLabel && item.sizeLabel !== 'Regular' && item.sizeLabel !== 'Single' && item.sizeLabel !== 'Portion' ? `<br><small style="color:var(--gold);font-size:0.75rem">${item.sizeLabel}</small>` : ''}</div>
      <div class="cart-item-qty">
        <button onclick="changeCartQty(${idx}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeCartQty(${idx}, 1)">+</button>
      </div>
      <div class="cart-item-price">Rs. ${item.price * item.qty}</div>
    </div>
  `).join('');

  const subtotal = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const delivery = +settings.deliveryCharge || 100;
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
  const delivery = +settings.deliveryCharge || 100;
  const total = subtotal + delivery;

  let orderText = `🌶️ *MIRCHI 360° - NEW ORDER*\n\n`;
  orderText += `*Customer:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n`;
  orderText += `*Order Details:*\n`;
  cart.forEach(item => {
    const sizeTxt = item.sizeLabel && item.sizeLabel !== 'Regular' ? ` (${item.sizeLabel})` : '';
    orderText += `• ${item.name}${sizeTxt} x${item.qty} = Rs. ${item.price * item.qty}\n`;
  });
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

async function submitBooking() {
  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const date = document.getElementById('bookDate').value;
  const time = document.getElementById('bookTime').value;
  const guests = document.getElementById('bookGuests').value;
  const tableType = document.getElementById('bookTableType').value || 'Standard';
  const notes = document.getElementById('bookNotes').value.trim();

  if (!name || !phone || !date || !time || !guests) { showToast('⚠️ Please fill all required fields'); return; }

  const booking = { name, phone, date, time, guests, tableType, notes, timestamp: Date.now() };
  try {
    const ref = await addDoc(collection(db, 'bookings'), booking);
    bookings.unshift({ id: ref.id, ...booking });
  } catch(e) { console.error('Booking error:', e); }

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
  tbody.innerHTML = menuItems.map((item, idx) => {
    const displayPrice = item.sizes && item.sizes.length > 0
      ? (item.sizes.length === 1 ? `Rs. ${item.sizes[0].price}` : `Rs. ${item.sizes[0].price} – ${item.sizes[item.sizes.length-1].price}`)
      : `Rs. ${item.price || 0}`;
    return `
    <tr>
      <td>${item.image ? `<img class="admin-table-img" src="${item.image}" alt="${item.name}"/>` : `<span class="admin-table-emoji">${item.emoji || '🍽️'}</span>`}</td>
      <td><strong>${item.name}</strong><br><small style="color:var(--text-muted)">${item.desc || ''}</small></td>
      <td>${item.category}</td>
      <td style="color:var(--gold);font-weight:700">${displayPrice}</td>
      <td>
        <div class="admin-action-btns">
          <button class="admin-edit-btn" onclick="editItem(${idx})">✏️ Edit</button>
          <button class="admin-del-btn" onclick="deleteItem(${idx})">🗑️ Delete</button>
        </div>
      </td>
    </tr>`;
  }).join('');
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

async function clearBookings() {
  if (confirm('Clear all reservations? This cannot be undone.')) {
    try {
      const snap = await getDocs(collection(db, 'bookings'));
      for (const d of snap.docs) await deleteDoc(doc(db, 'bookings', d.id));
    } catch(e) { console.error(e); }
    bookings = [];
    renderAdminBookingsTable();
    updateAdminStats();
    showToast('🗑️ All reservations cleared');
  }
}

// ===== ITEM MODAL =====
function togglePriceFields() {
  const type = document.getElementById('itemPriceType').value;
  document.getElementById('priceSingle').style.display   = (type === 'single')   ? '' : 'none';
  document.getElementById('priceHalfFull').style.display = (type === 'halfFull')  ? '' : 'none';
  document.getElementById('priceSML').style.display      = (type === 'sml')       ? '' : 'none';
}

function showAddItemModal() {
  document.getElementById('modalTitle').textContent = 'Add Menu Item';
  document.getElementById('itemName').value = '';
  document.getElementById('itemCategory').value = '';
  document.getElementById('itemEmoji').value = '';
  document.getElementById('itemDesc').value = '';
  document.getElementById('editItemIndex').value = '-1';
  document.getElementById('itemImageData').value = '';
  document.getElementById('itemPriceType').value = 'single';
  document.getElementById('itemPrice').value = '';
  document.getElementById('itemPriceHalf').value = '';
  document.getElementById('itemPriceFull').value = '';
  document.getElementById('itemPriceS').value = '';
  document.getElementById('itemPriceM').value = '';
  document.getElementById('itemPriceL').value = '';
  togglePriceFields();
  resetImagePreview();
  document.getElementById('itemModal').style.display = 'flex';
}

function editItem(idx) {
  const item = menuItems[idx];
  document.getElementById('modalTitle').textContent = 'Edit Menu Item';
  document.getElementById('itemName').value = item.name;
  document.getElementById('itemCategory').value = item.category;
  document.getElementById('itemEmoji').value = item.emoji || '';
  document.getElementById('itemDesc').value = item.desc || '';
  document.getElementById('editItemIndex').value = idx;
  document.getElementById('itemImageData').value = item.image || '';

  // Clear all price fields first
  document.getElementById('itemPrice').value = '';
  document.getElementById('itemPriceHalf').value = '';
  document.getElementById('itemPriceFull').value = '';
  document.getElementById('itemPriceS').value = '';
  document.getElementById('itemPriceM').value = '';
  document.getElementById('itemPriceL').value = '';

  // Detect size type and populate
  const sizes = item.sizes || [];
  const labels = sizes.map(s => s.label.toLowerCase());
  if (sizes.length === 1 && !labels.includes('half') && !labels.includes('full') && !labels.includes('small') && !labels.includes('medium') && !labels.includes('large')) {
    document.getElementById('itemPriceType').value = 'single';
    document.getElementById('itemPrice').value = sizes[0].price;
  } else if (labels.includes('half') || labels.includes('full')) {
    document.getElementById('itemPriceType').value = 'halfFull';
    sizes.forEach(s => {
      if (s.label.toLowerCase() === 'half') document.getElementById('itemPriceHalf').value = s.price;
      if (s.label.toLowerCase() === 'full') document.getElementById('itemPriceFull').value = s.price;
    });
  } else if (labels.includes('small') || labels.includes('medium') || labels.includes('large')) {
    document.getElementById('itemPriceType').value = 'sml';
    sizes.forEach(s => {
      if (s.label.toLowerCase() === 'small')  document.getElementById('itemPriceS').value = s.price;
      if (s.label.toLowerCase() === 'medium') document.getElementById('itemPriceM').value = s.price;
      if (s.label.toLowerCase() === 'large')  document.getElementById('itemPriceL').value = s.price;
    });
  } else {
    // fallback — show single price with first size price
    document.getElementById('itemPriceType').value = 'single';
    document.getElementById('itemPrice').value = sizes[0]?.price || item.price || '';
  }
  togglePriceFields();

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

async function saveItem() {
  const name     = document.getElementById('itemName').value.trim();
  const category = document.getElementById('itemCategory').value;
  const emoji    = document.getElementById('itemEmoji').value.trim() || '🍽️';
  const desc     = document.getElementById('itemDesc').value.trim();
  const image    = document.getElementById('itemImageData').value;
  const editIdx  = parseInt(document.getElementById('editItemIndex').value);
  const priceType = document.getElementById('itemPriceType').value;

  if (!name || !category) { showToast('⚠️ Name aur Category zaroori hain'); return; }

  let sizes = [];
  if (priceType === 'single') {
    const p = parseFloat(document.getElementById('itemPrice').value);
    if (!p) { showToast('⚠️ Price daalna zaroori hai'); return; }
    sizes = [{ label: 'Regular', price: p }];
  } else if (priceType === 'halfFull') {
    const half = parseFloat(document.getElementById('itemPriceHalf').value);
    const full = parseFloat(document.getElementById('itemPriceFull').value);
    if (!half || !full) { showToast('⚠️ Half aur Full dono prices daalne zaroori hain'); return; }
    sizes = [{ label: 'Half', price: half }, { label: 'Full', price: full }];
  } else if (priceType === 'sml') {
    const s = parseFloat(document.getElementById('itemPriceS').value);
    const m = parseFloat(document.getElementById('itemPriceM').value);
    const l = parseFloat(document.getElementById('itemPriceL').value);
    if (!s || !m || !l) { showToast('⚠️ Small, Medium aur Large teeno prices daalne zaroori hain'); return; }
    sizes = [{ label: 'Small', price: s }, { label: 'Medium', price: m }, { label: 'Large', price: l }];
  }

  const item = { name, category, emoji, desc, image, sizes };

  try {
    if (editIdx === -1) {
      const ref = await addDoc(collection(db, 'menu'), item);
      menuItems.push({ id: ref.id, ...item });
    } else {
      const existingId = menuItems[editIdx].id;
      await setDoc(doc(db, 'menu', existingId), item);
      menuItems[editIdx] = { id: existingId, ...item };
    }
  } catch(e) {
    console.error('Save error:', e);
    showToast('⚠️ Save failed — check internet');
    return;
  }

  closeItemModal();
  renderAdminMenuTable();
  renderMenuGrid();
  renderOrderItems();
  renderOrderCategories();
  updateAdminStats();
  showToast(`✅ "${name}" ${editIdx === -1 ? 'add' : 'update'} ho gaya`);
}

async function deleteItem(idx) {
  const item = menuItems[idx];
  if (confirm(`Delete "${item.name}"?`)) {
    try {
      if (item.id) await deleteDoc(doc(db, 'menu', item.id));
    } catch(e) { console.error('Delete error:', e); }
    menuItems.splice(idx, 1);
    renderAdminMenuTable();
    renderMenuGrid();
    renderOrderItems();
    renderOrderCategories();
    updateAdminStats();
    showToast(`🗑️ "${item.name}" deleted`);
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
  settings.deliveryCharge = +document.getElementById('settingDelivery').value || 100;
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
    const systemPrompt = `You are the friendly AI assistant for MIRCHI 360°, a premium Pakistani restaurant in Sanghar, Pakistan. 

Restaurant Info:
- Name: Mirchi 360°
- Tagline: Three Sixty Degrees of Flavour
- Location: Hyderabad Road, Sanghar, Sindh, Pakistan
- Hours: Daily 12:00 PM – 1:00 AM
- Phone: 0332-4187360, 0319-7833360, 0305-8368360
- PTCL: 0235-541060, 0235-542361
- WhatsApp: 03324187360
- Delivery: Available across Sanghar & surrounding areas (Rs. 100 delivery charge)
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
    return `📦 <strong>Online Ordering</strong><br><br>Use our <a href="#order" style="color:var(--gold)">Order section</a> to place your order!<br><br>Delivery charge: Rs. 100<br>Payment: EasyPaisa, JazzCash, COD, Bank Transfer<br><br>Or WhatsApp us: <a href="https://wa.me/923324187360" style="color:var(--gold)">03324187360</a> 🚴`;
  }
  if (msg.includes('location') || msg.includes('address') || msg.includes('where')) {
    return `📍 <strong>Our Location</strong><br><br>Hyderabad Road,<br>Sanghar, Sindh, Pakistan<br><br><a href="https://maps.app.goo.gl/iECvdpyygA3gvBbB6" target="_blank" style="color:var(--gold)">Open in Google Maps</a> 🗺️`;
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

// ===== WINDOW EXPORTS (required for type="module") =====
window.adminLogin = adminLogin;
window.adminLogout = adminLogout;
window.submitBooking = submitBooking;
window.placeOrder = placeOrder;
window.showAddItemModal = showAddItemModal;
window.closeItemModal = closeItemModal;
window.saveItem = saveItem;
window.editItem = editItem;
window.deleteItem = deleteItem;
window.clearBookings = clearBookings;
window.togglePriceFields = togglePriceFields;
window.previewImage = previewImage;
window.changePassword = changePassword;
window.saveSettings = saveSettings;
window.toggleAssistant = toggleAssistant;
window.sendAssistantMsg = sendAssistantMsg;
window.quickMsg = quickMsg;
window.addToCartWithSize = addToCartWithSize;
window.changeCartQty = changeCartQty;
window.filterOrderItems = filterOrderItems;
