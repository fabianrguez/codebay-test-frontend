import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Close, Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import './Header.css';
import HeaderTop from './HeaderTop/HeaderTop';

function Header() {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  return (
    <div className="header">
      <AppBar position="static" className="header__appBar">
        <HeaderTop />
        <Toolbar edge="start" className="header__toolbar">
          <h1 className="header__title">Title</h1>
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
