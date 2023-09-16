import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { sectionDetailHeros } from "../../../helper/DummyData/homepageHero";

import "./SectionDetail.scss";

export const SectionDetail = ({ selectedSection, color }) => {
  const [seletedSectionDetail, setSeletedSectionDetail] = useState();

  useEffect(() => {
    selectedSection?.selected &&
      setSeletedSectionDetail(sectionDetailHeros[selectedSection?.selected]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSection]);

  return (
    <div className="sectionDetail">
      <p className="prepare">
        I want to prepare for{" "}
        <Link to={``} className="link">
          UPSE
        </Link>
        <Link to={``} className="link">
          SSC
        </Link>
        <Link to={``} className="link">
          Defance
        </Link>
        <Link to={``} className="link">
          Interview Skills
        </Link>
      </p>
      <div className="grid">
        <div>
          <img
            className="fluid-image"
            src={seletedSectionDetail?.gif}
            alt={seletedSectionDetail?.alt}
          />
        </div>
        <div className={`detail ${color}`}>
          <div className="wrapper">
            <div className="headline_small">With</div>
            <div className="logo">
              <img src="/images/header/logo.png" alt="study glow" />
            </div>
            <div>
              <h1 className="display_large">{seletedSectionDetail?.h1_1}</h1>
            </div>
            <div>
              <h2 className="display_medium">{seletedSectionDetail?.h2_1}</h2>
            </div>
            <div>
              <p className="headline_small">{seletedSectionDetail?.p}</p>
            </div>
            <div>
              <h1 className="display_large">{seletedSectionDetail?.h1_2}</h1>
            </div>
            <div>
              <h2 className="display_medium">{seletedSectionDetail?.h2_2}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
