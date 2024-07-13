import React, { useRef, useEffect, useState, state } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

function Media() {

    const [media, setMedia] = useState(null);
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
        let mediaItems = [];

        // Retreive and format media entries from Contentful
        client.getEntries({
            content_type: 'media'
        }).then(function(entries){
            entries.items.forEach(function(entry) {

                // format entry data and push to array
                mediaItems.push(
                    {
                        title: entry.fields.title,
                        videoLink: entry.fields.videoLink,
                        description: documentToHtmlString(entry.fields.description),
                    }
                );
            });
            mediaItems.reverse();
            setMedia(mediaItems);
            setLoaded(true);
        });
    }, []);

    function getVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }

    if (loaded) {
        console.log(media);
        return(
            <div className='section media' id='media'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='content'>
                                <h2>Media</h2>
                                <br></br>
                                <OwlCarousel  
                                    items={1}
                                    className="owl-theme media"  
                                    margin={8}
                                    draggable={0}
                                    responsive={
                                        {
                                            0:{
                                                nav:false,
                                                dots:true,
                                                draggable:true,
                                            },
                                            767:{
                                                nav:true,
                                                draggable:false,
                                            },
                                        }
                                    } >  
                                    {
                                        media.map(mediaItem => (
                                            <div className="media-item">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="media-wrap">
                                                            <div className="media-container">
                                                                <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + getVideoId(mediaItem.videoLink)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="media-description">
                                                            <h3>{mediaItem.title}</h3>
                                                            <div dangerouslySetInnerHTML={{__html: mediaItem.description}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        ))
                                    }
                                </OwlCarousel>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Media;