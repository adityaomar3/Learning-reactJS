import './App.css';
import PlayButton from './components/playButton';
import Video from './components/Video';
import videos from './data/data'
function App() {
  
  return (
    <div className="App" onClick ={()=>alert('PLAY')}>
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
      >
      <PlayButton  
       onPlay ={()=>console.log('PLAY')} 
       onPause ={()=>console.log('Pause')} >
       {video.title}
       </PlayButton>
        
      </Video>)
       }
       
       <div style = {{clear:'both'}}>
       {/* here onClick is just a name which we are passing it is actually working on playbutton button tag can declare it onsmash too*/}
       
      
       {/* <PlayButton message="hi again" onClick ={()=>alert('PLAY')}>play2</PlayButton> */}
       </div>
    </div>
  );
}

export default App;
// export default videos;
