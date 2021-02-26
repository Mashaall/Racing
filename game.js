class Game {
    constructor(){

    }

    //reading the gameState value from database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
    }

     //writing the gameState value to database
     updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player
            player.getCount()
            form = new Form
            form.display()
        }
    }
}