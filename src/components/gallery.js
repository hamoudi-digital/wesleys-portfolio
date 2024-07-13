import React, { useRef, useEffect, useState, state } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Gallery() {
    const [gallery, setGallery] = useState(null);
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
        let galleryImages = [];
        // Retreive and format gallery entries from Contentful
        client.getEntries({
            content_type: 'gallery'
        }).then(function(entries){
            entries.items.forEach(function(entry) {

                // image file
                let fileUrl = entry.fields.image.fields.file.url;
                let title = entry.fields.title;

                // format entry data and push to array
                galleryImages.push(
                    {
                        src: fileUrl,
                        alt: title,
                    }
                );
            });
            galleryImages.reverse();
            setGallery(galleryImages);
            setLoaded(true);
        });
    }, []);

    function setCarouselHeight() {
        let owlStage = document.querySelector('.gallery .owl-stage')
        let activeItems = document.querySelectorAll('.gallery .owl-item.active');
        let height = 0;
        activeItems.forEach(activeItem => {
            if (activeItem.offsetHeight > height) {
                height = activeItem.offsetHeight;
            }
        });
        owlStage.style.height = height + 'px';
    }

    if (loaded) {
        return(
            <div className='section gallery' id='gallery'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='content'>
                                <h2>Gallery</h2>
                                <br></br>
                                <OwlCarousel items={3}  
                                    className="owl-theme gallery"  
                                    margin={8}
                                    onTranslated={setCarouselHeight}
                                    responsive={
                                        {
                                            0:{
                                                items:1,
                                                nav:false,
                                                dots:true
                                            },
                                            767:{
                                                items:3,
                                                nav:true
                                            },
                                        }
                                    } >  
                                    {
                                        gallery.map(image => (
                                            <div className="gallery-item">
                                                <img className="img" src={image.src} alt={image.alt}/>
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

export default Gallery;