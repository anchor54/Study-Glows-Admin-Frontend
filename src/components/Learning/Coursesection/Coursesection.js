import { Lecturesection } from "./Lecturesection";
import { useCourseSection } from "./useCourseSection";
import { CoursesectionWrapper } from "./CoursesectionWrapper";
import { CoursesectionDropdown } from "./CoursesectionDropdown";

import "./Coursesection.scss";

export const Coursesection = ({ course, coursesection }) => {
  const { opensection, openLecture, handleOpenLecture, handleOpenSection } = useCourseSection(
    course,
    coursesection
  );

  return (
    <div className="coursesection">
      <ul>
        {coursesection.map(
          (item, key) =>
            item?.lecturelist && (
              <li key={`coursesection-key-${key}`}>
                <CoursesectionWrapper
                  section={item?.name}
                  open_status={opensection[key]}
                  index={key}
                  handleOpenSection={handleOpenSection}
                />
                {item?.lecturelist.length > 0 && (
                  <CoursesectionDropdown open_status={opensection[key]}>
                    {item?.lecturelist.map((lecture, lecture_key) => (
                      <Lecturesection
                        key={`lecturesection-${lecture?.id}`}
                        count={lecture_key}
                        lecture={lecture}
                        coursesectionId={item?.id}
                        openLecture={openLecture}
                        handleOpenLecture={handleOpenLecture}
                      />
                    ))}
                  </CoursesectionDropdown>
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
};
