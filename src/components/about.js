import React, { useEffect, useState } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

function About() {
    const [bio, setBio] = useState(null);
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

        // Retreive and format media entries from Contentful
        client.getEntries({
            content_type: 'siteOptions'
        }).then(function(entries){
            let siteOptions = entries.items[0];
            let bioObj = {
                title: siteOptions.fields.bioTitle,
                subtitle: siteOptions.fields.bioSubtitle,
                content: documentToHtmlString(siteOptions.fields.bioContent)
            }
            setBio(bioObj);
            setLoaded(true);
        });
    }, []);

    if (loaded) {
        return(
            <div className='section about' id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='content'>
                                <h1>{bio.title}</h1>
                                <p className='sub'>{bio.subtitle}</p>
                                <br />
                                <div dangerouslySetInnerHTML={{__html: bio.content}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;