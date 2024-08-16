import React from "react";
import './Header1.css'
function Header1() {
    return ( 
        <React.Fragment>
                <div className="bg-dark">
                    <p className="text-white ms-4 p-1">Contact No. +91 6789900876</p>
                </div>
                {/* navbar */}
            <nav class="navbar navbar-expand-lg pb-3 border-bottom">
                    <button class="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-dark"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <a class="nav-link active text-dark fw-bold px-3" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark fw-bold px-3" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Services</a>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-dark fw-bold px-3" href="About1">About Us</a>
                    </li>
                </ul>
                <div className="d-flex ms-auto">
                <a className="btn btn-dark ms-auto btn1" href="Contact1"><b>Contact Us</b></a>
                </div>
                </div>
            </nav>
        </React.Fragment>
     );
}

export default Header1;