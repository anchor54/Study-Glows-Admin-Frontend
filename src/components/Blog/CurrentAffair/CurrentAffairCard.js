import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SaveBlog from "../../Tools/SaveBlog";
import CardImage from "../../Tools/CardImage";
import { useSaveUnsave } from "../../../helper/Blog/useSaveUnsave";

const defaultThumbnail = "/images/test.png";

const CurrentAffairCard = ({ currentAffair, customStyle, short_content_count = 100 }) => {
  const [tagList, saveTagList] = useState([]);
  const [save, handleSave, handleUnsave] = useSaveUnsave(currentAffair);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentAffair.tags && currentAffair.tags !== "") {
      saveTagList(currentAffair.tags.split("||"));
    }
  }, [currentAffair.tags]);

  const handleNavigate = () => {
    navigate("/reading/current_affairs/" + currentAffair.id);
  };

  return (
    <div className="currentaffairCard" style={{ ...customStyle }}>
      <div className="image" onClick={handleNavigate}>
        <CardImage
          thumbnail={currentAffair?.thumbnail}
          defaultThumbnail={defaultThumbnail}
          alt={currentAffair?.alt}
        />
        {currentAffair?.alt && <div className="caption">{currentAffair?.alt}</div>}
      </div>
      <div className="content" onClick={handleNavigate}>
        <h1 className="display_small">{currentAffair?.title}</h1>
        <p className="body_large">
          {currentAffair?.short_content.slice(0, short_content_count)}{" "}
          <Link to={"/"}> read More...</Link>
        </p>
        {tagList.length > 0 && (
          <div className="tags">
            <div>Tags: </div>
            <div>
              {tagList.map((item, key) => (
                <React.Fragment key={`tag_${currentAffair?.id.toString()}_${key}`}>
                  <div className="dot"></div>
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="save">
        <SaveBlog save={save} handleSave={handleSave} handleUnsave={handleUnsave} />
      </div>
    </div>
  );
};

export default CurrentAffairCard;
