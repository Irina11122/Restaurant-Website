import gsap from 'gsap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Specialties() {
  const navigate = useNavigate();
  const menuInfo = [
    {
      plate: '/image.png',
      image:
        '/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu.png',
      text: 'PIZZA',
    },
    {
      plate: '/image.png',
      image: '/steak.png',
      text: 'STEAK',
    },
    {
      plate: '/image.png',
      image: '/pasta.png',
      text: 'PASTA',
    },
    {
      plate: '/image.png',
      image: '/dessert.png',
      text: 'DESSERT',
    },
    {
      plate: '/image.png',
      image: '/salad.png',
      text: 'SALAD',
    },
    {
      plate: '/image.png',
      image: '/coffee.png',
      text: 'DRINKS',
    },
  ];
  return (
    <section id="specialties" className="z-10">
      <div className="h-screen flex flex-col md:flex-row md:flex-wrap justify-center m-0 items-center">
        {menuInfo.map((menu, i) => {
          return (
            <div
              onClick={() => navigate('menu')}
              className="w-30 relative z-20"
              key={i}
            >
              <img src={menu.plate} alt="" className="plate z-10" />
              <img
                src={menu.image}
                alt=""
                id="rotate-img"
                className="absolute top-0 left-10  pizza-menu-img "
              />
              <h1 className="text-center text-white raleway-regular spec-text">
                {' '}
                {menu.text}{' '}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
