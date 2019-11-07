
test();

function test(){
    // alert();

    printResult();
    document.write("<br/>");
    printResultWhile();
}

function printResult(){
    for(var i=1; i<=12; i++){
        var value = 12*i;
        document.write("12*"+i+"="+value+"<br/>");
    }
}

function printResultWhile(){
    var i = 1;
    while(i<=12){
        var value = 12*i;
        document.write("12*"+i+"="+value+"<br/>");
        i++;
    }
}