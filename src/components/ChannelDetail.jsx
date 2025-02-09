import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(
        `channels?part=snippet,statistics,brandingSettings&id=${id}`
      );


      setChannelDetail(data?.items[0]);
      fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
        (video) => setVideos(video.items)
      );
    };
    fetchData();
  }, [id]);
  console.log(channelDetail);
  return (
    <Box minHeight={"90%"}>
      <Box>
        <div
          style={{
            height: "300px",
            background: `center / cover no-repeat url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
