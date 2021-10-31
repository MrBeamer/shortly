import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import CreateShortenLink from "./components/CreateShortenLink";
import ShortenLink from "./components/ShortenLink";
import Statistic from "./components/Statistic";
import Card from "./components/Card";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  const [linkArr, setLinkArr] = useState([]);

  return (
    <div>
      <Navigation />
      <Banner />
      <main className="main__section">
        <CreateShortenLink setLinkArr={setLinkArr} />
        {linkArr.map((link, index) => {
          return (
            <ShortenLink
              key={index}
              initialUrl={link.original}
              shortenedUrl={link.shortened}
            />
          );
        })}
        <Statistic />

        <div className="card__container">
          <Card
            image={"/images/icon-brand-recognition.svg"}
            title={"Brand Recognition"}
            content={
              "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            }
            customClass={"card--brand"}
          />
          <div className="line"></div>
          <Card
            image={"/images/icon-detailed-records.svg"}
            title={"Detailed Records"}
            content={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
            customClass={"card--detailed"}
          />
          <Card
            image={"/images/icon-fully-customizable.svg"}
            title={"Fully Customizable"}
            content={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
            customClass={"card--customizable"}
          />
        </div>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
