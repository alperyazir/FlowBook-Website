import React from 'react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};