const img = document.createElement('img');
img.src = '/icons/img-icon.png'; // Replace with your image path
const points = []

document.addEventListener('DOMContentLoaded', function() {
    // Load Canvas 
    const canvas = document.getElementById('myCanvas');

    canvas.width = 500;
    canvas.height = 500;

    canvas.addEventListener('click', function(event) {
      const {x, y} = getXY(canvas, event);
      requestImage(x, y, canvas, event);
    });


});

function requestImage(x, y, canvas, event) {
  let re = ""

  fetch('https://xu237ybnc7.execute-api.us-east-1.amazonaws.com/full', {
        method: 'POST', // or 'PUT'
        headers: {
          'origin': 'localhost',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          x: x, 
          y: y
        }),
      })
      .then((response) => {let re = response.json();
                          console.log(re);
        return re;})
      .then((data) => {
        console.log('Success:', data);
        console.log(data['body']['image_path']);
        latentPoint(canvas, event, data['body']['image_path']);
      })
      .catch(error => console.error('Error:', error));
}

function mockImage(x, y) {
  img.src = '/icons/img-icon.png';
}

function getXY(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left)/canvas.width);
  const y = (canvas.height - (event.clientY - rect.top))/canvas.height;
  return {x: x, y: y};
}

function latentPoint(canvas, event, imgsrc) {

      const rect = canvas.getBoundingClientRect();

      const x = ((event.clientX - rect.left));
      const y = ((event.clientY - rect.top));

      const xnorm = ((event.clientX - rect.left)/canvas.width) * 5 ;
      const ynorm = (canvas.height - (event.clientY - rect.top))/canvas.height * 5 ;

      const mousePositionDisplay = document.getElementById('mousePosition');

      // Update the mouse position display
      mousePositionDisplay.textContent = `Point: (${xnorm.toFixed(3)}, ${ynorm.toFixed(3)})`

      const ctx = canvas.getContext('2d');

      point = drawPoint(ctx, x, y, imgsrc);
      points.push(point);
}

function drawPoint(ctx, x, y, imgsrc) {

    ctx.fillStyle = '#76b900';
    point = ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2, true);
    ctx.fill();
    console.log("Passed image");
    console.log(imgsrc);
    var imgd = new Image;
    imgd.src = imgsrc;
    imgd.onload = function(){

    imgd.width = 100;
    imgd.height = 100;
    ctx.drawImage(imgd, x + 5, y - 50, 40, 40);
    };
}

