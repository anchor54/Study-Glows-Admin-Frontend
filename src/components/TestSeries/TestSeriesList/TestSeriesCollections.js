import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import CardImage from "../../Tools/CardImage";
import Loader from "../../Tools/Loader";
import { useTestseriesCollections } from "./useTestseriesCollections";

import "./TestSeriesList.scss";

export const TestSeriesCollections = () => {
  const {
    loading,
    totalPages,
    filterParams,
    sideNavbarData,
    testseriesData,
    queryParameter,
    setFilterParams,
    handleLoadButton,
  } = useTestseriesCollections();

  return (
    <div className="testSeriesCollection">
      <div className="navbar">
        <ul>
          {sideNavbarData.map((item) => (
            <li
              key={`sideNavbar-${item.id}`}
              onClick={() => setFilterParams({ category: item?.name })}
              className={filterParams.get("category") === item?.name ? "active" : ""}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="collectionWrapper">
        {testseriesData.map((item) => (
          <div key={`testseries-collection-${item.id}`}>
            {item?.thumbnail && (
              <NavLink to={`/test_series/${item.id}`}>
                <CardImage thumbnail={item?.thumbnail} alt={item?.title} />
              </NavLink>
            )}
          </div>
        ))}

        {loading && <Loader />}

        {totalPages !== queryParameter?.page && (
          <div className="load">
            <Button variant="contained" size="small" onClick={handleLoadButton}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
