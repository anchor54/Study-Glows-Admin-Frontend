import { Container } from "@mui/material";

import { SectionDetail } from "../../components/Home/SectionDetail/SectionDetail";
import { MobileAnimation } from "../../components/Home/MobileAnimation/MobileAnimation";
import { SliderHero } from "../../components/Home/SliderHero/SliderHero";
import { BestSectionDetail } from "../../components/Home/BestSectionDetail/BestSectionDetail";
import { MobileView } from "../../components/Home/MobileView/MobileView";
import { useSmoothScroll } from "../../helper/useSmoothScroll";
import { useHome } from "./useHome";
import RequestCall from "../../components/Requestcall/Requestcall";

import "./Home.scss";

export const Home = () => {
  useSmoothScroll();
  const { width, color, backgroundImage, selectedSection, handleNextClick, handleBackClick } =
    useHome();

  if (width < 900) return <MobileView />;

  return (
    <>
      <SliderHero
        color={color}
        selectedSection={selectedSection}
        backgroundImage={backgroundImage}
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
      />
      <Container maxWidth="lg">
        <SectionDetail selectedSection={selectedSection} color={color} />
        <BestSectionDetail selectedSection={selectedSection} color={color} />
        <MobileAnimation />
        <RequestCall />
      </Container>
    </>
  );
};
