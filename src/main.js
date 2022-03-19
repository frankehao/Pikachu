import string from './css.js'

const player = {
  n: 0,
  id: undefined,
  time: 20,
  string2: '',

  run: () => {
    if (player.n > string.length - 2) {
      window.clearInterval(player.id)
      return
    }
    if (string[player.n] === '\n') {
      player.string2 += '<br>'
    } else {
      player.string2 += string[player.n]
    }
    if (string[player.n] === ' ') {
      player.string2 += '&nbsp'
    }
    demo.innerHTML = player.string2
    style.innerHTML = string.substring(0, player.n)
    player.n = player.n + 1
    demo.scrollTop = demo.scrollHeight
  },

  init: () => {
    btnPause.onclick = player.pause
    btnPlay.onclick = player.play
    btnSlow.onclick = player.slow
    btnNormal.onclick = player.normal
    btnFast.onclick = player.fast
    player.play()
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 30
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  },
}
player.init()
