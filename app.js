const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = '1px solid black'

context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = '20'

const color_input = document.getElementById('color_input')

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
  if(!isDrawing)return;
  console.log(e)
  context.strokeStyle = color_input.value
  context.beginPath()
  context.moveTo(lastX, lastY)
  context.lineTo(e.offsetX, e.offsetY)
  context.stroke()
  lastX = e.offsetX
  lastY = e.offsetY
  // hue++
}

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})


canvas.addEventListener('mouseup', ()=> isDrawing = false)
canvas.addEventListener('mouseout', ()=> isDrawing = false)