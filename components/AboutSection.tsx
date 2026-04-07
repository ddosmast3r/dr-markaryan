import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">О враче</h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Профессиональный опыт и квалификация
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* Quick Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              Квалификация
            </h3>
            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl mr-5 flex-shrink-0 shadow-md transform group-hover:scale-105 transition-transform duration-300">
                    ⚕️
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      Специализация
                    </h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Колопроктология и хирургия толстого кишечника
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 border border-indigo-100 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mr-5 flex-shrink-0 shadow-md transform group-hover:scale-105 transition-transform duration-300">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      Опыт работы
                    </h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Более 6 лет практики в области колопроктологии
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Образование
            </h3>
            <div className="relative pt-2">
              {/* Timeline line */}
              <div className="absolute left-7 top-0 bottom-6 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 rounded-full"></div>

              <div className="space-y-8">
                {/* 2018 */}
                <div className="flex items-start relative group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                    2018
                  </div>
                  <div className="ml-6 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      Лечебное дело
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Ивановская государственная медицинская академия
                    </p>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      📚 Базовое образование
                    </span>
                  </div>
                </div>

                {/* 2020 */}
                <div className="flex items-start relative group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                    2020
                  </div>
                  <div className="ml-6 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      Колопроктология
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Первый МГМУ им. И.М. Сеченова
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      🎓 Ординатура
                    </span>
                  </div>
                </div>

                {/* 2021 */}
                <div className="flex items-start relative group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                    2021
                  </div>
                  <div className="ml-6 space-y-4 flex-1">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        Эндоскопия
                      </h4>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                        📈 Повышение квалификации
                      </span>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Колопроктология
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Первый МГМУ им. И.М. Сеченова
                      </p>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                        📈 Повышение квалификации
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2023 */}
                <div className="flex items-start relative group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                    2023
                  </div>
                  <div className="ml-6 space-y-4 flex-1">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Хирургия
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Академия повышения квалификации и профессиональной
                        переподготовки
                      </p>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                        🔄 Циклы переподготовки
                      </span>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        Организация здравоохранения
                      </h4>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                        🔄 Циклы переподготовки
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Profile */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-6 sm:p-10 shadow-sm border border-blue-100">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
            Профиль лечения
          </h3>
          <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Специализируюсь на диагностике и лечении широкого спектра колопроктологических заболеваний. Использую современные малоинвазивные методы лечения для максимального комфорта пациентов.
          </p>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg border border-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  01
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Геморрой</h4>
                <p className="text-gray-600 text-sm">Лечение внутреннего и наружного геморроя различной степени тяжести</p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  02
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Анальная трещина</h4>
                <p className="text-gray-600 text-sm">Консервативное и хирургическое лечение острых и хронических трещин</p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  03
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Свищ прямой кишки</h4>
                <p className="text-gray-600 text-sm">Хирургическое лечение параректальных свищей любой сложности</p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  04
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Копчиковый ход</h4>
                <p className="text-gray-600 text-sm">Удаление кисты копчика с применением современных методик</p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  05
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Ректовагинальный свищ</h4>
                <p className="text-gray-600 text-sm">Деликатное лечение свищей между прямой кишкой и влагалищем</p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  06
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Дивертикул ЖКТ</h4>
                <p className="text-gray-600 text-sm">Лечение дивертикулярной болезни и её осложнений</p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  07
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Анальная бахромка</h4>
                <p className="text-gray-600 text-sm">Удаление избыточных кожных складок в области заднего прохода</p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-3 font-bold font-mono">
                  08
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Выпадение прямой кишки</h4>
                <p className="text-gray-600 text-sm">Коррекция ректального пролапса различными хирургическими методами</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Выбор метода лечения зависит от стадии заболевания, общего состояния пациента и других факторов. Всегда стремлюсь к минимально инвазивным методам лечения для быстрого восстановления.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
