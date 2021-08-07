import React from "react";

const VideoItem = ({ onVideoSelected, videoId }) => {
    console.log(videoId)
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
  return (
   
    <div>
        <div className="ui embed">
            <iframe allowFullScreen
            title={videoId}
            
            src={`https://www.youtube.com/embed/${videoId.id.videoId}`}/>
            </div>
            <div>
                <p style={{fontSize: 30}}>{videoId.snippet.title}</p>
                <p>{videoId.snippet.description}</p>
            </div>
    </div>
    
  );
}


export default VideoItem;