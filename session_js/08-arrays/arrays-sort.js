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

    sortRandomOrder();
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

test();