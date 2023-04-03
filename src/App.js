import './App.css';
import AddVideo from './components/addVideo';
import VideoList from './components/VideoList';
import PlayButton from './components/playButton';
import Video from './components/Video';
import videoDB from './data/data'
// import Counter from './components/counter'
import { useState } from 'react';
function App() {

  const [videos, setVideos] = useState(videoDB)


  function addVideos(video){
    setVideos([
      ...videos,
      
        {...video, id: videos.length+1}
    ])
  }

 
  return (
    <div className="App"
    // onClick ={()=>alert('PLAY')}
    >
      <AddVideo addVideos = {addVideos}></AddVideo>
      <VideoList videos = {videos}></VideoList>
    </div>
  );
}

export default App;
// export default videos;
// id: videos.length + 1,
//         title: 'Demo JS tutorial',
//         views: '1M',
//         time: '1 month ago',
//         channel: 'omar',
//         verified: true,