export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  specialInstructions?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  orderType: 'dine-in' | 'takeaway';
  status: 'pending' | 'preparing' | 'ready' | 'served' | 'completed';
  createdAt: Date;
  estimatedTime: number;
  tableNumber?: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email?: string;
}

export interface Reservation {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: Date;
  tablePreference?: 'window' | 'corner' | 'center' | 'outdoor';
}

export interface Table {
  id: number;
  capacity: number;
  location: 'window' | 'corner' | 'center' | 'outdoor';
  isAvailable: boolean;
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  gstNumber: string;
  timing: {
    open: string;
    close: string;
  };
  currency: string;
}

export interface Bill {
  id: string;
  orderId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  serviceCharge: number;
  discount: number;
  total: number;
  paymentMethod: 'cash' | 'card' | 'upi';
  customerInfo: CustomerInfo;
  restaurantInfo: RestaurantInfo;
  createdAt: Date;
  billNumber: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  capacity: number;
}