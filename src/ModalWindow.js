import React from 'react';
import './ModalWindow.css'

function ModalWindow({openModal}) {

    return (
        <div className="modal">
            <h1>Modal</h1>
            <button className="close" onClick={openModal}>Close</button>
        </div>
    )
}

export default ModalWindow;