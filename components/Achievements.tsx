
import React from 'react';

const Achievements: React.FC = () => {
  const achievements = [
    { title: 'DSA Proficiency', description: 'Solved 120+ Data Structures & Algorithms problems on LeetCode.' },
    { title: 'HackerRank Gold Badge', description: 'Earned Gold Badge in Java programming on HackerRank.' },
    { title: 'NPTEL Discipline Star', description: 'Recognized as an NPTEL Discipline Star for consistent academic excellence.' },
    { title: 'Competitive Programming', description: 'Active participant in various regional and national coding competitions.' },
    { title: 'Hackathon Project', description: 'Built LoanSimplify for real-world financial use cases.' }
  ];

  return (
    <section id="achievements" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-slate-900 section-header mb-8">Notable Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <div key={item.title} className="p-6 bg-white border border-slate-100 rounded-lg shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
