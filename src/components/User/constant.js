import { InputAdornment } from "@mui/material";

export const textFieldStyle = {
  color: "#3c4852",
  width: "100%",
  marginTop: "1rem",
};
export const inputFields = [
  {
    id: 1,
    name: "full_name",
    label: "Full Name",
    type: "text",
    placeholder: "Full Name",
    inputProps: {
      maxLength: 50,
      startAdornment: (
        <InputAdornment position="start">
          <img src="/images/profile/profile.svg" alt="fullname" />
        </InputAdornment>
      ),
    },
    sx: textFieldStyle,
    required: true,
    error: false,
    helperText: "",
  },
  {
    id: 2,
    name: "address",
    label: "Your Address",
    type: "text",
    placeholder: "Your Address",
    inputProps: {
      maxLength: 520,
      startAdornment: (
        <InputAdornment position="start">
          <img src="/images/profile/address.svg" alt="address" />
        </InputAdornment>
      ),
    },
    sx: textFieldStyle,
    required: true,
    error: false,
    helperText: "",
  },
  {
    id: 3,
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "E-mail Address",
    inputProps: {
      maxLength: 50,
      startAdornment: (
        <InputAdornment position="start">
          <img src="/images/profile/email.svg" alt="email" />
        </InputAdornment>
      ),
    },
    sx: textFieldStyle,
    required: true,
    error: false,
    helperText: "",
  },
  {
    id: 4,
    name: "phone",
    label: "Phone Number",
    type: "text",
    placeholder: "Phone Number",
    inputProps: { maxLength: 20 },
    sx: textFieldStyle,
    required: true,
    error: false,
    helperText: "",
  },
  {
    id: 5,
    name: "city",
    label: "Your City",
    type: "text",
    placeholder: "Your city",
    inputProps: {
      maxLength: 100,
      startAdornment: (
        <InputAdornment position="start">
          <img src="/images/profile/location.svg" alt="city" />
        </InputAdornment>
      ),
    },
    sx: textFieldStyle,
    required: true,
    error: false,
    helperText: "",
  },
  {
    id: 6,
    name: "state",
    label: "State",
    type: "text",
    placeholder: "State of residence",
    inputProps: {
      maxLength: 520,
      startAdornment: (
        <InputAdornment position="start">
          <img src="/images/profile/location2.svg" alt="state" />
        </InputAdornment>
      ),
    },
    sx: textFieldStyle,
    required: true,
    error: false,
    helperText: "",
  },
];
