import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

import "./Faq.scss";

export const Faq = ({ refName = null, faqData }) => {
  return (
    <div className="faq" ref={refName}>
      <div className="wrapper">
        <div className="item-1">
          <h2 className="display_small">Frequently asked questions</h2>
          <span>
            <Link to={`/contactus`} className="buttonLink">
              Contact us for more info
            </Link>
          </span>
          <img className="fluid-image" src="/images/courses/faq.svg" alt="faq" />
        </div>
        <div className="item-2">
          <ol>
            {faqData &&
              faqData.map((item) => (
                <li key={`faq-${item.type}-${item.id}`}>
                  <div className="itemWrapper">
                    <div className="question headline_small">{item?.question}</div>
                    <div className="expand">
                      <AddIcon />
                    </div>
                    <div className="answer title_medium">{item?.answer}</div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
