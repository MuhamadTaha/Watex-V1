import React from 'react';
import { useTranslation } from "react-i18next";

function Products_Home() {

    const { t } = useTranslation(['products', 'navbar','data']);

    return (
        <div className='row'>

            < div className="col-sm-3" key={1} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/8MB6f8b/prod1.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title1")}</h5>
                    </div>
                </div>
            </div >

            < div className="col-sm-3" key={2} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/h12mxtz/prod2.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title2")}</h5>
                    </div>
                </div>
            </div >

            < div className="col-sm-3" key={3} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/hC13CxD/prod3.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title3")}</h5>
                    </div>
                </div>
            </div >

            < div className="col-sm-3" key={4} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/jg4WcLg/prod4.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title4")}</h5>
                    </div>
                </div>
            </div >

            < div className="col-sm-3" key={5} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/8MB6f8b/prod1.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title5")}</h5>
                    </div>
                </div>
            </div >

            < div className="col-sm-3" key={6} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/h12mxtz/prod2.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title6")}</h5>
                    </div>
                </div>
            </div >

            < div className="col-sm-3" key={7} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/hC13CxD/prod3.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title7")}</h5>
                    </div>
                </div>
            </div >

            < div className="col-sm-3" key={8} >
                <div className='layers'>
                    <img className='imageLayer' src="https://i.ibb.co/jg4WcLg/prod4.jpg" />
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{t("product_title8")}</h5>
                    </div>
                </div>
            </div >

        </div>
    )
}


export default Products_Home