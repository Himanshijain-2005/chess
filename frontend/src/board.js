import React from 'react';
import Square from './Square';

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]} // Pass the value of the square
        onClick={() => props.onClick(i)} // Handle click on the square
      />
    );
  };

  return (
    <div className="board">
      <div>{renderSquare(0)} {renderSquare(1)} {renderSquare(2)}</div>
      <div>{renderSquare(3)} {renderSquare(4)} {renderSquare(5)}</div>
      <div>{renderSquare(6)} {renderSquare(7)} {renderSquare(8)}</div>
    </div>
  );
};

export default Board;
