'use strict' /* чтобы  язык был более адекватным*/


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');


/*Размеры поля  290 * 117 */

/*!Creating start game objects and their Function!*/

/*--------------------------------------*/
var asteroid = new Image()
asteroid.src = 'img/tema/astero.png'
/*var aster=[10]*/
var user_board = new Image()
user_board.src = 'img/User_Ships/1.png'
/*class Asteroid {


    constructor(self)
    {
            this.x = 290;
            this.y = Math.random() * 115;
            this.dx = 1;
            this.dy = 2;
            console.log(this)

    }

    /* двигаем
    update(self) {
        console.log("vc")
        for (let i = 0; i < 1; i++) {
            contex.drawImage(asteroid,this.x,this.y,10, 10);
            console.log(this)
            this.x-=this.dx
            this.y+=this.dy
        }

    }

    method3() { /*...
    }
}*/


/*--------------------------------------*/



/*!вызов игры!*/
/*-------------------*/
/*для работы во всех браузерах*/
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 20);
        };
})();

/*основной игровой цикл*/
/*function spawn_objects() {
    for (let i = 0; i < 10; i++){
        aster[i].update( )
}}*/

function game() {
  /*  spawn_objects();*/
    render();
    requestAnimFrame(game);
}


function render() {

    contex.drawImage(asteroid, 290, 117, 10, 10);
    contex.drawImage(user_board, 150, 50, 10, 10);
}

contex.drawImage(user_board, 4, 5, 10, 10);
/*for (let i = 0; i < 1; i++) {
    aster[i]= new Asteroid();
}
*/

game()
