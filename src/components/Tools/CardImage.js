const CardImage = ({ thumbnail, defaultThumbnail, alt }) => {
  return (
    <img
      className="fluid-image"
      src={thumbnail !== "" ? thumbnail : defaultThumbnail}
      alt={alt ? alt : "thumbnail"}
    />
  );
};

export default CardImage;
