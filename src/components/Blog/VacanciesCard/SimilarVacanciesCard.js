import { Link } from "react-router-dom";
import Loader from "../../Tools/Loader";

import "./VacanciesCard.scss";

const SimilarVacanciesCard = ({ collectionType, category, data, loading, noData }) => {
  const noSimilarVac = `no ${category}`;
  return (
    <div className="similarVacancies">
      <h2>
        {collectionType} {category}
      </h2>
      <div className="card">
        {loading && <Loader />}
        <ul>
          {noData
            ? noSimilarVac
            : data.map((item) => (
                <li key={`${collectionType}-${item?.id}-${category}`}>
                  <Link to={`/reading/vacancies/${category.slice(0, category.length - 1).toLowerCase()}/${item?.id}`}>
                    {item?.title}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default SimilarVacanciesCard;
