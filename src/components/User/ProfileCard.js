import { TextField, Button, Avatar } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import { useProfile } from "./useProfile";
import * as constant from "./constant";

import "./User.scss";

const ProfileCard = () => {
  const { values, profileRef, handleOnChange, handleSubmit } = useProfile();

  return (
    <div className="card">
      <div className="profileImage">
        <div className="wrapper">
          <div
            className="avatar"
            onClick={() => {
              profileRef.current.click();
            }}
          >
            <Avatar
              src={values?.profile_image}
              alt={values?.full_name}
              sx={{ width: 200, height: 200 }}
            />

            {/* <img className="fluid-image" src={values?.profile_image} alt="" /> */}
            <input type="file" name="profile_image" onChange={handleOnChange} ref={profileRef} />
          </div>
          <div>
            <h3>{values?.full_name}</h3>
          </div>
        </div>
      </div>
      <div className="formGroup">
        <form onSubmit={handleSubmit}>
          {constant.inputFields.map((item) =>
            item.name === "phone" ? (
              <PhoneInput
                key={`profile-${item.id}`}
                value={values[item.name]}
                label={item.label}
                country={"in"}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                disabled={true}
                containerClass="phoneContainer"
                inputClass="loginPhone"
              />
            ) : (
              <TextField
                key={`profile-${item.id}`}
                variant="outlined"
                name={item.name}
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                sx={item.sx}
                required={item.required}
                value={values[item.name]}
                InputProps={item.inputProps}
                onChange={handleOnChange}
                error={item.error}
                helperText={item.helperText}
              />
            )
          )}

          <div className="updateButton">
            <Button variant="contained" type="submit">
              Update Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;
