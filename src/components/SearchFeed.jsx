import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Loader, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items);
    };
    fetchData();
  }, [searchTerm]);

    if (!videos) return <Loader />;
  return (
    <Box
      minHeight={"90%"}
      bgcolor={"#000"}
      sx={{
        overflowY: "scroll",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#fff", mb: 2, p: 2 }}
      >
        Search for: <span style={{ color: "#FF0000" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
