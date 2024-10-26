import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header>
      <h1>My E-Commerce Store</h1>
      <Link to="/cart">Cart ({cartCount})</Link>
    </header>
  );
}

export default Header;
