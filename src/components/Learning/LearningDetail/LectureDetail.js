import { Button } from "@mui/material";
import React from "react";

import Loader from "../../Tools/Loader";
import { DoubtModal } from "./DoubtModal";
import { VideoPlayer } from "../../VideoPlayer/VideoPlayer";
import { useLectureDetail } from "./useLectureDetail";

import "./LearningDetail.scss";

export const LectureDetail = () => {
  const {
    videoSrc,
    openStatus,
    openDoubtModal,
    lectureDetailData,
    handleOpenStatus,
    handleDoubtOpen,
    handleDoubtClose,
    handleFinishVideo,
  } = useLectureDetail();

  return (
    <div>
      {lectureDetailData?.loading ? (
        <Loader />
      ) : (
        <>
          {videoSrc?.videoType !== "" && videoSrc?.videoURL !== "" && (
            <VideoPlayer
              videoId="1"
              videoType={lectureDetailData?.lecture?.video?.videoType}
              videoURL={lectureDetailData?.lecture?.video?.videoURL}
              handleFinishVideo={handleFinishVideo}
            />
          )}
          <div className="lecturedetail">
            <div className="navbar title_large">
              <ul>
                <li
                  className={openStatus?.overview ? "active" : undefined}
                  onClick={() => handleOpenStatus("overview")}
                >
                  Overview
                </li>
                <li
                  className={openStatus?.question ? "active" : undefined}
                  onClick={() => handleOpenStatus("question")}
                >
                  Ask a Doubt
                </li>
                <li
                  className={openStatus?.resource ? "active" : undefined}
                  onClick={() => handleOpenStatus("resource")}
                >
                  Resources
                </li>
              </ul>
            </div>
            <div
              className={`content body_large ${
                openStatus?.overview ? "content-active" : undefined
              }`}
            >
              {lectureDetailData?.lecture?.overview}
            </div>

            <div
              className={`content body_large ${
                openStatus?.question ? "content-active" : undefined
              }`}
            >
              <p className="title_medium">
                You can ask any doubt regarding the course to the Educator.
              </p>
              <Button variant="contained" onClick={handleDoubtOpen}>
                Ask a Doubt
              </Button>
            </div>
            <div
              className={`content body_large ${
                openStatus?.resource ? "content-active" : undefined
              }`}
            >
              {lectureDetailData?.lecture?.resourse &&
                // eslint-disable-next-line array-callback-return
                lectureDetailData?.lecture?.resourse.map((item, key) => {
                  if (item?.type === "project") {
                    return (
                      <React.Fragment key={`lecture-detail-${item?.id}-${key}`}>
                        <h4>Project Description</h4>
                        <p>{item?.project}</p>
                      </React.Fragment>
                    );
                  } else if (item?.type === "notes") {
                    return (
                      <React.Fragment key={`lecture-detail-${item?.id}-${key}`}>
                        <h4>Notes</h4>
                        <p><a href={item?.notes}>{item?.notes}</a></p>
                      </React.Fragment>
                    );
                  } else if (item?.type === "links") {
                    return (
                      <React.Fragment key={`lecture-detail-${item?.id}-${key}`}>
                        <h4>Links</h4>
                        <a href="!#">abc</a>
                      </React.Fragment>
                    );
                  }
                })}
            </div>
            <DoubtModal open={openDoubtModal} handleClose={handleDoubtClose} />
          </div>
        </>
      )}
    </div>
  );
};
