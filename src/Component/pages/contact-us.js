import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import './style/contact-us.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

function Contact_Us() {

    const { t } = useTranslation(['contact-us', 'navbar', 'data']);

    return (
        <div id='contact-us'>
            <Pages_Header title={t('nav_contact', {ns:'navbar'})} />

            <div className='container'>
                <div className='row'>s
                    <div className='contact-right col-md-8 ml-auto'>
                        <div className='row'>
                            <div className='col-6'>
                                <h4> {t('GET IN TOUCH')} </h4>
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="form-name" placeholder='Your Name' />
                                    </div>
                                    <div class="form-group">
                                        <input type="mail" class="form-control" id="form-mail" placeholder='Email' />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" id="form-message" rows="5" placeholder='Message'></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-submit">SEND NOW</button>
                                </form>
                            </div>
                            <div className='col-6 contact-data-cont'>
                                <div className='contact-data'>
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    <div>
                                        <p> (+2) 01000021939 - (+2) 01000021922 </p>
                                        <p> (+202) 24589011 - (+202) 24589012 </p>
                                    </div>
                                </div>
                                <div className='contact-data'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p> info@watexsolutions.com </p>
                                </div>
                                <div className='contact-data'>
                                    <FontAwesomeIcon icon={faLocationArrow} />
                                    <p> 1197 El Louloa Towers, Corniche El Nile, Beside The Nile City, Cairo </p>
                                </div>
                            </div>
                        </div>
                        <img src='https://i.ibb.co/SBMM9XK/watex-Logo.jpg' />
                    </div>
                </div>

                <div className='branches'>

                    <div class="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-branchOne-tab" data-toggle="pill" href="#v-pills-branchOne" role="tab" aria-controls="v-pills-branchOne" aria-selected="true">branch 1</a>
                                <a class="nav-link" id="v-pills-branchTwo-tab" data-toggle="pill" href="#v-pills-branchTwo" role="tab" aria-controls="v-pills-branchTwo" aria-selected="false">branch 2</a>
                                <a class="nav-link" id="v-pills-branchThree-tab" data-toggle="pill" href="#v-pills-branchThree" role="tab" aria-controls="v-pills-branchThree" aria-selected="false">branch 3</a>
                                <a class="nav-link" id="v-pills-branchFour-tab" data-toggle="pill" href="#v-pills-branchFour" role="tab" aria-controls="v-pills-branchFour" aria-selected="false">branch 4</a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tab-content" id="v-pills-tabContent">

                                <div class="tab-pane fade show active" id="v-pills-branchOne" role="tabpanel" aria-labelledby="v-pills-branchOne-tab">

                                    <div className='maps-cont'>
                                        <span> Branch 1 </span>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13810.238931800417!2d31.2302635!3d30.078152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb76aa06c0b4219c!2z2YjYp9iq2YPYsyAtIFdhdGV4!5e0!3m2!1sen!2seg!4v1635233921045!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>
                                    </div>

                                    <div className='col-6 branch-contact-cont'>
                                        <h4> Branch 1 Branch contact </h4>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                            <p> (+2) 01000021939 </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <p> info@watexsolutions.com </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faLocationArrow} />
                                            <p> 1197 El Louloa Towers, Corniche El Nile, Beside The Nile City, Cairo </p>
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="v-pills-branchTwo" role="tabpanel" aria-labelledby="v-pills-branchTwo-tab">

                                    <div className='maps-cont'>
                                        <span> Branch 2 </span>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13810.238931800417!2d31.2302635!3d30.078152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb76aa06c0b4219c!2z2YjYp9iq2YPYsyAtIFdhdGV4!5e0!3m2!1sen!2seg!4v1635233921045!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>
                                    </div>

                                    <div className='col-6 branch-contact-cont'>
                                        <h4> Branch 2 Branch contact </h4>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                            <p> (+2) 01000021939 </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <p> info@watexsolutions.com </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faLocationArrow} />
                                            <p> 1197 El Louloa Towers, Corniche El Nile, Beside The Nile City, Cairo </p>
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="v-pills-branchThree" role="tabpanel" aria-labelledby="v-pills-branchThree-tab">

                                    <div className='maps-cont'>
                                        <span> Branch 3 </span>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13810.238931800417!2d31.2302635!3d30.078152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb76aa06c0b4219c!2z2YjYp9iq2YPYsyAtIFdhdGV4!5e0!3m2!1sen!2seg!4v1635233921045!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>
                                    </div>

                                    <div className='col-6 branch-contact-cont'>
                                        <h4> Branch 3 Branch contact </h4>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                            <p> (+2) 01000021939 </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <p> info@watexsolutions.com </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faLocationArrow} />
                                            <p> 1197 El Louloa Towers, Corniche El Nile, Beside The Nile City, Cairo </p>
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="v-pills-branchFour" role="tabpanel" aria-labelledby="v-pills-branchFour-tab">

                                    <div className='maps-cont'>
                                        <span> Branch 4 </span>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13810.238931800417!2d31.2302635!3d30.078152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb76aa06c0b4219c!2z2YjYp9iq2YPYsyAtIFdhdGV4!5e0!3m2!1sen!2seg!4v1635233921045!5m2!1sen!2seg" allowfullscreen="" loading="lazy"></iframe>
                                    </div>

                                    <div className='col-6 branch-contact-cont'>
                                        <h4> Branch 4 Branch contact </h4>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faPhoneAlt} />
                                            <p> (+2) 01000021939 </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <p> info@watexsolutions.com </p>
                                        </div>
                                        <div className='branch-contact'>
                                            <FontAwesomeIcon icon={faLocationArrow} />
                                            <p> 1197 El Louloa Towers, Corniche El Nile, Beside The Nile City, Cairo </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Contact_Us;