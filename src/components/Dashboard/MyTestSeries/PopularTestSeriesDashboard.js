import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import Divider from "../../Tools/Divider";
import { useFetchTestseriesLimit } from "../../../helper/Testseries/useFetchTestseriesLimit";
import Loader from "../../Tools/Loader";

import "./MyTestSeries.scss";

const PopularTestSeriesDashboard = () => {
  const [popularTestseriesData, loading] = useFetchTestseriesLimit();

  return (
    <div className="testseriesContainer">
      <h1>Popular Test Series </h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="content">
        {loading && <Loader />}
        {popularTestseriesData.map((item) => (
          <div className="card" key={`popular-testseries-${item.id}`}>
            <div>
              <div>
                <img src="/images/dashboard/myTest.svg" alt="test series" />
              </div>
              <div>{item.title}</div>
            </div>
            <div>
              <Button variant="outlined" size="small">
                <NavLink to={`/test_series/${item.id}`} className="buttonLink">
                  Learn More
                </NavLink>
              </Button>
              <Button variant="contained" size="small">
                <NavLink to={`/test_series/${item.id}`} className="buttonLink">
                  Register
                </NavLink>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTestSeriesDashboard;
