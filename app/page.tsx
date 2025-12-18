"use client";

import { useState } from 'react';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              Маркарян Эдуард Жорикович
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О враче
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Записаться
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 lg:order-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Маркарян <span className="text-blue-600">Эдуард Жорикович</span>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-6">
                Хирург-колопроктолог
              </h2>
              
              {/* Mobile Avatar - показываем только на мобилках */}
              <div className="block lg:hidden mb-8">
                <div className="relative max-w-xs mx-auto">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-1">
                    <div className="bg-white rounded-3xl p-2 aspect-square">
                      <img
                        src="/image/avatar.jpg"
                        alt="Доктор Маркарян Эдуард Жорикович"
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {/* Personal Story */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-4 sm:p-6 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0 mt-1">
                      👨‍⚕️
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        Медицинская династия
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-left">
                        Специальность колопроктологию выбрал не случайно, а по наставничеству от легендарного хирурга-колопроктолога и просто своего деда —{" "}
                        <span className="font-semibold text-blue-700">
                          Галстян Хачика Гарниковича
                        </span>
                        .<br className="hidden sm:block" />
                        В планах продолжить эту династию в будущем.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Medical Principle */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm mr-3">
                      ✓
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      Принцип работы
                    </h4>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4 border-l-4 border-green-500">
                    <p className="text-green-800 font-medium text-base sm:text-lg italic mb-2">
                      "Не навреди"
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                      Придерживаюсь основного принципа медицины и полностью погружаюсь в каждый конкретный случай болезни для устранения всех беспокойств пациента и дальнейшего улучшения качества жизни человека.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 order-3 lg:order-3">
                <a
                  href="https://wa.me/79XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors text-base flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://t.me/doctor_markaryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-base flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors text-base flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Видео
                </button>
              </div>
            </div>
            {/* Desktop Avatar - показываем только на больших экранах */}
            <div className="hidden lg:block relative max-w-sm mx-auto order-2 lg:order-2">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-2 aspect-square">
                  <img
                    src="/image/avatar.jpg"
                    alt="Доктор Маркарян Эдуард Жорикович"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О враче</h2>
            <p className="text-xl text-gray-600">
              Профессиональный опыт и квалификация
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Quick Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Квалификация
              </h3>
              <div className="grid gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl mr-4">
                      ⚕️
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Специализация
                      </h4>
                      <p className="text-gray-600">
                        Колопроктология и хирургия толстого кишечника
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">🏆</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Опыт работы
                      </h4>
                      <p className="text-gray-600">
                        Более 6 лет практики в области колопроктологии
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Образование
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>

                <div className="space-y-8">
                  {/* 2018 */}
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
                      2018
                    </div>
                    <div className="ml-6 bg-white rounded-xl p-5 shadow-md border-l-4 border-green-500 flex-1">
                      <h4 className="font-bold text-gray-900 text-base mb-1">
                        Лечебное дело
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        Ивановская государственная медицинская академия
                      </p>
                      <span className="inline-block px-3 py-1.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        📚 Базовое образование
                      </span>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
                      2020
                    </div>
                    <div className="ml-6 bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-500 flex-1">
                      <h4 className="font-bold text-gray-900 text-base mb-1">
                        Колопроктология
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        Первый МГМУ им. И.М. Сеченова
                      </p>
                      <span className="inline-block px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        🎓 Ординатура
                      </span>
                    </div>
                  </div>

                  {/* 2021 */}
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
                      2021
                    </div>
                    <div className="ml-6 space-y-4 flex-1">
                      <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-purple-500">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          Эндоскопия
                        </h4>
                        <span className="inline-block mt-2 px-3 py-1.5 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          📈 Повышение квалификации
                        </span>
                      </div>
                      <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-purple-500">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          Колопроктология
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          Первый МГМУ им. И.М. Сеченова
                        </p>
                        <span className="inline-block px-3 py-1.5 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          📈 Повышение квалификации
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2023 */}
                  <div className="flex items-start relative">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
                      2023
                    </div>
                    <div className="ml-6 space-y-4 flex-1">
                      <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-orange-500">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          Хирургия
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          Академия повышения квалификации и профессиональной
                          переподготовки
                        </p>
                        <span className="inline-block px-3 py-1.5 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                          🔄 Циклы переподготовки
                        </span>
                      </div>
                      <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-orange-500">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          Организация здравоохранения
                        </h4>
                        <span className="inline-block px-3 py-1.5 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
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
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Профиль лечения
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Специализируюсь на диагностике и лечении широкого спектра
              колопроктологических заболеваний. Использую современные
              малоинвазивные методы лечения для максимального комфорта
              пациентов.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Геморрой
                </h4>
                <p className="text-gray-600 text-sm">
                  Лечение внутреннего и наружного геморроя различной степени
                  тяжести
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Анальная трещина
                </h4>
                <p className="text-gray-600 text-sm">
                  Консервативное и хирургическое лечение острых и хронических
                  трещин
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Свищ прямой кишки
                </h4>
                <p className="text-gray-600 text-sm">
                  Хирургическое лечение параректальных свищей любой сложности
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Эпителиальный копчиковый ход
                </h4>
                <p className="text-gray-600 text-sm">
                  Удаление кисты копчика с применением современных методик
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-pink-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Ректовагинальный свищ
                </h4>
                <p className="text-gray-600 text-sm">
                  Деликатное лечение свищей между прямой кишкой и влагалищем
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Дивертикул ЖКТ
                </h4>
                <p className="text-gray-600 text-sm">
                  Лечение дивертикулярной болезни и её осложнений
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Анальная бахромка
                </h4>
                <p className="text-gray-600 text-sm">
                  Удаление избыточных кожных складок в области заднего прохода
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-500">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">
                  Выпадение прямой кишки
                </h4>
                <p className="text-gray-600 text-sm">
                  Коррекция ректального пролапса различными хирургическими
                  методами
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                Выбор метода лечения зависит от стадии заболевания, общего
                состояния пациента и других факторов. Всегда стремлюсь к
                минимально инвазивным методам лечения для быстрого
                восстановления.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексная медицинская помощь с применением современных технологий и индивидуальным подходом к каждому пациенту
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Services */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Диагностика</h3>
              </div>
              <p className="text-gray-600 mb-4">Современные методы обследования для точной постановки диагноза</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Клинический осмотр</li>
                <li>• Лабораторные исследования</li>
                <li>• Инструментальная диагностика</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-600 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Хирургическое лечение</h3>
              </div>
              <p className="text-gray-600 mb-4">Малоинвазивные и классические хирургические вмешательства</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Операции при геморрое</li>
                <li>• Лечение свищей</li>
                <li>• Удаление новообразований</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Консультации</h3>
              </div>
              <p className="text-gray-600 mb-4">Профессиональные консультации и второе мнение</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Первичная консультация</li>
                <li>• Повторные приемы</li>
                <li>• Консультации online</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Реабилитация</h3>
              </div>
              <p className="text-gray-600 mb-4">Комплексное восстановление после лечения</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Послеоперационное ведение</li>
                <li>• Физиотерапия</li>
                <li>• Диетические рекомендации</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-600 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Профилактика</h3>
              </div>
              <p className="text-gray-600 mb-4">Предупреждение развития заболеваний</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Профилактические осмотры</li>
                <li>• Образ жизни и питание</li>
                <li>• Ранняя диагностика</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-600 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Экстренная помощь</h3>
              </div>
              <p className="text-gray-600 mb-4">Неотложная медицинская помощь при острых состояниях</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Ургентные консультации</li>
                <li>• Экстренные операции</li>
                <li>• Послеоперационные осложнения</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Нужна консультация?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Запишитесь на прием для получения профессиональной медицинской помощи. 
                Индивидуальный подход к каждому пациенту гарантирован.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  Записаться на прием
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">
              Документы, сертификаты и примеры работ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certificates and Awards */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Грамоты и сертификаты
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Certificates */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src="/image/G_ProDoctorov_1_2023.jpg"
                    alt="Грамота ProDoctorov 2023"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src="/image/G_ProDoctorov_2_2022.jpg"
                    alt="Грамота ProDoctorov 2022"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src="/image/G_ProDoctorov_2_2025.jpg"
                    alt="Грамота ProDoctorov 2025"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src="/image/G_ProDoctorov_3_2024.jpg"
                    alt="Грамота ProDoctorov 2024"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Examples of Work */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Примеры работ
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Placeholder for work examples */}
                <div className="bg-gray-100 rounded-lg p-6 aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-4xl text-gray-400 mb-2">🔬</div>
                  <p className="text-gray-500 text-sm text-center">Пример 1</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-4xl text-gray-400 mb-2">📊</div>
                  <p className="text-gray-500 text-sm text-center">Пример 2</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-4xl text-gray-400 mb-2">🔬</div>
                  <p className="text-gray-500 text-sm text-center">Пример 3</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-4xl text-gray-400 mb-2">📊</div>
                  <p className="text-gray-500 text-sm text-center">Пример 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о работе доктора Маркарян Эдуард Жорикович
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Отзывы пациентов
              </h3>
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-3xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600 ml-2">из 5</span>
              </div>
              <p className="text-gray-600">Основано на отзывах пациентов</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <p className="text-center text-gray-600 text-lg mb-4">
                Отзывы будут добавлены с реальными комментариями пациентов
              </p>
              <p className="text-center text-gray-500 text-sm">
                Все отзывы доступны на официальной странице Яндекс.Здоровье
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://yandex.ru/medicine/doctor/markaryan_eduard_c98754lmszvOR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                <span>Читать все отзывы на Яндекс.Здоровье</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-blue-100">
              Свяжитесь со мной для записи на прием
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-blue-100">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">doctor@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-blue-100">
                      г. Пятигорск<br/>
                      г. Ессентуки
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">🕒</div>
                  <div>
                    <p className="font-semibold">Часы приема</p>
                    <p className="text-blue-100">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="video-section" className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-semibold mb-6">Видеокарточка врача</h3>
              <div className="mb-6">
                <div className="aspect-[9/16] max-w-sm mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <video 
                    controls 
                    className="w-full h-full rounded-lg object-cover"
                    poster="/image/video-poster.jpg"
                  >
                    <source src="/video/video profile.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео
                  </video>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Записаться на прием</h4>
                
                <a
                  href="https://wa.me/79XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Записаться в WhatsApp
                </a>
                
                <a
                  href="https://t.me/doctor_markaryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Записаться в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">Доктор Маркарян Эдуард Жорикович</p>
          <p className="text-gray-400">Хирург-колопроктолог</p>
          <div className="mt-6 text-gray-500">
            <p>&copy; 2025 </p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setIsVideoOpen(false)}>
          <div className="relative max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <div className="aspect-[9/16] max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden">
              <video 
                controls 
                autoPlay
                className="w-full h-full object-cover"
                poster="/image/video-poster.jpg"
              >
                <source src="/video/video profile.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsContactModalOpen(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Выберите способ связи</h3>
              <p className="text-gray-600 mb-6">Через какой мессенджер вам удобнее записаться на прием?</p>
              
              <div className="space-y-3">
                <a
                  href="https://wa.me/79XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                
                <a
                  href="https://t.me/doctor_markaryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </div>
              
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="mt-6 text-gray-500 hover:text-gray-700 transition-colors"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
