import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
};
