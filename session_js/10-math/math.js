/* JS Math */

function test(){
    
}

function testRound(){
    
    var number = document.getElementById('number').value;
    var result = Math.round(number);    // returns 5
    // Math.round(4.4);    // returns 4
    document.getElementById("test-round").innerHTML = "The result is: "+result;
}

function testPow(){
    
    var a = document.getElementById('number-a').value;
    var n = document.getElementById('number-n').value;
    var result = Math.pow(a,n);    // returns 5
    // Math.round(4.4);    // returns 4
    document.getElementById("test-pow").innerHTML = "The result is: "+result;
}

test();