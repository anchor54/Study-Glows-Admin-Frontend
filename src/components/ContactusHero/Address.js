import socialLinks from "../../helper/DummyData/socialLinks";

const Address = () => {
  const addressData = [
    {
      key: "addressData-1",
      head: "Uttar Pradesh Office",
      value1: "Sector C1 LDA Colony",
      value2: "Kanpur road Lucknow",
    },
    {
      key: "addressData-2",
      head: "Email us directly",
      value1: "info@studyglows.com",
    },
    {
      key: "addressData-3",
      head: "Phone",
      value1: "+91 70075 44717",
    },
  ];
  const socialIcons = [
    {
      key: "socialIcon-1",
      imageSrc: "/images/contactus/instagram.png",
      alt: "instagram",
      href: socialLinks?.instagram,
    },
    {
      key: "socialIcon-2",
      imageSrc: "/images/contactus/youtube.png",
      alt: "youtube",
      href: socialLinks?.youtube,
    },
    {
      key: "socialIcon-3",
      imageSrc: "/images/contactus/twitter.png",
      alt: "twitter",
      href: socialLinks?.twitter,
    },
    {
      key: "socialIcon-4",
      imageSrc: "/images/contactus/facebook.png",
      alt: "facebook",
      href: socialLinks?.facebook,
    },
  ];

  return (
    <div className="address">
      <img className="icon-1" src="/images/contactus/custom_icon_1.png" alt="icon1" />
      <div className="address-card">
        <ul>
          {addressData.map((item, key) => (
            <li key={item.key}>
              <h3>{item.head}</h3>
              <p>
                {item.value1}
                <br />
                {item.value2}
              </p>
            </li>
          ))}
          <li>
            <h3>Follow Us</h3>
            <ul className="social-icons">
              {socialIcons.map((item, key) => (
                <li key={item.key}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <img src={item.imageSrc} alt={item.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <img className="icon-2" src="/images/contactus/custom_icon_2.png" alt="icon1" />
    </div>
  );
};

export default Address;
