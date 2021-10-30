import React from 'react';
import { useTranslation } from "react-i18next";

function Event_Home() {

    const { t } = useTranslation(['events', 'navbar','data']);

    return (
        <div className='row'>

            <div className="col-sm-4" key="1">
                <div className='layers'>
                    <img className='imageLayer w-100' src="https://i.ibb.co/xjc9s9r/event1.jpg" />
                    <div className='blackLayer' >
                        <div className="card">
                            <div className="card-body">
                                <h6> {t("events_date1")} </h6>
                                <span className='whiteLine'>  </span>
                                <p> {t("events_desc1")} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4" key="2">
                <div className='layers'>
                    <img className='imageLayer w-100' src="https://i.ibb.co/cXZ6wFN/event2.jpg" />
                    <div className='blackLayer' >
                        <div className="card">
                            <div className="card-body">
                            <h6> {t("events_date2")} </h6>
                                <span className='whiteLine'> </span>
                                <p> {t("events_desc2")} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4" key="3">
                <div className='layers'>
                    <img className='imageLayer w-100' src="https://i.ibb.co/rbWCDjh/event3.jpg" />
                    <div className='blackLayer' >
                        <div className="card">
                            <div className="card-body">
                            <h6> {t("events_date3")} </h6>
                                <span className='whiteLine'>  </span>
                                <p> {t("events_desc3")} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Event_Home;