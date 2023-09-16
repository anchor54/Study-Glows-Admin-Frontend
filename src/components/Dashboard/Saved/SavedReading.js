import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import privateAxios from "../../../axios/privateAxios";

import "./Saved.scss";

const SavedReading = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSavedBlog = () => {
      setLoading(true);
      privateAxios
        .get("/blog/saved")
        .then((res) => {
          setLoading(false);
          setBlogData(res.data);
        })
        .catch((e) => console.log(e));
    };

    /** load saved blogs */
    loadSavedBlog();
  }, []);

  const getBlogLink = (blog) => {
    switch (blog.category) {
      case "current_affair":
        return `/reading/current_affairs/${blog.id}`;

      case "editorial":
        return `/reading/editorials/${blog.id}`;

      case "job":
        return `/reading/vacancies/job/${blog.id}`;

      case "result":
        return `/reading/vacancies/result/${blog.id}`;

      default:
        return "";
    }
  };

  const handleDelete = (blog) => {
    const deleteSaveReading = (blog) => {
      privateAxios
        .post(`blog/${blog?.id}/unsave`)
        .then((res) => {
          let idx = blogData.indexOf(blog);
          setBlogData((pre) => {
            return [...pre.slice(0, idx), ...pre.slice(idx + 1)];
          });
        })
        .catch((e) => console.log(e));
    };
    blog?.id && deleteSaveReading(blog);
  };

  return (
    <div className="savedReading">
      <h1>Saved Readings</h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="content">
        {loading && <Loader />}
        {blogData.map((item) => (
          <div className="card" key={`saved-reading-${item.id}`}>
            <div>
              <div>
                <img src="/images/dashboard/power.svg" alt="power" />
              </div>
              <div>
                <a
                  href={getBlogLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonLink"
                >
                  {item.title}
                </a>
              </div>
            </div>
            <div>
              <IconButton size="small" onClick={() => handleDelete(item)}>
                <img src="/images/dashboard/delete.svg" alt="delete" />
              </IconButton>
            </div>
            <div className="category">{item.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedReading;
