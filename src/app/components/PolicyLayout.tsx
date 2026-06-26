// components/PolicyLayout.tsx
'use client';

import React from 'react';

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
  lastUpdated?: string;   // optional
}

const PolicyLayout = ({ title, children, lastUpdated }: PolicyLayoutProps) => {
  return (
    <div className="pp-wrapper">
      <div className="pp-container">
        <div className="pp-heading-wrapper">
          <h1 className="pp-main-heading">{title}</h1>
          <div className="pp-heading-underline" />
        </div>
        <div className="pp-card">
          {lastUpdated && <p className="effective-date">{lastUpdated}</p>}
          {children}
        </div>
      </div>

      {/* shared styles */}
      <style>{`
        .pp-wrapper {
          min-height: 100vh;
          background: #FCF6EF;
          padding: 8rem 2rem 1rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        }
        .pp-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        .pp-heading-wrapper {
          text-align: center;
          margin-bottom: 2rem;
        }
        .pp-main-heading {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #f0e6ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: purple;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .pp-heading-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #fff, #c084fc, #fff);
          border-radius: 4px;
          margin: 0 auto;
        }
        .pp-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          padding: 2rem 2rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: transform 0.2s ease, box-shadow 0.2s;
        }
        .pp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
        }
        .effective-date {
          text-align: center;
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 2rem;
        }
        .pp-section {
          margin-bottom: 1.75rem;
        }
        .pp-section h2 {
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e1e2f, #2d2d44);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 0.75rem;
        }
        .pp-section p {
          color: #374151;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .pp-section strong {
          color: #1e1e2f;
        }
        .faq-item {
          margin-bottom: 1.5rem;
        }
        .faq-item h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e1e2f;
          margin-bottom: 0.3rem;
        }
        .faq-item p {
          margin-bottom: 0;
          padding-left: 0.5rem;
          border-left: 3px solid #667eea;
          padding-left: 1rem;
        }
        @media (max-width: 640px) {
          .pp-wrapper { padding: 6rem 1rem 1rem; }
          .pp-card { padding: 1.25rem; }
          .pp-main-heading { font-size: 2rem; }
          .pp-section h2 { font-size: 1.3rem; }
          .faq-item h3 { font-size: 1.05rem; }
        }
      `}</style>
    </div>
  );
};

export default PolicyLayout;