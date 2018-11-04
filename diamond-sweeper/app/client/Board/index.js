import React, { Component } from 'react';

import { getGameData, revealCell } from 'Api';
import Cell from 'Cell';

//creating a board component to render the the state and display it to the UI
class Board extends Component {
  state = {
    cells: [],
    gameOver: false,
    score: 0,
  }
//to fetch the data from local storage
  componentDidMount() {
    const gameData = localStorage.getItem('gameData');

    if (!this.state.gameOver && gameData) { // fetch from localStorage
      this.setState({ ...JSON.parse(gameData) });
    } else {
      getGameData().then((response) => {
        localStorage.setItem('gameData', JSON.stringify(response));
        this.setState({ ...response });
      });
    }
  }
//to perform the functionality when the user clicks on a certain block in the 8X8 matrix
  handleClick = (event) => {
    if (this.state.gameOver) return;

    const { id } = event.target;
    revealCell(id).then((response) => {
      localStorage.setItem('gameData', JSON.stringify(response));

      this.setState({ ...response }, () => {
        if (this.state.gameOver) {
          localStorage.removeItem('gameData');
        }
      });
    });
  }

  render() {
    const { cells, gameOver, score } = this.state;
    const styles = {
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold',
    };

    const template = cells.map(innerCells =>
      innerCells.map(cell =>
        (<Cell key={cell.id} id={cell.id} handleClick={this.handleClick} className={`cell ${cell.image}`} />)));

    const gameOverMessage = gameOver ? (<p style={styles}> Game over!! Your score is: {score} </p>) : '';

    return (
      <div className="wrapper">
        {gameOverMessage}
        <div className="diamondsweeper-board">
          {template}
        </div>
      </div>
    );
  }
}

export default Board;
