'use strict'


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');


/*Размеры  290 * 117 */

    /*creating start game object*/
var asteroid = new Image()
asteroid.src='img/tema/astero.png'
var user_board =new Image();
user_board.src='img/User_Ships/13B.png'
var alien_board =new Image();
alien_board.src='img/Alien_Ships/Alien-Bomber.png'
/*вызов игры*/



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
contex.drawImage(user_board,1,1,10,10);
contex.drawImage(asteroid,290,117,10,10);
    contex.drawImage(alien_board,150,50,10,10);
}
game();