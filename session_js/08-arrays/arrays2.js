function testArray() {
    // addElement();
    // addElement2();

    // assotiative();
    // assotiative2();

    // isArray();
    console.log(isArray2());
    console.log(isArray3());

    
}

function addElement() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    // cars.push("aaa");
    cars.push("aaa", "aaa2");
    console.log(cars);
}

function addElement2() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    cars[cars.length] = "bbb";
    console.log(cars);
}

function assotiative() {
    var person = [];
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46;
    var x = person.length;     // person.length will return 3
    var y = person[0];          // person[0] will return "John"
    console.log(person);
}

function assotiative2() {
    var person = [];
    person["firstName"] = "John";
    person["lastName"] = "Doe";
    person["age"] = 46;
    var x = person.length;     // person.length will return 0
    var y = person[0];         // person[0] will return undefined
    console.log(person);
}

function isArray() {
    var person = [];
    person[0] = "John";
    person[1] = "Doe";
    person[2] = 46;

    console.log(Array.isArray(person));
}

function isArray2() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    return cars.constructor.toString().indexOf("Array") > -1;
}

function isArray3() {
    var fruits = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    return fruits instanceof Array;
}

testArray();

/** */

function testArrayMethod() {
    // convertToString();
    // popArray();
    // shiftArray();
    // unshiftArray();
    // deleteElement();
    // splicingArray();
    // splicingArray2();
    // removeElement();
    // mergeArray();
    sliceArray();
    sliceArray2();
}

function convertToString() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    //solution 1
    var str = cars.toString();
    document.getElementById("arraymethod1").innerHTML = str;
    //solution 2
    document.getElementById("arraymethod2").innerHTML = cars.join(" * ");
}

function popArray() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    console.log(cars.pop());
    console.log(cars);
}

function pushArray() {
    //todo
    //return length of the array
}

function shiftArray() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    console.log(cars.shift());
    console.log(cars);
}

function unshiftArray() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    console.log(cars.unshift("EA"));
    console.log(cars);
}

function changeElement() {

}

function deleteElement() {
    var cars = ["Saab", "Volvo", "BMW", "Benz", "Chiron", "Audi"];
    console.log(cars);
    delete cars[0];
    console.log(cars);
    console.log(car[0]);
}


/* insert multiple element with or without overwriting */
function splicingArray() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits);
}

function splicingArray2() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 2, "Lemon", "Kiwi");
    console.log(fruits);
}

function removeElement(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 2);
    console.log(fruits);

    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(1, 2);
    console.log(fruits);
}

function mergeArray(){
    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys);
    console.log(myChildren);

    var a1 = [1,2,3];
    var a2 = [4,5];
    var a3 = [6,7,8];
    var result = a1.concat(a2, a3);  
    console.log(result);

    var b1 = [1,2,3];
    var b2 = [4,5];
    var b3 = [6,7,8];
    var result2 = b1.concat(b2).concat(b3);  //inline coding, compact coding style
    console.log(result2);
}

/* return a new array */
function sliceArray(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.slice(1);
    console.log(result);
    console.log((result instanceof Array)?'Array':"not an array");

    // (condition) ? expr1 : expr2;
    
    // if (condition) {
    //     expr1;
    // }else {
    //     expr2;
    // }
}

function sliceArray2(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.slice(1,2);
    console.log(result);
    console.log((result instanceof Array)?'Array':"not an array");
}

testArrayMethod();