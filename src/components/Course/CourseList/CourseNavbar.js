import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { academicCategoriesAtom } from "../../../state/atoms/Course/academicCategoriesAtom";
import { nonAcademicCategoriesAtom } from "../../../state/atoms/Course/nonAcademicCategoriesAtom";
import {
  selectedCourseCategoryAtom,
  initialCourseCategory,
} from "../../../state/atoms/selectedCourseCategoryAtom";

import "./CourseList.scss";

const CourseNavbar = ({ courseType = "academic" }) => {
  const customClass = courseType === "academic" ? "academic" : "nonAcademic";
  const courseCategoryAtom =
    courseType === "academic" ? academicCategoriesAtom : nonAcademicCategoriesAtom;

  const courseCategory = useRecoilValue(courseCategoryAtom);
  const [selectedCourseCategory, setSelectedCourseCategory] = useRecoilState(
    selectedCourseCategoryAtom
  );
  const [filterParams, setFilterParams] = useSearchParams();

  useEffect(() => {
    if (selectedCourseCategory.id !== "")
      setFilterParams({ category: selectedCourseCategory?.name });

    return () => {
      setSelectedCourseCategory(initialCourseCategory);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCourseCategory]);

  return (
    <div className="courseNavbar">
      <ul className={`${customClass} heading_small`}>
        {courseCategory.map((item) => (
          <li
            key={`${courseType}-nav-${item.id}`}
            onClick={() => setSelectedCourseCategory(item)}
            className={filterParams.get("category") === item.name ? "active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseNavbar;
