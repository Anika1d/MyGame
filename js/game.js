'use strict' /* чтобы  язык был более адекватным*/


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');


/*Размеры поля  290 * 117 */

/*!Creating start game objects and their Function!*/

/*--------------------------------------*/

/*fun_Asteroid*/
class Asteroid {
    constructor() {
        var asteroid = new Image()
        asteroid.src = 'img/tema/astero.png'
        var aster=[]
    }
    spawn()  { /*... */}
   /* двигаем*/
    update() {

    }
    method3(){ /*... */}
}


/*--------------------------------------*/

/*fun_Alien*/
class Alien {
    constructor() {
        var alien_board = new Image();
        alien_board.src = 'img/Alien_Ships/Alien-Bomber.png'
        var al_b=[]
    }
    spawn() { /*... */}
    update() {

    }
    method3(){ /*... */}
}

/*--------------------------------------*/
/*fun_User*/
class User {
    constructor() {
        var user_board = new Image();
        user_board.src = 'img/User_Ships/13B.png'
        var us_b=[]
    }
    spawn() { /*... */}
    update() {

    }
    method3(){ /*... */}
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

/*основной игровой цикл*/
function game() {
    update();
    render();
    requestAnimFrame(game);
}



function render() {
    contex.drawImage(user_board, 1, 1, 10, 10);
    contex.drawImage(asteroid, 290, 117, 10, 10);
    contex.drawImage(alien_board, 150, 50, 10, 10);
}

game();