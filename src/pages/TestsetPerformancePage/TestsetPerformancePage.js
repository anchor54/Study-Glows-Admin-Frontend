import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import privateAxios from "../../axios/privateAxios";
import Loader from "../../components/Tools/Loader";

import "./TestsetPerformancePage.scss";

export const TestsetPerformancePage = () => {
  const [performanceData, setPerformanceData] = useState();
  const [loading, setLoading] = useState(true);
  const [retakeLoading, setRetakeLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPerformaceData = (testseriesId, testsetId) => {
      setLoading(true);
      privateAxios
        .get(`/testseries/${testseriesId}/testset/${testsetId}/performance`)
        .then((res) => {
          setPerformanceData(res?.data?.performanceData);
          setLoading(false);
          console.log(res?.data);
        })
        .catch((e) => console.log(e));
    };

    params?.testseriesId &&
      params?.testsetId &&
      loadPerformaceData(params?.testseriesId, params?.testsetId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDashboardClick = () => {
    params?.testseriesId && navigate(`/test_series/${params?.testseriesId}/testset`);
  };

  const handleRetakeTest = () => {
    const startTestset = (testsetId, testseriesId) => {
      setRetakeLoading(true);
      privateAxios
        .post(`onlinetest/${testsetId}/start`, { testseries_id: testseriesId })
        .then((res) => {
          const onlineTestId = res?.data?.onlineTestId;
          onlineTestId && navigate(`/onlinetest/${onlineTestId}`);
          setRetakeLoading(false);
        })
        .catch((e) => console.log(e));
    };

    params?.testseriesId &&
      params?.testsetId &&
      startTestset(params?.testsetId, params?.testseriesId);
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <div className="testsetPerformance">
          <Overall performanceData={performanceData} />
          <div className="actionBtn">
            <Button variant="contained" onClick={handleRetakeTest}>
              {retakeLoading ? "starting..." : "Retake Test"}
            </Button>
            <Button variant="contained" onClick={handleDashboardClick}>
              My Dashboard
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

const Overall = ({ performanceData }) => {
  const report = performanceData?.reportData;
  return (
    report && (
      <div className="overall">
        <h2 className="headline_large">Overall Performance Summary</h2>
        <div className="wrapper title_medium">
          <div className="wrapper2">
            <div>
              {report?.score}/<span>{report?.totalScore}</span>
            </div>
            <div>Score</div>
          </div>
          <div className="wrapper2">
            <div>
              {report?.attempted}/<span>{report?.totalQuestion}</span>
            </div>
            <div>Attempted</div>
          </div>
          <div className="wrapper2">
            <div>
              {(report?.correct / report?.totalQuestion).toFixed(2) * 100}
              <span>%</span>
            </div>
            <div>Accuracy</div>
          </div>
          {/* <div className="wrapper2">
          <div>
            14.5<span>%</span>
          </div>
          <div>Percentile</div>
        </div> */}
        </div>
      </div>
    )
  );
};

// const SectionSummary = () => {
//   return (
//     <div className="sectionSummary">
//       <h2>Section Summary</h2>
//       <table>
//         <tr>
//           <th>Section Name</th>
//           <th>Score</th>
//           <th>Attempted</th>
//           <th>Accuracy</th>
//         </tr>
//         <tr>
//           <td>Section Name</td>
//           <td>
//             14/<span>100</span>
//           </td>
//           <td>Attempted</td>
//           <td>Accuracy</td>
//         </tr>
//         <tr>
//           <td>Section Name</td>
//           <td>Score</td>
//           <td>Attempted</td>
//           <td>Accuracy</td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// const Remarks = () => {
//   return (
//     <div className="remarks">
//       <h2>Remarks From the Evaluator</h2>
//       <div className="content">
//         aliquip qui officia nisi. Cillum aute culpa in tempor elit id occaecat sint esse irure
//         veniam irure. Culpa non sit eu eiusmod. Culpa commodo reprehenderit laboris quis
//         reprehenderit ut quis. Excepteur veniam laboris ex incididunt eu quis ullamco Lorem. Enim
//         magna officia laborum do eu nulla ad voluptate deserunt aute dolore. Laborum sint est
//         excepteur minim commodo quis amet reprehenderit voluptate cillum fugiat ad. Eu duis ea velit
//         do exercitation aliquip et proident esse laborum. Eiusmod pariatur eu officia amet ad. Elit
//         qui deserunt ex consequat labore occaecat reprehenderit amet. Ex aute ad id et occaecat non
//         Lorem. Consectetur laborum laboris voluptate sit id exercitation nulla et nostrud aute anim
//         nostrud anim qui. Ex veniam velit cillum reprehenderit aute enim excepteur eu. Proident sint
//         laborum elit occaecat in aute laboris velit pariatur veniam amet commodo proident irure.
//         Deserunt duis pariatur fugiat enim elit amet do nulla eiusmod Lorem minim elit. Irure
//         excepteur laboris proident irure nostrud Lorem. Sunt quis aliqua enim et. Velit cupidatat
//         labore et et. Ut dolor incididunt anim velit officia ad duis occaecat do pariatur officia
//         non officia.
//       </div>
//     </div>
//   );
// };
