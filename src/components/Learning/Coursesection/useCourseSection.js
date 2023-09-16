/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import privateAxios from "../../../axios/privateAxios";

import { lectureDetailAtom } from "../../../state/atoms/Lecture/lectureDetailAtom";

export const useCourseSection = (course, coursesection) => {
  const initialOpenLecture = {
    coursesection_id: "",
    lecture_id: "",
  };
  const [opensection, setOpensection] = useState([]);
  const [openLecture, setOpenLecture] = useState(initialOpenLecture);
  const [, setLectureDetail] = useRecoilState(lectureDetailAtom);

  useEffect(() => {
    let section_tmp = Array(coursesection.length).fill(false);
    section_tmp[0] = true;

    setOpensection(section_tmp);
    if (coursesection.length > 0) {
      if (coursesection[0]?.lecturelist.length > 0) {
        course?.id &&
          coursesection[0]?.id &&
          coursesection[0]?.lecturelist[0]?.id &&
          handleOpenLecture(coursesection[0]?.id, coursesection[0]?.lecturelist[0]?.id);
      }
    }
  }, []);

  useEffect(() => {
    const fetchLecture = () => {
      const req_body = { course_id: course?.id, ...openLecture };
      setLectureDetail((pre) => ({ ...pre, loading: true }));
      privateAxios
        .post("/study/mycourses/lecture", req_body)
        .then((res) => {
          // console.log(res);
          setLectureDetail(() => {
            return {
              loading: false,
              lecture: res?.data,
              course_id: course?.id,
              coursesection_id: openLecture?.coursesection_id,
            };
          });
        })
        .catch((e) => console.log(e));
    };

    course?.id &&
      openLecture?.coursesection_id !== "" &&
      openLecture?.lecture_id !== "" &&
      fetchLecture();
  }, [openLecture]);

  const handleOpenSection = (index) => {
    const initialSectionState = opensection[index];
    let section_tmp = Array(coursesection.length).fill(false);
    section_tmp[index] = !initialSectionState;
    setOpensection(section_tmp);
  };

  const handleOpenLecture = (coursesectionId = "", lectureId = "") => {
    coursesectionId !== "" &&
      lectureId !== "" &&
      setOpenLecture({ coursesection_id: coursesectionId, lecture_id: lectureId });
  };

  return {
    opensection: opensection,
    openLecture: openLecture,
    handleOpenLecture: handleOpenLecture,
    handleOpenSection: handleOpenSection,
  };
};
