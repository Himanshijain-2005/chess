Tic Tac Toe
Frontend react based project
Commands for terminal-->
npx create-react-app frontend
cd frontend
npm start

Logic-->
Under src folder three components have been made Sqaure.js which is passed in Board.js which is passes in Game.js.Whole logic for
game is written in javascript in Game.js by making Game as a class and using its state.Then Game.js component is passed to App.js.

Value rendered to Square will be calculated in Game.js but it is passed to Board.js and then to Square.js using props.
