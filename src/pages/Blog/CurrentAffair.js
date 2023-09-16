import React from "react";
import { Container } from "@mui/material";

import PageHero from "../../components/PageHero/PageHero";
import PageNavbar from "../../components/PageNavbar/PageNavbar";
// import BlogNavbar2 from "../../components/Blog/BlogNavbar/BlogNavbar2";
import CurrentAffairCollections from "../../components/Blog/CurrentAffair/CurrentAffairCollections";

import pageNavbar from "../../helper/DummyData/pageNavbar";
import pageHero from "../../helper/DummyData/pageHero";

import "./Blog.scss";

export const CurrentAffair = () => {
  const todayDate = "27/04/2022";
  return (
    <Container>
      <PageHero {...pageHero.currentAffair} />
      <PageNavbar {...pageNavbar.currentAffair} />
      {/* <BlogNavbar2 blogType="current_affairs" /> */}
      <h2 className="headline_medium" style={{ margin: "1rem 0" }}>
        Today's Current Affairs - {todayDate}
      </h2>
      <CurrentAffairCollections />
    </Container>
  );
};
