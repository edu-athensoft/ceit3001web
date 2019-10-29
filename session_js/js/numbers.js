



function test() {
    var res = 100 / "Apple";
    console.log(res);
    console.log(typeof (res));

    var res2 = 100 / "Apple";
    console.log(res);

    //
    console.log(res == res2);

    //
    var x = NaN;
    var y = "5";
    var z = x + y;
    console.log(z);

    testInfinity();
}

function testInfinity() {
    var myNumber = 20;
    while (myNumber != Infinity) {   // Execute until Infinity
        myNumber = myNumber * myNumber;
    };
    console.log(myNumber);
    console.log(typeof(myNumber));

}



test();