import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function CreateShortenLink(props) {
  const { setLinkArr } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [enteredUrl, setEnteredUrl] = useState("");
  const [url, setUrl] = useState({ original: "", shortened: "" });
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(event) {
    const userInput = event.target.value;
    setEnteredUrl(userInput);
  }

  function addShortenLink(event) {
    setIsLoading(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${enteredUrl}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          const slicedUrl =
            data.result.original_link.length >= 35 && window.innerWidth < 1200
              ? data.result.original_link.slice(0, 32) + " ..."
              : data.result.original_link;

          setUrl((prevUrl) => {
            return {
              ...prevUrl,
              original: slicedUrl,
              shortened: data.result.short_link,
            };
          });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
    event.preventDefault();
  }

  useEffect(() => {
    if (url.original !== "") {
      setLinkArr((prevLinkArr) => [...prevLinkArr, url]);
      setEnteredUrl("");
    }
  }, [url, setLinkArr]);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const placeholderColor = isFocused ? "input__placeholder--color" : null;

  return (
    <form onSubmit={addShortenLink} className="shorten__form">
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
        onChange={handleChange}
        id={placeholderColor}
        className="shorten__input"
        type="text"
        name="link"
        value={enteredUrl}
        placeholder={"Shorten a link here..."}
      ></input>

      {isFocused && enteredUrl === "" ? (
        <p className="shorten__focus-message">Please add a link</p>
      ) : null}
      <Button disabled={isLoading} type="submit" className="shorten__button">
        Shorten it!
      </Button>
    </form>
  );
}
