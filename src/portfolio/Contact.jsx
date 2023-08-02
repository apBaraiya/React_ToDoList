import React, { useState } from "react";
const Contact = () => {

    const [Cdata,setCdata] = useState({
        fullname: '',
        phone:'',
        email:'',
        password:'',
        Message:'',
    })

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setCdata((prevval) =>{
            return {
                ...prevval,
                [name]:value,
            };
        });
    };

    const submitdata = () => {
        alert("successfully submited data");
    }
    return (
        <>
            <section id="Contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 col-md-11 col-lg-11 mx-auto d-flex flex-column justify-content-center align-items-center">
                            <h1 className="text-center">Contact <span>Me</span></h1>
                            <div className="contact_us">
                                <form onSubmit={submitdata}>
                                    <div className="input_box">
                                        <div class="input_filed">
                                            <input type="text" class="form-control shadow-none" name="fullname" onChange={InputEvent} value={Cdata.fullname} id="fullname" placeholder="fullname" required />
                                            <span className="focus"></span>
                                        </div>
                                        <div class="input_filed">
                                            <input type="text" class="form-control shadow-none" name="phone" onChange={InputEvent} value={Cdata.phone} id="phone" placeholder="phone number" required />
                                            <span className="focus"></span>
                                        </div>
                                    </div>
                                    <div className="input_box">
                                        <div class="input_filed">
                                            <input type="email" class="form-control shadow-none" name="email" onChange={InputEvent} value={Cdata.email} id="email" placeholder="Email" autoComplete="off" required />
                                            <span className="focus"></span>
                                        </div>
                                        <div class="input_filed">
                                            <input type="password" class="form-control shadow-none" name="password" onChange={InputEvent} value={Cdata.password} id="password" placeholder="Password" required />
                                            <span className="focus"></span>
                                        </div>
                                    </div>
                                    <div className="textarea_field">
                                        <textarea name="Message" id="Message" onChange={InputEvent} value={Cdata.Message} cols={30} rows={10} placeholder="Your Message" required></textarea>
                                        <span className="focus"></span>
                                    </div>
                                    <div className="btn_box btns">
                                        <button type="submit" class="btn mybtn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact