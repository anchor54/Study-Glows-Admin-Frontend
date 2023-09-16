import { useNavigate } from "react-router-dom";
import privateAxios from "../../axios/privateAxios";

export const useSubmitOnlineTest = (onlineTestData) => {
  const navigate = useNavigate();

  const handleSubmitTest = () => {
    const submitTest = (onlineTestData) => {
      privateAxios
        .post(`onlinetest/${onlineTestData?.id}/submit`)
        .then((res) => {
          navigate(
            `/test_series/${onlineTestData?.testseries?.id}/testset/${onlineTestData?.testset?.id}/performance`
          );
        })
        .catch((e) => console.log(e));
    };

    onlineTestData?.id && submitTest(onlineTestData);
  };

  return [handleSubmitTest];
};
