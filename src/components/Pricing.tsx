import React from 'react';
import { Check } from 'lucide-react';
import { scrollToContact } from '../utils/scroll';

const packages = [
  {
    name: 'Essential',
    price: '49',
    features: [
      'Single facility access',
      '2-hour session',
      'Towel service',
      'Locker access',
    ],
  },
  {
    name: 'Premium',
    price: '89',
    features: [
      'All facilities access',
      '4-hour session',
      'Premium amenities',
      'Complimentary refreshments',
      'Robe and slippers',
    ],
    highlighted: true,
  },
  {
    name: 'Luxury',
    price: '149',
    features: [
      'All facilities access',
      'Full-day access',
      'Private relaxation room',
      'Massage session (30min)',
      'Gourmet refreshments',
      'Luxury care package',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-white mb-16">
          Wellness <span className="text-amber-500">Packages</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-lg p-8 ${
                pkg.highlighted
                  ? 'bg-amber-500 text-black'
                  : 'bg-neutral-900 text-white'
              }`}
            >
              <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-6">
                €{pkg.price}
                <span className="text-sm font-normal">/person</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded ${
                  pkg.highlighted
                    ? 'bg-black text-white hover:bg-neutral-800'
                    : 'bg-amber-500 text-black hover:bg-amber-400'
                } transition-colors duration-200`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}