import { Card, CardContent, CardMedia } from '@material-ui/core';
import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, category, image }) {
  return (
    <div className="productCard">
      <Card>
        <CardMedia>
          <img src={image} alt={name} />
        </CardMedia>
        <CardContent>
          <div className="productCard__info">
            <h2 className="productCard__title">{name}</h2>
            <p className="productCard__category">{category}</p>
            <p className="productCard__price">
              <span>
                <small>$</small>
              </span>
              {price}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
