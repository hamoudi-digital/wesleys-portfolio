import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Gallery() {
    const gallery1 = require('../assets/images/_DSF0239.jpg');

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
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div> 
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery1}/>
                                </div>

                            </OwlCarousel>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;