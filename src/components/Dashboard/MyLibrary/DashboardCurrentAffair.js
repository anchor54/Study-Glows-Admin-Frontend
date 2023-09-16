import React from "react";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import CurrentAffairCard from "../../Blog/CurrentAffair/CurrentAffairCard";
import { useFetchBlogsWithLimit } from "../../../helper/Blog/useFetchBlogsWithLimit";

import "./MyLibrary.scss";

const DashboardCurrentAffair = () => {
  const category = "CurrentAffair";
  const NoCurrentAffair = "no current_affair";
  const [currentAffairsData, loading, noCurrentAffairData] = useFetchBlogsWithLimit(category, "Latest", 10);

  return (
    <div className="currentAffairContainer">
      <h1>Latest Current Affairs </h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="CA_Content">
        {loading ? (
          <Loader />
        ) : noCurrentAffairData ? (
          NoCurrentAffair
        ) : (
          currentAffairsData.map((item) => (
            <CurrentAffairCard customStyle={{ margin: "0.5rem" }} key={`${item.id}-${category}`} currentAffair={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardCurrentAffair;
