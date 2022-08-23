import React from 'react'
import Ping from './ping.png'

export default function cards(props){
    return(
        <div className='card--main'>
            <div className='card--one'>
                <img src={props.image} alt='img' className='journal--img' />
            </div>
            
            <div className='card--two'>
                <div className='card--stats'>
                    <img src={Ping} alt='ping' className='ping--img'/>
                    <p className='card--country'>{props.country}</p>
                    <a href='{props.map}'
                     className='card--googlemaps'>View on Google Maps
                     </a>
                </div>
            </div>    
            <div className='card--three'>
                <h2 className='card--place'>{props.name}</h2>
                <p className='card--date'>{props.date}</p>
                <p className='card--desc'>{props.description}</p>
            </div>
        </div>
    )
}

