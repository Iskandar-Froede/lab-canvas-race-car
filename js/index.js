

const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black"
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector(".game-intro")
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const backgroundRoad = new Image();
backgroundRoad.src = "../images/road.png";

const car = new Image();
car.src = "../images/car.png";

const obstacle = [];



let isGameOver = false;
let gameId = 0;         // starting point

let backgroundY = 0;
let backgroundY2 = -canvas.height;

let moveCarRight = false;  // starting default movement and after we press then it will be true
let moveCarLeft = false;

let carX = 200;   // x value for car index or default position , see below



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {

    console.log(gameId)

    startScreen.style.display = "none";

    ctx.drawImage(backgroundRoad, 0, backgroundY, canvas.width, canvas.height);         // ctx.drawImage for loading image
    ctx.drawImage(backgroundRoad, 0, backgroundY2, canvas.width, canvas.height);
    ctx.drawImage(car, carX, 500, 70, 100);
    

    backgroundY += 4;         // it makes the road keep looping with certain speed
    backgroundY2 += 4;

    if (backgroundY > canvas.height) {
      backgroundY = -canvas.height -20;
    }

    if (backgroundY2 > canvas.height) {
      backgroundY2 = -canvas.height;
    }

    if (moveCarRight === true) {
      carX += 2;            // car speed 
    } else if (moveCarLeft === true) {
      carX -= 2;
    }




// for connecting the keyboard "keydown = keyboord beeing held" "keyup" "keypress"-event and click for mouse
document.addEventListener ("keydown", (event) => {
console.log("keydown", event)


if (event.code === "ArrowLeft") {       // to check the code check webtool for code, key or keycode
    moveCarLeft = true;
} else if (event.code === "ArrowRight") {
  moveCarRight = true;
}
});


document.addEventListener ("keyup", () => {        // if you don't press anything or relesase keyboard then the car doesn't move
  moveCarLeft = false;
  moveCarRight = false;
  
})


    if (isGameOver) {
      cancelAnimationFrame(gameId);           // for the games stop
    } else {
      gameID = requestAnimationFrame(startGame);
    }

    if(gameID === 2000) {     // example for stoping the game
      isGameOver = true;     // after 1000 frames (starting at 0) then game is over or if the car hits something
    }

  }
};



