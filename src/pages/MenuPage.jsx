import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import Cart from '../components/Cart';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
uuidv4();
export default function MenuPage() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { addItem } = useCart();
  const menuInformation = [
    {
      id: 1,
      plate: '/image.png',
      image:
        '/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu.png',
      text: 'PIZZA',
      price: 24,
    },
    {
      id: 2,
      plate: '/image.png',
      image: '/dessert.png',
      text: 'Steak',
      price: 18,
    },
    {
      id: 3,
      plate: '/image.png',
      image: '/steak.png',
      text: 'DESSERT',
      price: 1.99,
    },
    {
      id: 4,
      plate: '/image.png',
      image: '/salad.png',
      text: 'PIZZA',
      price: 24.43,
    },
    {
      id: 5,
      plate: '/image.png',
      image: '/coffee.png',
      text: 'PIZZA',
      price: 24.2,
    },
    {
      id: 6,
      plate: '/image.png',
      image: '/pasta.png',
      text: 'PIZZA',
      price: 22,
    },
    {
      id: 7,
      plate: '/image.png',
      image:
        '/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu.png',
      text: 'PIZZA',
      price: 10.2,
    },
    {
      id: 8,
      plate: '/image.png',
      image:
        '/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu.png',
      text: 'PIZZA',
      price: 5,
    },
    {
      id: 9,
      plate: '/image.png',
      image:
        '/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu.png',
      text: 'PIZZA',
      price: 224,
    },
    {
      id: 10,
      plate: '/image.png',
      image:
        '/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu.png',
      text: 'PIZZA',
      price: 3,
    },
    {
      id: 11,
      plate: '/image.png',
      image:
        '/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu.png',
      text: 'PIZZA',
      price: 4.4,
    },
    {
      id: 12,
      plate: '/image.png',
      image: '/dessert.png',
      text: 'Steak',
      price: 2,
    },
    {
      id: 13,
      plate: '/image.png',
      image: '/steak.png',
      text: 'DESSERT',
      price: 324,
    },
    {
      id: 14,
      plate: '/image.png',
      image: '/salad.png',
      text: 'PIZZA',
      price: 34,
    },
    {
      id: 15,
      plate: '/image.png',
      image: '/coffee.png',
      text: 'PIZZA',
      price: 89.6,
    },
    {
      id: 16,
      plate: '/image.png',
      image: '/pasta.png',
      text: 'PIZZA',
      price: 84,
    },
  ];
  return (
    <div className="flex justify-between" id="menu">
      <div className="fixed w-full flex justify-center items-center bg-gray-500/50 p-4 menu-navbar">
        <nav className="flex gap-5 uppercase">
          <a href="#">Pizza</a>
          <a href="#">steak</a>
          <a href="#">dessert</a>
          <a href="#">pasta</a>
          <a href="#">drinks</a>
        </nav>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
      <div className="plates-div h-screen flex flex-col md:flex-row md:flex-wrap justify-center m-0 items-center menu-page">
        {menuInformation.map((p) => {
          return (
            <div className="w-30 mt-20 relative menu-card" key={p.id}>
              <img src={p.image} alt="" className="absolute my-menu-img z-10" />
              <img src={p.plate} alt="plate" className="menu-plate" />
              <div className="menu-info-div">
                <p className="text-white">Price: {p.price}$</p>
                <p className="text-white">Ingridients:</p>
                <p className="text-white"> Lorem, ipsum dolor.</p>
              </div>
              <button
                className="absolute bg-yellow-100 top-36 right-4 my-order-btn"
                onClick={() => addItem(p)}
              >
                Order
              </button>
            </div>
          );
        })}
      </div>
      <div className="order-div">
        <div className="mt-24 rounded relative text-white text-center bg-black/30 overflow-hidden my-cart">
          <Cart />{' '}
        </div>{' '}
        <button
          onClick={() => setModal(true)}
          className="bg-black p-4 w-full text-gray-200 text-3xl shadow-2xl"
        >
          Finish Order
        </button>
      </div>{' '}
      <div className="flex justify-center items-center">
        {' '}
        {modal && (
          <div className="h-screen bg-gray-300 absolute modal-my top-20 left-20 flex z-30">
            <div>
              <h1>Your Orders</h1>
              <img src="/image.png" alt="" />
            </div>
            <div>
              <h1 className="bg-gray-300 p-2 w-30 rounded text-2xl font-bold">
                Confirm and Pay
              </h1>
              <p className="text-white mt-2">
                Almost there! Please review your order details carefully. When
                you’re ready, choose your payment method and click Confirm to
                complete your order. We’ll start preparing your meal right away.
                Thank you for choosing Koko!
              </p>
              <button
                onClick={() => navigate('/pay')}
                className="bg-black w-1/2 text-gray-200 p-4 font-bold"
              >
                Confirm
              </button>
              <button onClick={() => setModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
