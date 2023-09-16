import { useEffect, useState } from "react";

import { LoadMore } from "../../Tools/LoadMore";
import { MockTestCard } from "../MockTestCard/MockTestCard";
import { useFetchTestset } from "../../../helper/Testseries/useFetchTestset";
import Loader from "../../Tools/Loader";

import "./TestsetCollection.scss";

export const TestsetCollection = ({
  selectedTestsetType,
  selectedCategory,
  testseriesId,
  setTestsetCategory,
}) => {
  const noTestset = "noTestset";
  const [page, setPage] = useState(1);
  const [testsetData, testsetCategory, totalPages, loading, noTestsetData] = useFetchTestset(
    page,
    selectedTestsetType,
    selectedCategory
  );

  useEffect(() => {
    setTestsetCategory(testsetCategory);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testsetCategory]);

  const handleLoadButton = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="testsetCollection">
      {noTestsetData
        ? noTestset
        : testsetData.map((item) => (
            <MockTestCard
              key={`testsetCollection-${item.id}`}
              data={item}
              testseriesId={testseriesId}
            />
          ))}

      {loading && <Loader />}
      {totalPages !== page && <LoadMore color="tertiary" handleLoadButton={handleLoadButton} />}
    </div>
  );
};
