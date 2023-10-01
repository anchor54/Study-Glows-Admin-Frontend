import { Box } from "@mui/material";

import ChapterResourceItem, { RESOURCE_TYPE } from "./ChapterResourceItem";
import { ReactComponent as DocumentLogo } from "../../assets/svg/admin/notes-icon.svg";
import { ReactComponent as ImageLogo } from "../../assets/svg/admin/image.svg";
import { ReactComponent as TestLogo } from "../../assets/svg/admin/test.svg";
import { getFormattedTime } from "../../utils";

export default function ChapterView({ chapterIdx, chapter, selected, onSelect, onDelete }) {
  let totalDuration = 0
  const resources = chapter?.resources?.map((resource, index) => {
    console.log(chapter.id, resource)
    let image, length;
    switch (resource.type) {
      case RESOURCE_TYPE.VIDEO:
        image = <img width="100%" height="100%" style={{ objectFit: "contain" }} src={resource.file.thumbnail} alt={resource.file.name}/>;
        length = getFormattedTime(resource.file.duration)
        totalDuration += resource.file.duration
        break;
      case RESOURCE_TYPE.DOCUMENT:
        image = <DocumentLogo/>;
        length = `${(resource.file.size / (1024 * 1024)).toFixed(2)} MB`
        break;
      case RESOURCE_TYPE.IMAGE:
        image = <ImageLogo/>;
        length = `${(resource.file.size / (1024 * 1024)).toFixed(2)} MB`
        break;
      case RESOURCE_TYPE.TEST:
        image = <TestLogo/>;
        length = `${(resource.file.size / (1024 * 1024)).toFixed(2)} MB`
        break;
      default:
        image = null;
    }
    return (
      <ChapterResourceItem
        key={resource.id}
        id={resource.id}
        orderNo={`${chapterIdx + 1}.${index + 1}`}
        title={resource.file.name}
        image={image}
        length={length}
        type={resource.type}
        onDelete={onDelete.bind(this, chapter.id, resource.id)}
      />
    );
  });
  return (
    <Box>
      <ChapterResourceItem
        orderNo={`${chapterIdx + 1}.`}
        title={chapter.name}
        length={getFormattedTime(totalDuration)}
        type={RESOURCE_TYPE.CHAPTER}
        selected={selected}
        onSelect={onSelect}
        onDelete={onDelete.bind(this, chapter.id, null)}
      />
      <Box display="flex" flexDirection="column" gap={1} marginLeft={3} marginTop={1}>
        {resources}
      </Box>
    </Box>
  );
}
