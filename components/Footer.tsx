import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        
        <div className="text-xs sm:text-sm text-gray-500 text-center space-y-4 max-w-3xl">
          <div className="space-y-1.5 leading-relaxed">
            <p>
              Медицинские услуги оказываются в{' '}
              <span className="text-gray-300 font-semibold">ООО «ЛПУ-Гармония»</span>
            </p>
            <p>357502, Ставропольский край, г. Пятигорск, пр-кт Калинина, зд. 90А</p>
            <p>
              Лицензия на осуществление медицинской деятельности
              {' '}№ Л041-01197-26/01072904 от 27.02.2024, выдана Министерством здравоохранения Ставропольского края.
              Срок действия — бессрочно.
            </p>
          </div>
          <p>&copy; {new Date().getFullYear()} Все права защищены. Сайт носит исключительно информационный характер.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/license" className="text-gray-400 hover:text-white transition-colors">
              Сведения о лицензии
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
