import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import privateAxios from "../../../axios/privateAxios";
import { lectureDetailAtom } from "../../../state/atoms/Lecture/lectureDetailAtom";

export const useLectureDetail = () => {
  const initialStatus = { overview: false, question: false, resource: false };
  const initialVideoSrc = { videoType: "", videoURL: "" };
  const [openStatus, setOpenStatus] = useState(initialStatus);
  const [openDoubtModal, setOpenDoubtModal] = useState(false);
  const lectureDetailData = useRecoilValue(lectureDetailAtom);
  const [videoSrc, setVideoSrc] = useState(initialVideoSrc);

  useEffect(() => {
    setOpenStatus((pre) => ({ ...pre, overview: true }));
  }, []);

  useEffect(() => {
    const video = lectureDetailData?.lecture?.video;
    if (
      video &&
      video?.videoType &&
      video?.videoType !== "" &&
      video?.videoURL &&
      video?.videoURL !== ""
    ) {
      setVideoSrc({ videoType: video?.videoType, videoURL: video?.videoURL });
    } else {
      setVideoSrc(initialVideoSrc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lectureDetailData]);

  const handleOpenStatus = (type) => {
    setOpenStatus(() => {
      return { ...initialStatus, [type]: true };
    });
  };

  const handleDoubtClose = () => {
    setOpenDoubtModal(false);
  };
  const handleDoubtOpen = () => {
    setOpenDoubtModal(true);
  };

  const handleFinishVideo = () => {
    const updateLectureStatus = () => {
      const req_body = {
        course_id: lectureDetailData?.course_id,
        coursesection_id: lectureDetailData?.coursesection_id,
        lecture_id: lectureDetailData?.lecture?.id,
      };
      privateAxios
        .post("/study/mycourses/lecture/progress", req_body)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    };
    lectureDetailData?.lecture &&
      lectureDetailData?.lecture?.complete_status === "" &&
      updateLectureStatus();
  };

  return {
    videoSrc: videoSrc,
    openStatus: openStatus,
    openDoubtModal: openDoubtModal,
    lectureDetailData: lectureDetailData,
    handleOpenStatus: handleOpenStatus,
    handleDoubtOpen: handleDoubtOpen,
    handleDoubtClose: handleDoubtClose,
    handleFinishVideo: handleFinishVideo,
  };
};
