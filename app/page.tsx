"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Modals from '../components/Modals';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<{type: 'image' | 'video', src: string, alt: string} | null>(null);

  const openGalleryModal = (type: 'image' | 'video', src: string, alt: string) => {
    setSelectedGalleryItem({ type, src, alt });
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
    setSelectedGalleryItem(null);
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const openVideoModal = () => setIsVideoOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      <Navbar onOpenContactModal={openContactModal} />
      
      <main>
        <HeroSection onOpenVideoModal={openVideoModal} />
        <AboutSection />
        <ServicesSection onOpenContactModal={openContactModal} />
        <GallerySection onOpenGalleryModal={openGalleryModal} />
        <ReviewsSection />
        <ContactSection onOpenVideoModal={openVideoModal} onOpenContactModal={openContactModal} />
      </main>

      <Footer />

      <Modals 
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        isContactModalOpen={isContactModalOpen}
        setIsContactModalOpen={setIsContactModalOpen}
        isGalleryModalOpen={isGalleryModalOpen}
        closeGalleryModal={closeGalleryModal}
        selectedGalleryItem={selectedGalleryItem}
      />
    </div>
  );
}
