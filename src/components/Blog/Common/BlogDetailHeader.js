import SaveBlog from "../../Tools/SaveBlog";
import { useRecoilState } from "recoil";
import { toastAtom } from "../../../state/atoms/toastAtom";
import { UserProfileImage } from "../../Tools/UserProfileImage";

const shareLinks = [
  {
    id: 1,
    src: "/images/blog/hindi.png",
    alt: "hindi",
    link: "",
  },
  {
    id: 2,
    src: "/images/blog/facebook.png",
    alt: "facebook",
    link: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    id: 3,
    src: "/images/blog/linkedin.png",
    alt: "linkedin",
    link: "https://www.linkedin.com/sharing/share-offsite/?url=",
  },
  {
    id: 4,
    src: "/images/blog/twitter.png",
    alt: "twitter",
    link: "https://twitter.com/intent/tweet?url=",
  },
  {
    id: 5,
    src: "/images/blog/link.png",
    alt: "link",
    link: "",
  },
];

export const BlogDetailHeader = ({
  category,
  save,
  handleSave,
  handleUnsave,
  posted_by,
  published_on,
}) => {
  const [, setShowToast] = useRecoilState(toastAtom);
  const blogLink = window.location.href;

  const handleClipToClipboard = () => {
    if (blogLink !== "") {
      const successToast = { status: true, type: "success", successMessage: "Copied to clipboard" };
      navigator.clipboard.writeText(blogLink);
      setShowToast(successToast);
    }
  };

  if (category === "CurrentAffair" || category === "Editorial")
    return (
      <div className="blogHeader">
        <div className="profile">
          <UserProfileImage
            profileSrc={posted_by?.profile_image}
            name={posted_by?.full_name}
            iconButton={true}
          />
          <div>
            <div>{posted_by?.full_name}</div>
            <div>{published_on}</div>
          </div>
        </div>
        <div className="shareLinks">
          <ul>
            {shareLinks.map((item) => (
              <li key={`blog-share-link-${item?.id}`}>
                {item?.id === 5 ? (
                  <img src={item?.src} alt={item?.alt} onClick={handleClipToClipboard} />
                ) : item?.id === 1 ? (
                  <img src={item?.src} alt={item?.alt} />
                ) : (
                  <a href={`${item?.link}${blogLink}`} target="_blank" rel="noopener noreferrer">
                    <img src={item?.src} alt={item?.alt} />
                  </a>
                )}
              </li>
            ))}
            <li>
              <SaveBlog save={save} handleSave={handleSave} handleUnsave={handleUnsave} />
            </li>
          </ul>
        </div>
      </div>
    );
  return;
};
