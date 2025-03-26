

import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hook/index'

describe('Pruebas de counter', () => { 

    test('Debe de retornar los valores por defecto', () => { 

            // El renderHook es para hacer un prueba para un customhook
            const { result } = renderHook( () => useCounter() ); 
            // Tiene que ser una funcion de fleacha al custom, el result es el nombre que contiene todo el custom
            const {decrement, counter, incremnt, reset,} = result.current
            // Hacemos una Desestructuracion y llamamos todo lo que almacena result
            expect(counter).toBe(10)
            expect(incremnt).toEqual(expect.any( Function ) );
            expect(decrement).toEqual(expect.any( Function) )
            expect(reset).toEqual(expect.any( Function ))
            // el expecto.any espera que todo sea una fucion ya que los componentes si son funciones
        })
        
    test('el counter debe generar el valor de 100', () => {

            const { result } = renderHook( () => useCounter(100) );
            expect( result.current.counter).toBe(100);
            // El result.current.counter llama el custom y le asigna el valor de 100
        })

    test('debe de incrementare le contador', () => {

            const { result } = renderHook( () => useCounter(100) );
            const { counter, incremnt } = result.current

            act(() => {
                incremnt();
                incremnt(2);
            })
            
            
            expect(result.current.counter).toBe(103);

        })

    test('debe de decremeentar le contador', () => {

            const { result } = renderHook( () => useCounter(100) );
            const { counter, decrement } = result.current

            act(() => {
                decrement();
                decrement(2);
            })
            
            
            expect(result.current.counter).toBe(97);

        })

    test('debe de reset le contador', () => {

            const { result } = renderHook( () => useCounter(100) );
            const { counter, reset } = result.current

            act(() => {
                reset();
            })
            
            
            expect(result.current.counter).toBe(100);

        })
            
})