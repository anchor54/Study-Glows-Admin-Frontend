/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { sectionHeros } from "../../helper/DummyData/homepageHero";

import * as SVG from "../../helper/customSVG";

export const useHome = () => {
  const [color, setColor] = useState("primary");
  const [width, setWidth] = useState(window.innerWidth);
  const [backgroundImage, setBackgroundImage] = useState(SVG?.c_bg);
  const [selectedSection, setSelectedSection] = useState({ selected: "main", clockwise: false });

  useEffect(() => {
    window.interval23 = setTimeout(() => {
      handleNextClick();
    }, 2500);
    return () => {
      clearInterval(window.interval23);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  useEffect(() => {
    let _bg = SVG?.c_bg;
    let _color = "secondary";
    switch (selectedSection?.selected) {
      case "main":
        _bg = SVG?.c_bg;
        _color = "primary";
        break;
      case "course":
        _bg = SVG?.c_bg;
        _color = "secondary";
        break;
      case "softCourse":
        _bg = SVG?.cs_bg;
        _color = "primary";
        break;
      case "blog":
        _bg = SVG?.b_bg;
        _color = "warning";
        break;
      case "testseries":
        _bg = SVG?.ts_bg;
        _color = "tertiary";
        break;
      default:
        break;
    }
    setBackgroundImage(_bg);
    setColor(_color);
  }, [selectedSection]);

  const handleNextClick = () => {
    const sectionList = Object.keys(sectionHeros);
    const idx = sectionList.indexOf(selectedSection?.selected);
    idx + 1 < sectionList.length &&
      setSelectedSection({ selected: sectionList[idx + 1], clockwise: false });
  };

  const handleBackClick = () => {
    const sectionList = Object.keys(sectionHeros);
    const idx = sectionList.indexOf(selectedSection?.selected);
    idx - 1 >= 0 && setSelectedSection({ selected: sectionList[idx - 1], clockwise: true });
  };

  return {
    width: width,
    color: color,
    backgroundImage: backgroundImage,
    selectedSection: selectedSection,
    handleNextClick: handleNextClick,
    handleBackClick: handleBackClick,
  };
};
