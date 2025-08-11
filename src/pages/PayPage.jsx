import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PayPage() {
  const navigate = useNavigate();
  return (
    <div id="pay">
      <div className="pay-div py-5 px-10">
        <h1 className="bg-black text-gray-300 w-1/2 p-2 font-semibold text-3xl mb-5">
          Credit Card Payment
        </h1>
        <p className="my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          excepturi?
        </p>
        <div className="w-full flex justify-center">
          <div className="credit-card text-white">
            <div className="px-10 py-4">
              <div className="flex justify-between ">
                <h1 className="text-2xl">Credit Card</h1>
                <h1 className="text-2xl">Bank Name</h1>
              </div>

              <img src="/card-thing.png" alt="" />
              <div className="flex text-4xl">
                <input
                  autoFocus
                  type="text"
                  placeholder="1234"
                  className="bg-transparent w-28"
                />
                <input
                  type="text"
                  placeholder="5678"
                  className="bg-transparent w-28"
                />
                <input
                  type="text"
                  placeholder="9012"
                  className="bg-transparent w-28"
                />
                <input
                  type="text"
                  placeholder="3456"
                  className="bg-transparent w-28"
                />
              </div>

              <div className="flex justify-between">
                <span>0123</span>
                <div className="flex items-center gap-4">
                  <div className="flex-col">
                    <p>valid </p>
                    <p>thru</p>
                  </div>
                  <p>01/90</p>
                </div>
              </div>

              <h1 className="text-2xl my-3">
                <input
                  type="text"
                  className="bg-transparent"
                  placeholder="Name Surname"
                />
              </h1>
            </div>
          </div>
        </div>

        <button className="bg-black text-white p-2 w-30 my-4 rounded">
          Pay
        </button>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    </div>
  );
}
