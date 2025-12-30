
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Jiyansh Kushwah. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built for Recruiter Optimization & Engineering Clarity.</p>
      </div>
    </footer>
  );
};

export default Footer;
