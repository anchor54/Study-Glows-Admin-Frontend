import { useState } from "react";

import Loader from "../../Tools/Loader";
import EditorialCard from "./EditorialCard";
import { LoadMore } from "../../Tools/LoadMore";
import { useFetchBlogs } from "../../../helper/Blog/useFetchBlogs";
import { NoBlog } from "../NoBlog";

import "./Editorial.scss";

const EditorialCollections = () => {
  const category = "Editorial";
  const [page, setPage] = useState(1);
  const [editorialsData, totalPages, loading, noEditorialsData, error] = useFetchBlogs(
    category,
    page
  );
  const handleLoadButton = () => {
    setPage((page) => page + 1);
  };

  return noEditorialsData ? (
    <NoBlog />
  ) : (
    <div className="editorialCollections">
      {editorialsData.map((item) => (
        <EditorialCard key={`${item?.id}-${category}`} editorial={item} />
      ))}
      {loading && <Loader />}
      {totalPages !== page && (
        <div className="loadButton">
          <LoadMore text="Load More" handleLoadButton={handleLoadButton} variant="contained" />
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default EditorialCollections;
