import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import {Loader, SideBar, Videos} from "../components"
import { fetchFromAPI } from "../utils/fetchFromApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory}`
    ).then((data) => setVideos(data.items));
  }, [selectedCategory]);
  
  if (!videos) return <Loader />;

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        height:  "calc(100vh - 75px)" ,
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "86vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          aignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography sx={{ color: "#fff", fontSize: "11px", textWrap: "nowrap", display: {xs: "none", md: "block"} }}>
          Copyright 2025 Gerges Naguib
        </Typography>
      </Box>

      <Box
      sx={{
        overflowY: "scroll",
        height: "100%",
        width: "100%",
       
      }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#fff", mb: 2, p: 2 }}
        >
          {selectedCategory} <span style={{ color: "#FF0000" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed