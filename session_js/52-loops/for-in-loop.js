function forLoopOverArray() {
  var cars = ["BMW", "Volvo", "Mini"];
  var x;

  for (x of cars) {
    document.write(x + "<br >");
  }
}

function forLoopOverString() {
  var txt = "JavaScript";
  var x;

  for (x of txt) {
    document.write(x + "<br >");
  }
}
