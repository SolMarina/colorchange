import React, { useState } from 'react';
import '../changeBar/ChangeBar.css';

const ChangeBar = ({ setBackground }) => {

    const [inputValue, setInputvalue] = useState('')

    const handleInputChange = (e) => {
        setInputvalue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setBackground(inputValue);
            setInputvalue('');
        }
    }

    return (
        <div className='colorChangeBar'>
            <div className='textBox'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <div className='changeButton'>
                        <input className='button' type="submit" value="Change Background" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ChangeBar;