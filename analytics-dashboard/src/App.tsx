import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Dashboard from '@/pages/Dashboard';
import '@/styles/globals.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar 
            isCollapsed={sidebarCollapsed} 
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
          />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            
            <main className="flex-1 overflow-y-auto p-6 main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Dashboard />} />
                <Route path="/users" element={<ComingSoon title="Users" />} />
                <Route path="/sales" element={<ComingSoon title="Sales" />} />
                <Route path="/growth" element={<ComingSoon title="Growth" />} />
                <Route path="/notifications" element={<ComingSoon title="Notifications" />} />
                <Route path="/settings" element={<ComingSoon title="Settings" />} />
                <Route path="/help" element={<ComingSoon title="Help" />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

// Placeholder component for unimplemented pages
const ComingSoon: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">🚧</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {title} Page
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        This page is under construction. Check back soon!
      </p>
    </div>
  </div>
);

export default App;