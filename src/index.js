import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }
    render() {
        return (
        <button className="square" onClick={ () => this.props.onClick() }>
            {/* {this.props.value} */}
            {/* {this.state.value} */}
            {this.props.value}
        </button>
        );
    }
}
// Square 클래스와 같은 기능?
function Squaref(props){
    return(
        <button className="square" onClick={ () => props.onClick()}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares : Array(8).fill(0),
        }
    }
    renderSquare(i) {
        // return <Square value={i}/>;
        return (
            <Square 
                value = {this.props.squares[i]}
                // onClick = { () => this.handleClick(i)}  
                onClick = { () => this.props.onClick(i)}  
            />
        );
    }

    render() {
        const boardSquare = this.state.squares;
        for(let i = 0; i < 3; i++) {
            (<div></div>)
        }
        const boardHtml = boardSquare.map( (data, index) => {
            {this.renderSquare(index)}
        });

        return (
            
            <div>
                {/* {boardSquare} */}

                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
            );
        
    }
}

function WinnerCheck(squares){
    const winMatch = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < winMatch.length; i++) {
        const [a, b, c] = winMatch[i];
        // 
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history : [{
                squares: Array(8).fill(null)
            }],
            xIsNext : true,
            stepNumber : 0,
        }
    }
    // board 에서 game으로 이동한 handleClick
    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1]
        const squares = current.squares.slice();
        // 이긴 게임이거나 || squares[i] 가 null(빈칸)이 아니면
        if (WinnerCheck(squares) || squares[i]) {
            return; // 클릭 액션 x
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        // 조금 복잡한 setState구문 
        this.setState({
            history : history.concat([{
                squares: squares,
            }]),
            stepNumber : history.length,
            xIsNext : !this.state.xIsNext,
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber : step,
            xIsNext : (step) % 2 === 0  // 짝수면 true(x) 홀수면 false(o) 이므로
        })
    }
    render() {  
        const history = this.state.history;
        const currentBoard = history[this.state.stepNumber];
        const winner = WinnerCheck(currentBoard.squares);
        let status;
        if (winner) {
            status = 'winner is : ' + winner;
        }else{
            status = 'Next Player : ' + (this.state.xIsNext ? 'X' : 'O' ) + ' / ' + this.state.xIsNext;
        }

        const moves = history.map( (step, move) => {
            const description = move ? "Go to  move # " + move : "Go to Start";
            const stepDebug = 'step : ' + step + ' // move : ' + move;
            if (move == this.state.stepNumber) {
                return (
                    <li key={move}>
                        current step
                    </li>
                )
            }else {
                return (
                    <li key={move}>
                        <button onClick={ () => this.jumpTo(move)}>{description} + {stepDebug}</button>
                    </li>
                );
            }
            
        });
        return (
        <div className="game">
            <div className="game-board">
            <Board 
                squares = {currentBoard.squares} 
                onClick = {(i) => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            </div>
        </div>
        );
    }
}
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  