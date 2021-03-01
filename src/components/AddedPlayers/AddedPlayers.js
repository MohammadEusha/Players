import React from 'react';

const AddedPlayers = (props) => {
    const player = props.player;
    const { name, image, salary } = player;
    const imageStyle = {
        height: '200px'
    }
    return (
        <div>
            <div>
                <img style={imageStyle} src={image} alt=""/>
                <h4>Player Name : {name}</h4>
                <h4>Salary : ${salary}</h4>
            </div>
        </div>
    );
};

export default AddedPlayers;