var database
var gameState = 0
var player,game,form,playerCount

function setup(){
    createCanvas(500,500);
    //creating database
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
   
}

