import React from 'react';
import { useTranslation } from "react-i18next";

function News_Home() {

    const { t } = useTranslation(['news', 'data', 'products']);

    return (
        <div className='row'>

            <div className="col-sm-4" key="1">
                <div className='layers'>
                    <img className='imageLayer w-100' src="https://i.ibb.co/YkM9v6Q/news1.jpg" />
                    <div className='blackLayer' >  </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {t("news_title1")} </h5>
                        <h6> {t("news_date1")} </h6>
                        <p> {t("news_desc1")} </p>
                        <a href='#' className='btn learnMoreBtn'> {t("learn_more", { ns: 'data' })} </a>
                    </div>
                </div>
            </div>

            <div className="col-sm-4" key="2">
                <div className='layers'>
                    <img className='imageLayer w-100' src="https://i.ibb.co/vVbqm0J/news2.jpg" />
                    <div className='blackLayer' >  </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {t("news_title2")} </h5>
                        <h6> {t("news_date2")} </h6>
                        <p> {t("news_desc2")} </p>
                        <a href='#' className='btn learnMoreBtn'> {t("learn_more", { ns: 'data' })} </a>
                    </div>
                </div>
            </div>

            <div className="col-sm-4" key="3">
                <div className='layers'>
                    <img className='imageLayer w-100' src="https://i.ibb.co/47LKmNb/news3.jpg" />
                    <div className='blackLayer' >  </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {t("news_title3")} </h5>
                        <h6> {t("news_date3")} </h6>
                        <p> {t("news_desc3")} </p>
                        <a href='#' className='btn learnMoreBtn'> {t("learn_more", { ns: 'data' })} </a>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default News_Home;