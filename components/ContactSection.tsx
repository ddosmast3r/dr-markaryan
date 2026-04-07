import React from 'react';
import Image from 'next/image';

interface ContactSectionProps {
  onOpenVideoModal: () => void;
  onOpenContactModal: () => void;
}

export default function ContactSection({ onOpenVideoModal, onOpenContactModal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">Контакты</h2>
          <p className="text-lg sm:text-xl text-gray-400 font-medium">
            Свяжитесь со мной для записи на прием
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Контактная информация
            </h3>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-xl mr-5 group-hover:bg-blue-500/20 transition-colors">📞</div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Телефон</p>
                  <a href="tel:+79383030311" className="text-lg font-semibold hover:text-blue-400 transition-colors">+7 938 303 03 11</a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-xl mr-5 group-hover:bg-blue-500/20 transition-colors">📧</div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
                  <a href="mailto:doc.edmarkaryan@yandex.ru" className="text-lg font-semibold hover:text-blue-400 transition-colors break-all">doc.edmarkaryan@yandex.ru</a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-xl mr-5 group-hover:bg-blue-500/20 transition-colors">📍</div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Адрес</p>
                  <p className="text-lg font-semibold leading-relaxed">
                    г. Пятигорск<br/>
                    г. Ессентуки
                  </p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-xl mr-5 group-hover:bg-blue-500/20 transition-colors">🕒</div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Часы приема</p>
                  <p className="text-lg font-semibold">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-xl mr-5 group-hover:bg-blue-500/20 transition-colors">📷</div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Instagram</p>
                  <a href="https://instagram.com/dr.markaryan_ed" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-blue-400 transition-colors">@dr.markaryan_ed</a>
                </div>
              </div>
            </div>
          </div>

          <div id="video-section" className="bg-white rounded-3xl p-8 sm:p-12 text-gray-900 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-3xl text-red-500">▶</span>
                Видеокарточка врача
              </h3>
              <div className="mb-8">
                <div 
                  className="aspect-[9/16] max-w-[200px] mx-auto bg-gray-100 rounded-2xl flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 relative group overflow-hidden" 
                  onClick={onOpenVideoModal}
                >
                   <Image
                    src="/image/avatar.jpg"
                    alt="Видео профиля"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  <div className="relative text-center z-10 p-4">
                    <div className="w-16 h-16 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-blue-500 transition-all shadow-lg">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white font-bold drop-shadow-md text-sm">Смотреть</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-6">Быстрая запись</h4>
              <button 
                onClick={onOpenContactModal}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all font-bold text-lg transform hover:-translate-y-1"
              >
                Выбрать мессенджер для записи
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
