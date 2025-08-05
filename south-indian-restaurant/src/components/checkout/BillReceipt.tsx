import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Download, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { Bill } from '@/types';
import toast from 'react-hot-toast';

interface BillReceiptProps {
  bill: Bill;
}

export const BillReceipt: React.FC<BillReceiptProps> = ({ bill }) => {
  const handlePrint = () => {
    const printContent = document.getElementById('bill-receipt');
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Bill Receipt - ${bill.billNumber}</title>
              <style>
                body { 
                  font-family: 'Courier New', monospace; 
                  margin: 0; 
                  padding: 20px; 
                  font-size: 12px;
                  line-height: 1.4;
                }
                .receipt { 
                  max-width: 300px; 
                  margin: 0 auto; 
                  border: 1px solid #333;
                  padding: 15px;
                }
                .center { text-align: center; }
                .bold { font-weight: bold; }
                .separator { 
                  border-top: 1px dashed #333; 
                  margin: 10px 0; 
                  padding-top: 10px;
                }
                .item-row { 
                  display: flex; 
                  justify-content: space-between; 
                  margin-bottom: 5px;
                }
                .total-row {
                  border-top: 1px solid #333;
                  padding-top: 5px;
                  font-weight: bold;
                }
                @media print {
                  body { margin: 0; }
                }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }
    toast.success('Bill sent to printer');
  };

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    toast.success('Bill downloaded as PDF');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Bill Receipt - ${bill.billNumber}`,
        text: `Your order from ${bill.restaurantInfo.name}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(
        `Bill Receipt - ${bill.billNumber}\n${bill.restaurantInfo.name}\nTotal: ₹${bill.total.toFixed(2)}`
      );
      toast.success('Bill details copied to clipboard');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Action Buttons */}
      <div className="bg-warm-50 px-6 py-4 border-b border-warm-200">
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
          >
            <Printer size={16} />
            <span>Print</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Download size={16} />
            <span>Download</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Receipt Content */}
      <div id="bill-receipt" className="p-8 font-mono">
        {/* Restaurant Header */}
        <div className="text-center mb-6 pb-4 border-b-2 border-dashed border-warm-300">
          <h1 className="text-2xl font-bold text-warm-900 mb-2">
            {bill.restaurantInfo.name}
          </h1>
          <div className="text-sm text-warm-700 space-y-1">
            <div>{bill.restaurantInfo.address}</div>
            <div>Phone: {bill.restaurantInfo.phone}</div>
            <div>Email: {bill.restaurantInfo.email}</div>
            <div>GST No: {bill.restaurantInfo.gstNumber}</div>
          </div>
        </div>

        {/* Bill Details */}
        <div className="mb-6 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-bold text-warm-900 mb-2">Bill Details:</div>
              <div className="space-y-1 text-warm-700">
                <div>Bill No: {bill.billNumber}</div>
                <div>Order ID: {bill.orderId}</div>
                <div>Date: {format(bill.createdAt, 'dd/MM/yyyy')}</div>
                <div>Time: {format(bill.createdAt, 'HH:mm:ss')}</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-warm-900 mb-2">Customer:</div>
              <div className="space-y-1 text-warm-700">
                <div>{bill.customerInfo.name}</div>
                <div>{bill.customerInfo.phone}</div>
                {bill.customerInfo.email && <div>{bill.customerInfo.email}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="mb-6">
          <div className="font-bold text-warm-900 mb-3 pb-2 border-b border-warm-300">
            Order Items:
          </div>
          <div className="space-y-2">
            {bill.items.map((item, index) => (
              <div key={index} className="flex justify-between items-start text-sm">
                <div className="flex-1">
                  <div className="font-medium text-warm-900">{item.name}</div>
                  <div className="text-warm-600 text-xs">
                    ₹{item.price} × {item.quantity}
                  </div>
                </div>
                <div className="font-bold text-warm-900 ml-4">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bill Summary */}
        <div className="border-t-2 border-dashed border-warm-300 pt-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-warm-700">Subtotal:</span>
              <span className="font-mono">₹{bill.subtotal.toFixed(2)}</span>
            </div>
            
            {bill.serviceCharge > 0 && (
              <div className="flex justify-between">
                <span className="text-warm-700">Service Charge (10%):</span>
                <span className="font-mono">₹{bill.serviceCharge.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="text-warm-700">GST (18%):</span>
              <span className="font-mono">₹{bill.tax.toFixed(2)}</span>
            </div>
            
            {bill.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount:</span>
                <span className="font-mono">-₹{bill.discount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center pt-3 border-t border-warm-400 text-lg font-bold">
              <span className="text-warm-900">TOTAL:</span>
              <span className="text-brand-600 font-mono">₹{bill.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6 pt-4 border-t border-dashed border-warm-300 text-center">
          <div className="text-sm text-warm-700 mb-2">Payment Method:</div>
          <div className="font-bold text-warm-900 uppercase tracking-wider">
            {bill.paymentMethod === 'cash' && '💵 CASH PAYMENT'}
            {bill.paymentMethod === 'card' && '💳 CARD PAYMENT'}
            {bill.paymentMethod === 'upi' && '📱 UPI PAYMENT'}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t-2 border-dashed border-warm-300 text-center text-xs text-warm-600">
          <div className="mb-2">🙏 Thank you for dining with us! 🙏</div>
          <div className="mb-2">
            Restaurant Hours: {bill.restaurantInfo.timing.open} - {bill.restaurantInfo.timing.close}
          </div>
          <div className="mb-2">Visit us again for more delicious food!</div>
          <div className="font-bold text-warm-700">
            ⭐ Please rate us on Google & Social Media ⭐
          </div>
          
          {/* QR Code Placeholder */}
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-16 bg-warm-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
          </div>
          <div className="mt-2 text-xs">Scan for feedback & reviews</div>
        </div>

        {/* Legal Footer */}
        <div className="mt-6 pt-4 border-t border-warm-200 text-center text-xs text-warm-500">
          <div>This is a computer generated bill</div>
          <div>Subject to {bill.restaurantInfo.currency} jurisdiction only</div>
        </div>
      </div>
    </motion.div>
  );
};