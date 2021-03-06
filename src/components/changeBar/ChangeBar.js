import React, { useState } from 'react';
import '../changeBar/ChangeBar.css';

function ChangeBar({ setBackground, setNumber }) {

    const [inputValue, setInputvalue] = useState('');
    const [inputNumber, setInputnumber] = useState('0');

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);

    };
    const handleInputNumber = (e) => {
        setInputnumber(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setBackground(inputValue);
            setInputvalue('');

        }

        if (inputNumber.trim().length > 2) {

            setNumber(inputNumber);
            setInputnumber('0');

        }


    };

    return (
        <div className='colorChangeBar'>
            <div className='textBox'>
                <form onSubmit={handleSubmit}>
                    <div className='imputBox'>
                    <p><label>Ancho</label></p>
                        <input
                            type='text'
                            value={inputNumber}
                            onChange={handleInputNumber} />
                    </div>
                    <div  className='imputBox'>
                    <p><label>Alto</label></p>
                        <input
                            type='text'
                            value={inputNumber}
                            onChange={handleInputNumber} />
                    </div>
                    <div  className='imputBox'>
                    <p><label>Color</label></p>
                        <input
                            type='text'
                            value={inputValue}
                            onChange={handleInputChange} />
                    </div>
                    <div className='changeButton'>
                        <input className='button' type="submit" value="Change Background" />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ChangeBar;