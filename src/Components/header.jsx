import React from "react";
import logo from "../img/logo-school.png";

export default function header() {
    return <>
        <div className="d-flex">
            <div className="col p-1 bg-purple"></div>
            <div className="col p-1 bg-indigo"></div>
            <div className="col p-1 bg-blue"></div>
            <div className="col p-1 bg-green"></div>
            <div className="col p-1 bg-warning"></div>
            <div className="col p-1 bg-orange"></div>
            <div className="col p-1 bg-danger"></div>
        </div>
        <div className="bg-sec">
            <div className="container text-light d-flex justify-content-between pt-3">
                <ul className="list-unstyled d-flex gap-5">
                    <li><i class="fa-regular fa-envelope me-2 bg-warning p-1 rounded"></i>info@gmail.com</li>
                    <li><i class="fa-solid fa-phone me-2 bg-success p-1 rounded"></i>+1 222 555 6699</li>
                    <li><i class="fa-solid fa-clock me-2 bg-purple p-1 rounded"></i>Open : 9am to 5pm</li>
                </ul>
                <ul className="list-unstyled d-flex gap-5 ">
                    <li><i class="fa-solid fa-globe me-2 bg-info p-1 rounded"></i>Language</li>
                    <li><i class="fa-solid fa-lock me-2 bg-danger p-1 rounded"></i>Login or Create an account</li>
                </ul>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg border-bottom border-5 p-0 pt-2">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} alt="" className="img-fluid w-50" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0 d-flex gap-5">
                        <li className="nav-item home"><a className="nav-link active fw-semibold" id="home" aria-current="page" href="#"><i class="fa-solid fa-house-chimney d-block p-2 text-center rounded bg-warning text-light"></i><span>Home</span></a>
                            <ul className="list-group border-top border-4 border-warning home-dropdown d-none">
                                <li className="list-group-item"><a href="" className="dropdown-item">Kids School</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Kids Store</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Kids Daycare</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Kids Fashion</a></li>
                            </ul>
                        </li>
                        <li className="nav-item page"><a className="nav-link active fw-semibold" id="pages" aria-current="page" href="#"><i class="fa-solid fa-list d-block p-2 text-center rounded bg-danger text-light"></i><span>Pages</span></a>
                            <ul className="list-group border-top border-4 border-danger page-dropdown d-none">
                                <li className="list-group-item"><a href="" className="dropdown-item">About us</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Team</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Testimonial</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Events</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Photo Gallery</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Pricing Table</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Services</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Services Details</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Search Result</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Contect Us</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">FAQ</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Sign Up / Log in</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Error 404</a></li>
                                <li className="list-group-item"><a href="" className="dropdown-item">Comming soon</a></li>
                            </ul></li>
                        <li className="nav-item"><a className="nav-link active fw-semibold" id="courses" aria-current="page" href="#"><i class="fa-solid fa-file-lines d-block p-2 text-center rounded bg-success text-light"></i><span>Courses</span></a></li>
                        <li className="nav-item"><a className="nav-link active fw-semibold" id="store" aria-current="page" href="#"><i class="fa-solid fa-shop d-block p-2 text-center rounded bg-blue text-light"></i><span>Store</span></a></li>
                        <li className="nav-item"><a className="nav-link active fw-semibold" id="blog" aria-current="page" href="#"><i class="fa-regular fa-calendar-days d-block p-2 text-center rounded bg-purple text-light"></i><span>Blog</span></a></li>
                        <li className="nav-item"><a className="nav-link active fw-semibold" id="components" aria-current="page" href="#"><i class="fa-regular fa-folder d-block p-2 text-center rounded bg-indigo text-light"></i><span>Components</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}