import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import Brands_Home from '../home-page/brands-home-section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './style/services.css'

function Customer_Services() {

    const { t } = useTranslation(['services', 'navbar', 'data']);

    return (
        <div id='customer-services'>

            <Pages_Header title={t('nav_services2', { ns: 'navbar' })} />

            <div className='container'>
                <div className='text-content'>
                    <h4> {t('services_homeSolution_ourServices_title')} </h4>
                    <p> {t('services_homeSolution_ourServices_desc1')} </p>
                    <p> {t('services_homeSolution_ourServices_desc2')} </p>
                </div>

                <div className='text-content'>
                    <h4> {t('services_homeSolution_afterSales_title')} </h4>
                    <p> {t('services_homeSolution_afterSales_desc')} </p>
                </div>

                <div className='text-content'>
                    <h4> {t('services_homeSolution_assurancesCertificates_title')} </h4>
                    <p> {t('services_homeSolution_assurancesCertificates_desc')} </p>
                </div>

            </div>

            <section className='homeSections homeSec-Brands'>
                <div className="container">
                    <Brands_Home />
                </div>
            </section>

            <div className='container'>
                <div className='latest-prod-desc'>
                <a href='#' className='btn learnMoreBtn'> {t("order_now", { ns: 'data' })} </a>
                </div>

                <div className='social-links'>
                    <ul>
                        <li> <a href="#"> <FontAwesomeIcon icon={faFacebookF} /></a> </li>
                        <li> <a href="#"> <FontAwesomeIcon icon={faLinkedinIn} /></a> </li>
                        <li> <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a> </li>
                        <li> <a href="#"> <FontAwesomeIcon icon={faYoutube} /></a> </li>
                        <li> <a href="#"> <FontAwesomeIcon icon={faEnvelope} /></a> </li>
                    </ul>
                </div>

            </div>



        </div>
    )
}


export default Customer_Services;