import React from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import CreateShortenLink from "./components/CreateShortenLink";
import ShortenLink from "./components/ShortenLink";

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className="section--2">
        <CreateShortenLink />
        <ShortenLink />
      </div>
    </div>
  );
}

export default App;
