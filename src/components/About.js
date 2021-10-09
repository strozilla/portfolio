import React from 'react';

export default function About() {
	return (
		<section id="about" className="wrapper style1 special">
			<div className="inner">
				<header className="about-me">
					<h2>About</h2>
					<p>
						Front-End | Design | Back-End
						<br />
					</p>

					<p>
						Welcome, my name is Mike and I am a UX Designer/Web Developer. What
						started as a childhood fascination, has come around full-cicle into
						a passion and desire to help improve the current state of the tech
						industry. I never really considered a career in the tech industry
						but after speaking with friends and family, who are in the industry,
						I've come to realize the importance of people like me. It seems as
						though the industry is saturated with people who are looking to just
						"make a good living," and are not actually curious about the work
						they doing.
						<br />
						I'm here because I am curious and excited about the future of
						technology.
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
