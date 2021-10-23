import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function CreateShortenLink() {
  const [link, setLink] = useState("");
  const [linkArr, setLinkArr] = useState([]);

  function shortenLink() {}
  function handleChange(event) {
    const url = event.target.value;
    console.log(url);
    setLink(url);
    console.log(linkArr);
  }

  function handleClick(event) {
    setLinkArr((prevLinkArr) => [...prevLinkArr, link]);
    setLink("");
    event.preventDefault();
  }

  return (
    // <div className="shorten__box">
    <form onSubmit={shortenLink} className="shorten__form">
      <input
        onChange={handleChange}
        className="shorten__input"
        type="text"
        name="link"
        value={link}
      ></input>
      <Button onClick={handleClick} type="submit" className="shorten__button">
        Shorten it!
      </Button>
    </form>
    // </div>
  );
}
