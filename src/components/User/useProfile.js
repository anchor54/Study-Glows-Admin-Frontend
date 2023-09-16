/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import privateAxios from "../../axios/privateAxios";
import { toastAtom } from "../../state/atoms/toastAtom";
import { userAtom } from "../../state/atoms/userAtom";

export const useProfile = () => {
  const profileRef = useRef();
  const [profileImage, setProfileImage] = useState();
  const [values, setValues] = useRecoilState(userAtom);
  const [, setShowToast] = useRecoilState(toastAtom);

  useEffect(() => {
    const fetchProfile = () => {
      privateAxios
        .get("/account/profile")
        .then((res) => {
          setValues(res?.data);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchProfile();
  }, []);

  const handleOnChange = (e) => {
    if (e.target.name === "profile_image") {
      setProfileImage(e.target.files[0]);
      setValues((pre) => ({ ...pre, [e.target.name]: URL.createObjectURL(e.target.files[0]) }));
    } else setValues((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProfile = () => {
      const { profile_image, ...request_body } = values;
      let formdata = new FormData();
      for (let key in request_body) {
        formdata.append(key, request_body[key]);
      }
      profileImage && formdata.append("profile_image", profileImage, profileImage?.name);

      const successToast = {
        status: true,
        type: "success",
        successMessage: "updated successfully",
      };
      privateAxios
        .post("/account/profile", formdata, { headers: { "content-type": "multipart/form-data" } })
        .then((res) => {
          // console.log(res.data);
          setShowToast(successToast);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    updateProfile();
  };

  return {
    values: values,
    profileRef: profileRef,
    handleOnChange: handleOnChange,
    handleSubmit: handleSubmit,
  };
};
