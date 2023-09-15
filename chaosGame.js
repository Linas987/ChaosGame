let context = document.querySelector('canvas').getContext('2d')
context.fillStyle = 'blue'

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  midpointTo(a) {
    return Point.midpoint(this, a)
  }
  static midpoint(a, b) {
    return new Point(
      Math.round((a.x + b.x) / 2),
      Math.round((a.y + b.y) / 2)
    )
  }
}
const pixel = (point,index) => {
  context.fillRect(point.x, point.y, 2, 2);
  if(document.querySelector('#iteration').checked){
    context.font = "20px Georgia";
    context.fillText(index+1, point.x, point.y);
  }
}

const A = new Point(200, 85)
const B = new Point(66, 315)
const C = new Point(333, 315)

const vertices = [A, B, C]

const pickVertex = () =>
  vertices[
    Math.floor(
      Math.random() * (vertices.length)
    )
  ]

const getNewPoint = oldPoint => oldPoint.midpointTo(pickVertex())

const playGame = iterations => {
  const startVertex = pickVertex()
  context.fillRect(A.x, A.y, 10, 10)
  context.fillRect(B.x, B.y, 10, 10)
  context.fillRect(C.x, C.y, 10, 10)
  let currentDot = startVertex
  for (let i = 0; i < iterations; i++) {
    currentDot = getNewPoint(currentDot)
    pixel(currentDot,i)
  }
}

function placeNumber(){
  var x = document.getElementById("myText").value;
  context.clearRect(0, 0, 400, 400);
  playGame(x);
}

