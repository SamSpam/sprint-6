import { filter } from 'ramda'

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const isAWin = function (board, player, win) {
  return filter(function (i) { return board[i] === player }, win).length === 3
}

const winner = ['X', 'O', 'X', 'O', 'X', '', 'X', '', 'O',]

console.log("Top row: " + isAWin(winner, 'X', wins[0]))
console.log("Middle row: " + isAWin(winner, 'X', wins[1]))
console.log("Bottom row: " + isAWin(winner, 'X', wins[2]))
console.log("Left column: " + isAWin(winner, 'X', wins[3]))
console.log("Middle column: " + isAWin(winner, 'X', wins[4]))
console.log("Right column: " + isAWin(winner, 'X', wins[5]))
console.log("Top left to bottom right: " + isAWin(winner, 'X', wins[6]))
console.log("Top right to bottom left: " + isAWin(winner, 'X', wins[7]))
