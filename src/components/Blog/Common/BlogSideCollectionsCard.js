import CardImage from "../../Tools/CardImage";
import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";

import "./Common.scss";

const BlogCardWide = ({ blog }) => {
  const defaultThumbnail = "/images/test.png";
  return (
    <div className="card">
      <div>
        <CardImage thumbnail={blog.thumbnail} defaultThumbnail={defaultThumbnail} alt={blog.alt} />
      </div>
      <div>
        <h4>{blog.published_on}</h4>
        <p>{blog.title}</p>
      </div>
    </div>
  );
};

const BlogSideCollectionsCard = ({ collectionType, type, data, loading, noData, heading = "" }) => {
  const noSideBlog = "no side blogs ";
  return (
    <div className="blogSideCollections">
      <h2 className="headline_small" style={{ margin: "1rem 0" }}>
        {heading !== "" ? heading : `${collectionType} ${type}`}
      </h2>
      <Divider />
      {loading && <Loader />}
      {noData
        ? noSideBlog
        : data.map((item) => (
            <BlogCardWide
              key={`${collectionType}_${type}_${item.id}_side_collections`}
              blog={item}
            />
          ))}
    </div>
  );
};

export default BlogSideCollectionsCard;
