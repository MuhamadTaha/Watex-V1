import React, { Component } from 'react';
import './navbar.css';
import header1 from '../Images/header1.jpg';
import header2 from '../Images/header2.jpg';
import header3 from '../Images/header3.jpg';
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation(['data', 'navbar']);
    return (
        <header id='header'>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="15000">
                        <img src={header1} className="d-block w-100" alt="Hader Image" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carousel-caption-container">
                                <h2>WATEX</h2>
                                <p> {t('header_text')} </p>
                                <a href='#' className="btn learnMore"> {t('learn_more')} </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="15000">
                        <img src={header2} className="d-block w-100" alt="Hader Image" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carousel-caption-container">
                                <h2>WATEX</h2>
                                <p> {t('header_text')} </p>
                                <a href='#' className="btn learnMore"> {t('learn_more')} </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="15000">
                        <img src={header3} className="d-block w-100" alt="Hader Image" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carousel-caption-container">
                                <h2>WATEX</h2>
                                <p> {t('header_text')} </p>
                                <a href='#' className="btn learnMore"> {t('learn_more')} </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </header>
    )

}

export default Header;