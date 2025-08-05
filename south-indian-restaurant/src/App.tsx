import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { MenuSection } from './components/menu/MenuSection';
import { CartSidebar } from './components/cart/CartSidebar';
import { CheckoutForm } from './components/checkout/CheckoutForm';
import { ReservationForm } from './components/reservation/ReservationForm';
import { Footer } from './components/layout/Footer';
import { Order, Bill, Reservation } from './types';

export const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [currentBill, setCurrentBill] = useState<Bill | null>(null);

  const handleOrderComplete = (order: Order, bill: Bill) => {
    setCurrentOrder(order);
    setCurrentBill(bill);
    setIsCartOpen(false);
    // In a real app, you might redirect to a success page or show order tracking
  };

  const handleReservationSubmit = (reservation: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => {
    // In a real app, this would be sent to a backend API
    const newReservation: Reservation = {
      ...reservation,
      id: `RES${Date.now()}`,
      createdAt: new Date(),
      status: 'confirmed',
    };
    
    console.log('New reservation:', newReservation);
    setShowReservation(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-warm-50">
        <Header 
          onCartClick={() => setIsCartOpen(true)}
          onReservationClick={() => setShowReservation(true)}
        />
        
        <main>
          <Hero />
          <MenuSection />
        </main>
        
        <Footer />

        {/* Cart Sidebar */}
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => {
            setIsCartOpen(false);
            setShowCheckout(true);
          }}
        />

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <CheckoutForm
                  onOrderComplete={handleOrderComplete}
                  onClose={() => setShowCheckout(false)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Reservation Modal */}
        {showReservation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <ReservationForm
                  onSubmit={handleReservationSubmit}
                  onClose={() => setShowReservation(false)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#FEF3C7',
              color: '#92400E',
              border: '1px solid #F59E0B',
            },
            success: {
              style: {
                background: '#D1FAE5',
                color: '#065F46',
                border: '1px solid #10B981',
              },
            },
            error: {
              style: {
                background: '#FEE2E2',
                color: '#991B1B',
                border: '1px solid #EF4444',
              },
            },
          }}
        />
      </div>
    </CartProvider>
  );
};