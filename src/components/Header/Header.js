import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  InputBase,
  Popover,
  Toolbar,
} from '@material-ui/core';
import { Close, Menu, Search, ShoppingBasket } from '@material-ui/icons';
import React, { useState } from 'react';
import BasketItem from '../BasketItem/BasketItem';
import './Header.css';

function Header() {
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);

  const id = Boolean(anchorEl) ? 'simple-popover' : undefined;

  return (
    <div className="header">
      <AppBar position="static" className="header__appBar">
        <div className="header__top">
          <div className="header__basket">
            <IconButton
              aria-describedby={id}
              onClick={(e) => {
                setAnchorEl(e.currentTarget);
              }}
            >
              <Badge badgeContent={4} color="primary">
                <ShoppingBasket />
              </Badge>
            </IconButton>
            <Popover
              className="header__basketPopup"
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
              <div className="header__basketInfo">
                <h3>Basket</h3>
                <h2>$200</h2>
              </div>
              <div className="header__basketItems">
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
              </div>
              <div className="header__basketCheckout">
                <Button className="header__basketCheckoutBtn">
                  Proceed to checkout
                </Button>
              </div>
            </Popover>
          </div>
          <Avatar className="header__avatar" />

          {/* <a href="/">My account</a> */}
          <div className="header__searchContainer">
            <Search />
            <InputBase
              className="header__search"
              placeholder="Enter search items..."
            />
          </div>
        </div>
        <Toolbar edge="start" className="header__toolbar">
          <h1>Big Title</h1>
          <IconButton
            className="header__menuToggle"
            onClick={() => setShowMobileLinks(true)}
          >
            <Menu />
          </IconButton>
          <div className={`header__navLinks ${showMobileLinks ? 'show' : ''}`}>
            <IconButton
              className="header__closeMobileMenu"
              onClick={() => setShowMobileLinks(false)}
            >
              <Close />
            </IconButton>
            <a href="/">Home</a>
            <a href="/">Event</a>
            <a href="/">Accesories</a>
            <a href="/">Apparel</a>
            <a href="/">Featured Items</a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
