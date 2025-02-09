/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

function Videos({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
      {videos.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            maxWidth: { xs: "100%", sm: "320px" },
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
