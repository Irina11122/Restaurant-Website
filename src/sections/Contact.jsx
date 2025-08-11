import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen text-gray-200 flex items-center justify-start "
    >
      <div className="ml-10 text-2xl playfair-display-regular">
        <h1 className="playfair-display-regular text-7xl mb-10">Contact Us</h1>
        <p className="mb-10 w-1/2">
          Got questions, special requests, or want to make a reservation? We’re
          here to help! Reach out anytime:
        </p>
        <p className="mb-3"> Phone: 045 - 332 - 445</p>
        <p className="mb-3"> Email: koko@email.com</p>
        <p className="mb-3">Address: Dracevo 127 street 3</p>
        <p className="mb-10">Hours: Mon–Sun, 11 AM–10 PM</p>
        <p className='w-1/2'>
          Prefer a quick message? Use the contact form below — we’ll get back to
          you ASAP.
        </p>
      </div>
    </section>
  );
}
