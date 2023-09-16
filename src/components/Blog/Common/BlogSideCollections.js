import BlogSideCollectionsCard from "./BlogSideCollectionsCard";
import SimilarVacanciesCard from "../VacanciesCard/SimilarVacanciesCard";
import { useFetchBlogsWithLimit } from "../../../helper/Blog/useFetchBlogsWithLimit";

import "./Common.scss";

const BlogSideCollections = ({ category, collectionType, limit = 5, heading = "" }) => {
  const [sideBlogs, loading, noSideBlog] = useFetchBlogsWithLimit(category, collectionType, limit);

  switch (category) {
    case "CurrentAffair":
      return (
        <BlogSideCollectionsCard
          collectionType={collectionType}
          type="Current Affairs"
          data={sideBlogs}
          loading={loading}
          noData={noSideBlog}
          heading={heading}
        />
      );
    case "Editorial":
      return (
        <BlogSideCollectionsCard
          collectionType={collectionType}
          type="Editorial"
          data={sideBlogs}
          loading={loading}
          noData={noSideBlog}
          heading={heading}
        />
      );
    case "Job":
      return (
        <SimilarVacanciesCard
          collectionType={collectionType}
          category="Jobs"
          data={sideBlogs}
          loading={loading}
          noData={noSideBlog}
          heading={heading}
        />
      );
    case "Result":
      return (
        <SimilarVacanciesCard
          collectionType={collectionType}
          category="Results"
          data={sideBlogs}
          loading={loading}
          noData={noSideBlog}
          heading={heading}
        />
      );
    default:
      return;
  }
};

export default BlogSideCollections;
