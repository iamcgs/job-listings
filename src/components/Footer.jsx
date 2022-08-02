import React from 'react';

function Footer() {
  return (
    <footer className="text-slate-800 mt-8 p-4 text-center text-lg">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . <br /> Coded by{' '}
      <a
        href="https://github.com/iamcgs?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="text-desaturatedDarkCyan hover:text-desaturatedDarkCyan/80"
      >
        Carla
      </a>
      .
    </footer>
  );
}

export default Footer;
