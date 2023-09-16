import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import privateAxios from "../../axios/privateAxios";

export const useTestset = () => {
  const initialCategory = "All";
  const testsetType = ["chapter", "subject", "full", "live"];
  const [testsetTypeData, setTestsetTypeData] = useState();
  const [testsetTypeLoader, setTestsetTypeLoader] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTestsetType, setSelectedTestsetType] = useState(testsetType[0]);
  const [testsetCategory, setTestsetCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    const loadTestsetTypeData = (testseriesId) => {
      setTestsetTypeLoader(true);
      privateAxios
        .get(`testseries/${testseriesId}/testset/count`)
        .then((res) => {
          setTestsetTypeLoader(false);
          setTestsetTypeData(res?.data);
        })
        .catch((e) => {
          if (e?.response?.status === 404) {
            setTestsetTypeLoader(false);
          }
          console.log(e);
        });
    };

    params?.testseriesId && loadTestsetTypeData(params?.testseriesId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectCategory = (name) => {
    setSelectedCategory(name);
  };

  const handleSelectedTestType = (type) => {
    testsetType.indexOf(type) >= 0 && setSelectedTestsetType(type);
  };

  return {
    testsetType: testsetType,
    testsetTypeData: testsetTypeData,
    testsetTypeLoader: testsetTypeLoader,
    selectedTestsetType: selectedTestsetType,
    selectedCategory: selectedCategory,
    testsetCategory: testsetCategory,
    setTestsetCategory: setTestsetCategory,
    handleSelectCategory: handleSelectCategory,
    handleSelectedTestType: handleSelectedTestType,
  };
};
