import React from "react";
import '../components/Portfolio.css'
import img1 from '../images/3.jpg'
import img2 from '../images/4.jpg'
import img3 from '../images/5.jpg'
import img4 from '../images/6.jpg'
import img5 from '../images/7.jpg'
import img6 from '../images/8.jpg'

class Portfolio extends React.Component {
    render() {
        return (
            <>
                <div id="portfolio" className="portfolio Header">
                    <h3>Portfolio</h3>
                    <h1>Check our <span>Portfolio</span></h1>
                    <h5>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br />
                        adipisci expedita at voluptas atque vitae autem.</h5>

                    <div className="row pe-5 ps-5 ">
                        <div className="col-md-4 col-12 col-lg-4 mt-3 ">
                            <div className="img-box  " >
                                <img src={img1} />

                            </div>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 mt-3 ">
                            <div className="img-box  " >
                                <img src={img2} />

                            </div>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 mt-3 ">
                            <div className="img-box  " >
                                <img src={img3} />

                            </div>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 mt-3 ">
                            <div className="img-box  " >
                                <img src={img4} />

                            </div>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 mt-3 ">
                            <div className="img-box  " >
                                <img src={img5} />

                            </div>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 mt-3 ">
                            <div className="img-box  " >
                                <img src={img6} />

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Portfolio;