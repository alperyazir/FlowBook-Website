import React from 'react';
import { BookOpen, Puzzle, Headphones, Play, PenTool, Brain, ChevronRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { FeatureCard } from './components/FeatureCard';
import { DemoSection } from './components/DemoSection';
import { HeroSlider } from './components/HeroSlider';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Interactive Experience
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            FlowBook turns static study materials into engaging digital workbooks with interactive exercises, multimedia content, and real-time feedback.
          </p>
          <HeroSlider />
          <div className="flex gap-4 justify-center mt-12">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              Try Demo <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Interactive Learning Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6 text-blue-600" />}
              title="PDF Integration"
              description="Import any PDF study material and transform it into an interactive digital workbook"
            />
            <FeatureCard 
              icon={<Puzzle className="w-6 h-6 text-blue-600" />}
              title="Interactive Exercises"
              description="Create engaging word matching, fill-in-the-blanks, and puzzle activities"
            />
            <FeatureCard 
              icon={<Headphones className="w-6 h-6 text-blue-600" />}
              title="Audio Support"
              description="Integrate audio content for pronunciation and listening comprehension"
            />
            <FeatureCard 
              icon={<Play className="w-6 h-6 text-blue-600" />}
              title="Video Lessons"
              description="Embed video content directly within your digital workbooks"
            />
            <FeatureCard 
              icon={<PenTool className="w-6 h-6 text-blue-600" />}
              title="Writing Tools"
              description="Digital annotation and note-taking capabilities"
            />
            <FeatureCard 
              icon={<Brain className="w-6 h-6 text-blue-600" />}
              title="Progress Tracking"
              description="Monitor student progress and performance analytics"
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">FlowBook</h3>
              <p className="text-slate-400">Making learning interactive and engaging through digital transformation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Use Cases</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© 2024 FlowBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;