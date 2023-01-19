'use strict' /* чтобы  язык был более адекватным*/


var canvas = document.getElementById('Game_js');
var contex = canvas.getContext('2d');
var time_set_aster = 0;
var time_bul = 0;
var time_bul_a = 0;
var time_set_alien = 0;
/*Размеры поля  */
var OX;
var OY;
var game_load = 0
canvas.width = window.innerWidth
var widht_game = canvas.width - 70
canvas.height = window.innerHeight
var height_game = canvas.height - 150
/*!Creating start game objects and their Function!*/
var key_b = 0
/*--------------------------------------*/
var again = new Image()
again.src = 'img/tema/again.png'
var win1 = new Image();
var lose = new Image();
win1.src = 'img/tema/win.png'
lose.src = 'img/tema/lose.png'
var flag = 1
var heart = new Image()
heart.src = 'img/tema/heart.svg'
var score = new Image()
score.src = 'img/tema/SCORE.png'
var Time_kill = 0
var asteroid = new Image()
asteroid.src = 'img/tema/astero.png'
var aster = []
var bul_boss = []
var time_boss = 0;
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
var bos = new Image()
bos.src = 'img/Alien_Ships/Alien-Mothership2.png'

/*--------------------------------------*/


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

class Alien_Boss {
    constructor(self) {
        this.damage = 100
        this.hp = 500
        this.x = widht_game;
        this.y = height_game / 4 - 50;
        this.dx = 1
    }

    update(self) {
        this.x -= this.dx
        if (this.x > widht_game + 100 || this.x <= 0) {
            this.dx = -this.dx;

        }
    }

    render() {
        contex.drawImage(bos, this.x, this.y, 444, 500);
    }
}

class Bullet_B {
    constructor() {
        this.x1 = boss.x + 120
        this.y1 = boss.y + 185
        this.x2 = boss.x + 120
        this.y2 = boss.y + 260
        this.dx = 4
        this.xup1 = boss.x + 170
        this.yup1 = boss.y + 185
        this.xup2 = boss.x + 300
        this.yup2 = boss.y + 185
        this.xdown1 = boss.x + 170
        this.ydown1 = boss.y + 260
        this.xdown2 = boss.x + 300
        this.ydown2 = boss.y + 260
        this.x3 = boss.x + 300
        this.y3 = boss.y + 260
        this.x4 = boss.x + 300
        this.y4 = boss.y + 185
        this.damage = 10

    }

    update(self) {
        this.x1 -= this.dx
        this.x2 -= this.dx
        this.x3 += this.dx
        this.x4 += this.dx
        this.yup1 -= 4
        this.yup2 -= 4
        this.ydown1 += 4
        this.ydown2 += 4

    }

    render(self) {
        contex.drawImage(bullet_a, this.x1, this.y1, 26, 26);
        contex.drawImage(bullet_a, this.x2, this.y2, 26, 26);
        contex.drawImage(bullet_a, this.xup1, this.yup1, 26, 26);
        contex.drawImage(bullet_a, this.xup2, this.yup2, 26, 26);
        contex.drawImage(bullet_a, this.xdown1, this.ydown1, 26, 26);
        contex.drawImage(bullet_a, this.xdown2, this.ydown2, 26, 26);
        contex.drawImage(bullet_a, this.x3, this.y3, 26, 26);
        contex.drawImage(bullet_a, this.x4, this.y4, 26, 26);

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

/*--------------------------------------*/

class User_ship {
    constructor(self) {
        this.x = widht_game / 5;
        this.y = height_game / 2;
        this.live = 3
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
        contex.drawImage(bullet, this.x1, this.y1, 26, 26);
        contex.drawImage(bullet, this.x2, this.y2, 26, 26);
    }
}

var ship = new User_ship()
var boss = new Alien_Boss();

function rezet_ol() {

    canvas = document.getElementById('Game_js');
    contex = canvas.getContext('2d');
    time_set_aster = 0;
    ship = new User_ship()
    boss = new Alien_Boss();
    time_bul = 0;
    time_bul_a = 0;
    time_set_alien = 0;

    canvas.width = window.innerWidth
    widht_game = canvas.width - 70
    canvas.height = window.innerHeight
    height_game = canvas.height - 150
    /*!Creating start game objects and their Function!*/

    /*--------------------------------------*/

    flag = 1
    Time_kill = 0

    aster = []
    bul_boss = []
    time_boss = 0;
    SCORE = 0;

    bul = [];
    bul_a = [];
    alien_board = [];


    /*--------------------------------------*/

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

function del_all() {
    bul_a.splice(0, bul_a.length)
    aster.splice(0, aster.length)
    alien_board.splice(0, alien_board.length)
}

function del_all_and_b() {
    del_all();
    boss = undefined;
    ship = undefined;
}

function stat() {
    contex.fillStyle = '#000'
    contex.font = "24px Verdana";
    contex.fillText("HP:  " + ship.health + " Heart:  " + ship.live + " Score:  " + SCORE, 0, height_game - 12)
}

function moveRect(e) {
    var left = 10;
    var top = 10;

    switch (e.key) {
        case "a":  // если нажата клавиша влево
            ship.x -= left;
            break;
        case "w":   // если нажата клавиша вверх
            ship.y = ship.y - top;
            break;
        case "d":   // если нажата клавиша вправо
            ship.x += left;
            break;
        case "s":   // если нажата клавиша вниз
            ship.y += top;
    }
}

function moveRect_m(e) {
    ship.x = e.offsetX;
    ship.y = e.offsetY;


}

function ship_movement() {

    ship.render()
    if (key_b > 0) {
       canvas.addEventListener("keydown", moveRect);
    } else {
        canvas.addEventListener("mousemove", moveRect_m);
    }


    if (Time_kill !== 0) {
        while (Time_kill < 100 * 100 * 10) {
            Time_kill++;
        }
        Time_kill = 0;
    }
    for (let j = 0; j < bul_a.length; j++) {
        if (bul_a[j] !== undefined) {
            if (Math.abs(ship.y + 35 - bul_a[j].y1 + 13) < 70
                && Math.abs(ship.x - bul_a[j].x1) < 15
                || Math.abs(ship.y + 35 - bul_a[j].y2 + 13) < 70
                && Math.abs(ship.x - bul_a[j].x2) < 15 && (Time_kill === 0)) {
                ship.health -= bul_a[j].damage;
                bul_a.splice(j, 1)
                Time_kill++
                del_all();
                break;
            }

        }
    }
    for (var j = 0; j < alien_board.length; j++) {
        if (alien_board[j] !== undefined) {

            if (Math.abs(ship.y + 35 - alien_board[j].y + 35) < 70
                && Math.abs(ship.x - alien_board[j].x) < 35 && (Time_kill === 0)) {
                Time_kill++;

                ship.health -= alien_board[j].damage;
                alien_board.splice(j, 1)
                break;
            }
        }
    }

    for (var j = 0; j < aster.length; j++) {

        if (aster[j] !== undefined) {
            if (Math.abs(ship.y + 35 - aster[j].y + 25) < 70
                && Math.abs(ship.x - aster[j].x) < 35 && (Time_kill === 0)) {
                ship.health -= aster[j].damage;
                del_all();
                aster.splice(j, 1)
                Time_kill++
                break;
            }
        }

    }
    for (var j = 0; j < bul_boss.length; j++) {
        if (bul_boss[j] !== undefined) {
            if (Math.abs(ship.y + 35 - bul_boss[j].y1 + 13) < 70
                && Math.abs(ship.x - bul_boss[j].x1) < 35 || Math.abs(ship.y + 35 - bul_boss[j].y2 + 13) < 70
                && Math.abs(ship.x - bul_boss[j].x2) < 35 || Math.abs(ship.y + 35 - bul_boss[j].y3 + 13) < 70
                && Math.abs(ship.x - bul_boss[j].x3) < 35 || Math.abs(ship.y + 35 - bul_boss[j].y4 + 13) < 70
                && Math.abs(ship.x - bul_boss[j].x4) < 35 || Math.abs(ship.y - bul_boss[j].yup2) < 35
                && Math.abs(ship.x + 35 - bul_boss[j].xup2 + 13) < 70 || Math.abs(ship.y - bul_boss[j].yup1) < 35
                && Math.abs(ship.x + 35 - bul_boss[j].xup1 + 13) < 70 || Math.abs(ship.y - bul_boss[j].ydown2) < 35
                && Math.abs(ship.x + 35 - bul_boss[j].xdown2 + 13) < 70 || Math.abs(ship.y - bul_boss[j].ydown1) < 35
                && Math.abs(ship.x + 35 - bul_boss[j].xdown1 + 13) < 70 && (Time_kill === 0)) {
                ship.health -= bul_boss[j].damage;
                bul_boss.splice(j, 1)
                Time_kill++;
                break;
            }
        }


    }
    if (Math.abs(ship.y + 35 - boss.y + 222) < 444
        && Math.abs(ship.x - boss.x) < 222) {
        ship.health -= boss.damage;
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
    if (key_b === 0) {
        if (time_bul % 60 === 0) {
            bul.push(new Bullet_U)
        }
    } else {
        canvas.addEventListener("mousedown", function (event) {

            if (time_bul % 60 === 0)
                bul.push(new Bullet_U)
            time_bul++;
        })
    }
    for (let i = 0; i < bul.length; i++) {
        bul[i].render()
        bul[i].update()
        if (bul[i].x > widht_game + 1) {
            bul.splice(i, 1)
        }

    }
    time_bul++;

}

function listener(e) {
    if (e.key === 'F3') {
        console.log("ife")
        select_game()


    } else {
        console.log("else")
        select_game()


    }
    canvas.removeEventListener('keydown', listener, false);
}


function menu() {
    //пытаюcь после победы выигрыша  попасть  в меню выбора
    contex.drawImage(again, widht_game / 2, height_game - 200, 500, 400);
    contex.fillStyle = '#ff0a0a'
    contex.font = "50px Verdana";
    contex.fillText("press any key, to restart", 0, height_game - 200)
    canvas.addEventListener('keydown', listener, false);


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
                    || Math.abs(aster[i].y + 35 - bul[j].y2 + 13) < 70
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

function spawn_boss() {
    boss.update();
    boss.render();
    if (time_boss % 60 === 0) {
        bul_boss.push(new Bullet_B())
    }
    time_boss++;
    for (let i = 0; i < bul_boss.length; i++) {
        bul_boss[i].render()
        bul_boss[i].update()
        if (bul_boss[i].x > widht_game + 1) {
            bul_boss.splice(i, 1)
        }
    }
    for (let j = 0; j < bul.length; j++) {
        if (Math.abs(boss.y + 250 - bul[j].y1 + 13) < 150 && Math.abs(boss.x - bul[j].x1 + 120) < 222
            || Math.abs(boss.y + 250 - bul[j].y2 + 13) < 150 && Math.abs(boss.x - bul[j].x2 + 120) < 222 ||
            boss.y + 60 < bul[j].y2 && Math.abs(boss.x - bul[j].x2) < 222 && boss.y + 60 >= bul[j].y1
        ) {
            bul.splice(j, 1)
            boss.hp -= 1
            SCORE++;

            if (boss.hp <= 0) {
                boss = undefined
                flag = 2
                break
            }
        }
    }


}

function boss_game() {
    stat()
    ship_movement()
    spawn_boss()
}

/*основной игровой цикл*/
function spawn_objects() {
    ship_movement()
    spawn_aster();
    spawn_alien_ships();
}

function game() {
    contex.clearRect(0, 0, widht_game + 100, height_game + 200);
    if (SCORE > 100) {
        del_all();
        boss_game();
        if (flag === 1) {
            requestAnimFrame(game);

        } else {
            contex.clearRect(0, 0, widht_game + 100, height_game + 200);

            if (flag === 2) {
                stat();
                contex.drawImage(win1, widht_game / 2 - 400, height_game / 2 - 400, 900, 800);
                console.log("win")
            } else {
                stat();
                contex.drawImage(lose, widht_game / 2 - 400, height_game / 2 - 400, 900, 800);
                console.log('2222222')

            }
            menu()
        }
    } else {
        render();
        if (flag === 1) {
            requestAnimFrame(game);

        } else {
            contex.clearRect(0, 0, widht_game + 100, height_game + 200);
            stat();
            contex.drawImage(lose, widht_game / 2 - 400, height_game / 2 - 400, 900, 800);
            console.log('11111')
            menu()

        }
    }
}

function render() {
    stat()
    spawn_objects();
}

function listener_m(e) {
    if (game_load === 0) {
        if (e.keyCode === 70) {
            key_b = 1
            game_load = 1
            main()

        } else {
            game_load = 1
            key_b = 0
            main()

        }
    }
    canvas.removeEventListener('keydown', listener_m, false);
}

//пытаюсь выбрать режим игры
function select_game() {
    del_all_and_b();
    rezet_ol();
    game_load = 0;
    contex.clearRect(0, 0, widht_game + 100, height_game + 200);
    contex.fillStyle = '#ff0a0a'
    contex.font = "50px Verdana";
    contex.fillText("press F for play keyboard, any - play only mouse", 0, height_game - 200)
    canvas.addEventListener('keydown', listener_m, false);

}

///меню игры
function main() {

    ship.x = 5
    contex.clearRect(0, 0, widht_game + 100, height_game + 200);
    ship.render()
    console.log("3r432r")
    game();
    canvas.removeEventListener("mousemove", moveRect_m);
    canvas.removeEventListener("keydown", moveRect);
    console.log("bady")
    contex.clearRect(0, 0, widht_game + 100, height_game + 200);
}

select_game()

