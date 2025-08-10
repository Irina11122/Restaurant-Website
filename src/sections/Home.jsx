import React from "react";

export default function Home() {
  return (
    <section id="home" className="flex w-full h-screen overflow-hidden">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="playfair-display-bold text-4xl text-start great-food">
          <h1> Great Food,Better Company</h1>
          <h1></h1>
        </div>
        <p className="home-par text-start">
          Serving comfort food made with love — fresh, fast, and full of flavor
          .
        </p>
        <button className="bg-black text-white montserrat-underline-bold uppercase p-4 w-1/2 rounded btn-shadow border hover:button-hover">
          order online
        </button>
      </div>
      <div className="relative w-1/2">
        <div className="w-1/2 h-1/2 bg-green-100 rotate-12 napkin z-0"></div>
        <img
          src="../../public/NicePng_cookie-crumbs-png_762694932.png"
          alt=""
          className="absolute rotate-12 crumbs"
        />
        <img
          src="../../public/top-view-mushroom-pizza-sliced-cooked-dough-with-cheese-olives-dark-surface-food-italian-meal-pizza-dough.png"
          alt="pizza-home"
          className="pizza-img"
        />
      </div>
    </section>
  );
}
