import React from 'react';

const facilities = [
  {
    title: 'Finnish Sauna',
    description: 'Authentic Finnish sauna experience with traditional wood-burning stove and aromatherapy options.',
    image: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80',
  },
  {
    title: 'Luxury Jacuzzi',
    description: 'State-of-the-art hydrotherapy jacuzzi with personalized jet settings and chromotherapy lighting.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80',
  },
  {
    title: 'Indoor Pool',
    description: 'Temperature-controlled indoor pool with dedicated lap lanes and relaxation zones.',
    image: 'https://images.unsplash.com/photo-1519214605650-76a613ee3245?auto=format&fit=crop&q=80',
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          Our <span className="text-amber-500">Facilities</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-serif mb-2">{facility.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}