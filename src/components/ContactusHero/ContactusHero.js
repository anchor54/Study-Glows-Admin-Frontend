import Address from "./Address";
import ContactusForm from "./ContactusForm";

import "./ContactusHero.scss";

const ContactusHero = () => {
  return (
    <div className="contactusHero">
      <ContactusForm />
      <Address />
    </div>
  );
};

export default ContactusHero;
