import React from 'react';

import imgOne from '../images/airpods.jpg'
import imgTwo from '../images/alexa.jpg'
import imgThree from '../images/camera.jpg'

const ProductCarosal = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{width:'250px'}} src={imgOne} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img style={{width:'250px'}} src={imgTwo} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img style={{width:'250px'}} src={imgThree} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default ProductCarosal;