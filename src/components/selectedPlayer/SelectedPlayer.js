import React from 'react';
import AddedPlayers from '../AddedPlayers/AddedPlayers';


const SelectedPlayer = (props) => {
    const selectedPlayers = props.selectedPlayers;
    let totalSalary = 0;
    for (let i = 0; i < selectedPlayers.length; i++) {
        const player = selectedPlayers[i];
        totalSalary = totalSalary + player.salary;

    }
    return (
        <div>
            <div>
                <h4><b> Player Added :</b> {selectedPlayers.length}</h4>
                <h4><b>Total Budget :</b>  ${totalSalary}</h4>
            </div>
            <div  style={{border:'3px solid gray', padding:'20px',borderRadius:'10px'}}>
                {
                    selectedPlayers.map((player) => <AddedPlayers player={player}></AddedPlayers>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;