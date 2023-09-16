import React from "react";
import { Button } from "@mui/material";

const RequestcallHero = ({ handleOpen }) => {
  return (
    <div className="RequestcallHero">
      <div>
        <p className="title_large">Got more questions?</p>
        <h2 className="display_medium">Talk to our team directly.</h2>
        <p className="title_large">
          Reach out and a learning consultant will get in touch with you shortly.
        </p>
        <br />
        <Button variant="contained" onClick={handleOpen}>
          Request Call
        </Button>
      </div>
      <div>
        <img className="fluid-image" src="/images/contactus/contactus_ill.png" alt="request call" />
      </div>
    </div>
  );
};

export default RequestcallHero;
