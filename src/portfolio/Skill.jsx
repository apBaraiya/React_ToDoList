import React from "react";
const Skill = () => {
    return (
        <>
            <section id="Skill">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 col-md-11 col-lg-11 mx-auto">
                            <div className="row">
                                <h1 className="text-center">My <span>Skill</span></h1>
                                <div className="col-lg-6 col-md-6 col-11 mx-auto gy-3">
                                    <div className="coding-skill">
                                        <label>HTML</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "100%" }}></div>
                                        </div>

                                        <label>CSS</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "100%" }}></div>
                                        </div>

                                        <label>Bootstrap</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "100%" }}></div>
                                        </div>

                                        <label>Asp.NET</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-11 mx-auto gy-3">
                                    <div className="coding-skill c_skill">
                                        <label>JavaScript</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "85%" }}></div>
                                        </div>

                                        <label>React.Js</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
                                        </div>

                                        <label>PHP</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
                                        </div>

                                        <label>Wordpress</label>
                                        <div className="progress my-2" role="progressbar" aria-label="Danger example" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{ width: "40%" }}></div>
                                        </div>
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

export default Skill