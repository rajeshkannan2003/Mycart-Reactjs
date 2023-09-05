import React from "react";


const Props=(props)=>{
    return(
        <>
        <div className='col-sm-12 col-md-6 col-lg-3 my-3' >
                <div className="card p-3 rounded" >
                  <img class="card-img-top mx-auto" src={props.imgsrc} alt="Card image cap"/>
                  <p>{props.id}</p>
                  <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">
                  {/* <del>{props.text}</del>*/}
                   {props.text} 
                    
                    
                    </p> 
                  <div className="ratings mt-auto">
           <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"> </i>
            <span id="no_of_reviews">(5 Reviews)</span>
          </div>
           <a href="" className="btn btn-secondary" > {props.btn}</a> 
                  
                   {/* <Link to="/Oppo"  className="btn btn-secondary">{props.btn}</Link>  */}
             </div>
           </div>

                </div> 
                
      
        </>
    )
}

export default Props;