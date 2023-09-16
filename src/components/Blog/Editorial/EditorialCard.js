import { useNavigate } from "react-router-dom";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import CardImage from "../../Tools/CardImage";
import SaveBlog from "../../Tools/SaveBlog";
import { useSaveUnsave } from "../../../helper/Blog/useSaveUnsave";

const defaultThumbnail = "/images/test.png";

const EditorialCard = ({ editorial, customStyle }) => {
  const [save, handleSave, handleUnsave] = useSaveUnsave(editorial);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/reading/editorials/" + editorial.id);
  };

  return (
    <div className="editorialCard" style={{ ...customStyle }}>
      <div onClick={handleNavigate}>
        <CardImage
          thumbnail={editorial?.thumbnail}
          defaultThumbnail={defaultThumbnail}
          alt={editorial?.alt}
        />
      </div>
      <div className="content">
        <div className="wrapper1 headline_small">
          <div onClick={handleNavigate}>{editorial?.title}</div>
          <div>
            <SaveBlog save={save} handleSave={handleSave} handleUnsave={handleUnsave} />
          </div>
        </div>
        <div className="wrapper2 label_large" onClick={handleNavigate}>
          <div>
            <div>
              <PermIdentityOutlinedIcon />
            </div>
            <div>By {editorial?.posted_by?.full_name}</div>
          </div>
          <div>
            <div>
              <AccessTimeFilledOutlinedIcon />
            </div>
            <div>{editorial?.published_on}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialCard;
