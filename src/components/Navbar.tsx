import React from 'react';
import { BookOpen } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">FlowBook</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
            <a href="#docs" className="text-slate-600 hover:text-slate-900">Docs</a>
          </div>
        </div>
      </div>
    </nav>
  );
};