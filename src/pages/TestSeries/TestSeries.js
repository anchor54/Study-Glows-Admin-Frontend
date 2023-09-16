import { Container } from "@mui/material";

import PageHero from "../../components/PageHero/PageHero";
import pageHero from "../../helper/DummyData/pageHero";
import RequestCall from "../../components/Requestcall/Requestcall";
import { Faq } from "../../components/Faq/Faq";
import { WhyTestSeries } from "../../components/TestSeries/TestSeriesList/WhyTestSeries";
import { TestSeriesCollections } from "../../components/TestSeries/TestSeriesList/TestSeriesCollections";
import { TestSeriesSlideList } from "../../components/TestSeries/TestSeriesSlideList/TestSeriesSlideList";
import { useSmoothScroll } from "../../helper/useSmoothScroll";

export const TestSeries = () => {
  useSmoothScroll();

  return (
    <Container>
      <PageHero {...pageHero["testSeries"]} />
      <TestSeriesSlideList />
      <TestSeriesCollections />
      <WhyTestSeries />
      <Faq />
      <RequestCall />
    </Container>
  );
};
