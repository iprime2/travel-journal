import React from 'react'
import worldlogo from '../images/world-logo.png'

export default function navbar(){
    return(
        <nav className='navbar'>
            <img src={worldlogo} alt='world' className='world--img'/>
            <p className='navbar--title'>My Travel Journal</p>
        </nav>
    )

}