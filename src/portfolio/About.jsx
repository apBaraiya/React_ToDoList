/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import portfolio_img2 from './img/DSC_0347123.png'
const About = () => {
    return (
        <>
            <section id="About">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 col-md-10 col-lg-10 mx-auto">
                            <div className="row">
                                <h1 className="text-center">About <span>Me</span></h1>
                                <div className="col-11 col-md-5 col-lg-5 d-flex justify-content-center align-items-center about_img mx-auto">
                                    <img src={portfolio_img2} className="img-fluid" />
                                </div>
                                <div className="col-11 col-md-7 col-lg-7 d-flex justify-content-center flex-column about_content mx-auto">
                                    <h3>Frontend Developer</h3>
                                    <p>My name is baraiya akshay from morbi. i'm complete my <strong>BCA</strong> graduation degree from saurashtra university.I have great idea and skill knowledge in frontend development.Dedicated time to personal growth, attending regular training to broaden frontend development capabilities.</p>
                                    <div>
                                        <button className="mybtn shadow-none btn">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About