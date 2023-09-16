import React, { useState } from "react";

import RequestcallHero from "./RequestcallHero";
import RequestcallModal from "./RequestcallModal";
import "./Requestcall.scss";

const Requestcall = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <RequestcallHero handleOpen={handleOpen} />
      <RequestcallModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Requestcall;
