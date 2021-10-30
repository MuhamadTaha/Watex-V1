import React from "react";
import { useTranslation } from "react-i18next";
import Pages_Header from './pages-header'
import Brands_Home from '../home-page/brands-home-section'
import './style/products.css'

function Drainage_Solutions() {

    const { t } = useTranslation(['products', 'navbar', 'data']);

    return (
        <div id='drainage-solutions'>
            <Pages_Header title={t('nav_products2', { ns: 'navbar' })} />
            
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


export default Drainage_Solutions;