Diamond Sweeper
Problem Statement
The goal of this exercise is to build a game.

The rules of the game are as follows:

The game board has 8x8 squares (initially, all represented by question marks)
There are 8 diamonds hidden on the board, each diamond behind one of the squares
When the user clicks on a square
If the square was hiding a diamond, the diamond appears
Otherwise, the square is opened, and blank
The game ends when all diamonds are found. The user's score is the number of squares still left unturned.

Adding Hints
Part II of this problem adds the ability to add hints to empty squares

When the user clicks on a square
If the square was not a diamond, then an arrow appears, pointing towards the nearest diamond
Any arrows that were previously show become hidden

To start the Application:

Install the dependencies (via yarn install or npm install)
Compile Assets: npm run compile
Start the webserver: npm start
Visit http://localhost:3000 to see the application
