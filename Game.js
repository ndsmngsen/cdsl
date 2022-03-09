class Game{

constructor(){
    
}
getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    //add more and change values later
    background=createSprite(400,400)
    background.addImage(background_image);
    //walls(check where it starts and make invisible)
    topWall=createSprite(0,400,400,20)
    bottomWall=createSprite(0,0,400,20)
    rightWall=createSprite(0,0,20,400)
    rightWall=createSprite(400,0,20,400)

    //striker and red coin
    striker=new Striker(200,30);
    redCoin=createSprite(200,200)
    
    //black and white coins
  }
handleElements(){

}
play(){
  this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
    player.getCarsAtEnd();
    if (allPlayers !== undefined) {
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
      }
  // win conditions
  
  if (player.playerPoints=25) {
    gameState = 2;
   
    Player.updateWinConditions();
    player.update();
  }
}
}
handlePlayerControls(){
//establishes controls for the game

}
moveStrikerEachTurn(){
//move striker between players every turn
}
coinFall(){
// has coin fall in hole 
}
collectCoin(){
  //delete coin
}
getCoinsOnBoard(){
  //refer to player class
}
giveBlackpoints(){
//refering to player class 

}
giveWhitePoints(){
//refering to player class
}
displayScore(){

}

reset(){
//resets coins after round is done
}
AirFriction(){

}


restart(){
  //restarts the entire game

}
}