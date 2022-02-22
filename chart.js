// Получаем canvas элемент
let canvas = document.getElementById('canvas')

let button = document.getElementById('button')

// Указываем элемент для 2D рисования
let ctx = canvas.getContext('2d')

const xStart = 330
const yStart = 20

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

const coordinatesOfZero = {
  x: xStart,
  y: yStart + 230
}


button.addEventListener('click', () => {
  let xCoef = document.getElementById('inputX').value
  //let inputSign = document.getElementById('inputSign').value
  let yCoef = document.getElementById('inputY').value
  //let inputSignIneq = document.getElementById('inputSignIneq').value
  let c = document.getElementById('inputC').value
  //let c = inputC.parseInt()
  //let xCoef = inputX.parseInt()
  //let yCoef = inputY.parseInt()

  const fy = (x) => {
    return coordinatesOfZero['y'] - (50 * (c - xCoef * x) / yCoef)
  }

  const fx = (y) => {
    return coordinatesOfZero['x'] + (50 * ((c - yCoef * y) / xCoef))
  }

  ctx.beginPath()
  ctx.moveTo(coordinatesOfZero['x'], coordinatesOfZero['y'])
  ctx.lineTo(fx(0,), coordinatesOfZero['y'])
  ctx.lineTo(coordinatesOfZero['x'], fy(0))
  ctx.stroke()
})



// y+
for (let i = 1; i <= 3; i++) {
  ctx.fillText(
    i.toString(), coordinatesOfZero['x'],
    coordinatesOfZero['y'] - i * 50
  )
}
// y-
for (let i = 1; i <= 3; i++) {
  ctx.fillText(
    (-1 * i).toString(), coordinatesOfZero['x'],
    coordinatesOfZero['y'] + i * 50
  )
}
//x+
for (let i = 1; i <= 3; i++) {
  ctx.fillText(
    i.toString(), coordinatesOfZero['x'] + 50 * i,
    coordinatesOfZero['y']
  )
}
//x-
for (let i = 1; i <= 3; i++) {
  ctx.fillText(
    (-1 * i).toString(), coordinatesOfZero['x'] - 50 * i,
    coordinatesOfZero['y']
  )
}