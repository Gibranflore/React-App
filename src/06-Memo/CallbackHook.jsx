import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

   const incrementFather = useCallback(
        () => { 
            setCounter( ( value ) => value + 1);
        },
        [], )
  
    const [Counter, setCounter] = useState(10)
    
    // const increment = () => {
    //     setCounter( Counter + 1);
    // }

    return (
        <>  
        <h1>CallbackHook {Counter} </h1>
        <hr/>
        <ShowIncrement incremnt={ incrementFather }/>
        </>
    )
}


