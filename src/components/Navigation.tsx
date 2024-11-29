import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToContact } from '../utils/scroll';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Facilities', href: '#facilities' },
    { label: 'Packages', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <span className="text-amber-500 text-2xl font-serif">Sauna</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={scrollToContact}
                className="bg-amber-500 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors duration-200"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-amber-500 block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={(e) => {
                setIsOpen(false);
                scrollToContact(e);
              }}
              className="w-full bg-amber-500 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}