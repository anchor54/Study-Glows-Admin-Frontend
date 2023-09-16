import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import publicAxios from "../../axios/publicAxios";
import { authAtom } from "../../state/atoms/authAtom";
import { loginPopupAtom } from "../../state/atoms/loginPopupAtom";
import { userAtom } from "../../state/atoms/userAtom";
import { setAuthTokens } from "../../axios/tokens";

import * as constant from "./constants";

export const useLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hero, setHero] = useState(constant.initialHero);
  const [toggleParams, setToggleParams] = useState(constant.initialToggleParams);
  const [values, setValues] = useState(constant.initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [, setAuth] = useRecoilState(authAtom);
  const [, setUser] = useRecoilState(userAtom);
  const [, setLoginPopup] = useRecoilState(loginPopupAtom);

  const showOtpForm = (new_user = false) => {
    setHero({
      title: constant.title2,
      description: constant.description2,
    });

    setToggleParams({
      phoneDisabled: true,
      showResend: true,
      inputFields: new_user ? constant.inputFields : constant.inputFields.slice(0, 1),
      loginStep: 2,
    });
  };

  const handleClose = () => {
    setLoginPopup(false);
  };

  // send OTP
  const sendOTP = (resend = false) => {
    setLoading(true);
    const request_body = {
      phone: values.phone.slice(values.country_dialcode.length),
      country_code: values.country_code.toUpperCase(),
      resend: resend,
    };
    publicAxios
      .post("account/send-otp", request_body)
      .then((res) => {
        let resp = res.data;
        if (resp.message === "success") {
          setLoading(false);
          showOtpForm(resp?.new_user);
          // console.log(resp);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.info("error", e);
      });
  };

  // verify otp
  const verifyOTP = () => {
    setLoading(true);
    const request_body = {
      ...values,
      phone: values.phone.slice(values.country_dialcode.length),
      country_code: values.country_code.toUpperCase(),
    };
    publicAxios
      .post("account/verify-otp", request_body)
      .then((res) => {
        let resp = res.data;
        if (resp.message === "success") {
          setLoading(false);
          setError(false);

          // update and set access and refresh token
          const access_data = {
            access: resp?.access,
            refresh: resp?.refresh,
          };
          setAuthTokens(access_data.access, access_data.refresh);
          setAuth(access_data);
          setUser((pre) => ({ ...pre, ...resp?.user }));
          const { from } = location.state || { from: location };
          navigate(from, { replace: true });

          handleClose();
        }
      })
      .catch((e) => {
        setLoading(false);
        if (e?.response?.status === 400 && e?.response?.data?.message === "otp is incorrect") {
          setError(true);
        }
      });
  };

  // handle on change phone number
  const handlePhoneOnChange = (phone, country) => {
    setValues((pre) => ({
      ...pre,
      phone: phone,
      country_code: country.countryCode,
      country_dialcode: country.dialCode,
    }));
  };

  // handle form change
  const handleOnChange = (e) => {
    setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  // handle Submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleParams.loginStep === 1 ? sendOTP() : verifyOTP();
  };

  return {
    hero: hero,
    error: error,
    values: values,
    loading: loading,
    toggleParams: toggleParams,
    sendOTP: sendOTP,
    setValues: setValues,
    verifyOTP: verifyOTP,
    handleClose: handleClose,
    handleSubmit: handleSubmit,
    handleOnChange: handleOnChange,
    handlePhoneOnChange: handlePhoneOnChange,
  };
};
