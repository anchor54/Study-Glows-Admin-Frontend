import React from "react";
import { Container } from "@mui/material";

import PageHero from "../../components/PageHero/PageHero";
import PageNavbar from "../../components/PageNavbar/PageNavbar";
import VacanciesCard from "../../components/Blog/VacanciesCard/VacanciesCard";

import pageNavbar from "../../helper/DummyData/pageNavbar";
import pageHero from "../../helper/DummyData/pageHero";

import "./Blog.scss";

export const Vacancies = () => {
  return (
    <Container>
      <PageHero {...pageHero.vacancies} />
      <PageNavbar {...pageNavbar.vacancies} />
      <div className="vacanciesWrapper">
        <VacanciesCard category="Job" showLoadButton={true} collectionType="Latest" />
        <VacanciesCard category="Result" showLoadButton={true} collectionType="Latest" />
      </div>
    </Container>
  );
};
