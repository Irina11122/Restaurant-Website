import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 navbar fixed w-full z-20">
      <h1 className="montserrat-underline-bold">KOKO LOUNGE-BAR</h1>
      <nav className="md:flex hidden md:gap-10 playfair-display-regulars">
        <a href="#">Home</a>
        <a href="#specialties">Menu</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <button>+</button>
    </div>
  );
}
