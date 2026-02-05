import React from 'react';
import { Calculator, Infinity, RefreshCcw, Settings, Hammer } from 'lucide-react';

export const DeadEndStrategyChapter: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="content-container px-6 space-y-12 md:space-y-28">
        
        {/* Main Heading */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            Почему «больше работать» — это тупиковая стратегия
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-xl text-gray-600 font-medium leading-relaxed">
            <p>Когда доход застревает, первая мысль: «Надо больше работать».</p>
            <p>Больше контента. Больше постов. Больше сообщений подписчикам. Больше часов за компьютером.</p>
            <p className="text-xl md:text-3xl font-black text-gray-900 tracking-tight">Логично, да?</p>
            <div className="inline-block px-3 py-1.5 bg-red-50 text-red-600 rounded-lg font-black text-xs md:text-base uppercase tracking-widest">
              Нет. Это ловушка.
            </div>
          </div>
        </div>

        {/* Mathematics of the Dead End */}
        <section className="space-y-8 md:space-y-10">
          <div className="flex items-center gap-3 md:gap-4 text-apple-blue">
            <Calculator size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Математика тупика</h3>
          </div>
          
          <p className="text-base md:text-xl text-gray-600 leading-relaxed">Давай посчитаем.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { label: "Сейчас", hours: "5 часов", income: "$3000", rate: "$20/час", active: true },
              { label: "Цель", hours: "8.3 часа", income: "$5000", rate: "$20/час", active: false },
              { label: "Мечта", hours: "16.6 часа", income: "$10000", rate: "$20/час", active: false }
            ].map((card, i) => (
              <div key={i} className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border ${card.active ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-100 opacity-60'}`}>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-3 md:mb-4">{card.label}</span>
                <div className="space-y-1 md:space-y-2">
                  <div className="text-xl md:text-2xl font-black text-gray-900">{card.income}</div>
                  <div className="text-xs md:text-sm font-bold text-apple-blue">{card.hours} / день</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-12 bg-red-50 rounded-[2rem] md:rounded-[2.5rem] border border-red-100 space-y-4 md:space-y-6">
            <p className="text-lg md:text-2xl font-black text-red-900 tracking-tight leading-tight">Видишь проблему?</p>
            <p className="text-base md:text-xl text-red-900/70 font-medium leading-relaxed">
              Ты упираешься в физический предел. В сутках нет 25 часов. Ты не можешь клонировать себя.
            </p>
            <p className="text-sm md:text-lg text-red-900/60 leading-relaxed italic">
              А если попытаешься выжать больше — выгоришь. Я видел это десятки раз. Люди врываются в нишу, пашут как проклятые, зарабатывают хорошие деньги — а через полгода ненавидят всё это и бросают.
            </p>
          </div>
        </section>

        {/* Manual Scaling Mistake */}
        <section className="space-y-8 md:space-y-12 pt-10 border-t border-gray-100">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Ошибка «ручного масштабирования»</h3>
            <p className="text-base md:text-xl text-gray-600">Большинство пытается масштабироваться линейно:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-6 md:py-8">
              <div className="px-5 py-3 md:px-6 md:py-4 bg-gray-100 rounded-xl md:rounded-2xl font-bold text-gray-600 text-sm md:text-base">Больше контента</div>
              <Infinity className="text-gray-300 hidden md:block" />
              <div className="px-5 py-3 md:px-6 md:py-4 bg-gray-100 rounded-xl md:rounded-2xl font-bold text-gray-600 text-sm md:text-base">Больше подписчиков</div>
              <Infinity className="text-gray-300 hidden md:block" />
              <div className="px-5 py-3 md:px-6 md:py-4 bg-apple-blue text-white rounded-xl md:rounded-2xl font-black text-sm md:text-base">Больше денег</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-600">
              <p>Звучит разумно. Но не работает после определённой точки.</p>
              <p className="font-bold text-gray-900">Почему?</p>
              <p>Потому что твоё время — бутылочное горлышко. Ты можешь генерировать контент быстрее. Можешь отвечать подписчикам эффективнее.</p>
            </div>
            <div className="p-8 md:p-10 bg-gray-900 text-white rounded-[2rem] md:rounded-[2.5rem] space-y-4">
              <RefreshCcw className="text-apple-blue mb-2 md:mb-4" size={28} />
              <p className="text-lg md:text-2xl font-black tracking-tight leading-tight">
                Это не масштабирование. Это оптимизация рабства.
              </p>
            </div>
          </div>
        </section>

        {/* Axe Analogy */}
        <section className="py-10 md:py-20 px-6 md:px-16 bg-gray-50 rounded-[2rem] md:rounded-[4rem] border border-gray-100 relative overflow-hidden">
          <Hammer className="absolute -bottom-10 -right-10 text-gray-200 w-32 h-32 md:w-48 md:h-48 -rotate-12" />
          <div className="relative z-10 space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Аналогия с топором</h3>
            <div className="space-y-4 md:space-y-6 text-base md:text-xl text-gray-600 leading-relaxed font-medium">
              <p>Представь дровосека, который рубит деревья. Он может рубить быстрее. Но топор тупой. И каждый удар требует всё больше усилий.</p>
              <p className="text-gray-900 font-black italic border-l-4 border-apple-blue pl-4 md:pl-6">
                Умный дровосек остановится и наточит топор. Да, он потеряет 30 минут. Но потом срубит в 10 раз больше деревьев за то же время.
              </p>
              <p className="text-lg md:text-3xl font-black text-red-500 pt-2">
                Ты сейчас — дровосек с тупым топором.
              </p>
            </div>
          </div>
        </section>

        {/* Successful Strategy */}
        <section className="space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Что делают те, кто пробил потолок</h3>
            <p className="text-base md:text-xl text-gray-600">Они перестали продавать своё время. И начали строить систему.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {[
              "Трафик, который приходит автоматически",
              "Контент-конвейер (не 5 часов в день)",
              "Воронка продаж без ручного «дожима»",
              "Процессы для делегирования и AI"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 md:p-6 bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-sm">
                <Settings className="text-apple-blue shrink-0" size={18} />
                <span className="font-bold text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Transition */}
        <div className="pt-10 md:pt-16 space-y-8 text-center md:text-left border-t border-gray-100">
          <p className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Это другая игра. С другими правилами.
          </p>
          
          <div className="space-y-6">
            <p className="text-base md:text-2xl text-gray-500 font-medium">
              Сейчас я покажу два главных рычага, которые позволяют пробить потолок.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="px-6 py-5 bg-gray-900 text-white rounded-2xl md:rounded-3xl font-black text-sm md:text-lg flex flex-col gap-1">
                 <span className="text-apple-blue text-[9px] uppercase tracking-[0.3em]">Рычаг 1</span>
                 Где брать деньги
               </div>
               <div className="px-6 py-5 bg-gray-900 text-white rounded-2xl md:rounded-3xl font-black text-sm md:text-lg flex flex-col gap-1">
                 <span className="text-apple-blue text-[9px] uppercase tracking-[0.3em]">Рычаг 2</span>
                 Как освободить время
               </div>
            </div>
          </div>

          <div className="pt-12 flex flex-col items-center">
             <div className="w-[1px] h-16 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};