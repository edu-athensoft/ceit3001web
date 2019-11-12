function test() {
  number2string();
  number2string2();

  bool2str();
  bool2str2();

  str2num();

  unaryPlus();
  unaryPlus2();
}

function number2string() {
  var x = 123;
  document.getElementById("demo-num2str").innerHTML =
    String(x) + "<br>" + String(123) + "<br>" + String(100 + 23);
}

function number2string2() {
  var x = 123;
  document.getElementById("demo-num2str2").innerHTML =
    x.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString();
}

function bool2str() {
  var x = true;
  var y = false;
  document.getElementById("demo-bool2str").innerHTML =
    String(x) + "<br>" + String(y) + "<br>";
}

function bool2str2() {
  var x = true;
  var y = false;
  document.getElementById("demo-bool2str2").innerHTML =
    x.toString() + "<br>" + y.toString() + "<br>";
}

function str2num() {
  var a = "3.14";
  var b = " ";
  var c = "";
  var d = "99 88";
  document.getElementById("demo-str2num").innerHTML =
    Number(a) +
    "<br>" +
    Number(b) +
    "<br>" +
    Number(c) +
    "<br>" +
    Number(d) +
    "<br>";
}

function unaryPlus() {
  var y = "5";
  var x = +y;
  document.getElementById("demo-unary").innerHTML =
    typeof y + "<br>" + typeof x;
}

function unaryPlus2() {
  var y = "John";
  var x = +y;
  document.getElementById("demo-unary2").innerHTML = typeof x + "<br>" + x;
}

function bool2num() {
  Number(false); // returns 0
  Number(true); // returns 1
}

function date2num() {
  d = new Date();
  Number(d); // returns 1404568027739
  d.getTime();
}

function autoConversion() {
  document.getElementById("demo").innerHTML =
    5 +
    null +
    "<br>" +
    ("5" + null) +
    "<br>" +
    ("5" + 2) +
    "<br>" +
    ("5" - 2) +
    "<br>" +
    "5" * "2" +
    "<br>" +
    "5" / "2" +
    "<br>";
}

test();
