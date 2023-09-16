import BlogSideCollections from "../Common/BlogSideCollections";

import "./Editorial.scss";

const EditorialSideCollections = () => {
  const category = "Editorial";
  return (
    <div className="editorialSideCollectionsList">
      <BlogSideCollections category={category} collectionType="Recent" />
      <BlogSideCollections category={category} collectionType="Popular" />
    </div>
  );
};

export default EditorialSideCollections;
