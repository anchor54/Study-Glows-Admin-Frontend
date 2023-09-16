import { useState, useEffect } from "react";
import publicAxios from "../../axios/publicAxios";

export const useFetchBlogDetail = (id) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noBlogData, setNoBlogData] = useState(false);
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);
    publicAxios
      .get(`blog/${id}`)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setBlogData(res.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e.response && e.response.status === 404) {
          setNoBlogData(true);
          setLoading(false);
        }
        setError(true);
        console.info("error", e);
      });
  }, [id]);

  return [blogData, loading, noBlogData, error];
};
