import $ from 'jquery'
import { filter, map } from 'ramda'

const played = function (el) {
  return $(el).html() !== ''
}

const isAWin = function (board, player, win) {
  return filter((i) => board[i] === player, win).length === 3
}

const playerWins = function (board, player) {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ]

  return filter((win) => isAWin(board, player, win), wins).length > 0
}

const whoMovesNow = function (cells) {
  const n = cells.filter((idx, el) => played(el)).length
  return (n % 2 === 0) ? 'X' : 'O'
}

const makeMove = function (e) {
  const el = $(e.target)

  const cells = $('.board > div')
  var startBoardState = map((idx, el) => $(el).html(), cells)

  if (!played(e.target) && !playerWins(startBoardState, 'O') && !playerWins(startBoardState, 'X') )  {
    const player = whoMovesNow(cells)

    el.removeClass('empty')
    el.addClass('player-' + player)
    el.html(player)

    var newBoardState = map((idx, el) => $(el).html(), cells)

    if (playerWins(newBoardState, 'O')) {
        console.log("Woohoo! O wins at life!")
    } else if (playerWins(newBoardState, 'X')) {
        console.log("Woohoo! X wins at life!")
    }
  }
}

$('#app').on('click', '.board > div', makeMove)
