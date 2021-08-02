import React from 'react';

export default function About() {
  return (
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
              <em>Determined. Passionate. Always Learning.</em>
              <br />  
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
  )
}