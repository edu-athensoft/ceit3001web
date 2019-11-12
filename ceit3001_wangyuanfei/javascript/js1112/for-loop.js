function test() {
    // testForIn();
    testForOfString();
}


function testForIn() {
    var person = { fname: "John", lname: "Doe", age: 25 };

    for (x in person) {
        console.log(x + ":" + person[x]);
        // console.log(x);
    }
}

function testForOf() {
    var cars = ['BMW', 'Volvo', 'Mini'];
    var x;

    for (x of cars) {
        document.write(x + "<br >");
    }
}

function testForOfString(){
    var str = "hello";
    var x;

    for (x of str) {
        console.log(x);
    }
}

test();