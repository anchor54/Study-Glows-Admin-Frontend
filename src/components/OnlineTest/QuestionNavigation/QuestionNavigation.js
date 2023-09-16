import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { selectedSectionAtom } from "../../../state/atoms/OnlineTest/selectedSectionAtom";
import Divider from "../../Tools/Divider";

import "./QuestionNavigation.scss";

export const QuestionNavigation = ({ handleLoadQuestion }) => {
  const [initialQuestionSummary, answerStatusCSS] = getConstants();
  const [questionSummary, setQuestionSummary] = useState(initialQuestionSummary);
  const selectedSection = useRecoilValue(selectedSectionAtom);

  useEffect(() => {
    let _counter = {
      answered: 0,
      not_answer: 0,
      not_visited: 0,
      review_marked: 0,
    };
    selectedSection?.data &&
      selectedSection?.data.length > 0 &&
      selectedSection?.data.map((item) => {
        _counter[item?.status]++;
        return 0;
      });
    setQuestionSummary(_counter);
  }, [selectedSection]);

  return (
    selectedSection && (
      <div className="questionNavigation">
        <div className="questionSummary">
          <div className="wrapper">
            <div className="answered">{questionSummary?.answered}</div>
            <div>Answered</div>
          </div>
          <div className="wrapper">
            <div className="notanswered">{questionSummary?.not_answer}</div>
            <div>Not Answered</div>
          </div>
          <div className="wrapper">
            <div className="notvisited">{questionSummary?.not_visited}</div>
            <div>Not Visited</div>
          </div>
          <div className="wrapper">
            <div className="marked">{questionSummary?.review_marked}</div>
            <div>Marked</div>
          </div>
        </div>
        <Divider customStyle={{ backgroundColor: "#000000" }} />

        <div className="sectionQuestionList">
          {selectedSection?.name !== "" && (
            <p>Section: {selectedSection?.name === "default" ? "All" : selectedSection?.name}</p>
          )}
          <div className="questionsNumber">
            {selectedSection.data.map((item, key) => (
              <div
                className={answerStatusCSS[item?.status]}
                key={`${selectedSection}-q-no-${item?.id}`}
                onClick={() => handleLoadQuestion(item)}
              >
                {item?.sr_no}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

const getConstants = () => {
  const initialQuestionSummary = {
    answered: 0,
    not_answer: 0,
    not_visited: 0,
    review_marked: 0,
  };
  const answerStatusCSS = {
    answered: "answered",
    not_answer: "notanswered",
    not_visited: "notvisited",
    review_marked: "marked",
  };
  return [initialQuestionSummary, answerStatusCSS];
};
