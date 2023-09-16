import "./TestsetNavbar.scss";

export const TestsetNavbar = ({
  testsetNavbarCount,
  testsetType,
  selectedTestsetType,
  handleSelectedTestType,
}) => {
  return (
    <div className="testsetNavbar">
      <ul>
        {testsetType.length &&
          testsetType.map((item, key) => (
            <li
              key={`testsetnavbar-${item}-${key}`}
              className={`${item === selectedTestsetType ? "active" : undefined} title_small`}
              onClick={() => handleSelectedTestType(item)}
            >
              {item} Test <span>{testsetNavbarCount && `(${testsetNavbarCount[item]})`}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
