import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  onCheckout,
}) => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-warm-200">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-brand-500" size={24} />
                <h2 className="text-xl font-bold text-warm-900">
                  Your Order ({cart.itemCount} items)
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-warm-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-warm-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-bold text-warm-800 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-warm-600">
                    Add some delicious items to get started!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="card p-4"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Item Image */}
                        <div className="w-16 h-16 bg-gradient-to-br from-spice-turmeric to-spice-saffron rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🍽️</span>
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-warm-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-brand-600 font-bold">
                            ₹{item.price}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="quantity-btn"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 text-center font-bold text-brand-600">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="quantity-btn"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-warm-900">
                                ₹{item.price * item.quantity}
                              </span>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  {cart.items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="w-full btn-outline py-2 text-sm"
                    >
                      <Trash2 size={14} className="mr-2" />
                      Clear Cart
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.items.length > 0 && (
              <div className="border-t border-warm-200 p-6 bg-warm-50">
                {/* Order Summary */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-warm-700">Subtotal:</span>
                    <span className="font-bold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-700">GST (18%):</span>
                    <span className="font-bold">₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-brand-600 pt-2 border-t border-warm-300">
                    <span>Total:</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  onClick={onCheckout}
                  className="w-full btn-primary py-4 text-lg font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>

                {/* Estimated Time */}
                <p className="text-center text-sm text-warm-600 mt-3">
                  Estimated preparation time: 15-25 minutes
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};