import { Container } from "@mui/material";
import { useRecoilValue } from "recoil";

import { Faq } from "../../components/Faq/Faq";
import { useCourseDetail } from "./useCourseDetail";
import { useSmoothScroll } from "../../helper/useSmoothScroll";
import { AndroidApp2 } from "../../components/AndroidApp/AndroidApp2";
import { DemoVideos } from "../../components/Course/CourseDetail/DemoVideos";
import { AboutCourse } from "../../components/Course/CourseDetail/AboutCourse";
import { CourseFaculty } from "../../components/Course/CourseDetail/CourseFaculty";
import { CourseCurriculumn } from "../../components/Course/CourseDetail/CourseCurriculumn";
import { CourseDetailNavbar } from "../../components/Course/CourseDetail/CourseDetailNavbar";
import { CourseThumbnailShortDetail } from "../../components/Course/CourseDetail/CourseThumbnailShortDetail";
import { courseAtom } from "../../state/atoms/Course/courseAtom";
import Requestcall from "../../components/Requestcall/Requestcall";

import "../../components/Course/CourseDetail/CourseDetail.scss";

export const CourseDetail = ({ courseType = "academic" }) => {
  useSmoothScroll();
  courseType = courseType === "academic" ? "academic" : "nonAcademic";
  const courseDetail = useRecoilValue(courseAtom);
  const { refList, scrollTosection } = useCourseDetail(courseType);

  return (
    <Container>
      <CourseDetailNavbar
        refList={refList}
        scrollTosection={scrollTosection}
        courseType={courseType}
      />
      <CourseThumbnailShortDetail courseType={courseType} />
      <AboutCourse refName={refList?.aboutCourseRef} />
      <CourseCurriculumn
        refName={refList?.featureRef}
        curriculumnData={courseDetail?.coursesection}
      />
      <CourseFaculty refName={refList?.facultyRef} facultyData={courseDetail?.instructor} />
      <DemoVideos refName={refList?.demoRef} demoVideoData={courseDetail?.demo_video} />
      <Faq refName={refList?.faqRef} faqData={courseDetail?.faq} />
      <AndroidApp2 />
      <Requestcall />
    </Container>
  );
};
