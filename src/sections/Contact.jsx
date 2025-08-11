import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen text-white flex items-center justify-start "
    >
      <div className="ml-10">
        <h1 className="">Contact Us</h1>
        <p className="w-1/2">
          Got questions, special requests, or want to make a reservation? We’re
          here to help! Reach out anytime:
        </p>
        <p> Phone: [Your phone number]</p>
        <p> Email: [Your email address]</p>
        <p>Address: [Your full address]</p>
        <p>Hours: [Opening hours, e.g., Mon–Sun, 11 AM–10 PM]</p>
        <p>
          Prefer a quick message? Use the contact form below — we’ll get back to
          you ASAP.
        </p>
      </div>
    </section>
  );
}
