/**
 * 
 * 
 */

test();

function test(){
    var TABLE_SIZE = 12;
    var factorArray = createFactorArray(TABLE_SIZE);
    printResult(factorArray);
}


function printResult(factorArray){
    for(var i=0; i<factorArray.length; i++){
        var value = 12*factorArray[i];
        document.write("12*"+factorArray[i]+"="+value+"<br/>");
    }
}

function createFactorArray(size){
    var factors = [];

    for(var i=1; i<=size; i++){
        factors.push(i);
    }

    return factors;  
}