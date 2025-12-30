
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'LoanSimplify',
      subtitle: 'AI-Powered Digital Loan Processing System',
      problem: 'Traditional loan processing is hindered by heavy manual paperwork, document verification delays, and high operational costs.',
      solution: 'Automated the end-to-end loan lifecycle using AI-driven verification and processing modules to streamline approvals.',
      implementation: 'Built as a hackathon project using Node.js for backend scalability and integrated AI APIs for document analysis and credit risk assessment.',
      impact: 'Significantly reduced processing time and improved accuracy by eliminating manual entry errors, designed with real-world financial scalability in mind.'
    },
    {
      title: 'QChain',
      subtitle: 'Quantum-Resistant Blockchain (Ongoing)',
      problem: 'Current blockchain architectures rely on ECC/RSA encryption, which are theoretically vulnerable to Shor\'s algorithm in the quantum era.',
      solution: 'Developing a blockchain framework that utilizes post-quantum cryptographic (PQC) algorithms to ensure long-term data integrity.',
      implementation: 'Utilizing Solidity for smart contracts, Hardhat for local development, and implementing lattice-based cryptography principles.',
      impact: 'Addresses the existential threat of quantum computing on modern financial ledgers, ensuring future-proof security for decentralized assets.'
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-slate-900 section-header mb-12">Featured Engineering Projects</h2>
      <div className="space-y-20">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
              <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                {project.subtitle}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Problem Statement</h4>
                  <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution Overview</h4>
                  <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Technical Implementation</h4>
                  <p className="text-slate-700 leading-relaxed">{project.implementation}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Impact & Scalability</h4>
                  <p className="text-slate-700 leading-relaxed">{project.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
