import React from "react";
import { useTranslation } from "react-i18next";

function Product_Details() {

    const { t } = useTranslation(['products', 'data']);
    
    const products = [
        { title: 'product_title1', date: 'product_date1', type: 'type1' },
        { title: 'product_title2', date: 'product_date2', type: 'type2' },
        { title: 'product_title3', date: 'product_date3', type: 'type1' },
        { title: 'product_title4', date: 'product_date4', type: 'type2' },
        { title: 'product_title5', date: 'product_date5', type: 'type1' },
        { title: 'product_title6', date: 'product_date6', type: 'type2' },
        { title: 'product_title7', date: 'product_date7', type: 'type1' },
        { title: 'product_title8', date: 'product_date8', type: 'type2' }
    ]

    const yet = products.find(({ type }) => type === 'type')

    return (
        <div id='product-details'>
            <div className='container'>


                <div>
                    {products.filter(prod => prod.type.includes('2')).map(newprod => (
                        <h1> 0 </h1>
                    ))}
                </div>




                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-page1" role="tabpanel" aria-labelledby="pills-page1-tab">

                        <div>
                            {products.filter(prod => prod.type.includes('1')).slice(0, 2).map(newprod => (
                                <h1> {t(newprod.title)} </h1>
                            ))}
                        </div>

                    </div>

                    <div class="tab-pane fade" id="pills-page2" role="tabpanel" aria-labelledby="pills-page2-tab">

                        <div>
                            {products.filter(prod => prod.type.includes('2')).slice(0, 2).map(newprod => (
                                <h1> {t(newprod.title)} </h1>
                            ))}
                        </div>

                    </div>

                    <div class="tab-pane fade" id="pills-page3" role="tabpanel" aria-labelledby="pills-page3-tab">


                        <div>
                            {products.filter(prod => prod.type.includes('1')).slice(2, 4).map(newprod => (
                                <h1> {t(newprod.title)} </h1>
                            ))}
                        </div>

                    </div>
                </div>





                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-page1-tab" data-toggle="pill" href="#pills-page1" role="tab" aria-controls="pills-page1" aria-selected="true">1</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page2-tab" data-toggle="pill" href="#pills-page2" role="tab" aria-controls="pills-page2" aria-selected="false">2</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-page3-tab" data-toggle="pill" href="#pills-page3" role="tab" aria-controls="pills-page3" aria-selected="false">3</a>
                    </li>
                </ul>


















            </div>
        </div>
    )
}


export default Product_Details;