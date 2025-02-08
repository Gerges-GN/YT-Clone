import data from "../utils/DB.json";
import { Box, Stack } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { VideoCard, ChannelCard } from "../components";
function Videos() {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: { xs: "100%", sm: "358px", md: "320px" },
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channel={item} />} */}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
