function test(){

}

function searchWithString(){
    var str = "Visit W3Schools!";
    var n = str.search("W3Schools");
}

function searchWithRegExpr(){
    var str = "Visit W3Schools";
    var n = str.search(/w3schools/i);
}

function replaceWithString(){
    var str = "Visit Microsoft!";
    var res = str.replace("Microsoft", "W3Schools");
}

function replaceWithRegExpr(){
    var str = "Visit Microsoft!";
    var res = str.replace(/microsoft/i, "W3Schools");
}

function regExpTest(){
    var patt = /e/;
    patt.test("The best things in life are free!");
}

function regExpExec(){
    var obj = /e/.exec("The best things in life are free!");
    document.getElementById("demo").innerHTML =
    "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
}

test();

