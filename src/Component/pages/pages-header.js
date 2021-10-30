import React from "react";
import { useTranslation } from "react-i18next";

function Pages_Header(props) {

    const { t } = useTranslation(['navbar', 'data']);

    return (
        <div id='pages-header'>
            <header>
                <div className='blackLayer'>
                    <div className='container'>
                        <h1> {props.title} </h1>
                        <p> <span> {t('nav_home')} /</span> {props.title} </p>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Pages_Header;