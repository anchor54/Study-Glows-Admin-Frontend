import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Loader from "../../Tools/Loader";
import { useFetchBlogs } from "../../../helper/Blog/useFetchBlogs";

import "./VacanciesCard.scss";

const VacanciesCard = ({ collectionType, category, showLoadButton }) => {
  const noVacancies = `no ${category}`;
  const [page, setPage] = useState(1);
  const [vacanciesData, totalPages, loading, noVacanciesData, error] = useFetchBlogs(
    category,
    page
  );
  const handleLoadButton = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="vacancies">
      <h2 className="headline_medium" style={{ margin: "1rem 0" }}>
        {collectionType} {category}
      </h2>
      <div className="card">
        <ul>
          {noVacanciesData
            ? noVacancies
            : vacanciesData.map((item) => (
                <li key={`${collectionType}-${item?.id}-${category}`}>
                  <Link to={`/reading/vacancies/${category.toLowerCase()}/${item?.id}`}>
                    {item?.title}
                  </Link>
                </li>
              ))}
        </ul>

        {loading && <Loader />}

        {showLoadButton && totalPages !== page && (
          <div style={{ textAlign: "center", paddingBottom: "0.5rem" }}>
            <Button onClick={handleLoadButton} variant="contained" size="small">
              Load More
            </Button>
          </div>
        )}

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default VacanciesCard;
