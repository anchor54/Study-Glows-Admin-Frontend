export const CourseDetailNavbar = ({ refList, scrollTosection, courseType = "academic" }) => {
  const customClass = courseType === "academic" ? "academic" : "nonAcademic";

  return (
    <div className="courseDetailNavbar">
      <ul className={`${customClass} title_medium`}>
        <li onClick={() => scrollTosection(refList.aboutCourseRef)}>About Course</li>
        <li onClick={() => scrollTosection(refList.featureRef)}>Course Content</li>
        <li onClick={() => scrollTosection(refList.facultyRef)}>Course Faculty</li>
        <li onClick={() => scrollTosection(refList.demoRef)}>Demo Videos</li>
        <li onClick={() => scrollTosection(refList.faqRef)}>FAQ</li>
      </ul>
    </div>
  );
};
