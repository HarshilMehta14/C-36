class Game{
    constructor(){

    }
    //getting info from database
    getState(){
        var gamestateref = database.ref("GameState");
        gamestateref.on("value",function(data){
            myGameState = data.val();

        })
    }

    //updating the database
    update(state){
        database.ref('/').update({
            GameState:state
        })
    }

    start(){
        if(myGameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }
}