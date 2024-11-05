import React from 'react';

export const DemoSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="aspect-video rounded-xl overflow-hidden bg-white shadow-lg">
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <p className="text-slate-600">Interactive Demo Preview</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Experience how FlowBook transforms static PDFs into engaging, interactive learning materials with our live demo.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            Try Interactive Demo
          </button>
        </div>
      </div>
    </section>
  );
};