import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { authAtom } from "../../state/atoms/authAtom";
import { loginPopupAtom } from "../../state/atoms/loginPopupAtom";

import privateAxios from "../../axios/privateAxios";

export const useSaveUnsave = (blog) => {
  const [error, setError] = useState(false);
  const [save, setSave] = useState(false);
  const auth = useRecoilValue(authAtom);
  const [, setLoginPopup] = useRecoilState(loginPopupAtom);

  useEffect(() => {
    blog?.saved && blog?.saved === true && setSave(true);
  }, [blog.saved]);

  const handleSave = () => {
    const saveBlog = (id) => {
      privateAxios
        .post(`/blog/${id}/save`)
        .then((res) => {
          setSave(true);
        })
        .catch((e) => {
          setError(true);
          console.log("error", e);
        });
    };

    // check the status of logged in
    if (!auth) {
      setLoginPopup(true);
    } else blog.id && saveBlog(blog.id);
  };

  const handleUnsave = () => {
    const unSaveBlog = (id) => {
      privateAxios
        .post(`/blog/${id}/unsave`)
        .then((res) => {
          setSave(false);
        })
        .catch((e) => {
          setError(true);
          console.log("error", e);
        });
    };

    // check the status of logged in
    if (!auth) {
      setLoginPopup(true);
    } else blog.id && unSaveBlog(blog.id);
  };

  return [save, handleSave, handleUnsave, error];
};
