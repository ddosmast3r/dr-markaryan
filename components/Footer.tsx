import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-8">
          <p className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">Доктор Маркарян Эдуард Жорикович</p>
          <p className="text-sm sm:text-base text-blue-400 font-medium">Хирург-колопроктолог</p>
        </div>
        
        {/* Medical Disclaimer */}
        <div className="mb-10 text-center opacity-80 hover:opacity-100 transition-opacity flex justify-center">
          <Image 
            src="/image/cure-sm.png" 
            alt="Имеются противопоказания, проконсультируйтесь со специалистом" 
            width={260}
            height={50}
            className="h-auto w-40 sm:w-56"
          />
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>
        
        <div className="text-xs sm:text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Все права защищены. Сайт носит исключительно информационный характер.</p>
        </div>
      </div>
    </footer>
  );
}
