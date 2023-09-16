import { useState, useEffect } from "react";
import publicAxios from "../../axios/publicAxios";

export const useFetchBlogs = (category, page) => {
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noBlogData, setNoBlogData] = useState(false);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    publicAxios
      .get(getBlogURL(category), { params: { page: page } })
      .then((res) => {
        if (res.status === 200) {
          let resp = res.data;
          if (resp.data.length > 0) {
            setTotalPages(resp.total_page);
            setBlogData((blogData) => [...blogData, ...resp.data]);
          } else if (resp.data.length === 0 && page === 1) {
            setNoBlogData(true);
          }
          setLoading(false);
          // console.info(resp);
        }
      })
      .catch((e) => {
        setError(true);
        console.info("error", e);
      });
  }, [page, category]);

  return [blogData, totalPages, loading, noBlogData, error];
};

const getBlogURL = (category) => {
  let blogCategory = category;
  switch (category) {
    case "CurrentAffair":
      blogCategory = "current_affair";
      break;
    case "Editorial":
      blogCategory = "editorial";
      break;
    case "Job":
      blogCategory = "job";
      break;
    case "Result":
      blogCategory = "result";
      break;

    default:
      blogCategory = "current_affair";
      break;
  }
  return `/blogs/${blogCategory}`;
};
