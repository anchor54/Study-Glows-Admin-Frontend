import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Stack, Typography } from "@mui/material";

import { useEffect } from "react";
import publicAxios from "../../../axios/publicAxios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import AddCourseForm1 from "../../../components/AdminCourse/AddCourseForm1";
import AddCourseForm2 from "../../../components/AdminCourse/AddCourseForm2";
import AddCourseForm3 from "../../../components/AdminCourse/AddCourseForm3";
import { RESOURCE_TYPE } from "../../../components/AdminCourse/ChapterResourceItem";

export const AddCourse = () => {
  const navigate = useNavigate();
  const totalPages = 3;

  const [loading, setLoading] = useState(false);
  const [instructors, setInstructors] = useState();
  const [allCategories, setAllCategories] = useState(null);
  const [allFeatures, setAllFeatures] = useState([]);
  const [faq, setFaq] = useState([]);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    title: {
      value: "",
      error: false,
      message: "Title is required",
    },
    thumbnail: {
      value: null,
      error: false,
      message: null,
    },
    about: {
      value: "",
      error: false,
      message: null,
    },
    mrp: {
      value: 0,
      error: false,
      message: "MRP is required",
    },
    price: {
      value: 0,
      error: false,
      message: null,
    },
    language: {
      value: "",
      error: false,
      message: null,
    },
    duration: {
      value: 0,
      error: false,
      message: null,
    },
    startDate: {
      value: dayjs().format("YYYY-MM-DD"),
      error: false,
      message: "Start date is required",
    },
    features: {
      value: [],
      error: false,
      message: null,
    },
    instructors: {
      value: [],
      error: false,
      message: "Instructor(s) is required",
    },
    category: {
      value: "",
      error: false,
      message: "Category is required",
    },
    subcategory: {
      value: "",
      error: false,
      message: "Sub-Category is required",
    },
    product: {
      value: "",
      error: false,
      message: "Product code is required",
    },
  });
  const [chapters, setChapters] = useState([]);


  function onNameConfirm(name) {
    setChapters((chapters) => [
      ...chapters,
      { name, id: uuidv4(), resources: [] },
    ]);
    
  }

  function addVideos(chapterId, videos) {
    setChapters((chapters) => {
      const newChapters = [...chapters];
      const selectedChapter = newChapters.find(
        (chapter) => chapter.id === chapterId
      );
      selectedChapter.resources = [
        ...selectedChapter.resources,
        ...videos.map(video => ({
          type: RESOURCE_TYPE.VIDEO,
          id: video.id || uuidv4(),
          file: video
        })),
      ];
      return newChapters;
    });
  }

  function addTests(chapterId, tests) {
    setChapters((chapters) => {
      const newChapters = [...chapters];
      const selectedChapter = newChapters.find(
        (chapter) => chapter.id === chapterId
      );
      selectedChapter.resources = [
        ...selectedChapter.resources,
        ...tests.map(test => ({
          type: RESOURCE_TYPE.TEST,
          id: test.id || uuidv4(),
          file: test
        })),
      ];
      return newChapters;
    });
  }

  function addNotes(chapterId, notes) {
    setChapters((chapters) => {
      const newChapters = [...chapters];
      const selectedChapter = newChapters.find(
        (chapter) => chapter.id === chapterId
      );
      selectedChapter.resources = [
        ...selectedChapter.resources,
        ...notes.map(note => ({
          type: RESOURCE_TYPE.DOCUMENT,
          id: note.id || uuidv4(),
          file: note
        })),
      ];
      return newChapters;
    });
  }

  function onDelete(chapterId, resourceId) {
    setChapters(chapters => {
      if (!resourceId) {
        return chapters.filter(chapter => chapter.id !== chapterId)
      } else {
        const newChapters = [...chapters];
        const selectedChapter = newChapters.find(
          (chapter) => chapter.id === chapterId
        );
        selectedChapter.resources = selectedChapter.resources.filter(resource => resource.id !== resourceId);
        return newChapters;
      }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value,
      },
    });
  }

  function handleStartDateChange(date) {
    setFormData((formData) => ({
      ...formData,
      startDate: {
        ...formData.startDate,
        value: date.format("YYYY-MM-DD"),
      },
    }));
  }

  function handleThumbnailImage(event) {
    console.log(event.target.files);
    setFormData((formData) => ({
      ...formData,
      thumbnail: {
        ...formData,
        value: event.target.files[0],
      },
    }));
  }

  function removeInstructor(instructor) {
    setFormData((formData) => ({
      ...formData,
      instructors: {
        ...formData,
        value: formData.instructors.value.filter((id) => id !== instructor.id),
      },
    }));
  }

  function handleFeatureChange(event) {
    const { name, checked } = event.target;
    setFormData((formData) => ({
      ...formData,
      features: {
        ...formData.features,
        value: checked
          ? formData.features.value.filter((id) => id !== name)
          : [...formData.features.value, name],
      },
    }));
  }

  const getALlInstructors = async () => {
    await publicAxios
      .get("/instructors")
      .then((res) => {
        // console.log(res.data);
        if (res.status === 200) {
          setInstructors(res.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (e.response && e.response.status === 404) {
          setInstructors([]);
          setLoading(false);
        }
        console.info("error", e);
      });
  };
  const getCategoryInfo = async () => {
    await publicAxios
      .get("/course/allcategories")
      .then((res) => {
        if (res.status === 200) {
          setAllCategories(res.data);
        }
      })
      .catch((e) => {
        if (e.response && e.response.status === 404) {
          setAllCategories(null);
        }
        console.info("error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  async function getAllFeatures() {
    const response = await publicAxios("/features");
    if (response.status === 200) {
      setAllFeatures(response.data);
    } else {
      setAllFeatures([]);
    }
  }

  const handleSubmit = () => {
    setLoading(true);
    newCourse();
    // navigate("/addCourse");
    setLoading(false);
  };
  const newCourse = () => {
    const request_body = { ...formData };
    console.log("Request", request_body);
    // publicAxios
    //   .post(`/addcourse`, request_body, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("POSTED DATA ", res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  const goToNextPage = () => {
    if (page === totalPages) {
      handleSubmit();
    } else {
      setPage((page) => page + 1);
    }
  };

  const goToPrevPage = () => {
    setPage((page) => page - 1);
  };

  useEffect(() => {
    setLoading(true);
    getALlInstructors();
    getCategoryInfo();
    getAllFeatures();
    setLoading(false);
  }, []);

  let addCourseForm;
  if (page === 1) {
    addCourseForm = (
      <AddCourseForm1
        formData={formData}
        handleChange={handleChange}
        handleFeatureChange={handleFeatureChange}
        handleStartDateChange={handleStartDateChange}
        handleThumbnailImage={handleThumbnailImage}
        handleSubmit={goToNextPage}
        allCategories={allCategories}
        allFeatures={allFeatures}
        instructors={instructors}
        removeInstructor={removeInstructor}
      />
    );
  } else if (page === 2) {
    addCourseForm = (
      <AddCourseForm2
        courseImage={formData.thumbnail.value}
        courseName={formData.title.value}
        chapters={chapters}
        onNameConfirm={onNameConfirm}
        addVideos={addVideos}
        addTests={addTests}
        addNotes={addNotes}
        onDelete={onDelete}
      />
    );
  } else if (page === 3) {
    addCourseForm = (
      <AddCourseForm3
        courseImage={formData.thumbnail.value}
        courseName={formData.title.value}
      />
    );
  }

  return (
    <div className="main-user-dash">
      <Stack sx={{ width: "90%" }}>
        <div className="all-user-strip">
          <Typography>
            Add Course {page}/{totalPages}
          </Typography>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Stack direction="row" gap={2}>
              <Button
                variant="contained"
                onClick={goToPrevPage}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                onClick={goToNextPage}
              >
                {page === totalPages ? "Submit" : "Next"}
              </Button>
            </Stack>
          </div>
        </div>
        <div className="UserPaper">{addCourseForm}</div>
      </Stack>
    </div>
  );
};
