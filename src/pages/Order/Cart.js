import { Container } from "@mui/material";

import PageHero from "../../components/PageHero/PageHero";
import pageHero from "../../helper/DummyData/pageHero";
import RequestCall from "../../components/Requestcall/Requestcall";
import { CartCard } from "../../components/Cart/CartCard";

export const Cart = () => {
  return (
    <Container>
      <PageHero {...pageHero["cart"]} />
      <CartCard />
      <RequestCall />
    </Container>
  );
};
