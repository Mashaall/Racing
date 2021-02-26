class Player {
    constructor(){

    }

    //reading the playerCount value from database
    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val()
        })
    }

     //writing the playerCount value to database
     updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    //writing the player name to database
    updateInfo(name){
        database.ref("player"+playerCount).update({
            name:name
        })
    }
}