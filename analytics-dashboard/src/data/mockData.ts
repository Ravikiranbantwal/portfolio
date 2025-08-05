import { AnalyticsData, RevenueData, TrafficSource, SalesData, TimeSeriesData } from '@/types';

// Generate realistic mock data for the dashboard
export const generateMockData = (): AnalyticsData => {
  // Generate revenue data for the last 12 months
  const revenueChart: RevenueData[] = [];
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  for (let i = 0; i < 12; i++) {
    const baseRevenue = 45000 + Math.random() * 25000;
    const seasonalMultiplier = i === 10 || i === 11 ? 1.4 : 1; // Holiday boost
    revenueChart.push({
      month: months[i],
      revenue: Math.round(baseRevenue * seasonalMultiplier),
      orders: Math.round((baseRevenue * seasonalMultiplier) / 85), // Avg order value ~$85
      users: Math.round((baseRevenue * seasonalMultiplier) / 120), // Some users don't convert
    });
  }

  // Traffic sources data
  const trafficSources: TrafficSource[] = [
    {
      source: 'Organic Search',
      visitors: 15420,
      percentage: 42.3,
      change: 12.5,
      color: '#0ea5e9',
    },
    {
      source: 'Direct',
      visitors: 8760,
      percentage: 24.1,
      change: -3.2,
      color: '#d946ef',
    },
    {
      source: 'Social Media',
      visitors: 6580,
      percentage: 18.1,
      change: 28.7,
      color: '#f59e0b',
    },
    {
      source: 'Email',
      visitors: 3240,
      percentage: 8.9,
      change: 15.3,
      color: '#22c55e',
    },
    {
      source: 'Paid Ads',
      visitors: 2370,
      percentage: 6.5,
      change: -8.1,
      color: '#ef4444',
    },
  ];

  // Sales data by product
  const salesData: SalesData[] = [
    {
      product: 'Premium Analytics',
      sales: 2840,
      revenue: 142000,
      growth: 15.2,
      category: 'Software',
    },
    {
      product: 'Dashboard Pro',
      sales: 1920,
      revenue: 96000,
      growth: 8.7,
      category: 'Software',
    },
    {
      product: 'Custom Reports',
      sales: 1560,
      revenue: 78000,
      growth: 22.1,
      category: 'Services',
    },
    {
      product: 'API Access',
      sales: 980,
      revenue: 49000,
      growth: -5.3,
      category: 'Software',
    },
    {
      product: 'Consulting',
      sales: 340,
      revenue: 68000,
      growth: 34.5,
      category: 'Services',
    },
  ];

  // User activity over the last 30 days (hourly data)
  const userActivity: TimeSeriesData[] = [];
  const now = new Date();
  for (let i = 0; i < 24 * 7; i++) { // Last 7 days, hourly
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
    const hour = timestamp.getHours();
    
    // Simulate daily patterns - higher activity during business hours
    let baseActivity = 50;
    if (hour >= 9 && hour <= 17) {
      baseActivity = 150 + Math.random() * 100;
    } else if (hour >= 18 && hour <= 22) {
      baseActivity = 80 + Math.random() * 60;
    } else {
      baseActivity = 20 + Math.random() * 40;
    }
    
    userActivity.push({
      timestamp,
      value: Math.round(baseActivity),
    });
  }

  // Conversion funnel data
  const conversionFunnel = [
    { stage: 'Visitors', users: 36420, percentage: 100 },
    { stage: 'Page Views', users: 28640, percentage: 78.6 },
    { stage: 'Sign Ups', users: 5720, percentage: 15.7 },
    { stage: 'Trials', users: 2860, percentage: 7.9 },
    { stage: 'Purchases', users: 1144, percentage: 3.1 },
  ];

  return {
    stats: {
      totalUsers: 36420,
      totalRevenue: 847500,
      totalOrders: 9960,
      conversionRate: 3.14,
      growthRate: 18.2,
    },
    revenueChart,
    trafficSources,
    salesData,
    userActivity,
    conversionFunnel,
  };
};

// Real-time data updates
export const generateRealtimeUpdate = (currentData: AnalyticsData): Partial<AnalyticsData> => {
  const now = new Date();
  
  // Update user activity with new data point
  const newUserActivity = [...currentData.userActivity];
  newUserActivity.unshift({
    timestamp: now,
    value: Math.round(50 + Math.random() * 200),
  });
  
  // Keep only last 7 days
  newUserActivity.splice(24 * 7);

  // Slight updates to stats
  const statsUpdate = {
    totalUsers: currentData.stats.totalUsers + Math.floor(Math.random() * 10),
    totalRevenue: currentData.stats.totalRevenue + Math.floor(Math.random() * 1000),
    totalOrders: currentData.stats.totalOrders + Math.floor(Math.random() * 5),
    conversionRate: currentData.stats.conversionRate + (Math.random() - 0.5) * 0.1,
    growthRate: currentData.stats.growthRate + (Math.random() - 0.5) * 0.5,
  };

  return {
    stats: statsUpdate,
    userActivity: newUserActivity,
  };
};

// Generate sample notifications
export const generateNotifications = () => [
  {
    id: '1',
    title: 'Revenue Goal Achieved',
    message: 'Monthly revenue target of $800K reached!',
    type: 'success' as const,
    timestamp: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
    read: false,
  },
  {
    id: '2',
    title: 'High Traffic Detected',
    message: 'Unusual spike in organic traffic (+45% in last hour)',
    type: 'info' as const,
    timestamp: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
    read: false,
  },
  {
    id: '3',
    title: 'Conversion Rate Drop',
    message: 'Conversion rate decreased by 12% compared to yesterday',
    type: 'warning' as const,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: true,
  },
  {
    id: '4',
    title: 'System Maintenance',
    message: 'Scheduled maintenance completed successfully',
    type: 'info' as const,
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    read: true,
  },
];