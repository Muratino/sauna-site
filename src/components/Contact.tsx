import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-white mb-16">
          Visit <span className="text-amber-500">Us</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-1">Location</h3>
                <p className="text-gray-400">
                  123 Wellness Street<br />
                  Helsinki, Finland
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-1">Opening Hours</h3>
                <p className="text-gray-400">
                  Monday - Friday: 7:00 - 22:00<br />
                  Saturday - Sunday: 9:00 - 20:00
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-1">Phone</h3>
                <p className="text-gray-400">+358 123 456 789</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <div>
                <h3 className="text-white text-lg mb-1">Email</h3>
                <p className="text-gray-400">info@parahot.fi</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-neutral-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-neutral-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-black border border-neutral-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-amber-500 text-black py-3 rounded hover:bg-amber-400 transition-colors duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}