import { indexOf } from 'ramda'

const getPlayerFromMove = function (square) {
  const moves = [4, 3, 0, 8, 2, 1, 6]
  const idx = indexOf(square, moves)

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
console.log("What's in cell 2 (middle right)? " + getPlayerFromMove(5))
