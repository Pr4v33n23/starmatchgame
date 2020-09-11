import React from 'react';

const PlayNumber = (props) => {

    const colors = {
        available: 'lightgray',
        used:'lightgreen',
        wrong:'lightcoral',
        candidate:'deepskyblue'
    }
    let buttonStyles = {
        backgroundColor: colors[props.status],
        border: 'thin solid #ddd',
        width: '45px',
        height: '45px',
        margin: '10px',
        fontSize: '25px',
    }

    return (
        <button className="btn btn-light btn-sm"  
        style={buttonStyles}
        onClick = {() => props.onClick(props.number, props.status)}
        >{props.number}</button>
    )
};

export default PlayNumber;



