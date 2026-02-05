import React from 'react';
import { 
  MapPin, 
  Search, 
  Settings, 
  TrendingUp, 
  Zap, 
  BarChart, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const CaseStudyChapter: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="content-container px-6 space-y-12 md:space-y-28">
        
        {/* Main Heading */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            Путь к $5000 за полмесяца
          </h2>
          <div className="space-y-4 text-base md:text-xl text-gray-600 font-medium leading-relaxed">
            <p>Теория — это хорошо. Но ты хочешь увидеть, как это работает в реальности.</p>
          </div>
        </div>

        {/* Point A */}
        <section className="space-y-6 md:space-y-10">
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Точка А: Где он был</h3>
          </div>
          
          <div className="p-6 md:p-12 bg-gray-50 rounded-[1.5rem] md:rounded-[2.5rem] space-y-6 md:space-y-8 border border-gray-100">
            <ul className="space-y-3">
              {[
                { t: "Доход", v: "$2000–2500 / мес" },
                { t: "Время", v: "5–6 часов / день" },
                { t: "Аудитория", v: "СНГ и Европа" }
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-400 font-bold uppercase text-[9px] tracking-widest">{item.t}</span>
                  <span className="text-gray-900 font-black text-sm md:text-base">{item.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="space-y-8 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-3 text-apple-blue">
            <Search size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Диагностика</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { t: "Низкоплатёжеспособный трафик", d: "80% аудитории — СНГ. Средний чек: $8-12." },
              { t: "Ручная рутина съедает время", d: "Всё руками. Никакой автоматизации." },
              { t: "Нет системы продаж", d: "Продавал хаотично. Никакой воронки." }
            ].map((problem, i) => (
              <div key={i} className="p-5 md:p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                <h4 className="font-black text-gray-900 text-base md:text-xl mb-1">{problem.t}</h4>
                <p className="text-gray-500 font-medium text-xs md:text-base leading-relaxed">{problem.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Plan */}
        <section className="space-y-10 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-3 text-apple-blue">
            <Settings size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Пошаговый план</h3>
          </div>

          <div className="space-y-8 relative">
            {/* Simple vertical list for mobile, staggered for desktop */}
            {[
              { w: "1", t: "Неделя 1: США", d: "Сменили фокус на американский рынок. +400 новых подписчиков.", icon: <Calendar size={16} /> },
              { w: "2", t: "Неделя 2: Автоматизация", d: "Внедрение ИИ-агентов. Рутина сократилась до 1.5 часов.", icon: <Zap size={16} className="text-yellow-500" /> },
              { w: "3", t: "Финальный дожим", d: "Выстроили воронку монетизации. Конверсия выросла до 14%.", icon: <BarChart size={16} className="text-emerald-500" /> }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-apple-blue text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-blue-500/20">{step.w}</div>
                <div className="flex-1 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-black text-gray-900 text-sm md:text-base">{step.t}</h4>
                    {step.icon}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Result */}
        <section className="p-6 md:p-16 bg-gray-900 text-white rounded-[2rem] md:rounded-[4rem] space-y-10 relative overflow-hidden text-center md:text-left">
          <TrendingUp className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 text-white/5 rotate-12" />
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl md:text-5xl font-black tracking-tight leading-tight">Точка Б: Результат</h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center md:items-start">
              <span className="text-apple-blue font-black text-4xl md:text-6xl tracking-tighter">$5000+</span>
              <span className="text-gray-400 font-bold uppercase text-[8px] md:text-[10px] tracking-widest mt-1">Доход за полмесяца</span>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center md:items-start">
              <span className="text-white font-black text-4xl md:text-6xl tracking-tighter">3-4 ч</span>
              <span className="text-gray-400 font-bold uppercase text-[8px] md:text-[10px] tracking-widest mt-1">Времени в день</span>
            </div>
          </div>

          <div className="relative z-10 p-5 bg-white/5 rounded-xl border border-white/10 italic text-sm md:text-xl font-medium leading-relaxed">
              Он не просто увеличил доход. Он уменьшил нагрузку.
          </div>
        </section>

        {/* Transition */}
        <div className="pt-10 flex flex-col items-center">
          <div className="w-[1px] h-16 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
        </div>

      </div>
    </section>
  );
};