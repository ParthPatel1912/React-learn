import React from 'react'
import '../assets/css/style.css'
import { NavLink } from 'react-router-dom'
import { CHILD_LINK, HOME } from '../assets/link_constant/link_constant';

const Header = () => {
    return (
        <div style={{marginBottom : '100px'}}>
            <header className="main_menu menu_fixed">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <NavLink className="navbar-brand main_logo" to={HOME}> </NavLink>
                                <NavLink className="navbar-brand single_page_logo" to={HOME}> </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu_icon"></span>
                                </button>

                                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={HOME}>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={CHILD_LINK}>Form</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to={CHILD_LINK} id="navbarDropdown"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Hooks
                                            </NavLink>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Callback`}> Callback</NavLink>
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Contextapi`}>ContectAPI</NavLink>
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Form`}>Form using Class</NavLink>
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Formfun`}>Form using Function</NavLink>
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Memo`}>Memo</NavLink>
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Ref`}>Ref</NavLink>
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Effect`}>Effect</NavLink>
                                                <NavLink className="dropdown-item" to={`${CHILD_LINK}/Reducer`}>Reducer</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to={`/Param`} id="navbarDropdown1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                pages
                                            </NavLink>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                <NavLink className="dropdown-item" to={`/Param/src.logo`}>Pass media to URL</NavLink>
                                                <NavLink className="dropdown-item" to={`/Param/src.logo/132`}>Pass media to URL with ID</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"contact.html"}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <NavLink to={"/signup"} className="d-none d-sm-block btn_1 home_page_btn">sing up</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
