import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import data from './data.json';

function App() {
  const [products] = useState(data.products);
  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="app__container">
        <div className="app__introHeadline">
          <h1>Intro Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquam eget ipsum et semper. Phasellus non neque non velit
            ultricies hendrerit vel eget mauris. Sed sit amet molestie sem, vel
            vehicula velit. Donec iaculis, urna eget viverra tristique, turpis
            lorem auctor nulla, at dignissim mi metus eget velit. Nam nec
            iaculis purus. Aenean nec interdum lacus, id eleifend metus.
            Suspendisse laoreet arcu sed tristique imperdiet. Praesent
            sollicitudin quam id elit laoreet, a ultrices enim ultrices. Aenean
            laoreet nunc quam, gravida tempus purus rutrum a.
          </p>
        </div>
        <div className="app__products">
          {products &&
            products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
