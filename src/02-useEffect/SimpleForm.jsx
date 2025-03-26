import { useEffect, useState } from "react"
import {Message} from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'correo@gmail.com'
    })

    const { username, email } = formState;

    //Funcion para hacer el cambio
    const onInputChange = ( {target} ) => {
       const { name, value } = target;
      setFormState({
        ...formState,
        [ name ]: value
      });
    }

useEffect( () => { //si no tiene ninguna dependencia se vuelve a redibujar el useeffect
  //  console.log('useEffect called');
}, [] );

useEffect(() => {
  // console.log( 'formated change!!' );
}, [formState]);

useEffect(() => {
  // console.log( 'email change!!' );
}, [email]);

  return (
    <>
        <h1>Formulario</h1>

        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
        />

        <input
            type="email"
            className="form-control mt-2"
            placeholder="correo@gmail.com"
            name="email"
            value={email}
            onChange={ onInputChange }
        />

        {
            (username === 'strider2' ) &&  <Message/>
        }



    </>
    

  )


}
