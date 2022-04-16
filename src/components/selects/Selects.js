import React from 'react'
import './SelectsStyles.css'

import Calangute from '../../assets/borabora.jpg'
import Baga from '../../assets/borabora2.jpg'
import Morjim from '../../assets/maldives.jpg'
import Palolem from '../../assets/maldives2.jpg'
import Cola from '../../assets/maldives3.jpg'
import Vagator from '../../assets/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
  return (
    <div name='views' className='selects'>
        <div className='container'>
          <SelectsImg bgImg={Calangute} text='Calangute'/>
          <SelectsImg bgImg={Baga} text='Baga'/>
          <SelectsImg bgImg={Morjim} text='Morjim'/>
          <SelectsImg bgImg={Palolem} text='Palolem'/>
          <SelectsImg bgImg={Cola} text='Cola'/>
          <SelectsImg bgImg={Vagator} text='Vagator'/>
        </div>
    </div>
  )
}

export default Selects