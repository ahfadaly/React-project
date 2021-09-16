import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
<div>
   <div className="header shadow-sm">
       <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/">Zay</Link> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav m-auto">
                            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Shop">Shop</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                        </ul>
                       <div className="d-flex icon-search">
                            <span><i className="fa fa-fw fa-search text-dark" data-toggle="modal" data-target="#exampleModal"></i></span>
                            <span className="nabmer"><i className="fa fa-fw fa-cart-arrow-down text-dark"></i>
                              <span className="bg-light">7</span>
                            </span>
                            <span className="nabmer"><i className="fa fa-fw fa-user text-dark"></i>
                               <span className="bg-light">+99</span>
                            </span>
                       </div>
                    </div>
                </nav> 
         </div>
    </div>

{/* modal ================================== */}
<div className="modal fade modal-search" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div className="modal-body">
        <form className="form-inline my-2 my-lg-0 justify-content-center">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
        <div className="modal-footer m-auto">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Save changes</button>
        </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Navbar;



