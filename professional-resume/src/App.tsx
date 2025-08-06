import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import PrintButton from './components/PrintButton';
import { resumeData } from './data/resumeData';

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: resumeRef.current.scrollWidth,
        height: resumeRef.current.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.save('RaviKiran_Bantwal_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try using the print option instead.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PrintButton onPrint={handlePrint} onDownload={handleDownload} />
      
      <motion.div
        ref={resumeRef}
        className="resume-container max-w-6xl mx-auto bg-white shadow-lg print:shadow-none print:max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Header personal={resumeData.personal} />
        
        <div className="space-y-0">
          <Summary 
            bio={resumeData.personal.bio} 
            stats={resumeData.stats} 
          />
          
          <Skills skills={resumeData.skills} />
          
          <Experience experiences={resumeData.experience} />
          
          <Projects projects={resumeData.projects} />
          
          <Education 
            certifications={resumeData.certifications} 
          />
        </div>

        {/* Footer */}
        <motion.footer 
          className="bg-gray-800 text-white p-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 mb-2">
              Thank you for considering my application. I look forward to discussing how my experience can contribute to your team.
            </p>
            <p className="text-sm text-gray-400">
              Resume generated on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </motion.footer>
      </motion.div>

      {/* Scroll to Top Indicator */}
      <motion.div
        className="fixed bottom-6 left-6 print-hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
