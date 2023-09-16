import Divider from "../../Tools/Divider";

import "./TestSeriesCard.scss";

export const TestSeriesCard = () => {
  return (
    <div className="testSeriesCard">
      <div className="logo">
        <img className="fluid-image" src="/images/testSeries/logo2.svg" alt="study glow" />
      </div>
      <div className="category">UPSC-MAINS</div>
      <div className="title">SOCIOLOGY</div>
      <Divider customStyle={{ backgroundColor: "#156C3C" }} />
      <div className="date">Starts 22nd July 2022</div>
      <div className="tags">
        <ul>
          <li>10 G.S. + CSAT Papers</li>
          <li>10 G.S. + CSAT Papers</li>
          <li>10 G.S. + CSAT Papers</li>
          <li>10 G.S. + CSAT Papers</li>
        </ul>
      </div>
    </div>
  );
};
