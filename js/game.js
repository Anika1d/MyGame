'use strict' /* чтобы  язык был более адекватным*/


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');
var time_set_aster = 0;
var time_bul = 0;
var time_bul_a = 0;
var time_set_alien = 0;
var ship;
/*Размеры поля  */
canvas.width = window.innerWidth
var widht_game = canvas.width - 70
canvas.height = window.innerHeight
var height_game = canvas.height - 150
/*!Creating start game objects and their Function!*/

/*--------------------------------------*/
var flag = 1
var heart=new  Image()
heart.src='img/tema/heart.svg'
var score=new  Image()
score.src='img/tema/SCORE.png'

var asteroid = new Image()
asteroid.src = 'img/tema/astero.png'
var aster = []
var SCORE = 0;
var user_board = new Image()
user_board.src = 'img/User_Ships/3B.png'
var alien_board1 = new Image()
alien_board1.src = 'img/Alien_Ships/Alien-Scout.png'
var bullet = new Image();
bullet.src = 'img/tema/fire.png'
var bullet_a = new Image();
bullet_a.src = 'img/tema/fire_ul.png'
var bul = [];
var bul_a = [];
var alien_board = [];
var start = new Date().getTime()

class Alien {


    constructor(self) {
        this.del = 0;
        this.damage = 70
        this.x = widht_game + 100;
        this.y = Math.random() * height_game;
        this.dx = Math.random() * 2 + 1;
        if (Math.random() !== 0) {
            this.dy = -(Math.random() + 0.2)
        } else {
            this.dy = (Math.random() + 0.2)
        }

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
        this.del = 0
        this.damage = 100
        this.x = widht_game + 100;
        this.y = Math.random() * height_game;
        this.dx = Math.random() + 0.5;
        if (Math.random() === 0) {
            this.dy = -(Math.random() + 0.2)
        } else {
            this.dy = (Math.random() + 0.2)
        }
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
        this.live = 1
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
        contex.drawImage(bullet, this.x1, this.y1, 26, 26);
        contex.drawImage(bullet, this.x2, this.y2, 26, 26);
    }
}

class Bullet_A {
    constructor(al) {
        this.damage = 10;
        this.x1 = al.x + 40
        this.y1 = al.y
        this.x2 = al.x + 40
        this.y2 = al.y + 35
        this.dx = 0.4

    }

    update(self) {
        this.x1 -= this.dx
        this.x2 -= this.dx
    }

    render(self) {
        contex.drawImage(bullet_a, this.x1, this.y1, 26, 26);
        contex.drawImage(bullet_a, this.x2, this.y2, 26, 26);
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
function del_all(){
    bul_a.splice(0,bul_a.length)
    aster.splice(0,aster.length)
    alien_board.splice(0,alien_board.length)
    contex.clearRect(0, 0, widht_game + 100, height_game + 200);
}
function menu(){
    contex.fillStyle='#000'
    contex.font="24px Verdana";
    contex.fillText("HP:  " + ship.health + " Heart:  " + ship.live +" Score:  " + SCORE,0,height_game-12 )
}
function ship_movement(handle) {

    ship.render()
    canvas.addEventListener("mousemove", function (event) {
        ship.x = event.offsetX;
        ship.y = event.offsetY;
    })

    if (time_bul % 60 === 0) {
        bul.push(new Bullet_U)
    }

    var f_d = 1;
    var end = new Date().getTime() - start;
    for (let j = 0; j < bul_a.length; j++) {
        end = new Date().getTime() - start;
        if (bul_a[j] !== undefined) {
            if (f_d === 1) {
                if (Math.abs(ship.y + 35 - bul_a[j].y1 + 13) < 70
                    && Math.abs(ship.x - bul_a[j].x1) < 15
                    || Math.abs(ship.y + 35 - bul_a[j].y2 + 13) < 70
                    && Math.abs(ship.x - bul_a[j].x2) < 15) {
                    console.log(end)
                    ship.health -= bul_a[j].damage;
                    f_d = 0;
                   del_all();
                    start = new Date().getTime()
                    break;
                }
            }

            if (end % 3000000000 === 0) {
                f_d = 1
            }
        }
    }
    for (var j = 0; j < alien_board.length; j++) {
        end = new Date().getTime() - start;
        if (alien_board[j] !== undefined) {
            if (f_d === 1) {
                if (Math.abs(ship.y + 35 - alien_board[j].y + 35) < 70
                    && Math.abs(ship.x - alien_board[j].x) < 35){
                    console.log(end)
                    ship.health -= alien_board[j].damage;
                    f_d = 0;del_all();

                    start = new Date().getTime()
                    break;
                }
            }

            if (end % 3000000000 === 0) {
                f_d = 1
            }
        }
    }
    for (var j = 0; j < aster.length; j++) {
        end = new Date().getTime() - start;
        if (aster[j] !== undefined) {
            if (f_d === 1) {
                if (Math.abs(ship.y + 35 - aster[j].y + 25) < 70
                    && Math.abs(ship.x - aster[j].x) < 35){
                    console.log(end)
                    ship.health -= aster[j].damage;
                    f_d = 0;del_all()
                    start = new Date().getTime()
                    break;
                }
            }

            if (end % 3000000000 === 0) {
                f_d = 1
            }
        }
    }
    if (ship.health <= 0) {
        ship.live--;
        if (ship.live <= 0) {
            flag = 0
            console.log("GAMEOVER")
        } else {
            ship.health = 100;
            user_board.globalAlpha = 0.5
        }
    }
    time_bul++;
    for (let i = 0; i < bul.length; i++) {
        bul[i].render()
        bul[i].update()
        if (bul[i].x > widht_game + 1) {
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

        if (time_bul_a % 100 === 0) {
            bul_a.push(new Bullet_A(alien_board[i]))
        }
        time_bul_a++;
        for (let j = 0; j < bul_a.length; j++) {
            bul_a[j].render()
            bul_a[j].update()
            if (bul_a[j].x < -32) {
                bul_a.splice(j, 1)
            }
        }
        for (let j = 0; j < bul.length; j++) {
            if (alien_board[i] !== undefined) {
                if (Math.abs(alien_board[i].y + 35 - bul[j].y1 + 13) < 70
                    && Math.abs(alien_board[i].x - bul[j].x1) < 35
                    || Math.abs(alien_board[i].y + 35 - bul[j].y2 + 13) < 100
                    && Math.abs(alien_board[i].x - bul[j].x2) < 35) {
                    alien_board[i].del = 1
                    SCORE++;
                    bul.splice(j, 1)
                    break/* перепроверить */
                }
                if (alien_board[i].del === 1) {
                    alien_board.splice(i, 1)
                }
            }
        }
        if (alien_board[i] !== undefined && alien_board[i].x < -84) {
            alien_board.splice(i, 1)
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
        for (let j = 0; j < bul.length; j++) {
            if (aster[i] !== undefined) {
                if (Math.abs(aster[i].y + 35 - bul[j].y1 + 13) < 70
                    && Math.abs(aster[i].x - bul[j].x1) < 35
                    || Math.abs(aster[i].y + 35 - bul[j].y2 + 13) < 100
                    && Math.abs(aster[i].x - bul[j].x2) < 35) {
                    aster[i].del = 1
                    SCORE++;
                    bul.splice(j, 1)
                    break/* перепроверить */
                }
                if (aster[i].del === 1) {
                    aster.splice(i, 1)
                }
            }
        }
        if (aster[i] !== undefined && aster[i].x < -84) {
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
    contex.clearRect(0, 0, widht_game + 100, height_game + 200);
    render();

    if (flag === 1) {
        requestAnimFrame(game);

    } else { menu();
        console.log('GROEPWRPO')
    }
}

function render() {
   menu()
    spawn_objects();
}


ship = new User_ship();
ship.render()


game()
