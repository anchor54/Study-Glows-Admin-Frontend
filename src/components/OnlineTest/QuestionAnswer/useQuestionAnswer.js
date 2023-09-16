/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { selectedQuestionAnswerAtom } from "../../../state/atoms/OnlineTest/selectedQuestionAnswerAtom";
import { selectedSectionAtom } from "../../../state/atoms/OnlineTest/selectedSectionAtom";
import privateAxios from "../../../axios/privateAxios";
import { sectionDataAtom } from "../../../state/atoms/OnlineTest/sectionDataAtom";

const initialQuestionAnswerValue = {
  questionAnswer_id: "",
  option_id: "",
  answer: "",
};

export const useQuestionAnswer = (onlineTestData) => {
  const [loading, setLoading] = useState(true);
  const [questionData, setQuestionData] = useState();
  const [showNextBtn, setShowNextBtn] = useState(true);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [selectedSection, setSelectedSection] = useRecoilState(selectedSectionAtom);
  const [questionAnswerValues, setQuestionAnswerValues] = useState(initialQuestionAnswerValue);
  const [selectedQuestionAnswer, setSeletedQuestionAnswer] = useRecoilState(
    selectedQuestionAnswerAtom
  );
  const sectionData = useRecoilValue(sectionDataAtom);

  /** when section changes load 1st question in that section */
  useEffect(() => {
    selectedSection?.data &&
      selectedSection?.data.length > 0 &&
      setSeletedQuestionAnswer(selectedSection?.data[0]);
  }, [selectedSection?.name]);

  /** when selectedQuestionAnswer status is changed load next question */
  useEffect(() => {
    handleNextQuestion("load");
  }, [selectedSection?.data]);

  /** when selectedQuestionAnswer status is changes */
  useEffect(() => {
    setSelectedSection((pre) => {
      const data = pre?.data;
      for (let i = 0; i < data.length; i++) {
        if (
          data[i]?.id === selectedQuestionAnswer?.id &&
          data[i].status !== selectedQuestionAnswer.status
        ) {
          return {
            ...pre,
            data: [...data.slice(0, i), selectedQuestionAnswer, ...data.slice(i + 1)],
          };
        }
      }
      return pre;
    });
  }, [selectedQuestionAnswer?.status]);

  /** when selectedQuestionAnswer changes fetch question */
  useEffect(() => {
    const loadQuestion = (questionAnswerId, onlineTestId) => {
      setLoading(true);
      privateAxios
        .get(`/onlinetest/${onlineTestId}/question`, {
          params: { questionAnswer_id: questionAnswerId },
        })
        .then((res) => {
          const questionAnswer = res?.data;
          setLoading(false);
          setQuestionData(questionAnswer?.question);
          setQuestionAnswerValues({
            questionAnswer_id: questionAnswerId,
            option_id: questionAnswer?.selected_option,
            answer: questionAnswer?.answer,
          });

          handleNextQuestion() ? setShowNextBtn(true) : setShowNextBtn(false);
        })
        .catch((e) => console.log(e));
    };

    selectedQuestionAnswer?.id &&
      onlineTestData?.id &&
      loadQuestion(selectedQuestionAnswer?.id, onlineTestData?.id);
  }, [selectedQuestionAnswer?.id]);

  /** function for answer to the selectedQuestionAnswer */
  const handleSaveQuestion = (questionStatus = "") => {
    const submitQuestion = (questionStatus, onlineTestId) => {
      const req_body = {
        ...questionAnswerValues,
        question_status: questionStatus,
      };
      privateAxios
        .post(`/onlinetest/${onlineTestId}/question`, req_body)
        .then((res) => {
          setSeletedQuestionAnswer((pre) => ({ ...pre, status: res?.data?.status }));
        })
        .catch((e) => console.log(e));
    };

    if (questionStatus === "") {
      if (questionAnswerValues?.answer !== "" || questionAnswerValues?.option_id !== "") {
        questionStatus = "answered";
      } else {
        questionStatus = "not_answer";
      }
    }

    if (questionStatus === selectedQuestionAnswer?.status) {
      handleNextQuestion("load");
      return;
    }
    onlineTestData?.id && submitQuestion(questionStatus, onlineTestData?.id);
  };

  /**function to check and load next question :: action enum: check, load */
  const handleNextQuestion = (action = "check") => {
    /** check next question in the selectedSection */
    const data = selectedSection?.data;
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.sr_no === selectedQuestionAnswer?.sr_no + 1) {
        action === "load" && setSeletedQuestionAnswer(data[i]);
        return true;
      }
    }

    /** check next question in the sectionData(probably next section) */
    const sectionsNameList = Object.keys(sectionData);
    if (sectionsNameList.length > 1) {
      for (let i = 0; i < sectionsNameList.length; i++) {
        if (sectionsNameList[i] === selectedSection?.name && i + 1 < sectionsNameList.length) {
          const next_selectedsection = sectionData[sectionsNameList[i + 1]];
          action === "load" && setSelectedSection(next_selectedsection);
          return true;
        }
      }
    }
    return false;
  };

  /** function to clear responses of selectedQuestionAnswer */
  const handleClearResponse = () => {
    selectedQuestionAnswer?.id &&
      setQuestionAnswerValues({
        ...initialQuestionAnswerValue,
        questionAnswer_id: selectedQuestionAnswer?.id,
      });
  };

  /** function when user update the answer */
  const handleOnchange = (e) => {
    setQuestionAnswerValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleOpenSubmitModal = () => {
    setOpenSubmitModal(true);
  };
  const handleCloseSubmitModal = () => {
    setOpenSubmitModal(false);
  };

  const disabledBtn =
    questionAnswerValues?.option_id !== "" || questionAnswerValues?.answer !== "" ? false : true;

  return {
    loading: loading,
    showNextBtn: showNextBtn,
    disabledBtn: disabledBtn,
    questionData: questionData,
    openSubmitModal: openSubmitModal,
    selectedQuestionAnswer: selectedQuestionAnswer,
    questionAnswerValues: questionAnswerValues,
    handleOnchange: handleOnchange,
    handleSaveQuestion: handleSaveQuestion,
    handleClearResponse: handleClearResponse,
    handleOpenSubmitModal: handleOpenSubmitModal,
    handleCloseSubmitModal: handleCloseSubmitModal,
  };
};
