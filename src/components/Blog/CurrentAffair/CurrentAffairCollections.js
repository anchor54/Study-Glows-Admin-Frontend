import { useState } from "react";

import Loader from "../../Tools/Loader";
import CurrentAffairCard from "./CurrentAffairCard";
import { useFetchBlogs } from "../../../helper/Blog/useFetchBlogs";
import { LoadMore } from "../../Tools/LoadMore";
import { NoBlog } from "../NoBlog";

import "./CurrentAffair.scss";

const CurrentAffairCollections = () => {
  const category = "CurrentAffair";
  const [page, setPage] = useState(1);
  const [currentAffairsData, totalPages, loading, noCurrentAffairsData, error] = useFetchBlogs(
    category,
    page
  );
  const handleLoadButton = () => {
    setPage((page) => page + 1);
  };

  return noCurrentAffairsData ? (
    <NoBlog />
  ) : (
    <div className="currentAffairCollections">
      {currentAffairsData.map((item) => (
        <CurrentAffairCard key={`${item?.id}-${category}`} currentAffair={item} short_content_count={250} />
      ))}

      {loading && <Loader />}
      {totalPages !== page && (
        <LoadMore text="Load More" handleLoadButton={handleLoadButton} variant="contained" />
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default CurrentAffairCollections;
