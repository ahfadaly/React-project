import React, { Component } from 'react'
import axios from 'axios';
import './style.css'

class Shop extends Component {
    state = {
        shops: []
      }
      componentDidMount() {
         axios.get('/js/data.json').then( response => {this.setState({shops: response.data.shops})});
      }
     
     render(){
        const {shops} = this.state;
        const shopsList = shops.map( (shopItem) => {
        return(

            <div className="col-md-4 mb-4 wow" key={shopItem.id}>
                <img src={shopItem.img} alt="" className="img-fluid border"/>
                    <div className="item shadow-sm border p-3">
                        <h6>{shopItem.name}</h6>
                        <h6>{shopItem.size}</h6>
                        <div className="star text-center">
                            <i className={shopItem.icon}></i>
                            <i className={shopItem.icon}></i>
                            <i className={shopItem.icon}></i>
                            <i className={shopItem.muted}></i>
                            <i className={shopItem.muted}></i>
                            <span className="d-block">{shopItem.price}</span>
                        </div>
                    </div>
               </div>
          )
       })
      return (
        <div className="shop mt-4">
            <div className="container">
              <div className="row">
                    <div className="col-md-4">
                        <h3>Categories</h3>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled d-flex ul-list">
                            <li>All</li>
                            <li>Men's</li>
                            <li>Women's</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Item</option>
                        <option>Featured</option>
                        <option>A to Z</option>
                    </select>
                    </div>
              </div>

            <div className="row mt-3">
                <div className="col-md-3">
                    <div id="accordion" className="collapse-itme">
                        <div className="card border-0">
                            <div className="d-flex justify-content-between" id="headingone">
                                <h5>Gender</h5>
                            <button className="d-flex align-items-center btn btn-link collapsed support-btn" data-toggle="collapse" data-target="#collapseone" aria-expanded="false">
                                   <i className="fa fa-fw fa-chevron-circle-down"></i>
                                </button>
                            </div>
                            <div id="collapseone" className="collapse" aria-labelledby="headingone" data-parent="#accordion">
                            <div className="card-body p-0">
                                <ul className="list-unstyled ul-list">
                                    <li>Men</li>
                                    <li>Women</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        
                        <div className="card border-0 mt-2">
                            <div className="d-flex justify-content-between" id="headingtow">
                                <h5>Sale</h5>
                                <button className="d-flex align-items-center btn btn-link collapsed support-btn" data-toggle="collapse" data-target="#collapsetow" aria-expanded="false">
                                    <i className="fa fa-fw fa-chevron-circle-down"></i>
                                </button>
                            </div>
                            <div id="collapsetow" className="collapse" aria-labelledby="headingtow" data-parent="#accordion">
                                <div className="card-body p-0">
                                <ul className="list-unstyled ul-list">
                                    <li>Sport</li>
                                    <li>Luxury</li>
                                </ul>
                               </div>
                            </div>
                        </div>

                        <div className="card border-0 mt-2">
                                <div className="d-flex justify-content-between" id="headingtow">
                                    <h5>Product</h5>
                                    <button className="d-flex align-items-center btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTree" aria-expanded="false">
                                        <i className="fa fa-fw fa-chevron-circle-down"></i>
                                    </button>
                                </div>
                                <div id="collapseTree" className="collapse" aria-labelledby="headingtow" data-parent="#accordion">
                                    <div className="card-body p-0">
                                    <ul className="list-unstyled ul-list">
                                        <li>Bag</li>
                                        <li>Sweather</li>
                                        <li>Sunglass</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                  </div>
               </div>
                    
                    <div className="col-md-9">
                        <div className="row">
                               {shopsList}
                          </div>
                    </div>
                </div>
            </div> 
        {/*  our-brands *****************************/}
        <div className="our-brands mt-5">
             <div className="container text-center">
                <h2>Our Brands</h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem <br/> ipsum dolor sit amet.</p>
                <div className="row">
                  <div className="col-sm-3">
                      <img src="images/brand_01.png" alt="" className="w-75" />
                  </div>
                  <div className="col-sm-3">
                  <img src="images/brand_02.png" alt="" className="w-75" />
                  </div>
                  <div className="col-sm-3">
                  <img src="images/brand_03.png" alt="" className="w-75" />
                  </div>
                  <div className="col-sm-3">
                  <img src="images/brand_04.png" alt="" className="w-75" />
                  </div>
                </div>
             </div>
        </div>
        </div>
        
     )
  }
}
export default Shop;




