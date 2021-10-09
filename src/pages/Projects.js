import React from 'react';
import Layout from '../components/Layout';

import pic1 from '../assets/img/42comingsoon.png';
import pic2 from '../assets/img/landingpage.png';
import pic3 from '../assets/img/goldandsagecs.png';

const IndexPage = () => (
	<Layout fullMenu>
		<section id="projects" className="wrapper alt style2">
			<header style={{ textAlign: 'center' }}>
				<h2>My Projects</h2>
			</header>
			<section className="spotlight">
				<div className="image">
					<img src={pic1} alt="42BAT" />
				</div>
				<div className="content">
					<h2>42 Bar and Table</h2>
					<p>
						'(As of October 2021)' Currently working on redesign and Integration
						of 42 Bar and Table website for The Clinton Foundation.
					</p>
				</div>
			</section>

			<section className="spotlight">
				<div className="image">
					<img src={pic3} alt="Gold+Sage Logo" />
				</div>
				<div className="content">
					<h2>
						<a href="">Gold + Sage Jewelry Website</a>
					</h2>
					<p>Gold + Sage eCommerce website coming soon!</p>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={pic2} alt="landing-page" />
				</div>
				<div className="content">
					<h2>App Landing Pages</h2>
					<p>
						<a
							href="https://strozilla.github.io/landing-page/"
							target="_blank"
							rel="noreferrer"
						>
							Simple. Sleek. Modern. Get More Downloads By Wowing Customers With
							A Captivating Landing Page
						</a>
					</p>
				</div>
			</section>
		</section>
	</Layout>
);

export default IndexPage;
