import React from 'react';
import './BasketItem.css';

function BasketItem({ image, title, price }) {
  return (
    <div className="basketItem">
      <img
        src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        alt=""
      />
      <div className="basketItem__info">
        <h4>Item name</h4>
        <p>
          <span>$</span>99.00
        </p>
      </div>
    </div>
  );
}

export default BasketItem;
