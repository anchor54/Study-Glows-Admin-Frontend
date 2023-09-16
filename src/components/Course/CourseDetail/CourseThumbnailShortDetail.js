import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";

import privateAxios from "../../../axios/privateAxios";
import { authAtom } from "../../../state/atoms/authAtom";
import { courseAtom } from "../../../state/atoms/Course/courseAtom";
import { loginPopupAtom } from "../../../state/atoms/loginPopupAtom";

export const CourseThumbnailShortDetail = ({ courseType = "academic" }) => {
  const buttonColor = courseType === "academic" ? "secondary" : "primary";
  const color = {
    primary: "#0474ba",
    secondary: "#C4262F",
  };

  const courseDetail = useRecoilValue(courseAtom);
  const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);
  const [, setLoginPopup] = useRecoilState(loginPopupAtom);
  // const [saveCourse, setSaveCourse] = useState(false);
  const [validity, setValidity] = useState();
  const instructor = courseDetail?.instructor;
  const feature = courseDetail?.feature;

  useEffect(() => {
    const validateDate = (validity) => {
      const v_date = new Date(validity);
      const c_date = new Date();
      if (v_date && c_date) {
        if ((v_date.getTime() - c_date.getTime()) / (24 * 60 * 60 * 1000) > 0) return true;
      }
      return false;
    };
    // courseDetail?.saved && courseDetail?.saved === true && setSaveCourse(true);
    courseDetail?.validity &&
      courseDetail?.validity !== "" &&
      validateDate(courseDetail?.validity) &&
      setValidity(new Date(courseDetail?.validity));
  }, [courseDetail]);

  const handleBuyNow = () => {
    const addTocart = (course_id) => {
      const request_body = {
        type: "course",
        course_id: course_id,
      };
      privateAxios
        .post("cart", request_body)
        .then((res) => {
          navigate("/cart");
        })
        .catch((e) => console.log(e));
    };

    // check the status of logged in
    if (!auth) {
      setLoginPopup(true);
    } else courseDetail?.id && addTocart(courseDetail.id);
  };

  // const handleSaveCourse = () => {
  //   const saveCourse = (id) => {
  //     privateAxios
  //       .post(`/course/${id}/save`)
  //       .then((res) => {
  //         setSaveCourse(true);
  //         // console.log(res.data);
  //       })
  //       .catch((e) => {
  //         console.log("error", e);
  //       });
  //   };

  //   // check the status of logged in
  //   if (!auth) {
  //     setLoginPopup(true);
  //   } else courseDetail?.id && saveCourse(courseDetail.id);
  // };

  return (
    <div className="courseDetailWrapper">
      <div>
        <img className="fluid-image" src={courseDetail?.thumbnail} alt={courseDetail?.title} />
      </div>
      <div>
        {courseDetail?.language && (
          <div className="medium title_medium">{courseDetail?.language}</div>
        )}

        <div className="priceTag">
          <div className="sellingPrice display_medium">
            RS <span>{courseDetail?.price}</span>
          </div>
          {courseDetail?.mrp && courseDetail?.mrp > courseDetail?.price && (
            <div className="discount display_small" style={{ color: color[buttonColor] }}>
              Rs. <span>{courseDetail?.mrp}</span>
            </div>
          )}
        </div>

        {validity && (
          <div className="valid title_medium" style={{ color: color[buttonColor] }}>
            Discount valid till {validity.toDateString()} only.
          </div>
        )}
        <div className="instructor">
          <ul className="title_large">
            {instructor &&
              instructor.slice(0, 2).map((item) => (
                <li key={`instrutor-top-${item.id}`}>
                  <div>
                    <img src="/images/courses/profile.svg" alt="profile" className="fluid-image" />
                  </div>
                  <div>{item.name}</div>
                </li>
              ))}
          </ul>
        </div>
        <div className="buy">
          {courseDetail?.enrolled ? (
            <>
              <Button variant="contained" color={buttonColor} disabled={true}>
                Enrolled
              </Button>
              <Button
                variant="outlined"
                color={buttonColor}
                onClick={() => navigate("/dashboard/courses")}
              >
                Continue
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color={buttonColor} onClick={handleBuyNow}>
                Buy Now
              </Button>
              <Button variant="outlined" color={buttonColor} onClick={handleBuyNow}>
                Add to Cart
              </Button>
              {/* {saveCourse ? (
                <Button variant="outlined" color={buttonColor} disabled={true}>
                  Saved Course
                </Button>
              ) : (
                <Button variant="outlined" color={buttonColor} onClick={handleSaveCourse}>
                  Save Course
                </Button>
              )} */}
            </>
          )}
        </div>
        <div className="extra title_medium">
          {feature &&
            feature.map((item) => (
              <div className="item" key={`feature-item-${item.id}`}>
                <div>
                  <img src={item.icon} alt={item.name} className="fluid-image" />
                </div>
                <div>{item.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
