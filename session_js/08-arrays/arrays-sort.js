/**
 * javascript arrays sorting
 */



function test() {
    // sortArray();
    // reverseArray();
    // getMaxLiteral();
    // getMinLiteral();

    // sortArrayNumericAsc();
    // sortArrayNumericDesc();
    // getMaxNumber();
    // getMinNumber();

    // sortRandomOrder();

    // var a = [2,3,4,6,7,-9,2,3,4,-6];
    // console.log(findMax(a));
    // console.log(findMax2(a));

    sortObjectByString();
    sortObjectByNumber();

}

function sortArray() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi", "Porshe", "Mustang", "Lincon"];
    cars.sort();    //change original array
    console.log(cars);
}

function reverseArray() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    cars.reverse();
    console.log(cars);
}

function getMaxLiteral() {
    var cars = [1, 4, 5, 6, 7, 3, 25, -7, -6, 3, 6];
    cars.sort();
    console.log(cars);
    console.log(cars[cars.length - 1]);
}

function getMinLiteral() {
    var cars = [1, 4, 5, 6, 7, 3, 25, -7, -6, 3, 6];
    cars.sort();
    console.log(cars);
    console.log(cars[0]);
}

function sortArrayNumericAsc() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function (a, b) { return a - b });
    console.log(points);
}

function sortArrayNumericDesc() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function (a, b) { return b - a });
    console.log(points);
}

function getMaxNumber() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function (a, b) { return a - b });
    console.log(points[points.length - 1]);
}

function getMinNumber() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function (a, b) { return a - b });
    console.log(points[0]);
}

function sortRandomOrder() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function (a, b) { return 0.5 - Math.random() });
    console.log(points);
}

function findMax(a) {
    var maxValue = -Infinity;
    for (var i = 0; i < a.length; i++) {
        if (maxValue <= a[i]) {
            maxValue = a[i];
        }
    }
    // console.log(maxValue);
    return maxValue;
}

function findMax2(a) {
    var maxValue = a[0];
    for (var i = 0; i < a.length; i++) {
        if (maxValue <= a[i]) {
            maxValue = a[i];
        }
    }
    // console.log(maxValue);
    return maxValue;
}


function findMin(a) {

}


function sortObjectByString() {
    var cars = [
        { type: "Volvo", year: 2016 },
        { type: "saab", year: 2001 },
        { type: "bMW", year: 2010 }
    ];
    cars.sort(function (a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    console.log(cars);

}

function sortObjectByNumber() {
    var cars = [
        { type: "Volvo", year: 2016 },
        { type: "saab", year: 2001 },
        { type: "bMW", year: 2010 }
    ];
    cars.sort(function (a, b) { return a.year - b.year; });
    console.log(cars);
}

test();