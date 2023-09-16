import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import publicAxios from "../../../axios/publicAxios";
import { useFetchTestseries } from "../../../helper/Testseries/useFetchTestseries";

export const useTestseriesCollections = () => {
  const [filterParams, setFilterParams] = useSearchParams();
  const initialQueryParameter = {
    page: 1,
    category: filterParams.get("category"),
  };
  const [queryParameter, setQueryParamter] = useState(initialQueryParameter);
  const [sideNavbarData, setSideNavbarData] = useState([]);
  const [testseriesData, totalPages, loading] = useFetchTestseries(queryParameter);

  useEffect(() => {
    const fetchTestseriesCategory = () => {
      publicAxios
        .get("/testseries/category")
        .then((res) => setSideNavbarData(res?.data))
        .catch((e) => console.log(e));
    };

    fetchTestseriesCategory();
  }, []);

  useEffect(() => {
    const category = filterParams.get("category");
    category &&
      setQueryParamter((pre) => {
        return { ...pre, category: category, page: 1 };
      });
  }, [filterParams]);

  const handleLoadButton = () => {
    setQueryParamter((pre) => {
      return { ...pre, page: pre?.page + 1 };
    });
  };

  return {
    loading: loading,
    totalPages: totalPages,
    filterParams: filterParams,
    sideNavbarData: sideNavbarData,
    testseriesData: testseriesData,
    queryParameter: queryParameter,
    setFilterParams: setFilterParams,
    handleLoadButton: handleLoadButton,
  };
};
