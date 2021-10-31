import React from "react";
import Button from "react-bootstrap/Button";

export default function Banner() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title"> More than just shorter links</h1>
        <p className="header__text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className="btn--big"> Get Started</Button>
      </div>

      <img
        src="/images/illustration-working.svg"
        className="header__image"
        alt="banner"
      />
    </header>
  );
}
