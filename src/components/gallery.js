import React, { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Gallery() {
    const images = [
        {
            src: require('../assets/images/1_Wes_and_John_Bacon_The_Bop_Shop.jpg'),
            alt: 'Wes and John Bacon The Bop Shop'
        },
        {
            src: require('../assets/images/2_Wes_and_Dan_Liparini_Jazzys_Cabaret.jpg'),
            alt: 'Wes and Dan Liparini Jazys Cabaret'
        },
        {
            src: require('../assets/images/3_Wes_Grey_Suit_Intense_Pausa.jpg'),
            alt: 'Wes Grey Suit Intense Pausa'
        },
        {
            src: require('../assets/images/4_Wes_The_Bop_Shop_Grey_Suit.jpg'),
            alt: 'Wes The Bop Shop Grey Suit'
        },
        {
            src: require('../assets/images/5_Wes_Gryphons_Blue_Suit.jpg'),
            alt: 'Wes Gryphons Blue Suit'
        },
        {
            src: require('../assets/images/6_Wes_Profile_The_Bop_Shop.jpg'),
            alt: 'Wes Profile The Bop Shop'
        },
        {
            src: require('../assets/images/7_Jazz_Homecoming_Flyer.jpg'),
            alt: 'Jazz Homecoming Flyer'
        },
        {
            src: require('../assets/images/8_Wes_Profile_Right_The_Bop_Shop.jpg'),
            alt: 'Wes Profile Right The Bop Shop'
        },
        {
            src: require('../assets/images/9_Wes_and_Brian_suto_Gryphons.jpg'),
            alt: 'Wes and Brian suto Gryphons'
        },
        {
            src: require('../assets/images/10_Wes_Pausa_Art_House.jpg'),
            alt: 'Wes Paua Art House'
        },
        {
            src: require('../assets/images/Wes_Tyler_Goldchain_Nehway_At_Level.jpg'),
            alt: 'Wes Tyler Goldchain Nehway At Level'
        },
        {
            src: require('../assets/images/Wes_Blue_Vest_Headshot.jpg'),
            alt: 'Wes Blue Vest Headshot'
        },
        {
            src: require('../assets/images/Wes_Playing_Tenor_At_Cafe9.jpg'),
            alt: 'Wes Playing Tenor At Cafe9'
        },
        {
            src: require('../assets/images/Wes_With_Shadow_At_Cafe9.jpg'),
            alt: 'Wes With Shadow At Cafe9'
        },
        {
            src: require('../assets/images/Wes_Tyler_Nehway_From_Above.jpg'),
            alt: 'Wes Tyler Nehway From Above'
        },
        {
            src: require('../assets/images/YJE_At_Sprague.jpg'),
            alt: 'YJE At Sprague'
        },
        {
            src: require('../assets/images/Couch_Photo_Upright.jpg'),
            alt: 'Couch Photo Upright'
        },
        {
            src: require('../assets/images/Cafe9_From_Left_Side.jpg'),
            alt: 'Cafe9 From Left Side'
        },
        {
            src: require('../assets/images/Couch_Leaning.jpg'),
            alt: 'Couch Leaning'
        },
        {
            src: require('../assets/images/Wes_Tyler_Nehway_Level.jpg'),
            alt: 'Wes Tyler Nehway Level'
        },
        {
            src: require('../assets/images/Wes_Soprano_At_The_State_House.jpg'),
            alt: 'Wes Soprano At The State House'
        },
        {
            src: require('../assets/images/Couch_Sitting.jpg'),
            alt: 'Couch Sitting'
        },
        {
            src: require('../assets/images/Mingus_Big_Band_Wes_Alto.jpg'),
            alt: 'Mingus Big Band Wes Alto'
        },
        {
            src: require('../assets/images/Wes_Nehway_Tyler_From_Above.jpg'),
            alt: 'Wes Tyler Goldchain Nehway AtWes Nehway Tyler From Above Level'
        },
        {
            src: require('../assets/images/Wes_Holding_Sax_At_Cafe9.jpg'),
            alt: 'Wes Holding Sax At Cafe9'
        },
        {
            src: require('../assets/images/Wes_and_Derek_Cafe9.jpg'),
            alt: 'Wes and Derek Cafe9'
        },
        {
            src: require('../assets/images/Wes_Saxes_Closeup.jpg'),
            alt: 'Wes Saxes Closeup'
        },
        {
            src: require('../assets/images/The_State_House_Jam_Horns.jpg'),
            alt: 'The State House Jam Horns'
        },
        {
            src: require('../assets/images/Mingus_Epitaph_Yale_School_Of_Music_Graduate_Students.jpg'),
            alt: 'Mingus Epitaph Yale School Of Music Graduate Students'
        },
        {
            src: require('../assets/images/Wes_Playing_Closeup.jpg'),
            alt: 'Wes Playing Closeup'
        },
        {
            src: require('../assets/images/Wes_Lewis_Digital_Combo_Wes_and_Nick.jpg'),
            alt: 'Wes Lewis Digital Combo Wes and Nick'
        },
        {
            src: require('../assets/images/Wes_Playing_Soprano_Cafe9.jpg'),
            alt: 'Wes Playing Soprano Cafe9'
        },
        {
            src: require('../assets/images/The_Final_Jam.jpg'),
            alt: 'The Final Jam'
        },
        {
            src: require('../assets/images/Wes_Playing_Tenor_At_Cafe9_2.jpg'),
            alt: 'Wes Playing Tenor At Cafe9'
        },
        {
            src: require('../assets/images/Paul_And_Wes_At_Cafe9.jpg'),
            alt: 'Paul And Wes At Cafe9'
        },
        {
            src: require('../assets/images/Wes_And_Brandon_At_State_House.jpg'),
            alt: 'Wes And Brandon At State House'
        },
        {
            src: require('../assets/images/Swing_Band_Pre_Covid.jpg'),
            alt: 'Swing Band Pre Covid'
        },
    ]; 

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
                                    images.map(image => (
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

export default Gallery;