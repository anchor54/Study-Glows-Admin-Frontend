import { Container } from "@mui/material";

import Requestcall from "../../components/Requestcall/Requestcall";
import ContactusHero from "../../components/ContactusHero/ContactusHero";
import Location from "../../components/ContactusHero/Location";
import { useSmoothScroll } from "../../helper/useSmoothScroll";

export const Contactus = () => {
  useSmoothScroll();

  return (
    <Container maxWidth="lg">
      <ContactusHero />
      <Location />
      <Requestcall />
    </Container>
  );
};
