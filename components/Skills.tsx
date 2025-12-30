
import React from 'react';

const Skills: React.FC = () => {
  const categories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'Python', 'C++']
    },
    {
      title: 'Core Computer Science',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving']
    },
    {
      title: 'Web & Backend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js']
    },
    {
      title: 'Databases',
      skills: ['SQL', 'MySQL']
    },
    {
      title: 'Emerging Technologies',
      skills: ['AI / Machine Learning (Foundational)', 'Quantum Computing (Qiskit)']
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-slate-900 section-header mb-8 text-left">Technical Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-slate-700 font-medium border-l-2 border-slate-100 pl-4 hover:border-slate-400 transition-colors">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
