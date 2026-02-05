import React from 'react';
import { CloudOff, TrendingUp, Zap, Clock, ShieldAlert } from 'lucide-react';

export const GlassCeilingChapter: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FBFBFD] border-t border-gray-100">
      <div className="content-container px-6 space-y-10 md:space-y-20">
        
        {/* Heading */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight">
            Проблема «стеклянного потолка»
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-bold italic leading-tight">
            Ты уже не новичок.
          </p>
        </div>

        {/* Narrative */}
        <div className="space-y-6 text-base md:text-xl leading-relaxed text-gray-700 font-medium">
          <p>
            У тебя есть работающая AI-модель. Подписчики. Стабильный доход — <span className="text-gray-900 font-bold">$2000</span>, может <span className="text-gray-900 font-bold">$3000</span> в месяц. Ты разобрался в нише, когда большинство ещё смотрело обучающие ролики на YouTube.
          </p>
          
          <p className="text-xl md:text-3xl font-black text-gray-900 tracking-tight py-2 md:py-4">
            Со стороны выглядит как успех.
          </p>

          <p>Но ты знаешь правду.</p>
        </div>

        {/* The Pain Points */}
        <div className="space-y-3 md:space-y-4 pt-4">
          <div className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-4 md:mb-6">Ночные мысли:</div>
          
          {[
            { icon: <ShieldAlert size={18} />, text: "«Я упёрся в потолок. Делаю всё то же самое — а доход не растёт»." },
            { icon: <TrendingUp size={18} />, text: "«Рынок наполняется. Каждый день новые аккаунты. Конкуренция жёстче»." },
            { icon: <Zap size={18} />, text: "«Я пашу по 5-6 часов в день. Если работать больше — сдохну. Если меньше — доход упадёт»." },
            { icon: <CloudOff size={18} />, text: "«Окно возможностей закрывается. А я так и не забрал свой кусок пирога»." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm flex gap-4 md:gap-6 items-start hover:shadow-md transition-shadow">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 text-gray-400">
                {item.icon}
              </div>
              <p className="text-base md:text-xl font-bold text-gray-800 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Deeper Analysis */}
        <div className="space-y-8 pt-10 border-t border-gray-100">
          <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Знакомо?
          </h3>
          
          <div className="text-base md:text-xl leading-relaxed text-gray-600 space-y-4 md:space-y-6">
            <p>Ты оседлал тренд раньше других. Это было умно. Но теперь твой топор затупился об рутину.</p>
            <p>Ты генерируешь контент. Отвечаешь подписчикам. Постишь в Twitter. Снова генерируешь. Снова отвечаешь. День за днём.</p>
          </div>

          <div className="p-6 md:p-12 bg-gray-900 text-white rounded-[2rem] md:rounded-[3rem] space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Clock size={120} className="md:w-[120px] md:h-[120px] w-20 h-20" />
            </div>
            <p className="text-lg md:text-3xl font-black leading-tight relative z-10">
              Это не бизнес. Это самозанятость с хорошей почасовой ставкой.
            </p>
            <p className="text-gray-400 text-sm md:text-xl font-medium relative z-10 leading-relaxed">
              Проблема в том, что почасовая ставка не масштабируется. В сутках 24 часа — и ты уже выжимаешь из них максимум.
            </p>
          </div>
        </div>

        {/* Transition */}
        <div className="space-y-6 pt-10 text-center md:text-left">
          <p className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Чтобы пробить потолок $3000 и выйти на $5000, $7000, $10000 — нужен другой подход.
          </p>
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-4 text-apple-blue">
               <span className="font-black text-base md:text-xl">Не «работать больше». А работать по-другому.</span>
            </div>
            <p className="text-base md:text-xl text-gray-500 font-medium leading-relaxed">
              Сейчас я покажу, что именно отличает тех, кто застрял на $2-3K, от тех, кто вышел на $5-10K и выше.
            </p>
          </div>

          <div className="pt-10 flex flex-col items-center">
             <div className="w-px h-16 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
             <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Дальше: Разбор системы</p>
          </div>
        </div>
      </div>
    </section>
  );
};