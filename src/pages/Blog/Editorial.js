import React from "react";
import { Container } from "@mui/material";

import PageHero from "../../components/PageHero/PageHero";
import PageNavbar from "../../components/PageNavbar/PageNavbar";
// import BlogNavbar2 from "../../components/Blog/BlogNavbar/BlogNavbar2";
import EditorialCollections from "../../components/Blog/Editorial/EditorialCollections";
import EditorialSideCollections from "../../components/Blog/Editorial/EditorialSideCollections";

import pageNavbar from "../../helper/DummyData/pageNavbar";
import pageHero from "../../helper/DummyData/pageHero";

import "./Blog.scss";

export const Editorial = () => {
  return (
    <Container>
      <PageHero {...pageHero.editorial} />
      <PageNavbar {...pageNavbar.editorial} />
      {/* <BlogNavbar2 blogType="editorials" /> */}
      <h2 className="headline_medium" style={{ margin: "1rem 0" }}>
        Latest Editorials
      </h2>
      <div className="editorialWrapper">
        <EditorialCollections />
        <EditorialSideCollections />
      </div>
    </Container>
  );
};
