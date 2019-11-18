function test() {
    // testSwitch2(0);
    // testSwitch2(1);
    // testSwitch2(2);
    // testSwitch2(3);
    // testSwitch2(4);
    // testSwitch2(5);
    // testSwitch2(6);

    // testSwitch3(0);

    testSwitch3(8);
}

function testSwitch1() {
    var today = "";
    switch (new Date().getDay()) {
        case 0:
            today = 'Sun';
            break;
        case 1:
            today = "Mon";
            break;
        case 2:
            today = "Tue";
            break;
        case 3:
            today = "Wed";
            break;
        case 4:
            today = "Thurs";
            break;
        case 5:
            today = "Fri";
            break;
        case 6:
            today = "Sat";
            break;
    }
    console.log("today=" + today);
}

function testSwitch2(day) {
    var today = "";
    switch (day) {
        case 0:
        case 6:
            today = 'Weekend';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            today = "Work Day";
            break;
    }
    console.log("today is " + today);
}


function testSwitch3(x) {
    var today = "";
    switch (x) {
        case 0:
            today = "xxx0";
            console.log("today is " + today);
        case 1:
            today = "xxx1";
            console.log("today is " + today);
        case 2:
            today = "xxx2";
            console.log("today is " + today);
        case 3:
            today = "xxx3";
            console.log("today is " + today);
            break;
        case 4:
            today = "xxx4";
            console.log("today is " + today);
        case 5:
            today = "xxx5";
            console.log("today is " + today);
            break;
        default:
            console.log("invalid input");
    }
    
}
test();

