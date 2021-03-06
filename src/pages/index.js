import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';
 
import pic1 from '../assets/img/vidzproj.png';
import pic2 from '../assets/img/landingpage.png';
import pic3 from '../assets/img/GSLogo.png';
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
            Front-End | Design | Back-End
          </p>
          <p>
                Determined. Passionate. Always Learning.
                <br />  
                <em>If these words resonate with you, continue reading.</em>
          </p>
          <p>
                Hello, my name is Mike and I am new to the web development world. Fortunately many of the skills I aquired from my previous career have helped make this transition much easier.
                Admittingly, it took a few attempts for the coding bug to bite. My first experience was with a Linux programming book when I was nine or ten and my moms' old Hewlett-Packard. 
                After tickering with it for alomst the whole summer, some how I essentially bricked it, and that, a long with peer pressure was the end of my first coding experience.
                The second try would be in my early 20's, I decided to give cyber security a shot at Devry. I ended up leaving for financial reasons and continued my career in carpentry.
                2020 is when the bug bit, and wouldn't let go. I started with a few free courses, then ended up taking a full-online bootcamp. I finished the bootcamp in just over 3 months,
                and have just been practicing and taking more supplemental courses to hone my skills. I did all this while still keeping my current full-time job. 
                <br />
                I am determined to, and passionate about, continually learning and honing my skills in coding and design.

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
              I use a multitude of resources to continue to develop and hone my skills. As someone who is truly passionate 
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
              <br /> 
              These skills translate well into the web develpment environment.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Teamwork</h3>
            <p>
              I am very much so a team player, although, I tend to land/enjoy leadership roles. 
              I believe effective and continued communication plays a huge role in teamwork. 
            </p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
