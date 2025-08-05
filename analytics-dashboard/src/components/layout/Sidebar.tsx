import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Home,
  Users,
  ShoppingCart,
  TrendingUp,
  Settings,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard', badge: null },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', badge: null },
    { path: '/users', icon: Users, label: 'Users', badge: '2.4k' },
    { path: '/sales', icon: ShoppingCart, label: 'Sales', badge: null },
    { path: '/growth', icon: TrendingUp, label: 'Growth', badge: 'New' },
  ];

  const bottomItems = [
    { path: '/notifications', icon: Bell, label: 'Notifications', badge: '3' },
    { path: '/settings', icon: Settings, label: 'Settings', badge: null },
    { path: '/help', icon: HelpCircle, label: 'Help', badge: null },
  ];

  const isActive = (path: string) => location.pathname === path;

  const sidebarVariants = {
    expanded: { width: 280 },
    collapsed: { width: 80 },
  };

  const itemVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -10 },
  };

  return (
    <motion.aside
      className="sidebar flex flex-col h-screen sticky top-0 z-40"
      variants={sidebarVariants}
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <motion.div
          className="flex items-center space-x-3"
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BarChart3 size={20} className="text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Analytics
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Dashboard Pro
              </p>
            </div>
          )}
        </motion.div>
        
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight size={16} className="text-gray-500" />
          ) : (
            <ChevronLeft size={16} className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 group relative ${
              isActive(item.path)
                ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <item.icon
              size={20}
              className={`flex-shrink-0 ${
                isActive(item.path)
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
              }`}
            />
            
            <motion.div
              className="flex items-center justify-between flex-1 ml-3"
              variants={itemVariants}
              animate={isCollapsed ? 'collapsed' : 'expanded'}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    item.badge === 'New'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </motion.div>

            {/* Active indicator */}
            {isActive(item.path) && (
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary rounded-r-full"
                layoutId="activeIndicator"
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-2">
        {bottomItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-3 py-3 rounded-lg transition-all duration-200 group relative ${
              isActive(item.path)
                ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <item.icon
              size={20}
              className={`flex-shrink-0 ${
                isActive(item.path)
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
              }`}
            />
            
            <motion.div
              className="flex items-center justify-between flex-1 ml-3"
              variants={itemVariants}
              animate={isCollapsed ? 'collapsed' : 'expanded'}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="px-2 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 rounded-full">
                  {item.badge}
                </span>
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;