import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  if (isEmpty)
    return (
      <div>
        <h1 className="py-10 text-5xl raleway-regular">Your Orders</h1>
        <img src="/image.png" alt="" />
      </div>
    );
  return (
    <div className="relative">
      <h1 className="py-10 text-5xl raleway-regular">Your Orders</h1>

      <div>
        {items.map((item) => (
          <div className="relative" key={item.id}>
            <img src="/image.png" alt="" />
            <img
              src={item.image}
              className="w-48 absolute right-28 top-10"
              alt="itemimage"
            />
            <div className="">
              <p className="mb-5">
                <span className="font-bold text-2xl"> {item.quantity}x</span>{' '}
                {item.text}
              </p>
            </div>

            <button
              className="absolute bg-black minus-btn font-extrabold"
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
              }
            >
              -
            </button>
            <button
              className="plus-btn absolute left-10 bg-black font-extrabold"
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
              }
            >
              +
            </button>
            <button
              className="bg-gray-300 text-black font-extrabold p-4 w-1/2 rounded-2xl my-2"
              onClick={() => removeItem(item.id)}
            >
              {' '}
              &times;{' '}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
