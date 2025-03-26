import { useCounter } from "../hook/useCounter";
import { useFetch } from "../hook/useFetch"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHook = () => {

  const { incremnt, decrement, counter } = useCounter(1)

  const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter} ` );


  return (

    <>
      <h1>Informacion del Pokemon</h1>

      <hr/>

      {/* si isLoading es verdad se mostrara cargando  */}

      {isLoading 
        ? <LoadingMessage/>
        : <PokemonCard
            id={counter}
            name={data.name}
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,  
                  ]}

            />
      }

      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}

      <button
      className="btn btn-primary mt-2"
      onClick={ () => counter > 1 ? decrement(): null }
      >
      Anterior
      </button>

      <button
      className="btn btn-primary mt-2"
      onClick={ () => incremnt() }
      >
        
      Siguiente
      </button>

    </>
  )
}
