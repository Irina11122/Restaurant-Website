import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center p-10 h-screen"
    >
      <div className="w-1/2">
        <img src="/falling-pizza.png" alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="great-food">About Us</h2>
        <p className="mb-10 playfair-display-regular">
          At Koko, we believe great food brings people together. From our
          handcrafted pizzas and perfectly grilled steaks to fresh salads and
          delightful desserts, every dish is made with passion and the finest
          ingredients.{' '}
        </p>
        <p className="playfair-display-regular">
          Whether you’re here for a quick bite or a special night out, we’re
          committed to delivering an unforgettable dining experience. Welcome to
          a place where good taste meets good company.
        </p>
      </div>
    </section>
  );
}
