import { useState } from 'react'
import './Game_Board.css'

function Game_Board() {

    let [GameBoard, setGameBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    let [turn, setTurn] = useState("X");
    // let [symbol, setsymbol] = useState("");
    let [winner, setwinner] = useState(false);

    function handleClick(event, row_idx, col_idx) {
        // if (turn == "X") {
        //     event.target.innerText = "X";
        //     turn = "O";
        // } 
        // else {
        //     event.target.innerText = "O";
        //     turn = "X"
        // }
        if (GameBoard[row_idx][col_idx] == null && winner != true) {
            // Updating Gameboard
            let NewGameBoard = [...GameBoard]; // Spred opration
            NewGameBoard[row_idx][col_idx] = (turn == "X") ? "X" : "O";
            setGameBoard(NewGameBoard);


            //updateing UI
            event.target.innerText = turn; // for display
            //Changing turn
            turn == 'X' ? setTurn('O') : setTurn('X');
            //Checking Winner
            checkWinner();

        }
    }
    // **************************************************************************


    function checkWinner() {
        //Check Winner for rows
        for (let i = 0; i < 3; i++) {
            if (GameBoard[i][0] == GameBoard[i][1] && GameBoard[i][1] == GameBoard[i][2] && GameBoard[i][0] != null) {
                console.log("Winner");
                setwinner(true);
            }
        }
        //Check Winner for columns
        for (let j = 0; j < 3; j++) {
            if (GameBoard[0][j] == GameBoard[1][j] && GameBoard[1][j] == GameBoard[2][j] && GameBoard[0][j] != null) {
                console.log("Winner");
                setwinner(true);
            }
        }
        //Check Winner for Digonally-1
        if (GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0] != null) {
            console.log("Winner");
            setwinner(true);
        }
        //Check Winner for Digonally-2
        else if (GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2] != null) {
            console.log("Winner");
            setwinner(true);
        }


        // if (GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2] && GameBoard[0][0] != null) {
        //     console.log("Winner");
        // }
        // else if (GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0] && GameBoard[0][2] != null) {
        //     console.log("Winner");
        // }


    }

    // **************************************************************************
    return (
        <div className='game-board'>
            {
                GameBoard.map((row, row_idx) => {
                    return <div className='row' key={row_idx}>
                        {
                            row.map((element, col_idx) => {
                                return <button className='box' key={col_idx} onClick={(event) => { handleClick(event, row_idx, col_idx) }}></button>
                            })
                        }
                    </div>
                })
            }
        </div>
    );
}

export default Game_Board;