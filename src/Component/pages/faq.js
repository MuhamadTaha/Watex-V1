import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import './style/about-faq.css'

function Faq() {

    const { t } = useTranslation(['about-faq', 'navbar','data']);

    return (
        <div id='faq'>
            <Pages_Header title={t('nav_faq',{ns:'navbar'})} />

            <div className='container'>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {t("faq_question_1")}
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="card-body collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body"> {t("faq_answer_1")} </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> {t("faq_question_2")} </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="card-body collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body"> {t("faq_answer_2")} </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> {t("faq_question_3")} </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="card-body collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">{t("faq_answer_3")}</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> {t("faq_question_4")} </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="card-body collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                            <div class="card-body">{t("faq_answer_4")}</div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingFive">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> {t("faq_question_5")} </button>
                            </h2>
                        </div>
                        <div id="collapseFive" class="card-body collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div class="card-body">{t("faq_answer_5")}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}


export default Faq;