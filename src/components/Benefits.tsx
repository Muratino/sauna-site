import React from 'react';
import { Heart, Brain, Battery, Droplets } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Cardiovascular Health',
    description: 'Improve heart health and circulation through regular sauna sessions',
  },
  {
    icon: Brain,
    title: 'Mental Wellness',
    description: 'Reduce stress and anxiety while promoting mental clarity',
  },
  {
    icon: Battery,
    title: 'Energy Boost',
    description: 'Enhance natural energy levels and improve sleep quality',
  },
  {
    icon: Droplets,
    title: 'Detoxification',
    description: 'Support natural detoxification through therapeutic heat exposure',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-white mb-16">
          Health <span className="text-amber-500">Benefits</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-black/50 p-6 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-colors duration-300"
            >
              <benefit.icon className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}