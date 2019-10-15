
param1 = "99";
console.log(param1);

function test(){
    // alert("test ok");
    var param1 = "value1"
    console.log(param1);

    func_name(param1);      //arguments

    // var value2 = func_name2(param1);
    // alert(func_name2(param1));

    // var f = func_name;
    // f();
}



// basic structure
function func_name(){
    // return;
    /*
    if(true){
        //
        return;
    }else{

    }*/
    alert("f() called");
}

function func_name2(){
    var value ="";
    return value;
}


function func_name3(param1){
    var p1 = param1;
}


function func_name4(param1,param2,param3){
    var p1 = param1;
    var p2 = param2;
    var p3 = param3;
}


function func_name5(param1){
    var p1 = param1;

    var value ="";
    return value;
}

function func_name6(param1,param2,param3){
    var p1 = param1;
    var p2 = param2;
    var p3 = param3;

    var value ="";
    return value;
}