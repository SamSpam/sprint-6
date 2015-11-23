import $ from 'jquery'

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

$('#app').on('click', '.board > div', makeMove)
