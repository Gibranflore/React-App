import { useState } from "react"
import { UserContext } from "./useContext"

// const user = {
//     id: 1,
//     email: 'correo@gmail.com',
//     name: 'gibran',
// }


export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

    return (
    // Todos tendran acceso a los datos de hola y user para compartir a los hijos si necesidad de escribir siempre props
    // <UserContext.Provider value={({hola: 'Mundo', user: user})}>
        <UserContext.Provider value={({ user, setUser })}>
            { children }
        </UserContext.Provider>
    )
}
