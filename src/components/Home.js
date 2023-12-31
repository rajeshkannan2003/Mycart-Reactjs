import { Fragment } from "react";

import data from "../Data";
import Props from "../Props";

export default function Home(){
    return(
        <Fragment>
          
         <h1 id="products_heading">Latest Products</h1>

             <section id="products" className="container mt-5">
   <div className="row">
  {/*<div className='col-sm-12 col-md-6 col-lg-3 my-3' >
                <div className="card p-3 rounded" >
                  <img class="card-img-top mx-auto" src="./images/products/2.jpg" alt="Card image cap"/>
                  
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title"><a href="">OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers</a></h5>
                  <p className="card-text">$7654.67/-</p>
                  <a href="#" className="btn btn-secondary">buy now</a>
             </div>
           </div>

                </div>  */}
                {data.map((values)=>{
                return(
                    <>
                    <Props 
                    key={values.id}
                    id={values.id}
                    imgsrc={values.imgsrc}
                    title={values.title}
                    text= {values.text}
                    
                    btn={values.btn}
                 />
                 
                    </>

                )
               
                   
                

            })}
                
    {/* <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/1.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="">OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers</a>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$245.67</p>
          <Link to="/Oppo" id="view_btn" className="btn btn-block">View Details</Link>

        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/2.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href=""
              >WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant</a
            >
          </h5>
          <div className="ratings mt-auto">
           <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$150.32</p>
          <Link to="/Watch" id="view_btn" className="btn btn-block">View Details</Link>

        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/3.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href=""
              >Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB</a
            >
          </h5>
          <div className="ratings mt-auto">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$440.57</p>
         <Link to="/Dell" id="view_btn" className="btn btn-block">View Details</Link>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/4.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="">PTron Newly Launched Tangent Sports, 60Hrs Playtime</a>
          </h5>
          <div className="ratings mt-auto">
           <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$15.46</p>

          <Link to="/Headset" id="view_btn" className="btn btn-block">View Details</Link>
        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/5.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="">Campus Men's Maxico Running Shoes</a>
          </h5>
          <div className="ratings mt-auto">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$10.12</p>
          <Link to="/Shoe" id="view_btn" className="btn btn-block">View Details</Link>

        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/8.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="">PUMA T'SHIRT</a>
          </h5>
          <div className="ratings mt-auto">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$10.12</p>
          <Link to="/Puma" id="view_btn" className="btn btn-block">View Details</Link>

        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/7.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="">APPLE MOBILE</a>
          </h5>
          <div className="ratings mt-auto">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$2000.12</p>
          <Link to="/Apple" id="view_btn" className="btn btn-block">View Details</Link>

        </div>
      </div>
    </div>

    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="./images/products/6.jpg"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="">DELL LAPTOP</a>
          </h5>
          <div className="ratings mt-auto">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
          <p className="card-text">$1000.12</p>
          <Link to="/Laptop" id="view_btn" className="btn btn-block">View Details</Link>

        </div>
      </div>
    </div> */}


  </div>
             </section>
    
        </Fragment>
    )
}