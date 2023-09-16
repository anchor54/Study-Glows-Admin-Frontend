import { useRecoilValue } from "recoil";
import { courseAtom } from "../../../state/atoms/Course/courseAtom";

export const AboutCourse = ({ refName = null }) => {
  const courseDetail = useRecoilValue(courseAtom);
  return (
    <div className="aboutCourse" ref={refName}>
      <h2 className="display_small">About Course</h2>
      <div className="content body_large">{courseDetail?.about}</div>
    </div>
  );
};
