import { useState, useEffect } from "react";
import publicAxios from "../../axios/publicAxios";

export const useFetchBlogsWithLimit = (category, sort = "default", limit = 5) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noBlogData, setNoBlogData] = useState(false);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    publicAxios
      .get(getBlogURL(category), { params: { sort: getSortParameter(sort), limit: limit } })
      .then((res) => {
        if (res.status === 200) {
          let resp = res.data;
          if (resp.data.length > 0) {
            setBlogData((blogData) => [...blogData, ...resp.data]);
          } else if (resp.data.length === 0) {
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
  }, [category, limit, sort]);

  return [blogData, loading, noBlogData, error];
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

const getSortParameter = (sort) => {
  let blogSort = sort;
  switch (sort) {
    case "Popular":
      blogSort = "views";
      break;
    case "Recent":
      blogSort = "latest";
      break;
    case "Latest":
      blogSort = "default";
      break;

    default:
      blogSort = "latest";
      break;
  }
  return blogSort;
};
