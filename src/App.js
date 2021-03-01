import './App.css';
import data from './data/data.json';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import SelectedPlayer from './components/selectedPlayer/SelectedPlayer';

function App() {
  const [players, setPlayers] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])

  useEffect(() => {
    console.log(data);
    setPlayers(data)
  }, [])

  const handleAddPlayer = (player) => {
    const newSelectedPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayers)
  }
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1 style={{marginTop: '20px'}}>Players Selection Of Legendary Club For Next Season</h1>
        <h3><b> Available Players: </b>{players.length}</h3>
      </div>
      <div style={{display: 'flex', padding: '20px'}}>
      <div>
        <h2><b> Legendary Club : </b></h2>
      <SelectedPlayer  selectedPlayers={selectedPlayers} ></SelectedPlayer>
      </div>
      <div className = "w-75 d-flex flex-wrap justify-content-around align-item-center">
      {
        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}>{player}</Player>)
      }
      </div>
    </div>
    </div>

  );
}

export default App;
