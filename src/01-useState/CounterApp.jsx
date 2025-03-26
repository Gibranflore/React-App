import { useState } from "react"

export const CounterApp = () => {

    const [state , setCounter] = useState({ //Objetos con datos numericos
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3 } = state;// Desestructuramos cada uno con el metodo state

  return (
    //Muestra el counter el numero y el nombre
    <>
        <h2>Counter:{ counter1 }</h2>
        <h2>Counter:{ counter2 }</h2>
        <h2>Counter:{ counter3 }</h2>

        <hr></hr>
  
        <button className="btn" onClick={ 
            ( ) => setCounter ({
                ...state,// es el state que esta desestructurando los counters y llama a todos
                counter1: counter1  + 1, //llamamos solo el primero e incrementa a 1
                 }) 
            }> +1 </button>
            
    </>
  )
}


