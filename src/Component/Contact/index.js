import React, { Component } from 'react'
import './style.css'

class Contact extends Component {
    handelClick = (e) => {
        e.preventDefault();
    }
    render(){
    return (
    <div className="contact">
        <div className="contact-us pt-4">
          <div className="container text-center">
              <h2>Contact Us</h2>
              <p className="lead">Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit<br/> amet.</p>
          </div>
            <div className="map">
             <iframe title="My map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30826973345!2d31.41785917296069!3d31.0413814216918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1631316145530!5m2!1sar!2seg"/>
            </div>
        </div>
         <form onClick={this.handelClick} className="my-5">
             <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="" id="first" required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="" id="last" required/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" className="form-control" placeholder="" id="company" required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" className="form-control" placeholder="phone" id="phone" required/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="email" id="email" required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Your Website <small>Please include http://</small></label>
                            <input type="text" className="form-control" placeholder="url" id="url" required/>
                        </div>
                    </div>
                </div>

                <label>When is the best time of day to reach you?</label>
                <div className="radio">
                    <label>
                        <input type="radio" id="contact-preference" value="am" /> Morning
                    </label>
                </div>
                <div className="radio">
                    <label>
                      <input type="radio" id="contact-preference" value="pm" /> Evening
                    </label>
                </div>

                <label>Would you like to recieve our email newsletter?</label>
                 <div className="checkbox">
                     <label>
                        <input type="checkbox" value="Sure!" id="newsletter"/> Sure!
                     </label>
                 </div>
                 <button type="submit" className="btn btn-success d-block w-50 m-auto">Submit</button>
             </div>
         </form>
    </div>
    )
}
}
export default Contact;

