import React from 'react'
import '../assets/css/style.css'
import { NavLink } from 'react-router-dom'
import { HOME } from '../assets/link_constant/link_constant';

const Header = () => {
    return (
        <div style={{marginBottom : '100px'}}>
            <header className="main_menu menu_fixed">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={HOME}>Home</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to={{}} id="navbarDropdown"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                State
                                            </NavLink>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <NavLink className="dropdown-item" to={`counterclass`}>Counter using class</NavLink>
                                                <NavLink className="dropdown-item" to={`counterfun`}>Counter using function</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to={`/Param`} id="navbarDropdown1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Props
                                            </NavLink>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                <NavLink className="dropdown-item" to={`/Param/src.logo`}>Pass media to URL</NavLink>
                                                <NavLink className="dropdown-item" to={`/Param/src.logo/132`}>Pass media to URL with ID</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={`color`} id="navbarDropdown"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Color
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
