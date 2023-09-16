import { useState } from "react";
import { useRecoilState } from "recoil";
import { Checkbox, TextField, FormControlLabel, Button } from "@mui/material";

import { toastAtom } from "../../state/atoms/toastAtom";
import publicAxios from "../../axios/publicAxios";

const ContactusForm = () => {
  // get Constant values
  const [initialValues, inputFields, successMessage, errorMessage] = getConstantValues();

  // define useState
  const [buttonDisable, setButtonDisable] = useState(false);
  const [, setShowToast] = useRecoilState(toastAtom);
  const [values, setValues] = useState(initialValues);

  // handle form change event
  const handleOnChange = (e) => {
    e.target.name === "checkbox"
      ? setValues((pre) => ({ ...pre, [e.target.name]: e.target.checked }))
      : setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const post_request = () => {
      setButtonDisable(true);
      const successToast = { status: true, type: "success", successMessage: successMessage };
      const errorToast = { status: true, type: "error", errorMessage: errorMessage };

      publicAxios
        .post("/contact_us", values)
        .then((res) => {
          if (res.status === 201) {
            setValues(initialValues);
            setButtonDisable(false);
            setShowToast(successToast);
          }
        })
        .catch((e) => {
          console.info("error", e);

          setValues(initialValues);
          setButtonDisable(false);
          setShowToast(errorToast);
        });
    };
    post_request();
    // console.log(values, e.target);
  };

  return (
    <div>
      <h1 className="display_small">Get In Touch</h1>
      <p className="body_large">
        Have a question or just want to say hi? We'd love to hear from you.
      </p>
      <form onSubmit={handleSubmit}>
        {inputFields.map((item) =>
          item.name === "checkbox" ? (
            <FormControlLabel
              key={item.id}
              label={item.label}
              labelPlacement="end"
              sx={item.sx}
              control={
                <Checkbox
                  name={item.name}
                  checked={values[item.name]}
                  onChange={handleOnChange}
                  required={item.required}
                />
              }
            />
          ) : (
            <TextField
              key={item.id}
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
            />
          )
        )}
        <div>
          <Button variant="contained" type="submit" disabled={buttonDisable}>
            Send Your Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactusForm;

const getConstantValues = () => {
  const textFieldStyle = {
    background: "#F3F4F8",
    color: "#53545B",
    opacity: "0.9",
  };
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    checkbox: false,
  };
  const inputFields = [
    {
      id: 1,
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Your Name",
      inputProps: { maxLength: 50 },
      sx: textFieldStyle,
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Your E-mail",
      inputProps: { maxLength: 50 },
      sx: textFieldStyle,
      required: true,
    },
    {
      id: 3,
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "Phone Number",
      inputProps: { maxLength: 15 },
      sx: { ...textFieldStyle, gridColumn: "1/3" },
      required: true,
    },
    {
      id: 4,
      name: "message",
      label: "Message",
      type: "text",
      placeholder: "Enter Your Message",
      sx: { ...textFieldStyle, gridColumn: "1/3" },
      required: true,
      rows: 4,
      multiline: true,
    },
    {
      id: 5,
      name: "checkbox",
      label: "I agree to the Terms & Conditions.",
      type: "checkbox",
      placeholder: "",
      sx: { gridColumn: "1/3" },
      required: true,
    },
  ];

  const successMessage = "We received your message. We will contact you soon.";
  const errorMessage = "Opps! something went wrong.";

  return [initialValues, inputFields, successMessage, errorMessage];
};
