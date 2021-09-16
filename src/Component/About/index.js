import React , { useState , useEffect } from 'react'
import './style.css'
import axios from 'axios';
const About = () => {

    const [ images , setImages ] = useState([]);

    useEffect(() => {
        axios.get('/js/data.json').then( response => {setImages (response.data.brands)} );
    } ,[])

    const imgasbrands = images.map( (imgeItem) =>{
    return(
        <div className="col-lg-3 col-md-6 mb-3" key={imgeItem.id}>
             <img src={imgeItem.img} alt="" className=" img-fluid w-50" />
        </div>
      )
    })
   
    return (
     <div className="about">
            <div className="about-us">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-8">
                             <div className="about-desc mt-5 pt-5">
                                <h2>About Us</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <img src="images/about-hero.svg" alt="" className="img-fluid wow slideInRight" data-wow-delay="0.5s"/>
                        </div>
                    </div>
                </div>
            </div>
           
           <div className="services my-5">
              <div className="container text-center">
                   <h2>Our Services</h2>
                   <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem <br/> ipsum dolor sit amet.</p>
                 <div className="row wow fadeInUp"  data-wow-delay="0.6s">
                     <div className="col-lg-3 col-md-6">
                         <div className="shadow">
                            <i className="fa fa-truck fa-lg"></i>
                            <h5>Delivery Services</h5>
                         </div>
                     </div>

                     <div className="col-lg-3 col-md-6">
                         <div className="shadow">
                            <i className="fas fa-exchange-alt"></i>
                            <h5>Shipping & Return</h5>
                         </div>
                     </div>

                     <div className="col-lg-3 col-md-6">
                         <div className="shadow">
                            <i className="fa fa-percent"></i>
                            <h5>Promotion</h5>
                         </div>
                     </div>

                     <div className="col-lg-3 col-md-6">
                         <div className="shadow">
                            <i className="fa fa-user"></i>
                            <h5>24 Hours Service</h5>
                         </div>
                     </div>
                 </div>
               </div>
           </div>
        
        <div className="our-brands mt-5">
             <div className="container text-center">
                <h2>Our Brands</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem <br/> ipsum dolor sit amet.</p>
                <div className="row">
                      {imgasbrands}
                </div>
             </div>
        </div>
    </div>
    )
}
export default About;



