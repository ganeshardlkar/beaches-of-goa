import React from 'react'
import './DestinationsStyles.css'

import Calangute from '../../assets/borabora.jpg'
import Baga from '../../assets/borabora2.jpg'
import Cola from '../../assets/maldives.jpg'
import Morjim from '../../assets/maldives2.jpg'
import Palolem from '../../assets/keywest.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Goa's best beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Calangute} alt="/"/>
                    <img src={Baga} alt="/"/>
                    <img src={Cola} alt="/"/>
                    <img src={Morjim} alt="/"/>
                    <img src={Palolem} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations