import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: {
    id: "",
    phone: "",
    email: "",
    full_name: "",
    profile_image: "",
    address: "",
    city: "",
    country: "",
    state: "",
  },
});

export { userAtom };
