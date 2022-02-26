let canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

function drawBackground() {
  i--;

  if (i <= -canvas.width) {
    i = canvas.width;
  }

  j--;

  if (j <= -canvas.height) {
    j = canvas.height;
  }

  c.drawImage(image, i, 0, canvas.width, canvas.width);

  c.drawImage(image, j, 0, canvas.width, canvas.height);
}

let image = new Image();

image.src =
  "https://cdna.artstation.com/p/assets/images/images/013/740/724/large/andrew-melfi-no-name-ninja-background.jpg?1540926668";

let i = canvas.height;
let j = canvas.width;

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 3;

class Player {
  constructor() {
    this.speed = 10;
    this.position = {
      x: 300,
      y: 300,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }
  draw() {
    // console.log('hello', this.position, this.width, this.height)
    c.fillStyle = "yellow";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  move() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}
class Platform {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.width = 300;
    this.height = 30;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
const player = new Player({
  x:1,
  y:400,
  width:150,
  height: 150,
  img: new Image()
});
const platforms = [
  new Platform({
    x: 500,
    y: 350,
  }),
  new Platform(300, 100),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};
// const Obstacle = {
//   x: 800,
//   y: 200,
//   width: 150,
//   height: 150,
//   img : new Image( )
//}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  player.draw();
  player.move();
  platforms.forEach((platform) => {
    platform.draw();
  });

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 25) {
    player.velocity.x = -5;
  } else player.velocity.x = 0;

  if (keys.right.pressed) {
    platforms.forEach((platform) => {
      platform.position.x -= 5;
    });
  } else if (keys.left.pressed) {
    platforms.forEach((platform) => {
      platform.position.x += 5;
    })
  }
}
platforms.forEach((platform) => {
      if (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >=
          platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
      ) {
        player.velocity.y = 0;
      }
    });

animate();

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left.pressed = true;
      break;

    case 38:
      console.log("up");
      player.velocity.y -= 30;
      //keys.up.pressed = true
      break;

    case 39:
      console.log("right");
      keys.right.pressed = true;
      break;

    //   case 40:
    //   console.log ('down')
    //   break
  }
});
addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 38:
      console.log("up");
      break;

    case 39:
      console.log("right");
      keys.right.pressed = false;
      break;
  }
});