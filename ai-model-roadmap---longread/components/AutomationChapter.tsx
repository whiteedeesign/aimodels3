import React from 'react';
import { Cpu, Clock, Bot, Zap, Brain, LayoutGrid, CheckCircle2 } from 'lucide-react';

export const AutomationChapter: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="content-container px-6 space-y-12 md:space-y-28">
        
        {/* Main Heading */}
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight">
            Автоматизация контент-конвейера через ИИ-агентов
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-xl text-gray-600 font-medium leading-relaxed">
            <p>Второй рычаг — это время.</p>
            <p>Точнее, освобождение твоего времени от рутины, которая съедает 80% рабочего дня.</p>
            <p className="text-lg md:text-3xl font-black text-gray-900 tracking-tight leading-snug">
              Ты уже знаешь нейросети. Но скорее всего используешь AI на 10% его возможностей.
            </p>
            <p className="text-apple-blue font-black italic">Сейчас объясню, как использовать на 100%.</p>
          </div>
        </div>

        {/* The Audit (Where time is lost) */}
        <section className="space-y-8 md:space-y-10">
          <div className="flex items-center gap-3 md:gap-4 text-apple-blue">
            <Clock size={24} className="md:w-7 md:h-7" />
            <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Где ты теряешь время</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              { t: "Генерация контента", d: "Подбор промптов, отбор.", h: "1.5 ч" },
              { t: "Обработка", d: "Подготовка, ретушь.", h: "1 ч" },
              { t: "Постинг", d: "Twitter, Reddit вручную.", h: "1 ч" },
              { t: "Продажи в DM", d: "Переписка, дожимы.", h: "1.5 ч" },
              { t: "Аналитика", d: "Разбор метрик.", h: "0.5 ч" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="space-y-0.5">
                  <span className="font-bold text-gray-900 block text-sm md:text-lg leading-tight">{item.t}</span>
                  <span className="text-[10px] md:text-sm text-gray-500 font-medium">{item.d}</span>
                </div>
                <div className="text-lg font-black text-apple-blue whitespace-nowrap ml-3">{item.h}</div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-12 bg-gray-900 text-white rounded-[2rem] md:rounded-[3rem] space-y-2 text-center">
            <p className="text-xl md:text-4xl font-black tracking-tighter">Итого: 5.5 часов ручной работы.</p>
            <p className="text-gray-400 text-sm md:text-xl">Каждый день. Без выходных.</p>
          </div>
        </section>

        {/* AI Agents Definition */}
        <section className="space-y-8 md:space-y-12 pt-10 border-t border-gray-100">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4 text-apple-blue">
              <Cpu size={24} className="md:w-7 md:h-7" />
              <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">ИИ-агенты меняют игру</h3>
            </div>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
              ИИ-агент — это настроенная система, которая выполняет конкретные задачи.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: <Brain size={24} />, t: "Агент-аналитик", d: "Находит паттерны в сотнях постов за секунды." },
              { icon: <Zap size={24} />, t: "Агент-копирайтер", d: "Генерирует 20 вариантов подписей за минуту." },
              { icon: <LayoutGrid size={24} />, t: "Агент-планировщик", d: "Предлагает идеальную сетку на неделю." },
              { icon: <Bot size={24} />, t: "Агент-собеседник", d: "Умные скрипты, которые адаптируются под контекст." }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-8 bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2rem] space-y-3 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-apple-blue">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black text-gray-900 tracking-tight">{item.t}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-xs md:text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Comparison */}
        <section className="space-y-10 pt-10 border-t border-gray-100">
          <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight">Как это выглядит на практике</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[9px] font-black uppercase tracking-widest text-gray-400">Без автоматизации</div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Ты вручную смотришь посты. Пытаешься понять закономерность. Пишешь тексты. Постишь. И так по кругу.</p>
            </div>
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-[9px] font-black uppercase tracking-widest text-apple-blue">С автоматизацией</div>
              <p className="text-sm md:text-base text-gray-900 font-medium leading-relaxed">Агент проанализировал посты. Сгенерировал план. Твоя работа: просмотреть и запустить.</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter mb-3">Вместо 3 часов — 40 минут.</div>
            <div className="w-16 h-1 bg-apple-blue rounded-full"></div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="p-8 md:p-16 bg-gray-50 rounded-[2rem] md:rounded-[4rem] border border-gray-100 space-y-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-5 rotate-12">
            <Zap size={200} className="text-apple-blue md:w-[240px] md:h-[240px]" />
          </div>
          
          <h3 className="text-xl md:text-4xl font-black text-gray-900 tracking-tight relative z-10">Эффект в цифрах</h3>
          <div className="text-base md:text-2xl leading-relaxed text-gray-600 space-y-6 relative z-10">
            <p className="text-2xl md:text-5xl font-black text-apple-blue tracking-tighter">Экономия 60–90 часов в месяц.</p>
            <ul className="space-y-4 pt-2">
              {[
                "Масштабирование (вторая модель)",
                "Работа над стратегией",
                "Жизнь вне работы"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-900 font-black text-sm md:text-xl">
                  <CheckCircle2 size={20} className="text-apple-blue shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Transition to next chapter */}
        <div className="pt-12 md:pt-24 space-y-8 text-center md:text-left border-t border-gray-100">
          <p className="text-xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Два рычага: США + автоматизация.
          </p>
          
          <div className="pt-10 flex flex-col items-center">
             <div className="w-[1px] h-16 md:h-32 bg-gradient-to-b from-apple-blue to-transparent"></div>
             <p className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Дальше: Ментальный прорыв</p>
          </div>
        </div>

      </div>
    </section>
  );
};