import { atom } from "recoil";

const lectureDetailAtom = atom({
  key: "lectureDetailAtom",
  default: {
    loading: true,
    lecture: {
      id: "",
      resourse: [],
      video: {
        videoType: "",
        videoURL: "",
      },
      name: "",
      overview: "",
    },
    course_id: "",
    coursesection_id: "",
  },
});

export { lectureDetailAtom };
