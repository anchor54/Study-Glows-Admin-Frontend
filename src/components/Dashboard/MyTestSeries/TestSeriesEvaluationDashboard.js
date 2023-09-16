import React from "react";
import { Button } from "@mui/material";

import Divider from "../../Tools/Divider";
import "./MyTestSeries.scss";

const TestSeriesEvaluationDashboard = () => {
  const testSeriesEvaluation = [
    {
      id: 1,
      title: "IISC Study: Microplatics found in Cauvery River",
      category: "Editorial",
      link: "/",
    },
    {
      id: 2,
      title: "IISC Study: Microplatics found in Cauvery River",
      category: "Editorial",
      link: "/",
    },
    {
      id: 3,
      title: "IISC Study: Microplatics found in Cauvery River",
      category: "Editorial",
      link: "/",
    },
    {
      id: 4,
      title: "IISC Study: Microplatics found in Cauvery River",
      category: "Editorial",
      link: "/",
    },
  ];
  return (
    <div className="testseriesEvaluationContainer">
      <h1>Test Series Evaluation</h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="content">
        {testSeriesEvaluation.map((item) => (
          <div className="card" key={`testseries-evaluation-${item.id}`}>
            <div>
              <div>
                <img src="/images/dashboard/myTest.svg" alt="test series" />
              </div>
              <div>{item.title}</div>
            </div>
            <div>
              <Button variant="outlined" size="small">
                Retake Test
              </Button>
              <Button variant="contained" size="small">
                Check Result
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeriesEvaluationDashboard;
