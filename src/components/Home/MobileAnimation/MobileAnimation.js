import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useOnScreen } from "../../../helper/useOnScreen";

import "./MobileAnimation.scss";

export const MobileAnimation = () => {
  const mobileAnimationRef = useRef();
  const controls = useAnimation();
  const isVisible = useOnScreen(mobileAnimationRef);
  const x_diff = 100;

  const variant = {
    circle: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        rotate: [360 * 5, 360 * 4, 360 * 3, 360 * 2, 360 * 1, 0],
        x: [250, 250, 250, 200, 125, 0],
        transtion: {
          duration: "4s",
        },
      },
    },
    mobile: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        x: [250 - x_diff, 250 - x_diff, 250 - x_diff, 200 - x_diff, 125 - x_diff, 0 - x_diff],
        transtion: {
          duration: "4s",
        },
      },
    },
    socialmedia: {
      hidden: { opacity: 0 },
      visible: {
        opacity: [0, 0, 0, 0.05, 0.05, 1],
        x: [-250, -250, -250, -200, -125, 0],
        transtion: {
          delay: "0.5s",
          duration: "4s",
        },
      },
    },
  };

  useEffect(() => {
    controls.start("visible");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div className="mobileAnimation" ref={mobileAnimationRef}>
      <div className="grid">
        <div className="circle_mobile">
          <div className="wrapper">
            <motion.div
              className="circle"
              initial="hidden"
              animate={controls}
              variants={variant?.circle}
            >
              <img className="fluid-image" src="/images/homepage/circle.svg" alt="" />
            </motion.div>
            <motion.div
              className="mobile"
              initial="hidden"
              animate={controls}
              variants={variant?.mobile}
            >
              <img className="fluid-image" src="/images/homepage/mobile.svg" alt="" />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="socialMedia"
          initial="hidden"
          animate={controls}
          variants={variant?.socialmedia}
        >
          <ul>
            <li className="wrapper">
              <div>
                <img className="fluid-image" src="/images/homepage/youtube.svg" alt="" />
              </div>
              <div>1 millions + followers</div>
            </li>
            <li className="wrapper">
              <div>
                <img className="fluid-image" src="/images/homepage/twitter.svg" alt="" />
              </div>
              <div>1 millions + followers</div>
            </li>
            <li className="wrapper">
              <div>
                <img className="fluid-image" src="/images/homepage/telegram.svg" alt="" />
              </div>
              <div>1 millions + members</div>
            </li>
            <li className="wrapper">
              <div>
                <img className="fluid-image" src="/images/homepage/instagram.svg" alt="" />
              </div>
              <div>1 millions + followers</div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
