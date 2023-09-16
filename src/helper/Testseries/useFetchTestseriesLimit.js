import { useState, useEffect } from "react";
import publicAxios from "../../axios/publicAxios";

export const useFetchTestseriesLimit = (sort = "default", limit = 5) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noTestseriesData, setNoTestseriesData] = useState(false);
  const [testseriesData, seTtestseriesData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    publicAxios
      .get("/testseries", { params: { sort: getSortParameter(sort), limit: limit } })
      .then((res) => {
        if (res.status === 200) {
          let resp = res.data;
          if (resp.data.length > 0) {
            seTtestseriesData(resp.data);
          } else {
            setNoTestseriesData(true);
          }
          setLoading(false);
        }
      })
      .catch((e) => {
        setError(true);
        console.info("error", e);
      });
  }, [limit, sort]);

  return [testseriesData, loading, noTestseriesData, error];
};

const getSortParameter = (sort) => {
  let testseriesSort = sort;
  return testseriesSort;
};
