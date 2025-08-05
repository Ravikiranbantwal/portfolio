import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Clock, Star, Leaf } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate adding delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    }, quantity);
    
    setIsAdding(false);
    setQuantity(1);
  };

  const getSpiceIndicator = () => {
    const dots = [];
    const spiceCount = item.spiceLevel === 'mild' ? 1 : item.spiceLevel === 'medium' ? 2 : 3;
    
    for (let i = 0; i < 3; i++) {
      dots.push(
        <div
          key={i}
          className={`spice-dot ${i < spiceCount ? `spice-${item.spiceLevel}` : 'bg-gray-300'}`}
        />
      );
    }
    return <div className="spice-indicator">{dots}</div>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-food group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-warm-100">
        {/* Placeholder for food image */}
        <div className="w-full h-full bg-gradient-to-br from-spice-turmeric to-spice-saffron flex items-center justify-center">
          <span className="text-6xl opacity-80">🍽️</span>
        </div>
        
        {/* Special Badge */}
        {item.isSpecial && (
          <div className="absolute top-3 left-3 badge-special font-bold">
            <Star size={12} className="mr-1" />
            Special
          </div>
        )}
        
        {/* Veg Badge */}
        <div className="absolute top-3 right-3 badge-veg">
          <Leaf size={12} className="mr-1" />
          Veg
        </div>
        
        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-white bg-opacity-95 px-3 py-1 rounded-full font-bold text-brand-600">
          ₹{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-warm-900 group-hover:text-brand-600 transition-colors duration-300">
              {item.name}
            </h3>
            <div className="flex items-center space-x-3 mt-2">
              {getSpiceIndicator()}
              <div className="flex items-center text-warm-600 text-sm">
                <Clock size={14} className="mr-1" />
                {item.cookingTime} mins
              </div>
            </div>
          </div>
        </div>

        <p className="text-warm-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Ingredients */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {item.ingredients.slice(0, 3).map((ingredient, idx) => (
              <span
                key={idx}
                className="text-xs bg-warm-100 text-warm-700 px-2 py-1 rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {item.ingredients.length > 3 && (
              <span className="text-xs bg-warm-100 text-warm-700 px-2 py-1 rounded-full">
                +{item.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-warm-700">Qty:</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
                disabled={quantity <= 1}
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-bold text-brand-600">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <motion.button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="btn-primary px-6 py-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAdding ? (
              <div className="loading-dots">
                <div className="loading-dot bg-white"></div>
                <div className="loading-dot bg-white"></div>
                <div className="loading-dot bg-white"></div>
              </div>
            ) : (
              <>
                <Plus size={16} className="mr-2" />
                Add to Cart
              </>
            )}
          </motion.button>
        </div>

        {/* Nutritional Info (if available) */}
        {item.nutritionalInfo && (
          <div className="mt-4 pt-4 border-t border-warm-200">
            <div className="grid grid-cols-4 gap-2 text-xs text-warm-600">
              <div className="text-center">
                <div className="font-bold">{item.nutritionalInfo.calories}</div>
                <div>Cal</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{item.nutritionalInfo.protein}g</div>
                <div>Protein</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{item.nutritionalInfo.carbs}g</div>
                <div>Carbs</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{item.nutritionalInfo.fat}g</div>
                <div>Fat</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};