function test(){
    var num = "1.9";
    validateNumber(num);
}


function validateNumber(num){
    if (/\d/.test(num)) {
        console.log(num+ " is a valid number!");
        return true;
    } else {
        alert("You have entered an invalid number!");
        return false;
    }
}

test();