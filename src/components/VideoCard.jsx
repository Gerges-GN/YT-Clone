/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

function VideoCard({ video }) {
  return (
    <Card
      sx={{
        bgcolor: "#000",
        boxShadow: "none",
        border: "none",
        borderRadius: 0,
      }}
    >
      {/* thumbnails */}
      <Link
        to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}
        style={{ borderRadius: { sx: "0", sm: "12px" }, overflow: "hidden" }}
      >
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          sx={{
            minHeight: 180,
            minWidth: 358,
          }}
        >
          
        </CardMedia>
      </Link>

      {/* Card content */}
      <CardContent
        sx={{
          height: 70,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <Link
          to={
            video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl
          }
        >
          <Typography sx={{ color: "white" }} variant="subtitle1">
            {video?.snippet?.title.slice(0, 60) || demoVideoTitle}
          </Typography>
        </Link>

        {/* Channel */}
        <Link
          to={
            video?.id?.channelId
              ? `/video/${video?.id?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography sx={{ color: "gray" }} variant="subtitle2">
            {video?.snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "3px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
