import "./PageHero.scss";

const PageHero = ({
  message,
  p_message,
  src,
  alt,
  highlight_color = "#FCB03E",
}) => {
  return (
    <div className="pageHero">
      <div>
        <img className="fluid-image" src={src} alt={alt} />
      </div>
      <div>
        <h1 className="display_small" style={{ color: highlight_color }}>{message}</h1>
        {p_message && <p className="headline_small" style={{ color: highlight_color }}>{p_message}</p>}
      </div>
    </div>
  );
};

export default PageHero;
