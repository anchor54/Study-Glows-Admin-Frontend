import { useRecoilState } from "recoil";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toastAtom } from "../../state/atoms/toastAtom";
import { Coursesection } from "../../components/Learning/Coursesection/Coursesection";
import { LectureDetail } from "../../components/Learning/LearningDetail/LectureDetail";
import { LectureHeader } from "../../components/Learning/LearningHeader/LearningHeader";

import Loader from "../../components/Tools/Loader";
import privateAxios from "../../axios/privateAxios";

import "./Learning.scss";

export const Learning = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState();
  const [, setShowToast] = useRecoilState(toastAtom);
  const [pageLoading, setPageLoading] = useState(true);
  const [coursesectionData, setCoursesectionData] = useState([]);

  useEffect(() => {
    const loadCoursesection = (courseId) => {
      privateAxios
        .get(`/study/mycourses/${courseId}/coursesection`)
        .then((res) => {
          setPageLoading(false);
          setCourseData(res?.data?.course);
          setCoursesectionData(res?.data?.section);
        })
        .catch((e) => {
          if (e.response?.status === 404) {
            const errorToast = {
              status: true,
              type: "error",
              errorMessage: "course / course section not found",
            };
            setShowToast(errorToast);
            navigate("/dashboard/courses");
          }
          console.log(e);
        });
    };
    params?.id && loadCoursesection(params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="false" sx={{ padding: "0 !important" }} className="learningContainer">
      {pageLoading ? (
        <Loader />
      ) : (
        <>
          <LectureHeader course={courseData} />
          <div className="grid">
            <LectureDetail />
            <Coursesection coursesection={coursesectionData} course={courseData} />
          </div>
        </>
      )}
    </Container>
  );
};
