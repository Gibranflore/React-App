import { NavLink, Link } from 'react-router-dom'


export const NavVar = () => {
    return (

    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link> 
            {/* Los Links son parte de ract-router-dom para cambiar de pagina es como un a */}
  
        <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">

        <NavLink 
            className={ ({isActivate}) => `nav-link ${ isActivate ? 'active' : '' }`} 
            to={'/'}>
            Home
        </NavLink>
        {/* Los NavLink son para cambiar de pagina es como otro tipo de link todo lo isActivate es saber si esta activo osea si estamos en esa pagina */}

        <NavLink 
            className={ ({isActivate}) => `nav-link ${ isActivate ? 'active' : '' }`} 
            to={'/about'}>
            About
        </NavLink>

        <NavLink 
            className={ ({isActivate}) => `nav-link ${ isActivate ? 'active' : '' }`} 
            to={'/login'}>
            LoginPage
        </NavLink>

      </ul>
    </div>
  </div>

</nav>
    </>
    )
}
