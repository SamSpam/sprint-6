import { filter } from 'ramda'

const wonGame = function (board, player, win) {
  console.log("The board: ", board)
  console.log("The player: ", player)
  console.log("The win: ", win.join("|"))

  let len = filter(
    function (cell) {
      console.log("Checking index: ", cell)
      console.log("In cell: ", board[cell])

      return board[cell] === player
    }, win
  ).length

  console.log("Number of ", player, " = ", len)

  return len === 3
}

let win = [0, 4, 8]
let player = 'X'
let board = ['X', 'O', 'X', 'O', 'X', '', 'X', '', 'O']

console.log(wonGame(board, player, win))
