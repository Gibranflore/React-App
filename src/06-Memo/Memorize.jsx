import { useState } from "react";
import { useCounter } from "../hook/useCounter"
import { Small } from "./Small";


export const Memorize = () => {
        
    const {incremnt, counter} = useCounter(10);
    const [Show, setShow] = useState(true)
    
    return (
    <>
        <h1>Counter <Small value={ counter } /> </h1>
        <hr/>

        <button 
            className="btn btn-primary"
            onClick={() => incremnt() }
        >
            +1 
        </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !Show ) }
            >
                Show/Hide { JSON.stringify(Show) }
            </button>
        </>
    )
}
