import { useState, useEffect } from "react";
import publicAxios from "../../axios/publicAxios";

export const useFetchTestseries = (queryParameter) => {
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noTestseriesData, setNoTestseriesData] = useState(false);
  const [testseriesData, setTestseriesData] = useState([]);

  useEffect(() => {
    const fetchTestseries = () => {
      setLoading(true);
      setError(false);
      publicAxios
        .get("/testseries", { params: queryParameter })
        .then((res) => {
          if (res.status === 200) {
            let resp = res.data;
            if (resp.data.length > 0) {
              setTotalPages(resp.total_page);
              queryParameter?.page === 1
                ? setTestseriesData(resp.data)
                : setTestseriesData((testseriesData) => [...testseriesData, ...resp.data]);
            } else if (resp.data.length === 0 && queryParameter?.page === 1) {
              setTestseriesData(resp.data)
              setNoTestseriesData(true);
            }
            setLoading(false);
          }
        })
        .catch((e) => {
          setError(true);
          console.info("error", e);
        });
    };
    fetchTestseries();
  }, [queryParameter]);

  return [testseriesData, totalPages, loading, noTestseriesData, error];
};
