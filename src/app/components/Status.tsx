// components/Status.tsx
'use client';

import PolicyLayout from './PolicyLayout';

export default function Status() {
  return (
    <PolicyLayout title="System Status" lastUpdated="All systems operational ✅">
      <div className="pp-section">
        <h2>Current Status</h2>
        <p>
          <strong>Website:</strong> ✅ Online<br />
          <strong>Course Platform:</strong> ✅ Online<br />
          <strong>Payment Gateway:</strong> ✅ Online<br />
          <strong>Support Email:</strong> ✅ Responding
        </p>
        <p style={{ marginTop: '1rem' }}>
          We monitor our services 24/7. Any disruptions will be reported here.
        </p>
      </div>
    </PolicyLayout>
  );
}