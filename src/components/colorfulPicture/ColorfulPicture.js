import React, { useState, useEffect } from 'react';
import '../colorfulPicture/ColorfulPicture.css';

const ColorfulPicure = (props) => {
    const [backgroundColor, setBackgroundColor] = useState('');

    const upcolor = () => {
        setBackgroundColor(props.background)
    }
    useEffect(() => {
        upcolor();
    });
    let cuadrado = 5;
    let list = [];
    for (let i = 0; i <= cuadrado; i++) {
        list.push(<div className={backgroundColor === 'azul' ? 'blue'
            : backgroundColor === 'rojo' ? 'red'
                : backgroundColor === 'verde' ? 'green' : 'card'}>
        </div>)
    }

    return (
        list
    )








}
export default ColorfulPicure;


