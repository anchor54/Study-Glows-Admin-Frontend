import { Link } from "react-router-dom";

import {
  quickLinks,
  studentLinks,
  contactUs,
  socialIcons,
} from "../../helper/DummyData/footerData";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="wrapper">
        <div className="item-1">
          <ul>
            <li>
              <img className="fluid-image" src="/images/footer/logo_2.png" alt="study glow" />
            </li>
            <li>
              Copyright @ 2022 STUDYGLOWS <br />
            </li>
            <li></li>
            <li> All rights reserved.</li>
            <li></li>
            <li>Website designed & managed by Digi Infy.</li>
          </ul>
        </div>
        <div className="item-2">
          <ul>
            <li className="title">Quick Links</li>
            {quickLinks.map((item) => (
              <li key={item?.key}>
                <Link to={item?.link} className="buttonLink">
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="item-3">
          <ul>
            <li className="title">For Students</li>
            {studentLinks.map((item) => (
              <li key={item?.key}>
                <Link to={item?.link} className="buttonLink">
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="item-4">
          <ul>
            <li className="title">Contact Us</li>
            <li>
              Customer Care <br /> {contactUs?.customer_care}
            </li>
            <li>
              Email: <br /> {contactUs?.email}
            </li>
            <li>
              Address: <br /> {contactUs?.address}
            </li>
          </ul>
        </div>
        <div className="item-5">
          <ul>
            <li className="title">Connect with us on your favourite platform.</li>
            <li className="social-icons">
              {socialIcons.map((item) => (
                <div key={item?.key}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <img src={item.imageSrc} alt={item.alt} />
                  </a>
                </div>
              ))}
            </li>
            <li>
              <img className="fluid-image" src="/images/footer/google_play.png" alt="google play" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
