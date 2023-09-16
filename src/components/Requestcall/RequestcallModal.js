import CloseIcon from "@mui/icons-material/Close";
import { Button, Dialog, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { toastAtom } from "../../state/atoms/toastAtom";
import publicAxios from "../../axios/publicAxios";

const RequestcallModal = ({ open, handleClose }) => {
  // get Constant values
  const [initialValues, inputFields, successMessage, errorMessage] = getConstantValues();

  // define useState
  const [values, setValues] = useState(initialValues);
  const [, setShowToast] = useRecoilState(toastAtom);
  const [buttonDisable, setButtonDisable] = useState(false);

  // handle form change event
  const hanleOnChange = (e) => setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const post_request = () => {
      const successToast = { status: true, type: "success", successMessage: successMessage };
      const errorToast = { status: true, type: "error", errorMessage: errorMessage };

      setButtonDisable(true);
      publicAxios
        .post("/request_callback", values)
        .then((res) => {
          if (res.status === 201) {
            setValues(initialValues);
            setButtonDisable(false);
            handleClose();
            setShowToast(successToast);
          }
        })
        .catch((e) => {
          console.info("error", e);

          setValues(initialValues);
          setButtonDisable(false);
          handleClose();
          setShowToast(errorToast);
        });
    };
    post_request();
    // console.log(values);
  };

  return (
    <Dialog className="dialog" open={open} onClose={handleClose}>
      <div className="title">
        <div>
          <p>REQUEST A CALL BACK</p>
        </div>
        <div>
          <IconButton aria-label="close" onClick={handleClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <div className="content">
        <p>Leave your details and we will call you back!</p>
        <form onSubmit={handleSubmit}>
          {inputFields.map((item) =>
            item.type === "tel" ? (
              <PhoneInput
                key={`requestcallback-${item.id}`}
                specialLabel={""}
                country={"in"}
                inputProps={item.inputProps}
                inputClass="phoneInput"
                value={values[item.name]}
                onChange={(phone) => setValues((pre) => ({ ...pre, phone: phone }))}
              />
            ) : (
              <TextField
                key={`requestcallback-${item.id}`}
                variant="standard"
                name={item.name}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                sx={item.sx}
                required={item.required}
                value={values[item.name]}
                inputProps={item.inputProps}
                onChange={hanleOnChange}
              />
            )
          )}
          <Button variant="contained" type="submit" disabled={buttonDisable}>
            Submit
          </Button>
        </form>
      </div>
    </Dialog>
  );
};

export default RequestcallModal;

const getConstantValues = () => {
  const initialValues = { name: "", email: "", phone: "+91" };
  const inputFields = [
    {
      id: 1,
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Name",
      inputProps: { maxLength: 50 },
      sx: { margin: "0.5rem 0" },
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "E-mail",
      inputProps: { maxLength: 50 },
      sx: { margin: "0.5rem 0" },
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      inputProps: {
        name: "phone",
        required: true,
        minLength: 10,
        placeholder: "phone",
      },
    },
  ];

  const successMessage = "We received your message. We will contact you soon.";
  const errorMessage = "Opps! something went wrong.";

  return [initialValues, inputFields, successMessage, errorMessage];
};
