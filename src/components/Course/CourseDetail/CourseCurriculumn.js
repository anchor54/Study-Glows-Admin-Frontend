import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useEffect, useState } from "react";

export const CourseCurriculumn = ({ refName = null, curriculumnData }) => {
  const initialMediaData = { video: 0, file: 0, test: 0 };
  const [closeCurriculumnSection, setCloseCurriculumnSection] = useState([]);
  const [mediaData, setMediaData] = useState(initialMediaData);

  const toggleCurriculumnSection = (index) => {
    setCloseCurriculumnSection((pre) => {
      const updated_ = [...pre];
      updated_[index] = !pre[index];
      return updated_;
    });
  };

  useEffect(() => {
    if (curriculumnData && curriculumnData.length > 0) {
      let lectureCount = 0,
        resourceCount = 0;

      for (var i = 0; i < curriculumnData.length; i++) {
        if (curriculumnData[i]?.lecture) {
          for (var j = 0; j < curriculumnData[i]?.lecture.length; j++) {
            lectureCount += 1;
            resourceCount +=
              curriculumnData[i]?.lecture[j]?.resourse_count &&
              curriculumnData[i]?.lecture[j]?.resourse_count !== ""
                ? curriculumnData[i]?.lecture[j]?.resourse_count
                : 0;
          }
        }
      }

      setMediaData({ video: lectureCount, file: resourceCount, test: 0 });
      setCloseCurriculumnSection(Array(curriculumnData.length).fill(false));
    }
  }, [curriculumnData]);

  return (
    curriculumnData &&
    curriculumnData.length > 0 && (
      <div className="curriculumnSection" ref={refName}>
        <h2 className="display_small">Curriculumn</h2>
        <div className="content">
          <CurriculumnHeader mediaData={mediaData} />
          <div className="curriculumn">
            {curriculumnData.map((item, key) => (
              <div
                key={`curriculumn_section_${item?.id}-${key}`}
                onClick={() => toggleCurriculumnSection(key)}
                className={`curriculumn_wrapper
                ${closeCurriculumnSection[key] ? "close" : undefined}`}
              >
                <CurriculumnSectionHeader name={item?.name} />
                <ul className="curriculumn_section title_medium">
                  {item?.lecture &&
                    item?.lecture.length > 0 &&
                    item?.lecture.map((item2, key2) => (
                      <CurriculumnSubSection
                        key={`curriculumn_sub_section_${item2?.id}-${key2}`}
                        name={item2?.name}
                      />
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

const CurriculumnSectionHeader = ({ name }) => {
  return (
    <div className="curriculumn_section_header headline_small">
      <div>{name}</div>
      <div>
        <IconButton className="arrow">
          <KeyboardArrowUpIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

const CurriculumnSubSection = ({ name }) => {
  return (
    <li className="curriculumn_sub_section">
      <div>
        <PlayCircleFilledWhiteIcon />
        {/* <img className="fluid-image" src="/images/courses/sub_section.svg" alt="file" /> */}
      </div>
      <div>{name}</div>
    </li>
  );
};

const CurriculumnHeader = ({ mediaData }) => {
  return (
    <div className="curriculumn_header">
      {mediaData?.video > 0 && (
        <MediaCard
          title="Video Lessons"
          count={mediaData?.video}
          src="/images/courses/video.svg"
          alt="video"
        />
      )}
      {mediaData?.file > 0 && (
        <MediaCard
          title="Files"
          count={mediaData?.file}
          src="/images/courses/notes.svg"
          alt="files"
        />
      )}
      {mediaData?.test > 0 && (
        <MediaCard
          title="Tests"
          count={mediaData?.test}
          src="/images/courses/test.svg"
          alt="tests"
        />
      )}
    </div>
  );
};

const MediaCard = ({ title, count, src, alt }) => {
  return (
    <div className="mediaCard">
      <h5 className="label_medium">{title}</h5>
      <div className="wrapper">
        <div className="headline_large">
          {count}
          <span>+</span>
        </div>
        <div>
          <img className="fluid-image" src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};
