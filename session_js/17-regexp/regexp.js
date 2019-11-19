function test(){
    var patt = /w3schools/i;
    // console.log(patt);

    // console.log(searchWithString());
    // console.log(searchWithRegExpr());

    // console.log(replaceWithString());
    // console.log(replaceWithRegExpr());

    // testModifierG();

    // removeSpace();
    console.log(regExpTest());
    
}

function searchWithString(){
    var str = "Visit W3Schools!";
    var n = str.search("W3Schools");
    return n;
}

function searchWithRegExpr(){
    var str = "Visit W3Schools";
    var n = str.search(/w3schools/i);
    return n;
}

function replaceWithString(){
    var str = "Visit Microsoft!";
    var res = str.replace("Microsoft", "W3Schools");
    return res;
}

function replaceWithRegExpr(){
    var str = "Visit Microsoft!";
    var res = str.replace(/microsoft/i, "W3Schools");
    return res;
}

function regExpTest(){
    var patt = /e/;
    var res =patt.test("The best things in life are free!");
    return res;

    // /e/.test("The best things in life are free!");
}

function regExpExec(){
    var obj = /e/.exec("The best things in life are free!");
    document.getElementById("demo").innerHTML =
    "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
}

/** regular expression modifiers - g */
/** do not use search to test */
function testModifierG(){
    var str = "Visit Visit Visit !";
    var pattern = /visit/ig;
    var res = str.match(pattern);
    console.log(res);
    
}

/**remove uneccessary space */
function removeSpace(){
    var str = " Is thi\ns all th\tere is? ";
    console.log(str);
    var res = str.replace(/\s/g, "");
    console.log(res);

}

test();

