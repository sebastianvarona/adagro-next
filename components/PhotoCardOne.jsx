import React from 'react';

export default function PhotoCardOne(props) {
  return (
    <div
      className={`w-full h-full rounded-2xl bg-cover bg-center drop-shadow-md aspect-square ${props.c}`}
      {...props}
    ></div>
  );
}
