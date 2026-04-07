import React from 'react';

interface ServicesSectionProps {
  onOpenContactModal: () => void;
}

export default function ServicesSection({ onOpenContactModal }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Услуги</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Комплексная медицинская помощь с применением современных технологий и индивидуальным подходом к каждому пациенту
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500 group">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Диагностика</h3>
            </div>
            <p className="text-gray-600 mb-5 text-base leading-relaxed">Современные методы обследования для точной постановки диагноза</p>
            <ul className="text-sm border-t border-gray-100 pt-4 space-y-2 text-gray-600 font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Колоноскопия</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Ректороманоскопия</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Аноскопия</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>Пальцевое исследование</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-red-500 group">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-red-100 transition-colors">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Хирургия</h3>
            </div>
            <p className="text-gray-600 mb-5 text-base leading-relaxed">Малоинвазивные и классические хирургические вмешательства</p>
            <ul className="text-sm border-t border-gray-100 pt-4 space-y-2 text-gray-600 font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>Операции при геморрое</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>Лечение свищей</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>Удаление новообразований</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-500 group">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-100 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Консультации</h3>
            </div>
            <p className="text-gray-600 mb-5 text-base leading-relaxed">Профессиональные первичные консультации и второе мнение</p>
            <ul className="text-sm border-t border-gray-100 pt-4 space-y-2 text-gray-600 font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Первичная консультация</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Повторные приемы</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>Консультации online</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-purple-500 group">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-100 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Реабилитация</h3>
            </div>
            <p className="text-gray-600 mb-5 text-base leading-relaxed">Комплексное восстановление пациента после лечения</p>
            <ul className="text-sm border-t border-gray-100 pt-4 space-y-2 text-gray-600 font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Послеоперационное ведение</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Физиотерапия</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Диетические рекомендации</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-yellow-500 group">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-yellow-100 transition-colors">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Профилактика</h3>
            </div>
            <p className="text-gray-600 mb-5 text-base leading-relaxed">Своевременное предупреждение развития заболеваний</p>
            <ul className="text-sm border-t border-gray-100 pt-4 space-y-2 text-gray-600 font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>Профилактические осмотры</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>Образ жизни и питание</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>Ранняя диагностика</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500 group">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-100 transition-colors">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Экстренная помощь</h3>
            </div>
            <p className="text-gray-600 mb-5 text-base leading-relaxed">Неотложная медицинская помощь при острых состояниях</p>
            <ul className="text-sm border-t border-gray-100 pt-4 space-y-2 text-gray-600 font-medium">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Ургентные консультации</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Экстренные операции</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Послеоперационные осложнения</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1 shadow-2xl max-w-4xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
             <div className="bg-white rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Нужна консультация?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Запишитесь на прием для получения профессиональной медицинской помощи. 
                Индивидуальный подход к каждому пациенту гарантирован.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={onOpenContactModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:shadow-lg transition-all text-lg font-bold transform hover:scale-105"
                >
                  Записаться на прием
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
