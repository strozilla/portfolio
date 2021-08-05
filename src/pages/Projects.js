import React from 'react';
import Layout from '../components/Layout';

import pic1 from '../assets/img/vidzproj.png';
import pic2 from '../assets/img/landingpage.png';
import pic3 from '../assets/img/GSLogo.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="projects" className="wrapper alt style2">
    <header>
          <h2>My Projects</h2>
    </header>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="video-finder" />
        </div>
        <div className="content">
          <h2>
            Definitely NOT Youtube
          </h2>
          <p>
            <a href="https://strozilla.github.io/searchvidz/" target="_blank" rel="noreferrer">
              Website that utilizes Youtube API.
            </a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="landing-page" />
        </div>
        <div className="content">
          <h2>
            App Landing Pages
          </h2>
          <p>
            <a href="https://strozilla.github.io/landing-page/" target="_blank" rel="noreferrer">
            Simple. Sleek. Modern. Get More Downloads By Wowing Customers With A Captivating Landing Page
            </a>
          </p>
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
          <p>
            Gold + Sage eCommerce website coming soon!
          </p>
        </div>
      </section>
    </section>
  </Layout>
  );

  export default IndexPage;
