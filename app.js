// ===== MIRCHI 360° – COMPLETE APP LOGIC =====

// ===== MENU DATA (from menu images) =====
const MENU_DATA = [
  // DESI ITEMS
  { id: 1, cat: 'desi', name: 'Royal Sindhi Chicken Biryani', emoji: '🍚', desc: 'Masaledar Sindhi style biryani – Mirchi 360 ki khaas recipe', prices: { Small: 1050, Large: 1800 } },
  { id: 2, cat: 'desi', name: 'Chicken Reshmi Paneer Handi', emoji: '🍲', desc: 'Creamy reshmi chicken with paneer – rich aur lajawab', prices: { Small: 1300, Large: 2300 } },
  { id: 3, cat: 'desi', name: 'Mutton Biryani', emoji: '🍛', desc: 'Juicy mutton pieces with aromatic basmati rice', prices: { Small: 1250, Large: 2800 } },
  { id: 4, cat: 'desi', name: 'Royal Chicken Handi', emoji: '🍲', desc: 'Signature royal recipe handi – must try!', prices: { Small: 1250, Large: 2300 } },
  { id: 5, cat: 'desi', name: 'Mutton Handi', emoji: '🥘', desc: 'Desi ghee mein pakaya gaya khaas mutton handi', prices: { Small: 2100, Large: 3600 } },
  { id: 6, cat: 'desi', name: 'Chicken Makhni Handi', emoji: '🍲', desc: 'Butter rich makhni gravy with tender chicken', prices: { Small: 1300, Large: 2300 } },
  { id: 7, cat: 'desi', name: 'Daal Makhni', emoji: '🫕', desc: 'Slow-cooked creamy black daal – comfort food at its best', prices: { Small: 800, Large: 1400 } },
  { id: 8, cat: 'desi', name: 'Chicken White Handi', emoji: '🍲', desc: 'Creamy white gravy handi – mild aur delicious', prices: { Small: 1300, Large: 2200 } },
  { id: 9, cat: 'desi', name: 'Vegetable Biryani', emoji: '🍚', desc: 'Fragrant veg biryani – fresh vegetables with aromatic rice', prices: { Small: 800, Large: 1400 } },
  { id: 10, cat: 'desi', name: 'Tikka Biryani', emoji: '🍗', desc: 'Succulent tikka pieces layered with biryani rice', prices: { Small: 1150, Large: 2000 } },
  { id: 11, cat: 'desi', name: 'Nawabi Biryani', emoji: '👑', desc: 'Luxurious Nawabi style biryani – royal experience', prices: { Small: 1300, Large: 2300 } },

  // KARAHI
  { id: 12, cat: 'karahi', name: 'Chicken Karahi', emoji: '🍳', desc: 'Classic spicy chicken karahi – tandoor se seedha', prices: { Half: 1200, Full: 2400 } },
  { id: 13, cat: 'karahi', name: 'Chicken Peshawari Karahi', emoji: '🍳', desc: 'Authentic Peshawari style – smoky aur bold flavours', prices: { Half: 1200, Full: 2400 } },
  { id: 14, cat: 'karahi', name: 'Chicken White Karahi', emoji: '🥛', desc: 'Rich white karahi – doodh aur cream ke saath', prices: { Half: 1250, Full: 2500 } },
  { id: 15, cat: 'karahi', name: 'Chicken Lahori Karahi', emoji: '🌶️', desc: 'Authentic Lahori style masala karahi', prices: { Half: 1250, Full: 2500 } },
  { id: 16, cat: 'karahi', name: 'Chicken Brown Karahi', emoji: '🍳', desc: 'Slow-cooked brown karahi with rich gravy', prices: { Half: 1200, Full: 2300 } },
  { id: 17, cat: 'karahi', name: 'Mutton Peshawari Karahi', emoji: '🥩', desc: 'Tender mutton Peshawari style – classic taste', prices: { Half: 2050, Full: 3800 } },
  { id: 18, cat: 'karahi', name: 'Mutton White Karahi', emoji: '🥛', desc: 'Creamy white mutton karahi – rich aur flavorful', prices: { Half: 2150, Full: 3900 } },
  { id: 19, cat: 'karahi', name: 'Mutton Karahi', emoji: '🥩', desc: 'Classic spicy mutton karahi – best in Sanghar', prices: { Half: 2050, Full: 3800 } },
  { id: 20, cat: 'karahi', name: 'Mutton Lahori Karahi', emoji: '🌶️', desc: 'Bold Lahori spices with tender mutton', prices: { Half: 2150, Full: 3900 } },
  { id: 21, cat: 'karahi', name: 'Mutton Brown Karahi', emoji: '🍳', desc: 'Rich brown gravy mutton karahi – desi favourite', prices: { Half: 2050, Full: 3800 } },

  // BBQ
  { id: 22, cat: 'bbq', name: 'Chicken Tikka', emoji: '🍗', desc: 'Juicy marinated chicken tikka from coal fire', prices: { Single: 450 } },
  { id: 23, cat: 'bbq', name: 'Chicken Tikka Boti', emoji: '🍗', desc: 'Tender tikka boti – perfectly grilled', prices: { Single: 860 } },
  { id: 24, cat: 'bbq', name: 'Chicken Reshmi Boti', emoji: '🍗', desc: 'Silky smooth reshmi boti – melt in mouth', prices: { Single: 860 } },
  { id: 25, cat: 'bbq', name: 'Afghani Kabab', emoji: '🥩', desc: 'Authentic Afghani style seekh kabab', prices: { Single: 860 } },
  { id: 26, cat: 'bbq', name: 'Chicken Gola Kabab', emoji: '🍢', desc: 'Juicy gola kabab with special masala', prices: { Single: 860 } },
  { id: 27, cat: 'bbq', name: 'Chicken Behari Boti', emoji: '🍗', desc: 'Classic Behari style marinated boti', prices: { Single: 860 } },
  { id: 28, cat: 'bbq', name: 'Chicken Green Boti', emoji: '💚', desc: 'Herb-marinated green boti – fresh aur delicious', prices: { Single: 860 } },
  { id: 29, cat: 'bbq', name: 'Chicken Malai Boti', emoji: '🤍', desc: 'Creamy malai boti – soft aur tender', prices: { Single: 860 } },
  { id: 30, cat: 'bbq', name: 'Chicken Namkeen Boti', emoji: '🧂', desc: 'Lightly spiced namkeen boti – simple aur tasty', prices: { Single: 860 } },
  { id: 31, cat: 'bbq', name: 'BBQ Shaslik', emoji: '🍢', desc: 'Grilled chicken shaslik with vegetables', prices: { Single: 600 } },
  { id: 32, cat: 'bbq', name: 'Dhaka Chicken', emoji: '🍗', desc: 'Special Dhaka style grilled chicken', prices: { Single: 600 } },
  { id: 33, cat: 'bbq', name: 'Chicken Wings', emoji: '🍗', desc: 'Crispy BBQ chicken wings', prices: { Single: 600 } },
  { id: 34, cat: 'bbq', name: 'BBQ Platter', emoji: '🥩', desc: 'Full BBQ platter – sab kuch ek saath!', prices: { Half: 2800, Full: 4300 } },

  // FAST FOOD
  { id: 35, cat: 'fastfood', name: 'Zinger Burger', emoji: '🍔', desc: 'Crispy zinger burger – restaurant style', prices: { Single: 530 } },
  { id: 36, cat: 'fastfood', name: 'Zinger Extreme Burger', emoji: '🍔', desc: 'Extra large zinger with double patty', prices: { Single: 700 } },
  { id: 37, cat: 'fastfood', name: 'Chicken Burger', emoji: '🍔', desc: 'Classic chicken burger – juicy aur tasty', prices: { Single: 430 } },
  { id: 38, cat: 'fastfood', name: 'Steak Burger', emoji: '🥩', desc: 'Beef steak burger – premium taste', prices: { Single: 510 } },
  { id: 39, cat: 'fastfood', name: 'Supreme Burger', emoji: '👑', desc: 'The ultimate supreme burger experience', prices: { Single: 700 } },
  { id: 40, cat: 'fastfood', name: 'Chicken Broast', emoji: '🍗', desc: 'Crispy broasted chicken – golden aur crunchy', prices: { Single: 530 } },
  { id: 41, cat: 'fastfood', name: 'Chicken Club Sandwich', emoji: '🥪', desc: 'Triple layer club sandwich', prices: { Single: 480 } },
  { id: 42, cat: 'fastfood', name: 'BBQ Club Sandwich', emoji: '🥪', desc: 'BBQ flavored club sandwich', prices: { Single: 500 } },
  { id: 43, cat: 'fastfood', name: 'Vegetable Club Sandwich', emoji: '🥙', desc: 'Fresh veg club sandwich – light aur healthy', prices: { Single: 380 } },
  { id: 44, cat: 'fastfood', name: 'Mexican Sandwich', emoji: '🌮', desc: 'Spicy Mexican-style chicken sandwich', prices: { Single: 380 } },
  { id: 45, cat: 'fastfood', name: 'Mexican Vegetable Sandwich', emoji: '🌮', desc: 'Veg Mexican sandwich – fresh aur spicy', prices: { Single: 380 } },

  // CHINESE
  { id: 46, cat: 'chinese', name: 'Chicken Dry Chili with Rice', emoji: '🍜', desc: 'Crispy chicken dry chili – restaurant style', prices: { Single: 1100 } },
  { id: 47, cat: 'chinese', name: 'Chicken Mirchi 360 Special with Rice', emoji: '🌶️', desc: 'Our signature Chinese-desi fusion dish', prices: { Single: 1100 } },
  { id: 48, cat: 'chinese', name: 'Chicken Chili Onion with Rice', emoji: '🧅', desc: 'Classic chili chicken with onion gravy', prices: { Single: 1100 } },
  { id: 49, cat: 'chinese', name: 'Singaporian Rice', emoji: '🍚', desc: 'Fragrant Singaporian fried rice', prices: { Single: 1100 } },
  { id: 50, cat: 'chinese', name: 'Chicken Manchurian with Rice', emoji: '🍜', desc: 'Classic manchurian in tangy sauce', prices: { Single: 1100 } },
  { id: 51, cat: 'chinese', name: 'Chicken Fried Rice', emoji: '🍳', desc: 'Classic egg-fried rice with chicken', prices: { Single: 500 } },
  { id: 52, cat: 'chinese', name: 'Chicken Shaslik with Rice', emoji: '🍢', desc: 'Grilled chicken shaslik served with rice', prices: { Single: 1100 } },
  { id: 53, cat: 'chinese', name: 'Chicken Spagetti', emoji: '🍝', desc: 'Chicken spaghetti – Italian-Chinese fusion', prices: { Single: 1100 } },
  { id: 54, cat: 'chinese', name: 'Chicken Chowhein', emoji: '🍜', desc: 'Classic chicken chow mein noodles', prices: { Single: 1000 } },
  { id: 55, cat: 'chinese', name: 'Vegetable Chowhein', emoji: '🥦', desc: 'Fresh vegetable chow mein', prices: { Single: 600 } },
  { id: 56, cat: 'chinese', name: 'Vegetable Rice', emoji: '🍚', desc: 'Light and healthy veg fried rice', prices: { Single: 470 } },
  { id: 57, cat: 'chinese', name: 'Plain Rice', emoji: '🍚', desc: 'Steamed plain white rice', prices: { Single: 350 } },
  { id: 58, cat: 'chinese', name: 'Mac and Cheese Pasta', emoji: '🧀', desc: 'Creamy mac and cheese – kids favourite', prices: { Single: 1000 } },
  { id: 59, cat: 'chinese', name: 'Alferado Pasta', emoji: '🍝', desc: 'Rich Alfredo cream pasta', prices: { Single: 1000 } },
  { id: 60, cat: 'chinese', name: 'Chicken Lasagna', emoji: '🍝', desc: 'Layered chicken lasagna – baked to perfection', prices: { Single: 1000 } },
  { id: 61, cat: 'chinese', name: 'Penne Arabia', emoji: '🍝', desc: 'Arabian spiced penne pasta', prices: { Single: 1000 } },
  { id: 62, cat: 'chinese', name: 'Chinese Thali', emoji: '🍽️', desc: 'Complete Chinese meal thali', prices: { Single: 1100 } },
  { id: 63, cat: 'chinese', name: 'Asian Thali', emoji: '🍽️', desc: 'Full Asian cuisine thali platter', prices: { Single: 1100 } },

  // PIZZA
  { id: 64, cat: 'pizza', name: 'Chicken Tikka Pizza', emoji: '🍕', desc: 'Desi favourite – tikka masala on pizza', prices: { Small: 530, Medium: 830, Large: 1300 } },
  { id: 65, cat: 'pizza', name: 'Chicken Fajita Pizza', emoji: '🍕', desc: 'Smoky fajita chicken with Mexican spices', prices: { Small: 530, Medium: 830, Large: 1500 } },
  { id: 66, cat: 'pizza', name: 'Bonfire Pizza', emoji: '🔥', desc: 'Spicy bonfire – for the brave ones!', prices: { Small: 350, Medium: 1000, Large: 1500 } },
  { id: 67, cat: 'pizza', name: 'Afghani Pizza', emoji: '🍕', desc: 'Unique Afghani spiced chicken pizza', prices: { Small: 600, Medium: 900, Large: 1450 } },
  { id: 68, cat: 'pizza', name: 'Special Pizza', emoji: '⭐', desc: 'Our special loaded pizza – best seller!', prices: { Small: 530, Medium: 1000, Large: 1500 } },
  { id: 69, cat: 'pizza', name: 'Stuffed Crust Pizza', emoji: '🧀', desc: 'Cheesy stuffed crust – oozy & delicious', prices: { Small: 530, Medium: 1000, Large: 1600 } },
  { id: 70, cat: 'pizza', name: 'Chicken Super Supreme', emoji: '👑', desc: 'Super loaded supreme chicken pizza', prices: { Small: 530, Medium: 850, Large: 1300 } },
  { id: 71, cat: 'pizza', name: 'Stuffed Kebab Pizza', emoji: '🥙', desc: 'Pizza stuffed with juicy kebab filling', prices: { Small: 600, Medium: 1000, Large: 1600 } },
  { id: 72, cat: 'pizza', name: 'Behari Spring Roll Pizza', emoji: '🌯', desc: 'Unique fusion of Behari boti in pizza', prices: { Small: 600 } },
  { id: 73, cat: 'pizza', name: 'Vegetable Pizza', emoji: '🥦', desc: 'Fresh veggie loaded pizza', prices: { Small: 530, Medium: 850, Large: 1300 } },
  { id: 74, cat: 'pizza', name: 'Malai Pizza', emoji: '🤍', desc: 'Creamy malai chicken pizza – mild & rich', prices: { Small: 600, Medium: 1100, Large: 1600 } },
  { id: 75, cat: 'pizza', name: 'Pizza Fries', emoji: '🍟', desc: 'Crispy fries topped with pizza sauce & cheese', prices: { Single: 600 } },

  // VEGETABLE
  { id: 76, cat: 'vegetable', name: 'Paner Handi', emoji: '🧀', desc: 'Rich paneer in spiced handi gravy', prices: { Single: 1100 } },
  { id: 77, cat: 'vegetable', name: 'Paneer Palak', emoji: '🥬', desc: 'Creamy spinach with fresh paneer', prices: { Single: 1050 } },
  { id: 78, cat: 'vegetable', name: 'Paneer Mughlai', emoji: '👑', desc: 'Royal Mughlai style paneer dish', prices: { Single: 1100 } },
  { id: 79, cat: 'vegetable', name: 'Paneer Achari', emoji: '🌶️', desc: 'Tangy achari spiced paneer', prices: { Single: 1100 } },
  { id: 80, cat: 'vegetable', name: 'Paneer Stuff', emoji: '🧀', desc: 'Stuffed paneer – crispy outside, soft inside', prices: { Single: 750 } },
  { id: 81, cat: 'vegetable', name: 'Paneer Nachos', emoji: '🌮', desc: 'Nachos with paneer topping', prices: { Single: 550 } },
  { id: 82, cat: 'vegetable', name: 'Vegetable Cutlus', emoji: '🥦', desc: 'Crispy fried vegetable cutlets', prices: { Single: 600 } },
  { id: 83, cat: 'vegetable', name: 'Malai Kofta', emoji: '🤍', desc: 'Soft kofta balls in rich malai gravy', prices: { Single: 800 } },
  { id: 84, cat: 'vegetable', name: 'Vegetable Kofta Handi', emoji: '🥘', desc: 'Veg kofta in aromatic handi', prices: { Single: 1000 } },
  { id: 85, cat: 'vegetable', name: 'Vegetable Achari Handi', emoji: '🌶️', desc: 'Tangy achari veg handi', prices: { Single: 900 } },
  { id: 86, cat: 'vegetable', name: 'Vegetable White Handi', emoji: '🤍', desc: 'Creamy white veg handi', prices: { Single: 900 } },
  { id: 87, cat: 'vegetable', name: 'Vegetable Cheese Cutlus', emoji: '🧀', desc: 'Cheesy vegetable cutlets – crispy & delicious', prices: { Single: 900 } },
  { id: 88, cat: 'vegetable', name: 'Vegetable Peri Bites', emoji: '🌶️', desc: 'Spicy peri peri vegetable bites', prices: { Single: 750 } },
  { id: 89, cat: 'vegetable', name: 'Mirchi 360 Yakhni Rice', emoji: '🍚', desc: 'Special yakhni rice – our signature veg rice', prices: { Single: 600 } },
  { id: 90, cat: 'vegetable', name: 'Vegetable Platter', emoji: '🥗', desc: 'Mixed vegetable platter – variety pack', prices: { Single: 800 } },
  { id: 91, cat: 'vegetable', name: 'Dynamite Chicken', emoji: '💥', desc: 'Explosive dynamite flavored chicken bites', prices: { Single: 700 } },

  // ROLLS
  { id: 92, cat: 'rolls', name: 'Chicken Roll', emoji: '🌯', desc: 'Classic chicken roll – soft paratha with filling', prices: { Single: 280 } },
  { id: 93, cat: 'rolls', name: 'Chicken Broast Roll', emoji: '🌯', desc: 'Crispy broast in a roll – perfect snack', prices: { Single: 280 } },
  { id: 94, cat: 'rolls', name: 'Chicken Afghani Reshmi Kabab Roll', emoji: '🌯', desc: 'Afghani reshmi kabab wrapped in paratha', prices: { Single: 210 } },
  { id: 95, cat: 'rolls', name: 'Chicken Behari Boti Roll', emoji: '🌯', desc: 'Tender behari boti roll – full of flavour', prices: { Single: 290 } },
  { id: 96, cat: 'rolls', name: 'Chicken Malai Boti Roll', emoji: '🤍', desc: 'Creamy malai boti rolled up perfectly', prices: { Single: 290 } },
  { id: 97, cat: 'rolls', name: 'Vegetable Roll', emoji: '🥙', desc: 'Fresh vegetable roll – healthy choice', prices: { Single: 210 } },

  // FISH
  { id: 98, cat: 'fish', name: 'Fish N Chips', emoji: '🐟', desc: 'Classic fish and chips – crispy & delicious', prices: { Single: 1150 } },
  { id: 99, cat: 'fish', name: 'Finger Fish', emoji: '🐠', desc: 'Crispy finger fish – perfect starter', prices: { Single: 1150 } },
  { id: 100, cat: 'fish', name: 'BBQ Fish Sanghar', emoji: '🐡', desc: 'Special BBQ whole fish – Sanghar ka mashoor!', prices: { Single: 3000 } },

  // SALADS
  { id: 101, cat: 'salads', name: 'Russian Salad', emoji: '🥗', desc: 'Classic creamy Russian salad', prices: { Single: 599 } },
  { id: 102, cat: 'salads', name: 'Chicken Pineapple Salad', emoji: '🍍', desc: 'Tropical chicken pineapple salad', prices: { Single: 599 } },
  { id: 103, cat: 'salads', name: 'Green Salad', emoji: '🥬', desc: 'Fresh green salad – healthy & light', prices: { Single: 150 } },
  { id: 104, cat: 'salads', name: 'Raita', emoji: '🥛', desc: 'Cooling dahi raita – perfect with biryani', prices: { Single: 150 } },
  { id: 105, cat: 'salads', name: 'Fruit Chaat', emoji: '🍇', desc: 'Seasonal fruit chaat with chaat masala', prices: { Single: 399 } },

  // PARATHA & NAAN
  { id: 106, cat: 'paratha', name: 'Chicken Paratha', emoji: '🫓', desc: 'Stuffed chicken paratha – crispy & filling', prices: { Single: 410 } },
  { id: 107, cat: 'paratha', name: 'Chicken Cheese Paratha', emoji: '🧀', desc: 'Chicken and cheese stuffed paratha', prices: { Single: 450 } },
  { id: 108, cat: 'paratha', name: 'Aalu Paratha', emoji: '🥔', desc: 'Classic potato stuffed paratha', prices: { Single: 270 } },
  { id: 109, cat: 'paratha', name: 'Plain Paratha', emoji: '🫓', desc: 'Simple layered plain paratha', prices: { Single: 70 } },
  { id: 110, cat: 'paratha', name: 'Roghni Naan', emoji: '🫓', desc: 'Soft roghni naan – freshly baked', prices: { Single: 65 } },
  { id: 111, cat: 'paratha', name: 'Garlic Naan', emoji: '🧄', desc: 'Garlic butter naan – fragrant & delicious', prices: { Single: 65 } },
  { id: 112, cat: 'paratha', name: 'Kandhari Naan', emoji: '🫓', desc: 'Kandhari style thick naan', prices: { Single: 65 } },
  { id: 113, cat: 'paratha', name: 'Chapati', emoji: '🫓', desc: 'Simple fresh chapati', prices: { Single: 30 } },
  { id: 114, cat: 'paratha', name: 'Naan', emoji: '🫓', desc: 'Plain freshly baked naan', prices: { Single: 40 } },

  // APPETIZERS
  { id: 115, cat: 'fastfood', name: 'Spicy Wings', emoji: '🔥', desc: 'Hot & spicy chicken wings', prices: { Single: 450 } },
  { id: 116, cat: 'fastfood', name: 'Honey Wings', emoji: '🍯', desc: 'Sweet honey glazed wings', prices: { Single: 480 } },
  { id: 117, cat: 'fastfood', name: 'French Fries', emoji: '🍟', desc: 'Golden crispy French fries', prices: { Single: 300 } },
  { id: 118, cat: 'fastfood', name: 'Chicken Cheese Balls', emoji: '🧀', desc: 'Crispy cheesy chicken balls', prices: { Single: 800 } },
  { id: 119, cat: 'fastfood', name: 'Hot N Sour Soup', emoji: '🍲', desc: 'Classic hot and sour soup', prices: { Single: 280 } },
  { id: 120, cat: 'fastfood', name: 'Chicken Corn Soup', emoji: '🌽', desc: 'Creamy chicken corn soup', prices: { Single: 280 } },
  { id: 121, cat: 'fastfood', name: 'Mirchi 360 Special Soup', emoji: '🌶️', desc: 'Our signature special soup', prices: { Single: 280 } },
  { id: 122, cat: 'fastfood', name: 'Family Bowl Soup', emoji: '🫕', desc: 'Large family-sized soup bowl', prices: { Single: 1200 } },

  // JUICES
  { id: 123, cat: 'juices', name: 'Kit Kat Shake', emoji: '🥤', desc: 'Creamy Kit Kat milkshake', prices: { Single: 480 } },
  { id: 124, cat: 'juices', name: 'Strawberry Shake', emoji: '🍓', desc: 'Fresh strawberry milkshake', prices: { Single: 420 } },
  { id: 125, cat: 'juices', name: 'Mango Juice', emoji: '🥭', desc: 'Fresh mango juice – pure aur natural', prices: { Single: 380 } },
  { id: 126, cat: 'juices', name: 'Cadbury Shake', emoji: '🍫', desc: 'Rich Cadbury chocolate shake', prices: { Single: 450 } },
  { id: 127, cat: 'juices', name: 'Orange Juice', emoji: '🍊', desc: 'Freshly squeezed orange juice', prices: { Single: 320 } },
  { id: 128, cat: 'juices', name: 'Annar Juice', emoji: '💎', desc: 'Pomegranate juice – rich in antioxidants', prices: { Single: 410 } },
  { id: 129, cat: 'juices', name: 'Oreo Shake', emoji: '🍪', desc: 'Thick Oreo cookie milkshake', prices: { Single: 450 } },
  { id: 130, cat: 'juices', name: 'Apple Juice', emoji: '🍎', desc: 'Fresh apple juice – crisp aur refreshing', prices: { Single: 320 } },
  { id: 131, cat: 'juices', name: 'Falsa Juice', emoji: '🟣', desc: 'Tangy falsa berry juice', prices: { Single: 350 } },
  { id: 132, cat: 'juices', name: 'Pineapple Shake', emoji: '🍍', desc: 'Tropical pineapple milkshake', prices: { Single: 400 } },
  { id: 133, cat: 'juices', name: 'Grape Fruit', emoji: '🍇', desc: 'Fresh grapefruit juice', prices: { Single: 350 } },
  { id: 134, cat: 'juices', name: 'Pinna Colada', emoji: '🥥', desc: 'Non-alcoholic pinna colada', prices: { Single: 370 } },
  { id: 135, cat: 'juices', name: 'Mint Lemon', emoji: '🍋', desc: 'Refreshing mint lemon – perfect for summer', prices: { Single: 290 } },
  { id: 136, cat: 'juices', name: 'Blueberry Shake', emoji: '🫐', desc: 'Fresh blueberry milkshake', prices: { Single: 480 } },
  { id: 137, cat: 'juices', name: 'Mirchi 360 Special Shake', emoji: '🌶️', desc: 'Our secret recipe signature shake', prices: { Single: 400 } },
  { id: 138, cat: 'juices', name: 'Lovestory Shake', emoji: '💕', desc: 'Our romantic lovestory special shake', prices: { Single: 450 } },
  { id: 139, cat: 'juices', name: 'Cake Alaska Shake', emoji: '🎂', desc: 'Cake-flavored Alaska milkshake', prices: { Single: 500 } },
  { id: 140, cat: 'juices', name: 'Brownie Shake', emoji: '🍫', desc: 'Rich chocolate brownie shake', prices: { Single: 400 } },
  { id: 141, cat: 'juices', name: 'Fresh Cocktail', emoji: '🥤', desc: 'Fresh fruit cocktail mocktail', prices: { Single: 450 } },

  // DESSERTS
  { id: 142, cat: 'desserts', name: 'Ice Cream', emoji: '🍦', desc: 'Creamy soft serve ice cream', prices: { Single: 300 } },
  { id: 143, cat: 'desserts', name: 'Kheer Mix', emoji: '🍮', desc: 'Traditional Pakistani kheer', prices: { Single: 480 } },
  { id: 144, cat: 'desserts', name: 'Kunafa', emoji: '🍯', desc: 'Arabian kunafa – warm cheese dessert', prices: { Single: 800 } },
  { id: 145, cat: 'desserts', name: 'Faluda', emoji: '🌹', desc: 'Classic rose faluda – desi favourite', prices: { Single: 520 } },
  { id: 146, cat: 'desserts', name: 'Las e Shireen', emoji: '🧁', desc: 'Traditional las e shireen dessert', prices: { Single: 800 } },
  { id: 147, cat: 'desserts', name: 'Fruit Trifle', emoji: '🍰', desc: 'Layered fruit trifle – colourful & delicious', prices: { Single: 800 } },

  // BEVERAGES
  { id: 148, cat: 'beverages', name: 'Coffee', emoji: '☕', desc: 'Hot brewed coffee', prices: { Single: 299 } },
  { id: 149, cat: 'beverages', name: 'Tea', emoji: '🍵', desc: 'Desi chai – garam garam', prices: { Single: 120 } },
  { id: 150, cat: 'beverages', name: 'Large Water', emoji: '💧', desc: 'Large mineral water bottle', prices: { Single: 120 } },
  { id: 151, cat: 'beverages', name: 'Cold Coffee', emoji: '🧋', desc: 'Chilled cold coffee', prices: { Single: 299 } },
  { id: 152, cat: 'beverages', name: 'Fresh Lime', emoji: '🍋', desc: 'Fresh lime water – sar dard door kare', prices: { Single: 120 } },
  { id: 153, cat: 'beverages', name: 'Small Water', emoji: '💧', desc: 'Small mineral water bottle', prices: { Single: 50 } },
  { id: 154, cat: 'beverages', name: 'Disposable Can', emoji: '🥤', desc: 'Soft drink can – aapki pasand', prices: { Single: 120 } },
  { id: 155, cat: 'beverages', name: 'Green Tea', emoji: '🍵', desc: 'Healthy green tea', prices: { Single: 80 } },
  { id: 156, cat: 'beverages', name: 'Lemon Kehwa', emoji: '🫖', desc: 'Refreshing lemon kehwa with spices', prices: { Single: 80 } },
];

// ===== CART STATE =====
let cart = [];
let currentItem = null;
let currentQty = 1;
let currentSizeKey = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initFloatingSpices();
  initMenu();
  initTableStatus();
  initNavbarScroll();
  renderCartSidebar();
});

// ===== PARTICLE CANVAS =====
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.7 ? '#e8141c' : '#ff6b2b'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== FLOATING SPICES =====
function initFloatingSpices() {
  const container = document.getElementById('floatingSpices');
  const spices = ['🌶️', '🍗', '🥩', '🍕', '🌿', '⭐', '🔥', '🍜', '🧄', '🫙'];
  for (let i = 0; i < 15; i++) {
    const el = document.createElement('div');
    el.className = 'spice';
    el.textContent = spices[Math.floor(Math.random() * spices.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 15 + 10) + 's';
    el.style.animationDelay = (Math.random() * 15) + 's';
    el.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
    container.appendChild(el);
  }
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== MOBILE NAV =====
function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ===== MENU RENDER =====
function initMenu() {
  renderMenu('all');
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.cat);
    });
  });
}

function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  const items = cat === 'all' ? MENU_DATA : MENU_DATA.filter(i => i.cat === cat);
  grid.innerHTML = '';
  if (!items.length) {
    grid.innerHTML = '<p style="color:var(--text-dim);text-align:center;padding:3rem;grid-column:1/-1">Koi item nahi mili</p>';
    return;
  }
  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = (idx * 0.04) + 's';
    const priceDisplay = getPriceDisplay(item.prices);
    card.innerHTML = `
      <div class="card-img-placeholder" style="background:${getGradient(item.cat)}">${item.emoji}</div>
      <div class="card-body">
        <div class="card-cat">${getCatLabel(item.cat)}</div>
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-footer">
          <div>
            <div class="card-price">Rs. ${getMinPrice(item.prices)}</div>
            ${Object.keys(item.prices).length > 1 ? `<div class="card-price-range">${priceDisplay}</div>` : ''}
          </div>
          <button class="card-add-btn" onclick="openModal(${item.id}, event)" title="Add to Cart">+</button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(item.id));
    grid.appendChild(card);
  });
}

function getPriceDisplay(prices) {
  const entries = Object.entries(prices);
  if (entries.length === 1) return `Rs. ${entries[0][1]}`;
  return entries.map(([k, v]) => `${k}: ${v}`).join(' | ');
}

function getMinPrice(prices) {
  return Math.min(...Object.values(prices));
}

function getGradient(cat) {
  const g = {
    desi: 'linear-gradient(135deg,#2d1b0e,#1a0a0a)',
    karahi: 'linear-gradient(135deg,#2a0808,#1a0a0a)',
    bbq: 'linear-gradient(135deg,#1a1008,#0a0a0a)',
    fastfood: 'linear-gradient(135deg,#1a1208,#0d0d0d)',
    chinese: 'linear-gradient(135deg,#081a14,#0a0a0a)',
    pizza: 'linear-gradient(135deg,#1a0e08,#0a0a0a)',
    vegetable: 'linear-gradient(135deg,#081a08,#0a0a0a)',
    rolls: 'linear-gradient(135deg,#12081a,#0a0a0a)',
    fish: 'linear-gradient(135deg,#081218,#0a0a0a)',
    salads: 'linear-gradient(135deg,#0a1a0a,#0a0a0a)',
    paratha: 'linear-gradient(135deg,#1a1408,#0a0a0a)',
    juices: 'linear-gradient(135deg,#1a0808,#180808)',
    desserts: 'linear-gradient(135deg,#1a0818,#0a0a0a)',
    beverages: 'linear-gradient(135deg,#08121a,#0a0a0a)',
  };
  return g[cat] || 'linear-gradient(135deg,#181818,#0a0a0a)';
}

function getCatLabel(cat) {
  const labels = {
    desi: 'Desi Items', karahi: 'Karahi', bbq: 'BBQ',
    fastfood: 'Fast Food', chinese: 'Chinese', pizza: 'Pizza',
    vegetable: 'Vegetable', rolls: 'Rolls', fish: 'Fish',
    salads: 'Salads', paratha: 'Paratha & Naan', juices: 'Fresh Juices',
    desserts: 'Desserts & Ice Cream', beverages: 'Beverages'
  };
  return labels[cat] || cat;
}

// ===== MODAL =====
function openModal(id, e) {
  if (e) e.stopPropagation();
  const item = MENU_DATA.find(i => i.id === id);
  if (!item) return;
  currentItem = item;
  currentQty = 1;
  document.getElementById('modalQty').textContent = 1;
  document.getElementById('modalName').textContent = item.name;
  document.getElementById('modalDesc').textContent = item.desc;

  const sizes = Object.keys(item.prices);
  currentSizeKey = sizes[0];
  const sizeSel = document.getElementById('modalSizes');
  if (sizes.length > 1) {
    sizeSel.innerHTML = sizes.map((s, i) =>
      `<button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectSize('${s}', this)">${s} – Rs. ${item.prices[s]}</button>`
    ).join('');
    sizeSel.style.display = 'flex';
  } else {
    sizeSel.style.display = 'none';
  }

  document.getElementById('modalPrice').textContent = `Rs. ${item.prices[currentSizeKey]}`;
  document.getElementById('modalImgPlaceholder').textContent = item.emoji;
  document.getElementById('modalImg').style.display = 'none';
  document.getElementById('modalImgPlaceholder').style.display = 'flex';

  document.getElementById('itemModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectSize(size, btn) {
  currentSizeKey = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('modalPrice').textContent = `Rs. ${currentItem.prices[size]}`;
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('modalQty').textContent = currentQty;
}

function addToCartFromModal() {
  if (!currentItem) return;
  addToCart(currentItem, currentSizeKey, currentQty);
  closeModal();
  showToast(`✅ ${currentItem.name} cart mein add ho gaya!`);
}

function closeModal() {
  document.getElementById('itemModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== CART =====
function addToCart(item, sizeKey, qty = 1) {
  const price = item.prices[sizeKey];
  const existing = cart.find(c => c.id === item.id && c.sizeKey === sizeKey);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: item.id, name: item.name, emoji: item.emoji, sizeKey, price, qty });
  }
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('subTotal').textContent = `Rs. ${total}`;
  document.getElementById('grandTotal').textContent = `Rs. ${total + 50}`;
  document.getElementById('sidebarTotal').textContent = `Rs. ${total}`;
  renderCartSidebar();
  renderCartSection();
}

function renderCartSidebar() {
  const el = document.getElementById('cartSidebarItems');
  if (!cart.length) {
    el.innerHTML = '<p class="empty-cart">Cart khali hai</p>';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">${item.sizeKey} • Rs. ${item.price}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeCartQty(${item.id},'${item.sizeKey}',-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeCartQty(${item.id},'${item.sizeKey}',1)">+</button>
      </div>
      <div class="cart-item-price">Rs. ${item.price * item.qty}</div>
    </div>
  `).join('');
}

function renderCartSection() {
  const el = document.getElementById('cartItems');
  if (!cart.length) {
    el.innerHTML = '<p class="empty-cart">Cart khali hai — menu se items add karein</p>';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <span class="cart-item-emoji">${item.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">${item.sizeKey} • Rs. ${item.price}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeCartQty(${item.id},'${item.sizeKey}',-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeCartQty(${item.id},'${item.sizeKey}',1)">+</button>
      </div>
      <div class="cart-item-price">Rs. ${item.price * item.qty}</div>
    </div>
  `).join('');
}

function changeCartQty(id, sizeKey, delta) {
  const idx = cart.findIndex(c => c.id === id && c.sizeKey === sizeKey);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('active');
}

// ===== ORDER VIA WHATSAPP =====
function placeOrder() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const note = document.getElementById('custNote').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked')?.value || 'COD';

  if (!name || !phone || !address) {
    showToast('⚠️ Naam, Phone aur Address zaroor bhar ain!');
    return;
  }
  if (!cart.length) {
    showToast('⚠️ Pehle koi item cart mein daalein!');
    return;
  }

  const orderLines = cart.map(i => `• ${i.name} (${i.sizeKey}) x${i.qty} = Rs. ${i.price * i.qty}`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = `🌶️ *MIRCHI 360° – New Order* 🌶️\n\n` +
    `👤 *Naam:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address:* ${address}\n\n` +
    `🛒 *Order:*\n${orderLines}\n\n` +
    `💰 *Sub Total:* Rs. ${total}\n🛵 *Delivery:* Rs. 50\n✅ *Total:* Rs. ${total + 50}\n\n` +
    `💳 *Payment:* ${payment}` +
    (note ? `\n📝 *Note:* ${note}` : '');

  window.open(`https://wa.me/923324187360?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== TABLE STATUS =====
function initTableStatus() {
  const grid = document.getElementById('tablesGrid');
  // 20 tables – simulated status
  const statuses = ['free','free','free','occupied','occupied','reserved','free','free','occupied','free',
                    'occupied','free','reserved','free','free','occupied','free','free','free','occupied'];
  statuses.forEach((status, i) => {
    const el = document.createElement('div');
    el.className = `table-item ${status}`;
    const labels = { free: '✓', occupied: '✗', reserved: '~' };
    el.title = `Table ${i+1}: ${status === 'free' ? 'Khali' : status === 'occupied' ? 'Bhara hua' : 'Reserved'}`;
    el.innerHTML = `<span style="font-size:0.6rem;font-weight:900">${i+1}<br>${labels[status]}</span>`;
    grid.appendChild(el);
  });

  // Legend
  const legend = document.createElement('div');
  legend.style.cssText = 'display:flex;gap:1rem;font-size:0.7rem;margin-top:0.5rem;flex-wrap:wrap';
  legend.innerHTML = `
    <span style="color:#22c55e">✓ Khali</span>
    <span style="color:#e8141c">✗ Bhara</span>
    <span style="color:#f5a623">~ Reserved</span>
  `;
  grid.parentNode.insertBefore(legend, grid.nextSibling);
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== AI ASSISTANT =====
function toggleAI() {
  document.getElementById('aiAssistant').classList.toggle('open');
}

const RESTAURANT_CONTEXT = `
You are the AI assistant for Mirchi 360, a premium Pakistani restaurant located in Tando Adam, Sanghar, Pakistan.
You speak EXCLUSIVELY in Urdu language (Pakistan's national language). Do not reply in English.
Use warm, helpful, conversational Urdu. You can use Roman Urdu or pure Urdu script.

RESTAURANT INFO:
- Name: Mirchi 360° – Three Sixty Degrees of Flavour
- Location: Tando Adam – Sanghar Road, Tando Adam, Sindh, Pakistan  
- Phone: 0332-4187360, 0319-7833360, 0305-8368360
- PTCL: 0235-541060, 0235-542361
- Hours: Roz (Daily) – Dopahar 12 baje se Raat 1 baje tak
- WhatsApp: 0332-4187360
- Home Delivery: Tando Adam & Sanghar mein available
- Established: 2020

TABLE STATUS:
- Total 20 tables
- Abhi lagbhag 12 tables khali hain, 5 occupied, 3 reserved
- Rush hours: Sham 7 baje se 9 baje tak (bohot zyada bheed)
- Quiet time: Dopahar 12-2 baje, Raat 10-11 baje
- Reservation ke liye call karein: 0332-4187360

STOCK STATUS (approx):
- Chicken items: Har waqt available
- Mutton: Limited quantity – pehle call karke confirm karein
- Fish (BBQ Sanghar): Weekend par special – weekdays bhi available
- Fresh Juices: Sabhi available daily
- Kunafa & special desserts: Evening ke baad better availability

MOST POPULAR / TASTY ITEMS:
1. Chicken Karahi – Sanghar mein mashoor! Rs. 1200-2400
2. Mutton Handi – Sabse zyada pasand kiya jaata hai – Rs. 2100-3600
3. Royal Sindhi Biryani – Must try! – Rs. 1050-1800
4. BBQ Platter – Best value! Rs. 2800-4300
5. Tikka Biryani – Customer favourite – Rs. 1150-2000
6. Chicken Tikka Pizza – Desi-Italian fusion – Rs. 530-1300
7. Dynamite Chicken – New hit item! Rs. 700
8. Lemon Mint shake – Best summer drink – Rs. 290
9. Kunafa – Mithay mein best! Rs. 800
10. Chicken White Karahi – Ladies ka favourite – Rs. 1250-2500

BUDGET OPTIONS (under Rs. 500):
- Plain Paratha: Rs. 70
- Chapati: Rs. 30
- Naan: Rs. 40
- Garlic Naan: Rs. 65
- Aalu Paratha: Rs. 270
- Plain Rice: Rs. 350
- French Fries: Rs. 300
- Hot N Sour Soup: Rs. 280
- Lemon Mint: Rs. 290
- Green Salad: Rs. 150
- Raita: Rs. 150
- Chicken Roll: Rs. 280

DELIVERY INFO:
- Delivery charge: Rs. 50 flat
- Order via WhatsApp: 0332-4187360
- Approximate delivery time: 30-45 minutes
- Area: Tando Adam aur Sanghar city mein delivery

Be helpful, friendly, and always respond ONLY in Urdu. If someone asks about a specific food, recommend it enthusiastically and mention its price.
`;

async function sendAIMessage() {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendAIMessage(text, 'user');
  const thinkingId = appendThinking();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: RESTAURANT_CONTEXT,
        messages: [{ role: 'user', content: text }]
      })
    });
    const data = await response.json();
    removeThinking(thinkingId);
    const reply = data.content?.map(c => c.text || '').join('') || 'معذرت، کوئی جواب نہیں ملا۔';
    appendAIMessage(reply, 'bot');
  } catch (err) {
    removeThinking(thinkingId);
    appendAIMessage('معذرت، ابھی جواب دینے میں مسئلہ ہے۔ براہ کرم دوبارہ کوشش کریں۔ 🌶️', 'bot');
  }
}

function sendQuickMsg(text) {
  document.getElementById('aiInput').value = text;
  sendAIMessage();
}

function appendAIMessage(text, role) {
  const container = document.getElementById('aiMessages');
  const msg = document.createElement('div');
  msg.className = `ai-msg ${role}`;
  msg.innerHTML = `<div class="msg-bubble">${text}</div>`;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function appendThinking() {
  const container = document.getElementById('aiMessages');
  const id = 'thinking-' + Date.now();
  const msg = document.createElement('div');
  msg.className = 'ai-msg bot';
  msg.id = id;
  msg.innerHTML = `<div class="msg-bubble thinking"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeThinking(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}
