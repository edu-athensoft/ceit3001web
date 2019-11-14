function test(){
    var length = 5;
    var ranArray = getRandomArray(length);
    for(var i=0; i<ranArray.length; i++){
        console.log(ranArray[i]);
        // console.log(getRandomArray(length)[i]);
    }
}

function testRandom(){
    //[0,1)
    var r = Math.random();
    console.log("Math.random() ->"+r);
}

/*
   generating an array of random number by specified length
*/
function getRandomArray(length){
    var ranArray = [];
    for(var i=0; i<length; i++){
        ranArray.push(Math.random());
    }
    return ranArray;
}

test();