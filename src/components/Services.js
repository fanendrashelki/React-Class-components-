import React from "react";
import '../components/Services.css'

class Services extends React.Component {
    render() {
        return (
            <>
                <div id="services" className="services Header">
                    <h3>Services</h3>
                    <h1>We do offer awesome <span>Services</span></h1>
                    <h5>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br />
                        adipisci expedita at voluptas atque vitae autem.</h5>

                    <div className="row pe-5 ps-5 pb-5 mb-5">
                        <div className="col-md-3 col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                <i className="far fa-cogs fa-3x"></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                <i className="fas fa-copy fa-3x"></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                    <i className="fas fa-bug fa-3x "></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                <i className="fal fa-user-shield fa-3x"></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                <i className="far fa-cogs fa-3x"></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                <i className="fas fa-copy fa-3x"></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                    <i className="fas fa-bug fa-3x "></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  col-12 col-lg-3 mt-5 ">
                            <div className="card ">
                                <div className="card-body">
                                <i className="fal fa-user-shield fa-3x"></i>
                                    <h5 className="card-title">Services title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod</p>
                                </div>
                            </div>
                        </div>
                        <div className="call-to-action">
                            <h2>Call To Action</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <button className="btn1">Call To Action</button>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default Services;