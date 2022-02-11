import React from "react";
import react from "react";
import "../components/Contact.css"

class Contact extends React.Component {
    render() {
        return (
            <>
                <div id="contact" className="contact Header pb-5">
                    <h3>Contact</h3>
                    <h1>Contact<span>US</span></h1>
                    <h5>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br />
                        adipisci expedita at voluptas atque vitae autem.</h5>

                    <div className="row ps-5 pe-5">
                        <div className="col-lg-4 col-12 ">
                            <div className="address">
                                <h5><i class="fas fa-map-marker-alt"></i> Location:</h5>
                                <p>A108 Adam Street, New York, NY 535022</p>
                                <hr />
                                <h5> <i class="fas fa-envelope"></i> Email:</h5>
                                <p>info@example.com</p>
                                <hr />
                                <h5><i class="fas fa-mobile-alt"></i> Phone:</h5>
                                <p>+1 5589 55488 55s</p>
                                <hr />
                            </div>
                        </div>

                        <div className="col-lg-8 col-12 mt-4 ps-5 pe-5">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label"></label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Subject" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className="btn">
                                    <button>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}
export default Contact;