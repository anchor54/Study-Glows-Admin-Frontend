import CourseProgress from "../../components/Dashboard/MyTestSeries/CourseProgress";
import MyCourseDashboard from "../../components/Dashboard/MyCourse/MyCourseDashboard";
import SimilarCourse from "../../components/Dashboard/MyCourse/SimilarCourse";
// import CourseLearningTime from "../../components/Dashboard/MyCourse/CourseLearningTime";

import "./Dashboard.scss";

export const MyCourses = () => {
  return (
    <div className="dashboardWrapper">
      <div>
        <div className="dashboardMainContent">
          <MyCourseDashboard />
          <SimilarCourse />
          {/* <CourseLearningTime /> */}
        </div>
      </div>
      <div className="dashboardSideBar">
        <CourseProgress />
      </div>
    </div>
  );
};
