import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import privateAxios from "../../axios/privateAxios";

export const useFetchTestset = (page, type = "chapter", selectedCategory) => {
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noTestsetData, setNoTestsetData] = useState(false);
  const [testsetData, setTestsetData] = useState([]);
  const [testsetCategory, setTestsetCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    privateAxios
      .get(`testseries/${params?.testseriesId}/testsets`, { params: { page: page, type: type } })
      .then((res) => {
        if (res.status === 200) {
          let resp = res.data;
          if (resp.data.length > 0) {
            setNoTestsetData(false);
            setTotalPages(resp.total_page);
            if (page === 1) {
              setTestsetData(resp.data);
              setTestsetCategory(resp?.category);
            } else {
              setTestsetData((testsetData) => [...testsetData, ...resp.data]);
            }
          } else if (resp.data.length === 0 && page === 1) {
            setNoTestsetData(true);
            setTestsetCategory([]);
          }
          // console.log(resp);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e?.response?.status === 404) {
          setNoTestsetData(true);
        }
        setError(true);
        console.info("error", e);
      });
  }, [page, type, params]);

  return [testsetData, testsetCategory, totalPages, loading, noTestsetData, error];
};
