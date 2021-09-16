import React from 'react';
import './style.css'

 const Social = () => {
    return (
        <div className="social d-md-flex d-none">
            <div className="container">
                <div className="justify-content-between d-md-flex d-none">
                   <div className="social-info">
                        <span><i className="fa fa-envelope mx-2"></i><a href="mailto:ahfadaly1@gmail.com">ahfadaly1@gmail.com</a></span>
                        <span><i className="fa fa-phone mx-2"></i><a href="tel:+10216516994">(+20) 01021651694</a></span>
                </div>
                <div className="social-info">
                        <a href="https://www.facebook.com/ahfadaly" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        <a href="https://www.instagram.com/ahfadaly/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        <a href="https://twitter.com/ahfadaly" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        <a href="https://www.linkedin.com/in/ahfadaly/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Social;