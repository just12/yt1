function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 150);
    ctx.lineTo(150, 0);
    ctx.fill();
  }
}