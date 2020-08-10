import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 col-md-4'>
                        <div className='links'>
                            <h3>Links</h3>
                            <ul className='list-unstyled'>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/aboutUs'>About</Link></li>
                                <li><Link to='/menu'>Menu</Link></li>
                                <li><Link to='/contactUs'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-5 col-md-8'>
                        <div className='address'>
                            <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                    confusion@food.net</a>
                            </address>
                        </div>
                    </div>
                    <div className='col-5 col-md-12'>
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <p>&copy; Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;