import React from "react";
import Button from "react-bootstrap/Button";

export default function ShortenLink() {
  return (
    <div className="link__box">
      <p className="link__text--initial">https://css-tricks.com/bem-101/</p>
      <p className="link__text--shorten">https://css-tricks.com/</p>
      <Button className="link__button">Copy</Button>
      <p></p>
    </div>
  );
}
