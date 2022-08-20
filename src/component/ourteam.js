import React from "react";

import '../App.css';

function Ourteam() {
    return (
        <>
            <div className="container-fluid background-color p-5">
                <div className="row">
                    <div className="col-xl-12 text-center">
                        <div id="carouselId" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    {/* <img src="https://www.seekpng.com/png/detail/80-803527_html5-css3-and-javascript-logos-html5-logo-png.png" className="image-fluid" alt="First slide"></img> */}
                                    <div class="card text-center">
                                        <div className="contaienr">
                                            <div className="row">
                                                <div className="col-xl-12 col-12">
                                                    <img className='card-img-top w-25 rounded-circle' src="https://amanpost-blog.herokuapp.com/img/aman_img.png" alt="First slide"></img>
                                                </div>
                                                <div className="col-xl-12 col-12">
                                                    <div class="card-body">
                                                        <h4 class="card-title">Aman kumar</h4>
                                                        <p class="card-text">In this time am a final year graduation in Bachelors of computer Application from L.S college muzaffarpur Bihar Inda. It brings joy to my heart to take the burden off of my loved ones' shoulders, I always do anything I can do to enhance that, work is no different. To grow a company a person should be trustable and dependable, I take pride in being so dedicated to both. As the world is moving towards tech-based careers and a desire for interesting challenges led me to pursue a career in coding.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourteam;


