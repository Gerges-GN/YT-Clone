import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos, Loader } from "../components";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideoDetail = async () => {
      const videoDetail = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetail(videoDetail.items[0]);
    };
    const getRelatedVideos = async () => {
      const relatedVideos = await fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      );
      setVideos(relatedVideos.items);
    };
    getVideoDetail();
    getRelatedVideos();
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box
      sx={{ height: "calc(100vh - 75px)", bgcolor: "#000", overflowY: "auto" }}
    >
      <Stack direction={{ xs: "row", md: "row" }} className="videoDetail">
        <Box
          flex={1}
          sx={{
            bgcolor: "#000",
            display: "flex",
            flexDirection: "column",
            minWidth: "100%",
            minHeight: { xs: "200px", md: "auto" },
            position: { xs: "static", md: "sticky" },
            // position: "sticky",
            top: "0px",
          }}
          className="box"
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            className="react-player"
          />

          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>

          <Stack
            direction={{ md: "row" }}
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>

            <Stack
              direction="row"
              gap="20px"
              alignItems="center"
              mt={{ xs: "10px", md: 0 }}
            >
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          py={{ md: 1, xs: 5 }}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
