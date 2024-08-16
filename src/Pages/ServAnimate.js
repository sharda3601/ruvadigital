import React from "react";
import Star from './Star';


function ServAnimate() {
    return ( 
        <>
        <section className="intro-section">
        <h1 className='text-start'>SEO</h1>
       <div className='row'>
        <div className='col-md-6 col-sm-12 col-lg-6'>
          <p>which is the practice of increasing  the quantity 
            & quality of traffic to your website through organic serach engine results.</p>
        </div>
       <div className="col-sm-12 col-md-6 col-lg-6 shape-container">
            <div className='cir'></div>
            <div className='cir1'></div>
            <div className='filled'>
              <div className='unfilled'></div>
            </div>
            <Star></Star>
            <div className='diagonal'></div>
            <div className='polygon'></div>
            <div className='line'></div>
            <div className='square1'></div>
            <div className='triangle'></div>
            <div className='half-circle'></div>
            <div className='bigcir'></div>
            <div className='smallcir'></div>
    </div> 
       </div>
          
      </section>
        </>
     );
}

export default ServAnimate;