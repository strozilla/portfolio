import React from 'react';

import pic1 from '../assets/img/42comingsoon.png';
import pic2 from '../assets/img/landingpage.png';
import pic3 from '../assets/img/goldandsagecs.png';
import pic4 from '../assets/img/lkcsfinancial.png';

export default function Projects() {
	return (
		<section id="projects" className="wrapper alt style2">
			<header style={{ textAlign: 'center' }}>
				<h2>My Projects</h2>
			</header>
			<section className="spotlight">
				<div className="image">
					<img src={pic1} alt="42BAT" />
				</div>
				<div className="content">
					<a
						href="https://www.clintonfoundation.org/clinton-presidential-center/dine-at-42/"
						target="_blank"
					>
						<h2>42 Bar and Table</h2>
						<p>
							Assist with redesign and Integration of The Clinton Foundation
							website. With a focus on the 42 Bar Table page/modules.
						</p>
					</a>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={pic4} alt="lkcs financial" />
				</div>
				<div className="content">
					<h2>
						<a
							href="https://strozilla.github.io/lkcsFinancial/
"
						>
							LKCS Financial
						</a>
					</h2>
					<p>Mock Bank Homepage</p>
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
					<p>Design for local Jewelers Website</p>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={pic2} alt="landing-page" />
				</div>
				<div className="content">
					<h2>App Landing Pages</h2>
					<p>
						<a href="https://strozilla.github.io/landing-page/" target="_blank">
							Simple. Sleek. Modern. Get More Downloads By Wowing Customers With
							A Captivating Landing Page
						</a>
					</p>
				</div>
			</section>
		</section>
	);
}
