import { useState } from "react";
import { Button, Dialog, TextField } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";

import privateAxios from "../../../axios/privateAxios";
import { toastAtom } from "../../../state/atoms/toastAtom";
import { lectureDetailAtom } from "../../../state/atoms/Lecture/lectureDetailAtom";

import "./DoubtModal.scss";

export const DoubtModal = ({ open, handleClose }) => {
  const [initialValues, inputFields, successMessage] = getConstantValues();
  const [values, setValues] = useState(initialValues);
  const lectureDetailData = useRecoilValue(lectureDetailAtom);
  const [, setShowToast] = useRecoilState(toastAtom);

  const handleOnChange = (e) => setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    const askDoubt = () => {
      const req_body = {
        ...values,
        course: lectureDetailData?.course_id,
        coursesection: lectureDetailData?.coursesection_id,
        lecture: lectureDetailData?.lecture?.id,
      };

      const successToast = {
        status: true,
        type: "success",
        successMessage: successMessage,
      };
      privateAxios
        .post("/lecture/askdoubt", req_body)
        .then((res) => {
          if (res?.status === 201) {
            setShowToast(successToast);
            setValues(initialValues);
            handleClose();
          }
        })
        .catch((e) => console.log(e));
    };
    e.preventDefault();
    values?.subject !== "" && values?.query !== "" && askDoubt();
  };

  return (
    <Dialog
      className="doubtDialog"
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { overflowY: "visible" } }}
      maxWidth="md"
    >
      <div className="closeIcon" onClick={handleClose}>
        <img className="fluid-image" src="/images/login/close.svg" alt="close" />
      </div>
      <div className="content">
        <div className="wrapper">
          <div>
            <img className="fluid-image" src="/images/courses/doubt.svg" alt="doubt" />
          </div>
          <div className="right">
            <h1>Ask a Doubt</h1>
            <form onSubmit={handleSubmit}>
              {inputFields.map((item) => (
                <TextField
                  key={`doubt-${item.id}`}
                  variant="outlined"
                  name={item.name}
                  label={item.label}
                  type={item.type}
                  placeholder={item.placeholder}
                  sx={item.sx}
                  required={item.required}
                  value={values[item.name]}
                  inputProps={item.inputProps}
                  multiline={item.multiline}
                  rows={item.rows}
                  onChange={handleOnChange}
                  margin="dense"
                  InputLabelProps={{ shrink: false }}
                />
              ))}

              <div className="doubtButtons">
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const getConstantValues = () => {
  const initialValues = { subject: "", query: "" };
  const textFieldStyle = {
    background: "#F3F4F8",
    color: "#53545B",
    opacity: "0.9",
    width: "100%",
    borderRadius: "0.5rem",
  };
  const inputFields = [
    {
      id: 1,
      name: "subject",
      // label: "Subject",
      type: "text",
      placeholder: "Subject",
      inputProps: { maxLength: 150 },
      sx: { ...textFieldStyle },
      required: true,
    },
    {
      id: 2,
      name: "query",
      // label: "Query",
      type: "text",
      placeholder: "Enter Your Query",
      sx: { ...textFieldStyle },
      required: true,
      rows: 4,
      multiline: true,
    },
  ];

  const successMessage = "Our educator will look into your doubt soon!";
  const errorMessage = "Opps! something went wrong.";

  return [initialValues, inputFields, successMessage, errorMessage];
};
