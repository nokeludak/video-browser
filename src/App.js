import React, {useState} from "react";
import './App.css';
import './styles/styles.css';
import Search from "./components/Search";
import youtubeApi from "./api/youtubeApi";
import VideoList from "./components/VideoList";
import VideoItem  from "./components/VideoItem";

function App({ onVideoSelected }) {
  const [videosMetaInfo, setVideoMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
 
  const onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    
    setVideoMetaInfo(response.data.items);   
    setSelectedVideoId(response.data.items[0]);
    
    };
    console.log(videosMetaInfo, selectedVideoId);

    const selectVideo = (video) => {
      setSelectedVideoId(video)
    }

  return (
    <div className="App">
     <Search onSearch={onSearch}/>
     <VideoList onVideoSelected={selectVideo} data={videosMetaInfo} />
     <VideoItem videoId={selectedVideoId} />
    </div>
  );
};


export default App;
