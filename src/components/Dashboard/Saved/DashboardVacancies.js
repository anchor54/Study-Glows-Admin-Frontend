import { Link } from "react-router-dom";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import { useFetchBlogsWithLimit } from "../../../helper/Blog/useFetchBlogsWithLimit";

import "./Saved.scss";

const DashboardVacancies = () => {
  const category = "Job";
  const noCategoryData = "No vacancies";
  const [vacanciesData, loading, noVacanciesData] = useFetchBlogsWithLimit(category, "Latest", 10);

  return (
    <div className="dashboardVacancies">
      <h1>Latest Vacancies</h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="content">
        <ul>
          {loading ? (
            <Loader />
          ) : noVacanciesData ? (
            noCategoryData
          ) : (
            vacanciesData.map((item) => (
              <li key={`dashboard-vacancies-${item.id}`}>
                <Link to={`/reading/vacancies/${category}/${item.id}`}>{item.title}</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardVacancies;
