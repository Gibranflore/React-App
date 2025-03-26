import React from "react";

export const ShowIncrement = React.memo (({incremnt}) => {
    console.log(' se volvio a generar :(')
  return (
    <button 
        className="btn btn-primary mt-2"
        onClick={() => { incremnt(); }}
        >incremnt</button>
  )
})
