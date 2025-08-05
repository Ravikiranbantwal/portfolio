export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  spiceLevel: 'mild' | 'medium' | 'hot';
  isSpecial: boolean;
  cookingTime: number; // in minutes
  ingredients: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Traditional South Indian breakfast items',
    icon: '🌅',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'dosa',
    name: 'Dosa Varieties',
    description: 'Crispy fermented crepes with various fillings',
    icon: '🥞',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'idli-vada',
    name: 'Idli & Vada',
    description: 'Steamed rice cakes and lentil fritters',
    icon: '🍚',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'rice',
    name: 'Rice Varieties',
    description: 'Flavored rice dishes and meals',
    icon: '🍛',
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 'curries',
    name: 'Curries & Gravies',
    description: 'Traditional vegetarian curries',
    icon: '🍲',
    color: 'from-red-400 to-orange-500'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Light bites and evening snacks',
    icon: '🥘',
    color: 'from-teal-400 to-cyan-500'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Traditional drinks and fresh juices',
    icon: '🥤',
    color: 'from-indigo-400 to-purple-500'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats and traditional desserts',
    icon: '🍮',
    color: 'from-pink-400 to-rose-500'
  }
];

export const menuItems: MenuItem[] = [
  // Breakfast Items
  {
    id: 'upma',
    name: 'Rava Upma',
    description: 'Traditional semolina breakfast dish with vegetables and spices',
    price: 120,
    category: 'breakfast',
    image: '/images/menu/upma.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 15,
    ingredients: ['Semolina', 'Onions', 'Green chilies', 'Curry leaves', 'Mustard seeds'],
    nutritionalInfo: { calories: 250, protein: 6, carbs: 45, fat: 8 }
  },
  {
    id: 'poha',
    name: 'Aval Upma',
    description: 'Flattened rice cooked with peanuts, curry leaves and spices',
    price: 100,
    category: 'breakfast',
    image: '/images/menu/poha.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 12,
    ingredients: ['Flattened rice', 'Peanuts', 'Onions', 'Green chilies', 'Turmeric']
  },
  {
    id: 'pongal',
    name: 'Ven Pongal',
    description: 'Comforting rice and lentil porridge seasoned with ghee and pepper',
    price: 140,
    category: 'breakfast',
    image: '/images/menu/pongal.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: true,
    cookingTime: 25,
    ingredients: ['Rice', 'Moong dal', 'Ghee', 'Black pepper', 'Cumin', 'Ginger']
  },

  // Dosa Varieties
  {
    id: 'plain-dosa',
    name: 'Plain Dosa',
    description: 'Crispy golden crepe made from fermented rice and lentil batter',
    price: 80,
    category: 'dosa',
    image: '/images/menu/plain-dosa.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 8,
    ingredients: ['Rice', 'Urad dal', 'Fenugreek seeds']
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    description: 'Crispy dosa filled with spiced potato curry',
    price: 120,
    category: 'dosa',
    image: '/images/menu/masala-dosa.jpg',
    isVeg: true,
    spiceLevel: 'medium',
    isSpecial: true,
    cookingTime: 12,
    ingredients: ['Dosa batter', 'Potatoes', 'Onions', 'Green chilies', 'Turmeric', 'Mustard seeds']
  },
  {
    id: 'mysore-masala-dosa',
    name: 'Mysore Masala Dosa',
    description: 'Spicy red chutney spread dosa with potato filling',
    price: 140,
    category: 'dosa',
    image: '/images/menu/mysore-dosa.jpg',
    isVeg: true,
    spiceLevel: 'hot',
    isSpecial: true,
    cookingTime: 15,
    ingredients: ['Dosa batter', 'Red chutney', 'Potato masala', 'Dried red chilies']
  },
  {
    id: 'cheese-dosa',
    name: 'Cheese Dosa',
    description: 'Crispy dosa topped with melted cheese',
    price: 160,
    category: 'dosa',
    image: '/images/menu/cheese-dosa.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 10,
    ingredients: ['Dosa batter', 'Mozzarella cheese', 'Coriander']
  },
  {
    id: 'rava-dosa',
    name: 'Rava Dosa',
    description: 'Thin and crispy semolina dosa with herbs',
    price: 110,
    category: 'dosa',
    image: '/images/menu/rava-dosa.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 10,
    ingredients: ['Semolina', 'Rice flour', 'Ginger', 'Green chilies', 'Cumin']
  },

  // Idli & Vada
  {
    id: 'idli',
    name: 'Idli (2 pieces)',
    description: 'Soft and fluffy steamed rice cakes served with sambar and chutney',
    price: 60,
    category: 'idli-vada',
    image: '/images/menu/idli.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 5,
    ingredients: ['Rice', 'Urad dal', 'Fenugreek seeds']
  },
  {
    id: 'medu-vada',
    name: 'Medu Vada (2 pieces)',
    description: 'Crispy lentil donuts served with sambar and coconut chutney',
    price: 80,
    category: 'idli-vada',
    image: '/images/menu/medu-vada.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 8,
    ingredients: ['Urad dal', 'Ginger', 'Green chilies', 'Curry leaves', 'Black pepper']
  },
  {
    id: 'idli-vada-combo',
    name: 'Idli Vada Combo',
    description: '1 Idli + 1 Vada with sambar and chutneys',
    price: 90,
    category: 'idli-vada',
    image: '/images/menu/idli-vada.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: true,
    cookingTime: 8,
    ingredients: ['Idli', 'Vada', 'Sambar', 'Coconut chutney', 'Tomato chutney']
  },
  {
    id: 'sambar-vada',
    name: 'Sambar Vada',
    description: 'Medu vada soaked in hot sambar',
    price: 110,
    category: 'idli-vada',
    image: '/images/menu/sambar-vada.jpg',
    isVeg: true,
    spiceLevel: 'medium',
    isSpecial: false,
    cookingTime: 10,
    ingredients: ['Medu vada', 'Sambar', 'Coriander', 'Onions']
  },

  // Rice Varieties
  {
    id: 'curd-rice',
    name: 'Curd Rice',
    description: 'Cooling rice mixed with yogurt and tempered with spices',
    price: 120,
    category: 'rice',
    image: '/images/menu/curd-rice.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 10,
    ingredients: ['Rice', 'Yogurt', 'Mustard seeds', 'Green chilies', 'Ginger', 'Curry leaves']
  },
  {
    id: 'lemon-rice',
    name: 'Lemon Rice',
    description: 'Tangy rice flavored with lemon juice and turmeric',
    price: 130,
    category: 'rice',
    image: '/images/menu/lemon-rice.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 12,
    ingredients: ['Rice', 'Lemon juice', 'Turmeric', 'Peanuts', 'Mustard seeds', 'Chana dal']
  },
  {
    id: 'coconut-rice',
    name: 'Coconut Rice',
    description: 'Fragrant rice cooked with fresh coconut and spices',
    price: 140,
    category: 'rice',
    image: '/images/menu/coconut-rice.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 15,
    ingredients: ['Rice', 'Fresh coconut', 'Cashews', 'Raisins', 'Curry leaves']
  },
  {
    id: 'tamarind-rice',
    name: 'Tamarind Rice',
    description: 'Tangy rice with tamarind pulp and aromatic spices',
    price: 135,
    category: 'rice',
    image: '/images/menu/tamarind-rice.jpg',
    isVeg: true,
    spiceLevel: 'medium',
    isSpecial: false,
    cookingTime: 18,
    ingredients: ['Rice', 'Tamarind', 'Jaggery', 'Red chilies', 'Mustard seeds', 'Asafoetida']
  },
  {
    id: 'tomato-rice',
    name: 'Tomato Rice',
    description: 'Flavorful rice cooked with tomatoes and South Indian spices',
    price: 125,
    category: 'rice',
    image: '/images/menu/tomato-rice.jpg',
    isVeg: true,
    spiceLevel: 'medium',
    isSpecial: false,
    cookingTime: 20,
    ingredients: ['Rice', 'Tomatoes', 'Onions', 'Garam masala', 'Mint leaves']
  },

  // Curries & Gravies
  {
    id: 'sambar',
    name: 'Sambar',
    description: 'Traditional lentil curry with vegetables and tamarind',
    price: 100,
    category: 'curries',
    image: '/images/menu/sambar.jpg',
    isVeg: true,
    spiceLevel: 'medium',
    isSpecial: true,
    cookingTime: 30,
    ingredients: ['Toor dal', 'Drumsticks', 'Brinjal', 'Tamarind', 'Sambar powder']
  },
  {
    id: 'rasam',
    name: 'Tomato Rasam',
    description: 'Tangy and spicy tomato soup with aromatic spices',
    price: 90,
    category: 'curries',
    image: '/images/menu/rasam.jpg',
    isVeg: true,
    spiceLevel: 'hot',
    isSpecial: false,
    cookingTime: 20,
    ingredients: ['Tomatoes', 'Tamarind', 'Rasam powder', 'Coriander', 'Ghee']
  },
  {
    id: 'dal-fry',
    name: 'Dal Fry',
    description: 'Tempered lentils cooked with onions and spices',
    price: 110,
    category: 'curries',
    image: '/images/menu/dal-fry.jpg',
    isVeg: true,
    spiceLevel: 'medium',
    isSpecial: false,
    cookingTime: 25,
    ingredients: ['Toor dal', 'Onions', 'Tomatoes', 'Turmeric', 'Cumin']
  },
  {
    id: 'kootu',
    name: 'Mixed Vegetable Kootu',
    description: 'Vegetables cooked with lentils and coconut',
    price: 130,
    category: 'curries',
    image: '/images/menu/kootu.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 25,
    ingredients: ['Mixed vegetables', 'Moong dal', 'Coconut', 'Green chilies']
  },

  // Snacks
  {
    id: 'bajji',
    name: 'Mixed Bajji',
    description: 'Assorted vegetable fritters in spiced gram flour batter',
    price: 100,
    category: 'snacks',
    image: '/images/menu/bajji.jpg',
    isVeg: true,
    spiceLevel: 'medium',
    isSpecial: false,
    cookingTime: 15,
    ingredients: ['Onions', 'Potatoes', 'Chili', 'Gram flour', 'Rice flour', 'Spices']
  },
  {
    id: 'bondas',
    name: 'Mysore Bonda',
    description: 'Fluffy deep-fried lentil balls served with chutney',
    price: 80,
    category: 'snacks',
    image: '/images/menu/bonda.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 12,
    ingredients: ['Urad dal', 'Ginger', 'Green chilies', 'Curry leaves']
  },
  {
    id: 'murukku',
    name: 'Murukku',
    description: 'Crispy spiral-shaped rice flour snack',
    price: 60,
    category: 'snacks',
    image: '/images/menu/murukku.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 5,
    ingredients: ['Rice flour', 'Urad dal flour', 'Cumin', 'Sesame seeds']
  },
  {
    id: 'banana-chips',
    name: 'Kerala Banana Chips',
    description: 'Crispy deep-fried banana slices with a hint of salt',
    price: 70,
    category: 'snacks',
    image: '/images/menu/banana-chips.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 3,
    ingredients: ['Raw bananas', 'Coconut oil', 'Salt', 'Turmeric']
  },

  // Beverages
  {
    id: 'filter-coffee',
    name: 'Filter Coffee',
    description: 'Authentic South Indian coffee brewed with chicory',
    price: 50,
    category: 'beverages',
    image: '/images/menu/filter-coffee.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: true,
    cookingTime: 5,
    ingredients: ['Coffee powder', 'Chicory', 'Milk', 'Sugar']
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    description: 'Spiced tea brewed with aromatic Indian spices',
    price: 40,
    category: 'beverages',
    image: '/images/menu/masala-chai.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 8,
    ingredients: ['Tea leaves', 'Milk', 'Ginger', 'Cardamom', 'Cinnamon', 'Cloves']
  },
  {
    id: 'buttermilk',
    name: 'Spiced Buttermilk',
    description: 'Refreshing yogurt drink with curry leaves and ginger',
    price: 45,
    category: 'beverages',
    image: '/images/menu/buttermilk.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 5,
    ingredients: ['Yogurt', 'Ginger', 'Green chilies', 'Curry leaves', 'Salt']
  },
  {
    id: 'fresh-lime',
    name: 'Fresh Lime Soda',
    description: 'Zesty lime juice with soda and a pinch of salt',
    price: 55,
    category: 'beverages',
    image: '/images/menu/lime-soda.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 3,
    ingredients: ['Fresh lime', 'Soda water', 'Sugar', 'Salt', 'Mint']
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    description: 'Creamy yogurt drink blended with sweet mango pulp',
    price: 80,
    category: 'beverages',
    image: '/images/menu/mango-lassi.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 5,
    ingredients: ['Yogurt', 'Mango pulp', 'Sugar', 'Cardamom']
  },

  // Desserts
  {
    id: 'payasam',
    name: 'Rice Payasam',
    description: 'Traditional rice pudding cooked in milk with cardamom',
    price: 90,
    category: 'desserts',
    image: '/images/menu/payasam.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: true,
    cookingTime: 45,
    ingredients: ['Rice', 'Milk', 'Sugar', 'Cardamom', 'Cashews', 'Raisins']
  },
  {
    id: 'kesari',
    name: 'Rava Kesari',
    description: 'Sweet semolina dessert flavored with saffron',
    price: 80,
    category: 'desserts',
    image: '/images/menu/kesari.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 20,
    ingredients: ['Semolina', 'Sugar', 'Ghee', 'Saffron', 'Cashews']
  },
  {
    id: 'mysore-pak',
    name: 'Mysore Pak',
    description: 'Rich and fudgy sweet made with gram flour and ghee',
    price: 100,
    category: 'desserts',
    image: '/images/menu/mysore-pak.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: true,
    cookingTime: 5,
    ingredients: ['Gram flour', 'Sugar', 'Ghee', 'Cardamom']
  },
  {
    id: 'halwa',
    name: 'Carrot Halwa',
    description: 'Sweet carrot pudding garnished with nuts',
    price: 95,
    category: 'desserts',
    image: '/images/menu/carrot-halwa.jpg',
    isVeg: true,
    spiceLevel: 'mild',
    isSpecial: false,
    cookingTime: 30,
    ingredients: ['Carrots', 'Milk', 'Sugar', 'Ghee', 'Almonds', 'Pistachios']
  }
];

// Helper functions
export const getMenuItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter(item => item.category === categoryId);
};

export const getSpecialItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isSpecial);
};

export const searchMenuItems = (query: string): MenuItem[] => {
  const searchTerm = query.toLowerCase();
  return menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm) ||
    item.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
  );
};