import React, { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import './Banner.css';

function Banner() {
  const [featuredProducts] = useState([
    {
      original:
        'https://images.unsplash.com/photo-1553610851-294a26d51514?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1608&q=80',
    },
    {
      original:
        'https://images.unsplash.com/photo-1572573385779-4db2f3af622e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      original:
        'https://images.unsplash.com/photo-1572250802606-70d7bac06e62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    },
    {
      original:
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80',
    },
  ]);
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
