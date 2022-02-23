const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let image = new Image();
image.src ='https://cdna.artstation.com/p/assets/images/images/013/740/724/large/andrew-melfi-no-name-ninja-background.jpg?1540926668'


let i = 0;
let j = canvas.width;

function draw() {
context.clearRect(-1, -2, canvas.width, canvas.height);

const drawImage =() =>{

  }; 
  i--; 

  if (i <= -canvas.width) {
    i = canvas.width;
  }

  j--; 

  if (j <= -canvas.width) {
    j = canvas.width
  }

  

  context.drawImage(image, i, 0, canvas.width, canvas.height);
  context.drawImage(image, j, 0, canvas.width, canvas.height);

  let animation = requestAnimationFrame(draw);
  
}
draw();
