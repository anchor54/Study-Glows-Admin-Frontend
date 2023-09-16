import { FacultyCollection } from "../../Faculty/FacultyCollection";

export const CourseFaculty = ({ refName = null, facultyData }) => {
  return (
    <div className="courseFacultySection" ref={refName}>
      {facultyData && facultyData.length && (
        <>
          <h2 className="display_small">Under the guidance of our best faculty</h2>
          <FacultyCollection facultyData={facultyData} />
        </>
      )}
    </div>
  );
};
