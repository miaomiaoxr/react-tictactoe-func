import '../index.css';
import Square from './Square';
import { useState } from 'react';

const Board = (props) => {
    
    const status = 'Next player: X';

    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        setSquares((prevState) => {
            const arr = prevState.slice();
            arr[i] = 'X';
            console.log(arr);
            return arr;
        }
        );
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {/* <Square value={squares[0]} onClick={()=>handleClick(0)} /> */}
                {/* <Square value={squares[1]} onClick={()=>handleClick(1)} /> */}
                {/* <Square value={squares[2]} index={2} onClick={handleClick}/> */}
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {/* <Square value={squares[3]} index={3} onSquareClick={handleClick}/> */}
                {/* <Square value={squares[4]} index={4} onSquareClick={handleClick}/> */}
                {/* <Square value={squares[5]} index={5} onSquareClick={handleClick}/> */}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {/* <Square value={squares[6]} index={6} onSquareClick={handleClick}/> */}
                {/* <Square value={squares[7]} index={7} onSquareClick={handleClick}/> */}
                {/* <Square value={squares[8]} index={8} onSquareClick={handleClick}/> */}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>)
}
// class Board extends React.Component {
//     renderSquare(i) {
//         return <Square value={i} />;
//     }

//     render() {
//         const status = 'Next player: X';

//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

export default Board;