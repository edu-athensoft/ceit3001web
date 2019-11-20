function test(){
    var num = "1.9";
    validateNumber(num);

    console.log("=== regex integer ===");
    testInteger("-9");
    testInteger("-9.1");
    testInteger("0");
    testInteger("00");
    testInteger("-00");
    testInteger("09");
    testInteger("09.9");
    testInteger("-09.9");
    testInteger("99");
    testInteger("-99");

    console.log("=== regex positive integer ===");
    testIntegerPositive("-9");
    testIntegerPositive("9");
    testIntegerPositive("9.9");
    testIntegerPositive("0");

    console.log("=== regex negative integer ===");
    testIntegerNegative("-9");
    testIntegerNegative("9");
    testIntegerNegative("9.9");
    testIntegerNegative("0");

    console.log("=== regex number (int, float) ===");
    testNumber("-9");
    testNumber("9");
    testNumber("9.9");
    testNumber("0");
    testNumber("00");
    testNumber("0.0");
}


function validateNumber(num){
    if (/\d/.test(num)) {
        console.log(num+ " is a valid number!");
        return true;
    } else {
        alert("You have entered an invalid number!");
        return false;
    }
}


/** only integer without leading 0*/
function testInteger(str_num){
    var patt = /^-?(0?|[1-9]*)$/gm;
    var str = str_num;
    console.log(str_num+" : "+patt.test(str));
}

function testIntegerPositive(str_num){
    var patt = /^[1-9]+[0-9]*$/gm;
    var str = str_num;
    console.log(str_num+" : "+patt.test(str));
}

function testIntegerNegative(str_num){
    var patt = /^-[1-9]+[0-9]*$/gm;
    var str = str_num;
    console.log(str_num+" : "+patt.test(str));
}

/** may improve 00 */
function testNumber(str_num){
    var patt = /^(-?\d+)(.\d+)?$/gm;
    var str = str_num;
    console.log(str_num+" : "+patt.test(str));
}

test();