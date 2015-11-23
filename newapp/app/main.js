import { append, contains } from 'ramda'

const makeMove = function (cell, moves) {
  if (contains(cell, moves)) {
    return moves
  } else {
    return append(cell, moves)
  }
}

console.log(
  makeMove(
    5, makeMove(
      3, makeMove(
        0, makeMove(
          3, makeMove(
            4, []
          )
        )
      )
    )
  ).join("")
)
