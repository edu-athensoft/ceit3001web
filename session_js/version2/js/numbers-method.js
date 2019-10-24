



function test() {
    // testToString();
    // testToExponential();
    // testToFixed();
    // testToPrecision();
    testValueOf();
}

function testToString() {
    var x = 123;
    console.log(x.toString());            // returns 123 from variable x
    console.log((123).toString());        // returns 123 from literal 123
    console.log((100 + 23).toString());   // returns 123 from expression 100 + 23
}

function testToExponential() {
    var x = 9.656;
    console.log(x.toExponential(2));     // returns 9.66e+0
    console.log(x.toExponential(4));     // returns 9.6560e+0
    console.log(x.toExponential(6));
}

function testToFixed() {
    var x = 9.656;
    console.log(x.toFixed(0));           // returns 10
    console.log(x.toFixed(2));
    console.log(x.toFixed(4));
    console.log(x.toFixed(5));
}

function testToPrecision() {
    var x = 9.656;
    console.log(x.toPrecision());        // returns 9.656
    console.log(x.toPrecision(2));       // returns 9.7
    console.log(x.toPrecision(4));       // returns 9.656
    console.log(x.toPrecision(6));       // returns 9.65600
}

function testValueOf() {
    var x = 123;
    console.log(x.valueOf());            // returns 123 from variable x
    console.log((123).valueOf());        // returns 123 from literal 123
    console.log((100 + 23).valueOf());
}

function testNumber() {
    Number(true);          // returns 1
    Number(false);         // returns 0
    Number("10");          // returns 10
    Number("  10");        // returns 10
    Number("10  ");        // returns 10
    Number(" 10  ");       // returns 10
    Number("10.33");       // returns 10.33
    Number("10,33");       // returns NaN
    Number("10 33");       // returns NaN
    Number("John");        // returns NaN

    Number(new Date("2017-09-30"));
}

function testParseInt() {
    parseInt("10");         // returns 10
    parseInt("10.33");      // returns 10
    parseInt("10 20 30");   // returns 10
    parseInt("10 years");   // returns 10
    parseInt("years 10");   // returns NaN
}

function testParseFloat() {
    parseFloat("10");        // returns 10
    parseFloat("10.33");     // returns 10.33
    parseFloat("10 20 30");  // returns 10
    parseFloat("10 years");  // returns 10
    parseFloat("years 10");  // returns NaN
}



test();