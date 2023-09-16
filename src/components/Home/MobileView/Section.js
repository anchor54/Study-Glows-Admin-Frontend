import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { mobileSection } from "../../../helper/DummyData/homepageHero";
import { useFetchCourseLimit } from "../../../helper/Course/useFetchCourseLimit";
import { useFetchBlogsWithLimit } from "../../../helper/Blog/useFetchBlogsWithLimit";
import { useFetchTestseriesLimit } from "../../../helper/Testseries/useFetchTestseriesLimit";
import Divider from "../../Tools/Divider";
import CourseCard from "../../Course/CourseCard/CourseCard";
import EditorialCard from "../../Blog/Editorial/EditorialCard";
import { NavLink } from "react-router-dom";
import CardImage from "../../Tools/CardImage";

export const Section = ({ type, color }) => {
  const category = "Editorial";
  const [courseData] = useFetchCourseLimit();
  // const [softCourseData] = useFetchCourseLimit();
  const [blogData] = useFetchBlogsWithLimit(category);
  const [testseriesData] = useFetchTestseriesLimit();

  const getCourseRedirectLink = (course, courseType) => {
    return `/courses/${courseType}/${course.id}`;
  };

  return (
    <div className={`mobileSection ${type} ${color}`}>
      <div className="wrapper">
        <div>
          <img src="/images/header/logo.png" alt="study glow" />
        </div>
        <div>
          <h1 className="display_medium">{mobileSection[type]?.h1}</h1>
        </div>
        <div>
          <h1 className="display_medium">{mobileSection[type]?.h2}</h1>
        </div>
        <div>
          <p className="title_small">{mobileSection[type]?.p1}</p>
        </div>
        <div>
          <p className="title_small">{mobileSection[type]?.p2}</p>
        </div>
      </div>
      <div className="wrapper2">
        {type === "course" &&
          courseData.map((item) => (
            <CourseCard
              key={`${item?.type}-card-${item.id}`}
              course={item}
              buttonColor="primary"
              courseRedirect={getCourseRedirectLink(item, "academic")}
            />
          ))}
        {type === "softCourse" &&
          courseData.map((item) => (
            <CourseCard
              key={`${item?.type}-card-${item.id}`}
              course={item}
              buttonColor="primary"
              courseRedirect={getCourseRedirectLink(item, "non-academic")}
            />
          ))}
        {type === "blog" &&
          blogData.map((item) => (
            <EditorialCard key={`${item?.id}-${category}`} editorial={item} />
          ))}
        {type === "testseries" &&
          testseriesData.map((item) => (
            <div key={`testseries-collection-${item.id}`} style={{ width: "80%" }}>
              {item?.thumbnail && (
                <NavLink to={`/test_series/${item.id}`}>
                  <CardImage thumbnail={item?.thumbnail} alt={item?.title} />
                </NavLink>
              )}
            </div>
          ))}
      </div>
      <div className="viewAll">
        <NavLink to={`${mobileSection[type]?.link}`} className="buttonLink">
          <Button variant="" endIcon={<ArrowRightAltIcon />}>
            View All
          </Button>
        </NavLink>
      </div>
      <Divider color="primary" />
    </div>
  );
};
