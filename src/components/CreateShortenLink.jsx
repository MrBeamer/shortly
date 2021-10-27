import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function CreateShortenLink(props) {
  // const { addShortenLink } = props;
  const { setLinkArr } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [enteredUrl, setEnteredUrl] = useState("");
  //outputUrl shortened
  const [url, setUrl] = useState({ original: "", shortened: "" });

  function handleChange(event) {
    const userInput = event.target.value;
    console.log(userInput);
    setEnteredUrl(userInput);
  }

  function addShortenLink(event) {
    setIsLoading(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${enteredUrl}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          setUrl((prevUrl) => {
            return {
              ...prevUrl,
              original: data.result.original_link,
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
  }, [url]);

  return (
    <form onSubmit={addShortenLink} className="shorten__form">
      <input
        required
        onChange={handleChange}
        className="shorten__input"
        type="text"
        name="link"
        value={enteredUrl}
        placeholder="Input URL"
      ></input>
      <Button disabled={isLoading} type="submit" className="shorten__button">
        Shorten it!
      </Button>
    </form>
  );
}
