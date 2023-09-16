import PageNavbar from "../../components/PageNavbar/PageNavbar";
import PageHero from "../../components/PageHero/PageHero";
import CourseNavbar from "../../components/Course/CourseList/CourseNavbar";
import CourseCollection from "../../components/Course/CourseList/CourseCollection";
import pageHero from "../../helper/DummyData/pageHero";
import pageNavbar from "../../helper/DummyData/pageNavbar";
import { useSmoothScroll } from "../../helper/useSmoothScroll";

import "./Course.scss";

export const Course = ({ courseType = "academic" }) => {
  useSmoothScroll();
  courseType = courseType === "academic" ? "academic" : "nonAcademic";

  return (
    <>
      <PageHero {...pageHero[courseType]} />
      <PageNavbar {...pageNavbar[courseType]} />
      <div className="courseWrapper">
        <CourseNavbar courseType={courseType} />
        <CourseCollection courseType={courseType} />
      </div>
    </>
  );
};
