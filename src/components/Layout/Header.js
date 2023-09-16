import { Button, IconButton } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";

import { authAtom } from "../../state/atoms/authAtom";
import { loginPopupAtom } from "../../state/atoms/loginPopupAtom";
import { UserProfileImage } from "../Tools/UserProfileImage";
import { userAtom } from "../../state/atoms/userAtom";
import { useEffect, useState } from "react";

export default function Header({ mainNavbar }) {
  const [, setLoginPopup] = useRecoilState(loginPopupAtom);
  const [width, setWidth] = useState(window.innerWidth);
  const auth = useRecoilValue(authAtom);
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  if (width < 900)
    return (
      <MobileHeader auth={auth} user={user} setLoginPopup={setLoginPopup} mainNavbar={mainNavbar} />
    );

  return (
    <div className="Header">
      <div className="wrapper">
        <div className="logo">
          <Link to={""} className="buttonLink">
            <img src="/images/header/logo.png" alt="study glow" />
          </Link>
        </div>
        <div className="toolbar">
          <ul>
            <li className="dropdown">
              Course
              <IconButton disabled>
                <KeyboardArrowDownIcon />
              </IconButton>
              <ul className="dropdown-content">
                <li>
                  <Link to={"/courses/academic"} className="buttonLink">
                    Academic Courses
                  </Link>
                </li>
                <li>
                  <Link to={"/courses/non-academic"} className="buttonLink">
                    Non-Academic Courses
                  </Link>
                </li>
              </ul>
            </li>
            {mainNavbar.map((item, key) => (
              <li key={`toolbar-${key}`}>
                {item.redirect_to !== "" ? (
                  <NavLink to={item.redirect_to} className="buttonLink">
                    {item.name}
                  </NavLink>
                ) : (
                  item.name
                )}
              </li>
            ))}
            <li className="contactus">
              <Link to={"/contactus"} className="buttonLink">
                <Button variant="contained">Connect With Us</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile-toolbar">
          <ul>
            {/* <li>Search</li> */}
            {/* <li>
              <IconButton>
                <NotificationsSharpIcon htmlColor="#344563" sx={{ transform: "rotate(45deg)" }} />
              </IconButton>
            </li> */}
            <li>
              <Link to={"/cart"} className="buttonLink">
                <IconButton>
                  <ShoppingCartIcon htmlColor="#344563" />
                </IconButton>
              </Link>
            </li>
            <li>
              <Link to={"/profile"} className="buttonLink">
                <IconButton>
                  <SettingsIcon htmlColor="#344563" />
                </IconButton>
              </Link>
            </li>
            <li>
              {auth ? (
                <Link to={"/dashboard/"} className="buttonLink">
                  <UserProfileImage profileSrc={user?.profile_image} name={user?.full_name} />
                </Link>
              ) : (
                <Button variant="contained" onClick={(e) => setLoginPopup(true)}>
                  Login
                </Button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const MobileHeader = ({ auth, user, setLoginPopup, mainNavbar }) => {
  return (
    <div className="MobileHeader">
      <div className="wrapper">
        <div className="menu">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <ul className="dropdown-content">
            <li>
              <Link to={"/courses/academic"} className="buttonLink">
                Academic Courses
              </Link>
            </li>
            <li>
              <Link to={"/courses/non-academic"} className="buttonLink">
                Non-Academic Courses
              </Link>
            </li>
            {mainNavbar.map((item, key) => (
              <li key={`toolbar-${key}`}>
                {item.redirect_to !== "" ? (
                  <NavLink to={item.redirect_to} className="buttonLink">
                    {item.name}
                  </NavLink>
                ) : (
                  item.name
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="logo">
          <Link to={""} className="buttonLink">
            <img src="/images/header/logo.png" alt="study glow" />
          </Link>
        </div>
        <div className="profile-toolbar">
          <ul>
            <li>
              <Link to={"/dashboard/"} className="buttonLink">
                <IconButton>
                  <SettingsIcon htmlColor="#344563" />
                </IconButton>
              </Link>
            </li>
            <li>
              {auth ? (
                <Link to={"/profile"} className="buttonLink">
                  <UserProfileImage profileSrc={user?.profile_image} name={user?.full_name} />
                </Link>
              ) : (
                <Button variant="contained" onClick={(e) => setLoginPopup(true)}>
                  Login
                </Button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
