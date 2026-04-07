"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Закрываем меню при ресайзе экрана (т.к. на десктопе оно не нужно)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer p-1 truncate max-w-[200px] sm:max-w-none">
            Маркарян Эдуард
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">О враче</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Услуги</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Рабочие моменты</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Контакты</a>
          </div>
          
          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="https://wa.me/79383030311" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-50 hover:bg-green-100 text-green-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm" title="WhatsApp" aria-label="WhatsApp">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
              </a>
              <a href="https://t.me/doctor_markaryan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm" title="Telegram" aria-label="Telegram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://web.max.ru/155749597" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm p-2" title="Макс" aria-label="Макс">
                <Image src="/image/Max_logo_2025.png" alt="Макс" width={20} height={20} className="w-full h-full object-contain" />
              </a>
              <a href="tel:+79383030311" className="w-10 h-10 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-sm" title="Позвонить" aria-label="Позвонить">
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </a>
            </div>
            
            <button onClick={onOpenContactModal} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 font-semibold">
              Записаться
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={onOpenContactModal}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-md transition-shadow"
            >
              Запись
            </button>
            
            <button 
              className="p-2 text-gray-700 hover:text-blue-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Открыть меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          <a href="#about" onClick={closeMenu} className="text-gray-800 text-lg font-medium hover:text-blue-600">О враче</a>
          <a href="#services" onClick={closeMenu} className="text-gray-800 text-lg font-medium hover:text-blue-600">Услуги</a>
          <a href="#gallery" onClick={closeMenu} className="text-gray-800 text-lg font-medium hover:text-blue-600">Рабочие моменты</a>
          <a href="#reviews" onClick={closeMenu} className="text-gray-800 text-lg font-medium hover:text-blue-600">Отзывы</a>
          <a href="#contact" onClick={closeMenu} className="text-gray-800 text-lg font-medium hover:text-blue-600">Контакты</a>
          
          <div className="pt-4 border-t border-gray-100 flex items-center gap-4 mt-2">
            <a href="https://wa.me/79383030311" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            </a>
            <a href="https://t.me/doctor_markaryan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://web.max.ru/155749597" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full flex items-center justify-center p-2.5">
              <Image src="/image/Max_logo_2025.png" alt="Макс" width={24} height={24} className="w-full h-full object-contain" />
            </a>
            <a href="tel:+79383030311" className="w-12 h-12 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
