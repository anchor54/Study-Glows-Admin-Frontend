import { Faculty } from "./Faculty";

export const FacultyCollection = ({ facultyData }) => {
  return (
    <div className="facultyCollection">
      {facultyData &&
        facultyData.map((item) => <Faculty key={`faculty-${item.id}`} faculty={item} />)}
    </div>
  );
};
