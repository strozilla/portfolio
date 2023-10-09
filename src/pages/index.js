import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

import Scroll from '../components/Scroll';

import config from '../../config';
const IndexPage = () => (
	<Layout>
		<section id="banner">
			<div className="inner" style={{ margin: '5rem 0' }}>
				<h2>{config.heading}</h2>
				<p>{config.subHeading}</p>
				<ul className="actions special">
					<li>
						<Scroll type="id" element="projects">
							<Link to="#projects" className="button primary">
								My Projects
							</Link>
						</Scroll>
					</li>
				</ul>
			</div>
		<div style={{ borderBottom: 'solid #fff', margin: '0rem 10%' }}></div>
		</section>
		<About />
		<Projects />
		<Skills />
	</Layout>
);

export default IndexPage;
