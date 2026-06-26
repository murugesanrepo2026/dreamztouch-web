// components/HelpCenter.tsx
'use client';

import PolicyLayout from './PolicyLayout';

export default function HelpCenter() {
  return (
    <PolicyLayout title="Help Center" lastUpdated="We’re here to help! 😊">
      <div className="pp-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>How do I enroll in a course?</h3>
          <p>
            Simply browse our Courses section, select your desired course, and click
            the "Enroll Now" button. You’ll be guided through the registration and
            payment process.
          </p>
        </div>

        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>
            We accept all major credit/debit cards, UPI, net banking, and PayPal.
            All transactions are processed securely via our payment gateway.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I get a refund?</h3>
          <p>
            Yes, we offer a 7‑day money‑back guarantee for all courses. If you’re
            not satisfied, contact us within 7 days of purchase for a full refund.
          </p>
        </div>

        <div className="faq-item">
          <h3>How can I contact support?</h3>
          <p>
            You can reach us at <strong>support@dreamztouch.in</strong> or call
            +91‑98765‑43210. Our support team is available Monday–Friday, 9 AM – 6 PM IST.
          </p>
        </div>

        <div className="faq-item">
          <h3>Are certificates provided?</h3>
          <p>
            Yes, upon successful completion of a course, you will receive a
            downloadable certificate that you can share on LinkedIn or your resume.
          </p>
        </div>
      </div>

      <div className="pp-section">
        <h2>Still need help?</h2>
        <p>
          If you couldn’t find the answer, please email us at{' '}
          <strong>support@dreamztouch.in</strong> or use the <strong>Contact Us</strong>{' '}
          form. We’ll respond within 24 hours.
        </p>
      </div>
    </PolicyLayout>
  );
}