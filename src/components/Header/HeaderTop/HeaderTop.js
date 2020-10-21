import {
  Avatar,
  Badge,
  Button,
  IconButton,
  InputBase,
  Popover,
} from '@material-ui/core';
import { Search, ShoppingBasket } from '@material-ui/icons';
import React, { useState } from 'react';
import BasketItem from '../../BasketItem/BasketItem';
import './HeaderTop.css';
import { basket as basketItems } from '../../../data.json';

function HeaderTop() {
  const [anchorEl, setAnchorEl] = useState(false);
  const [basket] = useState(basketItems);

  const id = Boolean(anchorEl) ? 'simple-popover' : undefined;

  const getTotalCost = () =>
    basket.reduce((amount, item) => (amount += item.price), 0);

  return (
    <div className="headerTop">
      <div className="headerTop__basket">
        <IconButton
          aria-describedby={id}
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
          }}
        >
          <Badge badgeContent={basket?.length} color="primary">
            <ShoppingBasket />
          </Badge>
        </IconButton>
        <Popover
          className="headerTop__basketPopup"
          id={id}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className="headerTop__basketInfo">
            <h3 className="headerTop__title">
              Basket <small>({basket?.length} items)</small>
            </h3>
            <h2>${getTotalCost()}</h2>
          </div>
          <div className="headerTop__basketItems">
            {basket &&
              basket.map((item, index) => <BasketItem key={index} {...item} />)}
          </div>
          <div className="headerTop__basketCheckout">
            <Button className="headerTop__basketCheckoutBtn">
              Proceed to checkout
            </Button>
          </div>
        </Popover>
      </div>
      <Avatar className="headerTop__avatar" />

      <div className="headerTop__searchContainer">
        <Search />
        <InputBase
          className="headerTop__search"
          placeholder="Enter search items..."
        />
      </div>
    </div>
  );
}

export default HeaderTop;
