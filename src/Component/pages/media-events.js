import React from 'react';
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'

function Events() {

    const { t } = useTranslation(['events', 'navbar', 'data']);

    const news = [
        { event_id: '1', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/Y2JLdhV/events-3.jpg' },
        { event_id: '2', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/zZZsz4f/events-2.jpg' },
        { event_id: '3', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/HT3QLCW/events-1.jpg' },
        { event_id: '4', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/xjc9s9r/event1.jpg' },
        { event_id: '5', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/cXZ6wFN/event2.jpg' },
        { event_id: '6', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/rbWCDjh/event3.jpg' },
        { event_id: '7', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/SdVWPBX/events-4.jpg' },
        { event_id: '8', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/tc81qNQ/Startup-Stock-Photos.jpg' },
        { event_id: '9', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/zZZsz4f/events-2.jpg' },
        { event_id: '10', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/Y2JLdhV/events-3.jpg' },
        { event_id: '11', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/zZZsz4f/events-2.jpg' },
        { event_id: '12', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/HT3QLCW/events-1.jpg' },
        { event_id: '13', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/xjc9s9r/event1.jpg' },
        { event_id: '14', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/cXZ6wFN/event2.jpg' },
        { event_id: '15', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/rbWCDjh/event3.jpg' },
        { event_id: '16', event_date: 'event1_date', event_desc: 'event1_desc', event_image: 'https://i.ibb.co/SdVWPBX/events-4.jpg' }
    ]

    return (
        <div id='events' className='homeSec-Events'>
            <Pages_Header title={t('nav_events', { ns: 'navbar' })} />

            <div class='container'>
                <div class="tab-content" id="pills-tabContent">

                    <div class="tab-pane fade show active" id="pills-page1" role="tabpanel" aria-labelledby="pills-page1-tab">
                        <div className='row'>
                            {
                                news.slice(0, 9).map(event => (
                                    <div className={`col-sm-4 bit-of-news-${event.event_id}`}>
                                        <div className='layers'>
                                            <img className='imageLayer w-100' src={event.event_image} />
                                            <div className='blackLayer' >
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6> {t(event.event_date)} ({event.event_id}) </h6>
                                                        <span className='whiteLine'>  </span>
                                                        <p> {t(event.event_desc)} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div class="tab-pane fade" id="pills-page2" role="tabpanel" aria-labelledby="pills-page2-tab">
                        <div className='row'>
                            {
                                news.slice(10, 16).map(event => (
                                    <div className={`col-sm-4 bit-of-news-${event.event_id}`}>
                                        <div className='layers'>
                                            <img className='imageLayer w-100' src={event.event_image} />
                                            <div className='blackLayer' >
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6> {t(event.event_date)} ({event.event_id})</h6>
                                                        <span className='whiteLine'>  </span>
                                                        <p> {t(event.event_desc)} </p>
                                                    </div>
                                                </div>
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
                        <a class="nav-link" id="pills-page2-tab" data-toggle="pill" href="#pills-page2" role="tab" aria-controls="pills-page2" aria-selected="false">END</a>
                    </li>
                </ul>


            </div>

        </div>
    )

}

export default Events;