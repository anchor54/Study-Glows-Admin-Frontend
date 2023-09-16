import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Lecturesection = ({
  lecture,
  openLecture,
  coursesectionId,
  handleOpenLecture,
  count = 1,
}) => {
  const old_even = count % 2 === 0 ? "even" : " odd";
  return (
    <li>
      <div
        className={`coursesection-item-wrapper ${old_even}`}
        onClick={() => {
          handleOpenLecture(coursesectionId, lecture?.id);
        }}
      >
        <div>
          <div className="title_medium">{lecture?.name}</div>
          <div className="duration label_large">10 Min</div>
        </div>
        <div className="wrapper-2">
          <div>
            {lecture?.complete_status && (
              <CheckCircleIcon fontSize="sm" color="primary" variant="outlined" />
            )}
          </div>
          <div className="duration label_large">
            {lecture?.id === openLecture?.lecture_id &&
              coursesectionId === openLecture?.coursesection_id &&
              "Now Playing"}
          </div>
        </div>
      </div>
    </li>
  );
};
