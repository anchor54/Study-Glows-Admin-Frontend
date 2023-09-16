import { useState } from "react";
import { Button, Container, MenuItem, Select } from "@mui/material";

import { Section } from "./Section";
import Divider from "../../Tools/Divider";

import "./MobileView.scss";

export const MobileView = () => {
  const [study, setStudy] = useState("UPSC");

  const handleChange = (e) => {
    setStudy(e.target.value);
  };

  const handleStartLearing = () => {};

  return (
    <Container width="lg">
      <div className="hero">
        <div>
          <img className="fluid-image" src="/images/homepage/mobile/circle_mobile.svg" alt="" />
        </div>
        <div>
          <img src="/images/header/logo.png" alt="study glow" />
        </div>
        <div className="selectCourse">
          <p>I want to prepare for:</p>
          <Select
            value={study}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ background: "#DEEBFF", margin: "1rem 0", width: "100%" }}
          >
            <MenuItem value="UPSC">UPSC</MenuItem>
            <MenuItem value="RBB">RBB</MenuItem>
            <MenuItem value="SSC">SSC</MenuItem>
          </Select>
        </div>
        <div>
          <Button variant="contained" onClick={handleStartLearing}>
            Start Learning
          </Button>
        </div>
      </div>
      <Divider color="primary" />
      <Section type="course" color="secondary" />
      <Section type="softCourse" color="primary" />
      <Section type="blog" color="warning" />
      <Section type="testseries" color="tertiary" />
      <div className="androidApp">
        <img
          className="fluid-image"
          src="/images/homepage/mobile/downloadApp.svg"
          alt="android App"
        />
      </div>
    </Container>
  );
};
