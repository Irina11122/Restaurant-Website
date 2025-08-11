import React, { useEffect } from 'react';
import Home from '../sections/Home';
import Specialties from '../sections/Specialties';
import About from '../sections/About';
import Contact from '../sections/Contact';
import useLocoScroll from '../hooks/useLocoScroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

export default function MainPage() {
  useLocoScroll(true);

  useEffect(() => {
    gsap.to('.napkin', {
      x: 750,
      y: 1500,
      rotate: 28,
      height: 900,
      width: 900,
      scale: 0.2,
      zIndex: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#specialties',
        scroller: '.App',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        // markers: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <main id="mainpage" className=" App">
        <div className="napkin bg-green-100 h-screen w-full z-0 absolute right-0 top-0"></div>
        <Home />
        <Specialties />
        <About />
        <Contact />
      </main>
    </div>
  );
}
