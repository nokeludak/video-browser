import React from "react";
import "../styles/video.css";


const Video = ({video, onVideoSelected}) => {
  


  return (<div onClick={() => onVideoSelected(video)}>
    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
    <div>{video.snippet.title}</div>
  </div>)

}

export default Video;
