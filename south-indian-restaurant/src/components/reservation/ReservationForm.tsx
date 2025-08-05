import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { format, addDays, startOfDay } from 'date-fns';
import { Reservation, TimeSlot } from '@/types';
import toast from 'react-hot-toast';

interface ReservationFormProps {
  onSubmit: (reservation: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => void;
  onClose: () => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  onSubmit,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '',
    partySize: 2,
    specialRequests: '',
    tablePreference: '' as 'window' | 'corner' | 'center' | 'outdoor' | '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Generate available time slots
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const openTime = 8; // 8 AM
    const closeTime = 22; // 10 PM
    
    for (let hour = openTime; hour < closeTime; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        // Mock availability - some slots are full
        const available = Math.random() > 0.3;
        const capacity = Math.floor(Math.random() * 20) + 5;
        
        slots.push({
          time,
          available,
          capacity,
        });
      }
    }
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Generate next 30 days for date selection
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = addDays(new Date(), i);
    return {
      value: format(date, 'yyyy-MM-dd'),
      label: format(date, 'MMM dd, yyyy'),
      isToday: i === 0,
    };
  });

  const tablePreferences = [
    { value: 'window', label: 'Window Side', icon: '🪟' },
    { value: 'corner', label: 'Corner Table', icon: '🏪' },
    { value: 'center', label: 'Center Area', icon: '🎯' },
    { value: 'outdoor', label: 'Outdoor Seating', icon: '🌿' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'partySize' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.phone || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      const reservation: Omit<Reservation, 'id' | 'createdAt' | 'status'> = {
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email || undefined,
        date: formData.date,
        time: formData.time,
        partySize: formData.partySize,
        specialRequests: formData.specialRequests || undefined,
        tablePreference: formData.tablePreference || undefined,
      };

      onSubmit(reservation);
      setSubmitted(true);
      toast.success('Reservation confirmed successfully!');
    } catch (error) {
      toast.error('Failed to make reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="success-checkmark mb-6">
          <CheckCircle size={64} className="text-green-500 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-4">
          Reservation Confirmed!
        </h3>
        <div className="bg-green-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
          <div className="space-y-2 text-sm">
            <div><strong>Name:</strong> {formData.customerName}</div>
            <div><strong>Date:</strong> {format(new Date(formData.date), 'MMM dd, yyyy')}</div>
            <div><strong>Time:</strong> {formData.time}</div>
            <div><strong>Party Size:</strong> {formData.partySize} people</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            {formData.tablePreference && (
              <div><strong>Table:</strong> {tablePreferences.find(p => p.value === formData.tablePreference)?.label}</div>
            )}
          </div>
        </div>
        <p className="text-warm-600 mb-6">
          We'll send you a confirmation SMS shortly. Please arrive 10 minutes before your scheduled time.
        </p>
        <button onClick={onClose} className="btn-primary">
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-warm-900 mb-2">Make a Reservation</h2>
        <p className="text-warm-600">Book your table for an authentic South Indian dining experience</p>
      </div>

      {/* Customer Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-warm-800 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter your full name"
            required
          />
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
              value={formData.phone}
              onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
            className="input pl-10"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      {/* Date and Time Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-warm-800 mb-2">
            Date *
          </label>
          <div className="relative">
            <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-500" />
            <select
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="input pl-10"
              required
            >
              {availableDates.map((date) => (
                <option key={date.value} value={date.value}>
                  {date.label} {date.isToday && '(Today)'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-warm-800 mb-2">
            Time *
          </label>
          <div className="relative">
            <Clock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-500" />
            <select
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="input pl-10"
              required
            >
              <option value="">Select time</option>
              {timeSlots.map((slot) => (
                <option
                  key={slot.time}
                  value={slot.time}
                  disabled={!slot.available}
                >
                  {slot.time} {!slot.available && '(Fully Booked)'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Party Size */}
      <div>
        <label className="block text-sm font-medium text-warm-800 mb-2">
          Party Size *
        </label>
        <div className="relative">
          <Users size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-500" />
          <select
            name="partySize"
            value={formData.partySize}
            onChange={handleInputChange}
            className="input pl-10"
            required
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((size) => (
              <option key={size} value={size}>
                {size} {size === 1 ? 'person' : 'people'}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Preference */}
      <div>
        <label className="block text-sm font-medium text-warm-800 mb-2">
          Table Preference (Optional)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tablePreferences.map((preference) => (
            <button
              key={preference.value}
              type="button"
              onClick={() => setFormData(prev => ({
                ...prev,
                tablePreference: prev.tablePreference === preference.value ? '' : preference.value as any
              }))}
              className={`p-3 rounded-lg border-2 transition-all text-center ${
                formData.tablePreference === preference.value
                  ? 'border-brand-500 bg-brand-50 text-brand-700'
                  : 'border-warm-300 hover:border-brand-300'
              }`}
            >
              <div className="text-2xl mb-1">{preference.icon}</div>
              <div className="text-xs font-medium">{preference.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-medium text-warm-800 mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleInputChange}
          rows={3}
          className="input resize-none"
          placeholder="Birthday celebration, dietary restrictions, etc."
        />
      </div>

      {/* Submit Button */}
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 btn-secondary py-3"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 btn-primary py-3"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="loading-dots">
                <div className="loading-dot bg-white"></div>
                <div className="loading-dot bg-white"></div>
                <div className="loading-dot bg-white"></div>
              </div>
              <span className="ml-2">Confirming...</span>
            </div>
          ) : (
            <>
              <Calendar size={18} className="mr-2" />
              Confirm Reservation
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
};