import { useEffect, useState } from "react";
import { useSubmitOnlineTest } from "../useSubmitOnlineTest";

export const useTestHeader = (onlineTestData) => {
  const [time, setTime] = useState(new Date());
  const [endTime, setEndTime] = useState(null);
  const [showTime, setShowTime] = useState();
  const [handleSubmitTest] = useSubmitOnlineTest(onlineTestData);

  useEffect(() => {
    if (onlineTestData?.test_started_at) {
      const test_started_at = new Date(onlineTestData?.test_started_at);
      const duration = onlineTestData?.testset?.duration;
      if (test_started_at && duration) {
        const test_ended_at = new Date(test_started_at.getTime() + duration * 60000);
        test_ended_at && setEndTime(test_ended_at);
      }
    }
  }, [onlineTestData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const getTimeDifference = (time2, time1) => {
      const time2_detail = {
        hr: time2.getHours(),
        min: time2.getMinutes(),
        sec: time2.getSeconds(),
      };
      const time1_detail = {
        hr: time1.getHours(),
        min: time1.getMinutes(),
        sec: time1.getSeconds(),
      };
      const ans = {
        hr: 0,
        min: 0,
        sec: 0,
      };
      if (time2_detail.sec - time1_detail.sec >= 0) {
        ans.sec = time2_detail.sec - time1_detail.sec;
      } else {
        if (time2_detail.min > 0) {
          time2_detail.min -= 1;
          ans.sec = time2_detail.sec - time1_detail.sec + 60;
        } else {
          if (time2_detail.hr > 0) {
            time2_detail.hr -= 1;
            time2_detail.min += 59;
            ans.sec = time2_detail.sec - time1_detail.sec + 60;
          } else {
            ans.sec = 0;
          }
        }
      }
      if (time2_detail.min - time1_detail.min >= 0) {
        ans.min = time2_detail.min - time1_detail.min;
      } else {
        if (time2_detail.hr > 0) {
          time2_detail.hr -= 1;
          ans.min = time2_detail.min - time1_detail.min + 60;
        } else {
          ans.min = 0;
        }
      }
      if (time2_detail.hr - time1_detail.hr >= 0) {
        ans.hr = time2_detail.hr - time1_detail.hr;
      } else {
        ans.hr = 0;
      }
      return ans;
    };

    time &&
      endTime &&
      setShowTime(() => {
        return getTimeDifference(endTime, time);
      });
  }, [time, endTime]);

  useEffect(() => {
    if (showTime && showTime?.hr === 0 && showTime?.min === 0 && showTime?.sec === 0) {
      handleSubmitTest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, endTime, onlineTestData]);

  return [showTime];
};
