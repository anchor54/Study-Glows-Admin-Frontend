import { Container } from "@mui/material";

import { sectionHeros } from "../../../helper/DummyData/homepageHero";
import { SectionArrow } from "./SectionArrow";
import { SectionHero } from "./SectionHero";
import { IdeaSvg } from "./IdeaSvg";

import "./SliderHero.scss";

export const SliderHero = ({
  color,
  backgroundImage,
  selectedSection,
  handleBackClick,
  handleNextClick,
}) => {
  return (
    <section
      className="slider"
      style={{ backgroundImage: `url("${backgroundImage}")`, backgroundPosition: "center bottom" }}
    >
      <Container maxWidth="lg">
        <div className="grid">
          <div className="left">
            <SectionHero sectionHero={sectionHeros[selectedSection?.selected]} color={color} />
          </div>
          <div className="right">
            <div className="outer">
              <SectionArrow selectedSection={selectedSection} />
              <div className="idea">
                <IdeaSvg />
              </div>
              <div className="back" onClick={handleBackClick}>
                <img className="fluid-image" src="/images/homepage/front.svg" alt="back" />
              </div>
              <div className="front" onClick={handleNextClick}>
                <img className="fluid-image" src="/images/homepage/front.svg" alt="front" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
