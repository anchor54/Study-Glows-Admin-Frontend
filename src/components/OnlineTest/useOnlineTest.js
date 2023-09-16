/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import privateAxios from "../../axios/privateAxios";
import { selectedSectionAtom } from "../../state/atoms/OnlineTest/selectedSectionAtom";
import { selectedQuestionAnswerAtom } from "../../state/atoms/OnlineTest/selectedQuestionAnswerAtom";
import { sectionDataAtom } from "../../state/atoms/OnlineTest/sectionDataAtom";

export const useOnlineTest = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [onlineTestData, setOnlineTestData] = useState();
  const [onlineTestLoading, setOnlineTestLoading] = useState(true);
  const [questionAnswerData, setQuestionAnswerData] = useState([]);
  const [, setSectionData] = useRecoilState(sectionDataAtom);
  const [, setSelectedSection] = useRecoilState(selectedSectionAtom);
  const [selectedQuestionAnswer, setSeletedQuestionAnswer] = useRecoilState(
    selectedQuestionAnswerAtom
  );

  /** load onlineTest */
  useEffect(() => {
    const loadOnlineTest = (onlineTestId) => {
      privateAxios
        .get(`/onlinetest/${onlineTestId}`)
        .then((res) => {
          // console.log(res);
          setOnlineTestData(res?.data?.onlinetest);
          setQuestionAnswerData(res?.data?.questionsAnswer);
          setOnlineTestLoading(false);
        })
        .catch((e) => {
          if(e?.response?.status === 400){
            navigate('/');
          }
          console.log(e);
        });
    };

    params.onlineTestId && loadOnlineTest(params?.onlineTestId);
  }, []);

  useEffect(() => {
    let sections = {};
    questionAnswerData.map((item) => {
      if (sections[item?.section]) {
        return (sections[item?.section] = [item, ...sections[item?.section]]);
      } else {
        return (sections[item?.section] = [item]);
      }
    });

    const sortByKeys = (obj) => {
      return Object.keys(obj)
        .sort()
        .reduce(function (result, key) {
          result[key] = obj[key];
          return result;
        }, {});
    };

    if (Object.keys(sections).length > 0) {
      const updatedSection = sortByKeys(sections);
      let _counter = 1;
      for (let key in updatedSection) {
        for (let i = 0; i < updatedSection[key].length; i++) {
          updatedSection[key][i].sr_no = _counter++;
        }
      }

      const _selectedsection = Object.keys(updatedSection)[0];
      setSectionData(updatedSection);
      setSelectedSection({
        name: _selectedsection,
        data: updatedSection[_selectedsection],
      });
    }
  }, [questionAnswerData]);

  const handleLoadQuestion = (questionAnswer) => {
    if (questionAnswer && questionAnswer !== selectedQuestionAnswer) {
      setSeletedQuestionAnswer(questionAnswer);
    }
  };

  return {
    onlineTestData: onlineTestData,
    onlineTestLoading: onlineTestLoading,
    handleLoadQuestion: handleLoadQuestion,
  };
};
