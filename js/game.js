'use strict' /* чтобы  язык был более адекватным*/


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');
var time_set_aster = 0;
var time_bul = 0;
var time_bul_a=0;
var time_set_alien=0;
var ship;
/*Размеры поля  */
canvas.width = window.innerWidth
var widht_game = canvas.width - 70
canvas.height = window.innerHeight
var height_game = canvas.height - 150
/*!Creating start game objects and their Function!*/

/*--------------------------------------*/
var asteroid = new Image()
asteroid.src = 'img/tema/astero.png'
var aster = []
var user_board = new Image()
user_board.src = 'img/User_Ships/1.png'
var alien_board1 = new Image()
alien_board1.src = 'img/Alien_Ships/Alien-Scout.png'
var bullet = new Image();
bullet.src = 'img/tema/fire.png'
var bullet_a = new Image();
bullet_a.src = 'img/tema/fire_ul.png'
var bul = [ ];
var bul_a = [ ];
var alien_board=[];

class Alien {


    constructor(self) {

        this.x = widht_game + 100;
        this.y = Math.random() * height_game;
        this.dx = Math.random() + 0.2;
        this.dy = Math.random() + 0.2;
        /* console.log(this)*/
    }

    update(self) {
        this.x -= this.dx
        this.y += this.dy
        if (this.y > height_game || this.y < 0) {
            this.dy = -this.dy;
        }
    }

    render() {
        contex.drawImage(alien_board1, this.x, this.y, 70, 70);
    }

}

/*--------------------------------------*/
class Asteroid {


    constructor(self) {

        this.x = widht_game + 100;
        this.y = Math.random() * height_game;
        this.dx = Math.random() + 0.5;
        this.dy = Math.random() + 0.2;
        /* console.log(this)*/
    }

    update(self) {
        this.x -= this.dx
        this.y += this.dy
        if (this.y > height_game || this.y < 0) {
            this.dy = -this.dy;
        }
    }

    render() {
        contex.drawImage(asteroid, this.x, this.y, 70, 70);
    }

}
class User_ship {
    constructor(self) {
        this.x = widht_game / 5;
        this.y = height_game / 2;
        this.health = 100
    }

    render() {
        contex.drawImage(user_board, this.x, this.y, 70, 70);
    }

}

class Bullet_U {
    constructor() {
        this.x1 = ship.x + 40
        this.y1 = ship.y
        this.x2 = ship.x + 40
        this.y2 = ship.y + 35
        this.dx = 4

    }

    update(self) {
        this.x1 += this.dx
        this.x2 += this.dx
    }

    render(self) {
        contex.drawImage(bullet, this.x1, this.y1, 25, 25);
        contex.drawImage(bullet, this.x2, this.y2, 25, 25);
    }
}
class Bullet_A {
    constructor(al) {
        this.x1 = al.x + 40
        this.y1 = al.y
        this.x2 = al.x + 40
        this.y2 = al.y + 35
        this.dx = 4

    }

    update(self) {
        this.x1 -= this.dx
        this.x2 -= this.dx
    }

    render(self) {
        contex.drawImage(bullet, this.x1, this.y1, 25, 25);
        contex.drawImage(bullet, this.x2, this.y2, 25, 25);
    }
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

function ship_movement() {

    ship.render()
    canvas.addEventListener("mousemove", function (event) {
        ship.x = event.offsetX;
        ship.y = event.offsetY;
    })

    if (time_bul % 10 === 0) {
        bul.push(new Bullet_U)
    }
    time_bul++;
    for (let i = 0; i < bul.length; i++) {
        bul[i].render()
        bul[i].update()
        if (bul[i].x < -80) {
            bul.splice(i, 1)
        }
    }
}

function spawn_alien_ships() {
    if (time_set_alien % 40 === 0) {
        alien_board.push(new Alien());
    }
    time_set_alien++;
    for (let i = 0; i < alien_board.length; i++) {

        alien_board[i].render()
        alien_board[i].update()
        if (time_bul_a % 10 === 0) {
            bul_a.push(new Bullet_A(alien_board[i]))
        }
        time_bul_a++;
        for (let i = 0; i < bul.length; i++) {
            bul_a[i].render()
            bul_a[i].update()
            if (bul_a[i].x > widht_game + 85) {
                bul_a.splice(i, 1)
            }
        }
        if (alien_board[i].x < -84) {
            alien_board.splice(i, 1)/* перепроверить */
        }

    }


}

function spawn_aster() {
    if (time_set_aster % 40 === 0) {
        aster.push(new Asteroid());
    }
    time_set_aster++;
    for (let i = 0; i < aster.length; i++) {

        aster[i].render()
        aster[i].update()
        if (aster[i].x < -84) {
            aster.splice(i, 1)/* перепроверить */
        }

    }
}

/*основной игровой цикл*/
function spawn_objects() {
    ship_movement()
    spawn_aster();
    spawn_alien_ships();
}

function game() {
    contex.clearRect(0, 0, widht_game + 100, height_game + 100);
    render();


    requestAnimFrame(game);

}

function render() {
    spawn_objects();
}



ship = new User_ship();
ship.render()


game()
