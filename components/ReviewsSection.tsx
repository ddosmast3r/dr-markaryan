import React from 'react';
import Image from 'next/image';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Отзывы пациентов
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Что говорят о работе доктора Маркаряна Эдуарда Жориковича
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-5xl mx-auto">
          {/* Rating Section */}
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 sm:px-16 border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center justify-center mb-3">
                <span className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-none tracking-tighter mb-2">4.9</span>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 font-medium text-sm sm:text-base bg-white/60 px-3 py-1 rounded-full">из 5.0</span>
              </div>
              <p className="text-gray-700 font-semibold text-base sm:text-lg">Высокий рейтинг пациентов</p>
            </div>
          </div>

          {/* Platform Links Section */}
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 sm:mb-8">
              Читайте отзывы на платформах:
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
              <a
                href="https://yandex.ru/medicine/doctor/markaryan_eduard_c98754lmszvOR"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg flex items-center justify-center w-full sm:w-64 h-32 transform hover:-translate-y-1"
                title="Читать отзывы на Яндекс.Здоровье"
              >
                <Image 
                  src="/image/Yandex_Health_logo.svg.png" 
                  alt="Яндекс.Здоровье" 
                  width={150}
                  height={60}
                  className="w-auto h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              
              <a
                href="https://prodoctorov.ru/pyatigorsk/vrach/846542-markaryan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg flex items-center justify-center w-full sm:w-64 h-32 transform hover:-translate-y-1"
                title="Смотреть все отзывы на ПроДокторов"
              >
                <Image
                  src="/image/Логотипа_ПроДокторов.png"
                  alt="ПроДокторов"
                  width={150}
                  height={60}
                  className="w-auto h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="https://napopravku.ru/essentuki/doctor-profile/markarjan-eduard-zhorikovich/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg flex items-center justify-center w-full sm:w-64 h-32 transform hover:-translate-y-1"
                title="Смотреть отзывы на НаПоправку"
              >
                <Image
                  src="/image/napopravku_logo.png"
                  alt="НаПоправку"
                  width={150}
                  height={60}
                  className="w-auto h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
