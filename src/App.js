import './App.css';
import logo from './images/logo.png';
import Player from './Components/Player';
import Game_Board from './Components/Game_Board';

function App() {
  return (
    <div className="App">
      <h1 className='game-heading'>Tic-Tac-Toe</h1><br></br>
      <div className='img'><img src={logo}></img></div><br></br>

      <div className='main-section'>
        <div className='game-container'>
          <div className='player-section'>
              <Player name="PLAYER-1" symbol="X"/>
              <Player name="PLAYER-2" symbol="O"/>
          </div>
          <div className='game-section'>
              <Game_Board/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
