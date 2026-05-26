"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GallerySectionProps {
  onOpenGalleryModal: (type: 'image' | 'video', src: string, alt: string) => void;
}

export default function GallerySection({ onOpenGalleryModal }: GallerySectionProps) {
  const [isVideoActive, setIsVideoActive] = useState(false);
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Рабочие моменты</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Снимки из профессиональной деятельности, взаимодействия с коллегами и признание пациентов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
          {/* Certificates and Awards */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🏅</span> Грамоты и сертификаты
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-2"
                onClick={() => onOpenGalleryModal('image', '/image/G_ProDoctorov_1_2023.jpg', 'Грамота ProDoctorov 2023')}
              >
                <Image
                  src="/image/G_ProDoctorov_1_2023.jpg"
                  alt="Грамота ProDoctorov 2023"
                  width={400}
                  height={560}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              <div 
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-2"
                onClick={() => onOpenGalleryModal('image', '/image/G_ProDoctorov_2_2022.jpg', 'Грамота ProDoctorov 2022')}
              >
                <Image
                  src="/image/G_ProDoctorov_2_2022.jpg"
                  alt="Грамота ProDoctorov 2022"
                  width={400}
                  height={560}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              <div 
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-2"
                onClick={() => onOpenGalleryModal('image', '/image/G_ProDoctorov_2_2025.jpg', 'Грамота ProDoctorov 2025')}
              >
                <Image
                  src="/image/G_ProDoctorov_2_2025.jpg"
                  alt="Грамота ProDoctorov 2025"
                  width={400}
                  height={560}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              <div 
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 p-2"
                onClick={() => onOpenGalleryModal('image', '/image/G_ProDoctorov_3_2024.jpg', 'Грамота ProDoctorov 2024')}
              >
                <Image
                  src="/image/G_ProDoctorov_3_2024.jpg"
                  alt="Грамота ProDoctorov 2024"
                  width={400}
                  height={560}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Examples of Work */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">📷</span> Рабочие фото
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => onOpenGalleryModal('image', '/image/work/IMG_9673.JPG', 'Рабочий момент - взаимодействие с коллегами')}
              >
                <Image 
                  src="/image/work/IMG_9673.JPG" 
                  alt="Рабочий момент"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative group transform hover:-translate-y-1">
                {isVideoActive ? (
                  <video
                    className="w-full h-full object-cover aspect-square"
                    src="/image/work/whatsapp_video_2025_12_21.mp4"
                    poster="/image/video-poster.jpg"
                    preload="none"
                    controls
                    autoPlay
                    playsInline
                  >
                    Ваш браузер не поддерживает видео
                  </video>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsVideoActive(true)}
                    className="block w-full h-full cursor-pointer"
                    aria-label="Воспроизвести рабочее видео"
                  >
                    <Image
                      src="/image/video-poster.jpg"
                      alt="Рабочее видео"
                      width={480}
                      height={784}
                      sizes="(max-width: 1024px) 50vw, 320px"
                      className="w-full h-full object-cover aspect-square opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300">
                      <span className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </span>
                    </span>
                  </button>
                )}
              </div>
              
              <div 
                className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => onOpenGalleryModal('image', '/image/work/IMG_9647.JPG', 'На медицинской конференции')}
              >
                <Image 
                  src="/image/work/IMG_9647.JPG" 
                  alt="На медицинской конференции"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div 
                className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => onOpenGalleryModal('image', '/image/work/IMG_9000.jpeg', 'Рабочий момент с коллегами')}
              >
                <Image 
                  src="/image/work/IMG_9000.jpeg" 
                  alt="Рабочий момент с коллегами"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
