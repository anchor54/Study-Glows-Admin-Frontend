import { Button } from "@mui/material";

import CourseCard from "../CourseCard/CourseCard";
import Loader from "../../Tools/Loader";
import { useCourseList } from "./useCourseList";

export const AcademicList = () => {
  const courseType = "academic";
  const buttonColor = "secondary";

  const {
    loading,
    courseData,
    totalPages,
    queryParameter,
    handleLoadButton,
    getCourseRedirectLink,
  } = useCourseList(courseType);

  return (
    <div className="allCourse">
      <h3 className="headline_large">All Courses</h3>
      <div className="courseGrid">
        {courseData.map((item) => (
          <CourseCard
            key={`${courseType}-card-${item.id}`}
            course={item}
            buttonColor={buttonColor}
            courseRedirect={getCourseRedirectLink(item)}
          />
        ))}
      </div>

      {loading && <Loader />}

      {totalPages !== queryParameter?.page && (
        <div className="loadMore">
          <Button variant="contained" size="small" color={buttonColor} onClick={handleLoadButton}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
