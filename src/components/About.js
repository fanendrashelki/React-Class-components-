import React from "react";
import '../components/About.css'
class About extends React.Component {
    render() {
        return (
            <>
                <div id="about" className="container-fluid Header about " >
                    <h3>About</h3>
                    <h1>Learn More<span> About Us</span> </h1>
                    <h5>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est<br />
                        adipisci expedita at voluptas atque vitae autem.</h5>

                    <div className="row about-row">
                        <div className=" col-md-6 col-12 col-lg-6 about-col">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="check">
                                <p> <i className="fas fa-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                                <p> <i className="fas fa-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                                <p> <i className="fas fa-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>

                        </div>

                        <div className=" col-md-6 col-12 col-lg-6  about-col">
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                            <div className="btn">
                                <button>Learn More</button>
                            </div>


                        </div>
                    </div>

                </div>
            </>

        );
    }
}
export default About;