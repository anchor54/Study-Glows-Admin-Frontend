import "./Tool.scss";

const Divider = ({ customStyle, color = undefined }) => {
  return <div className={`divider divider-${color}`} style={{ ...customStyle }}></div>;
};

export default Divider;
