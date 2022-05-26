import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </main>
  );
}
