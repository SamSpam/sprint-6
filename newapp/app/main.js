import { addIndex, indexOf, map } from 'ramda'

const makeBoard = function (moves) {
  const mapIndexed = addIndex(map)

  const getCellFromMove = function (square) {
    const idx = indexOf(square, moves)

    if (idx === -1) {
      return '<div class="e">&nbsp;</div>'
    } else if (idx % 2 === 0) {
      return '<div class="x">X</div>'
    } else {
      return '<div class="o">O</div>'
    }
  }

  return mapIndexed((_, square) => getCellFromMove(square), new Array(9))
}

const renderBoard = function (moves) {
  let board = document.createElement('div')

  board.setAttribute('class', 'board')
  board.innerHTML = makeBoard(moves).join('')

  document.getElementById('app').appendChild(board)
}

renderBoard([4,3,0])
