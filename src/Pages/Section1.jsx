import React from "react";
import './Section1.css';
function Section1() {
    return (  
        <React.Fragment>
            <div className="row mx-5">
                <div className="col p-5 ms-4">
                    <img src="images/RuvAa 1.png" alt="img1" width={200} className="mb-3"></img>
                    <h1>Pune's Brightest
                        <br/> digital agency</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, inventore ad ducimus ex nisi dolorum voluptatibus cupiditate quasi quia itaque. Nesciunt sit molestiae quas nostrum voluptatum soluta unde sed qui.</p>
                    <button type="button" className="btn btn-lg btn-outline-dark btn2"><b>WATCH VIDEO</b></button>
                </div>
                <div className="col">
                    <div className="cylinder">
                    <div className="poly">
                    <img src="images/c2 (3).png" className="img1" alt="image" width={100}/>
                    </div>
                    <div className="poly poly1">
                        <img src="" alt="" className="img2 rounded-circle" width={100}/>
                    </div>
                    <img src="images/c2 (4).png" className="img3" alt="image" width={130}></img>
                    </div>
                    <div className="cylinder1">
                        <img src="images/c2 (1).png" alt="image" className="img4" width={100}></img>
                        <div className="poly poly2"></div>
                        <div className="poly poly3">
                            <img src="images/Rectangle 4275.png" alt="image" className="img5" width={100}></img>
                        </div>
                        <div className="poly poly4">
                        <img src="images/c1.png" alt="image" className="img7" width={100}></img>
                        </div>
                        <img src="images/c2 (2).png" alt="image" className="img6" width={100}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Section1;