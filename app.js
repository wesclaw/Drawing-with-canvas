const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.border = '5px solid black'

let drawing = false

const size_brush = document.getElementById('size_brush')
const color_picker = document.getElementById('color_input')


function start(){
  drawing = true
  
}

function end(){
  drawing = false
  ctx.beginPath()
}

function draw(e){
  if(!drawing)return

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineWidth = size_brush.value
  ctx.strokeStyle = color_picker.value
  ctx.lineCap = 'round'
  ctx.lineTo(x, y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x, y)
}

canvas.addEventListener('mousedown', start)

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mouseup', end)