import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";

import publicAxios from "../../../axios/publicAxios";
import { academicCategoriesAtom } from "../../../state/atoms/Course/academicCategoriesAtom";
import { nonAcademicCategoriesAtom } from "../../../state/atoms/Course/nonAcademicCategoriesAtom";

export const CourseLayout = () => {
  const [, setAcademicCategories] = useRecoilState(academicCategoriesAtom);
  const [, setNonAcademicCategories] = useRecoilState(nonAcademicCategoriesAtom);

  useEffect(() => {
    const loadCourseCategory = (courseType) => {
      const c_type = courseType === "academic" ? "Academic" : "NonAcademic";
      publicAxios
        .get(`/course/${c_type}/category`)
        .then((res) => {
          if (courseType === "academic") {
            setAcademicCategories(res.data);
          } else if (courseType === "nonAcademic") {
            setNonAcademicCategories(res.data);
          }
        })
        .catch((e) => {
          console.info("error", e);
        });
    };
    loadCourseCategory("academic");
    loadCourseCategory("nonAcademic");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Outlet />
    </Container>
  );
};
