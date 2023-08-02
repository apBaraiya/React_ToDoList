import React from "react";
import { Link } from "react-scroll";
const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 col-lg-11 col-md-11 mx-auto">
                        <nav className="navbar navbar-expand-lg fixed-top">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="Home">Portfolio</Link>
                                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClassName='active_nav'  aria-current="page" smooth={true} offset={-100} duration={500} to="Home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClassName='active_nav'  smooth={true} offset={50} duration={500} to="About">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClassName='active_nav'  smooth={true} offset={50} duration={500} to="Skill">Skill</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClassName='active_nav'  smooth={true} offset={50} duration={500} to="Project">Project</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" activeClassName='active_nav'  smooth={true} offset={50} duration={500} to="Contact">Contact</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header