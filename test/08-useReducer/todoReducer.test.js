
import { todoReducer } from "../../src/08-useReducer/todoReducer"


describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('Debe de regresar el estado inicial', () => { 

        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe(initialState)
    })

    test('Debe de Agreagar un Todo', () => {
        
        const action = {
            type: '[TODO] add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false,
            }  
        };
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 )
        expect( newState ).toContain(action.payload)
    });

    test('Debe de Eliminar un Todo', () => {

        const action = {
            type: '[TODO] remove Todo',
            payload: 1,
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 )
        
    });

    test('Debe de actualizar el Toggle del Todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        }

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const updatedState = todoReducer(newState, action); // Usamos `newState` como entrada
        expect(updatedState[0].done).toBe(false);

        
    });
});