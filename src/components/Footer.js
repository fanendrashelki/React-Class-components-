import React from 'react'
import '../components/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <><footer className='footer '>
                <div className='row ps-5 pe-5 pt-5 '>
                    <div className='col-lg-3 col-md-6 col-12 pt-5'>
                        <h1>Demo</h1>
                        <p>A108 Adam Street<br />
                            New York, NY 535022<br />
                            United States</p>
                        <p><span>Phone:</span> +1 5589 55488 55</p>
                        <p><span>Email:</span> demo@example.com</p>
                    </div>
                    <div className='col-lg-2 col-md-6 col-12 link pt-5'>
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="fal fa-greater-than"></i> <a href="#">Home</a></li>
                            <li><i className="fal fa-greater-than"></i> <a href="#">About us</a></li>
                            <li><i className="fal fa-greater-than"></i> <a href="#">Services</a></li>
                            <li><i className="fal fa-greater-than"></i> <a href="#">Terms of service</a></li>
                            <li><i className="fal fa-greater-than"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 link pt-5">
                        <h4>Our Services</h4>
                        <ul>
                            <li> <i className="fal fa-greater-than"></i>  <a href="#">Web Development</a></li>
                            <li> <i className="fal fa-greater-than"></i>  <a href="#">Web Design</a></li>
                            <li> <i className="fal fa-greater-than"></i>  <a href="#">Product Management</a></li>
                            <li> <i className="fal fa-greater-than"></i>  <a href="#">Marketing</a></li>
                            <li> <i className="fal fa-greater-than"></i>  <a href="#">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 pt-5 link subscribe ">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form>
                            <input className='box-bg' type="email" name="email" />
                            <button className='btn-2'>subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="row footer-1 ">

                    <div className='col-12 col-lg-6 col-md-6' >
                        <div class="copyright">
                            &copy; Copyright <strong><span>Demo</span></strong>. All Rights Reserved
                        </div>
                        
                    </div>
                    <div class=" col-12 col-lg-6 col-md-6 social-links  pt-3 ">
                        <a href="#"><i class="fab fa-2x fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-2x fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-2x fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-2x fa-google-plus-g"></i></a>
                        <a href="#"><i class="fab fa-2x fa-linkedin-in"></i></a>
                    </div>
                </div>
            </footer>

            </>
        );
    }
}
export default Footer;