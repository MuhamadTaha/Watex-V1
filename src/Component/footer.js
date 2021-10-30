import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-3'>
                            <h5> <span> About </span> Watex </h5>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quae numquam voluptatibus sapiente molestias ex aliquid perferendis sequi sunt rerum ipsa </p>
                            <div className='social'>
                                <a href="#"> <FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
                                <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <h5> career </h5>
                            <ul>
                                <li> <a href='#'>   Vacant Positions </a> </li>
                                <li> <a href='#'>   Featured Positions </a> </li>
                                <li> <a href='#'>   Privacy Policy </a> </li>
                                <li> <a href='#'>   Terms &amp; Condition </a> </li>
                            </ul>
                        </div>

                        <div className='col-md-3'>
                            <h5> latest events </h5>
                            <ul>
                                <li> <a href='#'>   Latest Product Event </a> </li>
                                <li> <a href='#'>   Conference Launch </a> </li>
                                <li> <a href='#'>   Privacy Policy </a> </li>
                                <li> <a href='#'>   Terms &amp; Condition </a> </li>
                            </ul>
                        </div>

                        <div className='col-md-3'>
                            <h5> HOW CAN WE HELP YOU? </h5>
                            <ul>
                                <li> <a href='#'>   Hotline: (888) 999-0516 </a> </li>
                                <li> <a href='#'>   Open - Close: 09:00 - 08:00 </a> </li>
                                <li> <a href='#'>   Mail: info@watex.com </a> </li>
                                <li> <a href='#'>   Address: 15 Mohsin st. / nasr city </a> </li>
                            </ul>
                        </div>

                        <hr />

                    </div>

                    <div className='footerBottom'>
                        <div className='row'>
                            <p className='col-md-6'>
                                All Right Reserved to Watex - Designed By: Moustafa Nour
                            </p>

                            <div className='col-md-6'>
                                <ul>
                                    <li> <a href='#'> About Us </a> </li>
                                    <li> <a href='#'> Information </a> </li>
                                    <li> <a href='#'> Terms &amp; Conditions </a> </li>
                                    <li> <a href='#'> Privacy &amp; Policy </a> </li>
                                    <li> <a href='#'> Site Map </a> </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;