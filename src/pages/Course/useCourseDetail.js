/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import publicAxios from "../../axios/publicAxios";
import { courseAtom } from "../../state/atoms/Course/courseAtom";

export const useCourseDetail = () => {
  const aboutCourseRef = useRef(null);
  const featureRef = useRef(null);
  const facultyRef = useRef(null);
  const demoRef = useRef(null);
  const faqRef = useRef(null);
  const refList = {
    aboutCourseRef: aboutCourseRef,
    featureRef: featureRef,
    facultyRef: facultyRef,
    demoRef: demoRef,
    faqRef: faqRef,
  };
  const params = useParams();
  const [, setCourseDetail] = useRecoilState(courseAtom);

  const scrollTosection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const loadCourse = (courseId) => {
      publicAxios
        .get(`/course/${courseId}`)
        .then((res) => {
          setCourseDetail(res.data);
        })
        .catch((e) => {
          console.info("error", e);
        });
    };
    params.courseId && loadCourse(params.courseId);
  }, []);

  return {
    refList: refList,
    scrollTosection: scrollTosection,
  };
};
