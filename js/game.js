'use strict' /* чтобы  язык был более адекватным*/


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');
 var time_set_aster=0;

/*Размеры поля  290 * 117 */

/*!Creating start game objects and their Function!*/

/*--------------------------------------*/
var asteroid = new Image()
asteroid.src = 'img/tema/astero.png'
var aster = [10]
var user_board = new Image()
user_board.src = 'img/User_Ships/1.png'
var alien_board = new Image()
alien_board.src = 'img/Alien_Ships/Alien-Scout.png'

class Asteroid {


    constructor(self) {
        this.x = 150;
        this.y = Math.random() * 115;
        this.dx = Math.random() * 0.5 + 0.1;
        this.dy = Math.random() * 0.5 + 0.1;
        console.log(this)
    }

    update(self) {
        this.x -= this.dx
        this.y += this.dy
        if (this.y > 129 || this.y < 0) {
            this.dy = -this.dy;

        }
        if (this.x < 0) {}

    }


     render() {    contex.drawImage(asteroid, this.x, this.y, 10, 10);
      }

}

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

function create_aster(){
    aster.splice(0, aster.length);
    aster.length=10
    for (let i = 0; i < 10; i++) {
        aster[i] = new Asteroid();
    }
}

function spawn_aster(   ) {
    for (let i = 0; i <10; i++) {
        aster[i].render()
        aster[i].update()

    }
}

/*основной игровой цикл*/
function spawn_objects() {
    spawn_aster();
}

function game() { contex.clearRect(0,0,800,150);
    spawn_objects();

    render();
    time_set_aster++;


    requestAnimFrame(game);
    if (time_set_aster%1000===0){
        create_aster()
    }
}

function render() {

    contex.drawImage(asteroid, 290, 117, 10, 10);
    contex.drawImage(user_board, 150, 50, 10, 10);
}
contex.drawImage(user_board, 1, 1, 10, 10);
for (let i = 0; i < 10; i++) {
    aster[i] = new Asteroid();
}


game()
