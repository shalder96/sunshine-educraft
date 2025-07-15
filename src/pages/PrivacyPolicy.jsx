import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl px-6 py-12 mx-auto text-gray-800">
      <h1 className="mb-6 text-3xl font-bold text-green-700">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>EduCraft</strong>, we value your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-green-600">1. Information We Collect</h2>
      <ul className="pl-6 text-gray-700 list-disc">
        <li>Personal data like name, email, and contact info</li>
        <li>Course interaction and preferences</li>
        <li>Device/browser and usage data via cookies</li>
      </ul>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-green-600">2. How We Use Your Information</h2>
      <p className="mb-2">
        We use your data to:
      </p>
      <ul className="pl-6 text-gray-700 list-disc">
        <li>Provide and improve our course services</li>
        <li>Send updates, newsletters, and offers</li>
        <li>Comply with legal requirements</li>
      </ul>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-green-600">3. Data Security</h2>
      <p>
        We use industry-standard measures to protect your personal information, but no system is 100% secure.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-green-600">4. Third-Party Services</h2>
      <p>
        We may use third-party tools (e.g., payment gateways, analytics) that have their own privacy policies.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-green-600">5. Your Rights</h2>
      <p>
        You can request access, modification, or deletion of your data by contacting us.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-green-600">6. Updates</h2>
      <p>
        We may update this policy. Changes will be reflected on this page with an updated date.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: July 15, 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
