// components/ScopusStatisticsBar.tsx
import React from "react";

interface Statistic {
  label: string;
  percentage: number;
}

interface ScopusStatisticsBarProps {
  data: Statistic[];
}

const ScopusStatisticsBar: React.FC<ScopusStatisticsBarProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">
        Statistiques des publications sur Scopus
      </h3>
      <div className="space-y-4">
        {data.map((stat, index) => (
          <div key={index} className="flex items-center">
            <span className="w-1/4 text-gray-700">{stat.label}</span>
            <div className="w-3/4 bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full"
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
            <span className="ml-4 text-gray-700">{stat.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScopusStatisticsBar;
