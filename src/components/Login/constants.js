export const title1 = "Enter Phone Number";
export const title2 = "Enter OTP";
export const description1 = "6 Digit OTP will be sent via SMS to verify your phone number";
export const description2 = "We've sent an OTP to your registered mobile number";
export const initialValues = { phone: "+91", country_code: "in", country_dialcode: "91", otp: "", full_name: "", email: "", state: "" };
export const initialHero = {
  title: title1,
  description: description1,
};
export const initialToggleParams = {
  phoneDisabled: false,
  showResend: false,
  inputFields: [],
  loginStep: 1,
};
export const textFieldStyle = {
  color: "#3c4852",
  width: "100%",
  marginTop: "1rem",
};
export const inputFields = [
  {
    id: 1,
    name: "otp",
    label: "OTP",
    type: "text",
    placeholder: "One Time Password",
    inputProps: { maxLength: 6, minLength: 6 },
    sx: textFieldStyle,
    required: true,
  },
  {
    id: 2,
    name: "full_name",
    label: "Full Name",
    type: "text",
    placeholder: "Full Name",
    inputProps: { maxLength: 50 },
    sx: textFieldStyle,
    required: true,
  },
  {
    id: 3,
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "E-mail Address",
    inputProps: { maxLength: 50 },
    sx: textFieldStyle,
    required: true,
  },
  {
    id: 4,
    name: "state",
    label: "State",
    type: "text",
    placeholder: "State of residence",
    inputProps: { maxLength: 50 },
    sx: textFieldStyle,
    required: true,
  },
  {
    id: 5,
    name: "checkbox",
    label: "I agree to Study Glows' Terms & Privacy policy.",
    type: "checkbox",
    placeholder: "",
    sx: textFieldStyle,
    required: true,
  },
];
