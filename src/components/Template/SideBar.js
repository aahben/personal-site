import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Benjamin Chen</h2>
        <p><a href="mailto:aahben63@gmail.com">aahben63@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ben.
        I am currently an undergraduate studying MATHEMATICS-COMPUTER SCIENCE B.S. at UC San Diego.
        I enjoy playing guitar and covering songs on youtube.
        Here is the link to my
        <a href="https://www.youtube.com/channel/UC-qnyJNndvxPNZ1uhrbwO_g/"> Youtube Channel</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Benjamin Chen <Link to="/">aahben.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
