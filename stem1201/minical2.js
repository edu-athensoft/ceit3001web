
//global vars
var result = 0;

var intOperator = 0;

var operatorList = ['+', '-', '*', '/'];

var opr1;
var opr2;

//var operation ='';
var opt;

var str_expr = '';

var currentNumberStr = '';

var numseq = [];

//to get the number just pressed
function pressNumber(intChar) {
    console.log(intChar);   

    numseq.push(''+intChar);

    //operand = parseFloat(currentNumberStr);
    //display(operand);

    //str_expr +=operand;

    
    
}

// function pressNumber(operand) {
//     console.log(operand);
//     if (opr1 === undefined) {
//         opr1 = operand;
//     } else {
//         if (opr2 === undefined) {
//             opr2 = operand;
//         }
//     }
//     display(operand);

//     str_expr +=operand;
    
// }

function pressOperator(operator) {
    currentNumberStr ='';
    numseq = [];

    for(var i=0; i<numseq.length; i++){
        currentNumberStr+=numseq[i];
    }

    var operand = parseFloat(currentNumberStr);
    display(operand);

    if (opr1 === undefined) {
        opr1 = operand;
    } else {
        if (opr2 === undefined) {
            opr2 = operand;
        }
    }


   

    var strOperator = '';
    // var result = ''; 
    if (operator == 'plus') {
        strOperator = operatorList[0];
        opt = 'adding';
    } else if (operator == 'minus') {
        strOperator = operatorList[1];
        opt = 'subtracting';
    } else if (operator == 'multiply') {
        strOperator = operatorList[2];
        opt = 'multiplying';
    } else if (operator == 'divide') {
        strOperator = operatorList[3];
        opt = 'dividing';
    }
    //console.log(strOperator);
    console.log(str_expr+=strOperator);
}

function getResult() {

    if (opr1 === undefined || opr2 === undefined) {
        return;
    }

    console.log(opr1 + ' ' + opt + ' ' + opr2);
    var res = 0;
    if (opt == 'adding') {
        res = adding(opr1, opr2);
    } else if (opt == 'subtracting') {
        res = subtracting(opr1, opr2);
    } else if (opt == 'multiplying') {
        res = multiplying(opr1, opr2);
    } else if (opt == 'dividing') {
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

    display(result);
}

function display(result) {
    document.getElementById('result').value = '' + result;
}