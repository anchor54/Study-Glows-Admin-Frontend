import { Link } from "react-router-dom";

import { UserProfileImage } from "../../Tools/UserProfileImage";
import { useTestHeader } from "./useTestHeader";

import "./Header.scss";

export default function TestHeader({ onlineTestData }) {
  const [showTime] = useTestHeader(onlineTestData);

  return (
    <div className="TestHeader">
      <div className="wrapper">
        <div className="logo">
          <Link to={"/"} className="buttonLink">
            <img src="/images/header/logo.png" alt="study glow" />
          </Link>
        </div>
        <div className="testName">
          <Link to={""} className="buttonLink">
            {onlineTestData?.testset?.name}
          </Link>
        </div>
        {showTime && (
          <div className="timestamp">
            <strong>Time Left: </strong>
            <span>{showTime?.hr}</span>:<span>{showTime?.min}</span>:<span>{showTime?.sec}</span>
          </div>
        )}
        <div className="profile">
          <Link to={"/dashboard/"} className="buttonLink">
            <UserProfileImage
              profileSrc={onlineTestData?.user?.profile_image}
              name={onlineTestData?.user?.full_name}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
