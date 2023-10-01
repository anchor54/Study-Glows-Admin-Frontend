import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Checkbox, Divider, Grid, Stack } from "@mui/material";
import { courseData } from "./data";
import './CourseGrid.scss';
import publicAxios from "../../axios/publicAxios";
import { useState } from "react";
import { useEffect } from "react";
export const CourseGridView = () => {

  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState();
  const [ins, setIns] = useState();

  const fetchCourseInfo = async () => {
     await publicAxios
          .get('/courses')
          .then((res) => {
            console.log(res.data);
            if (res.status === 200) {
              setCourses(res.data?.data);
              setLoading(false);
            }
          })
          .catch((e) => {
            if (e.response && e.response.status === 404) {
              setCourses(null);
              setLoading(false);
            }
            console.info("error", e);
          });
  }
  const fetchInstructorInfo = async () => {
     await publicAxios
          .get('/instructors')
          .then((instr) => {
            console.log(instr.data);
            if (instr.status === 200) {
              setIns(instr.data);
              // if(instr.data.id === 1){
              //   console.log("FOUND ID 1");
              // }
              setLoading(false);
            }
          })
          .catch((e) => {
            if (e.response && e.response.status === 404) {
              setIns(true);
              setLoading(false);
            }
            console.info("error", e);
          });
  }
    useEffect(() => {
        setLoading(true);
        fetchCourseInfo();
        fetchInstructorInfo();
        console.log("ins",ins);
      }, []);

  return (
    <Box sx={{ height: "100%", width: "100%", overflowY: 'scroll', fontFamily: 'Lato' }}>
      {loading ? (<>Loading</>):(
        <>{courses?(
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {courses.map((course, index) => (
    <Grid item xs={12} sm={4} md={4} key={course.id}>
      {ins?(
      <div style={{ background: 'white', boxShadow:'4px 4px 20px 8px rgba(0, 0, 0, 0.08)', borderRadius: "5px"}}>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={course.thumbnail}
                  style={{ width: "-webkit-fill-available", height: '200px' }}
                  alt="Thumbail"
                />
              </div>
            <Stack direction="column">
              <div className="course-name">{course.title}</div>
              <div className="course-card-body">
                <Stack direction="column" spacing={2}>
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="course-date">May 3, 2022</div>
                    <div className="course-price">₹{course.price}</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="course-date">Duration:</div>
                    <div className="course-price">{course.validity}</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="course-date">Educators:</div>
                    {/* <div className="course-price">{ins[course?.instructor[1]]?.name}</div> */}
                    <div className="course-price text-end">{course.instructor.map((element)=> {
                      return <>{ins[element]?.name}&nbsp;</>
                    })}</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="course-date"><img src="/images/admin/student.svg" alt="" />Student</div>
                    <div className="course-price">2,50,000</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between">
                    <div className="readMore">
                      <Button variant="contained" sx={{ borderRadius: '8px'}}>Read More</Button>
                    </div>
                    <div className="checkbox">
                    <Checkbox />
                    </div>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          </div>
      ):(<>Loading</>)}
    </Grid>
  ))}
</Grid>
        ):(<>No Data</>)}
</> )}
      {/* <Grid container justifyContent="space-between">
        {userData.map((user) => (
        <Grid item lg={4} md={4} xs={12} style={{ borderRadius: '5px', background:'white'}}>
          <div style={{ border:'2px solid green', justifySelf:"center"}}>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Avatar src="/images/Admin/Avatar.png"
                sx={{ width: 90, height: 90 }}
              />
              <div className="student-name">Kanishka Singh</div>
              <div className="card-body">
                <Stack direction="column" spacing={2}>
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="student-date">Department:</div>
                    <div className="student-price">Courses</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="student-date">Role:</div>
                    <div className="student-price">Admin</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="student-date">Phone No:</div>
                    <div className="student-price">+91 123456789</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="student-date">Email:</div>
                    <div className="student-price">kanishkasingh@mail.com</div>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" sx={{ paddingX: '2.5%'}}>
                    <div className="student-date">Address:</div>
                    <div className="student-price">H.I.G.-15 Katju Colony</div>
                  </Stack>
                  <Divider />
                  <div className="readMore">
                    <Button variant="outlined" sx={{ borderRadius: '8px'}}>Read More</Button>
                  </div>
                </Stack>
              </div>
            </Stack>
          </div>
        </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};
