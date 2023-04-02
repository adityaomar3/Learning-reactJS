import './Video.css';

function Video({title,id,channel="Coder Dost",views,time,verified,children}) {
    // let verified = true;
    // let channelJSX;
    // if(verified){
        
    // }else{
    //     channelJSX = 
    // }
    console.log(id)
    return (
      <>
      <div className='container'>
      <div className="pic">
      <img src={`http://placeimg.com/160/90/${id}`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      {<div className="channel">{channel}{verified&& '✅' }</div>}
      {/* {channelJSX} */}
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
      </div>
      </>
  );
}

export default Video;
