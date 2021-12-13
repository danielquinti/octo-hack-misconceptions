import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import getMisconceptionsByYear from './utils.js';
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1005,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  const [info, setInfo] = useState([]);
  var callbackFunction = (year) => {
    var misconceptions = getMisconceptionsByYear(year.value);
    setInfo(misconceptions);
  };
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} parentCallback={callbackFunction}/>
      {info.map((theme) => {
         return <Services data={theme} />
        })}
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default App;
