import "./Faculty.scss";

export const Faculty = ({ faculty }) => {
  const profile_image = faculty?.profile_image;
  const name = faculty?.name;
  const bio = faculty?.bio;
  return (
    <div className="facultyCard">
      <div className="imageCard">
        <img className="fluid-image" src={profile_image} alt={name} />
      </div>
      <div className="contentCard">
        <h3 className="headline_large">{name}</h3>
        <p className="body_large">{bio}</p>
      </div>
    </div>
  );
};
