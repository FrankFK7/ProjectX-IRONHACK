const canvas =document.querySelector(
    'canvas')
    const c = canvas.getContext ('2d')
let image = new Image()

image.src = 'https://cdna.artstation.com/p/assets/images/images/013/740/724/large/andrew-melfi-no-name-ninja-background.jpg?1540926668'

let i = 0
let j = canvas.width

c.clearRect(-1, -2, canvas.width, canvas.height)
const drawImage = ()=>{
}; 

i--;

  if (i <= -canvas.width) {
    i = canvas.width
  }

  j--

  if (j <= -canvas.width) {
    j = canvas.width
  }


  c.drawImage(image, i, 0, canvas.width, canvas.height)

  c.drawImage(image, j, 0, canvas.width, canvas.height)

  let animation = requestAnimationFrame(draw)
  
draw()

canvas.width = innerWidth
canvas.height =innerHeight

const gravity = 2.5

    class Player{
        constructor() {
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
  c.fillStyle = 'red'
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
    
//     class Platform {
//     constructor () {
//      this.position = {
//      x: 200,
//      y: 200
//    }

//    this.width = 300
//    this.height = 100
//      }
//          draw () {
//    c.fillStyle = 'green'
//    c.fillRect (this.position.x, this.position.y, this.width, this.height)
//         }
//      }
//      const platform = new Platform()
const player = new Player()
     const keys ={
         right: {
   pressed: false
         },
         left: {
   pressed: false
     }
}

    function animate() {
        requestAnimationFrame (animate)

        c.clearRect(0, 0, canvas.width, canvas.height)

        player.update ()

    // platform.draw()
        
        if (keys.right.pressed) {
  player.velocity.x = 5
        
        }else if (keys.left.pressed){
  player.velocity.x = -5
        
        }else player.velocity.x = 0

        // if (player.position.y + player.height
            // <= platform.position.y) {
        //         player.velocity.y = 0
        //     }
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
  player.velocity.y -= 40
  break

  case 39:
  console.log ('right')
  keys.right.pressed = true
  break

  case 40:
  console.log ('down')
  break
    }
})
addEventListener ('keyup', ({ keyCode }) => {
    //console.log ('keyCode')
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

  case 40:
  console.log ('down')
  break
    }

})