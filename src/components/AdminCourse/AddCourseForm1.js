import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CancelIcon from "@mui/icons-material/Cancel";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {
  Button,
  Stack,
  Grid,
  Divider,
  Typography,
  TextField,
  Checkbox,
  Chip,
  ListItem,
  Paper,
  styled,
  Select,
  MenuItem,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

function AddCourseForm1({
  formData,
  handleChange,
  handleFeatureChange,
  handleStartDateChange,
  handleThumbnailImage,
  handleSubmit,
  allCategories,
  allFeatures,
  instructors,
  removeInstructor,
}) {
  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;

  return (
    <Grid container justifyContent="space-between" alignItems="space-between">
      <Grid item xs={12} md={4}>
        <div className="left-side-profile">
          <Stack
            direction="column"
            sx={{
              background: "#FFF",
              boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
              borderRadius: "5px",
            }}
          >
            <Grid
              className="profile-card"
              container
              gap={3}
              justifyContent="center"
              marginBottom={2}
            >
              <Grid item xs={12} justifyContent="center">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <Button
                            role={undefined}
                            variant="outlined"
                            > */}
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    // color="neutral"
                  >
                    <img
                      src={
                        formData.thumbnail.value
                          ? URL.createObjectURL(formData.thumbnail.value)
                          : "/images/admin/addCourseImage.png"
                      }
                      height={200}
                      width={250}
                      style={{ objectFit: "contain" }}
                      alt="Course Thumbnail"
                    />
                    {/* Upload the Thumbnail */}
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleThumbnailImage}
                    />
                  </Button>
                </div>
              </Grid>
              <span style={{ fontWeight: "bold" }}>Name of the course</span>
              <Divider sx={{ marginTop: "5%", marginBottom: "5%" }} />
            </Grid>
          </Stack>
          <Stack
            direction="column"
            sx={{
              background: "#FFF",
              boxShadow: "4px 4px 20px 8px rgba(0, 0, 0, 0.08)",
              marginTop: "5%",
              paddingTop: "5%",
              borderRadius: "5px",
            }}
          >
            <Grid
              className="profile-card"
              container
              gap={3}
              sx={{ textAlign: "start" }}
            >
              <Grid item xs={12}>
                <Stack
                  direction="column"
                  justifyContent="space-around"
                  sx={{ paddingX: "3%" }}
                >
                  <div className="course-date">About Course</div>
                  <div
                    className="course-price"
                    style={{ marginTop: "2%", marginoBottom: "2%" }}
                  >
                    <Typography variant="caption">
                      Lorem Ipsum is simply dummy text ofthe printing and
                      typesetting
                    </Typography>
                  </div>
                </Stack>
                <Divider sx={{ marginTop: "5%" }} />
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ paddingX: "3%" }}
                >
                  <div className="course-price">Duration</div>
                  <div className="course-date">12 Months</div>
                </Stack>
                <Divider sx={{ marginTop: "5%" }} />
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ paddingX: "3%" }}
                  alignItems="center"
                >
                  <div className="course-price">Professor</div>
                  <div className="course-date" style={{ fontSize: "0.8rem" }}>
                    Siddhant Agnihotri, Kanishka Singh
                  </div>
                </Stack>
                <Divider sx={{ marginTop: "5%" }} />
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ paddingX: "3%" }}
                >
                  <div className="course-price">Price</div>
                  <div className="course-date">₹200</div>
                </Stack>
                <Divider sx={{ marginTop: "5%" }} />
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ paddingX: "3%" }}
                >
                  <div className="course-price">Date Launched</div>
                  <div className="course-date">07 August 2021</div>
                </Stack>
                <Divider sx={{ marginTop: "5%" }} />
              </Grid>
            </Grid>
          </Stack>
        </div>
      </Grid>
      <Grid item xs={12} md={8}>
        <FormGroup
          className="right-side-profile"
          style={{ background: "white" }}
        >
          <Stack>
            <div
              style={{
                textAlign: "start",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              <Typography>Course Name</Typography>
            </div>
            <div style={{ marginBottom: "1.2rem" }}>
              <TextField
                name="title"
                onChange={handleChange}
                value={formData.title.value}
                fullWidth
                error={formData.title.error}
                helperText={formData.title.error && formData.title.message}
              />
            </div>
            <div
              style={{
                textAlign: "start",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              <Typography>Course Description</Typography>
            </div>
            <div style={{ marginBottom: "1.2rem" }}>
              <TextField
                name="about"
                onChange={handleChange}
                value={formData.about.value}
                fullWidth
                error={formData.about.error}
                helperText={formData.about.error && formData.about.message}
              />
            </div>
            <div
              style={{
                textAlign: "start",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              <Typography>Course Features</Typography>
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <FormGroup row fullWidth>
                <Grid container>
                  {allFeatures.map((feature) => (
                    <Grid item sm={4}>
                      <FormControlLabel
                        name={feature.id}
                        control={<Checkbox onChange={handleFeatureChange} />}
                        label={feature.name}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </div>
            <div
              style={{
                textAlign: "start",
                color: "#666",
                marginBottom: "0.5rem",
              }}
            >
              <Grid container alignItems="center">
                <Grid item md={6}>
                  <Stack direction="column">
                    <Typography>Product Code</Typography>
                    <TextField
                      value={formData.productCode}
                      onChange={handleChange}
                    />
                  </Stack>
                </Grid>
                <Grid item md={6} paddingLeft="1rem">
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Stack direction="column">
                      <Typography>Start From</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={dayjs(formData.startDate.value)}
                          onChange={handleStartDateChange}
                        />
                      </LocalizationProvider>
                    </Stack>
                    <Stack direction="column">
                      <Typography>Duration</Typography>
                      <TextField
                        name="duration"
                        type="number"
                        onChange={handleChange}
                        value={formData.duration.value}
                      />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Grid container marginTop="1rem">
                <Grid item md={6}>
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Stack direction="column">
                      <Typography>Sale Price</Typography>
                      <TextField
                        name="mrp"
                        type="number"
                        onChange={handleChange}
                        value={formData.mrp.value}
                      />
                    </Stack>
                    <Stack direction="column">
                      <Typography>Discounted Price</Typography>
                      <TextField
                        name="price"
                        type="number"
                        onChange={handleChange}
                        value={formData.price.value}
                      />
                    </Stack>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Stack direction="column" width="100%" marginTop="2.5rem">
                      <Typography>Course Category</Typography>
                      <Select
                        name="category"
                        id="select-edu"
                        value={formData.category.value}
                        onChange={handleChange}
                        disabled={!allCategories}
                      >
                        {allCategories &&
                          Object.keys(allCategories).map((category) => (
                            <MenuItem id={category} value={category}>
                              {category}
                            </MenuItem>
                          ))}
                      </Select>
                    </Stack>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Stack direction="column" width="100%" marginTop="2.5rem">
                      <Typography>Course Language</Typography>
                      <TextField
                        fullWidth
                        name="language"
                        onChange={handleChange}
                        value={formData.language.value}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item md={6} paddingLeft="1rem">
                  <Stack direction="column">
                    <Typography>Educators</Typography>
                    <Stack>
                      <div
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          listStyle: "none",
                          p: 0.5,
                          m: 0,
                        }}
                        component="ul"
                      >
                        {instructors &&
                          formData.instructors.value &&
                          instructors
                            .filter((instructor) =>
                              formData.instructors.value.includes(instructor)
                            )
                            ?.map((data) => {
                              let icon;
                              return (
                                <ListItem key={data.key}>
                                  <Chip
                                    icon={icon}
                                    label={data.name}
                                    onDelete={removeInstructor(data)}
                                    deleteIcon={
                                      <CancelIcon
                                        sx={{
                                          color: "white !important",
                                        }}
                                      />
                                    }
                                    sx={{
                                      background: "#0373BA",
                                      color: "white",
                                    }}
                                  />
                                </ListItem>
                              );
                            })}
                      </div>
                      <Select
                        name="instructors"
                        id="select-edu"
                        value={formData.instructors}
                        onChange={handleChange}
                        disabled={!instructors}
                        multiple
                      >
                        {instructors?.map((educator) => {
                          return (
                            <MenuItem id={educator.id} value={educator}>
                              {educator.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </Stack>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Stack direction="column" width="100%" marginTop="2.5rem">
                      <Typography>Course Sub-Category</Typography>
                      <Select
                        name="subcategory"
                        id="select-edu"
                        value={formData.subcategory.value}
                        onChange={handleChange}
                        disabled={
                          !allCategories ||
                          !formData.category.value ||
                          !allCategories[formData.category.value]
                        }
                      >
                        {allCategories &&
                          formData.category.value &&
                          allCategories[formData.category.value] &&
                          allCategories[formData.category.value].map(
                            (subject) => (
                              <MenuItem id={subject} value={subject}>
                                {subject}
                              </MenuItem>
                            )
                          )}
                      </Select>
                    </Stack>
                  </Stack>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <Stack direction="row" gap={2} marginTop="4.5rem">
                      <Button variant="contained" onClick={handleSubmit}>
                        Next
                      </Button>
                      <Button variant="outlined">Cancel</Button>
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </FormGroup>
      </Grid>
    </Grid>
  );
}

export default AddCourseForm1;
