import { useEffect, useState } from "react";

import { MobileAnimation } from "../Home/MobileAnimation/MobileAnimation";

import "./AndroidApp.scss";

export const AndroidApp2 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  if (width > 900) return <MobileAnimation />;

  return (
    <div className="androidApp2">
      <img className="fluid-image" src="/images/courses/androidApp.svg" alt="andorid app" />
    </div>
  );
};
