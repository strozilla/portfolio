import React from 'react';

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
              <a href="/Projects/" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
