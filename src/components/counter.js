import {useState} from "react";
function Counter(){
    const[number, setNumber]  = useState(0);
    function handleClick(e){
        e.stopPropagation();
        //number+1 stops the state if delay is given or can say it preserves the state
        // but number=>number +1 works asynchronously
        setNumber(number=>number+1);
    }

    return(
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>

        </>
        
    )

   
}
export default Counter;