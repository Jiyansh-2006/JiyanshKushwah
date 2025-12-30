import React from 'react';
import profileImg from '../assets/jiyansh.jpeg';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-bold text-lg tracking-tight">
          <img
            src={profileImg}
            alt="Jiyansh Kushwah"
            className="h-10 w-10 rounded-full object-cover"
          />
          Jiyansh
        </a>

        <div className="hidden sm:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
