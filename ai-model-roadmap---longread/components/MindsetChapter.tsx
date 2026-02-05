import React from 'react';
import { ShieldAlert, BarChart3, Filter, Coins } from 'lucide-react';

export const MindsetChapter: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FBFBFD] border-t border-gray-100">
      <div className="content-container px-6 space-y-12 md:space-y-28">
        
        {/* Main Heading */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            Окупаемый порог входа
          </h2>
          <div className="space-y-4 text-base md:text-xl text-gray-600 font-medium leading-relaxed">
            <p className="text-lg md:text-3xl font-black text-red-500 tracking-tight">
              Сейчас будет неудобная правда.
            </p>
            <p>Ты застрял не только из-за тактики. Ты застрял из-за мышления.</p>
          </div>
        </div>

        {/* The Cheap Decision Trap */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 md:gap-4 text-apple-blue">
            <ShieldAlert size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Ловушка дешёвых решений</h3>
          </div>
          
          <div className="space-y-4 md:space-y-6 text-base md:text-xl text-gray-600 leading-relaxed font-medium">
            <p>Вспомни, как ты учился до сих пор. Бесплатные видео на YouTube. Курсы за $25–50.</p>
            <p className="text-gray-900 font-black italic border-l-4 border-apple-blue pl-4 md:pl-6 leading-relaxed">
              И это работало. На старте.
            </p>
            <p>Дешёвые источники информации дали тебе дешёвый результат.</p>
          </div>

          <div className="p-6 md:p-12 bg-gray-900 text-white rounded-[1.5rem] md:rounded-[3rem] space-y-4">
            <p className="text-base md:text-2xl leading-relaxed text-gray-300">
              Это как пытаться выиграть «Формулу-1» на «Жигулях». Машина довезла тебя до трассы — но гонку на ней не выиграешь.
            </p>
          </div>
        </section>

        {/* Mathematics of ROI */}
        <section className="space-y-8 pt-10 border-t border-gray-100">
          <div className="flex items-center gap-3 md:gap-4 text-apple-blue">
            <BarChart3 size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Математика решения</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Action Scenario */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-widest w-fit">Сценарий 1: Инвестиция</div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-1 text-sm md:text-base">
                  <span className="text-gray-500">Менторство</span>
                  <span className="font-bold text-gray-900">$1499</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-1 text-sm md:text-base">
                  <span className="text-gray-500">Прирост дохода/мес</span>
                  <span className="font-bold text-emerald-600">+$2000</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-900 font-black text-sm md:text-base">Прибыль за год</span>
                  <span className="font-black text-emerald-600 text-xl md:text-2xl">+$24 000</span>
                </div>
              </div>
            </div>

            {/* Inaction Scenario */}
            <div className="space-y-4 opacity-60">
              <div className="flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-[9px] font-black uppercase tracking-widest w-fit">Сценарий 2: Бездействие</div>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-1 text-sm md:text-base">
                  <span className="text-gray-500">Стоимость «бесплатного»</span>
                  <span className="font-bold text-gray-900">$0</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-1 text-sm md:text-base">
                  <span className="text-gray-500">Прирост дохода/мес</span>
                  <span className="font-bold text-gray-900">$0</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-gray-900 font-black text-sm md:text-base">Упущенная выгода</span>
                  <span className="font-black text-red-600 text-xl md:text-2xl">-$24 000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-apple-blue p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-6 md:gap-12 relative overflow-hidden">
             <Coins className="absolute -left-10 -bottom-10 w-32 h-32 md:w-48 md:h-48 text-white/10 rotate-12" />
             <div className="relative z-10 space-y-3 text-center md:text-left flex-1">
                <h4 className="text-lg md:text-4xl font-black tracking-tight leading-tight">Что дороже — заплатить $1499 или потерять $24000?</h4>
                <p className="text-sm md:text-xl text-white/80 font-medium italic">Самое дорогое решение — это дешёвое решение, которое не работает.</p>
             </div>
             <div className="shrink-0 relative z-10">
                <div className="bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 flex flex-col items-center">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">ROI</span>
                  <span className="text-2xl md:text-3xl font-black">1500%</span>
                </div>
             </div>
          </div>
        </section>

        {/* Transition */}
        <div className="pt-10 md:pt-16 flex flex-col items-center">
          <div className="w-[1px] h-16 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Дальше: Практический запуск</p>
        </div>

      </div>
    </section>
  );
};