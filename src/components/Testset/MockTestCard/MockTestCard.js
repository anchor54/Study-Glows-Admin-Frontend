import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { TextIcon } from "./TextIcon";
import privateAxios from "../../../axios/privateAxios";

import "./MockTestCard.scss";

export const MockTestCard = ({ data, testseriesId }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    const startTestset = (testsetId, testseriesId) => {
      setLoading(true);
      privateAxios
        .post(`onlinetest/${testsetId}/start`, { testseries_id: testseriesId })
        .then((res) => {
          const onlineTestId = res?.data?.onlineTestId;
          onlineTestId && navigate(`/onlinetest/${onlineTestId}`);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    };

    data?.id && testseriesId && startTestset(data?.id, testseriesId);
  };

  const handleViewScore = () => {
    if (data?.id && testseriesId) {
      navigate(`/test_series/${testseriesId}/testset/${data?.id}/performance`);
    }
  };

  return (
    data && (
      <div className="mocktestcard">
        <div className="grid">
          <div className="mocktest">
            <div className="testname wrapper">
              <div>
                <h2 className="title_large">{data?.name}</h2>
              </div>
              {data?.participated_user && (
                <div>
                  <TextIcon
                    icon_url="/images/testset/user.svg"
                    icon_alt="user"
                    text={
                      data?.participated_user > 100
                        ? `${data?.participated_user / 1000}k users`
                        : `${data?.participated_user} users`
                    }
                  />
                </div>
              )}
            </div>
            <div className="additional wrapper">
              {data?.total?.questions && (
                <div>
                  <TextIcon
                    icon_url="/images/testset/question.svg"
                    icon_alt="question"
                    text={`${data?.total?.questions} Questions`}
                  />
                </div>
              )}
              {data?.total?.marks && (
                <div>
                  <TextIcon
                    icon_url="/images/testset/marks.svg"
                    icon_alt="marks"
                    text={`${data?.total?.marks} Marks`}
                  />
                </div>
              )}
              {data?.duration && (
                <div>
                  <TextIcon
                    icon_url="/images/testset/time.svg"
                    icon_alt="time"
                    text={`${data?.duration} minutes`}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="rightButton">
            {data?.completed ? (
              <Button variant="contained" color="tertiary" onClick={handleViewScore}>
                View Score
              </Button>
            ) : (
              <Button variant="contained" color="tertiary" onClick={handleStart}>
                {loading ? "starting..." : "Start Now"}
              </Button>
            )}
          </div>
        </div>
        <div className="language">
          <div className="wrapper">
            <div>
              {data?.language === "Hinglish" ? (
                <TextIcon
                  icon_url="/images/testset/translate.svg"
                  icon_alt="language"
                  text={"English, Hindi"}
                />
              ) : (
                <TextIcon
                  icon_url="/images/testset/translate.svg"
                  icon_alt="language"
                  text={data?.language}
                />
              )}
            </div>
            {data?.access_type === "free" && <div className="free">Free</div>}
          </div>
        </div>
      </div>
    )
  );
};
