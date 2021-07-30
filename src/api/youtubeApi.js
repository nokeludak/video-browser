import axios from "axios";
const KEY = "AIzaSyB04sLHQwqw2Owt8dasFvsPTVTJKMawbWY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});