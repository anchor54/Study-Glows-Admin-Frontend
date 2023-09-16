import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import { Container } from "@mui/system";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import CourseCard from "../../Course/CourseCard/CourseCard";
import { useFetchCourseLimit } from "../../../helper/Course/useFetchCourseLimit";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./MyCourse.scss";

const SimilarCourse = () => {
  const [courseData, loading] = useFetchCourseLimit();

  const getCourseRedirectLink = (course) => {
    const courseType = "academic";
    return `/courses/${courseType}/${course.id}`;
  };

  const swiperSetting = {
    slidesPerView: "auto",
    // spaceBetween: 30,
    className: "mySwiper",
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    /* modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    }, */
  };

  return (
    <div className="courseContainer">
      <h1>Similar Courses </h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="content">
        {loading && <Loader />}
        <Swiper {...swiperSetting}>
          {courseData.map((item) => (
            <SwiperSlide key={`similar-course-${item.id}`}>
              <CourseCard course={item} courseRedirect={getCourseRedirectLink(item)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarCourse;
