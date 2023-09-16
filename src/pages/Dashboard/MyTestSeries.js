// import CourseProgress from "../../components/Dashboard/MyTestSeries/CourseProgress";
import BlogSideCollections from "../../components/Blog/Common/BlogSideCollections";
import MyTestSeriesDashboard from "../../components/Dashboard/MyTestSeries/MyTestSeriesDashboard";
import PopularTestSeriesDashboard from "../../components/Dashboard/MyTestSeries/PopularTestSeriesDashboard";
// import TestSeriesEvaluationDashboard from "../../components/Dashboard/MyTestSeries/TestSeriesEvaluationDashboard";

import "./Dashboard.scss";

export const MyTestSeries = () => {
  return (
    <div className="dashboardWrapper">
      <div>
        <div className="dashboardMainContent">
          <MyTestSeriesDashboard />
          <PopularTestSeriesDashboard />
        </div>
        {/* <div className="dashboardMainContent">
          <TestSeriesEvaluationDashboard />
        </div> */}
      </div>
      <div className="dashboardSideBar">
        <BlogSideCollections
          category={"CurrentAffair"}
          collectionType="Popular"
          heading="Current Affairs"
        />
      </div>
    </div>
  );
};
