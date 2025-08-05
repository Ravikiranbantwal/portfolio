import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { menuCategories, getMenuItemsByCategory, searchMenuItems } from '@/data/menuData';
import { MenuCard } from './MenuCard';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const displayItems = searchQuery 
    ? searchMenuItems(searchQuery)
    : getMenuItemsByCategory(activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchQuery(''); // Clear search when changing category
  };

  return (
    <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-900 mb-4 font-dancing">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-warm-700 max-w-2xl mx-auto">
            Authentic South Indian vegetarian cuisine prepared with love and traditional spices
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-500" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10 w-full"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-warm-600 hover:bg-warm-100'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-brand-500 text-white'
                    : 'bg-white text-warm-600 hover:bg-warm-100'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`${
                    activeCategory === category.id ? 'tab-active' : 'tab-inactive'
                  }`}
                >
                  <span className="mr-2 text-lg">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="text-warm-700">
              {searchQuery ? (
                <span>Found {displayItems.length} dishes for "{searchQuery}"</span>
              ) : (
                <span>
                  {displayItems.length} dishes in{' '}
                  {menuCategories.find(cat => cat.id === activeCategory)?.name}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {displayItems.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </motion.div>

        {/* No Results */}
        {displayItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-warm-800 mb-2">
              No dishes found
            </h3>
            <p className="text-warm-600">
              {searchQuery
                ? `Try searching for something else or browse our categories`
                : 'This category is coming soon!'}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="btn-primary mt-4"
              >
                Clear Search
              </button>
            )}
          </motion.div>
        )}

        {/* Category Description */}
        {!searchQuery && displayItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
              <div className="text-4xl mb-4">
                {menuCategories.find(cat => cat.id === activeCategory)?.icon}
              </div>
              <h3 className="text-2xl font-bold text-warm-900 mb-3">
                {menuCategories.find(cat => cat.id === activeCategory)?.name}
              </h3>
              <p className="text-warm-700">
                {menuCategories.find(cat => cat.id === activeCategory)?.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};