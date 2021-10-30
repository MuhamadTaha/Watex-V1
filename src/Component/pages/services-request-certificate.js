import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import './style/services.css'

function Request_Certificate() {

    const { t } = useTranslation(['services', 'navbar', 'data']);

    return (
        <div id='request-certificate'>
            <div id='contact-us'>
                <div id='about-us'>

                    <Pages_Header title={t('nav_services4', { ns: 'navbar' })} />

                    <div className='container'>


                        <div className='row'>
                            <div className='about-left col-md-4'>
                                <h4> {t('services_requestCertificate_whatCertificate_title')} </h4>
                                <p> {t('services_requestCertificate_whatCertificate_desc1')} </p>
                                <p> {t('services_requestCertificate_whatCertificate_desc2')} </p>
                            </div>
                            <div className='contact-right col-md-8 ml-auto'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <h4> {t('services_requestCertificate_getInTouch_title')} </h4>
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="form-name" placeholder={t('services_requestCertificate_getInTouch_formName')} />
                                            </div>
                                            <div class="form-group">
                                                <input type="phone" class="form-control" id="form-phone" placeholder={t('services_requestCertificate_getInTouch_formPhone')} />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="form-address" placeholder={t('services_requestCertificate_getInTouch_formAddress')} />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="form-area" placeholder={t('services_requestCertificate_getInTouch_formArea')} />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="form-contacts" placeholder={t('services_requestCertificate_getInTouch_formContacts')} />
                                            </div>
                                            <button type="submit" class="btn btn-submit">{t('nav_services4',{ns:'navbar'})}</button>
                                        </form>
                                    </div>
                                    <div className='col-6 contact-data-cont'>
                                        <h4> {t('')} </h4>
                                        <p> {t('')} </p>
                                    </div>
                                </div>
                                <img src='https://i.ibb.co/SBMM9XK/watex-Logo.jpg' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}


export default Request_Certificate;