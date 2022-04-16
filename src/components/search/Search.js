import React from 'react'
import './SearchStyles.css'
import Gold from '../../assets/gold.png'


function Search() {
  return (
    <div name='book' className='search'>
        <div className='container'>
            <div className='left'>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p>If you are planning to visit Goa, Baga Beach is one of the destinations you don't want to miss. It is one of the best beaches in Goa and definitely a great place to sit and relax for hours. If you are looking for a less crowded beach then it would be Morjim beach which is 13km from Mapusa city.This beach is major tourist spot and many tourist come in this beach. It is best place for night party. </p>
                <div className='search-col-2'>
                    <div className='box'>
                        <div>
                            <img src={Gold} alt='/' style={{marginRight: '1rem'}}></img>
                        </div>
                        <div>
                            <h3>WORLDS LEADING</h3>
                            <p>Inclusive company for 20 years in a row</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div>
                            <h3>NO ONE INCLUDES MORE</h3>
                            <p>All-inclusive company for 20 years in-a-row</p>
                            <button>View Packages</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='promo'>
                    <h4 className='save'>GET AN ADDITIONAL 20% OFF</h4>
                    <p className='timer'>12 HOURS LEFT</p>
                    <p className='offers'>VIEW ALL CURRENT OFFERS</p>
                </div>
                <form>
                    <div className='input-wrap'>
                        <label>Destination</label>
                        <select>
                            <option value='1'>Vagator Beach</option>
                            <option value='2'>Palolem Beach</option>
                            <option value='3'>Cola Beach</option>
                            <option value='4'>Morjim Beach</option>
                            <option value='5'>Calangute Beach</option>
                            <option value='6'>Baga Beach</option>
                        </select>
                    </div>
                    <div className='date'>
                        <div className='input-wrap'>
                            <label>Check-In</label>
                            <input type="date"></input>
                        </div>
                        <div className='input-wrap'>
                            <label>Check-Out</label>
                            <input type="date"></input>
                        </div>
                    </div>
                    <button>Rates and availabilities</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search