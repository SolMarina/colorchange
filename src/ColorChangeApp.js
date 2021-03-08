import React from 'react';
import './ColorChangeApp.css'
import ChangeBar from './components/changeBar/ChangeBar';
import ColorfulPicure from './components/colorfulPicture/ColorfulPicture';

const ColorChangeApp = () => {
    return (
        <div className='mainBox'>
            <h2>ColorChangeApp</h2>
            <hr></hr>
            <div>
                <div className='changeBar'>
                    <ChangeBar />
                </div>
            </div>
            <div className='picture'>
                <ColorfulPicure />

            </div>

        </div>
    )


}

export default ColorChangeApp