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

       
    <div className={backgroundColor =='azul' ? 'blue'
    : backgroundColor=='rojo' ? 'red' 
    : backgroundColor=='verde' ? 'green' : 'card'
    
    }>
       
    </div>
        
    )
}
export default ColorfulPicure;


