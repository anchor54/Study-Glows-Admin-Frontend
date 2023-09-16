import { useRecoilValue } from "recoil";
import { NavLink } from "react-router-dom";

import { userAtom } from "../../../state/atoms/userAtom";
import { UserProfileImage } from "../../Tools/UserProfileImage";

export const ProfileMenu = () => {
  const user = useRecoilValue(userAtom);

  const sideMenus = [
    {
      id: 1,
      link: "/dashboard/",
      imgSrc: "/images/dashboard/myCourse.svg",
      imgAlt: "my course",
      title: "My Course",
    },
    {
      id: 2,
      link: "/dashboard/test-series",
      imgSrc: "/images/dashboard/myTest.svg",
      imgAlt: "myTestseries",
      title: "My Test Series",
    },
    {
      id: 3,
      link: "/dashboard/library",
      imgSrc: "/images/dashboard/library.svg",
      imgAlt: "library",
      title: "My Library",
    },
    {
      id: 4,
      link: "/dashboard/help",
      imgSrc: "/images/dashboard/help.svg",
      imgAlt: "help",
      title: "Help",
    },
    {
      id: 5,
      link: "/dashboard/settings",
      imgSrc: "/images/dashboard/setting.svg",
      imgAlt: "settings",
      title: "Settings",
    },
    {
      id: 6,
      link: "/logout",
      imgSrc: "/images/dashboard/logout.svg",
      imgAlt: "logout",
      title: "Logout",
    },
  ];

  return (
    <div className="profileMenu">
      <div className="profileDp">
        <UserProfileImage
          profileSrc={user?.profile_image}
          name={user?.full_name}
          iconButton={true}
        />
        <div className="title_large">Welcome, {user?.full_name}</div>
      </div>
      <div className="menus">
        <ul>
          {sideMenus.map((item, key) => (
            <NavLink to={item?.link} className="buttonLink" key={`side-menus-${item?.id}`}>
              <li>
                <div className="menu">
                  <div>
                    <img src={item?.imgSrc} alt={item?.imgAlt} />
                  </div>
                  <div>{item?.title}</div>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};
