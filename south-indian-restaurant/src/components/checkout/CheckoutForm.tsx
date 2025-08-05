import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, CreditCard, DollarSign, Receipt, CheckCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { CustomerInfo, Order, Bill, RestaurantInfo } from '@/types';
import toast from 'react-hot-toast';
import { BillReceipt } from './BillReceipt';

interface CheckoutFormProps {
  onOrderComplete: (order: Order, bill: Bill) => void;
  onClose: () => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onOrderComplete,
  onClose,
}) => {
  const { cart, clearCart } = useCart();
  const [step, setStep] = useState<'details' | 'payment' | 'completed'>('details');
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedBill, setGeneratedBill] = useState<Bill | null>(null);

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    email: '',
  });

  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'upi'>('cash');

  // Restaurant Information
  const restaurantInfo: RestaurantInfo = {
    name: 'South Indian Delights',
    address: '123 MG Road, Bangalore, Karnataka 560001',
    phone: '+91 80 2222 3333',
    email: 'info@southindiandelights.com',
    gstNumber: 'GST29ABCDE1234F1Z5',
    timing: {
      open: '08:00',
      close: '22:00',
    },
    currency: 'INR',
  };

  // Calculate totals
  const subtotal = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const serviceCharge = orderType === 'dine-in' ? subtotal * 0.10 : 0; // 10% service charge for dine-in
  const discount = 0; // No discount for now
  const total = subtotal + tax + serviceCharge - discount;

  const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerInfo.name || !customerInfo.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setStep('payment');
  };

  const generateBillNumber = (): string => {
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
    const timeStr = date.getTime().toString().slice(-4);
    return `SID${dateStr}${timeStr}`;
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));

      const orderId = `ORD${Date.now()}`;
      const billId = `BILL${Date.now()}`;
      const billNumber = generateBillNumber();

      // Create order
      const order: Order = {
        id: orderId,
        items: cart.items,
        total,
        customerInfo,
        orderType,
        status: 'pending',
        createdAt: new Date(),
        estimatedTime: 20 + Math.floor(Math.random() * 15), // 20-35 minutes
        tableNumber: orderType === 'dine-in' ? tableNumber : undefined,
      };

      // Create bill
      const bill: Bill = {
        id: billId,
        orderId,
        items: cart.items,
        subtotal,
        tax,
        serviceCharge,
        discount,
        total,
        paymentMethod,
        customerInfo,
        restaurantInfo,
        createdAt: new Date(),
        billNumber,
      };

      setGeneratedBill(bill);
      clearCart();
      setStep('completed');
      onOrderComplete(order, bill);
      
      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 'completed' && generatedBill) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="success-checkmark mb-4">
            <CheckCircle size={64} className="text-green-500 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-warm-600">
            Thank you for your order. Here's your receipt:
          </p>
        </div>

        <BillReceipt bill={generatedBill} />

        <div className="text-center mt-8">
          <button onClick={onClose} className="btn-primary px-8 py-3">
            Close
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center ${step === 'details' ? 'text-brand-600' : 'text-green-600'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'details' ? 'bg-brand-100 text-brand-600' : 'bg-green-100 text-green-600'
            }`}>
              {step !== 'details' ? <CheckCircle size={20} /> : '1'}
            </div>
            <span className="ml-2 font-medium">Customer Details</span>
          </div>
          
          <div className={`w-8 h-1 ${step === 'payment' || step === 'completed' ? 'bg-green-500' : 'bg-warm-300'}`} />
          
          <div className={`flex items-center ${
            step === 'details' ? 'text-warm-400' : 
            step === 'payment' ? 'text-brand-600' : 'text-green-600'
          }`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === 'details' ? 'bg-warm-100 text-warm-400' :
              step === 'payment' ? 'bg-brand-100 text-brand-600' : 'bg-green-100 text-green-600'
            }`}>
              {step === 'completed' ? <CheckCircle size={20} /> : '2'}
            </div>
            <span className="ml-2 font-medium">Payment</span>
          </div>
        </div>
      </div>

      {/* Customer Details Step */}
      {step === 'details' && (
        <motion.form
          onSubmit={handleDetailsSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-warm-900 mb-2">Customer Details</h2>
            <p className="text-warm-600">Please provide your information for the order</p>
          </div>

          {/* Order Type Selection */}
          <div>
            <label className="block text-sm font-medium text-warm-800 mb-3">
              Order Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setOrderType('dine-in')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  orderType === 'dine-in'
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-warm-300 hover:border-brand-300'
                }`}
              >
                <div className="text-2xl mb-2">🍽️</div>
                <div className="font-medium">Dine In</div>
                <div className="text-xs text-warm-600">Eat at restaurant</div>
              </button>
              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  orderType === 'takeaway'
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-warm-300 hover:border-brand-300'
                }`}
              >
                <div className="text-2xl mb-2">🥡</div>
                <div className="font-medium">Takeaway</div>
                <div className="text-xs text-warm-600">Take food home</div>
              </button>
            </div>
          </div>

          {/* Table Number for Dine-in */}
          {orderType === 'dine-in' && (
            <div>
              <label className="block text-sm font-medium text-warm-800 mb-2">
                Table Number
              </label>
              <select
                value={tableNumber}
                onChange={(e) => setTableNumber(parseInt(e.target.value))}
                className="input"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>Table {num}</option>
                ))}
              </select>
            </div>
          )}

          {/* Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-warm-800 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-500" />
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleCustomerInfoChange}
                  className="input pl-10"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-warm-800 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-500" />
                <input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleCustomerInfoChange}
                  className="input pl-10"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-warm-800 mb-2">
              Email (Optional)
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-500" />
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleCustomerInfoChange}
                className="input pl-10"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-warm-50 rounded-lg p-6">
            <h3 className="font-bold text-warm-900 mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal ({cart.itemCount} items):</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%):</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              {serviceCharge > 0 && (
                <div className="flex justify-between">
                  <span>Service Charge (10%):</span>
                  <span>₹{serviceCharge.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-warm-300">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button type="button" onClick={onClose} className="flex-1 btn-secondary py-3">
              Cancel
            </button>
            <button type="submit" className="flex-1 btn-primary py-3">
              Continue to Payment
            </button>
          </div>
        </motion.form>
      )}

      {/* Payment Step */}
      {step === 'payment' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-warm-900 mb-2">Payment Method</h2>
            <p className="text-warm-600">Choose how you'd like to pay</p>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setPaymentMethod('cash')}
              className={`p-6 rounded-lg border-2 transition-all text-center ${
                paymentMethod === 'cash'
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-warm-300 hover:border-brand-300'
              }`}
            >
              <DollarSign size={32} className="mx-auto mb-3 text-green-600" />
              <div className="font-bold mb-1">Cash</div>
              <div className="text-xs text-warm-600">Pay with cash</div>
            </button>

            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-6 rounded-lg border-2 transition-all text-center ${
                paymentMethod === 'card'
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-warm-300 hover:border-brand-300'
              }`}
            >
              <CreditCard size={32} className="mx-auto mb-3 text-blue-600" />
              <div className="font-bold mb-1">Card</div>
              <div className="text-xs text-warm-600">Credit/Debit card</div>
            </button>

            <button
              onClick={() => setPaymentMethod('upi')}
              className={`p-6 rounded-lg border-2 transition-all text-center ${
                paymentMethod === 'upi'
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-warm-300 hover:border-brand-300'
              }`}
            >
              <Phone size={32} className="mx-auto mb-3 text-purple-600" />
              <div className="font-bold mb-1">UPI</div>
              <div className="text-xs text-warm-600">Pay with UPI</div>
            </button>
          </div>

          {/* Payment Instructions */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 mt-1">ℹ️</div>
              <div className="text-sm text-blue-800">
                {paymentMethod === 'cash' && 'Please have exact change ready. Payment will be collected at the counter.'}
                {paymentMethod === 'card' && 'Card payment will be processed at the counter using our secure POS terminal.'}
                {paymentMethod === 'upi' && 'You can pay using any UPI app by scanning the QR code at the counter.'}
              </div>
            </div>
          </div>

          {/* Final Order Summary */}
          <div className="bg-warm-50 rounded-lg p-6">
            <h3 className="font-bold text-warm-900 mb-4">Final Order Summary</h3>
            <div className="space-y-3">
              {cart.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-warm-300 pt-3 space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST (18%):</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                {serviceCharge > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Service Charge (10%):</span>
                    <span>₹{serviceCharge.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-warm-400">
                  <span>Total:</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setStep('details')}
              className="flex-1 btn-secondary py-3"
            >
              Back
            </button>
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="flex-1 btn-primary py-3"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="loading-dots">
                    <div className="loading-dot bg-white"></div>
                    <div className="loading-dot bg-white"></div>
                    <div className="loading-dot bg-white"></div>
                  </div>
                  <span className="ml-2">Processing...</span>
                </div>
              ) : (
                <>
                  <Receipt size={18} className="mr-2" />
                  Place Order (₹{total.toFixed(2)})
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};