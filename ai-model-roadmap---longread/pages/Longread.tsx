import React, { useState, useEffect } from 'react';
import { IntroChapter } from '../components/IntroChapter';
import { GlassCeilingChapter } from '../components/GlassCeilingChapter';
import { DeadEndStrategyChapter } from '../components/DeadEndStrategyChapter';
import { UsaMarketChapter } from '../components/UsaMarketChapter';
import { AutomationChapter } from '../components/AutomationChapter';
import { MindsetChapter } from '../components/MindsetChapter';
import { CaseStudyChapter } from '../components/CaseStudyChapter';
import { AuditChapter } from '../components/AuditChapter';

export const Longread: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFD] selection:bg-blue-100 font-inter text-[#1D1D1F]">
      {/* Header & Progress Indicator */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 ios-blur border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-[720px] mx-auto px-6 flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">AI Empire Roadmap</span>
          </div>
          <div className="hidden md:block text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Level: Scaling & Systems</div>
        </div>
      </header>

      <main>
        <IntroChapter />
        <GlassCeilingChapter />
        <DeadEndStrategyChapter />
        <UsaMarketChapter />
        <AutomationChapter />
        <MindsetChapter />
        <CaseStudyChapter />
        <AuditChapter />
        
        {/* Placeholder for future chapters */}
        <div className="h-24 bg-gradient-to-b from-[#FBFBFD] to-white"></div>
      </main>

      <footer className="py-12 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-[720px] mx-auto px-6 text-center space-y-4">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
            SYSTEMS • SCALE • SUCCESS
          </div>
          <p className="text-gray-400 text-xs font-medium">© 2025 AI Empire Business Strategy</p>
        </div>
      </footer>
    </div>
  );
};