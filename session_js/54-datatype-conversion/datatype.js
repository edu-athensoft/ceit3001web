function test() {
  testTypeof();
  testConstructor();
}

function testTypeof() {
  document.getElementById("demo-typeof").innerHTML =
    typeof "john" +
    "<br>" +
    typeof 3.14 +
    "<br>" +
    typeof NaN +
    "<br>" +
    typeof false +
    "<br>" +
    typeof [1, 2, 3, 4] +
    "<br>" +
    typeof { name: "john", age: 34 } +
    "<br>" +
    typeof new Date() +
    "<br>" +
    typeof function() {} +
    "<br>" +
    typeof myCar +
    "<br>" +
    typeof null;
}

function testConstructor() {
  document.getElementById("demo-constructor").innerHTML =
    "john".constructor +
    "<br>" +
    (3.14).constructor +
    "<br>" +
    false.constructor +
    "<br>" +
    [1, 2, 3, 4].constructor +
    "<br>" +
    { name: "john", age: 34 }.constructor +
    "<br>" +
    new Date().constructor +
    "<br>" +
    function() {}.constructor;
}

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

function isArray2(myArray) {
  return myArray.constructor === Array;
}

function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}

function isDate2(myDate) {
  return myDate.constructor === Date;
}

test();
