// components/Legal.tsx
'use client';

import PolicyLayout from './PolicyLayout';

export default function Legal() {
  return (
    <PolicyLayout title="Legal Notice" lastUpdated="Last updated: 12th May 2026">
      <div className="pp-section">
        <h2>Company Information</h2>
        <p>
          <strong>Dreamz Touch Technologies</strong><br />
          Registered Office:  Chennai – 600053, Tamil Nadu, India<br />
          <strong>Email:</strong> support@dreamztouch.in<br />
          <strong>Phone:</strong> +91‑9342138238<br />
          <strong>GSTIN:</strong>  - 
        </p>
      </div>

      <div className="pp-section">
        <h2>Legal Documents</h2>
        <p>
          Below are the legal documents governing your use of our website and services.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#374151' }}>
          <li><a href="/privacy-policy" style={{ color: '#667eea', textDecoration: 'underline' }}>Privacy Policy</a></li>
          <li><a href="/terms" style={{ color: '#667eea', textDecoration: 'underline' }}>Terms of Service</a></li>
          <li><a href="/help" style={{ color: '#667eea', textDecoration: 'underline' }}>Help Center</a></li>
        </ul>
      </div>

      <div className="pp-section">
        <h2>Copyright & Trademark</h2>
        <p>
          All content on this website, including but not limited to text, graphics,
          logos, and course materials, is the exclusive property of Dreamz Touch
          Technologies and is protected by Indian and international copyright laws.
          Unauthorized use is prohibited.
        </p>
      </div>

      <div className="pp-section">
        <h2>Disclaimer</h2>
        <p>
          The information on this website is provided for general informational
          purposes only and does not constitute professional advice. We make no
          representations or warranties about the accuracy or completeness of the
          information.
        </p>
      </div>

      <div className="pp-section">
        <h2>Grievance Redressal</h2>
        <p>
          In case of any complaints or grievances, please contact our Grievance
          Officer:<br />
          <strong>Name:</strong> Mr. Suthan Keshav<br />
          <strong>Email:</strong> grievance@dreamztouch.in<br />
          <strong>Response Time:</strong> 48 hours
        </p>
      </div>
    </PolicyLayout>
  );
}