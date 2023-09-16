import Loader from "../../components/Tools/Loader";
import Header from "../../components/OnlineTest/Header/TestHeader";
import TestNavbar from "../../components/OnlineTest/Header/TestNavbar";

import { QuestionNavigation } from "../../components/OnlineTest/QuestionNavigation/QuestionNavigation";
import { QuestionAnswer } from "../../components/OnlineTest/QuestionAnswer/QuestionAnswer";
import { useOnlineTest } from "../../components/OnlineTest/useOnlineTest";

import "./OnlineTestPage.scss";

export const OnlineTestPage = () => {
  const { onlineTestData, onlineTestLoading, handleLoadQuestion } = useOnlineTest();

  return onlineTestLoading ? (
    <Loader />
  ) : (
    <div className="onlineTest">
      <Header onlineTestData={onlineTestData} />
      <TestNavbar />
      <div className="testGrid">
        <QuestionAnswer onlineTestData={onlineTestData} />
        <QuestionNavigation handleLoadQuestion={handleLoadQuestion} />
      </div>
    </div>
  );
};
