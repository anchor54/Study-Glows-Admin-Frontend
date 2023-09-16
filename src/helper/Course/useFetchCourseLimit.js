import { useState, useEffect } from "react";
import publicAxios from "../../axios/publicAxios";

export const useFetchCourseLimit = (sort = "default", limit = 5, type = "academic") => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noCourseData, setNoCourseData] = useState(false);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    publicAxios
      .get("/courses", { params: { sort: getSortParameter(sort), limit: limit } })
      .then((res) => {
        if (res.status === 200) {
          let resp = res.data;
          if (resp.data.length > 0) {
            setCourseData((courseData) => [...courseData, ...resp.data]);
          } else {
            setNoCourseData(true);
          }
          // console.log(resp);
          setLoading(false);
        }
      })
      .catch((e) => {
        setError(true);
        console.info("error", e);
      });
  }, [limit, sort]);

  return [courseData, loading, noCourseData, error];
};

const getSortParameter = (sort) => {
  let blogSort = sort;
  return blogSort;
};
