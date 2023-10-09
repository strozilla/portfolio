import React from 'react';

export default function Skills() {
	return (
		<section id="three" className="wrapper style2 special">
			<div className="inner">
				<header id="skills" className="major">
					<h2>Skills and more...</h2>
				</header>
				<ul className="features">
					<li className="icon solid fa-laptop">
						<h3>Self Development</h3>
						<p className='align-left'>
							I use a multitude of resources to continue to develop and hone my
							skills. I am constantly reading articles, blogs, or watching
							videos on new or different ways to develope. Whether for my career
							path or life path, I strive to keep learning and progressing.
						</p>
					</li>
					<li className="icon solid fa-code">
						<h3>Coding</h3>
						<p>
							<strong>Current Stack:</strong>
							<br />
							Front-End: Alpine | TailwindCSS | Twig | JS | HTML
							<br />
							Back-End: PHP | MySQL 
						</p>
					</li>
					<li className="icon solid fa-box">
						<h3>Organization</h3>
						<p className='align-left'>
							I try to keep my environment, thoughts and tasks organized. I like to use a mix of note taking as well as a planner (trello) to keep
							track of my daily tasks.
							<br />
							These skills translate well into the web develpment environment.
						</p>
					</li>
					<li className="icon fa-heart">
						<h3>Teamwork</h3>
						<p className='align-left'>
							I am very much so a team player, although, I tend to land/enjoy
							leadership roles. I believe effective and continued communication
							plays a huge role in teamwork.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}
