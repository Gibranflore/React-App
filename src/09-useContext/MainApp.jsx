import { Navigate, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/userProvider'
import { LoginPage, AboutPage, HomePage, NavVar } from './index'



export const MainApp = () => {
    return (
    
        <UserProvider>

            <NavVar/> 
            
            {/* Estamos importando el componente NavBar que tiene todo el navegador */}

            <hr/>

            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="about" element={<AboutPage />}/>
                <Route path="login" element={<LoginPage />}/>
                <Route path='/*' element={<Navigate to="/about" />}/>
            </Routes>
            {/* el path ayuda a las rutas de las paginas en el barra de navegacion y la etiqueta de la pagina la dirige  */}
        </UserProvider>

    )
}
