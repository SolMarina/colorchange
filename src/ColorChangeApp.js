import React, { useState } from 'react';
import './ColorChangeApp.css'
import ChangeBar from './components/changeBar/ChangeBar';
import ColorfulPicure from './components/colorfulPicture/ColorfulPicture';

const ColorChangeApp = (props) => {
    const [background, setBackground] = useState('')
    const [number, setNumber] = useState('1')


    return (
        <div className='mainBox'>
            <h2>ColorChangeApp</h2>
            <hr></hr>
            <p>{number}</p>
            <div className='changeBar'>
                <ChangeBar setBackground={setBackground} setNumber={setNumber}  />
            </div>
            <div className='picture'>
                <ColorfulPicure background= {background}/>
            </div>
        </div>
    )
 
}

export default ColorChangeApp