'use strict'


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');




    /*creating start game object*/
var asteroid = new Image()
asteroid.src='img/tema/astero.png'
var user_board =new Image();
user_board.src='img/User_Ships/1.png'
var alien_board =new Image();
alien_board.src='img/Alien_Ships/Alien-Scout.png'
/*вызов игры*/
game()&&&&&

/*-------------------*/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 20);
        };
})();
/*основной игровой цикл*/
function game(){
    update();
    render();
    requestAnimFrame(game);
}
function update(){

}

function render(){
contex.drawImage(user_board,0,0,44500,54400);
contex.drawImage(asteroid,70,19,50,50);
}
