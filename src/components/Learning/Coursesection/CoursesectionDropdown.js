export const CoursesectionDropdown = (props) => {
  const openClassName = props?.open_status ? "show" : "hide";
  return <ul className={`coursesectionDropdown ${openClassName} subsection`}>{props.children}</ul>;
};
