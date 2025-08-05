import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { RevenueData } from '@/types';

interface RevenueChartProps {
  data: RevenueData[];
  type?: 'area' | 'bar';
  height?: number;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ 
  data, 
  type = 'area', 
  height = 300 
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center space-x-2 mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                {entry.dataKey}:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {entry.dataKey === 'revenue' 
                  ? formatCurrency(entry.value) 
                  : formatNumber(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  if (type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            className="text-xs text-gray-500 dark:text-gray-400"
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tickFormatter={formatCurrency}
            className="text-xs text-gray-500 dark:text-gray-400"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="revenue" 
            fill="url(#revenueGradient)" 
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.3}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#d946ef" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#d946ef" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="month" 
          axisLine={false}
          tickLine={false}
          className="text-xs text-gray-500 dark:text-gray-400"
        />
        <YAxis 
          yAxisId="revenue"
          orientation="left"
          axisLine={false}
          tickLine={false}
          tickFormatter={formatCurrency}
          className="text-xs text-gray-500 dark:text-gray-400"
        />
        <YAxis 
          yAxisId="orders"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickFormatter={formatNumber}
          className="text-xs text-gray-500 dark:text-gray-400"
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          yAxisId="revenue"
          type="monotone"
          dataKey="revenue"
          stroke="#0ea5e9"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#revenueGradient)"
        />
        <Area
          yAxisId="orders"
          type="monotone"
          dataKey="orders"
          stroke="#d946ef"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#ordersGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;