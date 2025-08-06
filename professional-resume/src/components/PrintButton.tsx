import React from 'react';
import { Printer, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface PrintButtonProps {
  onPrint: () => void;
  onDownload: () => void;
}

export default function PrintButton({ onPrint, onDownload }: PrintButtonProps) {
  return (
    <div className="fixed top-6 right-6 z-50 print-hidden">
      <div className="flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrint}
          className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary-700 transition-colors"
        >
          <Printer className="w-5 h-5" />
          <span className="hidden sm:inline">Print Resume</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDownload}
          className="flex items-center space-x-2 bg-accent-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-accent-700 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span className="hidden sm:inline">Download PDF</span>
        </motion.button>
      </div>
    </div>
  );
}