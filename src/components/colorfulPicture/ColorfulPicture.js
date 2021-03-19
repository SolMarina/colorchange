import React, { useState, useEffect } from 'react';
import '../colorfulPicture/ColorfulPicture.css';

const ColorfulPicure = (props) => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [numberAncho, setnumberAncho] = useState('');
    const [numberAlto, setnumberAlto] = useState('')

    const upcolor = () => {
        setBackgroundColor(props.background)
    }
    useEffect(() => {
        upcolor();
    });

    const upNumberAncho = () => {
        setnumberAncho(props.number)
    }
    useEffect(() => {
        upNumberAncho();
    });

    const upNumberAlto = () => {
        setnumberAlto(props.number)
    }
    useEffect(() => {
        upNumberAlto();
    });


    let cuadrado = 0;
    let list = [];
    for (let i = 0; i <= cuadrado; i++) {
        list.push(<div className={backgroundColor === 'azul' ? 'blue'
            : backgroundColor === 'rojo' ? 'red'
                : backgroundColor === 'verde' ? 'green' : 'card'}>
            <p>{numberAncho} {numberAlto}</p>
           
        </div>)
    }

    return (

        list

    )


}
export default ColorfulPicure;


