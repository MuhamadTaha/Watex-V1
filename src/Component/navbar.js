import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Link, withRouter } from 'react-router-dom'

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from 'js-cookie';

export default withRouter(function Navbar({ location }) {
    const { t } = useTranslation(['navbar', 'data']);
    const languages = [
        {
            code: "en",
            name: "English",
            country_code: "gb",
            direction: "ltr"
        },
        {
            code: "ar",
            name: "العربية",
            country_code: "eg",
            direction: "rtl"
        },
    ];

    const currentLanguageCode = cookies.get('i18next') || 'en';
    const currentLanguage = languages.find(l => l.code === currentLanguageCode);

    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        const { pathname } = location;
        setCurrentPath(pathname)

        document.body.dir = currentLanguage.direction || 'ltr'
        var sections = document.querySelector('section')
        var header = document.querySelector('header')
        var footer = document.querySelector('footer')

        if (document.body.dir === 'rtl') {
            if (sections != null) { sections.classList.add('ar-text'); }
            if (header != null) { header.classList.add('ar-text'); }
            if (footer != null) { footer.classList.add('ar-text'); }
            document.getElementById('lang-modify-1').classList.add('ar-text');
            document.getElementById('margin-modify').classList.add('mr-auto');
            document.getElementById('margin-modify').classList.remove('ml-auto');
        } else {
            if (sections != null) { sections.classList.remove('ar-text') }
            if (header != null) { header.classList.remove('ar-text') }
            if (footer != null) { footer.classList.remove('ar-text') }
            document.getElementById('lang-modify-1').classList.remove('ar-text')
            document.getElementById('margin-modify').classList.add('ml-auto');
            document.getElementById('margin-modify').classList.remove('mr-auto');
        }

    }, [currentLanguage, document.body.dir, location.pathname]);

    return (
        <div className="nav-container" id="lang-modify-1">
            <div className="topNav">
                <div className="container">
                    <div className='d-flex row'>
                        <div className='col-md-6'>
                            <ul>
                                <li> <a href="#"> <FontAwesomeIcon icon={faFacebookF} /></a> </li>
                                <li> <a href="#"> <FontAwesomeIcon icon={faLinkedinIn} /></a> </li>
                                <li> <a href="#"> <FontAwesomeIcon icon={faTwitter} /></a> </li>
                                <li> <a href="#"> <FontAwesomeIcon icon={faYoutube} /></a> </li>
                                <li> <a href="#"> <FontAwesomeIcon icon={faInstagram} /></a> </li>
                                <li> <a href="#"> <FontAwesomeIcon icon={faPhoneAlt} /></a> </li>
                                <li> <a href="#"> <FontAwesomeIcon icon={faEnvelope} /></a> </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <div className="rightNav ml-auto">
                                <Link to="/contact" className="btn-contact">{t("nav_contact")}</Link>
                                {languages.map(({ code, name }) => (
                                    <button className="btn-lang" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode} >
                                        <span> {t('language_name', { ns: 'data' })} </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">

                    <Link to="/" className='navbar-brand'>
                        <img src='https://i.ibb.co/SBMM9XK/watex-Logo.jpg' width="120" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto" id='margin-modify'>

                            <Link to="/" className="nav-link active" >{t("nav_home")} <span className="sr-only">(current)</span></Link>
                            <Link to="/about" className="nav-link" >{t("nav_about")}</Link>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t("nav_products")}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/waterSupply" className="dropdown-item nav-link" >{t("nav_products1")}</Link>
                                    <Link to="/drainageSolutions" className="dropdown-item nav-link" >{t("nav_products2")}</Link>
                                    <Link to="/othersSolutions" className="dropdown-item nav-link" >{t("nav_products3")}</Link>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t("nav_services")}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/homeSolutions" className="dropdown-item nav-link" >{t("nav_services1")}</Link>
                                    <Link to="/customerServices" className="dropdown-item nav-link" >{t("nav_services2")}</Link>
                                    <Link to="/technicianTraining" className="dropdown-item nav-link" >{t("nav_services3")}</Link>
                                    <Link to="/requestCertificate" className="dropdown-item nav-link" >{t("nav_services4")}</Link>
                                </div>
                            </li>

                            <Link to="/projects" className="nav-link" >{t("nav_projects")}</Link>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {t("nav_media")}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/news" className="dropdown-item nav-link" >{t("nav_news")}</Link>
                                    <Link to="/events" className="dropdown-item nav-link" >{t("nav_events")}</Link>
                                </div>
                            </li>

                            <Link to="/faq" className="nav-link" >{t("nav_faq")}</Link>

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
});
