import React from 'react';
import { scrollToContact } from '../utils/scroll';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Discover Pure <span className="text-amber-500">Relaxation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Experience the ultimate in wellness at Helsinki's most exclusive spa sanctuary
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-amber-500 text-black px-8 py-4 rounded text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105"
          >
            Begin Your Journey
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}