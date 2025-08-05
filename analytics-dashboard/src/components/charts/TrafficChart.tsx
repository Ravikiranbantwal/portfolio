import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrafficSource } from '@/types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TrafficChartProps {
  data: TrafficSource[];
  height?: number;
}

const TrafficChart: React.FC<TrafficChartProps> = ({ data, height = 300 }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">{data.source}</p>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Visitors:</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {data.visitors.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Percentage:</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {data.percentage}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Change:</span>
              <div className="flex items-center">
                {data.change > 0 ? (
                  <TrendingUp size={12} className="text-green-500 mr-1" />
                ) : (
                  <TrendingDown size={12} className="text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  data.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {Math.abs(data.change)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.05) return null; // Don't show labels for very small slices

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="visitors"
            animationBegin={0}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend with detailed stats */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {item.source}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {item.visitors.toLocaleString()}
              </span>
              <div className="flex items-center">
                {item.change > 0 ? (
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                ) : (
                  <TrendingDown size={14} className="text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  item.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficChart;