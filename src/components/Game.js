import '../index.css';
import Board from './Board';
import { useState } from 'react';

const Game = (props) => {
    const status = 'Next player: ';

    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

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

        for (let arr of list) {
            if (squares[arr[0]] && squares[arr[0]] === squares[arr[1]] && squares[arr[0]] === squares[arr[2]]) {
                return squares[arr[0]];
            }
        }
        return null;
    }

    const printStatus = () => {
        const squares = history[history.length - 1].squares.slice();
        const winner = calculateWinner(squares);
        if (winner) {
            return winner + ' won!';
        } else {
            return status + xOrO();
        }
    }

    const handleSquareClick = (i) => {
        const historyCopy = history.slice(0, stepNumber + 1);
        let squares = historyCopy[stepNumber].squares.slice();
        if(calculateWinner(squares)||squares[i]){
            return;
        }
        
        squares[i] = xOrO();
        setHistory(historyCopy.concat([{
            squares: squares
        }]));
        setStepNumber(prevState => prevState + 1);
        setXIsNext((prevState) => !prevState);
    }

    const move = history.map((step, index) => {
        const desc = index ? 'Go to move #' + index : 'Go to game start';

        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>{desc}</button>
            </li>
        );
    });

    const jumpTo = (index) => {
        setStepNumber(index);
        setXIsNext((index % 2) === 0);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board status={printStatus} squares={history[stepNumber].squares} onClick={handleSquareClick} />
            </div>
            <div className="game-info">
                <div>{printStatus()}</div>
                <ol>{move}</ol>
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