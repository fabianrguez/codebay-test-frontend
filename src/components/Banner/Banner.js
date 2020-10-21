import React, { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import './Banner.css';
import data from '../../data.json';

function Banner() {
  const [featuredProducts] = useState(data.banner);
  return (
    <div className="banner">
      <ReactImageGallery
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        autoPlay={true}
        items={featuredProducts}
        slideDuration={2000}
        slideInterval={5000}
      />
    </div>
  );
}

export default Banner;
