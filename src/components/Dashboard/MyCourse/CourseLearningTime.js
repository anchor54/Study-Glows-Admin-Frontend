import { Button } from "@mui/material";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";

import Divider from "../../Tools/Divider";

import "./MyCourse.scss";

const CourseLearningTime = () => {
  return (
    <div className="courseLearningTimeContainer">
      <h1>Schedule Your Learning Time</h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      <div className="content">
        <div className="gridContainer header">
          <div>Name of the Course</div>
          <div>Validity</div>
          <div className="alarm">Create an event</div>
        </div>

        <div className="gridContainer row">
          <div>1. UPSC CSE Foundation Course (Pre+ Mains)</div>
          <div> till 31/12/2022</div>
          <div className="alarm">
            <Button variant="contained">
              <AddAlarmIcon />
            </Button>
          </div>
        </div>
        <div className="gridContainer row">
          <div>2. UPSC CSE Foundation Course (Pre+ Mains)</div>
          <div> till 31/12/2022</div>
          <div className="alarm">
            <Button variant="outlined">
              <AddAlarmIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearningTime;
