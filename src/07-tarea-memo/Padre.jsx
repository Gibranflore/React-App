import React, { useCallback, useMemo } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    
    
    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);
    
    
    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }
    
    //const memorizeValue = useMemo(() => incrementar(valor), [valor])
    const memorizeValue = useCallback(
      ( num ) => {
        setValor( valor + num )
      },
      [],
    )

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ memorizeValue }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
