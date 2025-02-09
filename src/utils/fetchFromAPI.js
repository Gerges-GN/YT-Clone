import axios from "axios";

// const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const BASE_URL = "https://youtube-data-api-v33.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_YOUTUBE_API_KEY,
    // "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    "x-rapidapi-host": "youtube-data-api-v33.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
