export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'viewer';
  lastActive: Date;
  status: 'online' | 'offline' | 'away';
}

export interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  totalOrders: number;
  conversionRate: number;
  growthRate: number;
}

export interface ChartDataPoint {
  x: string | number;
  y: number;
  label?: string;
  color?: string;
}

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  category?: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
  orders: number;
  users: number;
}

export interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
  change: number;
  color: string;
}

export interface SalesData {
  product: string;
  sales: number;
  revenue: number;
  growth: number;
  category: string;
}

export interface AnalyticsData {
  stats: DashboardStats;
  revenueChart: RevenueData[];
  trafficSources: TrafficSource[];
  salesData: SalesData[];
  userActivity: TimeSeriesData[];
  conversionFunnel: {
    stage: string;
    users: number;
    percentage: number;
  }[];
}

export interface Widget {
  id: string;
  title: string;
  type: 'stat' | 'chart' | 'list' | 'progress';
  size: 'small' | 'medium' | 'large';
  data: any;
  refreshInterval?: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system';
  primaryColor: string;
  accentColor: string;
}

export interface DashboardConfig {
  layout: 'default' | 'compact' | 'minimal';
  widgets: Widget[];
  refreshInterval: number;
  theme: ThemeConfig;
}