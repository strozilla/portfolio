import React from 'react';

import pic1 from '../assets/img/42bat.png';
import pic5 from '../assets/img/arorp.png';
import pic6 from '../assets/img/eldorado.png';
import pic7 from '../assets/img/ualr.png';
import pic8 from '../assets/img/bulamu.png';

export default function Projects() {
	return (
		<section id="projects" className="wrapper alt style2" style={{ padding: '0 10% 0 10%' }}>
			<header style={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '4rem' }}>
				<h2>My Projects</h2>
			</header>

			<section className="spotlight">
				<div className="image">
					<img src={pic8} alt="Bulamu Healthcare" />
				</div>
				<div className="content">
					<h2>
						<a
							href="https://www.bulamuhealthcare.org/" target='_blank'>
							Bulamu Healthcare
						</a>
					</h2>
					<p>Developed the Bulamu Healthcare website based on provided mock-ups. The design is a refreshing take on donation sites, with an e-commerce backed donor platform which creates an immersive and educational donation experience. The Patient Stories page displays videos with a layout inspired by Netflix.</p>
				</div>
			</section>
			<div style={{ borderBottom: 'solid #fff', margin: '4rem 10% 4rem 10%' }}></div>
			<section className="spotlight">
				<div className="image2">
					<img src={pic7} alt="UALR" />
				</div>
				<div className="content2">
					<h2>
						<a
							href="https://www.arpeers.org" target='_blank'>
							UALR Prevention Family Sites
						</a>
					</h2>
					<p>Contributed to the developement of the UALR prevention family websites. The upper nav that allows transitioning between each site was inspired by the GAP family websites</p>
				</div>
			</section>
			<div style={{ borderBottom: 'solid #fff', margin: '4rem 10% 4rem 10%' }}></div>
			<section className="spotlight">
				<div className="image">
					<img src={pic5} alt="arorp" />
				</div>
				<div className="content">
					<h2>
						<a
							href="https://arorp.org/" target='_blank'>
							Arkansas Opioid Recovery Partnership
						</a>
					</h2>
					<p>Developed the Arkansas Opioid Recovery Partnership website based on mockups</p>
				</div>
			</section>
			<div style={{ borderBottom: 'solid #fff', margin: '4rem 10% 4rem 10%' }}></div>
			<section className="spotlight">
				<div className="image2">
					<img src={pic6} alt="eldorado" />
				</div>
				<div className="content2">
					<h2>
						<a
							href="https://www.goeldorado.com/" target='_blank'>
							City of El Dorado
						</a>
					</h2>
					<p>Contributed to the developement of the Homepage for the Go Eldorado Website</p>
				</div>
			</section>
		<div style={{ borderBottom: 'solid #fff', margin: '4rem 10% 4rem 10%' }}></div>
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
							Assisted with the redesign and integration of The Clinton
							Foundation website. With a focus on the 42 Bar & Table page/main
							navbar.
						</p>
					</a>
				</div>
			</section>


		</section>
	);
}
