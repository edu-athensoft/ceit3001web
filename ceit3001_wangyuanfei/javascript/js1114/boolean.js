function test(){
    // testBooleanFunc();
    // testBooleanFunc2();

    // testBoolwithValue();
    // testBoolwithoutValue();

    testBoolObj();
}

function testBooleanFunc(){
    var result = Boolean(3>2);
    console.log(result);
}

function testBooleanFunc2(){
    var result = 3>2;
    console.log(result);
}

function testBoolwithValue(){
    var b1 = Boolean(100);
    var b2 = Boolean(3.14);
    var b3 = Boolean(-15);
    var b4 = Boolean("Hello");
    var b5 = Boolean('false');
    var b6 = Boolean(1 + 7 + 3.14);

    var result = [];
    result.push(b1,b2,b3,b4,b5,b6);
    console.log(result);

    for(x of result){
        console.log(x);
    }
}

function testBoolwithoutValue(){
    /* 0 */
    var b1 = Boolean(0);
    console.log(0+"->"+b1);

    /* -0 */
    var b2 = Boolean(-0);
    console.log("-0"+"->"+b2);

    var b3 = Boolean("");
    console.log("\"\""+"->"+b3);

    var x;
    var b4 = Boolean(x);
    console.log("undefined"+"->"+b4);

    var x2 = null;
    b5 = Boolean(x2);
    console.log("null"+"->"+b5+" "+typeof null);

    b6 = Boolean(false); 
    console.log("false"+"->"+b6);

    b7 = Boolean(10 / "H")
    console.log("NaN"+"->"+b7);
    b7 = Boolean('a'-'b')
    console.log("NaN"+"->"+b7+" "+typeof ('a'-'b'));


}

function testBoolObj(){
    var x = false;
    console.log(x+"->"+typeof x);

    var y = new Boolean(false);
    console.log(y+"->"+typeof y);

    var y2 = new Boolean(false);
    console.log(y2+"->"+typeof y2);

    var y3 = y2;

    if(x==y){
        console.log("x==y");
    }else{
        console.log("x!=y");
    }

    if(x===y){
        console.log("x===y");
    }else{
        console.log("x!==y");
    }

    if(y==y2){
        console.log("y==y2");
    }else{
        console.log("y!=y2");
    }

    if(y3==y2){
        console.log("y3==y2");
    }else{
        console.log("y3!=y2");
    }

}


test();