import React from "react";
import Header1 from "./Header1";
import Footer1 from './Footer1';
import './Contact1.css';

function Contact1() {
    return (         
    <React.Fragment>
        <Header1></Header1>
        <div className="row py-3 text-white color">
            <div className="col-4 p-5 ms-auto">
                <img src="images/RuvAa 1.png" alt="image" width={150} className="mb-3"></img>
                <img src="" alt="" className="r p-4 rounded-circle bg-light p-4 ms-4"></img>
                <h1 className="text-lowercase display-5"><span className="text-uppercase">W</span>e've got a 
                great feelings about this</h1>
                <button className="btn btn2 btn-lg btn-outline-dark py-3 my-4"><b>LET'S GET STARTED</b></button>
                <p className="p">speak to Us</p>
                <p className="p">09876655454</p>
                <p className="p">Contact@ruvadg.com</p>
            </div>
            <div className="col-6" style={{position: 'relative'}}>
                <div className="semi"></div>
                <div className="semi1"></div>
                <div className="poly9"></div>
                <div className="poly10"></div>
                <img src="images/Ellipse 242.png" alt="image" className="ii" width={250}></img>
                <div className="square"></div>
                <div className="circle"></div>
                <div className="sq"></div>
                <div className="poly11">
                <img src="images/Ellipse 246.png" alt="image" width={130} className="img11 mx-auto d-block"></img>
                <br/>
                <img src="images/Ellipse 245.png" alt="image" width={130} className="img12 mx-auto d-block"></img>
                </div>
                <div className="tri"></div>
                <div className="poly12">
                <img src="images/Ellipse 244.png" alt="image" width={130} className="img13 mx-auto d-block"></img>
                </div>
                <div className="sq1"></div>
                <img src="images/Rectangle 4333.png" alt="image" className="iii" width={200}></img>
                <div className="sq2"></div>
                <div className="sq3"></div>

            </div>
        </div>
        <div className="rounded section1">
            <div className="d-flex justify-content-center p-3">
            <span className="me-5">367789090</span>
            <span className="ms-5">ruva2gmail.com</span>
            </div>
           <div className="ms-5 my-5 p-5">
           <h1 className="mx-3">Let's get started!</h1>
            <p className="mb-0 pp mx-3">Fill in the blanks and we'll respond in one business day.</p>
            <p className="text-secondary pp mx-3">Just want to chat? call or email, we're a nice bunch.</p>
            <form>
                <div className="row my-4">
                    <div className="col-sm-12 col-lg-5 mx-3">
                    <label className="form-label">What's your name?</label>
                    <input type="text" className="focus pp" placeholder="your name here"></input>
                    </div>
                    <div className="col-sm-12 col-lg-5 mx-3">
                        <label className="form-label">Name of your company/ organization?</label>
                        <input type="text" className="focus pp"></input>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-sm-12 col-lg-5 mx-3">
                    <label className="form-label">How shall we contact you?</label>
                    <input type="text" className="focus pp" placeholder="Phone number"></input>
                    </div>
                    <div className="col-sm-12 col-lg-5 mx-3">
                        <label className="form-label">Email Address</label>
                        <input type="text" className="focus"></input>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-10 my-5 mx-3">
                    <label className="form-label">Tell us about your project</label>
                    <p className="text-secondary pp">Let us know how can we help you</p>
                    <textarea col="10" row="30" className=""></textarea>
                </div>
                <div className="col-lg-10 col-sm-12 my-5 mx-3">
                    <label className="form-label">How do you hear about us</label>
                    <input type="text" className="focus pp" placeholder="From a friend? From a google?"></input>
                </div>
                <button type="submit" className="col-10 p-2 btnb mx-auto my-3"><b>Submit</b></button>
            </form>
           </div>
        </div>
            <Footer1></Footer1>
        </React.Fragment>
     );
}

export default Contact1;
