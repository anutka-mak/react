import React from 'react';

function ColorNumber({ count }) {

    const red = Math.min(220, Math.max(0, Math.abs(count + 30)));
    const green = Math.min(220, Math.max(0, Math.abs(count + 30)));
    const blue = Math.min(220, Math.max(0, Math.abs(count - 15)));

    const textColor = `rgb(${red},${green},${blue})`;

    return (
        <p style={{ color: textColor }}>{count}</p>
    );
}

export default ColorNumber;