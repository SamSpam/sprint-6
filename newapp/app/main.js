import { addIndex, indexOf, map } from 'ramda'

const makeBoard = function (moves) {
  const mapIndexed = addIndex(map)

  const getPlayerFromMove = function (square) {
    const idx = indexOf(square, moves)

    if (idx === -1) {
      return ''
    } else {
      return (idx % 2 === 0) ? 'X' : 'O'
    }
  }

  return mapIndexed((_, idx) => getPlayerFromMove(idx), new Array(9))
}

console.log('The board: ' + makeBoard([4, 3, 0, 8, 2, 1, 6]))
