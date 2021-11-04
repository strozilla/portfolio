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
						Welcome, my name is Mike and I am a Web Developer/Designer. What
						started as a childhood fascination, has come around full-circle into
						a passion and desire to help improve the current state of the tech
						industry.
						<br />
						I love the challenge of designing and developing a project that is great for the present but adaptable for the future.
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
