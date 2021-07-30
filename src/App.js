import React, {useState} from "react";
import './App.css';
import './styles/styles.css';
import Search from "./components/Search";
import youtubeApi from "./api/youtubeApi";
import VideoList from "./components/VideoList";

function App({ onVideoSelected }) {
  const [videosMetaInfo, setVideoMetaInfo] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
 
  const onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    setSelectedVideoId(response.data.items);
    setVideoMetaInfo(response.data.items[0].id.videoId);    
    
    };
    console.log(videosMetaInfo, selectedVideoId);
    
  
  return (
    <div className="App">
     <Search onSearch={onSearch}/>
     <VideoList onVideoSelected={onVideoSelected} data={videosMetaInfo} />
    </div>
  );
};


export default App;
