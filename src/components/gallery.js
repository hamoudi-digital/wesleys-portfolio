import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Gallery() {
    const gallery1 = require('../assets/images/_DSF0239.jpg');
    const gallery2 = require('../assets/images/_DSF0372.jpg');
    const gallery3 = require('../assets/images/_DSF0409.jpg');
    const gallery4 = require('../assets/images/_DSF0411.jpg');
    const gallery5 = require('../assets/images/_DSF0415.jpg');
    const gallery6 = require('../assets/images/_DSF0426.jpg');
    const gallery7 = require('../assets/images/_DSF0454.jpg');
    const gallery8 = require('../assets/images/_DSF0459.jpg');
    const gallery9 = require('../assets/images/_DSF0617.jpg');
    const gallery10 = require('../assets/images/_DSF0630.jpg');
    const gallery11 = require('../assets/images/107A1196.jpg');
    const gallery12 = require('../assets/images/45613C30-0578-4E9C-B2E2-97DB4FA838A3 (1).jpg');
    const gallery13 = require('../assets/images/C52A56EE-BF0E-48AD-A84A-60C25B806850.jpg');
    const gallery14 = require('../assets/images/DSC_3793-1_Original.jpg');
    const gallery15 = require('../assets/images/DSC_4303-117_Original.jpg');
    const gallery16 = require('../assets/images/F3366E7E-89B3-4B62-A6BD-20B50AF499B7.jpg');
    const gallery17 = require('../assets/images/IMG_5180.jpg');
    const gallery18 = require('../assets/images/IMG_5540.jpg');
    const gallery19 = require('../assets/images/IMG_5569.jpg');
    const gallery20 = require('../assets/images/IMG_5572.jpg');
    const gallery21 = require('../assets/images/IMG_5593 (1).jpg');
    const gallery22 = require('../assets/images/IMG_5593.jpg');
    const gallery23 = require('../assets/images/IMG_5598.jpg');
    const gallery24 = require('../assets/images/IMG_5601.jpg');
    const gallery25 = require('../assets/images/IMG_5602.jpg');
    const gallery26 = require('../assets/images/jam-new-haven.jpg');

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
                                    <img className="img" src={gallery1} alt=""/>
                                </div> 
                                <div className="gallery-item">
                                    <img className="img" src={gallery2} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery3} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery4} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery5} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery6} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery7} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery8} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery9} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery10} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery11} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery12} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery13} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery14} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery15} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery16} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery17} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery18} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery19} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery20} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery21} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery22} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery23} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery24} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery25} alt=""/>
                                </div>
                                <div className="gallery-item">
                                    <img className="img" src={gallery26} alt=""/>
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