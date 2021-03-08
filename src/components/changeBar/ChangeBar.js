import React from 'react';
import '../changeBar/ChangeBar.css';

const ChangeBar = () => {
    return (
        <div className='colorChangeBar'>
            <div className='textBox'>
                <form >
                    <input
                        type='text'
                       
                    />
                </form>
            </div>
            <div className='changeButton'>
                <button>Change Color</button>
            </div>
        </div>
    )
}
export default ChangeBar;