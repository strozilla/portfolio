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
			<div id="zilla"></div>
			<div className="inner">
				<h2>{config.heading}</h2>
				<p>{config.subHeading}</p>
				<ul className="actions special">
					<li>
						<Scroll type="id" element="projects">
							<Link to="#projects" className="button primary">
								Explore
							</Link>
						</Scroll>
					</li>
				</ul>
			</div>
		</section>
		<About />
		<Projects />
		<Skills />
	</Layout>
);

export default IndexPage;
