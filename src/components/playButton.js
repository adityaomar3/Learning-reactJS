import './playButton.css'
function playButton({message,children}){


  function handleClick(){
    console.log({message})
  }

    return(
      <>
        <button onClick = {handleClick}>{children}</button>
      </>
    )
}

export default playButton