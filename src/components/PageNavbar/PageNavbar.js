import { NavLink } from "react-router-dom";

import "./PageNavbar.scss";

const PageNavbar = ({ navDetails, background = "#feeacd", highlight_color = "#FCB03E" }) => {
  const activeStyle = {
    borderBottom: `0.25rem solid ${highlight_color}`,
  };
  return (
    <div
      className="pageNavbar"
      style={{ backgroundColor: background, boxShadow: `0 0 0 100vmax ${background}` }}
    >
      {navDetails.map((item, key) => (
        <div key={`${item.name}-nav-${key}`} className="title_large">
          <NavLink
            to={`${item.navLink}`}
            className="buttonLink"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {item.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default PageNavbar;
