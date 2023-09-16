import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { sectionDataAtom } from "../../../state/atoms/OnlineTest/sectionDataAtom";

import { selectedSectionAtom } from "../../../state/atoms/OnlineTest/selectedSectionAtom";

import "./Header.scss";

export default function TestNavbar() {
  const [sectionsName, setSectionsName] = useState([]);
  const sectionData = useRecoilValue(sectionDataAtom);
  const selectedSection = useRecoilValue(selectedSectionAtom);

  useEffect(() => {
    setSectionsName(Object.keys(sectionData));
  }, [sectionData]);

  return (
    sectionsName.length > 0 && (
      <div className="TestNavbar">
        <ul>
          {sectionsName.map((item, key) => (
            <li
              className={item === selectedSection?.name ? "active" : undefined}
              key={`test-navbar-${key}`}
            >
              {item === "default" ? "All" : item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
