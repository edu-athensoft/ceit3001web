function test() {

}

/*
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
*/
function loopForArray() {
    var i;
    var text;
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    console.log(text);
}

function testForLoop1() {
    for (i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }
}

function testStatement1a() {
    for (i = 0, len = cars.length, text = ""; i < len; i++) {
        text += cars[i] + "<br>";
    }
}

function testStatement1b() {
    var i = 2;
    var len = cars.length;
    var text = "";
    for (; i < len; i++) {
        text += cars[i] + "<br>";
    }
}

function testStatement2() {
    //tba
}

function testStatement3() {
    var i = 0;
    var len = cars.length;
    for (; i < len;) {
        text += cars[i] + "<br>";
        i++;
    }
}



test();