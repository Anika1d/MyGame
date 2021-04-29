/*fun_Asteroid*/
class Asteroid {


    constructor() {
        for (let i = 0; i < 10; i++) {

            aster.push({x: 290, y: Math.random() * 115, dx: 1, dy: 2})
            console.log(aster[i])
        }
    }

    /* двигаем*/
    update() {
        console.log("vc")
        for (let i = 0; i < 10; i++) {
            contex.drawImage(asteroid,aster[i].x, aster[i].y, aster[i].dx, aster[i].dy, 10);
            console.log(aster[i])
            aster[i].x-=aster[i].dx
            aster[i].y+=aster[i].dy
        }

    }

    method3() { /*... */
    }
}


/*--------------------------------------*/
