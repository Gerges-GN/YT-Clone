import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import {SideBar, Videos} from "../components"
// import { fetchFromApi } from "../utils/fetchFromApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
  // }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "86vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography variant="body2" sx={{ color: "#fff", textWrap: "nowrap" }}>
          Copyright 2025 Gerges Naguib
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#fff", mb: 2, p: 2 }}
        >
          {selectedCategory} <span style={{ color: "#FF0000" }}>Videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
}

export default Feed