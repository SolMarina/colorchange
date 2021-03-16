import React, {useState,useEffect} from 'react';
import '../colorfulPicture/ColorfulPicture.css';

const ColorfulPicure = (props) => {
    const [backgroundColor, setBackgroundColor] = useState('');

const upcolor= () => {
    setBackgroundColor(props.background)
}
useEffect(() => {
    upcolor();
  });

    return (

       
    <div className='card'>
        <p>{backgroundColor}</p>
    </div>
        
    )
}
export default ColorfulPicure;


