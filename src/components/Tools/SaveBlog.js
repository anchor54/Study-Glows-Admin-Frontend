const SaveBlog = ({ save, handleUnsave, handleSave }) => {
  const saveImage = "/images/blog/save.svg";
  const saveFilledImage = "/images/blog/save-filled.svg";
  return (
    <img
      style={{ cursor: "pointer" }}
      className="fluid-image"
      src={save ? saveFilledImage : saveImage}
      alt="save"
      onClick={save ? handleUnsave : handleSave}
    />
  );
};

export default SaveBlog;
