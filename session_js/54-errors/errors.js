function test() {}

function testTryCatch() {
  try {
    adddlert("Welcome guest!");
  } catch (err) {
    document.getElementById("demo").innerHTML = err.message;
  }
}

function inputValidate() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}

function testFinally() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  } catch (err) {
    message.innerHTML = "Error: " + err + ".";
  } finally {
    document.getElementById("demo").value = "";
  }
}

function rangeError() {
  var num = 1;
  try {
    num.toPrecision(500); // A number cannot have 500 significant digits
  } catch (err) {
    document.getElementById("demo").innerHTML = err.name;
  }
}

function referenceError() {
  try {
    x = y + 1; // y cannot be referenced (used)
  } catch (err) {
    document.getElementById("demo").innerHTML = err.name;
  }
}

function syntaxError() {
  try {
    eval("alert('Hello)"); // Missing ' will produce an error
  } catch (err) {
    document.getElementById("demo").innerHTML = err.name;
  }
}

function typeError() {
  var num = 1;
  try {
    num.toUpperCase(); // You cannot convert a number to upper case
  } catch (err) {
    document.getElementById("demo").innerHTML = err.name;
  }
}

function URIError() {
  try {
    decodeURI("%%%"); // You cannot URI decode percent signs
  } catch (err) {
    document.getElementById("demo").innerHTML = err.name;
  }
}
test();
