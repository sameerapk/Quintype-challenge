const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))


const board = new Board();


const returnGameData = (res) => {
  const data = {
    cells: board.cells,
    gameOver: board.gameOver,
    score: board.unopenedCells,
  };
  res.send(JSON.stringify(data));
};

app.get('/', function (req, res) {
  res.render("home/index")
});

app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/game_data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  returnGameData(res);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
