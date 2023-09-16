import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { CourseArrow } from "./CourseArrow";
import { SoftCourseArrow } from "./SoftCourseArrow ";
import { BlogArrow } from "./BlogArrow";
import { TestseriesArrow } from "./TestseriesArrow";
import { IdeaSvg } from "./IdeaSvg";

export const SectionArrow = ({ selectedSection }) => {
  const controls = useAnimation();

  const arrowVariant = {
    hidden: {
      opacity: 0,
      rotate: -360,
    },
    visible: {
      opacity: [0, 0.5, 1],
      rotate: [90, 0],
      transtion: {
        delay: "1s",
        duration: "1s",
      },
    },
    visible_clockwise: {
      opacity: [0, 0.5, 1],
      rotate: [-90, 0],
      transtion: {
        delay: "1s",
        duration: "1s",
      },
    },
  };

  useEffect(() => {
    selectedSection?.clockwise ? controls.start("visible_clockwise") : controls.start("visible");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSection]);

  return (
    <motion.div
      className="arrowsWrapper"
      initial="hidden"
      animate={controls}
      variants={arrowVariant}
    >
      <div className="idea_1">
        <IdeaSvg />
      </div>
      <div className={`arrowGroup ${selectedSection?.selected}`}>
        <CurveArrow selectedSection={selectedSection?.selected} />
      </div>
    </motion.div>
  );
};

const CurveArrow = ({ selectedSection }) => {
  if (selectedSection === "main") return <CourseArrow />;
  if (selectedSection === "course") return <CourseArrow />;
  if (selectedSection === "softCourse") return <SoftCourseArrow />;
  if (selectedSection === "blog") return <BlogArrow />;
  if (selectedSection === "testseries") return <TestseriesArrow />;
};
