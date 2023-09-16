import { useId } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import Loader from "../../components/Tools/Loader";
import BlogSideCollections from "../../components/Blog/Common/BlogSideCollections";
import { BlogDetailHeader } from "../../components/Blog/Common/BlogDetailHeader";
import { useFetchBlogDetail } from "../../helper/Blog/useFetchBlogDetail";
import { useSaveUnsave } from "../../helper/Blog/useSaveUnsave";
import { useSmoothScroll } from "../../helper/useSmoothScroll";
import CardImage from "../../components/Tools/CardImage";

import "./Blog.scss";

export const BlogDetail = ({ category }) => {
  useSmoothScroll();

  const noBlogUI = "no blog exits";
  const frameId = useId();
  const params = useParams();
  const [blog, loading, noBlog, error] = useFetchBlogDetail(params.id);
  const [save, handleSave, handleUnsave] = useSaveUnsave(blog);

  // redirect to 404 page
  if (!loading && noBlog) return noBlogUI;

  return (
    <Container>
      <div className="blogDetailWrapper">
        {loading ? (
          <Loader />
        ) : (
          <div className="blogDetail">
            <BlogDetailHeader
              category={category}
              save={save}
              handleSave={handleSave}
              handleUnsave={handleUnsave}
              published_on={blog?.published_on}
              posted_by={blog?.posted_by}
            />
            <div className="blogContent">
              <h1 className="headline_large">{blog.title}</h1>
              {blog?.thumbnail && (
                <div className="thumnail">
                  <CardImage thumbnail={blog?.thumbnail} defaultThumbnail="" alt={blog?.alt} />
                </div>
              )}
              <div className="content">{loadIframe(blog.content, frameId)}</div>
            </div>
          </div>
        )}

        <div className="similarBlog">
          <BlogSideCollections category={category} collectionType="Popular" />
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </Container>
  );
};

const loadIframe = (data, id) => {
  // return (
  //   <iframe
  //     title={id}
  //     id={id}
  //     srcDoc={data}
  //     sandbox="allow-same-origin"
  //     frameBorder="0"
  //     width="100%"
  //     height="500px"
  //     // scrolling="no"
  //   />
  // );
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};
