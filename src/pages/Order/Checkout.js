import { Container } from "@mui/material";

import PageHero from "../../components/PageHero/PageHero";
import pageHero from "../../helper/DummyData/pageHero";
import Divider from "../../components/Tools/Divider";
import { CheckoutCard } from "../../components/Checkout/CheckoutCard";

export const Checkout = () => {
  return (
    <Container>
      <PageHero {...pageHero["checkout"]} />
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <CheckoutCard />
    </Container>
  );
};
