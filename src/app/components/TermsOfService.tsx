// components/TermsOfService.tsx
'use client';

import PolicyLayout from './PolicyLayout';

export default function TermsOfService() {
  return (
    <PolicyLayout title="Terms of Service" lastUpdated="Last updated: 12th May 2026">
      <div className="pp-section">
        <p>
          Welcome to <strong>Dreamz Touch Technologies</strong> ("we", "our", "us").
          By using our website and services, you agree to these Terms of Service.
        </p>
      </div>

      <div className="pp-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website (www.dreamztouch.in) and any courses,
          tutorials, or services provided, you agree to be bound by these terms.
          If you do not agree, please do not use our website.
        </p>
      </div>

      <div className="pp-section">
        <h2>2. User Accounts</h2>
        <p>
          You may need to create an account to access certain services. You are
          responsible for maintaining the confidentiality of your account credentials
          and for all activities that occur under your account. You must be at least
          13 years old to use our services.
        </p>
      </div>

      <div className="pp-section">
        <h2>3. Course Enrollment & Payment</h2>
        <p>
          Courses are offered on a paid basis. All prices are listed in INR and are
          subject to change. Payment must be completed before you gain access to
          course materials. We use a secure third‑party payment gateway; we do not
          store your payment details.
        </p>
      </div>

      <div className="pp-section">
        <h2>4. Refund Policy</h2>
        <p>
          We offer a 7‑day money‑back guarantee from the date of enrollment. To
          request a refund, contact us at <strong>support@dreamztouch.in</strong>.
          Refunds are processed within 5‑7 business days.
        </p>
      </div>

      <div className="pp-section">
        <h2>5. Intellectual Property</h2>
        <p>
          All course content, videos, text, graphics, and logos are the property of
          Dreamz Touch Technologies and are protected by copyright law. You may not
          reproduce, distribute, or create derivative works without our explicit
          written permission.
        </p>
      </div>

      <div className="pp-section">
        <h2>6. User Conduct</h2>
        <p>
          You agree not to misuse our website, impersonate others, upload malicious
          content, or disrupt our services. We reserve the right to terminate your
          access for any violation of these terms.
        </p>
      </div>

      <div className="pp-section">
        <h2>7. Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" without any warranties of any kind,
          whether express or implied. We do not guarantee that our services will be
          uninterrupted or error‑free.
        </p>
      </div>

      <div className="pp-section">
        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Dreamz Touch Technologies shall
          not be liable for any indirect, incidental, or consequential damages
          arising out of your use of our website or services.
        </p>
      </div>

      <div className="pp-section">
        <h2>9. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes shall be
          subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
        </p>
      </div>

      <div className="pp-section">
        <h2>10. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. We will notify you of
          significant changes via email or a notice on our website.
        </p>
      </div>

      <div className="pp-section">
        <h2>11. Contact Us</h2>
        <p>
          For any questions about these terms, please email us at{' '}
          <strong>support@dreamztouch.in</strong>.
        </p>
      </div>
    </PolicyLayout>
  );
}