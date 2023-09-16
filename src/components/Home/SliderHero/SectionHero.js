import { Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const SectionHero = ({ sectionHero, color }) => {
  const sectionHeroRef = useRef();
  const controls = useAnimation();

  const sectionHeroVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      y: [-5, 0],
      transtion: {
        delay: "0.1s",
        duration: "0.5s",
      },
    },
  };

  useEffect(() => {
    controls.start("visible");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionHero]);

  return (
    <motion.div
      className={`desctiption ${color}`}
      animate={controls}
      variants={sectionHeroVariant}
      ref={sectionHeroRef}
    >
      {sectionHero?.type === "main" ? (
        <div className="banner">
          <img src={sectionHero?.image} alt="study glow" />
        </div>
      ) : (
        <>
          <div className="logo">
            <img src="/images/header/logo.png" alt="study glow" />
          </div>
          <div>
            <h1 className="display_large">{sectionHero?.h1}</h1>
          </div>
          <div>
            <h3 className="display_medium">{sectionHero?.h3_1}</h3>
          </div>
          <div>
            <h3 className="display_medium">{sectionHero?.h3_2}</h3>
          </div>
          <div>
            <p className="headline_small">{sectionHero?.p}</p>
          </div>
          <div>
            <Button variant="contained" color={color} sx={{ fontWeight: "600", color: "#fff" }}>
              Get Started
            </Button>
          </div>
        </>
      )}
    </motion.div>
  );
};
