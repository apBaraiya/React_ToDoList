import React from "react";
  
const Card = (props) => {
    
    return (
        <>
            <div className="col-11 col-md-4 col-lg-4 gy-5 mx-auto d-flex justify-content-center">
                <div className="box">
                    <div className="box-img">
                        <img src={props.imgsrc} alt="Job Protal" />
                    </div>
                    <div className="content text-center">
                        <h2 className="title">{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card