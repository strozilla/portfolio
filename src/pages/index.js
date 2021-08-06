import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout';

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
              <Link href="./Projects/" className="button primary">
                Explore
              </Link>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
