import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'

import Brands_Home from './brands-home-section'
import Events_Home from './events-home-section'
import Products_Home from './products-home-section'
import News_Home from './news-home-section'
import Header from '../header.js';

import '../../../node_modules/video-react/dist/video-react.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styleFiles/homeSections.css';

function Home_Sections() {

    const { t } = useTranslation(['data', 'navbar','products']);

    var settings = {
        dots: false,
        infinite: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div id="HomeSections">
            <Header />

            <section className='homeSections homeSec-Brands'>
                <div className="container">
                    <h3 className="secTitle" > <span className="secSubTitle"> {t("home_brands_subheader")} </span> {t("home_brands_header")} </h3>
                    <Brands_Home />
                </div>

                <div className='btnContainer'>
                    <a href='#'>
                        <h5 className='secLearnMore'> {t("learn_more")} </h5>
                    </a>
                </div>

            </section>


            <section className='homeSections homeSec-Products'>
                <div className="container">
                    <h3 className="secTitle" > <span className="secSubTitle"> {t("home_products_subheader")} </span> {t("home_products_header")} </h3>
                    <Products_Home />
                </div>

                <div className='btnContainer'>
                    <a href='#'>
                        <h5 className='secLearnMore'> {t("learn_more")} </h5>
                    </a>
                </div>

            </section>


            <section className='homeSections homeSec-Success'>
                <div className="container">
                    <div className="row">

                        <div className='col-md-6'>
                            <h4> {t("home_videos_header")} </h4>
                            <Player>
                                <source src="http://www.w3schools.com/html/mov_bbb.mp4" />
                                <BigPlayButton position="center" />
                            </Player>

                            <a href='#'>
                                <h5 className='viewAll'> {t("home_videos_seemore")} </h5>
                            </a>

                        </div>

                        <div className='col-md-6'>
                            <h4> {t("home_success_header")} </h4>

                            <div className="slide-wrapper">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                                    <ol className="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                        <li data-target="#myCarousel" data-slide-to="3"></li>
                                    </ol>

                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <img src="https://i.ibb.co/8MB6f8b/prod1.jpg" className="d-block w-100" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="carousel-caption-container">
                                                    <h5>{t("home_success_details_head1")}</h5>
                                                    <p>{t("home_success_details_desc1")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img src="https://i.ibb.co/h12mxtz/prod2.jpg" className="d-block w-100" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="carousel-caption-container">
                                                    <h5>{t("home_success_details_head2")}</h5>
                                                    <p>{t("home_success_details_desc2")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img src="https://i.ibb.co/hC13CxD/prod3.jpg" className="d-block w-100" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="carousel-caption-container">
                                                    <h5>{t("home_success_details_head3")}</h5>
                                                    <p>{t("home_success_details_desc3")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img src="https://i.ibb.co/jg4WcLg/prod4.jpg" className="d-block w-100" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="carousel-caption-container">
                                                    <h5>{t("home_success_details_head4")}</h5>
                                                    <p>{t("home_success_details_desc4")}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <a href='#'>
                                        <h5 className='viewAll'> {t("learn_more")} </h5>
                                    </a>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            <section className='homeSections homeSec-LatestProd row'>

                <div className='col-md-3'>
                    <div className="latest-prod">
                        <div className='blackLayer'> </div>
                        <div className='latest-prod-desc'>
                            <h5> {t("home_drainage_header")} </h5>
                            <a href='#' className='btn learnMoreBtn'> {t("learn_more")} </a>
                        </div>

                    </div>
                </div>

                <div className='col-md-9'>
                    <div className="latest-prod">
                        <div className='blackLayer'> </div>
                        <div className='latest-prod-desc'>
                            <p> {t("home_latest_subheader")} </p>
                            <h5> {t("home_latest_header")}</h5>
                            <a href='#' className='btn learnMoreBtn'> {t("learn_more")} </a>
                        </div>
                    </div>
                </div>

            </section>


            <section className='homeSections homeSec-News'>
                <div className="container">
                    <h3 className="secTitle" > <span className="secSubTitle"> {t("home_news_subheader")} </span> {t("home_news_header")} </h3>
                    < News_Home />
                </div>

                <div className='btnContainer'>

                    <Link to="/news">
                        <h5 className='secLearnMore'> {t("home_news_seemore")} </h5>
                    </Link>

                </div>

            </section>


            <section className='homeSections homeSec-Events'>
                <div className="container">
                    <h3 className="secTitle" > <span className="secSubTitle"> {t("home_events_subheader")} </span> {t("home_events_header")} </h3>
                    <Events_Home />
                </div>

                <div className='btnContainer'>
                    <Link to="/events">
                        <h5 className='secLearnMore'> {t("home_events_seemore")} </h5>
                    </Link>
                </div>

            </section>


            <section className='homeSections homeSec-Featured'>

                <div className="container">
                    <h3 className="secTitle" > <span className="secSubTitle"> {t("home_catalogue_subheader")} </span> {t("home_catalogue_header")} </h3>
                </div>

                <Slider {...settings}>

                    <div className='card-wrapper' key="1">
                        <div className='card'>
                            <img src='https://i.ibb.co/8MB6f8b/prod1.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data1",{ns:'products'})} </p>
                                <h5> {t("product_title1",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                    <div className='card-wrapper' key="2">
                        <div className='card'>
                            <img src='https://i.ibb.co/h12mxtz/prod2.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data2",{ns:'products'})} </p>
                                <h5> {t("product_title2",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                    <div className='card-wrapper' key="3">
                        <div className='card'>
                            <img src='https://i.ibb.co/hC13CxD/prod3.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data3",{ns:'products'})} </p>
                                <h5> {t("product_title3",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                    <div className='card-wrapper' key="4">
                        <div className='card'>
                            <img src='https://i.ibb.co/jg4WcLg/prod4.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data4",{ns:'products'})} </p>
                                <h5> {t("product_title4",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                    <div className='card-wrapper' key="5">
                        <div className='card'>
                            <img src='https://i.ibb.co/8MB6f8b/prod1.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data5",{ns:'products'})} </p>
                                <h5> {t("product_title5",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                    <div className='card-wrapper' key="6">
                        <div className='card'>
                            <img src='https://i.ibb.co/h12mxtz/prod2.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data6",{ns:'products'})} </p>
                                <h5> {t("product_title6",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                    <div className='card-wrapper' key="7">
                        <div className='card'>
                            <img src='https://i.ibb.co/hC13CxD/prod3.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data7",{ns:'products'})} </p>
                                <h5> {t("product_title7",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                    <div className='card-wrapper' key="8">
                        <div className='card'>
                            <img src='https://i.ibb.co/jg4WcLg/prod4.jpg' />
                            <div className='card-text'>
                                <p> {t("product_data8",{ns:'products'})} </p>
                                <h5> {t("product_title8",{ns:'products'})} </h5>
                            </div>
                        </div>
                    </div>

                </Slider>

            </section>


            <section className='homeSections homeSec-Client'>

                <div className="container">
                    <h3 className="secTitle" > <span className="secSubTitle"> {t("home_clients_subheader")} </span> {t("home_clients_header")} </h3>
                </div>

                <div className='clientCont'>
                    <div className='client row justify-content-center'>
                        <div className='col-md-2'>
                            <img src="https://i.ibb.co/yFktbCD/bbcLogo.png" />
                        </div>
                        <div className='col-md-2'>
                            <img src="https://i.ibb.co/M7kPGFg/hboLogo.png" />
                        </div>
                        <div className='col-md-3'>
                            <img src="https://i.ibb.co/M5Sqxvx/microsoft-Logo.png" />
                        </div>
                        <div className='col-md-2'>
                            <img src="https://i.ibb.co/M7kPGFg/hboLogo.png" />
                        </div>
                        <div className='col-md-2'>
                            <img src="https://i.ibb.co/yFktbCD/bbcLogo.png" />
                        </div>
                    </div>

                </div>

            </section>

        </div>

    )
}


export default Home_Sections;