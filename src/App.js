import './App.css';
import PlayButton from './components/playButton';
import Video from './components/Video';
import videoDB from './data/data'
import Counter from './components/counter'
import { useState } from 'react';
function App() {

  const [videos, setVideos] = useState(videoDB)

  return (
    <div className="App"
    // onClick ={()=>alert('PLAY')}
    >
      <div>
        <button onClick={() => {
          


          setVideos([...videos,{
            id: videos.length+1,
            title: 'Demo JS tutorial',
            views: '100K',
            time: '1 year ago',
            channel: 'Coder Dost',
            verified: true
          }])
        }}>Add Video</button>
      </div>
      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('PLAY')}
            onPause={() => console.log('Pause')} >
            {video.title}
          </PlayButton>

        </Video>)
      }

      <div style={{ clear: 'both' }}>
        {/* here onClick is just a name which we are passing it is actually working on playbutton button tag can declare it onsmash too*/}

        <Counter></Counter>
        {/* <PlayButton message="hi again" onClick ={()=>alert('PLAY')}>play2</PlayButton> */}
      </div>
    </div>
  );
}

export default App;
// export default videos;
