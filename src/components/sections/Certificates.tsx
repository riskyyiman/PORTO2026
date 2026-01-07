'use client'; // Wajib ada karena menggunakan useState

import { EyeOff, Eye, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { certificates } from '../../data/Certificates';

export const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="space-y-5 mb-10">
          <div className="inline-flex items-center bg-black/90 rounded-md text-white font-semibold border border-white/10 text-sm py-2.5 px-3 shadow-lg">Certificates</div>
          <h2 className="font-bold text-3xl sm:text-5xl tracking-tight text-white">Browse my achievements</h2>
          <p className="text-base text-gray-400 md:text-xl max-w-2xl">Certifications and awards that showcase my journey of continuous learning and expertise in the field.</p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-start mt-6 mb-8">
          <button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-200 transition-all duration-300">
            {showAll ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative">
              {/* Image Container */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                {/* External Link Overlay */}
                <a
                  href={cert.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-black p-2.5 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                  title="View Certificate"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2">{cert.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mt-1">{cert.issuer}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    Issued: <span className="text-gray-700">{cert.issued}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
