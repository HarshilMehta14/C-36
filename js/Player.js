class Player{
    constructor(){

    }

    getCount(){
    var playerCountref = database.ref('Count');
    playerCountref.on("value", function(data){
        myPlayerCount = data.val();
    })
    }

    updatecount(Count){
        database.ref('/').update({
            Count:Count
        })
    }
    updateName(nm){
        var playerIndex = "Player"+myPlayerCount;
        database.ref(playerIndex).set({
            Name:nm
        })

    }
}