import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchCourse } from "../../../helper/Course/useFetchCourse";

export const useCourseList = (courseType) => {
  const [filterParams] = useSearchParams();
  const initialQueryParameter = {
    page: 1,
    category: filterParams.get("category"),
    category_type: courseType,
  };
  const [queryParameter, setQueryParamter] = useState(initialQueryParameter);
  const [courseData, totalPages, loading] = useFetchCourse(queryParameter);

  useEffect(() => {
    const category = filterParams.get("category");
    category &&
      setQueryParamter((pre) => {
        return { ...pre, category: category, page: 1 };
      });
  }, [filterParams]);

  const handleLoadButton = () => {
    setQueryParamter((pre) => {
      return { ...pre, page: pre?.page + 1 };
    });
  };

  const getCourseRedirectLink = (course) => {
    return `/courses/${courseType}/${course.id}`;
  };

  return {
    loading: loading,
    courseData: courseData,
    totalPages: totalPages,
    queryParameter: queryParameter,
    handleLoadButton: handleLoadButton,
    getCourseRedirectLink: getCourseRedirectLink,
  };
};
