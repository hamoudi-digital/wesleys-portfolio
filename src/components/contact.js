import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact(){
    const [contact, setContact] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const contentful = require('contentful');
    const space_id = process.env.REACT_APP_CONTENTFUL_SPACE;
    const api_token = process.env.REACT_APP_CONTENTFUL_API_TOKEN;

    useEffect(() => {
        // client to interact with API
        const client = contentful.createClient({
            space: space_id,
            accessToken: api_token
        });

        client.getEntries({
            content_type: 'siteOptions'
        }).then(function(entries){
            let siteOptions = entries.items[0];
            let contactObj = {
                instagram: siteOptions.fields.instagram,
                email: siteOptions.fields.email,
                phone: siteOptions.fields.phoneNumber
            }
            setContact(contactObj);
            setLoaded(true);
        });
    }, []);

    if (loaded) {
        return(
            <div className='section contact' id='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='content'>
                                <h2>Booking Inquires</h2>
                                <p className='sub'>Contact me via the platforms below:</p>
                                <div className='socials'>
                                    <div className='social-item text-center'>
                                        <a href={'https://www.instagram.com/' + contact.instagram} className='icon'>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a href={'https://www.instagram.com/' + contact.instagram}>
                                            <p>@{contact.instagram}</p>
                                        </a>
                                    </div>
                                    <div className='social-item text-center'>
                                        <a href={'mailto:' + contact.email} className='icon'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </a>
                                        <a href={'mailto:' + contact.email}>
                                            <p>{contact.email}</p>
                                        </a>
                                    </div>
                                    <div className='social-item text-center'>
                                        <a href={'tel:' + contact.phone} className='icon'>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </a>
                                        <a href={'tel:' + contact.phone}>
                                            <p>{contact.phone}</p>
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
}

export default Contact;