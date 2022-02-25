const canvas = document.querySelector ("canvas")

const c = canvas.getContext ('2d')
var myGamePiece
var myObstacle

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120)
  myObstacle = new component(10, 200, "green", 300, 120)
  myGameArea.start()
}

function updateGameArea() {
  myGameArea.clear()
  myObstacle.update()
  myGamePiece.newPos()
  myGamePiece.update()
}
// let image = new Image()

// image.src = 'https://cdna.artstation.com/p/assets/images/images/013/740/724/large/andrew-melfi-no-name-ninja-background.jpg?1540926668'

// let i = 0
// let j = canvas.width

// c.clearRect(-1, -2, canvas.width, canvas.height)
// const drawImage = ()=>{
// }; 

// i--;

//   if (i <= -canvas.width) {
//     i = canvas.width
//   }

//   j--

//   if (j <= -canvas.width) {
//     j = canvas.width
//   }


//   c.drawImage(image, i, 0, canvas.width, canvas.height)

//   c.drawImage(image, j, 0, canvas.width, canvas.height)

// let animation = requestAnimationFrame 
  
// function draw (){


canvas.width = innerWidth
 canvas.height =innerHeight

 const gravity = 3

    class Player{
    constructor() {
        this.speed = 10
  this.position = {
      x: 100,
      y: 100
  }
  this.velocity = {
      x: 0,
      y: 0
  }
  this.width = 30
  this.height = 30
        }
        draw() {
  c.drawImage 
c.fillRect (this.position.x, this.position.y, this.width, this.height
    )
        }
        update() {
  this.draw ()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y  <= canvas.height)
        this.velocity.y += gravity  
        else this.velocity.y = 0
      }
    }
const player = new Player()
     const keys ={
         right: {
   pressed: false
         },
         left: {
   pressed: false
     }
}
class wallpaper{
constructor ({ x, y, image }){
    this.position ={
        x,
        y
    }
    this.image = image
    this.width = image.width
    this.height = image.height
}
draw() {
    c.drawImage (this.image, this.position.x, this.position.y)
}
}
//const image = new image ()
  //  image.src = wallpaper
//console.log (image)

    function animate() {
        requestAnimationFrame (animate)
        c.clearRect(0, 0, canvas.width, canvas.height)
        player.update ()

        if (keys.right.pressed && player.position.x < 300) {
  player.velocity.x = 3
        
        }else if (keys.left.pressed && player.position.x > 10){
  player.velocity.x = -5
        
        }else player.velocity.x = 0
        if (keys.right.pressed) {
        //platform.position.x -= 5
        }
        else if (keys.left.pressed){
           // platform.position.x += 5
        }
        }

    animate()
    
addEventListener ('keydown', ({ keyCode }) => {
    switch (keyCode){
        case 37:
  console.log ('left')
  keys.left.pressed = true 
  break

  case 38:
  console.log ('up')
  player.velocity.y -= 30
  //keys.up.pressed = true
  break

  case 39:
  console.log ('right')
  keys.right.pressed = true
  break

//   case 40:
//   console.log ('down')
//   break
    }
})
addEventListener ('keyup', ({ keyCode }) => {
   
    switch (keyCode){
        case 37:
  console.log ('left')
  keys.left.pressed = false
  break

  case 38:
  console.log ('up')
  break

  case 39:
  console.log ('right')
  keys.right.pressed = false
  break

//   case 40:
//   console.log ('down')
//   break
    }

})