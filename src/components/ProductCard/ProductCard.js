import { Card, CardContent, CardMedia } from '@material-ui/core';
import React from 'react';
import './ProductCard.css';

function ProductCard() {
  return (
    <div className="productCard">
      <Card>
        <CardMedia>
          <img
            src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            alt=""
          />
        </CardMedia>
        <CardContent>
          <div className="productCard__info">
            <h2>Title</h2>
            <h5>Category</h5>
            <p>
              <span>
                <small>$</small>
              </span>
              88.00
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
