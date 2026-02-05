import React from 'react';
import { 
  ArrowRight, 
  Search, 
  Target, 
  Map, 
  HelpCircle, 
  Clock, 
  UserCheck, 
  XCircle, 
  Zap,
  ChevronRight
} from 'lucide-react';

export const AuditChapter: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FBFBFD] border-t border-gray-100">
      <div className="content-container px-6 space-y-12 md:space-y-24">
        
        {/* Main Heading */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">
            Приглашение на стратегический аудит
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            <p>Ты дочитал до этого места. Значит, ты не просто «интересуешься». Ты реально хочешь пробить свой потолок.</p>
            <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">У тебя есть два пути.</p>
          </div>
        </div>

        {/* Two Paths Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Path 1 */}
          <div className="p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] space-y-4 md:space-y-6 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Путь первый</div>
            <h3 className="text-lg md:text-2xl font-black text-gray-900 leading-tight">Разбираться самому</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Эксперименты с USA-трафиком и автоматизацией займут 3-6 месяцев. Часть из них будут неудачными. Ты потеряешь время и деньги на тестирование гипотез.
            </p>
            <p className="text-xs font-bold text-gray-400 italic">Может получиться. Может нет.</p>
          </div>

          {/* Path 2 */}
          <div className="p-6 md:p-8 bg-gray-900 text-white rounded-[2rem] md:rounded-[2.5rem] space-y-4 md:space-y-6 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Zap className="text-apple-blue" size={64} />
             </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-apple-blue relative z-10">Путь второй</div>
            <h3 className="text-lg md:text-2xl font-black relative z-10 leading-tight">Стратегический аудит</h3>
            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
              Полноценный аудит твоего проекта. Разберём ситуацию под микроскопом и найдём конкретные точки роста. Не «продающий созвон», а разбор.
            </p>
          </div>
        </div>

        {/* What you get on audit */}
        <section className="space-y-10">
          <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">Что ты получишь на аудите:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { 
                icon: <Search size={20} />, 
                t: "1. Анализ твоей текущей воронки", 
                d: "Где именно ты теряешь деньги. Какие этапы работают, какие — сливают потенциальный доход. Конкретные цифры." 
              },
              { 
                icon: <Target size={20} />, 
                t: "2. Карта «дыр» в твоей системе", 
                d: "Почему ты застрял на текущем уровне. Что именно мешает масштабироваться. Диагностика на основе данных." 
              },
              { 
                icon: <Map size={20} />, 
                t: "3. Персональный план выхода на $5000-10000", 
                d: "Пошаговая карта: что делать первым, вторым, третьим. С учётом твоей ниши, модели и ресурсов." 
              },
              { 
                icon: <HelpCircle size={20} />, 
                t: "4. Ответы на твои вопросы", 
                d: "Всё про масштабирование, автоматизацию, выход на USA — разберём без воды и отговорок." 
              }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-8 bg-white border border-gray-100 rounded-3xl space-y-4 hover:border-apple-blue/20 transition-colors shadow-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-apple-blue">
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-black text-gray-900 tracking-tight leading-tight">{item.t}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="space-y-10 pt-10 border-t border-gray-100">
          <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">Как это работает:</h3>
          <div className="space-y-6 md:space-y-8">
            {[
              { t: "Анкета", d: "Заполняешь данные про доход, модель и узкие места (5 минут)." },
              { t: "Подготовка", d: "Моя команда изучает твой проект до созвона. Мы приходим с готовым анализом." },
              { t: "Аудит", d: "На созвоне разбираем твою ситуацию и строим персональный план действий." }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-6 items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm shrink-0">
                  {i + 1}
                </div>
                <div className="space-y-0.5">
                  <span className="font-black text-gray-900 text-lg md:text-xl block">{step.t}</span>
                  <p className="text-gray-500 font-medium text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suitability Filters */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-10 bg-emerald-50 rounded-[2.5rem] md:rounded-[3rem] border border-emerald-100 space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-black text-emerald-900 flex items-center gap-2">
              <UserCheck size={20} /> Для кого это:
            </h4>
            <ul className="space-y-3">
              {[
                "Уже зарабатываешь $1500+ на AI-моделях",
                "Упёрся в потолок и хочешь расти",
                "Готов инвестировать в систему",
                "Готов внедрять и работать"
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-emerald-800 font-medium text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0"></div>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-10 bg-red-50 rounded-[2.5rem] md:rounded-[3rem] border border-red-100 space-y-4 md:space-y-6 opacity-70">
            <h4 className="text-lg md:text-xl font-black text-red-900 flex items-center gap-2">
              <XCircle size={20} /> Для кого НЕ подходит:
            </h4>
            <ul className="space-y-3">
              {[
                "Ещё не зарабатываешь на AI-моделях",
                "Ищешь «волшебную кнопку»",
                "Не готов к инвестициям в менторство",
                "Просто хочешь «послушать»"
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-red-800 font-medium text-sm">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full shrink-0"></div>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA Area */}
        <section className="text-center space-y-10">
          <div className="p-8 md:p-12 bg-apple-blue rounded-[2.5rem] md:rounded-[3rem] text-white space-y-6 md:space-y-8 relative overflow-hidden shadow-2xl shadow-blue-500/30">
             <Clock className="absolute -top-10 -right-10 w-48 h-48 text-white/10 -rotate-12" />
             <div className="relative z-10 space-y-4">
                <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">Важно: Места ограничены</h3>
                <p className="text-base md:text-xl font-medium text-white/80 max-w-[600px] mx-auto leading-relaxed">
                  Аудит требует времени моей команды. Мы реально изучаем каждый проект. Поэтому берём ограниченное количество заявок в неделю.
                </p>
             </div>
             
             <div className="relative z-10 pt-2">
                <a 
  href="https://forms.gle/w6SaNnL8z8bLry8u7" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group bg-white px-8 md:px-16 py-5 md:py-8 rounded-full text-lg md:text-2xl font-black tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 md:gap-4 mx-auto !text-[#007AFF] no-underline"
>
  ЗАПИСАТЬСЯ НА АУДИТ
  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform md:w-6 md:h-6" />
</a>
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                  Заполнение анкеты займёт 5 минут
                </p>
             </div>
          </div>

          <div className="pt-6 space-y-8">
            <p className="text-gray-400 font-medium italic text-base leading-relaxed max-w-[600px] mx-auto">
              Ты уже сделал сложную часть — вышел на доход. Осталось пробить потолок. Вопрос лишь в том, сколько времени ты потратишь на эксперименты.
            </p>
            
            <a 
  href="https://forms.gle/w6SaNnL8z8bLry8u7" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-900 font-black text-base md:text-xl underline underline-offset-8 hover:text-apple-blue transition-colors flex items-center justify-center gap-2 mx-auto w-fit no-underline"
>
  <span className="underline">ЗАПОЛНИТЬ АНКЕТУ</span>
  <ChevronRight size={18} />
</a>
          </div>
        </section>

      </div>
    </section>
  );
};
