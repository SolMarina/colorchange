import React from 'react';
import '../colorfulPicture/ColorfulPicture.css';
import square from '../../assets/img/square.png'
const ColorfulPicure = () => {
    return (
        <div className='pictureBox'>
            <img className ='square' src={square} />
        </div>
    )
}
export default ColorfulPicure;