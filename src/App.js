import './App.css';
import PlayButton from './components/playButton';
import Video from './components/Video';
import videos from './data/data'
function App() {
  
  return (
    <div className="App">
      <div>Videos</div>
       {
        videos.map(video=><Video
        key={video.id} 
        title={video.title} 
        views={video.views}
        time={video.time}
        channel={video.channel} 
        verified={video.verified}
        id = {video.id}
      ></Video>)
       }
       
       <div style = {{clear:'both'}}>
       <PlayButton message="hi" >play</PlayButton>
       <PlayButton message="hi again">play2</PlayButton>
       </div>
    </div>
  );
}

export default App;
// export default videos;
