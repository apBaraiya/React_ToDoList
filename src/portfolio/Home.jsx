/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import portfolio_img from './img/porfolio.png';
import  CV from './img/CV.pdf';
const Home = () => {
    return (
        <>
            <section id="Home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 col-md-11 col-lg-11 mx-auto">
                            <div className="row">
                                <div className="col-11 col-md-7 col-lg-7 mx-auto d-flex justify-content-center flex-column home_content order-2 order-md-1">
                                    <h3>Hello, It's Me</h3>
                                    <h1>Akshay Baraiya</h1>
                                    <h3>And I'm a <span>Frontend Developer</span></h3>
                                    <p>Highly poised and dedicated with a strong education in design principles and programming languages.</p>
                                    <div className="social_icon">
                                        <Link to={'https://www.instagram.com/mr.baraiya_001/'}><InstagramIcon /></Link>
                                        <Link to={'https://www.facebook.com/'}><FacebookIcon /></Link>
                                        <Link to={'https://www.linkedin.com/in/baraiya-akshay-759a20262'}><LinkedInIcon /></Link>
                                    </div>
                                    <div>
                                    <button className="mybtn shadow-none btn"><Link to={CV} download={'Cv'} target="_blank" rel="nnoreferrer">Download Cv</Link></button>
                                    </div>
                                </div>
                                <div className="col-11 col-md-5 col-lg-5 mx-auto d-flex justify-content-center align-content-center home_img order-1 order-md-2">
                                    <img src={portfolio_img} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home