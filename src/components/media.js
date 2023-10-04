import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

function Media() {

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
                                <div className="media-item">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="media-container">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/BxGIv_rh-zk?si=lhnq5CCjnDFgs0Yv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                            </div>
                                            </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>Wes Lewis Quartet — Darn That Dream (Live at RD86 Space)</h3>
                                                <p>Personnel:</p>
                                                <p>Wes Lewis - Tenor Sax</p>
                                                <p>Derek Lewis - Piano</p>
                                                <p>Christie Echols - Bass</p>
                                                <p>Tyler Goldchain - Drums</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="media-item">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="media-container">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/K5MUx7BwVls?si=xlj3sDd6wpyD9hAR&amp;start=5195" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>Jimmy Gavagan Trio ft. Wes Lewis — Beatrice (Live at RD86 Space)</h3>
                                                <p>Personnel:</p>
                                                <p>Wes Lewis - Tenor Sax</p>
                                                <p>Jimmy Gavagan - Drums</p>
                                                <p>Christie Echols - Bass</p>
                                                <p>Andrew Wilcox - Piano</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="media-item">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="media-container">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/i6poOFqgP6c?si=3wt3pfZT-LlItL1i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>The Yale Jazz Ensemble (ft. Wes Lewis) — Moment’s Notice (Live at Sprague Memorial Hall)</h3>
                                                <p>Personnel:</p>
                                                <p>Wayne Escoffery - Conductor</p>
                                                <p>Jarron Long - Drums</p>
                                                <p>Thara Joseph - Bass</p>
                                                <p>Aidan Kluger - Piano</p>
                                                <p>Wes Lewis - Alto Sax (soloist)</p>
                                                <p>Max Saffer-Meng - Trombone (soloist)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="media-item">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="media-container">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/R6Wiqx7KODk?si=PVF3QSWfOPoJ3CSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>Wes Lewis Quartet — St. Thomas (Live at RD86 Space)</h3>
                                                <p>Personnel:</p>
                                                <p>Wes Lewis - Tenor Sax</p>
                                                <p>Derek Lewis - Piano</p>
                                                <p>Christie Echols - Bass</p>
                                                <p>Tyler Goldchain - Drums</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="media-item">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="media-container">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/7pne35aHzuI?si=Ewy2LNxSt9Tanoxe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>Wes Lewis & Raj Basak — Silent Night</h3>
                                                <p>Personnel:</p>
                                                <p>Wes Lewis - Tenor Sax</p>
                                                <p>Raj Basak - Keyboard and Production</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </OwlCarousel>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;