import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Activity,
  Download,
  RefreshCw,
} from 'lucide-react';
import StatCard from '@/components/widgets/StatCard';
import RevenueChart from '@/components/charts/RevenueChart';
import TrafficChart from '@/components/charts/TrafficChart';
import { generateMockData, generateRealtimeUpdate } from '@/data/mockData';
import { AnalyticsData } from '@/types';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>(generateMockData());
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const updates = generateRealtimeUpdate(data);
      setData(prev => ({ ...prev, ...updates }));
      setLastUpdated(new Date());
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [data]);

  const handleRefresh = async () => {
    setLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setData(generateMockData());
    setLastUpdated(new Date());
    setLoading(false);
  };

  const handleExport = () => {
    // Simulate export functionality
    const csvData = data.revenueChart.map(item => 
      `${item.month},${item.revenue},${item.orders},${item.users}`
    ).join('\n');
    
    const blob = new Blob([`Month,Revenue,Orders,Users\n${csvData}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'analytics-data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Overview of your business metrics and performance
          </p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="btn-secondary px-4 py-2 flex items-center space-x-2"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            <span>Refresh</span>
          </button>
          <button
            onClick={handleExport}
            className="btn-primary px-4 py-2 flex items-center space-x-2"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={data.stats.totalUsers}
          change={8.2}
          icon={Users}
          color="blue"
          loading={loading}
        />
        <StatCard
          title="Total Revenue"
          value={`$${(data.stats.totalRevenue / 1000).toFixed(0)}K`}
          change={data.stats.growthRate}
          icon={DollarSign}
          color="green"
          loading={loading}
        />
        <StatCard
          title="Total Orders"
          value={data.stats.totalOrders}
          change={12.5}
          icon={ShoppingCart}
          color="purple"
          loading={loading}
        />
        <StatCard
          title="Conversion Rate"
          value={`${data.stats.conversionRate.toFixed(1)}%`}
          change={-2.1}
          icon={TrendingUp}
          color="orange"
          loading={loading}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          className="card p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Revenue Overview
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Monthly revenue and orders trend
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-gray-600 dark:text-gray-400">Revenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span className="text-gray-600 dark:text-gray-400">Orders</span>
              </div>
            </div>
          </div>
          <RevenueChart data={data.revenueChart} height={350} />
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          className="card p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Traffic Sources
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Where your visitors are coming from
            </p>
          </div>
          <TrafficChart data={data.trafficSources} height={300} />
        </motion.div>
      </div>

      {/* Sales Performance Table */}
      <motion.div
        className="card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Top Products
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Best performing products by revenue
            </p>
          </div>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                  Product
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                  Category
                </th>
                <th className="text-right py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                  Sales
                </th>
                <th className="text-right py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                  Revenue
                </th>
                <th className="text-right py-3 px-4 font-medium text-gray-600 dark:text-gray-400">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody>
              {data.salesData.map((product, index) => (
                <motion.tr
                  key={product.product}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {product.product}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right text-gray-900 dark:text-white">
                    {product.sales.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right font-medium text-gray-900 dark:text-white">
                    ${product.revenue.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end">
                      {product.growth > 0 ? (
                        <TrendingUp size={14} className="text-green-500 mr-1" />
                      ) : (
                        <Activity size={14} className="text-red-500 mr-1" />
                      )}
                      <span className={`text-sm font-medium ${
                        product.growth > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {product.growth > 0 ? '+' : ''}{product.growth}%
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;