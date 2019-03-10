/*
 mini calculator project
 sample solution

 @Company   Informatique Athensoft
 @Author    Athens Zhang
 @Date      2019-03-02

*/


/* global vars*/

var opr1;   //undefined
var opr2;   //undefined
var operator = '';
var result = 0;


var str_expr = '';

//to get the number just pressed
function pressNumber(operand) {
    console.log(operand);
    if (typeof(opr1) == "undefined") {
        opr1 = operand;
    } else {
        if (typeof(opr2) == "undefined") {
            opr2 = operand;
        }
    }
    display(operand);

    str_expr +=operand;
    
}

function pressOperator(opt) {
    operator = opt;
    
    console.log(str_expr+=operator);
}

function getResult() {

    if (typeof(opr1) == "undefined" || typeof(opr2) == "undefined") {
        return;
    }

    console.log(opr1 + ' ' + operator + ' ' + opr2);
    var res = 0;
    if (operator == '+') {
        res = adding(opr1, opr2);
    } else if (operator == '-') {
        res = subtracting(opr1, opr2);
    } else if (operator == '*') {
        res = multiplying(opr1, opr2);
    } else if (operator == '/') {
        res = dividing(opr1, opr2);
    }
    console.log(res)
    result = res;
    opr1 = undefined;
    opr2 = undefined;

    console.log(opr1);
    console.log(opr2);

    console.log(str_expr+=('='+result));

    display(result);
    result = 0;

    return result;

}

// function calc(opr1, opr2, opt){
//     return opt(opr1,opr2);
// }

function adding(opr1, opr2) {
    return opr1 + opr2;
}

function subtracting(opr1, opr2) {
    return opr1 - opr2;
}

function multiplying(opr1, opr2) {
    return opr1 * opr2;
}

function dividing(opr1, opr2) {
    return opr1 / opr2;
}

function reset() {
    result = 0;
    opr1 = undefined;
    opr2 = undefined;

    operator ='';
    str_expr ="";
    display(result);
}
