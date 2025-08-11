import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const component = useRef(null);

  return (
    <section
      ref={component}
      id="home"
      className="hero flex w-full h-screen overflow-hidden"
    >
      <img
        src="../../public/NicePng_cookie-crumbs-png_762694932.png"
        alt=""
        className="absolute right-0 crumbs top-0 z-0"
      />
      <div className="md:w-1/2 flex flex-col md:justify-center items-center justify-center md:ml-20 z-10 h-1/2  ">
        <div className="playfair-display-bold text-4xl text-start great-food z-10">
          <h1> Great Food,</h1>
          <h1>Better Company</h1>
        </div>
        <p className="home-par w-1/2 playfair-display-regular mb-5">
          Serving comfort food made with love — fresh, fast, and full of flavor.
        </p>
        <button
          onClick={() => navigate('menu')}
          className="bg-black home-button text-white montserrat-underline-bold uppercase p-4 order-btn btn-shadow border hover:button-hover"
        >
          order online
        </button>
      </div>
      <div className="relative md:w-1/2 h-1/2 md:h-screen w-full">
        <img
          src="/half-pizza.png"
          alt="pizza-home"
          className="md:object-cover absolute z-10 pizza-img"
        />
      </div>
    </section>
  );
}
