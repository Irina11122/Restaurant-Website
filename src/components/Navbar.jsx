import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
export default function Navbar() {
  return (
    <div className="flex justify-between p-4 navbar fixed w-full z-20">
      <h1 className="montserrat-underline-bold">KOKO LOUNGE-BAR</h1>
      <nav className="md:flex hidden md:gap-10 playfair-display-regulars">
        <ScrollLink to="home" smooth duration={500} offset={-50}>
          Home
        </ScrollLink>
        <ScrollLink to="specialties" smooth duration={500} offset={-50}>
          Menu
        </ScrollLink>
        <ScrollLink to="about" smooth duration={500} offset={-50}>
          About
        </ScrollLink>
        <ScrollLink to="contact" smooth duration={500} offset={-50}>
          Contact
        </ScrollLink>
      </nav>
      <button>+</button>
    </div>
  );
}
