// src/app/components/ImageCarousel.js
'use client'
// src/app/components/ImageCarousel.js

import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import styles from './ImageCarousel.module.css';

import Image from 'next/image';

const images = [
  {
    src: '/images/medicode.jpeg',
    alt: 'Image 1',
    description: 'Something about the image 1',
  },
  {
    src: '/images/medicode.jpeg',
    alt: 'Image 2',
     description: 'Something about the image 2'
  },
  {
    src: '/images/medicode.jpeg',
    alt: 'Image 3',
     description: 'Something about the image 3'
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box className={styles.carouselContainer}>
      <Box className={styles.imageContainer}>
        {/* <img src={images[currentIndex].src} alt={images[currentIndex].alt} className={styles.image} /> */}
        <Image 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt} 
        className={styles.image} 
        layout="responsive" // or other layout options like 'fixed', 'intrinsic', etc.
        width={500} // specify the width
        height={300} // specify the height
      />
        <Box className={styles.buttonContainer}>
          <Button onClick={prevImage} variant="contained" color="primary" className={styles.button}>
            Previous
          </Button>
          <Button onClick={nextImage} variant="contained" color="primary" className={styles.button}>
            Next
          </Button>
        </Box>
        <Typography variant="h6" align="center" className={styles.caption}>
          {images[currentIndex].alt}
        </Typography>
        <Typography variant="h6" align="center" className={styles.caption}>
          {images[currentIndex].description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
