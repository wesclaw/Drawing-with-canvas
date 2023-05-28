const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = '5px solid black'

let drawing = false;

const size_brush = document.getElementById('size_brush')
const color_picker = document.getElementById('color_input')

function start(){
  drawing = true
}

function end(){
  drawing = false
  c.beginPath()
}


function draw(e){
  if(!drawing)return

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  c.lineWidth = size_brush.value
  c.strokeStyle = color_picker.value
  c.lineCap = 'round'
  c.lineTo(x, y)
  c.stroke()
  c.beginPath()
  c.moveTo(x, y)
}

canvas.addEventListener('mousedown', start)
canvas.addEventListener('mouseup', end)
canvas.addEventListener('mousemove', draw)