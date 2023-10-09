import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import logo from '../assets/img/mclogo.png';
export default function SideBar({ fullMenu }) {
	const [headerOpen, toggleHeader] = useState(false);
	return (
		<header id="header">
			<div>
				<Link to="/" id="logoLink">
					<img
						id="mcLogo"
						src={logo}
						alt="Castro Logo"
						width="150px"
					/>
				</Link>
			</div>
			<div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
				<Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
			</div>
		</header>
	);
}
