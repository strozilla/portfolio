import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';
 
import pic1 from '../assets/img/vidzproj.png';
import pic2 from '../assets/img/landingpage.png';
import pic3 from '../assets/img/screenshot.jpg';
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
              <a href="/#projects" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>

    <section id="about" className="wrapper style1 special">
      <div className="inner">
        <header className="about-me">
          <h2>
            About
          </h2>
          <p>
            Front-End | UX Design | Back-End
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
            <a href="https://strozilla.github.io/searchvidz/" target="_blank">
              Video Search Website that utilizes youtube API.
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
            <a href="https://strozilla.github.io/landing-page/" target="_blank">
            Simple. Sleek. Modern. Get More Downloads By Wowing Customers With A Captivating Landing Page
            </a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header id="skills" className="major">
          <h2>Skills and more...</h2>
          
            <br />
            
        </header>
        <ul className="features">
          <li className="icon solid fa-laptop">
            <h3>Self Development</h3>
            <p>
              I use a multitude of resources to continue to build and develop my skills. As someone who is truly passionate 
              about coding and the tech industry, I am always reading articles, blogs, 
              or watching videos on new or different ways to code. Whether for my career path or life path, 
              I strive to keep learning and progressing.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Coding</h3>
            <p>
              Working mainly with Front-End: HTML | CSS | JS | REACT | jQuery
              <br />
              Currently Learning Back-End: Django | Ruby on Rails | Java |
            </p>
          </li>
          <li className="icon solid fa-box">
            <h3>Organization</h3>
            <p>
              I try to keep my environment, thoughts and tasks organized. 
              I use a planner for day to day tasks as well as a notebook for more in-depth notes.
              As a Handyman, I had to orchestrate several different moving parts, in order to get projects done.
              I had to stay very organized to keep myself, as well as those I subcontracted, on schedule. 
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Teamwork</h3>
            <p>
              I am very much so a team player, although, a leadership role is usually delegated upon me. 
              I believe effective and continued communication plays a huge role in teamwork, 
            </p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
