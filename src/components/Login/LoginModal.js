import { Button, Dialog, TextField, FormControlLabel, Checkbox } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { useLogin } from "./useLogin";

import "./Login.scss";

export const LoginModal = ({ open }) => {
  const {
    hero,
    error,
    values,
    toggleParams,
    handleClose,
    handleSubmit,
    handleOnChange,
    handlePhoneOnChange,
  } = useLogin();

  return (
    <Dialog
      className="loginDialog"
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
            <img className="fluid-image" src="/images/login/login.svg" alt="login" />
          </div>
          <div className="right">
            <h1 className="headline_large">{hero.title}</h1>
            <p className="title_medium">{hero.description}</p>
            {error && <span className="message">Incorrect OTP</span>}
            <LoginForm
              values={values}
              handleOnChange={handleOnChange}
              handlePhoneOnChange={handlePhoneOnChange}
              handleSubmit={handleSubmit}
              toggleParams={toggleParams}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const LoginForm = ({ values, handleOnChange, handlePhoneOnChange, handleSubmit, toggleParams }) => {
  return (
    <form onSubmit={handleSubmit}>
      <PhoneInput
        value={values.phone}
        specialLabel={""}
        country={"in"}
        inputProps={{
          name: "phone",
          required: true,
        }}
        disabled={toggleParams?.phoneDisabled}
        inputClass="loginPhone"
        onChange={handlePhoneOnChange}
      />

      {toggleParams?.inputFields.map((item) =>
        item.name === "checkbox" ? (
          <FormControlLabel
            key={`login-${item.id}`}
            label={item.label}
            labelPlacement="end"
            sx={item.sx}
            control={
              <Checkbox name={item.name} checked={values[item.name]} required={item.required} />
            }
          />
        ) : (
          <TextField
            key={`login-${item.id}`}
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

      <div className="loginButtons">
        <Button variant="contained" type="submit">
          Login
        </Button>
        {toggleParams?.showResend && <Button>Resend OTP</Button>}
      </div>
    </form>
  );
};
