
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-slate-900 section-header mb-8">Contact & Network</h2>
      <p className="text-slate-600 mb-8 max-w-xl">
        I am currently seeking opportunities to collaborate on challenging systems engineering projects. Let's connect.
      </p>
      <div className="flex flex-col space-y-4">
        <a 
          href="mailto:jiyanshkushwahmain@gmail.com" 
          className="group flex items-center space-x-3 text-slate-700 hover:text-slate-900"
        >
          <span className="font-semibold border-b-2 border-transparent group-hover:border-slate-900 transition-all">
            jiyanshkushwahmain@gmail.com
          </span>
        </a>
        <a 
          href="https://www.linkedin.com/in/jiyansh-kushwah-b528a0267/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 text-slate-700 hover:text-slate-900"
        >
          <span className="font-semibold border-b-2 border-transparent group-hover:border-slate-900 transition-all">
            LinkedIn Profile
          </span>
        </a>
        <a 
          href="https://github.com/Jiyansh-2006" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center space-x-3 text-slate-700 hover:text-slate-900"
        >
          <span className="font-semibold border-b-2 border-transparent group-hover:border-slate-900 transition-all">
            GitHub Portfolio
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
