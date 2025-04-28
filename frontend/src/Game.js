import React from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      xisnext: true, // X starts first
      stepnumber: 0, // Current step number
      history: [
        { squares: Array(9).fill(null) } // Initial empty board state
      ]
    };
  }

  handleClick = (i) => {
    // Get the current history and current step
    const history = this.state.history.slice(0, this.state.stepnumber + 1); // Slice to remove future steps
    const current = history[history.length - 1]; // Get current board state
    const squares = current.squares.slice(); // Make a copy of the current squares

    // If the square is already filled or the game is over, do nothing
    if (squares[i] || calculateWinner(squares)) return;

    // Mark the square with X or O
    squares[i] = this.state.xisnext ? 'X' : 'O';

    // Update state with the new move
    this.setState({
      history: history.concat([{ squares }]), // Add the new move to history
      stepnumber: history.length, // Update the step number
      xisnext: !this.state.xisnext // Switch turns
    });
  };

  jumpTo = (step) => {
    this.setState({
      stepnumber: step,
      xisnext: (step % 2) === 0 // If step is even, X's turn, otherwise O's turn
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepnumber];
    const winner = calculateWinner(current.squares);

    // Determine the status of the game
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xisnext ? 'X' : 'O');
    }

    return (
      <div>
        <div>{status}</div>
        <Board
          squares={current.squares} // Pass current squares to the Board component
          onClick={this.handleClick} // Pass the handleClick function to Board
        />
        {/* Optional: Render a history of moves */}
        <div>
          <button onClick={() => this.jumpTo(0)}>Go to Start</button>
        </div>
      </div>
    );
  }
}

// Helper function to check if there's a winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
    [0, 4, 8], [2, 4, 6] // Diagonal lines
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return 'X' or 'O' as the winner
    }
  }
  return null;
}
