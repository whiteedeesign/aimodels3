import React from 'react';
import { Globe, DollarSign, TrendingUp, CheckCircle2 } from 'lucide-react';

export const UsaMarketChapter: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FBFBFD] border-t border-gray-100">
      <div className="content-container px-6 space-y-10 md:space-y-24">
        
        {/* Main Heading */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">
            Трафик из США и работа на богатых рынках
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            <p>Первый рычаг, который пробивает потолок — это не «больше подписчиков». Это «другие подписчики».</p>
            <p>Давай честно: ты можешь удвоить количество подписчиков из СНГ — и увеличить доход на 20%.</p>
            <p className="text-xl md:text-3xl font-black text-apple-blue tracking-tight">
              Или можешь получить в два раза меньше подписчиков из США — и утроить доход.
            </p>
            <p className="font-bold text-gray-900">Почему? Математика.</p>
          </div>
        </div>

        {/* Purchasing Power Comparison */}
        <section className="space-y-6 md:space-y-10">
          <div className="flex items-center gap-3 md:gap-4 text-apple-blue">
            <DollarSign size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Разница в платёжеспособности</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* CIS Market */}
            <div className="p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] space-y-4 opacity-60">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">Рынок СНГ</span>
              <div className="text-2xl font-black text-gray-900">$5–15 <span className="text-xs font-medium text-gray-400 italic">в месяц / средний чек</span></div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Российский подписчик торгуется за кастом на $20. Каждый доллар вырывается с боем.
              </p>
            </div>
            {/* USA Market */}
            <div className="p-6 md:p-8 bg-white border-2 border-apple-blue rounded-[2rem] shadow-xl shadow-blue-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Globe size={64} className="text-apple-blue" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-apple-blue block mb-2 relative z-10">Рынок USA</span>
              <div className="text-2xl md:text-3xl font-black text-gray-900 relative z-10">$30–50 <span className="text-xs font-medium text-gray-400 italic">в месяц / средний чек</span></div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium relative z-10">
                Американский подписчик спокойно платит $100–200 за кастом и не задаёт вопросов.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="pt-10 border-t border-gray-100 space-y-8">
          <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Результат переключения</h3>
          
          <div className="p-8 md:p-12 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[3rem] space-y-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 opacity-10">
              <TrendingUp size={160} />
            </div>
            
            <div className="space-y-6 relative z-10">
              <p className="text-lg md:text-2xl font-medium leading-relaxed">
                <span className="text-apple-blue font-black">Он не стал работать больше.</span> Он просто сменил вектор. Те же 4 часа работы в день, но направленные на тех, у кого есть деньги.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4">
                {[
                  "В 3 раза выше доход с одного подписчика",
                  "Лояльность к высоким чекам",
                  "Огромный рынок (300+ млн человек)",
                  "Привычка платить за цифровой контент"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-apple-blue shrink-0" />
                    <span className="text-sm md:text-base font-bold text-gray-200">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transition */}
        <div className="pt-10 md:pt-16 flex flex-col items-center">
          <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-apple-blue to-transparent"></div>
        </div>
      </div>
    </section>
  );
};