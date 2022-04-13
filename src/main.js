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

// 眼球转动
var eyes, eye_ball, eyes_L, eyes_T, eye_ball_L, eye_ball_T

eyes = document.getElementsByClassName('eyes') //眼睛
console.log(eyes)
eye_ball = document.getElementsByClassNam('eye-ball') //眼球

eyes_L = eyes.offsetLeft + eyes.offsetWidth / 2 //眼睛中心位置
console.log(eyes.offsetWidth)
eyes_T = eyes.offsetTop + eyes.offsetHeight / 2

eye_ball_L = eye_ball.offsetLeft + eye_ball.offsetWidth / 2 //眼球中心位置

eye_ball_T = eye_ball.offsetTop + eye_ball.offsetHeight / 2

addEventListener(
  'mousemove',
  function (e) {
    var e = e || window.event
    let point_y,
      point_x,
      point_radius,
      point_radian,
      eye_ball_pos,
      eye_ball_canMove_max
    //计算眼珠可移动的的最大半径范围
    eye_ball_canMove_max = eyes.clientWidth / 2 - eye_ball.offsetWidth / 2
    console.log(eye_ball_canMove_max)
    ;[point_y, point_x] = [e.clientY - eyes_T, e.clientX - eyes_L]

    point_radius = Math.floor(
      // 向下取整
      radius({
        x: point_x,

        y: point_y,
      })
    )

    point_radian = Math.atan2(point_x, point_y)

    //计算眼球的位置,眼球半径随着鼠标与眼睛中心的半径以的1:15的变化率变化，不得超过出眼睛，限制最小值
    eye_ball_pos = pos_xy(
      Math.min(eye_ball_canMove_max, point_radius / 15),
      point_radian
    )
    eye_ball.style.cssText = `left:${eye_ball_pos.x + eye_ball_canMove_max}px;
            top: ${eye_ball_pos.y + eye_ball_canMove_max}px;`
  },
  false
)
//传入半径,弧度.计算x，y坐标

function pos_xy(radius, radian) {
  return {
    x: Math.sin(radian) * radius,

    y: Math.cos(radian) * radius,
  }
}

// 勾股定理计算半径

function radius(pos) {
  return Math.sqrt(Math.pow(pos.x, 2) + Math.pow(pos.y, 2))
}
