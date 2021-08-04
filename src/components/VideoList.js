import React from "react";

import Video from "./Video";

const VideoList = ({ data, onVideoSelected }) => {

  const getVideos = data.map((video) => {
    return <Video key={video.id.videoId} video={video} onVideoSelected={onVideoSelected} />
  })

  return (
    <div className="video-list">
      <div style={{ padding: "20px 0", cursor: "pointer" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}
        >
          Videos List
        </h3>
        {getVideos}
      </div>
    </div>
  );
};

export default VideoList;