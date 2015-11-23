import $ from 'jquery'
import { filter } from 'ramda'
import { indexOf } from 'ramda'
import { addIndex, map } from 'ramda'

const played = function (el) {
  return $(el).html() !== ''
}

const whoMovesNow = function (cells) {
  const n = cells.filter((idx, el) => played(el)).length
  return (n % 2 === 0) ? 'x' : 'o'
}

const makeMove = function (e) {
  const el = $(e.target)

  if (!played(e.target)) {
    const cells = $('.board > div')
    const player = whoMovesNow(cells)

    el.removeClass('empty')
    el.addClass('player-' + player)
    el.html(player)
  }
}

$('#board').on('click', '.board > div', makeMove)

console.log('Tic Tac Toe!')


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

const winner = ['X', 'O', 'X', 'O', 'X', '', 'X', '', 'O',]



console.log("Is O a winner? " + playerWins(winner, 'O'))
console.log("Is X a winner? " + playerWins(winner, 'X'))


const moves = [4, 3, 0, 8, 2, 1, 6]

const getPlayerFromMove = function (i) {
  const idx = indexOf(i, moves)

  if (idx === -1) {
    return ''
  } else {
    return (idx % 2 === 0) ? 'X' : 'O'
  }
}

console.log("What's in cell 4 (center)? " + getPlayerFromMove(4))
console.log("What's in cell 3 (middle left)? " + getPlayerFromMove(3))
console.log("What's in cell 1 (center top)? " + getPlayerFromMove(1))
console.log("What's in cell 2 (top right)? " + getPlayerFromMove(2))
console.log(map(() => 'X', new Array(9)))

const mapIndexed = addIndex(map)
console.log(mapIndexed((val, idx) => idx, new Array(9)))


const makeBoard = function (moves) {
  const mapIndexed = addIndex(map)

  const getPlayerFromMove = function (i) {
    const idx = indexOf(i, moves)

    if (idx === -1) {
      return '<div class="e">&nbsp;</div>'
    } else if (idx % 2 === 0) {
      return '<div class="x">X</div>'
    } else {
      return '<div class="o">O</div>'
    }
  }

  return mapIndexed((val, idx) => getPlayerFromMove(idx), new Array(9))
}

const renderBoard = function (cells) {
  var board = document.createElement('div')

  board.setAttribute('class', 'board')
  board.innerHTML = cells

  document.getElementById('board').appendChild(board)
}

var board = document.createElement('div')

board.setAttribute('class', 'board')
//board.innerHTML = makeBoard([4, 3, 0, 8, 2, 1, 6]).join('')
renderBoard(makeBoard([]).join(''))

document.getElementById('board').appendChild(board)

console.log('The board: ' + makeBoard([4, 3, 0, 8, 2, 1, 6]))

import { append, contains } from 'ramda'

const makeMove = function (cell, moves) {
  if (contains(cell, moves)) {
    return moves
  } else {
    return append(cell, moves)
  }
}

//console.log(makeMove(0, makeMove(3, makeMove(4, []))))

//const makeMove = function (e) {
//  console.log($(e.target).data('index'))


$('#board').on('click', '.ttt-cell', makeMove)

$('#board').on('click', '.ttt-cell', (e) => console.log(e))
$('#board').on('click', '.ttt-cell', (e) => console.log( $(e.target).data('index') ))

const played = function (el) {
  return $(el).html() !== ''
}

const whoMovesNow = function (cells) {
  const n = cells.filter((idx, el) => played(el)).length
  return (n % 2 === 0) ? 'x' : 'o'
}

const makeMove = function (e) {
  const el = $(e.target)

  if (!played(e.target)) {
    const cells = $('.board > div')
    const player = whoMovesNow(cells)

    el.removeClass('empty')
    el.addClass('player-' + player)
    el.html(player)
  }
}

$('#board').on('click', '.board > div', makeMove)
