let canvas = document.getElementById('canvas')
let button = document.getElementById('button')

let ctx = canvas.getContext('2d')

const xStart = 330
const yStart = 20
const scale = 50

ctx.fillStyle = "black"
ctx.lineWidth = 2.0
ctx.beginPath()
ctx.moveTo(xStart, yStart)
ctx.lineTo(xStart, 250)
ctx.lineTo(xStart + 250 - yStart, 250)
ctx.lineTo(xStart - 250 + yStart, 250)
ctx.lineTo(xStart, 250)
ctx.lineTo(xStart, 500 - yStart)
ctx.stroke()

const cordsZero = {
  x: xStart,
  y: yStart + 230
}

button.addEventListener('click', () => {
  let xCoef = document.getElementById('inputX').value
  let yCoef = document.getElementById('inputY').value
  let c = document.getElementById('inputC').value

  const fy = (x) => {
    return cordsZero['y'] - (scale * (c - xCoef * x) / yCoef)
  }

  const fx = (y) => {
    return cordsZero['x'] + (scale * ((c - yCoef * y) / xCoef))
  }
  ctx.beginPath()
  ctx.moveTo(cordsZero['x'], cordsZero['y'])
  ctx.lineTo(fx(0,), cordsZero['y'])
  ctx.lineTo(cordsZero['x'], fy(0))
  ctx.stroke()
})

const markUpAxis = (boolX, signAxis, lenAxis) => {
  for (let i = 1; i <= lenAxis; i++) {
    ctx.fillText(
      (signAxis * i).toString(), cordsZero['x'] + signAxis * i * scale * boolX,
      cordsZero['y'] + signAxis * i * scale * !boolX
    )
  }
}

markUpAxis(0,  1, 4)
markUpAxis(0,  -1, 4)
markUpAxis(1, 1, 4)
markUpAxis(1,  -1, 4)
