
import { Component } from 'react';
import './style.css'

class Home extends Component{

    handelClick = (e) => {
        e.preventDefault();
    }
    render() {
    return (
      <div className="home-page">
         <div id="carouselExampleCaptions" className="carousel slide home-carousel" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                 <div className="container">
                     <div className="row">
                         <div className="col-6">
                            <div className="carousel-caption caption-title d-none d-md-block text-dark">
                            <h2>Zay eCommerce</h2>
                            <h5>Tiny and Perfect eCommerce Template</h5>
                            <p className="lead">Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                        </div>
                         </div>
                        <div className="col-6">
                            <img src="images/banner_img_01.jpg" className="d-block img-fluid" alt="..." />
                        </div>
                     </div>
                 </div>
             </div>
            <div className="carousel-item">
                <div className="container">
                     <div className="row">
                         <div className="col-6">
                            <div className="carousel-caption caption-title d-none d-md-block text-dark">
                            <h2>Proident occaecat</h2>
                            <h5>Aliquip ex ea commodo consequat</h5>
                            <p className="lead">You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</p>
                        </div>
                         </div>
                        <div className="col-6">
                            <img src="images/banner_img_02.jpg" className="d-block img-fluid" alt="..." />
                        </div>
                     </div>
                 </div>
                </div>
             <div className="carousel-item">
                <div className="container">
                     <div className="row">
                         <div className="col-6">
                            <div className="carousel-caption caption-title d-none d-md-block text-dark">
                            <h2>Repr in voluptate</h2>
                            <h5>Ullamco laboris nisi ut</h5> 
                            <p className="lead">We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
                        </div>
                         </div>
                        <div className="col-6">
                            <img src="images/banner_img_03.jpg" className="d-block img-fluid" alt="..." />
                        </div>
                     </div>
                 </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <i className="fas fa-chevron-left"></i>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
               <i className="fas fa-chevron-right"></i>
            </a>
            </div>
       
        <div className="Categories my-5">
            <div className="container text-center">
                  <h2>Categories of The Month</h2>
                   <p className="lead">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br /> mollit anim id est laborum.</p>
                <div className="row">
                    <div className="col-md-4 mb-3">
                       <img src="images/category_img_01.jpg" className="w-75 rounded-circle" alt="..." />
                         <h5>Watches</h5>
                         <a onClick={this.handelClick} href="/">Go Shop</a>
                    </div>
                    <div className="col-md-4 mb-3">
                       <img src="images/category_img_02.jpg" className="w-75 rounded-circle" alt="..." />
                        <h5>Shoes</h5>
                        <a onClick={this.handelClick} href="/">Go Shop</a>
                    </div>
                    <div className="col-md-4 mb-3">
                       <img src="images/category_img_03.jpg" className="w-75 rounded-circle" alt="..." />
                        <h5>Accessories</h5>
                        <a onClick={this.handelClick} href="/">Go Shop</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="featured mt-5">
            <div className="container">
                  <h2 className="text-center">Featured Product</h2>
                   <p  className="lead text-center">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident.</p>
                <div className="row">
                    <div className="col-md-4 mb-3">
                       <img src="images/feature_prod_01.jpg" className=" img-fluid" alt="..." />
                         <div className="featured-cont bg-white p-3">
                           <div className="d-flex justify-content-between">
                               <div className="star">
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-muted fa fa-star"></i>
                                <i className="text-muted fa fa-star"></i>
                               </div>
                               <span>$240.00</span>
                           </div>
                           <div className="title">
                               <h3>Gym Weight</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Sunt in culpa qui officia deserunt.</p>
                           </div>
                         </div>
                    </div>

                    <div className="col-md-4 mb-3">
                       <img src="images/feature_prod_02.jpg" className=" img-fluid" alt="..." />
                         <div className="featured-cont bg-white p-3">
                           <div className="d-flex justify-content-between">
                               <div className="star">
                               <i className="text-warning fa fa-star"></i>
                               <i className="text-warning fa fa-star"></i>
                               <i className="text-warning fa fa-star"></i>
                               <i className="text-muted fa fa-star"></i>
                               <i className="text-muted fa fa-star"></i>
                               </div>
                               <span>$240.00</span>
                           </div>
                           <div className="title">
                               <h3>Cloud Nike Shoes</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Sunt in culpa qui officia deserunt.</p>
                           </div>
                         </div>
                    </div>

                      <div className="col-md-4 mb-3">
                       <img src="images/feature_prod_03.jpg" className=" img-fluid" alt="..." />
                         <div className="featured-cont bg-white p-3">
                           <div className="d-flex justify-content-between">
                               <div className="star">
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                                <i className="text-warning fa fa-star"></i>
                            </div>
                               <span>$240.00</span>
                           </div>
                           <div className="title">
                               <h3>Summer Addides Shoes</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Sunt in culpa qui officia deserunt.</p>
                           </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

     </div>
    )
  }
}
export default Home;



