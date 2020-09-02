import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && " show"}`}>
      <img
        className='logo '
        src='https://www.clipartmax.com/png/full/215-2154144_transparent-background-netflix-logo.png'
        alt='netflix logo'
      />
      <p className={`author ${show && " author_dark"}`}>
        <a
          href='https://github.com/kaustubh285'
          target='_blank'
          rel='noopener noreferrer'>
          By Kaustubh Deshpande
        </a>
      </p>
      <a
        href='https://github.com/kaustubh285'
        target='_blank'
        rel='noopener noreferrer'>
        <img
          className='avatar'
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
          alt='avatar'
        />
      </a>
    </div>
  );
}

export default Nav;
