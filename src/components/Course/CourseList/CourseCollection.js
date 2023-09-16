import { AcademicList } from "./AcademicList";
import { NonAcademicList } from "./NonAcademicList";

const CourseCollection = ({ courseType = "academic" }) => {
  return (
    <div className="courseCollection">
      {courseType === "academic" ? <AcademicList /> : <NonAcademicList />}
    </div>
  );
};

export default CourseCollection;
