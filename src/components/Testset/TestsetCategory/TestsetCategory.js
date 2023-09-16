import "./TestsetCategory.scss";

export const TestsetCategory = ({ category = [], selectedCategory, handleSelectCategory }) => {
  const updatedCategory = category.length > 0 ? [{ id: 0, name: "All" }, ...category] : [];
  return (
    <div className="category_filter">
      <ul>
        {updatedCategory.map((item) => (
          <li
            key={`category-${item?.id}-${item?.name}`}
            className={`${item?.name === selectedCategory ? "active" : undefined}`}
            onClick={() => handleSelectCategory(item?.name)}
          >
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
