
function test() {

    console.log("=== round() ===");
    testRound(4.7);
    testRound(4.4);

    testRound(-2.45)
    testRound(-4.4);
    testRound(-4.7);

    console.log("=== pow() ===");
    testPow(3, 4);
    testPow(1.2, 3);
    testPow(3, 1.5);
    testPow(1.2, 1.5);

    console.log("=== sqrt() ===");
    testSqrt(4);
    testSqrt(0);
    testSqrt(-1);  /* number >=0 NaN */

    console.log("=== ceil() ===")
    testCeil(9.9);
    testCeil(9.1);
    testCeil(9.00001);
    testCeil(9.0);  /* taken as int value */
    testCeil(9);

    testCeil(-2.5);
    testCeil(-2.0);

    console.log("=== floor() ===")
    testFloor(9.9);
    testFloor(9.1);
    testFloor(9.00001);
    testFloor(9.0);  /* taken as int value */
    testFloor(9);

    testFloor(-2.5);
    testFloor(-2.0);
    testFloor(-2);

    console.log("=== max() ===")
    testMax();

    console.log("=== min() ===")
    testMin();

    // showMathProperties();
}

function testRound(x) {
    console.log(Math.round(x));
}

function testPow(a, n) {
    console.log(Math.pow(a, n));
}

function testSqrt(x) {
    console.log(Math.sqrt(x));
}

function testAbs(x) {
    console.log(Math.abs(x));
}

function testCeil(x) {
    console.log(Math.ceil(x));
}

function testFloor(x) {
    console.log(Math.floor(x));
}

function testSin() {

}

function testCos() {

}

function testMin() {
    console.log(Math.min(0, 150, 30, 20, -8, -200));
    // console.log(Math.min([0, 150, 30, 20, -8, -200]));
    // console.log(Math.min('a','b'));

}

function testMax() {
    console.log(Math.max(0, 150, 30, 20, -8, -200));
    // console.log(Math.max([0, 150, 30, 20, -8, -200]));
    // console.log(Math.max('a','b'));
}

function showMathProperties() {
    var num = ['Math.E', 'Math.PI', 'Math.SQRT2', 'Math.SQRT1_2', 'Math.LN2', 'Math.LN10', 'Math.LOG2E', 'Math.LOG10E']
    var expr = num.map(myfunc);

    function myfunc(value){
        return value+" = "+eval(value);
        /* eval('3+5') = 8 */
    }

    console.log(expr);
    var output = ""
    expr.forEach(getOutput);

    function getOutput(value){
        output = output + value+"<br />";
    }

    document.getElementById("demo").innerHTML = output;
}

function showMathProperties2() {
    var num = ['Math.E', 'Math.PI', 'Math.SQRT2', 'Math.SQRT1_2', 'Math.LN2', 'Math.LN10', 'Math.LOG2E', 'Math.LOG10E']
    var expr = num.map(myfunc);

    function myfunc(value){
        return value+" = "+eval(value)+'<br />';
    }

    console.log(expr);
    var output = ""
    output = expr.reduce(getOutput);

    function getOutput(text, value){
        return text + value;
    }

    document.getElementById("demo2").innerHTML = output;
}

function showMathProps(){
    var str = "";
    str = 'Math.PI = '+Math.PI+' <br/>' +
          'Math.E = '+Math.E+' <br/>'

    document.getElementById("demo2").innerHTML = str;

}

function testProps(){
    // var str =""';
    // for(){
    //    str += num[i] + eval(num[i]) +<br/>;
    // }

}

test();