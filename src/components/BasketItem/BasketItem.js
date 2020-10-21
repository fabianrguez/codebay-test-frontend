import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './BasketItem.css';

function BasketItem({ image, name, price, category }) {
  return (
    <div className="basketItem">
      <img src={image} alt={name} />
      <div className="basketItem__info">
        <h3 className="basketItem__price">
          <span>$</span>
          {price}
        </h3>
        <h4 className="basketItem__name">{name}</h4>
        <p className="basketItem__category">{category}</p>
      </div>
      <IconButton>
        <Close />
      </IconButton>
    </div>
  );
}

export default BasketItem;
