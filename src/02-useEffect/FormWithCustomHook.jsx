import { useEffect, useState } from "react"
import { useForm } from "../hook/useForm";


export const FormWithCustomHook = () => {

  const { formState, onInputChange, username, password, email, onResetForm } = useForm ({
        username: '',
        email: '',
        password: '',
        onResetForm:'',
    })

    //const {username, email, password} = formState;

  return (
    <>
        <h1> Formulario con Custom Hook </h1>

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

        <input
            type="password"
            className="form-control mt-2"
            placeholder="password"
            name="password"
            value={password}
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </>
    

  )


}
