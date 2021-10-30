import React from "react";

export default function Footer() {
  return (
    <footer>
      <img className="filter-svg" src="/images/logo.svg" alt="logo" />
      <ul className="footer__links">
        <li className="footer__link title">Features</li>
        <li className="footer__link">Link Shortening</li>
        <li className="footer__link">Branded Links</li>
        <li className="footer__link">Analytics</li>
      </ul>
      <ul className="footer__links">
        <li className="footer__link title">Resources</li>
        <li className="footer__link">Blog</li>
        <li className="footer__link">Developers</li>
        <li className="footer__link">Support</li>
      </ul>
      <ul className="footer__links">
        <li className="footer__link title">Company</li>
        <li className="footer__link">About</li>
        <li className="footer__link">Our Team</li>
        <li className="footer__link">Contact</li>
      </ul>
      <ul className="footer__socials">
        <li>
          <a
            href="https://www.facebook.com/CDPROJEKTRED/"
            target="_blank"
            aria-label="Link to Facebook-Account"
            rel="noopener noreferrer"
          >
            <i className="fa-facebook fab footer__link--social"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cdpred/"
            target="_blank"
            aria-label="Link to Instagram-Account"
            rel="noopener noreferrer"
          >
            <i className="fa-instagram fab footer__link--social"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/CDPROJEKTRED"
            target="_blank"
            aria-label="Link to Twitter-Account"
            rel="noopener noreferrer"
          >
            <i className="fa-twitter fab footer__link--social"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.de/today/best/dein-schlafzimmer-ist-dein-erholungsort/75475/"
            target="_blank"
            aria-label="Link to Pinterest-Account"
            rel="noopener noreferrer"
          >
            <i className="fa-pinterest fab footer__link--social"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
