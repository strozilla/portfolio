import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import logo from '../assets/img/zillogo1.jpg';
export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" >
      <h1>
        <Link to="/"><img src={logo} width="40px" height="40px" margin="3px 0 0 0"/></Link>
      </h1>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}
