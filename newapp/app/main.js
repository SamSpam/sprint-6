import { filter } from 'ramda'

const isAWin = function (board, player, win) {
  let playersSquares = filter((square) => board[square] === player, win)

  return playersSquares.length === win.length
}

const playerWins = function (board, player) {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]

  let winningRows = filter((win) => isAWin(board, player, win), wins)

  return winningRows.length > 0
}

const winner = ['X', 'O', 'X', 'O', 'X', '', 'X', '', 'O']

console.log("Is O a winner? " + playerWins(winner, 'O'))
console.log("Is X a winner? " + playerWins(winner, 'X'))
