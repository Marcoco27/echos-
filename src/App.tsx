import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Book, Mail, ChevronDown, ArrowRight } from 'lucide-react';
import content from './content.json';
import { saveEmail } from './emailStorage';

const LazyImage = lazy(() => import('./LazyImage'));

const App: React.FC = () => {
  // ... (le reste du code reste inchangé)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* ... (le reste du JSX reste inchangé) */}
      
      {/* Testimonials Section */}
      <section id="temoignages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">{content.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <p className="mb-4 italic">"{item.quote}"</p>
                <div className="flex items-center">
                  <Suspense fallback={<div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>}>
                    <LazyImage
                      src={item.photo}
                      alt={`Photo de ${item.author}`}
                      className="w-12 h-12 object-cover rounded-full mr-4"
                    />
                  </Suspense>
                  <p className="font-bold">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (le reste du JSX reste inchangé) */}
    </div>
  );
};

export default App;