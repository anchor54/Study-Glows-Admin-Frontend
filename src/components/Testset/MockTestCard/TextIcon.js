export const TextIcon = ({ icon_url, text, icon_alt }) => {
  return (
    <div className="textIcon">
      <div>
        <img className="fluid-image" src={icon_url} alt={icon_alt} />
      </div>
      <div className="label_large">{text}</div>
    </div>
  );
};
