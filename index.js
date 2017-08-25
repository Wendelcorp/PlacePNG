var width
var height

var canvas = document.createElement("canvas");
var image = new Image();

function download() {
    var dt = canvas.toDataURL('image/png', 1.0);
    this.href = dt;
};

document.addEventListener("DOMContentLoaded", function() {
  downloadlink.addEventListener('click', download, false);

  document.getElementById('form').addEventListener('submit', function(e){
      e.preventDefault()
      width = document.getElementById('width').value;
      height = document.getElementById('height').value;
      document.getElementById('width').value = ''
      document.getElementById('height').value = ''
    	canvas.width = width;
    	canvas.height = height;
      canvas.style.width = width;
      canvas.style.height = height;
    	var ctx = canvas.getContext("2d");
      // ctx.scale(2,2);
      ctx.drawImage(image, 0, 0);
      ctx.fillStyle = "#7a7a7a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(`${width} x ${height}`, 25, canvas.height/2);


      document.getElementById('downloadlink').download = `${width}x${height}`
      document.getElementById('downloadlink').click();
  });
  document.getElementById('quit').addEventListener('click', function(e){
    console.log('quit');
    const remote = require('electron').remote
    let w = remote.getCurrentWindow()
    w.close()
  });
});
