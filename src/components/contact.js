import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact(){

    return(
        <div className='section contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='content'>
                            <h2>Booking Inquires</h2>
                            <p className='sub'>Contact me via the platforms below:</p>
                            <div className='socials'>
                                <div className='social-item text-center'>
                                    <a href='https://www.instagram.com/radicaltones/' className='icon'>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href='https://www.instagram.com/radicaltones/'>
                                        <p>@radicaltones</p>
                                    </a>
                                </div>
                                <div className='social-item text-center'>
                                    <a href='mailto:wes.lewis@yale.edu' className='icon'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                    <a href='mailto:wes.lewis@yale.edu'>
                                        <p>wes.lewis@yale.edu</p>
                                    </a>
                                </div>
                                <div className='social-item text-center'>
                                    <a href='tel:(716) 566-0289' className='icon'>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </a>
                                    <a href='tel:(716) 566-0289'>
                                        <p>(716) 566-0289</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;