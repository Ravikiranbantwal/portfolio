import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Cart } from '@/types';
import toast from 'react-hot-toast';

interface CartContextType {
  cart: Cart;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
    itemCount: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('restaurant-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('restaurant-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(cartItem => cartItem.id === item.id);
      
      let newItems: CartItem[];
      
      if (existingItemIndex > -1) {
        // Item already exists, update quantity
        newItems = prevCart.items.map((cartItem, index) => 
          index === existingItemIndex 
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
        toast.success(`Updated ${item.name} quantity in cart!`);
      } else {
        // New item, add to cart
        newItems = [...prevCart.items, { ...item, quantity }];
        toast.success(`Added ${item.name} to cart!`);
      }

      const newTotal = newItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
      const newItemCount = newItems.reduce((count, cartItem) => count + cartItem.quantity, 0);

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const itemToRemove = prevCart.items.find(item => item.id === itemId);
      const newItems = prevCart.items.filter(item => item.id !== itemId);
      const newTotal = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      const newItemCount = newItems.reduce((count, item) => count + item.quantity, 0);

      if (itemToRemove) {
        toast.success(`Removed ${itemToRemove.name} from cart!`);
      }

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      );
      const newTotal = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      const newItemCount = newItems.reduce((count, item) => count + item.quantity, 0);

      return {
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      total: 0,
      itemCount: 0,
    });
    toast.success('Cart cleared!');
  };

  const getCartTotal = () => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.items.reduce((count, item) => count + item.quantity, 0);
  };

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};