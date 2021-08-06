import React from 'react';
import Layout from '../components/Layout';


const IndexPage = () => (
  <Layout fullMenu>
    <section id="about" className="wrapper style1 special">
    <div className="inner">
      <header className="about-me">
        <h2>
          About
        </h2>
        <p>
          Front-End | Design | Back-End

          <br /> 
        </p>
       
        <p>
              Welcome, my name is Mike and I am a Web Developer.
              Admittingly, it took a few attempts for the coding bug to bite. 
              My first experience was with a Linux programming book when I was nine or ten and my moms' old Hewlett-Packard. 
              After tinkering with it for almost the whole summer, I essentially bricked it, and that was the end of my first coding experience.
              The second try would be in my early 20's; I decided to give cyber security a shot at Devry, but I ended up leaving for financial reasons and continued my career in carpentry.
              2020 is when the bug bit, and wouldn't let go. I started practicing and taking supplemental courses to hone my skills. I did all this while still keeping my current full-time job.
             
              <br />
              I am determined to continually learn and hone my skills in coding and design.

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
  </Layout>
  );

  export default IndexPage;