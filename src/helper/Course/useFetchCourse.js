import { useState, useEffect } from "react";
import publicAxios from "../../axios/publicAxios";

export const useFetchCourse = (queryParameter) => {
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noCourseData, setNoCourseData] = useState(false);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchCourse = () => {
      const course_type = queryParameter?.category_type === "academic" ? "Academic" : "NonAcademic";
      setLoading(true);
      setError(false);
      publicAxios
        .get("/courses", { params: { ...queryParameter, category_type: course_type } })
        .then((res) => {
          if (res.status === 200) {
            let resp = res.data;
            if (resp.data.length > 0) {
              setTotalPages(resp.total_page);
              queryParameter?.page === 1
                ? setCourseData(resp.data)
                : setCourseData((courseData) => [...courseData, ...resp.data]);
            } else if (resp.data.length === 0 && queryParameter?.page === 1) {
              setCourseData(resp.data)
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
    };

    fetchCourse();
  }, [queryParameter]);

  return [courseData, totalPages, loading, noCourseData, error];
};
