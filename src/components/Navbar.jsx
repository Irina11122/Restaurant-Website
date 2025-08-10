import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 navbar">
      <h1 className="montserrat-underline-bold">KOKO LOUNGE-BAR</h1>
      <nav className="flex gap-10 playfair-display-regulars">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <button>+</button>
    </div>
  );
}
