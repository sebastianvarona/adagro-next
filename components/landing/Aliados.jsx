import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

export default function Aliados() {
  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    perPage: 5,
    pauseOnHover: false,
    resetProgress: false,
    padding: 30,
    pagination: false,
  };
  const generateSlides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const generateSrc = (i) => {
    return `/images/aliados/logo${i}.png`;
  };
  return (
    <div>
      <div className="wrapper">
        <Splide
          options={options}
          aria-labelledby="aliados-carousel"
          hasTrack={false}
        >
          <div
            className="flex item-center justify-center"
            style={{ position: 'relative' }}
          >
            <SplideTrack>
              {generateSlides.map((n) => (
                <SplideSlide key={n}>
                  <div className="flex justify-center items-center">
                    <Image src={generateSrc(n)} width={100} height={100} />
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
        </Splide>
      </div>
    </div>
  );
}
