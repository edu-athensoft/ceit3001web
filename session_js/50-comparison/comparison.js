
function test() {
    testComparison();
}

function testComparison() {
    var x = 5;
    console.log("x==8 is " + (x == 8));
    console.log("x==5 is " + (x == 5));
    console.log("x=='5' is " + (x == '5'));
    console.log("x===5 is " + (x === 5));
    console.log("x==='5' is " + (x === '5'));
    console.log("x!=8 is " + (x != 8));
    console.log("x!==5 is " + (x !== 5));
    console.log("x!=='5' is " + (x !== '5'));
    console.log("x!==8 is " + (x !== 8));
    console.log("x>8 is " + (x > 8));
    console.log("x<8 is " + (x < 8));
    console.log("x>=8 is " + (x >= 8));
    console.log("x<=8 is " + (x <= 8));
}

function convertBeforeCompare() {
    age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Input is not a number";
    } else {
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("test-convertBeforeCompare").innerHTML = voteable;
}

test();