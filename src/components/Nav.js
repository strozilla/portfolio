import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
	return (
		<nav id="nav">
			<ul>
				<li className="special">
					<a
						href="#menu"
						onClick={(e) => {
							e.preventDefault();
							onMenuToggle();
						}}
						className="menuToggle"
					>
						<span>Menu</span>
					</a>
					<div id="menu">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/About/">About Me</Link>
							</li>
							<li>
								<Link to="/Projects/">My Projects</Link>
							</li>
							<li>
								<Link to="/Skills/">Skills & More</Link>
							</li>
						</ul>
						<a
							className="close"
							onClick={(e) => {
								e.preventDefault();
								onMenuToggle();
							}}
							href="#menu"
						>
							{''}
						</a>
					</div>
				</li>
			</ul>
		</nav>
	);
}
