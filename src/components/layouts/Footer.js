import React from "react"

export default function Footer(){
    return(
        
      <footer className="text-center text-lg-start bg-dark text-white">
        <style>
            
        </style>
      <section className="container d-flex justify-content justify-content-lg-between p-4">
          <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
          </div>
          <div>
              <a href="" className="me-4 text-reset"><i className="fa fa-facebook"></i></a>
              <a href="" className="me-4 text-reset"><i className="fa fa-twitter"></i></a>
              <a href="" className="me-4 text-reset"><i className="fa fa-google"></i></a>
              <a href="" className="me-4 text-reset"><i className="fa fa-instagram"></i></a>
              <a href="" className="me-4 text-reset"><i className="fa fa-linkedin"></i></a>
              <a href="" className="me-4 text-reset"><i className="fa fa-github"></i></a>
          </div>
      </section>
  
      <section className="">
          <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4"><i className="fa fa-cart-plus"></i> MyKart</h6>
                      <p>
                          Mykart.com is a one stop destination for your family's fashion needs.
                          we give you the opportunity to give yor wardrobe a makeover with the latest collections from our top brand
                      </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                      <p><a href="#" className="text-reset"  >Laptops</a></p>
                      <p><a href="#!" className="text-reset" >Mobiles</a></p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">TRENDING</h6>
                      <p><a href="#!" className="text-reset" >Hot Products</a></p>
                      
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p><i className="fa fa-home"></i> MYCART </p>
                      <p><i className="fa fa-envelope"></i> Mycart123@gmail.com</p>
                      <p><i className="fa fa-phone"></i> + 91 6383429869</p>
  
                  </div>
              </div>
          </div>
      </section>
  </footer>
    )
}