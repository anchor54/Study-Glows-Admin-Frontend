import {
  Box,
  Button,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";

import { ReactComponent as DragHandleIcon } from "../../assets/svg/admin/drag_handle.svg";
import { ReactComponent as DeleteIcon } from "../../assets/svg/admin/delete-icon.svg";

export const RESOURCE_TYPE = {
  VIDEO: "video",
  TEST: "test",
  DOCUMENT: "document",
  IMAGE: "image",
  CHAPTER: "chapter",
};

export default function ChapterResourceItem({
  orderNo,
  title,
  image,
  length,
  type,
  selected,
  onSelect: onItemSeleted,
  onDelete
}) {
  return (
    <Stack
      direction="row"
      padding={2}
      justifyContent="space-between"
      bgcolor="#F1F2F5"
      borderRadius="5px"
      onClick={onItemSeleted}
    >
      <Stack direction="row" rowGap={2} alignItems="center">
        {type === RESOURCE_TYPE.CHAPTER && <Radio checked={selected} />}
        <DragHandleIcon />
        <Typography marginLeft={2}>{orderNo}</Typography>
        {!!image && 
          <Box
            width="15%"
            marginLeft={1}
            border={1}
            borderRadius={1}
            overflow="hidden"
            bgcolor="white"
            borderColor="#00000033"
            paddingY={type === RESOURCE_TYPE.VIDEO ? 0 : 1}
          >
            {image}
          </Box>
        }
        <Typography
          maxWidth="100%"
          noWrap
          marginLeft={2}
          marginRight={3}
          color="#0373BA"
        >
          {title}
        </Typography>
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        {type === RESOURCE_TYPE.VIDEO && (
          <Button variant="outlined" sx={{ whiteSpace: "nowrap" }}>
            Mark Lecture as Free
          </Button>
        )}
        <Typography noWrap>{length}</Typography>
        <Button onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </Stack>
    </Stack>
  );
}
