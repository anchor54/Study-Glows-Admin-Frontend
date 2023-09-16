/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { Faq } from "../../components/Faq/Faq";
import { authAtom } from "../../state/atoms/authAtom";
import { loginPopupAtom } from "../../state/atoms/loginPopupAtom";
import { AndroidApp2 } from "../../components/AndroidApp/AndroidApp2";
import { TestSeriesSlideList } from "../../components/TestSeries/TestSeriesSlideList/TestSeriesSlideList";
import Requestcall from "../../components/Requestcall/Requestcall";
import publicAxios from "../../axios/publicAxios";
import privateAxios from "../../axios/privateAxios";
import CardImage from "../../components/Tools/CardImage";
import { useSmoothScroll } from "../../helper/useSmoothScroll";

import "./TestSeries.scss";

export const TestSeriesDetail = () => {
  useSmoothScroll();

  const [testseriesData, setTestseriesData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const loadTestseries = (testseriesId) => {
      publicAxios
        .get(`/testseries/${testseriesId}`)
        .then((res) => {
          setTestseriesData(res.data);
        })
        .catch((e) => console.log(e));
    };

    params.testseriesId && loadTestseries(params.testseriesId);
  }, []);

  return (
    <Container>
      <TestSeriesThumbnailShortDetail testseriesData={testseriesData} />
      <AboutTestSeries about={testseriesData?.about} />
      <TestSeriesFeature feature={testseriesData?.feature2} />
      <TestSeriesSlideList />
      <Faq faqData={testseriesData?.faq} />
      <AndroidApp2 />
      <Requestcall />
    </Container>
  );
};

const TestSeriesThumbnailShortDetail = ({ testseriesData }) => {
  const feature = testseriesData?.feature;
  const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);
  const [, setLoginPopup] = useRecoilState(loginPopupAtom);
  const [validity, setValidity] = useState();

  useEffect(() => {
    const validateDate = (validity) => {
      const v_date = new Date(validity);
      const c_date = new Date();
      if (v_date && c_date) {
        if ((v_date.getTime() - c_date.getTime()) / (24 * 60 * 60 * 1000) > 0) return true;
      }
      return false;
    };
    testseriesData?.validity &&
      testseriesData?.validity !== "" &&
      validateDate(testseriesData?.validity) &&
      setValidity(new Date(testseriesData?.validity));
  }, [testseriesData]);

  const handleTestseriesEnroll = () => {
    const addTocart = (testseries_id) => {
      const request_body = {
        type: "testseries",
        testseries_id: testseries_id,
      };
      privateAxios
        .post("cart", request_body)
        .then((res) => {
          navigate("/cart");
        })
        .catch((e) => console.log(e));
    };

    // check the status of logged in
    if (!auth) {
      setLoginPopup(true);
    } else testseriesData?.id && addTocart(testseriesData.id);
  };

  return (
    <div className="testseriesDetailWrapper">
      <div>
        <div>
          <CardImage thumbnail={testseriesData?.thumbnail} alt={testseriesData?.title} />
        </div>
        <div className="priceTag">
          <div className="price display_medium">
            RS <span>{testseriesData?.price}</span>
          </div>
          {testseriesData?.mrp && testseriesData?.mrp > testseriesData?.price && (
            <div className="discount display_small">
              Rs. <span>{testseriesData?.mrp}</span>
            </div>
          )}
        </div>
        {validity && (
          <div className="valid title_medium">
            Discount valid till {validity.toDateString()} only.
          </div>
        )}
      </div>
      <div className="detail">
        <h1 className="display_medium">{testseriesData?.title}</h1>
        <ul className="headline_small">
          {feature &&
            feature.map((item) => (
              <li key={`feature1-${item.id}`}>
                Tests are planned in 3 ways- Fundamental, Applied and Comprehensive Level.
              </li>
            ))}
        </ul>
        <div className="enroll">
          {testseriesData?.enrolled ? (
            <>
              <Button variant="contained" color="tertiary" disabled={true}>
                Enrolled
              </Button>
              <Button
                variant="contained"
                color="tertiary"
                onClick={() => navigate("/dashboard/test-series")}
              >
                Continue
              </Button>
            </>
          ) : (
            <Button variant="contained" color="tertiary" onClick={handleTestseriesEnroll}>
              Enroll
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutTestSeries = ({ about }) => {
  return (
    <div className="aboutTestSeries">
      <h2 className="display_small">About Course</h2>
      <div className="content body_large">{about}</div>
    </div>
  );
};

const TestSeriesFeature = ({ feature }) => {
  return (
    <div className="testSeriesFeature">
      <h2 className="display_small">Feature</h2>
      <div className="content">
        <ul>
          {feature &&
            feature.map((item, idx) =>
              idx % 2 === 0 ? (
                <li key={`testseries-feature2-${item.id}`}>
                  <div>
                    <img
                      className="fluid-image"
                      src="/images/testSeries/analysis.svg"
                      alt="analysis"
                    />
                  </div>
                  <div>
                    <h3 className="headline_medium">Post Test Analysis</h3>
                    <p className="headline_small">
                      Increase Marks through in-depth analysis and corrective measures.
                    </p>
                  </div>
                </li>
              ) : (
                <li key={`testseries-feature2-${item.id}`}>
                  <div style={{ textAlign: "right" }}>
                    <h3 className="headline_medium">Closely Aligned to UPSC Syllabus</h3>
                    <p className="headline_small">
                      Understand requirements and prepare effectively according to the demands of
                      the examination.
                    </p>
                  </div>
                  <div>
                    <img
                      className="fluid-image"
                      src="/images/testSeries/syllabus.svg"
                      alt="syllabus"
                    />
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};
