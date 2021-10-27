import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ShortenLink(props) {
  const { initialUrl, shortenedUrl } = props;
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    console.log("pushed");
    setIsCopied(true);
    navigator.clipboard.writeText(shortenedUrl);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }
  return (
    <div className="link__box">
      <p className="link__text--initial">{initialUrl}</p>
      <p className="link__text--shorten">{shortenedUrl}</p>
      <Button onClick={handleClick} className="link__button">
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}