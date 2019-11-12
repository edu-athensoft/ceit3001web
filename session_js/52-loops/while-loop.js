function test() {}

function testWhile() {
  while (i < 10) {
    text += "The number is " + i;
    i++;
  }
}

function testDoWhile() {
  do {
    text += "The number is " + i;
    i++;
  } while (i < 10);
}

function compareLoopFor() {
  var cars = ["BMW", "Volvo", "Saab", "Ford"];
  var i = 0;
  var text = "";

  for (; cars[i]; ) {
    text += cars[i] + "<br>";
    i++;
  }
}

function compareLoopWhile() {
  var cars = ["BMW", "Volvo", "Saab", "Ford"];
  var i = 0;
  var text = "";

  while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
  }
}

test();
