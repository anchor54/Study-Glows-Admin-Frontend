import "./TestSeriesList.scss";

export const WhyTestSeries = () => {
  return (
    <div className="whyTestSeries">
      <h1 className="display_small">Why take Study Glows Test Series?</h1>
      <div className="cardWrapper">
        <div className="card exam">
          <div>
            <img className="fluid-image" src="/images/testSeries/exam.svg" alt="exam" />
          </div>
          <div>
            <h2 className="headline_small">Latest Exam Patterns</h2>
            <p className="title_small">
              Prepare for the exact level expected in the upcoming exams.
            </p>
          </div>
        </div>
        <div className="card test">
          <div>
            <img className="fluid-image" src="/images/testSeries/test.svg" alt="test" />
          </div>
          <div>
            <h2 className="headline_small">Latest Exam Patterns</h2>
            <p className="title_small">
              Prepare for the exact level expected in the upcoming exams.
            </p>
          </div>
        </div>
        <div className="card performance">
          <div>
            <img className="fluid-image" src="/images/testSeries/performance.svg" alt="exam" />
          </div>
          <div>
            <h2 className="headline_small">Latest Exam Patterns</h2>
            <p className="title_small">
              Prepare for the exact level expected in the upcoming exams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
