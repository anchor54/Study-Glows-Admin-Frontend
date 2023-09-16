import React from "react";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import EditorialCard from "../../Blog/Editorial/EditorialCard";
import { useFetchBlogsWithLimit } from "../../../helper/Blog/useFetchBlogsWithLimit";

import "./MyLibrary.scss";

const DashboardEditorials = () => {
  const category = "Editorial";
  const NoEditorial = "no editorials";
  const [editorialData, loading, noEditorialData] = useFetchBlogsWithLimit(category, "Latest", 10);

  return (
    <div className="editorialContainer">
      <h1>Editorial of the day </h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="E_content">
        {loading ? (
          <Loader />
        ) : noEditorialData ? (
          NoEditorial
        ) : (
          editorialData.map((item) => <EditorialCard customStyle={{ margin: "0.5rem" }} key={`${item.id}-${category}`} editorial={item} />)
        )}
      </div>
    </div>
  );
};

export default DashboardEditorials;
