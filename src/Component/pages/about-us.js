import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import './style/about-faq.css'

function About_Us() {

    const { t } = useTranslation(['about-faq', 'navbar','data']);

    return (
        <div id='about-us'>
            <Pages_Header title={t('nav_about',{ns:'navbar'})} />

            <div className='container'>
                <div className='row'>
                    <div className='about-left col-md-4'>
                        <h4> {t('about_left_head')} </h4>
                        <a href='#' className="btn learnMoreBtn"> {t('about_left_button')} </a>
                    </div>
                    <div className='about-right col-md-8'>
                        <h4> {t('about_right_head')} </h4>
                        <p> {t('about_right_desc1')} </p>
                        <p> {t('about_right_desc2')} </p>
                        <img src='https://i.ibb.co/SBMM9XK/watex-Logo.jpg' />
                    </div>
                </div>

                <div className='chief-board'>
                    <h3> {t('about_board_head')} </h3>
                    <h2> WATEX </h2>

                    <div className='row'>

                        <div className='col-md-6 row'>
                            <div className='col-md-6 img-cont'> </div>
                            <div className='col-md-6 desc-cont'>
                                <h4> {t('about_board1_head')} </h4>
                                <h5> {t('about_board1_position')} </h5>
                                <p> {t('about_board1_desc')} </p>
                            </div>
                        </div>

                        <div className='col-md-6 row'>
                            <div className='col-md-6 img-cont'> </div>
                            <div className='col-md-6 desc-cont'>
                                <h4> {t('about_board1_head')} </h4>
                                <h5> {t('about_board1_position')} </h5>
                                <p> {t('about_board1_desc')} </p>
                            </div>
                        </div>

                        <div className='col-md-6 row'>
                            <div className='col-md-6 img-cont'> </div>
                            <div className='col-md-6 desc-cont'>
                                <h4> {t('about_board1_head')} </h4>
                                <h5> {t('about_board1_position')} </h5>
                                <p> {t('about_board1_desc')} </p>
                            </div>
                        </div>

                        <div className='col-md-6 row'>
                            <div className='col-md-6 img-cont'> </div>
                            <div className='col-md-6 desc-cont'>
                                <h4> {t('about_board1_head')} </h4>
                                <h5> {t('about_board1_position')} </h5>
                                <p> {t('about_board1_desc')} </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default About_Us;