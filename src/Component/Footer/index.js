import React from 'react'
import { SectionHome , SocialLink , Copyright ,CopyHead } from  './style.js'
const Footer = () => {
    return (
        <div className="footer">
            <SectionHome>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-6 col-12 icon d-flex mt-3">
                        <SocialLink href="https://www.facebook.com/ahfadaly" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg fa-fw"></i></SocialLink>
                        <SocialLink href="https://www.instagram.com/ahfadaly/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg fa-fw"></i></SocialLink>
                        <SocialLink href="https://twitter.com/ahfadaly" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg fa-fw"></i></SocialLink>
                        <SocialLink href="https://www.linkedin.com/in/ahfadaly/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg fa-fw"></i></SocialLink>
                    </div>

                    <div className="input-group mt-3 col-xl-4 col-lg-6 col-sm-6  col-12">
                        <input type="text" className="form-control bg-dark border-dark" placeholder="Email address" />
                        <button type="button" className="btn btn-success">Subscribe</button>
                    </div>
                </div>
            </div>
            </SectionHome>
            <Copyright>
                 <div className="container text-center text-white">
                     <div className="titel">
                         <CopyHead>Copyright © 2021 Company Name | Designed by TemplateMo</CopyHead>
                     </div>
                 </div>
            </Copyright>
        </div>
        
    )
}
export default Footer ;

