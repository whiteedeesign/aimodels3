import React from 'react';
import { ArrowDown } from 'lucide-react';

export const IntroChapter: React.FC = () => {
  return (
    <section className="min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center bg-white px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black tracking-tighter">
          EMPIRE
        </div>
      </div>

      <div className="max-w-[800px] w-full space-y-6 md:space-y-12 relative z-10 text-center">
        <div className="space-y-2 md:space-y-4 animate-fade-in">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-apple-blue inline-block mb-2">
            Strategical Longread
          </span>
          <h1 className="text-3xl md:text-7xl lg:text-[84px] font-black tracking-[-0.04em] leading-[1.1] text-gray-900">
            От ручного труда к AI-империи
          </h1>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-3xl font-medium text-gray-400 leading-tight max-w-[600px] mx-auto">
            Как превратить одну AI-модель в поток денег без твоего ежедневного участия.
          </p>
        </div>

        <div className="pt-8 md:pt-20 animate-bounce flex justify-center">
          <ArrowDown size={28} className="text-gray-200" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};