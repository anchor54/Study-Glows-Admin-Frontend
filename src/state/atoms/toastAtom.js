import { atom } from "recoil";

const initialToastValues = {
  status: false,
  type: "success",
  successMessage: "",
  errorMessage: "",
};

const toastAtom = atom({
  key: "toastAtom",
  default: initialToastValues,
});

export { toastAtom, initialToastValues };
