import React from "react";
import '../components/Team.css'
import img1 from '../images/team1.jpg'
import img2 from '../images/team2.jpg'
import img3 from '../images/team3.jpg'
import img4 from '../images/team4.jpg'




class Team extends React.Component {
    render() {
        return (
            <>
                <div id="team" className="team Header pb-5">
                    <h3>Team</h3>
                    <h1>Our Hardworking <span>Team</span></h1>
                    <h5>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br />
                        adipisci expedita at voluptas atque vitae autem.</h5>

                    <div className="row pe-5 ps-5 ">
                        <div className="col-md-3 col-12 col-lg-3 mt-3 ">
                            <div className="img-team  " >
                                <img src={img3} />
                                <h4>Walter White</h4>
                                <p>Chief Executive Officer</p>
                                <div className="Social-icon pb-2">
                                    <i class="fab fa-2x fa-facebook"></i>
                                    <i class="fab fa-2x fa-twitter"></i>
                                    <i class="fab fa-2x fa-instagram"></i>
                                    <i class="fab fa-2x fa-linkedin-in"></i>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-12 col-lg-3 mt-3 ">
                            <div className="img-team  " >
                                <img src={img2} />
                                <h4>Sarah Jhonson</h4>
                                <p>Product Manager </p>
                                <div className="Social-icon pb-2">
                                    <i class="fab fa-2x fa-facebook"></i>
                                    <i class="fab fa-2x fa-twitter"></i>
                                    <i class="fab fa-2x fa-instagram"></i>
                                    <i class="fab fa-2x fa-linkedin-in"></i>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-12 col-lg-3 mt-3 ">
                            <div className="img-team  " >
                                <img src={img4} />
                                <h4>William Anderson</h4>
                                <p>CTO </p>
                                <div className="Social-icon pb-2">
                                    <i class="fab fa-2x fa-facebook"></i>
                                    <i class="fab fa-2x fa-twitter"></i>
                                    <i class="fab fa-2x fa-instagram"></i>
                                    <i class="fab fa-2x fa-linkedin-in"></i>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 col-12 col-lg-3 mt-3 ">
                            <div className="img-team  " >
                                <img src={img1} />
                                <h4>Amanda Jepson</h4>
                                <p>Accountant </p>
                                <div className="Social-icon pb-2">
                                    <i class="fab fa-2x fa-facebook"></i>
                                    <i class="fab fa-2x fa-twitter"></i>
                                    <i class="fab fa-2x fa-instagram"></i>
                                    <i class="fab fa-2x fa-linkedin-in"></i>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Team;