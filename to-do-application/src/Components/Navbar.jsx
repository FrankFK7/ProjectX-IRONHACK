import React, { useState } from 'react';

function Navbar() {
  const [activePage, setActivePage] = useState('home');

  return (
    <nav>
      <a href="#" className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Home</a>
      <br />
      <a href="#" className={activePage === 'about' ? 'active' : ''} onClick={() => setActivePage('about')}>About</a>
      <br />
      <a href="#" className={activePage === 'contact' ? 'active' : ''} onClick={() => setActivePage('contact')}>Contact</a>
    </nav>
  );
}

export default Navbar;
