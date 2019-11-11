/**
 * 
 * 
 */

test();

function test(){
    // var TEST_INPUT = "12aaa";

    var inputNumber = getInputNumber();

    var tableResult = getTable(inputNumber);

    printTable(tableResult);
}

/**
 * input a number from 1 - 12
 */
function getInputNumber(){

    inputText = prompt("Enter a number [1-12] for table: ");

    var inputNumber = 0;
    inputText = new String(inputText).trim();

    //convert input text to number
    if(validate(inputText)){
        inputNumber = parseInt(inputText);
    }else{
        alert("Input a nubmer [1-12]: ");
    }    

    //let number between 1 - 12, otherwise return 0
    return inputNumber;
}


function getTable(inputNumber){
    console.log("getTable()");
    var tableResult = "";
    //tableResult = "<span>getTable() by "+inputNumber+"</span>";

    for(var i=1; i<=inputNumber; i++){
        var value = 12*i;
        //document.write("12*"+i+"="+value+"<br/>");
        tableResult += "12*"+i+"="+value+"<br/>";
    }

    return tableResult;
}



function printTable(contextHtml){
    console.log("printTable()");
    document.write(contextHtml);
}


/**
 * validate input to make sure it is a numeric literal
 * param: string - inputText
 * return boolean - if validation is passed return true, else false.
 */
function validate(inputText) {
    var reg = new RegExp("^[0-9]*$");

    if (!reg.test(inputText)) {
        // alert("Please input a number!"+inputText);
        return false;
    }else{
        // alert(inputText);
        return true;
    }
}