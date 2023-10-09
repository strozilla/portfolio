import React from 'react';

export default function About() {
	return (
		<section id="about" className="wrapper style2 special">
			<div className="inner">
				<header className="about-me">
					<h2 style={{ padding: '3rem 0' }}>About</h2>
					<p className='align-left'>
						Welcome, my name is Mike and I am currently working full-time as a Web Developer/Designer and SEO Strategist. What
						started as a childhood interest in BattleBots, has come around full-circle into a
						hunger and desire to make an impact in the development community. I love the challenge of designing and developing a project
						that is great for the present but adaptable for the future.
					</p>
					<br />
					<p className='align-left'>
						When I'm not coding you can find me chefin' it up in the kitchen, or decoding flavor profiles in the city's uncharted culinary landscape.
					</p>
				</header>
				<ul className="icons major">
					<li>
						<span className="icon fa-gem major style1">
							<span className="label"></span>
						</span>
					</li>
					<li>
						<span className="icon fa-heart major style2">
							<span className="label"></span>
						</span>
					</li>
					<li>
						<span className="icon solid fa-code major style3">
							<span className="label"></span>
						</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
