import { useCounter } from "../hook/useCounter"

export const CounterWithCustomHook = () => {

  //Lo exportamos del useCounter.js
  const { counter, incremnt, reset, decrement } = useCounter(); //Este es el counter que cambia en el navegddor

  return (
    <>
        <h1>Counter with Hook {counter}</h1>

        <hr/>
       
       {/* El evento del click manda todo esto (event) => incremnt(event) */}

      <button className="btn-primary" onClick={ (event) => incremnt(2) } >+1</button> //el evento va a incrementar en 2 en 2
      <button className="btn-primary" onClick={ reset } >Reseat</button>
      <button className="btn-primary" onClick={ (event) => decrement(2) } >-1</button>
    </>
  )
}
