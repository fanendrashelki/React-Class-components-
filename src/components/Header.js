import React from 'react'
import '../components/Header.css'


class Header extends React.Component {
    render() {
        return (
            <>
                <div  className="header">
                    <div className='box'>
                    <h1>Welcome to Demo</h1>
                    <p>WE'RE CREATIVE AGENCY</p>
                    <h5>We are team of talented designers making websites with Bootstrap </h5>
                    <button id='about' type='button'>Get Started</button>
                    </div>

                </div>
            </>
        );
    }
}
export default Header;
