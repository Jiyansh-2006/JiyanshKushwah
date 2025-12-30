
import React from 'react';
import resumePdf from '../assets/resume.pdf';

const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-32 lg:py-48 flex flex-col items-start">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Jiyansh Kushwah
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl leading-relaxed">
          CSE Undergraduate | DSA • Full-Stack • AI & Quantum Computing
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl leading-relaxed"></p>
          Building scalable systems and exploring the intersection of software, AI, and quantum computing.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
  href={resumePdf}
  target="resume.pdf"
  rel="noopener noreferrer"
  className="bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition-all shadow-sm"
>
            View Resume
          </a>
          <a
            href="https://github.com/Jiyansh-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-200 text-slate-700 px-8 py-3 rounded-md font-semibold hover:bg-slate-50 transition-all"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
