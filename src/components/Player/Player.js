import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './player.css'
const Player = (props) => {
    const { image, name, salary, club } = props.player
    const handleAddPlayer = props.handleAddPlayer
    const playerStyle = {
        border: '1px solid gray',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
        height: '450px',
        width: '300px'
    }
    const imageStyle = {
        height: '200px',
    }
    return (
        <div>
            <div className="d-flex">
                <div style={playerStyle} className="card">
                    <img className="card-img-top" style={imageStyle} src={image} alt="" />
                    <div class="card-body">
                        <h4><b> Player Name : </b>{name}</h4>
                        <h4><b>Salary : </b> ${salary}</h4>
                        <h4><b> Club : </b>{club}</h4>
                        <button style={{height:'50px', fontSize:'20px'}} onClick={() => handleAddPlayer(props.player)} className="btn btn-secondary"> <FontAwesomeIcon icon={faUserCheck} />  Player Details </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;