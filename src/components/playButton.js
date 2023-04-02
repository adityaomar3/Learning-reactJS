import './playButton.css'
function playButton({message,children,onPlay,onPause}){
     let playing = false;

  function handleClick(e){
  //  console.log(e);
   e.stopPropagation();
   e.preventDefault();

    if(playing) onPause();
    
    else onPlay();

    playing = !playing
  }

    return(
      <>
        <button onClick = {handleClick}>{children}</button>
      </>
    )
}

export default playButton