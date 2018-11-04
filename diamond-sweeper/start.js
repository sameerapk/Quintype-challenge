const express = require('express');

const app = express();

const Board = require('./app/models/board');

app.set('view engine', 'ejs');
app.use(express.static('public'));

const board = new Board();

const returnGameData = (res) => {
  const data = {
    cells: board.cells,
    gameOver: board.gameOver,
    score: board.unopenedCells,
  };
  res.send(JSON.stringify(data));
};

app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/game_data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  returnGameData(res);
});

app.put('/cell/:id', (req, res) => {
  const { id } = req.params;

  if (!board.gameOver) {
    board.revealDiamond(id);
  }

  returnGameData(res);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); /* eslint-disable-line no-console */
});
