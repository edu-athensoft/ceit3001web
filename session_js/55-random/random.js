function test() {
    getRandom();

    // for(var i=0; i<10; i++){
    //     getRandomInt();
    // }

    // for(var i=0; i<10; i++){
    //     getRandomInt10();
    // }

    // for (var i = 0; i < 10; i++) {
    //     console.log(getRandomIntFrom1(10));
    // }

    for (var i = 0; i < 10; i++) {
        console.log(getRndInteger(1,6));
    }

}

/** [0,1) */
function getRandom() {
    console.log(Math.random());
}

/**  0<= x < 1 
 *   0 <= 10 * x < 10
 *   [0, 9]
*/
function getRandomInt() {
    r = Math.random() * 10;
    console.log(Math.floor(r));
}

function getRandomInt10() {
    r = Math.random() * 11;
    console.log(Math.floor(r));
}

/** generating 0 to a specified number */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/** 1 .. 10 */
function getRandomIntFrom1(max) {
    return Math.floor(Math.random() * max) + 1;
}


/**
 *   0 <= x < 1
 *   min <= x < max
 *   min -min <= x - min < max - min
 *   0 <= x - min < max - min
 *   [1 - 6)
 * 
 * @param {*} min 
 * @param {*} max 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min+1)) + min;
}

test();