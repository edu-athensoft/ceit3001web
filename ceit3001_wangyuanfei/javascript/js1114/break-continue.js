function test(){
    // testBreak();

    // testContinue();

    testBreakLabel();

}


function testBreak(){
    console.log("=== testBreak() ===");
    var a = [0,1,2,3,4,5,6,7,8,9];
    for (x of a){
        // console.log(x);
        if( x==7 ){
            break;
        }
        console.log(x);
    }
}

function testContinue(){
    console.log("=== testContinue() ===");
    var a = [0,1,2,3,4,5,6,7,8,9];
    for (x of a){
        if( x==7 ){
            continue;
        }
        console.log(x);
    }
}

function testBreakLabel(){
    console.log("=== testBreakLabel() ===");

    var car = ["bmw","saab",'benz','honda'];
    list: {
        console.log(car[0]+"\n");
        console.log(car[1]+"\n");
        break list;
        console.log(car[2]+"\n");
        console.log(car[3]+"\n");
    }
}

test();