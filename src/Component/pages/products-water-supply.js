import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import Brands_Home from '../home-page/brands-home-section'
import './style/products.css'

function Water_Supply() {

    const { t } = useTranslation(['products', 'navbar', 'data']);

    return (
        <div id='water-supply'>

            <Pages_Header title={t('nav_products1', { ns: 'navbar' })} />

            <div className='container'>

                <section className='homeSections homeSec-Brands'>
                    <div className="container">
                        <Brands_Home />
                    </div>
                </section>

            </div>
        </div>
    )
}


export default Water_Supply;