'use strict' /* чтобы  язык был более адекватным*/


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');
 var time_set_aster=0;
var ship;
/*Размеры поля  */
canvas.width= window.innerWidth
var widht_game=canvas.width-70
canvas.height =window.innerHeight
var height_game=canvas.height-150
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
        this.x = widht_game+100;
        this.y = Math.random() * height_game;
        this.dx = Math.random() + 0.5 ;
        this.dy = Math.random()  + 0.2;
       /* console.log(this)*/
    }

    update(self) {
        this.x -= this.dx
        this.y += this.dy
        if (this.y > height_game|| this.y < 0) {
            this.dy = -this.dy;

        }


    }


         render() {    contex.drawImage(asteroid, this.x, this.y, 70, 70);
      }

}

/*--------------------------------------*/
class User_ship{
    constructor() {
        var x=3;
        var y=height_game/2;
    }
    update(){}

}

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
function ship_movement(){
    canvas.addEventListener("mousemove",function (event){
        ship.x=event.offsetX-25;
        ship.y=event.offsetY-13;
    })
}

function spawn_aster(   ) {
    for (let i = 0; i <aster.length; i++) {

        aster[i].render()
        aster[i].update()
        if (aster[i].x < 0) {
            aster.splice(i,1)/* перепроверить */
        }

    }
}

/*основной игровой цикл*/
function spawn_objects() {
    ship_movement()
    spawn_aster();
}

function game() {
    contex.clearRect(0,0,widht_game+100,height_game+100);
    render();

    time_set_aster++;
    requestAnimFrame(game);
    if (time_set_aster%40===0){
        aster.push( new Asteroid());
    }
}

function render() {

    contex.drawImage(user_board, ship.x,ship.y, 70, 70);
    spawn_objects();

    contex.drawImage(asteroid, widht_game,height_game   , 70,70);

}







contex.drawImage(user_board, widht_game/5, height_game/2, 70, 70);
ship= new  User_ship();
for (let i = 0; i < 10; i++) {
    aster[i] = new Asteroid();
}


game()
