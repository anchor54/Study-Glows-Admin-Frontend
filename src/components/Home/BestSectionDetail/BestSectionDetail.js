import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { useFetchCourseLimit } from "../../../helper/Course/useFetchCourseLimit";
import { useFetchBlogsWithLimit } from "../../../helper/Blog/useFetchBlogsWithLimit";
import { useFetchTestseriesLimit } from "../../../helper/Testseries/useFetchTestseriesLimit";
import { FacultyCollection } from "../../Faculty/FacultyCollection";
import { BestSection } from "../../../helper/DummyData/homepageHero";
import EditorialCard from "../../Blog/Editorial/EditorialCard";
import CourseCard from "../../Course/CourseCard/CourseCard";
import publicAxios from "../../../axios/publicAxios";
import CardImage from "../../Tools/CardImage";
import Divider from "../../Tools/Divider";

import "./BestSectionDetail.scss";

export const BestSectionDetail = ({ selectedSection, color }) => {
  const category = "Editorial";
  const [courseData] = useFetchCourseLimit();
  const [softCourseData] = useFetchCourseLimit();
  const [blogData] = useFetchBlogsWithLimit(category);
  const [testseriesData] = useFetchTestseriesLimit();
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const loadBestFaculty = () => {
      publicAxios
        .get("/instructors")
        .then((res) => {
          setFacultyData(res?.data);
        })
        .catch((e) => console.log(e));
    };

    selectedSection?.selected && loadBestFaculty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCourseRedirectLink = (course, courseType) => {
    return `/courses/${courseType}/${course.id}`;
  };
  console.log(selectedSection, selectedSection?.selected, courseData);

  return (
    <div className={`bestSectionDetail ${color}`}>
      <p className="headline_small">{BestSection[selectedSection?.selected]?.p}</p>
      <Divider color={color} />
      <div className="grid">
        {selectedSection?.selected === "course" &&
          courseData.map((item) => (
            <CourseCard
              key={`${item?.type}-card-${item.id}`}
              course={item}
              buttonColor={color}
              courseRedirect={getCourseRedirectLink(item, "academic")}
            />
          ))}
        {selectedSection?.selected === "softCourse" &&
          softCourseData.map((item) => (
            <CourseCard
              key={`${item?.type}-card-${item.id}`}
              course={item}
              buttonColor={color}
              courseRedirect={getCourseRedirectLink(item, "non-academic")}
            />
          ))}
        {selectedSection?.selected === "blog" &&
          blogData.map((item) => (
            <EditorialCard key={`${item?.id}-${category}`} editorial={item} />
          ))}
        {selectedSection?.selected === "testseries" &&
          testseriesData.map((item) => (
            <div key={`testseries-collection-${item.id}`} style={{ width: "80%" }}>
              {item?.thumbnail && (
                <NavLink to={`/test_series/${item.id}`}>
                  <CardImage thumbnail={item?.thumbnail} alt={item?.title} />
                </NavLink>
              )}
            </div>
          ))}

        <div className="viewAll">
          <NavLink to={`${BestSection[selectedSection?.selected]?.link}`} className="buttonLink">
            <Button variant="contained" color={color} endIcon={<ArrowRightAltIcon />}>
              View All
            </Button>
          </NavLink>
        </div>
      </div>

      {(selectedSection?.selected === "course" || selectedSection?.selected === "softCourse") && (
        <div className="bestFaulty">
          {facultyData.length && (
            <>
              <h2 className="display_small">Under the guidance of our best faculty</h2>
              <div className="content">
                <FacultyCollection facultyData={facultyData} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
