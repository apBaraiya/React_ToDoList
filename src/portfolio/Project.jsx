import React from "react";
import Card from "./Card";
import Imgdata from "./Imgdata";
const Project = () => {
    return (
        <>
            <section id="Project">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 col-md-11 col-lg-11 mx-auto">
                            <div className="row">
                                <h1 className="text-center">My <span>Project</span></h1>
                                {Imgdata.map((val, ind) => {
                                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title} description={val.description}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project