
//global variables

var op1;        //operand 1
var op2;        //operand 2
var operator=''; //operator : + - * /
var result=0;


// pass n into and save as op1 or op2
function pressNumber(n){
    //display the pressed number at the input element
    document.getElementById("result").value = n;

    //if op1 has a value, then goto op2 to check if op2 has a value
    //if op1 has not a value, then put n into op1
    if(typeof(op1)=="undefined"){
        op1 = n;
    }else{
        if(typeof(op2)=="undefined"){
            op2 = n;
        }
    }

    //to check the value of current op1 and op2
    console.log("op1="+op1);
    console.log("op2="+op2);

}


//
function pressOperator(opt){
    operator = opt;
}

function getResult(){
    //when operator is +, then let result = op1 + op2
    //when operator is -, then let result = op1 - op2
    //when operator is *, then let result = op1 * op2
    //when operator is /, then let result = op1 / op2
    switch(operator){
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case '*':
            result = op1 * op2;
            break;
        case '/':
            result = op1 / op2;
            break;
        default:
            break;
    }


    //display at input element on screen
    document.getElementById("result").value = result;

}

//press down AC button
function reset(){
    op1 = undefined;
    op2 = undefined;
    result = 0;
    operator = '';

    document.getElementById("result").value = 0;
}
