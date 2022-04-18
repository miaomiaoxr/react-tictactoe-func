import '../index.css';
import Board from './Board';
import { useState } from 'react';

const Game = (props) => {
    const status = 'Next player: ';

    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    const [xIsNext, setXIsNext] = useState(true);

    const xOrO = () => {
        return xIsNext ? 'X' : 'O';
    }

    const calculateWinner = (squares) => {
        const list = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let arr of list) {
            if(squares[arr[0]] && squares[arr[0]] === squares[arr[1]] && squares[arr[0]] === squares[arr[2]]) {
                return squares[arr[0]];
            }
        }
        return null;
    }

    const printStatus = () => {
        const squares = history[history.length - 1].squares.slice();
        const winner = calculateWinner(squares);
        if(winner) {
            return  winner + ' won!';
        } else{
            return status + xOrO();
        }
    }

    const handleSquareClick = (i) => {
        let squares = history[history.length - 1].squares.slice();
        squares[i] = xOrO();
        setHistory((prevState) => {
            return prevState.concat([{
                squares: squares
            }]);
        });
        setXIsNext((prevState)=> !prevState);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board status={printStatus} squares={history[history.length - 1].squares} onClick={handleSquareClick} />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}


// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

export default Game;