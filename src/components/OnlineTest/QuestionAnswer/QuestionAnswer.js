import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

import Loader from "../../Tools/Loader";
import Divider from "../../Tools/Divider";
import { useQuestionAnswer } from "./useQuestionAnswer";
import { SubmitModal } from "./SubmitModal";
import { useSubmitOnlineTest } from "../useSubmitOnlineTest";

import "./QuestionAnswer.scss";

export const QuestionAnswer = ({ onlineTestData }) => {
  const {
    loading,
    showNextBtn,
    disabledBtn,
    questionData,
    openSubmitModal,
    questionAnswerValues,
    selectedQuestionAnswer,
    handleOnchange,
    handleSaveQuestion,
    handleClearResponse,
    handleOpenSubmitModal,
    handleCloseSubmitModal,
  } = useQuestionAnswer(onlineTestData);

  const [handleSubmitTest] = useSubmitOnlineTest(onlineTestData);

  return (
    <>
      <div className="questionAnswer">
        <div className="toolsButton">
          <div className="questions">
            <Button
              variant="contained"
              onClick={() => handleSaveQuestion("review_marked")}
              disabled={disabledBtn}
            >
              Mark for Review {showNextBtn && "& Next"}
            </Button>
            <Button variant="contained" disabled={disabledBtn} onClick={handleClearResponse}>
              Clear Response
            </Button>
          </div>
          <div className="submit">
            <Button variant="contained" onClick={handleOpenSubmitModal}>
              Submit Test
            </Button>
          </div>
        </div>
        <Divider customStyle={{ backgroundColor: "#0474ba" }} />

        {loading ? (
          <Loader />
        ) : (
          <div className="questionOption">
            <p className="title_large">
              Question no. <span>{selectedQuestionAnswer?.sr_no}</span>
            </p>
            <p className="body_large">{questionData?.question}</p>
            {questionData?.type === "mcq" && (
              <div className="options">
                {questionData?.options && (
                  <RadioGroup
                    aria-labelledby="questionOption-label"
                    name="option_id"
                    value={questionAnswerValues?.option_id}
                  >
                    {questionData?.options.map((item) => (
                      <FormControlLabel
                        key={`option-key-${item?.id}`}
                        value={item?.id}
                        control={<Radio />}
                        label={item?.option}
                        onChange={handleOnchange}
                      />
                    ))}
                  </RadioGroup>
                )}
              </div>
            )}
            {questionData?.type === "cq" && (
              <div className="answer">
                <TextField
                  rows={6}
                  type="text"
                  name="answer"
                  variant="outlined"
                  placeholder="Type your answer"
                  multiline={true}
                  value={questionAnswerValues?.answer}
                  onChange={handleOnchange}
                  sx={{width:"100%", margin: "1rem 0"}}
                />
              </div>
            )}

            <div className="next">
              <Button variant="contained" onClick={() => handleSaveQuestion()}>
                Save {showNextBtn && "& Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
      <SubmitModal
        handleClose={handleCloseSubmitModal}
        open={openSubmitModal}
        handleSubmitTest={handleSubmitTest}
      />
    </>
  );
};
