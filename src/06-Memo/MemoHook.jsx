import { useMemo, useState } from "react";
import { useCounter } from "../hook/useCounter"

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahi vamos..')
    }
    return  `${iterationNumber} done!!`;
}

export const MemoHook = () => {
        
    const {incremnt, counter} = useCounter(400);
    const [Show, setShow] = useState(true)

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter] ) 
    
    return (
    <>
        <h1>Counter: <small>{counter }</small></h1>
        <hr/>

        <h4> { memorizedValue } </h4>

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
