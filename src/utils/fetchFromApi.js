import axios from "axios";

const BASE_URL = "https://youtube-v311.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
    regionCode: 'EG',
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_YOUTUBE_API_KEY,
    "x-rapidapi-host": "youtube-v311.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
