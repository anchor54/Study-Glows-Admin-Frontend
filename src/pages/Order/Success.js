/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSmoothScroll } from "../../helper/useSmoothScroll";

import "./Order.scss";

export const Success = () => {
  useSmoothScroll();

  const title = "Your Payment is Successful !";
  const message =
    "Thankyou for your payment. An automated payment reciept will be sent to your registered email. You will be redirected to your Dashboard in 5 seconds.";
  const naviagte = useNavigate();
  const timeout = 5000;
  const paymentstatus = localStorage.getItem("payment");

  useEffect(() => {
    if (paymentstatus === null) {
      naviagte("/");
    }

    window.interval23 = setInterval(() => {
      if (paymentstatus === "success") {
        localStorage.removeItem("payment");
      }
      naviagte("/dashboard/");
    }, timeout);
    return () => {
      clearInterval(window.interval23);
    };
  }, []);

  return (
    <Container>
      <div className="success">
        <div className="content">
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </div>
    </Container>
  );
};
