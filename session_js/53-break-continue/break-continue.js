
function test(){

}


function testBreak(){
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
      }
}

function testContinue(){
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
      }
}

function breakLabel(){
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    list: {
      text += cars[0] + "<br>";
      text += cars[1] + "<br>";
      break list;
      text += cars[2] + "<br>";
      text += cars[3] + "<br>";
    }
}

function continueLabel(){

}

test();