
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-slate-900 section-header mb-8">Professional Summary</h2>
      <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
        <p>
          I am a Computer Science & Engineering undergraduate at the <strong>Institute of Engineering and Management (IEM), Kolkata</strong>, maintaining a current <strong>CGPA of 9.03</strong>. My focus lies at the intersection of robust system architecture and emerging computation technologies.
        </p>
        <p>
          With a strong foundation in <strong>Data Structures and Algorithms (DSA)</strong> and Object-Oriented Programming, I approach complex problems with a first-principles mindset. My technical repertoire spans full-stack development with a focus on building scalable backend systems and exploring the potential of AI/ML integration.
        </p>
        <p>
          I am particularly invested in <strong>Quantum Computing</strong>, leveraging <strong>Qiskit</strong> to build and simulate quantum algorithms. My goal is to bridge the gap between classical engineering excellence and the next generation of computing paradigms.
        </p>
      </div>
    </section>
  );
};

export default About;
