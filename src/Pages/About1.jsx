import React from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import './About1.css';

function About1() {
    return ( 
        <React.Fragment>
            <Header1></Header1>
            <div className="mt-5 contain">
                <span alt="" className="rounded-circle p-2 py-3 arrow">
                <i class="bi bi-arrow-left"></i>
                </span>
                <h5 className="text-primary about">About Us</h5>
                <p className="mx-5 text-center">We, at ruva Digital Media, apply neuromarketing 
                    <br/>and behavioural science to design, digitiz<br/> 
                    and grow your business.
                </p>
                <div className="ruva" style={{position: "relative",padding:200, paddingBottom:10}}>
                    <span>R</span>
                    <span>U</span>
                    <span>V</span>
                    <span>A</span>
                    <div className="ruva1" style={{position : "relative", padding:'60'+'px', width:'400px'}}>
                        <span className="rounded-circle p-3"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="ruva2">
                    <span>R</span>
                    <span>U</span>
                    <span>V</span>
                    <span>A</span>
                </div>
                <div className="p-5 my-5 section2 text-white">
                    <h1>what is SEO?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero harum fuga eveniet, sit, ipsa facere voluptatum dolores minima,
                         cupiditate quaerat? Aliquam ea impedit, eaque consequatur quidem neque veniam alias.</p>
                         <h3>what do we serve?</h3>
                         <p style={{fontWeight: '700', fontSize: '33px'}}>A strategy and a broad spectrum of creative brand marketing services in the digital world.</p>
                         <div className="section3 row">
                         <div className="col-2">SEO</div>
                         <div className="col-2">SMM</div>
                         <div className="col-3">Content Marketing</div>
                         <div className="col-3">Graphics Design</div>
                         <div className="col-3">AI Marketing</div>
                         <div className="col-3">AI Marketing</div>
                         <div className="col-3">Google Ad's</div>
                         <div className="col-4">Website Developement</div>
                         </div>
                </div>
                <div className="section4 py-4 my-5">
                    <h2 className="text-capitalize ps-5">Frequently asked questions (FAQ)</h2>
                    <ul style={{listStyle:"none"}}>
                        <li><h3>+ which are the best SEO strategies?</h3></li>
                    <hr></hr>
                    <h5 className="mx-5 ps-5">
                        <ol>
                            <li>For one, ensure that your website provides valueable and high-quality content.</li>
                            <li>Give due attention to the SEO-friendly keywords relevant to your website.</li>
                            <li>Hire a search engine optimization service agency to ensure that you reach your target 
                                audience and boostyour organic growth.
                            </li>
                        </ol>
                    </h5>
                    <hr></hr>
                    <li><h3>+ why is SEO important for your website?</h3></li>
                    <hr className="m-0 p-0 w-100"></hr>
                    <li><h3>+ How do I improve the SEO ranking of a website</h3></li>
                    <hr></hr>
                    </ul>
                </div>
                <div className="" style={{position: 'relative'}}>
                    <img src="images/slider.png" alt="image" style={{width: '100%',height:'600px'}}></img>
                    <h1 className="text-white" style={{position: "absolute", top : '15%', left:'25%'}}>Let's create a measurable <br/> 
                    impact on your business.</h1>
                    <button type="button" className="btn btn-light px-4 py-2 btn-lg d-block" style={{position:"absolute", top:'40%', left:"39%", fontWeight:"900"}}><b>DESIGN A QUOTE</b></button>
                </div>
            </div>
            <Footer1></Footer1>
        </React.Fragment>
     );
}

export default About1;