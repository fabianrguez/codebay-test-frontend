import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <footer className="footer__content">
        <div className="footer__links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/">Event</a>
          <a href="/">Support</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer__promotion">
          <h3>Promotions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquam eget ipsum et semper. Phasellus non neque non velit
            ultricies hendrerit vel eget mauris. Sed sit amet molestie sem, vel
            vehicula velit. Donec iaculis, urna eget viverra tristique, turpis
            lorem auctor nulla, at dignissim mi metus eget velit.
          </p>
        </div>
        <div className="footer__comingSoon">
          <h3>Coming Soon</h3>
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </footer>
      <div className="footer__companyInfo">
        {`©${new Date().getFullYear()} AcmeWidgets. All Rights Reserved. Support:Support@AcmeWidgets.com`}
      </div>
    </div>
  );
}

export default Footer;
