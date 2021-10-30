import React from 'react';
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'

function News() {

    const { t } = useTranslation(['news', 'data', 'navbar']);

    const news = [
        { news_id: '1', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/YkM9v6Q/news1.jpg' },
        { news_id: '2', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/vVbqm0J/news2.jpg' },
        { news_id: '3', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/47LKmNb/news3.jpg' },
        { news_id: '4', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/J5QTYxh/news-4.jpg' },
        { news_id: '5', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/Rcg94xQ/news-5.jpg' },
        { news_id: '6', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/BChRTYf/news-2.jpg' },
        { news_id: '7', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/47LKmNb/news3.jpg' },
        { news_id: '8', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/JRpKkLL/news-1.jpg' },
        { news_id: '9', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/YkM9v6Q/news1.jpg' },
        { news_id: '10', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/47LKmNb/news3.jpg' },
        { news_id: '11', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/Rcg94xQ/news-5.jpg' },
        { news_id: '12', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/YkM9v6Q/news1.jpg' },
        { news_id: '13', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/J5QTYxh/news-4.jpg' },
        { news_id: '14', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/47LKmNb/news3.jpg' },
        { news_id: '15', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/BChRTYf/news-2.jpg' },
        { news_id: '16', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/YkM9v6Q/news1.jpg' },
        { news_id: '17', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/vVbqm0J/news2.jpg' },
        { news_id: '18', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/J5QTYxh/news-4.jpg' },
        { news_id: '19', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/Rcg94xQ/news-5.jpg' },
        { news_id: '20', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/J5QTYxh/news-4.jpg' },
        { news_id: '21', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/47LKmNb/news3.jpg' },
        { news_id: '22', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/vVbqm0J/news2.jpg' },
        { news_id: '23', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/YkM9v6Q/news1.jpg' },
        { news_id: '24', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/Rcg94xQ/news-5.jpg' },
        { news_id: '25', news_title: 'news1_title', news_date: 'news1_date', news_desc: 'news1_desc', news_image: 'https://i.ibb.co/BChRTYf/news-2.jpg' }
    ]

    return (
        <div id='news' className='homeSec-News'>
            <Pages_Header title={t('nav_news', { ns: 'navbar' })} />

            <div class='container'>
                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active" id="pills-page1" role="tabpanel" aria-labelledby="pills-page1-tab">
                        <div className='row'>
                            {
                                news.slice(0, 9).map(bit_of_news => (

                                    <div className={`col-sm-4 bit-of-news-${bit_of_news.news_id}`}>
                                        <div className='layers'>
                                            <img className='imageLayer w-100' src={bit_of_news.news_image} />
                                            <div className='blackLayer' >  </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"> {t(bit_of_news.news_title)} {bit_of_news.news_id} </h5>
                                                <h6> {t(bit_of_news.news_date)} </h6>
                                                <p> {t(bit_of_news.news_desc)} </p>
                                                <a href='#' className='btn learnMoreBtn'> {t("learn_more", { ns: 'data' })} </a>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-page2" role="tabpanel" aria-labelledby="pills-page2-tab">
                        <div className='row'>
                            {
                                news.slice(10, 19).map(bit_of_news => (

                                    <div className={`col-sm-4 bit-of-news-${bit_of_news.news_id}`}>
                                        <div className='layers'>
                                            <img className='imageLayer w-100' src={bit_of_news.news_image} />
                                            <div className='blackLayer' >  </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"> {t(bit_of_news.news_title)} {bit_of_news.news_id} </h5>
                                                <h6> {t(bit_of_news.news_date)} </h6>
                                                <p> {t(bit_of_news.news_desc)} </p>
                                                <a href='#' className='btn learnMoreBtn'> {t("learn_more", { ns: 'data' })} </a>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-page3" role="tabpanel" aria-labelledby="pills-page3-tab">
                        <div className='row'>
                            {
                                news.slice(20, 25).map(bit_of_news => (

                                    <div className={`col-sm-4 bit-of-news-${bit_of_news.news_id}`}>
                                        <div className='layers'>
                                            <img className='imageLayer w-100' src={bit_of_news.news_image} />
                                            <div className='blackLayer' >  </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"> {t(bit_of_news.news_title)} {bit_of_news.news_id} </h5>
                                                <h6> {t(bit_of_news.news_date)} </h6>
                                                <p> {t(bit_of_news.news_desc)} </p>
                                                <a href='#' className='btn learnMoreBtn'> {t("learn_more", { ns: 'data' })} </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>


                <ul class="pagination justify-content-center nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-page1-tab" data-toggle="pill" href="#pills-page1" role="tab" aria-controls="pills-page1" aria-selected="true">1</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page2-tab" data-toggle="pill" href="#pills-page2" role="tab" aria-controls="pills-page2" aria-selected="false">2</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page3-tab" data-toggle="pill" href="#pills-page3" role="tab" aria-controls="pills-page3" aria-selected="false">3</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page3-tab" data-toggle="pill" href="#pills-page3" role="tab" aria-controls="pills-page3" aria-selected="false">END</a>
                    </li>
                </ul>


            </div>

        </div>
    )

}

export default News;