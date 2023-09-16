import { Container } from "@mui/material";

import { TestsetNavbar } from "../../components/Testset/TestsetNavbar/TestsetNavbar";
import { TestsetCategory } from "../../components/Testset/TestsetCategory/TestsetCategory";
import { useTestset } from "../../components/Testset/useTestset";
import { TestsetCollection } from "../../components/Testset/TestsetCollection/TestsetCollection";
import Loader from "../../components/Tools/Loader";

import "./TestsetPage.scss";

export const TestsetPage = () => {
  const {
    testsetType,
    testsetTypeData,
    testsetTypeLoader,
    selectedTestsetType,
    selectedCategory,
    testsetCategory,
    setTestsetCategory,
    handleSelectCategory,
    handleSelectedTestType,
  } = useTestset();

  return (
    <Container>
      <div className="testsetDashboard">
        {testsetTypeLoader ? (
          <Loader />
        ) : (
          <>
            {testsetTypeData ? (
              <>
                <h1 className="headline_small">{testsetTypeData?.testseries?.title}</h1>
                <TestsetNavbar
                  testsetNavbarCount={testsetTypeData?.type}
                  testsetType={testsetType}
                  selectedTestsetType={selectedTestsetType}
                  handleSelectedTestType={handleSelectedTestType}
                />
                <TestsetCategory
                  category={testsetCategory}
                  selectedCategory={selectedCategory}
                  handleSelectCategory={handleSelectCategory}
                />
                <TestsetCollection
                  selectedTestsetType={selectedTestsetType}
                  selectedCategory={selectedCategory}
                  testseriesId={testsetTypeData?.testseries?.id}
                  setTestsetCategory={setTestsetCategory}
                />
              </>
            ) : (
              "No testseries found."
            )}
          </>
        )}
      </div>
    </Container>
  );
};
