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
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/K5MUx7BwVls?si=tXXGSVpjSO5P1YZC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>the Jimmy Gavagan Trio at RD86 Studio Dinner & Jazz</h3>
                                                <p>Lineup: lorem ipsom</p>
                                                <p>Venue: lorem ipsom</p>
                                                <p>Date: lorem ipsom</p>
                                                <p>Description:</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis bibendum metus, sit amet tristique dolor. Ut in justo ligula. Aenean et orci ut lorem sagittis ornare vitae eget nibh. Fusce pellentesque velit in massa cursus pretium. Donec viverra imperdiet scelerisque. Curabitur massa lectus, lacinia a dui et, euismod vehicula quam. Proin vel tellus augue. Suspendisse potenti. Vivamus et elit posuere, imperdiet quam nec, molestie felis. Nam rutrum tortor in dapibus gravida. Mauris vel tempus ex, sodales suscipit eros. Aliquam massa lacus, mollis vel nulla et, sodales hendrerit leo. Integer id blandit justo. Nulla in ipsum eu ligula maximus fringilla.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="media-item">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="media-container">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/K5MUx7BwVls?si=tXXGSVpjSO5P1YZC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>the Jimmy Gavagan Trio at RD86 Studio Dinner & Jazz</h3>
                                                <p>Lineup: lorem ipsom</p>
                                                <p>Venue: lorem ipsom</p>
                                                <p>Date: lorem ipsom</p>
                                                <p>Description:</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis bibendum metus, sit amet tristique dolor. Ut in justo ligula. Aenean et orci ut lorem sagittis ornare vitae eget nibh. Fusce pellentesque velit in massa cursus pretium. Donec viverra imperdiet scelerisque. Curabitur massa lectus, lacinia a dui et, euismod vehicula quam. Proin vel tellus augue. Suspendisse potenti. Vivamus et elit posuere, imperdiet quam nec, molestie felis. Nam rutrum tortor in dapibus gravida. Mauris vel tempus ex, sodales suscipit eros. Aliquam massa lacus, mollis vel nulla et, sodales hendrerit leo. Integer id blandit justo. Nulla in ipsum eu ligula maximus fringilla.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="media-item">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="media-container">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/K5MUx7BwVls?si=tXXGSVpjSO5P1YZC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="media-description">
                                                <h3>the Jimmy Gavagan Trio at RD86 Studio Dinner & Jazz</h3>
                                                <p>Lineup: lorem ipsom</p>
                                                <p>Venue: lorem ipsom</p>
                                                <p>Date: lorem ipsom</p>
                                                <p>Description:</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis bibendum metus, sit amet tristique dolor. Ut in justo ligula. Aenean et orci ut lorem sagittis ornare vitae eget nibh. Fusce pellentesque velit in massa cursus pretium. Donec viverra imperdiet scelerisque. Curabitur massa lectus, lacinia a dui et, euismod vehicula quam. Proin vel tellus augue. Suspendisse potenti. Vivamus et elit posuere, imperdiet quam nec, molestie felis. Nam rutrum tortor in dapibus gravida. Mauris vel tempus ex, sodales suscipit eros. Aliquam massa lacus, mollis vel nulla et, sodales hendrerit leo. Integer id blandit justo. Nulla in ipsum eu ligula maximus fringilla.</p>
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