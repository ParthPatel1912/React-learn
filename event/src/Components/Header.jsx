import React from 'react'
import '../assets/css/style.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { HOME } from '../assets/link_constant/link_constant';
import { Button } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem("authenticated");
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div style={{ marginBottom: '100px' }}>
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
                                                Filter
                                            </NavLink>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <NavLink className="dropdown-item" to={`singlefilter`}>Single column filter</NavLink>
                                                <NavLink className="dropdown-item" to={`multifilter`}>Multi column filter</NavLink>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={`todo`}>TODO</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={`formikForm`}>Formik Form</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={`yupForm`}>Yup Form</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={`reactHookForm`}>React Hook Form</NavLink>
                                        </li>
                                    </ul>
                                        {loggedInUser === false || loggedInUser === null ? <NavLink to={"/signup"} className="d-none d-sm-block btn_1 home_page_btn">sing up</NavLink> : <Button className="d-none d-sm-block btn_1 home_page_btn" onClick={logout}>LOGOUT</Button>}
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
